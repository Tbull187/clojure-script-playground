(ns routes.routes
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary :refer-macros [defroute]]
            
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            
            [components.header]
            [components.todo]
            [components.counter]
            [components.request]))


(js/console.log "routes init")

;; SCHEMA
;; {
;;  :page "symbol- The name of the current page"
;; }
(defonce app-state (reagent/atom {}))

(defonce content-div (js/document.getElementById "content"))



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

;; going to end up refactoring this...
(defmulti current-page #(@app-state :page))
(defmethod current-page :home [] [components.header/main])
(defmethod current-page :todo [] [components.todo/todo-app])
(defmethod current-page :counter [] [components.counter/counter])
(defmethod current-page :network-request [] [components.request/main])
(defmethod current-page :default [] [:div "Wat? dis da default page dum dum"])

