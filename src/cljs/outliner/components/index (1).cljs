(ns outliner.components.index
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            [clojure.zip :as z]
            [outliner.zippercursor :as zpc]
            ))


(defcomponent outline-head [head owner]
  (render [_]
    (dom/div 
      (dom/h1 {} (:title head))
      (dom/h2 {} (:modified head)))
  ))

(defcomponent outline-body [z-cursor owner]
  (render-state [_ state]
                (let [node (om/value z-cursor)]  
                  (dom/li {:class (if (-> node :attr :selected) "selected" "")}
                          (when (-> node :attr :selected) (pr-str (om/path node)))
                          (when (-> node :attr :text)
                            (dom/div {:class "txt"} 
                                     (-> node :attr :text)))
                          (pr-str z-cursor)
                          (dom/br {} )
                          (pr-str (zpc/children z-cursor))
                          ))
                ))

(defcomponent component [data owner]
  (render [_]
    (dom/div {:class "yeah"}
      (om/build outline-head (:head data))
      (dom/ol {:class "root"}
        (om/build outline-body (:body data))
        ))
  ))
