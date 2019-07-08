(ns app.core
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]
            [routes.routes :as routes]))

(enable-console-print!)

;; APP STATE (doesn't get over-written on reload)
; (defonce app-state (reagent/atom {}))

(routes/testy)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(defn ^:export main []
  (routes/app-routes)
  (reagent/render [routes/current-page] 
                  (js/document.getElementById "app")))