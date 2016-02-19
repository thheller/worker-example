goog.provide('demo.app');
goog.require('cljs.core');
if(typeof demo.app.state !== 'undefined'){
} else {
demo.app.state = (function (){var G__21041 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21041) : cljs.core.atom.call(null,G__21041));
})();
}
demo.app.start = (function demo$app$start(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.app.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"started","started",585705024)], null),cljs.core.inc);

return console.log("starting app",new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(demo.app.state) : cljs.core.deref.call(null,demo.app.state))));
});
goog.exportSymbol('demo.app.start', demo.app.start);
demo.app.stop = (function demo$app$stop(){
return console.log("stopping app");
});
goog.exportSymbol('demo.app.stop', demo.app.stop);
//# sourceMappingURL=app.js.map?r=0.26976470144554743