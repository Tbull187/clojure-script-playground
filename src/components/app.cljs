(ns components.app
  (:require [components.layout.header :refer [app-header]]
            [components.layout.body :refer [app-body]]))

;; top level UI container

(defn playground-app []
  [:div.app-container
   [app-header]
   [app-body]])