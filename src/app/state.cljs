(ns app.state
  (:require [reagent.core :as r]))

(defonce db (r/atom 100))

