(ns components.layout.body
  (:require [components.layout.sidebar]))

(defn app-body []
  [:div.app-body
   [components.layout.sidebar/app-sidebar]
   [:div#content]])