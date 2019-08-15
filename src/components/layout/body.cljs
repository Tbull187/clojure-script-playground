(ns components.layout.body

  (:require [components.layout.sidebar :refer [app-sidebar]]
            [components.playground.todo :refer [todo-app]]
            [components.layout.welcome :refer [welcome-page]]
            [components.playground.counter :refer [counter]]
            [components.playground.request :refer [request-example]]))

(defn app-body [props]
  
  (js/console.log "app-body has props:" props)
  (js/console.log "app-body :page" (:page props))
  
  [:div.app-body
   [app-sidebar]
   [:div#content
    (when (= (:page props) :home)
      [welcome-page])
    (when (= (:page props) :todo)
      [todo-app])
    (when (= (:page props) :counter)
      [counter])
    (when (= (:page props) :request-example)
      [request-example])]])
