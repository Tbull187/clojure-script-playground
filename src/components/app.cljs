(ns components.app
  (:require [components.layout.header :refer [app-header]]
            [components.layout.body :refer [app-body]]))

(defn playground-app [props]
  (js/console.log "playground-app props:" props)
  ; (js/console.log "props.state", (deref (:state props)))
  ; (js/console.log "props.state.test", (:test (deref (:state props))))
  
  [:div.playground-app
   [app-header]
   [app-body 
    {:content 
     (:content (deref (:state props)))}]])