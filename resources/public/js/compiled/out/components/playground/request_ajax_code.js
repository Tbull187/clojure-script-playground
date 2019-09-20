// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.playground.request_ajax_code');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.highlight');
goog.require('cljsjs.highlight.langs.clojure');
components.playground.request_ajax_code.request_ajax_code = (function components$playground$request_ajax_code$request_ajax_code(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"request-ajax-code",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return hljs.highlightBlock(document.querySelector("code"));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"\n(ns components.playground.request-ajax\n    (:require [ajax.core :refer [GET]]\n              [reagent.core :as r]))\n\n(defonce github-usernames (r/atom (list)))\n\n(defn handler [res]\n  (reset! github-usernames (map #(get % \"login\") res)))\n\n(defn fetch-data []\n  (GET \"https://api.github.com/users\" {:params {:since 135}\n                                       :response-format :json\n                                       :handler handler\n                                       :error-handler (fn [res] (js/console.log res))}))\n\n(defn request-example-ajax []\n  [:div.example-container\n    [:div \"We can make network requests that resemble JQuery's ajax using the \"\n          [:a {:href \"https://github.com/JulianBirch/cljs-ajax\"} \"cljs-ajax\"] \" library.\"]\n\n    [:input.button-primary {:type \"button\" :value \"Fetch\" :on-click #(fetch-data)}]\n    [:div.button-spacer]\n    [:input.button {:type \"button\" :value \"Show Code\" :on-click #(reset! show-code (not @show-code)) }]\n\n    (when (not-empty @github-usernames)\n      [:div \"Recent github users: \" (str @github-usernames)])])"], null)], null);
})], null));
});

//# sourceMappingURL=request_ajax_code.js.map?rel=1568770062500
