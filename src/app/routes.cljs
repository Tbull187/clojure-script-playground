(ns app.routes
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [app.state :refer [app-state]]))

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
  
  (defroute "/todo" []
    (swap! app-state assoc :content :todo))

  (defroute "/counter" []
    (swap! app-state assoc :content :counter))

  (defroute "/network-request" []
    (swap! app-state assoc :content :request-example))

  (defroute "/request-example-cljs-ajax" []
    (swap! app-state assoc :content :cljs-ajax))

  (hook-browser-navigation!))