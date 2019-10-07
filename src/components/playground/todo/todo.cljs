(ns components.playground.todo.todo
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [components.playground.todo.todo-code]))

(defonce todos (r/atom (vector)))
(defonce show-code (r/atom false))
(defonce index (r/atom 0))

(defn todo-item [id text]
  "Represents a todo-item in our system"
  {:id id
   :text text})

(defn add [todo]
  "Add a todo-item to the list"
  (if-not (str/blank? (:text todo))
    (swap! todos conj todo)))

(defn delete-todo [todo]
  "Deletes a todo-item from the list"
  (swap! todos (fn [c] (remove #{todo} c))))

(defn todo-elem [todo]
  "Represents a todo-item in our UI"
  (fn []
    [:li.list-item
     [:span (todo :text)]
     [:div.button-spacer]
     [:input.button {:type "button" :value "Delete" :on-click #(delete-todo todo)}]]))

(defn todo-form []
  (let [input-val  (r/atom "")
        reset-val #(reset! input-val "")]
    (fn []
      [:<>
       [:input
        {:type "text"
         :value @input-val
         :on-change #(reset! input-val (-> % .-target .-value))
         :on-key-down #(case (.-key %)
                         "Enter" (do
                                   (add (todo-item @index @input-val))
                                   (reset-val))
                         nil)
         :placeholder "Enter a todo..."}]
       
       [:div.btn-container
        [:input.button-primary
         {:type "button"
          :value "Add"
          :on-click (fn [] (add (todo-item @index @input-val)) (reset-val))}]
        [:div.button-spacer]
        [:input.button
         {:type "button"
          :value "Clear Todos"
          :on-click #(reset! todos [])}]]])))

(defn todo-app []
  [:div.example-container
   [:h2 "Todo"]
   
   [todo-form]
   
   [:ul#todo-list
    (for [todo @todos]
      ^{:key todo} [todo-elem todo])]

   [:input.button
    {:type "button"
     :value (str (if @show-code "Hide" "Show") " Code")
     :on-click #(reset! show-code (not @show-code))}]
   (when @show-code
     [:div "coming soon. :P"]
     )])