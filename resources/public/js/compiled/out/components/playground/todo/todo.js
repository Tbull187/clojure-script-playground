// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.playground.todo.todo');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.todo !== 'undefined') && (typeof components.playground.todo.todo !== 'undefined') && (typeof components.playground.todo.todo.todos !== 'undefined')){
} else {
components.playground.todo.todo.todos = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.todo !== 'undefined') && (typeof components.playground.todo.todo !== 'undefined') && (typeof components.playground.todo.todo.show_code !== 'undefined')){
} else {
components.playground.todo.todo.show_code = reagent.core.atom.call(null,false);
}
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.todo !== 'undefined') && (typeof components.playground.todo.todo !== 'undefined') && (typeof components.playground.todo.todo.index !== 'undefined')){
} else {
components.playground.todo.todo.index = reagent.core.atom.call(null,(0));
}
components.playground.todo.todo.todo_item = (function components$playground$todo$todo$todo_item(id,text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
components.playground.todo.todo.add = (function components$playground$todo$todo$add(todo){

cljs.core.prn.call(null,"adding todo with id:",todo.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),"and text:",todo.call(null,new cljs.core.Keyword(null,"text","text",-1790561697)));

if((!(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(todo))))){
return cljs.core.swap_BANG_.call(null,components.playground.todo.todo.todos,cljs.core.conj,todo);
} else {
return null;
}
});
components.playground.todo.todo.delete_todo = (function components$playground$todo$todo$delete_todo(todo){
return cljs.core.swap_BANG_.call(null,components.playground.todo.todo.todos,(function (c){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([todo]),c);
}));
});
components.playground.todo.todo.todo_elem = (function components$playground$todo$todo$todo_elem(todo){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-item","li.list-item",77124048),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),todo.call(null,new cljs.core.Keyword(null,"text","text",-1790561697))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-spacer","div.button-spacer",1646308942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.playground.todo.todo.delete_todo.call(null,todo);
})], null)], null)], null);
});
});
components.playground.todo.todo.todo_form = (function components$playground$todo$todo$todo_form(){
var input_val = reagent.core.atom.call(null,"");
var reset_val = ((function (input_val){
return (function (){
return cljs.core.reset_BANG_.call(null,input_val,"");
});})(input_val))
;
return ((function (input_val,reset_val){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,input_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (input_val,reset_val){
return (function (p1__28573_SHARP_){
return cljs.core.reset_BANG_.call(null,input_val,p1__28573_SHARP_.target.value);
});})(input_val,reset_val))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (input_val,reset_val){
return (function (p1__28574_SHARP_){
var G__28575 = p1__28574_SHARP_.key;
switch (G__28575) {
case "Enter":
components.playground.todo.todo.add.call(null,components.playground.todo.todo.todo_item.call(null,cljs.core.deref.call(null,components.playground.todo.todo.index),cljs.core.deref.call(null,input_val)));

return reset_val.call(null);

break;
default:
return null;

}
});})(input_val,reset_val))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter a todo..."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-spacer","div.button-spacer",1646308942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button-primary","input.button-primary",51154301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input_val,reset_val){
return (function (){
components.playground.todo.todo.add.call(null,components.playground.todo.todo.todo_item.call(null,cljs.core.deref.call(null,components.playground.todo.todo.index),cljs.core.deref.call(null,input_val)));

return reset_val.call(null);
});})(input_val,reset_val))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-spacer","div.button-spacer",1646308942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Clear Todos",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input_val,reset_val){
return (function (){
return cljs.core.reset_BANG_.call(null,components.playground.todo.todo.todos,cljs.core.PersistentVector.EMPTY);
});})(input_val,reset_val))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__4523__auto__ = ((function (input_val,reset_val){
return (function components$playground$todo$todo$todo_form_$_iter__28576(s__28577){
return (new cljs.core.LazySeq(null,((function (input_val,reset_val){
return (function (){
var s__28577__$1 = s__28577;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28577__$1);
if(temp__5720__auto__){
var s__28577__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28577__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28577__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28579 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28578 = (0);
while(true){
if((i__28578 < size__4522__auto__)){
var todo = cljs.core._nth.call(null,c__4521__auto__,i__28578);
cljs.core.chunk_append.call(null,b__28579,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.todo.todo.todo_elem,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)));

var G__28581 = (i__28578 + (1));
i__28578 = G__28581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28579),components$playground$todo$todo$todo_form_$_iter__28576.call(null,cljs.core.chunk_rest.call(null,s__28577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28579),null);
}
} else {
var todo = cljs.core.first.call(null,s__28577__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.todo.todo.todo_elem,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)),components$playground$todo$todo$todo_form_$_iter__28576.call(null,cljs.core.rest.call(null,s__28577__$2)));
}
} else {
return null;
}
break;
}
});})(input_val,reset_val))
,null,null));
});})(input_val,reset_val))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,components.playground.todo.todo.todos));
})()], null)], null);
});
;})(input_val,reset_val))
});
components.playground.todo.todo.todo_app = (function components$playground$todo$todo$todo_app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-container","div.example-container",-1958846145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Todo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.todo.todo.todo_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#users","div#users",-1466503424)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),[(cljs.core.truth_(cljs.core.deref.call(null,components.playground.todo.todo.show_code))?"Hide":"Show")," Code"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,components.playground.todo.todo.show_code,cljs.core.not.call(null,cljs.core.deref.call(null,components.playground.todo.todo.show_code)));
})], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.todo.todo.show_code))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"coming soon. :P"], null):null)], null);
});

//# sourceMappingURL=todo.js.map?rel=1570486574141
