(ns components.container)

(defn main []
  [:div 
   [:div "I am the master div"]
   [:a {:href "#/about"} "About"]
   [:a {:href "#/todo"} "Todo Page"]])