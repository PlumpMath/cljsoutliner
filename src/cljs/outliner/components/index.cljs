(ns outliner.components.index
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require

   [goog.events :as events]
   [om.core :as om :include-macros true]
   [cljs.core.async :as async :refer [put! chan]]
   [om-tools.core :refer-macros [defcomponent]]
   [om-tools.dom :as dom :include-macros true]
   ))


(defcomponent outline-head [head owner]
  (render [_]
          (dom/div 
           (dom/h1 {} (:title head))
           (dom/h2 {} (:modified head)))
          ))

(defcomponent outline-body [node owner]
  (render-state [_ {:keys [root-path selected click-chan] :as state}]
                (dom/li
                 {:class (if (= (om/path node) (concat root-path selected))
                           "selected"
                           "")
                  :on-click (fn [e]
                              (.stopPropagation e)
                              (.preventDefault e)
                              (put! click-chan {:new-path (om/path node)})
                              )}
                 
                 (when (-> node :attr :text)
                   (dom/div {:class "txt"} 
                            (-> node :attr :text)))
                 (dom/ol
                  (om/build-all outline-body (:children node) {:state state}))
                 ))) 

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type (fn [e]
                             ; ahh.. haxx
                             (when (= (.-keyCode e) 8) (.preventDefault e))
                             (put! out e)))
    out))

(defn get-indexless [current-path]
  (subvec current-path 0 (dec (count current-path))))

(defn get-parent [current-path] (subvec current-path 0 (- (count current-path) 2)))

(def keyevent->command
  ; takes keycode, shift / alt / ctrl-state
  ; returns action
  {[37] :cursor-left
   [38] :cursor-up
   [39] :cursor-right
   [40] :cursor-down
   [38 :alt] :node-up
   [40 :alt] :node-down
   [8] :destroy-node
   })

(defn prev-depth-path [parent-path body]
  (loop [p parent-path]
    (let [current (get-in body p)
          children (:children current)]
      (if (empty? children) p
          (recur (conj p :children (dec (count children))))))))


(defn gen-left-path [current-child-idx parent-path
                     up-path data]
    (cond
        ; 0th sibling? -> parent
        (zero? current-child-idx) parent-path
        ; else, deepest of parent sibling recursively
        :else (prev-depth-path up-path @data)
        ))

(defn next-depth-path [parent-path body]
  (loop [p parent-path]
    (let [current-p-idx  (last p)
          maybe-new-p    (conj (get-indexless p) (inc current-p-idx))
          maybe-new-node (get-in body maybe-new-p false)
          ]
      (cond
       ; at the root node -> bottomed out..
       (= [:body 0] p) false
       ; found a new node -> return it
       maybe-new-node maybe-new-p
       ; else, try again a level up
       :else (recur (get-parent p))))))

(defn gen-right-path [current-path current current-child-idx
                      parent-path parent-children
                      down-path
                      data]
  (cond
   ; current node has children? -> first child
   (not (empty? (:children current))) (conj current-path :children 0)
   ; not max sibling? -> go to next sibling
   (and parent-children (< current-child-idx (dec (count parent-children)))) down-path
   ; else, find next depth wise.
   :else (or (next-depth-path parent-path @data) current-path)))

(defcomponent component [data owner]
  (init-state [_]
              (let [key-down-chan (listen js/window "keydown")
                    click-chan (chan)
                    root-path (om/path data)]
                (go (loop []
                      (alt!
                        key-down-chan
                        ([e c]
                         
                         (let [command           (keyevent->command (filter identity [(.-keyCode e)
                                                                                      (and (.-shiftKey e) :shift)
                                                                                      (and (.-altKey e)   :alt)
                                                                                      (and (.-ctrlKey e)  :ctrl)
                                                                                      (and (.-metaKey e)  :meta)
                                                                                      ]))
                               current-path      (:selected (om/get-state owner))
                               ; is path root?
                               is-root           (= [:body 0] current-path)
                               ; current node
                               current           (get-in @data current-path)
                               ; parent path
                               parent-path       (subvec current-path 0 (- (count current-path) 2))
                               ; parent node
                               parent            (get-in @data parent-path)
                               ; children of parent
                               parent-children   (get parent :children false)
                               ; index of current node in parent's children
                               current-child-idx (last current-path)
                               ;; shared paths
                               ;; ----------------------------------------------------
                               ;; up - lesser sibling in parent
                               ;;    - no change
                               up-path (cond is-root current-path
                                             (get parent-children (dec current-child-idx) false)
                                                (conj parent-path :children (dec current-child-idx))
                                             :else false)
                               ;; down - greater sibling in parent
                               ;;      or no change
                               down-path (if (get parent-children (inc current-child-idx) false)
                                             (conj parent-path :children (inc current-child-idx))
                                             false)
                               ]
                           
                           (case command
                             nil (recur)
                             :cursor-up
                               (om/set-state! owner :selected (if up-path up-path current-path))
                             :cursor-down
                               (om/set-state! owner :selected (if down-path down-path current-path))
                             :cursor-left
                               (om/set-state! owner :selected
                                              (if is-root current-path
                                                  (gen-left-path current-child-idx parent-path
                                                                 up-path data)
                                                  ))
                             
                             :cursor-right
                               (om/set-state! owner :selected
                                              (gen-right-path current-path current current-child-idx
                                                              parent-path parent-children
                                                              down-path
                                                              data))
                             :node-up
                             (when up-path
                               (let [swap-node (get-in @data up-path)]
                                 (om/set-state! owner :selected up-path)
                                 (om/transact! data
                                               (fn [d]
                                                 (-> d
                                                     (assoc-in current-path swap-node)
                                                     (assoc-in up-path current))
                                                 ))))
                                
                             :node-down
                             (when down-path
                               (let [swap-node (get-in @data down-path)]
                                 (om/set-state! owner :selected down-path)
                                 (om/transact! data
                                               (fn [d]
                                                 (-> d
                                                     (assoc-in current-path swap-node)
                                                     (assoc-in down-path current))
                                                 ))))
                             :destroy-node
                             (when (not is-root)
                               (om/set-state! owner :selected
                                              (if is-root current-path
                                                  (gen-left-path current-child-idx parent-path
                                                                 up-path data)
                                                  ))
                               (om/transact! data
                                             (fn [d]
                                               (let [new-parent-children (vec (concat (subvec parent-children 0 current-child-idx)
                                                                                      (subvec parent-children (inc current-child-idx))))]
                                                 (print (pr-str (conj parent-path :children)))
                                                 
                                                 (assoc-in d (conj parent-path :children) new-parent-children)
                                                 ))))
                             
                             )))
                        click-chan ([e c]
                                    (om/set-state! owner :selected (subvec (:new-path e)
                                                                           (count root-path)))))
                      (recur)))
                {:selected   [:body 0]
                 :click-chan click-chan
                 :root-path  root-path}))
  (render-state [_ state]
                (print (pr-str data))
                (dom/div {:class "yeah"}
                         (dom/h2 (pr-str(:selected state)))
                         (om/build outline-head (:head data))
                         (dom/ol {:class "root"}
                                 (om/build-all outline-body (:body data) {:state state})
                                 ))))
