// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('goog.history.Html5History');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('app.state');
app.routes.hook_browser_navigation_BANG_ = (function app$routes$hook_browser_navigation_BANG_(){
var G__37500 = (new goog.history.Html5History());
goog.events.listen(G__37500,goog.history.EventType.NAVIGATE,((function (G__37500){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__37500))
);

G__37500.setEnabled(true);

return G__37500;
});
app.routes.app_routes = (function app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__26246__auto___37531 = (function (params__26247__auto__){
if(cljs.core.map_QMARK_.call(null,params__26247__auto__)){
var map__37501 = params__26247__auto__;
var map__37501__$1 = (((((!((map__37501 == null))))?(((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37501):map__37501);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26247__auto__)){
var vec__37503 = params__26247__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26246__auto___37531);


var action__26246__auto___37532 = (function (params__26247__auto__){
if(cljs.core.map_QMARK_.call(null,params__26247__auto__)){
var map__37506 = params__26247__auto__;
var map__37506__$1 = (((((!((map__37506 == null))))?(((((map__37506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37506):map__37506);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"todo","todo",-1046442570));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26247__auto__)){
var vec__37508 = params__26247__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"todo","todo",-1046442570));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/todo",action__26246__auto___37532);


var action__26246__auto___37533 = (function (params__26247__auto__){
if(cljs.core.map_QMARK_.call(null,params__26247__auto__)){
var map__37511 = params__26247__auto__;
var map__37511__$1 = (((((!((map__37511 == null))))?(((((map__37511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37511):map__37511);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"counter","counter",804008177));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26247__auto__)){
var vec__37513 = params__26247__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"counter","counter",804008177));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/counter",action__26246__auto___37533);


var action__26246__auto___37534 = (function (params__26247__auto__){
if(cljs.core.map_QMARK_.call(null,params__26247__auto__)){
var map__37516 = params__26247__auto__;
var map__37516__$1 = (((((!((map__37516 == null))))?(((((map__37516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37516):map__37516);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-http","cljs-http",-395638914));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26247__auto__)){
var vec__37518 = params__26247__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-http","cljs-http",-395638914));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/request-example-http",action__26246__auto___37534);


var action__26246__auto___37535 = (function (params__26247__auto__){
if(cljs.core.map_QMARK_.call(null,params__26247__auto__)){
var map__37521 = params__26247__auto__;
var map__37521__$1 = (((((!((map__37521 == null))))?(((((map__37521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37521):map__37521);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-ajax","cljs-ajax",-1605663991));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26247__auto__)){
var vec__37523 = params__26247__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-ajax","cljs-ajax",-1605663991));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/request-example-ajax",action__26246__auto___37535);


var action__26246__auto___37536 = (function (params__26247__auto__){
if(cljs.core.map_QMARK_.call(null,params__26247__auto__)){
var map__37526 = params__26247__auto__;
var map__37526__$1 = (((((!((map__37526 == null))))?(((((map__37526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37526):map__37526);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"reframe","reframe",-49463815));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26247__auto__)){
var vec__37528 = params__26247__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"reframe","reframe",-49463815));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/reframe",action__26246__auto___37536);


return app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1567734624581
