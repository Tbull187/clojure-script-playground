(ns components.playground.request-ajax
    (:require [ajax.core :refer [GET]]
              [reagent.core :as r]
              [clojure.string :refer [blank?]]))

(defonce data (r/atom ""))

(defn handler [res]
  (js/console.log "handling res" res)
  ;;(js/console.log (map :login (:body response)))
  (reset! data (str res)))

(defn fetch-data []
  (GET "https://api.github.com/users" {:params {:since 135}
                                       :handler handler
                                       :error-handler (fn [res] (js/console.log res))}))

(defn request-example-ajax []
  [:div.example-container
    [:div "We can make network requests that resemble JQuery's ajax using the cljs-ajax library."]
    [:input.button-primary {:type "button" :value "Fetch" :on-click #(fetch-data)}]


    (when (not (blank? @data))
      [:div "Your data:" @data])])