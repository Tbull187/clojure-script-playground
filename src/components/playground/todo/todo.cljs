(ns components.playground.todo.todo
  (:require [reagent.core :as r]))

; Todos is a vector of todo-items
(defonce todos (r/atom (vector)))
(defonce show-code (r/atom false))
(defonce index (r/atom 0))

(defn todo-item [id text]
  {:id id
   :text text})

(defn add [todo]
  "Add a todo to the list"
  (prn "adding todo with id:" (todo :id) "and text:" (todo :text))
  (if-not (clojure.string/blank? (:text todo))
    (swap! todos conj todo)))

(defn delete-todo [todo]
  ;swap! takes a function that recieves the current value, which you can use for updating.
  (swap! todos (fn [c] (remove #{todo} c))))


(defn todo-elem [todo]
  (fn []
    [:li.list-item
     [:span (todo :text)]
     [:div.button-spacer]
     [:input.button {:type "button" :value "Delete" :on-click #(delete-todo todo)}]]))

(defn todo-form []
  (let [input-val        (r/atom "")
        reset-val #(reset! input-val "")]
    (fn []
      [:<>
       [:input
        {:type "text"
         :value @input-val
         :on-change #(reset! input-val (-> % .-target .-value))
         :on-key-down #(case (.-key %)
                        ;  "Enter" (do (add-todo @val)(reset-val))
                         "Enter" (do 
                                   (add (todo-item @index @input-val)) 
                                   (reset-val))
                         nil)
         :placeholder "Enter a todo..."}]

       [:div.button-spacer]

       [:input.button-primary
        {:type "button"
         :value "Add"
         :on-click (fn [] (add (todo-item @index @input-val)) (reset-val))}]

       [:div.button-spacer]

       [:input.button
        {:type "button"
         :value "Clear Todos"
         :on-click #(reset! todos [])}]
       
       [:ul#todo-list
        (for [todo @todos]
          ^{:key todo} [todo-elem todo])]])))


(defn todo-app []
  [:div.example-container
   [:h2 "Todo"]
   
   [todo-form]
   [:div#users]

   [:input.button
    {:type "button"
     :value (str (if @show-code "Hide" "Show") " Code")
     :on-click #(reset! show-code (not @show-code))}]
   (when @show-code
     [:div "coming soon. :P"])])