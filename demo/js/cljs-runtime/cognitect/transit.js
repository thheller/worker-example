goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__23426_23431 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__23427_23432 = null;
var count__23428_23433 = (0);
var i__23429_23434 = (0);
while(true){
if((i__23429_23434 < count__23428_23433)){
var k_23435 = chunk__23427_23432.cljs$core$IIndexed$_nth$arity$2(null,i__23429_23434);
var v_23436 = (b[k_23435]);
(a[k_23435] = v_23436);

var G__23437 = seq__23426_23431;
var G__23438 = chunk__23427_23432;
var G__23439 = count__23428_23433;
var G__23440 = (i__23429_23434 + (1));
seq__23426_23431 = G__23437;
chunk__23427_23432 = G__23438;
count__23428_23433 = G__23439;
i__23429_23434 = G__23440;
continue;
} else {
var temp__4657__auto___23441 = cljs.core.seq(seq__23426_23431);
if(temp__4657__auto___23441){
var seq__23426_23442__$1 = temp__4657__auto___23441;
if(cljs.core.chunked_seq_QMARK_(seq__23426_23442__$1)){
var c__19422__auto___23443 = cljs.core.chunk_first(seq__23426_23442__$1);
var G__23444 = cljs.core.chunk_rest(seq__23426_23442__$1);
var G__23445 = c__19422__auto___23443;
var G__23446 = cljs.core.count(c__19422__auto___23443);
var G__23447 = (0);
seq__23426_23431 = G__23444;
chunk__23427_23432 = G__23445;
count__23428_23433 = G__23446;
i__23429_23434 = G__23447;
continue;
} else {
var k_23450 = cljs.core.first(seq__23426_23442__$1);
var v_23451 = (b[k_23450]);
(a[k_23450] = v_23451);

var G__23453 = cljs.core.next(seq__23426_23442__$1);
var G__23454 = null;
var G__23455 = (0);
var G__23456 = (0);
seq__23426_23431 = G__23453;
chunk__23427_23432 = G__23454;
count__23428_23433 = G__23455;
i__23429_23434 = G__23456;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args23493 = [];
var len__19677__auto___23503 = arguments.length;
var i__19678__auto___23504 = (0);
while(true){
if((i__19678__auto___23504 < len__19677__auto___23503)){
args23493.push((arguments[i__19678__auto___23504]));

var G__23508 = (i__19678__auto___23504 + (1));
i__19678__auto___23504 = G__23508;
continue;
} else {
}
break;
}

var G__23497 = args23493.length;
switch (G__23497) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23493.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__23498 = cljs.core.name(type);
var G__23499 = cognitect.transit.opts_merge({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__23498){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23498))
,":",((function (G__23498){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23498))
,"set",((function (G__23498){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23498))
,"list",((function (G__23498){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23498))
,"cmap",((function (G__23498){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23510 = (i + (2));
var G__23511 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23510;
ret = G__23511;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23498))
], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23498,G__23499) : com.cognitect.transit.reader.call(null,G__23498,G__23499));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23545_23552 = cljs.core.seq(v);
var chunk__23546_23553 = null;
var count__23547_23554 = (0);
var i__23548_23555 = (0);
while(true){
if((i__23548_23555 < count__23547_23554)){
var x_23561 = chunk__23546_23553.cljs$core$IIndexed$_nth$arity$2(null,i__23548_23555);
ret.push(x_23561);

var G__23562 = seq__23545_23552;
var G__23563 = chunk__23546_23553;
var G__23564 = count__23547_23554;
var G__23565 = (i__23548_23555 + (1));
seq__23545_23552 = G__23562;
chunk__23546_23553 = G__23563;
count__23547_23554 = G__23564;
i__23548_23555 = G__23565;
continue;
} else {
var temp__4657__auto___23566 = cljs.core.seq(seq__23545_23552);
if(temp__4657__auto___23566){
var seq__23545_23567__$1 = temp__4657__auto___23566;
if(cljs.core.chunked_seq_QMARK_(seq__23545_23567__$1)){
var c__19422__auto___23568 = cljs.core.chunk_first(seq__23545_23567__$1);
var G__23569 = cljs.core.chunk_rest(seq__23545_23567__$1);
var G__23570 = c__19422__auto___23568;
var G__23571 = cljs.core.count(c__19422__auto___23568);
var G__23572 = (0);
seq__23545_23552 = G__23569;
chunk__23546_23553 = G__23570;
count__23547_23554 = G__23571;
i__23548_23555 = G__23572;
continue;
} else {
var x_23573 = cljs.core.first(seq__23545_23567__$1);
ret.push(x_23573);

var G__23574 = cljs.core.next(seq__23545_23567__$1);
var G__23575 = null;
var G__23576 = (0);
var G__23577 = (0);
seq__23545_23552 = G__23574;
chunk__23546_23553 = G__23575;
count__23547_23554 = G__23576;
i__23548_23555 = G__23577;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23597_23608 = cljs.core.seq(v);
var chunk__23598_23609 = null;
var count__23599_23610 = (0);
var i__23600_23611 = (0);
while(true){
if((i__23600_23611 < count__23599_23610)){
var x_23613 = chunk__23598_23609.cljs$core$IIndexed$_nth$arity$2(null,i__23600_23611);
ret.push(x_23613);

var G__23616 = seq__23597_23608;
var G__23617 = chunk__23598_23609;
var G__23618 = count__23599_23610;
var G__23619 = (i__23600_23611 + (1));
seq__23597_23608 = G__23616;
chunk__23598_23609 = G__23617;
count__23599_23610 = G__23618;
i__23600_23611 = G__23619;
continue;
} else {
var temp__4657__auto___23620 = cljs.core.seq(seq__23597_23608);
if(temp__4657__auto___23620){
var seq__23597_23621__$1 = temp__4657__auto___23620;
if(cljs.core.chunked_seq_QMARK_(seq__23597_23621__$1)){
var c__19422__auto___23623 = cljs.core.chunk_first(seq__23597_23621__$1);
var G__23624 = cljs.core.chunk_rest(seq__23597_23621__$1);
var G__23625 = c__19422__auto___23623;
var G__23626 = cljs.core.count(c__19422__auto___23623);
var G__23627 = (0);
seq__23597_23608 = G__23624;
chunk__23598_23609 = G__23625;
count__23599_23610 = G__23626;
i__23600_23611 = G__23627;
continue;
} else {
var x_23630 = cljs.core.first(seq__23597_23621__$1);
ret.push(x_23630);

var G__23632 = cljs.core.next(seq__23597_23621__$1);
var G__23633 = null;
var G__23634 = (0);
var G__23635 = (0);
seq__23597_23608 = G__23632;
chunk__23598_23609 = G__23633;
count__23599_23610 = G__23634;
i__23600_23611 = G__23635;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23647_23654 = cljs.core.seq(v);
var chunk__23648_23655 = null;
var count__23649_23656 = (0);
var i__23650_23657 = (0);
while(true){
if((i__23650_23657 < count__23649_23656)){
var x_23658 = chunk__23648_23655.cljs$core$IIndexed$_nth$arity$2(null,i__23650_23657);
ret.push(x_23658);

var G__23659 = seq__23647_23654;
var G__23660 = chunk__23648_23655;
var G__23661 = count__23649_23656;
var G__23662 = (i__23650_23657 + (1));
seq__23647_23654 = G__23659;
chunk__23648_23655 = G__23660;
count__23649_23656 = G__23661;
i__23650_23657 = G__23662;
continue;
} else {
var temp__4657__auto___23665 = cljs.core.seq(seq__23647_23654);
if(temp__4657__auto___23665){
var seq__23647_23668__$1 = temp__4657__auto___23665;
if(cljs.core.chunked_seq_QMARK_(seq__23647_23668__$1)){
var c__19422__auto___23669 = cljs.core.chunk_first(seq__23647_23668__$1);
var G__23670 = cljs.core.chunk_rest(seq__23647_23668__$1);
var G__23671 = c__19422__auto___23669;
var G__23672 = cljs.core.count(c__19422__auto___23669);
var G__23673 = (0);
seq__23647_23654 = G__23670;
chunk__23648_23655 = G__23671;
count__23649_23656 = G__23672;
i__23650_23657 = G__23673;
continue;
} else {
var x_23675 = cljs.core.first(seq__23647_23668__$1);
ret.push(x_23675);

var G__23676 = cljs.core.next(seq__23647_23668__$1);
var G__23677 = null;
var G__23678 = (0);
var G__23679 = (0);
seq__23647_23654 = G__23676;
chunk__23648_23655 = G__23677;
count__23649_23656 = G__23678;
i__23650_23657 = G__23679;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args23702 = [];
var len__19677__auto___23730 = arguments.length;
var i__19678__auto___23731 = (0);
while(true){
if((i__19678__auto___23731 < len__19677__auto___23730)){
args23702.push((arguments[i__19678__auto___23731]));

var G__23732 = (i__19678__auto___23731 + (1));
i__19678__auto___23731 = G__23732;
continue;
} else {
}
break;
}

var G__23707 = args23702.length;
switch (G__23707) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23702.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__23711 = cljs.core.name(type);
var G__23712 = cognitect.transit.opts_merge({"objectBuilder": ((function (G__23711,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__23711,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23714 = obj;
G__23714.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__23714;
});})(G__23711,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__23711,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23716 = cljs.core.clone(handlers);
x23716.forEach = ((function (x23716,G__23711,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23717 = cljs.core.seq(coll);
var chunk__23718 = null;
var count__23719 = (0);
var i__23720 = (0);
while(true){
if((i__23720 < count__23719)){
var vec__23722 = chunk__23718.cljs$core$IIndexed$_nth$arity$2(null,i__23720);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23722,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__23738 = seq__23717;
var G__23739 = chunk__23718;
var G__23740 = count__23719;
var G__23741 = (i__23720 + (1));
seq__23717 = G__23738;
chunk__23718 = G__23739;
count__23719 = G__23740;
i__23720 = G__23741;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__23717);
if(temp__4657__auto__){
var seq__23717__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23717__$1)){
var c__19422__auto__ = cljs.core.chunk_first(seq__23717__$1);
var G__23744 = cljs.core.chunk_rest(seq__23717__$1);
var G__23745 = c__19422__auto__;
var G__23746 = cljs.core.count(c__19422__auto__);
var G__23747 = (0);
seq__23717 = G__23744;
chunk__23718 = G__23745;
count__23719 = G__23746;
i__23720 = G__23747;
continue;
} else {
var vec__23726 = cljs.core.first(seq__23717__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23726,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__23748 = cljs.core.next(seq__23717__$1);
var G__23749 = null;
var G__23750 = (0);
var G__23751 = (0);
seq__23717 = G__23748;
chunk__23718 = G__23749;
count__23719 = G__23750;
i__23720 = G__23751;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23716,G__23711,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23716;
})(), "unpack": ((function (G__23711,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__23711,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23711,G__23712) : com.cognitect.transit.writer.call(null,G__23711,G__23712));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args23757 = [];
var len__19677__auto___23779 = arguments.length;
var i__19678__auto___23780 = (0);
while(true){
if((i__19678__auto___23780 < len__19677__auto___23779)){
args23757.push((arguments[i__19678__auto___23780]));

var G__23782 = (i__19678__auto___23780 + (1));
i__19678__auto___23780 = G__23782;
continue;
} else {
}
break;
}

var G__23762 = args23757.length;
switch (G__23762) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23757.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit23766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit23766 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta23767){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta23767 = meta23767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit23766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23768,meta23767__$1){
var self__ = this;
var _23768__$1 = this;
return (new cognitect.transit.t_cognitect$transit23766(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta23767__$1));
});

cognitect.transit.t_cognitect$transit23766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23768){
var self__ = this;
var _23768__$1 = this;
return self__.meta23767;
});

cognitect.transit.t_cognitect$transit23766.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit23766.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit23766.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(self__.str_rep_fn){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23766.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta23767","meta23767",-1863459955,null)], null);
});

cognitect.transit.t_cognitect$transit23766.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit23766.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit23766";

cognitect.transit.t_cognitect$transit23766.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"cognitect.transit/t_cognitect$transit23766");
});

cognitect.transit.__GT_t_cognitect$transit23766 = (function cognitect$transit$__GT_t_cognitect$transit23766(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23767){
return (new cognitect.transit.t_cognitect$transit23766(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23767));
});

}

return (new cognitect.transit.t_cognitect$transit23766(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(tag,rep) : com.cognitect.transit.types.taggedValue.call(null,tag,rep));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isTaggedValue.call(null,x));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return (com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.intValue.call(null,s));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isInteger.call(null,x));
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigInteger.call(null,s));
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigInteger.call(null,x));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigDecimalValue.call(null,s));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigDecimal.call(null,x));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uri.call(null,s));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isURI.call(null,x));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uuid.call(null,s));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18619__auto__ = (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isUUID.call(null,x));
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.binary.call(null,s));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBinary.call(null,x));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.quoted.call(null,x));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isQuoted.call(null,x));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.link.call(null,x));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isLink.call(null,x));
});
//# sourceMappingURL=transit.js.map?r=0.7249922795873149