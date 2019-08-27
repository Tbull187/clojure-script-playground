(ns components.app
  (:require [components.layout.header :refer [app-header]]
            [components.layout.body :refer [app-body]]))

(defn playground-app [props]
  ;(js/console.log "playground-app props:" props)

  [:div.playground-app
   [app-header]

   ;; We're extracting :state from props, dereferencing state, then extracting the value of content,
   ;; and passing it into app-body with the key :content
   [app-body {:content (:content (deref (:state props)))}]])