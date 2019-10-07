// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__45930 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__45931 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__45931;

try{try{var seq__45932 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45933 = null;
var count__45934 = (0);
var i__45935 = (0);
while(true){
if((i__45935 < count__45934)){
var vec__45942 = cljs.core._nth.call(null,chunk__45933,i__45935);
var effect_key = cljs.core.nth.call(null,vec__45942,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45942,(1),null);
var temp__5718__auto___45964 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___45964)){
var effect_fn_45965 = temp__5718__auto___45964;
effect_fn_45965.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__45966 = seq__45932;
var G__45967 = chunk__45933;
var G__45968 = count__45934;
var G__45969 = (i__45935 + (1));
seq__45932 = G__45966;
chunk__45933 = G__45967;
count__45934 = G__45968;
i__45935 = G__45969;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__45932);
if(temp__5720__auto__){
var seq__45932__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45932__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__45932__$1);
var G__45970 = cljs.core.chunk_rest.call(null,seq__45932__$1);
var G__45971 = c__4550__auto__;
var G__45972 = cljs.core.count.call(null,c__4550__auto__);
var G__45973 = (0);
seq__45932 = G__45970;
chunk__45933 = G__45971;
count__45934 = G__45972;
i__45935 = G__45973;
continue;
} else {
var vec__45945 = cljs.core.first.call(null,seq__45932__$1);
var effect_key = cljs.core.nth.call(null,vec__45945,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45945,(1),null);
var temp__5718__auto___45974 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___45974)){
var effect_fn_45975 = temp__5718__auto___45974;
effect_fn_45975.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__45976 = cljs.core.next.call(null,seq__45932__$1);
var G__45977 = null;
var G__45978 = (0);
var G__45979 = (0);
seq__45932 = G__45976;
chunk__45933 = G__45977;
count__45934 = G__45978;
i__45935 = G__45979;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21461__auto___45980 = re_frame.interop.now.call(null);
var duration__21462__auto___45981 = (end__21461__auto___45980 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21462__auto___45981,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21461__auto___45980);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__45930;
}} else {
var seq__45948 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45949 = null;
var count__45950 = (0);
var i__45951 = (0);
while(true){
if((i__45951 < count__45950)){
var vec__45958 = cljs.core._nth.call(null,chunk__45949,i__45951);
var effect_key = cljs.core.nth.call(null,vec__45958,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45958,(1),null);
var temp__5718__auto___45982 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___45982)){
var effect_fn_45983 = temp__5718__auto___45982;
effect_fn_45983.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__45984 = seq__45948;
var G__45985 = chunk__45949;
var G__45986 = count__45950;
var G__45987 = (i__45951 + (1));
seq__45948 = G__45984;
chunk__45949 = G__45985;
count__45950 = G__45986;
i__45951 = G__45987;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__45948);
if(temp__5720__auto__){
var seq__45948__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45948__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__45948__$1);
var G__45988 = cljs.core.chunk_rest.call(null,seq__45948__$1);
var G__45989 = c__4550__auto__;
var G__45990 = cljs.core.count.call(null,c__4550__auto__);
var G__45991 = (0);
seq__45948 = G__45988;
chunk__45949 = G__45989;
count__45950 = G__45990;
i__45951 = G__45991;
continue;
} else {
var vec__45961 = cljs.core.first.call(null,seq__45948__$1);
var effect_key = cljs.core.nth.call(null,vec__45961,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45961,(1),null);
var temp__5718__auto___45992 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___45992)){
var effect_fn_45993 = temp__5718__auto___45992;
effect_fn_45993.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__45994 = cljs.core.next.call(null,seq__45948__$1);
var G__45995 = null;
var G__45996 = (0);
var G__45997 = (0);
seq__45948 = G__45994;
chunk__45949 = G__45995;
count__45950 = G__45996;
i__45951 = G__45997;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45998 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45999 = null;
var count__46000 = (0);
var i__46001 = (0);
while(true){
if((i__46001 < count__46000)){
var map__46006 = cljs.core._nth.call(null,chunk__45999,i__46001);
var map__46006__$1 = (((((!((map__46006 == null))))?(((((map__46006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46006):map__46006);
var effect = map__46006__$1;
var ms = cljs.core.get.call(null,map__46006__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46006__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45998,chunk__45999,count__46000,i__46001,map__46006,map__46006__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45998,chunk__45999,count__46000,i__46001,map__46006,map__46006__$1,effect,ms,dispatch))
,ms);
}


var G__46010 = seq__45998;
var G__46011 = chunk__45999;
var G__46012 = count__46000;
var G__46013 = (i__46001 + (1));
seq__45998 = G__46010;
chunk__45999 = G__46011;
count__46000 = G__46012;
i__46001 = G__46013;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__45998);
if(temp__5720__auto__){
var seq__45998__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45998__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__45998__$1);
var G__46014 = cljs.core.chunk_rest.call(null,seq__45998__$1);
var G__46015 = c__4550__auto__;
var G__46016 = cljs.core.count.call(null,c__4550__auto__);
var G__46017 = (0);
seq__45998 = G__46014;
chunk__45999 = G__46015;
count__46000 = G__46016;
i__46001 = G__46017;
continue;
} else {
var map__46008 = cljs.core.first.call(null,seq__45998__$1);
var map__46008__$1 = (((((!((map__46008 == null))))?(((((map__46008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46008):map__46008);
var effect = map__46008__$1;
var ms = cljs.core.get.call(null,map__46008__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46008__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45998,chunk__45999,count__46000,i__46001,map__46008,map__46008__$1,effect,ms,dispatch,seq__45998__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45998,chunk__45999,count__46000,i__46001,map__46008,map__46008__$1,effect,ms,dispatch,seq__45998__$1,temp__5720__auto__))
,ms);
}


var G__46018 = cljs.core.next.call(null,seq__45998__$1);
var G__46019 = null;
var G__46020 = (0);
var G__46021 = (0);
seq__45998 = G__46018;
chunk__45999 = G__46019;
count__46000 = G__46020;
i__46001 = G__46021;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__46022 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__46023 = null;
var count__46024 = (0);
var i__46025 = (0);
while(true){
if((i__46025 < count__46024)){
var event = cljs.core._nth.call(null,chunk__46023,i__46025);
re_frame.router.dispatch.call(null,event);


var G__46026 = seq__46022;
var G__46027 = chunk__46023;
var G__46028 = count__46024;
var G__46029 = (i__46025 + (1));
seq__46022 = G__46026;
chunk__46023 = G__46027;
count__46024 = G__46028;
i__46025 = G__46029;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__46022);
if(temp__5720__auto__){
var seq__46022__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46022__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46022__$1);
var G__46030 = cljs.core.chunk_rest.call(null,seq__46022__$1);
var G__46031 = c__4550__auto__;
var G__46032 = cljs.core.count.call(null,c__4550__auto__);
var G__46033 = (0);
seq__46022 = G__46030;
chunk__46023 = G__46031;
count__46024 = G__46032;
i__46025 = G__46033;
continue;
} else {
var event = cljs.core.first.call(null,seq__46022__$1);
re_frame.router.dispatch.call(null,event);


var G__46034 = cljs.core.next.call(null,seq__46022__$1);
var G__46035 = null;
var G__46036 = (0);
var G__46037 = (0);
seq__46022 = G__46034;
chunk__46023 = G__46035;
count__46024 = G__46036;
i__46025 = G__46037;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__46038 = cljs.core.seq.call(null,value);
var chunk__46039 = null;
var count__46040 = (0);
var i__46041 = (0);
while(true){
if((i__46041 < count__46040)){
var event = cljs.core._nth.call(null,chunk__46039,i__46041);
clear_event.call(null,event);


var G__46042 = seq__46038;
var G__46043 = chunk__46039;
var G__46044 = count__46040;
var G__46045 = (i__46041 + (1));
seq__46038 = G__46042;
chunk__46039 = G__46043;
count__46040 = G__46044;
i__46041 = G__46045;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__46038);
if(temp__5720__auto__){
var seq__46038__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46038__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46038__$1);
var G__46046 = cljs.core.chunk_rest.call(null,seq__46038__$1);
var G__46047 = c__4550__auto__;
var G__46048 = cljs.core.count.call(null,c__4550__auto__);
var G__46049 = (0);
seq__46038 = G__46046;
chunk__46039 = G__46047;
count__46040 = G__46048;
i__46041 = G__46049;
continue;
} else {
var event = cljs.core.first.call(null,seq__46038__$1);
clear_event.call(null,event);


var G__46050 = cljs.core.next.call(null,seq__46038__$1);
var G__46051 = null;
var G__46052 = (0);
var G__46053 = (0);
seq__46038 = G__46050;
chunk__46039 = G__46051;
count__46040 = G__46052;
i__46041 = G__46053;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1569211510928
