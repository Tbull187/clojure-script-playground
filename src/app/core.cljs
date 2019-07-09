(ns app.core
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]
            [routes.routes :as routes]
            [components.layout.container]))

(enable-console-print!)

;; APP STATE used to live here
; (defonce app-state (reagent/atom {}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

; (defn ^:export main []
;   (routes/app-routes)
;   (reagent/render [routes/current-page] 
;                   (js/document.getElementById "app")))

(defn ^:export main []
  (routes/app-routes)
  (reagent/render [components.layout.container/app-container]
                  (js/document.getElementById "app")))