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
shadow.devtools.browser.scripts_to_load = (function (){var G__28917 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28917) : cljs.core.atom.call(null,G__28917));
})();
}
shadow.devtools.browser.debug = (function shadow$devtools$browser$debug(var_args){
var args28918 = [];
var len__19677__auto___28921 = arguments.length;
var i__19678__auto___28922 = (0);
while(true){
if((i__19678__auto___28922 < len__19677__auto___28921)){
args28918.push((arguments[i__19678__auto___28922]));

var G__28923 = (i__19678__auto___28922 + (1));
i__19678__auto___28922 = G__28923;
continue;
} else {
}
break;
}

var G__28920 = args28918.length;
switch (G__28920) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28918.length)].join('')));

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
return goog.object.get(goog.dependencies_.written,name);
});
shadow.devtools.browser.load_scripts = (function shadow$devtools$browser$load_scripts(filenames,after_load_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.devtools.browser.scripts_to_load,cljs.core.into,filenames);

var load_next = (function shadow$devtools$browser$load_scripts_$_load_next(){
var temp__4655__auto__ = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser.scripts_to_load) : cljs.core.deref.call(null,shadow.devtools.browser.scripts_to_load)));
if(cljs.core.truth_(temp__4655__auto__)){
var next = temp__4655__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.scripts_to_load,((function (next,temp__4655__auto__){
return (function (remaining){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.rest(remaining));
});})(next,temp__4655__auto__))
);

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD JS:",next);

return (function (){var G__28928 = [cljs.core.str(CLOSURE_BASE_PATH),cljs.core.str(next),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('');
return goog.net.jsloader.load(G__28928);
})().addBoth(((function (next,temp__4655__auto__){
return (function (){
(goog.dependencies_.written[next] = true);

return shadow$devtools$browser$load_scripts_$_load_next();
});})(next,temp__4655__auto__))
);
} else {
return (after_load_fn.cljs$core$IFn$_invoke$arity$0 ? after_load_fn.cljs$core$IFn$_invoke$arity$0() : after_load_fn.call(null));
}
});
return load_next();
});
shadow.devtools.browser.module_is_active_QMARK_ = (function shadow$devtools$browser$module_is_active_QMARK_(module){
var G__28931 = SHADOW_MODULES;
var G__28932 = [cljs.core.str(module)].join('');
return goog.object.get(G__28931,G__28932);
});
shadow.devtools.browser.handle_js_reload = (function shadow$devtools$browser$handle_js_reload(p__28933){
var map__28939 = p__28933;
var map__28939__$1 = ((((!((map__28939 == null)))?((((map__28939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28939):map__28939);
var msg = map__28939__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28939__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28939__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,reload));
if(cljs.core.seq(reload__$1)){
var js_to_reload = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-name","js-name",-1555671279),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (reload__$1,map__28939,map__28939__$1,msg,sources,reload){
return (function (p__28941){
var map__28942 = p__28941;
var map__28942__$1 = ((((!((map__28942 == null)))?((((map__28942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28942):map__28942);
var src = map__28942__$1;
var js_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28942__$1,new cljs.core.Keyword(null,"js-name","js-name",-1555671279));
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28942__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var and__18607__auto__ = shadow.devtools.browser.module_is_active_QMARK_(module);
if(cljs.core.truth_(and__18607__auto__)){
return (cljs.core.contains_QMARK_(reload__$1,js_name)) || (cljs.core.not(shadow.devtools.browser.goog_is_loaded_QMARK_(js_name)));
} else {
return and__18607__auto__;
}
});})(reload__$1,map__28939,map__28939__$1,msg,sources,reload))
,sources)));
if(cljs.core.truth_(shadow.devtools.before_load)){
var fn_28944 = goog.getObjectByName(shadow.devtools.before_load);
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("Executing :before-load",shadow.devtools.before_load);

(fn_28944.cljs$core$IFn$_invoke$arity$0 ? fn_28944.cljs$core$IFn$_invoke$arity$0() : fn_28944.call(null));
} else {
}

var after_load_fn = ((function (js_to_reload,reload__$1,map__28939,map__28939__$1,msg,sources,reload){
return (function (){
if(cljs.core.truth_(shadow.devtools.after_load)){
var fn = goog.getObjectByName(shadow.devtools.after_load);
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("Executing :after-load ",shadow.devtools.after_load);

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
} else {
return null;
}
});})(js_to_reload,reload__$1,map__28939,map__28939__$1,msg,sources,reload))
;
return shadow.devtools.browser.load_scripts(js_to_reload,after_load_fn);
} else {
return null;
}
});
shadow.devtools.browser.handle_css_changes = (function shadow$devtools$browser$handle_css_changes(p__28945){
var map__28958 = p__28945;
var map__28958__$1 = ((((!((map__28958 == null)))?((((map__28958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28958):map__28958);
var pkg = map__28958__$1;
var public_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28958__$1,new cljs.core.Keyword(null,"public-path","public-path",-1624067845));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var manifest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28958__$1,new cljs.core.Keyword(null,"manifest","manifest",-1386791956));
var seq__28960 = cljs.core.seq(manifest);
var chunk__28961 = null;
var count__28962 = (0);
var i__28963 = (0);
while(true){
if((i__28963 < count__28962)){
var vec__28964 = chunk__28961.cljs$core$IIndexed$_nth$arity$2(null,i__28963);
var css_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28964,(0),null);
var css_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28964,(1),null);
var temp__4657__auto___28970 = (function (){var G__28965 = [cljs.core.str("link[data-css-package=\""),cljs.core.str(name),cljs.core.str("\"][data-css-module=\""),cljs.core.str(css_name),cljs.core.str("\"]")].join('');
return document.querySelector(G__28965);
})();
if(cljs.core.truth_(temp__4657__auto___28970)){
var node_28971 = temp__4657__auto___28970;
var full_path_28972 = [cljs.core.str(public_path),cljs.core.str("/"),cljs.core.str(css_file_name)].join('');
var new_link_28973 = (function (){var G__28966 = document.createElement("link");
G__28966.setAttribute("rel","stylesheet");

G__28966.setAttribute("href",[cljs.core.str(full_path_28972),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

G__28966.setAttribute("data-css-package",name);

G__28966.setAttribute("data-css-module",css_name);

return G__28966;
})();
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD CSS:",full_path_28972);

goog.dom.insertSiblingAfter(new_link_28973,node_28971);

goog.dom.removeNode(node_28971);
} else {
}

var G__28974 = seq__28960;
var G__28975 = chunk__28961;
var G__28976 = count__28962;
var G__28977 = (i__28963 + (1));
seq__28960 = G__28974;
chunk__28961 = G__28975;
count__28962 = G__28976;
i__28963 = G__28977;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__28960);
if(temp__4657__auto__){
var seq__28960__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28960__$1)){
var c__19422__auto__ = cljs.core.chunk_first(seq__28960__$1);
var G__28978 = cljs.core.chunk_rest(seq__28960__$1);
var G__28979 = c__19422__auto__;
var G__28980 = cljs.core.count(c__19422__auto__);
var G__28981 = (0);
seq__28960 = G__28978;
chunk__28961 = G__28979;
count__28962 = G__28980;
i__28963 = G__28981;
continue;
} else {
var vec__28967 = cljs.core.first(seq__28960__$1);
var css_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28967,(0),null);
var css_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28967,(1),null);
var temp__4657__auto___28982__$1 = (function (){var G__28968 = [cljs.core.str("link[data-css-package=\""),cljs.core.str(name),cljs.core.str("\"][data-css-module=\""),cljs.core.str(css_name),cljs.core.str("\"]")].join('');
return document.querySelector(G__28968);
})();
if(cljs.core.truth_(temp__4657__auto___28982__$1)){
var node_28983 = temp__4657__auto___28982__$1;
var full_path_28984 = [cljs.core.str(public_path),cljs.core.str("/"),cljs.core.str(css_file_name)].join('');
var new_link_28985 = (function (){var G__28969 = document.createElement("link");
G__28969.setAttribute("rel","stylesheet");

G__28969.setAttribute("href",[cljs.core.str(full_path_28984),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

G__28969.setAttribute("data-css-package",name);

G__28969.setAttribute("data-css-module",css_name);

return G__28969;
})();
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD CSS:",full_path_28984);

goog.dom.insertSiblingAfter(new_link_28985,node_28983);

goog.dom.removeNode(node_28983);
} else {
}

var G__28986 = cljs.core.next(seq__28960__$1);
var G__28987 = null;
var G__28988 = (0);
var G__28989 = (0);
seq__28960 = G__28986;
chunk__28961 = G__28987;
count__28962 = G__28988;
i__28963 = G__28989;
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
var temp__4655__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_socket_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_socket_STAR_));
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0)));
} else {
var G__28992 = "WEBSOCKET NOT CONNECTED";
var G__28993 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0));
return console.warn(G__28992,G__28993);
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
}catch (e28997){var e = e28997;
console.log("encoding of result failed",e,ret);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),"ENCODING FAILED");
}}catch (e28996){var e = e28996;
cljs.core._STAR_e = e;

console.log("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.devtools.browser.get_ua_product(),cljs.core.array_seq([new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str(e)].join(''),new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.devtools.browser.get_asset_root(),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], 0));
}});
shadow.devtools.browser.repl_invoke = (function shadow$devtools$browser$repl_invoke(p__28998){
var map__29001 = p__28998;
var map__29001__$1 = ((((!((map__29001 == null)))?((((map__29001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29001):map__29001);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29001__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29001__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.devtools.browser.repl_call(((function (map__29001,map__29001__$1,id,js){
return (function (){
return eval(js);
});})(map__29001,map__29001__$1,id,js))
);
return shadow.devtools.browser.socket_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.devtools.browser.repl_require = (function shadow$devtools$browser$repl_require(p__29003){
var map__29006 = p__29003;
var map__29006__$1 = ((((!((map__29006 == null)))?((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29006):map__29006);
var msg = map__29006__$1;
var js_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29006__$1,new cljs.core.Keyword(null,"js-sources","js-sources",-1800421708));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29006__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
return shadow.devtools.browser.load_scripts(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload))?(function (){var all = cljs.core.butlast(js_sources);
var self = cljs.core.last(js_sources);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,all)),self);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload))?js_sources:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,js_sources)
)),((function (map__29006,map__29006__$1,msg,js_sources,reload){
return (function (){
return console.log("repl-require finished");
});})(map__29006,map__29006__$1,msg,js_sources,reload))
);
});
shadow.devtools.browser.repl_init = (function shadow$devtools$browser$repl_init(p__29008){
var map__29011 = p__29008;
var map__29011__$1 = ((((!((map__29011 == null)))?((((map__29011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29011):map__29011);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29011__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.devtools.browser.load_scripts(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-js-sources","repl-js-sources",-393998806).cljs$core$IFn$_invoke$arity$1(repl_state)),((function (map__29011,map__29011__$1,repl_state){
return (function (){
return console.log("repl init complete");
});})(map__29011,map__29011__$1,repl_state))
);
});
shadow.devtools.browser.repl_set_ns = (function shadow$devtools$browser$repl_set_ns(p__29013){
var map__29018 = p__29013;
var map__29018__$1 = ((((!((map__29018 == null)))?((((map__29018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29018):map__29018);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29018__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var G__29020 = "repl/set-ns";
var G__29021 = [cljs.core.str(ns)].join('');
return console.log(G__29020,G__29021);
});
shadow.devtools.browser.handle_message = (function shadow$devtools$browser$handle_message(p__29022){
var map__29026 = p__29022;
var map__29026__$1 = ((((!((map__29026 == null)))?((((map__29026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29026):map__29026);
var msg = map__29026__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29026__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__29028 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29028) {
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
var temp__4657__auto___29200 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_dump_loop_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_));
if(cljs.core.truth_(temp__4657__auto___29200)){
var l_29201 = temp__4657__auto___29200;
cljs.core.async.close_BANG_(l_29201);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_dump_loop_STAR_,null) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_,null));
} else {
}

var dump_loop = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_dump_loop_STAR_,dump_loop) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_,dump_loop));

var c__25338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25338__auto__,dump_loop){
return (function (){
var f__25339__auto__ = (function (){var switch__24892__auto__ = ((function (c__25338__auto__,dump_loop){
return (function (state_29166){
var state_val_29167 = (state_29166[(1)]);
if((state_val_29167 === (7))){
var inst_29162 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29168_29202 = state_29166__$1;
(statearr_29168_29202[(2)] = inst_29162);

(statearr_29168_29202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (1))){
var state_29166__$1 = state_29166;
var statearr_29169_29203 = state_29166__$1;
(statearr_29169_29203[(2)] = null);

(statearr_29169_29203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (4))){
var inst_29127 = (state_29166[(7)]);
var inst_29125 = (state_29166[(8)]);
var inst_29125__$1 = (state_29166[(2)]);
var inst_29126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29125__$1,(0),null);
var inst_29127__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29125__$1,(1),null);
var inst_29128 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29127__$1,dump_loop);
var state_29166__$1 = (function (){var statearr_29170 = state_29166;
(statearr_29170[(7)] = inst_29127__$1);

(statearr_29170[(9)] = inst_29126);

(statearr_29170[(8)] = inst_29125__$1);

return statearr_29170;
})();
if(inst_29128){
var statearr_29171_29204 = state_29166__$1;
(statearr_29171_29204[(1)] = (5));

} else {
var statearr_29172_29205 = state_29166__$1;
(statearr_29172_29205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (15))){
var inst_29142 = (state_29166[(10)]);
var inst_29146 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29147 = [new cljs.core.Keyword("devtools","dump","devtools/dump",1378506389),inst_29142];
var inst_29148 = cljs.core.PersistentHashMap.fromArrays(inst_29146,inst_29147);
var inst_29149 = shadow.devtools.browser.socket_msg(inst_29148);
var state_29166__$1 = (function (){var statearr_29173 = state_29166;
(statearr_29173[(11)] = inst_29149);

return statearr_29173;
})();
var statearr_29174_29206 = state_29166__$1;
(statearr_29174_29206[(2)] = null);

(statearr_29174_29206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (13))){
var inst_29160 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29175_29207 = state_29166__$1;
(statearr_29175_29207[(2)] = inst_29160);

(statearr_29175_29207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (6))){
var inst_29127 = (state_29166[(7)]);
var inst_29139 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29127,shadow.devtools.dump_chan);
var state_29166__$1 = state_29166;
if(inst_29139){
var statearr_29176_29208 = state_29166__$1;
(statearr_29176_29208[(1)] = (11));

} else {
var statearr_29177_29209 = state_29166__$1;
(statearr_29177_29209[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (17))){
var inst_29126 = (state_29166[(9)]);
var state_29166__$1 = state_29166;
var statearr_29178_29210 = state_29166__$1;
(statearr_29178_29210[(2)] = inst_29126);

(statearr_29178_29210[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (3))){
var inst_29164 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29166__$1,inst_29164);
} else {
if((state_val_29167 === (12))){
var inst_29127 = (state_29166[(7)]);
var inst_29154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29127,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_29166__$1 = state_29166;
if(inst_29154){
var statearr_29179_29211 = state_29166__$1;
(statearr_29179_29211[(1)] = (17));

} else {
var statearr_29180_29212 = state_29166__$1;
(statearr_29180_29212[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (2))){
var inst_29121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29122 = [dump_loop,shadow.devtools.dump_chan];
var inst_29123 = (new cljs.core.PersistentVector(null,2,(5),inst_29121,inst_29122,null));
var state_29166__$1 = state_29166;
return cljs.core.async.ioc_alts_BANG_(state_29166__$1,(4),inst_29123);
} else {
if((state_val_29167 === (19))){
var inst_29158 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29181_29213 = state_29166__$1;
(statearr_29181_29213[(2)] = inst_29158);

(statearr_29181_29213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (11))){
var inst_29125 = (state_29166[(8)]);
var inst_29142 = (state_29166[(10)]);
var inst_29142__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29125,(0),null);
var inst_29143 = (inst_29142__$1 == null);
var state_29166__$1 = (function (){var statearr_29182 = state_29166;
(statearr_29182[(10)] = inst_29142__$1);

return statearr_29182;
})();
if(cljs.core.truth_(inst_29143)){
var statearr_29183_29214 = state_29166__$1;
(statearr_29183_29214[(1)] = (14));

} else {
var statearr_29184_29215 = state_29166__$1;
(statearr_29184_29215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (9))){
var state_29166__$1 = state_29166;
var statearr_29185_29216 = state_29166__$1;
(statearr_29185_29216[(2)] = null);

(statearr_29185_29216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (5))){
var inst_29125 = (state_29166[(8)]);
var inst_29131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29125,(0),null);
var inst_29132 = (inst_29131 == null);
var state_29166__$1 = state_29166;
if(cljs.core.truth_(inst_29132)){
var statearr_29186_29217 = state_29166__$1;
(statearr_29186_29217[(1)] = (8));

} else {
var statearr_29187_29218 = state_29166__$1;
(statearr_29187_29218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (14))){
var state_29166__$1 = state_29166;
var statearr_29188_29219 = state_29166__$1;
(statearr_29188_29219[(2)] = null);

(statearr_29188_29219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (16))){
var inst_29152 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29189_29220 = state_29166__$1;
(statearr_29189_29220[(2)] = inst_29152);

(statearr_29189_29220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (10))){
var inst_29137 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29190_29221 = state_29166__$1;
(statearr_29190_29221[(2)] = inst_29137);

(statearr_29190_29221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (18))){
var state_29166__$1 = state_29166;
var statearr_29191_29222 = state_29166__$1;
(statearr_29191_29222[(2)] = null);

(statearr_29191_29222[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (8))){
var state_29166__$1 = state_29166;
var statearr_29192_29223 = state_29166__$1;
(statearr_29192_29223[(2)] = null);

(statearr_29192_29223[(1)] = (10));


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
});})(c__25338__auto__,dump_loop))
;
return ((function (switch__24892__auto__,c__25338__auto__,dump_loop){
return (function() {
var shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto__ = null;
var shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto____0 = (function (){
var statearr_29196 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29196[(0)] = shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto__);

(statearr_29196[(1)] = (1));

return statearr_29196;
});
var shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto____1 = (function (state_29166){
while(true){
var ret_value__24894__auto__ = (function (){try{while(true){
var result__24895__auto__ = switch__24892__auto__(state_29166);
if(cljs.core.keyword_identical_QMARK_(result__24895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24895__auto__;
}
break;
}
}catch (e29197){if((e29197 instanceof Object)){
var ex__24896__auto__ = e29197;
var statearr_29198_29224 = state_29166;
(statearr_29198_29224[(5)] = ex__24896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29225 = state_29166;
state_29166 = G__29225;
continue;
} else {
return ret_value__24894__auto__;
}
break;
}
});
shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto__ = function(state_29166){
switch(arguments.length){
case 0:
return shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto____0.call(this);
case 1:
return shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto____1.call(this,state_29166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto____0;
shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto____1;
return shadow$devtools$browser$dump_transmitter_$_state_machine__24893__auto__;
})()
;})(switch__24892__auto__,c__25338__auto__,dump_loop))
})();
var state__25340__auto__ = (function (){var statearr_29199 = (f__25339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25339__auto__.cljs$core$IFn$_invoke$arity$0() : f__25339__auto__.call(null));
(statearr_29199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25338__auto__);

return statearr_29199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25340__auto__);
});})(c__25338__auto__,dump_loop))
);

return c__25338__auto__;
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
var G__29226__delegate = function (args){
shadow.devtools.browser.socket_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","out","repl/out",-905715102),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args)], null));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(print_fn,args);
};
var G__29226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29227__i = 0, G__29227__a = new Array(arguments.length -  0);
while (G__29227__i < G__29227__a.length) {G__29227__a[G__29227__i] = arguments[G__29227__i + 0]; ++G__29227__i;}
  args = new cljs.core.IndexedSeq(G__29227__a,0);
} 
return G__29226__delegate.call(this,args);};
G__29226.cljs$lang$maxFixedArity = 0;
G__29226.cljs$lang$applyTo = (function (arglist__29228){
var args = cljs.core.seq(arglist__29228);
return G__29226__delegate(args);
});
G__29226.cljs$core$IFn$_invoke$arity$variadic = G__29226__delegate;
return G__29226;
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
var temp__4657__auto___29229 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_socket_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_socket_STAR_));
if(cljs.core.truth_(temp__4657__auto___29229)){
var s_29230 = temp__4657__auto___29229;
console.log("DEVTOOLS: connection reset!");

s_29230.onclose = ((function (s_29230,temp__4657__auto___29229){
return (function (e){
return null;
});})(s_29230,temp__4657__auto___29229))
;

s_29230.close();
} else {
}

shadow.devtools.browser.repl_connect();
} else {
}
//# sourceMappingURL=browser.js.map?r=0.36084405178175993