(defproject outliner "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://github.com/USERNAME/outliner"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3126"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ; om
                 [org.omcljs/om "0.8.8"]
                 [prismatic/om-tools "0.3.11"]
                 ; debug
                 [figwheel "0.2.5-SNAPSHOT"]
                 ]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.2.5-SNAPSHOT"]]
  :figwheel {:http-server-root "public" :port 3449
             :css-dirs ["resources/public/css"]
             }
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src" "dev_src"]
                        :compiler {:output-to "resources/public/js/compiled/outliner.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :optimizations :none
                                   :main outliner.dev
                                   :asset-path "js/compiled/out"
                                   :source-map true
                                   :source-map-timestamp true
                                   :cache-analysis true }}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/main-min.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
