// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24039 = arguments.length;
switch (G__24039) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24040 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24040 = (function (f,blockable,meta24041){
this.f = f;
this.blockable = blockable;
this.meta24041 = meta24041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24042,meta24041__$1){
var self__ = this;
var _24042__$1 = this;
return (new cljs.core.async.t_cljs$core$async24040(self__.f,self__.blockable,meta24041__$1));
});

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24042){
var self__ = this;
var _24042__$1 = this;
return self__.meta24041;
});

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24041","meta24041",-868830332,null)], null);
});

cljs.core.async.t_cljs$core$async24040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24040";

cljs.core.async.t_cljs$core$async24040.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24040");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24040.
 */
cljs.core.async.__GT_t_cljs$core$async24040 = (function cljs$core$async$__GT_t_cljs$core$async24040(f__$1,blockable__$1,meta24041){
return (new cljs.core.async.t_cljs$core$async24040(f__$1,blockable__$1,meta24041));
});

}

return (new cljs.core.async.t_cljs$core$async24040(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24046 = arguments.length;
switch (G__24046) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24049 = arguments.length;
switch (G__24049) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24052 = arguments.length;
switch (G__24052) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24054 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24054);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24054,ret){
return (function (){
return fn1.call(null,val_24054);
});})(val_24054,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24056 = arguments.length;
switch (G__24056) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___24058 = n;
var x_24059 = (0);
while(true){
if((x_24059 < n__4607__auto___24058)){
(a[x_24059] = x_24059);

var G__24060 = (x_24059 + (1));
x_24059 = G__24060;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24061 = (function (flag,meta24062){
this.flag = flag;
this.meta24062 = meta24062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24063,meta24062__$1){
var self__ = this;
var _24063__$1 = this;
return (new cljs.core.async.t_cljs$core$async24061(self__.flag,meta24062__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24063){
var self__ = this;
var _24063__$1 = this;
return self__.meta24062;
});})(flag))
;

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24061.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24062","meta24062",869608552,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24061";

cljs.core.async.t_cljs$core$async24061.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24061");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24061.
 */
cljs.core.async.__GT_t_cljs$core$async24061 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24061(flag__$1,meta24062){
return (new cljs.core.async.t_cljs$core$async24061(flag__$1,meta24062));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24061(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24064 = (function (flag,cb,meta24065){
this.flag = flag;
this.cb = cb;
this.meta24065 = meta24065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24066,meta24065__$1){
var self__ = this;
var _24066__$1 = this;
return (new cljs.core.async.t_cljs$core$async24064(self__.flag,self__.cb,meta24065__$1));
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24066){
var self__ = this;
var _24066__$1 = this;
return self__.meta24065;
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24065","meta24065",-1458870597,null)], null);
});

cljs.core.async.t_cljs$core$async24064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24064";

cljs.core.async.t_cljs$core$async24064.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24064");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24064.
 */
cljs.core.async.__GT_t_cljs$core$async24064 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24064(flag__$1,cb__$1,meta24065){
return (new cljs.core.async.t_cljs$core$async24064(flag__$1,cb__$1,meta24065));
});

}

return (new cljs.core.async.t_cljs$core$async24064(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24067_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24067_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24068_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24068_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24069 = (i + (1));
i = G__24069;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24075 = arguments.length;
var i__4731__auto___24076 = (0);
while(true){
if((i__4731__auto___24076 < len__4730__auto___24075)){
args__4736__auto__.push((arguments[i__4731__auto___24076]));

var G__24077 = (i__4731__auto___24076 + (1));
i__4731__auto___24076 = G__24077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24072){
var map__24073 = p__24072;
var map__24073__$1 = (((((!((map__24073 == null))))?(((((map__24073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24073):map__24073);
var opts = map__24073__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24070){
var G__24071 = cljs.core.first.call(null,seq24070);
var seq24070__$1 = cljs.core.next.call(null,seq24070);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24071,seq24070__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24079 = arguments.length;
switch (G__24079) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23979__auto___24125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___24125){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___24125){
return (function (state_24103){
var state_val_24104 = (state_24103[(1)]);
if((state_val_24104 === (7))){
var inst_24099 = (state_24103[(2)]);
var state_24103__$1 = state_24103;
var statearr_24105_24126 = state_24103__$1;
(statearr_24105_24126[(2)] = inst_24099);

(statearr_24105_24126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (1))){
var state_24103__$1 = state_24103;
var statearr_24106_24127 = state_24103__$1;
(statearr_24106_24127[(2)] = null);

(statearr_24106_24127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (4))){
var inst_24082 = (state_24103[(7)]);
var inst_24082__$1 = (state_24103[(2)]);
var inst_24083 = (inst_24082__$1 == null);
var state_24103__$1 = (function (){var statearr_24107 = state_24103;
(statearr_24107[(7)] = inst_24082__$1);

return statearr_24107;
})();
if(cljs.core.truth_(inst_24083)){
var statearr_24108_24128 = state_24103__$1;
(statearr_24108_24128[(1)] = (5));

} else {
var statearr_24109_24129 = state_24103__$1;
(statearr_24109_24129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (13))){
var state_24103__$1 = state_24103;
var statearr_24110_24130 = state_24103__$1;
(statearr_24110_24130[(2)] = null);

(statearr_24110_24130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (6))){
var inst_24082 = (state_24103[(7)]);
var state_24103__$1 = state_24103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24103__$1,(11),to,inst_24082);
} else {
if((state_val_24104 === (3))){
var inst_24101 = (state_24103[(2)]);
var state_24103__$1 = state_24103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24103__$1,inst_24101);
} else {
if((state_val_24104 === (12))){
var state_24103__$1 = state_24103;
var statearr_24111_24131 = state_24103__$1;
(statearr_24111_24131[(2)] = null);

(statearr_24111_24131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (2))){
var state_24103__$1 = state_24103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24103__$1,(4),from);
} else {
if((state_val_24104 === (11))){
var inst_24092 = (state_24103[(2)]);
var state_24103__$1 = state_24103;
if(cljs.core.truth_(inst_24092)){
var statearr_24112_24132 = state_24103__$1;
(statearr_24112_24132[(1)] = (12));

} else {
var statearr_24113_24133 = state_24103__$1;
(statearr_24113_24133[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (9))){
var state_24103__$1 = state_24103;
var statearr_24114_24134 = state_24103__$1;
(statearr_24114_24134[(2)] = null);

(statearr_24114_24134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (5))){
var state_24103__$1 = state_24103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24115_24135 = state_24103__$1;
(statearr_24115_24135[(1)] = (8));

} else {
var statearr_24116_24136 = state_24103__$1;
(statearr_24116_24136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (14))){
var inst_24097 = (state_24103[(2)]);
var state_24103__$1 = state_24103;
var statearr_24117_24137 = state_24103__$1;
(statearr_24117_24137[(2)] = inst_24097);

(statearr_24117_24137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (10))){
var inst_24089 = (state_24103[(2)]);
var state_24103__$1 = state_24103;
var statearr_24118_24138 = state_24103__$1;
(statearr_24118_24138[(2)] = inst_24089);

(statearr_24118_24138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24104 === (8))){
var inst_24086 = cljs.core.async.close_BANG_.call(null,to);
var state_24103__$1 = state_24103;
var statearr_24119_24139 = state_24103__$1;
(statearr_24119_24139[(2)] = inst_24086);

(statearr_24119_24139[(1)] = (10));


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
});})(c__23979__auto___24125))
;
return ((function (switch__23884__auto__,c__23979__auto___24125){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_24120 = [null,null,null,null,null,null,null,null];
(statearr_24120[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_24120[(1)] = (1));

return statearr_24120;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_24103){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24121){if((e24121 instanceof Object)){
var ex__23888__auto__ = e24121;
var statearr_24122_24140 = state_24103;
(statearr_24122_24140[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24141 = state_24103;
state_24103 = G__24141;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_24103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_24103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___24125))
})();
var state__23981__auto__ = (function (){var statearr_24123 = f__23980__auto__.call(null);
(statearr_24123[(6)] = c__23979__auto___24125);

return statearr_24123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___24125))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24142){
var vec__24143 = p__24142;
var v = cljs.core.nth.call(null,vec__24143,(0),null);
var p = cljs.core.nth.call(null,vec__24143,(1),null);
var job = vec__24143;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23979__auto___24314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___24314,res,vec__24143,v,p,job,jobs,results){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___24314,res,vec__24143,v,p,job,jobs,results){
return (function (state_24150){
var state_val_24151 = (state_24150[(1)]);
if((state_val_24151 === (1))){
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24150__$1,(2),res,v);
} else {
if((state_val_24151 === (2))){
var inst_24147 = (state_24150[(2)]);
var inst_24148 = cljs.core.async.close_BANG_.call(null,res);
var state_24150__$1 = (function (){var statearr_24152 = state_24150;
(statearr_24152[(7)] = inst_24147);

return statearr_24152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24150__$1,inst_24148);
} else {
return null;
}
}
});})(c__23979__auto___24314,res,vec__24143,v,p,job,jobs,results))
;
return ((function (switch__23884__auto__,c__23979__auto___24314,res,vec__24143,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0 = (function (){
var statearr_24153 = [null,null,null,null,null,null,null,null];
(statearr_24153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__);

(statearr_24153[(1)] = (1));

return statearr_24153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1 = (function (state_24150){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24154){if((e24154 instanceof Object)){
var ex__23888__auto__ = e24154;
var statearr_24155_24315 = state_24150;
(statearr_24155_24315[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24316 = state_24150;
state_24150 = G__24316;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = function(state_24150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1.call(this,state_24150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___24314,res,vec__24143,v,p,job,jobs,results))
})();
var state__23981__auto__ = (function (){var statearr_24156 = f__23980__auto__.call(null);
(statearr_24156[(6)] = c__23979__auto___24314);

return statearr_24156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___24314,res,vec__24143,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24157){
var vec__24158 = p__24157;
var v = cljs.core.nth.call(null,vec__24158,(0),null);
var p = cljs.core.nth.call(null,vec__24158,(1),null);
var job = vec__24158;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24317 = n;
var __24318 = (0);
while(true){
if((__24318 < n__4607__auto___24317)){
var G__24161_24319 = type;
var G__24161_24320__$1 = (((G__24161_24319 instanceof cljs.core.Keyword))?G__24161_24319.fqn:null);
switch (G__24161_24320__$1) {
case "compute":
var c__23979__auto___24322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24318,c__23979__auto___24322,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (__24318,c__23979__auto___24322,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async){
return (function (state_24174){
var state_val_24175 = (state_24174[(1)]);
if((state_val_24175 === (1))){
var state_24174__$1 = state_24174;
var statearr_24176_24323 = state_24174__$1;
(statearr_24176_24323[(2)] = null);

(statearr_24176_24323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (2))){
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(4),jobs);
} else {
if((state_val_24175 === (3))){
var inst_24172 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24174__$1,inst_24172);
} else {
if((state_val_24175 === (4))){
var inst_24164 = (state_24174[(2)]);
var inst_24165 = process.call(null,inst_24164);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24165)){
var statearr_24177_24324 = state_24174__$1;
(statearr_24177_24324[(1)] = (5));

} else {
var statearr_24178_24325 = state_24174__$1;
(statearr_24178_24325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (5))){
var state_24174__$1 = state_24174;
var statearr_24179_24326 = state_24174__$1;
(statearr_24179_24326[(2)] = null);

(statearr_24179_24326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (6))){
var state_24174__$1 = state_24174;
var statearr_24180_24327 = state_24174__$1;
(statearr_24180_24327[(2)] = null);

(statearr_24180_24327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (7))){
var inst_24170 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24181_24328 = state_24174__$1;
(statearr_24181_24328[(2)] = inst_24170);

(statearr_24181_24328[(1)] = (3));


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
});})(__24318,c__23979__auto___24322,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async))
;
return ((function (__24318,switch__23884__auto__,c__23979__auto___24322,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0 = (function (){
var statearr_24182 = [null,null,null,null,null,null,null];
(statearr_24182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__);

(statearr_24182[(1)] = (1));

return statearr_24182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1 = (function (state_24174){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24183){if((e24183 instanceof Object)){
var ex__23888__auto__ = e24183;
var statearr_24184_24329 = state_24174;
(statearr_24184_24329[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24330 = state_24174;
state_24174 = G__24330;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__;
})()
;})(__24318,switch__23884__auto__,c__23979__auto___24322,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async))
})();
var state__23981__auto__ = (function (){var statearr_24185 = f__23980__auto__.call(null);
(statearr_24185[(6)] = c__23979__auto___24322);

return statearr_24185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(__24318,c__23979__auto___24322,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async))
);


break;
case "async":
var c__23979__auto___24331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24318,c__23979__auto___24331,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (__24318,c__23979__auto___24331,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async){
return (function (state_24198){
var state_val_24199 = (state_24198[(1)]);
if((state_val_24199 === (1))){
var state_24198__$1 = state_24198;
var statearr_24200_24332 = state_24198__$1;
(statearr_24200_24332[(2)] = null);

(statearr_24200_24332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (2))){
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24198__$1,(4),jobs);
} else {
if((state_val_24199 === (3))){
var inst_24196 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24198__$1,inst_24196);
} else {
if((state_val_24199 === (4))){
var inst_24188 = (state_24198[(2)]);
var inst_24189 = async.call(null,inst_24188);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24189)){
var statearr_24201_24333 = state_24198__$1;
(statearr_24201_24333[(1)] = (5));

} else {
var statearr_24202_24334 = state_24198__$1;
(statearr_24202_24334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (5))){
var state_24198__$1 = state_24198;
var statearr_24203_24335 = state_24198__$1;
(statearr_24203_24335[(2)] = null);

(statearr_24203_24335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (6))){
var state_24198__$1 = state_24198;
var statearr_24204_24336 = state_24198__$1;
(statearr_24204_24336[(2)] = null);

(statearr_24204_24336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (7))){
var inst_24194 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24205_24337 = state_24198__$1;
(statearr_24205_24337[(2)] = inst_24194);

(statearr_24205_24337[(1)] = (3));


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
});})(__24318,c__23979__auto___24331,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async))
;
return ((function (__24318,switch__23884__auto__,c__23979__auto___24331,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0 = (function (){
var statearr_24206 = [null,null,null,null,null,null,null];
(statearr_24206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__);

(statearr_24206[(1)] = (1));

return statearr_24206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1 = (function (state_24198){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24207){if((e24207 instanceof Object)){
var ex__23888__auto__ = e24207;
var statearr_24208_24338 = state_24198;
(statearr_24208_24338[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24339 = state_24198;
state_24198 = G__24339;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = function(state_24198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1.call(this,state_24198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__;
})()
;})(__24318,switch__23884__auto__,c__23979__auto___24331,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async))
})();
var state__23981__auto__ = (function (){var statearr_24209 = f__23980__auto__.call(null);
(statearr_24209[(6)] = c__23979__auto___24331);

return statearr_24209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(__24318,c__23979__auto___24331,G__24161_24319,G__24161_24320__$1,n__4607__auto___24317,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24161_24320__$1)].join('')));

}

var G__24340 = (__24318 + (1));
__24318 = G__24340;
continue;
} else {
}
break;
}

var c__23979__auto___24341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___24341,jobs,results,process,async){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___24341,jobs,results,process,async){
return (function (state_24231){
var state_val_24232 = (state_24231[(1)]);
if((state_val_24232 === (7))){
var inst_24227 = (state_24231[(2)]);
var state_24231__$1 = state_24231;
var statearr_24233_24342 = state_24231__$1;
(statearr_24233_24342[(2)] = inst_24227);

(statearr_24233_24342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (1))){
var state_24231__$1 = state_24231;
var statearr_24234_24343 = state_24231__$1;
(statearr_24234_24343[(2)] = null);

(statearr_24234_24343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (4))){
var inst_24212 = (state_24231[(7)]);
var inst_24212__$1 = (state_24231[(2)]);
var inst_24213 = (inst_24212__$1 == null);
var state_24231__$1 = (function (){var statearr_24235 = state_24231;
(statearr_24235[(7)] = inst_24212__$1);

return statearr_24235;
})();
if(cljs.core.truth_(inst_24213)){
var statearr_24236_24344 = state_24231__$1;
(statearr_24236_24344[(1)] = (5));

} else {
var statearr_24237_24345 = state_24231__$1;
(statearr_24237_24345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (6))){
var inst_24212 = (state_24231[(7)]);
var inst_24217 = (state_24231[(8)]);
var inst_24217__$1 = cljs.core.async.chan.call(null,(1));
var inst_24218 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24219 = [inst_24212,inst_24217__$1];
var inst_24220 = (new cljs.core.PersistentVector(null,2,(5),inst_24218,inst_24219,null));
var state_24231__$1 = (function (){var statearr_24238 = state_24231;
(statearr_24238[(8)] = inst_24217__$1);

return statearr_24238;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24231__$1,(8),jobs,inst_24220);
} else {
if((state_val_24232 === (3))){
var inst_24229 = (state_24231[(2)]);
var state_24231__$1 = state_24231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24231__$1,inst_24229);
} else {
if((state_val_24232 === (2))){
var state_24231__$1 = state_24231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24231__$1,(4),from);
} else {
if((state_val_24232 === (9))){
var inst_24224 = (state_24231[(2)]);
var state_24231__$1 = (function (){var statearr_24239 = state_24231;
(statearr_24239[(9)] = inst_24224);

return statearr_24239;
})();
var statearr_24240_24346 = state_24231__$1;
(statearr_24240_24346[(2)] = null);

(statearr_24240_24346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (5))){
var inst_24215 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24231__$1 = state_24231;
var statearr_24241_24347 = state_24231__$1;
(statearr_24241_24347[(2)] = inst_24215);

(statearr_24241_24347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (8))){
var inst_24217 = (state_24231[(8)]);
var inst_24222 = (state_24231[(2)]);
var state_24231__$1 = (function (){var statearr_24242 = state_24231;
(statearr_24242[(10)] = inst_24222);

return statearr_24242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24231__$1,(9),results,inst_24217);
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
});})(c__23979__auto___24341,jobs,results,process,async))
;
return ((function (switch__23884__auto__,c__23979__auto___24341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0 = (function (){
var statearr_24243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__);

(statearr_24243[(1)] = (1));

return statearr_24243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1 = (function (state_24231){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24244){if((e24244 instanceof Object)){
var ex__23888__auto__ = e24244;
var statearr_24245_24348 = state_24231;
(statearr_24245_24348[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24349 = state_24231;
state_24231 = G__24349;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = function(state_24231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1.call(this,state_24231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___24341,jobs,results,process,async))
})();
var state__23981__auto__ = (function (){var statearr_24246 = f__23980__auto__.call(null);
(statearr_24246[(6)] = c__23979__auto___24341);

return statearr_24246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___24341,jobs,results,process,async))
);


var c__23979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto__,jobs,results,process,async){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto__,jobs,results,process,async){
return (function (state_24284){
var state_val_24285 = (state_24284[(1)]);
if((state_val_24285 === (7))){
var inst_24280 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
var statearr_24286_24350 = state_24284__$1;
(statearr_24286_24350[(2)] = inst_24280);

(statearr_24286_24350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (20))){
var state_24284__$1 = state_24284;
var statearr_24287_24351 = state_24284__$1;
(statearr_24287_24351[(2)] = null);

(statearr_24287_24351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (1))){
var state_24284__$1 = state_24284;
var statearr_24288_24352 = state_24284__$1;
(statearr_24288_24352[(2)] = null);

(statearr_24288_24352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (4))){
var inst_24249 = (state_24284[(7)]);
var inst_24249__$1 = (state_24284[(2)]);
var inst_24250 = (inst_24249__$1 == null);
var state_24284__$1 = (function (){var statearr_24289 = state_24284;
(statearr_24289[(7)] = inst_24249__$1);

return statearr_24289;
})();
if(cljs.core.truth_(inst_24250)){
var statearr_24290_24353 = state_24284__$1;
(statearr_24290_24353[(1)] = (5));

} else {
var statearr_24291_24354 = state_24284__$1;
(statearr_24291_24354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (15))){
var inst_24262 = (state_24284[(8)]);
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24284__$1,(18),to,inst_24262);
} else {
if((state_val_24285 === (21))){
var inst_24275 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
var statearr_24292_24355 = state_24284__$1;
(statearr_24292_24355[(2)] = inst_24275);

(statearr_24292_24355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (13))){
var inst_24277 = (state_24284[(2)]);
var state_24284__$1 = (function (){var statearr_24293 = state_24284;
(statearr_24293[(9)] = inst_24277);

return statearr_24293;
})();
var statearr_24294_24356 = state_24284__$1;
(statearr_24294_24356[(2)] = null);

(statearr_24294_24356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (6))){
var inst_24249 = (state_24284[(7)]);
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24284__$1,(11),inst_24249);
} else {
if((state_val_24285 === (17))){
var inst_24270 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
if(cljs.core.truth_(inst_24270)){
var statearr_24295_24357 = state_24284__$1;
(statearr_24295_24357[(1)] = (19));

} else {
var statearr_24296_24358 = state_24284__$1;
(statearr_24296_24358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (3))){
var inst_24282 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24284__$1,inst_24282);
} else {
if((state_val_24285 === (12))){
var inst_24259 = (state_24284[(10)]);
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24284__$1,(14),inst_24259);
} else {
if((state_val_24285 === (2))){
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24284__$1,(4),results);
} else {
if((state_val_24285 === (19))){
var state_24284__$1 = state_24284;
var statearr_24297_24359 = state_24284__$1;
(statearr_24297_24359[(2)] = null);

(statearr_24297_24359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (11))){
var inst_24259 = (state_24284[(2)]);
var state_24284__$1 = (function (){var statearr_24298 = state_24284;
(statearr_24298[(10)] = inst_24259);

return statearr_24298;
})();
var statearr_24299_24360 = state_24284__$1;
(statearr_24299_24360[(2)] = null);

(statearr_24299_24360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (9))){
var state_24284__$1 = state_24284;
var statearr_24300_24361 = state_24284__$1;
(statearr_24300_24361[(2)] = null);

(statearr_24300_24361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (5))){
var state_24284__$1 = state_24284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24301_24362 = state_24284__$1;
(statearr_24301_24362[(1)] = (8));

} else {
var statearr_24302_24363 = state_24284__$1;
(statearr_24302_24363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (14))){
var inst_24264 = (state_24284[(11)]);
var inst_24262 = (state_24284[(8)]);
var inst_24262__$1 = (state_24284[(2)]);
var inst_24263 = (inst_24262__$1 == null);
var inst_24264__$1 = cljs.core.not.call(null,inst_24263);
var state_24284__$1 = (function (){var statearr_24303 = state_24284;
(statearr_24303[(11)] = inst_24264__$1);

(statearr_24303[(8)] = inst_24262__$1);

return statearr_24303;
})();
if(inst_24264__$1){
var statearr_24304_24364 = state_24284__$1;
(statearr_24304_24364[(1)] = (15));

} else {
var statearr_24305_24365 = state_24284__$1;
(statearr_24305_24365[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (16))){
var inst_24264 = (state_24284[(11)]);
var state_24284__$1 = state_24284;
var statearr_24306_24366 = state_24284__$1;
(statearr_24306_24366[(2)] = inst_24264);

(statearr_24306_24366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (10))){
var inst_24256 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
var statearr_24307_24367 = state_24284__$1;
(statearr_24307_24367[(2)] = inst_24256);

(statearr_24307_24367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (18))){
var inst_24267 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
var statearr_24308_24368 = state_24284__$1;
(statearr_24308_24368[(2)] = inst_24267);

(statearr_24308_24368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (8))){
var inst_24253 = cljs.core.async.close_BANG_.call(null,to);
var state_24284__$1 = state_24284;
var statearr_24309_24369 = state_24284__$1;
(statearr_24309_24369[(2)] = inst_24253);

(statearr_24309_24369[(1)] = (10));


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
});})(c__23979__auto__,jobs,results,process,async))
;
return ((function (switch__23884__auto__,c__23979__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0 = (function (){
var statearr_24310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__);

(statearr_24310[(1)] = (1));

return statearr_24310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1 = (function (state_24284){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24311){if((e24311 instanceof Object)){
var ex__23888__auto__ = e24311;
var statearr_24312_24370 = state_24284;
(statearr_24312_24370[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24371 = state_24284;
state_24284 = G__24371;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__ = function(state_24284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1.call(this,state_24284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto__,jobs,results,process,async))
})();
var state__23981__auto__ = (function (){var statearr_24313 = f__23980__auto__.call(null);
(statearr_24313[(6)] = c__23979__auto__);

return statearr_24313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto__,jobs,results,process,async))
);

return c__23979__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24373 = arguments.length;
switch (G__24373) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24376 = arguments.length;
switch (G__24376) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24379 = arguments.length;
switch (G__24379) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23979__auto___24428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___24428,tc,fc){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___24428,tc,fc){
return (function (state_24405){
var state_val_24406 = (state_24405[(1)]);
if((state_val_24406 === (7))){
var inst_24401 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24407_24429 = state_24405__$1;
(statearr_24407_24429[(2)] = inst_24401);

(statearr_24407_24429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (1))){
var state_24405__$1 = state_24405;
var statearr_24408_24430 = state_24405__$1;
(statearr_24408_24430[(2)] = null);

(statearr_24408_24430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (4))){
var inst_24382 = (state_24405[(7)]);
var inst_24382__$1 = (state_24405[(2)]);
var inst_24383 = (inst_24382__$1 == null);
var state_24405__$1 = (function (){var statearr_24409 = state_24405;
(statearr_24409[(7)] = inst_24382__$1);

return statearr_24409;
})();
if(cljs.core.truth_(inst_24383)){
var statearr_24410_24431 = state_24405__$1;
(statearr_24410_24431[(1)] = (5));

} else {
var statearr_24411_24432 = state_24405__$1;
(statearr_24411_24432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (13))){
var state_24405__$1 = state_24405;
var statearr_24412_24433 = state_24405__$1;
(statearr_24412_24433[(2)] = null);

(statearr_24412_24433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (6))){
var inst_24382 = (state_24405[(7)]);
var inst_24388 = p.call(null,inst_24382);
var state_24405__$1 = state_24405;
if(cljs.core.truth_(inst_24388)){
var statearr_24413_24434 = state_24405__$1;
(statearr_24413_24434[(1)] = (9));

} else {
var statearr_24414_24435 = state_24405__$1;
(statearr_24414_24435[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (3))){
var inst_24403 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24405__$1,inst_24403);
} else {
if((state_val_24406 === (12))){
var state_24405__$1 = state_24405;
var statearr_24415_24436 = state_24405__$1;
(statearr_24415_24436[(2)] = null);

(statearr_24415_24436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (2))){
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24405__$1,(4),ch);
} else {
if((state_val_24406 === (11))){
var inst_24382 = (state_24405[(7)]);
var inst_24392 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24405__$1,(8),inst_24392,inst_24382);
} else {
if((state_val_24406 === (9))){
var state_24405__$1 = state_24405;
var statearr_24416_24437 = state_24405__$1;
(statearr_24416_24437[(2)] = tc);

(statearr_24416_24437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (5))){
var inst_24385 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24386 = cljs.core.async.close_BANG_.call(null,fc);
var state_24405__$1 = (function (){var statearr_24417 = state_24405;
(statearr_24417[(8)] = inst_24385);

return statearr_24417;
})();
var statearr_24418_24438 = state_24405__$1;
(statearr_24418_24438[(2)] = inst_24386);

(statearr_24418_24438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (14))){
var inst_24399 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24419_24439 = state_24405__$1;
(statearr_24419_24439[(2)] = inst_24399);

(statearr_24419_24439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (10))){
var state_24405__$1 = state_24405;
var statearr_24420_24440 = state_24405__$1;
(statearr_24420_24440[(2)] = fc);

(statearr_24420_24440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (8))){
var inst_24394 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
if(cljs.core.truth_(inst_24394)){
var statearr_24421_24441 = state_24405__$1;
(statearr_24421_24441[(1)] = (12));

} else {
var statearr_24422_24442 = state_24405__$1;
(statearr_24422_24442[(1)] = (13));

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
});})(c__23979__auto___24428,tc,fc))
;
return ((function (switch__23884__auto__,c__23979__auto___24428,tc,fc){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_24423 = [null,null,null,null,null,null,null,null,null];
(statearr_24423[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_24423[(1)] = (1));

return statearr_24423;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_24405){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24424){if((e24424 instanceof Object)){
var ex__23888__auto__ = e24424;
var statearr_24425_24443 = state_24405;
(statearr_24425_24443[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24444 = state_24405;
state_24405 = G__24444;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_24405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_24405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___24428,tc,fc))
})();
var state__23981__auto__ = (function (){var statearr_24426 = f__23980__auto__.call(null);
(statearr_24426[(6)] = c__23979__auto___24428);

return statearr_24426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___24428,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto__){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto__){
return (function (state_24465){
var state_val_24466 = (state_24465[(1)]);
if((state_val_24466 === (7))){
var inst_24461 = (state_24465[(2)]);
var state_24465__$1 = state_24465;
var statearr_24467_24485 = state_24465__$1;
(statearr_24467_24485[(2)] = inst_24461);

(statearr_24467_24485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24466 === (1))){
var inst_24445 = init;
var state_24465__$1 = (function (){var statearr_24468 = state_24465;
(statearr_24468[(7)] = inst_24445);

return statearr_24468;
})();
var statearr_24469_24486 = state_24465__$1;
(statearr_24469_24486[(2)] = null);

(statearr_24469_24486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24466 === (4))){
var inst_24448 = (state_24465[(8)]);
var inst_24448__$1 = (state_24465[(2)]);
var inst_24449 = (inst_24448__$1 == null);
var state_24465__$1 = (function (){var statearr_24470 = state_24465;
(statearr_24470[(8)] = inst_24448__$1);

return statearr_24470;
})();
if(cljs.core.truth_(inst_24449)){
var statearr_24471_24487 = state_24465__$1;
(statearr_24471_24487[(1)] = (5));

} else {
var statearr_24472_24488 = state_24465__$1;
(statearr_24472_24488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24466 === (6))){
var inst_24445 = (state_24465[(7)]);
var inst_24448 = (state_24465[(8)]);
var inst_24452 = (state_24465[(9)]);
var inst_24452__$1 = f.call(null,inst_24445,inst_24448);
var inst_24453 = cljs.core.reduced_QMARK_.call(null,inst_24452__$1);
var state_24465__$1 = (function (){var statearr_24473 = state_24465;
(statearr_24473[(9)] = inst_24452__$1);

return statearr_24473;
})();
if(inst_24453){
var statearr_24474_24489 = state_24465__$1;
(statearr_24474_24489[(1)] = (8));

} else {
var statearr_24475_24490 = state_24465__$1;
(statearr_24475_24490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24466 === (3))){
var inst_24463 = (state_24465[(2)]);
var state_24465__$1 = state_24465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24465__$1,inst_24463);
} else {
if((state_val_24466 === (2))){
var state_24465__$1 = state_24465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24465__$1,(4),ch);
} else {
if((state_val_24466 === (9))){
var inst_24452 = (state_24465[(9)]);
var inst_24445 = inst_24452;
var state_24465__$1 = (function (){var statearr_24476 = state_24465;
(statearr_24476[(7)] = inst_24445);

return statearr_24476;
})();
var statearr_24477_24491 = state_24465__$1;
(statearr_24477_24491[(2)] = null);

(statearr_24477_24491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24466 === (5))){
var inst_24445 = (state_24465[(7)]);
var state_24465__$1 = state_24465;
var statearr_24478_24492 = state_24465__$1;
(statearr_24478_24492[(2)] = inst_24445);

(statearr_24478_24492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24466 === (10))){
var inst_24459 = (state_24465[(2)]);
var state_24465__$1 = state_24465;
var statearr_24479_24493 = state_24465__$1;
(statearr_24479_24493[(2)] = inst_24459);

(statearr_24479_24493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24466 === (8))){
var inst_24452 = (state_24465[(9)]);
var inst_24455 = cljs.core.deref.call(null,inst_24452);
var state_24465__$1 = state_24465;
var statearr_24480_24494 = state_24465__$1;
(statearr_24480_24494[(2)] = inst_24455);

(statearr_24480_24494[(1)] = (10));


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
});})(c__23979__auto__))
;
return ((function (switch__23884__auto__,c__23979__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23885__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23885__auto____0 = (function (){
var statearr_24481 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24481[(0)] = cljs$core$async$reduce_$_state_machine__23885__auto__);

(statearr_24481[(1)] = (1));

return statearr_24481;
});
var cljs$core$async$reduce_$_state_machine__23885__auto____1 = (function (state_24465){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24482){if((e24482 instanceof Object)){
var ex__23888__auto__ = e24482;
var statearr_24483_24495 = state_24465;
(statearr_24483_24495[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24496 = state_24465;
state_24465 = G__24496;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23885__auto__ = function(state_24465){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23885__auto____1.call(this,state_24465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23885__auto____0;
cljs$core$async$reduce_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23885__auto____1;
return cljs$core$async$reduce_$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto__))
})();
var state__23981__auto__ = (function (){var statearr_24484 = f__23980__auto__.call(null);
(statearr_24484[(6)] = c__23979__auto__);

return statearr_24484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto__))
);

return c__23979__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto__,f__$1){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto__,f__$1){
return (function (state_24502){
var state_val_24503 = (state_24502[(1)]);
if((state_val_24503 === (1))){
var inst_24497 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(2),inst_24497);
} else {
if((state_val_24503 === (2))){
var inst_24499 = (state_24502[(2)]);
var inst_24500 = f__$1.call(null,inst_24499);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24502__$1,inst_24500);
} else {
return null;
}
}
});})(c__23979__auto__,f__$1))
;
return ((function (switch__23884__auto__,c__23979__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23885__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23885__auto____0 = (function (){
var statearr_24504 = [null,null,null,null,null,null,null];
(statearr_24504[(0)] = cljs$core$async$transduce_$_state_machine__23885__auto__);

(statearr_24504[(1)] = (1));

return statearr_24504;
});
var cljs$core$async$transduce_$_state_machine__23885__auto____1 = (function (state_24502){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24505){if((e24505 instanceof Object)){
var ex__23888__auto__ = e24505;
var statearr_24506_24508 = state_24502;
(statearr_24506_24508[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24509 = state_24502;
state_24502 = G__24509;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23885__auto__ = function(state_24502){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23885__auto____1.call(this,state_24502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23885__auto____0;
cljs$core$async$transduce_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23885__auto____1;
return cljs$core$async$transduce_$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto__,f__$1))
})();
var state__23981__auto__ = (function (){var statearr_24507 = f__23980__auto__.call(null);
(statearr_24507[(6)] = c__23979__auto__);

return statearr_24507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto__,f__$1))
);

return c__23979__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24511 = arguments.length;
switch (G__24511) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto__){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto__){
return (function (state_24536){
var state_val_24537 = (state_24536[(1)]);
if((state_val_24537 === (7))){
var inst_24518 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
var statearr_24538_24559 = state_24536__$1;
(statearr_24538_24559[(2)] = inst_24518);

(statearr_24538_24559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (1))){
var inst_24512 = cljs.core.seq.call(null,coll);
var inst_24513 = inst_24512;
var state_24536__$1 = (function (){var statearr_24539 = state_24536;
(statearr_24539[(7)] = inst_24513);

return statearr_24539;
})();
var statearr_24540_24560 = state_24536__$1;
(statearr_24540_24560[(2)] = null);

(statearr_24540_24560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (4))){
var inst_24513 = (state_24536[(7)]);
var inst_24516 = cljs.core.first.call(null,inst_24513);
var state_24536__$1 = state_24536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24536__$1,(7),ch,inst_24516);
} else {
if((state_val_24537 === (13))){
var inst_24530 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
var statearr_24541_24561 = state_24536__$1;
(statearr_24541_24561[(2)] = inst_24530);

(statearr_24541_24561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (6))){
var inst_24521 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
if(cljs.core.truth_(inst_24521)){
var statearr_24542_24562 = state_24536__$1;
(statearr_24542_24562[(1)] = (8));

} else {
var statearr_24543_24563 = state_24536__$1;
(statearr_24543_24563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (3))){
var inst_24534 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24536__$1,inst_24534);
} else {
if((state_val_24537 === (12))){
var state_24536__$1 = state_24536;
var statearr_24544_24564 = state_24536__$1;
(statearr_24544_24564[(2)] = null);

(statearr_24544_24564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (2))){
var inst_24513 = (state_24536[(7)]);
var state_24536__$1 = state_24536;
if(cljs.core.truth_(inst_24513)){
var statearr_24545_24565 = state_24536__$1;
(statearr_24545_24565[(1)] = (4));

} else {
var statearr_24546_24566 = state_24536__$1;
(statearr_24546_24566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (11))){
var inst_24527 = cljs.core.async.close_BANG_.call(null,ch);
var state_24536__$1 = state_24536;
var statearr_24547_24567 = state_24536__$1;
(statearr_24547_24567[(2)] = inst_24527);

(statearr_24547_24567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (9))){
var state_24536__$1 = state_24536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24548_24568 = state_24536__$1;
(statearr_24548_24568[(1)] = (11));

} else {
var statearr_24549_24569 = state_24536__$1;
(statearr_24549_24569[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (5))){
var inst_24513 = (state_24536[(7)]);
var state_24536__$1 = state_24536;
var statearr_24550_24570 = state_24536__$1;
(statearr_24550_24570[(2)] = inst_24513);

(statearr_24550_24570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (10))){
var inst_24532 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
var statearr_24551_24571 = state_24536__$1;
(statearr_24551_24571[(2)] = inst_24532);

(statearr_24551_24571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (8))){
var inst_24513 = (state_24536[(7)]);
var inst_24523 = cljs.core.next.call(null,inst_24513);
var inst_24513__$1 = inst_24523;
var state_24536__$1 = (function (){var statearr_24552 = state_24536;
(statearr_24552[(7)] = inst_24513__$1);

return statearr_24552;
})();
var statearr_24553_24572 = state_24536__$1;
(statearr_24553_24572[(2)] = null);

(statearr_24553_24572[(1)] = (2));


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
});})(c__23979__auto__))
;
return ((function (switch__23884__auto__,c__23979__auto__){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_24554 = [null,null,null,null,null,null,null,null];
(statearr_24554[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_24554[(1)] = (1));

return statearr_24554;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_24536){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24555){if((e24555 instanceof Object)){
var ex__23888__auto__ = e24555;
var statearr_24556_24573 = state_24536;
(statearr_24556_24573[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24574 = state_24536;
state_24536 = G__24574;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_24536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_24536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto__))
})();
var state__23981__auto__ = (function (){var statearr_24557 = f__23980__auto__.call(null);
(statearr_24557[(6)] = c__23979__auto__);

return statearr_24557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto__))
);

return c__23979__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24575 = (function (ch,cs,meta24576){
this.ch = ch;
this.cs = cs;
this.meta24576 = meta24576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24577,meta24576__$1){
var self__ = this;
var _24577__$1 = this;
return (new cljs.core.async.t_cljs$core$async24575(self__.ch,self__.cs,meta24576__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24577){
var self__ = this;
var _24577__$1 = this;
return self__.meta24576;
});})(cs))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24575.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24576","meta24576",1453133591,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24575";

cljs.core.async.t_cljs$core$async24575.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24575");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24575.
 */
cljs.core.async.__GT_t_cljs$core$async24575 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24575(ch__$1,cs__$1,meta24576){
return (new cljs.core.async.t_cljs$core$async24575(ch__$1,cs__$1,meta24576));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24575(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23979__auto___24797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___24797,cs,m,dchan,dctr,done){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___24797,cs,m,dchan,dctr,done){
return (function (state_24712){
var state_val_24713 = (state_24712[(1)]);
if((state_val_24713 === (7))){
var inst_24708 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24714_24798 = state_24712__$1;
(statearr_24714_24798[(2)] = inst_24708);

(statearr_24714_24798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (20))){
var inst_24611 = (state_24712[(7)]);
var inst_24623 = cljs.core.first.call(null,inst_24611);
var inst_24624 = cljs.core.nth.call(null,inst_24623,(0),null);
var inst_24625 = cljs.core.nth.call(null,inst_24623,(1),null);
var state_24712__$1 = (function (){var statearr_24715 = state_24712;
(statearr_24715[(8)] = inst_24624);

return statearr_24715;
})();
if(cljs.core.truth_(inst_24625)){
var statearr_24716_24799 = state_24712__$1;
(statearr_24716_24799[(1)] = (22));

} else {
var statearr_24717_24800 = state_24712__$1;
(statearr_24717_24800[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (27))){
var inst_24653 = (state_24712[(9)]);
var inst_24660 = (state_24712[(10)]);
var inst_24655 = (state_24712[(11)]);
var inst_24580 = (state_24712[(12)]);
var inst_24660__$1 = cljs.core._nth.call(null,inst_24653,inst_24655);
var inst_24661 = cljs.core.async.put_BANG_.call(null,inst_24660__$1,inst_24580,done);
var state_24712__$1 = (function (){var statearr_24718 = state_24712;
(statearr_24718[(10)] = inst_24660__$1);

return statearr_24718;
})();
if(cljs.core.truth_(inst_24661)){
var statearr_24719_24801 = state_24712__$1;
(statearr_24719_24801[(1)] = (30));

} else {
var statearr_24720_24802 = state_24712__$1;
(statearr_24720_24802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (1))){
var state_24712__$1 = state_24712;
var statearr_24721_24803 = state_24712__$1;
(statearr_24721_24803[(2)] = null);

(statearr_24721_24803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (24))){
var inst_24611 = (state_24712[(7)]);
var inst_24630 = (state_24712[(2)]);
var inst_24631 = cljs.core.next.call(null,inst_24611);
var inst_24589 = inst_24631;
var inst_24590 = null;
var inst_24591 = (0);
var inst_24592 = (0);
var state_24712__$1 = (function (){var statearr_24722 = state_24712;
(statearr_24722[(13)] = inst_24589);

(statearr_24722[(14)] = inst_24630);

(statearr_24722[(15)] = inst_24590);

(statearr_24722[(16)] = inst_24591);

(statearr_24722[(17)] = inst_24592);

return statearr_24722;
})();
var statearr_24723_24804 = state_24712__$1;
(statearr_24723_24804[(2)] = null);

(statearr_24723_24804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (39))){
var state_24712__$1 = state_24712;
var statearr_24727_24805 = state_24712__$1;
(statearr_24727_24805[(2)] = null);

(statearr_24727_24805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (4))){
var inst_24580 = (state_24712[(12)]);
var inst_24580__$1 = (state_24712[(2)]);
var inst_24581 = (inst_24580__$1 == null);
var state_24712__$1 = (function (){var statearr_24728 = state_24712;
(statearr_24728[(12)] = inst_24580__$1);

return statearr_24728;
})();
if(cljs.core.truth_(inst_24581)){
var statearr_24729_24806 = state_24712__$1;
(statearr_24729_24806[(1)] = (5));

} else {
var statearr_24730_24807 = state_24712__$1;
(statearr_24730_24807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (15))){
var inst_24589 = (state_24712[(13)]);
var inst_24590 = (state_24712[(15)]);
var inst_24591 = (state_24712[(16)]);
var inst_24592 = (state_24712[(17)]);
var inst_24607 = (state_24712[(2)]);
var inst_24608 = (inst_24592 + (1));
var tmp24724 = inst_24589;
var tmp24725 = inst_24590;
var tmp24726 = inst_24591;
var inst_24589__$1 = tmp24724;
var inst_24590__$1 = tmp24725;
var inst_24591__$1 = tmp24726;
var inst_24592__$1 = inst_24608;
var state_24712__$1 = (function (){var statearr_24731 = state_24712;
(statearr_24731[(13)] = inst_24589__$1);

(statearr_24731[(15)] = inst_24590__$1);

(statearr_24731[(16)] = inst_24591__$1);

(statearr_24731[(17)] = inst_24592__$1);

(statearr_24731[(18)] = inst_24607);

return statearr_24731;
})();
var statearr_24732_24808 = state_24712__$1;
(statearr_24732_24808[(2)] = null);

(statearr_24732_24808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (21))){
var inst_24634 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24736_24809 = state_24712__$1;
(statearr_24736_24809[(2)] = inst_24634);

(statearr_24736_24809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (31))){
var inst_24660 = (state_24712[(10)]);
var inst_24664 = done.call(null,null);
var inst_24665 = cljs.core.async.untap_STAR_.call(null,m,inst_24660);
var state_24712__$1 = (function (){var statearr_24737 = state_24712;
(statearr_24737[(19)] = inst_24664);

return statearr_24737;
})();
var statearr_24738_24810 = state_24712__$1;
(statearr_24738_24810[(2)] = inst_24665);

(statearr_24738_24810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (32))){
var inst_24654 = (state_24712[(20)]);
var inst_24653 = (state_24712[(9)]);
var inst_24655 = (state_24712[(11)]);
var inst_24652 = (state_24712[(21)]);
var inst_24667 = (state_24712[(2)]);
var inst_24668 = (inst_24655 + (1));
var tmp24733 = inst_24654;
var tmp24734 = inst_24653;
var tmp24735 = inst_24652;
var inst_24652__$1 = tmp24735;
var inst_24653__$1 = tmp24734;
var inst_24654__$1 = tmp24733;
var inst_24655__$1 = inst_24668;
var state_24712__$1 = (function (){var statearr_24739 = state_24712;
(statearr_24739[(20)] = inst_24654__$1);

(statearr_24739[(9)] = inst_24653__$1);

(statearr_24739[(11)] = inst_24655__$1);

(statearr_24739[(22)] = inst_24667);

(statearr_24739[(21)] = inst_24652__$1);

return statearr_24739;
})();
var statearr_24740_24811 = state_24712__$1;
(statearr_24740_24811[(2)] = null);

(statearr_24740_24811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (40))){
var inst_24680 = (state_24712[(23)]);
var inst_24684 = done.call(null,null);
var inst_24685 = cljs.core.async.untap_STAR_.call(null,m,inst_24680);
var state_24712__$1 = (function (){var statearr_24741 = state_24712;
(statearr_24741[(24)] = inst_24684);

return statearr_24741;
})();
var statearr_24742_24812 = state_24712__$1;
(statearr_24742_24812[(2)] = inst_24685);

(statearr_24742_24812[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (33))){
var inst_24671 = (state_24712[(25)]);
var inst_24673 = cljs.core.chunked_seq_QMARK_.call(null,inst_24671);
var state_24712__$1 = state_24712;
if(inst_24673){
var statearr_24743_24813 = state_24712__$1;
(statearr_24743_24813[(1)] = (36));

} else {
var statearr_24744_24814 = state_24712__$1;
(statearr_24744_24814[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (13))){
var inst_24601 = (state_24712[(26)]);
var inst_24604 = cljs.core.async.close_BANG_.call(null,inst_24601);
var state_24712__$1 = state_24712;
var statearr_24745_24815 = state_24712__$1;
(statearr_24745_24815[(2)] = inst_24604);

(statearr_24745_24815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (22))){
var inst_24624 = (state_24712[(8)]);
var inst_24627 = cljs.core.async.close_BANG_.call(null,inst_24624);
var state_24712__$1 = state_24712;
var statearr_24746_24816 = state_24712__$1;
(statearr_24746_24816[(2)] = inst_24627);

(statearr_24746_24816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (36))){
var inst_24671 = (state_24712[(25)]);
var inst_24675 = cljs.core.chunk_first.call(null,inst_24671);
var inst_24676 = cljs.core.chunk_rest.call(null,inst_24671);
var inst_24677 = cljs.core.count.call(null,inst_24675);
var inst_24652 = inst_24676;
var inst_24653 = inst_24675;
var inst_24654 = inst_24677;
var inst_24655 = (0);
var state_24712__$1 = (function (){var statearr_24747 = state_24712;
(statearr_24747[(20)] = inst_24654);

(statearr_24747[(9)] = inst_24653);

(statearr_24747[(11)] = inst_24655);

(statearr_24747[(21)] = inst_24652);

return statearr_24747;
})();
var statearr_24748_24817 = state_24712__$1;
(statearr_24748_24817[(2)] = null);

(statearr_24748_24817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (41))){
var inst_24671 = (state_24712[(25)]);
var inst_24687 = (state_24712[(2)]);
var inst_24688 = cljs.core.next.call(null,inst_24671);
var inst_24652 = inst_24688;
var inst_24653 = null;
var inst_24654 = (0);
var inst_24655 = (0);
var state_24712__$1 = (function (){var statearr_24749 = state_24712;
(statearr_24749[(20)] = inst_24654);

(statearr_24749[(27)] = inst_24687);

(statearr_24749[(9)] = inst_24653);

(statearr_24749[(11)] = inst_24655);

(statearr_24749[(21)] = inst_24652);

return statearr_24749;
})();
var statearr_24750_24818 = state_24712__$1;
(statearr_24750_24818[(2)] = null);

(statearr_24750_24818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (43))){
var state_24712__$1 = state_24712;
var statearr_24751_24819 = state_24712__$1;
(statearr_24751_24819[(2)] = null);

(statearr_24751_24819[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (29))){
var inst_24696 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24752_24820 = state_24712__$1;
(statearr_24752_24820[(2)] = inst_24696);

(statearr_24752_24820[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (44))){
var inst_24705 = (state_24712[(2)]);
var state_24712__$1 = (function (){var statearr_24753 = state_24712;
(statearr_24753[(28)] = inst_24705);

return statearr_24753;
})();
var statearr_24754_24821 = state_24712__$1;
(statearr_24754_24821[(2)] = null);

(statearr_24754_24821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (6))){
var inst_24644 = (state_24712[(29)]);
var inst_24643 = cljs.core.deref.call(null,cs);
var inst_24644__$1 = cljs.core.keys.call(null,inst_24643);
var inst_24645 = cljs.core.count.call(null,inst_24644__$1);
var inst_24646 = cljs.core.reset_BANG_.call(null,dctr,inst_24645);
var inst_24651 = cljs.core.seq.call(null,inst_24644__$1);
var inst_24652 = inst_24651;
var inst_24653 = null;
var inst_24654 = (0);
var inst_24655 = (0);
var state_24712__$1 = (function (){var statearr_24755 = state_24712;
(statearr_24755[(20)] = inst_24654);

(statearr_24755[(9)] = inst_24653);

(statearr_24755[(11)] = inst_24655);

(statearr_24755[(30)] = inst_24646);

(statearr_24755[(29)] = inst_24644__$1);

(statearr_24755[(21)] = inst_24652);

return statearr_24755;
})();
var statearr_24756_24822 = state_24712__$1;
(statearr_24756_24822[(2)] = null);

(statearr_24756_24822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (28))){
var inst_24671 = (state_24712[(25)]);
var inst_24652 = (state_24712[(21)]);
var inst_24671__$1 = cljs.core.seq.call(null,inst_24652);
var state_24712__$1 = (function (){var statearr_24757 = state_24712;
(statearr_24757[(25)] = inst_24671__$1);

return statearr_24757;
})();
if(inst_24671__$1){
var statearr_24758_24823 = state_24712__$1;
(statearr_24758_24823[(1)] = (33));

} else {
var statearr_24759_24824 = state_24712__$1;
(statearr_24759_24824[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (25))){
var inst_24654 = (state_24712[(20)]);
var inst_24655 = (state_24712[(11)]);
var inst_24657 = (inst_24655 < inst_24654);
var inst_24658 = inst_24657;
var state_24712__$1 = state_24712;
if(cljs.core.truth_(inst_24658)){
var statearr_24760_24825 = state_24712__$1;
(statearr_24760_24825[(1)] = (27));

} else {
var statearr_24761_24826 = state_24712__$1;
(statearr_24761_24826[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (34))){
var state_24712__$1 = state_24712;
var statearr_24762_24827 = state_24712__$1;
(statearr_24762_24827[(2)] = null);

(statearr_24762_24827[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (17))){
var state_24712__$1 = state_24712;
var statearr_24763_24828 = state_24712__$1;
(statearr_24763_24828[(2)] = null);

(statearr_24763_24828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (3))){
var inst_24710 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24712__$1,inst_24710);
} else {
if((state_val_24713 === (12))){
var inst_24639 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24764_24829 = state_24712__$1;
(statearr_24764_24829[(2)] = inst_24639);

(statearr_24764_24829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (2))){
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24712__$1,(4),ch);
} else {
if((state_val_24713 === (23))){
var state_24712__$1 = state_24712;
var statearr_24765_24830 = state_24712__$1;
(statearr_24765_24830[(2)] = null);

(statearr_24765_24830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (35))){
var inst_24694 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24766_24831 = state_24712__$1;
(statearr_24766_24831[(2)] = inst_24694);

(statearr_24766_24831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (19))){
var inst_24611 = (state_24712[(7)]);
var inst_24615 = cljs.core.chunk_first.call(null,inst_24611);
var inst_24616 = cljs.core.chunk_rest.call(null,inst_24611);
var inst_24617 = cljs.core.count.call(null,inst_24615);
var inst_24589 = inst_24616;
var inst_24590 = inst_24615;
var inst_24591 = inst_24617;
var inst_24592 = (0);
var state_24712__$1 = (function (){var statearr_24767 = state_24712;
(statearr_24767[(13)] = inst_24589);

(statearr_24767[(15)] = inst_24590);

(statearr_24767[(16)] = inst_24591);

(statearr_24767[(17)] = inst_24592);

return statearr_24767;
})();
var statearr_24768_24832 = state_24712__$1;
(statearr_24768_24832[(2)] = null);

(statearr_24768_24832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (11))){
var inst_24589 = (state_24712[(13)]);
var inst_24611 = (state_24712[(7)]);
var inst_24611__$1 = cljs.core.seq.call(null,inst_24589);
var state_24712__$1 = (function (){var statearr_24769 = state_24712;
(statearr_24769[(7)] = inst_24611__$1);

return statearr_24769;
})();
if(inst_24611__$1){
var statearr_24770_24833 = state_24712__$1;
(statearr_24770_24833[(1)] = (16));

} else {
var statearr_24771_24834 = state_24712__$1;
(statearr_24771_24834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (9))){
var inst_24641 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24772_24835 = state_24712__$1;
(statearr_24772_24835[(2)] = inst_24641);

(statearr_24772_24835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (5))){
var inst_24587 = cljs.core.deref.call(null,cs);
var inst_24588 = cljs.core.seq.call(null,inst_24587);
var inst_24589 = inst_24588;
var inst_24590 = null;
var inst_24591 = (0);
var inst_24592 = (0);
var state_24712__$1 = (function (){var statearr_24773 = state_24712;
(statearr_24773[(13)] = inst_24589);

(statearr_24773[(15)] = inst_24590);

(statearr_24773[(16)] = inst_24591);

(statearr_24773[(17)] = inst_24592);

return statearr_24773;
})();
var statearr_24774_24836 = state_24712__$1;
(statearr_24774_24836[(2)] = null);

(statearr_24774_24836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (14))){
var state_24712__$1 = state_24712;
var statearr_24775_24837 = state_24712__$1;
(statearr_24775_24837[(2)] = null);

(statearr_24775_24837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (45))){
var inst_24702 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24776_24838 = state_24712__$1;
(statearr_24776_24838[(2)] = inst_24702);

(statearr_24776_24838[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (26))){
var inst_24644 = (state_24712[(29)]);
var inst_24698 = (state_24712[(2)]);
var inst_24699 = cljs.core.seq.call(null,inst_24644);
var state_24712__$1 = (function (){var statearr_24777 = state_24712;
(statearr_24777[(31)] = inst_24698);

return statearr_24777;
})();
if(inst_24699){
var statearr_24778_24839 = state_24712__$1;
(statearr_24778_24839[(1)] = (42));

} else {
var statearr_24779_24840 = state_24712__$1;
(statearr_24779_24840[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (16))){
var inst_24611 = (state_24712[(7)]);
var inst_24613 = cljs.core.chunked_seq_QMARK_.call(null,inst_24611);
var state_24712__$1 = state_24712;
if(inst_24613){
var statearr_24780_24841 = state_24712__$1;
(statearr_24780_24841[(1)] = (19));

} else {
var statearr_24781_24842 = state_24712__$1;
(statearr_24781_24842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (38))){
var inst_24691 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24782_24843 = state_24712__$1;
(statearr_24782_24843[(2)] = inst_24691);

(statearr_24782_24843[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (30))){
var state_24712__$1 = state_24712;
var statearr_24783_24844 = state_24712__$1;
(statearr_24783_24844[(2)] = null);

(statearr_24783_24844[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (10))){
var inst_24590 = (state_24712[(15)]);
var inst_24592 = (state_24712[(17)]);
var inst_24600 = cljs.core._nth.call(null,inst_24590,inst_24592);
var inst_24601 = cljs.core.nth.call(null,inst_24600,(0),null);
var inst_24602 = cljs.core.nth.call(null,inst_24600,(1),null);
var state_24712__$1 = (function (){var statearr_24784 = state_24712;
(statearr_24784[(26)] = inst_24601);

return statearr_24784;
})();
if(cljs.core.truth_(inst_24602)){
var statearr_24785_24845 = state_24712__$1;
(statearr_24785_24845[(1)] = (13));

} else {
var statearr_24786_24846 = state_24712__$1;
(statearr_24786_24846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (18))){
var inst_24637 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24787_24847 = state_24712__$1;
(statearr_24787_24847[(2)] = inst_24637);

(statearr_24787_24847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (42))){
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24712__$1,(45),dchan);
} else {
if((state_val_24713 === (37))){
var inst_24671 = (state_24712[(25)]);
var inst_24580 = (state_24712[(12)]);
var inst_24680 = (state_24712[(23)]);
var inst_24680__$1 = cljs.core.first.call(null,inst_24671);
var inst_24681 = cljs.core.async.put_BANG_.call(null,inst_24680__$1,inst_24580,done);
var state_24712__$1 = (function (){var statearr_24788 = state_24712;
(statearr_24788[(23)] = inst_24680__$1);

return statearr_24788;
})();
if(cljs.core.truth_(inst_24681)){
var statearr_24789_24848 = state_24712__$1;
(statearr_24789_24848[(1)] = (39));

} else {
var statearr_24790_24849 = state_24712__$1;
(statearr_24790_24849[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (8))){
var inst_24591 = (state_24712[(16)]);
var inst_24592 = (state_24712[(17)]);
var inst_24594 = (inst_24592 < inst_24591);
var inst_24595 = inst_24594;
var state_24712__$1 = state_24712;
if(cljs.core.truth_(inst_24595)){
var statearr_24791_24850 = state_24712__$1;
(statearr_24791_24850[(1)] = (10));

} else {
var statearr_24792_24851 = state_24712__$1;
(statearr_24792_24851[(1)] = (11));

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
});})(c__23979__auto___24797,cs,m,dchan,dctr,done))
;
return ((function (switch__23884__auto__,c__23979__auto___24797,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23885__auto__ = null;
var cljs$core$async$mult_$_state_machine__23885__auto____0 = (function (){
var statearr_24793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24793[(0)] = cljs$core$async$mult_$_state_machine__23885__auto__);

(statearr_24793[(1)] = (1));

return statearr_24793;
});
var cljs$core$async$mult_$_state_machine__23885__auto____1 = (function (state_24712){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e24794){if((e24794 instanceof Object)){
var ex__23888__auto__ = e24794;
var statearr_24795_24852 = state_24712;
(statearr_24795_24852[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24853 = state_24712;
state_24712 = G__24853;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23885__auto__ = function(state_24712){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23885__auto____1.call(this,state_24712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23885__auto____0;
cljs$core$async$mult_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23885__auto____1;
return cljs$core$async$mult_$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___24797,cs,m,dchan,dctr,done))
})();
var state__23981__auto__ = (function (){var statearr_24796 = f__23980__auto__.call(null);
(statearr_24796[(6)] = c__23979__auto___24797);

return statearr_24796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___24797,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24855 = arguments.length;
switch (G__24855) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24867 = arguments.length;
var i__4731__auto___24868 = (0);
while(true){
if((i__4731__auto___24868 < len__4730__auto___24867)){
args__4736__auto__.push((arguments[i__4731__auto___24868]));

var G__24869 = (i__4731__auto___24868 + (1));
i__4731__auto___24868 = G__24869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24861){
var map__24862 = p__24861;
var map__24862__$1 = (((((!((map__24862 == null))))?(((((map__24862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24862):map__24862);
var opts = map__24862__$1;
var statearr_24864_24870 = state;
(statearr_24864_24870[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__24862,map__24862__$1,opts){
return (function (val){
var statearr_24865_24871 = state;
(statearr_24865_24871[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24862,map__24862__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24866_24872 = state;
(statearr_24866_24872[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24857){
var G__24858 = cljs.core.first.call(null,seq24857);
var seq24857__$1 = cljs.core.next.call(null,seq24857);
var G__24859 = cljs.core.first.call(null,seq24857__$1);
var seq24857__$2 = cljs.core.next.call(null,seq24857__$1);
var G__24860 = cljs.core.first.call(null,seq24857__$2);
var seq24857__$3 = cljs.core.next.call(null,seq24857__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24858,G__24859,G__24860,seq24857__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24873 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24874){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24874 = meta24874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24875,meta24874__$1){
var self__ = this;
var _24875__$1 = this;
return (new cljs.core.async.t_cljs$core$async24873(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24874__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24875){
var self__ = this;
var _24875__$1 = this;
return self__.meta24874;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24874","meta24874",138908305,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24873";

cljs.core.async.t_cljs$core$async24873.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24873");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24873.
 */
cljs.core.async.__GT_t_cljs$core$async24873 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24873(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24874){
return (new cljs.core.async.t_cljs$core$async24873(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24874));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24873(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23979__auto___25037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24977){
var state_val_24978 = (state_24977[(1)]);
if((state_val_24978 === (7))){
var inst_24892 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24979_25038 = state_24977__$1;
(statearr_24979_25038[(2)] = inst_24892);

(statearr_24979_25038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (20))){
var inst_24904 = (state_24977[(7)]);
var state_24977__$1 = state_24977;
var statearr_24980_25039 = state_24977__$1;
(statearr_24980_25039[(2)] = inst_24904);

(statearr_24980_25039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (27))){
var state_24977__$1 = state_24977;
var statearr_24981_25040 = state_24977__$1;
(statearr_24981_25040[(2)] = null);

(statearr_24981_25040[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (1))){
var inst_24879 = (state_24977[(8)]);
var inst_24879__$1 = calc_state.call(null);
var inst_24881 = (inst_24879__$1 == null);
var inst_24882 = cljs.core.not.call(null,inst_24881);
var state_24977__$1 = (function (){var statearr_24982 = state_24977;
(statearr_24982[(8)] = inst_24879__$1);

return statearr_24982;
})();
if(inst_24882){
var statearr_24983_25041 = state_24977__$1;
(statearr_24983_25041[(1)] = (2));

} else {
var statearr_24984_25042 = state_24977__$1;
(statearr_24984_25042[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (24))){
var inst_24951 = (state_24977[(9)]);
var inst_24928 = (state_24977[(10)]);
var inst_24937 = (state_24977[(11)]);
var inst_24951__$1 = inst_24928.call(null,inst_24937);
var state_24977__$1 = (function (){var statearr_24985 = state_24977;
(statearr_24985[(9)] = inst_24951__$1);

return statearr_24985;
})();
if(cljs.core.truth_(inst_24951__$1)){
var statearr_24986_25043 = state_24977__$1;
(statearr_24986_25043[(1)] = (29));

} else {
var statearr_24987_25044 = state_24977__$1;
(statearr_24987_25044[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (4))){
var inst_24895 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24895)){
var statearr_24988_25045 = state_24977__$1;
(statearr_24988_25045[(1)] = (8));

} else {
var statearr_24989_25046 = state_24977__$1;
(statearr_24989_25046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (15))){
var inst_24922 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24922)){
var statearr_24990_25047 = state_24977__$1;
(statearr_24990_25047[(1)] = (19));

} else {
var statearr_24991_25048 = state_24977__$1;
(statearr_24991_25048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (21))){
var inst_24927 = (state_24977[(12)]);
var inst_24927__$1 = (state_24977[(2)]);
var inst_24928 = cljs.core.get.call(null,inst_24927__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24929 = cljs.core.get.call(null,inst_24927__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24930 = cljs.core.get.call(null,inst_24927__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24977__$1 = (function (){var statearr_24992 = state_24977;
(statearr_24992[(13)] = inst_24929);

(statearr_24992[(10)] = inst_24928);

(statearr_24992[(12)] = inst_24927__$1);

return statearr_24992;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24977__$1,(22),inst_24930);
} else {
if((state_val_24978 === (31))){
var inst_24959 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24959)){
var statearr_24993_25049 = state_24977__$1;
(statearr_24993_25049[(1)] = (32));

} else {
var statearr_24994_25050 = state_24977__$1;
(statearr_24994_25050[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (32))){
var inst_24936 = (state_24977[(14)]);
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24977__$1,(35),out,inst_24936);
} else {
if((state_val_24978 === (33))){
var inst_24927 = (state_24977[(12)]);
var inst_24904 = inst_24927;
var state_24977__$1 = (function (){var statearr_24995 = state_24977;
(statearr_24995[(7)] = inst_24904);

return statearr_24995;
})();
var statearr_24996_25051 = state_24977__$1;
(statearr_24996_25051[(2)] = null);

(statearr_24996_25051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (13))){
var inst_24904 = (state_24977[(7)]);
var inst_24911 = inst_24904.cljs$lang$protocol_mask$partition0$;
var inst_24912 = (inst_24911 & (64));
var inst_24913 = inst_24904.cljs$core$ISeq$;
var inst_24914 = (cljs.core.PROTOCOL_SENTINEL === inst_24913);
var inst_24915 = ((inst_24912) || (inst_24914));
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24915)){
var statearr_24997_25052 = state_24977__$1;
(statearr_24997_25052[(1)] = (16));

} else {
var statearr_24998_25053 = state_24977__$1;
(statearr_24998_25053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (22))){
var inst_24936 = (state_24977[(14)]);
var inst_24937 = (state_24977[(11)]);
var inst_24935 = (state_24977[(2)]);
var inst_24936__$1 = cljs.core.nth.call(null,inst_24935,(0),null);
var inst_24937__$1 = cljs.core.nth.call(null,inst_24935,(1),null);
var inst_24938 = (inst_24936__$1 == null);
var inst_24939 = cljs.core._EQ_.call(null,inst_24937__$1,change);
var inst_24940 = ((inst_24938) || (inst_24939));
var state_24977__$1 = (function (){var statearr_24999 = state_24977;
(statearr_24999[(14)] = inst_24936__$1);

(statearr_24999[(11)] = inst_24937__$1);

return statearr_24999;
})();
if(cljs.core.truth_(inst_24940)){
var statearr_25000_25054 = state_24977__$1;
(statearr_25000_25054[(1)] = (23));

} else {
var statearr_25001_25055 = state_24977__$1;
(statearr_25001_25055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (36))){
var inst_24927 = (state_24977[(12)]);
var inst_24904 = inst_24927;
var state_24977__$1 = (function (){var statearr_25002 = state_24977;
(statearr_25002[(7)] = inst_24904);

return statearr_25002;
})();
var statearr_25003_25056 = state_24977__$1;
(statearr_25003_25056[(2)] = null);

(statearr_25003_25056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (29))){
var inst_24951 = (state_24977[(9)]);
var state_24977__$1 = state_24977;
var statearr_25004_25057 = state_24977__$1;
(statearr_25004_25057[(2)] = inst_24951);

(statearr_25004_25057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (6))){
var state_24977__$1 = state_24977;
var statearr_25005_25058 = state_24977__$1;
(statearr_25005_25058[(2)] = false);

(statearr_25005_25058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (28))){
var inst_24947 = (state_24977[(2)]);
var inst_24948 = calc_state.call(null);
var inst_24904 = inst_24948;
var state_24977__$1 = (function (){var statearr_25006 = state_24977;
(statearr_25006[(15)] = inst_24947);

(statearr_25006[(7)] = inst_24904);

return statearr_25006;
})();
var statearr_25007_25059 = state_24977__$1;
(statearr_25007_25059[(2)] = null);

(statearr_25007_25059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (25))){
var inst_24973 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_25008_25060 = state_24977__$1;
(statearr_25008_25060[(2)] = inst_24973);

(statearr_25008_25060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (34))){
var inst_24971 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_25009_25061 = state_24977__$1;
(statearr_25009_25061[(2)] = inst_24971);

(statearr_25009_25061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (17))){
var state_24977__$1 = state_24977;
var statearr_25010_25062 = state_24977__$1;
(statearr_25010_25062[(2)] = false);

(statearr_25010_25062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (3))){
var state_24977__$1 = state_24977;
var statearr_25011_25063 = state_24977__$1;
(statearr_25011_25063[(2)] = false);

(statearr_25011_25063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (12))){
var inst_24975 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24977__$1,inst_24975);
} else {
if((state_val_24978 === (2))){
var inst_24879 = (state_24977[(8)]);
var inst_24884 = inst_24879.cljs$lang$protocol_mask$partition0$;
var inst_24885 = (inst_24884 & (64));
var inst_24886 = inst_24879.cljs$core$ISeq$;
var inst_24887 = (cljs.core.PROTOCOL_SENTINEL === inst_24886);
var inst_24888 = ((inst_24885) || (inst_24887));
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24888)){
var statearr_25012_25064 = state_24977__$1;
(statearr_25012_25064[(1)] = (5));

} else {
var statearr_25013_25065 = state_24977__$1;
(statearr_25013_25065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (23))){
var inst_24936 = (state_24977[(14)]);
var inst_24942 = (inst_24936 == null);
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24942)){
var statearr_25014_25066 = state_24977__$1;
(statearr_25014_25066[(1)] = (26));

} else {
var statearr_25015_25067 = state_24977__$1;
(statearr_25015_25067[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (35))){
var inst_24962 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24962)){
var statearr_25016_25068 = state_24977__$1;
(statearr_25016_25068[(1)] = (36));

} else {
var statearr_25017_25069 = state_24977__$1;
(statearr_25017_25069[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (19))){
var inst_24904 = (state_24977[(7)]);
var inst_24924 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24904);
var state_24977__$1 = state_24977;
var statearr_25018_25070 = state_24977__$1;
(statearr_25018_25070[(2)] = inst_24924);

(statearr_25018_25070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (11))){
var inst_24904 = (state_24977[(7)]);
var inst_24908 = (inst_24904 == null);
var inst_24909 = cljs.core.not.call(null,inst_24908);
var state_24977__$1 = state_24977;
if(inst_24909){
var statearr_25019_25071 = state_24977__$1;
(statearr_25019_25071[(1)] = (13));

} else {
var statearr_25020_25072 = state_24977__$1;
(statearr_25020_25072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (9))){
var inst_24879 = (state_24977[(8)]);
var state_24977__$1 = state_24977;
var statearr_25021_25073 = state_24977__$1;
(statearr_25021_25073[(2)] = inst_24879);

(statearr_25021_25073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (5))){
var state_24977__$1 = state_24977;
var statearr_25022_25074 = state_24977__$1;
(statearr_25022_25074[(2)] = true);

(statearr_25022_25074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (14))){
var state_24977__$1 = state_24977;
var statearr_25023_25075 = state_24977__$1;
(statearr_25023_25075[(2)] = false);

(statearr_25023_25075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (26))){
var inst_24937 = (state_24977[(11)]);
var inst_24944 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24937);
var state_24977__$1 = state_24977;
var statearr_25024_25076 = state_24977__$1;
(statearr_25024_25076[(2)] = inst_24944);

(statearr_25024_25076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (16))){
var state_24977__$1 = state_24977;
var statearr_25025_25077 = state_24977__$1;
(statearr_25025_25077[(2)] = true);

(statearr_25025_25077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (38))){
var inst_24967 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_25026_25078 = state_24977__$1;
(statearr_25026_25078[(2)] = inst_24967);

(statearr_25026_25078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (30))){
var inst_24929 = (state_24977[(13)]);
var inst_24928 = (state_24977[(10)]);
var inst_24937 = (state_24977[(11)]);
var inst_24954 = cljs.core.empty_QMARK_.call(null,inst_24928);
var inst_24955 = inst_24929.call(null,inst_24937);
var inst_24956 = cljs.core.not.call(null,inst_24955);
var inst_24957 = ((inst_24954) && (inst_24956));
var state_24977__$1 = state_24977;
var statearr_25027_25079 = state_24977__$1;
(statearr_25027_25079[(2)] = inst_24957);

(statearr_25027_25079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (10))){
var inst_24879 = (state_24977[(8)]);
var inst_24900 = (state_24977[(2)]);
var inst_24901 = cljs.core.get.call(null,inst_24900,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24902 = cljs.core.get.call(null,inst_24900,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24903 = cljs.core.get.call(null,inst_24900,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24904 = inst_24879;
var state_24977__$1 = (function (){var statearr_25028 = state_24977;
(statearr_25028[(16)] = inst_24903);

(statearr_25028[(17)] = inst_24901);

(statearr_25028[(18)] = inst_24902);

(statearr_25028[(7)] = inst_24904);

return statearr_25028;
})();
var statearr_25029_25080 = state_24977__$1;
(statearr_25029_25080[(2)] = null);

(statearr_25029_25080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (18))){
var inst_24919 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_25030_25081 = state_24977__$1;
(statearr_25030_25081[(2)] = inst_24919);

(statearr_25030_25081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (37))){
var state_24977__$1 = state_24977;
var statearr_25031_25082 = state_24977__$1;
(statearr_25031_25082[(2)] = null);

(statearr_25031_25082[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (8))){
var inst_24879 = (state_24977[(8)]);
var inst_24897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24879);
var state_24977__$1 = state_24977;
var statearr_25032_25083 = state_24977__$1;
(statearr_25032_25083[(2)] = inst_24897);

(statearr_25032_25083[(1)] = (10));


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
});})(c__23979__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23884__auto__,c__23979__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23885__auto__ = null;
var cljs$core$async$mix_$_state_machine__23885__auto____0 = (function (){
var statearr_25033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25033[(0)] = cljs$core$async$mix_$_state_machine__23885__auto__);

(statearr_25033[(1)] = (1));

return statearr_25033;
});
var cljs$core$async$mix_$_state_machine__23885__auto____1 = (function (state_24977){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_24977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25034){if((e25034 instanceof Object)){
var ex__23888__auto__ = e25034;
var statearr_25035_25084 = state_24977;
(statearr_25035_25084[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25085 = state_24977;
state_24977 = G__25085;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23885__auto__ = function(state_24977){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23885__auto____1.call(this,state_24977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23885__auto____0;
cljs$core$async$mix_$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23885__auto____1;
return cljs$core$async$mix_$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23981__auto__ = (function (){var statearr_25036 = f__23980__auto__.call(null);
(statearr_25036[(6)] = c__23979__auto___25037);

return statearr_25036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25087 = arguments.length;
switch (G__25087) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25091 = arguments.length;
switch (G__25091) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__25089_SHARP_){
if(cljs.core.truth_(p1__25089_SHARP_.call(null,topic))){
return p1__25089_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25089_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25092 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25093){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25093 = meta25093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25094,meta25093__$1){
var self__ = this;
var _25094__$1 = this;
return (new cljs.core.async.t_cljs$core$async25092(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25093__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25094){
var self__ = this;
var _25094__$1 = this;
return self__.meta25093;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25092.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25093","meta25093",2054769039,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25092";

cljs.core.async.t_cljs$core$async25092.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25092");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25092.
 */
cljs.core.async.__GT_t_cljs$core$async25092 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25092(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25093){
return (new cljs.core.async.t_cljs$core$async25092(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25093));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25092(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23979__auto___25212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25212,mults,ensure_mult,p){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25212,mults,ensure_mult,p){
return (function (state_25166){
var state_val_25167 = (state_25166[(1)]);
if((state_val_25167 === (7))){
var inst_25162 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25168_25213 = state_25166__$1;
(statearr_25168_25213[(2)] = inst_25162);

(statearr_25168_25213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (20))){
var state_25166__$1 = state_25166;
var statearr_25169_25214 = state_25166__$1;
(statearr_25169_25214[(2)] = null);

(statearr_25169_25214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (1))){
var state_25166__$1 = state_25166;
var statearr_25170_25215 = state_25166__$1;
(statearr_25170_25215[(2)] = null);

(statearr_25170_25215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (24))){
var inst_25145 = (state_25166[(7)]);
var inst_25154 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25145);
var state_25166__$1 = state_25166;
var statearr_25171_25216 = state_25166__$1;
(statearr_25171_25216[(2)] = inst_25154);

(statearr_25171_25216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (4))){
var inst_25097 = (state_25166[(8)]);
var inst_25097__$1 = (state_25166[(2)]);
var inst_25098 = (inst_25097__$1 == null);
var state_25166__$1 = (function (){var statearr_25172 = state_25166;
(statearr_25172[(8)] = inst_25097__$1);

return statearr_25172;
})();
if(cljs.core.truth_(inst_25098)){
var statearr_25173_25217 = state_25166__$1;
(statearr_25173_25217[(1)] = (5));

} else {
var statearr_25174_25218 = state_25166__$1;
(statearr_25174_25218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (15))){
var inst_25139 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25175_25219 = state_25166__$1;
(statearr_25175_25219[(2)] = inst_25139);

(statearr_25175_25219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (21))){
var inst_25159 = (state_25166[(2)]);
var state_25166__$1 = (function (){var statearr_25176 = state_25166;
(statearr_25176[(9)] = inst_25159);

return statearr_25176;
})();
var statearr_25177_25220 = state_25166__$1;
(statearr_25177_25220[(2)] = null);

(statearr_25177_25220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (13))){
var inst_25121 = (state_25166[(10)]);
var inst_25123 = cljs.core.chunked_seq_QMARK_.call(null,inst_25121);
var state_25166__$1 = state_25166;
if(inst_25123){
var statearr_25178_25221 = state_25166__$1;
(statearr_25178_25221[(1)] = (16));

} else {
var statearr_25179_25222 = state_25166__$1;
(statearr_25179_25222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (22))){
var inst_25151 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25151)){
var statearr_25180_25223 = state_25166__$1;
(statearr_25180_25223[(1)] = (23));

} else {
var statearr_25181_25224 = state_25166__$1;
(statearr_25181_25224[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (6))){
var inst_25097 = (state_25166[(8)]);
var inst_25147 = (state_25166[(11)]);
var inst_25145 = (state_25166[(7)]);
var inst_25145__$1 = topic_fn.call(null,inst_25097);
var inst_25146 = cljs.core.deref.call(null,mults);
var inst_25147__$1 = cljs.core.get.call(null,inst_25146,inst_25145__$1);
var state_25166__$1 = (function (){var statearr_25182 = state_25166;
(statearr_25182[(11)] = inst_25147__$1);

(statearr_25182[(7)] = inst_25145__$1);

return statearr_25182;
})();
if(cljs.core.truth_(inst_25147__$1)){
var statearr_25183_25225 = state_25166__$1;
(statearr_25183_25225[(1)] = (19));

} else {
var statearr_25184_25226 = state_25166__$1;
(statearr_25184_25226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (25))){
var inst_25156 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25185_25227 = state_25166__$1;
(statearr_25185_25227[(2)] = inst_25156);

(statearr_25185_25227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (17))){
var inst_25121 = (state_25166[(10)]);
var inst_25130 = cljs.core.first.call(null,inst_25121);
var inst_25131 = cljs.core.async.muxch_STAR_.call(null,inst_25130);
var inst_25132 = cljs.core.async.close_BANG_.call(null,inst_25131);
var inst_25133 = cljs.core.next.call(null,inst_25121);
var inst_25107 = inst_25133;
var inst_25108 = null;
var inst_25109 = (0);
var inst_25110 = (0);
var state_25166__$1 = (function (){var statearr_25186 = state_25166;
(statearr_25186[(12)] = inst_25107);

(statearr_25186[(13)] = inst_25110);

(statearr_25186[(14)] = inst_25108);

(statearr_25186[(15)] = inst_25109);

(statearr_25186[(16)] = inst_25132);

return statearr_25186;
})();
var statearr_25187_25228 = state_25166__$1;
(statearr_25187_25228[(2)] = null);

(statearr_25187_25228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (3))){
var inst_25164 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25166__$1,inst_25164);
} else {
if((state_val_25167 === (12))){
var inst_25141 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25188_25229 = state_25166__$1;
(statearr_25188_25229[(2)] = inst_25141);

(statearr_25188_25229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (2))){
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(4),ch);
} else {
if((state_val_25167 === (23))){
var state_25166__$1 = state_25166;
var statearr_25189_25230 = state_25166__$1;
(statearr_25189_25230[(2)] = null);

(statearr_25189_25230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (19))){
var inst_25097 = (state_25166[(8)]);
var inst_25147 = (state_25166[(11)]);
var inst_25149 = cljs.core.async.muxch_STAR_.call(null,inst_25147);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25166__$1,(22),inst_25149,inst_25097);
} else {
if((state_val_25167 === (11))){
var inst_25107 = (state_25166[(12)]);
var inst_25121 = (state_25166[(10)]);
var inst_25121__$1 = cljs.core.seq.call(null,inst_25107);
var state_25166__$1 = (function (){var statearr_25190 = state_25166;
(statearr_25190[(10)] = inst_25121__$1);

return statearr_25190;
})();
if(inst_25121__$1){
var statearr_25191_25231 = state_25166__$1;
(statearr_25191_25231[(1)] = (13));

} else {
var statearr_25192_25232 = state_25166__$1;
(statearr_25192_25232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (9))){
var inst_25143 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25193_25233 = state_25166__$1;
(statearr_25193_25233[(2)] = inst_25143);

(statearr_25193_25233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (5))){
var inst_25104 = cljs.core.deref.call(null,mults);
var inst_25105 = cljs.core.vals.call(null,inst_25104);
var inst_25106 = cljs.core.seq.call(null,inst_25105);
var inst_25107 = inst_25106;
var inst_25108 = null;
var inst_25109 = (0);
var inst_25110 = (0);
var state_25166__$1 = (function (){var statearr_25194 = state_25166;
(statearr_25194[(12)] = inst_25107);

(statearr_25194[(13)] = inst_25110);

(statearr_25194[(14)] = inst_25108);

(statearr_25194[(15)] = inst_25109);

return statearr_25194;
})();
var statearr_25195_25234 = state_25166__$1;
(statearr_25195_25234[(2)] = null);

(statearr_25195_25234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (14))){
var state_25166__$1 = state_25166;
var statearr_25199_25235 = state_25166__$1;
(statearr_25199_25235[(2)] = null);

(statearr_25199_25235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (16))){
var inst_25121 = (state_25166[(10)]);
var inst_25125 = cljs.core.chunk_first.call(null,inst_25121);
var inst_25126 = cljs.core.chunk_rest.call(null,inst_25121);
var inst_25127 = cljs.core.count.call(null,inst_25125);
var inst_25107 = inst_25126;
var inst_25108 = inst_25125;
var inst_25109 = inst_25127;
var inst_25110 = (0);
var state_25166__$1 = (function (){var statearr_25200 = state_25166;
(statearr_25200[(12)] = inst_25107);

(statearr_25200[(13)] = inst_25110);

(statearr_25200[(14)] = inst_25108);

(statearr_25200[(15)] = inst_25109);

return statearr_25200;
})();
var statearr_25201_25236 = state_25166__$1;
(statearr_25201_25236[(2)] = null);

(statearr_25201_25236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (10))){
var inst_25107 = (state_25166[(12)]);
var inst_25110 = (state_25166[(13)]);
var inst_25108 = (state_25166[(14)]);
var inst_25109 = (state_25166[(15)]);
var inst_25115 = cljs.core._nth.call(null,inst_25108,inst_25110);
var inst_25116 = cljs.core.async.muxch_STAR_.call(null,inst_25115);
var inst_25117 = cljs.core.async.close_BANG_.call(null,inst_25116);
var inst_25118 = (inst_25110 + (1));
var tmp25196 = inst_25107;
var tmp25197 = inst_25108;
var tmp25198 = inst_25109;
var inst_25107__$1 = tmp25196;
var inst_25108__$1 = tmp25197;
var inst_25109__$1 = tmp25198;
var inst_25110__$1 = inst_25118;
var state_25166__$1 = (function (){var statearr_25202 = state_25166;
(statearr_25202[(12)] = inst_25107__$1);

(statearr_25202[(17)] = inst_25117);

(statearr_25202[(13)] = inst_25110__$1);

(statearr_25202[(14)] = inst_25108__$1);

(statearr_25202[(15)] = inst_25109__$1);

return statearr_25202;
})();
var statearr_25203_25237 = state_25166__$1;
(statearr_25203_25237[(2)] = null);

(statearr_25203_25237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (18))){
var inst_25136 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25204_25238 = state_25166__$1;
(statearr_25204_25238[(2)] = inst_25136);

(statearr_25204_25238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (8))){
var inst_25110 = (state_25166[(13)]);
var inst_25109 = (state_25166[(15)]);
var inst_25112 = (inst_25110 < inst_25109);
var inst_25113 = inst_25112;
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25113)){
var statearr_25205_25239 = state_25166__$1;
(statearr_25205_25239[(1)] = (10));

} else {
var statearr_25206_25240 = state_25166__$1;
(statearr_25206_25240[(1)] = (11));

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
});})(c__23979__auto___25212,mults,ensure_mult,p))
;
return ((function (switch__23884__auto__,c__23979__auto___25212,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_25207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25207[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_25207[(1)] = (1));

return statearr_25207;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_25166){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25208){if((e25208 instanceof Object)){
var ex__23888__auto__ = e25208;
var statearr_25209_25241 = state_25166;
(statearr_25209_25241[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25242 = state_25166;
state_25166 = G__25242;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_25166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_25166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25212,mults,ensure_mult,p))
})();
var state__23981__auto__ = (function (){var statearr_25210 = f__23980__auto__.call(null);
(statearr_25210[(6)] = c__23979__auto___25212);

return statearr_25210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25212,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25244 = arguments.length;
switch (G__25244) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25247 = arguments.length;
switch (G__25247) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25250 = arguments.length;
switch (G__25250) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23979__auto___25317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25289){
var state_val_25290 = (state_25289[(1)]);
if((state_val_25290 === (7))){
var state_25289__$1 = state_25289;
var statearr_25291_25318 = state_25289__$1;
(statearr_25291_25318[(2)] = null);

(statearr_25291_25318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (1))){
var state_25289__$1 = state_25289;
var statearr_25292_25319 = state_25289__$1;
(statearr_25292_25319[(2)] = null);

(statearr_25292_25319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (4))){
var inst_25253 = (state_25289[(7)]);
var inst_25255 = (inst_25253 < cnt);
var state_25289__$1 = state_25289;
if(cljs.core.truth_(inst_25255)){
var statearr_25293_25320 = state_25289__$1;
(statearr_25293_25320[(1)] = (6));

} else {
var statearr_25294_25321 = state_25289__$1;
(statearr_25294_25321[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (15))){
var inst_25285 = (state_25289[(2)]);
var state_25289__$1 = state_25289;
var statearr_25295_25322 = state_25289__$1;
(statearr_25295_25322[(2)] = inst_25285);

(statearr_25295_25322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (13))){
var inst_25278 = cljs.core.async.close_BANG_.call(null,out);
var state_25289__$1 = state_25289;
var statearr_25296_25323 = state_25289__$1;
(statearr_25296_25323[(2)] = inst_25278);

(statearr_25296_25323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (6))){
var state_25289__$1 = state_25289;
var statearr_25297_25324 = state_25289__$1;
(statearr_25297_25324[(2)] = null);

(statearr_25297_25324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (3))){
var inst_25287 = (state_25289[(2)]);
var state_25289__$1 = state_25289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25289__$1,inst_25287);
} else {
if((state_val_25290 === (12))){
var inst_25275 = (state_25289[(8)]);
var inst_25275__$1 = (state_25289[(2)]);
var inst_25276 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25275__$1);
var state_25289__$1 = (function (){var statearr_25298 = state_25289;
(statearr_25298[(8)] = inst_25275__$1);

return statearr_25298;
})();
if(cljs.core.truth_(inst_25276)){
var statearr_25299_25325 = state_25289__$1;
(statearr_25299_25325[(1)] = (13));

} else {
var statearr_25300_25326 = state_25289__$1;
(statearr_25300_25326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (2))){
var inst_25252 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25253 = (0);
var state_25289__$1 = (function (){var statearr_25301 = state_25289;
(statearr_25301[(9)] = inst_25252);

(statearr_25301[(7)] = inst_25253);

return statearr_25301;
})();
var statearr_25302_25327 = state_25289__$1;
(statearr_25302_25327[(2)] = null);

(statearr_25302_25327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (11))){
var inst_25253 = (state_25289[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25289,(10),Object,null,(9));
var inst_25262 = chs__$1.call(null,inst_25253);
var inst_25263 = done.call(null,inst_25253);
var inst_25264 = cljs.core.async.take_BANG_.call(null,inst_25262,inst_25263);
var state_25289__$1 = state_25289;
var statearr_25303_25328 = state_25289__$1;
(statearr_25303_25328[(2)] = inst_25264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (9))){
var inst_25253 = (state_25289[(7)]);
var inst_25266 = (state_25289[(2)]);
var inst_25267 = (inst_25253 + (1));
var inst_25253__$1 = inst_25267;
var state_25289__$1 = (function (){var statearr_25304 = state_25289;
(statearr_25304[(7)] = inst_25253__$1);

(statearr_25304[(10)] = inst_25266);

return statearr_25304;
})();
var statearr_25305_25329 = state_25289__$1;
(statearr_25305_25329[(2)] = null);

(statearr_25305_25329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (5))){
var inst_25273 = (state_25289[(2)]);
var state_25289__$1 = (function (){var statearr_25306 = state_25289;
(statearr_25306[(11)] = inst_25273);

return statearr_25306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25289__$1,(12),dchan);
} else {
if((state_val_25290 === (14))){
var inst_25275 = (state_25289[(8)]);
var inst_25280 = cljs.core.apply.call(null,f,inst_25275);
var state_25289__$1 = state_25289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25289__$1,(16),out,inst_25280);
} else {
if((state_val_25290 === (16))){
var inst_25282 = (state_25289[(2)]);
var state_25289__$1 = (function (){var statearr_25307 = state_25289;
(statearr_25307[(12)] = inst_25282);

return statearr_25307;
})();
var statearr_25308_25330 = state_25289__$1;
(statearr_25308_25330[(2)] = null);

(statearr_25308_25330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (10))){
var inst_25257 = (state_25289[(2)]);
var inst_25258 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25289__$1 = (function (){var statearr_25309 = state_25289;
(statearr_25309[(13)] = inst_25257);

return statearr_25309;
})();
var statearr_25310_25331 = state_25289__$1;
(statearr_25310_25331[(2)] = inst_25258);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25290 === (8))){
var inst_25271 = (state_25289[(2)]);
var state_25289__$1 = state_25289;
var statearr_25311_25332 = state_25289__$1;
(statearr_25311_25332[(2)] = inst_25271);

(statearr_25311_25332[(1)] = (5));


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
});})(c__23979__auto___25317,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23884__auto__,c__23979__auto___25317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_25312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25312[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_25312[(1)] = (1));

return statearr_25312;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_25289){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25313){if((e25313 instanceof Object)){
var ex__23888__auto__ = e25313;
var statearr_25314_25333 = state_25289;
(statearr_25314_25333[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25334 = state_25289;
state_25289 = G__25334;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_25289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_25289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25317,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23981__auto__ = (function (){var statearr_25315 = f__23980__auto__.call(null);
(statearr_25315[(6)] = c__23979__auto___25317);

return statearr_25315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25317,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25337 = arguments.length;
switch (G__25337) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23979__auto___25391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25391,out){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25391,out){
return (function (state_25369){
var state_val_25370 = (state_25369[(1)]);
if((state_val_25370 === (7))){
var inst_25348 = (state_25369[(7)]);
var inst_25349 = (state_25369[(8)]);
var inst_25348__$1 = (state_25369[(2)]);
var inst_25349__$1 = cljs.core.nth.call(null,inst_25348__$1,(0),null);
var inst_25350 = cljs.core.nth.call(null,inst_25348__$1,(1),null);
var inst_25351 = (inst_25349__$1 == null);
var state_25369__$1 = (function (){var statearr_25371 = state_25369;
(statearr_25371[(7)] = inst_25348__$1);

(statearr_25371[(8)] = inst_25349__$1);

(statearr_25371[(9)] = inst_25350);

return statearr_25371;
})();
if(cljs.core.truth_(inst_25351)){
var statearr_25372_25392 = state_25369__$1;
(statearr_25372_25392[(1)] = (8));

} else {
var statearr_25373_25393 = state_25369__$1;
(statearr_25373_25393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (1))){
var inst_25338 = cljs.core.vec.call(null,chs);
var inst_25339 = inst_25338;
var state_25369__$1 = (function (){var statearr_25374 = state_25369;
(statearr_25374[(10)] = inst_25339);

return statearr_25374;
})();
var statearr_25375_25394 = state_25369__$1;
(statearr_25375_25394[(2)] = null);

(statearr_25375_25394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (4))){
var inst_25339 = (state_25369[(10)]);
var state_25369__$1 = state_25369;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25369__$1,(7),inst_25339);
} else {
if((state_val_25370 === (6))){
var inst_25365 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25376_25395 = state_25369__$1;
(statearr_25376_25395[(2)] = inst_25365);

(statearr_25376_25395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (3))){
var inst_25367 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25369__$1,inst_25367);
} else {
if((state_val_25370 === (2))){
var inst_25339 = (state_25369[(10)]);
var inst_25341 = cljs.core.count.call(null,inst_25339);
var inst_25342 = (inst_25341 > (0));
var state_25369__$1 = state_25369;
if(cljs.core.truth_(inst_25342)){
var statearr_25378_25396 = state_25369__$1;
(statearr_25378_25396[(1)] = (4));

} else {
var statearr_25379_25397 = state_25369__$1;
(statearr_25379_25397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (11))){
var inst_25339 = (state_25369[(10)]);
var inst_25358 = (state_25369[(2)]);
var tmp25377 = inst_25339;
var inst_25339__$1 = tmp25377;
var state_25369__$1 = (function (){var statearr_25380 = state_25369;
(statearr_25380[(10)] = inst_25339__$1);

(statearr_25380[(11)] = inst_25358);

return statearr_25380;
})();
var statearr_25381_25398 = state_25369__$1;
(statearr_25381_25398[(2)] = null);

(statearr_25381_25398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (9))){
var inst_25349 = (state_25369[(8)]);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25369__$1,(11),out,inst_25349);
} else {
if((state_val_25370 === (5))){
var inst_25363 = cljs.core.async.close_BANG_.call(null,out);
var state_25369__$1 = state_25369;
var statearr_25382_25399 = state_25369__$1;
(statearr_25382_25399[(2)] = inst_25363);

(statearr_25382_25399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (10))){
var inst_25361 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25383_25400 = state_25369__$1;
(statearr_25383_25400[(2)] = inst_25361);

(statearr_25383_25400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (8))){
var inst_25339 = (state_25369[(10)]);
var inst_25348 = (state_25369[(7)]);
var inst_25349 = (state_25369[(8)]);
var inst_25350 = (state_25369[(9)]);
var inst_25353 = (function (){var cs = inst_25339;
var vec__25344 = inst_25348;
var v = inst_25349;
var c = inst_25350;
return ((function (cs,vec__25344,v,c,inst_25339,inst_25348,inst_25349,inst_25350,state_val_25370,c__23979__auto___25391,out){
return (function (p1__25335_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25335_SHARP_);
});
;})(cs,vec__25344,v,c,inst_25339,inst_25348,inst_25349,inst_25350,state_val_25370,c__23979__auto___25391,out))
})();
var inst_25354 = cljs.core.filterv.call(null,inst_25353,inst_25339);
var inst_25339__$1 = inst_25354;
var state_25369__$1 = (function (){var statearr_25384 = state_25369;
(statearr_25384[(10)] = inst_25339__$1);

return statearr_25384;
})();
var statearr_25385_25401 = state_25369__$1;
(statearr_25385_25401[(2)] = null);

(statearr_25385_25401[(1)] = (2));


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
});})(c__23979__auto___25391,out))
;
return ((function (switch__23884__auto__,c__23979__auto___25391,out){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_25386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25386[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_25386[(1)] = (1));

return statearr_25386;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_25369){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25387){if((e25387 instanceof Object)){
var ex__23888__auto__ = e25387;
var statearr_25388_25402 = state_25369;
(statearr_25388_25402[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25403 = state_25369;
state_25369 = G__25403;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_25369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_25369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25391,out))
})();
var state__23981__auto__ = (function (){var statearr_25389 = f__23980__auto__.call(null);
(statearr_25389[(6)] = c__23979__auto___25391);

return statearr_25389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25391,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25405 = arguments.length;
switch (G__25405) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23979__auto___25450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25450,out){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25450,out){
return (function (state_25429){
var state_val_25430 = (state_25429[(1)]);
if((state_val_25430 === (7))){
var inst_25411 = (state_25429[(7)]);
var inst_25411__$1 = (state_25429[(2)]);
var inst_25412 = (inst_25411__$1 == null);
var inst_25413 = cljs.core.not.call(null,inst_25412);
var state_25429__$1 = (function (){var statearr_25431 = state_25429;
(statearr_25431[(7)] = inst_25411__$1);

return statearr_25431;
})();
if(inst_25413){
var statearr_25432_25451 = state_25429__$1;
(statearr_25432_25451[(1)] = (8));

} else {
var statearr_25433_25452 = state_25429__$1;
(statearr_25433_25452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (1))){
var inst_25406 = (0);
var state_25429__$1 = (function (){var statearr_25434 = state_25429;
(statearr_25434[(8)] = inst_25406);

return statearr_25434;
})();
var statearr_25435_25453 = state_25429__$1;
(statearr_25435_25453[(2)] = null);

(statearr_25435_25453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (4))){
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25429__$1,(7),ch);
} else {
if((state_val_25430 === (6))){
var inst_25424 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25436_25454 = state_25429__$1;
(statearr_25436_25454[(2)] = inst_25424);

(statearr_25436_25454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (3))){
var inst_25426 = (state_25429[(2)]);
var inst_25427 = cljs.core.async.close_BANG_.call(null,out);
var state_25429__$1 = (function (){var statearr_25437 = state_25429;
(statearr_25437[(9)] = inst_25426);

return statearr_25437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25429__$1,inst_25427);
} else {
if((state_val_25430 === (2))){
var inst_25406 = (state_25429[(8)]);
var inst_25408 = (inst_25406 < n);
var state_25429__$1 = state_25429;
if(cljs.core.truth_(inst_25408)){
var statearr_25438_25455 = state_25429__$1;
(statearr_25438_25455[(1)] = (4));

} else {
var statearr_25439_25456 = state_25429__$1;
(statearr_25439_25456[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (11))){
var inst_25406 = (state_25429[(8)]);
var inst_25416 = (state_25429[(2)]);
var inst_25417 = (inst_25406 + (1));
var inst_25406__$1 = inst_25417;
var state_25429__$1 = (function (){var statearr_25440 = state_25429;
(statearr_25440[(8)] = inst_25406__$1);

(statearr_25440[(10)] = inst_25416);

return statearr_25440;
})();
var statearr_25441_25457 = state_25429__$1;
(statearr_25441_25457[(2)] = null);

(statearr_25441_25457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (9))){
var state_25429__$1 = state_25429;
var statearr_25442_25458 = state_25429__$1;
(statearr_25442_25458[(2)] = null);

(statearr_25442_25458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (5))){
var state_25429__$1 = state_25429;
var statearr_25443_25459 = state_25429__$1;
(statearr_25443_25459[(2)] = null);

(statearr_25443_25459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (10))){
var inst_25421 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25444_25460 = state_25429__$1;
(statearr_25444_25460[(2)] = inst_25421);

(statearr_25444_25460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (8))){
var inst_25411 = (state_25429[(7)]);
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25429__$1,(11),out,inst_25411);
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
});})(c__23979__auto___25450,out))
;
return ((function (switch__23884__auto__,c__23979__auto___25450,out){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_25445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25445[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_25445[(1)] = (1));

return statearr_25445;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_25429){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25446){if((e25446 instanceof Object)){
var ex__23888__auto__ = e25446;
var statearr_25447_25461 = state_25429;
(statearr_25447_25461[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25462 = state_25429;
state_25429 = G__25462;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_25429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_25429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25450,out))
})();
var state__23981__auto__ = (function (){var statearr_25448 = f__23980__auto__.call(null);
(statearr_25448[(6)] = c__23979__auto___25450);

return statearr_25448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25450,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25464 = (function (f,ch,meta25465){
this.f = f;
this.ch = ch;
this.meta25465 = meta25465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25466,meta25465__$1){
var self__ = this;
var _25466__$1 = this;
return (new cljs.core.async.t_cljs$core$async25464(self__.f,self__.ch,meta25465__$1));
});

cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25466){
var self__ = this;
var _25466__$1 = this;
return self__.meta25465;
});

cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25467 = (function (f,ch,meta25465,_,fn1,meta25468){
this.f = f;
this.ch = ch;
this.meta25465 = meta25465;
this._ = _;
this.fn1 = fn1;
this.meta25468 = meta25468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25469,meta25468__$1){
var self__ = this;
var _25469__$1 = this;
return (new cljs.core.async.t_cljs$core$async25467(self__.f,self__.ch,self__.meta25465,self__._,self__.fn1,meta25468__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25469){
var self__ = this;
var _25469__$1 = this;
return self__.meta25468;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25463_SHARP_){
return f1.call(null,(((p1__25463_SHARP_ == null))?null:self__.f.call(null,p1__25463_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25467.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25465","meta25465",1379729734,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25464","cljs.core.async/t_cljs$core$async25464",-44393047,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25468","meta25468",306122679,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25467";

cljs.core.async.t_cljs$core$async25467.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25467");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25467.
 */
cljs.core.async.__GT_t_cljs$core$async25467 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25467(f__$1,ch__$1,meta25465__$1,___$2,fn1__$1,meta25468){
return (new cljs.core.async.t_cljs$core$async25467(f__$1,ch__$1,meta25465__$1,___$2,fn1__$1,meta25468));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25467(self__.f,self__.ch,self__.meta25465,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25465","meta25465",1379729734,null)], null);
});

cljs.core.async.t_cljs$core$async25464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25464";

cljs.core.async.t_cljs$core$async25464.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25464");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25464.
 */
cljs.core.async.__GT_t_cljs$core$async25464 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25464(f__$1,ch__$1,meta25465){
return (new cljs.core.async.t_cljs$core$async25464(f__$1,ch__$1,meta25465));
});

}

return (new cljs.core.async.t_cljs$core$async25464(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25470 = (function (f,ch,meta25471){
this.f = f;
this.ch = ch;
this.meta25471 = meta25471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25472,meta25471__$1){
var self__ = this;
var _25472__$1 = this;
return (new cljs.core.async.t_cljs$core$async25470(self__.f,self__.ch,meta25471__$1));
});

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25472){
var self__ = this;
var _25472__$1 = this;
return self__.meta25471;
});

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25471","meta25471",-1540967246,null)], null);
});

cljs.core.async.t_cljs$core$async25470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25470";

cljs.core.async.t_cljs$core$async25470.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25470");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25470.
 */
cljs.core.async.__GT_t_cljs$core$async25470 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25470(f__$1,ch__$1,meta25471){
return (new cljs.core.async.t_cljs$core$async25470(f__$1,ch__$1,meta25471));
});

}

return (new cljs.core.async.t_cljs$core$async25470(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25473 = (function (p,ch,meta25474){
this.p = p;
this.ch = ch;
this.meta25474 = meta25474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25475,meta25474__$1){
var self__ = this;
var _25475__$1 = this;
return (new cljs.core.async.t_cljs$core$async25473(self__.p,self__.ch,meta25474__$1));
});

cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25475){
var self__ = this;
var _25475__$1 = this;
return self__.meta25474;
});

cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25474","meta25474",2057262221,null)], null);
});

cljs.core.async.t_cljs$core$async25473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25473";

cljs.core.async.t_cljs$core$async25473.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25473");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25473.
 */
cljs.core.async.__GT_t_cljs$core$async25473 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25473(p__$1,ch__$1,meta25474){
return (new cljs.core.async.t_cljs$core$async25473(p__$1,ch__$1,meta25474));
});

}

return (new cljs.core.async.t_cljs$core$async25473(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25477 = arguments.length;
switch (G__25477) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23979__auto___25517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25517,out){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25517,out){
return (function (state_25498){
var state_val_25499 = (state_25498[(1)]);
if((state_val_25499 === (7))){
var inst_25494 = (state_25498[(2)]);
var state_25498__$1 = state_25498;
var statearr_25500_25518 = state_25498__$1;
(statearr_25500_25518[(2)] = inst_25494);

(statearr_25500_25518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25499 === (1))){
var state_25498__$1 = state_25498;
var statearr_25501_25519 = state_25498__$1;
(statearr_25501_25519[(2)] = null);

(statearr_25501_25519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25499 === (4))){
var inst_25480 = (state_25498[(7)]);
var inst_25480__$1 = (state_25498[(2)]);
var inst_25481 = (inst_25480__$1 == null);
var state_25498__$1 = (function (){var statearr_25502 = state_25498;
(statearr_25502[(7)] = inst_25480__$1);

return statearr_25502;
})();
if(cljs.core.truth_(inst_25481)){
var statearr_25503_25520 = state_25498__$1;
(statearr_25503_25520[(1)] = (5));

} else {
var statearr_25504_25521 = state_25498__$1;
(statearr_25504_25521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25499 === (6))){
var inst_25480 = (state_25498[(7)]);
var inst_25485 = p.call(null,inst_25480);
var state_25498__$1 = state_25498;
if(cljs.core.truth_(inst_25485)){
var statearr_25505_25522 = state_25498__$1;
(statearr_25505_25522[(1)] = (8));

} else {
var statearr_25506_25523 = state_25498__$1;
(statearr_25506_25523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25499 === (3))){
var inst_25496 = (state_25498[(2)]);
var state_25498__$1 = state_25498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25498__$1,inst_25496);
} else {
if((state_val_25499 === (2))){
var state_25498__$1 = state_25498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25498__$1,(4),ch);
} else {
if((state_val_25499 === (11))){
var inst_25488 = (state_25498[(2)]);
var state_25498__$1 = state_25498;
var statearr_25507_25524 = state_25498__$1;
(statearr_25507_25524[(2)] = inst_25488);

(statearr_25507_25524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25499 === (9))){
var state_25498__$1 = state_25498;
var statearr_25508_25525 = state_25498__$1;
(statearr_25508_25525[(2)] = null);

(statearr_25508_25525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25499 === (5))){
var inst_25483 = cljs.core.async.close_BANG_.call(null,out);
var state_25498__$1 = state_25498;
var statearr_25509_25526 = state_25498__$1;
(statearr_25509_25526[(2)] = inst_25483);

(statearr_25509_25526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25499 === (10))){
var inst_25491 = (state_25498[(2)]);
var state_25498__$1 = (function (){var statearr_25510 = state_25498;
(statearr_25510[(8)] = inst_25491);

return statearr_25510;
})();
var statearr_25511_25527 = state_25498__$1;
(statearr_25511_25527[(2)] = null);

(statearr_25511_25527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25499 === (8))){
var inst_25480 = (state_25498[(7)]);
var state_25498__$1 = state_25498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25498__$1,(11),out,inst_25480);
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
});})(c__23979__auto___25517,out))
;
return ((function (switch__23884__auto__,c__23979__auto___25517,out){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_25512 = [null,null,null,null,null,null,null,null,null];
(statearr_25512[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_25512[(1)] = (1));

return statearr_25512;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_25498){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25513){if((e25513 instanceof Object)){
var ex__23888__auto__ = e25513;
var statearr_25514_25528 = state_25498;
(statearr_25514_25528[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25529 = state_25498;
state_25498 = G__25529;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_25498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_25498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25517,out))
})();
var state__23981__auto__ = (function (){var statearr_25515 = f__23980__auto__.call(null);
(statearr_25515[(6)] = c__23979__auto___25517);

return statearr_25515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25517,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25531 = arguments.length;
switch (G__25531) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto__){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto__){
return (function (state_25594){
var state_val_25595 = (state_25594[(1)]);
if((state_val_25595 === (7))){
var inst_25590 = (state_25594[(2)]);
var state_25594__$1 = state_25594;
var statearr_25596_25634 = state_25594__$1;
(statearr_25596_25634[(2)] = inst_25590);

(statearr_25596_25634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (20))){
var inst_25560 = (state_25594[(7)]);
var inst_25571 = (state_25594[(2)]);
var inst_25572 = cljs.core.next.call(null,inst_25560);
var inst_25546 = inst_25572;
var inst_25547 = null;
var inst_25548 = (0);
var inst_25549 = (0);
var state_25594__$1 = (function (){var statearr_25597 = state_25594;
(statearr_25597[(8)] = inst_25571);

(statearr_25597[(9)] = inst_25546);

(statearr_25597[(10)] = inst_25549);

(statearr_25597[(11)] = inst_25548);

(statearr_25597[(12)] = inst_25547);

return statearr_25597;
})();
var statearr_25598_25635 = state_25594__$1;
(statearr_25598_25635[(2)] = null);

(statearr_25598_25635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (1))){
var state_25594__$1 = state_25594;
var statearr_25599_25636 = state_25594__$1;
(statearr_25599_25636[(2)] = null);

(statearr_25599_25636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (4))){
var inst_25535 = (state_25594[(13)]);
var inst_25535__$1 = (state_25594[(2)]);
var inst_25536 = (inst_25535__$1 == null);
var state_25594__$1 = (function (){var statearr_25600 = state_25594;
(statearr_25600[(13)] = inst_25535__$1);

return statearr_25600;
})();
if(cljs.core.truth_(inst_25536)){
var statearr_25601_25637 = state_25594__$1;
(statearr_25601_25637[(1)] = (5));

} else {
var statearr_25602_25638 = state_25594__$1;
(statearr_25602_25638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (15))){
var state_25594__$1 = state_25594;
var statearr_25606_25639 = state_25594__$1;
(statearr_25606_25639[(2)] = null);

(statearr_25606_25639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (21))){
var state_25594__$1 = state_25594;
var statearr_25607_25640 = state_25594__$1;
(statearr_25607_25640[(2)] = null);

(statearr_25607_25640[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (13))){
var inst_25546 = (state_25594[(9)]);
var inst_25549 = (state_25594[(10)]);
var inst_25548 = (state_25594[(11)]);
var inst_25547 = (state_25594[(12)]);
var inst_25556 = (state_25594[(2)]);
var inst_25557 = (inst_25549 + (1));
var tmp25603 = inst_25546;
var tmp25604 = inst_25548;
var tmp25605 = inst_25547;
var inst_25546__$1 = tmp25603;
var inst_25547__$1 = tmp25605;
var inst_25548__$1 = tmp25604;
var inst_25549__$1 = inst_25557;
var state_25594__$1 = (function (){var statearr_25608 = state_25594;
(statearr_25608[(9)] = inst_25546__$1);

(statearr_25608[(10)] = inst_25549__$1);

(statearr_25608[(11)] = inst_25548__$1);

(statearr_25608[(12)] = inst_25547__$1);

(statearr_25608[(14)] = inst_25556);

return statearr_25608;
})();
var statearr_25609_25641 = state_25594__$1;
(statearr_25609_25641[(2)] = null);

(statearr_25609_25641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (22))){
var state_25594__$1 = state_25594;
var statearr_25610_25642 = state_25594__$1;
(statearr_25610_25642[(2)] = null);

(statearr_25610_25642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (6))){
var inst_25535 = (state_25594[(13)]);
var inst_25544 = f.call(null,inst_25535);
var inst_25545 = cljs.core.seq.call(null,inst_25544);
var inst_25546 = inst_25545;
var inst_25547 = null;
var inst_25548 = (0);
var inst_25549 = (0);
var state_25594__$1 = (function (){var statearr_25611 = state_25594;
(statearr_25611[(9)] = inst_25546);

(statearr_25611[(10)] = inst_25549);

(statearr_25611[(11)] = inst_25548);

(statearr_25611[(12)] = inst_25547);

return statearr_25611;
})();
var statearr_25612_25643 = state_25594__$1;
(statearr_25612_25643[(2)] = null);

(statearr_25612_25643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (17))){
var inst_25560 = (state_25594[(7)]);
var inst_25564 = cljs.core.chunk_first.call(null,inst_25560);
var inst_25565 = cljs.core.chunk_rest.call(null,inst_25560);
var inst_25566 = cljs.core.count.call(null,inst_25564);
var inst_25546 = inst_25565;
var inst_25547 = inst_25564;
var inst_25548 = inst_25566;
var inst_25549 = (0);
var state_25594__$1 = (function (){var statearr_25613 = state_25594;
(statearr_25613[(9)] = inst_25546);

(statearr_25613[(10)] = inst_25549);

(statearr_25613[(11)] = inst_25548);

(statearr_25613[(12)] = inst_25547);

return statearr_25613;
})();
var statearr_25614_25644 = state_25594__$1;
(statearr_25614_25644[(2)] = null);

(statearr_25614_25644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (3))){
var inst_25592 = (state_25594[(2)]);
var state_25594__$1 = state_25594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25594__$1,inst_25592);
} else {
if((state_val_25595 === (12))){
var inst_25580 = (state_25594[(2)]);
var state_25594__$1 = state_25594;
var statearr_25615_25645 = state_25594__$1;
(statearr_25615_25645[(2)] = inst_25580);

(statearr_25615_25645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (2))){
var state_25594__$1 = state_25594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25594__$1,(4),in$);
} else {
if((state_val_25595 === (23))){
var inst_25588 = (state_25594[(2)]);
var state_25594__$1 = state_25594;
var statearr_25616_25646 = state_25594__$1;
(statearr_25616_25646[(2)] = inst_25588);

(statearr_25616_25646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (19))){
var inst_25575 = (state_25594[(2)]);
var state_25594__$1 = state_25594;
var statearr_25617_25647 = state_25594__$1;
(statearr_25617_25647[(2)] = inst_25575);

(statearr_25617_25647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (11))){
var inst_25546 = (state_25594[(9)]);
var inst_25560 = (state_25594[(7)]);
var inst_25560__$1 = cljs.core.seq.call(null,inst_25546);
var state_25594__$1 = (function (){var statearr_25618 = state_25594;
(statearr_25618[(7)] = inst_25560__$1);

return statearr_25618;
})();
if(inst_25560__$1){
var statearr_25619_25648 = state_25594__$1;
(statearr_25619_25648[(1)] = (14));

} else {
var statearr_25620_25649 = state_25594__$1;
(statearr_25620_25649[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (9))){
var inst_25582 = (state_25594[(2)]);
var inst_25583 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25594__$1 = (function (){var statearr_25621 = state_25594;
(statearr_25621[(15)] = inst_25582);

return statearr_25621;
})();
if(cljs.core.truth_(inst_25583)){
var statearr_25622_25650 = state_25594__$1;
(statearr_25622_25650[(1)] = (21));

} else {
var statearr_25623_25651 = state_25594__$1;
(statearr_25623_25651[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (5))){
var inst_25538 = cljs.core.async.close_BANG_.call(null,out);
var state_25594__$1 = state_25594;
var statearr_25624_25652 = state_25594__$1;
(statearr_25624_25652[(2)] = inst_25538);

(statearr_25624_25652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (14))){
var inst_25560 = (state_25594[(7)]);
var inst_25562 = cljs.core.chunked_seq_QMARK_.call(null,inst_25560);
var state_25594__$1 = state_25594;
if(inst_25562){
var statearr_25625_25653 = state_25594__$1;
(statearr_25625_25653[(1)] = (17));

} else {
var statearr_25626_25654 = state_25594__$1;
(statearr_25626_25654[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (16))){
var inst_25578 = (state_25594[(2)]);
var state_25594__$1 = state_25594;
var statearr_25627_25655 = state_25594__$1;
(statearr_25627_25655[(2)] = inst_25578);

(statearr_25627_25655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25595 === (10))){
var inst_25549 = (state_25594[(10)]);
var inst_25547 = (state_25594[(12)]);
var inst_25554 = cljs.core._nth.call(null,inst_25547,inst_25549);
var state_25594__$1 = state_25594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25594__$1,(13),out,inst_25554);
} else {
if((state_val_25595 === (18))){
var inst_25560 = (state_25594[(7)]);
var inst_25569 = cljs.core.first.call(null,inst_25560);
var state_25594__$1 = state_25594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25594__$1,(20),out,inst_25569);
} else {
if((state_val_25595 === (8))){
var inst_25549 = (state_25594[(10)]);
var inst_25548 = (state_25594[(11)]);
var inst_25551 = (inst_25549 < inst_25548);
var inst_25552 = inst_25551;
var state_25594__$1 = state_25594;
if(cljs.core.truth_(inst_25552)){
var statearr_25628_25656 = state_25594__$1;
(statearr_25628_25656[(1)] = (10));

} else {
var statearr_25629_25657 = state_25594__$1;
(statearr_25629_25657[(1)] = (11));

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
});})(c__23979__auto__))
;
return ((function (switch__23884__auto__,c__23979__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23885__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23885__auto____0 = (function (){
var statearr_25630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25630[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23885__auto__);

(statearr_25630[(1)] = (1));

return statearr_25630;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23885__auto____1 = (function (state_25594){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25631){if((e25631 instanceof Object)){
var ex__23888__auto__ = e25631;
var statearr_25632_25658 = state_25594;
(statearr_25632_25658[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25659 = state_25594;
state_25594 = G__25659;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23885__auto__ = function(state_25594){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23885__auto____1.call(this,state_25594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23885__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23885__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto__))
})();
var state__23981__auto__ = (function (){var statearr_25633 = f__23980__auto__.call(null);
(statearr_25633[(6)] = c__23979__auto__);

return statearr_25633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto__))
);

return c__23979__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25661 = arguments.length;
switch (G__25661) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25664 = arguments.length;
switch (G__25664) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25667 = arguments.length;
switch (G__25667) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23979__auto___25714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25714,out){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25714,out){
return (function (state_25691){
var state_val_25692 = (state_25691[(1)]);
if((state_val_25692 === (7))){
var inst_25686 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25693_25715 = state_25691__$1;
(statearr_25693_25715[(2)] = inst_25686);

(statearr_25693_25715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (1))){
var inst_25668 = null;
var state_25691__$1 = (function (){var statearr_25694 = state_25691;
(statearr_25694[(7)] = inst_25668);

return statearr_25694;
})();
var statearr_25695_25716 = state_25691__$1;
(statearr_25695_25716[(2)] = null);

(statearr_25695_25716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (4))){
var inst_25671 = (state_25691[(8)]);
var inst_25671__$1 = (state_25691[(2)]);
var inst_25672 = (inst_25671__$1 == null);
var inst_25673 = cljs.core.not.call(null,inst_25672);
var state_25691__$1 = (function (){var statearr_25696 = state_25691;
(statearr_25696[(8)] = inst_25671__$1);

return statearr_25696;
})();
if(inst_25673){
var statearr_25697_25717 = state_25691__$1;
(statearr_25697_25717[(1)] = (5));

} else {
var statearr_25698_25718 = state_25691__$1;
(statearr_25698_25718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (6))){
var state_25691__$1 = state_25691;
var statearr_25699_25719 = state_25691__$1;
(statearr_25699_25719[(2)] = null);

(statearr_25699_25719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (3))){
var inst_25688 = (state_25691[(2)]);
var inst_25689 = cljs.core.async.close_BANG_.call(null,out);
var state_25691__$1 = (function (){var statearr_25700 = state_25691;
(statearr_25700[(9)] = inst_25688);

return statearr_25700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25691__$1,inst_25689);
} else {
if((state_val_25692 === (2))){
var state_25691__$1 = state_25691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25691__$1,(4),ch);
} else {
if((state_val_25692 === (11))){
var inst_25671 = (state_25691[(8)]);
var inst_25680 = (state_25691[(2)]);
var inst_25668 = inst_25671;
var state_25691__$1 = (function (){var statearr_25701 = state_25691;
(statearr_25701[(10)] = inst_25680);

(statearr_25701[(7)] = inst_25668);

return statearr_25701;
})();
var statearr_25702_25720 = state_25691__$1;
(statearr_25702_25720[(2)] = null);

(statearr_25702_25720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (9))){
var inst_25671 = (state_25691[(8)]);
var state_25691__$1 = state_25691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25691__$1,(11),out,inst_25671);
} else {
if((state_val_25692 === (5))){
var inst_25668 = (state_25691[(7)]);
var inst_25671 = (state_25691[(8)]);
var inst_25675 = cljs.core._EQ_.call(null,inst_25671,inst_25668);
var state_25691__$1 = state_25691;
if(inst_25675){
var statearr_25704_25721 = state_25691__$1;
(statearr_25704_25721[(1)] = (8));

} else {
var statearr_25705_25722 = state_25691__$1;
(statearr_25705_25722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (10))){
var inst_25683 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25706_25723 = state_25691__$1;
(statearr_25706_25723[(2)] = inst_25683);

(statearr_25706_25723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (8))){
var inst_25668 = (state_25691[(7)]);
var tmp25703 = inst_25668;
var inst_25668__$1 = tmp25703;
var state_25691__$1 = (function (){var statearr_25707 = state_25691;
(statearr_25707[(7)] = inst_25668__$1);

return statearr_25707;
})();
var statearr_25708_25724 = state_25691__$1;
(statearr_25708_25724[(2)] = null);

(statearr_25708_25724[(1)] = (2));


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
});})(c__23979__auto___25714,out))
;
return ((function (switch__23884__auto__,c__23979__auto___25714,out){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_25709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25709[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_25709[(1)] = (1));

return statearr_25709;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_25691){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25710){if((e25710 instanceof Object)){
var ex__23888__auto__ = e25710;
var statearr_25711_25725 = state_25691;
(statearr_25711_25725[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25726 = state_25691;
state_25691 = G__25726;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_25691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_25691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25714,out))
})();
var state__23981__auto__ = (function (){var statearr_25712 = f__23980__auto__.call(null);
(statearr_25712[(6)] = c__23979__auto___25714);

return statearr_25712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25714,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25728 = arguments.length;
switch (G__25728) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23979__auto___25794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25794,out){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25794,out){
return (function (state_25766){
var state_val_25767 = (state_25766[(1)]);
if((state_val_25767 === (7))){
var inst_25762 = (state_25766[(2)]);
var state_25766__$1 = state_25766;
var statearr_25768_25795 = state_25766__$1;
(statearr_25768_25795[(2)] = inst_25762);

(statearr_25768_25795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (1))){
var inst_25729 = (new Array(n));
var inst_25730 = inst_25729;
var inst_25731 = (0);
var state_25766__$1 = (function (){var statearr_25769 = state_25766;
(statearr_25769[(7)] = inst_25731);

(statearr_25769[(8)] = inst_25730);

return statearr_25769;
})();
var statearr_25770_25796 = state_25766__$1;
(statearr_25770_25796[(2)] = null);

(statearr_25770_25796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (4))){
var inst_25734 = (state_25766[(9)]);
var inst_25734__$1 = (state_25766[(2)]);
var inst_25735 = (inst_25734__$1 == null);
var inst_25736 = cljs.core.not.call(null,inst_25735);
var state_25766__$1 = (function (){var statearr_25771 = state_25766;
(statearr_25771[(9)] = inst_25734__$1);

return statearr_25771;
})();
if(inst_25736){
var statearr_25772_25797 = state_25766__$1;
(statearr_25772_25797[(1)] = (5));

} else {
var statearr_25773_25798 = state_25766__$1;
(statearr_25773_25798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (15))){
var inst_25756 = (state_25766[(2)]);
var state_25766__$1 = state_25766;
var statearr_25774_25799 = state_25766__$1;
(statearr_25774_25799[(2)] = inst_25756);

(statearr_25774_25799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (13))){
var state_25766__$1 = state_25766;
var statearr_25775_25800 = state_25766__$1;
(statearr_25775_25800[(2)] = null);

(statearr_25775_25800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (6))){
var inst_25731 = (state_25766[(7)]);
var inst_25752 = (inst_25731 > (0));
var state_25766__$1 = state_25766;
if(cljs.core.truth_(inst_25752)){
var statearr_25776_25801 = state_25766__$1;
(statearr_25776_25801[(1)] = (12));

} else {
var statearr_25777_25802 = state_25766__$1;
(statearr_25777_25802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (3))){
var inst_25764 = (state_25766[(2)]);
var state_25766__$1 = state_25766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25766__$1,inst_25764);
} else {
if((state_val_25767 === (12))){
var inst_25730 = (state_25766[(8)]);
var inst_25754 = cljs.core.vec.call(null,inst_25730);
var state_25766__$1 = state_25766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25766__$1,(15),out,inst_25754);
} else {
if((state_val_25767 === (2))){
var state_25766__$1 = state_25766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25766__$1,(4),ch);
} else {
if((state_val_25767 === (11))){
var inst_25746 = (state_25766[(2)]);
var inst_25747 = (new Array(n));
var inst_25730 = inst_25747;
var inst_25731 = (0);
var state_25766__$1 = (function (){var statearr_25778 = state_25766;
(statearr_25778[(7)] = inst_25731);

(statearr_25778[(10)] = inst_25746);

(statearr_25778[(8)] = inst_25730);

return statearr_25778;
})();
var statearr_25779_25803 = state_25766__$1;
(statearr_25779_25803[(2)] = null);

(statearr_25779_25803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (9))){
var inst_25730 = (state_25766[(8)]);
var inst_25744 = cljs.core.vec.call(null,inst_25730);
var state_25766__$1 = state_25766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25766__$1,(11),out,inst_25744);
} else {
if((state_val_25767 === (5))){
var inst_25731 = (state_25766[(7)]);
var inst_25734 = (state_25766[(9)]);
var inst_25739 = (state_25766[(11)]);
var inst_25730 = (state_25766[(8)]);
var inst_25738 = (inst_25730[inst_25731] = inst_25734);
var inst_25739__$1 = (inst_25731 + (1));
var inst_25740 = (inst_25739__$1 < n);
var state_25766__$1 = (function (){var statearr_25780 = state_25766;
(statearr_25780[(12)] = inst_25738);

(statearr_25780[(11)] = inst_25739__$1);

return statearr_25780;
})();
if(cljs.core.truth_(inst_25740)){
var statearr_25781_25804 = state_25766__$1;
(statearr_25781_25804[(1)] = (8));

} else {
var statearr_25782_25805 = state_25766__$1;
(statearr_25782_25805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (14))){
var inst_25759 = (state_25766[(2)]);
var inst_25760 = cljs.core.async.close_BANG_.call(null,out);
var state_25766__$1 = (function (){var statearr_25784 = state_25766;
(statearr_25784[(13)] = inst_25759);

return statearr_25784;
})();
var statearr_25785_25806 = state_25766__$1;
(statearr_25785_25806[(2)] = inst_25760);

(statearr_25785_25806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (10))){
var inst_25750 = (state_25766[(2)]);
var state_25766__$1 = state_25766;
var statearr_25786_25807 = state_25766__$1;
(statearr_25786_25807[(2)] = inst_25750);

(statearr_25786_25807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (8))){
var inst_25739 = (state_25766[(11)]);
var inst_25730 = (state_25766[(8)]);
var tmp25783 = inst_25730;
var inst_25730__$1 = tmp25783;
var inst_25731 = inst_25739;
var state_25766__$1 = (function (){var statearr_25787 = state_25766;
(statearr_25787[(7)] = inst_25731);

(statearr_25787[(8)] = inst_25730__$1);

return statearr_25787;
})();
var statearr_25788_25808 = state_25766__$1;
(statearr_25788_25808[(2)] = null);

(statearr_25788_25808[(1)] = (2));


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
});})(c__23979__auto___25794,out))
;
return ((function (switch__23884__auto__,c__23979__auto___25794,out){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_25789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25789[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_25789[(1)] = (1));

return statearr_25789;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_25766){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25790){if((e25790 instanceof Object)){
var ex__23888__auto__ = e25790;
var statearr_25791_25809 = state_25766;
(statearr_25791_25809[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25810 = state_25766;
state_25766 = G__25810;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_25766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_25766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25794,out))
})();
var state__23981__auto__ = (function (){var statearr_25792 = f__23980__auto__.call(null);
(statearr_25792[(6)] = c__23979__auto___25794);

return statearr_25792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25794,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25812 = arguments.length;
switch (G__25812) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23979__auto___25882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23979__auto___25882,out){
return (function (){
var f__23980__auto__ = (function (){var switch__23884__auto__ = ((function (c__23979__auto___25882,out){
return (function (state_25854){
var state_val_25855 = (state_25854[(1)]);
if((state_val_25855 === (7))){
var inst_25850 = (state_25854[(2)]);
var state_25854__$1 = state_25854;
var statearr_25856_25883 = state_25854__$1;
(statearr_25856_25883[(2)] = inst_25850);

(statearr_25856_25883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (1))){
var inst_25813 = [];
var inst_25814 = inst_25813;
var inst_25815 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25854__$1 = (function (){var statearr_25857 = state_25854;
(statearr_25857[(7)] = inst_25814);

(statearr_25857[(8)] = inst_25815);

return statearr_25857;
})();
var statearr_25858_25884 = state_25854__$1;
(statearr_25858_25884[(2)] = null);

(statearr_25858_25884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (4))){
var inst_25818 = (state_25854[(9)]);
var inst_25818__$1 = (state_25854[(2)]);
var inst_25819 = (inst_25818__$1 == null);
var inst_25820 = cljs.core.not.call(null,inst_25819);
var state_25854__$1 = (function (){var statearr_25859 = state_25854;
(statearr_25859[(9)] = inst_25818__$1);

return statearr_25859;
})();
if(inst_25820){
var statearr_25860_25885 = state_25854__$1;
(statearr_25860_25885[(1)] = (5));

} else {
var statearr_25861_25886 = state_25854__$1;
(statearr_25861_25886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (15))){
var inst_25844 = (state_25854[(2)]);
var state_25854__$1 = state_25854;
var statearr_25862_25887 = state_25854__$1;
(statearr_25862_25887[(2)] = inst_25844);

(statearr_25862_25887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (13))){
var state_25854__$1 = state_25854;
var statearr_25863_25888 = state_25854__$1;
(statearr_25863_25888[(2)] = null);

(statearr_25863_25888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (6))){
var inst_25814 = (state_25854[(7)]);
var inst_25839 = inst_25814.length;
var inst_25840 = (inst_25839 > (0));
var state_25854__$1 = state_25854;
if(cljs.core.truth_(inst_25840)){
var statearr_25864_25889 = state_25854__$1;
(statearr_25864_25889[(1)] = (12));

} else {
var statearr_25865_25890 = state_25854__$1;
(statearr_25865_25890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (3))){
var inst_25852 = (state_25854[(2)]);
var state_25854__$1 = state_25854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25854__$1,inst_25852);
} else {
if((state_val_25855 === (12))){
var inst_25814 = (state_25854[(7)]);
var inst_25842 = cljs.core.vec.call(null,inst_25814);
var state_25854__$1 = state_25854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25854__$1,(15),out,inst_25842);
} else {
if((state_val_25855 === (2))){
var state_25854__$1 = state_25854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25854__$1,(4),ch);
} else {
if((state_val_25855 === (11))){
var inst_25822 = (state_25854[(10)]);
var inst_25818 = (state_25854[(9)]);
var inst_25832 = (state_25854[(2)]);
var inst_25833 = [];
var inst_25834 = inst_25833.push(inst_25818);
var inst_25814 = inst_25833;
var inst_25815 = inst_25822;
var state_25854__$1 = (function (){var statearr_25866 = state_25854;
(statearr_25866[(11)] = inst_25832);

(statearr_25866[(7)] = inst_25814);

(statearr_25866[(12)] = inst_25834);

(statearr_25866[(8)] = inst_25815);

return statearr_25866;
})();
var statearr_25867_25891 = state_25854__$1;
(statearr_25867_25891[(2)] = null);

(statearr_25867_25891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (9))){
var inst_25814 = (state_25854[(7)]);
var inst_25830 = cljs.core.vec.call(null,inst_25814);
var state_25854__$1 = state_25854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25854__$1,(11),out,inst_25830);
} else {
if((state_val_25855 === (5))){
var inst_25822 = (state_25854[(10)]);
var inst_25818 = (state_25854[(9)]);
var inst_25815 = (state_25854[(8)]);
var inst_25822__$1 = f.call(null,inst_25818);
var inst_25823 = cljs.core._EQ_.call(null,inst_25822__$1,inst_25815);
var inst_25824 = cljs.core.keyword_identical_QMARK_.call(null,inst_25815,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25825 = ((inst_25823) || (inst_25824));
var state_25854__$1 = (function (){var statearr_25868 = state_25854;
(statearr_25868[(10)] = inst_25822__$1);

return statearr_25868;
})();
if(cljs.core.truth_(inst_25825)){
var statearr_25869_25892 = state_25854__$1;
(statearr_25869_25892[(1)] = (8));

} else {
var statearr_25870_25893 = state_25854__$1;
(statearr_25870_25893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (14))){
var inst_25847 = (state_25854[(2)]);
var inst_25848 = cljs.core.async.close_BANG_.call(null,out);
var state_25854__$1 = (function (){var statearr_25872 = state_25854;
(statearr_25872[(13)] = inst_25847);

return statearr_25872;
})();
var statearr_25873_25894 = state_25854__$1;
(statearr_25873_25894[(2)] = inst_25848);

(statearr_25873_25894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (10))){
var inst_25837 = (state_25854[(2)]);
var state_25854__$1 = state_25854;
var statearr_25874_25895 = state_25854__$1;
(statearr_25874_25895[(2)] = inst_25837);

(statearr_25874_25895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (8))){
var inst_25822 = (state_25854[(10)]);
var inst_25814 = (state_25854[(7)]);
var inst_25818 = (state_25854[(9)]);
var inst_25827 = inst_25814.push(inst_25818);
var tmp25871 = inst_25814;
var inst_25814__$1 = tmp25871;
var inst_25815 = inst_25822;
var state_25854__$1 = (function (){var statearr_25875 = state_25854;
(statearr_25875[(7)] = inst_25814__$1);

(statearr_25875[(14)] = inst_25827);

(statearr_25875[(8)] = inst_25815);

return statearr_25875;
})();
var statearr_25876_25896 = state_25854__$1;
(statearr_25876_25896[(2)] = null);

(statearr_25876_25896[(1)] = (2));


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
});})(c__23979__auto___25882,out))
;
return ((function (switch__23884__auto__,c__23979__auto___25882,out){
return (function() {
var cljs$core$async$state_machine__23885__auto__ = null;
var cljs$core$async$state_machine__23885__auto____0 = (function (){
var statearr_25877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25877[(0)] = cljs$core$async$state_machine__23885__auto__);

(statearr_25877[(1)] = (1));

return statearr_25877;
});
var cljs$core$async$state_machine__23885__auto____1 = (function (state_25854){
while(true){
var ret_value__23886__auto__ = (function (){try{while(true){
var result__23887__auto__ = switch__23884__auto__.call(null,state_25854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23887__auto__;
}
break;
}
}catch (e25878){if((e25878 instanceof Object)){
var ex__23888__auto__ = e25878;
var statearr_25879_25897 = state_25854;
(statearr_25879_25897[(5)] = ex__23888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25898 = state_25854;
state_25854 = G__25898;
continue;
} else {
return ret_value__23886__auto__;
}
break;
}
});
cljs$core$async$state_machine__23885__auto__ = function(state_25854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23885__auto____1.call(this,state_25854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23885__auto____0;
cljs$core$async$state_machine__23885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23885__auto____1;
return cljs$core$async$state_machine__23885__auto__;
})()
;})(switch__23884__auto__,c__23979__auto___25882,out))
})();
var state__23981__auto__ = (function (){var statearr_25880 = f__23980__auto__.call(null);
(statearr_25880[(6)] = c__23979__auto___25882);

return statearr_25880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23981__auto__);
});})(c__23979__auto___25882,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1567734174331
