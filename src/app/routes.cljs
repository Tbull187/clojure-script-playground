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

  (defroute "/request-example-http" []
    (swap! app-state assoc :content :cljs-http))

  (defroute "/request-example-ajax" []
    (swap! app-state assoc :content :cljs-ajax))

  (defroute "/reframe" []
    (swap! app-state assoc :content :reframe))

  (defroute "/javascript-interop" []
    (swap! app-state assoc :content :js-interop))

  (hook-browser-navigation!))