(ns components.sidebar)

(defn app-sidebar []
  
   [:div.app-sidebar
    [:ul
     [:li [:a {:href "#/todo"} "Todo App"]]
     [:li [:a {:href "#/counter"} "Counter App"]]
     [:li [:a {:href "#/network-request"} "Network Request Example"]]]]

   )

