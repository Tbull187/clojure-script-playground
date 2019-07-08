(ns app.core
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]
            [components.todo]
            [secretary.core :as secretary
             :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            ;[routes.routes :as routes]
            ))

(enable-console-print!)

;; APP STATE (doesn't get over-written on reload)
(defonce app-state (reagent/atom {}))

;; ROUTING
(defn hook-browser-navigation! []
  (doto (Html5History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (swap! app-state assoc :page :home))

  (defroute "/about" []
    (swap! app-state assoc :page :about))

  (hook-browser-navigation!))

(defn home []
  [:div [:h1 "Home Page"]
   [:a {:href "#/about"} "about page"]])

(defn about []
  [:div [:h1 "About Page"]
   [:a {:href "#/"} "home page"]])

(defmulti current-page #(@app-state :page))
(defmethod current-page :home []
  [components.todo/todo-app])
(defmethod current-page :about []
  [about])
(defmethod current-page :default []
  [:div])



(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(defn ^:export main []
  (app-routes)
  (reagent/render [current-page] 
                  (js/document.getElementById "app")))

; (reagent/render [components.todo/todo-app]
;  (js/document.getElementById "app"))