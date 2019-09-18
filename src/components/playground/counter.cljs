(ns components.playground.counter
  (:require [reagent.core :as r]
            [components.playground.counter-code :refer [counter-code]]
            [cljsjs.highlight]
            [cljsjs.highlight.langs.clojure]))

(defn highlight-code []
  (.highlightBlock js/hljs (-> js/document (.querySelector "code"))))

(defonce counter-state (r/atom 0))
(defonce show-code (r/atom false))

(defn inc-counter []
  "Increment the counter"
  (swap! counter-state inc))

(defn clear-counter []
  "Reset counter to zero"
  (reset! counter-state 0))

(defn counter []
  [:div.example-container
   [:h2 "Counter"]
   
   [:input.button-primary {:type "button" :value "Increment" :on-click #(inc-counter)}]
   [:div.button-spacer]
   [:input.button {:type "button" :value "Clear" :on-click #(clear-counter)}]

   [:div.counter-display @counter-state]

   [:input.button {:type "button" :value (str (if @show-code "Hide" "Show") " Code") :on-click #(reset! show-code (not @show-code))}]
   (when @show-code
     [counter-code])])

