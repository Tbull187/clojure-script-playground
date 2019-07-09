(ns components.layout.body
  (:require [components.layout.sidebar]
            [components.todo]
            [components.counter]
            [app.state]
            [app.routes]))

(defn inc-state []
  (swap! app.state/db inc))

(defn app-body []
  [:div.app-body
   [components.layout.sidebar/app-sidebar]
   [:div.content
    (when (= (:content @app.routes/app-state) :todo) 
      [components.todo/todo-app])
    (when (= (:content @app.routes/app-state) :counter)
      [components.counter/counter])
    (when (= (:content @app.routes/app-state) :network-request)
      [components.request/main])]])