(ns components.playground.request_http.request_http
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [components.playground.request-http.request-http-code :refer [request-http-code]]))

(defonce github-users (r/atom (list)))
(defonce loading      (r/atom false))
(defonce show-code    (r/atom false))

;; TODO: check the response and handle errors, either here or in the body of fetch-data
(defn handler [res]
  (reset! loading false)
  (reset! github-users (map :login (:body res))))

(defn fetch-data []
  (reset! loading true)
  (go (let [response (<! (http/get "https://api.github.com/users"
                                   {:with-credentials? false
                                    :query-params {"since" 135}}))]
        (prn (:status response))
        (prn (map :login (:body response)))
        (handler response))))

(defn request-example []
  [:div.example-container
   [:h2 "Making Requests: Cljs-http"]

   [:p "Another library that exists for network requests is cljs-http. This library leverages Clojure's
    core.async library."]

   [:input.button-primary
    {:type "button"
     :value "Fetch"
     :on-click #(fetch-data)}]


   (when (not-empty @github-users)
     [:div (str @github-users)])
   (when @loading
     [:img.loading {:src "/images/loading.gif"}])
   (when @show-code
     [request-http-code])])
