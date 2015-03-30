// Compiled by ClojureScript 0.0-3126 {}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 * @param {...*} var_args
 */
schema.utils.assoc_when = (function() { 
var schema$utils$assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__16591__auto__ = m;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__17345__auto__ = (function schema$utils$assoc_when_$_iter__30274(s__30275){
return (new cljs.core.LazySeq(null,(function (){
var s__30275__$1 = s__30275;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30275__$1);
if(temp__4126__auto__){
var s__30275__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30275__$2)){
var c__17343__auto__ = cljs.core.chunk_first.call(null,s__30275__$2);
var size__17344__auto__ = cljs.core.count.call(null,c__17343__auto__);
var b__30277 = cljs.core.chunk_buffer.call(null,size__17344__auto__);
if((function (){var i__30276 = (0);
while(true){
if((i__30276 < size__17344__auto__)){
var vec__30280 = cljs.core._nth.call(null,c__17343__auto__,i__30276);
var k = cljs.core.nth.call(null,vec__30280,(0),null);
var v = cljs.core.nth.call(null,vec__30280,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__30277,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30282 = (i__30276 + (1));
i__30276 = G__30282;
continue;
} else {
var G__30283 = (i__30276 + (1));
i__30276 = G__30283;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30277),schema$utils$assoc_when_$_iter__30274.call(null,cljs.core.chunk_rest.call(null,s__30275__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30277),null);
}
} else {
var vec__30281 = cljs.core.first.call(null,s__30275__$2);
var k = cljs.core.nth.call(null,vec__30281,(0),null);
var v = cljs.core.nth.call(null,vec__30281,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$assoc_when_$_iter__30274.call(null,cljs.core.rest.call(null,s__30275__$2)));
} else {
var G__30284 = cljs.core.rest.call(null,s__30275__$2);
s__30275__$1 = G__30284;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17345__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var schema$utils$assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__30285__i = 0, G__30285__a = new Array(arguments.length -  1);
while (G__30285__i < G__30285__a.length) {G__30285__a[G__30285__i] = arguments[G__30285__i + 1]; ++G__30285__i;}
  kvs = new cljs.core.IndexedSeq(G__30285__a,0);
} 
return schema$utils$assoc_when__delegate.call(this,m,kvs);};
schema$utils$assoc_when.cljs$lang$maxFixedArity = 1;
schema$utils$assoc_when.cljs$lang$applyTo = (function (arglist__30286){
var m = cljs.core.first(arglist__30286);
var kvs = cljs.core.rest(arglist__30286);
return schema$utils$assoc_when__delegate(m,kvs);
});
schema$utils$assoc_when.cljs$core$IFn$_invoke$arity$variadic = schema$utils$assoc_when__delegate;
return schema$utils$assoc_when;
})()
;
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
/**
 * @param {...*} var_args
 */
schema.utils.format_STAR_ = (function() { 
var schema$utils$format_STAR___delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var schema$utils$format_STAR_ = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__30287__i = 0, G__30287__a = new Array(arguments.length -  1);
while (G__30287__i < G__30287__a.length) {G__30287__a[G__30287__i] = arguments[G__30287__i + 1]; ++G__30287__i;}
  args = new cljs.core.IndexedSeq(G__30287__a,0);
} 
return schema$utils$format_STAR___delegate.call(this,fmt,args);};
schema$utils$format_STAR_.cljs$lang$maxFixedArity = 1;
schema$utils$format_STAR_.cljs$lang$applyTo = (function (arglist__30288){
var fmt = cljs.core.first(arglist__30288);
var args = cljs.core.rest(arglist__30288);
return schema$utils$format_STAR___delegate(fmt,args);
});
schema$utils$format_STAR_.cljs$core$IFn$_invoke$arity$variadic = schema$utils$format_STAR___delegate;
return schema$utils$format_STAR_;
})()
;
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of.call(null,value);
if((cljs.core.count.call(null,[cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.call(null,[cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * Identity version of memoize, because many schemas are records, and records
 * don't cache their hash codes (at least in Clojure 1.5.1).
 * Not thread safe, and doesn't cache falsey values.
 */
schema.utils.memoize_id = (function schema$utils$memoize_id(f){
return cljs.core.memoize.call(null,f);
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
var G__30290 = x;
if(G__30290){
var bit__17265__auto__ = (G__30290.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__17265__auto__) || (G__30290.cljs$core$IRecord$)){
return true;
} else {
if((!G__30290.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__30290);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__30290);
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,err.expectation_delay)),(function (){var or__16591__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17186__auto__,k__17187__auto__){
var self__ = this;
var this__17186__auto____$1 = this;
return cljs.core._lookup.call(null,this__17186__auto____$1,k__17187__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17188__auto__,k30292,else__17189__auto__){
var self__ = this;
var this__17188__auto____$1 = this;
var G__30294 = (((k30292 instanceof cljs.core.Keyword))?k30292.fqn:null);
switch (G__30294) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30292,else__17189__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17200__auto__,writer__17201__auto__,opts__17202__auto__){
var self__ = this;
var this__17200__auto____$1 = this;
var pr_pair__17203__auto__ = ((function (this__17200__auto____$1){
return (function (keyval__17204__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17201__auto__,cljs.core.pr_writer,""," ","",opts__17202__auto__,keyval__17204__auto__);
});})(this__17200__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17201__auto__,pr_pair__17203__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__17202__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17184__auto__){
var self__ = this;
var this__17184__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17180__auto__){
var self__ = this;
var this__17180__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17190__auto__){
var self__ = this;
var this__17190__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17181__auto__){
var self__ = this;
var this__17181__auto____$1 = this;
var h__17007__auto__ = self__.__hash;
if(!((h__17007__auto__ == null))){
return h__17007__auto__;
} else {
var h__17007__auto____$1 = cljs.core.hash_imap.call(null,this__17181__auto____$1);
self__.__hash = h__17007__auto____$1;

return h__17007__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17182__auto__,other__17183__auto__){
var self__ = this;
var this__17182__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16579__auto__ = other__17183__auto__;
if(cljs.core.truth_(and__16579__auto__)){
return ((this__17182__auto____$1.constructor === other__17183__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__17182__auto____$1,other__17183__auto__));
} else {
return and__16579__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17195__auto__,k__17196__auto__){
var self__ = this;
var this__17195__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__17196__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17195__auto____$1),self__.__meta),k__17196__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17196__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17193__auto__,k__17194__auto__,G__30291){
var self__ = this;
var this__17193__auto____$1 = this;
var pred__30295 = cljs.core.keyword_identical_QMARK_;
var expr__30296 = k__17194__auto__;
if(cljs.core.truth_(pred__30295.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__30296))){
return (new schema.utils.ErrorContainer(G__30291,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17194__auto__,G__30291),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17198__auto__){
var self__ = this;
var this__17198__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17185__auto__,G__30291){
var self__ = this;
var this__17185__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__30291,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17191__auto__,entry__17192__auto__){
var self__ = this;
var this__17191__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17192__auto__)){
return cljs.core._assoc.call(null,this__17191__auto____$1,cljs.core._nth.call(null,entry__17192__auto__,(0)),cljs.core._nth.call(null,entry__17192__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17191__auto____$1,entry__17192__auto__);
}
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__17220__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__17220__auto__,writer__17221__auto__){
return cljs.core._write.call(null,writer__17221__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__30293){
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__30293),null,cljs.core.dissoc.call(null,G__30293,new cljs.core.Keyword(null,"error","error",-978969032)),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)))].join('')));
}

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(schema.utils.error_QMARK_.call(null,x)){
return x.error;
} else {
return null;
}
});
/**
 * If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
 */
schema.utils.wrap_error_name = (function schema$utils$wrap_error_name(name,maybe_error){
var temp__4124__auto__ = schema.utils.error_val.call(null,maybe_error);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return schema.utils.error.call(null,schema.utils.__GT_NamedError.call(null,name,e));
} else {
return maybe_error;
}
});
/**
 * Build up a result by conjing values, producing an error if at least one
 * sub-value returns an error.
 */
schema.utils.result_builder = (function schema$utils$result_builder(lift_to_error){
return (function schema$utils$result_builder_$_conjer(m,e){
var temp__4124__auto__ = schema.utils.error_val.call(null,e);
if(cljs.core.truth_(temp__4124__auto__)){
var err = temp__4124__auto__;
return schema.utils.error.call(null,cljs.core.conj.call(null,(function (){var or__16591__auto__ = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return lift_to_error.call(null,m);
}
})(),err));
} else {
var temp__4124__auto____$1 = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(temp__4124__auto____$1)){
var merr = temp__4124__auto____$1;
return schema.utils.error.call(null,cljs.core.conj.call(null,merr,null));
} else {
return cljs.core.conj.call(null,m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

schema.utils.PSimpleCell = (function (){var obj30300 = {};
return obj30300;
})();

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((function (){var and__16579__auto__ = this$;
if(and__16579__auto__){
return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else {
return and__16579__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__17227__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16591__auto__ = (schema.utils.get_cell[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (schema.utils.get_cell["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((function (){var and__16579__auto__ = this$;
if(and__16579__auto__){
return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else {
return and__16579__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__17227__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16591__auto__ = (schema.utils.set_cell[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (schema.utils.set_cell["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});


/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.call(null,schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.call(null,schema.utils.set_cell,schema.utils.use_fn_validation);

//# sourceMappingURL=utils.js.map?rel=1427705346572