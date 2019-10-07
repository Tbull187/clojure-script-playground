// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40819){
var map__40820 = p__40819;
var map__40820__$1 = (((((!((map__40820 == null))))?(((((map__40820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40820):map__40820);
var operation = cljs.core.get.call(null,map__40820__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__40820__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__40820__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__40820__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__40822_40842 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__40823_40843 = null;
var count__40824_40844 = (0);
var i__40825_40845 = (0);
while(true){
if((i__40825_40845 < count__40824_40844)){
var vec__40834_40846 = cljs.core._nth.call(null,chunk__40823_40843,i__40825_40845);
var k_40847 = cljs.core.nth.call(null,vec__40834_40846,(0),null);
var cb_40848 = cljs.core.nth.call(null,vec__40834_40846,(1),null);
try{cb_40848.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e40837){var e_40849 = e40837;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_40847,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_40849);
}

var G__40850 = seq__40822_40842;
var G__40851 = chunk__40823_40843;
var G__40852 = count__40824_40844;
var G__40853 = (i__40825_40845 + (1));
seq__40822_40842 = G__40850;
chunk__40823_40843 = G__40851;
count__40824_40844 = G__40852;
i__40825_40845 = G__40853;
continue;
} else {
var temp__5720__auto___40854 = cljs.core.seq.call(null,seq__40822_40842);
if(temp__5720__auto___40854){
var seq__40822_40855__$1 = temp__5720__auto___40854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40822_40855__$1)){
var c__4550__auto___40856 = cljs.core.chunk_first.call(null,seq__40822_40855__$1);
var G__40857 = cljs.core.chunk_rest.call(null,seq__40822_40855__$1);
var G__40858 = c__4550__auto___40856;
var G__40859 = cljs.core.count.call(null,c__4550__auto___40856);
var G__40860 = (0);
seq__40822_40842 = G__40857;
chunk__40823_40843 = G__40858;
count__40824_40844 = G__40859;
i__40825_40845 = G__40860;
continue;
} else {
var vec__40838_40861 = cljs.core.first.call(null,seq__40822_40855__$1);
var k_40862 = cljs.core.nth.call(null,vec__40838_40861,(0),null);
var cb_40863 = cljs.core.nth.call(null,vec__40838_40861,(1),null);
try{cb_40863.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e40841){var e_40864 = e40841;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_40862,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_40864);
}

var G__40865 = cljs.core.next.call(null,seq__40822_40855__$1);
var G__40866 = null;
var G__40867 = (0);
var G__40868 = (0);
seq__40822_40842 = G__40865;
chunk__40823_40843 = G__40866;
count__40824_40844 = G__40867;
i__40825_40845 = G__40868;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1569211506646
