(ns components.playground.counter-code)

(defn counter-code []
  [:pre
    [:code
"
(ns components.playground.counter
  (:require [reagent.core :as r]))

(defonce counter-state (r/atom 0))

(defn inc-counter []
  \"Increment the counter\"
  (swap! counter-state inc))

(defn clear-counter []
  \"Reset counter to zero\"
  (reset! counter-state 0))

(defn counter []
  [:div.example-container
    [:input.button-primary {:type \"button\" :value \"Increment\" :on-click #(inc-counter)}]
    [:div.button-spacer]
    [:input.button {:type \"button\" :value \"Clear\" :on-click #(clear-counter)}]
    [:div.counter-display @counter-state]])"]])