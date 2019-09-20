// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.playground.request_http.request_http');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('components.playground.request_http.request_http_code');
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.request_http !== 'undefined') && (typeof components.playground.request_http.request_http !== 'undefined') && (typeof components.playground.request_http.request_http.github_users !== 'undefined')){
} else {
components.playground.request_http.request_http.github_users = reagent.core.atom.call(null,cljs.core.List.EMPTY);
}
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.request_http !== 'undefined') && (typeof components.playground.request_http.request_http !== 'undefined') && (typeof components.playground.request_http.request_http.loading !== 'undefined')){
} else {
components.playground.request_http.request_http.loading = reagent.core.atom.call(null,false);
}
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.request_http !== 'undefined') && (typeof components.playground.request_http.request_http !== 'undefined') && (typeof components.playground.request_http.request_http.show_code !== 'undefined')){
} else {
components.playground.request_http.request_http.show_code = reagent.core.atom.call(null,false);
}
components.playground.request_http.request_http.handler = (function components$playground$request_http$request_http$handler(res){
cljs.core.reset_BANG_.call(null,components.playground.request_http.request_http.loading,false);

return cljs.core.reset_BANG_.call(null,components.playground.request_http.request_http.github_users,cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(res)));
});
components.playground.request_http.request_http.fetch_data = (function components$playground$request_http$request_http$fetch_data(){
cljs.core.reset_BANG_.call(null,components.playground.request_http.request_http.loading,true);

var c__28409__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28409__auto__){
return (function (){
var f__28410__auto__ = (function (){var switch__28386__auto__ = ((function (c__28409__auto__){
return (function (state_28772){
var state_val_28773 = (state_28772[(1)]);
if((state_val_28773 === (1))){
var inst_28756 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_28757 = ["since"];
var inst_28758 = [(135)];
var inst_28759 = cljs.core.PersistentHashMap.fromArrays(inst_28757,inst_28758);
var inst_28760 = [false,inst_28759];
var inst_28761 = cljs.core.PersistentHashMap.fromArrays(inst_28756,inst_28760);
var inst_28762 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_28761);
var state_28772__$1 = state_28772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28772__$1,(2),inst_28762);
} else {
if((state_val_28773 === (2))){
var inst_28764 = (state_28772[(2)]);
var inst_28765 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_28764);
var inst_28766 = cljs.core.prn.call(null,inst_28765);
var inst_28767 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28764);
var inst_28768 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_28767);
var inst_28769 = cljs.core.prn.call(null,inst_28768);
var inst_28770 = components.playground.request_http.request_http.handler.call(null,inst_28764);
var state_28772__$1 = (function (){var statearr_28774 = state_28772;
(statearr_28774[(7)] = inst_28769);

(statearr_28774[(8)] = inst_28766);

return statearr_28774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28772__$1,inst_28770);
} else {
return null;
}
}
});})(c__28409__auto__))
;
return ((function (switch__28386__auto__,c__28409__auto__){
return (function() {
var components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto__ = null;
var components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto____0 = (function (){
var statearr_28775 = [null,null,null,null,null,null,null,null,null];
(statearr_28775[(0)] = components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto__);

(statearr_28775[(1)] = (1));

return statearr_28775;
});
var components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto____1 = (function (state_28772){
while(true){
var ret_value__28388__auto__ = (function (){try{while(true){
var result__28389__auto__ = switch__28386__auto__.call(null,state_28772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28389__auto__;
}
break;
}
}catch (e28776){if((e28776 instanceof Object)){
var ex__28390__auto__ = e28776;
var statearr_28777_28779 = state_28772;
(statearr_28777_28779[(5)] = ex__28390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28780 = state_28772;
state_28772 = G__28780;
continue;
} else {
return ret_value__28388__auto__;
}
break;
}
});
components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto__ = function(state_28772){
switch(arguments.length){
case 0:
return components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto____0.call(this);
case 1:
return components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto____1.call(this,state_28772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto__.cljs$core$IFn$_invoke$arity$0 = components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto____0;
components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto__.cljs$core$IFn$_invoke$arity$1 = components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto____1;
return components$playground$request_http$request_http$fetch_data_$_state_machine__28387__auto__;
})()
;})(switch__28386__auto__,c__28409__auto__))
})();
var state__28411__auto__ = (function (){var statearr_28778 = f__28410__auto__.call(null);
(statearr_28778[(6)] = c__28409__auto__);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28411__auto__);
});})(c__28409__auto__))
);

return c__28409__auto__;
});
components.playground.request_http.request_http.request_example = (function components$playground$request_http$request_http$request_example(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-container","div.example-container",-1958846145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Making Requests: Cljs-http"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Another library that exists for network requests is cljs-http. This library leverages Clojure's\n    core.async library."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button-primary","input.button-primary",51154301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Fetch",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.playground.request_http.request_http.fetch_data.call(null);
})], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,components.playground.request_http.request_http.github_users)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,components.playground.request_http.request_http.github_users))], null):null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.request_http.request_http.loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.loading","img.loading",-384254687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/loading.gif"], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.request_http.request_http.show_code))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.request_http.request_http_code.request_http_code], null):null)], null);
});

//# sourceMappingURL=request_http.js.map?rel=1568770627331
