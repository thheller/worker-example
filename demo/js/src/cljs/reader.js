goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');

/**
 * @interface
 */
cljs.reader.PushbackReader = function(){};

/**
 * Returns the next char from the Reader,
 * nil if the end of stream has been reached
 */
cljs.reader.read_char = (function cljs$reader$read_char(reader){
if((!((reader == null))) && (!((reader.cljs$reader$PushbackReader$read_char$arity$1 == null)))){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__15384__auto__ = (((reader == null))?null:reader);
var m__15385__auto__ = (cljs.reader.read_char[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$1(reader) : m__15385__auto__.call(null,reader));
} else {
var m__15385__auto____$1 = (cljs.reader.read_char["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$1(reader) : m__15385__auto____$1.call(null,reader));
} else {
throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
}
});

/**
 * Push back a single character on to the stream
 */
cljs.reader.unread = (function cljs$reader$unread(reader,ch){
if((!((reader == null))) && (!((reader.cljs$reader$PushbackReader$unread$arity$2 == null)))){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__15384__auto__ = (((reader == null))?null:reader);
var m__15385__auto__ = (cljs.reader.unread[goog.typeOf(x__15384__auto__)]);
if(!((m__15385__auto__ == null))){
return (m__15385__auto__.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto__.cljs$core$IFn$_invoke$arity$2(reader,ch) : m__15385__auto__.call(null,reader,ch));
} else {
var m__15385__auto____$1 = (cljs.reader.unread["_"]);
if(!((m__15385__auto____$1 == null))){
return (m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__15385__auto____$1.cljs$core$IFn$_invoke$arity$2(reader,ch) : m__15385__auto____$1.call(null,reader,ch));
} else {
throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
}
});


/**
* @constructor
 * @implements {cljs.reader.PushbackReader}
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__15327__auto__,writer__15328__auto__,opt__15329__auto__){
return cljs.core._write(writer__15328__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function cljs$reader$__GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function cljs$reader$push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
 * Checks whether a given character is whitespace
 */
cljs.reader.whitespace_QMARK_ = (function cljs$reader$whitespace_QMARK_(ch){
var or__14729__auto__ = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return ("," === ch);
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.reader.numeric_QMARK_ = (function cljs$reader$numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
 * Checks whether the character begins a comment.
 */
cljs.reader.comment_prefix_QMARK_ = (function cljs$reader$comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.reader.number_literal_QMARK_ = (function cljs$reader$number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch);

return next_ch;
})())));
});
cljs.reader.read;

cljs.reader.macros;

cljs.reader.dispatch_macros;
cljs.reader.reader_error = (function cljs$reader$reader_error(var_args){
var args__15794__auto__ = [];
var len__15787__auto___16562 = arguments.length;
var i__15788__auto___16563 = (0);
while(true){
if((i__15788__auto___16563 < len__15787__auto___16562)){
args__15794__auto__.push((arguments[i__15788__auto___16563]));

var G__16564 = (i__15788__auto___16563 + (1));
i__15788__auto___16563 = G__16564;
continue;
} else {
}
break;
}

var argseq__15795__auto__ = ((((1) < args__15794__auto__.length))?(new cljs.core.IndexedSeq(args__15794__auto__.slice((1)),(0))):null);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15795__auto__);
});

cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
});

cljs.reader.reader_error.cljs$lang$maxFixedArity = (1);

cljs.reader.reader_error.cljs$lang$applyTo = (function (seq16560){
var G__16561 = cljs.core.first(seq16560);
var seq16560__$1 = cljs.core.next(seq16560);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__16561,seq16560__$1);
});
cljs.reader.macro_terminating_QMARK_ = (function cljs$reader$macro_terminating_QMARK_(ch){
var and__14717__auto__ = !((ch === "#"));
if(and__14717__auto__){
var and__14717__auto____$1 = !((ch === "'"));
if(and__14717__auto____$1){
var and__14717__auto____$2 = !((ch === ":"));
if(and__14717__auto____$2){
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));
} else {
return and__14717__auto____$2;
}
} else {
return and__14717__auto____$1;
}
} else {
return and__14717__auto__;
}
});
cljs.reader.read_token = (function cljs$reader$read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch))){
cljs.reader.unread(rdr,ch);

return sb.toString();
} else {
var G__16565 = (function (){
sb.append(ch);

return sb;
})()
;
var G__16566 = cljs.reader.read_char(rdr);
sb = G__16565;
ch = G__16566;
continue;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.reader.skip_line = (function cljs$reader$skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char(reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function cljs$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function cljs$reader$match_int(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),(function (){var G__16569 = (groups[(6)]);
var G__16570 = (10);
return parseInt(G__16569,G__16570);
})()]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = parseInt(n,radix);
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function cljs$reader$match_ratio(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return (parseInt(numinator,(10)) / parseInt(denominator,(10)));
});
cljs.reader.match_float = (function cljs$reader$match_float(s){
return parseFloat(s);
});
cljs.reader.match_number = (function cljs$reader$match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s))){
return cljs.reader.match_int(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s))){
return cljs.reader.match_float(s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function cljs$reader$escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function cljs$reader$read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function cljs$reader$read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function cljs$reader$validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function cljs$reader$make_unicode_char(code_str){
var code = parseInt(code_str,(16));
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function cljs$reader$escape_char(buffer,reader){
var ch = cljs.reader.read_char(reader);
var mapresult = cljs.reader.escape_char_map(ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else {
if(cljs.reader.numeric_QMARK_(ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));

}
}
}
}
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.reader.read_past = (function cljs$reader$read_past(pred,rdr){
var ch = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(ch) : pred.call(null,ch)))){
var G__16571 = cljs.reader.read_char(rdr);
ch = G__16571;
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function cljs$reader$read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}

if((delim === ch)){
return cljs.core.persistent_BANG_(a);
} else {
var temp__4423__auto__ = (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));
if(cljs.core.truth_(temp__4423__auto__)){
var macrofn = temp__4423__auto__;
var mret = (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(rdr,ch) : macrofn.call(null,rdr,ch));
var G__16572 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__16572;
continue;
} else {
cljs.reader.unread(rdr,ch);

var o = (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,recursive_QMARK_) : cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_));
var G__16573 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__16573;
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function cljs$reader$not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.maybe_read_tagged_type;
cljs.reader.read_dispatch = (function cljs$reader$read_dispatch(rdr,_){
var ch = cljs.reader.read_char(rdr);
var dm = (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.dispatch_macros.call(null,ch));
if(cljs.core.truth_(dm)){
return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(rdr,_) : dm.call(null,rdr,_));
} else {
var temp__4423__auto__ = (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(rdr,ch) : cljs.reader.maybe_read_tagged_type.call(null,rdr,ch));
if(cljs.core.truth_(temp__4423__auto__)){
var obj = temp__4423__auto__;
return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function cljs$reader$read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.reader.read_list = (function cljs$reader$read_list(rdr,_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function cljs$reader$read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function cljs$reader$read_map(rdr,_){
var l = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l))){
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function cljs$reader$read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__14729__auto__ = (ch == null);
if(or__14729__auto__){
return or__14729__auto__;
} else {
var or__14729__auto____$1 = cljs.reader.whitespace_QMARK_(ch);
if(or__14729__auto____$1){
return or__14729__auto____$1;
} else {
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));
}
}
})())){
cljs.reader.unread(reader,ch);

var s = buffer.toString();
var or__14729__auto__ = cljs.reader.match_number(s);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__16574 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__16575 = cljs.reader.read_char(reader);
buffer = G__16574;
ch = G__16575;
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function cljs$reader$read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
var G__16576 = (function (){
buffer.append(cljs.reader.escape_char(buffer,reader));

return buffer;
})()
;
var G__16577 = cljs.reader.read_char(reader);
buffer = G__16576;
ch = G__16577;
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__16578 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__16579 = cljs.reader.read_char(reader);
buffer = G__16578;
ch = G__16579;
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function cljs$reader$read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char(reader);
if((nch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
var G__16584 = (function (){var G__16582 = buffer;
G__16582.append(nch);

return G__16582;
})();
var G__16585 = cljs.reader.read_char(reader);
buffer = G__16584;
ch = G__16585;
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__16586 = (function (){var G__16583 = buffer;
G__16583.append(ch);

return G__16583;
})();
var G__16587 = cljs.reader.read_char(reader);
buffer = G__16586;
ch = G__16587;
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function cljs$reader$special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function cljs$reader$read_symbol(reader,initch){
var token = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_((function (){var and__14717__auto__ = goog.string.contains(token,"/");
if(cljs.core.truth_(and__14717__auto__)){
return !((token.length === (1)));
} else {
return and__14717__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_literal = (function cljs$reader$read_literal(rdr,ch){
var token = cljs.reader.read_token(rdr,ch);
var chars = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,(1));
if((chars.length === (1))){
return chars;
} else {
if((chars === "tab")){
return "\t";
} else {
if((chars === "return")){
return "\r";
} else {
if((chars === "newline")){
return "\n";
} else {
if((chars === "space")){
return " ";
} else {
if((chars === "backspace")){
return "\b";
} else {
if((chars === "formfeed")){
return "\f";
} else {
if((chars.charAt((0)) === "u")){
return cljs.reader.make_unicode_char(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(chars,(1)));
} else {
if((chars.charAt((0)) === "o")){
return cljs.reader.not_implemented(rdr,token);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unknown character literal: ",token], 0));

}
}
}
}
}
}
}
}
}
});
cljs.reader.read_keyword = (function cljs$reader$read_keyword(reader,initch){
var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function cljs$reader$desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function cljs$reader$wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true))),sym);
});
});
cljs.reader.throwing_reader = (function cljs$reader$throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function cljs$reader$read_meta(rdr,_){
var m = cljs.reader.desugar_meta((cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}

var o = (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true));
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || (o.cljs$core$IWithMeta$))?true:(((!o.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,o))){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function cljs$reader$read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function cljs$reader$read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function cljs$reader$read_discard(rdr,_){
(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true));

return rdr;
});
cljs.reader.macros = (function cljs$reader$macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_literal;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
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
});
cljs.reader.dispatch_macros = (function cljs$reader$dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader("Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
 * Reads the first object from a PushbackReader. Returns the object read.
 * If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
 */
cljs.reader.read = (function cljs$reader$read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char(reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_(ch)){
var G__16590 = reader;
var G__16591 = eof_is_error;
var G__16592 = sentinel;
var G__16593 = is_recursive;
reader = G__16590;
eof_is_error = G__16591;
sentinel = G__16592;
is_recursive = G__16593;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_(ch)){
var G__16594 = (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(reader,ch) : cljs.reader.read_comment.call(null,reader,ch));
var G__16595 = eof_is_error;
var G__16596 = sentinel;
var G__16597 = is_recursive;
reader = G__16594;
eof_is_error = G__16595;
sentinel = G__16596;
is_recursive = G__16597;
continue;
} else {
var f = cljs.reader.macros(ch);
var res = (cljs.core.truth_(f)?(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(reader,ch) : f.call(null,reader,ch)):((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):cljs.reader.read_symbol(reader,ch)
));
if((res === reader)){
var G__16598 = reader;
var G__16599 = eof_is_error;
var G__16600 = sentinel;
var G__16601 = is_recursive;
reader = G__16598;
eof_is_error = G__16599;
sentinel = G__16600;
is_recursive = G__16601;
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
 * Reads one object from the string s
 */
cljs.reader.read_string = (function cljs$reader$read_string(s){
if(typeof s === 'string'){
} else {
throw (new Error("Cannot read from non-string object."));
}

var r = cljs.reader.push_back_reader(s);
return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__16602 = b.append("0");
b = G__16602;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__14717__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__14717__auto__)){
var or__14729__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__14717__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')], 0));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__16606 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(10),null);
var v = vec__16606;
if(cljs.core.not(v)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join('')], 0));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__14729__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__14729__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__14729__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__14729__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__14729__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__14729__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__14729__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__14729__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__14729__auto__)){
return or__14729__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__16607 = months__$1;
var G__16608 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__16607,G__16608) : cljs.reader.days_in_month.call(null,G__16607,G__16608));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4423__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__16610 = temp__4423__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__16623_16635 = cljs.core.seq(form);
var chunk__16624_16636 = null;
var count__16625_16637 = (0);
var i__16626_16638 = (0);
while(true){
if((i__16626_16638 < count__16625_16637)){
var x_16639 = chunk__16624_16636.cljs$core$IIndexed$_nth$arity$2(null,i__16626_16638);
arr.push(x_16639);

var G__16640 = seq__16623_16635;
var G__16641 = chunk__16624_16636;
var G__16642 = count__16625_16637;
var G__16643 = (i__16626_16638 + (1));
seq__16623_16635 = G__16640;
chunk__16624_16636 = G__16641;
count__16625_16637 = G__16642;
i__16626_16638 = G__16643;
continue;
} else {
var temp__4425__auto___16644 = cljs.core.seq(seq__16623_16635);
if(temp__4425__auto___16644){
var seq__16623_16645__$1 = temp__4425__auto___16644;
if(cljs.core.chunked_seq_QMARK_(seq__16623_16645__$1)){
var c__15532__auto___16646 = cljs.core.chunk_first(seq__16623_16645__$1);
var G__16647 = cljs.core.chunk_rest(seq__16623_16645__$1);
var G__16648 = c__15532__auto___16646;
var G__16649 = cljs.core.count(c__15532__auto___16646);
var G__16650 = (0);
seq__16623_16635 = G__16647;
chunk__16624_16636 = G__16648;
count__16625_16637 = G__16649;
i__16626_16638 = G__16650;
continue;
} else {
var x_16651 = cljs.core.first(seq__16623_16645__$1);
arr.push(x_16651);

var G__16652 = cljs.core.next(seq__16623_16645__$1);
var G__16653 = null;
var G__16654 = (0);
var G__16655 = (0);
seq__16623_16635 = G__16652;
chunk__16624_16636 = G__16653;
count__16625_16637 = G__16654;
i__16626_16638 = G__16655;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = {};
var seq__16629_16656 = cljs.core.seq(form);
var chunk__16630_16657 = null;
var count__16631_16658 = (0);
var i__16632_16659 = (0);
while(true){
if((i__16632_16659 < count__16631_16658)){
var vec__16633_16660 = chunk__16630_16657.cljs$core$IIndexed$_nth$arity$2(null,i__16632_16659);
var k_16661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16633_16660,(0),null);
var v_16662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16633_16660,(1),null);
(obj[cljs.core.name(k_16661)] = v_16662);

var G__16663 = seq__16629_16656;
var G__16664 = chunk__16630_16657;
var G__16665 = count__16631_16658;
var G__16666 = (i__16632_16659 + (1));
seq__16629_16656 = G__16663;
chunk__16630_16657 = G__16664;
count__16631_16658 = G__16665;
i__16632_16659 = G__16666;
continue;
} else {
var temp__4425__auto___16667 = cljs.core.seq(seq__16629_16656);
if(temp__4425__auto___16667){
var seq__16629_16668__$1 = temp__4425__auto___16667;
if(cljs.core.chunked_seq_QMARK_(seq__16629_16668__$1)){
var c__15532__auto___16669 = cljs.core.chunk_first(seq__16629_16668__$1);
var G__16670 = cljs.core.chunk_rest(seq__16629_16668__$1);
var G__16671 = c__15532__auto___16669;
var G__16672 = cljs.core.count(c__15532__auto___16669);
var G__16673 = (0);
seq__16629_16656 = G__16670;
chunk__16630_16657 = G__16671;
count__16631_16658 = G__16672;
i__16632_16659 = G__16673;
continue;
} else {
var vec__16634_16674 = cljs.core.first(seq__16629_16668__$1);
var k_16675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16634_16674,(0),null);
var v_16676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16634_16674,(1),null);
(obj[cljs.core.name(k_16675)] = v_16676);

var G__16677 = cljs.core.next(seq__16629_16668__$1);
var G__16678 = null;
var G__16679 = (0);
var G__16680 = (0);
seq__16629_16656 = G__16677;
chunk__16630_16657 = G__16678;
count__16631_16658 = G__16679;
i__16632_16659 = G__16680;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join('')], 0));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = (function (){var G__16681 = new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16681) : cljs.core.atom.call(null,G__16681));
})();
cljs.reader._STAR_default_data_reader_fn_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
cljs.reader.maybe_read_tagged_type = (function cljs$reader$maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol(rdr,initch);
var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)),[cljs.core.str(tag)].join(''));
var dfn = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
if(cljs.core.truth_(pfn)){
var G__16685 = cljs.reader.read(rdr,true,null,false);
return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(G__16685) : pfn.call(null,G__16685));
} else {
if(cljs.core.truth_(dfn)){
var G__16686 = tag;
var G__16687 = cljs.reader.read(rdr,true,null,false);
return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(G__16686,G__16687) : dfn.call(null,G__16686,G__16687));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)))], 0))], 0));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
//# sourceMappingURL=reader.js.map?r=0.18434576872832942