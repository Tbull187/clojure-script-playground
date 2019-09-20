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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29586_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29586_SHARP_));
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
var seq__29587 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29588 = null;
var count__29589 = (0);
var i__29590 = (0);
while(true){
if((i__29590 < count__29589)){
var n = cljs.core._nth.call(null,chunk__29588,i__29590);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29591 = seq__29587;
var G__29592 = chunk__29588;
var G__29593 = count__29589;
var G__29594 = (i__29590 + (1));
seq__29587 = G__29591;
chunk__29588 = G__29592;
count__29589 = G__29593;
i__29590 = G__29594;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29587);
if(temp__5720__auto__){
var seq__29587__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29587__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29587__$1);
var G__29595 = cljs.core.chunk_rest.call(null,seq__29587__$1);
var G__29596 = c__4550__auto__;
var G__29597 = cljs.core.count.call(null,c__4550__auto__);
var G__29598 = (0);
seq__29587 = G__29595;
chunk__29588 = G__29596;
count__29589 = G__29597;
i__29590 = G__29598;
continue;
} else {
var n = cljs.core.first.call(null,seq__29587__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29599 = cljs.core.next.call(null,seq__29587__$1);
var G__29600 = null;
var G__29601 = (0);
var G__29602 = (0);
seq__29587 = G__29599;
chunk__29588 = G__29600;
count__29589 = G__29601;
i__29590 = G__29602;
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
return cljs.core.some.call(null,(function (p__29603){
var vec__29604 = p__29603;
var _ = cljs.core.nth.call(null,vec__29604,(0),null);
var v = cljs.core.nth.call(null,vec__29604,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__29607){
var vec__29608 = p__29607;
var k = cljs.core.nth.call(null,vec__29608,(0),null);
var v = cljs.core.nth.call(null,vec__29608,(1),null);
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

var seq__29620_29628 = cljs.core.seq.call(null,deps);
var chunk__29621_29629 = null;
var count__29622_29630 = (0);
var i__29623_29631 = (0);
while(true){
if((i__29623_29631 < count__29622_29630)){
var dep_29632 = cljs.core._nth.call(null,chunk__29621_29629,i__29623_29631);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29632;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29632));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29632,(depth + (1)),state);
} else {
}


var G__29633 = seq__29620_29628;
var G__29634 = chunk__29621_29629;
var G__29635 = count__29622_29630;
var G__29636 = (i__29623_29631 + (1));
seq__29620_29628 = G__29633;
chunk__29621_29629 = G__29634;
count__29622_29630 = G__29635;
i__29623_29631 = G__29636;
continue;
} else {
var temp__5720__auto___29637 = cljs.core.seq.call(null,seq__29620_29628);
if(temp__5720__auto___29637){
var seq__29620_29638__$1 = temp__5720__auto___29637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29620_29638__$1)){
var c__4550__auto___29639 = cljs.core.chunk_first.call(null,seq__29620_29638__$1);
var G__29640 = cljs.core.chunk_rest.call(null,seq__29620_29638__$1);
var G__29641 = c__4550__auto___29639;
var G__29642 = cljs.core.count.call(null,c__4550__auto___29639);
var G__29643 = (0);
seq__29620_29628 = G__29640;
chunk__29621_29629 = G__29641;
count__29622_29630 = G__29642;
i__29623_29631 = G__29643;
continue;
} else {
var dep_29644 = cljs.core.first.call(null,seq__29620_29638__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29644;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29644));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29644,(depth + (1)),state);
} else {
}


var G__29645 = cljs.core.next.call(null,seq__29620_29638__$1);
var G__29646 = null;
var G__29647 = (0);
var G__29648 = (0);
seq__29620_29628 = G__29645;
chunk__29621_29629 = G__29646;
count__29622_29630 = G__29647;
i__29623_29631 = G__29648;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29624){
var vec__29625 = p__29624;
var seq__29626 = cljs.core.seq.call(null,vec__29625);
var first__29627 = cljs.core.first.call(null,seq__29626);
var seq__29626__$1 = cljs.core.next.call(null,seq__29626);
var x = first__29627;
var xs = seq__29626__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29625,seq__29626,first__29627,seq__29626__$1,x,xs,get_deps__$1){
return (function (p1__29611_SHARP_){
return clojure.set.difference.call(null,p1__29611_SHARP_,x);
});})(vec__29625,seq__29626,first__29627,seq__29626__$1,x,xs,get_deps__$1))
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
var seq__29649 = cljs.core.seq.call(null,provides);
var chunk__29650 = null;
var count__29651 = (0);
var i__29652 = (0);
while(true){
if((i__29652 < count__29651)){
var prov = cljs.core._nth.call(null,chunk__29650,i__29652);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29661_29669 = cljs.core.seq.call(null,requires);
var chunk__29662_29670 = null;
var count__29663_29671 = (0);
var i__29664_29672 = (0);
while(true){
if((i__29664_29672 < count__29663_29671)){
var req_29673 = cljs.core._nth.call(null,chunk__29662_29670,i__29664_29672);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29673,prov);


var G__29674 = seq__29661_29669;
var G__29675 = chunk__29662_29670;
var G__29676 = count__29663_29671;
var G__29677 = (i__29664_29672 + (1));
seq__29661_29669 = G__29674;
chunk__29662_29670 = G__29675;
count__29663_29671 = G__29676;
i__29664_29672 = G__29677;
continue;
} else {
var temp__5720__auto___29678 = cljs.core.seq.call(null,seq__29661_29669);
if(temp__5720__auto___29678){
var seq__29661_29679__$1 = temp__5720__auto___29678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29661_29679__$1)){
var c__4550__auto___29680 = cljs.core.chunk_first.call(null,seq__29661_29679__$1);
var G__29681 = cljs.core.chunk_rest.call(null,seq__29661_29679__$1);
var G__29682 = c__4550__auto___29680;
var G__29683 = cljs.core.count.call(null,c__4550__auto___29680);
var G__29684 = (0);
seq__29661_29669 = G__29681;
chunk__29662_29670 = G__29682;
count__29663_29671 = G__29683;
i__29664_29672 = G__29684;
continue;
} else {
var req_29685 = cljs.core.first.call(null,seq__29661_29679__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29685,prov);


var G__29686 = cljs.core.next.call(null,seq__29661_29679__$1);
var G__29687 = null;
var G__29688 = (0);
var G__29689 = (0);
seq__29661_29669 = G__29686;
chunk__29662_29670 = G__29687;
count__29663_29671 = G__29688;
i__29664_29672 = G__29689;
continue;
}
} else {
}
}
break;
}


var G__29690 = seq__29649;
var G__29691 = chunk__29650;
var G__29692 = count__29651;
var G__29693 = (i__29652 + (1));
seq__29649 = G__29690;
chunk__29650 = G__29691;
count__29651 = G__29692;
i__29652 = G__29693;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29649);
if(temp__5720__auto__){
var seq__29649__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29649__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29649__$1);
var G__29694 = cljs.core.chunk_rest.call(null,seq__29649__$1);
var G__29695 = c__4550__auto__;
var G__29696 = cljs.core.count.call(null,c__4550__auto__);
var G__29697 = (0);
seq__29649 = G__29694;
chunk__29650 = G__29695;
count__29651 = G__29696;
i__29652 = G__29697;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29649__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29665_29698 = cljs.core.seq.call(null,requires);
var chunk__29666_29699 = null;
var count__29667_29700 = (0);
var i__29668_29701 = (0);
while(true){
if((i__29668_29701 < count__29667_29700)){
var req_29702 = cljs.core._nth.call(null,chunk__29666_29699,i__29668_29701);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29702,prov);


var G__29703 = seq__29665_29698;
var G__29704 = chunk__29666_29699;
var G__29705 = count__29667_29700;
var G__29706 = (i__29668_29701 + (1));
seq__29665_29698 = G__29703;
chunk__29666_29699 = G__29704;
count__29667_29700 = G__29705;
i__29668_29701 = G__29706;
continue;
} else {
var temp__5720__auto___29707__$1 = cljs.core.seq.call(null,seq__29665_29698);
if(temp__5720__auto___29707__$1){
var seq__29665_29708__$1 = temp__5720__auto___29707__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29665_29708__$1)){
var c__4550__auto___29709 = cljs.core.chunk_first.call(null,seq__29665_29708__$1);
var G__29710 = cljs.core.chunk_rest.call(null,seq__29665_29708__$1);
var G__29711 = c__4550__auto___29709;
var G__29712 = cljs.core.count.call(null,c__4550__auto___29709);
var G__29713 = (0);
seq__29665_29698 = G__29710;
chunk__29666_29699 = G__29711;
count__29667_29700 = G__29712;
i__29668_29701 = G__29713;
continue;
} else {
var req_29714 = cljs.core.first.call(null,seq__29665_29708__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29714,prov);


var G__29715 = cljs.core.next.call(null,seq__29665_29708__$1);
var G__29716 = null;
var G__29717 = (0);
var G__29718 = (0);
seq__29665_29698 = G__29715;
chunk__29666_29699 = G__29716;
count__29667_29700 = G__29717;
i__29668_29701 = G__29718;
continue;
}
} else {
}
}
break;
}


var G__29719 = cljs.core.next.call(null,seq__29649__$1);
var G__29720 = null;
var G__29721 = (0);
var G__29722 = (0);
seq__29649 = G__29719;
chunk__29650 = G__29720;
count__29651 = G__29721;
i__29652 = G__29722;
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
var seq__29723_29727 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29724_29728 = null;
var count__29725_29729 = (0);
var i__29726_29730 = (0);
while(true){
if((i__29726_29730 < count__29725_29729)){
var ns_29731 = cljs.core._nth.call(null,chunk__29724_29728,i__29726_29730);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29731);


var G__29732 = seq__29723_29727;
var G__29733 = chunk__29724_29728;
var G__29734 = count__29725_29729;
var G__29735 = (i__29726_29730 + (1));
seq__29723_29727 = G__29732;
chunk__29724_29728 = G__29733;
count__29725_29729 = G__29734;
i__29726_29730 = G__29735;
continue;
} else {
var temp__5720__auto___29736 = cljs.core.seq.call(null,seq__29723_29727);
if(temp__5720__auto___29736){
var seq__29723_29737__$1 = temp__5720__auto___29736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29723_29737__$1)){
var c__4550__auto___29738 = cljs.core.chunk_first.call(null,seq__29723_29737__$1);
var G__29739 = cljs.core.chunk_rest.call(null,seq__29723_29737__$1);
var G__29740 = c__4550__auto___29738;
var G__29741 = cljs.core.count.call(null,c__4550__auto___29738);
var G__29742 = (0);
seq__29723_29727 = G__29739;
chunk__29724_29728 = G__29740;
count__29725_29729 = G__29741;
i__29726_29730 = G__29742;
continue;
} else {
var ns_29743 = cljs.core.first.call(null,seq__29723_29737__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29743);


var G__29744 = cljs.core.next.call(null,seq__29723_29737__$1);
var G__29745 = null;
var G__29746 = (0);
var G__29747 = (0);
seq__29723_29727 = G__29744;
chunk__29724_29728 = G__29745;
count__29725_29729 = G__29746;
i__29726_29730 = G__29747;
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
var G__29748__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29749__i = 0, G__29749__a = new Array(arguments.length -  0);
while (G__29749__i < G__29749__a.length) {G__29749__a[G__29749__i] = arguments[G__29749__i + 0]; ++G__29749__i;}
  args = new cljs.core.IndexedSeq(G__29749__a,0,null);
} 
return G__29748__delegate.call(this,args);};
G__29748.cljs$lang$maxFixedArity = 0;
G__29748.cljs$lang$applyTo = (function (arglist__29750){
var args = cljs.core.seq(arglist__29750);
return G__29748__delegate(args);
});
G__29748.cljs$core$IFn$_invoke$arity$variadic = G__29748__delegate;
return G__29748;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29751_SHARP_,p2__29752_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29751_SHARP_)),p2__29752_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29753_SHARP_,p2__29754_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29753_SHARP_),p2__29754_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29755 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29755.addCallback(((function (G__29755){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29755))
);

G__29755.addErrback(((function (G__29755){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29755))
);

return G__29755;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29756){if((e29756 instanceof Error)){
var e = e29756;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29756;

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
}catch (e29757){if((e29757 instanceof Error)){
var e = e29757;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29757;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29758 = cljs.core._EQ_;
var expr__29759 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29758.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29759))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29758.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29759))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29758.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29759))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29758,expr__29759){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29758,expr__29759))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29761,callback){
var map__29762 = p__29761;
var map__29762__$1 = (((((!((map__29762 == null))))?(((((map__29762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29762):map__29762);
var file_msg = map__29762__$1;
var request_url = cljs.core.get.call(null,map__29762__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29762,map__29762__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29762,map__29762__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto__){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto__){
return (function (state_29800){
var state_val_29801 = (state_29800[(1)]);
if((state_val_29801 === (7))){
var inst_29796 = (state_29800[(2)]);
var state_29800__$1 = state_29800;
var statearr_29802_29828 = state_29800__$1;
(statearr_29802_29828[(2)] = inst_29796);

(statearr_29802_29828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (1))){
var state_29800__$1 = state_29800;
var statearr_29803_29829 = state_29800__$1;
(statearr_29803_29829[(2)] = null);

(statearr_29803_29829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (4))){
var inst_29766 = (state_29800[(7)]);
var inst_29766__$1 = (state_29800[(2)]);
var state_29800__$1 = (function (){var statearr_29804 = state_29800;
(statearr_29804[(7)] = inst_29766__$1);

return statearr_29804;
})();
if(cljs.core.truth_(inst_29766__$1)){
var statearr_29805_29830 = state_29800__$1;
(statearr_29805_29830[(1)] = (5));

} else {
var statearr_29806_29831 = state_29800__$1;
(statearr_29806_29831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (15))){
var inst_29779 = (state_29800[(8)]);
var inst_29781 = (state_29800[(9)]);
var inst_29783 = inst_29781.call(null,inst_29779);
var state_29800__$1 = state_29800;
var statearr_29807_29832 = state_29800__$1;
(statearr_29807_29832[(2)] = inst_29783);

(statearr_29807_29832[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (13))){
var inst_29790 = (state_29800[(2)]);
var state_29800__$1 = state_29800;
var statearr_29808_29833 = state_29800__$1;
(statearr_29808_29833[(2)] = inst_29790);

(statearr_29808_29833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (6))){
var state_29800__$1 = state_29800;
var statearr_29809_29834 = state_29800__$1;
(statearr_29809_29834[(2)] = null);

(statearr_29809_29834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (17))){
var inst_29787 = (state_29800[(2)]);
var state_29800__$1 = state_29800;
var statearr_29810_29835 = state_29800__$1;
(statearr_29810_29835[(2)] = inst_29787);

(statearr_29810_29835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (3))){
var inst_29798 = (state_29800[(2)]);
var state_29800__$1 = state_29800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29800__$1,inst_29798);
} else {
if((state_val_29801 === (12))){
var state_29800__$1 = state_29800;
var statearr_29811_29836 = state_29800__$1;
(statearr_29811_29836[(2)] = null);

(statearr_29811_29836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (2))){
var state_29800__$1 = state_29800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29800__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29801 === (11))){
var inst_29771 = (state_29800[(10)]);
var inst_29777 = figwheel.client.file_reloading.blocking_load.call(null,inst_29771);
var state_29800__$1 = state_29800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29800__$1,(14),inst_29777);
} else {
if((state_val_29801 === (9))){
var inst_29771 = (state_29800[(10)]);
var state_29800__$1 = state_29800;
if(cljs.core.truth_(inst_29771)){
var statearr_29812_29837 = state_29800__$1;
(statearr_29812_29837[(1)] = (11));

} else {
var statearr_29813_29838 = state_29800__$1;
(statearr_29813_29838[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (5))){
var inst_29772 = (state_29800[(11)]);
var inst_29766 = (state_29800[(7)]);
var inst_29771 = cljs.core.nth.call(null,inst_29766,(0),null);
var inst_29772__$1 = cljs.core.nth.call(null,inst_29766,(1),null);
var state_29800__$1 = (function (){var statearr_29814 = state_29800;
(statearr_29814[(10)] = inst_29771);

(statearr_29814[(11)] = inst_29772__$1);

return statearr_29814;
})();
if(cljs.core.truth_(inst_29772__$1)){
var statearr_29815_29839 = state_29800__$1;
(statearr_29815_29839[(1)] = (8));

} else {
var statearr_29816_29840 = state_29800__$1;
(statearr_29816_29840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (14))){
var inst_29771 = (state_29800[(10)]);
var inst_29781 = (state_29800[(9)]);
var inst_29779 = (state_29800[(2)]);
var inst_29780 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29781__$1 = cljs.core.get.call(null,inst_29780,inst_29771);
var state_29800__$1 = (function (){var statearr_29817 = state_29800;
(statearr_29817[(8)] = inst_29779);

(statearr_29817[(9)] = inst_29781__$1);

return statearr_29817;
})();
if(cljs.core.truth_(inst_29781__$1)){
var statearr_29818_29841 = state_29800__$1;
(statearr_29818_29841[(1)] = (15));

} else {
var statearr_29819_29842 = state_29800__$1;
(statearr_29819_29842[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (16))){
var inst_29779 = (state_29800[(8)]);
var inst_29785 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29779);
var state_29800__$1 = state_29800;
var statearr_29820_29843 = state_29800__$1;
(statearr_29820_29843[(2)] = inst_29785);

(statearr_29820_29843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (10))){
var inst_29792 = (state_29800[(2)]);
var state_29800__$1 = (function (){var statearr_29821 = state_29800;
(statearr_29821[(12)] = inst_29792);

return statearr_29821;
})();
var statearr_29822_29844 = state_29800__$1;
(statearr_29822_29844[(2)] = null);

(statearr_29822_29844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29801 === (8))){
var inst_29772 = (state_29800[(11)]);
var inst_29774 = eval(inst_29772);
var state_29800__$1 = state_29800;
var statearr_29823_29845 = state_29800__$1;
(statearr_29823_29845[(2)] = inst_29774);

(statearr_29823_29845[(1)] = (10));


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
});})(c__23979__auto__))
;
return ((function (switch__23884__auto__,c__23979__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23885__auto__ = null;
var figwheel$client$file_reloading$state_machine__23885__auto____0 = (function (){
var statearr_29824 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29824[(0)] = figwheel$client$file_reloading$state_machine__23885__auto__);

(statearr_29824[(1)] = (1));

return statearr_29824;
});
var figwheel$client$file_reloading$state_machine__23885__auto____1 = (function (state_29800){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_29800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e29825){if((e29825 instanceof Object)){
var ex__23888__auto__ = e29825;
var statearr_29826_29846 = state_29800;
(statearr_29826_29846[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29847 = state_29800;
state_29800 = G__29847;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23885__auto__ = function(state_29800){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23885__auto____1.call(this,state_29800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23885__auto____0;
figwheel$client$file_reloading$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23885__auto____1;
return figwheel$client$file_reloading$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto__))
})();
var state__23981__auto__ = (function (){var statearr_29827 = f__23980__auto__.call(null);
(statearr_29827[(6)] = c__23979__auto__);

return statearr_29827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto__))
);

return c__23979__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29849 = arguments.length;
switch (G__29849) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29851,callback){
var map__29852 = p__29851;
var map__29852__$1 = (((((!((map__29852 == null))))?(((((map__29852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29852):map__29852);
var file_msg = map__29852__$1;
var namespace = cljs.core.get.call(null,map__29852__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29852,map__29852__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29852,map__29852__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29854){
var map__29855 = p__29854;
var map__29855__$1 = (((((!((map__29855 == null))))?(((((map__29855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29855):map__29855);
var file_msg = map__29855__$1;
var namespace = cljs.core.get.call(null,map__29855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29857){
var map__29858 = p__29857;
var map__29858__$1 = (((((!((map__29858 == null))))?(((((map__29858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29858):map__29858);
var file_msg = map__29858__$1;
var namespace = cljs.core.get.call(null,map__29858__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29860,callback){
var map__29861 = p__29860;
var map__29861__$1 = (((((!((map__29861 == null))))?(((((map__29861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29861):map__29861);
var file_msg = map__29861__$1;
var request_url = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23979__auto___29911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___29911,out){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___29911,out){
return (function (state_29896){
var state_val_29897 = (state_29896[(1)]);
if((state_val_29897 === (1))){
var inst_29870 = cljs.core.seq.call(null,files);
var inst_29871 = cljs.core.first.call(null,inst_29870);
var inst_29872 = cljs.core.next.call(null,inst_29870);
var inst_29873 = files;
var state_29896__$1 = (function (){var statearr_29898 = state_29896;
(statearr_29898[(7)] = inst_29871);

(statearr_29898[(8)] = inst_29873);

(statearr_29898[(9)] = inst_29872);

return statearr_29898;
})();
var statearr_29899_29912 = state_29896__$1;
(statearr_29899_29912[(2)] = null);

(statearr_29899_29912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (2))){
var inst_29873 = (state_29896[(8)]);
var inst_29879 = (state_29896[(10)]);
var inst_29878 = cljs.core.seq.call(null,inst_29873);
var inst_29879__$1 = cljs.core.first.call(null,inst_29878);
var inst_29880 = cljs.core.next.call(null,inst_29878);
var inst_29881 = (inst_29879__$1 == null);
var inst_29882 = cljs.core.not.call(null,inst_29881);
var state_29896__$1 = (function (){var statearr_29900 = state_29896;
(statearr_29900[(11)] = inst_29880);

(statearr_29900[(10)] = inst_29879__$1);

return statearr_29900;
})();
if(inst_29882){
var statearr_29901_29913 = state_29896__$1;
(statearr_29901_29913[(1)] = (4));

} else {
var statearr_29902_29914 = state_29896__$1;
(statearr_29902_29914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (3))){
var inst_29894 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29896__$1,inst_29894);
} else {
if((state_val_29897 === (4))){
var inst_29879 = (state_29896[(10)]);
var inst_29884 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29879);
var state_29896__$1 = state_29896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29896__$1,(7),inst_29884);
} else {
if((state_val_29897 === (5))){
var inst_29890 = cljs.core.async.close_BANG_.call(null,out);
var state_29896__$1 = state_29896;
var statearr_29903_29915 = state_29896__$1;
(statearr_29903_29915[(2)] = inst_29890);

(statearr_29903_29915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (6))){
var inst_29892 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29904_29916 = state_29896__$1;
(statearr_29904_29916[(2)] = inst_29892);

(statearr_29904_29916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (7))){
var inst_29880 = (state_29896[(11)]);
var inst_29886 = (state_29896[(2)]);
var inst_29887 = cljs.core.async.put_BANG_.call(null,out,inst_29886);
var inst_29873 = inst_29880;
var state_29896__$1 = (function (){var statearr_29905 = state_29896;
(statearr_29905[(12)] = inst_29887);

(statearr_29905[(8)] = inst_29873);

return statearr_29905;
})();
var statearr_29906_29917 = state_29896__$1;
(statearr_29906_29917[(2)] = null);

(statearr_29906_29917[(1)] = (2));


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
});})(c__23979__auto___29911,out))
;
return ((function (switch__23884__auto__,c__23979__auto___29911,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto____0 = (function (){
var statearr_29907 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29907[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto__);

(statearr_29907[(1)] = (1));

return statearr_29907;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto____1 = (function (state_29896){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_29896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e29908){if((e29908 instanceof Object)){
var ex__23888__auto__ = e29908;
var statearr_29909_29918 = state_29896;
(statearr_29909_29918[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29919 = state_29896;
state_29896 = G__29919;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto__ = function(state_29896){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto____1.call(this,state_29896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___29911,out))
})();
var state__23981__auto__ = (function (){var statearr_29910 = f__23980__auto__.call(null);
(statearr_29910[(6)] = c__23979__auto___29911);

return statearr_29910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___29911,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29920,opts){
var map__29921 = p__29920;
var map__29921__$1 = (((((!((map__29921 == null))))?(((((map__29921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29921):map__29921);
var eval_body = cljs.core.get.call(null,map__29921__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29921__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29923){var e = e29923;
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
return (function (p1__29924_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29924_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29925){
var vec__29926 = p__29925;
var k = cljs.core.nth.call(null,vec__29926,(0),null);
var v = cljs.core.nth.call(null,vec__29926,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29929){
var vec__29930 = p__29929;
var k = cljs.core.nth.call(null,vec__29930,(0),null);
var v = cljs.core.nth.call(null,vec__29930,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29936,p__29937){
var map__29938 = p__29936;
var map__29938__$1 = (((((!((map__29938 == null))))?(((((map__29938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29938):map__29938);
var opts = map__29938__$1;
var before_jsload = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29939 = p__29937;
var map__29939__$1 = (((((!((map__29939 == null))))?(((((map__29939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29939):map__29939);
var msg = map__29939__$1;
var files = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30093){
var state_val_30094 = (state_30093[(1)]);
if((state_val_30094 === (7))){
var inst_29955 = (state_30093[(7)]);
var inst_29953 = (state_30093[(8)]);
var inst_29956 = (state_30093[(9)]);
var inst_29954 = (state_30093[(10)]);
var inst_29961 = cljs.core._nth.call(null,inst_29954,inst_29956);
var inst_29962 = figwheel.client.file_reloading.eval_body.call(null,inst_29961,opts);
var inst_29963 = (inst_29956 + (1));
var tmp30095 = inst_29955;
var tmp30096 = inst_29953;
var tmp30097 = inst_29954;
var inst_29953__$1 = tmp30096;
var inst_29954__$1 = tmp30097;
var inst_29955__$1 = tmp30095;
var inst_29956__$1 = inst_29963;
var state_30093__$1 = (function (){var statearr_30098 = state_30093;
(statearr_30098[(7)] = inst_29955__$1);

(statearr_30098[(8)] = inst_29953__$1);

(statearr_30098[(9)] = inst_29956__$1);

(statearr_30098[(10)] = inst_29954__$1);

(statearr_30098[(11)] = inst_29962);

return statearr_30098;
})();
var statearr_30099_30182 = state_30093__$1;
(statearr_30099_30182[(2)] = null);

(statearr_30099_30182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (20))){
var inst_29996 = (state_30093[(12)]);
var inst_30004 = figwheel.client.file_reloading.sort_files.call(null,inst_29996);
var state_30093__$1 = state_30093;
var statearr_30100_30183 = state_30093__$1;
(statearr_30100_30183[(2)] = inst_30004);

(statearr_30100_30183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (27))){
var state_30093__$1 = state_30093;
var statearr_30101_30184 = state_30093__$1;
(statearr_30101_30184[(2)] = null);

(statearr_30101_30184[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (1))){
var inst_29945 = (state_30093[(13)]);
var inst_29942 = before_jsload.call(null,files);
var inst_29943 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29944 = (function (){return ((function (inst_29945,inst_29942,inst_29943,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29933_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29933_SHARP_);
});
;})(inst_29945,inst_29942,inst_29943,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29945__$1 = cljs.core.filter.call(null,inst_29944,files);
var inst_29946 = cljs.core.not_empty.call(null,inst_29945__$1);
var state_30093__$1 = (function (){var statearr_30102 = state_30093;
(statearr_30102[(14)] = inst_29942);

(statearr_30102[(15)] = inst_29943);

(statearr_30102[(13)] = inst_29945__$1);

return statearr_30102;
})();
if(cljs.core.truth_(inst_29946)){
var statearr_30103_30185 = state_30093__$1;
(statearr_30103_30185[(1)] = (2));

} else {
var statearr_30104_30186 = state_30093__$1;
(statearr_30104_30186[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (24))){
var state_30093__$1 = state_30093;
var statearr_30105_30187 = state_30093__$1;
(statearr_30105_30187[(2)] = null);

(statearr_30105_30187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (39))){
var inst_30046 = (state_30093[(16)]);
var state_30093__$1 = state_30093;
var statearr_30106_30188 = state_30093__$1;
(statearr_30106_30188[(2)] = inst_30046);

(statearr_30106_30188[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (46))){
var inst_30088 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30107_30189 = state_30093__$1;
(statearr_30107_30189[(2)] = inst_30088);

(statearr_30107_30189[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (4))){
var inst_29990 = (state_30093[(2)]);
var inst_29991 = cljs.core.List.EMPTY;
var inst_29992 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29991);
var inst_29993 = (function (){return ((function (inst_29990,inst_29991,inst_29992,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29934_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29934_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29934_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29934_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_29990,inst_29991,inst_29992,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29994 = cljs.core.filter.call(null,inst_29993,files);
var inst_29995 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29996 = cljs.core.concat.call(null,inst_29994,inst_29995);
var state_30093__$1 = (function (){var statearr_30108 = state_30093;
(statearr_30108[(17)] = inst_29992);

(statearr_30108[(12)] = inst_29996);

(statearr_30108[(18)] = inst_29990);

return statearr_30108;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30109_30190 = state_30093__$1;
(statearr_30109_30190[(1)] = (16));

} else {
var statearr_30110_30191 = state_30093__$1;
(statearr_30110_30191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (15))){
var inst_29980 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30111_30192 = state_30093__$1;
(statearr_30111_30192[(2)] = inst_29980);

(statearr_30111_30192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (21))){
var inst_30006 = (state_30093[(19)]);
var inst_30006__$1 = (state_30093[(2)]);
var inst_30007 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30006__$1);
var state_30093__$1 = (function (){var statearr_30112 = state_30093;
(statearr_30112[(19)] = inst_30006__$1);

return statearr_30112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30093__$1,(22),inst_30007);
} else {
if((state_val_30094 === (31))){
var inst_30091 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30093__$1,inst_30091);
} else {
if((state_val_30094 === (32))){
var inst_30046 = (state_30093[(16)]);
var inst_30051 = inst_30046.cljs$lang$protocol_mask$partition0$;
var inst_30052 = (inst_30051 & (64));
var inst_30053 = inst_30046.cljs$core$ISeq$;
var inst_30054 = (cljs.core.PROTOCOL_SENTINEL === inst_30053);
var inst_30055 = ((inst_30052) || (inst_30054));
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30055)){
var statearr_30113_30193 = state_30093__$1;
(statearr_30113_30193[(1)] = (35));

} else {
var statearr_30114_30194 = state_30093__$1;
(statearr_30114_30194[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (40))){
var inst_30068 = (state_30093[(20)]);
var inst_30067 = (state_30093[(2)]);
var inst_30068__$1 = cljs.core.get.call(null,inst_30067,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30069 = cljs.core.get.call(null,inst_30067,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30070 = cljs.core.not_empty.call(null,inst_30068__$1);
var state_30093__$1 = (function (){var statearr_30115 = state_30093;
(statearr_30115[(20)] = inst_30068__$1);

(statearr_30115[(21)] = inst_30069);

return statearr_30115;
})();
if(cljs.core.truth_(inst_30070)){
var statearr_30116_30195 = state_30093__$1;
(statearr_30116_30195[(1)] = (41));

} else {
var statearr_30117_30196 = state_30093__$1;
(statearr_30117_30196[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (33))){
var state_30093__$1 = state_30093;
var statearr_30118_30197 = state_30093__$1;
(statearr_30118_30197[(2)] = false);

(statearr_30118_30197[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (13))){
var inst_29966 = (state_30093[(22)]);
var inst_29970 = cljs.core.chunk_first.call(null,inst_29966);
var inst_29971 = cljs.core.chunk_rest.call(null,inst_29966);
var inst_29972 = cljs.core.count.call(null,inst_29970);
var inst_29953 = inst_29971;
var inst_29954 = inst_29970;
var inst_29955 = inst_29972;
var inst_29956 = (0);
var state_30093__$1 = (function (){var statearr_30119 = state_30093;
(statearr_30119[(7)] = inst_29955);

(statearr_30119[(8)] = inst_29953);

(statearr_30119[(9)] = inst_29956);

(statearr_30119[(10)] = inst_29954);

return statearr_30119;
})();
var statearr_30120_30198 = state_30093__$1;
(statearr_30120_30198[(2)] = null);

(statearr_30120_30198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (22))){
var inst_30010 = (state_30093[(23)]);
var inst_30014 = (state_30093[(24)]);
var inst_30006 = (state_30093[(19)]);
var inst_30009 = (state_30093[(25)]);
var inst_30009__$1 = (state_30093[(2)]);
var inst_30010__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30009__$1);
var inst_30011 = (function (){var all_files = inst_30006;
var res_SINGLEQUOTE_ = inst_30009__$1;
var res = inst_30010__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30010,inst_30014,inst_30006,inst_30009,inst_30009__$1,inst_30010__$1,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29935_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29935_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30010,inst_30014,inst_30006,inst_30009,inst_30009__$1,inst_30010__$1,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30012 = cljs.core.filter.call(null,inst_30011,inst_30009__$1);
var inst_30013 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30014__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30013);
var inst_30015 = cljs.core.not_empty.call(null,inst_30014__$1);
var state_30093__$1 = (function (){var statearr_30121 = state_30093;
(statearr_30121[(23)] = inst_30010__$1);

(statearr_30121[(24)] = inst_30014__$1);

(statearr_30121[(26)] = inst_30012);

(statearr_30121[(25)] = inst_30009__$1);

return statearr_30121;
})();
if(cljs.core.truth_(inst_30015)){
var statearr_30122_30199 = state_30093__$1;
(statearr_30122_30199[(1)] = (23));

} else {
var statearr_30123_30200 = state_30093__$1;
(statearr_30123_30200[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (36))){
var state_30093__$1 = state_30093;
var statearr_30124_30201 = state_30093__$1;
(statearr_30124_30201[(2)] = false);

(statearr_30124_30201[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (41))){
var inst_30068 = (state_30093[(20)]);
var inst_30072 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30073 = cljs.core.map.call(null,inst_30072,inst_30068);
var inst_30074 = cljs.core.pr_str.call(null,inst_30073);
var inst_30075 = ["figwheel-no-load meta-data: ",inst_30074].join('');
var inst_30076 = figwheel.client.utils.log.call(null,inst_30075);
var state_30093__$1 = state_30093;
var statearr_30125_30202 = state_30093__$1;
(statearr_30125_30202[(2)] = inst_30076);

(statearr_30125_30202[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (43))){
var inst_30069 = (state_30093[(21)]);
var inst_30079 = (state_30093[(2)]);
var inst_30080 = cljs.core.not_empty.call(null,inst_30069);
var state_30093__$1 = (function (){var statearr_30126 = state_30093;
(statearr_30126[(27)] = inst_30079);

return statearr_30126;
})();
if(cljs.core.truth_(inst_30080)){
var statearr_30127_30203 = state_30093__$1;
(statearr_30127_30203[(1)] = (44));

} else {
var statearr_30128_30204 = state_30093__$1;
(statearr_30128_30204[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (29))){
var inst_30010 = (state_30093[(23)]);
var inst_30014 = (state_30093[(24)]);
var inst_30006 = (state_30093[(19)]);
var inst_30012 = (state_30093[(26)]);
var inst_30046 = (state_30093[(16)]);
var inst_30009 = (state_30093[(25)]);
var inst_30042 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30045 = (function (){var all_files = inst_30006;
var res_SINGLEQUOTE_ = inst_30009;
var res = inst_30010;
var files_not_loaded = inst_30012;
var dependencies_that_loaded = inst_30014;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30010,inst_30014,inst_30006,inst_30012,inst_30046,inst_30009,inst_30042,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30044){
var map__30129 = p__30044;
var map__30129__$1 = (((((!((map__30129 == null))))?(((((map__30129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30129):map__30129);
var namespace = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30010,inst_30014,inst_30006,inst_30012,inst_30046,inst_30009,inst_30042,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30046__$1 = cljs.core.group_by.call(null,inst_30045,inst_30012);
var inst_30048 = (inst_30046__$1 == null);
var inst_30049 = cljs.core.not.call(null,inst_30048);
var state_30093__$1 = (function (){var statearr_30131 = state_30093;
(statearr_30131[(16)] = inst_30046__$1);

(statearr_30131[(28)] = inst_30042);

return statearr_30131;
})();
if(inst_30049){
var statearr_30132_30205 = state_30093__$1;
(statearr_30132_30205[(1)] = (32));

} else {
var statearr_30133_30206 = state_30093__$1;
(statearr_30133_30206[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (44))){
var inst_30069 = (state_30093[(21)]);
var inst_30082 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30069);
var inst_30083 = cljs.core.pr_str.call(null,inst_30082);
var inst_30084 = ["not required: ",inst_30083].join('');
var inst_30085 = figwheel.client.utils.log.call(null,inst_30084);
var state_30093__$1 = state_30093;
var statearr_30134_30207 = state_30093__$1;
(statearr_30134_30207[(2)] = inst_30085);

(statearr_30134_30207[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (6))){
var inst_29987 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30135_30208 = state_30093__$1;
(statearr_30135_30208[(2)] = inst_29987);

(statearr_30135_30208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (28))){
var inst_30012 = (state_30093[(26)]);
var inst_30039 = (state_30093[(2)]);
var inst_30040 = cljs.core.not_empty.call(null,inst_30012);
var state_30093__$1 = (function (){var statearr_30136 = state_30093;
(statearr_30136[(29)] = inst_30039);

return statearr_30136;
})();
if(cljs.core.truth_(inst_30040)){
var statearr_30137_30209 = state_30093__$1;
(statearr_30137_30209[(1)] = (29));

} else {
var statearr_30138_30210 = state_30093__$1;
(statearr_30138_30210[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (25))){
var inst_30010 = (state_30093[(23)]);
var inst_30026 = (state_30093[(2)]);
var inst_30027 = cljs.core.not_empty.call(null,inst_30010);
var state_30093__$1 = (function (){var statearr_30139 = state_30093;
(statearr_30139[(30)] = inst_30026);

return statearr_30139;
})();
if(cljs.core.truth_(inst_30027)){
var statearr_30140_30211 = state_30093__$1;
(statearr_30140_30211[(1)] = (26));

} else {
var statearr_30141_30212 = state_30093__$1;
(statearr_30141_30212[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (34))){
var inst_30062 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30062)){
var statearr_30142_30213 = state_30093__$1;
(statearr_30142_30213[(1)] = (38));

} else {
var statearr_30143_30214 = state_30093__$1;
(statearr_30143_30214[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (17))){
var state_30093__$1 = state_30093;
var statearr_30144_30215 = state_30093__$1;
(statearr_30144_30215[(2)] = recompile_dependents);

(statearr_30144_30215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (3))){
var state_30093__$1 = state_30093;
var statearr_30145_30216 = state_30093__$1;
(statearr_30145_30216[(2)] = null);

(statearr_30145_30216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (12))){
var inst_29983 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30146_30217 = state_30093__$1;
(statearr_30146_30217[(2)] = inst_29983);

(statearr_30146_30217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (2))){
var inst_29945 = (state_30093[(13)]);
var inst_29952 = cljs.core.seq.call(null,inst_29945);
var inst_29953 = inst_29952;
var inst_29954 = null;
var inst_29955 = (0);
var inst_29956 = (0);
var state_30093__$1 = (function (){var statearr_30147 = state_30093;
(statearr_30147[(7)] = inst_29955);

(statearr_30147[(8)] = inst_29953);

(statearr_30147[(9)] = inst_29956);

(statearr_30147[(10)] = inst_29954);

return statearr_30147;
})();
var statearr_30148_30218 = state_30093__$1;
(statearr_30148_30218[(2)] = null);

(statearr_30148_30218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (23))){
var inst_30010 = (state_30093[(23)]);
var inst_30014 = (state_30093[(24)]);
var inst_30006 = (state_30093[(19)]);
var inst_30012 = (state_30093[(26)]);
var inst_30009 = (state_30093[(25)]);
var inst_30017 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30019 = (function (){var all_files = inst_30006;
var res_SINGLEQUOTE_ = inst_30009;
var res = inst_30010;
var files_not_loaded = inst_30012;
var dependencies_that_loaded = inst_30014;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30010,inst_30014,inst_30006,inst_30012,inst_30009,inst_30017,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30018){
var map__30149 = p__30018;
var map__30149__$1 = (((((!((map__30149 == null))))?(((((map__30149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30149):map__30149);
var request_url = cljs.core.get.call(null,map__30149__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30010,inst_30014,inst_30006,inst_30012,inst_30009,inst_30017,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30020 = cljs.core.reverse.call(null,inst_30014);
var inst_30021 = cljs.core.map.call(null,inst_30019,inst_30020);
var inst_30022 = cljs.core.pr_str.call(null,inst_30021);
var inst_30023 = figwheel.client.utils.log.call(null,inst_30022);
var state_30093__$1 = (function (){var statearr_30151 = state_30093;
(statearr_30151[(31)] = inst_30017);

return statearr_30151;
})();
var statearr_30152_30219 = state_30093__$1;
(statearr_30152_30219[(2)] = inst_30023);

(statearr_30152_30219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (35))){
var state_30093__$1 = state_30093;
var statearr_30153_30220 = state_30093__$1;
(statearr_30153_30220[(2)] = true);

(statearr_30153_30220[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (19))){
var inst_29996 = (state_30093[(12)]);
var inst_30002 = figwheel.client.file_reloading.expand_files.call(null,inst_29996);
var state_30093__$1 = state_30093;
var statearr_30154_30221 = state_30093__$1;
(statearr_30154_30221[(2)] = inst_30002);

(statearr_30154_30221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (11))){
var state_30093__$1 = state_30093;
var statearr_30155_30222 = state_30093__$1;
(statearr_30155_30222[(2)] = null);

(statearr_30155_30222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (9))){
var inst_29985 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30156_30223 = state_30093__$1;
(statearr_30156_30223[(2)] = inst_29985);

(statearr_30156_30223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (5))){
var inst_29955 = (state_30093[(7)]);
var inst_29956 = (state_30093[(9)]);
var inst_29958 = (inst_29956 < inst_29955);
var inst_29959 = inst_29958;
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_29959)){
var statearr_30157_30224 = state_30093__$1;
(statearr_30157_30224[(1)] = (7));

} else {
var statearr_30158_30225 = state_30093__$1;
(statearr_30158_30225[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (14))){
var inst_29966 = (state_30093[(22)]);
var inst_29975 = cljs.core.first.call(null,inst_29966);
var inst_29976 = figwheel.client.file_reloading.eval_body.call(null,inst_29975,opts);
var inst_29977 = cljs.core.next.call(null,inst_29966);
var inst_29953 = inst_29977;
var inst_29954 = null;
var inst_29955 = (0);
var inst_29956 = (0);
var state_30093__$1 = (function (){var statearr_30159 = state_30093;
(statearr_30159[(7)] = inst_29955);

(statearr_30159[(8)] = inst_29953);

(statearr_30159[(9)] = inst_29956);

(statearr_30159[(10)] = inst_29954);

(statearr_30159[(32)] = inst_29976);

return statearr_30159;
})();
var statearr_30160_30226 = state_30093__$1;
(statearr_30160_30226[(2)] = null);

(statearr_30160_30226[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (45))){
var state_30093__$1 = state_30093;
var statearr_30161_30227 = state_30093__$1;
(statearr_30161_30227[(2)] = null);

(statearr_30161_30227[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (26))){
var inst_30010 = (state_30093[(23)]);
var inst_30014 = (state_30093[(24)]);
var inst_30006 = (state_30093[(19)]);
var inst_30012 = (state_30093[(26)]);
var inst_30009 = (state_30093[(25)]);
var inst_30029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30031 = (function (){var all_files = inst_30006;
var res_SINGLEQUOTE_ = inst_30009;
var res = inst_30010;
var files_not_loaded = inst_30012;
var dependencies_that_loaded = inst_30014;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30010,inst_30014,inst_30006,inst_30012,inst_30009,inst_30029,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30030){
var map__30162 = p__30030;
var map__30162__$1 = (((((!((map__30162 == null))))?(((((map__30162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30162):map__30162);
var namespace = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30010,inst_30014,inst_30006,inst_30012,inst_30009,inst_30029,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30032 = cljs.core.map.call(null,inst_30031,inst_30010);
var inst_30033 = cljs.core.pr_str.call(null,inst_30032);
var inst_30034 = figwheel.client.utils.log.call(null,inst_30033);
var inst_30035 = (function (){var all_files = inst_30006;
var res_SINGLEQUOTE_ = inst_30009;
var res = inst_30010;
var files_not_loaded = inst_30012;
var dependencies_that_loaded = inst_30014;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30010,inst_30014,inst_30006,inst_30012,inst_30009,inst_30029,inst_30031,inst_30032,inst_30033,inst_30034,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30010,inst_30014,inst_30006,inst_30012,inst_30009,inst_30029,inst_30031,inst_30032,inst_30033,inst_30034,state_val_30094,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30036 = setTimeout(inst_30035,(10));
var state_30093__$1 = (function (){var statearr_30164 = state_30093;
(statearr_30164[(33)] = inst_30029);

(statearr_30164[(34)] = inst_30034);

return statearr_30164;
})();
var statearr_30165_30228 = state_30093__$1;
(statearr_30165_30228[(2)] = inst_30036);

(statearr_30165_30228[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (16))){
var state_30093__$1 = state_30093;
var statearr_30166_30229 = state_30093__$1;
(statearr_30166_30229[(2)] = reload_dependents);

(statearr_30166_30229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (38))){
var inst_30046 = (state_30093[(16)]);
var inst_30064 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30046);
var state_30093__$1 = state_30093;
var statearr_30167_30230 = state_30093__$1;
(statearr_30167_30230[(2)] = inst_30064);

(statearr_30167_30230[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (30))){
var state_30093__$1 = state_30093;
var statearr_30168_30231 = state_30093__$1;
(statearr_30168_30231[(2)] = null);

(statearr_30168_30231[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (10))){
var inst_29966 = (state_30093[(22)]);
var inst_29968 = cljs.core.chunked_seq_QMARK_.call(null,inst_29966);
var state_30093__$1 = state_30093;
if(inst_29968){
var statearr_30169_30232 = state_30093__$1;
(statearr_30169_30232[(1)] = (13));

} else {
var statearr_30170_30233 = state_30093__$1;
(statearr_30170_30233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (18))){
var inst_30000 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30000)){
var statearr_30171_30234 = state_30093__$1;
(statearr_30171_30234[(1)] = (19));

} else {
var statearr_30172_30235 = state_30093__$1;
(statearr_30172_30235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (42))){
var state_30093__$1 = state_30093;
var statearr_30173_30236 = state_30093__$1;
(statearr_30173_30236[(2)] = null);

(statearr_30173_30236[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (37))){
var inst_30059 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30174_30237 = state_30093__$1;
(statearr_30174_30237[(2)] = inst_30059);

(statearr_30174_30237[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (8))){
var inst_29953 = (state_30093[(8)]);
var inst_29966 = (state_30093[(22)]);
var inst_29966__$1 = cljs.core.seq.call(null,inst_29953);
var state_30093__$1 = (function (){var statearr_30175 = state_30093;
(statearr_30175[(22)] = inst_29966__$1);

return statearr_30175;
})();
if(inst_29966__$1){
var statearr_30176_30238 = state_30093__$1;
(statearr_30176_30238[(1)] = (10));

} else {
var statearr_30177_30239 = state_30093__$1;
(statearr_30177_30239[(1)] = (11));

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
});})(c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23884__auto__,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto____0 = (function (){
var statearr_30178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30178[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto__);

(statearr_30178[(1)] = (1));

return statearr_30178;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto____1 = (function (state_30093){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_30093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e30179){if((e30179 instanceof Object)){
var ex__23888__auto__ = e30179;
var statearr_30180_30240 = state_30093;
(statearr_30180_30240[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30241 = state_30093;
state_30093 = G__30241;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto__ = function(state_30093){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto____1.call(this,state_30093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23981__auto__ = (function (){var statearr_30181 = f__23980__auto__.call(null);
(statearr_30181[(6)] = c__23979__auto__);

return statearr_30181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto__,map__29938,map__29938__$1,opts,before_jsload,on_jsload,reload_dependents,map__29939,map__29939__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23979__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30244,link){
var map__30245 = p__30244;
var map__30245__$1 = (((((!((map__30245 == null))))?(((((map__30245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30245):map__30245);
var file = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__30245,map__30245__$1,file){
return (function (p1__30242_SHARP_,p2__30243_SHARP_){
if(cljs.core._EQ_.call(null,p1__30242_SHARP_,p2__30243_SHARP_)){
return p1__30242_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__30245,map__30245__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30248){
var map__30249 = p__30248;
var map__30249__$1 = (((((!((map__30249 == null))))?(((((map__30249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30249):map__30249);
var match_length = cljs.core.get.call(null,map__30249__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30249__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30247_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30247_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30251_SHARP_,p2__30252_SHARP_){
return cljs.core.assoc.call(null,p1__30251_SHARP_,cljs.core.get.call(null,p2__30252_SHARP_,key),p2__30252_SHARP_);
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
var loaded_f_datas_30253 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30253);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30253);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30254,p__30255){
var map__30256 = p__30254;
var map__30256__$1 = (((((!((map__30256 == null))))?(((((map__30256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30256):map__30256);
var on_cssload = cljs.core.get.call(null,map__30256__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30257 = p__30255;
var map__30257__$1 = (((((!((map__30257 == null))))?(((((map__30257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30257):map__30257);
var files_msg = map__30257__$1;
var files = cljs.core.get.call(null,map__30257__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1567734178503
