// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.playground.request_ajax');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('components.playground.request_ajax_code');
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.request_ajax !== 'undefined') && (typeof components.playground.request_ajax.github_users !== 'undefined')){
} else {
components.playground.request_ajax.github_users = reagent.core.atom.call(null,cljs.core.List.EMPTY);
}
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.request_ajax !== 'undefined') && (typeof components.playground.request_ajax.loading !== 'undefined')){
} else {
components.playground.request_ajax.loading = reagent.core.atom.call(null,false);
}
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.request_ajax !== 'undefined') && (typeof components.playground.request_ajax.show_code !== 'undefined')){
} else {
components.playground.request_ajax.show_code = reagent.core.atom.call(null,false);
}
components.playground.request_ajax.success_handler = (function components$playground$request_ajax$success_handler(res){
cljs.core.prn.call(null,cljs.core.map.call(null,(function (p1__28649_SHARP_){
return cljs.core.get.call(null,p1__28649_SHARP_,"login");
}),res));

cljs.core.reset_BANG_.call(null,components.playground.request_ajax.loading,false);

return cljs.core.reset_BANG_.call(null,components.playground.request_ajax.github_users,cljs.core.map.call(null,(function (p1__28650_SHARP_){
return cljs.core.get.call(null,p1__28650_SHARP_,"login");
}),res));
});
components.playground.request_ajax.fetch_data = (function components$playground$request_ajax$fetch_data(){

cljs.core.reset_BANG_.call(null,components.playground.request_ajax.loading,true);

return ajax.core.GET.call(null,"https://api.github.com/users",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"since","since",315379842),(135)], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),components.playground.request_ajax.success_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (res){
return console.log(res);
})], null));
});
components.playground.request_ajax.request_example_ajax = (function components$playground$request_ajax$request_example_ajax(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-container","div.example-container",-1958846145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Making Requests: Cljs-Ajax"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"We can make network requests that resemble JQuery's ajax using the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/JulianBirch/cljs-ajax"], null),"cljs-ajax"], null)," library."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button-primary","input.button-primary",51154301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Fetch",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.playground.request_ajax.fetch_data.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-spacer","div.button-spacer",1646308942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Show Code",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,components.playground.request_ajax.show_code,cljs.core.not.call(null,cljs.core.deref.call(null,components.playground.request_ajax.show_code)));
})], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,components.playground.request_ajax.github_users)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,components.playground.request_ajax.github_users))], null):null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.request_ajax.loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.loading","img.loading",-384254687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/loading.gif"], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.request_ajax.show_code))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.request_ajax_code.request_ajax_code], null):null)], null);
});

//# sourceMappingURL=request_ajax.js.map?rel=1568770062515
