(ns components.playground.welcome)

(defn welcome-page []
  [:div.example-container
   [:h1 "Welcome"]
   [:p "Welcome internet traveller to the ClojureScript Playground, a collection of
    interactive code examples that demonstrate common web-development patterns implemented in ClojureScript. 
    Select a topic from the sidenav to begin your adventure."]
   [:h2 "What is ClojureScript?"]
   [:p "Somewhat confusingly, ClojureScript is not a language itself but rather a
    compiler! The ClojureScript compiler takes code written in the programming language
    Clojure, and outputs javascript. For more official overview visit " [:a {:href "www.clojurescript.org" :target "_blank"} "www.clojurescript.org"]]])