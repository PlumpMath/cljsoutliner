(ns outliner.core
  (:require 
   [om.core :as om :include-macros true]
   [om-tools.dom :as dom :include-macros true]
   [om-tools.core :refer-macros [defcomponent]]
   [figwheel.client :as fw :include-macros true]
   [outliner.router :as router]
   [outliner.components.index :as index]
   [outliner.components.error :as error]
   ))


;; debug 
;; -----------------------------------------------------------------------------

(def DEBUG true)

(when DEBUG
  (enable-console-print!)
  (fw/watch-and-reload
   :websocket-url   "ws://192.168.7.21:3449/figwheel-ws"
   :jsload-callback (fn [] (print "reloaded"))))

;; touch events 
;; -----------------------------------------------------------------------------

(.initializeTouchEvents js/React true)

;; app state
;; -----------------------------------------------------------------------------

(def app-data
  (atom
   {:component :index
    :data [
           {
            :head {
                   :title "blog"
                   :modified "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"
                   }
            :body [
                       {
                        :attr {:selected true :name "2014" :text "2014" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"}
                        :children [
                                   {
                                    :attr {:name "November 2014" :text "November 2014" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"}  
                                    :children [
                                               {
                                                :attr {:name "November 20" :text "November 2014" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"}
                                                :children [
                                                           {
                                                            :attr {:closed true :text "test1" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"} 
                                                            :children []
                                                            }
                                                           {
                                                            :attr {:text "test2" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"} 
                                                            :children []
                                                            }
                                                           {
                                                            :attr {:text "test3" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"} 
                                                            :children []
                                                            }
                                                           ]
                                                }
                                               ]

                                    }
                                   {
                                    :attr {:name "November 2014" :text "November 2014" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"}  
                                    :children [
                                               {
                                                :attr {:name "November 20" :text "November 2014" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"}
                                                :children [
                                                           {
                                                            :attr {:text "test1" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"} 
                                                            :children []
                                                            }
                                                           {
                                                            :attr {:text "test2" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"} 
                                                            :children []
                                                            }
                                                           {
                                                            :attr {:text "test3" :created "Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"} 
                                                            :children []
                                                            }
                                                           ]
                                                }
                                               ]

                                    }
                                   ]
                        }]
            
            }
           ]
    })
  )

;; initialize
;; -----------------------------------------------------------------------------

(defcomponent main-component [data owner]
  (will-mount [_] (router/init data))
  (render [_]
          (dom/div {}
                   (om/build
                    (case (:component data)
                      :index index/component
                      :error error/component
                      )
                    (first (:data data))))))

(om/root
 main-component
 app-data
 {:target (. js/document (getElementById "app"))})
