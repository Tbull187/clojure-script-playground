(ns components.layout.container
  (:require [components.layout.header]
            [components.layout.body]))

;; This will be the top level UI container

(defn app-container []
  [:div.app-container
   [components.layout.header/app-header]
   [components.layout.body/app-body]])