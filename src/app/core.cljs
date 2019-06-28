(ns app.core
    (:require [reagent.core]
              [components.todo]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(reagent.core/render [components.todo/todo-app]
 (js/document.getElementById "app"))