(defproject outliner "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://github.com/USERNAME/outliner"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[compojure "1.1.8"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2496"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ; om
                 [om "0.8.0-beta5"]
                 [prismatic/om-tools "0.3.6"]
                 ; routing
                 [secretary "1.2.1"]
                 ; debug
                 [figwheel "0.2.0-SNAPSHOT"]
                 ]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.2.0-SNAPSHOT"]]
  :figwheel {:http-server-root "public" :port 3449
             :css-dirs ["resources/public/css"]
             }
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/main.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/main-min.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
