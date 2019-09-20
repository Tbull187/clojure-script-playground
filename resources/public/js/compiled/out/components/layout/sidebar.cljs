(ns components.layout.sidebar)

(defn set-href [route]
  (set! (.. js/window -location -href) route))

(defn app-sidebar [props]
   [:div.app-sidebar
    [:ul
     [:li { :class (if (= (:content props) :home) "active") :on-click #(set-href "#/")}
      "Home"]
     [:li { :class (if (= (:content props) :counter) "active") :on-click #(set-href "#/counter")}
      "Counter"]
     [:li { :class (if (= (:content props) :todo) "active") :on-click #(set-href "#/todo")}
      "Todo App"]
     [:li { :class (if (= (:content props) :cljs-ajax) "active") :on-click #(set-href "#/request-example-ajax")}
      "Network Request: cljs-ajax"]
     [:li { :class (if (= (:content props) :cljs-http) "active") :on-click #(set-href "#/request-example-http")}
      "Network Request: cljs-http"]
     [:li { :class (if (= (:content props) :reframe) "active") :on-click #(set-href "#/reframe")} 
      "Re-Frame"]]])

