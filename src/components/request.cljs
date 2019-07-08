(ns components.request
  (:require [reagent.core :as r]
            [services.request :as request-service]))

(defonce data (r/atom {}))

(defn data-cb []
  (request-service/fetch-data))

(defn main []
  [:div.request-container
   [:p "try fetching some data with the cljs-http library:"]
   [:input 
    {:type "button" 
     :value "Fetch" 
     :on-click #(data-cb)}]
   (when (not (empty? @data))
     [:div "You gots some data"])
   [:a {:href "#/"} "Home"]])
