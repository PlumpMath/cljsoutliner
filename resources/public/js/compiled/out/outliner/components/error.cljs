(ns outliner.components.error
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            ))

(defcomponent component [data owner]
  (render [_]
          (dom/div {:class "yeah"}
                  "error")))
