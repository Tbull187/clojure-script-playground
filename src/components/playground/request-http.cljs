(ns components.playground.request-http
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            ;[services.request :as request-service]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defonce data (r/atom {}))

(defn fetch-data []
  (go (let [response (<! (http/get "https://api.github.com/users"
                                   {:with-credentials? false
                                    :query-params {"since" 135}}))]
        (js/console.log "yeet yeet!")
        (prn (:status response))
        (prn (map :login (:body response))))))

(defn data-cb []
  (fetch-data))

(defn request-example []
  [:div.example-container
   [:p "try fetching some data with the cljs-http library:"]

   [:input.button-primary
    {:type "button"
     :value "Fetch"
     :on-click #(data-cb)}]

   (when (not (empty? @data))
     [:div "You gots some data"])])
