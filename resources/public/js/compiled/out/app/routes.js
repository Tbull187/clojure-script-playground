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
var G__22942 = (new goog.history.Html5History());
goog.events.listen(G__22942,goog.history.EventType.NAVIGATE,((function (G__22942){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__22942))
);

G__22942.setEnabled(true);

return G__22942;
});
app.routes.app_routes = (function app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__22930__auto___22978 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__22943 = params__22931__auto__;
var map__22943__$1 = (((((!((map__22943 == null))))?(((((map__22943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22943):map__22943);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__22945 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22930__auto___22978);


var action__22930__auto___22979 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__22948 = params__22931__auto__;
var map__22948__$1 = (((((!((map__22948 == null))))?(((((map__22948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22948):map__22948);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"todo","todo",-1046442570));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__22950 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"todo","todo",-1046442570));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/todo",action__22930__auto___22979);


var action__22930__auto___22980 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__22953 = params__22931__auto__;
var map__22953__$1 = (((((!((map__22953 == null))))?(((((map__22953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22953):map__22953);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"counter","counter",804008177));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__22955 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"counter","counter",804008177));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/counter",action__22930__auto___22980);


var action__22930__auto___22981 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__22958 = params__22931__auto__;
var map__22958__$1 = (((((!((map__22958 == null))))?(((((map__22958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22958):map__22958);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-http","cljs-http",-395638914));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__22960 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-http","cljs-http",-395638914));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/request-example-http",action__22930__auto___22981);


var action__22930__auto___22982 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__22963 = params__22931__auto__;
var map__22963__$1 = (((((!((map__22963 == null))))?(((((map__22963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22963):map__22963);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-ajax","cljs-ajax",-1605663991));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__22965 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-ajax","cljs-ajax",-1605663991));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/request-example-ajax",action__22930__auto___22982);


var action__22930__auto___22983 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__22968 = params__22931__auto__;
var map__22968__$1 = (((((!((map__22968 == null))))?(((((map__22968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22968):map__22968);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"reframe","reframe",-49463815));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__22970 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"reframe","reframe",-49463815));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/reframe",action__22930__auto___22983);


var action__22930__auto___22984 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__22973 = params__22931__auto__;
var map__22973__$1 = (((((!((map__22973 == null))))?(((((map__22973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22973):map__22973);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"js-interop","js-interop",1572979863));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__22975 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"js-interop","js-interop",1572979863));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/javascript-interop",action__22930__auto___22984);


return app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1569206536419
