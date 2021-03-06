(ns outliner.components.index
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
    [goog.events :as events]
    [om.core :as om :include-macros true]
    [cljs.core.async :as async :refer [put! chan]]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    [daviferreira.MediumEditor]
    [goog.date.DateTime]
    )
  )

(def root-node [:body 0])

(defn gen-empty-text-node []
  {:attr {:closed false :text " " :created (goog.date.DateTime.)}
   :children []
   })

(defn listen [el type]
  (let [out (chan)]
    (events/listen el
                   type (fn [e]
                             ; ahh.. haxx
                             (when 
                               (and 
                                 (not= "true"
                                      (.-contentEditable (.-target e)))
                                    (or (= (.-keyCode e) 8)
                                        (= (.-keyCode e) 9)))
                               (.preventDefault e))
                             (put! out e)))
    out))

(defn get-indexless [current-path]
  (subvec current-path 0 (dec (count current-path))))

(defn get-parent [current-path] (subvec current-path 0 (- (count current-path) 2)))

(defn remove-node-from-parent [parent-children current-child-idx]
  (into (subvec parent-children 0 current-child-idx)
        (subvec parent-children (inc current-child-idx))))


(defn add-node-to-parent [parent-children current-child-idx]
  (if (empty? parent-children) 
    [(gen-empty-text-node)]
    (into (conj 
            (subvec parent-children 0 (inc current-child-idx))
            (gen-empty-text-node))
          (subvec parent-children (inc current-child-idx)))))

(def normal-keymap
  {; cursor movement ---------------------------
   [37]        :cursor-left      ;left
   [38]        :cursor-up        ;up
   [39]        :cursor-right     ;right
   [40]        :cursor-down      ;down
   ; node movement -----------------------------
   [38 :alt]   :node-up          ;alt-up
   [40 :alt]   :node-down        ;alt-down
   [9]         :right-shift-node ;tab
   [39 :alt]   :right-shift-node ;alt-right
   [9  :shift] :left-shift-node  ;shift-tab
   [37 :alt]   :left-shift-node  ;alt-left
   ; delete ------------------------------------
   [8 ]        :destroy-node     ;backspace
   [8 :alt]    :destroy-node     ;alt-bkspace
   ; visibility of children --------------------
   [32]        :toggle-closed    ;space
   ; editing -----------------------------------
   [13]        :add-new-sibbling ;shift-return
   [13 :alt]   :add-new-child    ;alt-return
   [13 :shift] :toggle-edit      ;return
   })

(def edit-keymap 
  {[27]        :toggle-edit      ;escape
   [38]        :cursor-left      ;up key
   [40]        :cursor-right     ;down key
   [13]        :add-new-sibbling ;return
   [13 :shift] :add-new-sibbling ;shift-return
   [13 :alt]   :add-new-child    ;alt-return
   [8 :alt]    :destroy-node     ;alt-bkspace
   })

(defn prev-depth-path [parent-path body]
  (loop [p parent-path]
    (let [current (get-in body p)
          children (:children current)]
      (if (or (empty? children) (:closed current)) p
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
        (= root-node p) false
        ; found a new node -> return it
        maybe-new-node maybe-new-p
        ; else, try again a level up
        :else (recur (get-parent p))))))

(defn init-editor [dom-node]
  (js/MediumEditor. 
    dom-node
    #js {:disableReturn true
         :disablePlaceholders true
         :buttons #js ["bold" "italic" "underline" "anchor"]
         }))

(defn gen-right-path [current-path current current-child-idx
                      parent-path parent-children
                      down-path
                      data]
  (cond
    ; current node has children? -> first child
    (and (not (empty? (:children current)))
         (not (:closed current))) 
    (conj current-path :children 0)
    ; not max sibling? -> go to next sibling
    (and parent-children (< current-child-idx (dec (count parent-children)))) down-path
    ; else, find next depth wise.
    :else (or (next-depth-path parent-path @data) current-path)))

(defcomponent outline-head [head owner]
  (render [_]
          (dom/div 
            (dom/h1 {} (:title head))
            (dom/h2 {} (:modified head)))
          ))

(defcomponent outline-body [node owner]
  (render-state [_ {:keys [base-path selected click-chan mode] :as state}]
                (dom/li
                  {:class (str 
                            (if (:closed node) "closed" "open")
                            " "
                            (if (= (om/path node) (concat base-path selected))
                              "selected" ""))}

                  (when (-> node :attr :text)
                    (dom/p {:class "txt"
                            :ref "txt"
                            :dangerouslySetInnerHTML #js {:__html (-> node :attr :text)}
                            :on-click (fn [e]
                                        (.stopPropagation e)
                                        (.preventDefault e)
                                        (put! click-chan {:new-path (om/path node)})
                                        )
                            } nil))

                  (when (and (not (empty? (:children node)))
                             (not (:closed node)))
                    (dom/ol
                      (om/build-all outline-body (:children node)
                                    {:state {:base-path base-path 
                                             :selected selected
                                             :click-chan click-chan
                                             :mode mode
                                             }})))
                  ))

  (did-mount [_] ; force did-update on mount
             (om/set-state! owner :mounted true))

  (did-update [_ _ _]
              (let [{:keys [mode base-path selected editor-ref]} (om/get-state owner)
                    current-node (om/path node)]
                (cond
                  ; editing, this is selected, has no editor -> make editor.
                  (and
                    (= :editing mode)
                    (= current-node (concat base-path selected))
                    (nil? (om/get-state owner :editor-ref)))
                  (do
                    (om/set-state! owner :editor-ref (init-editor (om/get-node owner "txt")))
                    (.focus (om/get-node owner "txt")))

                  ; has editor and (not editing, or not selected) -> serialize contents.
                  (and (om/get-state owner :editor-ref)
                       (or
                         (not= current-node (concat base-path selected))
                         (not= :editing mode)))
                  (om/transact! node
                                (fn [d]
                                  (let [new-txt (-> (.serialize (om/get-state owner :editor-ref))
                                                    (aget "element-0" "value")
                                                    )]
                                    (.destroy (om/get-state owner :editor-ref))
                                    (om/set-state! owner :editor-ref nil)
                                    (assoc-in d [:attr :text] new-txt))))
                  :else :no-op)
                ))

  (will-unmount [_]
                (when-let [editor (om/get-state owner :editor-ref)]
                  (.destroy editor))))

(defcomponent component [data owner]
  (init-state [_]
              (let [key-down-chan (listen js/window "keydown")
                    click-chan    (chan)
                    base-path     (om/path data)]
                (go (loop []
                      (alt!
                        ; key down events
                        ; -------------------------------------------------------------------------------
                        key-down-chan
                        ([e c]
                         (let [keyevent->command (case (om/get-state owner :mode) 
                                                   :editing edit-keymap
                                                   normal-keymap)
                               command           (keyevent->command (filter identity [(.-keyCode e)
                                                                                      (and (.-shiftKey e) :shift)
                                                                                      (and (.-altKey e)   :alt)
                                                                                      (and (.-ctrlKey e)  :ctrl)
                                                                                      (and (.-metaKey e)  :meta)
                                                                                      ]))
                               current-path      (:selected (om/get-state owner))
                               ; index of current node in parent's children
                               current-child-idx (last current-path)
                               ; is path root?
                               is-root           (= root-node current-path)
                               ; current node
                               current           (get-in @data current-path)
                               ; parent path
                               parent-path       (and (not is-root) (subvec current-path 0 (- (count current-path) 2)))
                               ; parent node
                               parent            (and parent-path (get-in @data parent-path))
                               ; children of parent
                               parent-children   (and parent (get parent :children false))
                               ;; shared paths
                               ;; ----------------------------------------------------
                               ;; up - lesser sibling in parent
                               ;;    - no change
                               up-path           (cond is-root false 
                                                       (get parent-children (dec current-child-idx) false)
                                                       (conj parent-path :children (dec current-child-idx))
                                                       :else false)
                               ;; down - greater sibling in parent
                               ;;      or no change
                               down-path         (if (get parent-children (inc current-child-idx) false)
                                                   (conj parent-path :children (inc current-child-idx))
                                                   false)
                               ]
                           (case command
                             :cursor-up
                             (when up-path (om/set-state! owner :selected up-path))
                             :cursor-down
                             (when down-path (om/set-state! owner :selected down-path))
                             :cursor-left
                             (om/set-state! owner :selected
                                            (if is-root current-path
                                              (gen-left-path current-child-idx parent-path
                                                             up-path data)))

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
                                                               up-path data)))
                               (om/transact! data
                                             (fn [d]
                                               (let [new-parent-children (remove-node-from-parent parent-children current-child-idx)]
                                                 (assoc-in d (conj parent-path :children) new-parent-children)
                                                 ))))
                             :toggle-closed
                             (when (not is-root)
                               (om/transact! data
                                             (fn [d]
                                               (if (:closed current) 
                                                 (update-in d current-path dissoc :closed)
                                                 (assoc-in d (conj current-path :closed) true)
                                                 )))
                               )

                             :right-shift-node
                             (when up-path
                               (om/transact! data
                                             (fn [d]
                                               (let [new-parent-children      (remove-node-from-parent parent-children current-child-idx)
                                                     destination-path         (conj up-path :children)
                                                     destination-children     (get-in @data destination-path)
                                                     new-destination-children (conj destination-children current)]
                                                 (om/set-state! owner :selected
                                                                (conj destination-path (dec (count new-destination-children))))
                                                 (-> d
                                                     (assoc-in (conj parent-path :children) new-parent-children)
                                                     (update-in up-path dissoc :closed)
                                                     (assoc-in destination-path             new-destination-children)
                                                     )))))
                             :left-shift-node
                             (when (and parent-path (not (= parent-path root-node)))
                               (om/transact! data
                                             (fn [d]
                                               (let [new-parent-children  (remove-node-from-parent parent-children current-child-idx)
                                                     destination-path     (get-indexless parent-path)
                                                     destination-index    (inc (last parent-path))
                                                     destination-children (get-in @data destination-path)
                                                     new-destination-children (vec (concat (subvec destination-children 0 destination-index)
                                                                                           [current]
                                                                                           (subvec destination-children destination-index)))]
                                                 (om/set-state! owner :selected
                                                                (conj destination-path destination-index))
                                                 (-> d
                                                     (assoc-in destination-path             new-destination-children)
                                                     (assoc-in (conj parent-path :children) new-parent-children)
                                                     )))))
                             :toggle-edit
                             (when (not is-root)
                               (if (= :editing (om/get-state owner :mode))
                                 (om/set-state! owner :mode :normal)
                                 (om/set-state! owner :mode :editing)))

                             :add-new-sibbling
                             (when (not is-root)
                               (let [new-sibblings (add-node-to-parent parent-children current-child-idx)
                                     new-path      (conj parent-path :children (inc current-child-idx))]
                                 (om/set-state! owner :selected new-path)
                                 (om/set-state! owner :mode :editing)
                                 (om/transact! data
                                               #(assoc-in %
                                                          (conj parent-path :children)
                                                          new-sibblings))
                                 )) 
                             :add-new-child
                             (when (not is-root)
                               (let [current-children (current :children)
                                     new-children     (conj current-children (gen-empty-text-node))
                                     new-path         (conj current-path :children (dec (count new-children)))]
                                 (om/set-state! owner :selected new-path)
                                 (om/set-state! owner :mode :editing)
                                 (om/transact! data
                                               #(assoc-in %
                                                          (conj current-path :children)
                                                          new-children))
                                 )) 

                             (recur)
                             )))

                          ; click events
                          ; -------------------------------------------------------------------------------
                          click-chan ([e c]
                                      (let 
                                        [target-path (subvec (:new-path e) (count base-path))]
                                        (om/set-state! owner :selected target-path)
                                        )))
                          (recur)))

                          ; starting state
                          ; -------------------------------------------------------------------------------
                          {:selected  root-node
                          :click-chan click-chan
                          :base-path  base-path
                          :mode :normal}))

(render-state [_ state]
              (dom/div {:class "yeah"}
                       (dom/h2 (pr-str(:selected state)))
                       (om/build outline-head (:head data))
                       (dom/ol {:class "root"}
                               (om/build-all outline-body (:body data) {:state state})
                               ))))
