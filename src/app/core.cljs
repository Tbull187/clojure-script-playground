(ns app.core
  (:import goog.history.Html5History)
  (:require [reagent.core :as reagent]
            [routes.routes :refer [app-routes]]
            [components.app :refer [playground-app]]))

(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)


(defn ^:export main []
  (app-routes)
  (reagent/render [playground-app]
                  (js/document.getElementById "app")))