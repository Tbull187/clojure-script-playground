(ns components.playground.reframe
  (:require [re-frame.core]))

(defn reframe []
  [:div.example-container
    [:h2 "Re-Frame"]
    [:div "Its (kinda) like Redux for ClojureScript!"]])