(ns components.core
  (:require [reagent.core :as r]))

(def my-vec [1 2 3])

(defn append-item [item]
  ())

(defn todo-main []
   [:<>
    [:input {:type "text" :placeholder "Enter a todo..."}]
    [:input {:type "button" :value "Add" :on-click #(println "click!")}]
    [:ul#todo-list]])

(defn todo-app []
  [:div.todo-container
   [:h2 "ClojureScript TODO!"]
   [todo-main]])