(ns components.body
  (:require [components.sidebar]))

(defn app-body []
  [:div.app-body
   [components.sidebar/app-sidebar]
   [:div#content]])