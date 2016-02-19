goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__16508_16522 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16509_16523 = null;
var count__16510_16524 = (0);
var i__16511_16525 = (0);
while(true){
if((i__16511_16525 < count__16510_16524)){
var f_16526 = chunk__16509_16523.cljs$core$IIndexed$_nth$arity$2(null,i__16511_16525);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_16526], 0));

var G__16527 = seq__16508_16522;
var G__16528 = chunk__16509_16523;
var G__16529 = count__16510_16524;
var G__16530 = (i__16511_16525 + (1));
seq__16508_16522 = G__16527;
chunk__16509_16523 = G__16528;
count__16510_16524 = G__16529;
i__16511_16525 = G__16530;
continue;
} else {
var temp__4425__auto___16531 = cljs.core.seq(seq__16508_16522);
if(temp__4425__auto___16531){
var seq__16508_16532__$1 = temp__4425__auto___16531;
if(cljs.core.chunked_seq_QMARK_(seq__16508_16532__$1)){
var c__15532__auto___16533 = cljs.core.chunk_first(seq__16508_16532__$1);
var G__16534 = cljs.core.chunk_rest(seq__16508_16532__$1);
var G__16535 = c__15532__auto___16533;
var G__16536 = cljs.core.count(c__15532__auto___16533);
var G__16537 = (0);
seq__16508_16522 = G__16534;
chunk__16509_16523 = G__16535;
count__16510_16524 = G__16536;
i__16511_16525 = G__16537;
continue;
} else {
var f_16538 = cljs.core.first(seq__16508_16532__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_16538], 0));

var G__16539 = cljs.core.next(seq__16508_16532__$1);
var G__16540 = null;
var G__16541 = (0);
var G__16542 = (0);
seq__16508_16522 = G__16539;
chunk__16509_16523 = G__16540;
count__16510_16524 = G__16541;
i__16511_16525 = G__16542;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16543 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__14729__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_16543], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_16543)))?cljs.core.second(arglists_16543):arglists_16543)], 0));
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
var seq__16512 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16513 = null;
var count__16514 = (0);
var i__16515 = (0);
while(true){
if((i__16515 < count__16514)){
var vec__16516 = chunk__16513.cljs$core$IIndexed$_nth$arity$2(null,i__16515);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16516,(0),null);
var map__16517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16516,(1),null);
var map__16517__$1 = ((((!((map__16517 == null)))?((((map__16517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16517):map__16517);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16517__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16517__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__16544 = seq__16512;
var G__16545 = chunk__16513;
var G__16546 = count__16514;
var G__16547 = (i__16515 + (1));
seq__16512 = G__16544;
chunk__16513 = G__16545;
count__16514 = G__16546;
i__16515 = G__16547;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16512);
if(temp__4425__auto__){
var seq__16512__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16512__$1)){
var c__15532__auto__ = cljs.core.chunk_first(seq__16512__$1);
var G__16548 = cljs.core.chunk_rest(seq__16512__$1);
var G__16549 = c__15532__auto__;
var G__16550 = cljs.core.count(c__15532__auto__);
var G__16551 = (0);
seq__16512 = G__16548;
chunk__16513 = G__16549;
count__16514 = G__16550;
i__16515 = G__16551;
continue;
} else {
var vec__16519 = cljs.core.first(seq__16512__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16519,(0),null);
var map__16520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16519,(1),null);
var map__16520__$1 = ((((!((map__16520 == null)))?((((map__16520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16520):map__16520);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16520__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16520__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__16552 = cljs.core.next(seq__16512__$1);
var G__16553 = null;
var G__16554 = (0);
var G__16555 = (0);
seq__16512 = G__16552;
chunk__16513 = G__16553;
count__16514 = G__16554;
i__16515 = G__16555;
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
//# sourceMappingURL=repl.js.map?r=0.9822708385814461