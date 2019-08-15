(ns components.app
  (:require [components.layout.header :refer [app-header]]
            [components.layout.body :refer [app-body]]))

;; top level UI container

(defn playground-app [props]
  (js/console.log "playground-app has props:" props)
  (js/console.log "props.state", (deref (:state props)))
  (js/console.log "props.state.test", (:test (deref (:state props))))
  
  [:div.app-container
   [app-header]
   [app-body 
    {:page 
     (:page (deref (:state props)))}]])