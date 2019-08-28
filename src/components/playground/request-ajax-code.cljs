(ns components.playground.request-ajax-code)

(defn request-ajax-code []
  [:pre
    [:code
"
(ns components.playground.request-ajax
    (:require [ajax.core :refer [GET]]
              [reagent.core :as r]))

(defonce github-usernames (r/atom (list)))

(defn handler [res]
  (reset! github-usernames (map #(get % \"login\") res)))

(defn fetch-data []
  (GET \"https://api.github.com/users\" {:params {:since 135}
                                       :response-format :json
                                       :handler handler
                                       :error-handler (fn [res] (js/console.log res))}))

(defn request-example-ajax []
  [:div.example-container
    [:div \"We can make network requests that resemble JQuery's ajax using the \"
          [:a {:href \"https://github.com/JulianBirch/cljs-ajax\"} \"cljs-ajax\"] \" library.\"]

    [:input.button-primary {:type \"button\" :value \"Fetch\" :on-click #(fetch-data)}]
    [:div.button-spacer]
    [:input.button {:type \"button\" :value \"Show Code\" :on-click #(reset! show-code (not @show-code)) }]

    (when (not-empty @github-usernames)
      [:div \"Recent github users: \" (str @github-usernames)])])"]])