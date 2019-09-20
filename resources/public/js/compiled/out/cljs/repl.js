// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31116){
var map__31117 = p__31116;
var map__31117__$1 = (((((!((map__31117 == null))))?(((((map__31117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31117):map__31117);
var m = map__31117__$1;
var n = cljs.core.get.call(null,map__31117__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31119_31151 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31120_31152 = null;
var count__31121_31153 = (0);
var i__31122_31154 = (0);
while(true){
if((i__31122_31154 < count__31121_31153)){
var f_31155 = cljs.core._nth.call(null,chunk__31120_31152,i__31122_31154);
cljs.core.println.call(null,"  ",f_31155);


var G__31156 = seq__31119_31151;
var G__31157 = chunk__31120_31152;
var G__31158 = count__31121_31153;
var G__31159 = (i__31122_31154 + (1));
seq__31119_31151 = G__31156;
chunk__31120_31152 = G__31157;
count__31121_31153 = G__31158;
i__31122_31154 = G__31159;
continue;
} else {
var temp__5720__auto___31160 = cljs.core.seq.call(null,seq__31119_31151);
if(temp__5720__auto___31160){
var seq__31119_31161__$1 = temp__5720__auto___31160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31119_31161__$1)){
var c__4550__auto___31162 = cljs.core.chunk_first.call(null,seq__31119_31161__$1);
var G__31163 = cljs.core.chunk_rest.call(null,seq__31119_31161__$1);
var G__31164 = c__4550__auto___31162;
var G__31165 = cljs.core.count.call(null,c__4550__auto___31162);
var G__31166 = (0);
seq__31119_31151 = G__31163;
chunk__31120_31152 = G__31164;
count__31121_31153 = G__31165;
i__31122_31154 = G__31166;
continue;
} else {
var f_31167 = cljs.core.first.call(null,seq__31119_31161__$1);
cljs.core.println.call(null,"  ",f_31167);


var G__31168 = cljs.core.next.call(null,seq__31119_31161__$1);
var G__31169 = null;
var G__31170 = (0);
var G__31171 = (0);
seq__31119_31151 = G__31168;
chunk__31120_31152 = G__31169;
count__31121_31153 = G__31170;
i__31122_31154 = G__31171;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31172 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31172);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31172)))?cljs.core.second.call(null,arglists_31172):arglists_31172));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31123_31173 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31124_31174 = null;
var count__31125_31175 = (0);
var i__31126_31176 = (0);
while(true){
if((i__31126_31176 < count__31125_31175)){
var vec__31137_31177 = cljs.core._nth.call(null,chunk__31124_31174,i__31126_31176);
var name_31178 = cljs.core.nth.call(null,vec__31137_31177,(0),null);
var map__31140_31179 = cljs.core.nth.call(null,vec__31137_31177,(1),null);
var map__31140_31180__$1 = (((((!((map__31140_31179 == null))))?(((((map__31140_31179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31140_31179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31140_31179):map__31140_31179);
var doc_31181 = cljs.core.get.call(null,map__31140_31180__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31182 = cljs.core.get.call(null,map__31140_31180__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31178);

cljs.core.println.call(null," ",arglists_31182);

if(cljs.core.truth_(doc_31181)){
cljs.core.println.call(null," ",doc_31181);
} else {
}


var G__31183 = seq__31123_31173;
var G__31184 = chunk__31124_31174;
var G__31185 = count__31125_31175;
var G__31186 = (i__31126_31176 + (1));
seq__31123_31173 = G__31183;
chunk__31124_31174 = G__31184;
count__31125_31175 = G__31185;
i__31126_31176 = G__31186;
continue;
} else {
var temp__5720__auto___31187 = cljs.core.seq.call(null,seq__31123_31173);
if(temp__5720__auto___31187){
var seq__31123_31188__$1 = temp__5720__auto___31187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31123_31188__$1)){
var c__4550__auto___31189 = cljs.core.chunk_first.call(null,seq__31123_31188__$1);
var G__31190 = cljs.core.chunk_rest.call(null,seq__31123_31188__$1);
var G__31191 = c__4550__auto___31189;
var G__31192 = cljs.core.count.call(null,c__4550__auto___31189);
var G__31193 = (0);
seq__31123_31173 = G__31190;
chunk__31124_31174 = G__31191;
count__31125_31175 = G__31192;
i__31126_31176 = G__31193;
continue;
} else {
var vec__31142_31194 = cljs.core.first.call(null,seq__31123_31188__$1);
var name_31195 = cljs.core.nth.call(null,vec__31142_31194,(0),null);
var map__31145_31196 = cljs.core.nth.call(null,vec__31142_31194,(1),null);
var map__31145_31197__$1 = (((((!((map__31145_31196 == null))))?(((((map__31145_31196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31145_31196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31145_31196):map__31145_31196);
var doc_31198 = cljs.core.get.call(null,map__31145_31197__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31199 = cljs.core.get.call(null,map__31145_31197__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31195);

cljs.core.println.call(null," ",arglists_31199);

if(cljs.core.truth_(doc_31198)){
cljs.core.println.call(null," ",doc_31198);
} else {
}


var G__31200 = cljs.core.next.call(null,seq__31123_31188__$1);
var G__31201 = null;
var G__31202 = (0);
var G__31203 = (0);
seq__31123_31173 = G__31200;
chunk__31124_31174 = G__31201;
count__31125_31175 = G__31202;
i__31126_31176 = G__31203;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__31147 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31148 = null;
var count__31149 = (0);
var i__31150 = (0);
while(true){
if((i__31150 < count__31149)){
var role = cljs.core._nth.call(null,chunk__31148,i__31150);
var temp__5720__auto___31204__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31204__$1)){
var spec_31205 = temp__5720__auto___31204__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31205));
} else {
}


var G__31206 = seq__31147;
var G__31207 = chunk__31148;
var G__31208 = count__31149;
var G__31209 = (i__31150 + (1));
seq__31147 = G__31206;
chunk__31148 = G__31207;
count__31149 = G__31208;
i__31150 = G__31209;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__31147);
if(temp__5720__auto____$1){
var seq__31147__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31147__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31147__$1);
var G__31210 = cljs.core.chunk_rest.call(null,seq__31147__$1);
var G__31211 = c__4550__auto__;
var G__31212 = cljs.core.count.call(null,c__4550__auto__);
var G__31213 = (0);
seq__31147 = G__31210;
chunk__31148 = G__31211;
count__31149 = G__31212;
i__31150 = G__31213;
continue;
} else {
var role = cljs.core.first.call(null,seq__31147__$1);
var temp__5720__auto___31214__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31214__$2)){
var spec_31215 = temp__5720__auto___31214__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31215));
} else {
}


var G__31216 = cljs.core.next.call(null,seq__31147__$1);
var G__31217 = null;
var G__31218 = (0);
var G__31219 = (0);
seq__31147 = G__31216;
chunk__31148 = G__31217;
count__31149 = G__31218;
i__31150 = G__31219;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31220 = cljs.core.conj.call(null,via,t);
var G__31221 = cljs.core.ex_cause.call(null,t);
via = G__31220;
t = G__31221;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31224 = datafied_throwable;
var map__31224__$1 = (((((!((map__31224 == null))))?(((((map__31224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31224):map__31224);
var via = cljs.core.get.call(null,map__31224__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31224__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31224__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31225 = cljs.core.last.call(null,via);
var map__31225__$1 = (((((!((map__31225 == null))))?(((((map__31225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31225):map__31225);
var type = cljs.core.get.call(null,map__31225__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31225__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31225__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31226 = data;
var map__31226__$1 = (((((!((map__31226 == null))))?(((((map__31226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31226):map__31226);
var problems = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31227 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31227__$1 = (((((!((map__31227 == null))))?(((((map__31227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31227):map__31227);
var top_data = map__31227__$1;
var source = cljs.core.get.call(null,map__31227__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31232 = phase;
var G__31232__$1 = (((G__31232 instanceof cljs.core.Keyword))?G__31232.fqn:null);
switch (G__31232__$1) {
case "read-source":
var map__31233 = data;
var map__31233__$1 = (((((!((map__31233 == null))))?(((((map__31233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31233):map__31233);
var line = cljs.core.get.call(null,map__31233__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31233__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31235 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31235__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31235,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31235);
var G__31235__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31235__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31235__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31235__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31235__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31236 = top_data;
var G__31236__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31236,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31236);
var G__31236__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31236__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31236__$1);
var G__31236__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31236__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31236__$2);
var G__31236__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31236__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31236__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31236__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31236__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31237 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31237,(0),null);
var method = cljs.core.nth.call(null,vec__31237,(1),null);
var file = cljs.core.nth.call(null,vec__31237,(2),null);
var line = cljs.core.nth.call(null,vec__31237,(3),null);
var G__31240 = top_data;
var G__31240__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31240,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31240);
var G__31240__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31240__$1);
var G__31240__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__31240__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31240__$2);
var G__31240__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31240__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31240__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31240__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31240__$4;
}

break;
case "execution":
var vec__31241 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31241,(0),null);
var method = cljs.core.nth.call(null,vec__31241,(1),null);
var file = cljs.core.nth.call(null,vec__31241,(2),null);
var line = cljs.core.nth.call(null,vec__31241,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__31241,source__$1,method,file,line,G__31232,G__31232__$1,map__31224,map__31224__$1,via,trace,phase,map__31225,map__31225__$1,type,message,data,map__31226,map__31226__$1,problems,fn,caller,map__31227,map__31227__$1,top_data,source){
return (function (p1__31223_SHARP_){
var or__4131__auto__ = (p1__31223_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31223_SHARP_);
}
});})(vec__31241,source__$1,method,file,line,G__31232,G__31232__$1,map__31224,map__31224__$1,via,trace,phase,map__31225,map__31225__$1,type,message,data,map__31226,map__31226__$1,problems,fn,caller,map__31227,map__31227__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31244 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31244__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31244,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31244);
var G__31244__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31244__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31244__$1);
var G__31244__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31244__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31244__$2);
var G__31244__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31244__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31244__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31244__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31244__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31232__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31248){
var map__31249 = p__31248;
var map__31249__$1 = (((((!((map__31249 == null))))?(((((map__31249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31249):map__31249);
var triage_data = map__31249__$1;
var phase = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31251 = phase;
var G__31251__$1 = (((G__31251 instanceof cljs.core.Keyword))?G__31251.fqn:null);
switch (G__31251__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31252_31261 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31253_31262 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31254_31263 = true;
var _STAR_print_fn_STAR__temp_val__31255_31264 = ((function (_STAR_print_newline_STAR__orig_val__31252_31261,_STAR_print_fn_STAR__orig_val__31253_31262,_STAR_print_newline_STAR__temp_val__31254_31263,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31252_31261,_STAR_print_fn_STAR__orig_val__31253_31262,_STAR_print_newline_STAR__temp_val__31254_31263,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31254_31263;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31255_31264;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31252_31261,_STAR_print_fn_STAR__orig_val__31253_31262,_STAR_print_newline_STAR__temp_val__31254_31263,_STAR_print_fn_STAR__temp_val__31255_31264,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31252_31261,_STAR_print_fn_STAR__orig_val__31253_31262,_STAR_print_newline_STAR__temp_val__31254_31263,_STAR_print_fn_STAR__temp_val__31255_31264,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31246_SHARP_){
return cljs.core.dissoc.call(null,p1__31246_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31252_31261,_STAR_print_fn_STAR__orig_val__31253_31262,_STAR_print_newline_STAR__temp_val__31254_31263,_STAR_print_fn_STAR__temp_val__31255_31264,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31252_31261,_STAR_print_fn_STAR__orig_val__31253_31262,_STAR_print_newline_STAR__temp_val__31254_31263,_STAR_print_fn_STAR__temp_val__31255_31264,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31253_31262;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31252_31261;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31256_31265 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31257_31266 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31258_31267 = true;
var _STAR_print_fn_STAR__temp_val__31259_31268 = ((function (_STAR_print_newline_STAR__orig_val__31256_31265,_STAR_print_fn_STAR__orig_val__31257_31266,_STAR_print_newline_STAR__temp_val__31258_31267,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31256_31265,_STAR_print_fn_STAR__orig_val__31257_31266,_STAR_print_newline_STAR__temp_val__31258_31267,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31258_31267;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31259_31268;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31256_31265,_STAR_print_fn_STAR__orig_val__31257_31266,_STAR_print_newline_STAR__temp_val__31258_31267,_STAR_print_fn_STAR__temp_val__31259_31268,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31256_31265,_STAR_print_fn_STAR__orig_val__31257_31266,_STAR_print_newline_STAR__temp_val__31258_31267,_STAR_print_fn_STAR__temp_val__31259_31268,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31247_SHARP_){
return cljs.core.dissoc.call(null,p1__31247_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31256_31265,_STAR_print_fn_STAR__orig_val__31257_31266,_STAR_print_newline_STAR__temp_val__31258_31267,_STAR_print_fn_STAR__temp_val__31259_31268,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31256_31265,_STAR_print_fn_STAR__orig_val__31257_31266,_STAR_print_newline_STAR__temp_val__31258_31267,_STAR_print_fn_STAR__temp_val__31259_31268,sb__4661__auto__,G__31251,G__31251__$1,loc,class_name,simple_class,cause_type,format,map__31249,map__31249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31257_31266;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31256_31265;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31251__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1567734179684
