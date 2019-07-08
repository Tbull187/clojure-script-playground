(ns components.navigation)

; (defn main-2 []
;   [:div
;    [:h1 "ClojureScript Playground"]
;    [:ul
;     [:li [:a {:href "#/todo"} "Todo App"]]
;     [:li [:a {:href "#/counter"} "Counter App"]]
;     [:li [:a {:href "#/network-request"} "Network Request Example"]]]])


(defn main []
  [:div.app-container
   [:div.app-header]
   [:h1 "ClojureScript Playground"]
   [:img {:src "/resources/public/images/cljs-logo-120b.png"}]
   [:ul
    [:li [:a {:href "#/todo"} "Todo App"]]
    [:li [:a {:href "#/counter"} "Counter App"]]
    [:li [:a {:href "#/network-request"} "Network Request Example"]]]])