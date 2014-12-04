(ns outliner.router
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljs.core.async :refer [put! chan <! alts!]]
            )
  (:import goog.history.Html5History))

;; Routes
;; =============================================================================

(defn setup-routes [data]
  (secretary/set-config! :prefix "#")

  (defroute route-index "/" []
    (om/transact! data #(assoc % 
                               :component :index
                               :error-msg nil
                               )))

  (defroute catch-all "*" []
    (om/transact! data #(assoc % 
                               :component :error
                               :error-msg nil
                               ))))


;; History
;; =============================================================================

(def history (Html5History.))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
                   (fn [e] (put! out e) false))
    out))

(defn handle-routed-link [e]
  (.stopPropagation e)
  (.preventDefault e)
  (let [el (.-target e)
        title (.getAttribute el "title")
        href (.getAttribute el "href")]
    (. history (setToken href title))))

(defn setup-history []
  (let [navigation (listen history EventType/NAVIGATE)]
    (go
      (loop []
        (let [token (.-token (<! navigation))]
          (print token)
          (secretary/dispatch! token)) (recur))))
  (.setPathPrefix history "#")
  (.setEnabled history true))

;; Init
;; =============================================================================

(defn init [data]
  (setup-routes data)
  (setup-history))
