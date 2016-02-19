goog.provide('om.next.cache');
goog.require('cljs.core');

/**
* @constructor
 * @implements {om.next.cache.Object}
*/
om.next.cache.Cache = (function (arr,index,size){
this.arr = arr;
this.index = index;
this.size = size;
})
om.next.cache.Cache.prototype.add = (function (id,x){
var self__ = this;
var this$ = this;
if((self__.size <= self__.arr.length)){
var id_SINGLEQUOTE__23375 = self__.arr.shift();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.index,((function (id_SINGLEQUOTE__23375,this$){
return (function (p1__23365_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23365_SHARP_,id_SINGLEQUOTE__23375),id,x);
});})(id_SINGLEQUOTE__23375,this$))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.index,cljs.core.assoc,id,x);
}

return self__.arr.push(id);
});

om.next.cache.Cache.prototype.get = (function (id){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.index) : cljs.core.deref.call(null,self__.index)),id);
});

om.next.cache.Cache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

om.next.cache.Cache.cljs$lang$type = true;

om.next.cache.Cache.cljs$lang$ctorStr = "om.next.cache/Cache";

om.next.cache.Cache.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"om.next.cache/Cache");
});

om.next.cache.__GT_Cache = (function om$next$cache$__GT_Cache(arr,index,size){
return (new om.next.cache.Cache(arr,index,size));
});

om.next.cache.cache = (function om$next$cache$cache(size){
return (new om.next.cache.Cache([],(function (){var G__23390 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23390) : cljs.core.atom.call(null,G__23390));
})(),size));
});
//# sourceMappingURL=cache.js.map?r=0.6716571185864046