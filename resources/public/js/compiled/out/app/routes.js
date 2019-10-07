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
var G__47177 = (new goog.history.Html5History());
goog.events.listen(G__47177,goog.history.EventType.NAVIGATE,((function (G__47177){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__47177))
);

G__47177.setEnabled(true);

return G__47177;
});
app.routes.app_routes = (function app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__22930__auto___47213 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__47178 = params__22931__auto__;
var map__47178__$1 = (((((!((map__47178 == null))))?(((((map__47178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47178):map__47178);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__47180 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22930__auto___47213);


var action__22930__auto___47214 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__47183 = params__22931__auto__;
var map__47183__$1 = (((((!((map__47183 == null))))?(((((map__47183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47183):map__47183);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"todo","todo",-1046442570));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__47185 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"todo","todo",-1046442570));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/todo",action__22930__auto___47214);


var action__22930__auto___47215 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__47188 = params__22931__auto__;
var map__47188__$1 = (((((!((map__47188 == null))))?(((((map__47188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47188):map__47188);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"counter","counter",804008177));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__47190 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"counter","counter",804008177));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/counter",action__22930__auto___47215);


var action__22930__auto___47216 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__47193 = params__22931__auto__;
var map__47193__$1 = (((((!((map__47193 == null))))?(((((map__47193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47193):map__47193);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-http","cljs-http",-395638914));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__47195 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-http","cljs-http",-395638914));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/request-example-http",action__22930__auto___47216);


var action__22930__auto___47217 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__47198 = params__22931__auto__;
var map__47198__$1 = (((((!((map__47198 == null))))?(((((map__47198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47198):map__47198);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-ajax","cljs-ajax",-1605663991));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__47200 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"cljs-ajax","cljs-ajax",-1605663991));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/request-example-ajax",action__22930__auto___47217);


var action__22930__auto___47218 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__47203 = params__22931__auto__;
var map__47203__$1 = (((((!((map__47203 == null))))?(((((map__47203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47203):map__47203);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"reframe","reframe",-49463815));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__47205 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"reframe","reframe",-49463815));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/reframe",action__22930__auto___47218);


var action__22930__auto___47219 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__47208 = params__22931__auto__;
var map__47208__$1 = (((((!((map__47208 == null))))?(((((map__47208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47208):map__47208);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"js-interop","js-interop",1572979863));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__47210 = params__22931__auto__;
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"js-interop","js-interop",1572979863));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/javascript-interop",action__22930__auto___47219);


return app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1569211512339
