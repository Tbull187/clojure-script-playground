(ns components.playground.request-ajax
    (:require [ajax.core :refer [GET]]
              [reagent.core :as r]
              [components.playground.request-ajax-code :refer [request-ajax-code]]))

(defonce github-users (r/atom (list)))
(defonce loading      (r/atom false))
(defonce show-code    (r/atom false))

(defn success-handler [res]
  (prn (map #(get % "login") res))
  (reset! loading false)
  (reset! github-users (map #(get % "login") res))
  )

(defn fetch-data []
  "Get recent github logins"
  (reset! loading true)
  (GET "https://api.github.com/users" {:params {:since 135}
                                       :response-format :json
                                       :handler success-handler
                                       :error-handler (fn [res] (js/console.log res))}))

(defn request-example-ajax []
  [:div.example-container
    [:div "We can make network requests that resemble JQuery's ajax using the "
          [:a {:href "https://github.com/JulianBirch/cljs-ajax"} "cljs-ajax"] " library."]

    [:input.button-primary {:type "button" :value "Fetch" :on-click #(fetch-data)}]
    [:div.button-spacer]
    [:input.button {:type "button" :value "Show Code" :on-click #(reset! show-code (not @show-code)) }]

    (when (not-empty @github-users)
      [:div (str @github-users)])
    (when @loading
      [:img.loading {:src "/images/loading.gif"}])
    (when @show-code
      [request-ajax-code])])