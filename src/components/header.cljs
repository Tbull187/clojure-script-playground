(ns components.header
  (:require [components.nav]))

;; TODO: Give this a proper name
(defn main []
  [:div.app-container
   [:div.app-header
    [:h1 "ClojureScript Playground"]
    [:img {:src "/resources/public/images/cljs-logo-120b.png"}]]
   [components.nav/app-nav]
   [:div#content]])