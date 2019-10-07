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
var G__54457 = arguments.length;
switch (G__54457) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54458 = (function (f,blockable,meta54459){
this.f = f;
this.blockable = blockable;
this.meta54459 = meta54459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54460,meta54459__$1){
var self__ = this;
var _54460__$1 = this;
return (new cljs.core.async.t_cljs$core$async54458(self__.f,self__.blockable,meta54459__$1));
});

cljs.core.async.t_cljs$core$async54458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54460){
var self__ = this;
var _54460__$1 = this;
return self__.meta54459;
});

cljs.core.async.t_cljs$core$async54458.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async54458.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async54458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async54458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54459","meta54459",1925066187,null)], null);
});

cljs.core.async.t_cljs$core$async54458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54458";

cljs.core.async.t_cljs$core$async54458.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async54458");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54458.
 */
cljs.core.async.__GT_t_cljs$core$async54458 = (function cljs$core$async$__GT_t_cljs$core$async54458(f__$1,blockable__$1,meta54459){
return (new cljs.core.async.t_cljs$core$async54458(f__$1,blockable__$1,meta54459));
});

}

return (new cljs.core.async.t_cljs$core$async54458(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54464 = arguments.length;
switch (G__54464) {
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
var G__54467 = arguments.length;
switch (G__54467) {
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
var G__54470 = arguments.length;
switch (G__54470) {
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
var val_54472 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_54472);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_54472,ret){
return (function (){
return fn1.call(null,val_54472);
});})(val_54472,ret))
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
var G__54474 = arguments.length;
switch (G__54474) {
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
var n__4607__auto___54476 = n;
var x_54477 = (0);
while(true){
if((x_54477 < n__4607__auto___54476)){
(a[x_54477] = x_54477);

var G__54478 = (x_54477 + (1));
x_54477 = G__54478;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54479 = (function (flag,meta54480){
this.flag = flag;
this.meta54480 = meta54480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_54481,meta54480__$1){
var self__ = this;
var _54481__$1 = this;
return (new cljs.core.async.t_cljs$core$async54479(self__.flag,meta54480__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async54479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_54481){
var self__ = this;
var _54481__$1 = this;
return self__.meta54480;
});})(flag))
;

cljs.core.async.t_cljs$core$async54479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async54479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async54479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async54479.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54480","meta54480",1980673957,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async54479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54479";

cljs.core.async.t_cljs$core$async54479.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async54479");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54479.
 */
cljs.core.async.__GT_t_cljs$core$async54479 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54479(flag__$1,meta54480){
return (new cljs.core.async.t_cljs$core$async54479(flag__$1,meta54480));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async54479(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54482 = (function (flag,cb,meta54483){
this.flag = flag;
this.cb = cb;
this.meta54483 = meta54483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54484,meta54483__$1){
var self__ = this;
var _54484__$1 = this;
return (new cljs.core.async.t_cljs$core$async54482(self__.flag,self__.cb,meta54483__$1));
});

cljs.core.async.t_cljs$core$async54482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54484){
var self__ = this;
var _54484__$1 = this;
return self__.meta54483;
});

cljs.core.async.t_cljs$core$async54482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async54482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async54482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async54482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54483","meta54483",-1321600539,null)], null);
});

cljs.core.async.t_cljs$core$async54482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54482";

cljs.core.async.t_cljs$core$async54482.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async54482");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54482.
 */
cljs.core.async.__GT_t_cljs$core$async54482 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54482(flag__$1,cb__$1,meta54483){
return (new cljs.core.async.t_cljs$core$async54482(flag__$1,cb__$1,meta54483));
});

}

return (new cljs.core.async.t_cljs$core$async54482(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__54485_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54485_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54486_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54486_SHARP_,port], null));
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
var G__54487 = (i + (1));
i = G__54487;
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
var len__4730__auto___54493 = arguments.length;
var i__4731__auto___54494 = (0);
while(true){
if((i__4731__auto___54494 < len__4730__auto___54493)){
args__4736__auto__.push((arguments[i__4731__auto___54494]));

var G__54495 = (i__4731__auto___54494 + (1));
i__4731__auto___54494 = G__54495;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54490){
var map__54491 = p__54490;
var map__54491__$1 = (((((!((map__54491 == null))))?(((((map__54491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54491):map__54491);
var opts = map__54491__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54488){
var G__54489 = cljs.core.first.call(null,seq54488);
var seq54488__$1 = cljs.core.next.call(null,seq54488);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54489,seq54488__$1);
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
var G__54497 = arguments.length;
switch (G__54497) {
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
var c__22787__auto___54543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___54543){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___54543){
return (function (state_54521){
var state_val_54522 = (state_54521[(1)]);
if((state_val_54522 === (7))){
var inst_54517 = (state_54521[(2)]);
var state_54521__$1 = state_54521;
var statearr_54523_54544 = state_54521__$1;
(statearr_54523_54544[(2)] = inst_54517);

(statearr_54523_54544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (1))){
var state_54521__$1 = state_54521;
var statearr_54524_54545 = state_54521__$1;
(statearr_54524_54545[(2)] = null);

(statearr_54524_54545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (4))){
var inst_54500 = (state_54521[(7)]);
var inst_54500__$1 = (state_54521[(2)]);
var inst_54501 = (inst_54500__$1 == null);
var state_54521__$1 = (function (){var statearr_54525 = state_54521;
(statearr_54525[(7)] = inst_54500__$1);

return statearr_54525;
})();
if(cljs.core.truth_(inst_54501)){
var statearr_54526_54546 = state_54521__$1;
(statearr_54526_54546[(1)] = (5));

} else {
var statearr_54527_54547 = state_54521__$1;
(statearr_54527_54547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (13))){
var state_54521__$1 = state_54521;
var statearr_54528_54548 = state_54521__$1;
(statearr_54528_54548[(2)] = null);

(statearr_54528_54548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (6))){
var inst_54500 = (state_54521[(7)]);
var state_54521__$1 = state_54521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54521__$1,(11),to,inst_54500);
} else {
if((state_val_54522 === (3))){
var inst_54519 = (state_54521[(2)]);
var state_54521__$1 = state_54521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54521__$1,inst_54519);
} else {
if((state_val_54522 === (12))){
var state_54521__$1 = state_54521;
var statearr_54529_54549 = state_54521__$1;
(statearr_54529_54549[(2)] = null);

(statearr_54529_54549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (2))){
var state_54521__$1 = state_54521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54521__$1,(4),from);
} else {
if((state_val_54522 === (11))){
var inst_54510 = (state_54521[(2)]);
var state_54521__$1 = state_54521;
if(cljs.core.truth_(inst_54510)){
var statearr_54530_54550 = state_54521__$1;
(statearr_54530_54550[(1)] = (12));

} else {
var statearr_54531_54551 = state_54521__$1;
(statearr_54531_54551[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (9))){
var state_54521__$1 = state_54521;
var statearr_54532_54552 = state_54521__$1;
(statearr_54532_54552[(2)] = null);

(statearr_54532_54552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (5))){
var state_54521__$1 = state_54521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54533_54553 = state_54521__$1;
(statearr_54533_54553[(1)] = (8));

} else {
var statearr_54534_54554 = state_54521__$1;
(statearr_54534_54554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (14))){
var inst_54515 = (state_54521[(2)]);
var state_54521__$1 = state_54521;
var statearr_54535_54555 = state_54521__$1;
(statearr_54535_54555[(2)] = inst_54515);

(statearr_54535_54555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (10))){
var inst_54507 = (state_54521[(2)]);
var state_54521__$1 = state_54521;
var statearr_54536_54556 = state_54521__$1;
(statearr_54536_54556[(2)] = inst_54507);

(statearr_54536_54556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54522 === (8))){
var inst_54504 = cljs.core.async.close_BANG_.call(null,to);
var state_54521__$1 = state_54521;
var statearr_54537_54557 = state_54521__$1;
(statearr_54537_54557[(2)] = inst_54504);

(statearr_54537_54557[(1)] = (10));


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
});})(c__22787__auto___54543))
;
return ((function (switch__22764__auto__,c__22787__auto___54543){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_54538 = [null,null,null,null,null,null,null,null];
(statearr_54538[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_54538[(1)] = (1));

return statearr_54538;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_54521){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54539){if((e54539 instanceof Object)){
var ex__22768__auto__ = e54539;
var statearr_54540_54558 = state_54521;
(statearr_54540_54558[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54559 = state_54521;
state_54521 = G__54559;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_54521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_54521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___54543))
})();
var state__22789__auto__ = (function (){var statearr_54541 = f__22788__auto__.call(null);
(statearr_54541[(6)] = c__22787__auto___54543);

return statearr_54541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___54543))
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
var process__$1 = ((function (jobs,results){
return (function (p__54560){
var vec__54561 = p__54560;
var v = cljs.core.nth.call(null,vec__54561,(0),null);
var p = cljs.core.nth.call(null,vec__54561,(1),null);
var job = vec__54561;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22787__auto___54732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___54732,res,vec__54561,v,p,job,jobs,results){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___54732,res,vec__54561,v,p,job,jobs,results){
return (function (state_54568){
var state_val_54569 = (state_54568[(1)]);
if((state_val_54569 === (1))){
var state_54568__$1 = state_54568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54568__$1,(2),res,v);
} else {
if((state_val_54569 === (2))){
var inst_54565 = (state_54568[(2)]);
var inst_54566 = cljs.core.async.close_BANG_.call(null,res);
var state_54568__$1 = (function (){var statearr_54570 = state_54568;
(statearr_54570[(7)] = inst_54565);

return statearr_54570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54568__$1,inst_54566);
} else {
return null;
}
}
});})(c__22787__auto___54732,res,vec__54561,v,p,job,jobs,results))
;
return ((function (switch__22764__auto__,c__22787__auto___54732,res,vec__54561,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0 = (function (){
var statearr_54571 = [null,null,null,null,null,null,null,null];
(statearr_54571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__);

(statearr_54571[(1)] = (1));

return statearr_54571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1 = (function (state_54568){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54572){if((e54572 instanceof Object)){
var ex__22768__auto__ = e54572;
var statearr_54573_54733 = state_54568;
(statearr_54573_54733[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54734 = state_54568;
state_54568 = G__54734;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = function(state_54568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1.call(this,state_54568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___54732,res,vec__54561,v,p,job,jobs,results))
})();
var state__22789__auto__ = (function (){var statearr_54574 = f__22788__auto__.call(null);
(statearr_54574[(6)] = c__22787__auto___54732);

return statearr_54574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___54732,res,vec__54561,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__54575){
var vec__54576 = p__54575;
var v = cljs.core.nth.call(null,vec__54576,(0),null);
var p = cljs.core.nth.call(null,vec__54576,(1),null);
var job = vec__54576;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4607__auto___54735 = n;
var __54736 = (0);
while(true){
if((__54736 < n__4607__auto___54735)){
var G__54579_54737 = type;
var G__54579_54738__$1 = (((G__54579_54737 instanceof cljs.core.Keyword))?G__54579_54737.fqn:null);
switch (G__54579_54738__$1) {
case "compute":
var c__22787__auto___54740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54736,c__22787__auto___54740,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (__54736,c__22787__auto___54740,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async){
return (function (state_54592){
var state_val_54593 = (state_54592[(1)]);
if((state_val_54593 === (1))){
var state_54592__$1 = state_54592;
var statearr_54594_54741 = state_54592__$1;
(statearr_54594_54741[(2)] = null);

(statearr_54594_54741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54593 === (2))){
var state_54592__$1 = state_54592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54592__$1,(4),jobs);
} else {
if((state_val_54593 === (3))){
var inst_54590 = (state_54592[(2)]);
var state_54592__$1 = state_54592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54592__$1,inst_54590);
} else {
if((state_val_54593 === (4))){
var inst_54582 = (state_54592[(2)]);
var inst_54583 = process__$1.call(null,inst_54582);
var state_54592__$1 = state_54592;
if(cljs.core.truth_(inst_54583)){
var statearr_54595_54742 = state_54592__$1;
(statearr_54595_54742[(1)] = (5));

} else {
var statearr_54596_54743 = state_54592__$1;
(statearr_54596_54743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54593 === (5))){
var state_54592__$1 = state_54592;
var statearr_54597_54744 = state_54592__$1;
(statearr_54597_54744[(2)] = null);

(statearr_54597_54744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54593 === (6))){
var state_54592__$1 = state_54592;
var statearr_54598_54745 = state_54592__$1;
(statearr_54598_54745[(2)] = null);

(statearr_54598_54745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54593 === (7))){
var inst_54588 = (state_54592[(2)]);
var state_54592__$1 = state_54592;
var statearr_54599_54746 = state_54592__$1;
(statearr_54599_54746[(2)] = inst_54588);

(statearr_54599_54746[(1)] = (3));


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
});})(__54736,c__22787__auto___54740,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async))
;
return ((function (__54736,switch__22764__auto__,c__22787__auto___54740,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0 = (function (){
var statearr_54600 = [null,null,null,null,null,null,null];
(statearr_54600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__);

(statearr_54600[(1)] = (1));

return statearr_54600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1 = (function (state_54592){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54601){if((e54601 instanceof Object)){
var ex__22768__auto__ = e54601;
var statearr_54602_54747 = state_54592;
(statearr_54602_54747[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54748 = state_54592;
state_54592 = G__54748;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = function(state_54592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1.call(this,state_54592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__;
})()
;})(__54736,switch__22764__auto__,c__22787__auto___54740,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async))
})();
var state__22789__auto__ = (function (){var statearr_54603 = f__22788__auto__.call(null);
(statearr_54603[(6)] = c__22787__auto___54740);

return statearr_54603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(__54736,c__22787__auto___54740,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async))
);


break;
case "async":
var c__22787__auto___54749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54736,c__22787__auto___54749,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (__54736,c__22787__auto___54749,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async){
return (function (state_54616){
var state_val_54617 = (state_54616[(1)]);
if((state_val_54617 === (1))){
var state_54616__$1 = state_54616;
var statearr_54618_54750 = state_54616__$1;
(statearr_54618_54750[(2)] = null);

(statearr_54618_54750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54617 === (2))){
var state_54616__$1 = state_54616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54616__$1,(4),jobs);
} else {
if((state_val_54617 === (3))){
var inst_54614 = (state_54616[(2)]);
var state_54616__$1 = state_54616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54616__$1,inst_54614);
} else {
if((state_val_54617 === (4))){
var inst_54606 = (state_54616[(2)]);
var inst_54607 = async.call(null,inst_54606);
var state_54616__$1 = state_54616;
if(cljs.core.truth_(inst_54607)){
var statearr_54619_54751 = state_54616__$1;
(statearr_54619_54751[(1)] = (5));

} else {
var statearr_54620_54752 = state_54616__$1;
(statearr_54620_54752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54617 === (5))){
var state_54616__$1 = state_54616;
var statearr_54621_54753 = state_54616__$1;
(statearr_54621_54753[(2)] = null);

(statearr_54621_54753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54617 === (6))){
var state_54616__$1 = state_54616;
var statearr_54622_54754 = state_54616__$1;
(statearr_54622_54754[(2)] = null);

(statearr_54622_54754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54617 === (7))){
var inst_54612 = (state_54616[(2)]);
var state_54616__$1 = state_54616;
var statearr_54623_54755 = state_54616__$1;
(statearr_54623_54755[(2)] = inst_54612);

(statearr_54623_54755[(1)] = (3));


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
});})(__54736,c__22787__auto___54749,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async))
;
return ((function (__54736,switch__22764__auto__,c__22787__auto___54749,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0 = (function (){
var statearr_54624 = [null,null,null,null,null,null,null];
(statearr_54624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__);

(statearr_54624[(1)] = (1));

return statearr_54624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1 = (function (state_54616){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54625){if((e54625 instanceof Object)){
var ex__22768__auto__ = e54625;
var statearr_54626_54756 = state_54616;
(statearr_54626_54756[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54757 = state_54616;
state_54616 = G__54757;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = function(state_54616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1.call(this,state_54616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__;
})()
;})(__54736,switch__22764__auto__,c__22787__auto___54749,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async))
})();
var state__22789__auto__ = (function (){var statearr_54627 = f__22788__auto__.call(null);
(statearr_54627[(6)] = c__22787__auto___54749);

return statearr_54627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(__54736,c__22787__auto___54749,G__54579_54737,G__54579_54738__$1,n__4607__auto___54735,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54579_54738__$1)].join('')));

}

var G__54758 = (__54736 + (1));
__54736 = G__54758;
continue;
} else {
}
break;
}

var c__22787__auto___54759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___54759,jobs,results,process__$1,async){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___54759,jobs,results,process__$1,async){
return (function (state_54649){
var state_val_54650 = (state_54649[(1)]);
if((state_val_54650 === (7))){
var inst_54645 = (state_54649[(2)]);
var state_54649__$1 = state_54649;
var statearr_54651_54760 = state_54649__$1;
(statearr_54651_54760[(2)] = inst_54645);

(statearr_54651_54760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (1))){
var state_54649__$1 = state_54649;
var statearr_54652_54761 = state_54649__$1;
(statearr_54652_54761[(2)] = null);

(statearr_54652_54761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (4))){
var inst_54630 = (state_54649[(7)]);
var inst_54630__$1 = (state_54649[(2)]);
var inst_54631 = (inst_54630__$1 == null);
var state_54649__$1 = (function (){var statearr_54653 = state_54649;
(statearr_54653[(7)] = inst_54630__$1);

return statearr_54653;
})();
if(cljs.core.truth_(inst_54631)){
var statearr_54654_54762 = state_54649__$1;
(statearr_54654_54762[(1)] = (5));

} else {
var statearr_54655_54763 = state_54649__$1;
(statearr_54655_54763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (6))){
var inst_54635 = (state_54649[(8)]);
var inst_54630 = (state_54649[(7)]);
var inst_54635__$1 = cljs.core.async.chan.call(null,(1));
var inst_54636 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54637 = [inst_54630,inst_54635__$1];
var inst_54638 = (new cljs.core.PersistentVector(null,2,(5),inst_54636,inst_54637,null));
var state_54649__$1 = (function (){var statearr_54656 = state_54649;
(statearr_54656[(8)] = inst_54635__$1);

return statearr_54656;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54649__$1,(8),jobs,inst_54638);
} else {
if((state_val_54650 === (3))){
var inst_54647 = (state_54649[(2)]);
var state_54649__$1 = state_54649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54649__$1,inst_54647);
} else {
if((state_val_54650 === (2))){
var state_54649__$1 = state_54649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54649__$1,(4),from);
} else {
if((state_val_54650 === (9))){
var inst_54642 = (state_54649[(2)]);
var state_54649__$1 = (function (){var statearr_54657 = state_54649;
(statearr_54657[(9)] = inst_54642);

return statearr_54657;
})();
var statearr_54658_54764 = state_54649__$1;
(statearr_54658_54764[(2)] = null);

(statearr_54658_54764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (5))){
var inst_54633 = cljs.core.async.close_BANG_.call(null,jobs);
var state_54649__$1 = state_54649;
var statearr_54659_54765 = state_54649__$1;
(statearr_54659_54765[(2)] = inst_54633);

(statearr_54659_54765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (8))){
var inst_54635 = (state_54649[(8)]);
var inst_54640 = (state_54649[(2)]);
var state_54649__$1 = (function (){var statearr_54660 = state_54649;
(statearr_54660[(10)] = inst_54640);

return statearr_54660;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54649__$1,(9),results,inst_54635);
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
});})(c__22787__auto___54759,jobs,results,process__$1,async))
;
return ((function (switch__22764__auto__,c__22787__auto___54759,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0 = (function (){
var statearr_54661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__);

(statearr_54661[(1)] = (1));

return statearr_54661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1 = (function (state_54649){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54662){if((e54662 instanceof Object)){
var ex__22768__auto__ = e54662;
var statearr_54663_54766 = state_54649;
(statearr_54663_54766[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54767 = state_54649;
state_54649 = G__54767;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = function(state_54649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1.call(this,state_54649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___54759,jobs,results,process__$1,async))
})();
var state__22789__auto__ = (function (){var statearr_54664 = f__22788__auto__.call(null);
(statearr_54664[(6)] = c__22787__auto___54759);

return statearr_54664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___54759,jobs,results,process__$1,async))
);


var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__,jobs,results,process__$1,async){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__,jobs,results,process__$1,async){
return (function (state_54702){
var state_val_54703 = (state_54702[(1)]);
if((state_val_54703 === (7))){
var inst_54698 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
var statearr_54704_54768 = state_54702__$1;
(statearr_54704_54768[(2)] = inst_54698);

(statearr_54704_54768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (20))){
var state_54702__$1 = state_54702;
var statearr_54705_54769 = state_54702__$1;
(statearr_54705_54769[(2)] = null);

(statearr_54705_54769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (1))){
var state_54702__$1 = state_54702;
var statearr_54706_54770 = state_54702__$1;
(statearr_54706_54770[(2)] = null);

(statearr_54706_54770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (4))){
var inst_54667 = (state_54702[(7)]);
var inst_54667__$1 = (state_54702[(2)]);
var inst_54668 = (inst_54667__$1 == null);
var state_54702__$1 = (function (){var statearr_54707 = state_54702;
(statearr_54707[(7)] = inst_54667__$1);

return statearr_54707;
})();
if(cljs.core.truth_(inst_54668)){
var statearr_54708_54771 = state_54702__$1;
(statearr_54708_54771[(1)] = (5));

} else {
var statearr_54709_54772 = state_54702__$1;
(statearr_54709_54772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (15))){
var inst_54680 = (state_54702[(8)]);
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54702__$1,(18),to,inst_54680);
} else {
if((state_val_54703 === (21))){
var inst_54693 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
var statearr_54710_54773 = state_54702__$1;
(statearr_54710_54773[(2)] = inst_54693);

(statearr_54710_54773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (13))){
var inst_54695 = (state_54702[(2)]);
var state_54702__$1 = (function (){var statearr_54711 = state_54702;
(statearr_54711[(9)] = inst_54695);

return statearr_54711;
})();
var statearr_54712_54774 = state_54702__$1;
(statearr_54712_54774[(2)] = null);

(statearr_54712_54774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (6))){
var inst_54667 = (state_54702[(7)]);
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54702__$1,(11),inst_54667);
} else {
if((state_val_54703 === (17))){
var inst_54688 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
if(cljs.core.truth_(inst_54688)){
var statearr_54713_54775 = state_54702__$1;
(statearr_54713_54775[(1)] = (19));

} else {
var statearr_54714_54776 = state_54702__$1;
(statearr_54714_54776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (3))){
var inst_54700 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54702__$1,inst_54700);
} else {
if((state_val_54703 === (12))){
var inst_54677 = (state_54702[(10)]);
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54702__$1,(14),inst_54677);
} else {
if((state_val_54703 === (2))){
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54702__$1,(4),results);
} else {
if((state_val_54703 === (19))){
var state_54702__$1 = state_54702;
var statearr_54715_54777 = state_54702__$1;
(statearr_54715_54777[(2)] = null);

(statearr_54715_54777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (11))){
var inst_54677 = (state_54702[(2)]);
var state_54702__$1 = (function (){var statearr_54716 = state_54702;
(statearr_54716[(10)] = inst_54677);

return statearr_54716;
})();
var statearr_54717_54778 = state_54702__$1;
(statearr_54717_54778[(2)] = null);

(statearr_54717_54778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (9))){
var state_54702__$1 = state_54702;
var statearr_54718_54779 = state_54702__$1;
(statearr_54718_54779[(2)] = null);

(statearr_54718_54779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (5))){
var state_54702__$1 = state_54702;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54719_54780 = state_54702__$1;
(statearr_54719_54780[(1)] = (8));

} else {
var statearr_54720_54781 = state_54702__$1;
(statearr_54720_54781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (14))){
var inst_54680 = (state_54702[(8)]);
var inst_54682 = (state_54702[(11)]);
var inst_54680__$1 = (state_54702[(2)]);
var inst_54681 = (inst_54680__$1 == null);
var inst_54682__$1 = cljs.core.not.call(null,inst_54681);
var state_54702__$1 = (function (){var statearr_54721 = state_54702;
(statearr_54721[(8)] = inst_54680__$1);

(statearr_54721[(11)] = inst_54682__$1);

return statearr_54721;
})();
if(inst_54682__$1){
var statearr_54722_54782 = state_54702__$1;
(statearr_54722_54782[(1)] = (15));

} else {
var statearr_54723_54783 = state_54702__$1;
(statearr_54723_54783[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (16))){
var inst_54682 = (state_54702[(11)]);
var state_54702__$1 = state_54702;
var statearr_54724_54784 = state_54702__$1;
(statearr_54724_54784[(2)] = inst_54682);

(statearr_54724_54784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (10))){
var inst_54674 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
var statearr_54725_54785 = state_54702__$1;
(statearr_54725_54785[(2)] = inst_54674);

(statearr_54725_54785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (18))){
var inst_54685 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
var statearr_54726_54786 = state_54702__$1;
(statearr_54726_54786[(2)] = inst_54685);

(statearr_54726_54786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (8))){
var inst_54671 = cljs.core.async.close_BANG_.call(null,to);
var state_54702__$1 = state_54702;
var statearr_54727_54787 = state_54702__$1;
(statearr_54727_54787[(2)] = inst_54671);

(statearr_54727_54787[(1)] = (10));


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
});})(c__22787__auto__,jobs,results,process__$1,async))
;
return ((function (switch__22764__auto__,c__22787__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0 = (function (){
var statearr_54728 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__);

(statearr_54728[(1)] = (1));

return statearr_54728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1 = (function (state_54702){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54729){if((e54729 instanceof Object)){
var ex__22768__auto__ = e54729;
var statearr_54730_54788 = state_54702;
(statearr_54730_54788[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54789 = state_54702;
state_54702 = G__54789;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__ = function(state_54702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1.call(this,state_54702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__,jobs,results,process__$1,async))
})();
var state__22789__auto__ = (function (){var statearr_54731 = f__22788__auto__.call(null);
(statearr_54731[(6)] = c__22787__auto__);

return statearr_54731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__,jobs,results,process__$1,async))
);

return c__22787__auto__;
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
var G__54791 = arguments.length;
switch (G__54791) {
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
var G__54794 = arguments.length;
switch (G__54794) {
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
var G__54797 = arguments.length;
switch (G__54797) {
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
var c__22787__auto___54846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___54846,tc,fc){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___54846,tc,fc){
return (function (state_54823){
var state_val_54824 = (state_54823[(1)]);
if((state_val_54824 === (7))){
var inst_54819 = (state_54823[(2)]);
var state_54823__$1 = state_54823;
var statearr_54825_54847 = state_54823__$1;
(statearr_54825_54847[(2)] = inst_54819);

(statearr_54825_54847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (1))){
var state_54823__$1 = state_54823;
var statearr_54826_54848 = state_54823__$1;
(statearr_54826_54848[(2)] = null);

(statearr_54826_54848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (4))){
var inst_54800 = (state_54823[(7)]);
var inst_54800__$1 = (state_54823[(2)]);
var inst_54801 = (inst_54800__$1 == null);
var state_54823__$1 = (function (){var statearr_54827 = state_54823;
(statearr_54827[(7)] = inst_54800__$1);

return statearr_54827;
})();
if(cljs.core.truth_(inst_54801)){
var statearr_54828_54849 = state_54823__$1;
(statearr_54828_54849[(1)] = (5));

} else {
var statearr_54829_54850 = state_54823__$1;
(statearr_54829_54850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (13))){
var state_54823__$1 = state_54823;
var statearr_54830_54851 = state_54823__$1;
(statearr_54830_54851[(2)] = null);

(statearr_54830_54851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (6))){
var inst_54800 = (state_54823[(7)]);
var inst_54806 = p.call(null,inst_54800);
var state_54823__$1 = state_54823;
if(cljs.core.truth_(inst_54806)){
var statearr_54831_54852 = state_54823__$1;
(statearr_54831_54852[(1)] = (9));

} else {
var statearr_54832_54853 = state_54823__$1;
(statearr_54832_54853[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (3))){
var inst_54821 = (state_54823[(2)]);
var state_54823__$1 = state_54823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54823__$1,inst_54821);
} else {
if((state_val_54824 === (12))){
var state_54823__$1 = state_54823;
var statearr_54833_54854 = state_54823__$1;
(statearr_54833_54854[(2)] = null);

(statearr_54833_54854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (2))){
var state_54823__$1 = state_54823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54823__$1,(4),ch);
} else {
if((state_val_54824 === (11))){
var inst_54800 = (state_54823[(7)]);
var inst_54810 = (state_54823[(2)]);
var state_54823__$1 = state_54823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54823__$1,(8),inst_54810,inst_54800);
} else {
if((state_val_54824 === (9))){
var state_54823__$1 = state_54823;
var statearr_54834_54855 = state_54823__$1;
(statearr_54834_54855[(2)] = tc);

(statearr_54834_54855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (5))){
var inst_54803 = cljs.core.async.close_BANG_.call(null,tc);
var inst_54804 = cljs.core.async.close_BANG_.call(null,fc);
var state_54823__$1 = (function (){var statearr_54835 = state_54823;
(statearr_54835[(8)] = inst_54803);

return statearr_54835;
})();
var statearr_54836_54856 = state_54823__$1;
(statearr_54836_54856[(2)] = inst_54804);

(statearr_54836_54856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (14))){
var inst_54817 = (state_54823[(2)]);
var state_54823__$1 = state_54823;
var statearr_54837_54857 = state_54823__$1;
(statearr_54837_54857[(2)] = inst_54817);

(statearr_54837_54857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (10))){
var state_54823__$1 = state_54823;
var statearr_54838_54858 = state_54823__$1;
(statearr_54838_54858[(2)] = fc);

(statearr_54838_54858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54824 === (8))){
var inst_54812 = (state_54823[(2)]);
var state_54823__$1 = state_54823;
if(cljs.core.truth_(inst_54812)){
var statearr_54839_54859 = state_54823__$1;
(statearr_54839_54859[(1)] = (12));

} else {
var statearr_54840_54860 = state_54823__$1;
(statearr_54840_54860[(1)] = (13));

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
});})(c__22787__auto___54846,tc,fc))
;
return ((function (switch__22764__auto__,c__22787__auto___54846,tc,fc){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_54841 = [null,null,null,null,null,null,null,null,null];
(statearr_54841[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_54841[(1)] = (1));

return statearr_54841;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_54823){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54842){if((e54842 instanceof Object)){
var ex__22768__auto__ = e54842;
var statearr_54843_54861 = state_54823;
(statearr_54843_54861[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54862 = state_54823;
state_54823 = G__54862;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_54823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_54823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___54846,tc,fc))
})();
var state__22789__auto__ = (function (){var statearr_54844 = f__22788__auto__.call(null);
(statearr_54844[(6)] = c__22787__auto___54846);

return statearr_54844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___54846,tc,fc))
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
var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__){
return (function (state_54883){
var state_val_54884 = (state_54883[(1)]);
if((state_val_54884 === (7))){
var inst_54879 = (state_54883[(2)]);
var state_54883__$1 = state_54883;
var statearr_54885_54903 = state_54883__$1;
(statearr_54885_54903[(2)] = inst_54879);

(statearr_54885_54903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54884 === (1))){
var inst_54863 = init;
var state_54883__$1 = (function (){var statearr_54886 = state_54883;
(statearr_54886[(7)] = inst_54863);

return statearr_54886;
})();
var statearr_54887_54904 = state_54883__$1;
(statearr_54887_54904[(2)] = null);

(statearr_54887_54904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54884 === (4))){
var inst_54866 = (state_54883[(8)]);
var inst_54866__$1 = (state_54883[(2)]);
var inst_54867 = (inst_54866__$1 == null);
var state_54883__$1 = (function (){var statearr_54888 = state_54883;
(statearr_54888[(8)] = inst_54866__$1);

return statearr_54888;
})();
if(cljs.core.truth_(inst_54867)){
var statearr_54889_54905 = state_54883__$1;
(statearr_54889_54905[(1)] = (5));

} else {
var statearr_54890_54906 = state_54883__$1;
(statearr_54890_54906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54884 === (6))){
var inst_54866 = (state_54883[(8)]);
var inst_54870 = (state_54883[(9)]);
var inst_54863 = (state_54883[(7)]);
var inst_54870__$1 = f.call(null,inst_54863,inst_54866);
var inst_54871 = cljs.core.reduced_QMARK_.call(null,inst_54870__$1);
var state_54883__$1 = (function (){var statearr_54891 = state_54883;
(statearr_54891[(9)] = inst_54870__$1);

return statearr_54891;
})();
if(inst_54871){
var statearr_54892_54907 = state_54883__$1;
(statearr_54892_54907[(1)] = (8));

} else {
var statearr_54893_54908 = state_54883__$1;
(statearr_54893_54908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54884 === (3))){
var inst_54881 = (state_54883[(2)]);
var state_54883__$1 = state_54883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54883__$1,inst_54881);
} else {
if((state_val_54884 === (2))){
var state_54883__$1 = state_54883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54883__$1,(4),ch);
} else {
if((state_val_54884 === (9))){
var inst_54870 = (state_54883[(9)]);
var inst_54863 = inst_54870;
var state_54883__$1 = (function (){var statearr_54894 = state_54883;
(statearr_54894[(7)] = inst_54863);

return statearr_54894;
})();
var statearr_54895_54909 = state_54883__$1;
(statearr_54895_54909[(2)] = null);

(statearr_54895_54909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54884 === (5))){
var inst_54863 = (state_54883[(7)]);
var state_54883__$1 = state_54883;
var statearr_54896_54910 = state_54883__$1;
(statearr_54896_54910[(2)] = inst_54863);

(statearr_54896_54910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54884 === (10))){
var inst_54877 = (state_54883[(2)]);
var state_54883__$1 = state_54883;
var statearr_54897_54911 = state_54883__$1;
(statearr_54897_54911[(2)] = inst_54877);

(statearr_54897_54911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54884 === (8))){
var inst_54870 = (state_54883[(9)]);
var inst_54873 = cljs.core.deref.call(null,inst_54870);
var state_54883__$1 = state_54883;
var statearr_54898_54912 = state_54883__$1;
(statearr_54898_54912[(2)] = inst_54873);

(statearr_54898_54912[(1)] = (10));


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
});})(c__22787__auto__))
;
return ((function (switch__22764__auto__,c__22787__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22765__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22765__auto____0 = (function (){
var statearr_54899 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54899[(0)] = cljs$core$async$reduce_$_state_machine__22765__auto__);

(statearr_54899[(1)] = (1));

return statearr_54899;
});
var cljs$core$async$reduce_$_state_machine__22765__auto____1 = (function (state_54883){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54900){if((e54900 instanceof Object)){
var ex__22768__auto__ = e54900;
var statearr_54901_54913 = state_54883;
(statearr_54901_54913[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54914 = state_54883;
state_54883 = G__54914;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22765__auto__ = function(state_54883){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22765__auto____1.call(this,state_54883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22765__auto____0;
cljs$core$async$reduce_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22765__auto____1;
return cljs$core$async$reduce_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__))
})();
var state__22789__auto__ = (function (){var statearr_54902 = f__22788__auto__.call(null);
(statearr_54902[(6)] = c__22787__auto__);

return statearr_54902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__))
);

return c__22787__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__,f__$1){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__,f__$1){
return (function (state_54920){
var state_val_54921 = (state_54920[(1)]);
if((state_val_54921 === (1))){
var inst_54915 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_54920__$1 = state_54920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54920__$1,(2),inst_54915);
} else {
if((state_val_54921 === (2))){
var inst_54917 = (state_54920[(2)]);
var inst_54918 = f__$1.call(null,inst_54917);
var state_54920__$1 = state_54920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54920__$1,inst_54918);
} else {
return null;
}
}
});})(c__22787__auto__,f__$1))
;
return ((function (switch__22764__auto__,c__22787__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22765__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22765__auto____0 = (function (){
var statearr_54922 = [null,null,null,null,null,null,null];
(statearr_54922[(0)] = cljs$core$async$transduce_$_state_machine__22765__auto__);

(statearr_54922[(1)] = (1));

return statearr_54922;
});
var cljs$core$async$transduce_$_state_machine__22765__auto____1 = (function (state_54920){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54923){if((e54923 instanceof Object)){
var ex__22768__auto__ = e54923;
var statearr_54924_54926 = state_54920;
(statearr_54924_54926[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54927 = state_54920;
state_54920 = G__54927;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22765__auto__ = function(state_54920){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22765__auto____1.call(this,state_54920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22765__auto____0;
cljs$core$async$transduce_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22765__auto____1;
return cljs$core$async$transduce_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__,f__$1))
})();
var state__22789__auto__ = (function (){var statearr_54925 = f__22788__auto__.call(null);
(statearr_54925[(6)] = c__22787__auto__);

return statearr_54925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__,f__$1))
);

return c__22787__auto__;
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
var G__54929 = arguments.length;
switch (G__54929) {
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
var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__){
return (function (state_54954){
var state_val_54955 = (state_54954[(1)]);
if((state_val_54955 === (7))){
var inst_54936 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54956_54977 = state_54954__$1;
(statearr_54956_54977[(2)] = inst_54936);

(statearr_54956_54977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (1))){
var inst_54930 = cljs.core.seq.call(null,coll);
var inst_54931 = inst_54930;
var state_54954__$1 = (function (){var statearr_54957 = state_54954;
(statearr_54957[(7)] = inst_54931);

return statearr_54957;
})();
var statearr_54958_54978 = state_54954__$1;
(statearr_54958_54978[(2)] = null);

(statearr_54958_54978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (4))){
var inst_54931 = (state_54954[(7)]);
var inst_54934 = cljs.core.first.call(null,inst_54931);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54954__$1,(7),ch,inst_54934);
} else {
if((state_val_54955 === (13))){
var inst_54948 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54959_54979 = state_54954__$1;
(statearr_54959_54979[(2)] = inst_54948);

(statearr_54959_54979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (6))){
var inst_54939 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54939)){
var statearr_54960_54980 = state_54954__$1;
(statearr_54960_54980[(1)] = (8));

} else {
var statearr_54961_54981 = state_54954__$1;
(statearr_54961_54981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (3))){
var inst_54952 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54954__$1,inst_54952);
} else {
if((state_val_54955 === (12))){
var state_54954__$1 = state_54954;
var statearr_54962_54982 = state_54954__$1;
(statearr_54962_54982[(2)] = null);

(statearr_54962_54982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (2))){
var inst_54931 = (state_54954[(7)]);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54931)){
var statearr_54963_54983 = state_54954__$1;
(statearr_54963_54983[(1)] = (4));

} else {
var statearr_54964_54984 = state_54954__$1;
(statearr_54964_54984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (11))){
var inst_54945 = cljs.core.async.close_BANG_.call(null,ch);
var state_54954__$1 = state_54954;
var statearr_54965_54985 = state_54954__$1;
(statearr_54965_54985[(2)] = inst_54945);

(statearr_54965_54985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (9))){
var state_54954__$1 = state_54954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54966_54986 = state_54954__$1;
(statearr_54966_54986[(1)] = (11));

} else {
var statearr_54967_54987 = state_54954__$1;
(statearr_54967_54987[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (5))){
var inst_54931 = (state_54954[(7)]);
var state_54954__$1 = state_54954;
var statearr_54968_54988 = state_54954__$1;
(statearr_54968_54988[(2)] = inst_54931);

(statearr_54968_54988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (10))){
var inst_54950 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54969_54989 = state_54954__$1;
(statearr_54969_54989[(2)] = inst_54950);

(statearr_54969_54989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (8))){
var inst_54931 = (state_54954[(7)]);
var inst_54941 = cljs.core.next.call(null,inst_54931);
var inst_54931__$1 = inst_54941;
var state_54954__$1 = (function (){var statearr_54970 = state_54954;
(statearr_54970[(7)] = inst_54931__$1);

return statearr_54970;
})();
var statearr_54971_54990 = state_54954__$1;
(statearr_54971_54990[(2)] = null);

(statearr_54971_54990[(1)] = (2));


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
});})(c__22787__auto__))
;
return ((function (switch__22764__auto__,c__22787__auto__){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_54972 = [null,null,null,null,null,null,null,null];
(statearr_54972[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_54972[(1)] = (1));

return statearr_54972;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_54954){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_54954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e54973){if((e54973 instanceof Object)){
var ex__22768__auto__ = e54973;
var statearr_54974_54991 = state_54954;
(statearr_54974_54991[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54992 = state_54954;
state_54954 = G__54992;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_54954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_54954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__))
})();
var state__22789__auto__ = (function (){var statearr_54975 = f__22788__auto__.call(null);
(statearr_54975[(6)] = c__22787__auto__);

return statearr_54975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__))
);

return c__22787__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54993 = (function (ch,cs,meta54994){
this.ch = ch;
this.cs = cs;
this.meta54994 = meta54994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54995,meta54994__$1){
var self__ = this;
var _54995__$1 = this;
return (new cljs.core.async.t_cljs$core$async54993(self__.ch,self__.cs,meta54994__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async54993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54995){
var self__ = this;
var _54995__$1 = this;
return self__.meta54994;
});})(cs))
;

cljs.core.async.t_cljs$core$async54993.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async54993.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54993.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54993.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54993.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54993.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54994","meta54994",-155382714,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async54993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54993";

cljs.core.async.t_cljs$core$async54993.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async54993");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54993.
 */
cljs.core.async.__GT_t_cljs$core$async54993 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async54993(ch__$1,cs__$1,meta54994){
return (new cljs.core.async.t_cljs$core$async54993(ch__$1,cs__$1,meta54994));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async54993(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22787__auto___55215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___55215,cs,m,dchan,dctr,done){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___55215,cs,m,dchan,dctr,done){
return (function (state_55130){
var state_val_55131 = (state_55130[(1)]);
if((state_val_55131 === (7))){
var inst_55126 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55132_55216 = state_55130__$1;
(statearr_55132_55216[(2)] = inst_55126);

(statearr_55132_55216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (20))){
var inst_55029 = (state_55130[(7)]);
var inst_55041 = cljs.core.first.call(null,inst_55029);
var inst_55042 = cljs.core.nth.call(null,inst_55041,(0),null);
var inst_55043 = cljs.core.nth.call(null,inst_55041,(1),null);
var state_55130__$1 = (function (){var statearr_55133 = state_55130;
(statearr_55133[(8)] = inst_55042);

return statearr_55133;
})();
if(cljs.core.truth_(inst_55043)){
var statearr_55134_55217 = state_55130__$1;
(statearr_55134_55217[(1)] = (22));

} else {
var statearr_55135_55218 = state_55130__$1;
(statearr_55135_55218[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (27))){
var inst_55071 = (state_55130[(9)]);
var inst_55078 = (state_55130[(10)]);
var inst_54998 = (state_55130[(11)]);
var inst_55073 = (state_55130[(12)]);
var inst_55078__$1 = cljs.core._nth.call(null,inst_55071,inst_55073);
var inst_55079 = cljs.core.async.put_BANG_.call(null,inst_55078__$1,inst_54998,done);
var state_55130__$1 = (function (){var statearr_55136 = state_55130;
(statearr_55136[(10)] = inst_55078__$1);

return statearr_55136;
})();
if(cljs.core.truth_(inst_55079)){
var statearr_55137_55219 = state_55130__$1;
(statearr_55137_55219[(1)] = (30));

} else {
var statearr_55138_55220 = state_55130__$1;
(statearr_55138_55220[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (1))){
var state_55130__$1 = state_55130;
var statearr_55139_55221 = state_55130__$1;
(statearr_55139_55221[(2)] = null);

(statearr_55139_55221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (24))){
var inst_55029 = (state_55130[(7)]);
var inst_55048 = (state_55130[(2)]);
var inst_55049 = cljs.core.next.call(null,inst_55029);
var inst_55007 = inst_55049;
var inst_55008 = null;
var inst_55009 = (0);
var inst_55010 = (0);
var state_55130__$1 = (function (){var statearr_55140 = state_55130;
(statearr_55140[(13)] = inst_55009);

(statearr_55140[(14)] = inst_55010);

(statearr_55140[(15)] = inst_55048);

(statearr_55140[(16)] = inst_55008);

(statearr_55140[(17)] = inst_55007);

return statearr_55140;
})();
var statearr_55141_55222 = state_55130__$1;
(statearr_55141_55222[(2)] = null);

(statearr_55141_55222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (39))){
var state_55130__$1 = state_55130;
var statearr_55145_55223 = state_55130__$1;
(statearr_55145_55223[(2)] = null);

(statearr_55145_55223[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (4))){
var inst_54998 = (state_55130[(11)]);
var inst_54998__$1 = (state_55130[(2)]);
var inst_54999 = (inst_54998__$1 == null);
var state_55130__$1 = (function (){var statearr_55146 = state_55130;
(statearr_55146[(11)] = inst_54998__$1);

return statearr_55146;
})();
if(cljs.core.truth_(inst_54999)){
var statearr_55147_55224 = state_55130__$1;
(statearr_55147_55224[(1)] = (5));

} else {
var statearr_55148_55225 = state_55130__$1;
(statearr_55148_55225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (15))){
var inst_55009 = (state_55130[(13)]);
var inst_55010 = (state_55130[(14)]);
var inst_55008 = (state_55130[(16)]);
var inst_55007 = (state_55130[(17)]);
var inst_55025 = (state_55130[(2)]);
var inst_55026 = (inst_55010 + (1));
var tmp55142 = inst_55009;
var tmp55143 = inst_55008;
var tmp55144 = inst_55007;
var inst_55007__$1 = tmp55144;
var inst_55008__$1 = tmp55143;
var inst_55009__$1 = tmp55142;
var inst_55010__$1 = inst_55026;
var state_55130__$1 = (function (){var statearr_55149 = state_55130;
(statearr_55149[(13)] = inst_55009__$1);

(statearr_55149[(14)] = inst_55010__$1);

(statearr_55149[(16)] = inst_55008__$1);

(statearr_55149[(18)] = inst_55025);

(statearr_55149[(17)] = inst_55007__$1);

return statearr_55149;
})();
var statearr_55150_55226 = state_55130__$1;
(statearr_55150_55226[(2)] = null);

(statearr_55150_55226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (21))){
var inst_55052 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55154_55227 = state_55130__$1;
(statearr_55154_55227[(2)] = inst_55052);

(statearr_55154_55227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (31))){
var inst_55078 = (state_55130[(10)]);
var inst_55082 = done.call(null,null);
var inst_55083 = cljs.core.async.untap_STAR_.call(null,m,inst_55078);
var state_55130__$1 = (function (){var statearr_55155 = state_55130;
(statearr_55155[(19)] = inst_55082);

return statearr_55155;
})();
var statearr_55156_55228 = state_55130__$1;
(statearr_55156_55228[(2)] = inst_55083);

(statearr_55156_55228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (32))){
var inst_55070 = (state_55130[(20)]);
var inst_55071 = (state_55130[(9)]);
var inst_55072 = (state_55130[(21)]);
var inst_55073 = (state_55130[(12)]);
var inst_55085 = (state_55130[(2)]);
var inst_55086 = (inst_55073 + (1));
var tmp55151 = inst_55070;
var tmp55152 = inst_55071;
var tmp55153 = inst_55072;
var inst_55070__$1 = tmp55151;
var inst_55071__$1 = tmp55152;
var inst_55072__$1 = tmp55153;
var inst_55073__$1 = inst_55086;
var state_55130__$1 = (function (){var statearr_55157 = state_55130;
(statearr_55157[(20)] = inst_55070__$1);

(statearr_55157[(9)] = inst_55071__$1);

(statearr_55157[(22)] = inst_55085);

(statearr_55157[(21)] = inst_55072__$1);

(statearr_55157[(12)] = inst_55073__$1);

return statearr_55157;
})();
var statearr_55158_55229 = state_55130__$1;
(statearr_55158_55229[(2)] = null);

(statearr_55158_55229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (40))){
var inst_55098 = (state_55130[(23)]);
var inst_55102 = done.call(null,null);
var inst_55103 = cljs.core.async.untap_STAR_.call(null,m,inst_55098);
var state_55130__$1 = (function (){var statearr_55159 = state_55130;
(statearr_55159[(24)] = inst_55102);

return statearr_55159;
})();
var statearr_55160_55230 = state_55130__$1;
(statearr_55160_55230[(2)] = inst_55103);

(statearr_55160_55230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (33))){
var inst_55089 = (state_55130[(25)]);
var inst_55091 = cljs.core.chunked_seq_QMARK_.call(null,inst_55089);
var state_55130__$1 = state_55130;
if(inst_55091){
var statearr_55161_55231 = state_55130__$1;
(statearr_55161_55231[(1)] = (36));

} else {
var statearr_55162_55232 = state_55130__$1;
(statearr_55162_55232[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (13))){
var inst_55019 = (state_55130[(26)]);
var inst_55022 = cljs.core.async.close_BANG_.call(null,inst_55019);
var state_55130__$1 = state_55130;
var statearr_55163_55233 = state_55130__$1;
(statearr_55163_55233[(2)] = inst_55022);

(statearr_55163_55233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (22))){
var inst_55042 = (state_55130[(8)]);
var inst_55045 = cljs.core.async.close_BANG_.call(null,inst_55042);
var state_55130__$1 = state_55130;
var statearr_55164_55234 = state_55130__$1;
(statearr_55164_55234[(2)] = inst_55045);

(statearr_55164_55234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (36))){
var inst_55089 = (state_55130[(25)]);
var inst_55093 = cljs.core.chunk_first.call(null,inst_55089);
var inst_55094 = cljs.core.chunk_rest.call(null,inst_55089);
var inst_55095 = cljs.core.count.call(null,inst_55093);
var inst_55070 = inst_55094;
var inst_55071 = inst_55093;
var inst_55072 = inst_55095;
var inst_55073 = (0);
var state_55130__$1 = (function (){var statearr_55165 = state_55130;
(statearr_55165[(20)] = inst_55070);

(statearr_55165[(9)] = inst_55071);

(statearr_55165[(21)] = inst_55072);

(statearr_55165[(12)] = inst_55073);

return statearr_55165;
})();
var statearr_55166_55235 = state_55130__$1;
(statearr_55166_55235[(2)] = null);

(statearr_55166_55235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (41))){
var inst_55089 = (state_55130[(25)]);
var inst_55105 = (state_55130[(2)]);
var inst_55106 = cljs.core.next.call(null,inst_55089);
var inst_55070 = inst_55106;
var inst_55071 = null;
var inst_55072 = (0);
var inst_55073 = (0);
var state_55130__$1 = (function (){var statearr_55167 = state_55130;
(statearr_55167[(20)] = inst_55070);

(statearr_55167[(9)] = inst_55071);

(statearr_55167[(21)] = inst_55072);

(statearr_55167[(12)] = inst_55073);

(statearr_55167[(27)] = inst_55105);

return statearr_55167;
})();
var statearr_55168_55236 = state_55130__$1;
(statearr_55168_55236[(2)] = null);

(statearr_55168_55236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (43))){
var state_55130__$1 = state_55130;
var statearr_55169_55237 = state_55130__$1;
(statearr_55169_55237[(2)] = null);

(statearr_55169_55237[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (29))){
var inst_55114 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55170_55238 = state_55130__$1;
(statearr_55170_55238[(2)] = inst_55114);

(statearr_55170_55238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (44))){
var inst_55123 = (state_55130[(2)]);
var state_55130__$1 = (function (){var statearr_55171 = state_55130;
(statearr_55171[(28)] = inst_55123);

return statearr_55171;
})();
var statearr_55172_55239 = state_55130__$1;
(statearr_55172_55239[(2)] = null);

(statearr_55172_55239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (6))){
var inst_55062 = (state_55130[(29)]);
var inst_55061 = cljs.core.deref.call(null,cs);
var inst_55062__$1 = cljs.core.keys.call(null,inst_55061);
var inst_55063 = cljs.core.count.call(null,inst_55062__$1);
var inst_55064 = cljs.core.reset_BANG_.call(null,dctr,inst_55063);
var inst_55069 = cljs.core.seq.call(null,inst_55062__$1);
var inst_55070 = inst_55069;
var inst_55071 = null;
var inst_55072 = (0);
var inst_55073 = (0);
var state_55130__$1 = (function (){var statearr_55173 = state_55130;
(statearr_55173[(20)] = inst_55070);

(statearr_55173[(9)] = inst_55071);

(statearr_55173[(30)] = inst_55064);

(statearr_55173[(21)] = inst_55072);

(statearr_55173[(12)] = inst_55073);

(statearr_55173[(29)] = inst_55062__$1);

return statearr_55173;
})();
var statearr_55174_55240 = state_55130__$1;
(statearr_55174_55240[(2)] = null);

(statearr_55174_55240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (28))){
var inst_55070 = (state_55130[(20)]);
var inst_55089 = (state_55130[(25)]);
var inst_55089__$1 = cljs.core.seq.call(null,inst_55070);
var state_55130__$1 = (function (){var statearr_55175 = state_55130;
(statearr_55175[(25)] = inst_55089__$1);

return statearr_55175;
})();
if(inst_55089__$1){
var statearr_55176_55241 = state_55130__$1;
(statearr_55176_55241[(1)] = (33));

} else {
var statearr_55177_55242 = state_55130__$1;
(statearr_55177_55242[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (25))){
var inst_55072 = (state_55130[(21)]);
var inst_55073 = (state_55130[(12)]);
var inst_55075 = (inst_55073 < inst_55072);
var inst_55076 = inst_55075;
var state_55130__$1 = state_55130;
if(cljs.core.truth_(inst_55076)){
var statearr_55178_55243 = state_55130__$1;
(statearr_55178_55243[(1)] = (27));

} else {
var statearr_55179_55244 = state_55130__$1;
(statearr_55179_55244[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (34))){
var state_55130__$1 = state_55130;
var statearr_55180_55245 = state_55130__$1;
(statearr_55180_55245[(2)] = null);

(statearr_55180_55245[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (17))){
var state_55130__$1 = state_55130;
var statearr_55181_55246 = state_55130__$1;
(statearr_55181_55246[(2)] = null);

(statearr_55181_55246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (3))){
var inst_55128 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55130__$1,inst_55128);
} else {
if((state_val_55131 === (12))){
var inst_55057 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55182_55247 = state_55130__$1;
(statearr_55182_55247[(2)] = inst_55057);

(statearr_55182_55247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (2))){
var state_55130__$1 = state_55130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55130__$1,(4),ch);
} else {
if((state_val_55131 === (23))){
var state_55130__$1 = state_55130;
var statearr_55183_55248 = state_55130__$1;
(statearr_55183_55248[(2)] = null);

(statearr_55183_55248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (35))){
var inst_55112 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55184_55249 = state_55130__$1;
(statearr_55184_55249[(2)] = inst_55112);

(statearr_55184_55249[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (19))){
var inst_55029 = (state_55130[(7)]);
var inst_55033 = cljs.core.chunk_first.call(null,inst_55029);
var inst_55034 = cljs.core.chunk_rest.call(null,inst_55029);
var inst_55035 = cljs.core.count.call(null,inst_55033);
var inst_55007 = inst_55034;
var inst_55008 = inst_55033;
var inst_55009 = inst_55035;
var inst_55010 = (0);
var state_55130__$1 = (function (){var statearr_55185 = state_55130;
(statearr_55185[(13)] = inst_55009);

(statearr_55185[(14)] = inst_55010);

(statearr_55185[(16)] = inst_55008);

(statearr_55185[(17)] = inst_55007);

return statearr_55185;
})();
var statearr_55186_55250 = state_55130__$1;
(statearr_55186_55250[(2)] = null);

(statearr_55186_55250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (11))){
var inst_55029 = (state_55130[(7)]);
var inst_55007 = (state_55130[(17)]);
var inst_55029__$1 = cljs.core.seq.call(null,inst_55007);
var state_55130__$1 = (function (){var statearr_55187 = state_55130;
(statearr_55187[(7)] = inst_55029__$1);

return statearr_55187;
})();
if(inst_55029__$1){
var statearr_55188_55251 = state_55130__$1;
(statearr_55188_55251[(1)] = (16));

} else {
var statearr_55189_55252 = state_55130__$1;
(statearr_55189_55252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (9))){
var inst_55059 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55190_55253 = state_55130__$1;
(statearr_55190_55253[(2)] = inst_55059);

(statearr_55190_55253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (5))){
var inst_55005 = cljs.core.deref.call(null,cs);
var inst_55006 = cljs.core.seq.call(null,inst_55005);
var inst_55007 = inst_55006;
var inst_55008 = null;
var inst_55009 = (0);
var inst_55010 = (0);
var state_55130__$1 = (function (){var statearr_55191 = state_55130;
(statearr_55191[(13)] = inst_55009);

(statearr_55191[(14)] = inst_55010);

(statearr_55191[(16)] = inst_55008);

(statearr_55191[(17)] = inst_55007);

return statearr_55191;
})();
var statearr_55192_55254 = state_55130__$1;
(statearr_55192_55254[(2)] = null);

(statearr_55192_55254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (14))){
var state_55130__$1 = state_55130;
var statearr_55193_55255 = state_55130__$1;
(statearr_55193_55255[(2)] = null);

(statearr_55193_55255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (45))){
var inst_55120 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55194_55256 = state_55130__$1;
(statearr_55194_55256[(2)] = inst_55120);

(statearr_55194_55256[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (26))){
var inst_55062 = (state_55130[(29)]);
var inst_55116 = (state_55130[(2)]);
var inst_55117 = cljs.core.seq.call(null,inst_55062);
var state_55130__$1 = (function (){var statearr_55195 = state_55130;
(statearr_55195[(31)] = inst_55116);

return statearr_55195;
})();
if(inst_55117){
var statearr_55196_55257 = state_55130__$1;
(statearr_55196_55257[(1)] = (42));

} else {
var statearr_55197_55258 = state_55130__$1;
(statearr_55197_55258[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (16))){
var inst_55029 = (state_55130[(7)]);
var inst_55031 = cljs.core.chunked_seq_QMARK_.call(null,inst_55029);
var state_55130__$1 = state_55130;
if(inst_55031){
var statearr_55198_55259 = state_55130__$1;
(statearr_55198_55259[(1)] = (19));

} else {
var statearr_55199_55260 = state_55130__$1;
(statearr_55199_55260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (38))){
var inst_55109 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55200_55261 = state_55130__$1;
(statearr_55200_55261[(2)] = inst_55109);

(statearr_55200_55261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (30))){
var state_55130__$1 = state_55130;
var statearr_55201_55262 = state_55130__$1;
(statearr_55201_55262[(2)] = null);

(statearr_55201_55262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (10))){
var inst_55010 = (state_55130[(14)]);
var inst_55008 = (state_55130[(16)]);
var inst_55018 = cljs.core._nth.call(null,inst_55008,inst_55010);
var inst_55019 = cljs.core.nth.call(null,inst_55018,(0),null);
var inst_55020 = cljs.core.nth.call(null,inst_55018,(1),null);
var state_55130__$1 = (function (){var statearr_55202 = state_55130;
(statearr_55202[(26)] = inst_55019);

return statearr_55202;
})();
if(cljs.core.truth_(inst_55020)){
var statearr_55203_55263 = state_55130__$1;
(statearr_55203_55263[(1)] = (13));

} else {
var statearr_55204_55264 = state_55130__$1;
(statearr_55204_55264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (18))){
var inst_55055 = (state_55130[(2)]);
var state_55130__$1 = state_55130;
var statearr_55205_55265 = state_55130__$1;
(statearr_55205_55265[(2)] = inst_55055);

(statearr_55205_55265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (42))){
var state_55130__$1 = state_55130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55130__$1,(45),dchan);
} else {
if((state_val_55131 === (37))){
var inst_55098 = (state_55130[(23)]);
var inst_54998 = (state_55130[(11)]);
var inst_55089 = (state_55130[(25)]);
var inst_55098__$1 = cljs.core.first.call(null,inst_55089);
var inst_55099 = cljs.core.async.put_BANG_.call(null,inst_55098__$1,inst_54998,done);
var state_55130__$1 = (function (){var statearr_55206 = state_55130;
(statearr_55206[(23)] = inst_55098__$1);

return statearr_55206;
})();
if(cljs.core.truth_(inst_55099)){
var statearr_55207_55266 = state_55130__$1;
(statearr_55207_55266[(1)] = (39));

} else {
var statearr_55208_55267 = state_55130__$1;
(statearr_55208_55267[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55131 === (8))){
var inst_55009 = (state_55130[(13)]);
var inst_55010 = (state_55130[(14)]);
var inst_55012 = (inst_55010 < inst_55009);
var inst_55013 = inst_55012;
var state_55130__$1 = state_55130;
if(cljs.core.truth_(inst_55013)){
var statearr_55209_55268 = state_55130__$1;
(statearr_55209_55268[(1)] = (10));

} else {
var statearr_55210_55269 = state_55130__$1;
(statearr_55210_55269[(1)] = (11));

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
});})(c__22787__auto___55215,cs,m,dchan,dctr,done))
;
return ((function (switch__22764__auto__,c__22787__auto___55215,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22765__auto__ = null;
var cljs$core$async$mult_$_state_machine__22765__auto____0 = (function (){
var statearr_55211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55211[(0)] = cljs$core$async$mult_$_state_machine__22765__auto__);

(statearr_55211[(1)] = (1));

return statearr_55211;
});
var cljs$core$async$mult_$_state_machine__22765__auto____1 = (function (state_55130){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_55130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e55212){if((e55212 instanceof Object)){
var ex__22768__auto__ = e55212;
var statearr_55213_55270 = state_55130;
(statearr_55213_55270[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55271 = state_55130;
state_55130 = G__55271;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22765__auto__ = function(state_55130){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22765__auto____1.call(this,state_55130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22765__auto____0;
cljs$core$async$mult_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22765__auto____1;
return cljs$core$async$mult_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___55215,cs,m,dchan,dctr,done))
})();
var state__22789__auto__ = (function (){var statearr_55214 = f__22788__auto__.call(null);
(statearr_55214[(6)] = c__22787__auto___55215);

return statearr_55214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___55215,cs,m,dchan,dctr,done))
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
var G__55273 = arguments.length;
switch (G__55273) {
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
var len__4730__auto___55285 = arguments.length;
var i__4731__auto___55286 = (0);
while(true){
if((i__4731__auto___55286 < len__4730__auto___55285)){
args__4736__auto__.push((arguments[i__4731__auto___55286]));

var G__55287 = (i__4731__auto___55286 + (1));
i__4731__auto___55286 = G__55287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55279){
var map__55280 = p__55279;
var map__55280__$1 = (((((!((map__55280 == null))))?(((((map__55280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55280):map__55280);
var opts = map__55280__$1;
var statearr_55282_55288 = state;
(statearr_55282_55288[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__55280,map__55280__$1,opts){
return (function (val){
var statearr_55283_55289 = state;
(statearr_55283_55289[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__55280,map__55280__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_55284_55290 = state;
(statearr_55284_55290[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55275){
var G__55276 = cljs.core.first.call(null,seq55275);
var seq55275__$1 = cljs.core.next.call(null,seq55275);
var G__55277 = cljs.core.first.call(null,seq55275__$1);
var seq55275__$2 = cljs.core.next.call(null,seq55275__$1);
var G__55278 = cljs.core.first.call(null,seq55275__$2);
var seq55275__$3 = cljs.core.next.call(null,seq55275__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55276,G__55277,G__55278,seq55275__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55291 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55292){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55292 = meta55292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55293,meta55292__$1){
var self__ = this;
var _55293__$1 = this;
return (new cljs.core.async.t_cljs$core$async55291(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55292__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55293){
var self__ = this;
var _55293__$1 = this;
return self__.meta55292;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55291.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async55291.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55292","meta55292",880970656,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55291";

cljs.core.async.t_cljs$core$async55291.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async55291");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55291.
 */
cljs.core.async.__GT_t_cljs$core$async55291 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async55291(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55292){
return (new cljs.core.async.t_cljs$core$async55291(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55292));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async55291(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22787__auto___55455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___55455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___55455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_55395){
var state_val_55396 = (state_55395[(1)]);
if((state_val_55396 === (7))){
var inst_55310 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
var statearr_55397_55456 = state_55395__$1;
(statearr_55397_55456[(2)] = inst_55310);

(statearr_55397_55456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (20))){
var inst_55322 = (state_55395[(7)]);
var state_55395__$1 = state_55395;
var statearr_55398_55457 = state_55395__$1;
(statearr_55398_55457[(2)] = inst_55322);

(statearr_55398_55457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (27))){
var state_55395__$1 = state_55395;
var statearr_55399_55458 = state_55395__$1;
(statearr_55399_55458[(2)] = null);

(statearr_55399_55458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (1))){
var inst_55297 = (state_55395[(8)]);
var inst_55297__$1 = calc_state.call(null);
var inst_55299 = (inst_55297__$1 == null);
var inst_55300 = cljs.core.not.call(null,inst_55299);
var state_55395__$1 = (function (){var statearr_55400 = state_55395;
(statearr_55400[(8)] = inst_55297__$1);

return statearr_55400;
})();
if(inst_55300){
var statearr_55401_55459 = state_55395__$1;
(statearr_55401_55459[(1)] = (2));

} else {
var statearr_55402_55460 = state_55395__$1;
(statearr_55402_55460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (24))){
var inst_55346 = (state_55395[(9)]);
var inst_55355 = (state_55395[(10)]);
var inst_55369 = (state_55395[(11)]);
var inst_55369__$1 = inst_55346.call(null,inst_55355);
var state_55395__$1 = (function (){var statearr_55403 = state_55395;
(statearr_55403[(11)] = inst_55369__$1);

return statearr_55403;
})();
if(cljs.core.truth_(inst_55369__$1)){
var statearr_55404_55461 = state_55395__$1;
(statearr_55404_55461[(1)] = (29));

} else {
var statearr_55405_55462 = state_55395__$1;
(statearr_55405_55462[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (4))){
var inst_55313 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
if(cljs.core.truth_(inst_55313)){
var statearr_55406_55463 = state_55395__$1;
(statearr_55406_55463[(1)] = (8));

} else {
var statearr_55407_55464 = state_55395__$1;
(statearr_55407_55464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (15))){
var inst_55340 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
if(cljs.core.truth_(inst_55340)){
var statearr_55408_55465 = state_55395__$1;
(statearr_55408_55465[(1)] = (19));

} else {
var statearr_55409_55466 = state_55395__$1;
(statearr_55409_55466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (21))){
var inst_55345 = (state_55395[(12)]);
var inst_55345__$1 = (state_55395[(2)]);
var inst_55346 = cljs.core.get.call(null,inst_55345__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55347 = cljs.core.get.call(null,inst_55345__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55348 = cljs.core.get.call(null,inst_55345__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55395__$1 = (function (){var statearr_55410 = state_55395;
(statearr_55410[(12)] = inst_55345__$1);

(statearr_55410[(9)] = inst_55346);

(statearr_55410[(13)] = inst_55347);

return statearr_55410;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_55395__$1,(22),inst_55348);
} else {
if((state_val_55396 === (31))){
var inst_55377 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
if(cljs.core.truth_(inst_55377)){
var statearr_55411_55467 = state_55395__$1;
(statearr_55411_55467[(1)] = (32));

} else {
var statearr_55412_55468 = state_55395__$1;
(statearr_55412_55468[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (32))){
var inst_55354 = (state_55395[(14)]);
var state_55395__$1 = state_55395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55395__$1,(35),out,inst_55354);
} else {
if((state_val_55396 === (33))){
var inst_55345 = (state_55395[(12)]);
var inst_55322 = inst_55345;
var state_55395__$1 = (function (){var statearr_55413 = state_55395;
(statearr_55413[(7)] = inst_55322);

return statearr_55413;
})();
var statearr_55414_55469 = state_55395__$1;
(statearr_55414_55469[(2)] = null);

(statearr_55414_55469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (13))){
var inst_55322 = (state_55395[(7)]);
var inst_55329 = inst_55322.cljs$lang$protocol_mask$partition0$;
var inst_55330 = (inst_55329 & (64));
var inst_55331 = inst_55322.cljs$core$ISeq$;
var inst_55332 = (cljs.core.PROTOCOL_SENTINEL === inst_55331);
var inst_55333 = ((inst_55330) || (inst_55332));
var state_55395__$1 = state_55395;
if(cljs.core.truth_(inst_55333)){
var statearr_55415_55470 = state_55395__$1;
(statearr_55415_55470[(1)] = (16));

} else {
var statearr_55416_55471 = state_55395__$1;
(statearr_55416_55471[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (22))){
var inst_55354 = (state_55395[(14)]);
var inst_55355 = (state_55395[(10)]);
var inst_55353 = (state_55395[(2)]);
var inst_55354__$1 = cljs.core.nth.call(null,inst_55353,(0),null);
var inst_55355__$1 = cljs.core.nth.call(null,inst_55353,(1),null);
var inst_55356 = (inst_55354__$1 == null);
var inst_55357 = cljs.core._EQ_.call(null,inst_55355__$1,change);
var inst_55358 = ((inst_55356) || (inst_55357));
var state_55395__$1 = (function (){var statearr_55417 = state_55395;
(statearr_55417[(14)] = inst_55354__$1);

(statearr_55417[(10)] = inst_55355__$1);

return statearr_55417;
})();
if(cljs.core.truth_(inst_55358)){
var statearr_55418_55472 = state_55395__$1;
(statearr_55418_55472[(1)] = (23));

} else {
var statearr_55419_55473 = state_55395__$1;
(statearr_55419_55473[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (36))){
var inst_55345 = (state_55395[(12)]);
var inst_55322 = inst_55345;
var state_55395__$1 = (function (){var statearr_55420 = state_55395;
(statearr_55420[(7)] = inst_55322);

return statearr_55420;
})();
var statearr_55421_55474 = state_55395__$1;
(statearr_55421_55474[(2)] = null);

(statearr_55421_55474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (29))){
var inst_55369 = (state_55395[(11)]);
var state_55395__$1 = state_55395;
var statearr_55422_55475 = state_55395__$1;
(statearr_55422_55475[(2)] = inst_55369);

(statearr_55422_55475[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (6))){
var state_55395__$1 = state_55395;
var statearr_55423_55476 = state_55395__$1;
(statearr_55423_55476[(2)] = false);

(statearr_55423_55476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (28))){
var inst_55365 = (state_55395[(2)]);
var inst_55366 = calc_state.call(null);
var inst_55322 = inst_55366;
var state_55395__$1 = (function (){var statearr_55424 = state_55395;
(statearr_55424[(7)] = inst_55322);

(statearr_55424[(15)] = inst_55365);

return statearr_55424;
})();
var statearr_55425_55477 = state_55395__$1;
(statearr_55425_55477[(2)] = null);

(statearr_55425_55477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (25))){
var inst_55391 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
var statearr_55426_55478 = state_55395__$1;
(statearr_55426_55478[(2)] = inst_55391);

(statearr_55426_55478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (34))){
var inst_55389 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
var statearr_55427_55479 = state_55395__$1;
(statearr_55427_55479[(2)] = inst_55389);

(statearr_55427_55479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (17))){
var state_55395__$1 = state_55395;
var statearr_55428_55480 = state_55395__$1;
(statearr_55428_55480[(2)] = false);

(statearr_55428_55480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (3))){
var state_55395__$1 = state_55395;
var statearr_55429_55481 = state_55395__$1;
(statearr_55429_55481[(2)] = false);

(statearr_55429_55481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (12))){
var inst_55393 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55395__$1,inst_55393);
} else {
if((state_val_55396 === (2))){
var inst_55297 = (state_55395[(8)]);
var inst_55302 = inst_55297.cljs$lang$protocol_mask$partition0$;
var inst_55303 = (inst_55302 & (64));
var inst_55304 = inst_55297.cljs$core$ISeq$;
var inst_55305 = (cljs.core.PROTOCOL_SENTINEL === inst_55304);
var inst_55306 = ((inst_55303) || (inst_55305));
var state_55395__$1 = state_55395;
if(cljs.core.truth_(inst_55306)){
var statearr_55430_55482 = state_55395__$1;
(statearr_55430_55482[(1)] = (5));

} else {
var statearr_55431_55483 = state_55395__$1;
(statearr_55431_55483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (23))){
var inst_55354 = (state_55395[(14)]);
var inst_55360 = (inst_55354 == null);
var state_55395__$1 = state_55395;
if(cljs.core.truth_(inst_55360)){
var statearr_55432_55484 = state_55395__$1;
(statearr_55432_55484[(1)] = (26));

} else {
var statearr_55433_55485 = state_55395__$1;
(statearr_55433_55485[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (35))){
var inst_55380 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
if(cljs.core.truth_(inst_55380)){
var statearr_55434_55486 = state_55395__$1;
(statearr_55434_55486[(1)] = (36));

} else {
var statearr_55435_55487 = state_55395__$1;
(statearr_55435_55487[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (19))){
var inst_55322 = (state_55395[(7)]);
var inst_55342 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55322);
var state_55395__$1 = state_55395;
var statearr_55436_55488 = state_55395__$1;
(statearr_55436_55488[(2)] = inst_55342);

(statearr_55436_55488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (11))){
var inst_55322 = (state_55395[(7)]);
var inst_55326 = (inst_55322 == null);
var inst_55327 = cljs.core.not.call(null,inst_55326);
var state_55395__$1 = state_55395;
if(inst_55327){
var statearr_55437_55489 = state_55395__$1;
(statearr_55437_55489[(1)] = (13));

} else {
var statearr_55438_55490 = state_55395__$1;
(statearr_55438_55490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (9))){
var inst_55297 = (state_55395[(8)]);
var state_55395__$1 = state_55395;
var statearr_55439_55491 = state_55395__$1;
(statearr_55439_55491[(2)] = inst_55297);

(statearr_55439_55491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (5))){
var state_55395__$1 = state_55395;
var statearr_55440_55492 = state_55395__$1;
(statearr_55440_55492[(2)] = true);

(statearr_55440_55492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (14))){
var state_55395__$1 = state_55395;
var statearr_55441_55493 = state_55395__$1;
(statearr_55441_55493[(2)] = false);

(statearr_55441_55493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (26))){
var inst_55355 = (state_55395[(10)]);
var inst_55362 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_55355);
var state_55395__$1 = state_55395;
var statearr_55442_55494 = state_55395__$1;
(statearr_55442_55494[(2)] = inst_55362);

(statearr_55442_55494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (16))){
var state_55395__$1 = state_55395;
var statearr_55443_55495 = state_55395__$1;
(statearr_55443_55495[(2)] = true);

(statearr_55443_55495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (38))){
var inst_55385 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
var statearr_55444_55496 = state_55395__$1;
(statearr_55444_55496[(2)] = inst_55385);

(statearr_55444_55496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (30))){
var inst_55346 = (state_55395[(9)]);
var inst_55347 = (state_55395[(13)]);
var inst_55355 = (state_55395[(10)]);
var inst_55372 = cljs.core.empty_QMARK_.call(null,inst_55346);
var inst_55373 = inst_55347.call(null,inst_55355);
var inst_55374 = cljs.core.not.call(null,inst_55373);
var inst_55375 = ((inst_55372) && (inst_55374));
var state_55395__$1 = state_55395;
var statearr_55445_55497 = state_55395__$1;
(statearr_55445_55497[(2)] = inst_55375);

(statearr_55445_55497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (10))){
var inst_55297 = (state_55395[(8)]);
var inst_55318 = (state_55395[(2)]);
var inst_55319 = cljs.core.get.call(null,inst_55318,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55320 = cljs.core.get.call(null,inst_55318,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55321 = cljs.core.get.call(null,inst_55318,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55322 = inst_55297;
var state_55395__$1 = (function (){var statearr_55446 = state_55395;
(statearr_55446[(16)] = inst_55319);

(statearr_55446[(17)] = inst_55320);

(statearr_55446[(7)] = inst_55322);

(statearr_55446[(18)] = inst_55321);

return statearr_55446;
})();
var statearr_55447_55498 = state_55395__$1;
(statearr_55447_55498[(2)] = null);

(statearr_55447_55498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (18))){
var inst_55337 = (state_55395[(2)]);
var state_55395__$1 = state_55395;
var statearr_55448_55499 = state_55395__$1;
(statearr_55448_55499[(2)] = inst_55337);

(statearr_55448_55499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (37))){
var state_55395__$1 = state_55395;
var statearr_55449_55500 = state_55395__$1;
(statearr_55449_55500[(2)] = null);

(statearr_55449_55500[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55396 === (8))){
var inst_55297 = (state_55395[(8)]);
var inst_55315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55297);
var state_55395__$1 = state_55395;
var statearr_55450_55501 = state_55395__$1;
(statearr_55450_55501[(2)] = inst_55315);

(statearr_55450_55501[(1)] = (10));


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
});})(c__22787__auto___55455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22764__auto__,c__22787__auto___55455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22765__auto__ = null;
var cljs$core$async$mix_$_state_machine__22765__auto____0 = (function (){
var statearr_55451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55451[(0)] = cljs$core$async$mix_$_state_machine__22765__auto__);

(statearr_55451[(1)] = (1));

return statearr_55451;
});
var cljs$core$async$mix_$_state_machine__22765__auto____1 = (function (state_55395){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_55395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e55452){if((e55452 instanceof Object)){
var ex__22768__auto__ = e55452;
var statearr_55453_55502 = state_55395;
(statearr_55453_55502[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55503 = state_55395;
state_55395 = G__55503;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22765__auto__ = function(state_55395){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22765__auto____1.call(this,state_55395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22765__auto____0;
cljs$core$async$mix_$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22765__auto____1;
return cljs$core$async$mix_$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___55455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22789__auto__ = (function (){var statearr_55454 = f__22788__auto__.call(null);
(statearr_55454[(6)] = c__22787__auto___55455);

return statearr_55454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___55455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__55505 = arguments.length;
switch (G__55505) {
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
var G__55509 = arguments.length;
switch (G__55509) {
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
return (function (p1__55507_SHARP_){
if(cljs.core.truth_(p1__55507_SHARP_.call(null,topic))){
return p1__55507_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__55507_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55510 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55511){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55511 = meta55511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_55512,meta55511__$1){
var self__ = this;
var _55512__$1 = this;
return (new cljs.core.async.t_cljs$core$async55510(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55511__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_55512){
var self__ = this;
var _55512__$1 = this;
return self__.meta55511;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55510.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55511","meta55511",-574870001,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55510";

cljs.core.async.t_cljs$core$async55510.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async55510");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55510.
 */
cljs.core.async.__GT_t_cljs$core$async55510 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async55510(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55511){
return (new cljs.core.async.t_cljs$core$async55510(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55511));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async55510(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22787__auto___55630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___55630,mults,ensure_mult,p){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___55630,mults,ensure_mult,p){
return (function (state_55584){
var state_val_55585 = (state_55584[(1)]);
if((state_val_55585 === (7))){
var inst_55580 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
var statearr_55586_55631 = state_55584__$1;
(statearr_55586_55631[(2)] = inst_55580);

(statearr_55586_55631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (20))){
var state_55584__$1 = state_55584;
var statearr_55587_55632 = state_55584__$1;
(statearr_55587_55632[(2)] = null);

(statearr_55587_55632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (1))){
var state_55584__$1 = state_55584;
var statearr_55588_55633 = state_55584__$1;
(statearr_55588_55633[(2)] = null);

(statearr_55588_55633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (24))){
var inst_55563 = (state_55584[(7)]);
var inst_55572 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_55563);
var state_55584__$1 = state_55584;
var statearr_55589_55634 = state_55584__$1;
(statearr_55589_55634[(2)] = inst_55572);

(statearr_55589_55634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (4))){
var inst_55515 = (state_55584[(8)]);
var inst_55515__$1 = (state_55584[(2)]);
var inst_55516 = (inst_55515__$1 == null);
var state_55584__$1 = (function (){var statearr_55590 = state_55584;
(statearr_55590[(8)] = inst_55515__$1);

return statearr_55590;
})();
if(cljs.core.truth_(inst_55516)){
var statearr_55591_55635 = state_55584__$1;
(statearr_55591_55635[(1)] = (5));

} else {
var statearr_55592_55636 = state_55584__$1;
(statearr_55592_55636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (15))){
var inst_55557 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
var statearr_55593_55637 = state_55584__$1;
(statearr_55593_55637[(2)] = inst_55557);

(statearr_55593_55637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (21))){
var inst_55577 = (state_55584[(2)]);
var state_55584__$1 = (function (){var statearr_55594 = state_55584;
(statearr_55594[(9)] = inst_55577);

return statearr_55594;
})();
var statearr_55595_55638 = state_55584__$1;
(statearr_55595_55638[(2)] = null);

(statearr_55595_55638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (13))){
var inst_55539 = (state_55584[(10)]);
var inst_55541 = cljs.core.chunked_seq_QMARK_.call(null,inst_55539);
var state_55584__$1 = state_55584;
if(inst_55541){
var statearr_55596_55639 = state_55584__$1;
(statearr_55596_55639[(1)] = (16));

} else {
var statearr_55597_55640 = state_55584__$1;
(statearr_55597_55640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (22))){
var inst_55569 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
if(cljs.core.truth_(inst_55569)){
var statearr_55598_55641 = state_55584__$1;
(statearr_55598_55641[(1)] = (23));

} else {
var statearr_55599_55642 = state_55584__$1;
(statearr_55599_55642[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (6))){
var inst_55563 = (state_55584[(7)]);
var inst_55515 = (state_55584[(8)]);
var inst_55565 = (state_55584[(11)]);
var inst_55563__$1 = topic_fn.call(null,inst_55515);
var inst_55564 = cljs.core.deref.call(null,mults);
var inst_55565__$1 = cljs.core.get.call(null,inst_55564,inst_55563__$1);
var state_55584__$1 = (function (){var statearr_55600 = state_55584;
(statearr_55600[(7)] = inst_55563__$1);

(statearr_55600[(11)] = inst_55565__$1);

return statearr_55600;
})();
if(cljs.core.truth_(inst_55565__$1)){
var statearr_55601_55643 = state_55584__$1;
(statearr_55601_55643[(1)] = (19));

} else {
var statearr_55602_55644 = state_55584__$1;
(statearr_55602_55644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (25))){
var inst_55574 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
var statearr_55603_55645 = state_55584__$1;
(statearr_55603_55645[(2)] = inst_55574);

(statearr_55603_55645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (17))){
var inst_55539 = (state_55584[(10)]);
var inst_55548 = cljs.core.first.call(null,inst_55539);
var inst_55549 = cljs.core.async.muxch_STAR_.call(null,inst_55548);
var inst_55550 = cljs.core.async.close_BANG_.call(null,inst_55549);
var inst_55551 = cljs.core.next.call(null,inst_55539);
var inst_55525 = inst_55551;
var inst_55526 = null;
var inst_55527 = (0);
var inst_55528 = (0);
var state_55584__$1 = (function (){var statearr_55604 = state_55584;
(statearr_55604[(12)] = inst_55526);

(statearr_55604[(13)] = inst_55527);

(statearr_55604[(14)] = inst_55550);

(statearr_55604[(15)] = inst_55528);

(statearr_55604[(16)] = inst_55525);

return statearr_55604;
})();
var statearr_55605_55646 = state_55584__$1;
(statearr_55605_55646[(2)] = null);

(statearr_55605_55646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (3))){
var inst_55582 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55584__$1,inst_55582);
} else {
if((state_val_55585 === (12))){
var inst_55559 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
var statearr_55606_55647 = state_55584__$1;
(statearr_55606_55647[(2)] = inst_55559);

(statearr_55606_55647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (2))){
var state_55584__$1 = state_55584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55584__$1,(4),ch);
} else {
if((state_val_55585 === (23))){
var state_55584__$1 = state_55584;
var statearr_55607_55648 = state_55584__$1;
(statearr_55607_55648[(2)] = null);

(statearr_55607_55648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (19))){
var inst_55515 = (state_55584[(8)]);
var inst_55565 = (state_55584[(11)]);
var inst_55567 = cljs.core.async.muxch_STAR_.call(null,inst_55565);
var state_55584__$1 = state_55584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55584__$1,(22),inst_55567,inst_55515);
} else {
if((state_val_55585 === (11))){
var inst_55539 = (state_55584[(10)]);
var inst_55525 = (state_55584[(16)]);
var inst_55539__$1 = cljs.core.seq.call(null,inst_55525);
var state_55584__$1 = (function (){var statearr_55608 = state_55584;
(statearr_55608[(10)] = inst_55539__$1);

return statearr_55608;
})();
if(inst_55539__$1){
var statearr_55609_55649 = state_55584__$1;
(statearr_55609_55649[(1)] = (13));

} else {
var statearr_55610_55650 = state_55584__$1;
(statearr_55610_55650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (9))){
var inst_55561 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
var statearr_55611_55651 = state_55584__$1;
(statearr_55611_55651[(2)] = inst_55561);

(statearr_55611_55651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (5))){
var inst_55522 = cljs.core.deref.call(null,mults);
var inst_55523 = cljs.core.vals.call(null,inst_55522);
var inst_55524 = cljs.core.seq.call(null,inst_55523);
var inst_55525 = inst_55524;
var inst_55526 = null;
var inst_55527 = (0);
var inst_55528 = (0);
var state_55584__$1 = (function (){var statearr_55612 = state_55584;
(statearr_55612[(12)] = inst_55526);

(statearr_55612[(13)] = inst_55527);

(statearr_55612[(15)] = inst_55528);

(statearr_55612[(16)] = inst_55525);

return statearr_55612;
})();
var statearr_55613_55652 = state_55584__$1;
(statearr_55613_55652[(2)] = null);

(statearr_55613_55652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (14))){
var state_55584__$1 = state_55584;
var statearr_55617_55653 = state_55584__$1;
(statearr_55617_55653[(2)] = null);

(statearr_55617_55653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (16))){
var inst_55539 = (state_55584[(10)]);
var inst_55543 = cljs.core.chunk_first.call(null,inst_55539);
var inst_55544 = cljs.core.chunk_rest.call(null,inst_55539);
var inst_55545 = cljs.core.count.call(null,inst_55543);
var inst_55525 = inst_55544;
var inst_55526 = inst_55543;
var inst_55527 = inst_55545;
var inst_55528 = (0);
var state_55584__$1 = (function (){var statearr_55618 = state_55584;
(statearr_55618[(12)] = inst_55526);

(statearr_55618[(13)] = inst_55527);

(statearr_55618[(15)] = inst_55528);

(statearr_55618[(16)] = inst_55525);

return statearr_55618;
})();
var statearr_55619_55654 = state_55584__$1;
(statearr_55619_55654[(2)] = null);

(statearr_55619_55654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (10))){
var inst_55526 = (state_55584[(12)]);
var inst_55527 = (state_55584[(13)]);
var inst_55528 = (state_55584[(15)]);
var inst_55525 = (state_55584[(16)]);
var inst_55533 = cljs.core._nth.call(null,inst_55526,inst_55528);
var inst_55534 = cljs.core.async.muxch_STAR_.call(null,inst_55533);
var inst_55535 = cljs.core.async.close_BANG_.call(null,inst_55534);
var inst_55536 = (inst_55528 + (1));
var tmp55614 = inst_55526;
var tmp55615 = inst_55527;
var tmp55616 = inst_55525;
var inst_55525__$1 = tmp55616;
var inst_55526__$1 = tmp55614;
var inst_55527__$1 = tmp55615;
var inst_55528__$1 = inst_55536;
var state_55584__$1 = (function (){var statearr_55620 = state_55584;
(statearr_55620[(17)] = inst_55535);

(statearr_55620[(12)] = inst_55526__$1);

(statearr_55620[(13)] = inst_55527__$1);

(statearr_55620[(15)] = inst_55528__$1);

(statearr_55620[(16)] = inst_55525__$1);

return statearr_55620;
})();
var statearr_55621_55655 = state_55584__$1;
(statearr_55621_55655[(2)] = null);

(statearr_55621_55655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (18))){
var inst_55554 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
var statearr_55622_55656 = state_55584__$1;
(statearr_55622_55656[(2)] = inst_55554);

(statearr_55622_55656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (8))){
var inst_55527 = (state_55584[(13)]);
var inst_55528 = (state_55584[(15)]);
var inst_55530 = (inst_55528 < inst_55527);
var inst_55531 = inst_55530;
var state_55584__$1 = state_55584;
if(cljs.core.truth_(inst_55531)){
var statearr_55623_55657 = state_55584__$1;
(statearr_55623_55657[(1)] = (10));

} else {
var statearr_55624_55658 = state_55584__$1;
(statearr_55624_55658[(1)] = (11));

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
});})(c__22787__auto___55630,mults,ensure_mult,p))
;
return ((function (switch__22764__auto__,c__22787__auto___55630,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_55625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55625[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_55625[(1)] = (1));

return statearr_55625;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_55584){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_55584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e55626){if((e55626 instanceof Object)){
var ex__22768__auto__ = e55626;
var statearr_55627_55659 = state_55584;
(statearr_55627_55659[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55660 = state_55584;
state_55584 = G__55660;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_55584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_55584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___55630,mults,ensure_mult,p))
})();
var state__22789__auto__ = (function (){var statearr_55628 = f__22788__auto__.call(null);
(statearr_55628[(6)] = c__22787__auto___55630);

return statearr_55628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___55630,mults,ensure_mult,p))
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
var G__55662 = arguments.length;
switch (G__55662) {
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
var G__55665 = arguments.length;
switch (G__55665) {
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
var G__55668 = arguments.length;
switch (G__55668) {
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
var c__22787__auto___55735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___55735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___55735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55707){
var state_val_55708 = (state_55707[(1)]);
if((state_val_55708 === (7))){
var state_55707__$1 = state_55707;
var statearr_55709_55736 = state_55707__$1;
(statearr_55709_55736[(2)] = null);

(statearr_55709_55736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (1))){
var state_55707__$1 = state_55707;
var statearr_55710_55737 = state_55707__$1;
(statearr_55710_55737[(2)] = null);

(statearr_55710_55737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (4))){
var inst_55671 = (state_55707[(7)]);
var inst_55673 = (inst_55671 < cnt);
var state_55707__$1 = state_55707;
if(cljs.core.truth_(inst_55673)){
var statearr_55711_55738 = state_55707__$1;
(statearr_55711_55738[(1)] = (6));

} else {
var statearr_55712_55739 = state_55707__$1;
(statearr_55712_55739[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (15))){
var inst_55703 = (state_55707[(2)]);
var state_55707__$1 = state_55707;
var statearr_55713_55740 = state_55707__$1;
(statearr_55713_55740[(2)] = inst_55703);

(statearr_55713_55740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (13))){
var inst_55696 = cljs.core.async.close_BANG_.call(null,out);
var state_55707__$1 = state_55707;
var statearr_55714_55741 = state_55707__$1;
(statearr_55714_55741[(2)] = inst_55696);

(statearr_55714_55741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (6))){
var state_55707__$1 = state_55707;
var statearr_55715_55742 = state_55707__$1;
(statearr_55715_55742[(2)] = null);

(statearr_55715_55742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (3))){
var inst_55705 = (state_55707[(2)]);
var state_55707__$1 = state_55707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55707__$1,inst_55705);
} else {
if((state_val_55708 === (12))){
var inst_55693 = (state_55707[(8)]);
var inst_55693__$1 = (state_55707[(2)]);
var inst_55694 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_55693__$1);
var state_55707__$1 = (function (){var statearr_55716 = state_55707;
(statearr_55716[(8)] = inst_55693__$1);

return statearr_55716;
})();
if(cljs.core.truth_(inst_55694)){
var statearr_55717_55743 = state_55707__$1;
(statearr_55717_55743[(1)] = (13));

} else {
var statearr_55718_55744 = state_55707__$1;
(statearr_55718_55744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (2))){
var inst_55670 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_55671 = (0);
var state_55707__$1 = (function (){var statearr_55719 = state_55707;
(statearr_55719[(9)] = inst_55670);

(statearr_55719[(7)] = inst_55671);

return statearr_55719;
})();
var statearr_55720_55745 = state_55707__$1;
(statearr_55720_55745[(2)] = null);

(statearr_55720_55745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (11))){
var inst_55671 = (state_55707[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55707,(10),Object,null,(9));
var inst_55680 = chs__$1.call(null,inst_55671);
var inst_55681 = done.call(null,inst_55671);
var inst_55682 = cljs.core.async.take_BANG_.call(null,inst_55680,inst_55681);
var state_55707__$1 = state_55707;
var statearr_55721_55746 = state_55707__$1;
(statearr_55721_55746[(2)] = inst_55682);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55707__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (9))){
var inst_55671 = (state_55707[(7)]);
var inst_55684 = (state_55707[(2)]);
var inst_55685 = (inst_55671 + (1));
var inst_55671__$1 = inst_55685;
var state_55707__$1 = (function (){var statearr_55722 = state_55707;
(statearr_55722[(7)] = inst_55671__$1);

(statearr_55722[(10)] = inst_55684);

return statearr_55722;
})();
var statearr_55723_55747 = state_55707__$1;
(statearr_55723_55747[(2)] = null);

(statearr_55723_55747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (5))){
var inst_55691 = (state_55707[(2)]);
var state_55707__$1 = (function (){var statearr_55724 = state_55707;
(statearr_55724[(11)] = inst_55691);

return statearr_55724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55707__$1,(12),dchan);
} else {
if((state_val_55708 === (14))){
var inst_55693 = (state_55707[(8)]);
var inst_55698 = cljs.core.apply.call(null,f,inst_55693);
var state_55707__$1 = state_55707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55707__$1,(16),out,inst_55698);
} else {
if((state_val_55708 === (16))){
var inst_55700 = (state_55707[(2)]);
var state_55707__$1 = (function (){var statearr_55725 = state_55707;
(statearr_55725[(12)] = inst_55700);

return statearr_55725;
})();
var statearr_55726_55748 = state_55707__$1;
(statearr_55726_55748[(2)] = null);

(statearr_55726_55748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (10))){
var inst_55675 = (state_55707[(2)]);
var inst_55676 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_55707__$1 = (function (){var statearr_55727 = state_55707;
(statearr_55727[(13)] = inst_55675);

return statearr_55727;
})();
var statearr_55728_55749 = state_55707__$1;
(statearr_55728_55749[(2)] = inst_55676);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55707__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (8))){
var inst_55689 = (state_55707[(2)]);
var state_55707__$1 = state_55707;
var statearr_55729_55750 = state_55707__$1;
(statearr_55729_55750[(2)] = inst_55689);

(statearr_55729_55750[(1)] = (5));


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
});})(c__22787__auto___55735,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22764__auto__,c__22787__auto___55735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_55730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55730[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_55730[(1)] = (1));

return statearr_55730;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_55707){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_55707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e55731){if((e55731 instanceof Object)){
var ex__22768__auto__ = e55731;
var statearr_55732_55751 = state_55707;
(statearr_55732_55751[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55752 = state_55707;
state_55707 = G__55752;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_55707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_55707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___55735,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22789__auto__ = (function (){var statearr_55733 = f__22788__auto__.call(null);
(statearr_55733[(6)] = c__22787__auto___55735);

return statearr_55733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___55735,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__55755 = arguments.length;
switch (G__55755) {
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
var c__22787__auto___55809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___55809,out){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___55809,out){
return (function (state_55787){
var state_val_55788 = (state_55787[(1)]);
if((state_val_55788 === (7))){
var inst_55766 = (state_55787[(7)]);
var inst_55767 = (state_55787[(8)]);
var inst_55766__$1 = (state_55787[(2)]);
var inst_55767__$1 = cljs.core.nth.call(null,inst_55766__$1,(0),null);
var inst_55768 = cljs.core.nth.call(null,inst_55766__$1,(1),null);
var inst_55769 = (inst_55767__$1 == null);
var state_55787__$1 = (function (){var statearr_55789 = state_55787;
(statearr_55789[(9)] = inst_55768);

(statearr_55789[(7)] = inst_55766__$1);

(statearr_55789[(8)] = inst_55767__$1);

return statearr_55789;
})();
if(cljs.core.truth_(inst_55769)){
var statearr_55790_55810 = state_55787__$1;
(statearr_55790_55810[(1)] = (8));

} else {
var statearr_55791_55811 = state_55787__$1;
(statearr_55791_55811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55788 === (1))){
var inst_55756 = cljs.core.vec.call(null,chs);
var inst_55757 = inst_55756;
var state_55787__$1 = (function (){var statearr_55792 = state_55787;
(statearr_55792[(10)] = inst_55757);

return statearr_55792;
})();
var statearr_55793_55812 = state_55787__$1;
(statearr_55793_55812[(2)] = null);

(statearr_55793_55812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55788 === (4))){
var inst_55757 = (state_55787[(10)]);
var state_55787__$1 = state_55787;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55787__$1,(7),inst_55757);
} else {
if((state_val_55788 === (6))){
var inst_55783 = (state_55787[(2)]);
var state_55787__$1 = state_55787;
var statearr_55794_55813 = state_55787__$1;
(statearr_55794_55813[(2)] = inst_55783);

(statearr_55794_55813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55788 === (3))){
var inst_55785 = (state_55787[(2)]);
var state_55787__$1 = state_55787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55787__$1,inst_55785);
} else {
if((state_val_55788 === (2))){
var inst_55757 = (state_55787[(10)]);
var inst_55759 = cljs.core.count.call(null,inst_55757);
var inst_55760 = (inst_55759 > (0));
var state_55787__$1 = state_55787;
if(cljs.core.truth_(inst_55760)){
var statearr_55796_55814 = state_55787__$1;
(statearr_55796_55814[(1)] = (4));

} else {
var statearr_55797_55815 = state_55787__$1;
(statearr_55797_55815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55788 === (11))){
var inst_55757 = (state_55787[(10)]);
var inst_55776 = (state_55787[(2)]);
var tmp55795 = inst_55757;
var inst_55757__$1 = tmp55795;
var state_55787__$1 = (function (){var statearr_55798 = state_55787;
(statearr_55798[(10)] = inst_55757__$1);

(statearr_55798[(11)] = inst_55776);

return statearr_55798;
})();
var statearr_55799_55816 = state_55787__$1;
(statearr_55799_55816[(2)] = null);

(statearr_55799_55816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55788 === (9))){
var inst_55767 = (state_55787[(8)]);
var state_55787__$1 = state_55787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55787__$1,(11),out,inst_55767);
} else {
if((state_val_55788 === (5))){
var inst_55781 = cljs.core.async.close_BANG_.call(null,out);
var state_55787__$1 = state_55787;
var statearr_55800_55817 = state_55787__$1;
(statearr_55800_55817[(2)] = inst_55781);

(statearr_55800_55817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55788 === (10))){
var inst_55779 = (state_55787[(2)]);
var state_55787__$1 = state_55787;
var statearr_55801_55818 = state_55787__$1;
(statearr_55801_55818[(2)] = inst_55779);

(statearr_55801_55818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55788 === (8))){
var inst_55768 = (state_55787[(9)]);
var inst_55766 = (state_55787[(7)]);
var inst_55757 = (state_55787[(10)]);
var inst_55767 = (state_55787[(8)]);
var inst_55771 = (function (){var cs = inst_55757;
var vec__55762 = inst_55766;
var v = inst_55767;
var c = inst_55768;
return ((function (cs,vec__55762,v,c,inst_55768,inst_55766,inst_55757,inst_55767,state_val_55788,c__22787__auto___55809,out){
return (function (p1__55753_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__55753_SHARP_);
});
;})(cs,vec__55762,v,c,inst_55768,inst_55766,inst_55757,inst_55767,state_val_55788,c__22787__auto___55809,out))
})();
var inst_55772 = cljs.core.filterv.call(null,inst_55771,inst_55757);
var inst_55757__$1 = inst_55772;
var state_55787__$1 = (function (){var statearr_55802 = state_55787;
(statearr_55802[(10)] = inst_55757__$1);

return statearr_55802;
})();
var statearr_55803_55819 = state_55787__$1;
(statearr_55803_55819[(2)] = null);

(statearr_55803_55819[(1)] = (2));


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
});})(c__22787__auto___55809,out))
;
return ((function (switch__22764__auto__,c__22787__auto___55809,out){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_55804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55804[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_55804[(1)] = (1));

return statearr_55804;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_55787){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_55787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e55805){if((e55805 instanceof Object)){
var ex__22768__auto__ = e55805;
var statearr_55806_55820 = state_55787;
(statearr_55806_55820[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55821 = state_55787;
state_55787 = G__55821;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_55787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_55787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___55809,out))
})();
var state__22789__auto__ = (function (){var statearr_55807 = f__22788__auto__.call(null);
(statearr_55807[(6)] = c__22787__auto___55809);

return statearr_55807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___55809,out))
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
var G__55823 = arguments.length;
switch (G__55823) {
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
var c__22787__auto___55868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___55868,out){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___55868,out){
return (function (state_55847){
var state_val_55848 = (state_55847[(1)]);
if((state_val_55848 === (7))){
var inst_55829 = (state_55847[(7)]);
var inst_55829__$1 = (state_55847[(2)]);
var inst_55830 = (inst_55829__$1 == null);
var inst_55831 = cljs.core.not.call(null,inst_55830);
var state_55847__$1 = (function (){var statearr_55849 = state_55847;
(statearr_55849[(7)] = inst_55829__$1);

return statearr_55849;
})();
if(inst_55831){
var statearr_55850_55869 = state_55847__$1;
(statearr_55850_55869[(1)] = (8));

} else {
var statearr_55851_55870 = state_55847__$1;
(statearr_55851_55870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55848 === (1))){
var inst_55824 = (0);
var state_55847__$1 = (function (){var statearr_55852 = state_55847;
(statearr_55852[(8)] = inst_55824);

return statearr_55852;
})();
var statearr_55853_55871 = state_55847__$1;
(statearr_55853_55871[(2)] = null);

(statearr_55853_55871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55848 === (4))){
var state_55847__$1 = state_55847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55847__$1,(7),ch);
} else {
if((state_val_55848 === (6))){
var inst_55842 = (state_55847[(2)]);
var state_55847__$1 = state_55847;
var statearr_55854_55872 = state_55847__$1;
(statearr_55854_55872[(2)] = inst_55842);

(statearr_55854_55872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55848 === (3))){
var inst_55844 = (state_55847[(2)]);
var inst_55845 = cljs.core.async.close_BANG_.call(null,out);
var state_55847__$1 = (function (){var statearr_55855 = state_55847;
(statearr_55855[(9)] = inst_55844);

return statearr_55855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55847__$1,inst_55845);
} else {
if((state_val_55848 === (2))){
var inst_55824 = (state_55847[(8)]);
var inst_55826 = (inst_55824 < n);
var state_55847__$1 = state_55847;
if(cljs.core.truth_(inst_55826)){
var statearr_55856_55873 = state_55847__$1;
(statearr_55856_55873[(1)] = (4));

} else {
var statearr_55857_55874 = state_55847__$1;
(statearr_55857_55874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55848 === (11))){
var inst_55824 = (state_55847[(8)]);
var inst_55834 = (state_55847[(2)]);
var inst_55835 = (inst_55824 + (1));
var inst_55824__$1 = inst_55835;
var state_55847__$1 = (function (){var statearr_55858 = state_55847;
(statearr_55858[(8)] = inst_55824__$1);

(statearr_55858[(10)] = inst_55834);

return statearr_55858;
})();
var statearr_55859_55875 = state_55847__$1;
(statearr_55859_55875[(2)] = null);

(statearr_55859_55875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55848 === (9))){
var state_55847__$1 = state_55847;
var statearr_55860_55876 = state_55847__$1;
(statearr_55860_55876[(2)] = null);

(statearr_55860_55876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55848 === (5))){
var state_55847__$1 = state_55847;
var statearr_55861_55877 = state_55847__$1;
(statearr_55861_55877[(2)] = null);

(statearr_55861_55877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55848 === (10))){
var inst_55839 = (state_55847[(2)]);
var state_55847__$1 = state_55847;
var statearr_55862_55878 = state_55847__$1;
(statearr_55862_55878[(2)] = inst_55839);

(statearr_55862_55878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55848 === (8))){
var inst_55829 = (state_55847[(7)]);
var state_55847__$1 = state_55847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55847__$1,(11),out,inst_55829);
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
});})(c__22787__auto___55868,out))
;
return ((function (switch__22764__auto__,c__22787__auto___55868,out){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_55863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55863[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_55863[(1)] = (1));

return statearr_55863;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_55847){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_55847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e55864){if((e55864 instanceof Object)){
var ex__22768__auto__ = e55864;
var statearr_55865_55879 = state_55847;
(statearr_55865_55879[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55880 = state_55847;
state_55847 = G__55880;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_55847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_55847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___55868,out))
})();
var state__22789__auto__ = (function (){var statearr_55866 = f__22788__auto__.call(null);
(statearr_55866[(6)] = c__22787__auto___55868);

return statearr_55866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___55868,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55882 = (function (f,ch,meta55883){
this.f = f;
this.ch = ch;
this.meta55883 = meta55883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55884,meta55883__$1){
var self__ = this;
var _55884__$1 = this;
return (new cljs.core.async.t_cljs$core$async55882(self__.f,self__.ch,meta55883__$1));
});

cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55884){
var self__ = this;
var _55884__$1 = this;
return self__.meta55883;
});

cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55885 = (function (f,ch,meta55883,_,fn1,meta55886){
this.f = f;
this.ch = ch;
this.meta55883 = meta55883;
this._ = _;
this.fn1 = fn1;
this.meta55886 = meta55886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_55887,meta55886__$1){
var self__ = this;
var _55887__$1 = this;
return (new cljs.core.async.t_cljs$core$async55885(self__.f,self__.ch,self__.meta55883,self__._,self__.fn1,meta55886__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async55885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_55887){
var self__ = this;
var _55887__$1 = this;
return self__.meta55886;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__55881_SHARP_){
return f1.call(null,(((p1__55881_SHARP_ == null))?null:self__.f.call(null,p1__55881_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async55885.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55883","meta55883",-327356160,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55882","cljs.core.async/t_cljs$core$async55882",1036948620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55886","meta55886",-202991345,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55885";

cljs.core.async.t_cljs$core$async55885.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async55885");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55885.
 */
cljs.core.async.__GT_t_cljs$core$async55885 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55885(f__$1,ch__$1,meta55883__$1,___$2,fn1__$1,meta55886){
return (new cljs.core.async.t_cljs$core$async55885(f__$1,ch__$1,meta55883__$1,___$2,fn1__$1,meta55886));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async55885(self__.f,self__.ch,self__.meta55883,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async55882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55883","meta55883",-327356160,null)], null);
});

cljs.core.async.t_cljs$core$async55882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55882";

cljs.core.async.t_cljs$core$async55882.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async55882");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55882.
 */
cljs.core.async.__GT_t_cljs$core$async55882 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55882(f__$1,ch__$1,meta55883){
return (new cljs.core.async.t_cljs$core$async55882(f__$1,ch__$1,meta55883));
});

}

return (new cljs.core.async.t_cljs$core$async55882(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55888 = (function (f,ch,meta55889){
this.f = f;
this.ch = ch;
this.meta55889 = meta55889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55890,meta55889__$1){
var self__ = this;
var _55890__$1 = this;
return (new cljs.core.async.t_cljs$core$async55888(self__.f,self__.ch,meta55889__$1));
});

cljs.core.async.t_cljs$core$async55888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55890){
var self__ = this;
var _55890__$1 = this;
return self__.meta55889;
});

cljs.core.async.t_cljs$core$async55888.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55888.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55888.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async55888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55889","meta55889",-1548128654,null)], null);
});

cljs.core.async.t_cljs$core$async55888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55888";

cljs.core.async.t_cljs$core$async55888.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async55888");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55888.
 */
cljs.core.async.__GT_t_cljs$core$async55888 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55888(f__$1,ch__$1,meta55889){
return (new cljs.core.async.t_cljs$core$async55888(f__$1,ch__$1,meta55889));
});

}

return (new cljs.core.async.t_cljs$core$async55888(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55891 = (function (p,ch,meta55892){
this.p = p;
this.ch = ch;
this.meta55892 = meta55892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55893,meta55892__$1){
var self__ = this;
var _55893__$1 = this;
return (new cljs.core.async.t_cljs$core$async55891(self__.p,self__.ch,meta55892__$1));
});

cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55893){
var self__ = this;
var _55893__$1 = this;
return self__.meta55892;
});

cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async55891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55892","meta55892",-259149483,null)], null);
});

cljs.core.async.t_cljs$core$async55891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55891";

cljs.core.async.t_cljs$core$async55891.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async55891");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55891.
 */
cljs.core.async.__GT_t_cljs$core$async55891 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55891(p__$1,ch__$1,meta55892){
return (new cljs.core.async.t_cljs$core$async55891(p__$1,ch__$1,meta55892));
});

}

return (new cljs.core.async.t_cljs$core$async55891(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55895 = arguments.length;
switch (G__55895) {
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
var c__22787__auto___55935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___55935,out){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___55935,out){
return (function (state_55916){
var state_val_55917 = (state_55916[(1)]);
if((state_val_55917 === (7))){
var inst_55912 = (state_55916[(2)]);
var state_55916__$1 = state_55916;
var statearr_55918_55936 = state_55916__$1;
(statearr_55918_55936[(2)] = inst_55912);

(statearr_55918_55936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55917 === (1))){
var state_55916__$1 = state_55916;
var statearr_55919_55937 = state_55916__$1;
(statearr_55919_55937[(2)] = null);

(statearr_55919_55937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55917 === (4))){
var inst_55898 = (state_55916[(7)]);
var inst_55898__$1 = (state_55916[(2)]);
var inst_55899 = (inst_55898__$1 == null);
var state_55916__$1 = (function (){var statearr_55920 = state_55916;
(statearr_55920[(7)] = inst_55898__$1);

return statearr_55920;
})();
if(cljs.core.truth_(inst_55899)){
var statearr_55921_55938 = state_55916__$1;
(statearr_55921_55938[(1)] = (5));

} else {
var statearr_55922_55939 = state_55916__$1;
(statearr_55922_55939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55917 === (6))){
var inst_55898 = (state_55916[(7)]);
var inst_55903 = p.call(null,inst_55898);
var state_55916__$1 = state_55916;
if(cljs.core.truth_(inst_55903)){
var statearr_55923_55940 = state_55916__$1;
(statearr_55923_55940[(1)] = (8));

} else {
var statearr_55924_55941 = state_55916__$1;
(statearr_55924_55941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55917 === (3))){
var inst_55914 = (state_55916[(2)]);
var state_55916__$1 = state_55916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55916__$1,inst_55914);
} else {
if((state_val_55917 === (2))){
var state_55916__$1 = state_55916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55916__$1,(4),ch);
} else {
if((state_val_55917 === (11))){
var inst_55906 = (state_55916[(2)]);
var state_55916__$1 = state_55916;
var statearr_55925_55942 = state_55916__$1;
(statearr_55925_55942[(2)] = inst_55906);

(statearr_55925_55942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55917 === (9))){
var state_55916__$1 = state_55916;
var statearr_55926_55943 = state_55916__$1;
(statearr_55926_55943[(2)] = null);

(statearr_55926_55943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55917 === (5))){
var inst_55901 = cljs.core.async.close_BANG_.call(null,out);
var state_55916__$1 = state_55916;
var statearr_55927_55944 = state_55916__$1;
(statearr_55927_55944[(2)] = inst_55901);

(statearr_55927_55944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55917 === (10))){
var inst_55909 = (state_55916[(2)]);
var state_55916__$1 = (function (){var statearr_55928 = state_55916;
(statearr_55928[(8)] = inst_55909);

return statearr_55928;
})();
var statearr_55929_55945 = state_55916__$1;
(statearr_55929_55945[(2)] = null);

(statearr_55929_55945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55917 === (8))){
var inst_55898 = (state_55916[(7)]);
var state_55916__$1 = state_55916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55916__$1,(11),out,inst_55898);
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
});})(c__22787__auto___55935,out))
;
return ((function (switch__22764__auto__,c__22787__auto___55935,out){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_55930 = [null,null,null,null,null,null,null,null,null];
(statearr_55930[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_55930[(1)] = (1));

return statearr_55930;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_55916){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_55916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e55931){if((e55931 instanceof Object)){
var ex__22768__auto__ = e55931;
var statearr_55932_55946 = state_55916;
(statearr_55932_55946[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55947 = state_55916;
state_55916 = G__55947;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_55916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_55916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___55935,out))
})();
var state__22789__auto__ = (function (){var statearr_55933 = f__22788__auto__.call(null);
(statearr_55933[(6)] = c__22787__auto___55935);

return statearr_55933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___55935,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55949 = arguments.length;
switch (G__55949) {
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
var c__22787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto__){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto__){
return (function (state_56012){
var state_val_56013 = (state_56012[(1)]);
if((state_val_56013 === (7))){
var inst_56008 = (state_56012[(2)]);
var state_56012__$1 = state_56012;
var statearr_56014_56052 = state_56012__$1;
(statearr_56014_56052[(2)] = inst_56008);

(statearr_56014_56052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (20))){
var inst_55978 = (state_56012[(7)]);
var inst_55989 = (state_56012[(2)]);
var inst_55990 = cljs.core.next.call(null,inst_55978);
var inst_55964 = inst_55990;
var inst_55965 = null;
var inst_55966 = (0);
var inst_55967 = (0);
var state_56012__$1 = (function (){var statearr_56015 = state_56012;
(statearr_56015[(8)] = inst_55966);

(statearr_56015[(9)] = inst_55965);

(statearr_56015[(10)] = inst_55964);

(statearr_56015[(11)] = inst_55989);

(statearr_56015[(12)] = inst_55967);

return statearr_56015;
})();
var statearr_56016_56053 = state_56012__$1;
(statearr_56016_56053[(2)] = null);

(statearr_56016_56053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (1))){
var state_56012__$1 = state_56012;
var statearr_56017_56054 = state_56012__$1;
(statearr_56017_56054[(2)] = null);

(statearr_56017_56054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (4))){
var inst_55953 = (state_56012[(13)]);
var inst_55953__$1 = (state_56012[(2)]);
var inst_55954 = (inst_55953__$1 == null);
var state_56012__$1 = (function (){var statearr_56018 = state_56012;
(statearr_56018[(13)] = inst_55953__$1);

return statearr_56018;
})();
if(cljs.core.truth_(inst_55954)){
var statearr_56019_56055 = state_56012__$1;
(statearr_56019_56055[(1)] = (5));

} else {
var statearr_56020_56056 = state_56012__$1;
(statearr_56020_56056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (15))){
var state_56012__$1 = state_56012;
var statearr_56024_56057 = state_56012__$1;
(statearr_56024_56057[(2)] = null);

(statearr_56024_56057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (21))){
var state_56012__$1 = state_56012;
var statearr_56025_56058 = state_56012__$1;
(statearr_56025_56058[(2)] = null);

(statearr_56025_56058[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (13))){
var inst_55966 = (state_56012[(8)]);
var inst_55965 = (state_56012[(9)]);
var inst_55964 = (state_56012[(10)]);
var inst_55967 = (state_56012[(12)]);
var inst_55974 = (state_56012[(2)]);
var inst_55975 = (inst_55967 + (1));
var tmp56021 = inst_55966;
var tmp56022 = inst_55965;
var tmp56023 = inst_55964;
var inst_55964__$1 = tmp56023;
var inst_55965__$1 = tmp56022;
var inst_55966__$1 = tmp56021;
var inst_55967__$1 = inst_55975;
var state_56012__$1 = (function (){var statearr_56026 = state_56012;
(statearr_56026[(8)] = inst_55966__$1);

(statearr_56026[(9)] = inst_55965__$1);

(statearr_56026[(14)] = inst_55974);

(statearr_56026[(10)] = inst_55964__$1);

(statearr_56026[(12)] = inst_55967__$1);

return statearr_56026;
})();
var statearr_56027_56059 = state_56012__$1;
(statearr_56027_56059[(2)] = null);

(statearr_56027_56059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (22))){
var state_56012__$1 = state_56012;
var statearr_56028_56060 = state_56012__$1;
(statearr_56028_56060[(2)] = null);

(statearr_56028_56060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (6))){
var inst_55953 = (state_56012[(13)]);
var inst_55962 = f.call(null,inst_55953);
var inst_55963 = cljs.core.seq.call(null,inst_55962);
var inst_55964 = inst_55963;
var inst_55965 = null;
var inst_55966 = (0);
var inst_55967 = (0);
var state_56012__$1 = (function (){var statearr_56029 = state_56012;
(statearr_56029[(8)] = inst_55966);

(statearr_56029[(9)] = inst_55965);

(statearr_56029[(10)] = inst_55964);

(statearr_56029[(12)] = inst_55967);

return statearr_56029;
})();
var statearr_56030_56061 = state_56012__$1;
(statearr_56030_56061[(2)] = null);

(statearr_56030_56061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (17))){
var inst_55978 = (state_56012[(7)]);
var inst_55982 = cljs.core.chunk_first.call(null,inst_55978);
var inst_55983 = cljs.core.chunk_rest.call(null,inst_55978);
var inst_55984 = cljs.core.count.call(null,inst_55982);
var inst_55964 = inst_55983;
var inst_55965 = inst_55982;
var inst_55966 = inst_55984;
var inst_55967 = (0);
var state_56012__$1 = (function (){var statearr_56031 = state_56012;
(statearr_56031[(8)] = inst_55966);

(statearr_56031[(9)] = inst_55965);

(statearr_56031[(10)] = inst_55964);

(statearr_56031[(12)] = inst_55967);

return statearr_56031;
})();
var statearr_56032_56062 = state_56012__$1;
(statearr_56032_56062[(2)] = null);

(statearr_56032_56062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (3))){
var inst_56010 = (state_56012[(2)]);
var state_56012__$1 = state_56012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56012__$1,inst_56010);
} else {
if((state_val_56013 === (12))){
var inst_55998 = (state_56012[(2)]);
var state_56012__$1 = state_56012;
var statearr_56033_56063 = state_56012__$1;
(statearr_56033_56063[(2)] = inst_55998);

(statearr_56033_56063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (2))){
var state_56012__$1 = state_56012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56012__$1,(4),in$);
} else {
if((state_val_56013 === (23))){
var inst_56006 = (state_56012[(2)]);
var state_56012__$1 = state_56012;
var statearr_56034_56064 = state_56012__$1;
(statearr_56034_56064[(2)] = inst_56006);

(statearr_56034_56064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (19))){
var inst_55993 = (state_56012[(2)]);
var state_56012__$1 = state_56012;
var statearr_56035_56065 = state_56012__$1;
(statearr_56035_56065[(2)] = inst_55993);

(statearr_56035_56065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (11))){
var inst_55964 = (state_56012[(10)]);
var inst_55978 = (state_56012[(7)]);
var inst_55978__$1 = cljs.core.seq.call(null,inst_55964);
var state_56012__$1 = (function (){var statearr_56036 = state_56012;
(statearr_56036[(7)] = inst_55978__$1);

return statearr_56036;
})();
if(inst_55978__$1){
var statearr_56037_56066 = state_56012__$1;
(statearr_56037_56066[(1)] = (14));

} else {
var statearr_56038_56067 = state_56012__$1;
(statearr_56038_56067[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (9))){
var inst_56000 = (state_56012[(2)]);
var inst_56001 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_56012__$1 = (function (){var statearr_56039 = state_56012;
(statearr_56039[(15)] = inst_56000);

return statearr_56039;
})();
if(cljs.core.truth_(inst_56001)){
var statearr_56040_56068 = state_56012__$1;
(statearr_56040_56068[(1)] = (21));

} else {
var statearr_56041_56069 = state_56012__$1;
(statearr_56041_56069[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (5))){
var inst_55956 = cljs.core.async.close_BANG_.call(null,out);
var state_56012__$1 = state_56012;
var statearr_56042_56070 = state_56012__$1;
(statearr_56042_56070[(2)] = inst_55956);

(statearr_56042_56070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (14))){
var inst_55978 = (state_56012[(7)]);
var inst_55980 = cljs.core.chunked_seq_QMARK_.call(null,inst_55978);
var state_56012__$1 = state_56012;
if(inst_55980){
var statearr_56043_56071 = state_56012__$1;
(statearr_56043_56071[(1)] = (17));

} else {
var statearr_56044_56072 = state_56012__$1;
(statearr_56044_56072[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (16))){
var inst_55996 = (state_56012[(2)]);
var state_56012__$1 = state_56012;
var statearr_56045_56073 = state_56012__$1;
(statearr_56045_56073[(2)] = inst_55996);

(statearr_56045_56073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56013 === (10))){
var inst_55965 = (state_56012[(9)]);
var inst_55967 = (state_56012[(12)]);
var inst_55972 = cljs.core._nth.call(null,inst_55965,inst_55967);
var state_56012__$1 = state_56012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56012__$1,(13),out,inst_55972);
} else {
if((state_val_56013 === (18))){
var inst_55978 = (state_56012[(7)]);
var inst_55987 = cljs.core.first.call(null,inst_55978);
var state_56012__$1 = state_56012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56012__$1,(20),out,inst_55987);
} else {
if((state_val_56013 === (8))){
var inst_55966 = (state_56012[(8)]);
var inst_55967 = (state_56012[(12)]);
var inst_55969 = (inst_55967 < inst_55966);
var inst_55970 = inst_55969;
var state_56012__$1 = state_56012;
if(cljs.core.truth_(inst_55970)){
var statearr_56046_56074 = state_56012__$1;
(statearr_56046_56074[(1)] = (10));

} else {
var statearr_56047_56075 = state_56012__$1;
(statearr_56047_56075[(1)] = (11));

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
});})(c__22787__auto__))
;
return ((function (switch__22764__auto__,c__22787__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22765__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22765__auto____0 = (function (){
var statearr_56048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56048[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22765__auto__);

(statearr_56048[(1)] = (1));

return statearr_56048;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22765__auto____1 = (function (state_56012){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_56012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e56049){if((e56049 instanceof Object)){
var ex__22768__auto__ = e56049;
var statearr_56050_56076 = state_56012;
(statearr_56050_56076[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56077 = state_56012;
state_56012 = G__56077;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22765__auto__ = function(state_56012){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22765__auto____1.call(this,state_56012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22765__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22765__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto__))
})();
var state__22789__auto__ = (function (){var statearr_56051 = f__22788__auto__.call(null);
(statearr_56051[(6)] = c__22787__auto__);

return statearr_56051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto__))
);

return c__22787__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__56079 = arguments.length;
switch (G__56079) {
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
var G__56082 = arguments.length;
switch (G__56082) {
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
var G__56085 = arguments.length;
switch (G__56085) {
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
var c__22787__auto___56132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___56132,out){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___56132,out){
return (function (state_56109){
var state_val_56110 = (state_56109[(1)]);
if((state_val_56110 === (7))){
var inst_56104 = (state_56109[(2)]);
var state_56109__$1 = state_56109;
var statearr_56111_56133 = state_56109__$1;
(statearr_56111_56133[(2)] = inst_56104);

(statearr_56111_56133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56110 === (1))){
var inst_56086 = null;
var state_56109__$1 = (function (){var statearr_56112 = state_56109;
(statearr_56112[(7)] = inst_56086);

return statearr_56112;
})();
var statearr_56113_56134 = state_56109__$1;
(statearr_56113_56134[(2)] = null);

(statearr_56113_56134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56110 === (4))){
var inst_56089 = (state_56109[(8)]);
var inst_56089__$1 = (state_56109[(2)]);
var inst_56090 = (inst_56089__$1 == null);
var inst_56091 = cljs.core.not.call(null,inst_56090);
var state_56109__$1 = (function (){var statearr_56114 = state_56109;
(statearr_56114[(8)] = inst_56089__$1);

return statearr_56114;
})();
if(inst_56091){
var statearr_56115_56135 = state_56109__$1;
(statearr_56115_56135[(1)] = (5));

} else {
var statearr_56116_56136 = state_56109__$1;
(statearr_56116_56136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56110 === (6))){
var state_56109__$1 = state_56109;
var statearr_56117_56137 = state_56109__$1;
(statearr_56117_56137[(2)] = null);

(statearr_56117_56137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56110 === (3))){
var inst_56106 = (state_56109[(2)]);
var inst_56107 = cljs.core.async.close_BANG_.call(null,out);
var state_56109__$1 = (function (){var statearr_56118 = state_56109;
(statearr_56118[(9)] = inst_56106);

return statearr_56118;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56109__$1,inst_56107);
} else {
if((state_val_56110 === (2))){
var state_56109__$1 = state_56109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56109__$1,(4),ch);
} else {
if((state_val_56110 === (11))){
var inst_56089 = (state_56109[(8)]);
var inst_56098 = (state_56109[(2)]);
var inst_56086 = inst_56089;
var state_56109__$1 = (function (){var statearr_56119 = state_56109;
(statearr_56119[(7)] = inst_56086);

(statearr_56119[(10)] = inst_56098);

return statearr_56119;
})();
var statearr_56120_56138 = state_56109__$1;
(statearr_56120_56138[(2)] = null);

(statearr_56120_56138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56110 === (9))){
var inst_56089 = (state_56109[(8)]);
var state_56109__$1 = state_56109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56109__$1,(11),out,inst_56089);
} else {
if((state_val_56110 === (5))){
var inst_56086 = (state_56109[(7)]);
var inst_56089 = (state_56109[(8)]);
var inst_56093 = cljs.core._EQ_.call(null,inst_56089,inst_56086);
var state_56109__$1 = state_56109;
if(inst_56093){
var statearr_56122_56139 = state_56109__$1;
(statearr_56122_56139[(1)] = (8));

} else {
var statearr_56123_56140 = state_56109__$1;
(statearr_56123_56140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56110 === (10))){
var inst_56101 = (state_56109[(2)]);
var state_56109__$1 = state_56109;
var statearr_56124_56141 = state_56109__$1;
(statearr_56124_56141[(2)] = inst_56101);

(statearr_56124_56141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56110 === (8))){
var inst_56086 = (state_56109[(7)]);
var tmp56121 = inst_56086;
var inst_56086__$1 = tmp56121;
var state_56109__$1 = (function (){var statearr_56125 = state_56109;
(statearr_56125[(7)] = inst_56086__$1);

return statearr_56125;
})();
var statearr_56126_56142 = state_56109__$1;
(statearr_56126_56142[(2)] = null);

(statearr_56126_56142[(1)] = (2));


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
});})(c__22787__auto___56132,out))
;
return ((function (switch__22764__auto__,c__22787__auto___56132,out){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_56127 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56127[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_56127[(1)] = (1));

return statearr_56127;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_56109){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_56109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e56128){if((e56128 instanceof Object)){
var ex__22768__auto__ = e56128;
var statearr_56129_56143 = state_56109;
(statearr_56129_56143[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56144 = state_56109;
state_56109 = G__56144;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_56109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_56109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___56132,out))
})();
var state__22789__auto__ = (function (){var statearr_56130 = f__22788__auto__.call(null);
(statearr_56130[(6)] = c__22787__auto___56132);

return statearr_56130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___56132,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__56146 = arguments.length;
switch (G__56146) {
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
var c__22787__auto___56212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___56212,out){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___56212,out){
return (function (state_56184){
var state_val_56185 = (state_56184[(1)]);
if((state_val_56185 === (7))){
var inst_56180 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
var statearr_56186_56213 = state_56184__$1;
(statearr_56186_56213[(2)] = inst_56180);

(statearr_56186_56213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (1))){
var inst_56147 = (new Array(n));
var inst_56148 = inst_56147;
var inst_56149 = (0);
var state_56184__$1 = (function (){var statearr_56187 = state_56184;
(statearr_56187[(7)] = inst_56149);

(statearr_56187[(8)] = inst_56148);

return statearr_56187;
})();
var statearr_56188_56214 = state_56184__$1;
(statearr_56188_56214[(2)] = null);

(statearr_56188_56214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (4))){
var inst_56152 = (state_56184[(9)]);
var inst_56152__$1 = (state_56184[(2)]);
var inst_56153 = (inst_56152__$1 == null);
var inst_56154 = cljs.core.not.call(null,inst_56153);
var state_56184__$1 = (function (){var statearr_56189 = state_56184;
(statearr_56189[(9)] = inst_56152__$1);

return statearr_56189;
})();
if(inst_56154){
var statearr_56190_56215 = state_56184__$1;
(statearr_56190_56215[(1)] = (5));

} else {
var statearr_56191_56216 = state_56184__$1;
(statearr_56191_56216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (15))){
var inst_56174 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
var statearr_56192_56217 = state_56184__$1;
(statearr_56192_56217[(2)] = inst_56174);

(statearr_56192_56217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (13))){
var state_56184__$1 = state_56184;
var statearr_56193_56218 = state_56184__$1;
(statearr_56193_56218[(2)] = null);

(statearr_56193_56218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (6))){
var inst_56149 = (state_56184[(7)]);
var inst_56170 = (inst_56149 > (0));
var state_56184__$1 = state_56184;
if(cljs.core.truth_(inst_56170)){
var statearr_56194_56219 = state_56184__$1;
(statearr_56194_56219[(1)] = (12));

} else {
var statearr_56195_56220 = state_56184__$1;
(statearr_56195_56220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (3))){
var inst_56182 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56184__$1,inst_56182);
} else {
if((state_val_56185 === (12))){
var inst_56148 = (state_56184[(8)]);
var inst_56172 = cljs.core.vec.call(null,inst_56148);
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56184__$1,(15),out,inst_56172);
} else {
if((state_val_56185 === (2))){
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56184__$1,(4),ch);
} else {
if((state_val_56185 === (11))){
var inst_56164 = (state_56184[(2)]);
var inst_56165 = (new Array(n));
var inst_56148 = inst_56165;
var inst_56149 = (0);
var state_56184__$1 = (function (){var statearr_56196 = state_56184;
(statearr_56196[(7)] = inst_56149);

(statearr_56196[(10)] = inst_56164);

(statearr_56196[(8)] = inst_56148);

return statearr_56196;
})();
var statearr_56197_56221 = state_56184__$1;
(statearr_56197_56221[(2)] = null);

(statearr_56197_56221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (9))){
var inst_56148 = (state_56184[(8)]);
var inst_56162 = cljs.core.vec.call(null,inst_56148);
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56184__$1,(11),out,inst_56162);
} else {
if((state_val_56185 === (5))){
var inst_56149 = (state_56184[(7)]);
var inst_56157 = (state_56184[(11)]);
var inst_56148 = (state_56184[(8)]);
var inst_56152 = (state_56184[(9)]);
var inst_56156 = (inst_56148[inst_56149] = inst_56152);
var inst_56157__$1 = (inst_56149 + (1));
var inst_56158 = (inst_56157__$1 < n);
var state_56184__$1 = (function (){var statearr_56198 = state_56184;
(statearr_56198[(12)] = inst_56156);

(statearr_56198[(11)] = inst_56157__$1);

return statearr_56198;
})();
if(cljs.core.truth_(inst_56158)){
var statearr_56199_56222 = state_56184__$1;
(statearr_56199_56222[(1)] = (8));

} else {
var statearr_56200_56223 = state_56184__$1;
(statearr_56200_56223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (14))){
var inst_56177 = (state_56184[(2)]);
var inst_56178 = cljs.core.async.close_BANG_.call(null,out);
var state_56184__$1 = (function (){var statearr_56202 = state_56184;
(statearr_56202[(13)] = inst_56177);

return statearr_56202;
})();
var statearr_56203_56224 = state_56184__$1;
(statearr_56203_56224[(2)] = inst_56178);

(statearr_56203_56224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (10))){
var inst_56168 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
var statearr_56204_56225 = state_56184__$1;
(statearr_56204_56225[(2)] = inst_56168);

(statearr_56204_56225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (8))){
var inst_56157 = (state_56184[(11)]);
var inst_56148 = (state_56184[(8)]);
var tmp56201 = inst_56148;
var inst_56148__$1 = tmp56201;
var inst_56149 = inst_56157;
var state_56184__$1 = (function (){var statearr_56205 = state_56184;
(statearr_56205[(7)] = inst_56149);

(statearr_56205[(8)] = inst_56148__$1);

return statearr_56205;
})();
var statearr_56206_56226 = state_56184__$1;
(statearr_56206_56226[(2)] = null);

(statearr_56206_56226[(1)] = (2));


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
});})(c__22787__auto___56212,out))
;
return ((function (switch__22764__auto__,c__22787__auto___56212,out){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_56207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56207[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_56207[(1)] = (1));

return statearr_56207;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_56184){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_56184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e56208){if((e56208 instanceof Object)){
var ex__22768__auto__ = e56208;
var statearr_56209_56227 = state_56184;
(statearr_56209_56227[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56228 = state_56184;
state_56184 = G__56228;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_56184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_56184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___56212,out))
})();
var state__22789__auto__ = (function (){var statearr_56210 = f__22788__auto__.call(null);
(statearr_56210[(6)] = c__22787__auto___56212);

return statearr_56210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___56212,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56230 = arguments.length;
switch (G__56230) {
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
var c__22787__auto___56300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22787__auto___56300,out){
return (function (){
var f__22788__auto__ = (function (){var switch__22764__auto__ = ((function (c__22787__auto___56300,out){
return (function (state_56272){
var state_val_56273 = (state_56272[(1)]);
if((state_val_56273 === (7))){
var inst_56268 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
var statearr_56274_56301 = state_56272__$1;
(statearr_56274_56301[(2)] = inst_56268);

(statearr_56274_56301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (1))){
var inst_56231 = [];
var inst_56232 = inst_56231;
var inst_56233 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56272__$1 = (function (){var statearr_56275 = state_56272;
(statearr_56275[(7)] = inst_56232);

(statearr_56275[(8)] = inst_56233);

return statearr_56275;
})();
var statearr_56276_56302 = state_56272__$1;
(statearr_56276_56302[(2)] = null);

(statearr_56276_56302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (4))){
var inst_56236 = (state_56272[(9)]);
var inst_56236__$1 = (state_56272[(2)]);
var inst_56237 = (inst_56236__$1 == null);
var inst_56238 = cljs.core.not.call(null,inst_56237);
var state_56272__$1 = (function (){var statearr_56277 = state_56272;
(statearr_56277[(9)] = inst_56236__$1);

return statearr_56277;
})();
if(inst_56238){
var statearr_56278_56303 = state_56272__$1;
(statearr_56278_56303[(1)] = (5));

} else {
var statearr_56279_56304 = state_56272__$1;
(statearr_56279_56304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (15))){
var inst_56262 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
var statearr_56280_56305 = state_56272__$1;
(statearr_56280_56305[(2)] = inst_56262);

(statearr_56280_56305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (13))){
var state_56272__$1 = state_56272;
var statearr_56281_56306 = state_56272__$1;
(statearr_56281_56306[(2)] = null);

(statearr_56281_56306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (6))){
var inst_56232 = (state_56272[(7)]);
var inst_56257 = inst_56232.length;
var inst_56258 = (inst_56257 > (0));
var state_56272__$1 = state_56272;
if(cljs.core.truth_(inst_56258)){
var statearr_56282_56307 = state_56272__$1;
(statearr_56282_56307[(1)] = (12));

} else {
var statearr_56283_56308 = state_56272__$1;
(statearr_56283_56308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (3))){
var inst_56270 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56272__$1,inst_56270);
} else {
if((state_val_56273 === (12))){
var inst_56232 = (state_56272[(7)]);
var inst_56260 = cljs.core.vec.call(null,inst_56232);
var state_56272__$1 = state_56272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56272__$1,(15),out,inst_56260);
} else {
if((state_val_56273 === (2))){
var state_56272__$1 = state_56272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56272__$1,(4),ch);
} else {
if((state_val_56273 === (11))){
var inst_56236 = (state_56272[(9)]);
var inst_56240 = (state_56272[(10)]);
var inst_56250 = (state_56272[(2)]);
var inst_56251 = [];
var inst_56252 = inst_56251.push(inst_56236);
var inst_56232 = inst_56251;
var inst_56233 = inst_56240;
var state_56272__$1 = (function (){var statearr_56284 = state_56272;
(statearr_56284[(7)] = inst_56232);

(statearr_56284[(8)] = inst_56233);

(statearr_56284[(11)] = inst_56250);

(statearr_56284[(12)] = inst_56252);

return statearr_56284;
})();
var statearr_56285_56309 = state_56272__$1;
(statearr_56285_56309[(2)] = null);

(statearr_56285_56309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (9))){
var inst_56232 = (state_56272[(7)]);
var inst_56248 = cljs.core.vec.call(null,inst_56232);
var state_56272__$1 = state_56272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56272__$1,(11),out,inst_56248);
} else {
if((state_val_56273 === (5))){
var inst_56236 = (state_56272[(9)]);
var inst_56233 = (state_56272[(8)]);
var inst_56240 = (state_56272[(10)]);
var inst_56240__$1 = f.call(null,inst_56236);
var inst_56241 = cljs.core._EQ_.call(null,inst_56240__$1,inst_56233);
var inst_56242 = cljs.core.keyword_identical_QMARK_.call(null,inst_56233,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_56243 = ((inst_56241) || (inst_56242));
var state_56272__$1 = (function (){var statearr_56286 = state_56272;
(statearr_56286[(10)] = inst_56240__$1);

return statearr_56286;
})();
if(cljs.core.truth_(inst_56243)){
var statearr_56287_56310 = state_56272__$1;
(statearr_56287_56310[(1)] = (8));

} else {
var statearr_56288_56311 = state_56272__$1;
(statearr_56288_56311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (14))){
var inst_56265 = (state_56272[(2)]);
var inst_56266 = cljs.core.async.close_BANG_.call(null,out);
var state_56272__$1 = (function (){var statearr_56290 = state_56272;
(statearr_56290[(13)] = inst_56265);

return statearr_56290;
})();
var statearr_56291_56312 = state_56272__$1;
(statearr_56291_56312[(2)] = inst_56266);

(statearr_56291_56312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (10))){
var inst_56255 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
var statearr_56292_56313 = state_56272__$1;
(statearr_56292_56313[(2)] = inst_56255);

(statearr_56292_56313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (8))){
var inst_56236 = (state_56272[(9)]);
var inst_56232 = (state_56272[(7)]);
var inst_56240 = (state_56272[(10)]);
var inst_56245 = inst_56232.push(inst_56236);
var tmp56289 = inst_56232;
var inst_56232__$1 = tmp56289;
var inst_56233 = inst_56240;
var state_56272__$1 = (function (){var statearr_56293 = state_56272;
(statearr_56293[(7)] = inst_56232__$1);

(statearr_56293[(14)] = inst_56245);

(statearr_56293[(8)] = inst_56233);

return statearr_56293;
})();
var statearr_56294_56314 = state_56272__$1;
(statearr_56294_56314[(2)] = null);

(statearr_56294_56314[(1)] = (2));


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
});})(c__22787__auto___56300,out))
;
return ((function (switch__22764__auto__,c__22787__auto___56300,out){
return (function() {
var cljs$core$async$state_machine__22765__auto__ = null;
var cljs$core$async$state_machine__22765__auto____0 = (function (){
var statearr_56295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56295[(0)] = cljs$core$async$state_machine__22765__auto__);

(statearr_56295[(1)] = (1));

return statearr_56295;
});
var cljs$core$async$state_machine__22765__auto____1 = (function (state_56272){
while(true){
var ret_value__22766__auto__ = (function (){try{while(true){
var result__22767__auto__ = switch__22764__auto__.call(null,state_56272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22767__auto__;
}
break;
}
}catch (e56296){if((e56296 instanceof Object)){
var ex__22768__auto__ = e56296;
var statearr_56297_56315 = state_56272;
(statearr_56297_56315[(5)] = ex__22768__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56316 = state_56272;
state_56272 = G__56316;
continue;
} else {
return ret_value__22766__auto__;
}
break;
}
});
cljs$core$async$state_machine__22765__auto__ = function(state_56272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22765__auto____1.call(this,state_56272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22765__auto____0;
cljs$core$async$state_machine__22765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22765__auto____1;
return cljs$core$async$state_machine__22765__auto__;
})()
;})(switch__22764__auto__,c__22787__auto___56300,out))
})();
var state__22789__auto__ = (function (){var statearr_56298 = f__22788__auto__.call(null);
(statearr_56298[(6)] = c__22787__auto___56300);

return statearr_56298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22789__auto__);
});})(c__22787__auto___56300,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1569211521801
