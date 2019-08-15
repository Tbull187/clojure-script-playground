(ns components.layout.body
  (:require 
   [components.layout.sidebar :refer [app-sidebar]]
   [components.playground.todo :refer [todo-app]]
   
   ;[components.playground.todo :refer [todo-app]]
   ))

(defn app-body [props]
  
  (js/console.log "app-body has props:" props)
  (js/console.log "app-body :page" (:page props))
  
  [:div.app-body
   [app-sidebar]
   [:div#content
    (when (= (:page props) :todo)
      [todo-app])]])