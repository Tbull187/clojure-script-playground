(ns components.playground.todo.todo_code
  (:require [reagent.core :as r]
            [cljsjs.highlight]
            [cljsjs.highlight.langs.clojure]))

; (defn todo-code []
;   (r/create-class
;    {:display-name "todo-code"

;     :component-did-mount
;     (fn []
;       (.highlightBlock js/hljs (-> js/document (.querySelector "code"))))

;     :reagent-render
;     (fn []
;       [:pre [:code "todo code"]])}))