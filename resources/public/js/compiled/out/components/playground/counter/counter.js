// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.playground.counter.counter');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('components.playground.counter.counter_code');
goog.require('cljsjs.highlight');
goog.require('cljsjs.highlight.langs.clojure');
components.playground.counter.counter.highlight_code = (function components$playground$counter$counter$highlight_code(){
return hljs.highlightBlock(document.querySelector("code"));
});
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.counter !== 'undefined') && (typeof components.playground.counter.counter !== 'undefined') && (typeof components.playground.counter.counter.counter_state !== 'undefined')){
} else {
components.playground.counter.counter.counter_state = reagent.core.atom.call(null,(0));
}
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.counter !== 'undefined') && (typeof components.playground.counter.counter !== 'undefined') && (typeof components.playground.counter.counter.show_code !== 'undefined')){
} else {
components.playground.counter.counter.show_code = reagent.core.atom.call(null,false);
}
components.playground.counter.counter.inc_counter = (function components$playground$counter$counter$inc_counter(){

return cljs.core.swap_BANG_.call(null,components.playground.counter.counter.counter_state,cljs.core.inc);
});
components.playground.counter.counter.clear_counter = (function components$playground$counter$counter$clear_counter(){

return cljs.core.reset_BANG_.call(null,components.playground.counter.counter.counter_state,(0));
});
components.playground.counter.counter.counter = (function components$playground$counter$counter$counter(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-container","div.example-container",-1958846145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Counter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button-primary","input.button-primary",51154301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Increment",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.playground.counter.counter.inc_counter.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-spacer","div.button-spacer",1646308942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Clear",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.playground.counter.counter.clear_counter.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.counter-display","div.counter-display",-4109346),cljs.core.deref.call(null,components.playground.counter.counter.counter_state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),[(cljs.core.truth_(cljs.core.deref.call(null,components.playground.counter.counter.show_code))?"Hide":"Show")," Code"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,components.playground.counter.counter.show_code,cljs.core.not.call(null,cljs.core.deref.call(null,components.playground.counter.counter.show_code)));
})], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.counter.counter.show_code))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.counter.counter_code.counter_code], null):null)], null);
});

//# sourceMappingURL=counter.js.map?rel=1568770394149
