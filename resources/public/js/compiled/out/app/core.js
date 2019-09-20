// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('goog.history.Html5History');
goog.require('reagent.core');
goog.require('components.app');
goog.require('app.routes');
goog.require('app.state');
cljs.core.enable_console_print_BANG_.call(null);
app.core.on_js_reload = (function app$core$on_js_reload(){
return null;
});
app.core.main = (function app$core$main(){
app.routes.app_routes.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.app.playground_app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app.state.app_state], null)], null),document.getElementById("playground-app"));
});
goog.exportSymbol('app.core.main', app.core.main);

//# sourceMappingURL=core.js.map?rel=1568770680867
