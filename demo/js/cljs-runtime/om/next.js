goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = (function (){var G__25065 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25065) : cljs.core.atom.call(null,G__25065));
})();
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
om.next.node__GT_key = (function om$next$node__GT_key(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
if(cljs.core.seq_QMARK_(node)){
var node_SINGLEQUOTE_ = cljs.core.first(node);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
return cljs.core.ffirst(node_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;

}
}
});
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper((function (p1__25075_SHARP_){
return (cljs.core.vector_QMARK_(p1__25075_SHARP_)) || (cljs.core.map_QMARK_(p1__25075_SHARP_)) || (cljs.core.seq_QMARK_(p1__25075_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__25083 = clojure.zip.right(loc__$1);
loc__$1 = G__25083;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(node){
var node__$1 = (function (){var G__25086 = node;
if(cljs.core.seq_QMARK_(node)){
return cljs.core.first(G__25086);
} else {
return G__25086;
}
})();
return (cljs.core.map_QMARK_(node__$1)) && (cljs.core.map_QMARK_(cljs.core.second(cljs.core.first(node__$1))));
});
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__25108 = clojure.zip.down(loc);
var G__25109 = path__$1;
loc = G__25108;
path__$1 = G__25109;
continue;
} else {
var vec__25104 = path__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25104,(0),null);
var ks = cljs.core.nthnext(vec__25104,(1));
var k_SINGLEQUOTE_ = om.next.node__GT_key(node);
if(cljs.core.keyword_identical_QMARK_(k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_(node)){
var loc_SINGLEQUOTE_ = om.next.move_to_key(loc,k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__25113 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(om.next.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__25114 = cljs.core.next(ks);
loc = G__25113;
path__$1 = G__25114;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__25115 = loc_SINGLEQUOTE_;
var G__25116 = ks;
loc = G__25115;
path__$1 = G__25116;
continue;
}
} else {
var G__25117 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__25118 = ks;
loc = G__25117;
path__$1 = G__25118;
continue;
}
} else {
var G__25119 = clojure.zip.right(loc);
var G__25120 = path__$1;
loc = G__25119;
path__$1 = G__25120;
continue;
}
}
}
break;
}
});
return query_template_STAR_(om.next.query_zip(query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
om.next.join_key = (function om$next$join_key(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
if(cljs.core.seq_QMARK_(node)){
return om$next$join_key(cljs.core.first(node));
} else {
return node;

}
}
});
om.next.join_entry = (function om$next$join_entry(node){
if(cljs.core.seq_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
return cljs.core.first(node);
}
});
om.next.join_value = (function om$next$join_value(join){
return cljs.core.second(om.next.join_entry(join));
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});
om.next.focused_join = (function om$next$focused_join(node,ks){
if(cljs.core.map_QMARK_(node)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst(node),(function (){var G__25141 = cljs.core.second(cljs.core.first(node));
var G__25142 = ks;
return (om.next.focus_query.cljs$core$IFn$_invoke$arity$2 ? om.next.focus_query.cljs$core$IFn$_invoke$arity$2(G__25141,G__25142) : om.next.focus_query.call(null,G__25141,G__25142));
})()], true, false);
} else {
if(cljs.core.seq_QMARK_(node)){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(node)),om$next$focused_join(cljs.core.first(node),ks));
} else {
return node;

}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__25155 = path;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25155,(0),null);
var ks = cljs.core.nthnext(vec__25155,(1));
var match = ((function (vec__25155,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.next.join_key(x));
});})(vec__25155,k,ks))
;
var value = ((function (vec__25155,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join(x,ks);
});})(vec__25155,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k),ks)], true, false);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args25168 = [];
var len__19677__auto___25182 = arguments.length;
var i__19678__auto___25184 = (0);
while(true){
if((i__19678__auto___25184 < len__19677__auto___25182)){
args25168.push((arguments[i__19678__auto___25184]));

var G__25185 = (i__19678__auto___25184 + (1));
i__19678__auto___25184 = G__25185;
continue;
} else {
}
break;
}

var G__25171 = args25168.length;
switch (G__25171) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25168.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__18607__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,bound)) && ((cljs.core.count(path) < cljs.core.count(bound))));
if(and__18607__auto__){
var and__18607__auto____$1 = cljs.core.some(om.next.join_QMARK_,focus);
if(cljs.core.truth_(and__18607__auto____$1)){
return ((1) === cljs.core.count(focus));
} else {
return and__18607__auto____$1;
}
} else {
return and__18607__auto__;
}
})())){
var vec__25176 = om.next.join_entry(cljs.core.first(focus));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25176,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25176,(1),null);
var focus_SINGLEQUOTE___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__25201 = focus_SINGLEQUOTE___$1;
var G__25202 = bound;
var G__25203 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
focus = G__25201;
bound = G__25202;
path = G__25203;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ref for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__19274__auto__ = (((this$ == null))?null:this$);
var m__19275__auto__ = (om.next.ident[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__19275__auto__.call(null,this$,props));
} else {
var m__19275__auto____$1 = (om.next.ident["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__19275__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__19274__auto__ = (((this$ == null))?null:this$);
var m__19275__auto__ = (om.next.params[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto__.call(null,this$));
} else {
var m__19275__auto____$1 = (om.next.params["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__19274__auto__ = (((this$ == null))?null:this$);
var m__19275__auto__ = (om.next.query[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto__.call(null,this$));
} else {
var m__19275__auto____$1 = (om.next.query["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__19274__auto__ = (((this$ == null))?null:this$);
var m__19275__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__19275__auto__.call(null,this$,new_state));
} else {
var m__19275__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__19275__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__19274__auto__ = (((this$ == null))?null:this$);
var m__19275__auto__ = (om.next._get_state[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto__.call(null,this$));
} else {
var m__19275__auto____$1 = (om.next._get_state["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__19274__auto__ = (((this$ == null))?null:this$);
var m__19275__auto__ = (om.next._get_rendered_state[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto__.call(null,this$));
} else {
var m__19275__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__19274__auto__ = (((this$ == null))?null:this$);
var m__19275__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto__.call(null,this$));
} else {
var m__19275__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__19275__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__18607__auto__ = (x instanceof cljs.core.Symbol);
if(and__18607__auto__){
var G__25213 = [cljs.core.str(x)].join('');
var G__25214 = "?";
return goog.string.startsWith(G__25213,G__25214);
} else {
return and__18607__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(x)].join('').substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_(node))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,om.next.var__GT_keyword(node),node);
} else {
return node;
}
});
return clojure.walk.prewalk(replace_var,query);
});


om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__25221 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__25221__$1 = (((G__25221 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__25221));
var G__25221__$2 = (((G__25221__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__25221__$1));
var G__25221__$3 = (((G__25221__$2 == null))?null:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25221__$2) : cljs.core.deref.call(null,G__25221__$2)));
var G__25221__$4 = (((G__25221__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__25221__$3));
if((G__25221__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__25221__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data(component),om.next.query(component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data(component),om.next.params(component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data(c);
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(qps,om.next.query(c));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(c),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c'","c'",-167114389,null))], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(qps,om.next.params(c))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type(c)], null));
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = (function (){var G__25234 = x.prototype;
return Object.create(G__25234);
})();
if(!((x__$1 == null))){
if((false) || (x__$1.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return null;
}
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
return om.next.get_component_query(x);
} else {
var q = om.next.query(x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var y = (function (){var G__25249 = x.prototype;
return Object.create(G__25249);
})();
if(((!((y == null)))?(((false) || (y.om$next$IQuery$))?true:false):false)){
var q = om.next.query(y);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(y),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(y)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__19217__auto__,writer__19218__auto__,opt__19219__auto__){
return cljs.core._write(writer__19218__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props(null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4655__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4655__auto__)){
var rk = temp__4655__auto__;
return rk;
} else {
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args25262 = [];
var len__19677__auto___25289 = arguments.length;
var i__19678__auto___25290 = (0);
while(true){
if((i__19678__auto___25290 < len__19677__auto___25289)){
args25262.push((arguments[i__19678__auto___25290]));

var G__25291 = (i__19678__auto___25290 + (1));
i__19678__auto___25290 = G__25291;
continue;
} else {
}
break;
}

var G__25266 = args25262.length;
switch (G__25266) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25262.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__25267){
var map__25268 = p__25267;
var map__25268__$1 = ((((!((map__25268 == null)))?((((map__25268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25268):map__25268);
var opts = map__25268__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25268__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25268__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"class","class",-390430469,null))], 0)))].join('')));
}

return ((function (map__25268,map__25268__$1,opts,validator,keyfn){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"props","props",2093813254,null))], 0)))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
var G__25284 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om$next$self], null);
return (om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__25284) : om.next._STAR_instrument_STAR_.call(null,G__25284));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__25285 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__25285)].join('');
} else {
return G__25285;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__25286 = class$;
var G__25287 = {"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_};
var G__25288 = om.util.force_children(children);
return React.createElement(G__25286,G__25287,G__25288);
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__25298__i = 0, G__25298__a = new Array(arguments.length -  1);
while (G__25298__i < G__25298__a.length) {G__25298__a[G__25298__i] = arguments[G__25298__i + 1]; ++G__25298__i;}
  children = new cljs.core.IndexedSeq(G__25298__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__25299){
var props = cljs.core.first(arglist__25299);
var children = cljs.core.rest(arglist__25299);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__25268,map__25268__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
var G__25302 = c.props;
var G__25303 = k;
return goog.object.get(G__25302,G__25303);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_(x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_(x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_(x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
var G__25307 = c.props;
var G__25308 = k;
var G__25309 = v;
return goog.object.set(G__25307,G__25308,G__25309);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args25310 = [];
var len__19677__auto___25313 = arguments.length;
var i__19678__auto___25314 = (0);
while(true){
if((i__19678__auto___25314 < len__19677__auto___25313)){
args25310.push((arguments[i__19678__auto___25314]));

var G__25315 = (i__19678__auto___25314 + (1));
i__19678__auto___25314 = G__25315;
continue;
} else {
}
break;
}

var G__25312 = args25310.length;
switch (G__25312) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25310.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args25317 = [];
var len__19677__auto___25320 = arguments.length;
var i__19678__auto___25321 = (0);
while(true){
if((i__19678__auto___25321 < len__19677__auto___25320)){
args25317.push((arguments[i__19678__auto___25321]));

var G__25322 = (i__19678__auto___25321 + (1));
i__19678__auto___25321 = G__25322;
continue;
} else {
}
break;
}

var G__25319 = args25317.length;
switch (G__25319) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25317.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap(om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(prev_props),om.next.get_prev_props(cst)),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3(om.next.get_props(next_props),om.next.get_props(component.props),om.next.get_next_props(component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
var G__25326 = c.state;
var G__25327 = "omcljs$prev$value";
return goog.object.remove(G__25326,G__25327);
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(c.props),om.next.get_props(c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop(component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_(component)){
return om.next.get_prop(component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__18619__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop(c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args25341 = [];
var len__19677__auto___25368 = arguments.length;
var i__19678__auto___25369 = (0);
while(true){
if((i__19678__auto___25369 < len__19677__auto___25368)){
args25341.push((arguments[i__19678__auto___25369]));

var G__25371 = (i__19678__auto___25369 + (1));
i__19678__auto___25369 = G__25371;
continue;
} else {
}
break;
}

var G__25344 = args25341.length;
switch (G__25344) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25341.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))], 0)))].join('')));
}

var shared = (function (){var G__25350 = component.props;
var G__25351 = "omcljs$shared";
return goog.object.get(G__25350,G__25351);
})();
var ks = (function (){var G__25353 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__25353],null));
} else {
return G__25353;
}
})();
var G__25356 = shared;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__25356,ks);
} else {
return G__25356;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))], 0)))].join('')));
}

return om.next.get_prop(component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

var G__25396 = c.state;
var G__25397_25403 = G__25396;
var G__25398_25404 = "omcljs$next$value";
var G__25399_25405 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__25397_25403,G__25398_25404,G__25399_25405);

return G__25396;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))], 0)))].join('')));
}

return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(component.props),om.next.get_props(component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__25413 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__25413,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__25413;
}
} else {
var G__25416 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25416,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__25416;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args25419 = [];
var len__19677__auto___25424 = arguments.length;
var i__19678__auto___25425 = (0);
while(true){
if((i__19678__auto___25425 < len__19677__auto___25424)){
args25419.push((arguments[i__19678__auto___25425]));

var G__25426 = (i__19678__auto___25425 + (1));
i__19678__auto___25425 = G__25426;
continue;
} else {
}
break;
}

var G__25421 = args25419.length;
switch (G__25421) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25419.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__25422 = x;
if(om.next.component_QMARK_(x)){
return om.next.props(G__25422);
} else {
return G__25422;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__25423 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__25423],null));
} else {
return G__25423;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_(component,new_state);
} else {
var G__25442_25445 = component.state;
var G__25443_25446 = "omcljs$pendingState";
var G__25444_25447 = new_state;
goog.object.set(G__25442_25445,G__25443_25446,G__25444_25447);
}

var temp__4655__auto__ = om.next.get_reconciler(component);
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return (om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_render_BANG_.call(null,r));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args25451 = [];
var len__19677__auto___25459 = arguments.length;
var i__19678__auto___25460 = (0);
while(true){
if((i__19678__auto___25460 < len__19677__auto___25459)){
args25451.push((arguments[i__19678__auto___25460]));

var G__25462 = (i__19678__auto___25460 + (1));
i__19678__auto___25460 = G__25462;
continue;
} else {
}
break;
}

var G__25456 = args25451.length;
switch (G__25456) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25451.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))], 0)))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state(component):(function (){var temp__4657__auto__ = component.state;
if(cljs.core.truth_(temp__4657__auto__)){
var state = temp__4657__auto__;
var or__18619__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args25471 = [];
var len__19677__auto___25503 = arguments.length;
var i__19678__auto___25504 = (0);
while(true){
if((i__19678__auto___25504 < len__19677__auto___25503)){
args25471.push((arguments[i__19678__auto___25504]));

var G__25505 = (i__19678__auto___25504 + (1));
i__19678__auto___25504 = G__25505;
continue;
} else {
}
break;
}

var G__25481 = args25471.length;
switch (G__25481) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__19696__auto__ = (new cljs.core.IndexedSeq(args25471.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__19696__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__25484 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25484) : f.call(null,G__25484));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__25485 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__25486 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25485,G__25486) : f.call(null,G__25485,G__25486));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__25487 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__25488 = arg0;
var G__25489 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25487,G__25488,G__25489) : f.call(null,G__25487,G__25488,G__25489));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__25490 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__25491 = arg0;
var G__25492 = arg1;
var G__25493 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__25490,G__25491,G__25492,G__25493) : f.call(null,G__25490,G__25491,G__25492,G__25493));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__25494 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__25495 = arg0;
var G__25496 = arg1;
var G__25497 = arg2;
var G__25498 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__25494,G__25495,G__25496,G__25497,G__25498) : f.call(null,G__25494,G__25495,G__25496,G__25497,G__25498));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq25472){
var G__25473 = cljs.core.first(seq25472);
var seq25472__$1 = cljs.core.next(seq25472);
var G__25474 = cljs.core.first(seq25472__$1);
var seq25472__$2 = cljs.core.next(seq25472__$1);
var G__25475 = cljs.core.first(seq25472__$2);
var seq25472__$3 = cljs.core.next(seq25472__$2);
var G__25476 = cljs.core.first(seq25472__$3);
var seq25472__$4 = cljs.core.next(seq25472__$3);
var G__25477 = cljs.core.first(seq25472__$4);
var seq25472__$5 = cljs.core.next(seq25472__$4);
var G__25478 = cljs.core.first(seq25472__$5);
var seq25472__$6 = cljs.core.next(seq25472__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25473,G__25474,G__25475,G__25476,G__25477,G__25478,seq25472__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
return om.next._get_rendered_state(component);
} else {
var G__25520 = component;
var G__25520__$1 = (((G__25520 == null))?null:G__25520.state);
if((G__25520__$1 == null)){
return null;
} else {
return goog.object.get(G__25520__$1,"omcljs$state");
}
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__4657__auto__ = (function (){var G__25524 = c;
var G__25524__$1 = (((G__25524 == null))?null:G__25524.state);
if((G__25524__$1 == null)){
return null;
} else {
return goog.object.get(G__25524__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pending = temp__4657__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args25528 = [];
var len__19677__auto___25534 = arguments.length;
var i__19678__auto___25535 = (0);
while(true){
if((i__19678__auto___25535 < len__19677__auto___25534)){
args25528.push((arguments[i__19678__auto___25535]));

var G__25536 = (i__19678__auto___25535 + (1));
i__19678__auto___25535 = G__25536;
continue;
} else {
}
break;
}

var G__25533 = args25528.length;
switch (G__25533) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25528.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))], 0)))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;





om.next.gather_sends = (function om$next$gather_sends(p__25541,q,remotes){
var map__25548 = p__25541;
var map__25548__$1 = ((((!((map__25548 == null)))?((((map__25548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25548):map__25548);
var env = map__25548__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25548__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__25548,map__25548__$1,env,parser){
return (function (p1__25540_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__25540_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__25540_SHARP_) : parser.call(null,env,q,p1__25540_SHARP_))],null));
});})(map__25548,map__25548__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__25548,map__25548__$1,env,parser){
return (function (p__25552){
var vec__25553 = p__25552;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25553,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25553,(1),null);
return (cljs.core.count(v) > (0));
});})(map__25548,map__25548__$1,env,parser))
)),remotes);
});
om.next.transform_reads = (function om$next$transform_reads(r,tx){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25591 = cljs.core.first(q);
var G__25592 = target;
return (om.next.force.cljs$core$IFn$_invoke$arity$2 ? om.next.force.cljs$core$IFn$_invoke$arity$2(G__25591,G__25592) : om.next.force.call(null,G__25591,G__25592));
})()], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx__$1,(function (){var G__25595 = c;
var G__25596 = with_target(target,om.next.focus_query(om.next.get_query(c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
return (om.next.full_query.cljs$core$IFn$_invoke$arity$2 ? om.next.full_query.cljs$core$IFn$_invoke$arity$2(G__25595,G__25596) : om.next.full_query.call(null,G__25595,G__25596));
})());
});
var exprs = cljs.core.seq(tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var ast = om.next.impl.parser.expr__GT_ast(expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var G__25600 = cljs.core.next(exprs);
var G__25601 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt){
return (function (p1__25554_SHARP_,p2__25555_SHARP_){
return add_focused_query(key,tgt,p1__25554_SHARP_,p2__25555_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt))
,tx_SINGLEQUOTE_,(om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2 ? om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2(r,key) : om.next.ref__GT_components.call(null,r,key)));
exprs = G__25600;
tx_SINGLEQUOTE_ = G__25601;
continue;
} else {
var G__25602 = cljs.core.next(exprs);
var G__25603 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_SINGLEQUOTE_,expr);
exprs = G__25602;
tx_SINGLEQUOTE_ = G__25603;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args25604 = [];
var len__19677__auto___25638 = arguments.length;
var i__19678__auto___25639 = (0);
while(true){
if((i__19678__auto___25639 < len__19677__auto___25638)){
args25604.push((arguments[i__19678__auto___25639]));

var G__25640 = (i__19678__auto___25639 + (1));
i__19678__auto___25639 = G__25640;
continue;
} else {
}
break;
}

var G__25607 = args25604.length;
switch (G__25607) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25604.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3(x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__25608,reads){
var map__25609 = p__25608;
var map__25609__$1 = ((((!((map__25609 == null)))?((((map__25609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25609):map__25609);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25609__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25609__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__18619__auto__ = (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return om.next.component_QMARK_(x);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"params","params",-1943919534,null))),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"query","query",352022017,null))))], 0)))].join('')));
}

if(((reads == null)) || (cljs.core.vector_QMARK_(reads))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"reads","reads",425464166,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"reads","reads",425464166,null)))], 0)))].join('')));
}

var r = ((om.next.component_QMARK_(x))?om.next.get_reconciler(x):x);
var c = ((om.next.component_QMARK_(x))?x:null);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1((function (){var G__25613 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25613) : cljs.core.deref.call(null,G__25613));
})());
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));
var temp__4657__auto___25650 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto___25650)){
var l_25651 = temp__4657__auto___25650;
var G__25619_25652 = l_25651;
var G__25620_25653 = [cljs.core.str((function (){var temp__4657__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ref = temp__4657__auto____$1;
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref], 0))),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
goog.log.info(G__25619_25652,G__25620_25653);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__18619__auto__ = c;
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)], 0))], 0));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_(r,reads);
}

om.next.protocols.reindex_BANG_(r);

var rootq_25670 = ((!((c == null)))?(om.next.full_query.cljs$core$IFn$_invoke$arity$1 ? om.next.full_query.cljs$core$IFn$_invoke$arity$1(c) : om.next.full_query.call(null,c)):(((reads == null))?om.next.get_query(root):null));
var sends_25671 = om.next.gather_sends((om.next.to_env.cljs$core$IFn$_invoke$arity$1 ? om.next.to_env.cljs$core$IFn$_invoke$arity$1(cfg) : om.next.to_env.call(null,cfg)),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__18619__auto__ = rootq_25670;
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads(r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_(sends_25671)){
} else {
om.next.protocols.queue_sends_BANG_(r,sends_25671);

(om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_sends_BANG_.call(null,r));
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args25677 = [];
var len__19677__auto___25713 = arguments.length;
var i__19678__auto___25714 = (0);
while(true){
if((i__19678__auto___25714 < len__19677__auto___25713)){
args25677.push((arguments[i__19678__auto___25714]));

var G__25716 = (i__19678__auto___25714 + (1));
i__19678__auto___25714 = G__25716;
continue;
} else {
}
break;
}

var G__25688 = args25677.length;
switch (G__25688) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__19696__auto__ = (new cljs.core.IndexedSeq(args25677.slice((6)),(0)));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__19696__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__25692 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query(component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params(component)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25692) : f.call(null,G__25692));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__25693 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query(component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params(component)], null);
var G__25694 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25693,G__25694) : f.call(null,G__25693,G__25694));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__25695 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query(component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params(component)], null);
var G__25696 = arg0;
var G__25697 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25695,G__25696,G__25697) : f.call(null,G__25695,G__25696,G__25697));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__25698 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query(component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params(component)], null);
var G__25699 = arg0;
var G__25700 = arg1;
var G__25701 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__25698,G__25699,G__25700,G__25701) : f.call(null,G__25698,G__25699,G__25700,G__25701));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.next.set_query_BANG_,component,(function (){var G__25703 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query(component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params(component)], null);
var G__25704 = arg0;
var G__25705 = arg1;
var G__25706 = arg2;
var G__25707 = arg3;
var G__25708 = arg_rest;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__25703,G__25704,G__25705,G__25706,G__25707,G__25708) : f.call(null,G__25703,G__25704,G__25705,G__25706,G__25707,G__25708));
})());
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq25678){
var G__25679 = cljs.core.first(seq25678);
var seq25678__$1 = cljs.core.next(seq25678);
var G__25680 = cljs.core.first(seq25678__$1);
var seq25678__$2 = cljs.core.next(seq25678__$1);
var G__25681 = cljs.core.first(seq25678__$2);
var seq25678__$3 = cljs.core.next(seq25678__$2);
var G__25682 = cljs.core.first(seq25678__$3);
var seq25678__$4 = cljs.core.next(seq25678__$3);
var G__25683 = cljs.core.first(seq25678__$4);
var seq25678__$5 = cljs.core.next(seq25678__$4);
var G__25684 = cljs.core.first(seq25678__$5);
var seq25678__$6 = cljs.core.next(seq25678__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25679,G__25680,G__25681,G__25682,G__25683,G__25684,seq25678__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_(x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__25769 = component.refs;
if((G__25769 == null)){
return null;
} else {
return goog.object.get(G__25769,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

om.next.update_props_BANG_(c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args25798 = [];
var len__19677__auto___25824 = arguments.length;
var i__19678__auto___25825 = (0);
while(true){
if((i__19678__auto___25825 < len__19677__auto___25824)){
args25798.push((arguments[i__19678__auto___25825]));

var G__25827 = (i__19678__auto___25825 + (1));
i__19678__auto___25825 = G__25827;
continue;
} else {
}
break;
}

var G__25808 = args25798.length;
switch (G__25808) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25798.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_(c)], null)], null);

var c__$1 = c;
var ret = cljs.core._conj(cljs.core.List.EMPTY,cljs.core.type(c__$1));
while(true){
var temp__4655__auto__ = om.next.parent(c__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(om.next.iquery_QMARK_(p)){
var G__25835 = p;
var G__25836 = cljs.core.cons(cljs.core.type(p),ret);
c__$1 = G__25835;
ret = G__25836;
continue;
} else {
var G__25837 = p;
var G__25838 = ret;
c__$1 = G__25837;
ret = G__25838;
continue;
}
} else {
var seen = (function (){var G__25830 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25830) : cljs.core.atom.call(null,G__25830));
})();
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (c__$1,ret,seen,temp__4655__auto__){
return (function (x){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen) : cljs.core.deref.call(null,seen)),x)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4655__auto__))
,ret);
}
break;
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"subquery-class","subquery-class",-917164088,null))], 0)))].join('')));
}

var ref = (function (){var G__25865 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__25865)].join('');
} else {
return G__25865;
}
})();
if((om.next.component_QMARK_(x)) && (om.next.mounted_QMARK_(x))){
return om.next.get_query(om.next.react_ref(x,ref));
} else {
return om.next.get_query(subquery_class);
}
});
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))], 0)))].join('')));
}

return om.next.ident(component,om.next.props(component));
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t(reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_(reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_(reconciler);
});
if(cljs.core.fn_QMARK_(om.next._STAR_raf_STAR_)){
return (om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : om.next._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_(reconciler))){
var G__25933 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__25934 = (0);
return setTimeout(G__25933,G__25934);
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args25939 = [];
var len__19677__auto___25972 = arguments.length;
var i__19678__auto___25973 = (0);
while(true){
if((i__19678__auto___25973 < len__19677__auto___25972)){
args25939.push((arguments[i__19678__auto___25973]));

var G__25975 = (i__19678__auto___25973 + (1));
i__19678__auto___25973 = G__25975;
continue;
} else {
}
break;
}

var G__25963 = args25939.length;
switch (G__25963) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25939.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))], 0)))].join('')));
}

var temp__4657__auto___25999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.next.roots) : cljs.core.deref.call(null,om.next.roots)),target);
if(cljs.core.truth_(temp__4657__auto___25999)){
var old_reconciler_26004 = temp__4657__auto___25999;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_26004,target) : om.next.remove_root_BANG_.call(null,old_reconciler_26004,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_(reconciler,target);
});
/**
 * Create an Om Next root without an actual DOM target. Useful in devcards
 * testing context.
 */
om.next.mock_root = (function om$next$mock_root(reconciler,root_class){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))], 0)))].join('')));
}

return om.next.protocols.add_root_BANG_(reconciler,root_class,null,null);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__19274__auto__ = (((c == null))?null:c);
var m__19275__auto__ = (om.next.tx_intercept[goog.typeOf(x__19274__auto__)]);
if(!((m__19275__auto__ == null))){
return (m__19275__auto__.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__19275__auto__.call(null,c,tx));
} else {
var m__19275__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__19275__auto____$1 == null))){
return (m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__19275__auto____$1.cljs$core$IFn$_invoke$arity$2(c,tx) : m__19275__auto____$1.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__18607__auto__ = c;
if(cljs.core.truth_(and__18607__auto__)){
var and__18607__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__18607__auto____$1){
return cljs.core.not(ref);
} else {
return and__18607__auto____$1;
}
} else {
return and__18607__auto__;
}
})())?om.next.ident(c,om.next.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null)], 0));
var id = cljs.core.random_uuid();
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,(function (){var G__26111 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26111) : cljs.core.deref.call(null,G__26111));
})());
var ___$1 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto__)){
var l = temp__4657__auto__;
var G__26114 = l;
var G__26115 = [cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref__$1], 0))),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
return goog.log.info(G__26114,G__26115);
} else {
return null;
}
})();
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends(env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__26119 = cljs.core.PersistentVector.EMPTY;
var G__26119__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26119,c):G__26119);
if(!((ref__$1 == null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26119__$1,ref__$1);
} else {
return G__26119__$1;
}
})();
om.next.protocols.queue_BANG_(r,cljs.core.into.cljs$core$IFn$_invoke$arity$3(q,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_(r,snds);

return om.next.schedule_sends_BANG_(r);
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args26132 = [];
var len__19677__auto___26144 = arguments.length;
var i__19678__auto___26145 = (0);
while(true){
if((i__19678__auto___26145 < len__19677__auto___26144)){
args26132.push((arguments[i__19678__auto___26145]));

var G__26146 = (i__19678__auto___26145 + (1));
i__19678__auto___26145 = G__26146;
continue;
} else {
}
break;
}

var G__26135 = args26132.length;
switch (G__26135) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26132.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__18619__auto__ = om.next.component_QMARK_(x);
if(or__18619__auto__){
return or__18619__auto__;
} else {
return (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null))], 0)))].join('')));
}

if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx);
} else {
if(om.next.iquery_QMARK_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"iquery?","iquery?",951893833,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

var p = om.next.parent(x);
var x__$1 = x;
var tx__$1 = tx;
while(true){
if((p == null)){
var r = om.next.get_reconciler(x__$1);
return om.next.transact_STAR_(r,x__$1,null,om.next.transform_reads(r,tx__$1));
} else {
var vec__26137 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept(p,tx__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$1], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26137,(0),null);
var tx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26137,(1),null);
var G__26155 = om.next.parent(p);
var G__26156 = x_SINGLEQUOTE_;
var G__26157 = tx__$2;
p = G__26155;
x__$1 = G__26156;
tx__$1 = G__26157;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_(r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__26159){
var map__26163 = p__26159;
var map__26163__$1 = ((((!((map__26163 == null)))?((((map__26163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26163):map__26163);
var opts = map__26163__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], 0)))].join('')));
}

return om.next.impl.parser.parser(opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast(query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = (function (){var G__26181 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26181) : cljs.core.atom.call(null,G__26181));
})();
var class_path__GT_query = (function (){var G__26183 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26183) : cljs.core.atom.call(null,G__26183));
})();
var rootq = om.next.get_query(x);
var class$ = (function (){var G__26184 = x;
if(om.next.component_QMARK_(x)){
return cljs.core.type(G__26184);
} else {
return G__26184;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath){
var recursive_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__26281 = classpath;
if((!((class$__$1 == null))) && (cljs.core.not(recursive_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26281,class$__$1);
} else {
return G__26281;
}
})();
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([om.next.query_template(om.next.focus_query(rootq,path),path)], 0));
} else {
}

if(cljs.core.truth_(recursive_QMARK_)){
return null;
} else {
if(cljs.core.vector_QMARK_(query)){
var map__26284 = cljs.core.group_by(om.next.join_QMARK_,query);
var map__26284__$1 = ((((!((map__26284 == null)))?((((map__26284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26284):map__26284);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26284__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26284__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__26284,map__26284__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__26171_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__26171_SHARP_,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast),props),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([class$__$1], true)))], 0));
});})(map__26284,map__26284__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__26286 = cljs.core.seq(joins);
var chunk__26288 = null;
var count__26289 = (0);
var i__26290 = (0);
while(true){
if((i__26290 < count__26289)){
var join = chunk__26288.cljs$core$IIndexed$_nth$arity$2(null,i__26290);
var vec__26292_26358 = om.next.join_entry(join);
var prop_26359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26292_26358,(0),null);
var query_SINGLEQUOTE__26360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26292_26358,(1),null);
var query_SINGLEQUOTE__26361__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE__26360))?query:query_SINGLEQUOTE__26360);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__26286,chunk__26288,count__26289,i__26290,vec__26292_26358,prop_26359,query_SINGLEQUOTE__26360,query_SINGLEQUOTE__26361__$1,join,map__26284,map__26284__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__26172_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__26172_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_26359,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__26286,chunk__26288,count__26289,i__26290,vec__26292_26358,prop_26359,query_SINGLEQUOTE__26360,query_SINGLEQUOTE__26361__$1,join,map__26284,map__26284__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__26369 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__26361__$1));
om$next$build_index_STAR_(class_SINGLEQUOTE__26369,query_SINGLEQUOTE__26361__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_26359),classpath__$1);

var G__26372 = seq__26286;
var G__26373 = chunk__26288;
var G__26374 = count__26289;
var G__26375 = (i__26290 + (1));
seq__26286 = G__26372;
chunk__26288 = G__26373;
count__26289 = G__26374;
i__26290 = G__26375;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26286);
if(temp__4657__auto__){
var seq__26286__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26286__$1)){
var c__19422__auto__ = cljs.core.chunk_first(seq__26286__$1);
var G__26379 = cljs.core.chunk_rest(seq__26286__$1);
var G__26380 = c__19422__auto__;
var G__26381 = cljs.core.count(c__19422__auto__);
var G__26382 = (0);
seq__26286 = G__26379;
chunk__26288 = G__26380;
count__26289 = G__26381;
i__26290 = G__26382;
continue;
} else {
var join = cljs.core.first(seq__26286__$1);
var vec__26295_26383 = om.next.join_entry(join);
var prop_26384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26295_26383,(0),null);
var query_SINGLEQUOTE__26385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26295_26383,(1),null);
var query_SINGLEQUOTE__26386__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE__26385))?query:query_SINGLEQUOTE__26385);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__26286,chunk__26288,count__26289,i__26290,vec__26295_26383,prop_26384,query_SINGLEQUOTE__26385,query_SINGLEQUOTE__26386__$1,join,seq__26286__$1,temp__4657__auto__,map__26284,map__26284__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__26172_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__26172_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_26384,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__26286,chunk__26288,count__26289,i__26290,vec__26295_26383,prop_26384,query_SINGLEQUOTE__26385,query_SINGLEQUOTE__26386__$1,join,seq__26286__$1,temp__4657__auto__,map__26284,map__26284__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__26397 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__26386__$1));
om$next$build_index_STAR_(class_SINGLEQUOTE__26397,query_SINGLEQUOTE__26386__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_26384),classpath__$1);

var G__26399 = cljs.core.next(seq__26286__$1);
var G__26400 = null;
var G__26401 = (0);
var G__26402 = (0);
seq__26286 = G__26399;
chunk__26288 = G__26400;
count__26289 = G__26401;
i__26290 = G__26402;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(query)){
var seq__26297 = cljs.core.seq(query);
var chunk__26298 = null;
var count__26299 = (0);
var i__26300 = (0);
while(true){
if((i__26300 < count__26299)){
var vec__26302 = chunk__26298.cljs$core$IIndexed$_nth$arity$2(null,i__26300);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(1),null);
var class_SINGLEQUOTE__26407 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
om$next$build_index_STAR_(class_SINGLEQUOTE__26407,query_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop),classpath__$1);

var G__26408 = seq__26297;
var G__26410 = chunk__26298;
var G__26411 = count__26299;
var G__26412 = (i__26300 + (1));
seq__26297 = G__26408;
chunk__26298 = G__26410;
count__26299 = G__26411;
i__26300 = G__26412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26297);
if(temp__4657__auto__){
var seq__26297__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26297__$1)){
var c__19422__auto__ = cljs.core.chunk_first(seq__26297__$1);
var G__26413 = cljs.core.chunk_rest(seq__26297__$1);
var G__26414 = c__19422__auto__;
var G__26415 = cljs.core.count(c__19422__auto__);
var G__26416 = (0);
seq__26297 = G__26413;
chunk__26298 = G__26414;
count__26299 = G__26415;
i__26300 = G__26416;
continue;
} else {
var vec__26303 = cljs.core.first(seq__26297__$1);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26303,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26303,(1),null);
var class_SINGLEQUOTE__26419 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
om$next$build_index_STAR_(class_SINGLEQUOTE__26419,query_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop),classpath__$1);

var G__26421 = cljs.core.next(seq__26297__$1);
var G__26422 = null;
var G__26423 = (0);
var G__26424 = (0);
seq__26297 = G__26421;
chunk__26298 = G__26422;
count__26299 = G__26423;
i__26300 = G__26424;
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
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_(class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prop__GT_classes) : cljs.core.deref.call(null,prop__GT_classes)),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query))], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ref = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(!((ref == null))){
var G__26307 = indexes__$2;
if(cljs.core.truth_(ref)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__26307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__26307;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type(c)], null),cljs.core.disj,c);
var ref = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(!((ref == null))){
var G__26311 = indexes__$2;
if(cljs.core.truth_(ref)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__26311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.disj,c);
} else {
return G__26311;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
if(om.next.component_QMARK_(k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cs__$1,cs,indexes__$1,___$1){
return (function (p1__26173_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__26173_SHARP_], null));
});})(cs__$1,cs,indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19233__auto__,k__19234__auto__){
var self__ = this;
var this__19233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__19233__auto____$1,k__19234__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19235__auto__,k26175,else__19236__auto__){
var self__ = this;
var this__19235__auto____$1 = this;
var G__26315 = (((k26175 instanceof cljs.core.Keyword))?k26175.fqn:null);
switch (G__26315) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26175,else__19236__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19247__auto__,writer__19248__auto__,opts__19249__auto__){
var self__ = this;
var this__19247__auto____$1 = this;
var pr_pair__19250__auto__ = ((function (this__19247__auto____$1){
return (function (keyval__19251__auto__){
return cljs.core.pr_sequential_writer(writer__19248__auto__,cljs.core.pr_writer,""," ","",opts__19249__auto__,keyval__19251__auto__);
});})(this__19247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__19248__auto__,pr_pair__19250__auto__,"#om.next.Indexer{",", ","}",opts__19249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26174){
var self__ = this;
var G__26174__$1 = this;
return (new cljs.core.RecordIter((0),G__26174__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19231__auto__){
var self__ = this;
var this__19231__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19227__auto__){
var self__ = this;
var this__19227__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19237__auto__){
var self__ = this;
var this__19237__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19228__auto__){
var self__ = this;
var this__19228__auto____$1 = this;
var h__19054__auto__ = self__.__hash;
if(!((h__19054__auto__ == null))){
return h__19054__auto__;
} else {
var h__19054__auto____$1 = cljs.core.hash_imap(this__19228__auto____$1);
self__.__hash = h__19054__auto____$1;

return h__19054__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19229__auto__,other__19230__auto__){
var self__ = this;
var this__19229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18607__auto__ = other__19230__auto__;
if(cljs.core.truth_(and__18607__auto__)){
var and__18607__auto____$1 = (this__19229__auto____$1.constructor === other__19230__auto__.constructor);
if(and__18607__auto____$1){
return cljs.core.equiv_map(this__19229__auto____$1,other__19230__auto__);
} else {
return and__18607__auto____$1;
}
} else {
return and__18607__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19242__auto__,k__19243__auto__){
var self__ = this;
var this__19242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__19243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__19242__auto____$1),self__.__meta),k__19243__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__19243__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19240__auto__,k__19241__auto__,G__26174){
var self__ = this;
var this__19240__auto____$1 = this;
var pred__26318 = cljs.core.keyword_identical_QMARK_;
var expr__26319 = k__19241__auto__;
if(cljs.core.truth_((pred__26318.cljs$core$IFn$_invoke$arity$2 ? pred__26318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__26319) : pred__26318.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__26319)))){
return (new om.next.Indexer(G__26174,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__19241__auto__,G__26174),null));
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19245__auto__){
var self__ = this;
var this__19245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19232__auto__,G__26174){
var self__ = this;
var this__19232__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,G__26174,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19238__auto__,entry__19239__auto__){
var self__ = this;
var this__19238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__19239__auto__)){
return cljs.core._assoc(this__19238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__19239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__19239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__19238__auto____$1,entry__19239__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__19267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__19267__auto__,writer__19268__auto__){
return cljs.core._write(writer__19268__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes){
return (new om.next.Indexer(indexes,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__26177){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__26177),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26177,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(){
return (new om.next.Indexer((function (){var G__26517 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26517) : cljs.core.atom.call(null,G__26517));
})(),null,null,null));
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))], 0)))].join('')));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return om.next.protocols.key__GT_components(indexer,ref);
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(om.next.protocols.key__GT_components(indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
var cp = ((om.next.component_QMARK_(y))?om.next.class_path(y):y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.zip.root),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args26543 = [];
var len__19677__auto___26586 = arguments.length;
var i__19678__auto___26588 = (0);
while(true){
if((i__19678__auto___26588 < len__19677__auto___26586)){
args26543.push((arguments[i__19678__auto___26588]));

var G__26592 = (i__19678__auto___26588 + (1));
i__19678__auto___26588 = G__26592;
continue;
} else {
}
break;
}

var G__26548 = args26543.length;
switch (G__26548) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26543.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_(component)){
if((om.next.path(component) == null)){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26572 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26572) : cljs.core.deref.call(null,G__26572));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path(component)], null))),om.next.get_query(component));
} else {
return om.next.full_query.cljs$core$IFn$_invoke$arity$2(component,om.next.get_query(component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_(component)){
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(component));
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26578 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26578) : cljs.core.deref.call(null,G__26578));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__26541_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__26541_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace(q,query);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if((class$ == null)){
return null;
} else {
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))){
var G__26613 = class$.prototype;
return Object.create(G__26613);
} else {
return class$;
}
}
});
/**
 * Returns true if x is an ident.
 */
om.next.ident_QMARK_ = (function om$next$ident_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (((2) === cljs.core.count(x))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) instanceof cljs.core.Keyword));
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,errs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = om.next.to_class(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query)));
var ref = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident(class$,data):null);
if(!((ref == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(om$next$normalize_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ref)),data,refs,errs),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first(ref));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data)){
return data;
} else {
var q = cljs.core.seq(query);
var ret = data;
while(true){
if(!((q == null))){
var node = cljs.core.first(q);
if(om.next.join_QMARK_(node)){
var vec__26640 = om.next.join_entry(node);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26640,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26640,(1),null);
var recursive_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),sel);
var sel__$1 = ((recursive_QMARK_)?query:sel);
var class$ = om.next.to_class(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1)));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((recursive_QMARK_) && (om.next.ident_QMARK_(v))){
var G__26647 = cljs.core.next(q);
var G__26648 = ret;
q = G__26647;
ret = G__26648;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = om$next$normalize_STAR_(sel__$1,v,refs,errs);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.array_seq([x], 0));

var G__26649 = cljs.core.next(q);
var G__26650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__26649;
ret = G__26650;
continue;
} else {
var G__26652 = cljs.core.next(q);
var G__26653 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__26652;
ret = G__26653;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node){
return (function (p1__26623_SHARP_){
return om$next$normalize_STAR_(sel__$1,p1__26623_SHARP_,refs,errs);
});})(q,ret,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node){
return (function (p1__26624_SHARP_){
return om.next.ident(class$,p1__26624_SHARP_);
});})(q,ret,xs,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(is)], null),((function (q,ret,is,xs,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node){
return (function (ys){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([ys,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,is),xs)], 0));
});})(q,ret,is,xs,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node){
return (function (ret__$1,p__26645){
var vec__26646 = p__26645;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26646,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26646,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__26640,k,sel,recursive_QMARK_,sel__$1,class$,v,node))
);
}

var G__26789 = cljs.core.next(q);
var G__26790 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__26789;
ret = G__26790;
continue;
} else {
var G__26793 = cljs.core.next(q);
var G__26794 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__26793;
ret = G__26794;
continue;
}
} else {
if((v == null)){
var G__26796 = cljs.core.next(q);
var G__26797 = ret;
q = G__26796;
ret = G__26797;
continue;
} else {
var G__26801 = cljs.core.next(q);
var G__26802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__26801;
ret = G__26802;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(node))?cljs.core.first(node):node);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__26809 = cljs.core.next(q);
var G__26810 = ret;
q = G__26809;
ret = G__26810;
continue;
} else {
var G__26814 = cljs.core.next(q);
var G__26815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__26814;
ret = G__26815;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args26822 = [];
var len__19677__auto___26846 = arguments.length;
var i__19678__auto___26847 = (0);
while(true){
if((i__19678__auto___26847 < len__19677__auto___26846)){
args26822.push((arguments[i__19678__auto___26847]));

var G__26849 = (i__19678__auto___26847 + (1));
i__19678__auto___26847 = G__26849;
continue;
} else {
}
break;
}

var G__26834 = args26822.length;
switch (G__26834) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26822.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = (function (){var G__26838 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26838) : cljs.core.atom.call(null,G__26838));
})();
var errs = (function (){var G__26840 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26840) : cljs.core.atom.call(null,G__26840));
})();
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:om.next.get_query(x));
var ret = om.next.normalize_STAR_(x__$1,data,refs,errs);
if(merge_idents){
var refs_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ret,refs_SINGLEQUOTE_], 0)),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta(ret,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs)));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_refs = (function om$next$sift_refs(res){
var map__26881 = cljs.core.group_by((function (p1__26872_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__26872_SHARP_));
}),res);
var map__26881__$1 = ((((!((map__26881 == null)))?((((map__26881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26881):map__26881);
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,refs),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args26908 = [];
var len__19677__auto___27077 = arguments.length;
var i__19678__auto___27078 = (0);
while(true){
if((i__19678__auto___27078 < len__19677__auto___27077)){
args26908.push((arguments[i__19678__auto___27078]));

var G__27081 = (i__19678__auto___27078 + (1));
i__19678__auto___27078 = G__27081;
continue;
} else {
}
break;
}

var G__26915 = args26908.length;
switch (G__26915) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26908.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$5(query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$5(query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$5 = (function (query,data,refs,map_ident,idents_seen){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"refs","refs",80480079,null))], 0)))].join('')));
}

var data__$1 = (function (){var G__26954 = data;
if(om.next.ident_QMARK_(data)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(G__26954) : map_ident.call(null,G__26954)));
} else {
return G__26954;
}
})();
if(cljs.core.vector_QMARK_(data__$1)){
var step = ((function (data__$1){
return (function (ident){
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query_SINGLEQUOTE_ = (function (){var G__26983 = query;
if(cljs.core.map_QMARK_(query)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__26983,cljs.core.first(ident));
} else {
return G__26983;
}
})();
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$5(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen);
});})(data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__27004 = cljs.core.group_by(((function (data__$1){
return (function (p1__26907_SHARP_){
var or__18619__auto__ = om.next.join_QMARK_(p1__26907_SHARP_);
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return om.next.ident_QMARK_(p1__26907_SHARP_);
}
});})(data__$1))
,query);
var map__27004__$1 = ((((!((map__27004 == null)))?((((map__27004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27004):map__27004);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,true);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__27048 = join;
if(om.next.ident_QMARK_(join)){
return cljs.core.PersistentHashMap.fromArrays([G__27048],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__27048;
}
})();
var vec__27047 = om.next.join_entry(join__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047,(1),null);
var recurse_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),sel);
var v = ((om.next.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__27051 = key;
if((om.next.ident_QMARK_(key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))){
return cljs.core.first(G__27051);
} else {
return G__27051;
}
})();
var v__$1 = ((om.next.ident_QMARK_(v))?(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v) : map_ident.call(null,v)):v);
var sel__$1 = ((recurse_QMARK_)?query:(((om.next.ident_QMARK_(key__$1)) && (om.next.union_QMARK_(join__$1)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):(((om.next.ident_QMARK_(v__$1)) && (om.next.union_QMARK_(join__$1)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1));
var idents_seen__$1 = (((om.next.ident_QMARK_(v__$1)) && (recurse_QMARK_))?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(graph_loop_QMARK_){
var G__27144 = cljs.core.next(joins__$1);
var G__27145 = ret;
joins__$1 = G__27144;
ret = G__27145;
continue;
} else {
if((v__$1 == null)){
var G__27146 = cljs.core.next(joins__$1);
var G__27147 = ret;
joins__$1 = G__27146;
ret = G__27147;
continue;
} else {
var G__27148 = cljs.core.next(joins__$1);
var G__27149 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$5(sel__$1,v__$1,refs,map_ident,idents_seen__$1));
joins__$1 = G__27148;
ret = G__27149;
continue;

}
}
} else {
var temp__4655__auto__ = cljs.core.some(((function (joins__$1,ret,map__27004,map__27004__$1,props,joins,data__$1){
return (function (p__27067){
var vec__27068 = p__27067;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27068,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27068,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__27004,map__27004__$1,props,joins,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__4655__auto__)){
var looped_key = temp__4655__auto__;
return looped_key;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(data__$1,props),ret], 0));
}
}
break;
}
}
}
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 5;
om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__27163){
var vec__27166 = p__27163;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27166,(0),null);
var orig_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27166,(1),null);
var to_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_move,vec__27166,k,orig_paths){
return (function (p1__27152_SHARP_,p2__27153_SHARP_){
return cljs.core.assoc_in(p1__27152_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__27153_SHARP_,k),to_move);
});})(to_move,vec__27166,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join__$1)) === true;
});
if(cljs.core.truth_(om.next.join_QMARK_(join))){
if(cljs.core.truth_(query_root_QMARK_(join))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__27168_SHARP_){
return om$next$move_roots(p1__27168_SHARP_,result_roots,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,om.next.join_key(join)));
}),cljs.core.array_seq([om.next.join_value(join)], 0));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_((function (){var and__18607__auto__ = om.next.join_QMARK_(expr);
if(cljs.core.truth_(and__18607__auto__)){
return !(om.next.union_QMARK_(expr));
} else {
return and__18607__auto__;
}
})())?(function (){var jk = om.next.join_key(expr);
var jv = om.next.join_value(expr);
var q = (function (){var or__18619__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q,new cljs.core.Symbol(null,"...","...",-1926939749,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(jv,new cljs.core.Symbol(null,"...","...",-1926939749,null))))?new cljs.core.Symbol(null,"...","...",-1926939749,null):om$next$merge_joins(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(q,jv))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"non-joins","non-joins",767010325)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"non-joins","non-joins",767010325),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,init,query);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"non-joins","non-joins",767010325).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (init,res){
return (function (p__27195){
var vec__27196 = p__27195;
var jkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27196,(0),null);
var jsel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27196,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots(expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_(roots)){
return retain(expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__27213){
var vec__27216 = p__27213;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27216,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27216,(1),null);
if(cljs.core.empty_QMARK_(path)){
return rewrites;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.join_key(expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(reroot,cljs.core.array_seq([query], 0));
var query__$1 = om.next.merge_joins(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs){
var map__27236 = config;
var map__27236__$1 = ((((!((map__27236 == null)))?((((map__27236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27236):map__27236);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27236__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27236__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var step = ((function (map__27236,map__27236__$1,merge_ident,indexer){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__27243){
var vec__27247 = p__27243;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c = om.next.ref__GT_any(indexer,ref);
var props_SINGLEQUOTE_ = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,(merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_)),refs__$1);
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ref,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ref,props));
}
});})(map__27236,map__27236__$1,merge_ident,indexer))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__27260 = om.next.sift_refs(res);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27260,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27260,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__18619__auto__ = query;
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1((function (){var G__27262 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27262) : cljs.core.deref.call(null,G__27262));
})());
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents(state,config,refs),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_(reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render. 
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args27269 = [];
var len__19677__auto___27297 = arguments.length;
var i__19678__auto___27298 = (0);
while(true){
if((i__19678__auto___27298 < len__19677__auto___27297)){
args27269.push((arguments[i__19678__auto___27298]));

var G__27299 = (i__19678__auto___27298 + (1));
i__19678__auto___27298 = G__27299;
continue;
} else {
}
break;
}

var G__27272 = args27269.length;
switch (G__27272) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27269.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__27275 = (function (){var G__27276 = reconciler;
var G__27277 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var G__27278 = delta;
var G__27279 = query;
return (merge.cljs$core$IFn$_invoke$arity$4 ? merge.cljs$core$IFn$_invoke$arity$4(G__27276,G__27277,G__27278,G__27279) : merge.call(null,G__27276,G__27277,G__27278,G__27279));
})();
var map__27275__$1 = ((((!((map__27275 == null)))?((((map__27275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27275):map__27275);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27275__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27275__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27275__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
om.next.protocols.queue_BANG_(reconciler,keys);

var G__27289 = state;
var G__27290 = (function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4655__auto__)){
var migrate = temp__4655__auto__;
var G__27292 = next;
var G__27293 = (function (){var or__18619__auto__ = query;
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return om.next.get_query(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1((function (){var G__27296 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27296) : cljs.core.deref.call(null,G__27296));
})()));
}
})();
var G__27294 = tempids;
var G__27295 = new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config);
return (migrate.cljs$core$IFn$_invoke$arity$4 ? migrate.cljs$core$IFn$_invoke$arity$4(G__27292,G__27293,G__27294,G__27295) : migrate.call(null,G__27292,G__27293,G__27294,G__27295));
} else {
return next;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27289,G__27290) : cljs.core.reset_BANG_.call(null,G__27289,G__27290));
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19233__auto__,k__19234__auto__){
var self__ = this;
var this__19233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__19233__auto____$1,k__19234__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19235__auto__,k27306,else__19236__auto__){
var self__ = this;
var this__19235__auto____$1 = this;
var G__27308 = (((k27306 instanceof cljs.core.Keyword))?k27306.fqn:null);
switch (G__27308) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27306,else__19236__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,cljs.core.array_seq([ks], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.array_seq([sends], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (res,query){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state));
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_(q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null),q)){
return null;
} else {
var cs = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (st,q,___$1){
return (function (p1__27302_SHARP_){
return om.next.protocols.key__GT_components(new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__27302_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__27303_SHARP_,p2__27304_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__27303_SHARP_,p2__27304_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__27309 = self__.config;
var map__27309__$1 = ((((!((map__27309 == null)))?((((map__27309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27309):map__27309);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27309__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env(self__.config);
var seq__27311 = cljs.core.seq(new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__27312 = null;
var count__27313 = (0);
var i__27314 = (0);
while(true){
if((i__27314 < count__27313)){
var c = chunk__27312.cljs$core$IIndexed$_nth$arity$2(null,i__27314);
if(om.next.mounted_QMARK_(c)){
var computed_27470 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_props_27471 = om.next.computed((ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c)),computed_27470);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_27471,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_27471 == null))){
om.next.update_component_BANG_(c,next_props_27471);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__27472 = seq__27311;
var G__27473 = chunk__27312;
var G__27474 = count__27313;
var G__27475 = (i__27314 + (1));
seq__27311 = G__27472;
chunk__27312 = G__27473;
count__27313 = G__27474;
i__27314 = G__27475;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__27311);
if(temp__4657__auto__){
var seq__27311__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27311__$1)){
var c__19422__auto__ = cljs.core.chunk_first(seq__27311__$1);
var G__27476 = cljs.core.chunk_rest(seq__27311__$1);
var G__27477 = c__19422__auto__;
var G__27478 = cljs.core.count(c__19422__auto__);
var G__27479 = (0);
seq__27311 = G__27476;
chunk__27312 = G__27477;
count__27313 = G__27478;
i__27314 = G__27479;
continue;
} else {
var c = cljs.core.first(seq__27311__$1);
if(om.next.mounted_QMARK_(c)){
var computed_27480 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_props_27481 = om.next.computed((ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c)),computed_27480);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_27481,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_27481 == null))){
om.next.update_component_BANG_(c,next_props_27481);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__27485 = cljs.core.next(seq__27311__$1);
var G__27486 = null;
var G__27487 = (0);
var G__27488 = (0);
seq__27311 = G__27485;
chunk__27312 = G__27486;
count__27313 = G__27487;
i__27314 = G__27488;
continue;
}
} else {
return null;
}
}
break;
}

}
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712)], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rctor = om.next.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = cljs.core.random_uuid();
if(om.next.iquery_QMARK_(root_class)){
om.next.protocols.index_root(new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__18607__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__18607__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))));
} else {
return and__18607__auto__;
}
})())){
var new_state_27510 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,(function (){var G__27323 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27323) : cljs.core.deref.call(null,G__27323));
})());
var refs_27511 = cljs.core.meta(new_state_27510);
var G__27325_27515 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config);
var G__27326_27516 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state_27510,refs_27511], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27325_27515,G__27326_27516) : cljs.core.reset_BANG_.call(null,G__27325_27515,G__27326_27516));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_27328 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_27329 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27330 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null)], 0));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)),target):((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(temp__4657__auto__)){
var c_SINGLEQUOTE_ = temp__4657__auto__;
if(om.next.mounted_QMARK_(c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c) : cljs.core.reset_BANG_.call(null,ret,c));
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27330;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27329;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27328;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query((function (){var or__18619__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_(sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sel","sel",-45623280,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"sel","sel",-45623280,null)))], 0)))].join('')));
}

if(!((sel == null))){
var env = om.next.to_env(self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_(v)){
return null;
} else {
return renderf(v);
}
} else {
return renderf((function (){var G__27336 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27336) : cljs.core.deref.call(null,G__27336));
})());
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__18619__auto__ = target;
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__27301_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27301_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__18619__auto__ = target;
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

return om.next.schedule_render_BANG_(this$__$1);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

var temp__4657__auto___27554 = om.next.get_query((function (){var or__18619__auto__ = (function (){var and__18607__auto__ = target;
if(cljs.core.truth_(and__18607__auto__)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return and__18607__auto__;
}
})();
if(cljs.core.truth_(or__18619__auto__)){
return or__18619__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4657__auto___27554)){
var sel_27574 = temp__4657__auto___27554;
var env_27584 = om.next.to_env(self__.config);
var snds_27585 = om.next.gather_sends(env_27584,sel_27574,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(snds_27585)){
} else {
var temp__4657__auto___27599__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4657__auto___27599__$1)){
var send_27600 = temp__4657__auto___27599__$1;
var G__27338_27601 = snds_27585;
var G__27339_27602 = ((function (G__27338_27601,send_27600,temp__4657__auto___27599__$1,env_27584,snds_27585,sel_27574,temp__4657__auto___27554,renderf,parsef,ret,rctor,guid,this$__$1){
return (function (res,query){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);

return renderf(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_27584,sel_27574));
});})(G__27338_27601,send_27600,temp__4657__auto___27599__$1,env_27584,snds_27585,sel_27574,temp__4657__auto___27554,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_27600.cljs$core$IFn$_invoke$arity$2 ? send_27600.cljs$core$IFn$_invoke$arity$2(G__27338_27601,G__27339_27602) : send_27600.call(null,G__27338_27601,G__27339_27602));
} else {
}
}
} else {
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_(root)){
return om.next.protocols.index_root(new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.truth_(temp__4657__auto__)){
var remove = temp__4657__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19247__auto__,writer__19248__auto__,opts__19249__auto__){
var self__ = this;
var this__19247__auto____$1 = this;
var pr_pair__19250__auto__ = ((function (this__19247__auto____$1){
return (function (keyval__19251__auto__){
return cljs.core.pr_sequential_writer(writer__19248__auto__,cljs.core.pr_writer,""," ","",opts__19249__auto__,keyval__19251__auto__);
});})(this__19247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__19248__auto__,pr_pair__19250__auto__,"#om.next.Reconciler{",", ","}",opts__19249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27305){
var self__ = this;
var G__27305__$1 = this;
return (new cljs.core.RecordIter((0),G__27305__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19231__auto__){
var self__ = this;
var this__19231__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19227__auto__){
var self__ = this;
var this__19227__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19237__auto__){
var self__ = this;
var this__19237__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19228__auto__){
var self__ = this;
var this__19228__auto____$1 = this;
var h__19054__auto__ = self__.__hash;
if(!((h__19054__auto__ == null))){
return h__19054__auto__;
} else {
var h__19054__auto____$1 = cljs.core.hash_imap(this__19228__auto____$1);
self__.__hash = h__19054__auto____$1;

return h__19054__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19229__auto__,other__19230__auto__){
var self__ = this;
var this__19229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18607__auto__ = other__19230__auto__;
if(cljs.core.truth_(and__18607__auto__)){
var and__18607__auto____$1 = (this__19229__auto____$1.constructor === other__19230__auto__.constructor);
if(and__18607__auto____$1){
return cljs.core.equiv_map(this__19229__auto____$1,other__19230__auto__);
} else {
return and__18607__auto____$1;
}
} else {
return and__18607__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19242__auto__,k__19243__auto__){
var self__ = this;
var this__19242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__19243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__19242__auto____$1),self__.__meta),k__19243__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__19243__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19240__auto__,k__19241__auto__,G__27305){
var self__ = this;
var this__19240__auto____$1 = this;
var pred__27346 = cljs.core.keyword_identical_QMARK_;
var expr__27347 = k__19241__auto__;
if(cljs.core.truth_((pred__27346.cljs$core$IFn$_invoke$arity$2 ? pred__27346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config","config",994861415),expr__27347) : pred__27346.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__27347)))){
return (new om.next.Reconciler(G__27305,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27346.cljs$core$IFn$_invoke$arity$2 ? pred__27346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__27347) : pred__27346.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__27347)))){
return (new om.next.Reconciler(self__.config,G__27305,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__19241__auto__,G__27305),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19245__auto__){
var self__ = this;
var this__19245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19232__auto__,G__27305){
var self__ = this;
var this__19232__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__27305,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19238__auto__,entry__19239__auto__){
var self__ = this;
var this__19238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__19239__auto__)){
return cljs.core._assoc(this__19238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__19239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__19239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__19238__auto____$1,entry__19239__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__27350 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27350) : cljs.core.deref.call(null,G__27350));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__19267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__19267__auto__,writer__19268__auto__){
return cljs.core._write(writer__19268__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__27307){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__27307),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__27307),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27307,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.array_seq([new cljs.core.Keyword(null,"state","state",-1988618099)], 0)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__27705,c){
var map__27715 = p__27705;
var map__27715__$1 = ((((!((map__27715 == null)))?((((map__27715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27715):map__27715);
var env = map__27715__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27715__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27715__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__18607__auto__ = pathopt;
if(and__18607__auto__){
var and__18607__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__18607__auto____$1){
return om.next.iquery_QMARK_(c);
} else {
return and__18607__auto____$1;
}
} else {
return and__18607__auto__;
}
})())?(function (){var id = om.next.ident(c,om.next.props(c));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27720 = env;
var G__27721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query(c)], true, false)], null);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__27720,G__27721) : parser.call(null,G__27720,G__27721));
})(),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.cljs$core$IFn$_invoke$arity$1(c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time();
var ui__$1 = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,fq) : parser.call(null,env,fq));
var e = cljs.core.system_time();
var temp__4657__auto___27724 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4657__auto___27724)){
var l_27725 = temp__4657__auto___27724;
var dt_27726 = (e - s);
if(((16) < dt_27726)){
var G__27722_27729 = l_27725;
var G__27723_27730 = [cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_27726),cljs.core.str(" msecs")].join('');
goog.log.warning(G__27722_27729,G__27723_27730);
} else {
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui__$1,om.next.path(c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0));
} else {
return b;
}
});
om.next.default_migrate = (function om$next$default_migrate(pure,query,tempids,id_key){
var dissoc_in = (function om$next$default_migrate_$_dissoc_in(pure__$1,p__27768){
var vec__27771 = p__27768;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure__$1,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure__$1,table),id));
});
var step = (function om$next$default_migrate_$_step(pure__$1,p__27773){
var vec__27778 = p__27773;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27778,(0),null);
var vec__27779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27778,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(1),null);
var new$ = vec__27779;
return cljs.core.assoc_in(dissoc_in(pure__$1,old),new$,(function (){var G__27782 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure__$1,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure__$1,new$)], 0));
if(!((id_key == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27782,id_key,id);
} else {
return G__27782;
}
})());
});
if(!(cljs.core.empty_QMARK_(tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,pure,tempids);
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return pure;
}
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__27795){
var map__27811 = p__27795;
var map__27811__$1 = ((((!((map__27811 == null)))?((((map__27811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27811):map__27811);
var config = map__27811__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__27811,map__27811__$1,config){
return (function (p1__27790_SHARP_,p2__27791_SHARP_){
return ReactDOM.render(p1__27790_SHARP_,p2__27791_SHARP_);
});})(map__27811,map__27811__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__27811,map__27811__$1,config,root_render,normalize,pathopt,instrument,id_key){
return (function (p1__27788_SHARP_,p2__27789_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__27788_SHARP_,p2__27789_SHARP_], 0));
});})(map__27811,map__27811__$1,config,root_render,normalize,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__27811,map__27811__$1,config,root_render,normalize,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__27792_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__27792_SHARP_);
});})(map__27811,map__27811__$1,config,root_render,normalize,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27811__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__27811,map__27811__$1,config,root_render,normalize,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__27811,map__27811__$1,config,root_render,normalize,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"config","config",-1659574354,null))], 0)))].join('')));
}

var idxr = (indexer.cljs$core$IFn$_invoke$arity$0 ? indexer.cljs$core$IFn$_invoke$arity$0() : indexer.call(null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.atom.call(null,state)));
var logger = ((cljs.core.contains_QMARK_(config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[pathopt,id_key,(function (){var G__27819 = instrument;
if(!((instrument == null))){
return ((function (G__27819,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__27811,map__27811__$1,config,root_render,normalize,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize){
return (function om$next$reconciler_$_G__27819(x){
var _STAR_instrument_STAR_27822 = om.next._STAR_instrument_STAR_;
om.next._STAR_instrument_STAR_ = null;

try{return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(x) : instrument.call(null,x));
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27822;
}});
;})(G__27819,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__27811,map__27811__$1,config,root_render,normalize,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize))
} else {
return G__27819;
}
})(),merge_ident,merge_sends,remotes,migrate,om.next.cache.cache(history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__18619__auto__ = !(norm_QMARK_);
if(or__18619__auto__){
return or__18619__auto__;
} else {
return normalize;
}
})()]),(function (){var G__27824 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27824) : cljs.core.atom.call(null,G__27824));
})(),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))], 0)))].join('')));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))], 0)))].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27844 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27844) : cljs.core.deref.call(null,G__27844));
})(),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))], 0)))].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27846 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27846) : cljs.core.deref.call(null,G__27846));
})(),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))], 0)))].join('')));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args27851 = [];
var len__19677__auto___27855 = arguments.length;
var i__19678__auto___27857 = (0);
while(true){
if((i__19678__auto___27857 < len__19677__auto___27855)){
args27851.push((arguments[i__19678__auto___27857]));

var G__27858 = (i__19678__auto___27857 + (1));
i__19678__auto___27857 = G__27858;
continue;
} else {
}
break;
}

var G__27853 = args27851.length;
switch (G__27853) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27851.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args27863 = [];
var len__19677__auto___27869 = arguments.length;
var i__19678__auto___27870 = (0);
while(true){
if((i__19678__auto___27870 < len__19677__auto___27869)){
args27863.push((arguments[i__19678__auto___27870]));

var G__27873 = (i__19678__auto___27870 + (1));
i__19678__auto___27870 = G__27873;
continue;
} else {
}
break;
}

var G__27868 = args27863.length;
switch (G__27868) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27863.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args27884 = [];
var len__19677__auto___27951 = arguments.length;
var i__19678__auto___27953 = (0);
while(true){
if((i__19678__auto___27953 < len__19677__auto___27951)){
args27884.push((arguments[i__19678__auto___27953]));

var G__27956 = (i__19678__auto___27953 + (1));
i__19678__auto___27953 = G__27956;
continue;
} else {
}
break;
}

var G__27919 = args27884.length;
switch (G__27919) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27884.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;
/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args27970 = [];
var len__19677__auto___27984 = arguments.length;
var i__19678__auto___27985 = (0);
while(true){
if((i__19678__auto___27985 < len__19677__auto___27984)){
args27970.push((arguments[i__19678__auto___27985]));

var G__27988 = (i__19678__auto___27985 + (1));
i__19678__auto___27985 = G__27988;
continue;
} else {
}
break;
}

var G__27978 = args27970.length;
switch (G__27978) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27970.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.cljs$core$IFn$_invoke$arity$2(expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,expr),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;
//# sourceMappingURL=next.js.map?r=0.6435223985844161