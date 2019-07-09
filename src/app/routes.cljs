(ns app.routes
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary :refer-macros [defroute]]
            
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            
            [components.layout.container]            
            [components.todo]
            [components.counter]
            [components.request]))


(js/console.log "routes init")

;; SCHEMA
;; {
;;  :content "symbol- The content component that should be displayed in div#content"
;; }
(defonce app-state (reagent/atom {}))


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
    (swap! app-state assoc :content :home))

  ;; When we match the route /todo
    ;; display the todo-app component in the div#content
  
  (defroute "/todo" []
    (swap! app-state assoc :content :todo))

  (defroute "/counter" []
    (swap! app-state assoc :content :counter))

  (defroute "/network-request" []
    (swap! app-state assoc :content :network-request))

  (hook-browser-navigation!))


(defmulti current-page #(@app-state :content))
(defmethod current-page :home [] [components.layout.container/app-container])
(defmethod current-page :todo [] [components.todo/todo-app])
(defmethod current-page :counter [] [components.counter/counter])
(defmethod current-page :network-request [] [components.request/main])
(defmethod current-page :default [] [:div "Wat? dis da default page dum dum"])

