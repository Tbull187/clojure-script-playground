(ns components.todo
  (:require [reagent.core :as r]
            [components.counter]))

(defonce todos (r/atom (vector)))

(defn todo-item [text]
  (fn []
    [:li text]))

(defn add-todo [todo-text]
  (js/console.log "Adding Todo Item with text:" todo-text)
  (swap! todos assoc todo-text))

(defn todo-main []
   [:<>
    [components.counter/counter]
    [:input {:type "text" :placeholder "Enter a todo..."}]
    [:input {:type "button" :value "Add" :on-click #(add-todo "I am a todo added d Y n A m I c A l L y!")}]
    [:ul#todo-list @todos]])

(defn todo-app []
  [:div.todo-container
   [:h2 "ClojureScript TODO!"]
   [todo-main]])