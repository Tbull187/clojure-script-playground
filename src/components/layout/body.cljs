(ns components.layout.body
  (:require [components.layout.sidebar :refer [app-sidebar]]))

(defn app-body []
  [:div.app-body
   [app-sidebar]
   [:div#content]])