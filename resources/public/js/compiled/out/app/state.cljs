(ns app.state
  (:require [reagent.core :as r]))

;; SCHEMA
;; {
;;  :content     [symbol] The name of the current page
;; }

;; TODO:
;; Create a map of CONSTANTS to be used as page name/active link

(defonce app-state (r/atom {:test "hello state"}))

