(ns components.playground.welcome)

(defn welcome-page []
  [:div.example-container
   [:h1 "Welcome"]
   [:p "Welcome internet traveller, you have stumbled upon the ClojureScript Playground, a collection of
   humble ClojureScript code examples. Select an example from the sidebar to begin your adventure... "]
   [:h2 "What is ClojureScript?"]
   [:p "lorum ipsum"]])