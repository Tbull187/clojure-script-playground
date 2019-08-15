(ns app.core
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]

            [secretary.core :as secretary :refer-macros [defroute]]

            [goog.events :as events]
            [goog.history.EventType :as EventType]

            [components.app                :refer [playground-app]]
            [components.playground.todo    :refer [todo-app]]
            [components.playground.counter :refer [counter]]
            [components.playground.request :refer [request-example]]))


(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)



;; SCHEMA
;; {
;;  :page "symbol- The name of the current page"
;; }
(defonce app-state (reagent/atom {:test "hello state"}))

(defonce content-div (js/document.getElementById "content"))

(js/console.log content-div)
;;;;; ROUTING ;;;;;

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
    (pr "setting :page to :todo")
    (swap! app-state assoc :page :todo))
  (defroute "/counter" []
    (swap! app-state assoc :page :counter))
  (defroute "/network-request" []
    (swap! app-state assoc :page :request-example))

  (hook-browser-navigation!))

; I have no idea what is actually going on here... 
(defmulti current-page #(@app-state :page))

(defmethod current-page :home [] [playground-app])
(defmethod current-page :todo [] [todo-app])
(defmethod current-page :counter [] [counter])
(defmethod current-page :network-request [] [request-example])
(defmethod current-page :default [] [:div "Wat? dis da default page dum dum"])


(defn ^:export main []

  (app-routes)
  (reagent/render [playground-app 
                   {:state app-state}]
                  (js/document.getElementById "app")))