// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__38708__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38709__i = 0, G__38709__a = new Array(arguments.length -  0);
while (G__38709__i < G__38709__a.length) {G__38709__a[G__38709__i] = arguments[G__38709__i + 0]; ++G__38709__i;}
  args = new cljs.core.IndexedSeq(G__38709__a,0,null);
} 
return G__38708__delegate.call(this,args);};
G__38708.cljs$lang$maxFixedArity = 0;
G__38708.cljs$lang$applyTo = (function (arglist__38710){
var args = cljs.core.seq(arglist__38710);
return G__38708__delegate(args);
});
G__38708.cljs$core$IFn$_invoke$arity$variadic = G__38708__delegate;
return G__38708;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38711__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38712__i = 0, G__38712__a = new Array(arguments.length -  0);
while (G__38712__i < G__38712__a.length) {G__38712__a[G__38712__i] = arguments[G__38712__i + 0]; ++G__38712__i;}
  args = new cljs.core.IndexedSeq(G__38712__a,0,null);
} 
return G__38711__delegate.call(this,args);};
G__38711.cljs$lang$maxFixedArity = 0;
G__38711.cljs$lang$applyTo = (function (arglist__38713){
var args = cljs.core.seq(arglist__38713);
return G__38711__delegate(args);
});
G__38711.cljs$core$IFn$_invoke$arity$variadic = G__38711__delegate;
return G__38711;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1569211502006
