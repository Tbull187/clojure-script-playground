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
var G__21380__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21381__i = 0, G__21381__a = new Array(arguments.length -  0);
while (G__21381__i < G__21381__a.length) {G__21381__a[G__21381__i] = arguments[G__21381__i + 0]; ++G__21381__i;}
  args = new cljs.core.IndexedSeq(G__21381__a,0,null);
} 
return G__21380__delegate.call(this,args);};
G__21380.cljs$lang$maxFixedArity = 0;
G__21380.cljs$lang$applyTo = (function (arglist__21382){
var args = cljs.core.seq(arglist__21382);
return G__21380__delegate(args);
});
G__21380.cljs$core$IFn$_invoke$arity$variadic = G__21380__delegate;
return G__21380;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21383__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21384__i = 0, G__21384__a = new Array(arguments.length -  0);
while (G__21384__i < G__21384__a.length) {G__21384__a[G__21384__i] = arguments[G__21384__i + 0]; ++G__21384__i;}
  args = new cljs.core.IndexedSeq(G__21384__a,0,null);
} 
return G__21383__delegate.call(this,args);};
G__21383.cljs$lang$maxFixedArity = 0;
G__21383.cljs$lang$applyTo = (function (arglist__21385){
var args = cljs.core.seq(arglist__21385);
return G__21383__delegate(args);
});
G__21383.cljs$core$IFn$_invoke$arity$variadic = G__21383__delegate;
return G__21383;
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

//# sourceMappingURL=debug.js.map?rel=1567734170903
