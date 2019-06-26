(ns components.core
  (:require [reagent.core :as r]))

(defonce todos (r/atom (hash-map)))
(defonce counter (r/atom 0))

(defn inc-counter []
  (swap! counter inc))

(defn append-item [item]
  ())

(defn todo-main []
   [:<>
    [:div "Counter:" @counter]
    [:input {:type "button" :value "Inc!" :on-click #(inc-counter)}]
    
    [:input {:type "text" :placeholder "Enter a todo..."}]
    [:input {:type "button" :value "Add" :on-click #(js/console.log "Fire, my dude.")}]
    [:ul#todo-list]])

(defn todo-app []
  [:div.todo-container
   [:h2 "ClojureScript TODO!"]
   [todo-main]])