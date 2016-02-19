goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23311_23325 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23312_23326 = null;
var count__23313_23327 = (0);
var i__23314_23328 = (0);
while(true){
if((i__23314_23328 < count__23313_23327)){
var f_23329 = chunk__23312_23326.cljs$core$IIndexed$_nth$arity$2(null,i__23314_23328);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_23329], 0));

var G__23330 = seq__23311_23325;
var G__23331 = chunk__23312_23326;
var G__23332 = count__23313_23327;
var G__23333 = (i__23314_23328 + (1));
seq__23311_23325 = G__23330;
chunk__23312_23326 = G__23331;
count__23313_23327 = G__23332;
i__23314_23328 = G__23333;
continue;
} else {
var temp__4657__auto___23334 = cljs.core.seq(seq__23311_23325);
if(temp__4657__auto___23334){
var seq__23311_23335__$1 = temp__4657__auto___23334;
if(cljs.core.chunked_seq_QMARK_(seq__23311_23335__$1)){
var c__19422__auto___23336 = cljs.core.chunk_first(seq__23311_23335__$1);
var G__23337 = cljs.core.chunk_rest(seq__23311_23335__$1);
var G__23338 = c__19422__auto___23336;
var G__23339 = cljs.core.count(c__19422__auto___23336);
var G__23340 = (0);
seq__23311_23325 = G__23337;
chunk__23312_23326 = G__23338;
count__23313_23327 = G__23339;
i__23314_23328 = G__23340;
continue;
} else {
var f_23341 = cljs.core.first(seq__23311_23335__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_23341], 0));

var G__23342 = cljs.core.next(seq__23311_23335__$1);
var G__23343 = null;
var G__23344 = (0);
var G__23345 = (0);
seq__23311_23325 = G__23342;
chunk__23312_23326 = G__23343;
count__23313_23327 = G__23344;
i__23314_23328 = G__23345;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23346 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18619__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_23346], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23346)))?cljs.core.second(arglists_23346):arglists_23346)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23315 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23316 = null;
var count__23317 = (0);
var i__23318 = (0);
while(true){
if((i__23318 < count__23317)){
var vec__23319 = chunk__23316.cljs$core$IIndexed$_nth$arity$2(null,i__23318);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319,(0),null);
var map__23320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319,(1),null);
var map__23320__$1 = ((((!((map__23320 == null)))?((((map__23320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23320):map__23320);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23320__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23320__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__23347 = seq__23315;
var G__23348 = chunk__23316;
var G__23349 = count__23317;
var G__23350 = (i__23318 + (1));
seq__23315 = G__23347;
chunk__23316 = G__23348;
count__23317 = G__23349;
i__23318 = G__23350;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__23315);
if(temp__4657__auto__){
var seq__23315__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23315__$1)){
var c__19422__auto__ = cljs.core.chunk_first(seq__23315__$1);
var G__23351 = cljs.core.chunk_rest(seq__23315__$1);
var G__23352 = c__19422__auto__;
var G__23353 = cljs.core.count(c__19422__auto__);
var G__23354 = (0);
seq__23315 = G__23351;
chunk__23316 = G__23352;
count__23317 = G__23353;
i__23318 = G__23354;
continue;
} else {
var vec__23322 = cljs.core.first(seq__23315__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23322,(0),null);
var map__23323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23322,(1),null);
var map__23323__$1 = ((((!((map__23323 == null)))?((((map__23323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23323):map__23323);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23323__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__23355 = cljs.core.next(seq__23315__$1);
var G__23356 = null;
var G__23357 = (0);
var G__23358 = (0);
seq__23315 = G__23355;
chunk__23316 = G__23356;
count__23317 = G__23357;
i__23318 = G__23358;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
//# sourceMappingURL=repl.js.map?r=0.6957466893380454