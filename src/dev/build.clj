(ns build
  (:require [shadow.cljs.build :as cljs]
            [shadow.cljs.node :as node]
            [shadow.devtools.server :as devtools]
            [clojure.java.io :as io]))

(defn project-setup [opts]
  (-> (cljs/init-state)
      (cljs/set-build-options
        {:public-dir (io/file "demo" "js")
         :public-path "/demo/js"})
      (cljs/set-build-options opts)
      (cljs/find-resources-in-classpath)
      (cljs/configure-module :base ['cljs.core] #{})
      (cljs/configure-module :demo ['demo.app] #{:base})
      (cljs/configure-module :worker1 ['demo.worker1] #{:base} {:web-worker true})
      ))

(defn dev [& args]
  (-> (project-setup {})
      (cljs/enable-source-maps)
      (cljs/compile-modules)
      (cljs/flush-unoptimized)))

(defn production [& args]
  (-> (project-setup {:optimizations :advanced})
      (cljs/compile-modules)
      (cljs/closure-optimize)
      (cljs/flush-modules-to-disk)
      ))
