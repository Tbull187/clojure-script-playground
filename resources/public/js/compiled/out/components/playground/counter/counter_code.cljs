(ns components.playground.counter.counter-code
  (:require [reagent.core :as r]
            [cljsjs.highlight]
            [cljsjs.highlight.langs.clojure]))

(defn counter-code []
  (r/create-class
   {:display-name "counter-code"
    
    :component-did-mount
    (fn []
      (.highlightBlock js/hljs (-> js/document (.querySelector "code"))))
    
    :reagent-render
    (fn []
      [:pre [:code
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
    [:div.counter-display @counter-state]])"]])}))