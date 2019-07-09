(ns components.container
  (:require [components.header]
            [components.body]))

;; This will be the top level UI container

(defn app-container []
  [:div.app-container
   [components.header/app-header]
   [components.body/app-body]])