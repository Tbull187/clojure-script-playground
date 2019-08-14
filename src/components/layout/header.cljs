(ns components.layout.header)

(defn app-header []
  [:div.app-header
   [:h1 "ClojureScript Playground"]
   [:img {:src "/resources/public/images/cljs-logo-120b.png"}]])