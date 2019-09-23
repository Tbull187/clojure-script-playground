// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.layout.sidebar');
goog.require('cljs.core');
components.layout.sidebar.set_href = (function components$layout$sidebar$set_href(route){
return window.location.href = route;
});
components.layout.sidebar.app_sidebar = (function components$layout$sidebar$app_sidebar(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-sidebar","div.app-sidebar",-546296552),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"home","home",-74557309)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.layout.sidebar.set_href.call(null,"#/");
})], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"counter","counter",804008177)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.layout.sidebar.set_href.call(null,"#/counter");
})], null),"Counter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"todo","todo",-1046442570)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.layout.sidebar.set_href.call(null,"#/todo");
})], null),"Todo App"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"cljs-ajax","cljs-ajax",-1605663991)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.layout.sidebar.set_href.call(null,"#/request-example-ajax");
})], null),"Network Request: cljs-ajax"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"cljs-http","cljs-http",-395638914)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.layout.sidebar.set_href.call(null,"#/request-example-http");
})], null),"Network Request: cljs-http"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"reframe","reframe",-49463815)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.layout.sidebar.set_href.call(null,"#/reframe");
})], null),"Re-Frame"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"js-interop","js-interop",1572979863)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.layout.sidebar.set_href.call(null,"#/javascript-interop");
})], null),"JavaScript Interop"], null)], null)], null);
});

//# sourceMappingURL=sidebar.js.map?rel=1569206535401
