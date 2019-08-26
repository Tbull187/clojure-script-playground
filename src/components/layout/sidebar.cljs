(ns components.layout.sidebar)

(defn app-sidebar []

   [:div.app-sidebar
    [:ul
     [:li { :on-click #(set! (.. js/window -location -href) "#/")}
      "Home"]
     [:li { :on-click #(set! (.. js/window -location -href) "#/counter")}
      "Counter"]
     [:li { :on-click #(set! (.. js/window -location -href) "#/todo") }
      "Todo App"]
     [:li  { :on-click #(set! (.. js/window -location -href) "#/network-request")}
      "Network Request Example"]]])

