(ns components.app
  (:require [components.header :refer [app-header]]
            [components.body :refer [app-body]]))

;; top level UI container

(defn playground-app []
  [:div.app-container
   [app-header]
   [app-body]])