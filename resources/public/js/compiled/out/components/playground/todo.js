// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.playground.todo');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.todo !== 'undefined') && (typeof components.playground.todo.todos !== 'undefined')){
} else {
components.playground.todo.todos = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof components !== 'undefined') && (typeof components.playground !== 'undefined') && (typeof components.playground.todo !== 'undefined') && (typeof components.playground.todo.show_code !== 'undefined')){
} else {
components.playground.todo.show_code = reagent.core.atom.call(null,false);
}
components.playground.todo.add_todo = (function components$playground$todo$add_todo(todo_text){
console.log("Adding Todo Item with text:",todo_text);

return cljs.core.swap_BANG_.call(null,components.playground.todo.todos,cljs.core.conj,todo_text);
});
components.playground.todo.delete_todo = (function components$playground$todo$delete_todo(todo_text){
console.log("Deleting todo:",todo_text);

return cljs.core.swap_BANG_.call(null,components.playground.todo.todos,(function (c){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([todo_text]),c);
}));
});
components.playground.todo.todo_elem = (function components$playground$todo$todo_elem(text){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-item","li.list-item",77124048),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-spacer","div.button-spacer",1646308942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return components.playground.todo.delete_todo.call(null,text);
})], null)], null)], null);
});
});
components.playground.todo.todo_form = (function components$playground$todo$todo_form(){
var val = reagent.core.atom.call(null,"");
var reset_val = ((function (val){
return (function (){
return cljs.core.reset_BANG_.call(null,val,"");
});})(val))
;
return ((function (val,reset_val){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,reset_val){
return (function (p1__28613_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__28613_SHARP_.target.value);
});})(val,reset_val))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,reset_val){
return (function (p1__28614_SHARP_){
var G__28615 = p1__28614_SHARP_.key;
switch (G__28615) {
case "Enter":
components.playground.todo.add_todo.call(null,cljs.core.deref.call(null,val));

return reset_val.call(null);

break;
default:
return null;

}
});})(val,reset_val))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter a todo..."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-spacer","div.button-spacer",1646308942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button-primary","input.button-primary",51154301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val,reset_val){
return (function (){
components.playground.todo.add_todo.call(null,cljs.core.deref.call(null,val));

return reset_val.call(null);
});})(val,reset_val))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-spacer","div.button-spacer",1646308942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Clear Todos",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val,reset_val){
return (function (){
return cljs.core.reset_BANG_.call(null,components.playground.todo.todos,cljs.core.PersistentVector.EMPTY);
});})(val,reset_val))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__4523__auto__ = ((function (val,reset_val){
return (function components$playground$todo$todo_form_$_iter__28616(s__28617){
return (new cljs.core.LazySeq(null,((function (val,reset_val){
return (function (){
var s__28617__$1 = s__28617;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28617__$1);
if(temp__5720__auto__){
var s__28617__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28617__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28617__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28619 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28618 = (0);
while(true){
if((i__28618 < size__4522__auto__)){
var todo = cljs.core._nth.call(null,c__4521__auto__,i__28618);
cljs.core.chunk_append.call(null,b__28619,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.todo.todo_elem,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)));

var G__28621 = (i__28618 + (1));
i__28618 = G__28621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28619),components$playground$todo$todo_form_$_iter__28616.call(null,cljs.core.chunk_rest.call(null,s__28617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28619),null);
}
} else {
var todo = cljs.core.first.call(null,s__28617__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.todo.todo_elem,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)),components$playground$todo$todo_form_$_iter__28616.call(null,cljs.core.rest.call(null,s__28617__$2)));
}
} else {
return null;
}
break;
}
});})(val,reset_val))
,null,null));
});})(val,reset_val))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,components.playground.todo.todos));
})()], null)], null);
});
;})(val,reset_val))
});
components.playground.todo.todo_app = (function components$playground$todo$todo_app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-container","div.example-container",-1958846145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Todo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.playground.todo.todo_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#users","div#users",-1466503424)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),[(cljs.core.truth_(cljs.core.deref.call(null,components.playground.todo.show_code))?"Hide":"Show")," Code"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,components.playground.todo.show_code,cljs.core.not.call(null,cljs.core.deref.call(null,components.playground.todo.show_code)));
})], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,components.playground.todo.show_code))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"coming soon. :P"], null):null)], null);
});

//# sourceMappingURL=todo.js.map?rel=1568769400713
