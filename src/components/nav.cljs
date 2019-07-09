(ns components.nav)

(defn app-nav []
  [:div.app-nav 
    [:ul
     [:li [:a {:href "#/todo"} "Todo App"]]
     [:li [:a {:href "#/counter"} "Counter App"]]
     [:li [:a {:href "#/network-request"} "Network Request Example"]]]])

