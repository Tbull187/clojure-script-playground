// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__57223_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__57223_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__57224 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__57225 = null;
var count__57226 = (0);
var i__57227 = (0);
while(true){
if((i__57227 < count__57226)){
var n = cljs.core._nth.call(null,chunk__57225,i__57227);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__57228 = seq__57224;
var G__57229 = chunk__57225;
var G__57230 = count__57226;
var G__57231 = (i__57227 + (1));
seq__57224 = G__57228;
chunk__57225 = G__57229;
count__57226 = G__57230;
i__57227 = G__57231;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__57224);
if(temp__5720__auto__){
var seq__57224__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57224__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__57224__$1);
var G__57232 = cljs.core.chunk_rest.call(null,seq__57224__$1);
var G__57233 = c__4550__auto__;
var G__57234 = cljs.core.count.call(null,c__4550__auto__);
var G__57235 = (0);
seq__57224 = G__57232;
chunk__57225 = G__57233;
count__57226 = G__57234;
i__57227 = G__57235;
continue;
} else {
var n = cljs.core.first.call(null,seq__57224__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__57236 = cljs.core.next.call(null,seq__57224__$1);
var G__57237 = null;
var G__57238 = (0);
var G__57239 = (0);
seq__57224 = G__57236;
chunk__57225 = G__57237;
count__57226 = G__57238;
i__57227 = G__57239;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__57240){
var vec__57241 = p__57240;
var _ = cljs.core.nth.call(null,vec__57241,(0),null);
var v = cljs.core.nth.call(null,vec__57241,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__57244){
var vec__57245 = p__57244;
var k = cljs.core.nth.call(null,vec__57245,(0),null);
var v = cljs.core.nth.call(null,vec__57245,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__57257_57265 = cljs.core.seq.call(null,deps);
var chunk__57258_57266 = null;
var count__57259_57267 = (0);
var i__57260_57268 = (0);
while(true){
if((i__57260_57268 < count__57259_57267)){
var dep_57269 = cljs.core._nth.call(null,chunk__57258_57266,i__57260_57268);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_57269;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_57269));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_57269,(depth + (1)),state);
} else {
}


var G__57270 = seq__57257_57265;
var G__57271 = chunk__57258_57266;
var G__57272 = count__57259_57267;
var G__57273 = (i__57260_57268 + (1));
seq__57257_57265 = G__57270;
chunk__57258_57266 = G__57271;
count__57259_57267 = G__57272;
i__57260_57268 = G__57273;
continue;
} else {
var temp__5720__auto___57274 = cljs.core.seq.call(null,seq__57257_57265);
if(temp__5720__auto___57274){
var seq__57257_57275__$1 = temp__5720__auto___57274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57257_57275__$1)){
var c__4550__auto___57276 = cljs.core.chunk_first.call(null,seq__57257_57275__$1);
var G__57277 = cljs.core.chunk_rest.call(null,seq__57257_57275__$1);
var G__57278 = c__4550__auto___57276;
var G__57279 = cljs.core.count.call(null,c__4550__auto___57276);
var G__57280 = (0);
seq__57257_57265 = G__57277;
chunk__57258_57266 = G__57278;
count__57259_57267 = G__57279;
i__57260_57268 = G__57280;
continue;
} else {
var dep_57281 = cljs.core.first.call(null,seq__57257_57275__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_57281;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_57281));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_57281,(depth + (1)),state);
} else {
}


var G__57282 = cljs.core.next.call(null,seq__57257_57275__$1);
var G__57283 = null;
var G__57284 = (0);
var G__57285 = (0);
seq__57257_57265 = G__57282;
chunk__57258_57266 = G__57283;
count__57259_57267 = G__57284;
i__57260_57268 = G__57285;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__57261){
var vec__57262 = p__57261;
var seq__57263 = cljs.core.seq.call(null,vec__57262);
var first__57264 = cljs.core.first.call(null,seq__57263);
var seq__57263__$1 = cljs.core.next.call(null,seq__57263);
var x = first__57264;
var xs = seq__57263__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__57262,seq__57263,first__57264,seq__57263__$1,x,xs,get_deps__$1){
return (function (p1__57248_SHARP_){
return clojure.set.difference.call(null,p1__57248_SHARP_,x);
});})(vec__57262,seq__57263,first__57264,seq__57263__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__57286 = cljs.core.seq.call(null,provides);
var chunk__57287 = null;
var count__57288 = (0);
var i__57289 = (0);
while(true){
if((i__57289 < count__57288)){
var prov = cljs.core._nth.call(null,chunk__57287,i__57289);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57298_57306 = cljs.core.seq.call(null,requires);
var chunk__57299_57307 = null;
var count__57300_57308 = (0);
var i__57301_57309 = (0);
while(true){
if((i__57301_57309 < count__57300_57308)){
var req_57310 = cljs.core._nth.call(null,chunk__57299_57307,i__57301_57309);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57310,prov);


var G__57311 = seq__57298_57306;
var G__57312 = chunk__57299_57307;
var G__57313 = count__57300_57308;
var G__57314 = (i__57301_57309 + (1));
seq__57298_57306 = G__57311;
chunk__57299_57307 = G__57312;
count__57300_57308 = G__57313;
i__57301_57309 = G__57314;
continue;
} else {
var temp__5720__auto___57315 = cljs.core.seq.call(null,seq__57298_57306);
if(temp__5720__auto___57315){
var seq__57298_57316__$1 = temp__5720__auto___57315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57298_57316__$1)){
var c__4550__auto___57317 = cljs.core.chunk_first.call(null,seq__57298_57316__$1);
var G__57318 = cljs.core.chunk_rest.call(null,seq__57298_57316__$1);
var G__57319 = c__4550__auto___57317;
var G__57320 = cljs.core.count.call(null,c__4550__auto___57317);
var G__57321 = (0);
seq__57298_57306 = G__57318;
chunk__57299_57307 = G__57319;
count__57300_57308 = G__57320;
i__57301_57309 = G__57321;
continue;
} else {
var req_57322 = cljs.core.first.call(null,seq__57298_57316__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57322,prov);


var G__57323 = cljs.core.next.call(null,seq__57298_57316__$1);
var G__57324 = null;
var G__57325 = (0);
var G__57326 = (0);
seq__57298_57306 = G__57323;
chunk__57299_57307 = G__57324;
count__57300_57308 = G__57325;
i__57301_57309 = G__57326;
continue;
}
} else {
}
}
break;
}


var G__57327 = seq__57286;
var G__57328 = chunk__57287;
var G__57329 = count__57288;
var G__57330 = (i__57289 + (1));
seq__57286 = G__57327;
chunk__57287 = G__57328;
count__57288 = G__57329;
i__57289 = G__57330;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__57286);
if(temp__5720__auto__){
var seq__57286__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57286__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__57286__$1);
var G__57331 = cljs.core.chunk_rest.call(null,seq__57286__$1);
var G__57332 = c__4550__auto__;
var G__57333 = cljs.core.count.call(null,c__4550__auto__);
var G__57334 = (0);
seq__57286 = G__57331;
chunk__57287 = G__57332;
count__57288 = G__57333;
i__57289 = G__57334;
continue;
} else {
var prov = cljs.core.first.call(null,seq__57286__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57302_57335 = cljs.core.seq.call(null,requires);
var chunk__57303_57336 = null;
var count__57304_57337 = (0);
var i__57305_57338 = (0);
while(true){
if((i__57305_57338 < count__57304_57337)){
var req_57339 = cljs.core._nth.call(null,chunk__57303_57336,i__57305_57338);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57339,prov);


var G__57340 = seq__57302_57335;
var G__57341 = chunk__57303_57336;
var G__57342 = count__57304_57337;
var G__57343 = (i__57305_57338 + (1));
seq__57302_57335 = G__57340;
chunk__57303_57336 = G__57341;
count__57304_57337 = G__57342;
i__57305_57338 = G__57343;
continue;
} else {
var temp__5720__auto___57344__$1 = cljs.core.seq.call(null,seq__57302_57335);
if(temp__5720__auto___57344__$1){
var seq__57302_57345__$1 = temp__5720__auto___57344__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57302_57345__$1)){
var c__4550__auto___57346 = cljs.core.chunk_first.call(null,seq__57302_57345__$1);
var G__57347 = cljs.core.chunk_rest.call(null,seq__57302_57345__$1);
var G__57348 = c__4550__auto___57346;
var G__57349 = cljs.core.count.call(null,c__4550__auto___57346);
var G__57350 = (0);
seq__57302_57335 = G__57347;
chunk__57303_57336 = G__57348;
count__57304_57337 = G__57349;
i__57305_57338 = G__57350;
continue;
} else {
var req_57351 = cljs.core.first.call(null,seq__57302_57345__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57351,prov);


var G__57352 = cljs.core.next.call(null,seq__57302_57345__$1);
var G__57353 = null;
var G__57354 = (0);
var G__57355 = (0);
seq__57302_57335 = G__57352;
chunk__57303_57336 = G__57353;
count__57304_57337 = G__57354;
i__57305_57338 = G__57355;
continue;
}
} else {
}
}
break;
}


var G__57356 = cljs.core.next.call(null,seq__57286__$1);
var G__57357 = null;
var G__57358 = (0);
var G__57359 = (0);
seq__57286 = G__57356;
chunk__57287 = G__57357;
count__57288 = G__57358;
i__57289 = G__57359;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__57360_57364 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__57361_57365 = null;
var count__57362_57366 = (0);
var i__57363_57367 = (0);
while(true){
if((i__57363_57367 < count__57362_57366)){
var ns_57368 = cljs.core._nth.call(null,chunk__57361_57365,i__57363_57367);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57368);


var G__57369 = seq__57360_57364;
var G__57370 = chunk__57361_57365;
var G__57371 = count__57362_57366;
var G__57372 = (i__57363_57367 + (1));
seq__57360_57364 = G__57369;
chunk__57361_57365 = G__57370;
count__57362_57366 = G__57371;
i__57363_57367 = G__57372;
continue;
} else {
var temp__5720__auto___57373 = cljs.core.seq.call(null,seq__57360_57364);
if(temp__5720__auto___57373){
var seq__57360_57374__$1 = temp__5720__auto___57373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57360_57374__$1)){
var c__4550__auto___57375 = cljs.core.chunk_first.call(null,seq__57360_57374__$1);
var G__57376 = cljs.core.chunk_rest.call(null,seq__57360_57374__$1);
var G__57377 = c__4550__auto___57375;
var G__57378 = cljs.core.count.call(null,c__4550__auto___57375);
var G__57379 = (0);
seq__57360_57364 = G__57376;
chunk__57361_57365 = G__57377;
count__57362_57366 = G__57378;
i__57363_57367 = G__57379;
continue;
} else {
var ns_57380 = cljs.core.first.call(null,seq__57360_57374__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57380);


var G__57381 = cljs.core.next.call(null,seq__57360_57374__$1);
var G__57382 = null;
var G__57383 = (0);
var G__57384 = (0);
seq__57360_57364 = G__57381;
chunk__57361_57365 = G__57382;
count__57362_57366 = G__57383;
i__57363_57367 = G__57384;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__57385__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__57385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57386__i = 0, G__57386__a = new Array(arguments.length -  0);
while (G__57386__i < G__57386__a.length) {G__57386__a[G__57386__i] = arguments[G__57386__i + 0]; ++G__57386__i;}
  args = new cljs.core.IndexedSeq(G__57386__a,0,null);
} 
return G__57385__delegate.call(this,args);};
G__57385.cljs$lang$maxFixedArity = 0;
G__57385.cljs$lang$applyTo = (function (arglist__57387){
var args = cljs.core.seq(arglist__57387);
return G__57385__delegate(args);
});
G__57385.cljs$core$IFn$_invoke$arity$variadic = G__57385__delegate;
return G__57385;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__57388_SHARP_,p2__57389_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57388_SHARP_)),p2__57389_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__57390_SHARP_,p2__57391_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57390_SHARP_),p2__57391_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__57392 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__57392.addCallback(((function (G__57392){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__57392))
);

G__57392.addErrback(((function (G__57392){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__57392))
);

return G__57392;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e57393){if((e57393 instanceof Error)){
var e = e57393;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57393;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e57394){if((e57394 instanceof Error)){
var e = e57394;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57394;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__57395 = cljs.core._EQ_;
var expr__57396 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__57395.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57396))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__57395.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__57396))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__57395.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__57396))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__57395,expr__57396){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__57395,expr__57396))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__57398,callback){
var map__57399 = p__57398;
var map__57399__$1 = (((((!((map__57399 == null))))?(((((map__57399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57399):map__57399);
var file_msg = map__57399__$1;
var request_url = cljs.core.get.call(null,map__57399__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__57399,map__57399__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__57399,map__57399__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__){
return (function (state_57437){
var state_val_57438 = (state_57437[(1)]);
if((state_val_57438 === (7))){
var inst_57433 = (state_57437[(2)]);
var state_57437__$1 = state_57437;
var statearr_57439_57465 = state_57437__$1;
(statearr_57439_57465[(2)] = inst_57433);

(statearr_57439_57465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (1))){
var state_57437__$1 = state_57437;
var statearr_57440_57466 = state_57437__$1;
(statearr_57440_57466[(2)] = null);

(statearr_57440_57466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (4))){
var inst_57403 = (state_57437[(7)]);
var inst_57403__$1 = (state_57437[(2)]);
var state_57437__$1 = (function (){var statearr_57441 = state_57437;
(statearr_57441[(7)] = inst_57403__$1);

return statearr_57441;
})();
if(cljs.core.truth_(inst_57403__$1)){
var statearr_57442_57467 = state_57437__$1;
(statearr_57442_57467[(1)] = (5));

} else {
var statearr_57443_57468 = state_57437__$1;
(statearr_57443_57468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (15))){
var inst_57416 = (state_57437[(8)]);
var inst_57418 = (state_57437[(9)]);
var inst_57420 = inst_57418.call(null,inst_57416);
var state_57437__$1 = state_57437;
var statearr_57444_57469 = state_57437__$1;
(statearr_57444_57469[(2)] = inst_57420);

(statearr_57444_57469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (13))){
var inst_57427 = (state_57437[(2)]);
var state_57437__$1 = state_57437;
var statearr_57445_57470 = state_57437__$1;
(statearr_57445_57470[(2)] = inst_57427);

(statearr_57445_57470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (6))){
var state_57437__$1 = state_57437;
var statearr_57446_57471 = state_57437__$1;
(statearr_57446_57471[(2)] = null);

(statearr_57446_57471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (17))){
var inst_57424 = (state_57437[(2)]);
var state_57437__$1 = state_57437;
var statearr_57447_57472 = state_57437__$1;
(statearr_57447_57472[(2)] = inst_57424);

(statearr_57447_57472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (3))){
var inst_57435 = (state_57437[(2)]);
var state_57437__$1 = state_57437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57437__$1,inst_57435);
} else {
if((state_val_57438 === (12))){
var state_57437__$1 = state_57437;
var statearr_57448_57473 = state_57437__$1;
(statearr_57448_57473[(2)] = null);

(statearr_57448_57473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (2))){
var state_57437__$1 = state_57437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57437__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_57438 === (11))){
var inst_57408 = (state_57437[(10)]);
var inst_57414 = figwheel.client.file_reloading.blocking_load.call(null,inst_57408);
var state_57437__$1 = state_57437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57437__$1,(14),inst_57414);
} else {
if((state_val_57438 === (9))){
var inst_57408 = (state_57437[(10)]);
var state_57437__$1 = state_57437;
if(cljs.core.truth_(inst_57408)){
var statearr_57449_57474 = state_57437__$1;
(statearr_57449_57474[(1)] = (11));

} else {
var statearr_57450_57475 = state_57437__$1;
(statearr_57450_57475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (5))){
var inst_57409 = (state_57437[(11)]);
var inst_57403 = (state_57437[(7)]);
var inst_57408 = cljs.core.nth.call(null,inst_57403,(0),null);
var inst_57409__$1 = cljs.core.nth.call(null,inst_57403,(1),null);
var state_57437__$1 = (function (){var statearr_57451 = state_57437;
(statearr_57451[(11)] = inst_57409__$1);

(statearr_57451[(10)] = inst_57408);

return statearr_57451;
})();
if(cljs.core.truth_(inst_57409__$1)){
var statearr_57452_57476 = state_57437__$1;
(statearr_57452_57476[(1)] = (8));

} else {
var statearr_57453_57477 = state_57437__$1;
(statearr_57453_57477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (14))){
var inst_57408 = (state_57437[(10)]);
var inst_57418 = (state_57437[(9)]);
var inst_57416 = (state_57437[(2)]);
var inst_57417 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_57418__$1 = cljs.core.get.call(null,inst_57417,inst_57408);
var state_57437__$1 = (function (){var statearr_57454 = state_57437;
(statearr_57454[(8)] = inst_57416);

(statearr_57454[(9)] = inst_57418__$1);

return statearr_57454;
})();
if(cljs.core.truth_(inst_57418__$1)){
var statearr_57455_57478 = state_57437__$1;
(statearr_57455_57478[(1)] = (15));

} else {
var statearr_57456_57479 = state_57437__$1;
(statearr_57456_57479[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (16))){
var inst_57416 = (state_57437[(8)]);
var inst_57422 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_57416);
var state_57437__$1 = state_57437;
var statearr_57457_57480 = state_57437__$1;
(statearr_57457_57480[(2)] = inst_57422);

(statearr_57457_57480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (10))){
var inst_57429 = (state_57437[(2)]);
var state_57437__$1 = (function (){var statearr_57458 = state_57437;
(statearr_57458[(12)] = inst_57429);

return statearr_57458;
})();
var statearr_57459_57481 = state_57437__$1;
(statearr_57459_57481[(2)] = null);

(statearr_57459_57481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57438 === (8))){
var inst_57409 = (state_57437[(11)]);
var inst_57411 = eval(inst_57409);
var state_57437__$1 = state_57437;
var statearr_57460_57482 = state_57437__$1;
(statearr_57460_57482[(2)] = inst_57411);

(statearr_57460_57482[(1)] = (10));


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
});})(c__22787__auto__))
;
return ((function (switch__22764__auto__,c__22787__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22765__auto__ = null;
var figwheel$client$file_reloading$state_machine__22765__auto____0 = (function (){
var statearr_57461 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57461[(0)] = figwheel$client$file_reloading$state_machine__22765__auto__);

(statearr_57461[(1)] = (1));

return statearr_57461;
});
var figwheel$client$file_reloading$state_machine__22765__auto____1 = (function (state_57437){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_57437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e57462){if((e57462 instanceof Object)){
var ex__22768__auto__ = e57462;
var statearr_57463_57483 = state_57437;
(statearr_57463_57483[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57484 = state_57437;
state_57437 = G__57484;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22765__auto__ = function(state_57437){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22765__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22765__auto____1.call(this,state_57437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22765__auto____0;
figwheel$client$file_reloading$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22765__auto____1;
return figwheel$client$file_reloading$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__))
})();
var state__22789__auto__ = (function (){var statearr_57464 = f__22788__auto__.call(null);
(statearr_57464[(6)] = c__22787__auto__);

return statearr_57464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__))
);

return c__22787__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__57486 = arguments.length;
switch (G__57486) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__57488,callback){
var map__57489 = p__57488;
var map__57489__$1 = (((((!((map__57489 == null))))?(((((map__57489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57489):map__57489);
var file_msg = map__57489__$1;
var namespace = cljs.core.get.call(null,map__57489__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__57489,map__57489__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__57489,map__57489__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__57491){
var map__57492 = p__57491;
var map__57492__$1 = (((((!((map__57492 == null))))?(((((map__57492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57492):map__57492);
var file_msg = map__57492__$1;
var namespace = cljs.core.get.call(null,map__57492__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__57494){
var map__57495 = p__57494;
var map__57495__$1 = (((((!((map__57495 == null))))?(((((map__57495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57495):map__57495);
var file_msg = map__57495__$1;
var namespace = cljs.core.get.call(null,map__57495__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__57497,callback){
var map__57498 = p__57497;
var map__57498__$1 = (((((!((map__57498 == null))))?(((((map__57498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57498):map__57498);
var file_msg = map__57498__$1;
var request_url = cljs.core.get.call(null,map__57498__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__57498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22787__auto___57548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___57548,out){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___57548,out){
return (function (state_57533){
var state_val_57534 = (state_57533[(1)]);
if((state_val_57534 === (1))){
var inst_57507 = cljs.core.seq.call(null,files);
var inst_57508 = cljs.core.first.call(null,inst_57507);
var inst_57509 = cljs.core.next.call(null,inst_57507);
var inst_57510 = files;
var state_57533__$1 = (function (){var statearr_57535 = state_57533;
(statearr_57535[(7)] = inst_57510);

(statearr_57535[(8)] = inst_57509);

(statearr_57535[(9)] = inst_57508);

return statearr_57535;
})();
var statearr_57536_57549 = state_57533__$1;
(statearr_57536_57549[(2)] = null);

(statearr_57536_57549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57534 === (2))){
var inst_57516 = (state_57533[(10)]);
var inst_57510 = (state_57533[(7)]);
var inst_57515 = cljs.core.seq.call(null,inst_57510);
var inst_57516__$1 = cljs.core.first.call(null,inst_57515);
var inst_57517 = cljs.core.next.call(null,inst_57515);
var inst_57518 = (inst_57516__$1 == null);
var inst_57519 = cljs.core.not.call(null,inst_57518);
var state_57533__$1 = (function (){var statearr_57537 = state_57533;
(statearr_57537[(10)] = inst_57516__$1);

(statearr_57537[(11)] = inst_57517);

return statearr_57537;
})();
if(inst_57519){
var statearr_57538_57550 = state_57533__$1;
(statearr_57538_57550[(1)] = (4));

} else {
var statearr_57539_57551 = state_57533__$1;
(statearr_57539_57551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57534 === (3))){
var inst_57531 = (state_57533[(2)]);
var state_57533__$1 = state_57533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57533__$1,inst_57531);
} else {
if((state_val_57534 === (4))){
var inst_57516 = (state_57533[(10)]);
var inst_57521 = figwheel.client.file_reloading.reload_js_file.call(null,inst_57516);
var state_57533__$1 = state_57533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57533__$1,(7),inst_57521);
} else {
if((state_val_57534 === (5))){
var inst_57527 = cljs.core.async.close_BANG_.call(null,out);
var state_57533__$1 = state_57533;
var statearr_57540_57552 = state_57533__$1;
(statearr_57540_57552[(2)] = inst_57527);

(statearr_57540_57552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57534 === (6))){
var inst_57529 = (state_57533[(2)]);
var state_57533__$1 = state_57533;
var statearr_57541_57553 = state_57533__$1;
(statearr_57541_57553[(2)] = inst_57529);

(statearr_57541_57553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57534 === (7))){
var inst_57517 = (state_57533[(11)]);
var inst_57523 = (state_57533[(2)]);
var inst_57524 = cljs.core.async.put_BANG_.call(null,out,inst_57523);
var inst_57510 = inst_57517;
var state_57533__$1 = (function (){var statearr_57542 = state_57533;
(statearr_57542[(7)] = inst_57510);

(statearr_57542[(12)] = inst_57524);

return statearr_57542;
})();
var statearr_57543_57554 = state_57533__$1;
(statearr_57543_57554[(2)] = null);

(statearr_57543_57554[(1)] = (2));


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
});})(c__22787__auto___57548,out))
;
return ((function (switch__22764__auto__,c__22787__auto___57548,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto____0 = (function (){
var statearr_57544 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57544[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto__);

(statearr_57544[(1)] = (1));

return statearr_57544;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto____1 = (function (state_57533){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_57533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e57545){if((e57545 instanceof Object)){
var ex__22768__auto__ = e57545;
var statearr_57546_57555 = state_57533;
(statearr_57546_57555[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57556 = state_57533;
state_57533 = G__57556;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto__ = function(state_57533){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto____1.call(this,state_57533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___57548,out))
})();
var state__22789__auto__ = (function (){var statearr_57547 = f__22788__auto__.call(null);
(statearr_57547[(6)] = c__22787__auto___57548);

return statearr_57547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___57548,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__57557,opts){
var map__57558 = p__57557;
var map__57558__$1 = (((((!((map__57558 == null))))?(((((map__57558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57558):map__57558);
var eval_body = cljs.core.get.call(null,map__57558__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__57558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e57560){var e = e57560;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__57561_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__57561_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__57562){
var vec__57563 = p__57562;
var k = cljs.core.nth.call(null,vec__57563,(0),null);
var v = cljs.core.nth.call(null,vec__57563,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__57566){
var vec__57567 = p__57566;
var k = cljs.core.nth.call(null,vec__57567,(0),null);
var v = cljs.core.nth.call(null,vec__57567,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__57573,p__57574){
var map__57575 = p__57573;
var map__57575__$1 = (((((!((map__57575 == null))))?(((((map__57575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57575):map__57575);
var opts = map__57575__$1;
var before_jsload = cljs.core.get.call(null,map__57575__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__57575__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__57575__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__57576 = p__57574;
var map__57576__$1 = (((((!((map__57576 == null))))?(((((map__57576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57576):map__57576);
var msg = map__57576__$1;
var files = cljs.core.get.call(null,map__57576__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__57576__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__57576__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_57730){
var state_val_57731 = (state_57730[(1)]);
if((state_val_57731 === (7))){
var inst_57591 = (state_57730[(7)]);
var inst_57592 = (state_57730[(8)]);
var inst_57590 = (state_57730[(9)]);
var inst_57593 = (state_57730[(10)]);
var inst_57598 = cljs.core._nth.call(null,inst_57591,inst_57593);
var inst_57599 = figwheel.client.file_reloading.eval_body.call(null,inst_57598,opts);
var inst_57600 = (inst_57593 + (1));
var tmp57732 = inst_57591;
var tmp57733 = inst_57592;
var tmp57734 = inst_57590;
var inst_57590__$1 = tmp57734;
var inst_57591__$1 = tmp57732;
var inst_57592__$1 = tmp57733;
var inst_57593__$1 = inst_57600;
var state_57730__$1 = (function (){var statearr_57735 = state_57730;
(statearr_57735[(7)] = inst_57591__$1);

(statearr_57735[(8)] = inst_57592__$1);

(statearr_57735[(11)] = inst_57599);

(statearr_57735[(9)] = inst_57590__$1);

(statearr_57735[(10)] = inst_57593__$1);

return statearr_57735;
})();
var statearr_57736_57819 = state_57730__$1;
(statearr_57736_57819[(2)] = null);

(statearr_57736_57819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (20))){
var inst_57633 = (state_57730[(12)]);
var inst_57641 = figwheel.client.file_reloading.sort_files.call(null,inst_57633);
var state_57730__$1 = state_57730;
var statearr_57737_57820 = state_57730__$1;
(statearr_57737_57820[(2)] = inst_57641);

(statearr_57737_57820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (27))){
var state_57730__$1 = state_57730;
var statearr_57738_57821 = state_57730__$1;
(statearr_57738_57821[(2)] = null);

(statearr_57738_57821[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (1))){
var inst_57582 = (state_57730[(13)]);
var inst_57579 = before_jsload.call(null,files);
var inst_57580 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_57581 = (function (){return ((function (inst_57582,inst_57579,inst_57580,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57570_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__57570_SHARP_);
});
;})(inst_57582,inst_57579,inst_57580,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57582__$1 = cljs.core.filter.call(null,inst_57581,files);
var inst_57583 = cljs.core.not_empty.call(null,inst_57582__$1);
var state_57730__$1 = (function (){var statearr_57739 = state_57730;
(statearr_57739[(14)] = inst_57579);

(statearr_57739[(15)] = inst_57580);

(statearr_57739[(13)] = inst_57582__$1);

return statearr_57739;
})();
if(cljs.core.truth_(inst_57583)){
var statearr_57740_57822 = state_57730__$1;
(statearr_57740_57822[(1)] = (2));

} else {
var statearr_57741_57823 = state_57730__$1;
(statearr_57741_57823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (24))){
var state_57730__$1 = state_57730;
var statearr_57742_57824 = state_57730__$1;
(statearr_57742_57824[(2)] = null);

(statearr_57742_57824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (39))){
var inst_57683 = (state_57730[(16)]);
var state_57730__$1 = state_57730;
var statearr_57743_57825 = state_57730__$1;
(statearr_57743_57825[(2)] = inst_57683);

(statearr_57743_57825[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (46))){
var inst_57725 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
var statearr_57744_57826 = state_57730__$1;
(statearr_57744_57826[(2)] = inst_57725);

(statearr_57744_57826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (4))){
var inst_57627 = (state_57730[(2)]);
var inst_57628 = cljs.core.List.EMPTY;
var inst_57629 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_57628);
var inst_57630 = (function (){return ((function (inst_57627,inst_57628,inst_57629,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57571_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__57571_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__57571_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__57571_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_57627,inst_57628,inst_57629,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57631 = cljs.core.filter.call(null,inst_57630,files);
var inst_57632 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_57633 = cljs.core.concat.call(null,inst_57631,inst_57632);
var state_57730__$1 = (function (){var statearr_57745 = state_57730;
(statearr_57745[(12)] = inst_57633);

(statearr_57745[(17)] = inst_57627);

(statearr_57745[(18)] = inst_57629);

return statearr_57745;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_57746_57827 = state_57730__$1;
(statearr_57746_57827[(1)] = (16));

} else {
var statearr_57747_57828 = state_57730__$1;
(statearr_57747_57828[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (15))){
var inst_57617 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
var statearr_57748_57829 = state_57730__$1;
(statearr_57748_57829[(2)] = inst_57617);

(statearr_57748_57829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (21))){
var inst_57643 = (state_57730[(19)]);
var inst_57643__$1 = (state_57730[(2)]);
var inst_57644 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_57643__$1);
var state_57730__$1 = (function (){var statearr_57749 = state_57730;
(statearr_57749[(19)] = inst_57643__$1);

return statearr_57749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57730__$1,(22),inst_57644);
} else {
if((state_val_57731 === (31))){
var inst_57728 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57730__$1,inst_57728);
} else {
if((state_val_57731 === (32))){
var inst_57683 = (state_57730[(16)]);
var inst_57688 = inst_57683.cljs$lang$protocol_mask$partition0$;
var inst_57689 = (inst_57688 & (64));
var inst_57690 = inst_57683.cljs$core$ISeq$;
var inst_57691 = (cljs.core.PROTOCOL_SENTINEL === inst_57690);
var inst_57692 = ((inst_57689) || (inst_57691));
var state_57730__$1 = state_57730;
if(cljs.core.truth_(inst_57692)){
var statearr_57750_57830 = state_57730__$1;
(statearr_57750_57830[(1)] = (35));

} else {
var statearr_57751_57831 = state_57730__$1;
(statearr_57751_57831[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (40))){
var inst_57705 = (state_57730[(20)]);
var inst_57704 = (state_57730[(2)]);
var inst_57705__$1 = cljs.core.get.call(null,inst_57704,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_57706 = cljs.core.get.call(null,inst_57704,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_57707 = cljs.core.not_empty.call(null,inst_57705__$1);
var state_57730__$1 = (function (){var statearr_57752 = state_57730;
(statearr_57752[(20)] = inst_57705__$1);

(statearr_57752[(21)] = inst_57706);

return statearr_57752;
})();
if(cljs.core.truth_(inst_57707)){
var statearr_57753_57832 = state_57730__$1;
(statearr_57753_57832[(1)] = (41));

} else {
var statearr_57754_57833 = state_57730__$1;
(statearr_57754_57833[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (33))){
var state_57730__$1 = state_57730;
var statearr_57755_57834 = state_57730__$1;
(statearr_57755_57834[(2)] = false);

(statearr_57755_57834[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (13))){
var inst_57603 = (state_57730[(22)]);
var inst_57607 = cljs.core.chunk_first.call(null,inst_57603);
var inst_57608 = cljs.core.chunk_rest.call(null,inst_57603);
var inst_57609 = cljs.core.count.call(null,inst_57607);
var inst_57590 = inst_57608;
var inst_57591 = inst_57607;
var inst_57592 = inst_57609;
var inst_57593 = (0);
var state_57730__$1 = (function (){var statearr_57756 = state_57730;
(statearr_57756[(7)] = inst_57591);

(statearr_57756[(8)] = inst_57592);

(statearr_57756[(9)] = inst_57590);

(statearr_57756[(10)] = inst_57593);

return statearr_57756;
})();
var statearr_57757_57835 = state_57730__$1;
(statearr_57757_57835[(2)] = null);

(statearr_57757_57835[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (22))){
var inst_57646 = (state_57730[(23)]);
var inst_57643 = (state_57730[(19)]);
var inst_57651 = (state_57730[(24)]);
var inst_57647 = (state_57730[(25)]);
var inst_57646__$1 = (state_57730[(2)]);
var inst_57647__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_57646__$1);
var inst_57648 = (function (){var all_files = inst_57643;
var res_SINGLEQUOTE_ = inst_57646__$1;
var res = inst_57647__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_57646,inst_57643,inst_57651,inst_57647,inst_57646__$1,inst_57647__$1,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57572_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__57572_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_57646,inst_57643,inst_57651,inst_57647,inst_57646__$1,inst_57647__$1,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57649 = cljs.core.filter.call(null,inst_57648,inst_57646__$1);
var inst_57650 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_57651__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_57650);
var inst_57652 = cljs.core.not_empty.call(null,inst_57651__$1);
var state_57730__$1 = (function (){var statearr_57758 = state_57730;
(statearr_57758[(23)] = inst_57646__$1);

(statearr_57758[(26)] = inst_57649);

(statearr_57758[(24)] = inst_57651__$1);

(statearr_57758[(25)] = inst_57647__$1);

return statearr_57758;
})();
if(cljs.core.truth_(inst_57652)){
var statearr_57759_57836 = state_57730__$1;
(statearr_57759_57836[(1)] = (23));

} else {
var statearr_57760_57837 = state_57730__$1;
(statearr_57760_57837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (36))){
var state_57730__$1 = state_57730;
var statearr_57761_57838 = state_57730__$1;
(statearr_57761_57838[(2)] = false);

(statearr_57761_57838[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (41))){
var inst_57705 = (state_57730[(20)]);
var inst_57709 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_57710 = cljs.core.map.call(null,inst_57709,inst_57705);
var inst_57711 = cljs.core.pr_str.call(null,inst_57710);
var inst_57712 = ["figwheel-no-load meta-data: ",inst_57711].join('');
var inst_57713 = figwheel.client.utils.log.call(null,inst_57712);
var state_57730__$1 = state_57730;
var statearr_57762_57839 = state_57730__$1;
(statearr_57762_57839[(2)] = inst_57713);

(statearr_57762_57839[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (43))){
var inst_57706 = (state_57730[(21)]);
var inst_57716 = (state_57730[(2)]);
var inst_57717 = cljs.core.not_empty.call(null,inst_57706);
var state_57730__$1 = (function (){var statearr_57763 = state_57730;
(statearr_57763[(27)] = inst_57716);

return statearr_57763;
})();
if(cljs.core.truth_(inst_57717)){
var statearr_57764_57840 = state_57730__$1;
(statearr_57764_57840[(1)] = (44));

} else {
var statearr_57765_57841 = state_57730__$1;
(statearr_57765_57841[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (29))){
var inst_57646 = (state_57730[(23)]);
var inst_57643 = (state_57730[(19)]);
var inst_57649 = (state_57730[(26)]);
var inst_57651 = (state_57730[(24)]);
var inst_57647 = (state_57730[(25)]);
var inst_57683 = (state_57730[(16)]);
var inst_57679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_57682 = (function (){var all_files = inst_57643;
var res_SINGLEQUOTE_ = inst_57646;
var res = inst_57647;
var files_not_loaded = inst_57649;
var dependencies_that_loaded = inst_57651;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57646,inst_57643,inst_57649,inst_57651,inst_57647,inst_57683,inst_57679,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__57681){
var map__57766 = p__57681;
var map__57766__$1 = (((((!((map__57766 == null))))?(((((map__57766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57766):map__57766);
var namespace = cljs.core.get.call(null,map__57766__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57646,inst_57643,inst_57649,inst_57651,inst_57647,inst_57683,inst_57679,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57683__$1 = cljs.core.group_by.call(null,inst_57682,inst_57649);
var inst_57685 = (inst_57683__$1 == null);
var inst_57686 = cljs.core.not.call(null,inst_57685);
var state_57730__$1 = (function (){var statearr_57768 = state_57730;
(statearr_57768[(28)] = inst_57679);

(statearr_57768[(16)] = inst_57683__$1);

return statearr_57768;
})();
if(inst_57686){
var statearr_57769_57842 = state_57730__$1;
(statearr_57769_57842[(1)] = (32));

} else {
var statearr_57770_57843 = state_57730__$1;
(statearr_57770_57843[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (44))){
var inst_57706 = (state_57730[(21)]);
var inst_57719 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_57706);
var inst_57720 = cljs.core.pr_str.call(null,inst_57719);
var inst_57721 = ["not required: ",inst_57720].join('');
var inst_57722 = figwheel.client.utils.log.call(null,inst_57721);
var state_57730__$1 = state_57730;
var statearr_57771_57844 = state_57730__$1;
(statearr_57771_57844[(2)] = inst_57722);

(statearr_57771_57844[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (6))){
var inst_57624 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
var statearr_57772_57845 = state_57730__$1;
(statearr_57772_57845[(2)] = inst_57624);

(statearr_57772_57845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (28))){
var inst_57649 = (state_57730[(26)]);
var inst_57676 = (state_57730[(2)]);
var inst_57677 = cljs.core.not_empty.call(null,inst_57649);
var state_57730__$1 = (function (){var statearr_57773 = state_57730;
(statearr_57773[(29)] = inst_57676);

return statearr_57773;
})();
if(cljs.core.truth_(inst_57677)){
var statearr_57774_57846 = state_57730__$1;
(statearr_57774_57846[(1)] = (29));

} else {
var statearr_57775_57847 = state_57730__$1;
(statearr_57775_57847[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (25))){
var inst_57647 = (state_57730[(25)]);
var inst_57663 = (state_57730[(2)]);
var inst_57664 = cljs.core.not_empty.call(null,inst_57647);
var state_57730__$1 = (function (){var statearr_57776 = state_57730;
(statearr_57776[(30)] = inst_57663);

return statearr_57776;
})();
if(cljs.core.truth_(inst_57664)){
var statearr_57777_57848 = state_57730__$1;
(statearr_57777_57848[(1)] = (26));

} else {
var statearr_57778_57849 = state_57730__$1;
(statearr_57778_57849[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (34))){
var inst_57699 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
if(cljs.core.truth_(inst_57699)){
var statearr_57779_57850 = state_57730__$1;
(statearr_57779_57850[(1)] = (38));

} else {
var statearr_57780_57851 = state_57730__$1;
(statearr_57780_57851[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (17))){
var state_57730__$1 = state_57730;
var statearr_57781_57852 = state_57730__$1;
(statearr_57781_57852[(2)] = recompile_dependents);

(statearr_57781_57852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (3))){
var state_57730__$1 = state_57730;
var statearr_57782_57853 = state_57730__$1;
(statearr_57782_57853[(2)] = null);

(statearr_57782_57853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (12))){
var inst_57620 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
var statearr_57783_57854 = state_57730__$1;
(statearr_57783_57854[(2)] = inst_57620);

(statearr_57783_57854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (2))){
var inst_57582 = (state_57730[(13)]);
var inst_57589 = cljs.core.seq.call(null,inst_57582);
var inst_57590 = inst_57589;
var inst_57591 = null;
var inst_57592 = (0);
var inst_57593 = (0);
var state_57730__$1 = (function (){var statearr_57784 = state_57730;
(statearr_57784[(7)] = inst_57591);

(statearr_57784[(8)] = inst_57592);

(statearr_57784[(9)] = inst_57590);

(statearr_57784[(10)] = inst_57593);

return statearr_57784;
})();
var statearr_57785_57855 = state_57730__$1;
(statearr_57785_57855[(2)] = null);

(statearr_57785_57855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (23))){
var inst_57646 = (state_57730[(23)]);
var inst_57643 = (state_57730[(19)]);
var inst_57649 = (state_57730[(26)]);
var inst_57651 = (state_57730[(24)]);
var inst_57647 = (state_57730[(25)]);
var inst_57654 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_57656 = (function (){var all_files = inst_57643;
var res_SINGLEQUOTE_ = inst_57646;
var res = inst_57647;
var files_not_loaded = inst_57649;
var dependencies_that_loaded = inst_57651;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57646,inst_57643,inst_57649,inst_57651,inst_57647,inst_57654,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__57655){
var map__57786 = p__57655;
var map__57786__$1 = (((((!((map__57786 == null))))?(((((map__57786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57786):map__57786);
var request_url = cljs.core.get.call(null,map__57786__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57646,inst_57643,inst_57649,inst_57651,inst_57647,inst_57654,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57657 = cljs.core.reverse.call(null,inst_57651);
var inst_57658 = cljs.core.map.call(null,inst_57656,inst_57657);
var inst_57659 = cljs.core.pr_str.call(null,inst_57658);
var inst_57660 = figwheel.client.utils.log.call(null,inst_57659);
var state_57730__$1 = (function (){var statearr_57788 = state_57730;
(statearr_57788[(31)] = inst_57654);

return statearr_57788;
})();
var statearr_57789_57856 = state_57730__$1;
(statearr_57789_57856[(2)] = inst_57660);

(statearr_57789_57856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (35))){
var state_57730__$1 = state_57730;
var statearr_57790_57857 = state_57730__$1;
(statearr_57790_57857[(2)] = true);

(statearr_57790_57857[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (19))){
var inst_57633 = (state_57730[(12)]);
var inst_57639 = figwheel.client.file_reloading.expand_files.call(null,inst_57633);
var state_57730__$1 = state_57730;
var statearr_57791_57858 = state_57730__$1;
(statearr_57791_57858[(2)] = inst_57639);

(statearr_57791_57858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (11))){
var state_57730__$1 = state_57730;
var statearr_57792_57859 = state_57730__$1;
(statearr_57792_57859[(2)] = null);

(statearr_57792_57859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (9))){
var inst_57622 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
var statearr_57793_57860 = state_57730__$1;
(statearr_57793_57860[(2)] = inst_57622);

(statearr_57793_57860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (5))){
var inst_57592 = (state_57730[(8)]);
var inst_57593 = (state_57730[(10)]);
var inst_57595 = (inst_57593 < inst_57592);
var inst_57596 = inst_57595;
var state_57730__$1 = state_57730;
if(cljs.core.truth_(inst_57596)){
var statearr_57794_57861 = state_57730__$1;
(statearr_57794_57861[(1)] = (7));

} else {
var statearr_57795_57862 = state_57730__$1;
(statearr_57795_57862[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (14))){
var inst_57603 = (state_57730[(22)]);
var inst_57612 = cljs.core.first.call(null,inst_57603);
var inst_57613 = figwheel.client.file_reloading.eval_body.call(null,inst_57612,opts);
var inst_57614 = cljs.core.next.call(null,inst_57603);
var inst_57590 = inst_57614;
var inst_57591 = null;
var inst_57592 = (0);
var inst_57593 = (0);
var state_57730__$1 = (function (){var statearr_57796 = state_57730;
(statearr_57796[(32)] = inst_57613);

(statearr_57796[(7)] = inst_57591);

(statearr_57796[(8)] = inst_57592);

(statearr_57796[(9)] = inst_57590);

(statearr_57796[(10)] = inst_57593);

return statearr_57796;
})();
var statearr_57797_57863 = state_57730__$1;
(statearr_57797_57863[(2)] = null);

(statearr_57797_57863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (45))){
var state_57730__$1 = state_57730;
var statearr_57798_57864 = state_57730__$1;
(statearr_57798_57864[(2)] = null);

(statearr_57798_57864[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (26))){
var inst_57646 = (state_57730[(23)]);
var inst_57643 = (state_57730[(19)]);
var inst_57649 = (state_57730[(26)]);
var inst_57651 = (state_57730[(24)]);
var inst_57647 = (state_57730[(25)]);
var inst_57666 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_57668 = (function (){var all_files = inst_57643;
var res_SINGLEQUOTE_ = inst_57646;
var res = inst_57647;
var files_not_loaded = inst_57649;
var dependencies_that_loaded = inst_57651;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57646,inst_57643,inst_57649,inst_57651,inst_57647,inst_57666,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__57667){
var map__57799 = p__57667;
var map__57799__$1 = (((((!((map__57799 == null))))?(((((map__57799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57799):map__57799);
var namespace = cljs.core.get.call(null,map__57799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__57799__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57646,inst_57643,inst_57649,inst_57651,inst_57647,inst_57666,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57669 = cljs.core.map.call(null,inst_57668,inst_57647);
var inst_57670 = cljs.core.pr_str.call(null,inst_57669);
var inst_57671 = figwheel.client.utils.log.call(null,inst_57670);
var inst_57672 = (function (){var all_files = inst_57643;
var res_SINGLEQUOTE_ = inst_57646;
var res = inst_57647;
var files_not_loaded = inst_57649;
var dependencies_that_loaded = inst_57651;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57646,inst_57643,inst_57649,inst_57651,inst_57647,inst_57666,inst_57668,inst_57669,inst_57670,inst_57671,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57646,inst_57643,inst_57649,inst_57651,inst_57647,inst_57666,inst_57668,inst_57669,inst_57670,inst_57671,state_val_57731,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57673 = setTimeout(inst_57672,(10));
var state_57730__$1 = (function (){var statearr_57801 = state_57730;
(statearr_57801[(33)] = inst_57666);

(statearr_57801[(34)] = inst_57671);

return statearr_57801;
})();
var statearr_57802_57865 = state_57730__$1;
(statearr_57802_57865[(2)] = inst_57673);

(statearr_57802_57865[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (16))){
var state_57730__$1 = state_57730;
var statearr_57803_57866 = state_57730__$1;
(statearr_57803_57866[(2)] = reload_dependents);

(statearr_57803_57866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (38))){
var inst_57683 = (state_57730[(16)]);
var inst_57701 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57683);
var state_57730__$1 = state_57730;
var statearr_57804_57867 = state_57730__$1;
(statearr_57804_57867[(2)] = inst_57701);

(statearr_57804_57867[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (30))){
var state_57730__$1 = state_57730;
var statearr_57805_57868 = state_57730__$1;
(statearr_57805_57868[(2)] = null);

(statearr_57805_57868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (10))){
var inst_57603 = (state_57730[(22)]);
var inst_57605 = cljs.core.chunked_seq_QMARK_.call(null,inst_57603);
var state_57730__$1 = state_57730;
if(inst_57605){
var statearr_57806_57869 = state_57730__$1;
(statearr_57806_57869[(1)] = (13));

} else {
var statearr_57807_57870 = state_57730__$1;
(statearr_57807_57870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (18))){
var inst_57637 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
if(cljs.core.truth_(inst_57637)){
var statearr_57808_57871 = state_57730__$1;
(statearr_57808_57871[(1)] = (19));

} else {
var statearr_57809_57872 = state_57730__$1;
(statearr_57809_57872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (42))){
var state_57730__$1 = state_57730;
var statearr_57810_57873 = state_57730__$1;
(statearr_57810_57873[(2)] = null);

(statearr_57810_57873[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (37))){
var inst_57696 = (state_57730[(2)]);
var state_57730__$1 = state_57730;
var statearr_57811_57874 = state_57730__$1;
(statearr_57811_57874[(2)] = inst_57696);

(statearr_57811_57874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57731 === (8))){
var inst_57603 = (state_57730[(22)]);
var inst_57590 = (state_57730[(9)]);
var inst_57603__$1 = cljs.core.seq.call(null,inst_57590);
var state_57730__$1 = (function (){var statearr_57812 = state_57730;
(statearr_57812[(22)] = inst_57603__$1);

return statearr_57812;
})();
if(inst_57603__$1){
var statearr_57813_57875 = state_57730__$1;
(statearr_57813_57875[(1)] = (10));

} else {
var statearr_57814_57876 = state_57730__$1;
(statearr_57814_57876[(1)] = (11));

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
});})(c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22764__auto__,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto____0 = (function (){
var statearr_57815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57815[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto__);

(statearr_57815[(1)] = (1));

return statearr_57815;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto____1 = (function (state_57730){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_57730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e57816){if((e57816 instanceof Object)){
var ex__22768__auto__ = e57816;
var statearr_57817_57877 = state_57730;
(statearr_57817_57877[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57878 = state_57730;
state_57730 = G__57878;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto__ = function(state_57730){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto____1.call(this,state_57730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22789__auto__ = (function (){var statearr_57818 = f__22788__auto__.call(null);
(statearr_57818[(6)] = c__22787__auto__);

return statearr_57818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__,map__57575,map__57575__$1,opts,before_jsload,on_jsload,reload_dependents,map__57576,map__57576__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22787__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__57881,link){
var map__57882 = p__57881;
var map__57882__$1 = (((((!((map__57882 == null))))?(((((map__57882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57882):map__57882);
var file = cljs.core.get.call(null,map__57882__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__57882,map__57882__$1,file){
return (function (p1__57879_SHARP_,p2__57880_SHARP_){
if(cljs.core._EQ_.call(null,p1__57879_SHARP_,p2__57880_SHARP_)){
return p1__57879_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__57882,map__57882__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__57885){
var map__57886 = p__57885;
var map__57886__$1 = (((((!((map__57886 == null))))?(((((map__57886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57886):map__57886);
var match_length = cljs.core.get.call(null,map__57886__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__57886__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__57884_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__57884_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__57888_SHARP_,p2__57889_SHARP_){
return cljs.core.assoc.call(null,p1__57888_SHARP_,cljs.core.get.call(null,p2__57889_SHARP_,key),p2__57889_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_57890 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_57890);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_57890);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__57891,p__57892){
var map__57893 = p__57891;
var map__57893__$1 = (((((!((map__57893 == null))))?(((((map__57893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57893):map__57893);
var on_cssload = cljs.core.get.call(null,map__57893__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__57894 = p__57892;
var map__57894__$1 = (((((!((map__57894 == null))))?(((((map__57894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57894):map__57894);
var files_msg = map__57894__$1;
var files = cljs.core.get.call(null,map__57894__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1569211522912
