(ns components.layout.body
  (:require [components.layout.sidebar :refer [app-sidebar]]
            [components.playground.todo :refer [todo-app]]
            [components.layout.welcome :refer [welcome-page]]
            [components.playground.counter :refer [counter]]
            [components.playground.request :refer [request-example]]))

(defn app-body [props]
  (js/console.log "app-body props:" props)
  (js/console.log "app-body (:content props)" (:content props))
  
  [:div.app-body
   [app-sidebar]
   [:div#content
    (when (= (:content props) :home)
      [welcome-page])
    (when (= (:content props) :todo)
      [todo-app])
    (when (= (:content props) :counter)
      [counter])
    (when (= (:content props) :request-example)
      [request-example])
    (when (= (:content props) :cljs-http)
      [:div "yeet yeet"])]])
