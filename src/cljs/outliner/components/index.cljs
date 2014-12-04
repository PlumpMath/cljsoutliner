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

(def keycode->direction {37 :left 38 :up 39 :right 40 :down})

(defn prev-depth-path [parent-path body]
  (loop [p (subvec parent-path 2)]
    (let [current (get-in body pn)
          children (:children current)]
      (if (empty? children) p
          (recur (conj p :children (dec (count children))))))))

(defn next-depth-path [parent-path body root-path]
  (loop [p (subvec parent-path 2)]
    (let [trimmed (subvec p (- (count p 2)))
          idx (last trimmed)
          new-p (conj (subvec (dec (count trimmed))) (inc idx))
          ]
      (cond
       (= root-path trimmed) root-path
       (get-in body new-p) new-p
       :else (recur trimmed)) 
      )))

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
                               
                                        ; new paths ----------------------------------------------------
                               
                               ;; up - lesser sibling in parent
                               ;;    - no change
                               up-path (cond is-root current-path
                                             (get parent-children (dec current-child-idx) false)
                                                (conj parent-path :children (dec current-child-idx))
                                             :else current-path)
                               
                               ;; down - greater sibling in parent
                               ;;      - no change
                               down-path (if (get parent-children (inc current-child-idx) false)
                                           (conj parent-path :children (inc current-child-idx))
                                           current-path)
                               
                               ;; left - up path != current path -> up-path
                               ;;      - deepest path in parent
                               left-path (cond
                                          is-root current-path
                                          (not (= current-path up-path)) (prev-depth-path up-path @data)
                                          (zero? current-child-idx) parent-path
                                          :else (prev-depth-path parent-path @data)
                                          )
                               
                               ;; right - current node has children? -> first child
                               ;;       - down-path != current path -> down-path
                               ;;       - up next test.
                               right-path
                               (cond
                                (and (not (-> current :attr :closed)) (not (empty? (:children current))))
                                (conj current-path :children 0)
                                (not (= down-path current-path))
                                down-path
                                :else current-path
                               )
                               ]
                           (print "---------------------")
                           (print current-path)
                           (print parent-path)
                           (print parent-children)
                           (print parent)
                           (print (str "up: " up-path))
                           (print (str "down: " down-path))
                           (om/set-state! owner :selected
                                          (case (keycode->direction (.-keyCode e))
                                            :up up-path
                                            :down down-path
                                            ; :left left-path
                                            ; :right right-path
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
                         (om/build outline-head (:head data))
                         (dom/ol {:class "root"}
                                 (om/build-all outline-body (:body data) {:state state})
                                 ))))
