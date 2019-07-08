(ns components.navigation)

(defn main []
  [:div
   [:h1 "ClojureScript Playground"]
   [:ul
    [:li [:a {:href "#/todo"} "Todo App"]]
    [:li [:a {:href "#/counter"} "Counter App"]]
    [:li [:a {:href "#/network-request"} "Network Request Example"]]]])