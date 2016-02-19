goog.provide('shadow.devtools.browser');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('shadow.devtools');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('cljs.reader');
if(typeof shadow.devtools.browser._STAR_socket_STAR_ !== 'undefined'){
} else {
shadow.devtools.browser._STAR_socket_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof shadow.devtools.browser.scripts_to_load !== 'undefined'){
} else {
shadow.devtools.browser.scripts_to_load = (function (){var G__20694 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20694) : cljs.core.atom.call(null,G__20694));
})();
}
shadow.devtools.browser.debug;
shadow.devtools.browser.debug = (function shadow$devtools$browser$debug(var_args){
var args20695 = [];
var len__15787__auto___20698 = arguments.length;
var i__15788__auto___20699 = (0);
while(true){
if((i__15788__auto___20699 < len__15787__auto___20698)){
args20695.push((arguments[i__15788__auto___20699]));

var G__20700 = (i__15788__auto___20699 + (1));
i__15788__auto___20699 = G__20700;
continue;
} else {
}
break;
}

var G__20697 = args20695.length;
switch (G__20697) {
case 1:
return shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20695.length)].join('')));

}
});

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$1 = (function (a1){
if(cljs.core.truth_((window["console"]["debug"]))){
return console.debug(a1);
} else {
return null;
}
});

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_((window["console"]["debug"]))){
return console.debug(a1,a2);
} else {
return null;
}
});

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_((window["console"]["debug"]))){
return console.debug(a1,a2,a3);
} else {
return null;
}
});

shadow.devtools.browser.debug.cljs$lang$maxFixedArity = 3;
shadow.devtools.browser.loaded_QMARK_ = goog.isProvided_;
shadow.devtools.browser.goog_is_loaded_QMARK_ = (function shadow$devtools$browser$goog_is_loaded_QMARK_(name){
return goog.object.get(goog.included_,name);
});
shadow.devtools.browser.load_scripts = (function shadow$devtools$browser$load_scripts(filenames,after_load_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.devtools.browser.scripts_to_load,cljs.core.into,filenames);

var load_next = (function shadow$devtools$browser$load_scripts_$_load_next(){
var temp__4423__auto__ = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser.scripts_to_load) : cljs.core.deref.call(null,shadow.devtools.browser.scripts_to_load)));
if(cljs.core.truth_(temp__4423__auto__)){
var next = temp__4423__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.scripts_to_load,((function (next,temp__4423__auto__){
return (function (remaining){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.rest(remaining));
});})(next,temp__4423__auto__))
);

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD JS:",next);

return (function (){var G__20705 = [cljs.core.str(CLOSURE_BASE_PATH),cljs.core.str(next),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('');
return goog.net.jsloader.load(G__20705);
})().addBoth(((function (next,temp__4423__auto__){
return (function (){
(goog.included_[next] = true);

return shadow$devtools$browser$load_scripts_$_load_next();
});})(next,temp__4423__auto__))
);
} else {
return (after_load_fn.cljs$core$IFn$_invoke$arity$0 ? after_load_fn.cljs$core$IFn$_invoke$arity$0() : after_load_fn.call(null));
}
});
return load_next();
});
shadow.devtools.browser.module_is_active_QMARK_ = (function shadow$devtools$browser$module_is_active_QMARK_(module){
var G__20708 = SHADOW_MODULES;
var G__20709 = [cljs.core.str(module)].join('');
return goog.object.get(G__20708,G__20709);
});
shadow.devtools.browser.handle_js_reload = (function shadow$devtools$browser$handle_js_reload(p__20710){
var map__20716 = p__20710;
var map__20716__$1 = ((((!((map__20716 == null)))?((((map__20716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20716):map__20716);
var msg = map__20716__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20716__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20716__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,reload));
if(cljs.core.seq(reload__$1)){
var js_to_reload = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-name","js-name",-1555671279),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (reload__$1,map__20716,map__20716__$1,msg,sources,reload){
return (function (p__20718){
var map__20719 = p__20718;
var map__20719__$1 = ((((!((map__20719 == null)))?((((map__20719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20719):map__20719);
var src = map__20719__$1;
var js_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,new cljs.core.Keyword(null,"js-name","js-name",-1555671279));
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var and__14717__auto__ = shadow.devtools.browser.module_is_active_QMARK_(module);
if(cljs.core.truth_(and__14717__auto__)){
return (cljs.core.contains_QMARK_(reload__$1,js_name)) || (cljs.core.not(shadow.devtools.browser.goog_is_loaded_QMARK_(js_name)));
} else {
return and__14717__auto__;
}
});})(reload__$1,map__20716,map__20716__$1,msg,sources,reload))
,sources)));
if(cljs.core.truth_(shadow.devtools.before_load)){
var fn_20721 = goog.getObjectByName(shadow.devtools.before_load);
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("Executing :before-load",shadow.devtools.before_load);

(fn_20721.cljs$core$IFn$_invoke$arity$0 ? fn_20721.cljs$core$IFn$_invoke$arity$0() : fn_20721.call(null));
} else {
}

var after_load_fn = ((function (js_to_reload,reload__$1,map__20716,map__20716__$1,msg,sources,reload){
return (function (){
if(cljs.core.truth_(shadow.devtools.after_load)){
var fn = goog.getObjectByName(shadow.devtools.after_load);
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("Executing :after-load ",shadow.devtools.after_load);

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
} else {
return null;
}
});})(js_to_reload,reload__$1,map__20716,map__20716__$1,msg,sources,reload))
;
return shadow.devtools.browser.load_scripts(js_to_reload,after_load_fn);
} else {
return null;
}
});
shadow.devtools.browser.handle_css_changes = (function shadow$devtools$browser$handle_css_changes(p__20722){
var map__20735 = p__20722;
var map__20735__$1 = ((((!((map__20735 == null)))?((((map__20735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20735):map__20735);
var pkg = map__20735__$1;
var public_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20735__$1,new cljs.core.Keyword(null,"public-path","public-path",-1624067845));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20735__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var manifest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20735__$1,new cljs.core.Keyword(null,"manifest","manifest",-1386791956));
var seq__20737 = cljs.core.seq(manifest);
var chunk__20738 = null;
var count__20739 = (0);
var i__20740 = (0);
while(true){
if((i__20740 < count__20739)){
var vec__20741 = chunk__20738.cljs$core$IIndexed$_nth$arity$2(null,i__20740);
var css_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20741,(0),null);
var css_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20741,(1),null);
var temp__4425__auto___20747 = (function (){var G__20742 = [cljs.core.str("link[data-css-package=\""),cljs.core.str(name),cljs.core.str("\"][data-css-module=\""),cljs.core.str(css_name),cljs.core.str("\"]")].join('');
return document.querySelector(G__20742);
})();
if(cljs.core.truth_(temp__4425__auto___20747)){
var node_20748 = temp__4425__auto___20747;
var full_path_20749 = [cljs.core.str(public_path),cljs.core.str("/"),cljs.core.str(css_file_name)].join('');
var new_link_20750 = (function (){var G__20743 = document.createElement("link");
G__20743.setAttribute("rel","stylesheet");

G__20743.setAttribute("href",[cljs.core.str(full_path_20749),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

G__20743.setAttribute("data-css-package",name);

G__20743.setAttribute("data-css-module",css_name);

return G__20743;
})();
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD CSS:",full_path_20749);

goog.dom.insertSiblingAfter(new_link_20750,node_20748);

goog.dom.removeNode(node_20748);
} else {
}

var G__20751 = seq__20737;
var G__20752 = chunk__20738;
var G__20753 = count__20739;
var G__20754 = (i__20740 + (1));
seq__20737 = G__20751;
chunk__20738 = G__20752;
count__20739 = G__20753;
i__20740 = G__20754;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__20737);
if(temp__4425__auto__){
var seq__20737__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20737__$1)){
var c__15532__auto__ = cljs.core.chunk_first(seq__20737__$1);
var G__20755 = cljs.core.chunk_rest(seq__20737__$1);
var G__20756 = c__15532__auto__;
var G__20757 = cljs.core.count(c__15532__auto__);
var G__20758 = (0);
seq__20737 = G__20755;
chunk__20738 = G__20756;
count__20739 = G__20757;
i__20740 = G__20758;
continue;
} else {
var vec__20744 = cljs.core.first(seq__20737__$1);
var css_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20744,(0),null);
var css_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20744,(1),null);
var temp__4425__auto___20759__$1 = (function (){var G__20745 = [cljs.core.str("link[data-css-package=\""),cljs.core.str(name),cljs.core.str("\"][data-css-module=\""),cljs.core.str(css_name),cljs.core.str("\"]")].join('');
return document.querySelector(G__20745);
})();
if(cljs.core.truth_(temp__4425__auto___20759__$1)){
var node_20760 = temp__4425__auto___20759__$1;
var full_path_20761 = [cljs.core.str(public_path),cljs.core.str("/"),cljs.core.str(css_file_name)].join('');
var new_link_20762 = (function (){var G__20746 = document.createElement("link");
G__20746.setAttribute("rel","stylesheet");

G__20746.setAttribute("href",[cljs.core.str(full_path_20761),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

G__20746.setAttribute("data-css-package",name);

G__20746.setAttribute("data-css-module",css_name);

return G__20746;
})();
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD CSS:",full_path_20761);

goog.dom.insertSiblingAfter(new_link_20762,node_20760);

goog.dom.removeNode(node_20760);
} else {
}

var G__20763 = cljs.core.next(seq__20737__$1);
var G__20764 = null;
var G__20765 = (0);
var G__20766 = (0);
seq__20737 = G__20763;
chunk__20738 = G__20764;
count__20739 = G__20765;
i__20740 = G__20766;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.devtools.browser.repl_print = (function shadow$devtools$browser$repl_print(value){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0));
});
shadow.devtools.browser.socket_msg = (function shadow$devtools$browser$socket_msg(msg){
var temp__4423__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_socket_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_socket_STAR_));
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0)));
} else {
var G__20769 = "WEBSOCKET NOT CONNECTED";
var G__20770 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0));
return console.warn(G__20769,G__20770);
}
});
shadow.devtools.browser.get_ua_product = (function shadow$devtools$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.devtools.browser.get_asset_root = (function shadow$devtools$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.devtools.browser.repl_call = (function shadow$devtools$browser$repl_call(handler){
var result = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","result","repl/result",1421065572)], null);
try{var ret = (handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = ret;

try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"value","value",305978217),shadow.devtools.browser.repl_print(ret));
}catch (e20774){var e = e20774;
console.log("encoding of result failed",e,ret);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),"ENCODING FAILED");
}}catch (e20773){var e = e20773;
cljs.core._STAR_e = e;

console.log("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.devtools.browser.get_ua_product(),cljs.core.array_seq([new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str(e)].join(''),new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.devtools.browser.get_asset_root(),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], 0));
}});
shadow.devtools.browser.repl_invoke = (function shadow$devtools$browser$repl_invoke(p__20775){
var map__20778 = p__20775;
var map__20778__$1 = ((((!((map__20778 == null)))?((((map__20778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20778):map__20778);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.devtools.browser.repl_call(((function (map__20778,map__20778__$1,id,js){
return (function (){
return eval(js);
});})(map__20778,map__20778__$1,id,js))
);
return shadow.devtools.browser.socket_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.devtools.browser.repl_require = (function shadow$devtools$browser$repl_require(p__20780){
var map__20783 = p__20780;
var map__20783__$1 = ((((!((map__20783 == null)))?((((map__20783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20783):map__20783);
var msg = map__20783__$1;
var js_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20783__$1,new cljs.core.Keyword(null,"js-sources","js-sources",-1800421708));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20783__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
return shadow.devtools.browser.load_scripts(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload))?(function (){var all = cljs.core.butlast(js_sources);
var self = cljs.core.last(js_sources);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,all)),self);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload))?js_sources:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,js_sources)
)),((function (map__20783,map__20783__$1,msg,js_sources,reload){
return (function (){
return console.log("repl-require finished");
});})(map__20783,map__20783__$1,msg,js_sources,reload))
);
});
shadow.devtools.browser.repl_init = (function shadow$devtools$browser$repl_init(p__20785){
var map__20788 = p__20785;
var map__20788__$1 = ((((!((map__20788 == null)))?((((map__20788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20788):map__20788);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20788__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.devtools.browser.load_scripts(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-js-sources","repl-js-sources",-393998806).cljs$core$IFn$_invoke$arity$1(repl_state)),((function (map__20788,map__20788__$1,repl_state){
return (function (){
return console.log("repl init complete");
});})(map__20788,map__20788__$1,repl_state))
);
});
shadow.devtools.browser.repl_set_ns = (function shadow$devtools$browser$repl_set_ns(p__20790){
var map__20795 = p__20790;
var map__20795__$1 = ((((!((map__20795 == null)))?((((map__20795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20795):map__20795);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var G__20797 = "repl/set-ns";
var G__20798 = [cljs.core.str(ns)].join('');
return console.log(G__20797,G__20798);
});
shadow.devtools.browser.handle_message = (function shadow$devtools$browser$handle_message(p__20799){
var map__20803 = p__20799;
var map__20803__$1 = ((((!((map__20803 == null)))?((((map__20803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20803):map__20803);
var msg = map__20803__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20803__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__20805 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20805) {
case "js/reload":
return shadow.devtools.browser.handle_js_reload(msg);

break;
case "css/reload":
return shadow.devtools.browser.handle_css_changes(msg);

break;
case "repl/invoke":
return shadow.devtools.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.devtools.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.devtools.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.devtools.browser.repl_init(msg);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
if(typeof shadow.devtools.browser._STAR_dump_loop_STAR_ !== 'undefined'){
} else {
shadow.devtools.browser._STAR_dump_loop_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
shadow.devtools.browser.dump_transmitter = (function shadow$devtools$browser$dump_transmitter(){
var temp__4425__auto___20977 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_dump_loop_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_));
if(cljs.core.truth_(temp__4425__auto___20977)){
var l_20978 = temp__4425__auto___20977;
cljs.core.async.close_BANG_(l_20978);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_dump_loop_STAR_,null) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_,null));
} else {
}

var dump_loop = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_dump_loop_STAR_,dump_loop) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_,dump_loop));

var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17907__auto__,dump_loop){
return (function (){
var f__17908__auto__ = (function (){var switch__17793__auto__ = ((function (c__17907__auto__,dump_loop){
return (function (state_20943){
var state_val_20944 = (state_20943[(1)]);
if((state_val_20944 === (7))){
var inst_20939 = (state_20943[(2)]);
var state_20943__$1 = state_20943;
var statearr_20945_20979 = state_20943__$1;
(statearr_20945_20979[(2)] = inst_20939);

(statearr_20945_20979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (1))){
var state_20943__$1 = state_20943;
var statearr_20946_20980 = state_20943__$1;
(statearr_20946_20980[(2)] = null);

(statearr_20946_20980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (4))){
var inst_20904 = (state_20943[(7)]);
var inst_20902 = (state_20943[(8)]);
var inst_20902__$1 = (state_20943[(2)]);
var inst_20903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20902__$1,(0),null);
var inst_20904__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20902__$1,(1),null);
var inst_20905 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20904__$1,dump_loop);
var state_20943__$1 = (function (){var statearr_20947 = state_20943;
(statearr_20947[(9)] = inst_20903);

(statearr_20947[(7)] = inst_20904__$1);

(statearr_20947[(8)] = inst_20902__$1);

return statearr_20947;
})();
if(inst_20905){
var statearr_20948_20981 = state_20943__$1;
(statearr_20948_20981[(1)] = (5));

} else {
var statearr_20949_20982 = state_20943__$1;
(statearr_20949_20982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (15))){
var inst_20919 = (state_20943[(10)]);
var inst_20923 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_20924 = [new cljs.core.Keyword("devtools","dump","devtools/dump",1378506389),inst_20919];
var inst_20925 = cljs.core.PersistentHashMap.fromArrays(inst_20923,inst_20924);
var inst_20926 = shadow.devtools.browser.socket_msg(inst_20925);
var state_20943__$1 = (function (){var statearr_20950 = state_20943;
(statearr_20950[(11)] = inst_20926);

return statearr_20950;
})();
var statearr_20951_20983 = state_20943__$1;
(statearr_20951_20983[(2)] = null);

(statearr_20951_20983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (13))){
var inst_20937 = (state_20943[(2)]);
var state_20943__$1 = state_20943;
var statearr_20952_20984 = state_20943__$1;
(statearr_20952_20984[(2)] = inst_20937);

(statearr_20952_20984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (6))){
var inst_20904 = (state_20943[(7)]);
var inst_20916 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20904,shadow.devtools.dump_chan);
var state_20943__$1 = state_20943;
if(inst_20916){
var statearr_20953_20985 = state_20943__$1;
(statearr_20953_20985[(1)] = (11));

} else {
var statearr_20954_20986 = state_20943__$1;
(statearr_20954_20986[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (17))){
var inst_20903 = (state_20943[(9)]);
var state_20943__$1 = state_20943;
var statearr_20955_20987 = state_20943__$1;
(statearr_20955_20987[(2)] = inst_20903);

(statearr_20955_20987[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (3))){
var inst_20941 = (state_20943[(2)]);
var state_20943__$1 = state_20943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20943__$1,inst_20941);
} else {
if((state_val_20944 === (12))){
var inst_20904 = (state_20943[(7)]);
var inst_20931 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20904,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_20943__$1 = state_20943;
if(inst_20931){
var statearr_20956_20988 = state_20943__$1;
(statearr_20956_20988[(1)] = (17));

} else {
var statearr_20957_20989 = state_20943__$1;
(statearr_20957_20989[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (2))){
var inst_20898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20899 = [dump_loop,shadow.devtools.dump_chan];
var inst_20900 = (new cljs.core.PersistentVector(null,2,(5),inst_20898,inst_20899,null));
var state_20943__$1 = state_20943;
return cljs.core.async.ioc_alts_BANG_(state_20943__$1,(4),inst_20900);
} else {
if((state_val_20944 === (19))){
var inst_20935 = (state_20943[(2)]);
var state_20943__$1 = state_20943;
var statearr_20958_20990 = state_20943__$1;
(statearr_20958_20990[(2)] = inst_20935);

(statearr_20958_20990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (11))){
var inst_20902 = (state_20943[(8)]);
var inst_20919 = (state_20943[(10)]);
var inst_20919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20902,(0),null);
var inst_20920 = (inst_20919__$1 == null);
var state_20943__$1 = (function (){var statearr_20959 = state_20943;
(statearr_20959[(10)] = inst_20919__$1);

return statearr_20959;
})();
if(cljs.core.truth_(inst_20920)){
var statearr_20960_20991 = state_20943__$1;
(statearr_20960_20991[(1)] = (14));

} else {
var statearr_20961_20992 = state_20943__$1;
(statearr_20961_20992[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (9))){
var state_20943__$1 = state_20943;
var statearr_20962_20993 = state_20943__$1;
(statearr_20962_20993[(2)] = null);

(statearr_20962_20993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (5))){
var inst_20902 = (state_20943[(8)]);
var inst_20908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20902,(0),null);
var inst_20909 = (inst_20908 == null);
var state_20943__$1 = state_20943;
if(cljs.core.truth_(inst_20909)){
var statearr_20963_20994 = state_20943__$1;
(statearr_20963_20994[(1)] = (8));

} else {
var statearr_20964_20995 = state_20943__$1;
(statearr_20964_20995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (14))){
var state_20943__$1 = state_20943;
var statearr_20965_20996 = state_20943__$1;
(statearr_20965_20996[(2)] = null);

(statearr_20965_20996[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (16))){
var inst_20929 = (state_20943[(2)]);
var state_20943__$1 = state_20943;
var statearr_20966_20997 = state_20943__$1;
(statearr_20966_20997[(2)] = inst_20929);

(statearr_20966_20997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (10))){
var inst_20914 = (state_20943[(2)]);
var state_20943__$1 = state_20943;
var statearr_20967_20998 = state_20943__$1;
(statearr_20967_20998[(2)] = inst_20914);

(statearr_20967_20998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (18))){
var state_20943__$1 = state_20943;
var statearr_20968_20999 = state_20943__$1;
(statearr_20968_20999[(2)] = null);

(statearr_20968_20999[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20944 === (8))){
var state_20943__$1 = state_20943;
var statearr_20969_21000 = state_20943__$1;
(statearr_20969_21000[(2)] = null);

(statearr_20969_21000[(1)] = (10));


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
});})(c__17907__auto__,dump_loop))
;
return ((function (switch__17793__auto__,c__17907__auto__,dump_loop){
return (function() {
var shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto__ = null;
var shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto____0 = (function (){
var statearr_20973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20973[(0)] = shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto__);

(statearr_20973[(1)] = (1));

return statearr_20973;
});
var shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto____1 = (function (state_20943){
while(true){
var ret_value__17795__auto__ = (function (){try{while(true){
var result__17796__auto__ = switch__17793__auto__(state_20943);
if(cljs.core.keyword_identical_QMARK_(result__17796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17796__auto__;
}
break;
}
}catch (e20974){if((e20974 instanceof Object)){
var ex__17797__auto__ = e20974;
var statearr_20975_21001 = state_20943;
(statearr_20975_21001[(5)] = ex__17797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21002 = state_20943;
state_20943 = G__21002;
continue;
} else {
return ret_value__17795__auto__;
}
break;
}
});
shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto__ = function(state_20943){
switch(arguments.length){
case 0:
return shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto____0.call(this);
case 1:
return shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto____1.call(this,state_20943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto____0;
shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto____1;
return shadow$devtools$browser$dump_transmitter_$_state_machine__17794__auto__;
})()
;})(switch__17793__auto__,c__17907__auto__,dump_loop))
})();
var state__17909__auto__ = (function (){var statearr_20976 = (f__17908__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17908__auto__.cljs$core$IFn$_invoke$arity$0() : f__17908__auto__.call(null));
(statearr_20976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17907__auto__);

return statearr_20976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(c__17907__auto__,dump_loop))
);

return c__17907__auto__;
});
shadow.devtools.browser.repl_connect = (function shadow$devtools$browser$repl_connect(){
if(cljs.core.truth_((window["WebSocket"]))){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var socket = (new WebSocket([cljs.core.str(clojure.string.replace(shadow.devtools.url,/^http/,"ws")),cljs.core.str("/"),cljs.core.str(cljs.core.random_uuid()),cljs.core.str("/browser")].join('')));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_socket_STAR_,socket) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_socket_STAR_,socket));

socket.onmessage = ((function (print_fn,socket){
return (function (e){
cljs.core.set_print_fn_BANG_(((function (print_fn,socket){
return (function() { 
var G__21003__delegate = function (args){
shadow.devtools.browser.socket_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","out","repl/out",-905715102),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args)], null));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(print_fn,args);
};
var G__21003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21004__i = 0, G__21004__a = new Array(arguments.length -  0);
while (G__21004__i < G__21004__a.length) {G__21004__a[G__21004__i] = arguments[G__21004__i + 0]; ++G__21004__i;}
  args = new cljs.core.IndexedSeq(G__21004__a,0);
} 
return G__21003__delegate.call(this,args);};
G__21003.cljs$lang$maxFixedArity = 0;
G__21003.cljs$lang$applyTo = (function (arglist__21005){
var args = cljs.core.seq(arglist__21005);
return G__21003__delegate(args);
});
G__21003.cljs$core$IFn$_invoke$arity$variadic = G__21003__delegate;
return G__21003;
})()
;})(print_fn,socket))
);

return shadow.devtools.browser.handle_message(cljs.reader.read_string(e.data));
});})(print_fn,socket))
;

socket.onopen = ((function (print_fn,socket){
return (function (e){
goog.provide = goog.constructNamespace_;

console.log("DEVTOOLS: connected!");

return shadow.devtools.browser.dump_transmitter();
});})(print_fn,socket))
;

socket.onclose = ((function (print_fn,socket){
return (function (e){
console.warn("DEVTOOLS: disconnected!");

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_socket_STAR_,null) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_socket_STAR_,null));
});})(print_fn,socket))
;

return socket.onerror = ((function (print_fn,socket){
return (function (e){
return null;
});})(print_fn,socket))
;
} else {
return null;
}
});
if(shadow.devtools.enabled){
var temp__4425__auto___21006 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_socket_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_socket_STAR_));
if(cljs.core.truth_(temp__4425__auto___21006)){
var s_21007 = temp__4425__auto___21006;
console.log("DEVTOOLS: connection reset!");

s_21007.onclose = ((function (s_21007,temp__4425__auto___21006){
return (function (e){
return null;
});})(s_21007,temp__4425__auto___21006))
;

s_21007.close();
} else {
}

shadow.devtools.browser.repl_connect();
} else {
}
//# sourceMappingURL=browser.js.map?r=0.47597121925664587