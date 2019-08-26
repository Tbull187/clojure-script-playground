(ns components.layout.header)

(defn app-header []
  [:div.app-header
   [:img.logo {:src "/images/cljs-logo-120b.png"}]
   [:h1.heading "ClojureScript Playground"]])