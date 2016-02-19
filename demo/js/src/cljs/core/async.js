goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async17955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17955 = (function (fn_handler,f,meta17956){
this.fn_handler = fn_handler;
this.f = f;
this.meta17956 = meta17956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17957,meta17956__$1){
var self__ = this;
var _17957__$1 = this;
return (new cljs.core.async.t_cljs$core$async17955(self__.fn_handler,self__.f,meta17956__$1));
});

cljs.core.async.t_cljs$core$async17955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17957){
var self__ = this;
var _17957__$1 = this;
return self__.meta17956;
});

cljs.core.async.t_cljs$core$async17955.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17956","meta17956",-1260284935,null)], null);
});

cljs.core.async.t_cljs$core$async17955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17955";

cljs.core.async.t_cljs$core$async17955.cljs$lang$ctorPrWriter = (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async17955");
});

cljs.core.async.__GT_t_cljs$core$async17955 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17955(fn_handler__$1,f__$1,meta17956){
return (new cljs.core.async.t_cljs$core$async17955(fn_handler__$1,f__$1,meta17956));
});

}

return (new cljs.core.async.t_cljs$core$async17955(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
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
var args17960 = [];
var len__15787__auto___17963 = arguments.length;
var i__15788__auto___17964 = (0);
while(true){
if((i__15788__auto___17964 < len__15787__auto___17963)){
args17960.push((arguments[i__15788__auto___17964]));

var G__17965 = (i__15788__auto___17964 + (1));
i__15788__auto___17964 = G__17965;
continue;
} else {
}
break;
}

var G__17962 = args17960.length;
switch (G__17962) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17960.length)].join('')));

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
var args17967 = [];
var len__15787__auto___17970 = arguments.length;
var i__15788__auto___17971 = (0);
while(true){
if((i__15788__auto___17971 < len__15787__auto___17970)){
args17967.push((arguments[i__15788__auto___17971]));

var G__17972 = (i__15788__auto___17971 + (1));
i__15788__auto___17971 = G__17972;
continue;
} else {
}
break;
}

var G__17969 = args17967.length;
switch (G__17969) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17967.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_17974 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17974) : fn1.call(null,val_17974));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17974,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17974) : fn1.call(null,val_17974));
});})(val_17974,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
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
var args17975 = [];
var len__15787__auto___17978 = arguments.length;
var i__15788__auto___17979 = (0);
while(true){
if((i__15788__auto___17979 < len__15787__auto___17978)){
args17975.push((arguments[i__15788__auto___17979]));

var G__17980 = (i__15788__auto___17979 + (1));
i__15788__auto___17979 = G__17980;
continue;
} else {
}
break;
}

var G__17977 = args17975.length;
switch (G__17977) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17975.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
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
var n__15632__auto___17982 = n;
var x_17983 = (0);
while(true){
if((x_17983 < n__15632__auto___17982)){
(a[x_17983] = (0));

var G__17984 = (x_17983 + (1));
x_17983 = G__17984;
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

var G__17985 = (i + (1));
i = G__17985;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async17989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17989 = (function (alt_flag,flag,meta17990){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17990 = meta17990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17991,meta17990__$1){
var self__ = this;
var _17991__$1 = this;
return (new cljs.core.async.t_cljs$core$async17989(self__.alt_flag,self__.flag,meta17990__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17991){
var self__ = this;
var _17991__$1 = this;
return self__.meta17990;
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17990","meta17990",1359985220,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17989";

cljs.core.async.t_cljs$core$async17989.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async17989");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17989 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17989(alt_flag__$1,flag__$1,meta17990){
return (new cljs.core.async.t_cljs$core$async17989(alt_flag__$1,flag__$1,meta17990));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17989(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17995 = (function (alt_handler,flag,cb,meta17996){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17996 = meta17996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17997,meta17996__$1){
var self__ = this;
var _17997__$1 = this;
return (new cljs.core.async.t_cljs$core$async17995(self__.alt_handler,self__.flag,self__.cb,meta17996__$1));
});

cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17997){
var self__ = this;
var _17997__$1 = this;
return self__.meta17996;
});

cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17996","meta17996",-870496159,null)], null);
});

cljs.core.async.t_cljs$core$async17995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17995";

cljs.core.async.t_cljs$core$async17995.cljs$lang$ctorPrWriter = (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async17995");
});

cljs.core.async.__GT_t_cljs$core$async17995 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17995(alt_handler__$1,flag__$1,cb__$1,meta17996){
return (new cljs.core.async.t_cljs$core$async17995(alt_handler__$1,flag__$1,cb__$1,meta17996));
});

}

return (new cljs.core.async.t_cljs$core$async17995(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17998_SHARP_){
var G__18002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17998_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18002) : fret.call(null,G__18002));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17999_SHARP_){
var G__18003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17999_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18003) : fret.call(null,G__18003));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__14729__auto__ = wport;
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18004 = (i + (1));
i = G__18004;
continue;
}
} else {
return null;
}
break;
}
})();
var or__14729__auto__ = ret;
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__14717__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__14717__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__14717__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__15794__auto__ = [];
var len__15787__auto___18010 = arguments.length;
var i__15788__auto___18011 = (0);
while(true){
if((i__15788__auto___18011 < len__15787__auto___18010)){
args__15794__auto__.push((arguments[i__15788__auto___18011]));

var G__18012 = (i__15788__auto___18011 + (1));
i__15788__auto___18011 = G__18012;
continue;
} else {
}
break;
}

var argseq__15795__auto__ = ((((1) < args__15794__auto__.length))?(new cljs.core.IndexedSeq(args__15794__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15795__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18007){
var map__18008 = p__18007;
var map__18008__$1 = ((((!((map__18008 == null)))?((((map__18008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18008):map__18008);
var opts = map__18008__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18005){
var G__18006 = cljs.core.first(seq18005);
var seq18005__$1 = cljs.core.next(seq18005);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18006,seq18005__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args18013 = [];
var len__15787__auto___18063 = arguments.length;
var i__15788__auto___18064 = (0);
while(true){
if((i__15788__auto___18064 < len__15787__auto___18063)){
args18013.push((arguments[i__15788__auto___18064]));

var G__18065 = (i__15788__auto___18064 + (1));
i__15788__auto___18064 = G__18065;
continue;
} else {
}
break;
}

var G__18015 = args18013.length;
switch (G__18015) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18013.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17907__auto___18067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___18067){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___18067){
return (function (state_18039){
var state_val_18040 = (state_18039[(1)]);
if((state_val_18040 === (7))){
var inst_18035 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
var statearr_18041_18068 = state_18039__$1;
(statearr_18041_18068[(2)] = inst_18035);

(statearr_18041_18068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (1))){
var state_18039__$1 = state_18039;
var statearr_18042_18069 = state_18039__$1;
(statearr_18042_18069[(2)] = null);

(statearr_18042_18069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (4))){
var inst_18018 = (state_18039[(7)]);
var inst_18018__$1 = (state_18039[(2)]);
var inst_18019 = (inst_18018__$1 == null);
var state_18039__$1 = (function (){var statearr_18043 = state_18039;
(statearr_18043[(7)] = inst_18018__$1);

return statearr_18043;
})();
if(cljs.core.truth_(inst_18019)){
var statearr_18044_18070 = state_18039__$1;
(statearr_18044_18070[(1)] = (5));

} else {
var statearr_18045_18071 = state_18039__$1;
(statearr_18045_18071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (13))){
var state_18039__$1 = state_18039;
var statearr_18046_18072 = state_18039__$1;
(statearr_18046_18072[(2)] = null);

(statearr_18046_18072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (6))){
var inst_18018 = (state_18039[(7)]);
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18039__$1,(11),to,inst_18018);
} else {
if((state_val_18040 === (3))){
var inst_18037 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18039__$1,inst_18037);
} else {
if((state_val_18040 === (12))){
var state_18039__$1 = state_18039;
var statearr_18047_18073 = state_18039__$1;
(statearr_18047_18073[(2)] = null);

(statearr_18047_18073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (2))){
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18039__$1,(4),from);
} else {
if((state_val_18040 === (11))){
var inst_18028 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
if(cljs.core.truth_(inst_18028)){
var statearr_18048_18074 = state_18039__$1;
(statearr_18048_18074[(1)] = (12));

} else {
var statearr_18049_18075 = state_18039__$1;
(statearr_18049_18075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (9))){
var state_18039__$1 = state_18039;
var statearr_18050_18076 = state_18039__$1;
(statearr_18050_18076[(2)] = null);

(statearr_18050_18076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (5))){
var state_18039__$1 = state_18039;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18051_18077 = state_18039__$1;
(statearr_18051_18077[(1)] = (8));

} else {
var statearr_18052_18078 = state_18039__$1;
(statearr_18052_18078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (14))){
var inst_18033 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
var statearr_18053_18079 = state_18039__$1;
(statearr_18053_18079[(2)] = inst_18033);

(statearr_18053_18079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (10))){
var inst_18025 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
var statearr_18054_18080 = state_18039__$1;
(statearr_18054_18080[(2)] = inst_18025);

(statearr_18054_18080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (8))){
var inst_18022 = cljs.core.async.close_BANG_(to);
var state_18039__$1 = state_18039;
var statearr_18055_18081 = state_18039__$1;
(statearr_18055_18081[(2)] = inst_18022);

(statearr_18055_18081[(1)] = (10));


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
});})(c__17907__auto___18067))
;
return ((function (switch__17793__auto__,c__17907__auto___18067){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_18059 = [null,null,null,null,null,null,null,null];
(statearr_18059[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_18059[(1)] = (1));

return statearr_18059;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_18039){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18039);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18060){if((e18060 instanceof Object)){
var ex__17797__auto__ = e18060;
var statearr_18061_18082 = state_18039;
(statearr_18061_18082[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18083 = state_18039;
state_18039 = G__18083;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_18039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_18039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___18067))
})();
var state__17909__auto__ = (function (){var statearr_18062 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___18067);

return statearr_18062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___18067))
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
return (function (p__18267){
var vec__18268 = p__18267;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18268,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18268,(1),null);
var job = vec__18268;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17907__auto___18450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___18450,res,vec__18268,v,p,job,jobs,results){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___18450,res,vec__18268,v,p,job,jobs,results){
return (function (state_18273){
var state_val_18274 = (state_18273[(1)]);
if((state_val_18274 === (1))){
var state_18273__$1 = state_18273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18273__$1,(2),res,v);
} else {
if((state_val_18274 === (2))){
var inst_18270 = (state_18273[(2)]);
var inst_18271 = cljs.core.async.close_BANG_(res);
var state_18273__$1 = (function (){var statearr_18275 = state_18273;
(statearr_18275[(7)] = inst_18270);

return statearr_18275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18273__$1,inst_18271);
} else {
return null;
}
}
});})(c__17907__auto___18450,res,vec__18268,v,p,job,jobs,results))
;
return ((function (switch__17793__auto__,c__17907__auto___18450,res,vec__18268,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0 = (function (){
var statearr_18279 = [null,null,null,null,null,null,null,null];
(statearr_18279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__);

(statearr_18279[(1)] = (1));

return statearr_18279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1 = (function (state_18273){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18273);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18280){if((e18280 instanceof Object)){
var ex__17797__auto__ = e18280;
var statearr_18281_18451 = state_18273;
(statearr_18281_18451[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18452 = state_18273;
state_18273 = G__18452;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = function(state_18273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1.call(this,state_18273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___18450,res,vec__18268,v,p,job,jobs,results))
})();
var state__17909__auto__ = (function (){var statearr_18282 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___18450);

return statearr_18282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___18450,res,vec__18268,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18283){
var vec__18284 = p__18283;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18284,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18284,(1),null);
var job = vec__18284;
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
var n__15632__auto___18453 = n;
var __18454 = (0);
while(true){
if((__18454 < n__15632__auto___18453)){
var G__18285_18455 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18285_18455) {
case "compute":
var c__17907__auto___18457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18454,c__17907__auto___18457,G__18285_18455,n__15632__auto___18453,jobs,results,process,async){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (__18454,c__17907__auto___18457,G__18285_18455,n__15632__auto___18453,jobs,results,process,async){
return (function (state_18298){
var state_val_18299 = (state_18298[(1)]);
if((state_val_18299 === (1))){
var state_18298__$1 = state_18298;
var statearr_18300_18458 = state_18298__$1;
(statearr_18300_18458[(2)] = null);

(statearr_18300_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18299 === (2))){
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18298__$1,(4),jobs);
} else {
if((state_val_18299 === (3))){
var inst_18296 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18298__$1,inst_18296);
} else {
if((state_val_18299 === (4))){
var inst_18288 = (state_18298[(2)]);
var inst_18289 = process(inst_18288);
var state_18298__$1 = state_18298;
if(cljs.core.truth_(inst_18289)){
var statearr_18301_18459 = state_18298__$1;
(statearr_18301_18459[(1)] = (5));

} else {
var statearr_18302_18460 = state_18298__$1;
(statearr_18302_18460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18299 === (5))){
var state_18298__$1 = state_18298;
var statearr_18303_18461 = state_18298__$1;
(statearr_18303_18461[(2)] = null);

(statearr_18303_18461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18299 === (6))){
var state_18298__$1 = state_18298;
var statearr_18304_18462 = state_18298__$1;
(statearr_18304_18462[(2)] = null);

(statearr_18304_18462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18299 === (7))){
var inst_18294 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
var statearr_18305_18463 = state_18298__$1;
(statearr_18305_18463[(2)] = inst_18294);

(statearr_18305_18463[(1)] = (3));


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
});})(__18454,c__17907__auto___18457,G__18285_18455,n__15632__auto___18453,jobs,results,process,async))
;
return ((function (__18454,switch__17793__auto__,c__17907__auto___18457,G__18285_18455,n__15632__auto___18453,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0 = (function (){
var statearr_18309 = [null,null,null,null,null,null,null];
(statearr_18309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__);

(statearr_18309[(1)] = (1));

return statearr_18309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1 = (function (state_18298){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18298);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18310){if((e18310 instanceof Object)){
var ex__17797__auto__ = e18310;
var statearr_18311_18464 = state_18298;
(statearr_18311_18464[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18465 = state_18298;
state_18298 = G__18465;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = function(state_18298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1.call(this,state_18298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__;
})()
;})(__18454,switch__17793__auto__,c__17907__auto___18457,G__18285_18455,n__15632__auto___18453,jobs,results,process,async))
})();
var state__17909__auto__ = (function (){var statearr_18312 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___18457);

return statearr_18312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(__18454,c__17907__auto___18457,G__18285_18455,n__15632__auto___18453,jobs,results,process,async))
);


break;
case "async":
var c__17907__auto___18466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18454,c__17907__auto___18466,G__18285_18455,n__15632__auto___18453,jobs,results,process,async){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (__18454,c__17907__auto___18466,G__18285_18455,n__15632__auto___18453,jobs,results,process,async){
return (function (state_18325){
var state_val_18326 = (state_18325[(1)]);
if((state_val_18326 === (1))){
var state_18325__$1 = state_18325;
var statearr_18327_18467 = state_18325__$1;
(statearr_18327_18467[(2)] = null);

(statearr_18327_18467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (2))){
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18325__$1,(4),jobs);
} else {
if((state_val_18326 === (3))){
var inst_18323 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18325__$1,inst_18323);
} else {
if((state_val_18326 === (4))){
var inst_18315 = (state_18325[(2)]);
var inst_18316 = async(inst_18315);
var state_18325__$1 = state_18325;
if(cljs.core.truth_(inst_18316)){
var statearr_18328_18468 = state_18325__$1;
(statearr_18328_18468[(1)] = (5));

} else {
var statearr_18329_18469 = state_18325__$1;
(statearr_18329_18469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (5))){
var state_18325__$1 = state_18325;
var statearr_18330_18470 = state_18325__$1;
(statearr_18330_18470[(2)] = null);

(statearr_18330_18470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (6))){
var state_18325__$1 = state_18325;
var statearr_18331_18471 = state_18325__$1;
(statearr_18331_18471[(2)] = null);

(statearr_18331_18471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (7))){
var inst_18321 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18332_18472 = state_18325__$1;
(statearr_18332_18472[(2)] = inst_18321);

(statearr_18332_18472[(1)] = (3));


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
});})(__18454,c__17907__auto___18466,G__18285_18455,n__15632__auto___18453,jobs,results,process,async))
;
return ((function (__18454,switch__17793__auto__,c__17907__auto___18466,G__18285_18455,n__15632__auto___18453,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0 = (function (){
var statearr_18336 = [null,null,null,null,null,null,null];
(statearr_18336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__);

(statearr_18336[(1)] = (1));

return statearr_18336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1 = (function (state_18325){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18325);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18337){if((e18337 instanceof Object)){
var ex__17797__auto__ = e18337;
var statearr_18338_18473 = state_18325;
(statearr_18338_18473[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18474 = state_18325;
state_18325 = G__18474;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = function(state_18325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1.call(this,state_18325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__;
})()
;})(__18454,switch__17793__auto__,c__17907__auto___18466,G__18285_18455,n__15632__auto___18453,jobs,results,process,async))
})();
var state__17909__auto__ = (function (){var statearr_18339 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___18466);

return statearr_18339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(__18454,c__17907__auto___18466,G__18285_18455,n__15632__auto___18453,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18475 = (__18454 + (1));
__18454 = G__18475;
continue;
} else {
}
break;
}

var c__17907__auto___18476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___18476,jobs,results,process,async){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___18476,jobs,results,process,async){
return (function (state_18361){
var state_val_18362 = (state_18361[(1)]);
if((state_val_18362 === (1))){
var state_18361__$1 = state_18361;
var statearr_18363_18477 = state_18361__$1;
(statearr_18363_18477[(2)] = null);

(statearr_18363_18477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (2))){
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18361__$1,(4),from);
} else {
if((state_val_18362 === (3))){
var inst_18359 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18361__$1,inst_18359);
} else {
if((state_val_18362 === (4))){
var inst_18342 = (state_18361[(7)]);
var inst_18342__$1 = (state_18361[(2)]);
var inst_18343 = (inst_18342__$1 == null);
var state_18361__$1 = (function (){var statearr_18364 = state_18361;
(statearr_18364[(7)] = inst_18342__$1);

return statearr_18364;
})();
if(cljs.core.truth_(inst_18343)){
var statearr_18365_18478 = state_18361__$1;
(statearr_18365_18478[(1)] = (5));

} else {
var statearr_18366_18479 = state_18361__$1;
(statearr_18366_18479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (5))){
var inst_18345 = cljs.core.async.close_BANG_(jobs);
var state_18361__$1 = state_18361;
var statearr_18367_18480 = state_18361__$1;
(statearr_18367_18480[(2)] = inst_18345);

(statearr_18367_18480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (6))){
var inst_18347 = (state_18361[(8)]);
var inst_18342 = (state_18361[(7)]);
var inst_18347__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18349 = [inst_18342,inst_18347__$1];
var inst_18350 = (new cljs.core.PersistentVector(null,2,(5),inst_18348,inst_18349,null));
var state_18361__$1 = (function (){var statearr_18368 = state_18361;
(statearr_18368[(8)] = inst_18347__$1);

return statearr_18368;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18361__$1,(8),jobs,inst_18350);
} else {
if((state_val_18362 === (7))){
var inst_18357 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18369_18481 = state_18361__$1;
(statearr_18369_18481[(2)] = inst_18357);

(statearr_18369_18481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (8))){
var inst_18347 = (state_18361[(8)]);
var inst_18352 = (state_18361[(2)]);
var state_18361__$1 = (function (){var statearr_18370 = state_18361;
(statearr_18370[(9)] = inst_18352);

return statearr_18370;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18361__$1,(9),results,inst_18347);
} else {
if((state_val_18362 === (9))){
var inst_18354 = (state_18361[(2)]);
var state_18361__$1 = (function (){var statearr_18371 = state_18361;
(statearr_18371[(10)] = inst_18354);

return statearr_18371;
})();
var statearr_18372_18482 = state_18361__$1;
(statearr_18372_18482[(2)] = null);

(statearr_18372_18482[(1)] = (2));


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
});})(c__17907__auto___18476,jobs,results,process,async))
;
return ((function (switch__17793__auto__,c__17907__auto___18476,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0 = (function (){
var statearr_18376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__);

(statearr_18376[(1)] = (1));

return statearr_18376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1 = (function (state_18361){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18361);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18377){if((e18377 instanceof Object)){
var ex__17797__auto__ = e18377;
var statearr_18378_18483 = state_18361;
(statearr_18378_18483[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18484 = state_18361;
state_18361 = G__18484;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = function(state_18361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1.call(this,state_18361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___18476,jobs,results,process,async))
})();
var state__17909__auto__ = (function (){var statearr_18379 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___18476);

return statearr_18379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___18476,jobs,results,process,async))
);


var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto__,jobs,results,process,async){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto__,jobs,results,process,async){
return (function (state_18417){
var state_val_18418 = (state_18417[(1)]);
if((state_val_18418 === (7))){
var inst_18413 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18419_18485 = state_18417__$1;
(statearr_18419_18485[(2)] = inst_18413);

(statearr_18419_18485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (20))){
var state_18417__$1 = state_18417;
var statearr_18420_18486 = state_18417__$1;
(statearr_18420_18486[(2)] = null);

(statearr_18420_18486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (1))){
var state_18417__$1 = state_18417;
var statearr_18421_18487 = state_18417__$1;
(statearr_18421_18487[(2)] = null);

(statearr_18421_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (4))){
var inst_18382 = (state_18417[(7)]);
var inst_18382__$1 = (state_18417[(2)]);
var inst_18383 = (inst_18382__$1 == null);
var state_18417__$1 = (function (){var statearr_18422 = state_18417;
(statearr_18422[(7)] = inst_18382__$1);

return statearr_18422;
})();
if(cljs.core.truth_(inst_18383)){
var statearr_18423_18488 = state_18417__$1;
(statearr_18423_18488[(1)] = (5));

} else {
var statearr_18424_18489 = state_18417__$1;
(statearr_18424_18489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (15))){
var inst_18395 = (state_18417[(8)]);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18417__$1,(18),to,inst_18395);
} else {
if((state_val_18418 === (21))){
var inst_18408 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18425_18490 = state_18417__$1;
(statearr_18425_18490[(2)] = inst_18408);

(statearr_18425_18490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (13))){
var inst_18410 = (state_18417[(2)]);
var state_18417__$1 = (function (){var statearr_18426 = state_18417;
(statearr_18426[(9)] = inst_18410);

return statearr_18426;
})();
var statearr_18427_18491 = state_18417__$1;
(statearr_18427_18491[(2)] = null);

(statearr_18427_18491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (6))){
var inst_18382 = (state_18417[(7)]);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18417__$1,(11),inst_18382);
} else {
if((state_val_18418 === (17))){
var inst_18403 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18403)){
var statearr_18428_18492 = state_18417__$1;
(statearr_18428_18492[(1)] = (19));

} else {
var statearr_18429_18493 = state_18417__$1;
(statearr_18429_18493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (3))){
var inst_18415 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18417__$1,inst_18415);
} else {
if((state_val_18418 === (12))){
var inst_18392 = (state_18417[(10)]);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18417__$1,(14),inst_18392);
} else {
if((state_val_18418 === (2))){
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18417__$1,(4),results);
} else {
if((state_val_18418 === (19))){
var state_18417__$1 = state_18417;
var statearr_18430_18494 = state_18417__$1;
(statearr_18430_18494[(2)] = null);

(statearr_18430_18494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (11))){
var inst_18392 = (state_18417[(2)]);
var state_18417__$1 = (function (){var statearr_18431 = state_18417;
(statearr_18431[(10)] = inst_18392);

return statearr_18431;
})();
var statearr_18432_18495 = state_18417__$1;
(statearr_18432_18495[(2)] = null);

(statearr_18432_18495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (9))){
var state_18417__$1 = state_18417;
var statearr_18433_18496 = state_18417__$1;
(statearr_18433_18496[(2)] = null);

(statearr_18433_18496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (5))){
var state_18417__$1 = state_18417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18434_18497 = state_18417__$1;
(statearr_18434_18497[(1)] = (8));

} else {
var statearr_18435_18498 = state_18417__$1;
(statearr_18435_18498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (14))){
var inst_18395 = (state_18417[(8)]);
var inst_18397 = (state_18417[(11)]);
var inst_18395__$1 = (state_18417[(2)]);
var inst_18396 = (inst_18395__$1 == null);
var inst_18397__$1 = cljs.core.not(inst_18396);
var state_18417__$1 = (function (){var statearr_18436 = state_18417;
(statearr_18436[(8)] = inst_18395__$1);

(statearr_18436[(11)] = inst_18397__$1);

return statearr_18436;
})();
if(inst_18397__$1){
var statearr_18437_18499 = state_18417__$1;
(statearr_18437_18499[(1)] = (15));

} else {
var statearr_18438_18500 = state_18417__$1;
(statearr_18438_18500[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (16))){
var inst_18397 = (state_18417[(11)]);
var state_18417__$1 = state_18417;
var statearr_18439_18501 = state_18417__$1;
(statearr_18439_18501[(2)] = inst_18397);

(statearr_18439_18501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (10))){
var inst_18389 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18440_18502 = state_18417__$1;
(statearr_18440_18502[(2)] = inst_18389);

(statearr_18440_18502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (18))){
var inst_18400 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18441_18503 = state_18417__$1;
(statearr_18441_18503[(2)] = inst_18400);

(statearr_18441_18503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (8))){
var inst_18386 = cljs.core.async.close_BANG_(to);
var state_18417__$1 = state_18417;
var statearr_18442_18504 = state_18417__$1;
(statearr_18442_18504[(2)] = inst_18386);

(statearr_18442_18504[(1)] = (10));


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
});})(c__17907__auto__,jobs,results,process,async))
;
return ((function (switch__17793__auto__,c__17907__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0 = (function (){
var statearr_18446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__);

(statearr_18446[(1)] = (1));

return statearr_18446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1 = (function (state_18417){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18417);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18447){if((e18447 instanceof Object)){
var ex__17797__auto__ = e18447;
var statearr_18448_18505 = state_18417;
(statearr_18448_18505[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18506 = state_18417;
state_18417 = G__18506;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__ = function(state_18417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1.call(this,state_18417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto__,jobs,results,process,async))
})();
var state__17909__auto__ = (function (){var statearr_18449 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto__);

return statearr_18449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto__,jobs,results,process,async))
);

return c__17907__auto__;
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
var args18507 = [];
var len__15787__auto___18510 = arguments.length;
var i__15788__auto___18511 = (0);
while(true){
if((i__15788__auto___18511 < len__15787__auto___18510)){
args18507.push((arguments[i__15788__auto___18511]));

var G__18512 = (i__15788__auto___18511 + (1));
i__15788__auto___18511 = G__18512;
continue;
} else {
}
break;
}

var G__18509 = args18507.length;
switch (G__18509) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18507.length)].join('')));

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
var args18514 = [];
var len__15787__auto___18517 = arguments.length;
var i__15788__auto___18518 = (0);
while(true){
if((i__15788__auto___18518 < len__15787__auto___18517)){
args18514.push((arguments[i__15788__auto___18518]));

var G__18519 = (i__15788__auto___18518 + (1));
i__15788__auto___18518 = G__18519;
continue;
} else {
}
break;
}

var G__18516 = args18514.length;
switch (G__18516) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18514.length)].join('')));

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
var args18521 = [];
var len__15787__auto___18574 = arguments.length;
var i__15788__auto___18575 = (0);
while(true){
if((i__15788__auto___18575 < len__15787__auto___18574)){
args18521.push((arguments[i__15788__auto___18575]));

var G__18576 = (i__15788__auto___18575 + (1));
i__15788__auto___18575 = G__18576;
continue;
} else {
}
break;
}

var G__18523 = args18521.length;
switch (G__18523) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18521.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17907__auto___18578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___18578,tc,fc){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___18578,tc,fc){
return (function (state_18549){
var state_val_18550 = (state_18549[(1)]);
if((state_val_18550 === (7))){
var inst_18545 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
var statearr_18551_18579 = state_18549__$1;
(statearr_18551_18579[(2)] = inst_18545);

(statearr_18551_18579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (1))){
var state_18549__$1 = state_18549;
var statearr_18552_18580 = state_18549__$1;
(statearr_18552_18580[(2)] = null);

(statearr_18552_18580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (4))){
var inst_18526 = (state_18549[(7)]);
var inst_18526__$1 = (state_18549[(2)]);
var inst_18527 = (inst_18526__$1 == null);
var state_18549__$1 = (function (){var statearr_18553 = state_18549;
(statearr_18553[(7)] = inst_18526__$1);

return statearr_18553;
})();
if(cljs.core.truth_(inst_18527)){
var statearr_18554_18581 = state_18549__$1;
(statearr_18554_18581[(1)] = (5));

} else {
var statearr_18555_18582 = state_18549__$1;
(statearr_18555_18582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (13))){
var state_18549__$1 = state_18549;
var statearr_18556_18583 = state_18549__$1;
(statearr_18556_18583[(2)] = null);

(statearr_18556_18583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (6))){
var inst_18526 = (state_18549[(7)]);
var inst_18532 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18526) : p.call(null,inst_18526));
var state_18549__$1 = state_18549;
if(cljs.core.truth_(inst_18532)){
var statearr_18557_18584 = state_18549__$1;
(statearr_18557_18584[(1)] = (9));

} else {
var statearr_18558_18585 = state_18549__$1;
(statearr_18558_18585[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (3))){
var inst_18547 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18549__$1,inst_18547);
} else {
if((state_val_18550 === (12))){
var state_18549__$1 = state_18549;
var statearr_18559_18586 = state_18549__$1;
(statearr_18559_18586[(2)] = null);

(statearr_18559_18586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (2))){
var state_18549__$1 = state_18549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18549__$1,(4),ch);
} else {
if((state_val_18550 === (11))){
var inst_18526 = (state_18549[(7)]);
var inst_18536 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18549__$1,(8),inst_18536,inst_18526);
} else {
if((state_val_18550 === (9))){
var state_18549__$1 = state_18549;
var statearr_18560_18587 = state_18549__$1;
(statearr_18560_18587[(2)] = tc);

(statearr_18560_18587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (5))){
var inst_18529 = cljs.core.async.close_BANG_(tc);
var inst_18530 = cljs.core.async.close_BANG_(fc);
var state_18549__$1 = (function (){var statearr_18561 = state_18549;
(statearr_18561[(8)] = inst_18529);

return statearr_18561;
})();
var statearr_18562_18588 = state_18549__$1;
(statearr_18562_18588[(2)] = inst_18530);

(statearr_18562_18588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (14))){
var inst_18543 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
var statearr_18563_18589 = state_18549__$1;
(statearr_18563_18589[(2)] = inst_18543);

(statearr_18563_18589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (10))){
var state_18549__$1 = state_18549;
var statearr_18564_18590 = state_18549__$1;
(statearr_18564_18590[(2)] = fc);

(statearr_18564_18590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (8))){
var inst_18538 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
if(cljs.core.truth_(inst_18538)){
var statearr_18565_18591 = state_18549__$1;
(statearr_18565_18591[(1)] = (12));

} else {
var statearr_18566_18592 = state_18549__$1;
(statearr_18566_18592[(1)] = (13));

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
});})(c__17907__auto___18578,tc,fc))
;
return ((function (switch__17793__auto__,c__17907__auto___18578,tc,fc){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_18570 = [null,null,null,null,null,null,null,null,null];
(statearr_18570[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_18570[(1)] = (1));

return statearr_18570;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_18549){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18549);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18571){if((e18571 instanceof Object)){
var ex__17797__auto__ = e18571;
var statearr_18572_18593 = state_18549;
(statearr_18572_18593[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18594 = state_18549;
state_18549 = G__18594;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_18549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_18549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___18578,tc,fc))
})();
var state__17909__auto__ = (function (){var statearr_18573 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___18578);

return statearr_18573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___18578,tc,fc))
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
var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto__){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto__){
return (function (state_18641){
var state_val_18642 = (state_18641[(1)]);
if((state_val_18642 === (1))){
var inst_18627 = init;
var state_18641__$1 = (function (){var statearr_18643 = state_18641;
(statearr_18643[(7)] = inst_18627);

return statearr_18643;
})();
var statearr_18644_18659 = state_18641__$1;
(statearr_18644_18659[(2)] = null);

(statearr_18644_18659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (2))){
var state_18641__$1 = state_18641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18641__$1,(4),ch);
} else {
if((state_val_18642 === (3))){
var inst_18639 = (state_18641[(2)]);
var state_18641__$1 = state_18641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18641__$1,inst_18639);
} else {
if((state_val_18642 === (4))){
var inst_18630 = (state_18641[(8)]);
var inst_18630__$1 = (state_18641[(2)]);
var inst_18631 = (inst_18630__$1 == null);
var state_18641__$1 = (function (){var statearr_18645 = state_18641;
(statearr_18645[(8)] = inst_18630__$1);

return statearr_18645;
})();
if(cljs.core.truth_(inst_18631)){
var statearr_18646_18660 = state_18641__$1;
(statearr_18646_18660[(1)] = (5));

} else {
var statearr_18647_18661 = state_18641__$1;
(statearr_18647_18661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (5))){
var inst_18627 = (state_18641[(7)]);
var state_18641__$1 = state_18641;
var statearr_18648_18662 = state_18641__$1;
(statearr_18648_18662[(2)] = inst_18627);

(statearr_18648_18662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (6))){
var inst_18627 = (state_18641[(7)]);
var inst_18630 = (state_18641[(8)]);
var inst_18634 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18627,inst_18630) : f.call(null,inst_18627,inst_18630));
var inst_18627__$1 = inst_18634;
var state_18641__$1 = (function (){var statearr_18649 = state_18641;
(statearr_18649[(7)] = inst_18627__$1);

return statearr_18649;
})();
var statearr_18650_18663 = state_18641__$1;
(statearr_18650_18663[(2)] = null);

(statearr_18650_18663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (7))){
var inst_18637 = (state_18641[(2)]);
var state_18641__$1 = state_18641;
var statearr_18651_18664 = state_18641__$1;
(statearr_18651_18664[(2)] = inst_18637);

(statearr_18651_18664[(1)] = (3));


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
});})(c__17907__auto__))
;
return ((function (switch__17793__auto__,c__17907__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17794__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17794__auto____0 = (function (){
var statearr_18655 = [null,null,null,null,null,null,null,null,null];
(statearr_18655[(0)] = cljs$core$async$reduce_$_state_machine__17794__auto__);

(statearr_18655[(1)] = (1));

return statearr_18655;
});
var cljs$core$async$reduce_$_state_machine__17794__auto____1 = (function (state_18641){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18641);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18656){if((e18656 instanceof Object)){
var ex__17797__auto__ = e18656;
var statearr_18657_18665 = state_18641;
(statearr_18657_18665[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18666 = state_18641;
state_18641 = G__18666;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17794__auto__ = function(state_18641){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17794__auto____1.call(this,state_18641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17794__auto____0;
cljs$core$async$reduce_$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17794__auto____1;
return cljs$core$async$reduce_$_state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto__))
})();
var state__17909__auto__ = (function (){var statearr_18658 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto__);

return statearr_18658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto__))
);

return c__17907__auto__;
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
var args18667 = [];
var len__15787__auto___18719 = arguments.length;
var i__15788__auto___18720 = (0);
while(true){
if((i__15788__auto___18720 < len__15787__auto___18719)){
args18667.push((arguments[i__15788__auto___18720]));

var G__18721 = (i__15788__auto___18720 + (1));
i__15788__auto___18720 = G__18721;
continue;
} else {
}
break;
}

var G__18669 = args18667.length;
switch (G__18669) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18667.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto__){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto__){
return (function (state_18694){
var state_val_18695 = (state_18694[(1)]);
if((state_val_18695 === (7))){
var inst_18676 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18696_18723 = state_18694__$1;
(statearr_18696_18723[(2)] = inst_18676);

(statearr_18696_18723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (1))){
var inst_18670 = cljs.core.seq(coll);
var inst_18671 = inst_18670;
var state_18694__$1 = (function (){var statearr_18697 = state_18694;
(statearr_18697[(7)] = inst_18671);

return statearr_18697;
})();
var statearr_18698_18724 = state_18694__$1;
(statearr_18698_18724[(2)] = null);

(statearr_18698_18724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (4))){
var inst_18671 = (state_18694[(7)]);
var inst_18674 = cljs.core.first(inst_18671);
var state_18694__$1 = state_18694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18694__$1,(7),ch,inst_18674);
} else {
if((state_val_18695 === (13))){
var inst_18688 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18699_18725 = state_18694__$1;
(statearr_18699_18725[(2)] = inst_18688);

(statearr_18699_18725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (6))){
var inst_18679 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
if(cljs.core.truth_(inst_18679)){
var statearr_18700_18726 = state_18694__$1;
(statearr_18700_18726[(1)] = (8));

} else {
var statearr_18701_18727 = state_18694__$1;
(statearr_18701_18727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (3))){
var inst_18692 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18694__$1,inst_18692);
} else {
if((state_val_18695 === (12))){
var state_18694__$1 = state_18694;
var statearr_18702_18728 = state_18694__$1;
(statearr_18702_18728[(2)] = null);

(statearr_18702_18728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (2))){
var inst_18671 = (state_18694[(7)]);
var state_18694__$1 = state_18694;
if(cljs.core.truth_(inst_18671)){
var statearr_18703_18729 = state_18694__$1;
(statearr_18703_18729[(1)] = (4));

} else {
var statearr_18704_18730 = state_18694__$1;
(statearr_18704_18730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (11))){
var inst_18685 = cljs.core.async.close_BANG_(ch);
var state_18694__$1 = state_18694;
var statearr_18705_18731 = state_18694__$1;
(statearr_18705_18731[(2)] = inst_18685);

(statearr_18705_18731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (9))){
var state_18694__$1 = state_18694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18706_18732 = state_18694__$1;
(statearr_18706_18732[(1)] = (11));

} else {
var statearr_18707_18733 = state_18694__$1;
(statearr_18707_18733[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (5))){
var inst_18671 = (state_18694[(7)]);
var state_18694__$1 = state_18694;
var statearr_18708_18734 = state_18694__$1;
(statearr_18708_18734[(2)] = inst_18671);

(statearr_18708_18734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (10))){
var inst_18690 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18709_18735 = state_18694__$1;
(statearr_18709_18735[(2)] = inst_18690);

(statearr_18709_18735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (8))){
var inst_18671 = (state_18694[(7)]);
var inst_18681 = cljs.core.next(inst_18671);
var inst_18671__$1 = inst_18681;
var state_18694__$1 = (function (){var statearr_18710 = state_18694;
(statearr_18710[(7)] = inst_18671__$1);

return statearr_18710;
})();
var statearr_18711_18736 = state_18694__$1;
(statearr_18711_18736[(2)] = null);

(statearr_18711_18736[(1)] = (2));


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
});})(c__17907__auto__))
;
return ((function (switch__17793__auto__,c__17907__auto__){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_18715 = [null,null,null,null,null,null,null,null];
(statearr_18715[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_18715[(1)] = (1));

return statearr_18715;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_18694){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_18694);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e18716){if((e18716 instanceof Object)){
var ex__17797__auto__ = e18716;
var statearr_18717_18737 = state_18694;
(statearr_18717_18737[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18738 = state_18694;
state_18694 = G__18738;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_18694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_18694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto__))
})();
var state__17909__auto__ = (function (){var statearr_18718 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_18718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto__);

return statearr_18718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto__))
);

return c__17907__auto__;
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
var x__15384__auto__ = (((_ == null))?null:_);
var m__15385__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__15385__auto__.call(null,_));
} else {
var m__15385__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__15385__auto____$1.call(null,_));
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
var x__15384__auto__ = (((m == null))?null:m);
var m__15385__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$3 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__15385__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__15385__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__15385__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__15384__auto__ = (((m == null))?null:m);
var m__15385__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__15385__auto__.call(null,m,ch));
} else {
var m__15385__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__15385__auto____$1.call(null,m,ch));
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
var x__15384__auto__ = (((m == null))?null:m);
var m__15385__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__15385__auto__.call(null,m));
} else {
var m__15385__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__15385__auto____$1.call(null,m));
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
var cs = (function (){var G__18963 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18963) : cljs.core.atom.call(null,G__18963));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18964 = (function (mult,ch,cs,meta18965){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18965 = meta18965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18966,meta18965__$1){
var self__ = this;
var _18966__$1 = this;
return (new cljs.core.async.t_cljs$core$async18964(self__.mult,self__.ch,self__.cs,meta18965__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18966){
var self__ = this;
var _18966__$1 = this;
return self__.meta18965;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18967_19187 = self__.cs;
var G__18968_19188 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18967_19187,G__18968_19188) : cljs.core.reset_BANG_.call(null,G__18967_19187,G__18968_19188));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18965","meta18965",1933420208,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18964";

cljs.core.async.t_cljs$core$async18964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async18964");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18964 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18964(mult__$1,ch__$1,cs__$1,meta18965){
return (new cljs.core.async.t_cljs$core$async18964(mult__$1,ch__$1,cs__$1,meta18965));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18964(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17907__auto___19189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___19189,cs,m,dchan,dctr,done){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___19189,cs,m,dchan,dctr,done){
return (function (state_19099){
var state_val_19100 = (state_19099[(1)]);
if((state_val_19100 === (7))){
var inst_19095 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19101_19190 = state_19099__$1;
(statearr_19101_19190[(2)] = inst_19095);

(statearr_19101_19190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (20))){
var inst_19000 = (state_19099[(7)]);
var inst_19010 = cljs.core.first(inst_19000);
var inst_19011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19010,(0),null);
var inst_19012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19010,(1),null);
var state_19099__$1 = (function (){var statearr_19102 = state_19099;
(statearr_19102[(8)] = inst_19011);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19012)){
var statearr_19103_19191 = state_19099__$1;
(statearr_19103_19191[(1)] = (22));

} else {
var statearr_19104_19192 = state_19099__$1;
(statearr_19104_19192[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (27))){
var inst_19047 = (state_19099[(9)]);
var inst_19042 = (state_19099[(10)]);
var inst_18971 = (state_19099[(11)]);
var inst_19040 = (state_19099[(12)]);
var inst_19047__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19040,inst_19042);
var inst_19048 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19047__$1,inst_18971,done);
var state_19099__$1 = (function (){var statearr_19105 = state_19099;
(statearr_19105[(9)] = inst_19047__$1);

return statearr_19105;
})();
if(cljs.core.truth_(inst_19048)){
var statearr_19106_19193 = state_19099__$1;
(statearr_19106_19193[(1)] = (30));

} else {
var statearr_19107_19194 = state_19099__$1;
(statearr_19107_19194[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (1))){
var state_19099__$1 = state_19099;
var statearr_19108_19195 = state_19099__$1;
(statearr_19108_19195[(2)] = null);

(statearr_19108_19195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (24))){
var inst_19000 = (state_19099[(7)]);
var inst_19017 = (state_19099[(2)]);
var inst_19018 = cljs.core.next(inst_19000);
var inst_18980 = inst_19018;
var inst_18981 = null;
var inst_18982 = (0);
var inst_18983 = (0);
var state_19099__$1 = (function (){var statearr_19109 = state_19099;
(statearr_19109[(13)] = inst_18981);

(statearr_19109[(14)] = inst_19017);

(statearr_19109[(15)] = inst_18982);

(statearr_19109[(16)] = inst_18983);

(statearr_19109[(17)] = inst_18980);

return statearr_19109;
})();
var statearr_19110_19196 = state_19099__$1;
(statearr_19110_19196[(2)] = null);

(statearr_19110_19196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (39))){
var state_19099__$1 = state_19099;
var statearr_19114_19197 = state_19099__$1;
(statearr_19114_19197[(2)] = null);

(statearr_19114_19197[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (4))){
var inst_18971 = (state_19099[(11)]);
var inst_18971__$1 = (state_19099[(2)]);
var inst_18972 = (inst_18971__$1 == null);
var state_19099__$1 = (function (){var statearr_19115 = state_19099;
(statearr_19115[(11)] = inst_18971__$1);

return statearr_19115;
})();
if(cljs.core.truth_(inst_18972)){
var statearr_19116_19198 = state_19099__$1;
(statearr_19116_19198[(1)] = (5));

} else {
var statearr_19117_19199 = state_19099__$1;
(statearr_19117_19199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (15))){
var inst_18981 = (state_19099[(13)]);
var inst_18982 = (state_19099[(15)]);
var inst_18983 = (state_19099[(16)]);
var inst_18980 = (state_19099[(17)]);
var inst_18996 = (state_19099[(2)]);
var inst_18997 = (inst_18983 + (1));
var tmp19111 = inst_18981;
var tmp19112 = inst_18982;
var tmp19113 = inst_18980;
var inst_18980__$1 = tmp19113;
var inst_18981__$1 = tmp19111;
var inst_18982__$1 = tmp19112;
var inst_18983__$1 = inst_18997;
var state_19099__$1 = (function (){var statearr_19118 = state_19099;
(statearr_19118[(13)] = inst_18981__$1);

(statearr_19118[(18)] = inst_18996);

(statearr_19118[(15)] = inst_18982__$1);

(statearr_19118[(16)] = inst_18983__$1);

(statearr_19118[(17)] = inst_18980__$1);

return statearr_19118;
})();
var statearr_19119_19200 = state_19099__$1;
(statearr_19119_19200[(2)] = null);

(statearr_19119_19200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (21))){
var inst_19021 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19123_19201 = state_19099__$1;
(statearr_19123_19201[(2)] = inst_19021);

(statearr_19123_19201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (31))){
var inst_19047 = (state_19099[(9)]);
var inst_19051 = done(null);
var inst_19052 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19047);
var state_19099__$1 = (function (){var statearr_19124 = state_19099;
(statearr_19124[(19)] = inst_19051);

return statearr_19124;
})();
var statearr_19125_19202 = state_19099__$1;
(statearr_19125_19202[(2)] = inst_19052);

(statearr_19125_19202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (32))){
var inst_19039 = (state_19099[(20)]);
var inst_19041 = (state_19099[(21)]);
var inst_19042 = (state_19099[(10)]);
var inst_19040 = (state_19099[(12)]);
var inst_19054 = (state_19099[(2)]);
var inst_19055 = (inst_19042 + (1));
var tmp19120 = inst_19039;
var tmp19121 = inst_19041;
var tmp19122 = inst_19040;
var inst_19039__$1 = tmp19120;
var inst_19040__$1 = tmp19122;
var inst_19041__$1 = tmp19121;
var inst_19042__$1 = inst_19055;
var state_19099__$1 = (function (){var statearr_19126 = state_19099;
(statearr_19126[(20)] = inst_19039__$1);

(statearr_19126[(22)] = inst_19054);

(statearr_19126[(21)] = inst_19041__$1);

(statearr_19126[(10)] = inst_19042__$1);

(statearr_19126[(12)] = inst_19040__$1);

return statearr_19126;
})();
var statearr_19127_19203 = state_19099__$1;
(statearr_19127_19203[(2)] = null);

(statearr_19127_19203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (40))){
var inst_19067 = (state_19099[(23)]);
var inst_19071 = done(null);
var inst_19072 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19067);
var state_19099__$1 = (function (){var statearr_19128 = state_19099;
(statearr_19128[(24)] = inst_19071);

return statearr_19128;
})();
var statearr_19129_19204 = state_19099__$1;
(statearr_19129_19204[(2)] = inst_19072);

(statearr_19129_19204[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (33))){
var inst_19058 = (state_19099[(25)]);
var inst_19060 = cljs.core.chunked_seq_QMARK_(inst_19058);
var state_19099__$1 = state_19099;
if(inst_19060){
var statearr_19130_19205 = state_19099__$1;
(statearr_19130_19205[(1)] = (36));

} else {
var statearr_19131_19206 = state_19099__$1;
(statearr_19131_19206[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (13))){
var inst_18990 = (state_19099[(26)]);
var inst_18993 = cljs.core.async.close_BANG_(inst_18990);
var state_19099__$1 = state_19099;
var statearr_19132_19207 = state_19099__$1;
(statearr_19132_19207[(2)] = inst_18993);

(statearr_19132_19207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (22))){
var inst_19011 = (state_19099[(8)]);
var inst_19014 = cljs.core.async.close_BANG_(inst_19011);
var state_19099__$1 = state_19099;
var statearr_19133_19208 = state_19099__$1;
(statearr_19133_19208[(2)] = inst_19014);

(statearr_19133_19208[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (36))){
var inst_19058 = (state_19099[(25)]);
var inst_19062 = cljs.core.chunk_first(inst_19058);
var inst_19063 = cljs.core.chunk_rest(inst_19058);
var inst_19064 = cljs.core.count(inst_19062);
var inst_19039 = inst_19063;
var inst_19040 = inst_19062;
var inst_19041 = inst_19064;
var inst_19042 = (0);
var state_19099__$1 = (function (){var statearr_19134 = state_19099;
(statearr_19134[(20)] = inst_19039);

(statearr_19134[(21)] = inst_19041);

(statearr_19134[(10)] = inst_19042);

(statearr_19134[(12)] = inst_19040);

return statearr_19134;
})();
var statearr_19135_19209 = state_19099__$1;
(statearr_19135_19209[(2)] = null);

(statearr_19135_19209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (41))){
var inst_19058 = (state_19099[(25)]);
var inst_19074 = (state_19099[(2)]);
var inst_19075 = cljs.core.next(inst_19058);
var inst_19039 = inst_19075;
var inst_19040 = null;
var inst_19041 = (0);
var inst_19042 = (0);
var state_19099__$1 = (function (){var statearr_19136 = state_19099;
(statearr_19136[(20)] = inst_19039);

(statearr_19136[(21)] = inst_19041);

(statearr_19136[(10)] = inst_19042);

(statearr_19136[(12)] = inst_19040);

(statearr_19136[(27)] = inst_19074);

return statearr_19136;
})();
var statearr_19137_19210 = state_19099__$1;
(statearr_19137_19210[(2)] = null);

(statearr_19137_19210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (43))){
var state_19099__$1 = state_19099;
var statearr_19138_19211 = state_19099__$1;
(statearr_19138_19211[(2)] = null);

(statearr_19138_19211[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (29))){
var inst_19083 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19139_19212 = state_19099__$1;
(statearr_19139_19212[(2)] = inst_19083);

(statearr_19139_19212[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (44))){
var inst_19092 = (state_19099[(2)]);
var state_19099__$1 = (function (){var statearr_19140 = state_19099;
(statearr_19140[(28)] = inst_19092);

return statearr_19140;
})();
var statearr_19141_19213 = state_19099__$1;
(statearr_19141_19213[(2)] = null);

(statearr_19141_19213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (6))){
var inst_19031 = (state_19099[(29)]);
var inst_19030 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_19031__$1 = cljs.core.keys(inst_19030);
var inst_19032 = cljs.core.count(inst_19031__$1);
var inst_19033 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_19032) : cljs.core.reset_BANG_.call(null,dctr,inst_19032));
var inst_19038 = cljs.core.seq(inst_19031__$1);
var inst_19039 = inst_19038;
var inst_19040 = null;
var inst_19041 = (0);
var inst_19042 = (0);
var state_19099__$1 = (function (){var statearr_19142 = state_19099;
(statearr_19142[(20)] = inst_19039);

(statearr_19142[(21)] = inst_19041);

(statearr_19142[(10)] = inst_19042);

(statearr_19142[(29)] = inst_19031__$1);

(statearr_19142[(12)] = inst_19040);

(statearr_19142[(30)] = inst_19033);

return statearr_19142;
})();
var statearr_19143_19214 = state_19099__$1;
(statearr_19143_19214[(2)] = null);

(statearr_19143_19214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (28))){
var inst_19039 = (state_19099[(20)]);
var inst_19058 = (state_19099[(25)]);
var inst_19058__$1 = cljs.core.seq(inst_19039);
var state_19099__$1 = (function (){var statearr_19144 = state_19099;
(statearr_19144[(25)] = inst_19058__$1);

return statearr_19144;
})();
if(inst_19058__$1){
var statearr_19145_19215 = state_19099__$1;
(statearr_19145_19215[(1)] = (33));

} else {
var statearr_19146_19216 = state_19099__$1;
(statearr_19146_19216[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (25))){
var inst_19041 = (state_19099[(21)]);
var inst_19042 = (state_19099[(10)]);
var inst_19044 = (inst_19042 < inst_19041);
var inst_19045 = inst_19044;
var state_19099__$1 = state_19099;
if(cljs.core.truth_(inst_19045)){
var statearr_19147_19217 = state_19099__$1;
(statearr_19147_19217[(1)] = (27));

} else {
var statearr_19148_19218 = state_19099__$1;
(statearr_19148_19218[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (34))){
var state_19099__$1 = state_19099;
var statearr_19149_19219 = state_19099__$1;
(statearr_19149_19219[(2)] = null);

(statearr_19149_19219[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (17))){
var state_19099__$1 = state_19099;
var statearr_19150_19220 = state_19099__$1;
(statearr_19150_19220[(2)] = null);

(statearr_19150_19220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (3))){
var inst_19097 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19099__$1,inst_19097);
} else {
if((state_val_19100 === (12))){
var inst_19026 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19151_19221 = state_19099__$1;
(statearr_19151_19221[(2)] = inst_19026);

(statearr_19151_19221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (2))){
var state_19099__$1 = state_19099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19099__$1,(4),ch);
} else {
if((state_val_19100 === (23))){
var state_19099__$1 = state_19099;
var statearr_19152_19222 = state_19099__$1;
(statearr_19152_19222[(2)] = null);

(statearr_19152_19222[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (35))){
var inst_19081 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19153_19223 = state_19099__$1;
(statearr_19153_19223[(2)] = inst_19081);

(statearr_19153_19223[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (19))){
var inst_19000 = (state_19099[(7)]);
var inst_19004 = cljs.core.chunk_first(inst_19000);
var inst_19005 = cljs.core.chunk_rest(inst_19000);
var inst_19006 = cljs.core.count(inst_19004);
var inst_18980 = inst_19005;
var inst_18981 = inst_19004;
var inst_18982 = inst_19006;
var inst_18983 = (0);
var state_19099__$1 = (function (){var statearr_19154 = state_19099;
(statearr_19154[(13)] = inst_18981);

(statearr_19154[(15)] = inst_18982);

(statearr_19154[(16)] = inst_18983);

(statearr_19154[(17)] = inst_18980);

return statearr_19154;
})();
var statearr_19155_19224 = state_19099__$1;
(statearr_19155_19224[(2)] = null);

(statearr_19155_19224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (11))){
var inst_19000 = (state_19099[(7)]);
var inst_18980 = (state_19099[(17)]);
var inst_19000__$1 = cljs.core.seq(inst_18980);
var state_19099__$1 = (function (){var statearr_19156 = state_19099;
(statearr_19156[(7)] = inst_19000__$1);

return statearr_19156;
})();
if(inst_19000__$1){
var statearr_19157_19225 = state_19099__$1;
(statearr_19157_19225[(1)] = (16));

} else {
var statearr_19158_19226 = state_19099__$1;
(statearr_19158_19226[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (9))){
var inst_19028 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19159_19227 = state_19099__$1;
(statearr_19159_19227[(2)] = inst_19028);

(statearr_19159_19227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (5))){
var inst_18978 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18979 = cljs.core.seq(inst_18978);
var inst_18980 = inst_18979;
var inst_18981 = null;
var inst_18982 = (0);
var inst_18983 = (0);
var state_19099__$1 = (function (){var statearr_19160 = state_19099;
(statearr_19160[(13)] = inst_18981);

(statearr_19160[(15)] = inst_18982);

(statearr_19160[(16)] = inst_18983);

(statearr_19160[(17)] = inst_18980);

return statearr_19160;
})();
var statearr_19161_19228 = state_19099__$1;
(statearr_19161_19228[(2)] = null);

(statearr_19161_19228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (14))){
var state_19099__$1 = state_19099;
var statearr_19162_19229 = state_19099__$1;
(statearr_19162_19229[(2)] = null);

(statearr_19162_19229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (45))){
var inst_19089 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19163_19230 = state_19099__$1;
(statearr_19163_19230[(2)] = inst_19089);

(statearr_19163_19230[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (26))){
var inst_19031 = (state_19099[(29)]);
var inst_19085 = (state_19099[(2)]);
var inst_19086 = cljs.core.seq(inst_19031);
var state_19099__$1 = (function (){var statearr_19164 = state_19099;
(statearr_19164[(31)] = inst_19085);

return statearr_19164;
})();
if(inst_19086){
var statearr_19165_19231 = state_19099__$1;
(statearr_19165_19231[(1)] = (42));

} else {
var statearr_19166_19232 = state_19099__$1;
(statearr_19166_19232[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (16))){
var inst_19000 = (state_19099[(7)]);
var inst_19002 = cljs.core.chunked_seq_QMARK_(inst_19000);
var state_19099__$1 = state_19099;
if(inst_19002){
var statearr_19167_19233 = state_19099__$1;
(statearr_19167_19233[(1)] = (19));

} else {
var statearr_19168_19234 = state_19099__$1;
(statearr_19168_19234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (38))){
var inst_19078 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19169_19235 = state_19099__$1;
(statearr_19169_19235[(2)] = inst_19078);

(statearr_19169_19235[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (30))){
var state_19099__$1 = state_19099;
var statearr_19170_19236 = state_19099__$1;
(statearr_19170_19236[(2)] = null);

(statearr_19170_19236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (10))){
var inst_18981 = (state_19099[(13)]);
var inst_18983 = (state_19099[(16)]);
var inst_18989 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18981,inst_18983);
var inst_18990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18989,(0),null);
var inst_18991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18989,(1),null);
var state_19099__$1 = (function (){var statearr_19171 = state_19099;
(statearr_19171[(26)] = inst_18990);

return statearr_19171;
})();
if(cljs.core.truth_(inst_18991)){
var statearr_19172_19237 = state_19099__$1;
(statearr_19172_19237[(1)] = (13));

} else {
var statearr_19173_19238 = state_19099__$1;
(statearr_19173_19238[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (18))){
var inst_19024 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
var statearr_19174_19239 = state_19099__$1;
(statearr_19174_19239[(2)] = inst_19024);

(statearr_19174_19239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (42))){
var state_19099__$1 = state_19099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19099__$1,(45),dchan);
} else {
if((state_val_19100 === (37))){
var inst_19058 = (state_19099[(25)]);
var inst_18971 = (state_19099[(11)]);
var inst_19067 = (state_19099[(23)]);
var inst_19067__$1 = cljs.core.first(inst_19058);
var inst_19068 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19067__$1,inst_18971,done);
var state_19099__$1 = (function (){var statearr_19175 = state_19099;
(statearr_19175[(23)] = inst_19067__$1);

return statearr_19175;
})();
if(cljs.core.truth_(inst_19068)){
var statearr_19176_19240 = state_19099__$1;
(statearr_19176_19240[(1)] = (39));

} else {
var statearr_19177_19241 = state_19099__$1;
(statearr_19177_19241[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19100 === (8))){
var inst_18982 = (state_19099[(15)]);
var inst_18983 = (state_19099[(16)]);
var inst_18985 = (inst_18983 < inst_18982);
var inst_18986 = inst_18985;
var state_19099__$1 = state_19099;
if(cljs.core.truth_(inst_18986)){
var statearr_19178_19242 = state_19099__$1;
(statearr_19178_19242[(1)] = (10));

} else {
var statearr_19179_19243 = state_19099__$1;
(statearr_19179_19243[(1)] = (11));

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
});})(c__17907__auto___19189,cs,m,dchan,dctr,done))
;
return ((function (switch__17793__auto__,c__17907__auto___19189,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17794__auto__ = null;
var cljs$core$async$mult_$_state_machine__17794__auto____0 = (function (){
var statearr_19183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19183[(0)] = cljs$core$async$mult_$_state_machine__17794__auto__);

(statearr_19183[(1)] = (1));

return statearr_19183;
});
var cljs$core$async$mult_$_state_machine__17794__auto____1 = (function (state_19099){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_19099);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e19184){if((e19184 instanceof Object)){
var ex__17797__auto__ = e19184;
var statearr_19185_19244 = state_19099;
(statearr_19185_19244[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19245 = state_19099;
state_19099 = G__19245;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17794__auto__ = function(state_19099){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17794__auto____1.call(this,state_19099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17794__auto____0;
cljs$core$async$mult_$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17794__auto____1;
return cljs$core$async$mult_$_state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___19189,cs,m,dchan,dctr,done))
})();
var state__17909__auto__ = (function (){var statearr_19186 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_19186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___19189);

return statearr_19186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___19189,cs,m,dchan,dctr,done))
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
var args19246 = [];
var len__15787__auto___19249 = arguments.length;
var i__15788__auto___19250 = (0);
while(true){
if((i__15788__auto___19250 < len__15787__auto___19249)){
args19246.push((arguments[i__15788__auto___19250]));

var G__19251 = (i__15788__auto___19250 + (1));
i__15788__auto___19250 = G__19251;
continue;
} else {
}
break;
}

var G__19248 = args19246.length;
switch (G__19248) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19246.length)].join('')));

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
var x__15384__auto__ = (((m == null))?null:m);
var m__15385__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__15385__auto__.call(null,m,ch));
} else {
var m__15385__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__15385__auto____$1.call(null,m,ch));
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
var x__15384__auto__ = (((m == null))?null:m);
var m__15385__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__15385__auto__.call(null,m,ch));
} else {
var m__15385__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__15385__auto____$1.call(null,m,ch));
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
var x__15384__auto__ = (((m == null))?null:m);
var m__15385__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__15385__auto__.call(null,m));
} else {
var m__15385__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__15385__auto____$1.call(null,m));
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
var x__15384__auto__ = (((m == null))?null:m);
var m__15385__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__15385__auto__.call(null,m,state_map));
} else {
var m__15385__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__15385__auto____$1.call(null,m,state_map));
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
var x__15384__auto__ = (((m == null))?null:m);
var m__15385__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__15385__auto__.call(null,m,mode));
} else {
var m__15385__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__15385__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__15794__auto__ = [];
var len__15787__auto___19263 = arguments.length;
var i__15788__auto___19264 = (0);
while(true){
if((i__15788__auto___19264 < len__15787__auto___19263)){
args__15794__auto__.push((arguments[i__15788__auto___19264]));

var G__19265 = (i__15788__auto___19264 + (1));
i__15788__auto___19264 = G__19265;
continue;
} else {
}
break;
}

var argseq__15795__auto__ = ((((3) < args__15794__auto__.length))?(new cljs.core.IndexedSeq(args__15794__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__15795__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19257){
var map__19258 = p__19257;
var map__19258__$1 = ((((!((map__19258 == null)))?((((map__19258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19258):map__19258);
var opts = map__19258__$1;
var statearr_19260_19266 = state;
(statearr_19260_19266[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__19258,map__19258__$1,opts){
return (function (val){
var statearr_19261_19267 = state;
(statearr_19261_19267[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19258,map__19258__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19262_19268 = state;
(statearr_19262_19268[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19253){
var G__19254 = cljs.core.first(seq19253);
var seq19253__$1 = cljs.core.next(seq19253);
var G__19255 = cljs.core.first(seq19253__$1);
var seq19253__$2 = cljs.core.next(seq19253__$1);
var G__19256 = cljs.core.first(seq19253__$2);
var seq19253__$3 = cljs.core.next(seq19253__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19254,G__19255,G__19256,seq19253__$3);
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
var cs = (function (){var G__19435 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19435) : cljs.core.atom.call(null,G__19435));
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
if(typeof cljs.core.async.t_cljs$core$async19436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19436 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19437){
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
this.meta19437 = meta19437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19438,meta19437__$1){
var self__ = this;
var _19438__$1 = this;
return (new cljs.core.async.t_cljs$core$async19436(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19437__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19438){
var self__ = this;
var _19438__$1 = this;
return self__.meta19437;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19439_19601 = self__.cs;
var G__19440_19602 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19439_19601,G__19440_19602) : cljs.core.reset_BANG_.call(null,G__19439_19601,G__19440_19602));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19436.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19436.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19437","meta19437",749305316,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19436";

cljs.core.async.t_cljs$core$async19436.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async19436");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19436 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19436(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19437){
return (new cljs.core.async.t_cljs$core$async19436(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19437));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19436(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17907__auto___19603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___19603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___19603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19538){
var state_val_19539 = (state_19538[(1)]);
if((state_val_19539 === (7))){
var inst_19456 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19540_19604 = state_19538__$1;
(statearr_19540_19604[(2)] = inst_19456);

(statearr_19540_19604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (20))){
var inst_19468 = (state_19538[(7)]);
var state_19538__$1 = state_19538;
var statearr_19541_19605 = state_19538__$1;
(statearr_19541_19605[(2)] = inst_19468);

(statearr_19541_19605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (27))){
var state_19538__$1 = state_19538;
var statearr_19542_19606 = state_19538__$1;
(statearr_19542_19606[(2)] = null);

(statearr_19542_19606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (1))){
var inst_19444 = (state_19538[(8)]);
var inst_19444__$1 = calc_state();
var inst_19446 = (inst_19444__$1 == null);
var inst_19447 = cljs.core.not(inst_19446);
var state_19538__$1 = (function (){var statearr_19543 = state_19538;
(statearr_19543[(8)] = inst_19444__$1);

return statearr_19543;
})();
if(inst_19447){
var statearr_19544_19607 = state_19538__$1;
(statearr_19544_19607[(1)] = (2));

} else {
var statearr_19545_19608 = state_19538__$1;
(statearr_19545_19608[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (24))){
var inst_19512 = (state_19538[(9)]);
var inst_19498 = (state_19538[(10)]);
var inst_19491 = (state_19538[(11)]);
var inst_19512__$1 = (inst_19491.cljs$core$IFn$_invoke$arity$1 ? inst_19491.cljs$core$IFn$_invoke$arity$1(inst_19498) : inst_19491.call(null,inst_19498));
var state_19538__$1 = (function (){var statearr_19546 = state_19538;
(statearr_19546[(9)] = inst_19512__$1);

return statearr_19546;
})();
if(cljs.core.truth_(inst_19512__$1)){
var statearr_19547_19609 = state_19538__$1;
(statearr_19547_19609[(1)] = (29));

} else {
var statearr_19548_19610 = state_19538__$1;
(statearr_19548_19610[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (4))){
var inst_19459 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19459)){
var statearr_19549_19611 = state_19538__$1;
(statearr_19549_19611[(1)] = (8));

} else {
var statearr_19550_19612 = state_19538__$1;
(statearr_19550_19612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (15))){
var inst_19485 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19485)){
var statearr_19551_19613 = state_19538__$1;
(statearr_19551_19613[(1)] = (19));

} else {
var statearr_19552_19614 = state_19538__$1;
(statearr_19552_19614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (21))){
var inst_19490 = (state_19538[(12)]);
var inst_19490__$1 = (state_19538[(2)]);
var inst_19491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19490__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19490__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19490__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19538__$1 = (function (){var statearr_19553 = state_19538;
(statearr_19553[(13)] = inst_19492);

(statearr_19553[(12)] = inst_19490__$1);

(statearr_19553[(11)] = inst_19491);

return statearr_19553;
})();
return cljs.core.async.ioc_alts_BANG_(state_19538__$1,(22),inst_19493);
} else {
if((state_val_19539 === (31))){
var inst_19520 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19520)){
var statearr_19554_19615 = state_19538__$1;
(statearr_19554_19615[(1)] = (32));

} else {
var statearr_19555_19616 = state_19538__$1;
(statearr_19555_19616[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (32))){
var inst_19497 = (state_19538[(14)]);
var state_19538__$1 = state_19538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19538__$1,(35),out,inst_19497);
} else {
if((state_val_19539 === (33))){
var inst_19490 = (state_19538[(12)]);
var inst_19468 = inst_19490;
var state_19538__$1 = (function (){var statearr_19556 = state_19538;
(statearr_19556[(7)] = inst_19468);

return statearr_19556;
})();
var statearr_19557_19617 = state_19538__$1;
(statearr_19557_19617[(2)] = null);

(statearr_19557_19617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (13))){
var inst_19468 = (state_19538[(7)]);
var inst_19475 = inst_19468.cljs$lang$protocol_mask$partition0$;
var inst_19476 = (inst_19475 & (64));
var inst_19477 = inst_19468.cljs$core$ISeq$;
var inst_19478 = (inst_19476) || (inst_19477);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19478)){
var statearr_19558_19618 = state_19538__$1;
(statearr_19558_19618[(1)] = (16));

} else {
var statearr_19559_19619 = state_19538__$1;
(statearr_19559_19619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (22))){
var inst_19497 = (state_19538[(14)]);
var inst_19498 = (state_19538[(10)]);
var inst_19496 = (state_19538[(2)]);
var inst_19497__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19496,(0),null);
var inst_19498__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19496,(1),null);
var inst_19499 = (inst_19497__$1 == null);
var inst_19500 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19498__$1,change);
var inst_19501 = (inst_19499) || (inst_19500);
var state_19538__$1 = (function (){var statearr_19560 = state_19538;
(statearr_19560[(14)] = inst_19497__$1);

(statearr_19560[(10)] = inst_19498__$1);

return statearr_19560;
})();
if(cljs.core.truth_(inst_19501)){
var statearr_19561_19620 = state_19538__$1;
(statearr_19561_19620[(1)] = (23));

} else {
var statearr_19562_19621 = state_19538__$1;
(statearr_19562_19621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (36))){
var inst_19490 = (state_19538[(12)]);
var inst_19468 = inst_19490;
var state_19538__$1 = (function (){var statearr_19563 = state_19538;
(statearr_19563[(7)] = inst_19468);

return statearr_19563;
})();
var statearr_19564_19622 = state_19538__$1;
(statearr_19564_19622[(2)] = null);

(statearr_19564_19622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (29))){
var inst_19512 = (state_19538[(9)]);
var state_19538__$1 = state_19538;
var statearr_19565_19623 = state_19538__$1;
(statearr_19565_19623[(2)] = inst_19512);

(statearr_19565_19623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (6))){
var state_19538__$1 = state_19538;
var statearr_19566_19624 = state_19538__$1;
(statearr_19566_19624[(2)] = false);

(statearr_19566_19624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (28))){
var inst_19508 = (state_19538[(2)]);
var inst_19509 = calc_state();
var inst_19468 = inst_19509;
var state_19538__$1 = (function (){var statearr_19567 = state_19538;
(statearr_19567[(15)] = inst_19508);

(statearr_19567[(7)] = inst_19468);

return statearr_19567;
})();
var statearr_19568_19625 = state_19538__$1;
(statearr_19568_19625[(2)] = null);

(statearr_19568_19625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (25))){
var inst_19534 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19569_19626 = state_19538__$1;
(statearr_19569_19626[(2)] = inst_19534);

(statearr_19569_19626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (34))){
var inst_19532 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19570_19627 = state_19538__$1;
(statearr_19570_19627[(2)] = inst_19532);

(statearr_19570_19627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (17))){
var state_19538__$1 = state_19538;
var statearr_19571_19628 = state_19538__$1;
(statearr_19571_19628[(2)] = false);

(statearr_19571_19628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (3))){
var state_19538__$1 = state_19538;
var statearr_19572_19629 = state_19538__$1;
(statearr_19572_19629[(2)] = false);

(statearr_19572_19629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (12))){
var inst_19536 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19538__$1,inst_19536);
} else {
if((state_val_19539 === (2))){
var inst_19444 = (state_19538[(8)]);
var inst_19449 = inst_19444.cljs$lang$protocol_mask$partition0$;
var inst_19450 = (inst_19449 & (64));
var inst_19451 = inst_19444.cljs$core$ISeq$;
var inst_19452 = (inst_19450) || (inst_19451);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19452)){
var statearr_19573_19630 = state_19538__$1;
(statearr_19573_19630[(1)] = (5));

} else {
var statearr_19574_19631 = state_19538__$1;
(statearr_19574_19631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (23))){
var inst_19497 = (state_19538[(14)]);
var inst_19503 = (inst_19497 == null);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19503)){
var statearr_19575_19632 = state_19538__$1;
(statearr_19575_19632[(1)] = (26));

} else {
var statearr_19576_19633 = state_19538__$1;
(statearr_19576_19633[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (35))){
var inst_19523 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19523)){
var statearr_19577_19634 = state_19538__$1;
(statearr_19577_19634[(1)] = (36));

} else {
var statearr_19578_19635 = state_19538__$1;
(statearr_19578_19635[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (19))){
var inst_19468 = (state_19538[(7)]);
var inst_19487 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19468);
var state_19538__$1 = state_19538;
var statearr_19579_19636 = state_19538__$1;
(statearr_19579_19636[(2)] = inst_19487);

(statearr_19579_19636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (11))){
var inst_19468 = (state_19538[(7)]);
var inst_19472 = (inst_19468 == null);
var inst_19473 = cljs.core.not(inst_19472);
var state_19538__$1 = state_19538;
if(inst_19473){
var statearr_19580_19637 = state_19538__$1;
(statearr_19580_19637[(1)] = (13));

} else {
var statearr_19581_19638 = state_19538__$1;
(statearr_19581_19638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (9))){
var inst_19444 = (state_19538[(8)]);
var state_19538__$1 = state_19538;
var statearr_19582_19639 = state_19538__$1;
(statearr_19582_19639[(2)] = inst_19444);

(statearr_19582_19639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (5))){
var state_19538__$1 = state_19538;
var statearr_19583_19640 = state_19538__$1;
(statearr_19583_19640[(2)] = true);

(statearr_19583_19640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (14))){
var state_19538__$1 = state_19538;
var statearr_19584_19641 = state_19538__$1;
(statearr_19584_19641[(2)] = false);

(statearr_19584_19641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (26))){
var inst_19498 = (state_19538[(10)]);
var inst_19505 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19498);
var state_19538__$1 = state_19538;
var statearr_19585_19642 = state_19538__$1;
(statearr_19585_19642[(2)] = inst_19505);

(statearr_19585_19642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (16))){
var state_19538__$1 = state_19538;
var statearr_19586_19643 = state_19538__$1;
(statearr_19586_19643[(2)] = true);

(statearr_19586_19643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (38))){
var inst_19528 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19587_19644 = state_19538__$1;
(statearr_19587_19644[(2)] = inst_19528);

(statearr_19587_19644[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (30))){
var inst_19492 = (state_19538[(13)]);
var inst_19498 = (state_19538[(10)]);
var inst_19491 = (state_19538[(11)]);
var inst_19515 = cljs.core.empty_QMARK_(inst_19491);
var inst_19516 = (inst_19492.cljs$core$IFn$_invoke$arity$1 ? inst_19492.cljs$core$IFn$_invoke$arity$1(inst_19498) : inst_19492.call(null,inst_19498));
var inst_19517 = cljs.core.not(inst_19516);
var inst_19518 = (inst_19515) && (inst_19517);
var state_19538__$1 = state_19538;
var statearr_19588_19645 = state_19538__$1;
(statearr_19588_19645[(2)] = inst_19518);

(statearr_19588_19645[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (10))){
var inst_19444 = (state_19538[(8)]);
var inst_19464 = (state_19538[(2)]);
var inst_19465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19464,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19464,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19464,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19468 = inst_19444;
var state_19538__$1 = (function (){var statearr_19589 = state_19538;
(statearr_19589[(16)] = inst_19467);

(statearr_19589[(17)] = inst_19465);

(statearr_19589[(18)] = inst_19466);

(statearr_19589[(7)] = inst_19468);

return statearr_19589;
})();
var statearr_19590_19646 = state_19538__$1;
(statearr_19590_19646[(2)] = null);

(statearr_19590_19646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (18))){
var inst_19482 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19591_19647 = state_19538__$1;
(statearr_19591_19647[(2)] = inst_19482);

(statearr_19591_19647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (37))){
var state_19538__$1 = state_19538;
var statearr_19592_19648 = state_19538__$1;
(statearr_19592_19648[(2)] = null);

(statearr_19592_19648[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (8))){
var inst_19444 = (state_19538[(8)]);
var inst_19461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19444);
var state_19538__$1 = state_19538;
var statearr_19593_19649 = state_19538__$1;
(statearr_19593_19649[(2)] = inst_19461);

(statearr_19593_19649[(1)] = (10));


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
});})(c__17907__auto___19603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17793__auto__,c__17907__auto___19603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17794__auto__ = null;
var cljs$core$async$mix_$_state_machine__17794__auto____0 = (function (){
var statearr_19597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19597[(0)] = cljs$core$async$mix_$_state_machine__17794__auto__);

(statearr_19597[(1)] = (1));

return statearr_19597;
});
var cljs$core$async$mix_$_state_machine__17794__auto____1 = (function (state_19538){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_19538);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e19598){if((e19598 instanceof Object)){
var ex__17797__auto__ = e19598;
var statearr_19599_19650 = state_19538;
(statearr_19599_19650[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19651 = state_19538;
state_19538 = G__19651;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17794__auto__ = function(state_19538){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17794__auto____1.call(this,state_19538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17794__auto____0;
cljs$core$async$mix_$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17794__auto____1;
return cljs$core$async$mix_$_state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___19603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17909__auto__ = (function (){var statearr_19600 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_19600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___19603);

return statearr_19600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___19603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__15384__auto__ = (((p == null))?null:p);
var m__15385__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$4 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__15385__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__15385__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__15385__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__15384__auto__ = (((p == null))?null:p);
var m__15385__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$3 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__15385__auto__.call(null,p,v,ch));
} else {
var m__15385__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__15385__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19652 = [];
var len__15787__auto___19655 = arguments.length;
var i__15788__auto___19656 = (0);
while(true){
if((i__15788__auto___19656 < len__15787__auto___19655)){
args19652.push((arguments[i__15788__auto___19656]));

var G__19657 = (i__15788__auto___19656 + (1));
i__15788__auto___19656 = G__19657;
continue;
} else {
}
break;
}

var G__19654 = args19652.length;
switch (G__19654) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19652.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15384__auto__ = (((p == null))?null:p);
var m__15385__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__15385__auto__.call(null,p));
} else {
var m__15385__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__15385__auto____$1.call(null,p));
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
var x__15384__auto__ = (((p == null))?null:p);
var m__15385__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__15385__auto__.call(null,p,v));
} else {
var m__15385__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__15385__auto____$1.call(null,p,v));
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
var args19660 = [];
var len__15787__auto___19788 = arguments.length;
var i__15788__auto___19789 = (0);
while(true){
if((i__15788__auto___19789 < len__15787__auto___19788)){
args19660.push((arguments[i__15788__auto___19789]));

var G__19790 = (i__15788__auto___19789 + (1));
i__15788__auto___19789 = G__19790;
continue;
} else {
}
break;
}

var G__19662 = args19660.length;
switch (G__19662) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19660.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__19663 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19663) : cljs.core.atom.call(null,G__19663));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__14729__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__14729__auto__,mults){
return (function (p1__19659_SHARP_){
if(cljs.core.truth_((p1__19659_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19659_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19659_SHARP_.call(null,topic)))){
return p1__19659_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19659_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__14729__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19664 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19665){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19665 = meta19665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19666,meta19665__$1){
var self__ = this;
var _19666__$1 = this;
return (new cljs.core.async.t_cljs$core$async19664(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19665__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19666){
var self__ = this;
var _19666__$1 = this;
return self__.meta19665;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19667 = self__.mults;
var G__19668 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19667,G__19668) : cljs.core.reset_BANG_.call(null,G__19667,G__19668));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19664.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19665","meta19665",2125427539,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19664";

cljs.core.async.t_cljs$core$async19664.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async19664");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19664 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19664(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19665){
return (new cljs.core.async.t_cljs$core$async19664(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19665));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19664(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17907__auto___19792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___19792,mults,ensure_mult,p){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___19792,mults,ensure_mult,p){
return (function (state_19740){
var state_val_19741 = (state_19740[(1)]);
if((state_val_19741 === (7))){
var inst_19736 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19742_19793 = state_19740__$1;
(statearr_19742_19793[(2)] = inst_19736);

(statearr_19742_19793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (20))){
var state_19740__$1 = state_19740;
var statearr_19743_19794 = state_19740__$1;
(statearr_19743_19794[(2)] = null);

(statearr_19743_19794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (1))){
var state_19740__$1 = state_19740;
var statearr_19744_19795 = state_19740__$1;
(statearr_19744_19795[(2)] = null);

(statearr_19744_19795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (24))){
var inst_19719 = (state_19740[(7)]);
var inst_19728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19719);
var state_19740__$1 = state_19740;
var statearr_19745_19796 = state_19740__$1;
(statearr_19745_19796[(2)] = inst_19728);

(statearr_19745_19796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (4))){
var inst_19671 = (state_19740[(8)]);
var inst_19671__$1 = (state_19740[(2)]);
var inst_19672 = (inst_19671__$1 == null);
var state_19740__$1 = (function (){var statearr_19746 = state_19740;
(statearr_19746[(8)] = inst_19671__$1);

return statearr_19746;
})();
if(cljs.core.truth_(inst_19672)){
var statearr_19747_19797 = state_19740__$1;
(statearr_19747_19797[(1)] = (5));

} else {
var statearr_19748_19798 = state_19740__$1;
(statearr_19748_19798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (15))){
var inst_19713 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19749_19799 = state_19740__$1;
(statearr_19749_19799[(2)] = inst_19713);

(statearr_19749_19799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (21))){
var inst_19733 = (state_19740[(2)]);
var state_19740__$1 = (function (){var statearr_19750 = state_19740;
(statearr_19750[(9)] = inst_19733);

return statearr_19750;
})();
var statearr_19751_19800 = state_19740__$1;
(statearr_19751_19800[(2)] = null);

(statearr_19751_19800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (13))){
var inst_19695 = (state_19740[(10)]);
var inst_19697 = cljs.core.chunked_seq_QMARK_(inst_19695);
var state_19740__$1 = state_19740;
if(inst_19697){
var statearr_19752_19801 = state_19740__$1;
(statearr_19752_19801[(1)] = (16));

} else {
var statearr_19753_19802 = state_19740__$1;
(statearr_19753_19802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (22))){
var inst_19725 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
if(cljs.core.truth_(inst_19725)){
var statearr_19754_19803 = state_19740__$1;
(statearr_19754_19803[(1)] = (23));

} else {
var statearr_19755_19804 = state_19740__$1;
(statearr_19755_19804[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (6))){
var inst_19719 = (state_19740[(7)]);
var inst_19671 = (state_19740[(8)]);
var inst_19721 = (state_19740[(11)]);
var inst_19719__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19671) : topic_fn.call(null,inst_19671));
var inst_19720 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_19721__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19720,inst_19719__$1);
var state_19740__$1 = (function (){var statearr_19756 = state_19740;
(statearr_19756[(7)] = inst_19719__$1);

(statearr_19756[(11)] = inst_19721__$1);

return statearr_19756;
})();
if(cljs.core.truth_(inst_19721__$1)){
var statearr_19757_19805 = state_19740__$1;
(statearr_19757_19805[(1)] = (19));

} else {
var statearr_19758_19806 = state_19740__$1;
(statearr_19758_19806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (25))){
var inst_19730 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19759_19807 = state_19740__$1;
(statearr_19759_19807[(2)] = inst_19730);

(statearr_19759_19807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (17))){
var inst_19695 = (state_19740[(10)]);
var inst_19704 = cljs.core.first(inst_19695);
var inst_19705 = cljs.core.async.muxch_STAR_(inst_19704);
var inst_19706 = cljs.core.async.close_BANG_(inst_19705);
var inst_19707 = cljs.core.next(inst_19695);
var inst_19681 = inst_19707;
var inst_19682 = null;
var inst_19683 = (0);
var inst_19684 = (0);
var state_19740__$1 = (function (){var statearr_19760 = state_19740;
(statearr_19760[(12)] = inst_19682);

(statearr_19760[(13)] = inst_19684);

(statearr_19760[(14)] = inst_19706);

(statearr_19760[(15)] = inst_19683);

(statearr_19760[(16)] = inst_19681);

return statearr_19760;
})();
var statearr_19761_19808 = state_19740__$1;
(statearr_19761_19808[(2)] = null);

(statearr_19761_19808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (3))){
var inst_19738 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19740__$1,inst_19738);
} else {
if((state_val_19741 === (12))){
var inst_19715 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19762_19809 = state_19740__$1;
(statearr_19762_19809[(2)] = inst_19715);

(statearr_19762_19809[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (2))){
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19740__$1,(4),ch);
} else {
if((state_val_19741 === (23))){
var state_19740__$1 = state_19740;
var statearr_19763_19810 = state_19740__$1;
(statearr_19763_19810[(2)] = null);

(statearr_19763_19810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (19))){
var inst_19671 = (state_19740[(8)]);
var inst_19721 = (state_19740[(11)]);
var inst_19723 = cljs.core.async.muxch_STAR_(inst_19721);
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19740__$1,(22),inst_19723,inst_19671);
} else {
if((state_val_19741 === (11))){
var inst_19695 = (state_19740[(10)]);
var inst_19681 = (state_19740[(16)]);
var inst_19695__$1 = cljs.core.seq(inst_19681);
var state_19740__$1 = (function (){var statearr_19764 = state_19740;
(statearr_19764[(10)] = inst_19695__$1);

return statearr_19764;
})();
if(inst_19695__$1){
var statearr_19765_19811 = state_19740__$1;
(statearr_19765_19811[(1)] = (13));

} else {
var statearr_19766_19812 = state_19740__$1;
(statearr_19766_19812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (9))){
var inst_19717 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19767_19813 = state_19740__$1;
(statearr_19767_19813[(2)] = inst_19717);

(statearr_19767_19813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (5))){
var inst_19678 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_19679 = cljs.core.vals(inst_19678);
var inst_19680 = cljs.core.seq(inst_19679);
var inst_19681 = inst_19680;
var inst_19682 = null;
var inst_19683 = (0);
var inst_19684 = (0);
var state_19740__$1 = (function (){var statearr_19768 = state_19740;
(statearr_19768[(12)] = inst_19682);

(statearr_19768[(13)] = inst_19684);

(statearr_19768[(15)] = inst_19683);

(statearr_19768[(16)] = inst_19681);

return statearr_19768;
})();
var statearr_19769_19814 = state_19740__$1;
(statearr_19769_19814[(2)] = null);

(statearr_19769_19814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (14))){
var state_19740__$1 = state_19740;
var statearr_19773_19815 = state_19740__$1;
(statearr_19773_19815[(2)] = null);

(statearr_19773_19815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (16))){
var inst_19695 = (state_19740[(10)]);
var inst_19699 = cljs.core.chunk_first(inst_19695);
var inst_19700 = cljs.core.chunk_rest(inst_19695);
var inst_19701 = cljs.core.count(inst_19699);
var inst_19681 = inst_19700;
var inst_19682 = inst_19699;
var inst_19683 = inst_19701;
var inst_19684 = (0);
var state_19740__$1 = (function (){var statearr_19774 = state_19740;
(statearr_19774[(12)] = inst_19682);

(statearr_19774[(13)] = inst_19684);

(statearr_19774[(15)] = inst_19683);

(statearr_19774[(16)] = inst_19681);

return statearr_19774;
})();
var statearr_19775_19816 = state_19740__$1;
(statearr_19775_19816[(2)] = null);

(statearr_19775_19816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (10))){
var inst_19682 = (state_19740[(12)]);
var inst_19684 = (state_19740[(13)]);
var inst_19683 = (state_19740[(15)]);
var inst_19681 = (state_19740[(16)]);
var inst_19689 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19682,inst_19684);
var inst_19690 = cljs.core.async.muxch_STAR_(inst_19689);
var inst_19691 = cljs.core.async.close_BANG_(inst_19690);
var inst_19692 = (inst_19684 + (1));
var tmp19770 = inst_19682;
var tmp19771 = inst_19683;
var tmp19772 = inst_19681;
var inst_19681__$1 = tmp19772;
var inst_19682__$1 = tmp19770;
var inst_19683__$1 = tmp19771;
var inst_19684__$1 = inst_19692;
var state_19740__$1 = (function (){var statearr_19776 = state_19740;
(statearr_19776[(12)] = inst_19682__$1);

(statearr_19776[(13)] = inst_19684__$1);

(statearr_19776[(17)] = inst_19691);

(statearr_19776[(15)] = inst_19683__$1);

(statearr_19776[(16)] = inst_19681__$1);

return statearr_19776;
})();
var statearr_19777_19817 = state_19740__$1;
(statearr_19777_19817[(2)] = null);

(statearr_19777_19817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (18))){
var inst_19710 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19778_19818 = state_19740__$1;
(statearr_19778_19818[(2)] = inst_19710);

(statearr_19778_19818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (8))){
var inst_19684 = (state_19740[(13)]);
var inst_19683 = (state_19740[(15)]);
var inst_19686 = (inst_19684 < inst_19683);
var inst_19687 = inst_19686;
var state_19740__$1 = state_19740;
if(cljs.core.truth_(inst_19687)){
var statearr_19779_19819 = state_19740__$1;
(statearr_19779_19819[(1)] = (10));

} else {
var statearr_19780_19820 = state_19740__$1;
(statearr_19780_19820[(1)] = (11));

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
});})(c__17907__auto___19792,mults,ensure_mult,p))
;
return ((function (switch__17793__auto__,c__17907__auto___19792,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_19784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19784[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_19784[(1)] = (1));

return statearr_19784;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_19740){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_19740);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e19785){if((e19785 instanceof Object)){
var ex__17797__auto__ = e19785;
var statearr_19786_19821 = state_19740;
(statearr_19786_19821[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19822 = state_19740;
state_19740 = G__19822;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_19740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_19740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___19792,mults,ensure_mult,p))
})();
var state__17909__auto__ = (function (){var statearr_19787 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_19787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___19792);

return statearr_19787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___19792,mults,ensure_mult,p))
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
var args19823 = [];
var len__15787__auto___19826 = arguments.length;
var i__15788__auto___19827 = (0);
while(true){
if((i__15788__auto___19827 < len__15787__auto___19826)){
args19823.push((arguments[i__15788__auto___19827]));

var G__19828 = (i__15788__auto___19827 + (1));
i__15788__auto___19827 = G__19828;
continue;
} else {
}
break;
}

var G__19825 = args19823.length;
switch (G__19825) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19823.length)].join('')));

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
var args19830 = [];
var len__15787__auto___19833 = arguments.length;
var i__15788__auto___19834 = (0);
while(true){
if((i__15788__auto___19834 < len__15787__auto___19833)){
args19830.push((arguments[i__15788__auto___19834]));

var G__19835 = (i__15788__auto___19834 + (1));
i__15788__auto___19834 = G__19835;
continue;
} else {
}
break;
}

var G__19832 = args19830.length;
switch (G__19832) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19830.length)].join('')));

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
var args19837 = [];
var len__15787__auto___19908 = arguments.length;
var i__15788__auto___19909 = (0);
while(true){
if((i__15788__auto___19909 < len__15787__auto___19908)){
args19837.push((arguments[i__15788__auto___19909]));

var G__19910 = (i__15788__auto___19909 + (1));
i__15788__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var G__19839 = args19837.length;
switch (G__19839) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19837.length)].join('')));

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
var c__17907__auto___19912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___19912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___19912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19878){
var state_val_19879 = (state_19878[(1)]);
if((state_val_19879 === (7))){
var state_19878__$1 = state_19878;
var statearr_19880_19913 = state_19878__$1;
(statearr_19880_19913[(2)] = null);

(statearr_19880_19913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (1))){
var state_19878__$1 = state_19878;
var statearr_19881_19914 = state_19878__$1;
(statearr_19881_19914[(2)] = null);

(statearr_19881_19914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (4))){
var inst_19842 = (state_19878[(7)]);
var inst_19844 = (inst_19842 < cnt);
var state_19878__$1 = state_19878;
if(cljs.core.truth_(inst_19844)){
var statearr_19882_19915 = state_19878__$1;
(statearr_19882_19915[(1)] = (6));

} else {
var statearr_19883_19916 = state_19878__$1;
(statearr_19883_19916[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (15))){
var inst_19874 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19884_19917 = state_19878__$1;
(statearr_19884_19917[(2)] = inst_19874);

(statearr_19884_19917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (13))){
var inst_19867 = cljs.core.async.close_BANG_(out);
var state_19878__$1 = state_19878;
var statearr_19885_19918 = state_19878__$1;
(statearr_19885_19918[(2)] = inst_19867);

(statearr_19885_19918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (6))){
var state_19878__$1 = state_19878;
var statearr_19886_19919 = state_19878__$1;
(statearr_19886_19919[(2)] = null);

(statearr_19886_19919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (3))){
var inst_19876 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19878__$1,inst_19876);
} else {
if((state_val_19879 === (12))){
var inst_19864 = (state_19878[(8)]);
var inst_19864__$1 = (state_19878[(2)]);
var inst_19865 = cljs.core.some(cljs.core.nil_QMARK_,inst_19864__$1);
var state_19878__$1 = (function (){var statearr_19887 = state_19878;
(statearr_19887[(8)] = inst_19864__$1);

return statearr_19887;
})();
if(cljs.core.truth_(inst_19865)){
var statearr_19888_19920 = state_19878__$1;
(statearr_19888_19920[(1)] = (13));

} else {
var statearr_19889_19921 = state_19878__$1;
(statearr_19889_19921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (2))){
var inst_19841 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_19842 = (0);
var state_19878__$1 = (function (){var statearr_19890 = state_19878;
(statearr_19890[(7)] = inst_19842);

(statearr_19890[(9)] = inst_19841);

return statearr_19890;
})();
var statearr_19891_19922 = state_19878__$1;
(statearr_19891_19922[(2)] = null);

(statearr_19891_19922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (11))){
var inst_19842 = (state_19878[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19878,(10),Object,null,(9));
var inst_19851 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19842) : chs__$1.call(null,inst_19842));
var inst_19852 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19842) : done.call(null,inst_19842));
var inst_19853 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19851,inst_19852);
var state_19878__$1 = state_19878;
var statearr_19892_19923 = state_19878__$1;
(statearr_19892_19923[(2)] = inst_19853);


cljs.core.async.impl.ioc_helpers.process_exception(state_19878__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (9))){
var inst_19842 = (state_19878[(7)]);
var inst_19855 = (state_19878[(2)]);
var inst_19856 = (inst_19842 + (1));
var inst_19842__$1 = inst_19856;
var state_19878__$1 = (function (){var statearr_19893 = state_19878;
(statearr_19893[(7)] = inst_19842__$1);

(statearr_19893[(10)] = inst_19855);

return statearr_19893;
})();
var statearr_19894_19924 = state_19878__$1;
(statearr_19894_19924[(2)] = null);

(statearr_19894_19924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (5))){
var inst_19862 = (state_19878[(2)]);
var state_19878__$1 = (function (){var statearr_19895 = state_19878;
(statearr_19895[(11)] = inst_19862);

return statearr_19895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19878__$1,(12),dchan);
} else {
if((state_val_19879 === (14))){
var inst_19864 = (state_19878[(8)]);
var inst_19869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19864);
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19878__$1,(16),out,inst_19869);
} else {
if((state_val_19879 === (16))){
var inst_19871 = (state_19878[(2)]);
var state_19878__$1 = (function (){var statearr_19896 = state_19878;
(statearr_19896[(12)] = inst_19871);

return statearr_19896;
})();
var statearr_19897_19925 = state_19878__$1;
(statearr_19897_19925[(2)] = null);

(statearr_19897_19925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (10))){
var inst_19846 = (state_19878[(2)]);
var inst_19847 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19878__$1 = (function (){var statearr_19898 = state_19878;
(statearr_19898[(13)] = inst_19846);

return statearr_19898;
})();
var statearr_19899_19926 = state_19878__$1;
(statearr_19899_19926[(2)] = inst_19847);


cljs.core.async.impl.ioc_helpers.process_exception(state_19878__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (8))){
var inst_19860 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19900_19927 = state_19878__$1;
(statearr_19900_19927[(2)] = inst_19860);

(statearr_19900_19927[(1)] = (5));


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
});})(c__17907__auto___19912,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17793__auto__,c__17907__auto___19912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_19904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19904[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_19904[(1)] = (1));

return statearr_19904;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_19878){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_19878);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e19905){if((e19905 instanceof Object)){
var ex__17797__auto__ = e19905;
var statearr_19906_19928 = state_19878;
(statearr_19906_19928[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19929 = state_19878;
state_19878 = G__19929;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_19878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_19878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___19912,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17909__auto__ = (function (){var statearr_19907 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_19907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___19912);

return statearr_19907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___19912,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19931 = [];
var len__15787__auto___19987 = arguments.length;
var i__15788__auto___19988 = (0);
while(true){
if((i__15788__auto___19988 < len__15787__auto___19987)){
args19931.push((arguments[i__15788__auto___19988]));

var G__19989 = (i__15788__auto___19988 + (1));
i__15788__auto___19988 = G__19989;
continue;
} else {
}
break;
}

var G__19933 = args19931.length;
switch (G__19933) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19931.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___19991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___19991,out){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___19991,out){
return (function (state_19963){
var state_val_19964 = (state_19963[(1)]);
if((state_val_19964 === (7))){
var inst_19942 = (state_19963[(7)]);
var inst_19943 = (state_19963[(8)]);
var inst_19942__$1 = (state_19963[(2)]);
var inst_19943__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19942__$1,(0),null);
var inst_19944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19942__$1,(1),null);
var inst_19945 = (inst_19943__$1 == null);
var state_19963__$1 = (function (){var statearr_19965 = state_19963;
(statearr_19965[(7)] = inst_19942__$1);

(statearr_19965[(8)] = inst_19943__$1);

(statearr_19965[(9)] = inst_19944);

return statearr_19965;
})();
if(cljs.core.truth_(inst_19945)){
var statearr_19966_19992 = state_19963__$1;
(statearr_19966_19992[(1)] = (8));

} else {
var statearr_19967_19993 = state_19963__$1;
(statearr_19967_19993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (1))){
var inst_19934 = cljs.core.vec(chs);
var inst_19935 = inst_19934;
var state_19963__$1 = (function (){var statearr_19968 = state_19963;
(statearr_19968[(10)] = inst_19935);

return statearr_19968;
})();
var statearr_19969_19994 = state_19963__$1;
(statearr_19969_19994[(2)] = null);

(statearr_19969_19994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (4))){
var inst_19935 = (state_19963[(10)]);
var state_19963__$1 = state_19963;
return cljs.core.async.ioc_alts_BANG_(state_19963__$1,(7),inst_19935);
} else {
if((state_val_19964 === (6))){
var inst_19959 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_19970_19995 = state_19963__$1;
(statearr_19970_19995[(2)] = inst_19959);

(statearr_19970_19995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (3))){
var inst_19961 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19963__$1,inst_19961);
} else {
if((state_val_19964 === (2))){
var inst_19935 = (state_19963[(10)]);
var inst_19937 = cljs.core.count(inst_19935);
var inst_19938 = (inst_19937 > (0));
var state_19963__$1 = state_19963;
if(cljs.core.truth_(inst_19938)){
var statearr_19972_19996 = state_19963__$1;
(statearr_19972_19996[(1)] = (4));

} else {
var statearr_19973_19997 = state_19963__$1;
(statearr_19973_19997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (11))){
var inst_19935 = (state_19963[(10)]);
var inst_19952 = (state_19963[(2)]);
var tmp19971 = inst_19935;
var inst_19935__$1 = tmp19971;
var state_19963__$1 = (function (){var statearr_19974 = state_19963;
(statearr_19974[(11)] = inst_19952);

(statearr_19974[(10)] = inst_19935__$1);

return statearr_19974;
})();
var statearr_19975_19998 = state_19963__$1;
(statearr_19975_19998[(2)] = null);

(statearr_19975_19998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (9))){
var inst_19943 = (state_19963[(8)]);
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19963__$1,(11),out,inst_19943);
} else {
if((state_val_19964 === (5))){
var inst_19957 = cljs.core.async.close_BANG_(out);
var state_19963__$1 = state_19963;
var statearr_19976_19999 = state_19963__$1;
(statearr_19976_19999[(2)] = inst_19957);

(statearr_19976_19999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (10))){
var inst_19955 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_19977_20000 = state_19963__$1;
(statearr_19977_20000[(2)] = inst_19955);

(statearr_19977_20000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (8))){
var inst_19942 = (state_19963[(7)]);
var inst_19943 = (state_19963[(8)]);
var inst_19935 = (state_19963[(10)]);
var inst_19944 = (state_19963[(9)]);
var inst_19947 = (function (){var cs = inst_19935;
var vec__19940 = inst_19942;
var v = inst_19943;
var c = inst_19944;
return ((function (cs,vec__19940,v,c,inst_19942,inst_19943,inst_19935,inst_19944,state_val_19964,c__17907__auto___19991,out){
return (function (p1__19930_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19930_SHARP_);
});
;})(cs,vec__19940,v,c,inst_19942,inst_19943,inst_19935,inst_19944,state_val_19964,c__17907__auto___19991,out))
})();
var inst_19948 = cljs.core.filterv(inst_19947,inst_19935);
var inst_19935__$1 = inst_19948;
var state_19963__$1 = (function (){var statearr_19978 = state_19963;
(statearr_19978[(10)] = inst_19935__$1);

return statearr_19978;
})();
var statearr_19979_20001 = state_19963__$1;
(statearr_19979_20001[(2)] = null);

(statearr_19979_20001[(1)] = (2));


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
});})(c__17907__auto___19991,out))
;
return ((function (switch__17793__auto__,c__17907__auto___19991,out){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_19983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19983[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_19983[(1)] = (1));

return statearr_19983;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_19963){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_19963);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e19984){if((e19984 instanceof Object)){
var ex__17797__auto__ = e19984;
var statearr_19985_20002 = state_19963;
(statearr_19985_20002[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20003 = state_19963;
state_19963 = G__20003;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_19963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_19963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___19991,out))
})();
var state__17909__auto__ = (function (){var statearr_19986 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_19986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___19991);

return statearr_19986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___19991,out))
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
var args20004 = [];
var len__15787__auto___20053 = arguments.length;
var i__15788__auto___20054 = (0);
while(true){
if((i__15788__auto___20054 < len__15787__auto___20053)){
args20004.push((arguments[i__15788__auto___20054]));

var G__20055 = (i__15788__auto___20054 + (1));
i__15788__auto___20054 = G__20055;
continue;
} else {
}
break;
}

var G__20006 = args20004.length;
switch (G__20006) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20004.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___20057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___20057,out){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___20057,out){
return (function (state_20030){
var state_val_20031 = (state_20030[(1)]);
if((state_val_20031 === (7))){
var inst_20012 = (state_20030[(7)]);
var inst_20012__$1 = (state_20030[(2)]);
var inst_20013 = (inst_20012__$1 == null);
var inst_20014 = cljs.core.not(inst_20013);
var state_20030__$1 = (function (){var statearr_20032 = state_20030;
(statearr_20032[(7)] = inst_20012__$1);

return statearr_20032;
})();
if(inst_20014){
var statearr_20033_20058 = state_20030__$1;
(statearr_20033_20058[(1)] = (8));

} else {
var statearr_20034_20059 = state_20030__$1;
(statearr_20034_20059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (1))){
var inst_20007 = (0);
var state_20030__$1 = (function (){var statearr_20035 = state_20030;
(statearr_20035[(8)] = inst_20007);

return statearr_20035;
})();
var statearr_20036_20060 = state_20030__$1;
(statearr_20036_20060[(2)] = null);

(statearr_20036_20060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (4))){
var state_20030__$1 = state_20030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20030__$1,(7),ch);
} else {
if((state_val_20031 === (6))){
var inst_20025 = (state_20030[(2)]);
var state_20030__$1 = state_20030;
var statearr_20037_20061 = state_20030__$1;
(statearr_20037_20061[(2)] = inst_20025);

(statearr_20037_20061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (3))){
var inst_20027 = (state_20030[(2)]);
var inst_20028 = cljs.core.async.close_BANG_(out);
var state_20030__$1 = (function (){var statearr_20038 = state_20030;
(statearr_20038[(9)] = inst_20027);

return statearr_20038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20030__$1,inst_20028);
} else {
if((state_val_20031 === (2))){
var inst_20007 = (state_20030[(8)]);
var inst_20009 = (inst_20007 < n);
var state_20030__$1 = state_20030;
if(cljs.core.truth_(inst_20009)){
var statearr_20039_20062 = state_20030__$1;
(statearr_20039_20062[(1)] = (4));

} else {
var statearr_20040_20063 = state_20030__$1;
(statearr_20040_20063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (11))){
var inst_20007 = (state_20030[(8)]);
var inst_20017 = (state_20030[(2)]);
var inst_20018 = (inst_20007 + (1));
var inst_20007__$1 = inst_20018;
var state_20030__$1 = (function (){var statearr_20041 = state_20030;
(statearr_20041[(10)] = inst_20017);

(statearr_20041[(8)] = inst_20007__$1);

return statearr_20041;
})();
var statearr_20042_20064 = state_20030__$1;
(statearr_20042_20064[(2)] = null);

(statearr_20042_20064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (9))){
var state_20030__$1 = state_20030;
var statearr_20043_20065 = state_20030__$1;
(statearr_20043_20065[(2)] = null);

(statearr_20043_20065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (5))){
var state_20030__$1 = state_20030;
var statearr_20044_20066 = state_20030__$1;
(statearr_20044_20066[(2)] = null);

(statearr_20044_20066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (10))){
var inst_20022 = (state_20030[(2)]);
var state_20030__$1 = state_20030;
var statearr_20045_20067 = state_20030__$1;
(statearr_20045_20067[(2)] = inst_20022);

(statearr_20045_20067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (8))){
var inst_20012 = (state_20030[(7)]);
var state_20030__$1 = state_20030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20030__$1,(11),out,inst_20012);
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
});})(c__17907__auto___20057,out))
;
return ((function (switch__17793__auto__,c__17907__auto___20057,out){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_20049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20049[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_20049[(1)] = (1));

return statearr_20049;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_20030){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_20030);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e20050){if((e20050 instanceof Object)){
var ex__17797__auto__ = e20050;
var statearr_20051_20068 = state_20030;
(statearr_20051_20068[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20069 = state_20030;
state_20030 = G__20069;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_20030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_20030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___20057,out))
})();
var state__17909__auto__ = (function (){var statearr_20052 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_20052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___20057);

return statearr_20052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___20057,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20079 = (function (map_LT_,f,ch,meta20080){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20080 = meta20080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20081,meta20080__$1){
var self__ = this;
var _20081__$1 = this;
return (new cljs.core.async.t_cljs$core$async20079(self__.map_LT_,self__.f,self__.ch,meta20080__$1));
});

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20081){
var self__ = this;
var _20081__$1 = this;
return self__.meta20080;
});

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20082 = (function (map_LT_,f,ch,meta20080,_,fn1,meta20083){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20080 = meta20080;
this._ = _;
this.fn1 = fn1;
this.meta20083 = meta20083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20084,meta20083__$1){
var self__ = this;
var _20084__$1 = this;
return (new cljs.core.async.t_cljs$core$async20082(self__.map_LT_,self__.f,self__.ch,self__.meta20080,self__._,self__.fn1,meta20083__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20084){
var self__ = this;
var _20084__$1 = this;
return self__.meta20083;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20082.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20070_SHARP_){
var G__20085 = (((p1__20070_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20070_SHARP_) : self__.f.call(null,p1__20070_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20085) : f1.call(null,G__20085));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20082.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20080","meta20080",-128380534,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20079","cljs.core.async/t_cljs$core$async20079",690496942,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20083","meta20083",-472157910,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20082";

cljs.core.async.t_cljs$core$async20082.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async20082");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20082 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20082(map_LT___$1,f__$1,ch__$1,meta20080__$1,___$2,fn1__$1,meta20083){
return (new cljs.core.async.t_cljs$core$async20082(map_LT___$1,f__$1,ch__$1,meta20080__$1,___$2,fn1__$1,meta20083));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20082(self__.map_LT_,self__.f,self__.ch,self__.meta20080,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__14717__auto__ = ret;
if(cljs.core.truth_(and__14717__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__14717__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20086 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20086) : self__.f.call(null,G__20086));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20080","meta20080",-128380534,null)], null);
});

cljs.core.async.t_cljs$core$async20079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20079";

cljs.core.async.t_cljs$core$async20079.cljs$lang$ctorPrWriter = (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async20079");
});

cljs.core.async.__GT_t_cljs$core$async20079 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20079(map_LT___$1,f__$1,ch__$1,meta20080){
return (new cljs.core.async.t_cljs$core$async20079(map_LT___$1,f__$1,ch__$1,meta20080));
});

}

return (new cljs.core.async.t_cljs$core$async20079(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20090 = (function (map_GT_,f,ch,meta20091){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20091 = meta20091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20092,meta20091__$1){
var self__ = this;
var _20092__$1 = this;
return (new cljs.core.async.t_cljs$core$async20090(self__.map_GT_,self__.f,self__.ch,meta20091__$1));
});

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20092){
var self__ = this;
var _20092__$1 = this;
return self__.meta20091;
});

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async20090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20091","meta20091",1814607834,null)], null);
});

cljs.core.async.t_cljs$core$async20090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20090";

cljs.core.async.t_cljs$core$async20090.cljs$lang$ctorPrWriter = (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async20090");
});

cljs.core.async.__GT_t_cljs$core$async20090 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20090(map_GT___$1,f__$1,ch__$1,meta20091){
return (new cljs.core.async.t_cljs$core$async20090(map_GT___$1,f__$1,ch__$1,meta20091));
});

}

return (new cljs.core.async.t_cljs$core$async20090(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20096 = (function (filter_GT_,p,ch,meta20097){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20097 = meta20097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20098,meta20097__$1){
var self__ = this;
var _20098__$1 = this;
return (new cljs.core.async.t_cljs$core$async20096(self__.filter_GT_,self__.p,self__.ch,meta20097__$1));
});

cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20098){
var self__ = this;
var _20098__$1 = this;
return self__.meta20097;
});

cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20097","meta20097",-924306946,null)], null);
});

cljs.core.async.t_cljs$core$async20096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20096";

cljs.core.async.t_cljs$core$async20096.cljs$lang$ctorPrWriter = (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.core.async/t_cljs$core$async20096");
});

cljs.core.async.__GT_t_cljs$core$async20096 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20096(filter_GT___$1,p__$1,ch__$1,meta20097){
return (new cljs.core.async.t_cljs$core$async20096(filter_GT___$1,p__$1,ch__$1,meta20097));
});

}

return (new cljs.core.async.t_cljs$core$async20096(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20099 = [];
var len__15787__auto___20143 = arguments.length;
var i__15788__auto___20144 = (0);
while(true){
if((i__15788__auto___20144 < len__15787__auto___20143)){
args20099.push((arguments[i__15788__auto___20144]));

var G__20145 = (i__15788__auto___20144 + (1));
i__15788__auto___20144 = G__20145;
continue;
} else {
}
break;
}

var G__20101 = args20099.length;
switch (G__20101) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20099.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___20147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___20147,out){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___20147,out){
return (function (state_20122){
var state_val_20123 = (state_20122[(1)]);
if((state_val_20123 === (7))){
var inst_20118 = (state_20122[(2)]);
var state_20122__$1 = state_20122;
var statearr_20124_20148 = state_20122__$1;
(statearr_20124_20148[(2)] = inst_20118);

(statearr_20124_20148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (1))){
var state_20122__$1 = state_20122;
var statearr_20125_20149 = state_20122__$1;
(statearr_20125_20149[(2)] = null);

(statearr_20125_20149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (4))){
var inst_20104 = (state_20122[(7)]);
var inst_20104__$1 = (state_20122[(2)]);
var inst_20105 = (inst_20104__$1 == null);
var state_20122__$1 = (function (){var statearr_20126 = state_20122;
(statearr_20126[(7)] = inst_20104__$1);

return statearr_20126;
})();
if(cljs.core.truth_(inst_20105)){
var statearr_20127_20150 = state_20122__$1;
(statearr_20127_20150[(1)] = (5));

} else {
var statearr_20128_20151 = state_20122__$1;
(statearr_20128_20151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (6))){
var inst_20104 = (state_20122[(7)]);
var inst_20109 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20104) : p.call(null,inst_20104));
var state_20122__$1 = state_20122;
if(cljs.core.truth_(inst_20109)){
var statearr_20129_20152 = state_20122__$1;
(statearr_20129_20152[(1)] = (8));

} else {
var statearr_20130_20153 = state_20122__$1;
(statearr_20130_20153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (3))){
var inst_20120 = (state_20122[(2)]);
var state_20122__$1 = state_20122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20122__$1,inst_20120);
} else {
if((state_val_20123 === (2))){
var state_20122__$1 = state_20122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20122__$1,(4),ch);
} else {
if((state_val_20123 === (11))){
var inst_20112 = (state_20122[(2)]);
var state_20122__$1 = state_20122;
var statearr_20131_20154 = state_20122__$1;
(statearr_20131_20154[(2)] = inst_20112);

(statearr_20131_20154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (9))){
var state_20122__$1 = state_20122;
var statearr_20132_20155 = state_20122__$1;
(statearr_20132_20155[(2)] = null);

(statearr_20132_20155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (5))){
var inst_20107 = cljs.core.async.close_BANG_(out);
var state_20122__$1 = state_20122;
var statearr_20133_20156 = state_20122__$1;
(statearr_20133_20156[(2)] = inst_20107);

(statearr_20133_20156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (10))){
var inst_20115 = (state_20122[(2)]);
var state_20122__$1 = (function (){var statearr_20134 = state_20122;
(statearr_20134[(8)] = inst_20115);

return statearr_20134;
})();
var statearr_20135_20157 = state_20122__$1;
(statearr_20135_20157[(2)] = null);

(statearr_20135_20157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20123 === (8))){
var inst_20104 = (state_20122[(7)]);
var state_20122__$1 = state_20122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20122__$1,(11),out,inst_20104);
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
});})(c__17907__auto___20147,out))
;
return ((function (switch__17793__auto__,c__17907__auto___20147,out){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_20139 = [null,null,null,null,null,null,null,null,null];
(statearr_20139[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_20139[(1)] = (1));

return statearr_20139;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_20122){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_20122);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e20140){if((e20140 instanceof Object)){
var ex__17797__auto__ = e20140;
var statearr_20141_20158 = state_20122;
(statearr_20141_20158[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20159 = state_20122;
state_20122 = G__20159;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_20122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_20122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___20147,out))
})();
var state__17909__auto__ = (function (){var statearr_20142 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_20142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___20147);

return statearr_20142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___20147,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20160 = [];
var len__15787__auto___20163 = arguments.length;
var i__15788__auto___20164 = (0);
while(true){
if((i__15788__auto___20164 < len__15787__auto___20163)){
args20160.push((arguments[i__15788__auto___20164]));

var G__20165 = (i__15788__auto___20164 + (1));
i__15788__auto___20164 = G__20165;
continue;
} else {
}
break;
}

var G__20162 = args20160.length;
switch (G__20162) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20160.length)].join('')));

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
var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto__){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto__){
return (function (state_20332){
var state_val_20333 = (state_20332[(1)]);
if((state_val_20333 === (7))){
var inst_20328 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20334_20375 = state_20332__$1;
(statearr_20334_20375[(2)] = inst_20328);

(statearr_20334_20375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (20))){
var inst_20298 = (state_20332[(7)]);
var inst_20309 = (state_20332[(2)]);
var inst_20310 = cljs.core.next(inst_20298);
var inst_20284 = inst_20310;
var inst_20285 = null;
var inst_20286 = (0);
var inst_20287 = (0);
var state_20332__$1 = (function (){var statearr_20335 = state_20332;
(statearr_20335[(8)] = inst_20286);

(statearr_20335[(9)] = inst_20309);

(statearr_20335[(10)] = inst_20285);

(statearr_20335[(11)] = inst_20284);

(statearr_20335[(12)] = inst_20287);

return statearr_20335;
})();
var statearr_20336_20376 = state_20332__$1;
(statearr_20336_20376[(2)] = null);

(statearr_20336_20376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (1))){
var state_20332__$1 = state_20332;
var statearr_20337_20377 = state_20332__$1;
(statearr_20337_20377[(2)] = null);

(statearr_20337_20377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (4))){
var inst_20273 = (state_20332[(13)]);
var inst_20273__$1 = (state_20332[(2)]);
var inst_20274 = (inst_20273__$1 == null);
var state_20332__$1 = (function (){var statearr_20338 = state_20332;
(statearr_20338[(13)] = inst_20273__$1);

return statearr_20338;
})();
if(cljs.core.truth_(inst_20274)){
var statearr_20339_20378 = state_20332__$1;
(statearr_20339_20378[(1)] = (5));

} else {
var statearr_20340_20379 = state_20332__$1;
(statearr_20340_20379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (15))){
var state_20332__$1 = state_20332;
var statearr_20344_20380 = state_20332__$1;
(statearr_20344_20380[(2)] = null);

(statearr_20344_20380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (21))){
var state_20332__$1 = state_20332;
var statearr_20345_20381 = state_20332__$1;
(statearr_20345_20381[(2)] = null);

(statearr_20345_20381[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (13))){
var inst_20286 = (state_20332[(8)]);
var inst_20285 = (state_20332[(10)]);
var inst_20284 = (state_20332[(11)]);
var inst_20287 = (state_20332[(12)]);
var inst_20294 = (state_20332[(2)]);
var inst_20295 = (inst_20287 + (1));
var tmp20341 = inst_20286;
var tmp20342 = inst_20285;
var tmp20343 = inst_20284;
var inst_20284__$1 = tmp20343;
var inst_20285__$1 = tmp20342;
var inst_20286__$1 = tmp20341;
var inst_20287__$1 = inst_20295;
var state_20332__$1 = (function (){var statearr_20346 = state_20332;
(statearr_20346[(8)] = inst_20286__$1);

(statearr_20346[(10)] = inst_20285__$1);

(statearr_20346[(11)] = inst_20284__$1);

(statearr_20346[(12)] = inst_20287__$1);

(statearr_20346[(14)] = inst_20294);

return statearr_20346;
})();
var statearr_20347_20382 = state_20332__$1;
(statearr_20347_20382[(2)] = null);

(statearr_20347_20382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (22))){
var state_20332__$1 = state_20332;
var statearr_20348_20383 = state_20332__$1;
(statearr_20348_20383[(2)] = null);

(statearr_20348_20383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (6))){
var inst_20273 = (state_20332[(13)]);
var inst_20282 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20273) : f.call(null,inst_20273));
var inst_20283 = cljs.core.seq(inst_20282);
var inst_20284 = inst_20283;
var inst_20285 = null;
var inst_20286 = (0);
var inst_20287 = (0);
var state_20332__$1 = (function (){var statearr_20349 = state_20332;
(statearr_20349[(8)] = inst_20286);

(statearr_20349[(10)] = inst_20285);

(statearr_20349[(11)] = inst_20284);

(statearr_20349[(12)] = inst_20287);

return statearr_20349;
})();
var statearr_20350_20384 = state_20332__$1;
(statearr_20350_20384[(2)] = null);

(statearr_20350_20384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (17))){
var inst_20298 = (state_20332[(7)]);
var inst_20302 = cljs.core.chunk_first(inst_20298);
var inst_20303 = cljs.core.chunk_rest(inst_20298);
var inst_20304 = cljs.core.count(inst_20302);
var inst_20284 = inst_20303;
var inst_20285 = inst_20302;
var inst_20286 = inst_20304;
var inst_20287 = (0);
var state_20332__$1 = (function (){var statearr_20351 = state_20332;
(statearr_20351[(8)] = inst_20286);

(statearr_20351[(10)] = inst_20285);

(statearr_20351[(11)] = inst_20284);

(statearr_20351[(12)] = inst_20287);

return statearr_20351;
})();
var statearr_20352_20385 = state_20332__$1;
(statearr_20352_20385[(2)] = null);

(statearr_20352_20385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (3))){
var inst_20330 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20332__$1,inst_20330);
} else {
if((state_val_20333 === (12))){
var inst_20318 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20353_20386 = state_20332__$1;
(statearr_20353_20386[(2)] = inst_20318);

(statearr_20353_20386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (2))){
var state_20332__$1 = state_20332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20332__$1,(4),in$);
} else {
if((state_val_20333 === (23))){
var inst_20326 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20354_20387 = state_20332__$1;
(statearr_20354_20387[(2)] = inst_20326);

(statearr_20354_20387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (19))){
var inst_20313 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20355_20388 = state_20332__$1;
(statearr_20355_20388[(2)] = inst_20313);

(statearr_20355_20388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (11))){
var inst_20284 = (state_20332[(11)]);
var inst_20298 = (state_20332[(7)]);
var inst_20298__$1 = cljs.core.seq(inst_20284);
var state_20332__$1 = (function (){var statearr_20356 = state_20332;
(statearr_20356[(7)] = inst_20298__$1);

return statearr_20356;
})();
if(inst_20298__$1){
var statearr_20357_20389 = state_20332__$1;
(statearr_20357_20389[(1)] = (14));

} else {
var statearr_20358_20390 = state_20332__$1;
(statearr_20358_20390[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (9))){
var inst_20320 = (state_20332[(2)]);
var inst_20321 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20332__$1 = (function (){var statearr_20359 = state_20332;
(statearr_20359[(15)] = inst_20320);

return statearr_20359;
})();
if(cljs.core.truth_(inst_20321)){
var statearr_20360_20391 = state_20332__$1;
(statearr_20360_20391[(1)] = (21));

} else {
var statearr_20361_20392 = state_20332__$1;
(statearr_20361_20392[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (5))){
var inst_20276 = cljs.core.async.close_BANG_(out);
var state_20332__$1 = state_20332;
var statearr_20362_20393 = state_20332__$1;
(statearr_20362_20393[(2)] = inst_20276);

(statearr_20362_20393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (14))){
var inst_20298 = (state_20332[(7)]);
var inst_20300 = cljs.core.chunked_seq_QMARK_(inst_20298);
var state_20332__$1 = state_20332;
if(inst_20300){
var statearr_20363_20394 = state_20332__$1;
(statearr_20363_20394[(1)] = (17));

} else {
var statearr_20364_20395 = state_20332__$1;
(statearr_20364_20395[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (16))){
var inst_20316 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20365_20396 = state_20332__$1;
(statearr_20365_20396[(2)] = inst_20316);

(statearr_20365_20396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (10))){
var inst_20285 = (state_20332[(10)]);
var inst_20287 = (state_20332[(12)]);
var inst_20292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20285,inst_20287);
var state_20332__$1 = state_20332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20332__$1,(13),out,inst_20292);
} else {
if((state_val_20333 === (18))){
var inst_20298 = (state_20332[(7)]);
var inst_20307 = cljs.core.first(inst_20298);
var state_20332__$1 = state_20332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20332__$1,(20),out,inst_20307);
} else {
if((state_val_20333 === (8))){
var inst_20286 = (state_20332[(8)]);
var inst_20287 = (state_20332[(12)]);
var inst_20289 = (inst_20287 < inst_20286);
var inst_20290 = inst_20289;
var state_20332__$1 = state_20332;
if(cljs.core.truth_(inst_20290)){
var statearr_20366_20397 = state_20332__$1;
(statearr_20366_20397[(1)] = (10));

} else {
var statearr_20367_20398 = state_20332__$1;
(statearr_20367_20398[(1)] = (11));

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
});})(c__17907__auto__))
;
return ((function (switch__17793__auto__,c__17907__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17794__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17794__auto____0 = (function (){
var statearr_20371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20371[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17794__auto__);

(statearr_20371[(1)] = (1));

return statearr_20371;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17794__auto____1 = (function (state_20332){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_20332);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e20372){if((e20372 instanceof Object)){
var ex__17797__auto__ = e20372;
var statearr_20373_20399 = state_20332;
(statearr_20373_20399[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20400 = state_20332;
state_20332 = G__20400;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17794__auto__ = function(state_20332){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17794__auto____1.call(this,state_20332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17794__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17794__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto__))
})();
var state__17909__auto__ = (function (){var statearr_20374 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_20374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto__);

return statearr_20374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto__))
);

return c__17907__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20401 = [];
var len__15787__auto___20404 = arguments.length;
var i__15788__auto___20405 = (0);
while(true){
if((i__15788__auto___20405 < len__15787__auto___20404)){
args20401.push((arguments[i__15788__auto___20405]));

var G__20406 = (i__15788__auto___20405 + (1));
i__15788__auto___20405 = G__20406;
continue;
} else {
}
break;
}

var G__20403 = args20401.length;
switch (G__20403) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20401.length)].join('')));

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
var args20408 = [];
var len__15787__auto___20411 = arguments.length;
var i__15788__auto___20412 = (0);
while(true){
if((i__15788__auto___20412 < len__15787__auto___20411)){
args20408.push((arguments[i__15788__auto___20412]));

var G__20413 = (i__15788__auto___20412 + (1));
i__15788__auto___20412 = G__20413;
continue;
} else {
}
break;
}

var G__20410 = args20408.length;
switch (G__20410) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20408.length)].join('')));

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
var args20415 = [];
var len__15787__auto___20466 = arguments.length;
var i__15788__auto___20467 = (0);
while(true){
if((i__15788__auto___20467 < len__15787__auto___20466)){
args20415.push((arguments[i__15788__auto___20467]));

var G__20468 = (i__15788__auto___20467 + (1));
i__15788__auto___20467 = G__20468;
continue;
} else {
}
break;
}

var G__20417 = args20415.length;
switch (G__20417) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20415.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___20470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___20470,out){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___20470,out){
return (function (state_20441){
var state_val_20442 = (state_20441[(1)]);
if((state_val_20442 === (7))){
var inst_20436 = (state_20441[(2)]);
var state_20441__$1 = state_20441;
var statearr_20443_20471 = state_20441__$1;
(statearr_20443_20471[(2)] = inst_20436);

(statearr_20443_20471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20442 === (1))){
var inst_20418 = null;
var state_20441__$1 = (function (){var statearr_20444 = state_20441;
(statearr_20444[(7)] = inst_20418);

return statearr_20444;
})();
var statearr_20445_20472 = state_20441__$1;
(statearr_20445_20472[(2)] = null);

(statearr_20445_20472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20442 === (4))){
var inst_20421 = (state_20441[(8)]);
var inst_20421__$1 = (state_20441[(2)]);
var inst_20422 = (inst_20421__$1 == null);
var inst_20423 = cljs.core.not(inst_20422);
var state_20441__$1 = (function (){var statearr_20446 = state_20441;
(statearr_20446[(8)] = inst_20421__$1);

return statearr_20446;
})();
if(inst_20423){
var statearr_20447_20473 = state_20441__$1;
(statearr_20447_20473[(1)] = (5));

} else {
var statearr_20448_20474 = state_20441__$1;
(statearr_20448_20474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20442 === (6))){
var state_20441__$1 = state_20441;
var statearr_20449_20475 = state_20441__$1;
(statearr_20449_20475[(2)] = null);

(statearr_20449_20475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20442 === (3))){
var inst_20438 = (state_20441[(2)]);
var inst_20439 = cljs.core.async.close_BANG_(out);
var state_20441__$1 = (function (){var statearr_20450 = state_20441;
(statearr_20450[(9)] = inst_20438);

return statearr_20450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20441__$1,inst_20439);
} else {
if((state_val_20442 === (2))){
var state_20441__$1 = state_20441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20441__$1,(4),ch);
} else {
if((state_val_20442 === (11))){
var inst_20421 = (state_20441[(8)]);
var inst_20430 = (state_20441[(2)]);
var inst_20418 = inst_20421;
var state_20441__$1 = (function (){var statearr_20451 = state_20441;
(statearr_20451[(10)] = inst_20430);

(statearr_20451[(7)] = inst_20418);

return statearr_20451;
})();
var statearr_20452_20476 = state_20441__$1;
(statearr_20452_20476[(2)] = null);

(statearr_20452_20476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20442 === (9))){
var inst_20421 = (state_20441[(8)]);
var state_20441__$1 = state_20441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20441__$1,(11),out,inst_20421);
} else {
if((state_val_20442 === (5))){
var inst_20418 = (state_20441[(7)]);
var inst_20421 = (state_20441[(8)]);
var inst_20425 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20421,inst_20418);
var state_20441__$1 = state_20441;
if(inst_20425){
var statearr_20454_20477 = state_20441__$1;
(statearr_20454_20477[(1)] = (8));

} else {
var statearr_20455_20478 = state_20441__$1;
(statearr_20455_20478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20442 === (10))){
var inst_20433 = (state_20441[(2)]);
var state_20441__$1 = state_20441;
var statearr_20456_20479 = state_20441__$1;
(statearr_20456_20479[(2)] = inst_20433);

(statearr_20456_20479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20442 === (8))){
var inst_20418 = (state_20441[(7)]);
var tmp20453 = inst_20418;
var inst_20418__$1 = tmp20453;
var state_20441__$1 = (function (){var statearr_20457 = state_20441;
(statearr_20457[(7)] = inst_20418__$1);

return statearr_20457;
})();
var statearr_20458_20480 = state_20441__$1;
(statearr_20458_20480[(2)] = null);

(statearr_20458_20480[(1)] = (2));


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
});})(c__17907__auto___20470,out))
;
return ((function (switch__17793__auto__,c__17907__auto___20470,out){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_20462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20462[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_20462[(1)] = (1));

return statearr_20462;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_20441){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_20441);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e20463){if((e20463 instanceof Object)){
var ex__17797__auto__ = e20463;
var statearr_20464_20481 = state_20441;
(statearr_20464_20481[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20482 = state_20441;
state_20441 = G__20482;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_20441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_20441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___20470,out))
})();
var state__17909__auto__ = (function (){var statearr_20465 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_20465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___20470);

return statearr_20465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___20470,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20483 = [];
var len__15787__auto___20553 = arguments.length;
var i__15788__auto___20554 = (0);
while(true){
if((i__15788__auto___20554 < len__15787__auto___20553)){
args20483.push((arguments[i__15788__auto___20554]));

var G__20555 = (i__15788__auto___20554 + (1));
i__15788__auto___20554 = G__20555;
continue;
} else {
}
break;
}

var G__20485 = args20483.length;
switch (G__20485) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20483.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___20557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___20557,out){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___20557,out){
return (function (state_20523){
var state_val_20524 = (state_20523[(1)]);
if((state_val_20524 === (7))){
var inst_20519 = (state_20523[(2)]);
var state_20523__$1 = state_20523;
var statearr_20525_20558 = state_20523__$1;
(statearr_20525_20558[(2)] = inst_20519);

(statearr_20525_20558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (1))){
var inst_20486 = (new Array(n));
var inst_20487 = inst_20486;
var inst_20488 = (0);
var state_20523__$1 = (function (){var statearr_20526 = state_20523;
(statearr_20526[(7)] = inst_20487);

(statearr_20526[(8)] = inst_20488);

return statearr_20526;
})();
var statearr_20527_20559 = state_20523__$1;
(statearr_20527_20559[(2)] = null);

(statearr_20527_20559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (4))){
var inst_20491 = (state_20523[(9)]);
var inst_20491__$1 = (state_20523[(2)]);
var inst_20492 = (inst_20491__$1 == null);
var inst_20493 = cljs.core.not(inst_20492);
var state_20523__$1 = (function (){var statearr_20528 = state_20523;
(statearr_20528[(9)] = inst_20491__$1);

return statearr_20528;
})();
if(inst_20493){
var statearr_20529_20560 = state_20523__$1;
(statearr_20529_20560[(1)] = (5));

} else {
var statearr_20530_20561 = state_20523__$1;
(statearr_20530_20561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (15))){
var inst_20513 = (state_20523[(2)]);
var state_20523__$1 = state_20523;
var statearr_20531_20562 = state_20523__$1;
(statearr_20531_20562[(2)] = inst_20513);

(statearr_20531_20562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (13))){
var state_20523__$1 = state_20523;
var statearr_20532_20563 = state_20523__$1;
(statearr_20532_20563[(2)] = null);

(statearr_20532_20563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (6))){
var inst_20488 = (state_20523[(8)]);
var inst_20509 = (inst_20488 > (0));
var state_20523__$1 = state_20523;
if(cljs.core.truth_(inst_20509)){
var statearr_20533_20564 = state_20523__$1;
(statearr_20533_20564[(1)] = (12));

} else {
var statearr_20534_20565 = state_20523__$1;
(statearr_20534_20565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (3))){
var inst_20521 = (state_20523[(2)]);
var state_20523__$1 = state_20523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20523__$1,inst_20521);
} else {
if((state_val_20524 === (12))){
var inst_20487 = (state_20523[(7)]);
var inst_20511 = cljs.core.vec(inst_20487);
var state_20523__$1 = state_20523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20523__$1,(15),out,inst_20511);
} else {
if((state_val_20524 === (2))){
var state_20523__$1 = state_20523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20523__$1,(4),ch);
} else {
if((state_val_20524 === (11))){
var inst_20503 = (state_20523[(2)]);
var inst_20504 = (new Array(n));
var inst_20487 = inst_20504;
var inst_20488 = (0);
var state_20523__$1 = (function (){var statearr_20535 = state_20523;
(statearr_20535[(7)] = inst_20487);

(statearr_20535[(8)] = inst_20488);

(statearr_20535[(10)] = inst_20503);

return statearr_20535;
})();
var statearr_20536_20566 = state_20523__$1;
(statearr_20536_20566[(2)] = null);

(statearr_20536_20566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (9))){
var inst_20487 = (state_20523[(7)]);
var inst_20501 = cljs.core.vec(inst_20487);
var state_20523__$1 = state_20523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20523__$1,(11),out,inst_20501);
} else {
if((state_val_20524 === (5))){
var inst_20496 = (state_20523[(11)]);
var inst_20491 = (state_20523[(9)]);
var inst_20487 = (state_20523[(7)]);
var inst_20488 = (state_20523[(8)]);
var inst_20495 = (inst_20487[inst_20488] = inst_20491);
var inst_20496__$1 = (inst_20488 + (1));
var inst_20497 = (inst_20496__$1 < n);
var state_20523__$1 = (function (){var statearr_20537 = state_20523;
(statearr_20537[(11)] = inst_20496__$1);

(statearr_20537[(12)] = inst_20495);

return statearr_20537;
})();
if(cljs.core.truth_(inst_20497)){
var statearr_20538_20567 = state_20523__$1;
(statearr_20538_20567[(1)] = (8));

} else {
var statearr_20539_20568 = state_20523__$1;
(statearr_20539_20568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (14))){
var inst_20516 = (state_20523[(2)]);
var inst_20517 = cljs.core.async.close_BANG_(out);
var state_20523__$1 = (function (){var statearr_20541 = state_20523;
(statearr_20541[(13)] = inst_20516);

return statearr_20541;
})();
var statearr_20542_20569 = state_20523__$1;
(statearr_20542_20569[(2)] = inst_20517);

(statearr_20542_20569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (10))){
var inst_20507 = (state_20523[(2)]);
var state_20523__$1 = state_20523;
var statearr_20543_20570 = state_20523__$1;
(statearr_20543_20570[(2)] = inst_20507);

(statearr_20543_20570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20524 === (8))){
var inst_20496 = (state_20523[(11)]);
var inst_20487 = (state_20523[(7)]);
var tmp20540 = inst_20487;
var inst_20487__$1 = tmp20540;
var inst_20488 = inst_20496;
var state_20523__$1 = (function (){var statearr_20544 = state_20523;
(statearr_20544[(7)] = inst_20487__$1);

(statearr_20544[(8)] = inst_20488);

return statearr_20544;
})();
var statearr_20545_20571 = state_20523__$1;
(statearr_20545_20571[(2)] = null);

(statearr_20545_20571[(1)] = (2));


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
});})(c__17907__auto___20557,out))
;
return ((function (switch__17793__auto__,c__17907__auto___20557,out){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_20549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20549[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_20549[(1)] = (1));

return statearr_20549;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_20523){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_20523);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e20550){if((e20550 instanceof Object)){
var ex__17797__auto__ = e20550;
var statearr_20551_20572 = state_20523;
(statearr_20551_20572[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20550;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20573 = state_20523;
state_20523 = G__20573;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_20523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_20523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___20557,out))
})();
var state__17909__auto__ = (function (){var statearr_20552 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_20552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___20557);

return statearr_20552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___20557,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20574 = [];
var len__15787__auto___20648 = arguments.length;
var i__15788__auto___20649 = (0);
while(true){
if((i__15788__auto___20649 < len__15787__auto___20648)){
args20574.push((arguments[i__15788__auto___20649]));

var G__20650 = (i__15788__auto___20649 + (1));
i__15788__auto___20649 = G__20650;
continue;
} else {
}
break;
}

var G__20576 = args20574.length;
switch (G__20576) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20574.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___20652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto___20652,out){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto___20652,out){
return (function (state_20618){
var state_val_20619 = (state_20618[(1)]);
if((state_val_20619 === (7))){
var inst_20614 = (state_20618[(2)]);
var state_20618__$1 = state_20618;
var statearr_20620_20653 = state_20618__$1;
(statearr_20620_20653[(2)] = inst_20614);

(statearr_20620_20653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (1))){
var inst_20577 = [];
var inst_20578 = inst_20577;
var inst_20579 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20618__$1 = (function (){var statearr_20621 = state_20618;
(statearr_20621[(7)] = inst_20578);

(statearr_20621[(8)] = inst_20579);

return statearr_20621;
})();
var statearr_20622_20654 = state_20618__$1;
(statearr_20622_20654[(2)] = null);

(statearr_20622_20654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (4))){
var inst_20582 = (state_20618[(9)]);
var inst_20582__$1 = (state_20618[(2)]);
var inst_20583 = (inst_20582__$1 == null);
var inst_20584 = cljs.core.not(inst_20583);
var state_20618__$1 = (function (){var statearr_20623 = state_20618;
(statearr_20623[(9)] = inst_20582__$1);

return statearr_20623;
})();
if(inst_20584){
var statearr_20624_20655 = state_20618__$1;
(statearr_20624_20655[(1)] = (5));

} else {
var statearr_20625_20656 = state_20618__$1;
(statearr_20625_20656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (15))){
var inst_20608 = (state_20618[(2)]);
var state_20618__$1 = state_20618;
var statearr_20626_20657 = state_20618__$1;
(statearr_20626_20657[(2)] = inst_20608);

(statearr_20626_20657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (13))){
var state_20618__$1 = state_20618;
var statearr_20627_20658 = state_20618__$1;
(statearr_20627_20658[(2)] = null);

(statearr_20627_20658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (6))){
var inst_20578 = (state_20618[(7)]);
var inst_20603 = inst_20578.length;
var inst_20604 = (inst_20603 > (0));
var state_20618__$1 = state_20618;
if(cljs.core.truth_(inst_20604)){
var statearr_20628_20659 = state_20618__$1;
(statearr_20628_20659[(1)] = (12));

} else {
var statearr_20629_20660 = state_20618__$1;
(statearr_20629_20660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (3))){
var inst_20616 = (state_20618[(2)]);
var state_20618__$1 = state_20618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20618__$1,inst_20616);
} else {
if((state_val_20619 === (12))){
var inst_20578 = (state_20618[(7)]);
var inst_20606 = cljs.core.vec(inst_20578);
var state_20618__$1 = state_20618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20618__$1,(15),out,inst_20606);
} else {
if((state_val_20619 === (2))){
var state_20618__$1 = state_20618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20618__$1,(4),ch);
} else {
if((state_val_20619 === (11))){
var inst_20582 = (state_20618[(9)]);
var inst_20586 = (state_20618[(10)]);
var inst_20596 = (state_20618[(2)]);
var inst_20597 = [];
var inst_20598 = inst_20597.push(inst_20582);
var inst_20578 = inst_20597;
var inst_20579 = inst_20586;
var state_20618__$1 = (function (){var statearr_20630 = state_20618;
(statearr_20630[(7)] = inst_20578);

(statearr_20630[(11)] = inst_20596);

(statearr_20630[(8)] = inst_20579);

(statearr_20630[(12)] = inst_20598);

return statearr_20630;
})();
var statearr_20631_20661 = state_20618__$1;
(statearr_20631_20661[(2)] = null);

(statearr_20631_20661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (9))){
var inst_20578 = (state_20618[(7)]);
var inst_20594 = cljs.core.vec(inst_20578);
var state_20618__$1 = state_20618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20618__$1,(11),out,inst_20594);
} else {
if((state_val_20619 === (5))){
var inst_20582 = (state_20618[(9)]);
var inst_20579 = (state_20618[(8)]);
var inst_20586 = (state_20618[(10)]);
var inst_20586__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20582) : f.call(null,inst_20582));
var inst_20587 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20586__$1,inst_20579);
var inst_20588 = cljs.core.keyword_identical_QMARK_(inst_20579,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20589 = (inst_20587) || (inst_20588);
var state_20618__$1 = (function (){var statearr_20632 = state_20618;
(statearr_20632[(10)] = inst_20586__$1);

return statearr_20632;
})();
if(cljs.core.truth_(inst_20589)){
var statearr_20633_20662 = state_20618__$1;
(statearr_20633_20662[(1)] = (8));

} else {
var statearr_20634_20663 = state_20618__$1;
(statearr_20634_20663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (14))){
var inst_20611 = (state_20618[(2)]);
var inst_20612 = cljs.core.async.close_BANG_(out);
var state_20618__$1 = (function (){var statearr_20636 = state_20618;
(statearr_20636[(13)] = inst_20611);

return statearr_20636;
})();
var statearr_20637_20664 = state_20618__$1;
(statearr_20637_20664[(2)] = inst_20612);

(statearr_20637_20664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (10))){
var inst_20601 = (state_20618[(2)]);
var state_20618__$1 = state_20618;
var statearr_20638_20665 = state_20618__$1;
(statearr_20638_20665[(2)] = inst_20601);

(statearr_20638_20665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (8))){
var inst_20582 = (state_20618[(9)]);
var inst_20578 = (state_20618[(7)]);
var inst_20586 = (state_20618[(10)]);
var inst_20591 = inst_20578.push(inst_20582);
var tmp20635 = inst_20578;
var inst_20578__$1 = tmp20635;
var inst_20579 = inst_20586;
var state_20618__$1 = (function (){var statearr_20639 = state_20618;
(statearr_20639[(14)] = inst_20591);

(statearr_20639[(7)] = inst_20578__$1);

(statearr_20639[(8)] = inst_20579);

return statearr_20639;
})();
var statearr_20640_20666 = state_20618__$1;
(statearr_20640_20666[(2)] = null);

(statearr_20640_20666[(1)] = (2));


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
});})(c__17907__auto___20652,out))
;
return ((function (switch__17793__auto__,c__17907__auto___20652,out){
return (function() {
var cljs$core$async$state_machine__17794__auto__ = null;
var cljs$core$async$state_machine__17794__auto____0 = (function (){
var statearr_20644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20644[(0)] = cljs$core$async$state_machine__17794__auto__);

(statearr_20644[(1)] = (1));

return statearr_20644;
});
var cljs$core$async$state_machine__17794__auto____1 = (function (state_20618){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_20618);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e20645){if((e20645 instanceof Object)){
var ex__17797__auto__ = e20645;
var statearr_20646_20667 = state_20618;
(statearr_20646_20667[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20645;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20668 = state_20618;
state_20618 = G__20668;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
cljs$core$async$state_machine__17794__auto__ = function(state_20618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17794__auto____1.call(this,state_20618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17794__auto____0;
cljs$core$async$state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17794__auto____1;
return cljs$core$async$state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto___20652,out))
})();
var state__17909__auto__ = (function (){var statearr_20647 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_20647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto___20652);

return statearr_20647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto___20652,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
//# sourceMappingURL=async.js.map?r=0.08557061355082973