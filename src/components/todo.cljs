(ns components.todo
  (:require [reagent.core :as r]
            [components.counter]
            [services.request :as service]))

; Todos is just a list of strings
(defonce todos (r/atom (vector)))

(defn add-todo [todo-text]
  (js/console.log "Adding Todo Item with text:" todo-text)
  (swap! todos conj todo-text))

(defn delete-todo [todo-text]
  (js/console.log "Deleting todo:" todo-text)
  ;swap! takes a function that recieves the current value, which you can use for updating.
  (swap! todos (fn [c] (remove #{todo-text} c))))


(defn todo-elem [text]
  (fn []
    [:li.list-item
     [:span text]
     [:div.button-spacer]
     [:input {:type "button" :value "Delete" :on-click #(delete-todo text)}]]))

(defn todo-form []
  (let [val        (r/atom "")
        reset-val #(reset! val "")]
    (fn []
      [:<>
       [:input
        {:type "text"
         :value @val
         :on-change #(reset! val (-> % .-target .-value))
         :on-key-down #(case (.-key %)
                         "Enter" (do (add-todo @val)(reset-val)) 
                         nil)
         :placeholder "Enter a todo..."}]

       [:div.button-spacer]

       [:input
        {:type "button"
         :value "Add"
         :on-click (fn [] (add-todo @val) (reset-val))}]

       [:div.button-spacer]

       [:input
        {:type "button"
         :value "Clear Todos"
         :on-click #(reset! todos [])}]
       [:ul#todo-list
        (for [todo @todos]
          ^{:key todo} [todo-elem todo])]])))


(defn todo-app []
  [:div.todo-container
   [:h2 "ClojureScript Playground!"]
   [:h3 "Counter:"]
   [components.counter/counter]
   [:h3 "Todo:"]
   [todo-form]
   [:input {:type "button" :value "fetch-data" :on-click #(service/fetch-data)}]
   [:div#users]
   [:a {:href "#/about"} "About Page"]])