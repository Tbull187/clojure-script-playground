(ns components.layout.body
  (:require [components.layout.sidebar :refer [app-sidebar]]
            [components.playground.todo.todo :refer [todo-app]]
            [components.playground.welcome :refer [welcome-page]]
            [components.playground.counter.counter :refer [counter]]

            [components.playground.request_http.request_http :refer [request-example]]
            [components.playground.request_ajax.request_ajax :refer [request-example-ajax]]

            [components.playground.reframe :refer [reframe]]

            [components.playground.js_interop.main :refer [js-interop]]))

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
      [request-example]
      )
    (when (= (:content props) :cljs-ajax)
      [request-example-ajax])
    (when (= (:content props) :reframe)
      [reframe])
    (when (= (:content props) :js-interop)
      [js-interop])]])
