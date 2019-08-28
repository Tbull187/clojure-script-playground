(ns components.layout.body
  (:require [components.layout.sidebar :refer [app-sidebar]]
            [components.playground.todo :refer [todo-app]]
            [components.layout.welcome :refer [welcome-page]]
            [components.playground.counter :refer [counter]]
            [components.playground.request-http :refer [request-example]]
            [components.playground.request-ajax :refer [request-example-ajax]]))

(defn app-body [props]
  [:div.app-body
   [app-sidebar {:content (:content props)}]
   [:div#content
    (when (= (:content props) :home)
      [welcome-page])
    (when (= (:content props) :todo)
      [todo-app])
    (when (= (:content props) :counter)
      [counter])
    (when (= (:content props) :cljs-http)
      [request-example])
    (when (= (:content props) :cljs-ajax)
      [request-example-ajax])]])
