// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e60545){if((e60545 instanceof Error)){
var e = e60545;
return "Error: Unable to stringify";
} else {
throw e60545;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__60548 = arguments.length;
switch (G__60548) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__60546_SHARP_){
if(typeof p1__60546_SHARP_ === 'string'){
return p1__60546_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__60546_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60551 = arguments.length;
var i__4731__auto___60552 = (0);
while(true){
if((i__4731__auto___60552 < len__4730__auto___60551)){
args__4736__auto__.push((arguments[i__4731__auto___60552]));

var G__60553 = (i__4731__auto___60552 + (1));
i__4731__auto___60552 = G__60553;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq60550){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60550));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60555 = arguments.length;
var i__4731__auto___60556 = (0);
while(true){
if((i__4731__auto___60556 < len__4730__auto___60555)){
args__4736__auto__.push((arguments[i__4731__auto___60556]));

var G__60557 = (i__4731__auto___60556 + (1));
i__4731__auto___60556 = G__60557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq60554){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60554));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__60558){
var map__60559 = p__60558;
var map__60559__$1 = (((((!((map__60559 == null))))?(((((map__60559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60559):map__60559);
var message = cljs.core.get.call(null,map__60559__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__60559__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22787__auto___60638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___60638,ch){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___60638,ch){
return (function (state_60610){
var state_val_60611 = (state_60610[(1)]);
if((state_val_60611 === (7))){
var inst_60606 = (state_60610[(2)]);
var state_60610__$1 = state_60610;
var statearr_60612_60639 = state_60610__$1;
(statearr_60612_60639[(2)] = inst_60606);

(statearr_60612_60639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (1))){
var state_60610__$1 = state_60610;
var statearr_60613_60640 = state_60610__$1;
(statearr_60613_60640[(2)] = null);

(statearr_60613_60640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (4))){
var inst_60563 = (state_60610[(7)]);
var inst_60563__$1 = (state_60610[(2)]);
var state_60610__$1 = (function (){var statearr_60614 = state_60610;
(statearr_60614[(7)] = inst_60563__$1);

return statearr_60614;
})();
if(cljs.core.truth_(inst_60563__$1)){
var statearr_60615_60641 = state_60610__$1;
(statearr_60615_60641[(1)] = (5));

} else {
var statearr_60616_60642 = state_60610__$1;
(statearr_60616_60642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (15))){
var inst_60570 = (state_60610[(8)]);
var inst_60585 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60570);
var inst_60586 = cljs.core.first.call(null,inst_60585);
var inst_60587 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_60586);
var inst_60588 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60587)].join('');
var inst_60589 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_60588);
var state_60610__$1 = state_60610;
var statearr_60617_60643 = state_60610__$1;
(statearr_60617_60643[(2)] = inst_60589);

(statearr_60617_60643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (13))){
var inst_60594 = (state_60610[(2)]);
var state_60610__$1 = state_60610;
var statearr_60618_60644 = state_60610__$1;
(statearr_60618_60644[(2)] = inst_60594);

(statearr_60618_60644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (6))){
var state_60610__$1 = state_60610;
var statearr_60619_60645 = state_60610__$1;
(statearr_60619_60645[(2)] = null);

(statearr_60619_60645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (17))){
var inst_60592 = (state_60610[(2)]);
var state_60610__$1 = state_60610;
var statearr_60620_60646 = state_60610__$1;
(statearr_60620_60646[(2)] = inst_60592);

(statearr_60620_60646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (3))){
var inst_60608 = (state_60610[(2)]);
var state_60610__$1 = state_60610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60610__$1,inst_60608);
} else {
if((state_val_60611 === (12))){
var inst_60569 = (state_60610[(9)]);
var inst_60583 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_60569,opts);
var state_60610__$1 = state_60610;
if(inst_60583){
var statearr_60621_60647 = state_60610__$1;
(statearr_60621_60647[(1)] = (15));

} else {
var statearr_60622_60648 = state_60610__$1;
(statearr_60622_60648[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (2))){
var state_60610__$1 = state_60610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60610__$1,(4),ch);
} else {
if((state_val_60611 === (11))){
var inst_60570 = (state_60610[(8)]);
var inst_60575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60576 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_60570);
var inst_60577 = cljs.core.async.timeout.call(null,(1000));
var inst_60578 = [inst_60576,inst_60577];
var inst_60579 = (new cljs.core.PersistentVector(null,2,(5),inst_60575,inst_60578,null));
var state_60610__$1 = state_60610;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60610__$1,(14),inst_60579);
} else {
if((state_val_60611 === (9))){
var inst_60570 = (state_60610[(8)]);
var inst_60596 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_60597 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60570);
var inst_60598 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60597);
var inst_60599 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60598)].join('');
var inst_60600 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_60599);
var state_60610__$1 = (function (){var statearr_60623 = state_60610;
(statearr_60623[(10)] = inst_60596);

return statearr_60623;
})();
var statearr_60624_60649 = state_60610__$1;
(statearr_60624_60649[(2)] = inst_60600);

(statearr_60624_60649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (5))){
var inst_60563 = (state_60610[(7)]);
var inst_60565 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_60566 = (new cljs.core.PersistentArrayMap(null,2,inst_60565,null));
var inst_60567 = (new cljs.core.PersistentHashSet(null,inst_60566,null));
var inst_60568 = figwheel.client.focus_msgs.call(null,inst_60567,inst_60563);
var inst_60569 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_60568);
var inst_60570 = cljs.core.first.call(null,inst_60568);
var inst_60571 = figwheel.client.autoload_QMARK_.call(null);
var state_60610__$1 = (function (){var statearr_60625 = state_60610;
(statearr_60625[(8)] = inst_60570);

(statearr_60625[(9)] = inst_60569);

return statearr_60625;
})();
if(cljs.core.truth_(inst_60571)){
var statearr_60626_60650 = state_60610__$1;
(statearr_60626_60650[(1)] = (8));

} else {
var statearr_60627_60651 = state_60610__$1;
(statearr_60627_60651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (14))){
var inst_60581 = (state_60610[(2)]);
var state_60610__$1 = state_60610;
var statearr_60628_60652 = state_60610__$1;
(statearr_60628_60652[(2)] = inst_60581);

(statearr_60628_60652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (16))){
var state_60610__$1 = state_60610;
var statearr_60629_60653 = state_60610__$1;
(statearr_60629_60653[(2)] = null);

(statearr_60629_60653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (10))){
var inst_60602 = (state_60610[(2)]);
var state_60610__$1 = (function (){var statearr_60630 = state_60610;
(statearr_60630[(11)] = inst_60602);

return statearr_60630;
})();
var statearr_60631_60654 = state_60610__$1;
(statearr_60631_60654[(2)] = null);

(statearr_60631_60654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60611 === (8))){
var inst_60569 = (state_60610[(9)]);
var inst_60573 = figwheel.client.reload_file_state_QMARK_.call(null,inst_60569,opts);
var state_60610__$1 = state_60610;
if(cljs.core.truth_(inst_60573)){
var statearr_60632_60655 = state_60610__$1;
(statearr_60632_60655[(1)] = (11));

} else {
var statearr_60633_60656 = state_60610__$1;
(statearr_60633_60656[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22787__auto___60638,ch))
;
return ((function (switch__22764__auto__,c__22787__auto___60638,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22765__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22765__auto____0 = (function (){
var statearr_60634 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60634[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22765__auto__);

(statearr_60634[(1)] = (1));

return statearr_60634;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22765__auto____1 = (function (state_60610){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_60610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e60635){if((e60635 instanceof Object)){
var ex__22768__auto__ = e60635;
var statearr_60636_60657 = state_60610;
(statearr_60636_60657[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60658 = state_60610;
state_60610 = G__60658;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22765__auto__ = function(state_60610){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22765__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22765__auto____1.call(this,state_60610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22765__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22765__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___60638,ch))
})();
var state__22789__auto__ = (function (){var statearr_60637 = f__22788__auto__.call(null);
(statearr_60637[(6)] = c__22787__auto___60638);

return statearr_60637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___60638,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__60659_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__60659_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_60665 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_60665){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60661 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60662 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60663 = true;
var _STAR_print_fn_STAR__temp_val__60664 = ((function (_STAR_print_newline_STAR__orig_val__60661,_STAR_print_fn_STAR__orig_val__60662,_STAR_print_newline_STAR__temp_val__60663,sb,base_path_60665){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__60661,_STAR_print_fn_STAR__orig_val__60662,_STAR_print_newline_STAR__temp_val__60663,sb,base_path_60665))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60663;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60664;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60662;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60661;
}}catch (e60660){if((e60660 instanceof Error)){
var e = e60660;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_60665], null));
} else {
var e = e60660;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_60665))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__60666){
var map__60667 = p__60666;
var map__60667__$1 = (((((!((map__60667 == null))))?(((((map__60667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60667):map__60667);
var opts = map__60667__$1;
var build_id = cljs.core.get.call(null,map__60667__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__60667,map__60667__$1,opts,build_id){
return (function (p__60669){
var vec__60670 = p__60669;
var seq__60671 = cljs.core.seq.call(null,vec__60670);
var first__60672 = cljs.core.first.call(null,seq__60671);
var seq__60671__$1 = cljs.core.next.call(null,seq__60671);
var map__60673 = first__60672;
var map__60673__$1 = (((((!((map__60673 == null))))?(((((map__60673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60673):map__60673);
var msg = map__60673__$1;
var msg_name = cljs.core.get.call(null,map__60673__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60671__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__60670,seq__60671,first__60672,seq__60671__$1,map__60673,map__60673__$1,msg,msg_name,_,map__60667,map__60667__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__60670,seq__60671,first__60672,seq__60671__$1,map__60673,map__60673__$1,msg,msg_name,_,map__60667,map__60667__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__60667,map__60667__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__60675){
var vec__60676 = p__60675;
var seq__60677 = cljs.core.seq.call(null,vec__60676);
var first__60678 = cljs.core.first.call(null,seq__60677);
var seq__60677__$1 = cljs.core.next.call(null,seq__60677);
var map__60679 = first__60678;
var map__60679__$1 = (((((!((map__60679 == null))))?(((((map__60679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60679):map__60679);
var msg = map__60679__$1;
var msg_name = cljs.core.get.call(null,map__60679__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60677__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__60681){
var map__60682 = p__60681;
var map__60682__$1 = (((((!((map__60682 == null))))?(((((map__60682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60682):map__60682);
var on_compile_warning = cljs.core.get.call(null,map__60682__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__60682__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__60682,map__60682__$1,on_compile_warning,on_compile_fail){
return (function (p__60684){
var vec__60685 = p__60684;
var seq__60686 = cljs.core.seq.call(null,vec__60685);
var first__60687 = cljs.core.first.call(null,seq__60686);
var seq__60686__$1 = cljs.core.next.call(null,seq__60686);
var map__60688 = first__60687;
var map__60688__$1 = (((((!((map__60688 == null))))?(((((map__60688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60688):map__60688);
var msg = map__60688__$1;
var msg_name = cljs.core.get.call(null,map__60688__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60686__$1;
var pred__60690 = cljs.core._EQ_;
var expr__60691 = msg_name;
if(cljs.core.truth_(pred__60690.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__60691))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__60690.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__60691))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__60682,map__60682__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__,msg_hist,msg_names,msg){
return (function (state_60780){
var state_val_60781 = (state_60780[(1)]);
if((state_val_60781 === (7))){
var inst_60700 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
if(cljs.core.truth_(inst_60700)){
var statearr_60782_60829 = state_60780__$1;
(statearr_60782_60829[(1)] = (8));

} else {
var statearr_60783_60830 = state_60780__$1;
(statearr_60783_60830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (20))){
var inst_60774 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60784_60831 = state_60780__$1;
(statearr_60784_60831[(2)] = inst_60774);

(statearr_60784_60831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (27))){
var inst_60770 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60785_60832 = state_60780__$1;
(statearr_60785_60832[(2)] = inst_60770);

(statearr_60785_60832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (1))){
var inst_60693 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_60780__$1 = state_60780;
if(cljs.core.truth_(inst_60693)){
var statearr_60786_60833 = state_60780__$1;
(statearr_60786_60833[(1)] = (2));

} else {
var statearr_60787_60834 = state_60780__$1;
(statearr_60787_60834[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (24))){
var inst_60772 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60788_60835 = state_60780__$1;
(statearr_60788_60835[(2)] = inst_60772);

(statearr_60788_60835[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (4))){
var inst_60778 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60780__$1,inst_60778);
} else {
if((state_val_60781 === (15))){
var inst_60776 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60789_60836 = state_60780__$1;
(statearr_60789_60836[(2)] = inst_60776);

(statearr_60789_60836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (21))){
var inst_60729 = (state_60780[(2)]);
var inst_60730 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60731 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60730);
var state_60780__$1 = (function (){var statearr_60790 = state_60780;
(statearr_60790[(7)] = inst_60729);

return statearr_60790;
})();
var statearr_60791_60837 = state_60780__$1;
(statearr_60791_60837[(2)] = inst_60731);

(statearr_60791_60837[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (31))){
var inst_60759 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_60780__$1 = state_60780;
if(inst_60759){
var statearr_60792_60838 = state_60780__$1;
(statearr_60792_60838[(1)] = (34));

} else {
var statearr_60793_60839 = state_60780__$1;
(statearr_60793_60839[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (32))){
var inst_60768 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60794_60840 = state_60780__$1;
(statearr_60794_60840[(2)] = inst_60768);

(statearr_60794_60840[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (33))){
var inst_60755 = (state_60780[(2)]);
var inst_60756 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60757 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60756);
var state_60780__$1 = (function (){var statearr_60795 = state_60780;
(statearr_60795[(8)] = inst_60755);

return statearr_60795;
})();
var statearr_60796_60841 = state_60780__$1;
(statearr_60796_60841[(2)] = inst_60757);

(statearr_60796_60841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (13))){
var inst_60714 = figwheel.client.heads_up.clear.call(null);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(16),inst_60714);
} else {
if((state_val_60781 === (22))){
var inst_60735 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60736 = figwheel.client.heads_up.append_warning_message.call(null,inst_60735);
var state_60780__$1 = state_60780;
var statearr_60797_60842 = state_60780__$1;
(statearr_60797_60842[(2)] = inst_60736);

(statearr_60797_60842[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (36))){
var inst_60766 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60798_60843 = state_60780__$1;
(statearr_60798_60843[(2)] = inst_60766);

(statearr_60798_60843[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (29))){
var inst_60746 = (state_60780[(2)]);
var inst_60747 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60748 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60747);
var state_60780__$1 = (function (){var statearr_60799 = state_60780;
(statearr_60799[(9)] = inst_60746);

return statearr_60799;
})();
var statearr_60800_60844 = state_60780__$1;
(statearr_60800_60844[(2)] = inst_60748);

(statearr_60800_60844[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (6))){
var inst_60695 = (state_60780[(10)]);
var state_60780__$1 = state_60780;
var statearr_60801_60845 = state_60780__$1;
(statearr_60801_60845[(2)] = inst_60695);

(statearr_60801_60845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (28))){
var inst_60742 = (state_60780[(2)]);
var inst_60743 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60744 = figwheel.client.heads_up.display_warning.call(null,inst_60743);
var state_60780__$1 = (function (){var statearr_60802 = state_60780;
(statearr_60802[(11)] = inst_60742);

return statearr_60802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(29),inst_60744);
} else {
if((state_val_60781 === (25))){
var inst_60740 = figwheel.client.heads_up.clear.call(null);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(28),inst_60740);
} else {
if((state_val_60781 === (34))){
var inst_60761 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(37),inst_60761);
} else {
if((state_val_60781 === (17))){
var inst_60720 = (state_60780[(2)]);
var inst_60721 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60722 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60721);
var state_60780__$1 = (function (){var statearr_60803 = state_60780;
(statearr_60803[(12)] = inst_60720);

return statearr_60803;
})();
var statearr_60804_60846 = state_60780__$1;
(statearr_60804_60846[(2)] = inst_60722);

(statearr_60804_60846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (3))){
var inst_60712 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_60780__$1 = state_60780;
if(inst_60712){
var statearr_60805_60847 = state_60780__$1;
(statearr_60805_60847[(1)] = (13));

} else {
var statearr_60806_60848 = state_60780__$1;
(statearr_60806_60848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (12))){
var inst_60708 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60807_60849 = state_60780__$1;
(statearr_60807_60849[(2)] = inst_60708);

(statearr_60807_60849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (2))){
var inst_60695 = (state_60780[(10)]);
var inst_60695__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_60780__$1 = (function (){var statearr_60808 = state_60780;
(statearr_60808[(10)] = inst_60695__$1);

return statearr_60808;
})();
if(cljs.core.truth_(inst_60695__$1)){
var statearr_60809_60850 = state_60780__$1;
(statearr_60809_60850[(1)] = (5));

} else {
var statearr_60810_60851 = state_60780__$1;
(statearr_60810_60851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (23))){
var inst_60738 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_60780__$1 = state_60780;
if(inst_60738){
var statearr_60811_60852 = state_60780__$1;
(statearr_60811_60852[(1)] = (25));

} else {
var statearr_60812_60853 = state_60780__$1;
(statearr_60812_60853[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (35))){
var state_60780__$1 = state_60780;
var statearr_60813_60854 = state_60780__$1;
(statearr_60813_60854[(2)] = null);

(statearr_60813_60854[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (19))){
var inst_60733 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_60780__$1 = state_60780;
if(inst_60733){
var statearr_60814_60855 = state_60780__$1;
(statearr_60814_60855[(1)] = (22));

} else {
var statearr_60815_60856 = state_60780__$1;
(statearr_60815_60856[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (11))){
var inst_60704 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60816_60857 = state_60780__$1;
(statearr_60816_60857[(2)] = inst_60704);

(statearr_60816_60857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (9))){
var inst_60706 = figwheel.client.heads_up.clear.call(null);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(12),inst_60706);
} else {
if((state_val_60781 === (5))){
var inst_60697 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_60780__$1 = state_60780;
var statearr_60817_60858 = state_60780__$1;
(statearr_60817_60858[(2)] = inst_60697);

(statearr_60817_60858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (14))){
var inst_60724 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_60780__$1 = state_60780;
if(inst_60724){
var statearr_60818_60859 = state_60780__$1;
(statearr_60818_60859[(1)] = (18));

} else {
var statearr_60819_60860 = state_60780__$1;
(statearr_60819_60860[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (26))){
var inst_60750 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_60780__$1 = state_60780;
if(inst_60750){
var statearr_60820_60861 = state_60780__$1;
(statearr_60820_60861[(1)] = (30));

} else {
var statearr_60821_60862 = state_60780__$1;
(statearr_60821_60862[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (16))){
var inst_60716 = (state_60780[(2)]);
var inst_60717 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60718 = figwheel.client.heads_up.display_exception.call(null,inst_60717);
var state_60780__$1 = (function (){var statearr_60822 = state_60780;
(statearr_60822[(13)] = inst_60716);

return statearr_60822;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(17),inst_60718);
} else {
if((state_val_60781 === (30))){
var inst_60752 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60753 = figwheel.client.heads_up.display_warning.call(null,inst_60752);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(33),inst_60753);
} else {
if((state_val_60781 === (10))){
var inst_60710 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60823_60863 = state_60780__$1;
(statearr_60823_60863[(2)] = inst_60710);

(statearr_60823_60863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (18))){
var inst_60726 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60727 = figwheel.client.heads_up.display_exception.call(null,inst_60726);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(21),inst_60727);
} else {
if((state_val_60781 === (37))){
var inst_60763 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60824_60864 = state_60780__$1;
(statearr_60824_60864[(2)] = inst_60763);

(statearr_60824_60864[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (8))){
var inst_60702 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(11),inst_60702);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22787__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22764__auto__,c__22787__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto____0 = (function (){
var statearr_60825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60825[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto__);

(statearr_60825[(1)] = (1));

return statearr_60825;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto____1 = (function (state_60780){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_60780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e60826){if((e60826 instanceof Object)){
var ex__22768__auto__ = e60826;
var statearr_60827_60865 = state_60780;
(statearr_60827_60865[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60866 = state_60780;
state_60780 = G__60866;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto__ = function(state_60780){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto____1.call(this,state_60780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__,msg_hist,msg_names,msg))
})();
var state__22789__auto__ = (function (){var statearr_60828 = f__22788__auto__.call(null);
(statearr_60828[(6)] = c__22787__auto__);

return statearr_60828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__,msg_hist,msg_names,msg))
);

return c__22787__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22787__auto___60895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___60895,ch){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___60895,ch){
return (function (state_60881){
var state_val_60882 = (state_60881[(1)]);
if((state_val_60882 === (1))){
var state_60881__$1 = state_60881;
var statearr_60883_60896 = state_60881__$1;
(statearr_60883_60896[(2)] = null);

(statearr_60883_60896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60882 === (2))){
var state_60881__$1 = state_60881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60881__$1,(4),ch);
} else {
if((state_val_60882 === (3))){
var inst_60879 = (state_60881[(2)]);
var state_60881__$1 = state_60881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60881__$1,inst_60879);
} else {
if((state_val_60882 === (4))){
var inst_60869 = (state_60881[(7)]);
var inst_60869__$1 = (state_60881[(2)]);
var state_60881__$1 = (function (){var statearr_60884 = state_60881;
(statearr_60884[(7)] = inst_60869__$1);

return statearr_60884;
})();
if(cljs.core.truth_(inst_60869__$1)){
var statearr_60885_60897 = state_60881__$1;
(statearr_60885_60897[(1)] = (5));

} else {
var statearr_60886_60898 = state_60881__$1;
(statearr_60886_60898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60882 === (5))){
var inst_60869 = (state_60881[(7)]);
var inst_60871 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_60869);
var state_60881__$1 = state_60881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60881__$1,(8),inst_60871);
} else {
if((state_val_60882 === (6))){
var state_60881__$1 = state_60881;
var statearr_60887_60899 = state_60881__$1;
(statearr_60887_60899[(2)] = null);

(statearr_60887_60899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60882 === (7))){
var inst_60877 = (state_60881[(2)]);
var state_60881__$1 = state_60881;
var statearr_60888_60900 = state_60881__$1;
(statearr_60888_60900[(2)] = inst_60877);

(statearr_60888_60900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60882 === (8))){
var inst_60873 = (state_60881[(2)]);
var state_60881__$1 = (function (){var statearr_60889 = state_60881;
(statearr_60889[(8)] = inst_60873);

return statearr_60889;
})();
var statearr_60890_60901 = state_60881__$1;
(statearr_60890_60901[(2)] = null);

(statearr_60890_60901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22787__auto___60895,ch))
;
return ((function (switch__22764__auto__,c__22787__auto___60895,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22765__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22765__auto____0 = (function (){
var statearr_60891 = [null,null,null,null,null,null,null,null,null];
(statearr_60891[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22765__auto__);

(statearr_60891[(1)] = (1));

return statearr_60891;
});
var figwheel$client$heads_up_plugin_$_state_machine__22765__auto____1 = (function (state_60881){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_60881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e60892){if((e60892 instanceof Object)){
var ex__22768__auto__ = e60892;
var statearr_60893_60902 = state_60881;
(statearr_60893_60902[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60903 = state_60881;
state_60881 = G__60903;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22765__auto__ = function(state_60881){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22765__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22765__auto____1.call(this,state_60881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22765__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22765__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___60895,ch))
})();
var state__22789__auto__ = (function (){var statearr_60894 = f__22788__auto__.call(null);
(statearr_60894[(6)] = c__22787__auto___60895);

return statearr_60894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___60895,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__){
return (function (state_60909){
var state_val_60910 = (state_60909[(1)]);
if((state_val_60910 === (1))){
var inst_60904 = cljs.core.async.timeout.call(null,(3000));
var state_60909__$1 = state_60909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60909__$1,(2),inst_60904);
} else {
if((state_val_60910 === (2))){
var inst_60906 = (state_60909[(2)]);
var inst_60907 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_60909__$1 = (function (){var statearr_60911 = state_60909;
(statearr_60911[(7)] = inst_60906);

return statearr_60911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60909__$1,inst_60907);
} else {
return null;
}
}
});})(c__22787__auto__))
;
return ((function (switch__22764__auto__,c__22787__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22765__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22765__auto____0 = (function (){
var statearr_60912 = [null,null,null,null,null,null,null,null];
(statearr_60912[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22765__auto__);

(statearr_60912[(1)] = (1));

return statearr_60912;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22765__auto____1 = (function (state_60909){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_60909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e60913){if((e60913 instanceof Object)){
var ex__22768__auto__ = e60913;
var statearr_60914_60916 = state_60909;
(statearr_60914_60916[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60917 = state_60909;
state_60909 = G__60917;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22765__auto__ = function(state_60909){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22765__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22765__auto____1.call(this,state_60909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22765__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22765__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__))
})();
var state__22789__auto__ = (function (){var statearr_60915 = f__22788__auto__.call(null);
(statearr_60915[(6)] = c__22787__auto__);

return statearr_60915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__))
);

return c__22787__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__,figwheel_version,temp__5720__auto__){
return (function (state_60924){
var state_val_60925 = (state_60924[(1)]);
if((state_val_60925 === (1))){
var inst_60918 = cljs.core.async.timeout.call(null,(2000));
var state_60924__$1 = state_60924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60924__$1,(2),inst_60918);
} else {
if((state_val_60925 === (2))){
var inst_60920 = (state_60924[(2)]);
var inst_60921 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_60922 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_60921);
var state_60924__$1 = (function (){var statearr_60926 = state_60924;
(statearr_60926[(7)] = inst_60920);

return statearr_60926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60924__$1,inst_60922);
} else {
return null;
}
}
});})(c__22787__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__22764__auto__,c__22787__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto____0 = (function (){
var statearr_60927 = [null,null,null,null,null,null,null,null];
(statearr_60927[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto__);

(statearr_60927[(1)] = (1));

return statearr_60927;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto____1 = (function (state_60924){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_60924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e60928){if((e60928 instanceof Object)){
var ex__22768__auto__ = e60928;
var statearr_60929_60931 = state_60924;
(statearr_60929_60931[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60932 = state_60924;
state_60924 = G__60932;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto__ = function(state_60924){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto____1.call(this,state_60924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__,figwheel_version,temp__5720__auto__))
})();
var state__22789__auto__ = (function (){var statearr_60930 = f__22788__auto__.call(null);
(statearr_60930[(6)] = c__22787__auto__);

return statearr_60930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__,figwheel_version,temp__5720__auto__))
);

return c__22787__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__60933){
var map__60934 = p__60933;
var map__60934__$1 = (((((!((map__60934 == null))))?(((((map__60934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60934):map__60934);
var file = cljs.core.get.call(null,map__60934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60934__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60934__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__60936 = "";
var G__60936__$1 = (cljs.core.truth_(file)?[G__60936,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__60936);
var G__60936__$2 = (cljs.core.truth_(line)?[G__60936__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__60936__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__60936__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__60936__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__60937){
var map__60938 = p__60937;
var map__60938__$1 = (((((!((map__60938 == null))))?(((((map__60938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60938):map__60938);
var ed = map__60938__$1;
var exception_data = cljs.core.get.call(null,map__60938__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__60938__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_60941 = (function (){var G__60940 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60940)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__60940;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_60941);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__60942){
var map__60943 = p__60942;
var map__60943__$1 = (((((!((map__60943 == null))))?(((((map__60943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60943):map__60943);
var w = map__60943__$1;
var message = cljs.core.get.call(null,map__60943__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__60945 = cljs.core.seq.call(null,plugins);
var chunk__60946 = null;
var count__60947 = (0);
var i__60948 = (0);
while(true){
if((i__60948 < count__60947)){
var vec__60955 = cljs.core._nth.call(null,chunk__60946,i__60948);
var k = cljs.core.nth.call(null,vec__60955,(0),null);
var plugin = cljs.core.nth.call(null,vec__60955,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60961 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60945,chunk__60946,count__60947,i__60948,pl_60961,vec__60955,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_60961.call(null,msg_hist);
});})(seq__60945,chunk__60946,count__60947,i__60948,pl_60961,vec__60955,k,plugin))
);
} else {
}


var G__60962 = seq__60945;
var G__60963 = chunk__60946;
var G__60964 = count__60947;
var G__60965 = (i__60948 + (1));
seq__60945 = G__60962;
chunk__60946 = G__60963;
count__60947 = G__60964;
i__60948 = G__60965;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__60945);
if(temp__5720__auto__){
var seq__60945__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60945__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__60945__$1);
var G__60966 = cljs.core.chunk_rest.call(null,seq__60945__$1);
var G__60967 = c__4550__auto__;
var G__60968 = cljs.core.count.call(null,c__4550__auto__);
var G__60969 = (0);
seq__60945 = G__60966;
chunk__60946 = G__60967;
count__60947 = G__60968;
i__60948 = G__60969;
continue;
} else {
var vec__60958 = cljs.core.first.call(null,seq__60945__$1);
var k = cljs.core.nth.call(null,vec__60958,(0),null);
var plugin = cljs.core.nth.call(null,vec__60958,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60970 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60945,chunk__60946,count__60947,i__60948,pl_60970,vec__60958,k,plugin,seq__60945__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_60970.call(null,msg_hist);
});})(seq__60945,chunk__60946,count__60947,i__60948,pl_60970,vec__60958,k,plugin,seq__60945__$1,temp__5720__auto__))
);
} else {
}


var G__60971 = cljs.core.next.call(null,seq__60945__$1);
var G__60972 = null;
var G__60973 = (0);
var G__60974 = (0);
seq__60945 = G__60971;
chunk__60946 = G__60972;
count__60947 = G__60973;
i__60948 = G__60974;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__60976 = arguments.length;
switch (G__60976) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__60977_60982 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__60978_60983 = null;
var count__60979_60984 = (0);
var i__60980_60985 = (0);
while(true){
if((i__60980_60985 < count__60979_60984)){
var msg_60986 = cljs.core._nth.call(null,chunk__60978_60983,i__60980_60985);
figwheel.client.socket.handle_incoming_message.call(null,msg_60986);


var G__60987 = seq__60977_60982;
var G__60988 = chunk__60978_60983;
var G__60989 = count__60979_60984;
var G__60990 = (i__60980_60985 + (1));
seq__60977_60982 = G__60987;
chunk__60978_60983 = G__60988;
count__60979_60984 = G__60989;
i__60980_60985 = G__60990;
continue;
} else {
var temp__5720__auto___60991 = cljs.core.seq.call(null,seq__60977_60982);
if(temp__5720__auto___60991){
var seq__60977_60992__$1 = temp__5720__auto___60991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60977_60992__$1)){
var c__4550__auto___60993 = cljs.core.chunk_first.call(null,seq__60977_60992__$1);
var G__60994 = cljs.core.chunk_rest.call(null,seq__60977_60992__$1);
var G__60995 = c__4550__auto___60993;
var G__60996 = cljs.core.count.call(null,c__4550__auto___60993);
var G__60997 = (0);
seq__60977_60982 = G__60994;
chunk__60978_60983 = G__60995;
count__60979_60984 = G__60996;
i__60980_60985 = G__60997;
continue;
} else {
var msg_60998 = cljs.core.first.call(null,seq__60977_60992__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_60998);


var G__60999 = cljs.core.next.call(null,seq__60977_60992__$1);
var G__61000 = null;
var G__61001 = (0);
var G__61002 = (0);
seq__60977_60982 = G__60999;
chunk__60978_60983 = G__61000;
count__60979_60984 = G__61001;
i__60980_60985 = G__61002;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61007 = arguments.length;
var i__4731__auto___61008 = (0);
while(true){
if((i__4731__auto___61008 < len__4730__auto___61007)){
args__4736__auto__.push((arguments[i__4731__auto___61008]));

var G__61009 = (i__4731__auto___61008 + (1));
i__4731__auto___61008 = G__61009;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__61004){
var map__61005 = p__61004;
var map__61005__$1 = (((((!((map__61005 == null))))?(((((map__61005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61005):map__61005);
var opts = map__61005__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq61003){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61003));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e61010){if((e61010 instanceof Error)){
var e = e61010;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e61010;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__61011){
var map__61012 = p__61011;
var map__61012__$1 = (((((!((map__61012 == null))))?(((((map__61012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61012):map__61012);
var msg_name = cljs.core.get.call(null,map__61012__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1569211525984
