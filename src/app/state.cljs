(ns app.state
  (:require [reagent.core :as r]))

;; SCHEMA
;; {
;;  :content symbol- The name of the current page
;; }
(defonce app-state (r/atom {:test "hello state"}))

