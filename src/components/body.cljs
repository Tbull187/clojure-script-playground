(ns components.body
  (:require [components.sidebar :refer [app-sidebar]]))

(defn app-body []
  [:div.app-body
   [app-sidebar]
   [:div#content]])