(ns components.playground.reframe
  (:require [re-frame.core]))

(defn reframe []
  [:div.example-container
    [:h1 "Im h`1"]
    [:h2 "Re-Frame"]
    [:div "ello ello"]])