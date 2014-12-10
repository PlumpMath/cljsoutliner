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
                              (print (om/path node))
                              (put! click-chan {:new-path (om/path node)})
                              )}
                 (pr-str (om/path node))
                 (when (-> node :attr :text)
                   (dom/div {:class "txt"} 
                            (-> node :attr :text)))
                 (dom/ol
                  (om/build-all outline-body (:children node) {:state state}))
                 ))) 

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type #(put! out %))
    out))

(def keycode->command
  {37 :left
   38 :up
   39 :right
   40 :down
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
    (let [grandparent-p  (subvec p 0 (- (count p) 2))
          current-p-idx  (last grandparent-p)
          maybe-new-p    (conj (subvec grandparent-p 0 (dec (count grandparent-p))) (inc current-p-idx))
          maybe-new-node (get-in body maybe-new-p false)
          ]
      (cond
       ; at the root node -> bottomed out..
       (= [:body 0] grandparent-p) false
       ; found a new node -> return it
       maybe-new-node maybe-new-p
       ; else, try again a level up
       :else (recur grandparent-p)))))

(defn gen-right-path [current-path current current-child-idx
                      parent-path parent-children
                      down-path
                      data]
  (cond
   ; not max sibling? -------------------------------- go to next sibling
   (< current-child-idx (dec (count parent-children))) down-path
   ; current node has children? ---------------------- first child
   (not (empty? (:children current)))                  (conj current-path :children 0)
   ; else, find next depth wise.
   :else (or (next-depth-path parent-path @data) current-path)
   ))

(defcomponent component [data owner]
  (init-state [_]
              (let [key-chan (listen js/window "keydown")
                    click-chan (chan)
                    root-path (om/path data)]
                (go (loop []
                      (alt!
                        key-chan
                        ([e c]
                         (let [current-path      (:selected (om/get-state owner))
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
                               ; shared paths ----------------------------------------------------
                               ;; up - lesser sibling in parent
                               ;;    - no change
                               up-path (cond is-root current-path
                                             (get parent-children (dec current-child-idx) false)
                                                (conj parent-path :children (dec current-child-idx))
                                             :else current-path)
                               ;; down - greater sibling in parent
                               ;;      or no change
                               down-path (if (get parent-children (inc current-child-idx) false)
                                           (conj parent-path :children (inc current-child-idx))
                                           current-path)
                               
                               ]
                           (om/set-state! owner :selected
                                          (case (keycode->command (.-keyCode e))
                                            :up up-path
                                            :down down-path
                                            :left (if is-root current-path
                                                      (gen-left-path current-child-idx parent-path
                                                                     up-path data))
                                            
                                            ;; right 
                                            :right (gen-right-path current-path current current-child-idx
                                                                   parent-path parent-children
                                                                   down-path
                                                                   data)
                                            current-path
                                            ))))
                        click-chan ([e c]
                                    (om/set-state! owner :selected (subvec (:new-path e)
                                                                           (count root-path)))))
                      (recur)))
                {:selected   [:body 0]
                 :click-chan click-chan
                 :root-path  root-path}))
  (render-state [_ state]
                (dom/div {:class "yeah"}
                         (dom/h2 (pr-str(:selected state)))
                         (om/build outline-head (:head data))
                         (dom/ol {:class "root"}
                                 (om/build-all outline-body (:body data) {:state state})
                                 ))))
