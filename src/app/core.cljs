(ns app.core
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]
            [components.todo]
            [components.request]
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
    ;; sets the key :page in app-state to the symbol :home
    (swap! app-state assoc :page :home))

  (defroute "/todo" []
    (swap! app-state assoc :page :todo))

  (defroute "/counter" []
    (swap! app-state assoc :page :counter))

  (defroute "/network-request" []
    (swap! app-state assoc :page :network-request))

  (hook-browser-navigation!))

(defn home []
  [:div 
   [:h1 "ClojureScript Playground"]
   [:ul
    [:li [:a {:href "#/todo"} "Todo App"]]
    [:li [:a {:href "#/counter"} "Counter App"]]
    [:li [:a {:href "#/network-request"} "Network Request Example"]]]])

(defmulti current-page #(@app-state :page))
(defmethod current-page :home []
  [home])
(defmethod current-page :todo []
  [components.todo/todo-app])
(defmethod current-page :counter []
  [components.counter/counter])
(defmethod current-page :network-request []
  [components.request/main])

(defmethod current-page :default []
  [:div "Wat? dis da default page dum dum"])



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