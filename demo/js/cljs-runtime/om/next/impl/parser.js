goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__23377){
var vec__23383 = p__23377;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23383,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__23391){
var vec__23396 = p__23391;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23396,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23396,(1),null);
var call = vec__23396;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : om.next.impl.parser.expr__GT_ast.call(null,args)),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__18619__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(or__18619__auto__){
return or__18619__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : om.next.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__18619__auto__ = args;
if(or__18619__auto__){
return or__18619__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__23397 = ast;
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23397,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__23397;
}
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),query)], null);
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__23415 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23415,(1),null);
var ast = (om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : om.next.impl.parser.expr__GT_ast.call(null,k));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ast,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"query","query",-1288509510),v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid join, "),cljs.core.str(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__23424){
var vec__23430 = p__23424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23430,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23430,(1),null);
var ref = vec__23430;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return om.next.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return om.next.impl.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return om.next.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(root_QMARK_){
return cljs.core.with_meta((function (){var G__23463 = expr;
if((expr instanceof cljs.core.Keyword)){
return cljs.core._conj(cljs.core.List.EMPTY,G__23463);
} else {
return G__23463;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args23467 = [];
var len__19677__auto___23491 = arguments.length;
var i__19678__auto___23492 = (0);
while(true){
if((i__19678__auto___23492 < len__19677__auto___23491)){
args23467.push((arguments[i__19678__auto___23492]));

var G__23494 = (i__19678__auto___23492 + (1));
i__19678__auto___23492 = G__23494;
continue;
} else {
}
break;
}

var G__23469 = args23467.length;
switch (G__23469) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23467.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__23470,unparse_QMARK_){
var map__23471 = p__23470;
var map__23471__$1 = ((((!((map__23471 == null)))?((((map__23471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23471):map__23471);
var ast = map__23471__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23471__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__23471,map__23471__$1,ast,type){
return (function (p1__23464_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__23464_SHARP_,unparse_QMARK_);
});})(map__23471,map__23471__$1,ast,type))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
} else {
var map__23473 = ast;
var map__23473__$1 = ((((!((map__23473 == null)))?((((map__23473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23473):map__23473);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473__$1,new cljs.core.Keyword(null,"params","params",710516235));
return om.next.impl.parser.wrap_expr(query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_(params))){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),expr);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,expr);
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type))?((unparse_QMARK_ === true)?(function (){var map__23476 = ast;
var map__23476__$1 = ((((!((map__23476 == null)))?((((map__23476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23476):map__23476);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23476__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))){
return cljs.core.PersistentArrayMap.fromArray([key,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__23476,map__23476__$1,children,component,map__23473,map__23473__$1,key,query,query_root,params,map__23471,map__23471__$1,ast,type){
return (function (p__23482){
var map__23484 = p__23482;
var map__23484__$1 = ((((!((map__23484 == null)))?((((map__23484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23484):map__23484);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23484__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23484__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__23489 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__23484,map__23484__$1,union_key,children__$1,component__$1,map__23476,map__23476__$1,children,component,map__23473,map__23473__$1,key,query,query_root,params,map__23471,map__23471__$1,ast,type){
return (function (p1__23465_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__23465_SHARP_,unparse_QMARK_);
});})(map__23484,map__23484__$1,union_key,children__$1,component__$1,map__23476,map__23476__$1,children,component,map__23473,map__23473__$1,key,query,query_root,params,map__23471,map__23471__$1,ast,type))
),children__$1);
if(!((component__$1 == null))){
return cljs.core.with_meta(G__23489,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1], null));
} else {
return G__23489;
}
})()], null);
});})(map__23476,map__23476__$1,children,component,map__23473,map__23473__$1,key,query,query_root,params,map__23471,map__23471__$1,ast,type))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([key,(function (){var G__23490 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__23476,map__23476__$1,children,component,map__23473,map__23473__$1,key,query,query_root,params,map__23471,map__23471__$1,ast,type){
return (function (p1__23466_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__23466_SHARP_,unparse_QMARK_);
});})(map__23476,map__23476__$1,children,component,map__23473,map__23473__$1,key,query,query_root,params,map__23471,map__23471__$1,ast,type))
),children);
if(!((component == null))){
return cljs.core.with_meta(G__23490,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null));
} else {
return G__23490;
}
})()], true, false);
}
})():cljs.core.PersistentArrayMap.fromArray([key,query], true, false)):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(x,path){
var x_SINGLEQUOTE_ = (function (){var G__23540 = x;
var G__23540__$1 = ((cljs.core.map_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__23540){
return (function (p__23541){
var vec__23542 = p__23541;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om$next$impl$parser$path_meta(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k))], null);
});})(G__23540))
),G__23540):G__23540);
if(cljs.core.vector_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (G__23540,G__23540__$1){
return (function (p1__23527_SHARP_,p2__23525_SHARP_){
return om$next$impl$parser$path_meta(p2__23525_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__23527_SHARP_));
});})(G__23540,G__23540__$1))
),G__23540__$1);
} else {
return G__23540__$1;
}
})();
var G__23543 = x_SINGLEQUOTE_;
if(((!((x_SINGLEQUOTE_ == null)))?((((x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$ & (262144))) || (x_SINGLEQUOTE_.cljs$core$IWithMeta$))?true:(((!x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__23543,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
return G__23543;
}
});
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("om.next","abort","om.next/abort",-897542671),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__23584){
var map__23796 = p__23584;
var map__23796__$1 = ((((!((map__23796 == null)))?((((map__23796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23796):map__23796);
var config = map__23796__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23796__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23796__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__23796,map__23796__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config));
var map__23847 = (function (){var G__23848 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),om$next$impl$parser$parser_$_self,cljs.core.array_seq([new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778)], 0));
if(!(cljs.core.contains_QMARK_(env,new cljs.core.Keyword(null,"path","path",-188191168)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23848,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
} else {
return G__23848;
}
})();
var map__23847__$1 = ((((!((map__23847 == null)))?((((map__23847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23847):map__23847);
var env__$1 = map__23847__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23847__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__23847,map__23847__$1,env__$1,path,map__23796,map__23796__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__23892 = om.next.impl.parser.expr__GT_ast(expr);
var map__23892__$1 = ((((!((map__23892 == null)))?((((map__23892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23892):map__23892);
var ast = map__23892__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23892__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23892__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23892__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23892__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$2 = (function (){var G__23894 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query_SINGLEQUOTE_], null)], 0));
var G__23894__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23894,new cljs.core.Keyword(null,"query","query",-1288509510)):G__23894);
var G__23894__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23894__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query):G__23894__$1);
if(cljs.core.vector_QMARK_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23894__$2,new cljs.core.Keyword(null,"query-root","query-root",359781888),key);
} else {
return G__23894__$2;
}
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (function (){var G__23895 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23895) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"mutate","mutate",-1232016731,null)], 0)))].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : mutate.call(null,env__$2,dispatch_key,params));

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"read","read",-1514377108,null)], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
case "join":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"read","read",-1514377108,null)], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"read","read",-1514377108,null)], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__23896 = ret;
var G__23896__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__23896,expr):G__23896);
if(cljs.core.map_QMARK_(ast_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__23896__$1,om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_));
} else {
return G__23896__$1;
}
} else {
if(!((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,new cljs.core.Keyword(null,"value","value",305978217))))){
return ret;
} else {
var error = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var mut_ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{var G__23898_23910 = mut_ret;
var G__23899_23911 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res).call(null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23898_23910,G__23899_23911) : cljs.core.reset_BANG_.call(null,G__23898_23910,G__23899_23911));
}catch (e23897){var e_23914 = e23897;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_(e_23914))){
throw e_23914;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(error,e_23914) : cljs.core.reset_BANG_.call(null,error,e_23914));
}
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_(value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(dispatch_key),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"value","value",1946509744,null)))], 0)))].join('')));
}
} else {
}

var G__23900 = ret;
var G__23900__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23900,key,value):G__23900);
var G__23900__$2 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mut_ret) : cljs.core.deref.call(null,mut_ret)))?cljs.core.assoc_in(G__23900__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"result","result",1415092211)], null),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mut_ret) : cljs.core.deref.call(null,mut_ret))):G__23900__$1);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23900__$2,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error))], null));
} else {
return G__23900__$2;
}
}
}
});})(elide_paths_QMARK_,map__23847,map__23847__$1,env__$1,path,map__23796,map__23796__$1,config,read,mutate))
;
var G__23902 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
if(!((!((target == null))) || (elide_paths_QMARK_))){
return om.next.impl.parser.path_meta(G__23902,path);
} else {
return G__23902;
}
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__23796,map__23796__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});
//# sourceMappingURL=parser.js.map?r=0.01697648566111931