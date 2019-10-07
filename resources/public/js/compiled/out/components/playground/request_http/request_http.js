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

var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__){
return (function (state_46900){
var state_val_46901 = (state_46900[(1)]);
if((state_val_46901 === (1))){
var inst_46884 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_46885 = ["since"];
var inst_46886 = [(135)];
var inst_46887 = cljs.core.PersistentHashMap.fromArrays(inst_46885,inst_46886);
var inst_46888 = [false,inst_46887];
var inst_46889 = cljs.core.PersistentHashMap.fromArrays(inst_46884,inst_46888);
var inst_46890 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_46889);
var state_46900__$1 = state_46900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46900__$1,(2),inst_46890);
} else {
if((state_val_46901 === (2))){
var inst_46892 = (state_46900[(2)]);
var inst_46893 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_46892);
var inst_46894 = cljs.core.prn.call(null,inst_46893);
var inst_46895 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_46892);
var inst_46896 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_46895);
var inst_46897 = cljs.core.prn.call(null,inst_46896);
var inst_46898 = components.playground.request_http.request_http.handler.call(null,inst_46892);
var state_46900__$1 = (function (){var statearr_46902 = state_46900;
(statearr_46902[(7)] = inst_46897);

(statearr_46902[(8)] = inst_46894);

return statearr_46902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46900__$1,inst_46898);
} else {
return null;
}
}
});})(c__22787__auto__))
;
return ((function (switch__22764__auto__,c__22787__auto__){
return (function() {
var components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto__ = null;
var components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto____0 = (function (){
var statearr_46903 = [null,null,null,null,null,null,null,null,null];
(statearr_46903[(0)] = components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto__);

(statearr_46903[(1)] = (1));

return statearr_46903;
});
var components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto____1 = (function (state_46900){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_46900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e46904){if((e46904 instanceof Object)){
var ex__22768__auto__ = e46904;
var statearr_46905_46907 = state_46900;
(statearr_46905_46907[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46908 = state_46900;
state_46900 = G__46908;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto__ = function(state_46900){
switch(arguments.length){
case 0:
return components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto____0.call(this);
case 1:
return components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto____1.call(this,state_46900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto____0;
components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto____1;
return components$playground$request_http$request_http$fetch_data_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__))
})();
var state__22789__auto__ = (function (){var statearr_46906 = f__22788__auto__.call(null);
(statearr_46906[(6)] = c__22787__auto__);

return statearr_46906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__))
);

return c__22787__auto__;
});
components.playground.request_http.request_http.request_example = (function components$playground$request_http$request_http$request_example(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-container","div.example-container",-1958846145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Making Requests: Cljs-http"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Another library that exists for network requests is cljs-http. This library leverages Clojure's\n    core.async library."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button-primary","input.button-primary",51154301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Fetch",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.playground.request_http.request_http.fetch_data.call(null);
})], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,components.playground.request_http.request_http.github_users)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,components.playground.request_http.request_http.github_users))], null):null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.request_http.request_http.loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.loading","img.loading",-384254687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/loading.gif"], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.request_http.request_http.show_code))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.request_http.request_http_code.request_http_code], null):null)], null);
});

//# sourceMappingURL=request_http.js.map?rel=1569211511946
