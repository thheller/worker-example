goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25402 = [];
var len__19677__auto___25414 = arguments.length;
var i__19678__auto___25415 = (0);
while(true){
if((i__19678__auto___25415 < len__19677__auto___25414)){
args25402.push((arguments[i__19678__auto___25415]));

var G__25417 = (i__19678__auto___25415 + (1));
i__19678__auto___25415 = G__25417;
continue;
} else {
}
break;
}

var G__25407 = args25402.length;
switch (G__25407) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25402.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25408 = (function (f,blockable,meta25409){
this.f = f;
this.blockable = blockable;
this.meta25409 = meta25409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25410,meta25409__$1){
var self__ = this;
var _25410__$1 = this;
return (new cljs.core.async.t_cljs$core$async25408(self__.f,self__.blockable,meta25409__$1));
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25410){
var self__ = this;
var _25410__$1 = this;
return self__.meta25409;
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25409","meta25409",-727963167,null)], null);
});

cljs.core.async.t_cljs$core$async25408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25408";

cljs.core.async.t_cljs$core$async25408.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async25408");
});

cljs.core.async.__GT_t_cljs$core$async25408 = (function cljs$core$async$__GT_t_cljs$core$async25408(f__$1,blockable__$1,meta25409){
return (new cljs.core.async.t_cljs$core$async25408(f__$1,blockable__$1,meta25409));
});

}

return (new cljs.core.async.t_cljs$core$async25408(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args25430 = [];
var len__19677__auto___25434 = arguments.length;
var i__19678__auto___25435 = (0);
while(true){
if((i__19678__auto___25435 < len__19677__auto___25434)){
args25430.push((arguments[i__19678__auto___25435]));

var G__25436 = (i__19678__auto___25435 + (1));
i__19678__auto___25435 = G__25436;
continue;
} else {
}
break;
}

var G__25433 = args25430.length;
switch (G__25433) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25430.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args25448 = [];
var len__19677__auto___25453 = arguments.length;
var i__19678__auto___25454 = (0);
while(true){
if((i__19678__auto___25454 < len__19677__auto___25453)){
args25448.push((arguments[i__19678__auto___25454]));

var G__25455 = (i__19678__auto___25454 + (1));
i__19678__auto___25454 = G__25455;
continue;
} else {
}
break;
}

var G__25450 = args25448.length;
switch (G__25450) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25448.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var args25461 = [];
var len__19677__auto___25466 = arguments.length;
var i__19678__auto___25467 = (0);
while(true){
if((i__19678__auto___25467 < len__19677__auto___25466)){
args25461.push((arguments[i__19678__auto___25467]));

var G__25468 = (i__19678__auto___25467 + (1));
i__19678__auto___25467 = G__25468;
continue;
} else {
}
break;
}

var G__25465 = args25461.length;
switch (G__25465) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25461.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25470 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25470) : fn1.call(null,val_25470));
} else {
cljs.core.async.impl.dispatch.run(((function (val_25470,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25470) : fn1.call(null,val_25470));
});})(val_25470,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25480 = [];
var len__19677__auto___25499 = arguments.length;
var i__19678__auto___25500 = (0);
while(true){
if((i__19678__auto___25500 < len__19677__auto___25499)){
args25480.push((arguments[i__19678__auto___25500]));

var G__25501 = (i__19678__auto___25500 + (1));
i__19678__auto___25500 = G__25501;
continue;
} else {
}
break;
}

var G__25483 = args25480.length;
switch (G__25483) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25480.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19522__auto___25507 = n;
var x_25508 = (0);
while(true){
if((x_25508 < n__19522__auto___25507)){
(a[x_25508] = (0));

var G__25509 = (x_25508 + (1));
x_25508 = G__25509;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__25510 = (i + (1));
i = G__25510;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async25514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25514 = (function (alt_flag,flag,meta25515){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25515 = meta25515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25516,meta25515__$1){
var self__ = this;
var _25516__$1 = this;
return (new cljs.core.async.t_cljs$core$async25514(self__.alt_flag,self__.flag,meta25515__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25516){
var self__ = this;
var _25516__$1 = this;
return self__.meta25515;
});})(flag))
;

cljs.core.async.t_cljs$core$async25514.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async25514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25514.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25515","meta25515",-1856720000,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25514";

cljs.core.async.t_cljs$core$async25514.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async25514");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25514 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25514(alt_flag__$1,flag__$1,meta25515){
return (new cljs.core.async.t_cljs$core$async25514(alt_flag__$1,flag__$1,meta25515));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25514(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25529 = (function (alt_handler,flag,cb,meta25530){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25530 = meta25530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25531,meta25530__$1){
var self__ = this;
var _25531__$1 = this;
return (new cljs.core.async.t_cljs$core$async25529(self__.alt_handler,self__.flag,self__.cb,meta25530__$1));
});

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25531){
var self__ = this;
var _25531__$1 = this;
return self__.meta25530;
});

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25530","meta25530",-1096473380,null)], null);
});

cljs.core.async.t_cljs$core$async25529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25529";

cljs.core.async.t_cljs$core$async25529.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async25529");
});

cljs.core.async.__GT_t_cljs$core$async25529 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25529(alt_handler__$1,flag__$1,cb__$1,meta25530){
return (new cljs.core.async.t_cljs$core$async25529(alt_handler__$1,flag__$1,cb__$1,meta25530));
});

}

return (new cljs.core.async.t_cljs$core$async25529(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25538_SHARP_){
var G__25550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25538_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25550) : fret.call(null,G__25550));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25539_SHARP_){
var G__25551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25539_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25551) : fret.call(null,G__25551));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__18619__auto__ = wport;
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25556 = (i + (1));
i = G__25556;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18619__auto__ = ret;
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18607__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__18607__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__18607__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__19684__auto__ = [];
var len__19677__auto___25578 = arguments.length;
var i__19678__auto___25579 = (0);
while(true){
if((i__19678__auto___25579 < len__19677__auto___25578)){
args__19684__auto__.push((arguments[i__19678__auto___25579]));

var G__25580 = (i__19678__auto___25579 + (1));
i__19678__auto___25579 = G__25580;
continue;
} else {
}
break;
}

var argseq__19685__auto__ = ((((1) < args__19684__auto__.length))?(new cljs.core.IndexedSeq(args__19684__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19685__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25571){
var map__25572 = p__25571;
var map__25572__$1 = ((((!((map__25572 == null)))?((((map__25572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25572):map__25572);
var opts = map__25572__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25565){
var G__25566 = cljs.core.first(seq25565);
var seq25565__$1 = cljs.core.next(seq25565);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25566,seq25565__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args25597 = [];
var len__19677__auto___25672 = arguments.length;
var i__19678__auto___25673 = (0);
while(true){
if((i__19678__auto___25673 < len__19677__auto___25672)){
args25597.push((arguments[i__19678__auto___25673]));

var G__25674 = (i__19678__auto___25673 + (1));
i__19678__auto___25673 = G__25674;
continue;
} else {
}
break;
}

var G__25599 = args25597.length;
switch (G__25599) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25597.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25338__auto___25676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___25676){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___25676){
return (function (state_25642){
var state_val_25643 = (state_25642[(1)]);
if((state_val_25643 === (7))){
var inst_25634 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
var statearr_25644_25686 = state_25642__$1;
(statearr_25644_25686[(2)] = inst_25634);

(statearr_25644_25686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (1))){
var state_25642__$1 = state_25642;
var statearr_25645_25687 = state_25642__$1;
(statearr_25645_25687[(2)] = null);

(statearr_25645_25687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (4))){
var inst_25612 = (state_25642[(7)]);
var inst_25612__$1 = (state_25642[(2)]);
var inst_25614 = (inst_25612__$1 == null);
var state_25642__$1 = (function (){var statearr_25646 = state_25642;
(statearr_25646[(7)] = inst_25612__$1);

return statearr_25646;
})();
if(cljs.core.truth_(inst_25614)){
var statearr_25647_25689 = state_25642__$1;
(statearr_25647_25689[(1)] = (5));

} else {
var statearr_25648_25690 = state_25642__$1;
(statearr_25648_25690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (13))){
var state_25642__$1 = state_25642;
var statearr_25649_25691 = state_25642__$1;
(statearr_25649_25691[(2)] = null);

(statearr_25649_25691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (6))){
var inst_25612 = (state_25642[(7)]);
var state_25642__$1 = state_25642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25642__$1,(11),to,inst_25612);
} else {
if((state_val_25643 === (3))){
var inst_25636 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25642__$1,inst_25636);
} else {
if((state_val_25643 === (12))){
var state_25642__$1 = state_25642;
var statearr_25654_25702 = state_25642__$1;
(statearr_25654_25702[(2)] = null);

(statearr_25654_25702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (2))){
var state_25642__$1 = state_25642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25642__$1,(4),from);
} else {
if((state_val_25643 === (11))){
var inst_25627 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
if(cljs.core.truth_(inst_25627)){
var statearr_25655_25709 = state_25642__$1;
(statearr_25655_25709[(1)] = (12));

} else {
var statearr_25656_25710 = state_25642__$1;
(statearr_25656_25710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (9))){
var state_25642__$1 = state_25642;
var statearr_25657_25711 = state_25642__$1;
(statearr_25657_25711[(2)] = null);

(statearr_25657_25711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (5))){
var state_25642__$1 = state_25642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25658_25712 = state_25642__$1;
(statearr_25658_25712[(1)] = (8));

} else {
var statearr_25659_25715 = state_25642__$1;
(statearr_25659_25715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (14))){
var inst_25632 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
var statearr_25660_25717 = state_25642__$1;
(statearr_25660_25717[(2)] = inst_25632);

(statearr_25660_25717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (10))){
var inst_25624 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
var statearr_25661_25719 = state_25642__$1;
(statearr_25661_25719[(2)] = inst_25624);

(statearr_25661_25719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (8))){
var inst_25618 = cljs.core.async.close_BANG_(to);
var state_25642__$1 = state_25642;
var statearr_25662_25720 = state_25642__$1;
(statearr_25662_25720[(2)] = inst_25618);

(statearr_25662_25720[(1)] = (10));


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
});})(c__25338__auto___25676))
;
return ((function (switch__24892__auto__,c__25338__auto___25676){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_25666 = [null,null,null,null,null,null,null,null];
(statearr_25666[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_25666[(1)] = (1));

return statearr_25666;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_25642){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_25642);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e25667){if((e25667 instanceof Object)){
var ex__24896__auto__ = e25667;
var statearr_25668_25721 = state_25642;
(statearr_25668_25721[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25722 = state_25642;
state_25642 = G__25722;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_25642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_25642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___25676))
})();
var state__25340__auto__ = (function (){var statearr_25669 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_25669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___25676);

return statearr_25669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___25676))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__25923){
var vec__25924 = p__25923;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25924,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25924,(1),null);
var job = vec__25924;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__25338__auto___26131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___26131,res,vec__25924,v,p,job,jobs,results){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___26131,res,vec__25924,v,p,job,jobs,results){
return (function (state_25931){
var state_val_25932 = (state_25931[(1)]);
if((state_val_25932 === (1))){
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25931__$1,(2),res,v);
} else {
if((state_val_25932 === (2))){
var inst_25928 = (state_25931[(2)]);
var inst_25929 = cljs.core.async.close_BANG_(res);
var state_25931__$1 = (function (){var statearr_25935 = state_25931;
(statearr_25935[(7)] = inst_25928);

return statearr_25935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25931__$1,inst_25929);
} else {
return null;
}
}
});})(c__25338__auto___26131,res,vec__25924,v,p,job,jobs,results))
;
return ((function (switch__24892__auto__,c__25338__auto___26131,res,vec__25924,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0 = (function (){
var statearr_25940 = [null,null,null,null,null,null,null,null];
(statearr_25940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__);

(statearr_25940[(1)] = (1));

return statearr_25940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1 = (function (state_25931){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_25931);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e25941){if((e25941 instanceof Object)){
var ex__24896__auto__ = e25941;
var statearr_25942_26134 = state_25931;
(statearr_25942_26134[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26136 = state_25931;
state_25931 = G__26136;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = function(state_25931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1.call(this,state_25931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___26131,res,vec__25924,v,p,job,jobs,results))
})();
var state__25340__auto__ = (function (){var statearr_25944 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_25944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___26131);

return statearr_25944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___26131,res,vec__25924,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25945){
var vec__25946 = p__25945;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25946,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25946,(1),null);
var job = vec__25946;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__19522__auto___26139 = n;
var __26140 = (0);
while(true){
if((__26140 < n__19522__auto___26139)){
var G__25947_26141 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25947_26141) {
case "compute":
var c__25338__auto___26143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26140,c__25338__auto___26143,G__25947_26141,n__19522__auto___26139,jobs,results,process,async){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (__26140,c__25338__auto___26143,G__25947_26141,n__19522__auto___26139,jobs,results,process,async){
return (function (state_25960){
var state_val_25961 = (state_25960[(1)]);
if((state_val_25961 === (1))){
var state_25960__$1 = state_25960;
var statearr_25962_26147 = state_25960__$1;
(statearr_25962_26147[(2)] = null);

(statearr_25962_26147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25961 === (2))){
var state_25960__$1 = state_25960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25960__$1,(4),jobs);
} else {
if((state_val_25961 === (3))){
var inst_25958 = (state_25960[(2)]);
var state_25960__$1 = state_25960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25960__$1,inst_25958);
} else {
if((state_val_25961 === (4))){
var inst_25950 = (state_25960[(2)]);
var inst_25951 = process(inst_25950);
var state_25960__$1 = state_25960;
if(cljs.core.truth_(inst_25951)){
var statearr_25964_26149 = state_25960__$1;
(statearr_25964_26149[(1)] = (5));

} else {
var statearr_25965_26150 = state_25960__$1;
(statearr_25965_26150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25961 === (5))){
var state_25960__$1 = state_25960;
var statearr_25966_26151 = state_25960__$1;
(statearr_25966_26151[(2)] = null);

(statearr_25966_26151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25961 === (6))){
var state_25960__$1 = state_25960;
var statearr_25967_26152 = state_25960__$1;
(statearr_25967_26152[(2)] = null);

(statearr_25967_26152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25961 === (7))){
var inst_25956 = (state_25960[(2)]);
var state_25960__$1 = state_25960;
var statearr_25968_26153 = state_25960__$1;
(statearr_25968_26153[(2)] = inst_25956);

(statearr_25968_26153[(1)] = (3));


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
});})(__26140,c__25338__auto___26143,G__25947_26141,n__19522__auto___26139,jobs,results,process,async))
;
return ((function (__26140,switch__24892__auto__,c__25338__auto___26143,G__25947_26141,n__19522__auto___26139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0 = (function (){
var statearr_25974 = [null,null,null,null,null,null,null];
(statearr_25974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__);

(statearr_25974[(1)] = (1));

return statearr_25974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1 = (function (state_25960){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_25960);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e25976){if((e25976 instanceof Object)){
var ex__24896__auto__ = e25976;
var statearr_25977_26154 = state_25960;
(statearr_25977_26154[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26158 = state_25960;
state_25960 = G__26158;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = function(state_25960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1.call(this,state_25960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__;
})()
;})(__26140,switch__24892__auto__,c__25338__auto___26143,G__25947_26141,n__19522__auto___26139,jobs,results,process,async))
})();
var state__25340__auto__ = (function (){var statearr_25979 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_25979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___26143);

return statearr_25979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(__26140,c__25338__auto___26143,G__25947_26141,n__19522__auto___26139,jobs,results,process,async))
);


break;
case "async":
var c__25338__auto___26162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26140,c__25338__auto___26162,G__25947_26141,n__19522__auto___26139,jobs,results,process,async){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (__26140,c__25338__auto___26162,G__25947_26141,n__19522__auto___26139,jobs,results,process,async){
return (function (state_25992){
var state_val_25993 = (state_25992[(1)]);
if((state_val_25993 === (1))){
var state_25992__$1 = state_25992;
var statearr_25994_26165 = state_25992__$1;
(statearr_25994_26165[(2)] = null);

(statearr_25994_26165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (2))){
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25992__$1,(4),jobs);
} else {
if((state_val_25993 === (3))){
var inst_25990 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25992__$1,inst_25990);
} else {
if((state_val_25993 === (4))){
var inst_25982 = (state_25992[(2)]);
var inst_25983 = async(inst_25982);
var state_25992__$1 = state_25992;
if(cljs.core.truth_(inst_25983)){
var statearr_25995_26166 = state_25992__$1;
(statearr_25995_26166[(1)] = (5));

} else {
var statearr_25996_26167 = state_25992__$1;
(statearr_25996_26167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (5))){
var state_25992__$1 = state_25992;
var statearr_25997_26168 = state_25992__$1;
(statearr_25997_26168[(2)] = null);

(statearr_25997_26168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (6))){
var state_25992__$1 = state_25992;
var statearr_25998_26169 = state_25992__$1;
(statearr_25998_26169[(2)] = null);

(statearr_25998_26169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (7))){
var inst_25988 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
var statearr_26000_26170 = state_25992__$1;
(statearr_26000_26170[(2)] = inst_25988);

(statearr_26000_26170[(1)] = (3));


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
});})(__26140,c__25338__auto___26162,G__25947_26141,n__19522__auto___26139,jobs,results,process,async))
;
return ((function (__26140,switch__24892__auto__,c__25338__auto___26162,G__25947_26141,n__19522__auto___26139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0 = (function (){
var statearr_26005 = [null,null,null,null,null,null,null];
(statearr_26005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__);

(statearr_26005[(1)] = (1));

return statearr_26005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1 = (function (state_25992){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_25992);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e26006){if((e26006 instanceof Object)){
var ex__24896__auto__ = e26006;
var statearr_26007_26176 = state_25992;
(statearr_26007_26176[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26178 = state_25992;
state_25992 = G__26178;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = function(state_25992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1.call(this,state_25992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__;
})()
;})(__26140,switch__24892__auto__,c__25338__auto___26162,G__25947_26141,n__19522__auto___26139,jobs,results,process,async))
})();
var state__25340__auto__ = (function (){var statearr_26008 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_26008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___26162);

return statearr_26008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(__26140,c__25338__auto___26162,G__25947_26141,n__19522__auto___26139,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26179 = (__26140 + (1));
__26140 = G__26179;
continue;
} else {
}
break;
}

var c__25338__auto___26180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___26180,jobs,results,process,async){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___26180,jobs,results,process,async){
return (function (state_26030){
var state_val_26031 = (state_26030[(1)]);
if((state_val_26031 === (1))){
var state_26030__$1 = state_26030;
var statearr_26032_26182 = state_26030__$1;
(statearr_26032_26182[(2)] = null);

(statearr_26032_26182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (2))){
var state_26030__$1 = state_26030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26030__$1,(4),from);
} else {
if((state_val_26031 === (3))){
var inst_26028 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26030__$1,inst_26028);
} else {
if((state_val_26031 === (4))){
var inst_26011 = (state_26030[(7)]);
var inst_26011__$1 = (state_26030[(2)]);
var inst_26012 = (inst_26011__$1 == null);
var state_26030__$1 = (function (){var statearr_26033 = state_26030;
(statearr_26033[(7)] = inst_26011__$1);

return statearr_26033;
})();
if(inst_26012){
var statearr_26034_26188 = state_26030__$1;
(statearr_26034_26188[(1)] = (5));

} else {
var statearr_26035_26189 = state_26030__$1;
(statearr_26035_26189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (5))){
var inst_26014 = cljs.core.async.close_BANG_(jobs);
var state_26030__$1 = state_26030;
var statearr_26036_26195 = state_26030__$1;
(statearr_26036_26195[(2)] = inst_26014);

(statearr_26036_26195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (6))){
var inst_26016 = (state_26030[(8)]);
var inst_26011 = (state_26030[(7)]);
var inst_26016__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_26017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26018 = [inst_26011,inst_26016__$1];
var inst_26019 = (new cljs.core.PersistentVector(null,2,(5),inst_26017,inst_26018,null));
var state_26030__$1 = (function (){var statearr_26037 = state_26030;
(statearr_26037[(8)] = inst_26016__$1);

return statearr_26037;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26030__$1,(8),jobs,inst_26019);
} else {
if((state_val_26031 === (7))){
var inst_26026 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
var statearr_26038_26201 = state_26030__$1;
(statearr_26038_26201[(2)] = inst_26026);

(statearr_26038_26201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (8))){
var inst_26016 = (state_26030[(8)]);
var inst_26021 = (state_26030[(2)]);
var state_26030__$1 = (function (){var statearr_26039 = state_26030;
(statearr_26039[(9)] = inst_26021);

return statearr_26039;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26030__$1,(9),results,inst_26016);
} else {
if((state_val_26031 === (9))){
var inst_26023 = (state_26030[(2)]);
var state_26030__$1 = (function (){var statearr_26040 = state_26030;
(statearr_26040[(10)] = inst_26023);

return statearr_26040;
})();
var statearr_26041_26215 = state_26030__$1;
(statearr_26041_26215[(2)] = null);

(statearr_26041_26215[(1)] = (2));


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
});})(c__25338__auto___26180,jobs,results,process,async))
;
return ((function (switch__24892__auto__,c__25338__auto___26180,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0 = (function (){
var statearr_26045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26045[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__);

(statearr_26045[(1)] = (1));

return statearr_26045;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1 = (function (state_26030){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_26030);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e26046){if((e26046 instanceof Object)){
var ex__24896__auto__ = e26046;
var statearr_26047_26224 = state_26030;
(statearr_26047_26224[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26225 = state_26030;
state_26030 = G__26225;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = function(state_26030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1.call(this,state_26030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___26180,jobs,results,process,async))
})();
var state__25340__auto__ = (function (){var statearr_26048 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_26048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___26180);

return statearr_26048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___26180,jobs,results,process,async))
);


var c__25338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto__,jobs,results,process,async){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto__,jobs,results,process,async){
return (function (state_26086){
var state_val_26087 = (state_26086[(1)]);
if((state_val_26087 === (7))){
var inst_26082 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26088_26232 = state_26086__$1;
(statearr_26088_26232[(2)] = inst_26082);

(statearr_26088_26232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (20))){
var state_26086__$1 = state_26086;
var statearr_26089_26238 = state_26086__$1;
(statearr_26089_26238[(2)] = null);

(statearr_26089_26238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (1))){
var state_26086__$1 = state_26086;
var statearr_26090_26239 = state_26086__$1;
(statearr_26090_26239[(2)] = null);

(statearr_26090_26239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (4))){
var inst_26051 = (state_26086[(7)]);
var inst_26051__$1 = (state_26086[(2)]);
var inst_26052 = (inst_26051__$1 == null);
var state_26086__$1 = (function (){var statearr_26092 = state_26086;
(statearr_26092[(7)] = inst_26051__$1);

return statearr_26092;
})();
if(cljs.core.truth_(inst_26052)){
var statearr_26093_26242 = state_26086__$1;
(statearr_26093_26242[(1)] = (5));

} else {
var statearr_26094_26243 = state_26086__$1;
(statearr_26094_26243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (15))){
var inst_26064 = (state_26086[(8)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26086__$1,(18),to,inst_26064);
} else {
if((state_val_26087 === (21))){
var inst_26077 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26096_26246 = state_26086__$1;
(statearr_26096_26246[(2)] = inst_26077);

(statearr_26096_26246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (13))){
var inst_26079 = (state_26086[(2)]);
var state_26086__$1 = (function (){var statearr_26097 = state_26086;
(statearr_26097[(9)] = inst_26079);

return statearr_26097;
})();
var statearr_26098_26252 = state_26086__$1;
(statearr_26098_26252[(2)] = null);

(statearr_26098_26252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (6))){
var inst_26051 = (state_26086[(7)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26086__$1,(11),inst_26051);
} else {
if((state_val_26087 === (17))){
var inst_26072 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
if(cljs.core.truth_(inst_26072)){
var statearr_26100_26257 = state_26086__$1;
(statearr_26100_26257[(1)] = (19));

} else {
var statearr_26101_26258 = state_26086__$1;
(statearr_26101_26258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (3))){
var inst_26084 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26086__$1,inst_26084);
} else {
if((state_val_26087 === (12))){
var inst_26061 = (state_26086[(10)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26086__$1,(14),inst_26061);
} else {
if((state_val_26087 === (2))){
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26086__$1,(4),results);
} else {
if((state_val_26087 === (19))){
var state_26086__$1 = state_26086;
var statearr_26105_26269 = state_26086__$1;
(statearr_26105_26269[(2)] = null);

(statearr_26105_26269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (11))){
var inst_26061 = (state_26086[(2)]);
var state_26086__$1 = (function (){var statearr_26106 = state_26086;
(statearr_26106[(10)] = inst_26061);

return statearr_26106;
})();
var statearr_26107_26275 = state_26086__$1;
(statearr_26107_26275[(2)] = null);

(statearr_26107_26275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (9))){
var state_26086__$1 = state_26086;
var statearr_26108_26280 = state_26086__$1;
(statearr_26108_26280[(2)] = null);

(statearr_26108_26280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (5))){
var state_26086__$1 = state_26086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26112_26282 = state_26086__$1;
(statearr_26112_26282[(1)] = (8));

} else {
var statearr_26113_26283 = state_26086__$1;
(statearr_26113_26283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (14))){
var inst_26066 = (state_26086[(11)]);
var inst_26064 = (state_26086[(8)]);
var inst_26064__$1 = (state_26086[(2)]);
var inst_26065 = (inst_26064__$1 == null);
var inst_26066__$1 = cljs.core.not(inst_26065);
var state_26086__$1 = (function (){var statearr_26116 = state_26086;
(statearr_26116[(11)] = inst_26066__$1);

(statearr_26116[(8)] = inst_26064__$1);

return statearr_26116;
})();
if(inst_26066__$1){
var statearr_26117_26287 = state_26086__$1;
(statearr_26117_26287[(1)] = (15));

} else {
var statearr_26118_26291 = state_26086__$1;
(statearr_26118_26291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (16))){
var inst_26066 = (state_26086[(11)]);
var state_26086__$1 = state_26086;
var statearr_26120_26293 = state_26086__$1;
(statearr_26120_26293[(2)] = inst_26066);

(statearr_26120_26293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (10))){
var inst_26058 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26121_26294 = state_26086__$1;
(statearr_26121_26294[(2)] = inst_26058);

(statearr_26121_26294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (18))){
var inst_26069 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26122_26296 = state_26086__$1;
(statearr_26122_26296[(2)] = inst_26069);

(statearr_26122_26296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (8))){
var inst_26055 = cljs.core.async.close_BANG_(to);
var state_26086__$1 = state_26086;
var statearr_26123_26301 = state_26086__$1;
(statearr_26123_26301[(2)] = inst_26055);

(statearr_26123_26301[(1)] = (10));


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
});})(c__25338__auto__,jobs,results,process,async))
;
return ((function (switch__24892__auto__,c__25338__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0 = (function (){
var statearr_26127 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__);

(statearr_26127[(1)] = (1));

return statearr_26127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1 = (function (state_26086){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_26086);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e26128){if((e26128 instanceof Object)){
var ex__24896__auto__ = e26128;
var statearr_26129_26304 = state_26086;
(statearr_26129_26304[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26305 = state_26086;
state_26086 = G__26305;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__ = function(state_26086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1.call(this,state_26086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto__,jobs,results,process,async))
})();
var state__25340__auto__ = (function (){var statearr_26130 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_26130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto__);

return statearr_26130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto__,jobs,results,process,async))
);

return c__25338__auto__;
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
var args26308 = [];
var len__19677__auto___26313 = arguments.length;
var i__19678__auto___26314 = (0);
while(true){
if((i__19678__auto___26314 < len__19677__auto___26313)){
args26308.push((arguments[i__19678__auto___26314]));

var G__26316 = (i__19678__auto___26314 + (1));
i__19678__auto___26314 = G__26316;
continue;
} else {
}
break;
}

var G__26312 = args26308.length;
switch (G__26312) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26308.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args26321 = [];
var len__19677__auto___26324 = arguments.length;
var i__19678__auto___26325 = (0);
while(true){
if((i__19678__auto___26325 < len__19677__auto___26324)){
args26321.push((arguments[i__19678__auto___26325]));

var G__26326 = (i__19678__auto___26325 + (1));
i__19678__auto___26325 = G__26326;
continue;
} else {
}
break;
}

var G__26323 = args26321.length;
switch (G__26323) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26321.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args26328 = [];
var len__19677__auto___26403 = arguments.length;
var i__19678__auto___26404 = (0);
while(true){
if((i__19678__auto___26404 < len__19677__auto___26403)){
args26328.push((arguments[i__19678__auto___26404]));

var G__26405 = (i__19678__auto___26404 + (1));
i__19678__auto___26404 = G__26405;
continue;
} else {
}
break;
}

var G__26330 = args26328.length;
switch (G__26330) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26328.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__25338__auto___26409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___26409,tc,fc){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___26409,tc,fc){
return (function (state_26356){
var state_val_26357 = (state_26356[(1)]);
if((state_val_26357 === (7))){
var inst_26352 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26362_26417 = state_26356__$1;
(statearr_26362_26417[(2)] = inst_26352);

(statearr_26362_26417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (1))){
var state_26356__$1 = state_26356;
var statearr_26363_26418 = state_26356__$1;
(statearr_26363_26418[(2)] = null);

(statearr_26363_26418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (4))){
var inst_26333 = (state_26356[(7)]);
var inst_26333__$1 = (state_26356[(2)]);
var inst_26334 = (inst_26333__$1 == null);
var state_26356__$1 = (function (){var statearr_26364 = state_26356;
(statearr_26364[(7)] = inst_26333__$1);

return statearr_26364;
})();
if(cljs.core.truth_(inst_26334)){
var statearr_26365_26420 = state_26356__$1;
(statearr_26365_26420[(1)] = (5));

} else {
var statearr_26366_26425 = state_26356__$1;
(statearr_26366_26425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (13))){
var state_26356__$1 = state_26356;
var statearr_26367_26426 = state_26356__$1;
(statearr_26367_26426[(2)] = null);

(statearr_26367_26426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (6))){
var inst_26333 = (state_26356[(7)]);
var inst_26339 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26333) : p.call(null,inst_26333));
var state_26356__$1 = state_26356;
if(cljs.core.truth_(inst_26339)){
var statearr_26368_26427 = state_26356__$1;
(statearr_26368_26427[(1)] = (9));

} else {
var statearr_26370_26428 = state_26356__$1;
(statearr_26370_26428[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (3))){
var inst_26354 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26356__$1,inst_26354);
} else {
if((state_val_26357 === (12))){
var state_26356__$1 = state_26356;
var statearr_26371_26429 = state_26356__$1;
(statearr_26371_26429[(2)] = null);

(statearr_26371_26429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (2))){
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26356__$1,(4),ch);
} else {
if((state_val_26357 === (11))){
var inst_26333 = (state_26356[(7)]);
var inst_26343 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26356__$1,(8),inst_26343,inst_26333);
} else {
if((state_val_26357 === (9))){
var state_26356__$1 = state_26356;
var statearr_26376_26430 = state_26356__$1;
(statearr_26376_26430[(2)] = tc);

(statearr_26376_26430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (5))){
var inst_26336 = cljs.core.async.close_BANG_(tc);
var inst_26337 = cljs.core.async.close_BANG_(fc);
var state_26356__$1 = (function (){var statearr_26377 = state_26356;
(statearr_26377[(8)] = inst_26336);

return statearr_26377;
})();
var statearr_26378_26431 = state_26356__$1;
(statearr_26378_26431[(2)] = inst_26337);

(statearr_26378_26431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (14))){
var inst_26350 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26387_26432 = state_26356__$1;
(statearr_26387_26432[(2)] = inst_26350);

(statearr_26387_26432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (10))){
var state_26356__$1 = state_26356;
var statearr_26388_26433 = state_26356__$1;
(statearr_26388_26433[(2)] = fc);

(statearr_26388_26433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (8))){
var inst_26345 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
if(cljs.core.truth_(inst_26345)){
var statearr_26389_26434 = state_26356__$1;
(statearr_26389_26434[(1)] = (12));

} else {
var statearr_26390_26435 = state_26356__$1;
(statearr_26390_26435[(1)] = (13));

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
});})(c__25338__auto___26409,tc,fc))
;
return ((function (switch__24892__auto__,c__25338__auto___26409,tc,fc){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_26394 = [null,null,null,null,null,null,null,null,null];
(statearr_26394[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_26394[(1)] = (1));

return statearr_26394;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_26356){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_26356);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e26395){if((e26395 instanceof Object)){
var ex__24896__auto__ = e26395;
var statearr_26396_26436 = state_26356;
(statearr_26396_26436[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26437 = state_26356;
state_26356 = G__26437;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_26356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_26356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___26409,tc,fc))
})();
var state__25340__auto__ = (function (){var statearr_26398 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_26398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___26409);

return statearr_26398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___26409,tc,fc))
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
var c__25338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto__){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto__){
return (function (state_26502){
var state_val_26503 = (state_26502[(1)]);
if((state_val_26503 === (7))){
var inst_26498 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26504_26527 = state_26502__$1;
(statearr_26504_26527[(2)] = inst_26498);

(statearr_26504_26527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (1))){
var inst_26482 = init;
var state_26502__$1 = (function (){var statearr_26505 = state_26502;
(statearr_26505[(7)] = inst_26482);

return statearr_26505;
})();
var statearr_26506_26528 = state_26502__$1;
(statearr_26506_26528[(2)] = null);

(statearr_26506_26528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (4))){
var inst_26485 = (state_26502[(8)]);
var inst_26485__$1 = (state_26502[(2)]);
var inst_26486 = (inst_26485__$1 == null);
var state_26502__$1 = (function (){var statearr_26507 = state_26502;
(statearr_26507[(8)] = inst_26485__$1);

return statearr_26507;
})();
if(cljs.core.truth_(inst_26486)){
var statearr_26508_26529 = state_26502__$1;
(statearr_26508_26529[(1)] = (5));

} else {
var statearr_26509_26530 = state_26502__$1;
(statearr_26509_26530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (6))){
var inst_26485 = (state_26502[(8)]);
var inst_26482 = (state_26502[(7)]);
var inst_26489 = (state_26502[(9)]);
var inst_26489__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_26482,inst_26485) : f.call(null,inst_26482,inst_26485));
var inst_26490 = cljs.core.reduced_QMARK_(inst_26489__$1);
var state_26502__$1 = (function (){var statearr_26510 = state_26502;
(statearr_26510[(9)] = inst_26489__$1);

return statearr_26510;
})();
if(inst_26490){
var statearr_26511_26531 = state_26502__$1;
(statearr_26511_26531[(1)] = (8));

} else {
var statearr_26512_26532 = state_26502__$1;
(statearr_26512_26532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (3))){
var inst_26500 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26502__$1,inst_26500);
} else {
if((state_val_26503 === (2))){
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26502__$1,(4),ch);
} else {
if((state_val_26503 === (9))){
var inst_26489 = (state_26502[(9)]);
var inst_26482 = inst_26489;
var state_26502__$1 = (function (){var statearr_26513 = state_26502;
(statearr_26513[(7)] = inst_26482);

return statearr_26513;
})();
var statearr_26514_26533 = state_26502__$1;
(statearr_26514_26533[(2)] = null);

(statearr_26514_26533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (5))){
var inst_26482 = (state_26502[(7)]);
var state_26502__$1 = state_26502;
var statearr_26516_26534 = state_26502__$1;
(statearr_26516_26534[(2)] = inst_26482);

(statearr_26516_26534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (10))){
var inst_26496 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26518_26535 = state_26502__$1;
(statearr_26518_26535[(2)] = inst_26496);

(statearr_26518_26535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (8))){
var inst_26489 = (state_26502[(9)]);
var inst_26492 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_26489) : cljs.core.deref.call(null,inst_26489));
var state_26502__$1 = state_26502;
var statearr_26519_26536 = state_26502__$1;
(statearr_26519_26536[(2)] = inst_26492);

(statearr_26519_26536[(1)] = (10));


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
});})(c__25338__auto__))
;
return ((function (switch__24892__auto__,c__25338__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24893__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24893__auto____0 = (function (){
var statearr_26523 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26523[(0)] = cljs$core$async$reduce_$_state_machine__24893__auto__);

(statearr_26523[(1)] = (1));

return statearr_26523;
});
var cljs$core$async$reduce_$_state_machine__24893__auto____1 = (function (state_26502){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_26502);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e26524){if((e26524 instanceof Object)){
var ex__24896__auto__ = e26524;
var statearr_26525_26537 = state_26502;
(statearr_26525_26537[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26538 = state_26502;
state_26502 = G__26538;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24893__auto__ = function(state_26502){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24893__auto____1.call(this,state_26502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24893__auto____0;
cljs$core$async$reduce_$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24893__auto____1;
return cljs$core$async$reduce_$_state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto__))
})();
var state__25340__auto__ = (function (){var statearr_26526 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_26526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto__);

return statearr_26526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto__))
);

return c__25338__auto__;
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
var args26539 = [];
var len__19677__auto___26601 = arguments.length;
var i__19678__auto___26602 = (0);
while(true){
if((i__19678__auto___26602 < len__19677__auto___26601)){
args26539.push((arguments[i__19678__auto___26602]));

var G__26603 = (i__19678__auto___26602 + (1));
i__19678__auto___26602 = G__26603;
continue;
} else {
}
break;
}

var G__26542 = args26539.length;
switch (G__26542) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26539.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto__){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto__){
return (function (state_26570){
var state_val_26571 = (state_26570[(1)]);
if((state_val_26571 === (7))){
var inst_26552 = (state_26570[(2)]);
var state_26570__$1 = state_26570;
var statearr_26573_26605 = state_26570__$1;
(statearr_26573_26605[(2)] = inst_26552);

(statearr_26573_26605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (1))){
var inst_26545 = cljs.core.seq(coll);
var inst_26546 = inst_26545;
var state_26570__$1 = (function (){var statearr_26574 = state_26570;
(statearr_26574[(7)] = inst_26546);

return statearr_26574;
})();
var statearr_26575_26606 = state_26570__$1;
(statearr_26575_26606[(2)] = null);

(statearr_26575_26606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (4))){
var inst_26546 = (state_26570[(7)]);
var inst_26550 = cljs.core.first(inst_26546);
var state_26570__$1 = state_26570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26570__$1,(7),ch,inst_26550);
} else {
if((state_val_26571 === (13))){
var inst_26564 = (state_26570[(2)]);
var state_26570__$1 = state_26570;
var statearr_26576_26607 = state_26570__$1;
(statearr_26576_26607[(2)] = inst_26564);

(statearr_26576_26607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (6))){
var inst_26555 = (state_26570[(2)]);
var state_26570__$1 = state_26570;
if(cljs.core.truth_(inst_26555)){
var statearr_26577_26610 = state_26570__$1;
(statearr_26577_26610[(1)] = (8));

} else {
var statearr_26579_26612 = state_26570__$1;
(statearr_26579_26612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (3))){
var inst_26568 = (state_26570[(2)]);
var state_26570__$1 = state_26570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26570__$1,inst_26568);
} else {
if((state_val_26571 === (12))){
var state_26570__$1 = state_26570;
var statearr_26580_26614 = state_26570__$1;
(statearr_26580_26614[(2)] = null);

(statearr_26580_26614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (2))){
var inst_26546 = (state_26570[(7)]);
var state_26570__$1 = state_26570;
if(cljs.core.truth_(inst_26546)){
var statearr_26581_26615 = state_26570__$1;
(statearr_26581_26615[(1)] = (4));

} else {
var statearr_26582_26616 = state_26570__$1;
(statearr_26582_26616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (11))){
var inst_26561 = cljs.core.async.close_BANG_(ch);
var state_26570__$1 = state_26570;
var statearr_26583_26617 = state_26570__$1;
(statearr_26583_26617[(2)] = inst_26561);

(statearr_26583_26617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (9))){
var state_26570__$1 = state_26570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26584_26618 = state_26570__$1;
(statearr_26584_26618[(1)] = (11));

} else {
var statearr_26585_26619 = state_26570__$1;
(statearr_26585_26619[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (5))){
var inst_26546 = (state_26570[(7)]);
var state_26570__$1 = state_26570;
var statearr_26587_26620 = state_26570__$1;
(statearr_26587_26620[(2)] = inst_26546);

(statearr_26587_26620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (10))){
var inst_26566 = (state_26570[(2)]);
var state_26570__$1 = state_26570;
var statearr_26589_26621 = state_26570__$1;
(statearr_26589_26621[(2)] = inst_26566);

(statearr_26589_26621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26571 === (8))){
var inst_26546 = (state_26570[(7)]);
var inst_26557 = cljs.core.next(inst_26546);
var inst_26546__$1 = inst_26557;
var state_26570__$1 = (function (){var statearr_26590 = state_26570;
(statearr_26590[(7)] = inst_26546__$1);

return statearr_26590;
})();
var statearr_26591_26622 = state_26570__$1;
(statearr_26591_26622[(2)] = null);

(statearr_26591_26622[(1)] = (2));


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
});})(c__25338__auto__))
;
return ((function (switch__24892__auto__,c__25338__auto__){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_26597 = [null,null,null,null,null,null,null,null];
(statearr_26597[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_26597[(1)] = (1));

return statearr_26597;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_26570){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_26570);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e26598){if((e26598 instanceof Object)){
var ex__24896__auto__ = e26598;
var statearr_26599_26625 = state_26570;
(statearr_26599_26625[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26627 = state_26570;
state_26570 = G__26627;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_26570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_26570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto__))
})();
var state__25340__auto__ = (function (){var statearr_26600 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_26600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto__);

return statearr_26600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto__))
);

return c__25338__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19274__auto__ = (((_ == null))?null:_);
var m__19275__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__19275__auto__.call(null,_));
} else {
var m__19275__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__19275__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19274__auto__ = (((m == null))?null:m);
var m__19275__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$3 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__19275__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__19275__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__19275__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19274__auto__ = (((m == null))?null:m);
var m__19275__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__19275__auto__.call(null,m,ch));
} else {
var m__19275__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__19275__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19274__auto__ = (((m == null))?null:m);
var m__19275__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__19275__auto__.call(null,m));
} else {
var m__19275__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__19275__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__26903 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26903) : cljs.core.atom.call(null,G__26903));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26904 = (function (mult,ch,cs,meta26905){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26905 = meta26905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26906,meta26905__$1){
var self__ = this;
var _26906__$1 = this;
return (new cljs.core.async.t_cljs$core$async26904(self__.mult,self__.ch,self__.cs,meta26905__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26906){
var self__ = this;
var _26906__$1 = this;
return self__.meta26905;
});})(cs))
;

cljs.core.async.t_cljs$core$async26904.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26904.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26904.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26904.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26904.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26909_27150 = self__.cs;
var G__26910_27151 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26909_27150,G__26910_27151) : cljs.core.reset_BANG_.call(null,G__26909_27150,G__26910_27151));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26904.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26905","meta26905",1989434313,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26904";

cljs.core.async.t_cljs$core$async26904.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async26904");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26904 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26904(mult__$1,ch__$1,cs__$1,meta26905){
return (new cljs.core.async.t_cljs$core$async26904(mult__$1,ch__$1,cs__$1,meta26905));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26904(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25338__auto___27165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___27165,cs,m,dchan,dctr,done){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___27165,cs,m,dchan,dctr,done){
return (function (state_27049){
var state_val_27050 = (state_27049[(1)]);
if((state_val_27050 === (7))){
var inst_27043 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27052_27167 = state_27049__$1;
(statearr_27052_27167[(2)] = inst_27043);

(statearr_27052_27167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (20))){
var inst_26944 = (state_27049[(7)]);
var inst_26955 = cljs.core.first(inst_26944);
var inst_26956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26955,(0),null);
var inst_26957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26955,(1),null);
var state_27049__$1 = (function (){var statearr_27053 = state_27049;
(statearr_27053[(8)] = inst_26956);

return statearr_27053;
})();
if(cljs.core.truth_(inst_26957)){
var statearr_27054_27169 = state_27049__$1;
(statearr_27054_27169[(1)] = (22));

} else {
var statearr_27055_27170 = state_27049__$1;
(statearr_27055_27170[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (27))){
var inst_26914 = (state_27049[(9)]);
var inst_26993 = (state_27049[(10)]);
var inst_26988 = (state_27049[(11)]);
var inst_26986 = (state_27049[(12)]);
var inst_26993__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26986,inst_26988);
var inst_26994 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26993__$1,inst_26914,done);
var state_27049__$1 = (function (){var statearr_27056 = state_27049;
(statearr_27056[(10)] = inst_26993__$1);

return statearr_27056;
})();
if(cljs.core.truth_(inst_26994)){
var statearr_27057_27174 = state_27049__$1;
(statearr_27057_27174[(1)] = (30));

} else {
var statearr_27058_27175 = state_27049__$1;
(statearr_27058_27175[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (1))){
var state_27049__$1 = state_27049;
var statearr_27059_27176 = state_27049__$1;
(statearr_27059_27176[(2)] = null);

(statearr_27059_27176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (24))){
var inst_26944 = (state_27049[(7)]);
var inst_26962 = (state_27049[(2)]);
var inst_26963 = cljs.core.next(inst_26944);
var inst_26924 = inst_26963;
var inst_26925 = null;
var inst_26926 = (0);
var inst_26927 = (0);
var state_27049__$1 = (function (){var statearr_27060 = state_27049;
(statearr_27060[(13)] = inst_26925);

(statearr_27060[(14)] = inst_26926);

(statearr_27060[(15)] = inst_26927);

(statearr_27060[(16)] = inst_26962);

(statearr_27060[(17)] = inst_26924);

return statearr_27060;
})();
var statearr_27061_27177 = state_27049__$1;
(statearr_27061_27177[(2)] = null);

(statearr_27061_27177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (39))){
var state_27049__$1 = state_27049;
var statearr_27065_27179 = state_27049__$1;
(statearr_27065_27179[(2)] = null);

(statearr_27065_27179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (4))){
var inst_26914 = (state_27049[(9)]);
var inst_26914__$1 = (state_27049[(2)]);
var inst_26916 = (inst_26914__$1 == null);
var state_27049__$1 = (function (){var statearr_27066 = state_27049;
(statearr_27066[(9)] = inst_26914__$1);

return statearr_27066;
})();
if(cljs.core.truth_(inst_26916)){
var statearr_27069_27181 = state_27049__$1;
(statearr_27069_27181[(1)] = (5));

} else {
var statearr_27070_27182 = state_27049__$1;
(statearr_27070_27182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (15))){
var inst_26925 = (state_27049[(13)]);
var inst_26926 = (state_27049[(14)]);
var inst_26927 = (state_27049[(15)]);
var inst_26924 = (state_27049[(17)]);
var inst_26940 = (state_27049[(2)]);
var inst_26941 = (inst_26927 + (1));
var tmp27062 = inst_26925;
var tmp27063 = inst_26926;
var tmp27064 = inst_26924;
var inst_26924__$1 = tmp27064;
var inst_26925__$1 = tmp27062;
var inst_26926__$1 = tmp27063;
var inst_26927__$1 = inst_26941;
var state_27049__$1 = (function (){var statearr_27071 = state_27049;
(statearr_27071[(13)] = inst_26925__$1);

(statearr_27071[(14)] = inst_26926__$1);

(statearr_27071[(18)] = inst_26940);

(statearr_27071[(15)] = inst_26927__$1);

(statearr_27071[(17)] = inst_26924__$1);

return statearr_27071;
})();
var statearr_27072_27184 = state_27049__$1;
(statearr_27072_27184[(2)] = null);

(statearr_27072_27184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (21))){
var inst_26966 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27076_27186 = state_27049__$1;
(statearr_27076_27186[(2)] = inst_26966);

(statearr_27076_27186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (31))){
var inst_26993 = (state_27049[(10)]);
var inst_26997 = done(null);
var inst_26998 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26993);
var state_27049__$1 = (function (){var statearr_27079 = state_27049;
(statearr_27079[(19)] = inst_26997);

return statearr_27079;
})();
var statearr_27080_27189 = state_27049__$1;
(statearr_27080_27189[(2)] = inst_26998);

(statearr_27080_27189[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (32))){
var inst_26987 = (state_27049[(20)]);
var inst_26988 = (state_27049[(11)]);
var inst_26985 = (state_27049[(21)]);
var inst_26986 = (state_27049[(12)]);
var inst_27000 = (state_27049[(2)]);
var inst_27001 = (inst_26988 + (1));
var tmp27073 = inst_26987;
var tmp27074 = inst_26985;
var tmp27075 = inst_26986;
var inst_26985__$1 = tmp27074;
var inst_26986__$1 = tmp27075;
var inst_26987__$1 = tmp27073;
var inst_26988__$1 = inst_27001;
var state_27049__$1 = (function (){var statearr_27082 = state_27049;
(statearr_27082[(20)] = inst_26987__$1);

(statearr_27082[(11)] = inst_26988__$1);

(statearr_27082[(22)] = inst_27000);

(statearr_27082[(21)] = inst_26985__$1);

(statearr_27082[(12)] = inst_26986__$1);

return statearr_27082;
})();
var statearr_27084_27190 = state_27049__$1;
(statearr_27084_27190[(2)] = null);

(statearr_27084_27190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (40))){
var inst_27014 = (state_27049[(23)]);
var inst_27019 = done(null);
var inst_27020 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27014);
var state_27049__$1 = (function (){var statearr_27085 = state_27049;
(statearr_27085[(24)] = inst_27019);

return statearr_27085;
})();
var statearr_27086_27191 = state_27049__$1;
(statearr_27086_27191[(2)] = inst_27020);

(statearr_27086_27191[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (33))){
var inst_27005 = (state_27049[(25)]);
var inst_27007 = cljs.core.chunked_seq_QMARK_(inst_27005);
var state_27049__$1 = state_27049;
if(inst_27007){
var statearr_27087_27192 = state_27049__$1;
(statearr_27087_27192[(1)] = (36));

} else {
var statearr_27088_27193 = state_27049__$1;
(statearr_27088_27193[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (13))){
var inst_26934 = (state_27049[(26)]);
var inst_26937 = cljs.core.async.close_BANG_(inst_26934);
var state_27049__$1 = state_27049;
var statearr_27089_27194 = state_27049__$1;
(statearr_27089_27194[(2)] = inst_26937);

(statearr_27089_27194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (22))){
var inst_26956 = (state_27049[(8)]);
var inst_26959 = cljs.core.async.close_BANG_(inst_26956);
var state_27049__$1 = state_27049;
var statearr_27090_27197 = state_27049__$1;
(statearr_27090_27197[(2)] = inst_26959);

(statearr_27090_27197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (36))){
var inst_27005 = (state_27049[(25)]);
var inst_27009 = cljs.core.chunk_first(inst_27005);
var inst_27010 = cljs.core.chunk_rest(inst_27005);
var inst_27011 = cljs.core.count(inst_27009);
var inst_26985 = inst_27010;
var inst_26986 = inst_27009;
var inst_26987 = inst_27011;
var inst_26988 = (0);
var state_27049__$1 = (function (){var statearr_27091 = state_27049;
(statearr_27091[(20)] = inst_26987);

(statearr_27091[(11)] = inst_26988);

(statearr_27091[(21)] = inst_26985);

(statearr_27091[(12)] = inst_26986);

return statearr_27091;
})();
var statearr_27092_27198 = state_27049__$1;
(statearr_27092_27198[(2)] = null);

(statearr_27092_27198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (41))){
var inst_27005 = (state_27049[(25)]);
var inst_27022 = (state_27049[(2)]);
var inst_27023 = cljs.core.next(inst_27005);
var inst_26985 = inst_27023;
var inst_26986 = null;
var inst_26987 = (0);
var inst_26988 = (0);
var state_27049__$1 = (function (){var statearr_27093 = state_27049;
(statearr_27093[(20)] = inst_26987);

(statearr_27093[(11)] = inst_26988);

(statearr_27093[(27)] = inst_27022);

(statearr_27093[(21)] = inst_26985);

(statearr_27093[(12)] = inst_26986);

return statearr_27093;
})();
var statearr_27094_27199 = state_27049__$1;
(statearr_27094_27199[(2)] = null);

(statearr_27094_27199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (43))){
var state_27049__$1 = state_27049;
var statearr_27095_27200 = state_27049__$1;
(statearr_27095_27200[(2)] = null);

(statearr_27095_27200[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (29))){
var inst_27031 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27096_27201 = state_27049__$1;
(statearr_27096_27201[(2)] = inst_27031);

(statearr_27096_27201[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (44))){
var inst_27040 = (state_27049[(2)]);
var state_27049__$1 = (function (){var statearr_27097 = state_27049;
(statearr_27097[(28)] = inst_27040);

return statearr_27097;
})();
var statearr_27098_27202 = state_27049__$1;
(statearr_27098_27202[(2)] = null);

(statearr_27098_27202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (6))){
var inst_26976 = (state_27049[(29)]);
var inst_26975 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_26976__$1 = cljs.core.keys(inst_26975);
var inst_26977 = cljs.core.count(inst_26976__$1);
var inst_26978 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_26977) : cljs.core.reset_BANG_.call(null,dctr,inst_26977));
var inst_26984 = cljs.core.seq(inst_26976__$1);
var inst_26985 = inst_26984;
var inst_26986 = null;
var inst_26987 = (0);
var inst_26988 = (0);
var state_27049__$1 = (function (){var statearr_27099 = state_27049;
(statearr_27099[(29)] = inst_26976__$1);

(statearr_27099[(20)] = inst_26987);

(statearr_27099[(11)] = inst_26988);

(statearr_27099[(30)] = inst_26978);

(statearr_27099[(21)] = inst_26985);

(statearr_27099[(12)] = inst_26986);

return statearr_27099;
})();
var statearr_27100_27209 = state_27049__$1;
(statearr_27100_27209[(2)] = null);

(statearr_27100_27209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (28))){
var inst_27005 = (state_27049[(25)]);
var inst_26985 = (state_27049[(21)]);
var inst_27005__$1 = cljs.core.seq(inst_26985);
var state_27049__$1 = (function (){var statearr_27101 = state_27049;
(statearr_27101[(25)] = inst_27005__$1);

return statearr_27101;
})();
if(inst_27005__$1){
var statearr_27102_27215 = state_27049__$1;
(statearr_27102_27215[(1)] = (33));

} else {
var statearr_27103_27217 = state_27049__$1;
(statearr_27103_27217[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (25))){
var inst_26987 = (state_27049[(20)]);
var inst_26988 = (state_27049[(11)]);
var inst_26990 = (inst_26988 < inst_26987);
var inst_26991 = inst_26990;
var state_27049__$1 = state_27049;
if(cljs.core.truth_(inst_26991)){
var statearr_27104_27218 = state_27049__$1;
(statearr_27104_27218[(1)] = (27));

} else {
var statearr_27105_27219 = state_27049__$1;
(statearr_27105_27219[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (34))){
var state_27049__$1 = state_27049;
var statearr_27106_27220 = state_27049__$1;
(statearr_27106_27220[(2)] = null);

(statearr_27106_27220[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (17))){
var state_27049__$1 = state_27049;
var statearr_27107_27221 = state_27049__$1;
(statearr_27107_27221[(2)] = null);

(statearr_27107_27221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (3))){
var inst_27045 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27049__$1,inst_27045);
} else {
if((state_val_27050 === (12))){
var inst_26971 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27108_27222 = state_27049__$1;
(statearr_27108_27222[(2)] = inst_26971);

(statearr_27108_27222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (2))){
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27049__$1,(4),ch);
} else {
if((state_val_27050 === (23))){
var state_27049__$1 = state_27049;
var statearr_27109_27223 = state_27049__$1;
(statearr_27109_27223[(2)] = null);

(statearr_27109_27223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (35))){
var inst_27029 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27110_27224 = state_27049__$1;
(statearr_27110_27224[(2)] = inst_27029);

(statearr_27110_27224[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (19))){
var inst_26944 = (state_27049[(7)]);
var inst_26948 = cljs.core.chunk_first(inst_26944);
var inst_26949 = cljs.core.chunk_rest(inst_26944);
var inst_26950 = cljs.core.count(inst_26948);
var inst_26924 = inst_26949;
var inst_26925 = inst_26948;
var inst_26926 = inst_26950;
var inst_26927 = (0);
var state_27049__$1 = (function (){var statearr_27111 = state_27049;
(statearr_27111[(13)] = inst_26925);

(statearr_27111[(14)] = inst_26926);

(statearr_27111[(15)] = inst_26927);

(statearr_27111[(17)] = inst_26924);

return statearr_27111;
})();
var statearr_27112_27230 = state_27049__$1;
(statearr_27112_27230[(2)] = null);

(statearr_27112_27230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (11))){
var inst_26924 = (state_27049[(17)]);
var inst_26944 = (state_27049[(7)]);
var inst_26944__$1 = cljs.core.seq(inst_26924);
var state_27049__$1 = (function (){var statearr_27113 = state_27049;
(statearr_27113[(7)] = inst_26944__$1);

return statearr_27113;
})();
if(inst_26944__$1){
var statearr_27114_27234 = state_27049__$1;
(statearr_27114_27234[(1)] = (16));

} else {
var statearr_27115_27235 = state_27049__$1;
(statearr_27115_27235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (9))){
var inst_26973 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27116_27238 = state_27049__$1;
(statearr_27116_27238[(2)] = inst_26973);

(statearr_27116_27238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (5))){
var inst_26922 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_26923 = cljs.core.seq(inst_26922);
var inst_26924 = inst_26923;
var inst_26925 = null;
var inst_26926 = (0);
var inst_26927 = (0);
var state_27049__$1 = (function (){var statearr_27117 = state_27049;
(statearr_27117[(13)] = inst_26925);

(statearr_27117[(14)] = inst_26926);

(statearr_27117[(15)] = inst_26927);

(statearr_27117[(17)] = inst_26924);

return statearr_27117;
})();
var statearr_27118_27242 = state_27049__$1;
(statearr_27118_27242[(2)] = null);

(statearr_27118_27242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (14))){
var state_27049__$1 = state_27049;
var statearr_27119_27245 = state_27049__$1;
(statearr_27119_27245[(2)] = null);

(statearr_27119_27245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (45))){
var inst_27037 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27120_27246 = state_27049__$1;
(statearr_27120_27246[(2)] = inst_27037);

(statearr_27120_27246[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (26))){
var inst_26976 = (state_27049[(29)]);
var inst_27033 = (state_27049[(2)]);
var inst_27034 = cljs.core.seq(inst_26976);
var state_27049__$1 = (function (){var statearr_27121 = state_27049;
(statearr_27121[(31)] = inst_27033);

return statearr_27121;
})();
if(inst_27034){
var statearr_27122_27248 = state_27049__$1;
(statearr_27122_27248[(1)] = (42));

} else {
var statearr_27123_27249 = state_27049__$1;
(statearr_27123_27249[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (16))){
var inst_26944 = (state_27049[(7)]);
var inst_26946 = cljs.core.chunked_seq_QMARK_(inst_26944);
var state_27049__$1 = state_27049;
if(inst_26946){
var statearr_27124_27250 = state_27049__$1;
(statearr_27124_27250[(1)] = (19));

} else {
var statearr_27125_27251 = state_27049__$1;
(statearr_27125_27251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (38))){
var inst_27026 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27126_27252 = state_27049__$1;
(statearr_27126_27252[(2)] = inst_27026);

(statearr_27126_27252[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (30))){
var state_27049__$1 = state_27049;
var statearr_27127_27253 = state_27049__$1;
(statearr_27127_27253[(2)] = null);

(statearr_27127_27253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (10))){
var inst_26925 = (state_27049[(13)]);
var inst_26927 = (state_27049[(15)]);
var inst_26933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26925,inst_26927);
var inst_26934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26933,(0),null);
var inst_26935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26933,(1),null);
var state_27049__$1 = (function (){var statearr_27128 = state_27049;
(statearr_27128[(26)] = inst_26934);

return statearr_27128;
})();
if(cljs.core.truth_(inst_26935)){
var statearr_27129_27254 = state_27049__$1;
(statearr_27129_27254[(1)] = (13));

} else {
var statearr_27130_27255 = state_27049__$1;
(statearr_27130_27255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (18))){
var inst_26969 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27131_27256 = state_27049__$1;
(statearr_27131_27256[(2)] = inst_26969);

(statearr_27131_27256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (42))){
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27049__$1,(45),dchan);
} else {
if((state_val_27050 === (37))){
var inst_26914 = (state_27049[(9)]);
var inst_27014 = (state_27049[(23)]);
var inst_27005 = (state_27049[(25)]);
var inst_27014__$1 = cljs.core.first(inst_27005);
var inst_27016 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27014__$1,inst_26914,done);
var state_27049__$1 = (function (){var statearr_27132 = state_27049;
(statearr_27132[(23)] = inst_27014__$1);

return statearr_27132;
})();
if(cljs.core.truth_(inst_27016)){
var statearr_27133_27259 = state_27049__$1;
(statearr_27133_27259[(1)] = (39));

} else {
var statearr_27134_27261 = state_27049__$1;
(statearr_27134_27261[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (8))){
var inst_26926 = (state_27049[(14)]);
var inst_26927 = (state_27049[(15)]);
var inst_26929 = (inst_26927 < inst_26926);
var inst_26930 = inst_26929;
var state_27049__$1 = state_27049;
if(cljs.core.truth_(inst_26930)){
var statearr_27135_27263 = state_27049__$1;
(statearr_27135_27263[(1)] = (10));

} else {
var statearr_27136_27264 = state_27049__$1;
(statearr_27136_27264[(1)] = (11));

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
});})(c__25338__auto___27165,cs,m,dchan,dctr,done))
;
return ((function (switch__24892__auto__,c__25338__auto___27165,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24893__auto__ = null;
var cljs$core$async$mult_$_state_machine__24893__auto____0 = (function (){
var statearr_27140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27140[(0)] = cljs$core$async$mult_$_state_machine__24893__auto__);

(statearr_27140[(1)] = (1));

return statearr_27140;
});
var cljs$core$async$mult_$_state_machine__24893__auto____1 = (function (state_27049){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_27049);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e27141){if((e27141 instanceof Object)){
var ex__24896__auto__ = e27141;
var statearr_27142_27265 = state_27049;
(statearr_27142_27265[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27266 = state_27049;
state_27049 = G__27266;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24893__auto__ = function(state_27049){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24893__auto____1.call(this,state_27049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24893__auto____0;
cljs$core$async$mult_$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24893__auto____1;
return cljs$core$async$mult_$_state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___27165,cs,m,dchan,dctr,done))
})();
var state__25340__auto__ = (function (){var statearr_27143 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_27143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___27165);

return statearr_27143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___27165,cs,m,dchan,dctr,done))
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
var args27267 = [];
var len__19677__auto___27273 = arguments.length;
var i__19678__auto___27274 = (0);
while(true){
if((i__19678__auto___27274 < len__19677__auto___27273)){
args27267.push((arguments[i__19678__auto___27274]));

var G__27281 = (i__19678__auto___27274 + (1));
i__19678__auto___27274 = G__27281;
continue;
} else {
}
break;
}

var G__27270 = args27267.length;
switch (G__27270) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27267.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19274__auto__ = (((m == null))?null:m);
var m__19275__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__19275__auto__.call(null,m,ch));
} else {
var m__19275__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__19275__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19274__auto__ = (((m == null))?null:m);
var m__19275__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__19275__auto__.call(null,m,ch));
} else {
var m__19275__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__19275__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19274__auto__ = (((m == null))?null:m);
var m__19275__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__19275__auto__.call(null,m));
} else {
var m__19275__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__19275__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19274__auto__ = (((m == null))?null:m);
var m__19275__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__19275__auto__.call(null,m,state_map));
} else {
var m__19275__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__19275__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19274__auto__ = (((m == null))?null:m);
var m__19275__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__19275__auto__.call(null,m,mode));
} else {
var m__19275__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__19275__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19684__auto__ = [];
var len__19677__auto___27331 = arguments.length;
var i__19678__auto___27332 = (0);
while(true){
if((i__19678__auto___27332 < len__19677__auto___27331)){
args__19684__auto__.push((arguments[i__19678__auto___27332]));

var G__27333 = (i__19678__auto___27332 + (1));
i__19678__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var argseq__19685__auto__ = ((((3) < args__19684__auto__.length))?(new cljs.core.IndexedSeq(args__19684__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19685__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27319){
var map__27320 = p__27319;
var map__27320__$1 = ((((!((map__27320 == null)))?((((map__27320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27320):map__27320);
var opts = map__27320__$1;
var statearr_27322_27334 = state;
(statearr_27322_27334[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__27320,map__27320__$1,opts){
return (function (val){
var statearr_27324_27335 = state;
(statearr_27324_27335[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__27320,map__27320__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27327_27337 = state;
(statearr_27327_27337[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27315){
var G__27316 = cljs.core.first(seq27315);
var seq27315__$1 = cljs.core.next(seq27315);
var G__27317 = cljs.core.first(seq27315__$1);
var seq27315__$2 = cljs.core.next(seq27315__$1);
var G__27318 = cljs.core.first(seq27315__$2);
var seq27315__$3 = cljs.core.next(seq27315__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27316,G__27317,G__27318,seq27315__$3);
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
var cs = (function (){var G__27531 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27531) : cljs.core.atom.call(null,G__27531));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646)) : cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646)));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27532 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27533){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27533 = meta27533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27534,meta27533__$1){
var self__ = this;
var _27534__$1 = this;
return (new cljs.core.async.t_cljs$core$async27532(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27533__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27534){
var self__ = this;
var _27534__$1 = this;
return self__.meta27533;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__27535_27727 = self__.cs;
var G__27536_27728 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27535_27727,G__27536_27728) : cljs.core.reset_BANG_.call(null,G__27535_27727,G__27536_27728));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27533","meta27533",-230107773,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27532";

cljs.core.async.t_cljs$core$async27532.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async27532");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27532 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27532(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27533){
return (new cljs.core.async.t_cljs$core$async27532(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27533));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27532(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25338__auto___27741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___27741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___27741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27642){
var state_val_27643 = (state_27642[(1)]);
if((state_val_27643 === (7))){
var inst_27552 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
var statearr_27644_27751 = state_27642__$1;
(statearr_27644_27751[(2)] = inst_27552);

(statearr_27644_27751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (20))){
var inst_27565 = (state_27642[(7)]);
var state_27642__$1 = state_27642;
var statearr_27645_27753 = state_27642__$1;
(statearr_27645_27753[(2)] = inst_27565);

(statearr_27645_27753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (27))){
var state_27642__$1 = state_27642;
var statearr_27646_27757 = state_27642__$1;
(statearr_27646_27757[(2)] = null);

(statearr_27646_27757[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (1))){
var inst_27540 = (state_27642[(8)]);
var inst_27540__$1 = calc_state();
var inst_27542 = (inst_27540__$1 == null);
var inst_27543 = cljs.core.not(inst_27542);
var state_27642__$1 = (function (){var statearr_27647 = state_27642;
(statearr_27647[(8)] = inst_27540__$1);

return statearr_27647;
})();
if(inst_27543){
var statearr_27648_27764 = state_27642__$1;
(statearr_27648_27764[(1)] = (2));

} else {
var statearr_27649_27766 = state_27642__$1;
(statearr_27649_27766[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (24))){
var inst_27591 = (state_27642[(9)]);
var inst_27598 = (state_27642[(10)]);
var inst_27616 = (state_27642[(11)]);
var inst_27616__$1 = (inst_27591.cljs$core$IFn$_invoke$arity$1 ? inst_27591.cljs$core$IFn$_invoke$arity$1(inst_27598) : inst_27591.call(null,inst_27598));
var state_27642__$1 = (function (){var statearr_27650 = state_27642;
(statearr_27650[(11)] = inst_27616__$1);

return statearr_27650;
})();
if(cljs.core.truth_(inst_27616__$1)){
var statearr_27651_27767 = state_27642__$1;
(statearr_27651_27767[(1)] = (29));

} else {
var statearr_27652_27769 = state_27642__$1;
(statearr_27652_27769[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (4))){
var inst_27556 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
if(cljs.core.truth_(inst_27556)){
var statearr_27653_27772 = state_27642__$1;
(statearr_27653_27772[(1)] = (8));

} else {
var statearr_27654_27776 = state_27642__$1;
(statearr_27654_27776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (15))){
var inst_27583 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
if(cljs.core.truth_(inst_27583)){
var statearr_27655_27780 = state_27642__$1;
(statearr_27655_27780[(1)] = (19));

} else {
var statearr_27656_27781 = state_27642__$1;
(statearr_27656_27781[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (21))){
var inst_27590 = (state_27642[(12)]);
var inst_27590__$1 = (state_27642[(2)]);
var inst_27591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27590__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27590__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27590__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27642__$1 = (function (){var statearr_27657 = state_27642;
(statearr_27657[(12)] = inst_27590__$1);

(statearr_27657[(9)] = inst_27591);

(statearr_27657[(13)] = inst_27592);

return statearr_27657;
})();
return cljs.core.async.ioc_alts_BANG_(state_27642__$1,(22),inst_27593);
} else {
if((state_val_27643 === (31))){
var inst_27624 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
if(cljs.core.truth_(inst_27624)){
var statearr_27658_27783 = state_27642__$1;
(statearr_27658_27783[(1)] = (32));

} else {
var statearr_27659_27784 = state_27642__$1;
(statearr_27659_27784[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (32))){
var inst_27597 = (state_27642[(14)]);
var state_27642__$1 = state_27642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27642__$1,(35),out,inst_27597);
} else {
if((state_val_27643 === (33))){
var inst_27590 = (state_27642[(12)]);
var inst_27565 = inst_27590;
var state_27642__$1 = (function (){var statearr_27660 = state_27642;
(statearr_27660[(7)] = inst_27565);

return statearr_27660;
})();
var statearr_27661_27785 = state_27642__$1;
(statearr_27661_27785[(2)] = null);

(statearr_27661_27785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (13))){
var inst_27565 = (state_27642[(7)]);
var inst_27572 = inst_27565.cljs$lang$protocol_mask$partition0$;
var inst_27573 = (inst_27572 & (64));
var inst_27575 = inst_27565.cljs$core$ISeq$;
var inst_27576 = (inst_27573) || (inst_27575);
var state_27642__$1 = state_27642;
if(cljs.core.truth_(inst_27576)){
var statearr_27662_27786 = state_27642__$1;
(statearr_27662_27786[(1)] = (16));

} else {
var statearr_27663_27787 = state_27642__$1;
(statearr_27663_27787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (22))){
var inst_27598 = (state_27642[(10)]);
var inst_27597 = (state_27642[(14)]);
var inst_27596 = (state_27642[(2)]);
var inst_27597__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27596,(0),null);
var inst_27598__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27596,(1),null);
var inst_27603 = (inst_27597__$1 == null);
var inst_27604 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27598__$1,change);
var inst_27605 = (inst_27603) || (inst_27604);
var state_27642__$1 = (function (){var statearr_27664 = state_27642;
(statearr_27664[(10)] = inst_27598__$1);

(statearr_27664[(14)] = inst_27597__$1);

return statearr_27664;
})();
if(cljs.core.truth_(inst_27605)){
var statearr_27665_27793 = state_27642__$1;
(statearr_27665_27793[(1)] = (23));

} else {
var statearr_27666_27794 = state_27642__$1;
(statearr_27666_27794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (36))){
var inst_27590 = (state_27642[(12)]);
var inst_27565 = inst_27590;
var state_27642__$1 = (function (){var statearr_27667 = state_27642;
(statearr_27667[(7)] = inst_27565);

return statearr_27667;
})();
var statearr_27668_27798 = state_27642__$1;
(statearr_27668_27798[(2)] = null);

(statearr_27668_27798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (29))){
var inst_27616 = (state_27642[(11)]);
var state_27642__$1 = state_27642;
var statearr_27669_27799 = state_27642__$1;
(statearr_27669_27799[(2)] = inst_27616);

(statearr_27669_27799[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (6))){
var state_27642__$1 = state_27642;
var statearr_27670_27800 = state_27642__$1;
(statearr_27670_27800[(2)] = false);

(statearr_27670_27800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (28))){
var inst_27612 = (state_27642[(2)]);
var inst_27613 = calc_state();
var inst_27565 = inst_27613;
var state_27642__$1 = (function (){var statearr_27671 = state_27642;
(statearr_27671[(15)] = inst_27612);

(statearr_27671[(7)] = inst_27565);

return statearr_27671;
})();
var statearr_27672_27801 = state_27642__$1;
(statearr_27672_27801[(2)] = null);

(statearr_27672_27801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (25))){
var inst_27638 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
var statearr_27673_27803 = state_27642__$1;
(statearr_27673_27803[(2)] = inst_27638);

(statearr_27673_27803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (34))){
var inst_27636 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
var statearr_27674_27805 = state_27642__$1;
(statearr_27674_27805[(2)] = inst_27636);

(statearr_27674_27805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (17))){
var state_27642__$1 = state_27642;
var statearr_27675_27808 = state_27642__$1;
(statearr_27675_27808[(2)] = false);

(statearr_27675_27808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (3))){
var state_27642__$1 = state_27642;
var statearr_27676_27809 = state_27642__$1;
(statearr_27676_27809[(2)] = false);

(statearr_27676_27809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (12))){
var inst_27640 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27642__$1,inst_27640);
} else {
if((state_val_27643 === (2))){
var inst_27540 = (state_27642[(8)]);
var inst_27545 = inst_27540.cljs$lang$protocol_mask$partition0$;
var inst_27546 = (inst_27545 & (64));
var inst_27547 = inst_27540.cljs$core$ISeq$;
var inst_27548 = (inst_27546) || (inst_27547);
var state_27642__$1 = state_27642;
if(cljs.core.truth_(inst_27548)){
var statearr_27677_27813 = state_27642__$1;
(statearr_27677_27813[(1)] = (5));

} else {
var statearr_27678_27814 = state_27642__$1;
(statearr_27678_27814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (23))){
var inst_27597 = (state_27642[(14)]);
var inst_27607 = (inst_27597 == null);
var state_27642__$1 = state_27642;
if(cljs.core.truth_(inst_27607)){
var statearr_27679_27815 = state_27642__$1;
(statearr_27679_27815[(1)] = (26));

} else {
var statearr_27680_27816 = state_27642__$1;
(statearr_27680_27816[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (35))){
var inst_27627 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
if(cljs.core.truth_(inst_27627)){
var statearr_27681_27818 = state_27642__$1;
(statearr_27681_27818[(1)] = (36));

} else {
var statearr_27682_27820 = state_27642__$1;
(statearr_27682_27820[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (19))){
var inst_27565 = (state_27642[(7)]);
var inst_27587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27565);
var state_27642__$1 = state_27642;
var statearr_27683_27823 = state_27642__$1;
(statearr_27683_27823[(2)] = inst_27587);

(statearr_27683_27823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (11))){
var inst_27565 = (state_27642[(7)]);
var inst_27569 = (inst_27565 == null);
var inst_27570 = cljs.core.not(inst_27569);
var state_27642__$1 = state_27642;
if(inst_27570){
var statearr_27684_27825 = state_27642__$1;
(statearr_27684_27825[(1)] = (13));

} else {
var statearr_27685_27826 = state_27642__$1;
(statearr_27685_27826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (9))){
var inst_27540 = (state_27642[(8)]);
var state_27642__$1 = state_27642;
var statearr_27686_27827 = state_27642__$1;
(statearr_27686_27827[(2)] = inst_27540);

(statearr_27686_27827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (5))){
var state_27642__$1 = state_27642;
var statearr_27687_27828 = state_27642__$1;
(statearr_27687_27828[(2)] = true);

(statearr_27687_27828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (14))){
var state_27642__$1 = state_27642;
var statearr_27688_27829 = state_27642__$1;
(statearr_27688_27829[(2)] = false);

(statearr_27688_27829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (26))){
var inst_27598 = (state_27642[(10)]);
var inst_27609 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27598);
var state_27642__$1 = state_27642;
var statearr_27689_27830 = state_27642__$1;
(statearr_27689_27830[(2)] = inst_27609);

(statearr_27689_27830[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (16))){
var state_27642__$1 = state_27642;
var statearr_27690_27831 = state_27642__$1;
(statearr_27690_27831[(2)] = true);

(statearr_27690_27831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (38))){
var inst_27632 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
var statearr_27691_27832 = state_27642__$1;
(statearr_27691_27832[(2)] = inst_27632);

(statearr_27691_27832[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (30))){
var inst_27591 = (state_27642[(9)]);
var inst_27598 = (state_27642[(10)]);
var inst_27592 = (state_27642[(13)]);
var inst_27619 = cljs.core.empty_QMARK_(inst_27591);
var inst_27620 = (inst_27592.cljs$core$IFn$_invoke$arity$1 ? inst_27592.cljs$core$IFn$_invoke$arity$1(inst_27598) : inst_27592.call(null,inst_27598));
var inst_27621 = cljs.core.not(inst_27620);
var inst_27622 = (inst_27619) && (inst_27621);
var state_27642__$1 = state_27642;
var statearr_27692_27833 = state_27642__$1;
(statearr_27692_27833[(2)] = inst_27622);

(statearr_27692_27833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (10))){
var inst_27540 = (state_27642[(8)]);
var inst_27561 = (state_27642[(2)]);
var inst_27562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27561,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27561,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27561,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27565 = inst_27540;
var state_27642__$1 = (function (){var statearr_27693 = state_27642;
(statearr_27693[(16)] = inst_27563);

(statearr_27693[(17)] = inst_27564);

(statearr_27693[(7)] = inst_27565);

(statearr_27693[(18)] = inst_27562);

return statearr_27693;
})();
var statearr_27694_27834 = state_27642__$1;
(statearr_27694_27834[(2)] = null);

(statearr_27694_27834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (18))){
var inst_27580 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
var statearr_27695_27835 = state_27642__$1;
(statearr_27695_27835[(2)] = inst_27580);

(statearr_27695_27835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (37))){
var state_27642__$1 = state_27642;
var statearr_27696_27836 = state_27642__$1;
(statearr_27696_27836[(2)] = null);

(statearr_27696_27836[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (8))){
var inst_27540 = (state_27642[(8)]);
var inst_27558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27540);
var state_27642__$1 = state_27642;
var statearr_27697_27837 = state_27642__$1;
(statearr_27697_27837[(2)] = inst_27558);

(statearr_27697_27837[(1)] = (10));


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
});})(c__25338__auto___27741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24892__auto__,c__25338__auto___27741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24893__auto__ = null;
var cljs$core$async$mix_$_state_machine__24893__auto____0 = (function (){
var statearr_27701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27701[(0)] = cljs$core$async$mix_$_state_machine__24893__auto__);

(statearr_27701[(1)] = (1));

return statearr_27701;
});
var cljs$core$async$mix_$_state_machine__24893__auto____1 = (function (state_27642){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_27642);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e27702){if((e27702 instanceof Object)){
var ex__24896__auto__ = e27702;
var statearr_27703_27838 = state_27642;
(statearr_27703_27838[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27839 = state_27642;
state_27642 = G__27839;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24893__auto__ = function(state_27642){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24893__auto____1.call(this,state_27642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24893__auto____0;
cljs$core$async$mix_$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24893__auto____1;
return cljs$core$async$mix_$_state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___27741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25340__auto__ = (function (){var statearr_27704 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_27704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___27741);

return statearr_27704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___27741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19274__auto__ = (((p == null))?null:p);
var m__19275__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$4 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__19275__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__19275__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__19275__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19274__auto__ = (((p == null))?null:p);
var m__19275__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$3 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__19275__auto__.call(null,p,v,ch));
} else {
var m__19275__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__19275__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27840 = [];
var len__19677__auto___27847 = arguments.length;
var i__19678__auto___27848 = (0);
while(true){
if((i__19678__auto___27848 < len__19677__auto___27847)){
args27840.push((arguments[i__19678__auto___27848]));

var G__27849 = (i__19678__auto___27848 + (1));
i__19678__auto___27848 = G__27849;
continue;
} else {
}
break;
}

var G__27842 = args27840.length;
switch (G__27842) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27840.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19274__auto__ = (((p == null))?null:p);
var m__19275__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__19275__auto__.call(null,p));
} else {
var m__19275__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__19275__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19274__auto__ = (((p == null))?null:p);
var m__19275__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__19275__auto__.call(null,p,v));
} else {
var m__19275__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__19275__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var args27856 = [];
var len__19677__auto___28008 = arguments.length;
var i__19678__auto___28009 = (0);
while(true){
if((i__19678__auto___28009 < len__19677__auto___28008)){
args27856.push((arguments[i__19678__auto___28009]));

var G__28010 = (i__19678__auto___28009 + (1));
i__19678__auto___28009 = G__28010;
continue;
} else {
}
break;
}

var G__27861 = args27856.length;
switch (G__27861) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27856.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__27862 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27862) : cljs.core.atom.call(null,G__27862));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__18619__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__18619__auto__,mults){
return (function (p1__27854_SHARP_){
if(cljs.core.truth_((p1__27854_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27854_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__27854_SHARP_.call(null,topic)))){
return p1__27854_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27854_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__18619__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27864 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27865){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27865 = meta27865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27866,meta27865__$1){
var self__ = this;
var _27866__$1 = this;
return (new cljs.core.async.t_cljs$core$async27864(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27865__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27866){
var self__ = this;
var _27866__$1 = this;
return self__.meta27865;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__27871 = self__.mults;
var G__27872 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27871,G__27872) : cljs.core.reset_BANG_.call(null,G__27871,G__27872));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27864.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27864.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27865","meta27865",19878624,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27864.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27864";

cljs.core.async.t_cljs$core$async27864.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async27864");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27864 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27864(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27865){
return (new cljs.core.async.t_cljs$core$async27864(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27865));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27864(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25338__auto___28012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___28012,mults,ensure_mult,p){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___28012,mults,ensure_mult,p){
return (function (state_27949){
var state_val_27950 = (state_27949[(1)]);
if((state_val_27950 === (7))){
var inst_27945 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27952_28013 = state_27949__$1;
(statearr_27952_28013[(2)] = inst_27945);

(statearr_27952_28013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (20))){
var state_27949__$1 = state_27949;
var statearr_27954_28014 = state_27949__$1;
(statearr_27954_28014[(2)] = null);

(statearr_27954_28014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (1))){
var state_27949__$1 = state_27949;
var statearr_27955_28015 = state_27949__$1;
(statearr_27955_28015[(2)] = null);

(statearr_27955_28015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (24))){
var inst_27928 = (state_27949[(7)]);
var inst_27937 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27928);
var state_27949__$1 = state_27949;
var statearr_27957_28016 = state_27949__$1;
(statearr_27957_28016[(2)] = inst_27937);

(statearr_27957_28016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (4))){
var inst_27877 = (state_27949[(8)]);
var inst_27877__$1 = (state_27949[(2)]);
var inst_27878 = (inst_27877__$1 == null);
var state_27949__$1 = (function (){var statearr_27959 = state_27949;
(statearr_27959[(8)] = inst_27877__$1);

return statearr_27959;
})();
if(cljs.core.truth_(inst_27878)){
var statearr_27960_28017 = state_27949__$1;
(statearr_27960_28017[(1)] = (5));

} else {
var statearr_27961_28018 = state_27949__$1;
(statearr_27961_28018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (15))){
var inst_27922 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27962_28019 = state_27949__$1;
(statearr_27962_28019[(2)] = inst_27922);

(statearr_27962_28019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (21))){
var inst_27942 = (state_27949[(2)]);
var state_27949__$1 = (function (){var statearr_27963 = state_27949;
(statearr_27963[(9)] = inst_27942);

return statearr_27963;
})();
var statearr_27964_28020 = state_27949__$1;
(statearr_27964_28020[(2)] = null);

(statearr_27964_28020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (13))){
var inst_27903 = (state_27949[(10)]);
var inst_27905 = cljs.core.chunked_seq_QMARK_(inst_27903);
var state_27949__$1 = state_27949;
if(inst_27905){
var statearr_27965_28021 = state_27949__$1;
(statearr_27965_28021[(1)] = (16));

} else {
var statearr_27966_28022 = state_27949__$1;
(statearr_27966_28022[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (22))){
var inst_27934 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
if(cljs.core.truth_(inst_27934)){
var statearr_27967_28023 = state_27949__$1;
(statearr_27967_28023[(1)] = (23));

} else {
var statearr_27968_28024 = state_27949__$1;
(statearr_27968_28024[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (6))){
var inst_27928 = (state_27949[(7)]);
var inst_27877 = (state_27949[(8)]);
var inst_27930 = (state_27949[(11)]);
var inst_27928__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_27877) : topic_fn.call(null,inst_27877));
var inst_27929 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_27930__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27929,inst_27928__$1);
var state_27949__$1 = (function (){var statearr_27969 = state_27949;
(statearr_27969[(7)] = inst_27928__$1);

(statearr_27969[(11)] = inst_27930__$1);

return statearr_27969;
})();
if(cljs.core.truth_(inst_27930__$1)){
var statearr_27971_28025 = state_27949__$1;
(statearr_27971_28025[(1)] = (19));

} else {
var statearr_27972_28026 = state_27949__$1;
(statearr_27972_28026[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (25))){
var inst_27939 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27973_28027 = state_27949__$1;
(statearr_27973_28027[(2)] = inst_27939);

(statearr_27973_28027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (17))){
var inst_27903 = (state_27949[(10)]);
var inst_27912 = cljs.core.first(inst_27903);
var inst_27913 = cljs.core.async.muxch_STAR_(inst_27912);
var inst_27914 = cljs.core.async.close_BANG_(inst_27913);
var inst_27915 = cljs.core.next(inst_27903);
var inst_27888 = inst_27915;
var inst_27889 = null;
var inst_27890 = (0);
var inst_27891 = (0);
var state_27949__$1 = (function (){var statearr_27974 = state_27949;
(statearr_27974[(12)] = inst_27889);

(statearr_27974[(13)] = inst_27914);

(statearr_27974[(14)] = inst_27890);

(statearr_27974[(15)] = inst_27888);

(statearr_27974[(16)] = inst_27891);

return statearr_27974;
})();
var statearr_27976_28028 = state_27949__$1;
(statearr_27976_28028[(2)] = null);

(statearr_27976_28028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (3))){
var inst_27947 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27949__$1,inst_27947);
} else {
if((state_val_27950 === (12))){
var inst_27924 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27977_28029 = state_27949__$1;
(statearr_27977_28029[(2)] = inst_27924);

(statearr_27977_28029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (2))){
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27949__$1,(4),ch);
} else {
if((state_val_27950 === (23))){
var state_27949__$1 = state_27949;
var statearr_27979_28030 = state_27949__$1;
(statearr_27979_28030[(2)] = null);

(statearr_27979_28030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (19))){
var inst_27877 = (state_27949[(8)]);
var inst_27930 = (state_27949[(11)]);
var inst_27932 = cljs.core.async.muxch_STAR_(inst_27930);
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27949__$1,(22),inst_27932,inst_27877);
} else {
if((state_val_27950 === (11))){
var inst_27903 = (state_27949[(10)]);
var inst_27888 = (state_27949[(15)]);
var inst_27903__$1 = cljs.core.seq(inst_27888);
var state_27949__$1 = (function (){var statearr_27980 = state_27949;
(statearr_27980[(10)] = inst_27903__$1);

return statearr_27980;
})();
if(inst_27903__$1){
var statearr_27981_28031 = state_27949__$1;
(statearr_27981_28031[(1)] = (13));

} else {
var statearr_27982_28032 = state_27949__$1;
(statearr_27982_28032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (9))){
var inst_27926 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27983_28033 = state_27949__$1;
(statearr_27983_28033[(2)] = inst_27926);

(statearr_27983_28033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (5))){
var inst_27885 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_27886 = cljs.core.vals(inst_27885);
var inst_27887 = cljs.core.seq(inst_27886);
var inst_27888 = inst_27887;
var inst_27889 = null;
var inst_27890 = (0);
var inst_27891 = (0);
var state_27949__$1 = (function (){var statearr_27986 = state_27949;
(statearr_27986[(12)] = inst_27889);

(statearr_27986[(14)] = inst_27890);

(statearr_27986[(15)] = inst_27888);

(statearr_27986[(16)] = inst_27891);

return statearr_27986;
})();
var statearr_27987_28034 = state_27949__$1;
(statearr_27987_28034[(2)] = null);

(statearr_27987_28034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (14))){
var state_27949__$1 = state_27949;
var statearr_27992_28035 = state_27949__$1;
(statearr_27992_28035[(2)] = null);

(statearr_27992_28035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (16))){
var inst_27903 = (state_27949[(10)]);
var inst_27907 = cljs.core.chunk_first(inst_27903);
var inst_27908 = cljs.core.chunk_rest(inst_27903);
var inst_27909 = cljs.core.count(inst_27907);
var inst_27888 = inst_27908;
var inst_27889 = inst_27907;
var inst_27890 = inst_27909;
var inst_27891 = (0);
var state_27949__$1 = (function (){var statearr_27994 = state_27949;
(statearr_27994[(12)] = inst_27889);

(statearr_27994[(14)] = inst_27890);

(statearr_27994[(15)] = inst_27888);

(statearr_27994[(16)] = inst_27891);

return statearr_27994;
})();
var statearr_27995_28036 = state_27949__$1;
(statearr_27995_28036[(2)] = null);

(statearr_27995_28036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (10))){
var inst_27889 = (state_27949[(12)]);
var inst_27890 = (state_27949[(14)]);
var inst_27888 = (state_27949[(15)]);
var inst_27891 = (state_27949[(16)]);
var inst_27896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27889,inst_27891);
var inst_27897 = cljs.core.async.muxch_STAR_(inst_27896);
var inst_27898 = cljs.core.async.close_BANG_(inst_27897);
var inst_27899 = (inst_27891 + (1));
var tmp27989 = inst_27889;
var tmp27990 = inst_27890;
var tmp27991 = inst_27888;
var inst_27888__$1 = tmp27991;
var inst_27889__$1 = tmp27989;
var inst_27890__$1 = tmp27990;
var inst_27891__$1 = inst_27899;
var state_27949__$1 = (function (){var statearr_27996 = state_27949;
(statearr_27996[(12)] = inst_27889__$1);

(statearr_27996[(17)] = inst_27898);

(statearr_27996[(14)] = inst_27890__$1);

(statearr_27996[(15)] = inst_27888__$1);

(statearr_27996[(16)] = inst_27891__$1);

return statearr_27996;
})();
var statearr_27997_28037 = state_27949__$1;
(statearr_27997_28037[(2)] = null);

(statearr_27997_28037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (18))){
var inst_27918 = (state_27949[(2)]);
var state_27949__$1 = state_27949;
var statearr_27998_28038 = state_27949__$1;
(statearr_27998_28038[(2)] = inst_27918);

(statearr_27998_28038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27950 === (8))){
var inst_27890 = (state_27949[(14)]);
var inst_27891 = (state_27949[(16)]);
var inst_27893 = (inst_27891 < inst_27890);
var inst_27894 = inst_27893;
var state_27949__$1 = state_27949;
if(cljs.core.truth_(inst_27894)){
var statearr_27999_28039 = state_27949__$1;
(statearr_27999_28039[(1)] = (10));

} else {
var statearr_28000_28040 = state_27949__$1;
(statearr_28000_28040[(1)] = (11));

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
});})(c__25338__auto___28012,mults,ensure_mult,p))
;
return ((function (switch__24892__auto__,c__25338__auto___28012,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_28004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28004[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_28004[(1)] = (1));

return statearr_28004;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_27949){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_27949);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28005){if((e28005 instanceof Object)){
var ex__24896__auto__ = e28005;
var statearr_28006_28041 = state_27949;
(statearr_28006_28041[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28005;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28042 = state_27949;
state_27949 = G__28042;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_27949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_27949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___28012,mults,ensure_mult,p))
})();
var state__25340__auto__ = (function (){var statearr_28007 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___28012);

return statearr_28007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___28012,mults,ensure_mult,p))
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
var args28043 = [];
var len__19677__auto___28046 = arguments.length;
var i__19678__auto___28047 = (0);
while(true){
if((i__19678__auto___28047 < len__19677__auto___28046)){
args28043.push((arguments[i__19678__auto___28047]));

var G__28048 = (i__19678__auto___28047 + (1));
i__19678__auto___28047 = G__28048;
continue;
} else {
}
break;
}

var G__28045 = args28043.length;
switch (G__28045) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28043.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28050 = [];
var len__19677__auto___28053 = arguments.length;
var i__19678__auto___28054 = (0);
while(true){
if((i__19678__auto___28054 < len__19677__auto___28053)){
args28050.push((arguments[i__19678__auto___28054]));

var G__28055 = (i__19678__auto___28054 + (1));
i__19678__auto___28054 = G__28055;
continue;
} else {
}
break;
}

var G__28052 = args28050.length;
switch (G__28052) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28050.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var args28057 = [];
var len__19677__auto___28128 = arguments.length;
var i__19678__auto___28129 = (0);
while(true){
if((i__19678__auto___28129 < len__19677__auto___28128)){
args28057.push((arguments[i__19678__auto___28129]));

var G__28130 = (i__19678__auto___28129 + (1));
i__19678__auto___28129 = G__28130;
continue;
} else {
}
break;
}

var G__28059 = args28057.length;
switch (G__28059) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28057.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__25338__auto___28132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___28132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___28132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28098){
var state_val_28099 = (state_28098[(1)]);
if((state_val_28099 === (7))){
var state_28098__$1 = state_28098;
var statearr_28100_28133 = state_28098__$1;
(statearr_28100_28133[(2)] = null);

(statearr_28100_28133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (1))){
var state_28098__$1 = state_28098;
var statearr_28101_28134 = state_28098__$1;
(statearr_28101_28134[(2)] = null);

(statearr_28101_28134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (4))){
var inst_28062 = (state_28098[(7)]);
var inst_28064 = (inst_28062 < cnt);
var state_28098__$1 = state_28098;
if(cljs.core.truth_(inst_28064)){
var statearr_28102_28135 = state_28098__$1;
(statearr_28102_28135[(1)] = (6));

} else {
var statearr_28103_28136 = state_28098__$1;
(statearr_28103_28136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (15))){
var inst_28094 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28104_28137 = state_28098__$1;
(statearr_28104_28137[(2)] = inst_28094);

(statearr_28104_28137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (13))){
var inst_28087 = cljs.core.async.close_BANG_(out);
var state_28098__$1 = state_28098;
var statearr_28105_28138 = state_28098__$1;
(statearr_28105_28138[(2)] = inst_28087);

(statearr_28105_28138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (6))){
var state_28098__$1 = state_28098;
var statearr_28106_28139 = state_28098__$1;
(statearr_28106_28139[(2)] = null);

(statearr_28106_28139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (3))){
var inst_28096 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28098__$1,inst_28096);
} else {
if((state_val_28099 === (12))){
var inst_28084 = (state_28098[(8)]);
var inst_28084__$1 = (state_28098[(2)]);
var inst_28085 = cljs.core.some(cljs.core.nil_QMARK_,inst_28084__$1);
var state_28098__$1 = (function (){var statearr_28107 = state_28098;
(statearr_28107[(8)] = inst_28084__$1);

return statearr_28107;
})();
if(cljs.core.truth_(inst_28085)){
var statearr_28108_28140 = state_28098__$1;
(statearr_28108_28140[(1)] = (13));

} else {
var statearr_28109_28141 = state_28098__$1;
(statearr_28109_28141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (2))){
var inst_28061 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_28062 = (0);
var state_28098__$1 = (function (){var statearr_28110 = state_28098;
(statearr_28110[(9)] = inst_28061);

(statearr_28110[(7)] = inst_28062);

return statearr_28110;
})();
var statearr_28111_28142 = state_28098__$1;
(statearr_28111_28142[(2)] = null);

(statearr_28111_28142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (11))){
var inst_28062 = (state_28098[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28098,(10),Object,null,(9));
var inst_28071 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28062) : chs__$1.call(null,inst_28062));
var inst_28072 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28062) : done.call(null,inst_28062));
var inst_28073 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28071,inst_28072);
var state_28098__$1 = state_28098;
var statearr_28112_28143 = state_28098__$1;
(statearr_28112_28143[(2)] = inst_28073);


cljs.core.async.impl.ioc_helpers.process_exception(state_28098__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (9))){
var inst_28062 = (state_28098[(7)]);
var inst_28075 = (state_28098[(2)]);
var inst_28076 = (inst_28062 + (1));
var inst_28062__$1 = inst_28076;
var state_28098__$1 = (function (){var statearr_28113 = state_28098;
(statearr_28113[(10)] = inst_28075);

(statearr_28113[(7)] = inst_28062__$1);

return statearr_28113;
})();
var statearr_28114_28144 = state_28098__$1;
(statearr_28114_28144[(2)] = null);

(statearr_28114_28144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (5))){
var inst_28082 = (state_28098[(2)]);
var state_28098__$1 = (function (){var statearr_28115 = state_28098;
(statearr_28115[(11)] = inst_28082);

return statearr_28115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28098__$1,(12),dchan);
} else {
if((state_val_28099 === (14))){
var inst_28084 = (state_28098[(8)]);
var inst_28089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28084);
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28098__$1,(16),out,inst_28089);
} else {
if((state_val_28099 === (16))){
var inst_28091 = (state_28098[(2)]);
var state_28098__$1 = (function (){var statearr_28116 = state_28098;
(statearr_28116[(12)] = inst_28091);

return statearr_28116;
})();
var statearr_28117_28145 = state_28098__$1;
(statearr_28117_28145[(2)] = null);

(statearr_28117_28145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (10))){
var inst_28066 = (state_28098[(2)]);
var inst_28067 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28098__$1 = (function (){var statearr_28118 = state_28098;
(statearr_28118[(13)] = inst_28066);

return statearr_28118;
})();
var statearr_28119_28146 = state_28098__$1;
(statearr_28119_28146[(2)] = inst_28067);


cljs.core.async.impl.ioc_helpers.process_exception(state_28098__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (8))){
var inst_28080 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28120_28147 = state_28098__$1;
(statearr_28120_28147[(2)] = inst_28080);

(statearr_28120_28147[(1)] = (5));


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
});})(c__25338__auto___28132,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24892__auto__,c__25338__auto___28132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_28124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28124[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_28124[(1)] = (1));

return statearr_28124;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_28098){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_28098);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28125){if((e28125 instanceof Object)){
var ex__24896__auto__ = e28125;
var statearr_28126_28148 = state_28098;
(statearr_28126_28148[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28149 = state_28098;
state_28098 = G__28149;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_28098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_28098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___28132,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25340__auto__ = (function (){var statearr_28127 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___28132);

return statearr_28127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___28132,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28151 = [];
var len__19677__auto___28207 = arguments.length;
var i__19678__auto___28208 = (0);
while(true){
if((i__19678__auto___28208 < len__19677__auto___28207)){
args28151.push((arguments[i__19678__auto___28208]));

var G__28209 = (i__19678__auto___28208 + (1));
i__19678__auto___28208 = G__28209;
continue;
} else {
}
break;
}

var G__28153 = args28151.length;
switch (G__28153) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28151.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25338__auto___28211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___28211,out){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___28211,out){
return (function (state_28183){
var state_val_28184 = (state_28183[(1)]);
if((state_val_28184 === (7))){
var inst_28163 = (state_28183[(7)]);
var inst_28162 = (state_28183[(8)]);
var inst_28162__$1 = (state_28183[(2)]);
var inst_28163__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28162__$1,(0),null);
var inst_28164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28162__$1,(1),null);
var inst_28165 = (inst_28163__$1 == null);
var state_28183__$1 = (function (){var statearr_28185 = state_28183;
(statearr_28185[(7)] = inst_28163__$1);

(statearr_28185[(8)] = inst_28162__$1);

(statearr_28185[(9)] = inst_28164);

return statearr_28185;
})();
if(cljs.core.truth_(inst_28165)){
var statearr_28186_28212 = state_28183__$1;
(statearr_28186_28212[(1)] = (8));

} else {
var statearr_28187_28213 = state_28183__$1;
(statearr_28187_28213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (1))){
var inst_28154 = cljs.core.vec(chs);
var inst_28155 = inst_28154;
var state_28183__$1 = (function (){var statearr_28188 = state_28183;
(statearr_28188[(10)] = inst_28155);

return statearr_28188;
})();
var statearr_28189_28214 = state_28183__$1;
(statearr_28189_28214[(2)] = null);

(statearr_28189_28214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (4))){
var inst_28155 = (state_28183[(10)]);
var state_28183__$1 = state_28183;
return cljs.core.async.ioc_alts_BANG_(state_28183__$1,(7),inst_28155);
} else {
if((state_val_28184 === (6))){
var inst_28179 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28190_28215 = state_28183__$1;
(statearr_28190_28215[(2)] = inst_28179);

(statearr_28190_28215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (3))){
var inst_28181 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28183__$1,inst_28181);
} else {
if((state_val_28184 === (2))){
var inst_28155 = (state_28183[(10)]);
var inst_28157 = cljs.core.count(inst_28155);
var inst_28158 = (inst_28157 > (0));
var state_28183__$1 = state_28183;
if(cljs.core.truth_(inst_28158)){
var statearr_28192_28216 = state_28183__$1;
(statearr_28192_28216[(1)] = (4));

} else {
var statearr_28193_28217 = state_28183__$1;
(statearr_28193_28217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (11))){
var inst_28155 = (state_28183[(10)]);
var inst_28172 = (state_28183[(2)]);
var tmp28191 = inst_28155;
var inst_28155__$1 = tmp28191;
var state_28183__$1 = (function (){var statearr_28194 = state_28183;
(statearr_28194[(11)] = inst_28172);

(statearr_28194[(10)] = inst_28155__$1);

return statearr_28194;
})();
var statearr_28195_28218 = state_28183__$1;
(statearr_28195_28218[(2)] = null);

(statearr_28195_28218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (9))){
var inst_28163 = (state_28183[(7)]);
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28183__$1,(11),out,inst_28163);
} else {
if((state_val_28184 === (5))){
var inst_28177 = cljs.core.async.close_BANG_(out);
var state_28183__$1 = state_28183;
var statearr_28196_28219 = state_28183__$1;
(statearr_28196_28219[(2)] = inst_28177);

(statearr_28196_28219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (10))){
var inst_28175 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28197_28220 = state_28183__$1;
(statearr_28197_28220[(2)] = inst_28175);

(statearr_28197_28220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (8))){
var inst_28163 = (state_28183[(7)]);
var inst_28155 = (state_28183[(10)]);
var inst_28162 = (state_28183[(8)]);
var inst_28164 = (state_28183[(9)]);
var inst_28167 = (function (){var cs = inst_28155;
var vec__28160 = inst_28162;
var v = inst_28163;
var c = inst_28164;
return ((function (cs,vec__28160,v,c,inst_28163,inst_28155,inst_28162,inst_28164,state_val_28184,c__25338__auto___28211,out){
return (function (p1__28150_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28150_SHARP_);
});
;})(cs,vec__28160,v,c,inst_28163,inst_28155,inst_28162,inst_28164,state_val_28184,c__25338__auto___28211,out))
})();
var inst_28168 = cljs.core.filterv(inst_28167,inst_28155);
var inst_28155__$1 = inst_28168;
var state_28183__$1 = (function (){var statearr_28198 = state_28183;
(statearr_28198[(10)] = inst_28155__$1);

return statearr_28198;
})();
var statearr_28199_28221 = state_28183__$1;
(statearr_28199_28221[(2)] = null);

(statearr_28199_28221[(1)] = (2));


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
});})(c__25338__auto___28211,out))
;
return ((function (switch__24892__auto__,c__25338__auto___28211,out){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_28203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28203[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_28203[(1)] = (1));

return statearr_28203;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_28183){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_28183);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28204){if((e28204 instanceof Object)){
var ex__24896__auto__ = e28204;
var statearr_28205_28222 = state_28183;
(statearr_28205_28222[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28223 = state_28183;
state_28183 = G__28223;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_28183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_28183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___28211,out))
})();
var state__25340__auto__ = (function (){var statearr_28206 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___28211);

return statearr_28206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___28211,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28224 = [];
var len__19677__auto___28273 = arguments.length;
var i__19678__auto___28274 = (0);
while(true){
if((i__19678__auto___28274 < len__19677__auto___28273)){
args28224.push((arguments[i__19678__auto___28274]));

var G__28275 = (i__19678__auto___28274 + (1));
i__19678__auto___28274 = G__28275;
continue;
} else {
}
break;
}

var G__28226 = args28224.length;
switch (G__28226) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28224.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25338__auto___28277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___28277,out){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___28277,out){
return (function (state_28250){
var state_val_28251 = (state_28250[(1)]);
if((state_val_28251 === (7))){
var inst_28232 = (state_28250[(7)]);
var inst_28232__$1 = (state_28250[(2)]);
var inst_28233 = (inst_28232__$1 == null);
var inst_28234 = cljs.core.not(inst_28233);
var state_28250__$1 = (function (){var statearr_28252 = state_28250;
(statearr_28252[(7)] = inst_28232__$1);

return statearr_28252;
})();
if(inst_28234){
var statearr_28253_28278 = state_28250__$1;
(statearr_28253_28278[(1)] = (8));

} else {
var statearr_28254_28279 = state_28250__$1;
(statearr_28254_28279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (1))){
var inst_28227 = (0);
var state_28250__$1 = (function (){var statearr_28255 = state_28250;
(statearr_28255[(8)] = inst_28227);

return statearr_28255;
})();
var statearr_28256_28280 = state_28250__$1;
(statearr_28256_28280[(2)] = null);

(statearr_28256_28280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (4))){
var state_28250__$1 = state_28250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28250__$1,(7),ch);
} else {
if((state_val_28251 === (6))){
var inst_28245 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28257_28281 = state_28250__$1;
(statearr_28257_28281[(2)] = inst_28245);

(statearr_28257_28281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (3))){
var inst_28247 = (state_28250[(2)]);
var inst_28248 = cljs.core.async.close_BANG_(out);
var state_28250__$1 = (function (){var statearr_28258 = state_28250;
(statearr_28258[(9)] = inst_28247);

return statearr_28258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28250__$1,inst_28248);
} else {
if((state_val_28251 === (2))){
var inst_28227 = (state_28250[(8)]);
var inst_28229 = (inst_28227 < n);
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28229)){
var statearr_28259_28282 = state_28250__$1;
(statearr_28259_28282[(1)] = (4));

} else {
var statearr_28260_28283 = state_28250__$1;
(statearr_28260_28283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (11))){
var inst_28227 = (state_28250[(8)]);
var inst_28237 = (state_28250[(2)]);
var inst_28238 = (inst_28227 + (1));
var inst_28227__$1 = inst_28238;
var state_28250__$1 = (function (){var statearr_28261 = state_28250;
(statearr_28261[(10)] = inst_28237);

(statearr_28261[(8)] = inst_28227__$1);

return statearr_28261;
})();
var statearr_28262_28284 = state_28250__$1;
(statearr_28262_28284[(2)] = null);

(statearr_28262_28284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (9))){
var state_28250__$1 = state_28250;
var statearr_28263_28285 = state_28250__$1;
(statearr_28263_28285[(2)] = null);

(statearr_28263_28285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (5))){
var state_28250__$1 = state_28250;
var statearr_28264_28286 = state_28250__$1;
(statearr_28264_28286[(2)] = null);

(statearr_28264_28286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (10))){
var inst_28242 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28265_28287 = state_28250__$1;
(statearr_28265_28287[(2)] = inst_28242);

(statearr_28265_28287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (8))){
var inst_28232 = (state_28250[(7)]);
var state_28250__$1 = state_28250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28250__$1,(11),out,inst_28232);
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
});})(c__25338__auto___28277,out))
;
return ((function (switch__24892__auto__,c__25338__auto___28277,out){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_28269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28269[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_28269[(1)] = (1));

return statearr_28269;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_28250){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_28250);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28270){if((e28270 instanceof Object)){
var ex__24896__auto__ = e28270;
var statearr_28271_28288 = state_28250;
(statearr_28271_28288[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28289 = state_28250;
state_28250 = G__28289;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_28250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_28250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___28277,out))
})();
var state__25340__auto__ = (function (){var statearr_28272 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___28277);

return statearr_28272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___28277,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28299 = (function (map_LT_,f,ch,meta28300){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28300 = meta28300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28301,meta28300__$1){
var self__ = this;
var _28301__$1 = this;
return (new cljs.core.async.t_cljs$core$async28299(self__.map_LT_,self__.f,self__.ch,meta28300__$1));
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28301){
var self__ = this;
var _28301__$1 = this;
return self__.meta28300;
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28302 = (function (map_LT_,f,ch,meta28300,_,fn1,meta28303){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28300 = meta28300;
this._ = _;
this.fn1 = fn1;
this.meta28303 = meta28303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28304,meta28303__$1){
var self__ = this;
var _28304__$1 = this;
return (new cljs.core.async.t_cljs$core$async28302(self__.map_LT_,self__.f,self__.ch,self__.meta28300,self__._,self__.fn1,meta28303__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28304){
var self__ = this;
var _28304__$1 = this;
return self__.meta28303;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28302.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28290_SHARP_){
var G__28305 = (((p1__28290_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28290_SHARP_) : self__.f.call(null,p1__28290_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28305) : f1.call(null,G__28305));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28302.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28300","meta28300",-408575116,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28299","cljs.core.async/t_cljs$core$async28299",-1545423871,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28303","meta28303",1097619008,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28302";

cljs.core.async.t_cljs$core$async28302.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async28302");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28302 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28302(map_LT___$1,f__$1,ch__$1,meta28300__$1,___$2,fn1__$1,meta28303){
return (new cljs.core.async.t_cljs$core$async28302(map_LT___$1,f__$1,ch__$1,meta28300__$1,___$2,fn1__$1,meta28303));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28302(self__.map_LT_,self__.f,self__.ch,self__.meta28300,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18607__auto__ = ret;
if(cljs.core.truth_(and__18607__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__18607__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28306 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28306) : self__.f.call(null,G__28306));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28300","meta28300",-408575116,null)], null);
});

cljs.core.async.t_cljs$core$async28299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28299";

cljs.core.async.t_cljs$core$async28299.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async28299");
});

cljs.core.async.__GT_t_cljs$core$async28299 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28299(map_LT___$1,f__$1,ch__$1,meta28300){
return (new cljs.core.async.t_cljs$core$async28299(map_LT___$1,f__$1,ch__$1,meta28300));
});

}

return (new cljs.core.async.t_cljs$core$async28299(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28310 = (function (map_GT_,f,ch,meta28311){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28311 = meta28311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28312,meta28311__$1){
var self__ = this;
var _28312__$1 = this;
return (new cljs.core.async.t_cljs$core$async28310(self__.map_GT_,self__.f,self__.ch,meta28311__$1));
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28312){
var self__ = this;
var _28312__$1 = this;
return self__.meta28311;
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async28310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28311","meta28311",-1809965558,null)], null);
});

cljs.core.async.t_cljs$core$async28310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28310";

cljs.core.async.t_cljs$core$async28310.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async28310");
});

cljs.core.async.__GT_t_cljs$core$async28310 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28310(map_GT___$1,f__$1,ch__$1,meta28311){
return (new cljs.core.async.t_cljs$core$async28310(map_GT___$1,f__$1,ch__$1,meta28311));
});

}

return (new cljs.core.async.t_cljs$core$async28310(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28316 = (function (filter_GT_,p,ch,meta28317){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28317 = meta28317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28318,meta28317__$1){
var self__ = this;
var _28318__$1 = this;
return (new cljs.core.async.t_cljs$core$async28316(self__.filter_GT_,self__.p,self__.ch,meta28317__$1));
});

cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28318){
var self__ = this;
var _28318__$1 = this;
return self__.meta28317;
});

cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28317","meta28317",-2083641987,null)], null);
});

cljs.core.async.t_cljs$core$async28316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28316";

cljs.core.async.t_cljs$core$async28316.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cljs.core.async/t_cljs$core$async28316");
});

cljs.core.async.__GT_t_cljs$core$async28316 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28316(filter_GT___$1,p__$1,ch__$1,meta28317){
return (new cljs.core.async.t_cljs$core$async28316(filter_GT___$1,p__$1,ch__$1,meta28317));
});

}

return (new cljs.core.async.t_cljs$core$async28316(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28319 = [];
var len__19677__auto___28363 = arguments.length;
var i__19678__auto___28364 = (0);
while(true){
if((i__19678__auto___28364 < len__19677__auto___28363)){
args28319.push((arguments[i__19678__auto___28364]));

var G__28365 = (i__19678__auto___28364 + (1));
i__19678__auto___28364 = G__28365;
continue;
} else {
}
break;
}

var G__28321 = args28319.length;
switch (G__28321) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28319.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25338__auto___28367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___28367,out){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___28367,out){
return (function (state_28342){
var state_val_28343 = (state_28342[(1)]);
if((state_val_28343 === (7))){
var inst_28338 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28344_28368 = state_28342__$1;
(statearr_28344_28368[(2)] = inst_28338);

(statearr_28344_28368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (1))){
var state_28342__$1 = state_28342;
var statearr_28345_28369 = state_28342__$1;
(statearr_28345_28369[(2)] = null);

(statearr_28345_28369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (4))){
var inst_28324 = (state_28342[(7)]);
var inst_28324__$1 = (state_28342[(2)]);
var inst_28325 = (inst_28324__$1 == null);
var state_28342__$1 = (function (){var statearr_28346 = state_28342;
(statearr_28346[(7)] = inst_28324__$1);

return statearr_28346;
})();
if(cljs.core.truth_(inst_28325)){
var statearr_28347_28370 = state_28342__$1;
(statearr_28347_28370[(1)] = (5));

} else {
var statearr_28348_28371 = state_28342__$1;
(statearr_28348_28371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (6))){
var inst_28324 = (state_28342[(7)]);
var inst_28329 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28324) : p.call(null,inst_28324));
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28329)){
var statearr_28349_28372 = state_28342__$1;
(statearr_28349_28372[(1)] = (8));

} else {
var statearr_28350_28373 = state_28342__$1;
(statearr_28350_28373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (3))){
var inst_28340 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28342__$1,inst_28340);
} else {
if((state_val_28343 === (2))){
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28342__$1,(4),ch);
} else {
if((state_val_28343 === (11))){
var inst_28332 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28351_28374 = state_28342__$1;
(statearr_28351_28374[(2)] = inst_28332);

(statearr_28351_28374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (9))){
var state_28342__$1 = state_28342;
var statearr_28352_28375 = state_28342__$1;
(statearr_28352_28375[(2)] = null);

(statearr_28352_28375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (5))){
var inst_28327 = cljs.core.async.close_BANG_(out);
var state_28342__$1 = state_28342;
var statearr_28353_28376 = state_28342__$1;
(statearr_28353_28376[(2)] = inst_28327);

(statearr_28353_28376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (10))){
var inst_28335 = (state_28342[(2)]);
var state_28342__$1 = (function (){var statearr_28354 = state_28342;
(statearr_28354[(8)] = inst_28335);

return statearr_28354;
})();
var statearr_28355_28377 = state_28342__$1;
(statearr_28355_28377[(2)] = null);

(statearr_28355_28377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (8))){
var inst_28324 = (state_28342[(7)]);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28342__$1,(11),out,inst_28324);
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
});})(c__25338__auto___28367,out))
;
return ((function (switch__24892__auto__,c__25338__auto___28367,out){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_28359 = [null,null,null,null,null,null,null,null,null];
(statearr_28359[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_28359[(1)] = (1));

return statearr_28359;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_28342){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_28342);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28360){if((e28360 instanceof Object)){
var ex__24896__auto__ = e28360;
var statearr_28361_28378 = state_28342;
(statearr_28361_28378[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28379 = state_28342;
state_28342 = G__28379;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_28342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_28342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___28367,out))
})();
var state__25340__auto__ = (function (){var statearr_28362 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___28367);

return statearr_28362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___28367,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28380 = [];
var len__19677__auto___28383 = arguments.length;
var i__19678__auto___28384 = (0);
while(true){
if((i__19678__auto___28384 < len__19677__auto___28383)){
args28380.push((arguments[i__19678__auto___28384]));

var G__28385 = (i__19678__auto___28384 + (1));
i__19678__auto___28384 = G__28385;
continue;
} else {
}
break;
}

var G__28382 = args28380.length;
switch (G__28382) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28380.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto__){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto__){
return (function (state_28555){
var state_val_28556 = (state_28555[(1)]);
if((state_val_28556 === (7))){
var inst_28551 = (state_28555[(2)]);
var state_28555__$1 = state_28555;
var statearr_28557_28598 = state_28555__$1;
(statearr_28557_28598[(2)] = inst_28551);

(statearr_28557_28598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (20))){
var inst_28521 = (state_28555[(7)]);
var inst_28532 = (state_28555[(2)]);
var inst_28533 = cljs.core.next(inst_28521);
var inst_28507 = inst_28533;
var inst_28508 = null;
var inst_28509 = (0);
var inst_28510 = (0);
var state_28555__$1 = (function (){var statearr_28558 = state_28555;
(statearr_28558[(8)] = inst_28507);

(statearr_28558[(9)] = inst_28508);

(statearr_28558[(10)] = inst_28509);

(statearr_28558[(11)] = inst_28532);

(statearr_28558[(12)] = inst_28510);

return statearr_28558;
})();
var statearr_28559_28599 = state_28555__$1;
(statearr_28559_28599[(2)] = null);

(statearr_28559_28599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (1))){
var state_28555__$1 = state_28555;
var statearr_28560_28600 = state_28555__$1;
(statearr_28560_28600[(2)] = null);

(statearr_28560_28600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (4))){
var inst_28496 = (state_28555[(13)]);
var inst_28496__$1 = (state_28555[(2)]);
var inst_28497 = (inst_28496__$1 == null);
var state_28555__$1 = (function (){var statearr_28561 = state_28555;
(statearr_28561[(13)] = inst_28496__$1);

return statearr_28561;
})();
if(cljs.core.truth_(inst_28497)){
var statearr_28562_28601 = state_28555__$1;
(statearr_28562_28601[(1)] = (5));

} else {
var statearr_28563_28602 = state_28555__$1;
(statearr_28563_28602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (15))){
var state_28555__$1 = state_28555;
var statearr_28567_28603 = state_28555__$1;
(statearr_28567_28603[(2)] = null);

(statearr_28567_28603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (21))){
var state_28555__$1 = state_28555;
var statearr_28568_28604 = state_28555__$1;
(statearr_28568_28604[(2)] = null);

(statearr_28568_28604[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (13))){
var inst_28507 = (state_28555[(8)]);
var inst_28508 = (state_28555[(9)]);
var inst_28509 = (state_28555[(10)]);
var inst_28510 = (state_28555[(12)]);
var inst_28517 = (state_28555[(2)]);
var inst_28518 = (inst_28510 + (1));
var tmp28564 = inst_28507;
var tmp28565 = inst_28508;
var tmp28566 = inst_28509;
var inst_28507__$1 = tmp28564;
var inst_28508__$1 = tmp28565;
var inst_28509__$1 = tmp28566;
var inst_28510__$1 = inst_28518;
var state_28555__$1 = (function (){var statearr_28569 = state_28555;
(statearr_28569[(8)] = inst_28507__$1);

(statearr_28569[(9)] = inst_28508__$1);

(statearr_28569[(10)] = inst_28509__$1);

(statearr_28569[(12)] = inst_28510__$1);

(statearr_28569[(14)] = inst_28517);

return statearr_28569;
})();
var statearr_28570_28605 = state_28555__$1;
(statearr_28570_28605[(2)] = null);

(statearr_28570_28605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (22))){
var state_28555__$1 = state_28555;
var statearr_28571_28606 = state_28555__$1;
(statearr_28571_28606[(2)] = null);

(statearr_28571_28606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (6))){
var inst_28496 = (state_28555[(13)]);
var inst_28505 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28496) : f.call(null,inst_28496));
var inst_28506 = cljs.core.seq(inst_28505);
var inst_28507 = inst_28506;
var inst_28508 = null;
var inst_28509 = (0);
var inst_28510 = (0);
var state_28555__$1 = (function (){var statearr_28572 = state_28555;
(statearr_28572[(8)] = inst_28507);

(statearr_28572[(9)] = inst_28508);

(statearr_28572[(10)] = inst_28509);

(statearr_28572[(12)] = inst_28510);

return statearr_28572;
})();
var statearr_28573_28607 = state_28555__$1;
(statearr_28573_28607[(2)] = null);

(statearr_28573_28607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (17))){
var inst_28521 = (state_28555[(7)]);
var inst_28525 = cljs.core.chunk_first(inst_28521);
var inst_28526 = cljs.core.chunk_rest(inst_28521);
var inst_28527 = cljs.core.count(inst_28525);
var inst_28507 = inst_28526;
var inst_28508 = inst_28525;
var inst_28509 = inst_28527;
var inst_28510 = (0);
var state_28555__$1 = (function (){var statearr_28574 = state_28555;
(statearr_28574[(8)] = inst_28507);

(statearr_28574[(9)] = inst_28508);

(statearr_28574[(10)] = inst_28509);

(statearr_28574[(12)] = inst_28510);

return statearr_28574;
})();
var statearr_28575_28608 = state_28555__$1;
(statearr_28575_28608[(2)] = null);

(statearr_28575_28608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (3))){
var inst_28553 = (state_28555[(2)]);
var state_28555__$1 = state_28555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28555__$1,inst_28553);
} else {
if((state_val_28556 === (12))){
var inst_28541 = (state_28555[(2)]);
var state_28555__$1 = state_28555;
var statearr_28576_28609 = state_28555__$1;
(statearr_28576_28609[(2)] = inst_28541);

(statearr_28576_28609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (2))){
var state_28555__$1 = state_28555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28555__$1,(4),in$);
} else {
if((state_val_28556 === (23))){
var inst_28549 = (state_28555[(2)]);
var state_28555__$1 = state_28555;
var statearr_28577_28610 = state_28555__$1;
(statearr_28577_28610[(2)] = inst_28549);

(statearr_28577_28610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (19))){
var inst_28536 = (state_28555[(2)]);
var state_28555__$1 = state_28555;
var statearr_28578_28611 = state_28555__$1;
(statearr_28578_28611[(2)] = inst_28536);

(statearr_28578_28611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (11))){
var inst_28507 = (state_28555[(8)]);
var inst_28521 = (state_28555[(7)]);
var inst_28521__$1 = cljs.core.seq(inst_28507);
var state_28555__$1 = (function (){var statearr_28579 = state_28555;
(statearr_28579[(7)] = inst_28521__$1);

return statearr_28579;
})();
if(inst_28521__$1){
var statearr_28580_28612 = state_28555__$1;
(statearr_28580_28612[(1)] = (14));

} else {
var statearr_28581_28613 = state_28555__$1;
(statearr_28581_28613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (9))){
var inst_28543 = (state_28555[(2)]);
var inst_28544 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28555__$1 = (function (){var statearr_28582 = state_28555;
(statearr_28582[(15)] = inst_28543);

return statearr_28582;
})();
if(cljs.core.truth_(inst_28544)){
var statearr_28583_28614 = state_28555__$1;
(statearr_28583_28614[(1)] = (21));

} else {
var statearr_28584_28615 = state_28555__$1;
(statearr_28584_28615[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (5))){
var inst_28499 = cljs.core.async.close_BANG_(out);
var state_28555__$1 = state_28555;
var statearr_28585_28616 = state_28555__$1;
(statearr_28585_28616[(2)] = inst_28499);

(statearr_28585_28616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (14))){
var inst_28521 = (state_28555[(7)]);
var inst_28523 = cljs.core.chunked_seq_QMARK_(inst_28521);
var state_28555__$1 = state_28555;
if(inst_28523){
var statearr_28586_28617 = state_28555__$1;
(statearr_28586_28617[(1)] = (17));

} else {
var statearr_28587_28618 = state_28555__$1;
(statearr_28587_28618[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (16))){
var inst_28539 = (state_28555[(2)]);
var state_28555__$1 = state_28555;
var statearr_28588_28619 = state_28555__$1;
(statearr_28588_28619[(2)] = inst_28539);

(statearr_28588_28619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28556 === (10))){
var inst_28508 = (state_28555[(9)]);
var inst_28510 = (state_28555[(12)]);
var inst_28515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28508,inst_28510);
var state_28555__$1 = state_28555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28555__$1,(13),out,inst_28515);
} else {
if((state_val_28556 === (18))){
var inst_28521 = (state_28555[(7)]);
var inst_28530 = cljs.core.first(inst_28521);
var state_28555__$1 = state_28555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28555__$1,(20),out,inst_28530);
} else {
if((state_val_28556 === (8))){
var inst_28509 = (state_28555[(10)]);
var inst_28510 = (state_28555[(12)]);
var inst_28512 = (inst_28510 < inst_28509);
var inst_28513 = inst_28512;
var state_28555__$1 = state_28555;
if(cljs.core.truth_(inst_28513)){
var statearr_28589_28620 = state_28555__$1;
(statearr_28589_28620[(1)] = (10));

} else {
var statearr_28590_28621 = state_28555__$1;
(statearr_28590_28621[(1)] = (11));

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
});})(c__25338__auto__))
;
return ((function (switch__24892__auto__,c__25338__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24893__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24893__auto____0 = (function (){
var statearr_28594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28594[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24893__auto__);

(statearr_28594[(1)] = (1));

return statearr_28594;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24893__auto____1 = (function (state_28555){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_28555);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28595){if((e28595 instanceof Object)){
var ex__24896__auto__ = e28595;
var statearr_28596_28622 = state_28555;
(statearr_28596_28622[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28623 = state_28555;
state_28555 = G__28623;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24893__auto__ = function(state_28555){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24893__auto____1.call(this,state_28555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24893__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24893__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto__))
})();
var state__25340__auto__ = (function (){var statearr_28597 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto__);

return statearr_28597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto__))
);

return c__25338__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28624 = [];
var len__19677__auto___28627 = arguments.length;
var i__19678__auto___28628 = (0);
while(true){
if((i__19678__auto___28628 < len__19677__auto___28627)){
args28624.push((arguments[i__19678__auto___28628]));

var G__28629 = (i__19678__auto___28628 + (1));
i__19678__auto___28628 = G__28629;
continue;
} else {
}
break;
}

var G__28626 = args28624.length;
switch (G__28626) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28624.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28631 = [];
var len__19677__auto___28634 = arguments.length;
var i__19678__auto___28635 = (0);
while(true){
if((i__19678__auto___28635 < len__19677__auto___28634)){
args28631.push((arguments[i__19678__auto___28635]));

var G__28636 = (i__19678__auto___28635 + (1));
i__19678__auto___28635 = G__28636;
continue;
} else {
}
break;
}

var G__28633 = args28631.length;
switch (G__28633) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28631.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28638 = [];
var len__19677__auto___28689 = arguments.length;
var i__19678__auto___28690 = (0);
while(true){
if((i__19678__auto___28690 < len__19677__auto___28689)){
args28638.push((arguments[i__19678__auto___28690]));

var G__28691 = (i__19678__auto___28690 + (1));
i__19678__auto___28690 = G__28691;
continue;
} else {
}
break;
}

var G__28640 = args28638.length;
switch (G__28640) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28638.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25338__auto___28693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___28693,out){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___28693,out){
return (function (state_28664){
var state_val_28665 = (state_28664[(1)]);
if((state_val_28665 === (7))){
var inst_28659 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28666_28694 = state_28664__$1;
(statearr_28666_28694[(2)] = inst_28659);

(statearr_28666_28694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (1))){
var inst_28641 = null;
var state_28664__$1 = (function (){var statearr_28667 = state_28664;
(statearr_28667[(7)] = inst_28641);

return statearr_28667;
})();
var statearr_28668_28695 = state_28664__$1;
(statearr_28668_28695[(2)] = null);

(statearr_28668_28695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (4))){
var inst_28644 = (state_28664[(8)]);
var inst_28644__$1 = (state_28664[(2)]);
var inst_28645 = (inst_28644__$1 == null);
var inst_28646 = cljs.core.not(inst_28645);
var state_28664__$1 = (function (){var statearr_28669 = state_28664;
(statearr_28669[(8)] = inst_28644__$1);

return statearr_28669;
})();
if(inst_28646){
var statearr_28670_28696 = state_28664__$1;
(statearr_28670_28696[(1)] = (5));

} else {
var statearr_28671_28697 = state_28664__$1;
(statearr_28671_28697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (6))){
var state_28664__$1 = state_28664;
var statearr_28672_28698 = state_28664__$1;
(statearr_28672_28698[(2)] = null);

(statearr_28672_28698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (3))){
var inst_28661 = (state_28664[(2)]);
var inst_28662 = cljs.core.async.close_BANG_(out);
var state_28664__$1 = (function (){var statearr_28673 = state_28664;
(statearr_28673[(9)] = inst_28661);

return statearr_28673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28664__$1,inst_28662);
} else {
if((state_val_28665 === (2))){
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28664__$1,(4),ch);
} else {
if((state_val_28665 === (11))){
var inst_28644 = (state_28664[(8)]);
var inst_28653 = (state_28664[(2)]);
var inst_28641 = inst_28644;
var state_28664__$1 = (function (){var statearr_28674 = state_28664;
(statearr_28674[(10)] = inst_28653);

(statearr_28674[(7)] = inst_28641);

return statearr_28674;
})();
var statearr_28675_28699 = state_28664__$1;
(statearr_28675_28699[(2)] = null);

(statearr_28675_28699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (9))){
var inst_28644 = (state_28664[(8)]);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28664__$1,(11),out,inst_28644);
} else {
if((state_val_28665 === (5))){
var inst_28641 = (state_28664[(7)]);
var inst_28644 = (state_28664[(8)]);
var inst_28648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28644,inst_28641);
var state_28664__$1 = state_28664;
if(inst_28648){
var statearr_28677_28700 = state_28664__$1;
(statearr_28677_28700[(1)] = (8));

} else {
var statearr_28678_28701 = state_28664__$1;
(statearr_28678_28701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (10))){
var inst_28656 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28679_28702 = state_28664__$1;
(statearr_28679_28702[(2)] = inst_28656);

(statearr_28679_28702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (8))){
var inst_28641 = (state_28664[(7)]);
var tmp28676 = inst_28641;
var inst_28641__$1 = tmp28676;
var state_28664__$1 = (function (){var statearr_28680 = state_28664;
(statearr_28680[(7)] = inst_28641__$1);

return statearr_28680;
})();
var statearr_28681_28703 = state_28664__$1;
(statearr_28681_28703[(2)] = null);

(statearr_28681_28703[(1)] = (2));


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
});})(c__25338__auto___28693,out))
;
return ((function (switch__24892__auto__,c__25338__auto___28693,out){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_28685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28685[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_28685[(1)] = (1));

return statearr_28685;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_28664){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_28664);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28686){if((e28686 instanceof Object)){
var ex__24896__auto__ = e28686;
var statearr_28687_28704 = state_28664;
(statearr_28687_28704[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28705 = state_28664;
state_28664 = G__28705;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_28664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_28664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___28693,out))
})();
var state__25340__auto__ = (function (){var statearr_28688 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___28693);

return statearr_28688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___28693,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28706 = [];
var len__19677__auto___28776 = arguments.length;
var i__19678__auto___28777 = (0);
while(true){
if((i__19678__auto___28777 < len__19677__auto___28776)){
args28706.push((arguments[i__19678__auto___28777]));

var G__28778 = (i__19678__auto___28777 + (1));
i__19678__auto___28777 = G__28778;
continue;
} else {
}
break;
}

var G__28708 = args28706.length;
switch (G__28708) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28706.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25338__auto___28780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___28780,out){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___28780,out){
return (function (state_28746){
var state_val_28747 = (state_28746[(1)]);
if((state_val_28747 === (7))){
var inst_28742 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
var statearr_28748_28781 = state_28746__$1;
(statearr_28748_28781[(2)] = inst_28742);

(statearr_28748_28781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (1))){
var inst_28709 = (new Array(n));
var inst_28710 = inst_28709;
var inst_28711 = (0);
var state_28746__$1 = (function (){var statearr_28749 = state_28746;
(statearr_28749[(7)] = inst_28711);

(statearr_28749[(8)] = inst_28710);

return statearr_28749;
})();
var statearr_28750_28782 = state_28746__$1;
(statearr_28750_28782[(2)] = null);

(statearr_28750_28782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (4))){
var inst_28714 = (state_28746[(9)]);
var inst_28714__$1 = (state_28746[(2)]);
var inst_28715 = (inst_28714__$1 == null);
var inst_28716 = cljs.core.not(inst_28715);
var state_28746__$1 = (function (){var statearr_28751 = state_28746;
(statearr_28751[(9)] = inst_28714__$1);

return statearr_28751;
})();
if(inst_28716){
var statearr_28752_28783 = state_28746__$1;
(statearr_28752_28783[(1)] = (5));

} else {
var statearr_28753_28784 = state_28746__$1;
(statearr_28753_28784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (15))){
var inst_28736 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
var statearr_28754_28785 = state_28746__$1;
(statearr_28754_28785[(2)] = inst_28736);

(statearr_28754_28785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (13))){
var state_28746__$1 = state_28746;
var statearr_28755_28786 = state_28746__$1;
(statearr_28755_28786[(2)] = null);

(statearr_28755_28786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (6))){
var inst_28711 = (state_28746[(7)]);
var inst_28732 = (inst_28711 > (0));
var state_28746__$1 = state_28746;
if(cljs.core.truth_(inst_28732)){
var statearr_28756_28787 = state_28746__$1;
(statearr_28756_28787[(1)] = (12));

} else {
var statearr_28757_28788 = state_28746__$1;
(statearr_28757_28788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (3))){
var inst_28744 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28746__$1,inst_28744);
} else {
if((state_val_28747 === (12))){
var inst_28710 = (state_28746[(8)]);
var inst_28734 = cljs.core.vec(inst_28710);
var state_28746__$1 = state_28746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28746__$1,(15),out,inst_28734);
} else {
if((state_val_28747 === (2))){
var state_28746__$1 = state_28746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28746__$1,(4),ch);
} else {
if((state_val_28747 === (11))){
var inst_28726 = (state_28746[(2)]);
var inst_28727 = (new Array(n));
var inst_28710 = inst_28727;
var inst_28711 = (0);
var state_28746__$1 = (function (){var statearr_28758 = state_28746;
(statearr_28758[(10)] = inst_28726);

(statearr_28758[(7)] = inst_28711);

(statearr_28758[(8)] = inst_28710);

return statearr_28758;
})();
var statearr_28759_28789 = state_28746__$1;
(statearr_28759_28789[(2)] = null);

(statearr_28759_28789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (9))){
var inst_28710 = (state_28746[(8)]);
var inst_28724 = cljs.core.vec(inst_28710);
var state_28746__$1 = state_28746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28746__$1,(11),out,inst_28724);
} else {
if((state_val_28747 === (5))){
var inst_28714 = (state_28746[(9)]);
var inst_28719 = (state_28746[(11)]);
var inst_28711 = (state_28746[(7)]);
var inst_28710 = (state_28746[(8)]);
var inst_28718 = (inst_28710[inst_28711] = inst_28714);
var inst_28719__$1 = (inst_28711 + (1));
var inst_28720 = (inst_28719__$1 < n);
var state_28746__$1 = (function (){var statearr_28760 = state_28746;
(statearr_28760[(12)] = inst_28718);

(statearr_28760[(11)] = inst_28719__$1);

return statearr_28760;
})();
if(cljs.core.truth_(inst_28720)){
var statearr_28761_28790 = state_28746__$1;
(statearr_28761_28790[(1)] = (8));

} else {
var statearr_28762_28791 = state_28746__$1;
(statearr_28762_28791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (14))){
var inst_28739 = (state_28746[(2)]);
var inst_28740 = cljs.core.async.close_BANG_(out);
var state_28746__$1 = (function (){var statearr_28764 = state_28746;
(statearr_28764[(13)] = inst_28739);

return statearr_28764;
})();
var statearr_28765_28792 = state_28746__$1;
(statearr_28765_28792[(2)] = inst_28740);

(statearr_28765_28792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (10))){
var inst_28730 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
var statearr_28766_28793 = state_28746__$1;
(statearr_28766_28793[(2)] = inst_28730);

(statearr_28766_28793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (8))){
var inst_28719 = (state_28746[(11)]);
var inst_28710 = (state_28746[(8)]);
var tmp28763 = inst_28710;
var inst_28710__$1 = tmp28763;
var inst_28711 = inst_28719;
var state_28746__$1 = (function (){var statearr_28767 = state_28746;
(statearr_28767[(7)] = inst_28711);

(statearr_28767[(8)] = inst_28710__$1);

return statearr_28767;
})();
var statearr_28768_28794 = state_28746__$1;
(statearr_28768_28794[(2)] = null);

(statearr_28768_28794[(1)] = (2));


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
});})(c__25338__auto___28780,out))
;
return ((function (switch__24892__auto__,c__25338__auto___28780,out){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_28772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28772[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_28772[(1)] = (1));

return statearr_28772;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_28746){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_28746);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28773){if((e28773 instanceof Object)){
var ex__24896__auto__ = e28773;
var statearr_28774_28795 = state_28746;
(statearr_28774_28795[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28796 = state_28746;
state_28746 = G__28796;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_28746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_28746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___28780,out))
})();
var state__25340__auto__ = (function (){var statearr_28775 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___28780);

return statearr_28775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___28780,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28797 = [];
var len__19677__auto___28871 = arguments.length;
var i__19678__auto___28872 = (0);
while(true){
if((i__19678__auto___28872 < len__19677__auto___28871)){
args28797.push((arguments[i__19678__auto___28872]));

var G__28873 = (i__19678__auto___28872 + (1));
i__19678__auto___28872 = G__28873;
continue;
} else {
}
break;
}

var G__28799 = args28797.length;
switch (G__28799) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28797.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25338__auto___28875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto___28875,out){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto___28875,out){
return (function (state_28841){
var state_val_28842 = (state_28841[(1)]);
if((state_val_28842 === (7))){
var inst_28837 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28843_28876 = state_28841__$1;
(statearr_28843_28876[(2)] = inst_28837);

(statearr_28843_28876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (1))){
var inst_28800 = [];
var inst_28801 = inst_28800;
var inst_28802 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28841__$1 = (function (){var statearr_28844 = state_28841;
(statearr_28844[(7)] = inst_28801);

(statearr_28844[(8)] = inst_28802);

return statearr_28844;
})();
var statearr_28845_28877 = state_28841__$1;
(statearr_28845_28877[(2)] = null);

(statearr_28845_28877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (4))){
var inst_28805 = (state_28841[(9)]);
var inst_28805__$1 = (state_28841[(2)]);
var inst_28806 = (inst_28805__$1 == null);
var inst_28807 = cljs.core.not(inst_28806);
var state_28841__$1 = (function (){var statearr_28846 = state_28841;
(statearr_28846[(9)] = inst_28805__$1);

return statearr_28846;
})();
if(inst_28807){
var statearr_28847_28878 = state_28841__$1;
(statearr_28847_28878[(1)] = (5));

} else {
var statearr_28848_28879 = state_28841__$1;
(statearr_28848_28879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (15))){
var inst_28831 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28849_28880 = state_28841__$1;
(statearr_28849_28880[(2)] = inst_28831);

(statearr_28849_28880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (13))){
var state_28841__$1 = state_28841;
var statearr_28850_28881 = state_28841__$1;
(statearr_28850_28881[(2)] = null);

(statearr_28850_28881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (6))){
var inst_28801 = (state_28841[(7)]);
var inst_28826 = inst_28801.length;
var inst_28827 = (inst_28826 > (0));
var state_28841__$1 = state_28841;
if(cljs.core.truth_(inst_28827)){
var statearr_28851_28882 = state_28841__$1;
(statearr_28851_28882[(1)] = (12));

} else {
var statearr_28852_28883 = state_28841__$1;
(statearr_28852_28883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (3))){
var inst_28839 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28841__$1,inst_28839);
} else {
if((state_val_28842 === (12))){
var inst_28801 = (state_28841[(7)]);
var inst_28829 = cljs.core.vec(inst_28801);
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28841__$1,(15),out,inst_28829);
} else {
if((state_val_28842 === (2))){
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28841__$1,(4),ch);
} else {
if((state_val_28842 === (11))){
var inst_28809 = (state_28841[(10)]);
var inst_28805 = (state_28841[(9)]);
var inst_28819 = (state_28841[(2)]);
var inst_28820 = [];
var inst_28821 = inst_28820.push(inst_28805);
var inst_28801 = inst_28820;
var inst_28802 = inst_28809;
var state_28841__$1 = (function (){var statearr_28853 = state_28841;
(statearr_28853[(7)] = inst_28801);

(statearr_28853[(8)] = inst_28802);

(statearr_28853[(11)] = inst_28819);

(statearr_28853[(12)] = inst_28821);

return statearr_28853;
})();
var statearr_28854_28884 = state_28841__$1;
(statearr_28854_28884[(2)] = null);

(statearr_28854_28884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (9))){
var inst_28801 = (state_28841[(7)]);
var inst_28817 = cljs.core.vec(inst_28801);
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28841__$1,(11),out,inst_28817);
} else {
if((state_val_28842 === (5))){
var inst_28809 = (state_28841[(10)]);
var inst_28805 = (state_28841[(9)]);
var inst_28802 = (state_28841[(8)]);
var inst_28809__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28805) : f.call(null,inst_28805));
var inst_28810 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28809__$1,inst_28802);
var inst_28811 = cljs.core.keyword_identical_QMARK_(inst_28802,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28812 = (inst_28810) || (inst_28811);
var state_28841__$1 = (function (){var statearr_28855 = state_28841;
(statearr_28855[(10)] = inst_28809__$1);

return statearr_28855;
})();
if(cljs.core.truth_(inst_28812)){
var statearr_28856_28885 = state_28841__$1;
(statearr_28856_28885[(1)] = (8));

} else {
var statearr_28857_28886 = state_28841__$1;
(statearr_28857_28886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (14))){
var inst_28834 = (state_28841[(2)]);
var inst_28835 = cljs.core.async.close_BANG_(out);
var state_28841__$1 = (function (){var statearr_28859 = state_28841;
(statearr_28859[(13)] = inst_28834);

return statearr_28859;
})();
var statearr_28860_28887 = state_28841__$1;
(statearr_28860_28887[(2)] = inst_28835);

(statearr_28860_28887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (10))){
var inst_28824 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28861_28888 = state_28841__$1;
(statearr_28861_28888[(2)] = inst_28824);

(statearr_28861_28888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (8))){
var inst_28809 = (state_28841[(10)]);
var inst_28801 = (state_28841[(7)]);
var inst_28805 = (state_28841[(9)]);
var inst_28814 = inst_28801.push(inst_28805);
var tmp28858 = inst_28801;
var inst_28801__$1 = tmp28858;
var inst_28802 = inst_28809;
var state_28841__$1 = (function (){var statearr_28862 = state_28841;
(statearr_28862[(7)] = inst_28801__$1);

(statearr_28862[(14)] = inst_28814);

(statearr_28862[(8)] = inst_28802);

return statearr_28862;
})();
var statearr_28863_28889 = state_28841__$1;
(statearr_28863_28889[(2)] = null);

(statearr_28863_28889[(1)] = (2));


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
});})(c__25338__auto___28875,out))
;
return ((function (switch__24892__auto__,c__25338__auto___28875,out){
return (function() {
var cljs$core$async$state_machine__24893__auto__ = null;
var cljs$core$async$state_machine__24893__auto____0 = (function (){
var statearr_28867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28867[(0)] = cljs$core$async$state_machine__24893__auto__);

(statearr_28867[(1)] = (1));

return statearr_28867;
});
var cljs$core$async$state_machine__24893__auto____1 = (function (state_28841){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_28841);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e28868){if((e28868 instanceof Object)){
var ex__24896__auto__ = e28868;
var statearr_28869_28890 = state_28841;
(statearr_28869_28890[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28891 = state_28841;
state_28841 = G__28891;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
cljs$core$async$state_machine__24893__auto__ = function(state_28841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24893__auto____1.call(this,state_28841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24893__auto____0;
cljs$core$async$state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24893__auto____1;
return cljs$core$async$state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto___28875,out))
})();
var state__25340__auto__ = (function (){var statearr_28870 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_28870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto___28875);

return statearr_28870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto___28875,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
//# sourceMappingURL=async.js.map?r=0.9897180256080366