// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.playground.counter_code');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.highlight');
goog.require('cljsjs.highlight.langs.clojure');
components.playground.counter_code.counter_code = (function components$playground$counter_code$counter_code(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"counter-code",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return hljs.highlightBlock(document.querySelector("code"));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"\n(ns components.playground.counter\n  (:require [reagent.core :as r]))\n\n(defonce counter-state (r/atom 0))\n\n(defn inc-counter []\n  \"Increment the counter\"\n  (swap! counter-state inc))\n\n(defn clear-counter []\n  \"Reset counter to zero\"\n  (reset! counter-state 0))\n\n(defn counter []\n  [:div.example-container\n    [:input.button-primary {:type \"button\" :value \"Increment\" :on-click #(inc-counter)}]\n    [:div.button-spacer]\n    [:input.button {:type \"button\" :value \"Clear\" :on-click #(clear-counter)}]\n    [:div.counter-display @counter-state]])"], null)], null);
})], null));
});

//# sourceMappingURL=counter_code.js.map?rel=1568769302904
