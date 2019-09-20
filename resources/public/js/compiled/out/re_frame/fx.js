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
var _STAR_current_trace_STAR__orig_val__21653 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21654 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21654;

try{try{var seq__21655 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21656 = null;
var count__21657 = (0);
var i__21658 = (0);
while(true){
if((i__21658 < count__21657)){
var vec__21665 = cljs.core._nth.call(null,chunk__21656,i__21658);
var effect_key = cljs.core.nth.call(null,vec__21665,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21665,(1),null);
var temp__5718__auto___21687 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___21687)){
var effect_fn_21688 = temp__5718__auto___21687;
effect_fn_21688.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21689 = seq__21655;
var G__21690 = chunk__21656;
var G__21691 = count__21657;
var G__21692 = (i__21658 + (1));
seq__21655 = G__21689;
chunk__21656 = G__21690;
count__21657 = G__21691;
i__21658 = G__21692;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21655);
if(temp__5720__auto__){
var seq__21655__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21655__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21655__$1);
var G__21693 = cljs.core.chunk_rest.call(null,seq__21655__$1);
var G__21694 = c__4550__auto__;
var G__21695 = cljs.core.count.call(null,c__4550__auto__);
var G__21696 = (0);
seq__21655 = G__21693;
chunk__21656 = G__21694;
count__21657 = G__21695;
i__21658 = G__21696;
continue;
} else {
var vec__21668 = cljs.core.first.call(null,seq__21655__$1);
var effect_key = cljs.core.nth.call(null,vec__21668,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21668,(1),null);
var temp__5718__auto___21697 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___21697)){
var effect_fn_21698 = temp__5718__auto___21697;
effect_fn_21698.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21699 = cljs.core.next.call(null,seq__21655__$1);
var G__21700 = null;
var G__21701 = (0);
var G__21702 = (0);
seq__21655 = G__21699;
chunk__21656 = G__21700;
count__21657 = G__21701;
i__21658 = G__21702;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21475__auto___21703 = re_frame.interop.now.call(null);
var duration__21476__auto___21704 = (end__21475__auto___21703 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21476__auto___21704,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21475__auto___21703);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21653;
}} else {
var seq__21671 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21672 = null;
var count__21673 = (0);
var i__21674 = (0);
while(true){
if((i__21674 < count__21673)){
var vec__21681 = cljs.core._nth.call(null,chunk__21672,i__21674);
var effect_key = cljs.core.nth.call(null,vec__21681,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21681,(1),null);
var temp__5718__auto___21705 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___21705)){
var effect_fn_21706 = temp__5718__auto___21705;
effect_fn_21706.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21707 = seq__21671;
var G__21708 = chunk__21672;
var G__21709 = count__21673;
var G__21710 = (i__21674 + (1));
seq__21671 = G__21707;
chunk__21672 = G__21708;
count__21673 = G__21709;
i__21674 = G__21710;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21671);
if(temp__5720__auto__){
var seq__21671__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21671__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21671__$1);
var G__21711 = cljs.core.chunk_rest.call(null,seq__21671__$1);
var G__21712 = c__4550__auto__;
var G__21713 = cljs.core.count.call(null,c__4550__auto__);
var G__21714 = (0);
seq__21671 = G__21711;
chunk__21672 = G__21712;
count__21673 = G__21713;
i__21674 = G__21714;
continue;
} else {
var vec__21684 = cljs.core.first.call(null,seq__21671__$1);
var effect_key = cljs.core.nth.call(null,vec__21684,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21684,(1),null);
var temp__5718__auto___21715 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___21715)){
var effect_fn_21716 = temp__5718__auto___21715;
effect_fn_21716.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21717 = cljs.core.next.call(null,seq__21671__$1);
var G__21718 = null;
var G__21719 = (0);
var G__21720 = (0);
seq__21671 = G__21717;
chunk__21672 = G__21718;
count__21673 = G__21719;
i__21674 = G__21720;
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
var seq__21721 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__21722 = null;
var count__21723 = (0);
var i__21724 = (0);
while(true){
if((i__21724 < count__21723)){
var map__21729 = cljs.core._nth.call(null,chunk__21722,i__21724);
var map__21729__$1 = (((((!((map__21729 == null))))?(((((map__21729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21729):map__21729);
var effect = map__21729__$1;
var ms = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21721,chunk__21722,count__21723,i__21724,map__21729,map__21729__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21721,chunk__21722,count__21723,i__21724,map__21729,map__21729__$1,effect,ms,dispatch))
,ms);
}


var G__21733 = seq__21721;
var G__21734 = chunk__21722;
var G__21735 = count__21723;
var G__21736 = (i__21724 + (1));
seq__21721 = G__21733;
chunk__21722 = G__21734;
count__21723 = G__21735;
i__21724 = G__21736;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21721);
if(temp__5720__auto__){
var seq__21721__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21721__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21721__$1);
var G__21737 = cljs.core.chunk_rest.call(null,seq__21721__$1);
var G__21738 = c__4550__auto__;
var G__21739 = cljs.core.count.call(null,c__4550__auto__);
var G__21740 = (0);
seq__21721 = G__21737;
chunk__21722 = G__21738;
count__21723 = G__21739;
i__21724 = G__21740;
continue;
} else {
var map__21731 = cljs.core.first.call(null,seq__21721__$1);
var map__21731__$1 = (((((!((map__21731 == null))))?(((((map__21731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21731):map__21731);
var effect = map__21731__$1;
var ms = cljs.core.get.call(null,map__21731__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21731__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21721,chunk__21722,count__21723,i__21724,map__21731,map__21731__$1,effect,ms,dispatch,seq__21721__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21721,chunk__21722,count__21723,i__21724,map__21731,map__21731__$1,effect,ms,dispatch,seq__21721__$1,temp__5720__auto__))
,ms);
}


var G__21741 = cljs.core.next.call(null,seq__21721__$1);
var G__21742 = null;
var G__21743 = (0);
var G__21744 = (0);
seq__21721 = G__21741;
chunk__21722 = G__21742;
count__21723 = G__21743;
i__21724 = G__21744;
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
var seq__21745 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__21746 = null;
var count__21747 = (0);
var i__21748 = (0);
while(true){
if((i__21748 < count__21747)){
var event = cljs.core._nth.call(null,chunk__21746,i__21748);
re_frame.router.dispatch.call(null,event);


var G__21749 = seq__21745;
var G__21750 = chunk__21746;
var G__21751 = count__21747;
var G__21752 = (i__21748 + (1));
seq__21745 = G__21749;
chunk__21746 = G__21750;
count__21747 = G__21751;
i__21748 = G__21752;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21745);
if(temp__5720__auto__){
var seq__21745__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21745__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21745__$1);
var G__21753 = cljs.core.chunk_rest.call(null,seq__21745__$1);
var G__21754 = c__4550__auto__;
var G__21755 = cljs.core.count.call(null,c__4550__auto__);
var G__21756 = (0);
seq__21745 = G__21753;
chunk__21746 = G__21754;
count__21747 = G__21755;
i__21748 = G__21756;
continue;
} else {
var event = cljs.core.first.call(null,seq__21745__$1);
re_frame.router.dispatch.call(null,event);


var G__21757 = cljs.core.next.call(null,seq__21745__$1);
var G__21758 = null;
var G__21759 = (0);
var G__21760 = (0);
seq__21745 = G__21757;
chunk__21746 = G__21758;
count__21747 = G__21759;
i__21748 = G__21760;
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
var seq__21761 = cljs.core.seq.call(null,value);
var chunk__21762 = null;
var count__21763 = (0);
var i__21764 = (0);
while(true){
if((i__21764 < count__21763)){
var event = cljs.core._nth.call(null,chunk__21762,i__21764);
clear_event.call(null,event);


var G__21765 = seq__21761;
var G__21766 = chunk__21762;
var G__21767 = count__21763;
var G__21768 = (i__21764 + (1));
seq__21761 = G__21765;
chunk__21762 = G__21766;
count__21763 = G__21767;
i__21764 = G__21768;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21761);
if(temp__5720__auto__){
var seq__21761__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21761__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21761__$1);
var G__21769 = cljs.core.chunk_rest.call(null,seq__21761__$1);
var G__21770 = c__4550__auto__;
var G__21771 = cljs.core.count.call(null,c__4550__auto__);
var G__21772 = (0);
seq__21761 = G__21769;
chunk__21762 = G__21770;
count__21763 = G__21771;
i__21764 = G__21772;
continue;
} else {
var event = cljs.core.first.call(null,seq__21761__$1);
clear_event.call(null,event);


var G__21773 = cljs.core.next.call(null,seq__21761__$1);
var G__21774 = null;
var G__21775 = (0);
var G__21776 = (0);
seq__21761 = G__21773;
chunk__21762 = G__21774;
count__21763 = G__21775;
i__21764 = G__21776;
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

//# sourceMappingURL=fx.js.map?rel=1568768389899
