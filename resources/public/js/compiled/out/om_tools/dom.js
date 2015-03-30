// Compiled by ClojureScript 0.0-3126 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__16591__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__16591__auto__){
return or__16591__auto__;
} else {
var G__29056 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__29056) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__29059 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__29059) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29063){
var vec__29064 = p__29063;
var k = cljs.core.nth.call(null,vec__29064,(0),null);
var v = cljs.core.nth.call(null,vec__29064,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__16591__auto__ = React.isValidElement;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(om_tools.dom.js_opts_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__29066 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__29066,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__29066,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
/**
 * @param {...*} var_args
 */
om_tools.dom.a = (function() {
var om_tools$dom$a = null;
var om_tools$dom$a__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});
var om_tools$dom$a__2 = (function() { 
var G__29067__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__20028__auto__,children__20029__auto__);
};
var G__29067 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29068__i = 0, G__29068__a = new Array(arguments.length -  1);
while (G__29068__i < G__29068__a.length) {G__29068__a[G__29068__i] = arguments[G__29068__i + 1]; ++G__29068__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29068__a,0);
} 
return G__29067__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29067.cljs$lang$maxFixedArity = 1;
G__29067.cljs$lang$applyTo = (function (arglist__29069){
var opts__20028__auto__ = cljs.core.first(arglist__29069);
var children__20029__auto__ = cljs.core.rest(arglist__29069);
return G__29067__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29067.cljs$core$IFn$_invoke$arity$variadic = G__29067__delegate;
return G__29067;
})()
;
om_tools$dom$a = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$a__0.call(this);
default:
var G__29070 = null;
if (arguments.length > 1) {
var G__29071__i = 0, G__29071__a = new Array(arguments.length -  1);
while (G__29071__i < G__29071__a.length) {G__29071__a[G__29071__i] = arguments[G__29071__i + 1]; ++G__29071__i;}
G__29070 = new cljs.core.IndexedSeq(G__29071__a,0);
}
return om_tools$dom$a__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$a.cljs$lang$maxFixedArity = 1;
om_tools$dom$a.cljs$lang$applyTo = om_tools$dom$a__2.cljs$lang$applyTo;
om_tools$dom$a.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$a__0;
om_tools$dom$a.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$a__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$a;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.abbr = (function() {
var om_tools$dom$abbr = null;
var om_tools$dom$abbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});
var om_tools$dom$abbr__2 = (function() { 
var G__29072__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__20028__auto__,children__20029__auto__);
};
var G__29072 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29073__i = 0, G__29073__a = new Array(arguments.length -  1);
while (G__29073__i < G__29073__a.length) {G__29073__a[G__29073__i] = arguments[G__29073__i + 1]; ++G__29073__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29073__a,0);
} 
return G__29072__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29072.cljs$lang$maxFixedArity = 1;
G__29072.cljs$lang$applyTo = (function (arglist__29074){
var opts__20028__auto__ = cljs.core.first(arglist__29074);
var children__20029__auto__ = cljs.core.rest(arglist__29074);
return G__29072__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29072.cljs$core$IFn$_invoke$arity$variadic = G__29072__delegate;
return G__29072;
})()
;
om_tools$dom$abbr = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$abbr__0.call(this);
default:
var G__29075 = null;
if (arguments.length > 1) {
var G__29076__i = 0, G__29076__a = new Array(arguments.length -  1);
while (G__29076__i < G__29076__a.length) {G__29076__a[G__29076__i] = arguments[G__29076__i + 1]; ++G__29076__i;}
G__29075 = new cljs.core.IndexedSeq(G__29076__a,0);
}
return om_tools$dom$abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$abbr.cljs$lang$maxFixedArity = 1;
om_tools$dom$abbr.cljs$lang$applyTo = om_tools$dom$abbr__2.cljs$lang$applyTo;
om_tools$dom$abbr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$abbr__0;
om_tools$dom$abbr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$abbr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$abbr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.address = (function() {
var om_tools$dom$address = null;
var om_tools$dom$address__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});
var om_tools$dom$address__2 = (function() { 
var G__29077__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__20028__auto__,children__20029__auto__);
};
var G__29077 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29078__i = 0, G__29078__a = new Array(arguments.length -  1);
while (G__29078__i < G__29078__a.length) {G__29078__a[G__29078__i] = arguments[G__29078__i + 1]; ++G__29078__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29078__a,0);
} 
return G__29077__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29077.cljs$lang$maxFixedArity = 1;
G__29077.cljs$lang$applyTo = (function (arglist__29079){
var opts__20028__auto__ = cljs.core.first(arglist__29079);
var children__20029__auto__ = cljs.core.rest(arglist__29079);
return G__29077__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29077.cljs$core$IFn$_invoke$arity$variadic = G__29077__delegate;
return G__29077;
})()
;
om_tools$dom$address = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$address__0.call(this);
default:
var G__29080 = null;
if (arguments.length > 1) {
var G__29081__i = 0, G__29081__a = new Array(arguments.length -  1);
while (G__29081__i < G__29081__a.length) {G__29081__a[G__29081__i] = arguments[G__29081__i + 1]; ++G__29081__i;}
G__29080 = new cljs.core.IndexedSeq(G__29081__a,0);
}
return om_tools$dom$address__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$address.cljs$lang$maxFixedArity = 1;
om_tools$dom$address.cljs$lang$applyTo = om_tools$dom$address__2.cljs$lang$applyTo;
om_tools$dom$address.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$address__0;
om_tools$dom$address.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$address__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$address;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.area = (function() {
var om_tools$dom$area = null;
var om_tools$dom$area__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});
var om_tools$dom$area__2 = (function() { 
var G__29082__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__20028__auto__,children__20029__auto__);
};
var G__29082 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29083__i = 0, G__29083__a = new Array(arguments.length -  1);
while (G__29083__i < G__29083__a.length) {G__29083__a[G__29083__i] = arguments[G__29083__i + 1]; ++G__29083__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29083__a,0);
} 
return G__29082__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29082.cljs$lang$maxFixedArity = 1;
G__29082.cljs$lang$applyTo = (function (arglist__29084){
var opts__20028__auto__ = cljs.core.first(arglist__29084);
var children__20029__auto__ = cljs.core.rest(arglist__29084);
return G__29082__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29082.cljs$core$IFn$_invoke$arity$variadic = G__29082__delegate;
return G__29082;
})()
;
om_tools$dom$area = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$area__0.call(this);
default:
var G__29085 = null;
if (arguments.length > 1) {
var G__29086__i = 0, G__29086__a = new Array(arguments.length -  1);
while (G__29086__i < G__29086__a.length) {G__29086__a[G__29086__i] = arguments[G__29086__i + 1]; ++G__29086__i;}
G__29085 = new cljs.core.IndexedSeq(G__29086__a,0);
}
return om_tools$dom$area__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$area.cljs$lang$maxFixedArity = 1;
om_tools$dom$area.cljs$lang$applyTo = om_tools$dom$area__2.cljs$lang$applyTo;
om_tools$dom$area.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$area__0;
om_tools$dom$area.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$area__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$area;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.article = (function() {
var om_tools$dom$article = null;
var om_tools$dom$article__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});
var om_tools$dom$article__2 = (function() { 
var G__29087__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__20028__auto__,children__20029__auto__);
};
var G__29087 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29088__i = 0, G__29088__a = new Array(arguments.length -  1);
while (G__29088__i < G__29088__a.length) {G__29088__a[G__29088__i] = arguments[G__29088__i + 1]; ++G__29088__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29088__a,0);
} 
return G__29087__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29087.cljs$lang$maxFixedArity = 1;
G__29087.cljs$lang$applyTo = (function (arglist__29089){
var opts__20028__auto__ = cljs.core.first(arglist__29089);
var children__20029__auto__ = cljs.core.rest(arglist__29089);
return G__29087__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29087.cljs$core$IFn$_invoke$arity$variadic = G__29087__delegate;
return G__29087;
})()
;
om_tools$dom$article = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$article__0.call(this);
default:
var G__29090 = null;
if (arguments.length > 1) {
var G__29091__i = 0, G__29091__a = new Array(arguments.length -  1);
while (G__29091__i < G__29091__a.length) {G__29091__a[G__29091__i] = arguments[G__29091__i + 1]; ++G__29091__i;}
G__29090 = new cljs.core.IndexedSeq(G__29091__a,0);
}
return om_tools$dom$article__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$article.cljs$lang$maxFixedArity = 1;
om_tools$dom$article.cljs$lang$applyTo = om_tools$dom$article__2.cljs$lang$applyTo;
om_tools$dom$article.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$article__0;
om_tools$dom$article.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$article__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$article;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.aside = (function() {
var om_tools$dom$aside = null;
var om_tools$dom$aside__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});
var om_tools$dom$aside__2 = (function() { 
var G__29092__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__20028__auto__,children__20029__auto__);
};
var G__29092 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29093__i = 0, G__29093__a = new Array(arguments.length -  1);
while (G__29093__i < G__29093__a.length) {G__29093__a[G__29093__i] = arguments[G__29093__i + 1]; ++G__29093__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29093__a,0);
} 
return G__29092__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29092.cljs$lang$maxFixedArity = 1;
G__29092.cljs$lang$applyTo = (function (arglist__29094){
var opts__20028__auto__ = cljs.core.first(arglist__29094);
var children__20029__auto__ = cljs.core.rest(arglist__29094);
return G__29092__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29092.cljs$core$IFn$_invoke$arity$variadic = G__29092__delegate;
return G__29092;
})()
;
om_tools$dom$aside = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$aside__0.call(this);
default:
var G__29095 = null;
if (arguments.length > 1) {
var G__29096__i = 0, G__29096__a = new Array(arguments.length -  1);
while (G__29096__i < G__29096__a.length) {G__29096__a[G__29096__i] = arguments[G__29096__i + 1]; ++G__29096__i;}
G__29095 = new cljs.core.IndexedSeq(G__29096__a,0);
}
return om_tools$dom$aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$aside.cljs$lang$maxFixedArity = 1;
om_tools$dom$aside.cljs$lang$applyTo = om_tools$dom$aside__2.cljs$lang$applyTo;
om_tools$dom$aside.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$aside__0;
om_tools$dom$aside.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$aside__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$aside;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.audio = (function() {
var om_tools$dom$audio = null;
var om_tools$dom$audio__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});
var om_tools$dom$audio__2 = (function() { 
var G__29097__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__20028__auto__,children__20029__auto__);
};
var G__29097 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29098__i = 0, G__29098__a = new Array(arguments.length -  1);
while (G__29098__i < G__29098__a.length) {G__29098__a[G__29098__i] = arguments[G__29098__i + 1]; ++G__29098__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29098__a,0);
} 
return G__29097__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29097.cljs$lang$maxFixedArity = 1;
G__29097.cljs$lang$applyTo = (function (arglist__29099){
var opts__20028__auto__ = cljs.core.first(arglist__29099);
var children__20029__auto__ = cljs.core.rest(arglist__29099);
return G__29097__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29097.cljs$core$IFn$_invoke$arity$variadic = G__29097__delegate;
return G__29097;
})()
;
om_tools$dom$audio = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$audio__0.call(this);
default:
var G__29100 = null;
if (arguments.length > 1) {
var G__29101__i = 0, G__29101__a = new Array(arguments.length -  1);
while (G__29101__i < G__29101__a.length) {G__29101__a[G__29101__i] = arguments[G__29101__i + 1]; ++G__29101__i;}
G__29100 = new cljs.core.IndexedSeq(G__29101__a,0);
}
return om_tools$dom$audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$audio.cljs$lang$maxFixedArity = 1;
om_tools$dom$audio.cljs$lang$applyTo = om_tools$dom$audio__2.cljs$lang$applyTo;
om_tools$dom$audio.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$audio__0;
om_tools$dom$audio.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$audio__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$audio;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.b = (function() {
var om_tools$dom$b = null;
var om_tools$dom$b__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});
var om_tools$dom$b__2 = (function() { 
var G__29102__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__20028__auto__,children__20029__auto__);
};
var G__29102 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29103__i = 0, G__29103__a = new Array(arguments.length -  1);
while (G__29103__i < G__29103__a.length) {G__29103__a[G__29103__i] = arguments[G__29103__i + 1]; ++G__29103__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29103__a,0);
} 
return G__29102__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29102.cljs$lang$maxFixedArity = 1;
G__29102.cljs$lang$applyTo = (function (arglist__29104){
var opts__20028__auto__ = cljs.core.first(arglist__29104);
var children__20029__auto__ = cljs.core.rest(arglist__29104);
return G__29102__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29102.cljs$core$IFn$_invoke$arity$variadic = G__29102__delegate;
return G__29102;
})()
;
om_tools$dom$b = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$b__0.call(this);
default:
var G__29105 = null;
if (arguments.length > 1) {
var G__29106__i = 0, G__29106__a = new Array(arguments.length -  1);
while (G__29106__i < G__29106__a.length) {G__29106__a[G__29106__i] = arguments[G__29106__i + 1]; ++G__29106__i;}
G__29105 = new cljs.core.IndexedSeq(G__29106__a,0);
}
return om_tools$dom$b__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$b.cljs$lang$maxFixedArity = 1;
om_tools$dom$b.cljs$lang$applyTo = om_tools$dom$b__2.cljs$lang$applyTo;
om_tools$dom$b.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$b__0;
om_tools$dom$b.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$b__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$b;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.base = (function() {
var om_tools$dom$base = null;
var om_tools$dom$base__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});
var om_tools$dom$base__2 = (function() { 
var G__29107__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__20028__auto__,children__20029__auto__);
};
var G__29107 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29108__i = 0, G__29108__a = new Array(arguments.length -  1);
while (G__29108__i < G__29108__a.length) {G__29108__a[G__29108__i] = arguments[G__29108__i + 1]; ++G__29108__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29108__a,0);
} 
return G__29107__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29107.cljs$lang$maxFixedArity = 1;
G__29107.cljs$lang$applyTo = (function (arglist__29109){
var opts__20028__auto__ = cljs.core.first(arglist__29109);
var children__20029__auto__ = cljs.core.rest(arglist__29109);
return G__29107__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29107.cljs$core$IFn$_invoke$arity$variadic = G__29107__delegate;
return G__29107;
})()
;
om_tools$dom$base = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$base__0.call(this);
default:
var G__29110 = null;
if (arguments.length > 1) {
var G__29111__i = 0, G__29111__a = new Array(arguments.length -  1);
while (G__29111__i < G__29111__a.length) {G__29111__a[G__29111__i] = arguments[G__29111__i + 1]; ++G__29111__i;}
G__29110 = new cljs.core.IndexedSeq(G__29111__a,0);
}
return om_tools$dom$base__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$base.cljs$lang$maxFixedArity = 1;
om_tools$dom$base.cljs$lang$applyTo = om_tools$dom$base__2.cljs$lang$applyTo;
om_tools$dom$base.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$base__0;
om_tools$dom$base.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$base__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$base;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.bdi = (function() {
var om_tools$dom$bdi = null;
var om_tools$dom$bdi__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});
var om_tools$dom$bdi__2 = (function() { 
var G__29112__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__20028__auto__,children__20029__auto__);
};
var G__29112 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29113__i = 0, G__29113__a = new Array(arguments.length -  1);
while (G__29113__i < G__29113__a.length) {G__29113__a[G__29113__i] = arguments[G__29113__i + 1]; ++G__29113__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29113__a,0);
} 
return G__29112__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29112.cljs$lang$maxFixedArity = 1;
G__29112.cljs$lang$applyTo = (function (arglist__29114){
var opts__20028__auto__ = cljs.core.first(arglist__29114);
var children__20029__auto__ = cljs.core.rest(arglist__29114);
return G__29112__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29112.cljs$core$IFn$_invoke$arity$variadic = G__29112__delegate;
return G__29112;
})()
;
om_tools$dom$bdi = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$bdi__0.call(this);
default:
var G__29115 = null;
if (arguments.length > 1) {
var G__29116__i = 0, G__29116__a = new Array(arguments.length -  1);
while (G__29116__i < G__29116__a.length) {G__29116__a[G__29116__i] = arguments[G__29116__i + 1]; ++G__29116__i;}
G__29115 = new cljs.core.IndexedSeq(G__29116__a,0);
}
return om_tools$dom$bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$bdi.cljs$lang$maxFixedArity = 1;
om_tools$dom$bdi.cljs$lang$applyTo = om_tools$dom$bdi__2.cljs$lang$applyTo;
om_tools$dom$bdi.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$bdi__0;
om_tools$dom$bdi.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$bdi__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$bdi;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.bdo = (function() {
var om_tools$dom$bdo = null;
var om_tools$dom$bdo__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});
var om_tools$dom$bdo__2 = (function() { 
var G__29117__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__20028__auto__,children__20029__auto__);
};
var G__29117 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29118__i = 0, G__29118__a = new Array(arguments.length -  1);
while (G__29118__i < G__29118__a.length) {G__29118__a[G__29118__i] = arguments[G__29118__i + 1]; ++G__29118__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29118__a,0);
} 
return G__29117__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29117.cljs$lang$maxFixedArity = 1;
G__29117.cljs$lang$applyTo = (function (arglist__29119){
var opts__20028__auto__ = cljs.core.first(arglist__29119);
var children__20029__auto__ = cljs.core.rest(arglist__29119);
return G__29117__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29117.cljs$core$IFn$_invoke$arity$variadic = G__29117__delegate;
return G__29117;
})()
;
om_tools$dom$bdo = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$bdo__0.call(this);
default:
var G__29120 = null;
if (arguments.length > 1) {
var G__29121__i = 0, G__29121__a = new Array(arguments.length -  1);
while (G__29121__i < G__29121__a.length) {G__29121__a[G__29121__i] = arguments[G__29121__i + 1]; ++G__29121__i;}
G__29120 = new cljs.core.IndexedSeq(G__29121__a,0);
}
return om_tools$dom$bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$bdo.cljs$lang$maxFixedArity = 1;
om_tools$dom$bdo.cljs$lang$applyTo = om_tools$dom$bdo__2.cljs$lang$applyTo;
om_tools$dom$bdo.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$bdo__0;
om_tools$dom$bdo.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$bdo__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$bdo;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.big = (function() {
var om_tools$dom$big = null;
var om_tools$dom$big__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});
var om_tools$dom$big__2 = (function() { 
var G__29122__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__20028__auto__,children__20029__auto__);
};
var G__29122 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29123__i = 0, G__29123__a = new Array(arguments.length -  1);
while (G__29123__i < G__29123__a.length) {G__29123__a[G__29123__i] = arguments[G__29123__i + 1]; ++G__29123__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29123__a,0);
} 
return G__29122__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29122.cljs$lang$maxFixedArity = 1;
G__29122.cljs$lang$applyTo = (function (arglist__29124){
var opts__20028__auto__ = cljs.core.first(arglist__29124);
var children__20029__auto__ = cljs.core.rest(arglist__29124);
return G__29122__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29122.cljs$core$IFn$_invoke$arity$variadic = G__29122__delegate;
return G__29122;
})()
;
om_tools$dom$big = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$big__0.call(this);
default:
var G__29125 = null;
if (arguments.length > 1) {
var G__29126__i = 0, G__29126__a = new Array(arguments.length -  1);
while (G__29126__i < G__29126__a.length) {G__29126__a[G__29126__i] = arguments[G__29126__i + 1]; ++G__29126__i;}
G__29125 = new cljs.core.IndexedSeq(G__29126__a,0);
}
return om_tools$dom$big__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$big.cljs$lang$maxFixedArity = 1;
om_tools$dom$big.cljs$lang$applyTo = om_tools$dom$big__2.cljs$lang$applyTo;
om_tools$dom$big.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$big__0;
om_tools$dom$big.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$big__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$big;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.blockquote = (function() {
var om_tools$dom$blockquote = null;
var om_tools$dom$blockquote__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});
var om_tools$dom$blockquote__2 = (function() { 
var G__29127__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__20028__auto__,children__20029__auto__);
};
var G__29127 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29128__i = 0, G__29128__a = new Array(arguments.length -  1);
while (G__29128__i < G__29128__a.length) {G__29128__a[G__29128__i] = arguments[G__29128__i + 1]; ++G__29128__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29128__a,0);
} 
return G__29127__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29127.cljs$lang$maxFixedArity = 1;
G__29127.cljs$lang$applyTo = (function (arglist__29129){
var opts__20028__auto__ = cljs.core.first(arglist__29129);
var children__20029__auto__ = cljs.core.rest(arglist__29129);
return G__29127__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29127.cljs$core$IFn$_invoke$arity$variadic = G__29127__delegate;
return G__29127;
})()
;
om_tools$dom$blockquote = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$blockquote__0.call(this);
default:
var G__29130 = null;
if (arguments.length > 1) {
var G__29131__i = 0, G__29131__a = new Array(arguments.length -  1);
while (G__29131__i < G__29131__a.length) {G__29131__a[G__29131__i] = arguments[G__29131__i + 1]; ++G__29131__i;}
G__29130 = new cljs.core.IndexedSeq(G__29131__a,0);
}
return om_tools$dom$blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$blockquote.cljs$lang$maxFixedArity = 1;
om_tools$dom$blockquote.cljs$lang$applyTo = om_tools$dom$blockquote__2.cljs$lang$applyTo;
om_tools$dom$blockquote.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$blockquote__0;
om_tools$dom$blockquote.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$blockquote__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$blockquote;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.body = (function() {
var om_tools$dom$body = null;
var om_tools$dom$body__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});
var om_tools$dom$body__2 = (function() { 
var G__29132__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__20028__auto__,children__20029__auto__);
};
var G__29132 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29133__i = 0, G__29133__a = new Array(arguments.length -  1);
while (G__29133__i < G__29133__a.length) {G__29133__a[G__29133__i] = arguments[G__29133__i + 1]; ++G__29133__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29133__a,0);
} 
return G__29132__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29132.cljs$lang$maxFixedArity = 1;
G__29132.cljs$lang$applyTo = (function (arglist__29134){
var opts__20028__auto__ = cljs.core.first(arglist__29134);
var children__20029__auto__ = cljs.core.rest(arglist__29134);
return G__29132__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29132.cljs$core$IFn$_invoke$arity$variadic = G__29132__delegate;
return G__29132;
})()
;
om_tools$dom$body = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$body__0.call(this);
default:
var G__29135 = null;
if (arguments.length > 1) {
var G__29136__i = 0, G__29136__a = new Array(arguments.length -  1);
while (G__29136__i < G__29136__a.length) {G__29136__a[G__29136__i] = arguments[G__29136__i + 1]; ++G__29136__i;}
G__29135 = new cljs.core.IndexedSeq(G__29136__a,0);
}
return om_tools$dom$body__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$body.cljs$lang$maxFixedArity = 1;
om_tools$dom$body.cljs$lang$applyTo = om_tools$dom$body__2.cljs$lang$applyTo;
om_tools$dom$body.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$body__0;
om_tools$dom$body.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$body__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$body;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.br = (function() {
var om_tools$dom$br = null;
var om_tools$dom$br__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});
var om_tools$dom$br__2 = (function() { 
var G__29137__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__20028__auto__,children__20029__auto__);
};
var G__29137 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29138__i = 0, G__29138__a = new Array(arguments.length -  1);
while (G__29138__i < G__29138__a.length) {G__29138__a[G__29138__i] = arguments[G__29138__i + 1]; ++G__29138__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29138__a,0);
} 
return G__29137__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29137.cljs$lang$maxFixedArity = 1;
G__29137.cljs$lang$applyTo = (function (arglist__29139){
var opts__20028__auto__ = cljs.core.first(arglist__29139);
var children__20029__auto__ = cljs.core.rest(arglist__29139);
return G__29137__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29137.cljs$core$IFn$_invoke$arity$variadic = G__29137__delegate;
return G__29137;
})()
;
om_tools$dom$br = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$br__0.call(this);
default:
var G__29140 = null;
if (arguments.length > 1) {
var G__29141__i = 0, G__29141__a = new Array(arguments.length -  1);
while (G__29141__i < G__29141__a.length) {G__29141__a[G__29141__i] = arguments[G__29141__i + 1]; ++G__29141__i;}
G__29140 = new cljs.core.IndexedSeq(G__29141__a,0);
}
return om_tools$dom$br__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$br.cljs$lang$maxFixedArity = 1;
om_tools$dom$br.cljs$lang$applyTo = om_tools$dom$br__2.cljs$lang$applyTo;
om_tools$dom$br.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$br__0;
om_tools$dom$br.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$br__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$br;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.button = (function() {
var om_tools$dom$button = null;
var om_tools$dom$button__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});
var om_tools$dom$button__2 = (function() { 
var G__29142__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__20028__auto__,children__20029__auto__);
};
var G__29142 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29143__i = 0, G__29143__a = new Array(arguments.length -  1);
while (G__29143__i < G__29143__a.length) {G__29143__a[G__29143__i] = arguments[G__29143__i + 1]; ++G__29143__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29143__a,0);
} 
return G__29142__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29142.cljs$lang$maxFixedArity = 1;
G__29142.cljs$lang$applyTo = (function (arglist__29144){
var opts__20028__auto__ = cljs.core.first(arglist__29144);
var children__20029__auto__ = cljs.core.rest(arglist__29144);
return G__29142__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29142.cljs$core$IFn$_invoke$arity$variadic = G__29142__delegate;
return G__29142;
})()
;
om_tools$dom$button = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$button__0.call(this);
default:
var G__29145 = null;
if (arguments.length > 1) {
var G__29146__i = 0, G__29146__a = new Array(arguments.length -  1);
while (G__29146__i < G__29146__a.length) {G__29146__a[G__29146__i] = arguments[G__29146__i + 1]; ++G__29146__i;}
G__29145 = new cljs.core.IndexedSeq(G__29146__a,0);
}
return om_tools$dom$button__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$button.cljs$lang$maxFixedArity = 1;
om_tools$dom$button.cljs$lang$applyTo = om_tools$dom$button__2.cljs$lang$applyTo;
om_tools$dom$button.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$button__0;
om_tools$dom$button.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$button__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$button;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.canvas = (function() {
var om_tools$dom$canvas = null;
var om_tools$dom$canvas__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});
var om_tools$dom$canvas__2 = (function() { 
var G__29147__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__20028__auto__,children__20029__auto__);
};
var G__29147 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29148__i = 0, G__29148__a = new Array(arguments.length -  1);
while (G__29148__i < G__29148__a.length) {G__29148__a[G__29148__i] = arguments[G__29148__i + 1]; ++G__29148__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29148__a,0);
} 
return G__29147__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29147.cljs$lang$maxFixedArity = 1;
G__29147.cljs$lang$applyTo = (function (arglist__29149){
var opts__20028__auto__ = cljs.core.first(arglist__29149);
var children__20029__auto__ = cljs.core.rest(arglist__29149);
return G__29147__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29147.cljs$core$IFn$_invoke$arity$variadic = G__29147__delegate;
return G__29147;
})()
;
om_tools$dom$canvas = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$canvas__0.call(this);
default:
var G__29150 = null;
if (arguments.length > 1) {
var G__29151__i = 0, G__29151__a = new Array(arguments.length -  1);
while (G__29151__i < G__29151__a.length) {G__29151__a[G__29151__i] = arguments[G__29151__i + 1]; ++G__29151__i;}
G__29150 = new cljs.core.IndexedSeq(G__29151__a,0);
}
return om_tools$dom$canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$canvas.cljs$lang$maxFixedArity = 1;
om_tools$dom$canvas.cljs$lang$applyTo = om_tools$dom$canvas__2.cljs$lang$applyTo;
om_tools$dom$canvas.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$canvas__0;
om_tools$dom$canvas.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$canvas__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$canvas;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.caption = (function() {
var om_tools$dom$caption = null;
var om_tools$dom$caption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});
var om_tools$dom$caption__2 = (function() { 
var G__29152__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__20028__auto__,children__20029__auto__);
};
var G__29152 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29153__i = 0, G__29153__a = new Array(arguments.length -  1);
while (G__29153__i < G__29153__a.length) {G__29153__a[G__29153__i] = arguments[G__29153__i + 1]; ++G__29153__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29153__a,0);
} 
return G__29152__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29152.cljs$lang$maxFixedArity = 1;
G__29152.cljs$lang$applyTo = (function (arglist__29154){
var opts__20028__auto__ = cljs.core.first(arglist__29154);
var children__20029__auto__ = cljs.core.rest(arglist__29154);
return G__29152__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29152.cljs$core$IFn$_invoke$arity$variadic = G__29152__delegate;
return G__29152;
})()
;
om_tools$dom$caption = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$caption__0.call(this);
default:
var G__29155 = null;
if (arguments.length > 1) {
var G__29156__i = 0, G__29156__a = new Array(arguments.length -  1);
while (G__29156__i < G__29156__a.length) {G__29156__a[G__29156__i] = arguments[G__29156__i + 1]; ++G__29156__i;}
G__29155 = new cljs.core.IndexedSeq(G__29156__a,0);
}
return om_tools$dom$caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$caption.cljs$lang$maxFixedArity = 1;
om_tools$dom$caption.cljs$lang$applyTo = om_tools$dom$caption__2.cljs$lang$applyTo;
om_tools$dom$caption.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$caption__0;
om_tools$dom$caption.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$caption__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$caption;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.cite = (function() {
var om_tools$dom$cite = null;
var om_tools$dom$cite__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});
var om_tools$dom$cite__2 = (function() { 
var G__29157__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__20028__auto__,children__20029__auto__);
};
var G__29157 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29158__i = 0, G__29158__a = new Array(arguments.length -  1);
while (G__29158__i < G__29158__a.length) {G__29158__a[G__29158__i] = arguments[G__29158__i + 1]; ++G__29158__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29158__a,0);
} 
return G__29157__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29157.cljs$lang$maxFixedArity = 1;
G__29157.cljs$lang$applyTo = (function (arglist__29159){
var opts__20028__auto__ = cljs.core.first(arglist__29159);
var children__20029__auto__ = cljs.core.rest(arglist__29159);
return G__29157__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29157.cljs$core$IFn$_invoke$arity$variadic = G__29157__delegate;
return G__29157;
})()
;
om_tools$dom$cite = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$cite__0.call(this);
default:
var G__29160 = null;
if (arguments.length > 1) {
var G__29161__i = 0, G__29161__a = new Array(arguments.length -  1);
while (G__29161__i < G__29161__a.length) {G__29161__a[G__29161__i] = arguments[G__29161__i + 1]; ++G__29161__i;}
G__29160 = new cljs.core.IndexedSeq(G__29161__a,0);
}
return om_tools$dom$cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$cite.cljs$lang$maxFixedArity = 1;
om_tools$dom$cite.cljs$lang$applyTo = om_tools$dom$cite__2.cljs$lang$applyTo;
om_tools$dom$cite.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$cite__0;
om_tools$dom$cite.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$cite__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$cite;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.code = (function() {
var om_tools$dom$code = null;
var om_tools$dom$code__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});
var om_tools$dom$code__2 = (function() { 
var G__29162__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__20028__auto__,children__20029__auto__);
};
var G__29162 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29163__i = 0, G__29163__a = new Array(arguments.length -  1);
while (G__29163__i < G__29163__a.length) {G__29163__a[G__29163__i] = arguments[G__29163__i + 1]; ++G__29163__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29163__a,0);
} 
return G__29162__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29162.cljs$lang$maxFixedArity = 1;
G__29162.cljs$lang$applyTo = (function (arglist__29164){
var opts__20028__auto__ = cljs.core.first(arglist__29164);
var children__20029__auto__ = cljs.core.rest(arglist__29164);
return G__29162__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29162.cljs$core$IFn$_invoke$arity$variadic = G__29162__delegate;
return G__29162;
})()
;
om_tools$dom$code = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$code__0.call(this);
default:
var G__29165 = null;
if (arguments.length > 1) {
var G__29166__i = 0, G__29166__a = new Array(arguments.length -  1);
while (G__29166__i < G__29166__a.length) {G__29166__a[G__29166__i] = arguments[G__29166__i + 1]; ++G__29166__i;}
G__29165 = new cljs.core.IndexedSeq(G__29166__a,0);
}
return om_tools$dom$code__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$code.cljs$lang$maxFixedArity = 1;
om_tools$dom$code.cljs$lang$applyTo = om_tools$dom$code__2.cljs$lang$applyTo;
om_tools$dom$code.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$code__0;
om_tools$dom$code.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$code__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$code;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.col = (function() {
var om_tools$dom$col = null;
var om_tools$dom$col__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});
var om_tools$dom$col__2 = (function() { 
var G__29167__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__20028__auto__,children__20029__auto__);
};
var G__29167 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29168__i = 0, G__29168__a = new Array(arguments.length -  1);
while (G__29168__i < G__29168__a.length) {G__29168__a[G__29168__i] = arguments[G__29168__i + 1]; ++G__29168__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29168__a,0);
} 
return G__29167__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29167.cljs$lang$maxFixedArity = 1;
G__29167.cljs$lang$applyTo = (function (arglist__29169){
var opts__20028__auto__ = cljs.core.first(arglist__29169);
var children__20029__auto__ = cljs.core.rest(arglist__29169);
return G__29167__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29167.cljs$core$IFn$_invoke$arity$variadic = G__29167__delegate;
return G__29167;
})()
;
om_tools$dom$col = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$col__0.call(this);
default:
var G__29170 = null;
if (arguments.length > 1) {
var G__29171__i = 0, G__29171__a = new Array(arguments.length -  1);
while (G__29171__i < G__29171__a.length) {G__29171__a[G__29171__i] = arguments[G__29171__i + 1]; ++G__29171__i;}
G__29170 = new cljs.core.IndexedSeq(G__29171__a,0);
}
return om_tools$dom$col__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$col.cljs$lang$maxFixedArity = 1;
om_tools$dom$col.cljs$lang$applyTo = om_tools$dom$col__2.cljs$lang$applyTo;
om_tools$dom$col.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$col__0;
om_tools$dom$col.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$col__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$col;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.colgroup = (function() {
var om_tools$dom$colgroup = null;
var om_tools$dom$colgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});
var om_tools$dom$colgroup__2 = (function() { 
var G__29172__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__20028__auto__,children__20029__auto__);
};
var G__29172 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29173__i = 0, G__29173__a = new Array(arguments.length -  1);
while (G__29173__i < G__29173__a.length) {G__29173__a[G__29173__i] = arguments[G__29173__i + 1]; ++G__29173__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29173__a,0);
} 
return G__29172__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29172.cljs$lang$maxFixedArity = 1;
G__29172.cljs$lang$applyTo = (function (arglist__29174){
var opts__20028__auto__ = cljs.core.first(arglist__29174);
var children__20029__auto__ = cljs.core.rest(arglist__29174);
return G__29172__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29172.cljs$core$IFn$_invoke$arity$variadic = G__29172__delegate;
return G__29172;
})()
;
om_tools$dom$colgroup = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$colgroup__0.call(this);
default:
var G__29175 = null;
if (arguments.length > 1) {
var G__29176__i = 0, G__29176__a = new Array(arguments.length -  1);
while (G__29176__i < G__29176__a.length) {G__29176__a[G__29176__i] = arguments[G__29176__i + 1]; ++G__29176__i;}
G__29175 = new cljs.core.IndexedSeq(G__29176__a,0);
}
return om_tools$dom$colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$colgroup.cljs$lang$maxFixedArity = 1;
om_tools$dom$colgroup.cljs$lang$applyTo = om_tools$dom$colgroup__2.cljs$lang$applyTo;
om_tools$dom$colgroup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$colgroup__0;
om_tools$dom$colgroup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$colgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$colgroup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.data = (function() {
var om_tools$dom$data = null;
var om_tools$dom$data__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});
var om_tools$dom$data__2 = (function() { 
var G__29177__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__20028__auto__,children__20029__auto__);
};
var G__29177 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29178__i = 0, G__29178__a = new Array(arguments.length -  1);
while (G__29178__i < G__29178__a.length) {G__29178__a[G__29178__i] = arguments[G__29178__i + 1]; ++G__29178__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29178__a,0);
} 
return G__29177__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29177.cljs$lang$maxFixedArity = 1;
G__29177.cljs$lang$applyTo = (function (arglist__29179){
var opts__20028__auto__ = cljs.core.first(arglist__29179);
var children__20029__auto__ = cljs.core.rest(arglist__29179);
return G__29177__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29177.cljs$core$IFn$_invoke$arity$variadic = G__29177__delegate;
return G__29177;
})()
;
om_tools$dom$data = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$data__0.call(this);
default:
var G__29180 = null;
if (arguments.length > 1) {
var G__29181__i = 0, G__29181__a = new Array(arguments.length -  1);
while (G__29181__i < G__29181__a.length) {G__29181__a[G__29181__i] = arguments[G__29181__i + 1]; ++G__29181__i;}
G__29180 = new cljs.core.IndexedSeq(G__29181__a,0);
}
return om_tools$dom$data__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$data.cljs$lang$maxFixedArity = 1;
om_tools$dom$data.cljs$lang$applyTo = om_tools$dom$data__2.cljs$lang$applyTo;
om_tools$dom$data.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$data__0;
om_tools$dom$data.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$data__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$data;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.datalist = (function() {
var om_tools$dom$datalist = null;
var om_tools$dom$datalist__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});
var om_tools$dom$datalist__2 = (function() { 
var G__29182__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__20028__auto__,children__20029__auto__);
};
var G__29182 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29183__i = 0, G__29183__a = new Array(arguments.length -  1);
while (G__29183__i < G__29183__a.length) {G__29183__a[G__29183__i] = arguments[G__29183__i + 1]; ++G__29183__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29183__a,0);
} 
return G__29182__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29182.cljs$lang$maxFixedArity = 1;
G__29182.cljs$lang$applyTo = (function (arglist__29184){
var opts__20028__auto__ = cljs.core.first(arglist__29184);
var children__20029__auto__ = cljs.core.rest(arglist__29184);
return G__29182__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29182.cljs$core$IFn$_invoke$arity$variadic = G__29182__delegate;
return G__29182;
})()
;
om_tools$dom$datalist = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$datalist__0.call(this);
default:
var G__29185 = null;
if (arguments.length > 1) {
var G__29186__i = 0, G__29186__a = new Array(arguments.length -  1);
while (G__29186__i < G__29186__a.length) {G__29186__a[G__29186__i] = arguments[G__29186__i + 1]; ++G__29186__i;}
G__29185 = new cljs.core.IndexedSeq(G__29186__a,0);
}
return om_tools$dom$datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$datalist.cljs$lang$maxFixedArity = 1;
om_tools$dom$datalist.cljs$lang$applyTo = om_tools$dom$datalist__2.cljs$lang$applyTo;
om_tools$dom$datalist.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$datalist__0;
om_tools$dom$datalist.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$datalist__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$datalist;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dd = (function() {
var om_tools$dom$dd = null;
var om_tools$dom$dd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});
var om_tools$dom$dd__2 = (function() { 
var G__29187__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__20028__auto__,children__20029__auto__);
};
var G__29187 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29188__i = 0, G__29188__a = new Array(arguments.length -  1);
while (G__29188__i < G__29188__a.length) {G__29188__a[G__29188__i] = arguments[G__29188__i + 1]; ++G__29188__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29188__a,0);
} 
return G__29187__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29187.cljs$lang$maxFixedArity = 1;
G__29187.cljs$lang$applyTo = (function (arglist__29189){
var opts__20028__auto__ = cljs.core.first(arglist__29189);
var children__20029__auto__ = cljs.core.rest(arglist__29189);
return G__29187__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29187.cljs$core$IFn$_invoke$arity$variadic = G__29187__delegate;
return G__29187;
})()
;
om_tools$dom$dd = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dd__0.call(this);
default:
var G__29190 = null;
if (arguments.length > 1) {
var G__29191__i = 0, G__29191__a = new Array(arguments.length -  1);
while (G__29191__i < G__29191__a.length) {G__29191__a[G__29191__i] = arguments[G__29191__i + 1]; ++G__29191__i;}
G__29190 = new cljs.core.IndexedSeq(G__29191__a,0);
}
return om_tools$dom$dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dd.cljs$lang$maxFixedArity = 1;
om_tools$dom$dd.cljs$lang$applyTo = om_tools$dom$dd__2.cljs$lang$applyTo;
om_tools$dom$dd.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dd__0;
om_tools$dom$dd.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dd__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dd;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.del = (function() {
var om_tools$dom$del = null;
var om_tools$dom$del__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});
var om_tools$dom$del__2 = (function() { 
var G__29192__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__20028__auto__,children__20029__auto__);
};
var G__29192 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29193__i = 0, G__29193__a = new Array(arguments.length -  1);
while (G__29193__i < G__29193__a.length) {G__29193__a[G__29193__i] = arguments[G__29193__i + 1]; ++G__29193__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29193__a,0);
} 
return G__29192__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29192.cljs$lang$maxFixedArity = 1;
G__29192.cljs$lang$applyTo = (function (arglist__29194){
var opts__20028__auto__ = cljs.core.first(arglist__29194);
var children__20029__auto__ = cljs.core.rest(arglist__29194);
return G__29192__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29192.cljs$core$IFn$_invoke$arity$variadic = G__29192__delegate;
return G__29192;
})()
;
om_tools$dom$del = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$del__0.call(this);
default:
var G__29195 = null;
if (arguments.length > 1) {
var G__29196__i = 0, G__29196__a = new Array(arguments.length -  1);
while (G__29196__i < G__29196__a.length) {G__29196__a[G__29196__i] = arguments[G__29196__i + 1]; ++G__29196__i;}
G__29195 = new cljs.core.IndexedSeq(G__29196__a,0);
}
return om_tools$dom$del__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$del.cljs$lang$maxFixedArity = 1;
om_tools$dom$del.cljs$lang$applyTo = om_tools$dom$del__2.cljs$lang$applyTo;
om_tools$dom$del.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$del__0;
om_tools$dom$del.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$del__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$del;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dfn = (function() {
var om_tools$dom$dfn = null;
var om_tools$dom$dfn__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});
var om_tools$dom$dfn__2 = (function() { 
var G__29197__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__20028__auto__,children__20029__auto__);
};
var G__29197 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29198__i = 0, G__29198__a = new Array(arguments.length -  1);
while (G__29198__i < G__29198__a.length) {G__29198__a[G__29198__i] = arguments[G__29198__i + 1]; ++G__29198__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29198__a,0);
} 
return G__29197__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29197.cljs$lang$maxFixedArity = 1;
G__29197.cljs$lang$applyTo = (function (arglist__29199){
var opts__20028__auto__ = cljs.core.first(arglist__29199);
var children__20029__auto__ = cljs.core.rest(arglist__29199);
return G__29197__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29197.cljs$core$IFn$_invoke$arity$variadic = G__29197__delegate;
return G__29197;
})()
;
om_tools$dom$dfn = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dfn__0.call(this);
default:
var G__29200 = null;
if (arguments.length > 1) {
var G__29201__i = 0, G__29201__a = new Array(arguments.length -  1);
while (G__29201__i < G__29201__a.length) {G__29201__a[G__29201__i] = arguments[G__29201__i + 1]; ++G__29201__i;}
G__29200 = new cljs.core.IndexedSeq(G__29201__a,0);
}
return om_tools$dom$dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dfn.cljs$lang$maxFixedArity = 1;
om_tools$dom$dfn.cljs$lang$applyTo = om_tools$dom$dfn__2.cljs$lang$applyTo;
om_tools$dom$dfn.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dfn__0;
om_tools$dom$dfn.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dfn__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dfn;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.div = (function() {
var om_tools$dom$div = null;
var om_tools$dom$div__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});
var om_tools$dom$div__2 = (function() { 
var G__29202__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__20028__auto__,children__20029__auto__);
};
var G__29202 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29203__i = 0, G__29203__a = new Array(arguments.length -  1);
while (G__29203__i < G__29203__a.length) {G__29203__a[G__29203__i] = arguments[G__29203__i + 1]; ++G__29203__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29203__a,0);
} 
return G__29202__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29202.cljs$lang$maxFixedArity = 1;
G__29202.cljs$lang$applyTo = (function (arglist__29204){
var opts__20028__auto__ = cljs.core.first(arglist__29204);
var children__20029__auto__ = cljs.core.rest(arglist__29204);
return G__29202__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29202.cljs$core$IFn$_invoke$arity$variadic = G__29202__delegate;
return G__29202;
})()
;
om_tools$dom$div = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$div__0.call(this);
default:
var G__29205 = null;
if (arguments.length > 1) {
var G__29206__i = 0, G__29206__a = new Array(arguments.length -  1);
while (G__29206__i < G__29206__a.length) {G__29206__a[G__29206__i] = arguments[G__29206__i + 1]; ++G__29206__i;}
G__29205 = new cljs.core.IndexedSeq(G__29206__a,0);
}
return om_tools$dom$div__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$div.cljs$lang$maxFixedArity = 1;
om_tools$dom$div.cljs$lang$applyTo = om_tools$dom$div__2.cljs$lang$applyTo;
om_tools$dom$div.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$div__0;
om_tools$dom$div.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$div__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$div;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dl = (function() {
var om_tools$dom$dl = null;
var om_tools$dom$dl__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});
var om_tools$dom$dl__2 = (function() { 
var G__29207__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__20028__auto__,children__20029__auto__);
};
var G__29207 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29208__i = 0, G__29208__a = new Array(arguments.length -  1);
while (G__29208__i < G__29208__a.length) {G__29208__a[G__29208__i] = arguments[G__29208__i + 1]; ++G__29208__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29208__a,0);
} 
return G__29207__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29207.cljs$lang$maxFixedArity = 1;
G__29207.cljs$lang$applyTo = (function (arglist__29209){
var opts__20028__auto__ = cljs.core.first(arglist__29209);
var children__20029__auto__ = cljs.core.rest(arglist__29209);
return G__29207__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29207.cljs$core$IFn$_invoke$arity$variadic = G__29207__delegate;
return G__29207;
})()
;
om_tools$dom$dl = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dl__0.call(this);
default:
var G__29210 = null;
if (arguments.length > 1) {
var G__29211__i = 0, G__29211__a = new Array(arguments.length -  1);
while (G__29211__i < G__29211__a.length) {G__29211__a[G__29211__i] = arguments[G__29211__i + 1]; ++G__29211__i;}
G__29210 = new cljs.core.IndexedSeq(G__29211__a,0);
}
return om_tools$dom$dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dl.cljs$lang$maxFixedArity = 1;
om_tools$dom$dl.cljs$lang$applyTo = om_tools$dom$dl__2.cljs$lang$applyTo;
om_tools$dom$dl.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dl__0;
om_tools$dom$dl.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dl__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dl;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dt = (function() {
var om_tools$dom$dt = null;
var om_tools$dom$dt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});
var om_tools$dom$dt__2 = (function() { 
var G__29212__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__20028__auto__,children__20029__auto__);
};
var G__29212 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29213__i = 0, G__29213__a = new Array(arguments.length -  1);
while (G__29213__i < G__29213__a.length) {G__29213__a[G__29213__i] = arguments[G__29213__i + 1]; ++G__29213__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29213__a,0);
} 
return G__29212__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29212.cljs$lang$maxFixedArity = 1;
G__29212.cljs$lang$applyTo = (function (arglist__29214){
var opts__20028__auto__ = cljs.core.first(arglist__29214);
var children__20029__auto__ = cljs.core.rest(arglist__29214);
return G__29212__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29212.cljs$core$IFn$_invoke$arity$variadic = G__29212__delegate;
return G__29212;
})()
;
om_tools$dom$dt = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dt__0.call(this);
default:
var G__29215 = null;
if (arguments.length > 1) {
var G__29216__i = 0, G__29216__a = new Array(arguments.length -  1);
while (G__29216__i < G__29216__a.length) {G__29216__a[G__29216__i] = arguments[G__29216__i + 1]; ++G__29216__i;}
G__29215 = new cljs.core.IndexedSeq(G__29216__a,0);
}
return om_tools$dom$dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dt.cljs$lang$maxFixedArity = 1;
om_tools$dom$dt.cljs$lang$applyTo = om_tools$dom$dt__2.cljs$lang$applyTo;
om_tools$dom$dt.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dt__0;
om_tools$dom$dt.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dt__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dt;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.em = (function() {
var om_tools$dom$em = null;
var om_tools$dom$em__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});
var om_tools$dom$em__2 = (function() { 
var G__29217__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__20028__auto__,children__20029__auto__);
};
var G__29217 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29218__i = 0, G__29218__a = new Array(arguments.length -  1);
while (G__29218__i < G__29218__a.length) {G__29218__a[G__29218__i] = arguments[G__29218__i + 1]; ++G__29218__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29218__a,0);
} 
return G__29217__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29217.cljs$lang$maxFixedArity = 1;
G__29217.cljs$lang$applyTo = (function (arglist__29219){
var opts__20028__auto__ = cljs.core.first(arglist__29219);
var children__20029__auto__ = cljs.core.rest(arglist__29219);
return G__29217__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29217.cljs$core$IFn$_invoke$arity$variadic = G__29217__delegate;
return G__29217;
})()
;
om_tools$dom$em = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$em__0.call(this);
default:
var G__29220 = null;
if (arguments.length > 1) {
var G__29221__i = 0, G__29221__a = new Array(arguments.length -  1);
while (G__29221__i < G__29221__a.length) {G__29221__a[G__29221__i] = arguments[G__29221__i + 1]; ++G__29221__i;}
G__29220 = new cljs.core.IndexedSeq(G__29221__a,0);
}
return om_tools$dom$em__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$em.cljs$lang$maxFixedArity = 1;
om_tools$dom$em.cljs$lang$applyTo = om_tools$dom$em__2.cljs$lang$applyTo;
om_tools$dom$em.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$em__0;
om_tools$dom$em.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$em__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$em;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.embed = (function() {
var om_tools$dom$embed = null;
var om_tools$dom$embed__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});
var om_tools$dom$embed__2 = (function() { 
var G__29222__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__20028__auto__,children__20029__auto__);
};
var G__29222 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29223__i = 0, G__29223__a = new Array(arguments.length -  1);
while (G__29223__i < G__29223__a.length) {G__29223__a[G__29223__i] = arguments[G__29223__i + 1]; ++G__29223__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29223__a,0);
} 
return G__29222__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29222.cljs$lang$maxFixedArity = 1;
G__29222.cljs$lang$applyTo = (function (arglist__29224){
var opts__20028__auto__ = cljs.core.first(arglist__29224);
var children__20029__auto__ = cljs.core.rest(arglist__29224);
return G__29222__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29222.cljs$core$IFn$_invoke$arity$variadic = G__29222__delegate;
return G__29222;
})()
;
om_tools$dom$embed = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$embed__0.call(this);
default:
var G__29225 = null;
if (arguments.length > 1) {
var G__29226__i = 0, G__29226__a = new Array(arguments.length -  1);
while (G__29226__i < G__29226__a.length) {G__29226__a[G__29226__i] = arguments[G__29226__i + 1]; ++G__29226__i;}
G__29225 = new cljs.core.IndexedSeq(G__29226__a,0);
}
return om_tools$dom$embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$embed.cljs$lang$maxFixedArity = 1;
om_tools$dom$embed.cljs$lang$applyTo = om_tools$dom$embed__2.cljs$lang$applyTo;
om_tools$dom$embed.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$embed__0;
om_tools$dom$embed.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$embed__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$embed;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.fieldset = (function() {
var om_tools$dom$fieldset = null;
var om_tools$dom$fieldset__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});
var om_tools$dom$fieldset__2 = (function() { 
var G__29227__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__20028__auto__,children__20029__auto__);
};
var G__29227 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29228__i = 0, G__29228__a = new Array(arguments.length -  1);
while (G__29228__i < G__29228__a.length) {G__29228__a[G__29228__i] = arguments[G__29228__i + 1]; ++G__29228__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29228__a,0);
} 
return G__29227__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29227.cljs$lang$maxFixedArity = 1;
G__29227.cljs$lang$applyTo = (function (arglist__29229){
var opts__20028__auto__ = cljs.core.first(arglist__29229);
var children__20029__auto__ = cljs.core.rest(arglist__29229);
return G__29227__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29227.cljs$core$IFn$_invoke$arity$variadic = G__29227__delegate;
return G__29227;
})()
;
om_tools$dom$fieldset = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$fieldset__0.call(this);
default:
var G__29230 = null;
if (arguments.length > 1) {
var G__29231__i = 0, G__29231__a = new Array(arguments.length -  1);
while (G__29231__i < G__29231__a.length) {G__29231__a[G__29231__i] = arguments[G__29231__i + 1]; ++G__29231__i;}
G__29230 = new cljs.core.IndexedSeq(G__29231__a,0);
}
return om_tools$dom$fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$fieldset.cljs$lang$maxFixedArity = 1;
om_tools$dom$fieldset.cljs$lang$applyTo = om_tools$dom$fieldset__2.cljs$lang$applyTo;
om_tools$dom$fieldset.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$fieldset__0;
om_tools$dom$fieldset.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$fieldset__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$fieldset;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.figcaption = (function() {
var om_tools$dom$figcaption = null;
var om_tools$dom$figcaption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});
var om_tools$dom$figcaption__2 = (function() { 
var G__29232__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__20028__auto__,children__20029__auto__);
};
var G__29232 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29233__i = 0, G__29233__a = new Array(arguments.length -  1);
while (G__29233__i < G__29233__a.length) {G__29233__a[G__29233__i] = arguments[G__29233__i + 1]; ++G__29233__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29233__a,0);
} 
return G__29232__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29232.cljs$lang$maxFixedArity = 1;
G__29232.cljs$lang$applyTo = (function (arglist__29234){
var opts__20028__auto__ = cljs.core.first(arglist__29234);
var children__20029__auto__ = cljs.core.rest(arglist__29234);
return G__29232__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29232.cljs$core$IFn$_invoke$arity$variadic = G__29232__delegate;
return G__29232;
})()
;
om_tools$dom$figcaption = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$figcaption__0.call(this);
default:
var G__29235 = null;
if (arguments.length > 1) {
var G__29236__i = 0, G__29236__a = new Array(arguments.length -  1);
while (G__29236__i < G__29236__a.length) {G__29236__a[G__29236__i] = arguments[G__29236__i + 1]; ++G__29236__i;}
G__29235 = new cljs.core.IndexedSeq(G__29236__a,0);
}
return om_tools$dom$figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$figcaption.cljs$lang$maxFixedArity = 1;
om_tools$dom$figcaption.cljs$lang$applyTo = om_tools$dom$figcaption__2.cljs$lang$applyTo;
om_tools$dom$figcaption.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$figcaption__0;
om_tools$dom$figcaption.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$figcaption__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$figcaption;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.figure = (function() {
var om_tools$dom$figure = null;
var om_tools$dom$figure__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});
var om_tools$dom$figure__2 = (function() { 
var G__29237__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__20028__auto__,children__20029__auto__);
};
var G__29237 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29238__i = 0, G__29238__a = new Array(arguments.length -  1);
while (G__29238__i < G__29238__a.length) {G__29238__a[G__29238__i] = arguments[G__29238__i + 1]; ++G__29238__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29238__a,0);
} 
return G__29237__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29237.cljs$lang$maxFixedArity = 1;
G__29237.cljs$lang$applyTo = (function (arglist__29239){
var opts__20028__auto__ = cljs.core.first(arglist__29239);
var children__20029__auto__ = cljs.core.rest(arglist__29239);
return G__29237__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29237.cljs$core$IFn$_invoke$arity$variadic = G__29237__delegate;
return G__29237;
})()
;
om_tools$dom$figure = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$figure__0.call(this);
default:
var G__29240 = null;
if (arguments.length > 1) {
var G__29241__i = 0, G__29241__a = new Array(arguments.length -  1);
while (G__29241__i < G__29241__a.length) {G__29241__a[G__29241__i] = arguments[G__29241__i + 1]; ++G__29241__i;}
G__29240 = new cljs.core.IndexedSeq(G__29241__a,0);
}
return om_tools$dom$figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$figure.cljs$lang$maxFixedArity = 1;
om_tools$dom$figure.cljs$lang$applyTo = om_tools$dom$figure__2.cljs$lang$applyTo;
om_tools$dom$figure.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$figure__0;
om_tools$dom$figure.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$figure__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$figure;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.footer = (function() {
var om_tools$dom$footer = null;
var om_tools$dom$footer__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});
var om_tools$dom$footer__2 = (function() { 
var G__29242__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__20028__auto__,children__20029__auto__);
};
var G__29242 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29243__i = 0, G__29243__a = new Array(arguments.length -  1);
while (G__29243__i < G__29243__a.length) {G__29243__a[G__29243__i] = arguments[G__29243__i + 1]; ++G__29243__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29243__a,0);
} 
return G__29242__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29242.cljs$lang$maxFixedArity = 1;
G__29242.cljs$lang$applyTo = (function (arglist__29244){
var opts__20028__auto__ = cljs.core.first(arglist__29244);
var children__20029__auto__ = cljs.core.rest(arglist__29244);
return G__29242__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29242.cljs$core$IFn$_invoke$arity$variadic = G__29242__delegate;
return G__29242;
})()
;
om_tools$dom$footer = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$footer__0.call(this);
default:
var G__29245 = null;
if (arguments.length > 1) {
var G__29246__i = 0, G__29246__a = new Array(arguments.length -  1);
while (G__29246__i < G__29246__a.length) {G__29246__a[G__29246__i] = arguments[G__29246__i + 1]; ++G__29246__i;}
G__29245 = new cljs.core.IndexedSeq(G__29246__a,0);
}
return om_tools$dom$footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$footer.cljs$lang$maxFixedArity = 1;
om_tools$dom$footer.cljs$lang$applyTo = om_tools$dom$footer__2.cljs$lang$applyTo;
om_tools$dom$footer.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$footer__0;
om_tools$dom$footer.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$footer__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$footer;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.form = (function() {
var om_tools$dom$form = null;
var om_tools$dom$form__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});
var om_tools$dom$form__2 = (function() { 
var G__29247__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__20028__auto__,children__20029__auto__);
};
var G__29247 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29248__i = 0, G__29248__a = new Array(arguments.length -  1);
while (G__29248__i < G__29248__a.length) {G__29248__a[G__29248__i] = arguments[G__29248__i + 1]; ++G__29248__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29248__a,0);
} 
return G__29247__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29247.cljs$lang$maxFixedArity = 1;
G__29247.cljs$lang$applyTo = (function (arglist__29249){
var opts__20028__auto__ = cljs.core.first(arglist__29249);
var children__20029__auto__ = cljs.core.rest(arglist__29249);
return G__29247__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29247.cljs$core$IFn$_invoke$arity$variadic = G__29247__delegate;
return G__29247;
})()
;
om_tools$dom$form = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$form__0.call(this);
default:
var G__29250 = null;
if (arguments.length > 1) {
var G__29251__i = 0, G__29251__a = new Array(arguments.length -  1);
while (G__29251__i < G__29251__a.length) {G__29251__a[G__29251__i] = arguments[G__29251__i + 1]; ++G__29251__i;}
G__29250 = new cljs.core.IndexedSeq(G__29251__a,0);
}
return om_tools$dom$form__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$form.cljs$lang$maxFixedArity = 1;
om_tools$dom$form.cljs$lang$applyTo = om_tools$dom$form__2.cljs$lang$applyTo;
om_tools$dom$form.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$form__0;
om_tools$dom$form.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$form__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$form;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h1 = (function() {
var om_tools$dom$h1 = null;
var om_tools$dom$h1__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});
var om_tools$dom$h1__2 = (function() { 
var G__29252__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__20028__auto__,children__20029__auto__);
};
var G__29252 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29253__i = 0, G__29253__a = new Array(arguments.length -  1);
while (G__29253__i < G__29253__a.length) {G__29253__a[G__29253__i] = arguments[G__29253__i + 1]; ++G__29253__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29253__a,0);
} 
return G__29252__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29252.cljs$lang$maxFixedArity = 1;
G__29252.cljs$lang$applyTo = (function (arglist__29254){
var opts__20028__auto__ = cljs.core.first(arglist__29254);
var children__20029__auto__ = cljs.core.rest(arglist__29254);
return G__29252__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29252.cljs$core$IFn$_invoke$arity$variadic = G__29252__delegate;
return G__29252;
})()
;
om_tools$dom$h1 = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h1__0.call(this);
default:
var G__29255 = null;
if (arguments.length > 1) {
var G__29256__i = 0, G__29256__a = new Array(arguments.length -  1);
while (G__29256__i < G__29256__a.length) {G__29256__a[G__29256__i] = arguments[G__29256__i + 1]; ++G__29256__i;}
G__29255 = new cljs.core.IndexedSeq(G__29256__a,0);
}
return om_tools$dom$h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h1.cljs$lang$maxFixedArity = 1;
om_tools$dom$h1.cljs$lang$applyTo = om_tools$dom$h1__2.cljs$lang$applyTo;
om_tools$dom$h1.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h1__0;
om_tools$dom$h1.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h1__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h1;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h2 = (function() {
var om_tools$dom$h2 = null;
var om_tools$dom$h2__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});
var om_tools$dom$h2__2 = (function() { 
var G__29257__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__20028__auto__,children__20029__auto__);
};
var G__29257 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29258__i = 0, G__29258__a = new Array(arguments.length -  1);
while (G__29258__i < G__29258__a.length) {G__29258__a[G__29258__i] = arguments[G__29258__i + 1]; ++G__29258__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29258__a,0);
} 
return G__29257__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29257.cljs$lang$maxFixedArity = 1;
G__29257.cljs$lang$applyTo = (function (arglist__29259){
var opts__20028__auto__ = cljs.core.first(arglist__29259);
var children__20029__auto__ = cljs.core.rest(arglist__29259);
return G__29257__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29257.cljs$core$IFn$_invoke$arity$variadic = G__29257__delegate;
return G__29257;
})()
;
om_tools$dom$h2 = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h2__0.call(this);
default:
var G__29260 = null;
if (arguments.length > 1) {
var G__29261__i = 0, G__29261__a = new Array(arguments.length -  1);
while (G__29261__i < G__29261__a.length) {G__29261__a[G__29261__i] = arguments[G__29261__i + 1]; ++G__29261__i;}
G__29260 = new cljs.core.IndexedSeq(G__29261__a,0);
}
return om_tools$dom$h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h2.cljs$lang$maxFixedArity = 1;
om_tools$dom$h2.cljs$lang$applyTo = om_tools$dom$h2__2.cljs$lang$applyTo;
om_tools$dom$h2.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h2__0;
om_tools$dom$h2.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h2__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h2;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h3 = (function() {
var om_tools$dom$h3 = null;
var om_tools$dom$h3__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});
var om_tools$dom$h3__2 = (function() { 
var G__29262__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__20028__auto__,children__20029__auto__);
};
var G__29262 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29263__i = 0, G__29263__a = new Array(arguments.length -  1);
while (G__29263__i < G__29263__a.length) {G__29263__a[G__29263__i] = arguments[G__29263__i + 1]; ++G__29263__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29263__a,0);
} 
return G__29262__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29262.cljs$lang$maxFixedArity = 1;
G__29262.cljs$lang$applyTo = (function (arglist__29264){
var opts__20028__auto__ = cljs.core.first(arglist__29264);
var children__20029__auto__ = cljs.core.rest(arglist__29264);
return G__29262__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29262.cljs$core$IFn$_invoke$arity$variadic = G__29262__delegate;
return G__29262;
})()
;
om_tools$dom$h3 = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h3__0.call(this);
default:
var G__29265 = null;
if (arguments.length > 1) {
var G__29266__i = 0, G__29266__a = new Array(arguments.length -  1);
while (G__29266__i < G__29266__a.length) {G__29266__a[G__29266__i] = arguments[G__29266__i + 1]; ++G__29266__i;}
G__29265 = new cljs.core.IndexedSeq(G__29266__a,0);
}
return om_tools$dom$h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h3.cljs$lang$maxFixedArity = 1;
om_tools$dom$h3.cljs$lang$applyTo = om_tools$dom$h3__2.cljs$lang$applyTo;
om_tools$dom$h3.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h3__0;
om_tools$dom$h3.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h3__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h3;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h4 = (function() {
var om_tools$dom$h4 = null;
var om_tools$dom$h4__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});
var om_tools$dom$h4__2 = (function() { 
var G__29267__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__20028__auto__,children__20029__auto__);
};
var G__29267 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29268__i = 0, G__29268__a = new Array(arguments.length -  1);
while (G__29268__i < G__29268__a.length) {G__29268__a[G__29268__i] = arguments[G__29268__i + 1]; ++G__29268__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29268__a,0);
} 
return G__29267__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29267.cljs$lang$maxFixedArity = 1;
G__29267.cljs$lang$applyTo = (function (arglist__29269){
var opts__20028__auto__ = cljs.core.first(arglist__29269);
var children__20029__auto__ = cljs.core.rest(arglist__29269);
return G__29267__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29267.cljs$core$IFn$_invoke$arity$variadic = G__29267__delegate;
return G__29267;
})()
;
om_tools$dom$h4 = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h4__0.call(this);
default:
var G__29270 = null;
if (arguments.length > 1) {
var G__29271__i = 0, G__29271__a = new Array(arguments.length -  1);
while (G__29271__i < G__29271__a.length) {G__29271__a[G__29271__i] = arguments[G__29271__i + 1]; ++G__29271__i;}
G__29270 = new cljs.core.IndexedSeq(G__29271__a,0);
}
return om_tools$dom$h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h4.cljs$lang$maxFixedArity = 1;
om_tools$dom$h4.cljs$lang$applyTo = om_tools$dom$h4__2.cljs$lang$applyTo;
om_tools$dom$h4.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h4__0;
om_tools$dom$h4.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h4__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h4;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h5 = (function() {
var om_tools$dom$h5 = null;
var om_tools$dom$h5__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});
var om_tools$dom$h5__2 = (function() { 
var G__29272__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__20028__auto__,children__20029__auto__);
};
var G__29272 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29273__i = 0, G__29273__a = new Array(arguments.length -  1);
while (G__29273__i < G__29273__a.length) {G__29273__a[G__29273__i] = arguments[G__29273__i + 1]; ++G__29273__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29273__a,0);
} 
return G__29272__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29272.cljs$lang$maxFixedArity = 1;
G__29272.cljs$lang$applyTo = (function (arglist__29274){
var opts__20028__auto__ = cljs.core.first(arglist__29274);
var children__20029__auto__ = cljs.core.rest(arglist__29274);
return G__29272__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29272.cljs$core$IFn$_invoke$arity$variadic = G__29272__delegate;
return G__29272;
})()
;
om_tools$dom$h5 = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h5__0.call(this);
default:
var G__29275 = null;
if (arguments.length > 1) {
var G__29276__i = 0, G__29276__a = new Array(arguments.length -  1);
while (G__29276__i < G__29276__a.length) {G__29276__a[G__29276__i] = arguments[G__29276__i + 1]; ++G__29276__i;}
G__29275 = new cljs.core.IndexedSeq(G__29276__a,0);
}
return om_tools$dom$h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h5.cljs$lang$maxFixedArity = 1;
om_tools$dom$h5.cljs$lang$applyTo = om_tools$dom$h5__2.cljs$lang$applyTo;
om_tools$dom$h5.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h5__0;
om_tools$dom$h5.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h5__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h5;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h6 = (function() {
var om_tools$dom$h6 = null;
var om_tools$dom$h6__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});
var om_tools$dom$h6__2 = (function() { 
var G__29277__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__20028__auto__,children__20029__auto__);
};
var G__29277 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29278__i = 0, G__29278__a = new Array(arguments.length -  1);
while (G__29278__i < G__29278__a.length) {G__29278__a[G__29278__i] = arguments[G__29278__i + 1]; ++G__29278__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29278__a,0);
} 
return G__29277__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29277.cljs$lang$maxFixedArity = 1;
G__29277.cljs$lang$applyTo = (function (arglist__29279){
var opts__20028__auto__ = cljs.core.first(arglist__29279);
var children__20029__auto__ = cljs.core.rest(arglist__29279);
return G__29277__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29277.cljs$core$IFn$_invoke$arity$variadic = G__29277__delegate;
return G__29277;
})()
;
om_tools$dom$h6 = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h6__0.call(this);
default:
var G__29280 = null;
if (arguments.length > 1) {
var G__29281__i = 0, G__29281__a = new Array(arguments.length -  1);
while (G__29281__i < G__29281__a.length) {G__29281__a[G__29281__i] = arguments[G__29281__i + 1]; ++G__29281__i;}
G__29280 = new cljs.core.IndexedSeq(G__29281__a,0);
}
return om_tools$dom$h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h6.cljs$lang$maxFixedArity = 1;
om_tools$dom$h6.cljs$lang$applyTo = om_tools$dom$h6__2.cljs$lang$applyTo;
om_tools$dom$h6.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h6__0;
om_tools$dom$h6.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h6__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h6;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.head = (function() {
var om_tools$dom$head = null;
var om_tools$dom$head__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});
var om_tools$dom$head__2 = (function() { 
var G__29282__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__20028__auto__,children__20029__auto__);
};
var G__29282 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29283__i = 0, G__29283__a = new Array(arguments.length -  1);
while (G__29283__i < G__29283__a.length) {G__29283__a[G__29283__i] = arguments[G__29283__i + 1]; ++G__29283__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29283__a,0);
} 
return G__29282__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29282.cljs$lang$maxFixedArity = 1;
G__29282.cljs$lang$applyTo = (function (arglist__29284){
var opts__20028__auto__ = cljs.core.first(arglist__29284);
var children__20029__auto__ = cljs.core.rest(arglist__29284);
return G__29282__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29282.cljs$core$IFn$_invoke$arity$variadic = G__29282__delegate;
return G__29282;
})()
;
om_tools$dom$head = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$head__0.call(this);
default:
var G__29285 = null;
if (arguments.length > 1) {
var G__29286__i = 0, G__29286__a = new Array(arguments.length -  1);
while (G__29286__i < G__29286__a.length) {G__29286__a[G__29286__i] = arguments[G__29286__i + 1]; ++G__29286__i;}
G__29285 = new cljs.core.IndexedSeq(G__29286__a,0);
}
return om_tools$dom$head__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$head.cljs$lang$maxFixedArity = 1;
om_tools$dom$head.cljs$lang$applyTo = om_tools$dom$head__2.cljs$lang$applyTo;
om_tools$dom$head.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$head__0;
om_tools$dom$head.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$head__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$head;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.header = (function() {
var om_tools$dom$header = null;
var om_tools$dom$header__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});
var om_tools$dom$header__2 = (function() { 
var G__29287__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__20028__auto__,children__20029__auto__);
};
var G__29287 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29288__i = 0, G__29288__a = new Array(arguments.length -  1);
while (G__29288__i < G__29288__a.length) {G__29288__a[G__29288__i] = arguments[G__29288__i + 1]; ++G__29288__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29288__a,0);
} 
return G__29287__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29287.cljs$lang$maxFixedArity = 1;
G__29287.cljs$lang$applyTo = (function (arglist__29289){
var opts__20028__auto__ = cljs.core.first(arglist__29289);
var children__20029__auto__ = cljs.core.rest(arglist__29289);
return G__29287__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29287.cljs$core$IFn$_invoke$arity$variadic = G__29287__delegate;
return G__29287;
})()
;
om_tools$dom$header = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$header__0.call(this);
default:
var G__29290 = null;
if (arguments.length > 1) {
var G__29291__i = 0, G__29291__a = new Array(arguments.length -  1);
while (G__29291__i < G__29291__a.length) {G__29291__a[G__29291__i] = arguments[G__29291__i + 1]; ++G__29291__i;}
G__29290 = new cljs.core.IndexedSeq(G__29291__a,0);
}
return om_tools$dom$header__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$header.cljs$lang$maxFixedArity = 1;
om_tools$dom$header.cljs$lang$applyTo = om_tools$dom$header__2.cljs$lang$applyTo;
om_tools$dom$header.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$header__0;
om_tools$dom$header.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$header__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$header;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.hr = (function() {
var om_tools$dom$hr = null;
var om_tools$dom$hr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});
var om_tools$dom$hr__2 = (function() { 
var G__29292__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__20028__auto__,children__20029__auto__);
};
var G__29292 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29293__i = 0, G__29293__a = new Array(arguments.length -  1);
while (G__29293__i < G__29293__a.length) {G__29293__a[G__29293__i] = arguments[G__29293__i + 1]; ++G__29293__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29293__a,0);
} 
return G__29292__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29292.cljs$lang$maxFixedArity = 1;
G__29292.cljs$lang$applyTo = (function (arglist__29294){
var opts__20028__auto__ = cljs.core.first(arglist__29294);
var children__20029__auto__ = cljs.core.rest(arglist__29294);
return G__29292__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29292.cljs$core$IFn$_invoke$arity$variadic = G__29292__delegate;
return G__29292;
})()
;
om_tools$dom$hr = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$hr__0.call(this);
default:
var G__29295 = null;
if (arguments.length > 1) {
var G__29296__i = 0, G__29296__a = new Array(arguments.length -  1);
while (G__29296__i < G__29296__a.length) {G__29296__a[G__29296__i] = arguments[G__29296__i + 1]; ++G__29296__i;}
G__29295 = new cljs.core.IndexedSeq(G__29296__a,0);
}
return om_tools$dom$hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$hr.cljs$lang$maxFixedArity = 1;
om_tools$dom$hr.cljs$lang$applyTo = om_tools$dom$hr__2.cljs$lang$applyTo;
om_tools$dom$hr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$hr__0;
om_tools$dom$hr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$hr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$hr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.html = (function() {
var om_tools$dom$html = null;
var om_tools$dom$html__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});
var om_tools$dom$html__2 = (function() { 
var G__29297__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__20028__auto__,children__20029__auto__);
};
var G__29297 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29298__i = 0, G__29298__a = new Array(arguments.length -  1);
while (G__29298__i < G__29298__a.length) {G__29298__a[G__29298__i] = arguments[G__29298__i + 1]; ++G__29298__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29298__a,0);
} 
return G__29297__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29297.cljs$lang$maxFixedArity = 1;
G__29297.cljs$lang$applyTo = (function (arglist__29299){
var opts__20028__auto__ = cljs.core.first(arglist__29299);
var children__20029__auto__ = cljs.core.rest(arglist__29299);
return G__29297__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29297.cljs$core$IFn$_invoke$arity$variadic = G__29297__delegate;
return G__29297;
})()
;
om_tools$dom$html = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$html__0.call(this);
default:
var G__29300 = null;
if (arguments.length > 1) {
var G__29301__i = 0, G__29301__a = new Array(arguments.length -  1);
while (G__29301__i < G__29301__a.length) {G__29301__a[G__29301__i] = arguments[G__29301__i + 1]; ++G__29301__i;}
G__29300 = new cljs.core.IndexedSeq(G__29301__a,0);
}
return om_tools$dom$html__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$html.cljs$lang$maxFixedArity = 1;
om_tools$dom$html.cljs$lang$applyTo = om_tools$dom$html__2.cljs$lang$applyTo;
om_tools$dom$html.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$html__0;
om_tools$dom$html.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$html__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$html;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.i = (function() {
var om_tools$dom$i = null;
var om_tools$dom$i__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});
var om_tools$dom$i__2 = (function() { 
var G__29302__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__20028__auto__,children__20029__auto__);
};
var G__29302 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29303__i = 0, G__29303__a = new Array(arguments.length -  1);
while (G__29303__i < G__29303__a.length) {G__29303__a[G__29303__i] = arguments[G__29303__i + 1]; ++G__29303__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29303__a,0);
} 
return G__29302__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29302.cljs$lang$maxFixedArity = 1;
G__29302.cljs$lang$applyTo = (function (arglist__29304){
var opts__20028__auto__ = cljs.core.first(arglist__29304);
var children__20029__auto__ = cljs.core.rest(arglist__29304);
return G__29302__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29302.cljs$core$IFn$_invoke$arity$variadic = G__29302__delegate;
return G__29302;
})()
;
om_tools$dom$i = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$i__0.call(this);
default:
var G__29305 = null;
if (arguments.length > 1) {
var G__29306__i = 0, G__29306__a = new Array(arguments.length -  1);
while (G__29306__i < G__29306__a.length) {G__29306__a[G__29306__i] = arguments[G__29306__i + 1]; ++G__29306__i;}
G__29305 = new cljs.core.IndexedSeq(G__29306__a,0);
}
return om_tools$dom$i__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$i.cljs$lang$maxFixedArity = 1;
om_tools$dom$i.cljs$lang$applyTo = om_tools$dom$i__2.cljs$lang$applyTo;
om_tools$dom$i.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$i__0;
om_tools$dom$i.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$i__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$i;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.iframe = (function() {
var om_tools$dom$iframe = null;
var om_tools$dom$iframe__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});
var om_tools$dom$iframe__2 = (function() { 
var G__29307__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__20028__auto__,children__20029__auto__);
};
var G__29307 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29308__i = 0, G__29308__a = new Array(arguments.length -  1);
while (G__29308__i < G__29308__a.length) {G__29308__a[G__29308__i] = arguments[G__29308__i + 1]; ++G__29308__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29308__a,0);
} 
return G__29307__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29307.cljs$lang$maxFixedArity = 1;
G__29307.cljs$lang$applyTo = (function (arglist__29309){
var opts__20028__auto__ = cljs.core.first(arglist__29309);
var children__20029__auto__ = cljs.core.rest(arglist__29309);
return G__29307__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29307.cljs$core$IFn$_invoke$arity$variadic = G__29307__delegate;
return G__29307;
})()
;
om_tools$dom$iframe = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$iframe__0.call(this);
default:
var G__29310 = null;
if (arguments.length > 1) {
var G__29311__i = 0, G__29311__a = new Array(arguments.length -  1);
while (G__29311__i < G__29311__a.length) {G__29311__a[G__29311__i] = arguments[G__29311__i + 1]; ++G__29311__i;}
G__29310 = new cljs.core.IndexedSeq(G__29311__a,0);
}
return om_tools$dom$iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$iframe.cljs$lang$maxFixedArity = 1;
om_tools$dom$iframe.cljs$lang$applyTo = om_tools$dom$iframe__2.cljs$lang$applyTo;
om_tools$dom$iframe.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$iframe__0;
om_tools$dom$iframe.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$iframe__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$iframe;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.img = (function() {
var om_tools$dom$img = null;
var om_tools$dom$img__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});
var om_tools$dom$img__2 = (function() { 
var G__29312__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__20028__auto__,children__20029__auto__);
};
var G__29312 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29313__i = 0, G__29313__a = new Array(arguments.length -  1);
while (G__29313__i < G__29313__a.length) {G__29313__a[G__29313__i] = arguments[G__29313__i + 1]; ++G__29313__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29313__a,0);
} 
return G__29312__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29312.cljs$lang$maxFixedArity = 1;
G__29312.cljs$lang$applyTo = (function (arglist__29314){
var opts__20028__auto__ = cljs.core.first(arglist__29314);
var children__20029__auto__ = cljs.core.rest(arglist__29314);
return G__29312__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29312.cljs$core$IFn$_invoke$arity$variadic = G__29312__delegate;
return G__29312;
})()
;
om_tools$dom$img = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$img__0.call(this);
default:
var G__29315 = null;
if (arguments.length > 1) {
var G__29316__i = 0, G__29316__a = new Array(arguments.length -  1);
while (G__29316__i < G__29316__a.length) {G__29316__a[G__29316__i] = arguments[G__29316__i + 1]; ++G__29316__i;}
G__29315 = new cljs.core.IndexedSeq(G__29316__a,0);
}
return om_tools$dom$img__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$img.cljs$lang$maxFixedArity = 1;
om_tools$dom$img.cljs$lang$applyTo = om_tools$dom$img__2.cljs$lang$applyTo;
om_tools$dom$img.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$img__0;
om_tools$dom$img.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$img__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$img;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ins = (function() {
var om_tools$dom$ins = null;
var om_tools$dom$ins__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});
var om_tools$dom$ins__2 = (function() { 
var G__29317__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__20028__auto__,children__20029__auto__);
};
var G__29317 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29318__i = 0, G__29318__a = new Array(arguments.length -  1);
while (G__29318__i < G__29318__a.length) {G__29318__a[G__29318__i] = arguments[G__29318__i + 1]; ++G__29318__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29318__a,0);
} 
return G__29317__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29317.cljs$lang$maxFixedArity = 1;
G__29317.cljs$lang$applyTo = (function (arglist__29319){
var opts__20028__auto__ = cljs.core.first(arglist__29319);
var children__20029__auto__ = cljs.core.rest(arglist__29319);
return G__29317__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29317.cljs$core$IFn$_invoke$arity$variadic = G__29317__delegate;
return G__29317;
})()
;
om_tools$dom$ins = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ins__0.call(this);
default:
var G__29320 = null;
if (arguments.length > 1) {
var G__29321__i = 0, G__29321__a = new Array(arguments.length -  1);
while (G__29321__i < G__29321__a.length) {G__29321__a[G__29321__i] = arguments[G__29321__i + 1]; ++G__29321__i;}
G__29320 = new cljs.core.IndexedSeq(G__29321__a,0);
}
return om_tools$dom$ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ins.cljs$lang$maxFixedArity = 1;
om_tools$dom$ins.cljs$lang$applyTo = om_tools$dom$ins__2.cljs$lang$applyTo;
om_tools$dom$ins.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ins__0;
om_tools$dom$ins.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ins__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ins;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.kbd = (function() {
var om_tools$dom$kbd = null;
var om_tools$dom$kbd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});
var om_tools$dom$kbd__2 = (function() { 
var G__29322__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__20028__auto__,children__20029__auto__);
};
var G__29322 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29323__i = 0, G__29323__a = new Array(arguments.length -  1);
while (G__29323__i < G__29323__a.length) {G__29323__a[G__29323__i] = arguments[G__29323__i + 1]; ++G__29323__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29323__a,0);
} 
return G__29322__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29322.cljs$lang$maxFixedArity = 1;
G__29322.cljs$lang$applyTo = (function (arglist__29324){
var opts__20028__auto__ = cljs.core.first(arglist__29324);
var children__20029__auto__ = cljs.core.rest(arglist__29324);
return G__29322__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29322.cljs$core$IFn$_invoke$arity$variadic = G__29322__delegate;
return G__29322;
})()
;
om_tools$dom$kbd = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$kbd__0.call(this);
default:
var G__29325 = null;
if (arguments.length > 1) {
var G__29326__i = 0, G__29326__a = new Array(arguments.length -  1);
while (G__29326__i < G__29326__a.length) {G__29326__a[G__29326__i] = arguments[G__29326__i + 1]; ++G__29326__i;}
G__29325 = new cljs.core.IndexedSeq(G__29326__a,0);
}
return om_tools$dom$kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$kbd.cljs$lang$maxFixedArity = 1;
om_tools$dom$kbd.cljs$lang$applyTo = om_tools$dom$kbd__2.cljs$lang$applyTo;
om_tools$dom$kbd.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$kbd__0;
om_tools$dom$kbd.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$kbd__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$kbd;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.keygen = (function() {
var om_tools$dom$keygen = null;
var om_tools$dom$keygen__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});
var om_tools$dom$keygen__2 = (function() { 
var G__29327__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__20028__auto__,children__20029__auto__);
};
var G__29327 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29328__i = 0, G__29328__a = new Array(arguments.length -  1);
while (G__29328__i < G__29328__a.length) {G__29328__a[G__29328__i] = arguments[G__29328__i + 1]; ++G__29328__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29328__a,0);
} 
return G__29327__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29327.cljs$lang$maxFixedArity = 1;
G__29327.cljs$lang$applyTo = (function (arglist__29329){
var opts__20028__auto__ = cljs.core.first(arglist__29329);
var children__20029__auto__ = cljs.core.rest(arglist__29329);
return G__29327__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29327.cljs$core$IFn$_invoke$arity$variadic = G__29327__delegate;
return G__29327;
})()
;
om_tools$dom$keygen = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$keygen__0.call(this);
default:
var G__29330 = null;
if (arguments.length > 1) {
var G__29331__i = 0, G__29331__a = new Array(arguments.length -  1);
while (G__29331__i < G__29331__a.length) {G__29331__a[G__29331__i] = arguments[G__29331__i + 1]; ++G__29331__i;}
G__29330 = new cljs.core.IndexedSeq(G__29331__a,0);
}
return om_tools$dom$keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$keygen.cljs$lang$maxFixedArity = 1;
om_tools$dom$keygen.cljs$lang$applyTo = om_tools$dom$keygen__2.cljs$lang$applyTo;
om_tools$dom$keygen.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$keygen__0;
om_tools$dom$keygen.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$keygen__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$keygen;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.label = (function() {
var om_tools$dom$label = null;
var om_tools$dom$label__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});
var om_tools$dom$label__2 = (function() { 
var G__29332__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__20028__auto__,children__20029__auto__);
};
var G__29332 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29333__i = 0, G__29333__a = new Array(arguments.length -  1);
while (G__29333__i < G__29333__a.length) {G__29333__a[G__29333__i] = arguments[G__29333__i + 1]; ++G__29333__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29333__a,0);
} 
return G__29332__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29332.cljs$lang$maxFixedArity = 1;
G__29332.cljs$lang$applyTo = (function (arglist__29334){
var opts__20028__auto__ = cljs.core.first(arglist__29334);
var children__20029__auto__ = cljs.core.rest(arglist__29334);
return G__29332__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29332.cljs$core$IFn$_invoke$arity$variadic = G__29332__delegate;
return G__29332;
})()
;
om_tools$dom$label = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$label__0.call(this);
default:
var G__29335 = null;
if (arguments.length > 1) {
var G__29336__i = 0, G__29336__a = new Array(arguments.length -  1);
while (G__29336__i < G__29336__a.length) {G__29336__a[G__29336__i] = arguments[G__29336__i + 1]; ++G__29336__i;}
G__29335 = new cljs.core.IndexedSeq(G__29336__a,0);
}
return om_tools$dom$label__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$label.cljs$lang$maxFixedArity = 1;
om_tools$dom$label.cljs$lang$applyTo = om_tools$dom$label__2.cljs$lang$applyTo;
om_tools$dom$label.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$label__0;
om_tools$dom$label.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$label__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$label;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.legend = (function() {
var om_tools$dom$legend = null;
var om_tools$dom$legend__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});
var om_tools$dom$legend__2 = (function() { 
var G__29337__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__20028__auto__,children__20029__auto__);
};
var G__29337 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29338__i = 0, G__29338__a = new Array(arguments.length -  1);
while (G__29338__i < G__29338__a.length) {G__29338__a[G__29338__i] = arguments[G__29338__i + 1]; ++G__29338__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29338__a,0);
} 
return G__29337__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29337.cljs$lang$maxFixedArity = 1;
G__29337.cljs$lang$applyTo = (function (arglist__29339){
var opts__20028__auto__ = cljs.core.first(arglist__29339);
var children__20029__auto__ = cljs.core.rest(arglist__29339);
return G__29337__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29337.cljs$core$IFn$_invoke$arity$variadic = G__29337__delegate;
return G__29337;
})()
;
om_tools$dom$legend = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$legend__0.call(this);
default:
var G__29340 = null;
if (arguments.length > 1) {
var G__29341__i = 0, G__29341__a = new Array(arguments.length -  1);
while (G__29341__i < G__29341__a.length) {G__29341__a[G__29341__i] = arguments[G__29341__i + 1]; ++G__29341__i;}
G__29340 = new cljs.core.IndexedSeq(G__29341__a,0);
}
return om_tools$dom$legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$legend.cljs$lang$maxFixedArity = 1;
om_tools$dom$legend.cljs$lang$applyTo = om_tools$dom$legend__2.cljs$lang$applyTo;
om_tools$dom$legend.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$legend__0;
om_tools$dom$legend.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$legend__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$legend;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.li = (function() {
var om_tools$dom$li = null;
var om_tools$dom$li__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});
var om_tools$dom$li__2 = (function() { 
var G__29342__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__20028__auto__,children__20029__auto__);
};
var G__29342 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29343__i = 0, G__29343__a = new Array(arguments.length -  1);
while (G__29343__i < G__29343__a.length) {G__29343__a[G__29343__i] = arguments[G__29343__i + 1]; ++G__29343__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29343__a,0);
} 
return G__29342__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29342.cljs$lang$maxFixedArity = 1;
G__29342.cljs$lang$applyTo = (function (arglist__29344){
var opts__20028__auto__ = cljs.core.first(arglist__29344);
var children__20029__auto__ = cljs.core.rest(arglist__29344);
return G__29342__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29342.cljs$core$IFn$_invoke$arity$variadic = G__29342__delegate;
return G__29342;
})()
;
om_tools$dom$li = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$li__0.call(this);
default:
var G__29345 = null;
if (arguments.length > 1) {
var G__29346__i = 0, G__29346__a = new Array(arguments.length -  1);
while (G__29346__i < G__29346__a.length) {G__29346__a[G__29346__i] = arguments[G__29346__i + 1]; ++G__29346__i;}
G__29345 = new cljs.core.IndexedSeq(G__29346__a,0);
}
return om_tools$dom$li__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$li.cljs$lang$maxFixedArity = 1;
om_tools$dom$li.cljs$lang$applyTo = om_tools$dom$li__2.cljs$lang$applyTo;
om_tools$dom$li.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$li__0;
om_tools$dom$li.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$li__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$li;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.link = (function() {
var om_tools$dom$link = null;
var om_tools$dom$link__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});
var om_tools$dom$link__2 = (function() { 
var G__29347__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__20028__auto__,children__20029__auto__);
};
var G__29347 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29348__i = 0, G__29348__a = new Array(arguments.length -  1);
while (G__29348__i < G__29348__a.length) {G__29348__a[G__29348__i] = arguments[G__29348__i + 1]; ++G__29348__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29348__a,0);
} 
return G__29347__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29347.cljs$lang$maxFixedArity = 1;
G__29347.cljs$lang$applyTo = (function (arglist__29349){
var opts__20028__auto__ = cljs.core.first(arglist__29349);
var children__20029__auto__ = cljs.core.rest(arglist__29349);
return G__29347__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29347.cljs$core$IFn$_invoke$arity$variadic = G__29347__delegate;
return G__29347;
})()
;
om_tools$dom$link = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$link__0.call(this);
default:
var G__29350 = null;
if (arguments.length > 1) {
var G__29351__i = 0, G__29351__a = new Array(arguments.length -  1);
while (G__29351__i < G__29351__a.length) {G__29351__a[G__29351__i] = arguments[G__29351__i + 1]; ++G__29351__i;}
G__29350 = new cljs.core.IndexedSeq(G__29351__a,0);
}
return om_tools$dom$link__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$link.cljs$lang$maxFixedArity = 1;
om_tools$dom$link.cljs$lang$applyTo = om_tools$dom$link__2.cljs$lang$applyTo;
om_tools$dom$link.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$link__0;
om_tools$dom$link.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$link__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$link;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.main = (function() {
var om_tools$dom$main = null;
var om_tools$dom$main__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});
var om_tools$dom$main__2 = (function() { 
var G__29352__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__20028__auto__,children__20029__auto__);
};
var G__29352 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29353__i = 0, G__29353__a = new Array(arguments.length -  1);
while (G__29353__i < G__29353__a.length) {G__29353__a[G__29353__i] = arguments[G__29353__i + 1]; ++G__29353__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29353__a,0);
} 
return G__29352__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29352.cljs$lang$maxFixedArity = 1;
G__29352.cljs$lang$applyTo = (function (arglist__29354){
var opts__20028__auto__ = cljs.core.first(arglist__29354);
var children__20029__auto__ = cljs.core.rest(arglist__29354);
return G__29352__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29352.cljs$core$IFn$_invoke$arity$variadic = G__29352__delegate;
return G__29352;
})()
;
om_tools$dom$main = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$main__0.call(this);
default:
var G__29355 = null;
if (arguments.length > 1) {
var G__29356__i = 0, G__29356__a = new Array(arguments.length -  1);
while (G__29356__i < G__29356__a.length) {G__29356__a[G__29356__i] = arguments[G__29356__i + 1]; ++G__29356__i;}
G__29355 = new cljs.core.IndexedSeq(G__29356__a,0);
}
return om_tools$dom$main__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$main.cljs$lang$maxFixedArity = 1;
om_tools$dom$main.cljs$lang$applyTo = om_tools$dom$main__2.cljs$lang$applyTo;
om_tools$dom$main.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$main__0;
om_tools$dom$main.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$main__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$main;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.map = (function() {
var om_tools$dom$map = null;
var om_tools$dom$map__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});
var om_tools$dom$map__2 = (function() { 
var G__29357__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__20028__auto__,children__20029__auto__);
};
var G__29357 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29358__i = 0, G__29358__a = new Array(arguments.length -  1);
while (G__29358__i < G__29358__a.length) {G__29358__a[G__29358__i] = arguments[G__29358__i + 1]; ++G__29358__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29358__a,0);
} 
return G__29357__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29357.cljs$lang$maxFixedArity = 1;
G__29357.cljs$lang$applyTo = (function (arglist__29359){
var opts__20028__auto__ = cljs.core.first(arglist__29359);
var children__20029__auto__ = cljs.core.rest(arglist__29359);
return G__29357__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29357.cljs$core$IFn$_invoke$arity$variadic = G__29357__delegate;
return G__29357;
})()
;
om_tools$dom$map = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$map__0.call(this);
default:
var G__29360 = null;
if (arguments.length > 1) {
var G__29361__i = 0, G__29361__a = new Array(arguments.length -  1);
while (G__29361__i < G__29361__a.length) {G__29361__a[G__29361__i] = arguments[G__29361__i + 1]; ++G__29361__i;}
G__29360 = new cljs.core.IndexedSeq(G__29361__a,0);
}
return om_tools$dom$map__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$map.cljs$lang$maxFixedArity = 1;
om_tools$dom$map.cljs$lang$applyTo = om_tools$dom$map__2.cljs$lang$applyTo;
om_tools$dom$map.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$map__0;
om_tools$dom$map.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$map__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$map;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.mark = (function() {
var om_tools$dom$mark = null;
var om_tools$dom$mark__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});
var om_tools$dom$mark__2 = (function() { 
var G__29362__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__20028__auto__,children__20029__auto__);
};
var G__29362 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29363__i = 0, G__29363__a = new Array(arguments.length -  1);
while (G__29363__i < G__29363__a.length) {G__29363__a[G__29363__i] = arguments[G__29363__i + 1]; ++G__29363__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29363__a,0);
} 
return G__29362__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29362.cljs$lang$maxFixedArity = 1;
G__29362.cljs$lang$applyTo = (function (arglist__29364){
var opts__20028__auto__ = cljs.core.first(arglist__29364);
var children__20029__auto__ = cljs.core.rest(arglist__29364);
return G__29362__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29362.cljs$core$IFn$_invoke$arity$variadic = G__29362__delegate;
return G__29362;
})()
;
om_tools$dom$mark = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$mark__0.call(this);
default:
var G__29365 = null;
if (arguments.length > 1) {
var G__29366__i = 0, G__29366__a = new Array(arguments.length -  1);
while (G__29366__i < G__29366__a.length) {G__29366__a[G__29366__i] = arguments[G__29366__i + 1]; ++G__29366__i;}
G__29365 = new cljs.core.IndexedSeq(G__29366__a,0);
}
return om_tools$dom$mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$mark.cljs$lang$maxFixedArity = 1;
om_tools$dom$mark.cljs$lang$applyTo = om_tools$dom$mark__2.cljs$lang$applyTo;
om_tools$dom$mark.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$mark__0;
om_tools$dom$mark.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$mark__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$mark;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.marquee = (function() {
var om_tools$dom$marquee = null;
var om_tools$dom$marquee__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});
var om_tools$dom$marquee__2 = (function() { 
var G__29367__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__20028__auto__,children__20029__auto__);
};
var G__29367 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29368__i = 0, G__29368__a = new Array(arguments.length -  1);
while (G__29368__i < G__29368__a.length) {G__29368__a[G__29368__i] = arguments[G__29368__i + 1]; ++G__29368__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29368__a,0);
} 
return G__29367__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29367.cljs$lang$maxFixedArity = 1;
G__29367.cljs$lang$applyTo = (function (arglist__29369){
var opts__20028__auto__ = cljs.core.first(arglist__29369);
var children__20029__auto__ = cljs.core.rest(arglist__29369);
return G__29367__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29367.cljs$core$IFn$_invoke$arity$variadic = G__29367__delegate;
return G__29367;
})()
;
om_tools$dom$marquee = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$marquee__0.call(this);
default:
var G__29370 = null;
if (arguments.length > 1) {
var G__29371__i = 0, G__29371__a = new Array(arguments.length -  1);
while (G__29371__i < G__29371__a.length) {G__29371__a[G__29371__i] = arguments[G__29371__i + 1]; ++G__29371__i;}
G__29370 = new cljs.core.IndexedSeq(G__29371__a,0);
}
return om_tools$dom$marquee__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$marquee.cljs$lang$maxFixedArity = 1;
om_tools$dom$marquee.cljs$lang$applyTo = om_tools$dom$marquee__2.cljs$lang$applyTo;
om_tools$dom$marquee.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$marquee__0;
om_tools$dom$marquee.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$marquee__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$marquee;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.menu = (function() {
var om_tools$dom$menu = null;
var om_tools$dom$menu__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});
var om_tools$dom$menu__2 = (function() { 
var G__29372__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__20028__auto__,children__20029__auto__);
};
var G__29372 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29373__i = 0, G__29373__a = new Array(arguments.length -  1);
while (G__29373__i < G__29373__a.length) {G__29373__a[G__29373__i] = arguments[G__29373__i + 1]; ++G__29373__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29373__a,0);
} 
return G__29372__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29372.cljs$lang$maxFixedArity = 1;
G__29372.cljs$lang$applyTo = (function (arglist__29374){
var opts__20028__auto__ = cljs.core.first(arglist__29374);
var children__20029__auto__ = cljs.core.rest(arglist__29374);
return G__29372__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29372.cljs$core$IFn$_invoke$arity$variadic = G__29372__delegate;
return G__29372;
})()
;
om_tools$dom$menu = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$menu__0.call(this);
default:
var G__29375 = null;
if (arguments.length > 1) {
var G__29376__i = 0, G__29376__a = new Array(arguments.length -  1);
while (G__29376__i < G__29376__a.length) {G__29376__a[G__29376__i] = arguments[G__29376__i + 1]; ++G__29376__i;}
G__29375 = new cljs.core.IndexedSeq(G__29376__a,0);
}
return om_tools$dom$menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$menu.cljs$lang$maxFixedArity = 1;
om_tools$dom$menu.cljs$lang$applyTo = om_tools$dom$menu__2.cljs$lang$applyTo;
om_tools$dom$menu.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$menu__0;
om_tools$dom$menu.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$menu__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$menu;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.menuitem = (function() {
var om_tools$dom$menuitem = null;
var om_tools$dom$menuitem__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});
var om_tools$dom$menuitem__2 = (function() { 
var G__29377__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__20028__auto__,children__20029__auto__);
};
var G__29377 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29378__i = 0, G__29378__a = new Array(arguments.length -  1);
while (G__29378__i < G__29378__a.length) {G__29378__a[G__29378__i] = arguments[G__29378__i + 1]; ++G__29378__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29378__a,0);
} 
return G__29377__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29377.cljs$lang$maxFixedArity = 1;
G__29377.cljs$lang$applyTo = (function (arglist__29379){
var opts__20028__auto__ = cljs.core.first(arglist__29379);
var children__20029__auto__ = cljs.core.rest(arglist__29379);
return G__29377__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29377.cljs$core$IFn$_invoke$arity$variadic = G__29377__delegate;
return G__29377;
})()
;
om_tools$dom$menuitem = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$menuitem__0.call(this);
default:
var G__29380 = null;
if (arguments.length > 1) {
var G__29381__i = 0, G__29381__a = new Array(arguments.length -  1);
while (G__29381__i < G__29381__a.length) {G__29381__a[G__29381__i] = arguments[G__29381__i + 1]; ++G__29381__i;}
G__29380 = new cljs.core.IndexedSeq(G__29381__a,0);
}
return om_tools$dom$menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$menuitem.cljs$lang$maxFixedArity = 1;
om_tools$dom$menuitem.cljs$lang$applyTo = om_tools$dom$menuitem__2.cljs$lang$applyTo;
om_tools$dom$menuitem.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$menuitem__0;
om_tools$dom$menuitem.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$menuitem__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$menuitem;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.meta = (function() {
var om_tools$dom$meta = null;
var om_tools$dom$meta__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});
var om_tools$dom$meta__2 = (function() { 
var G__29382__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__20028__auto__,children__20029__auto__);
};
var G__29382 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29383__i = 0, G__29383__a = new Array(arguments.length -  1);
while (G__29383__i < G__29383__a.length) {G__29383__a[G__29383__i] = arguments[G__29383__i + 1]; ++G__29383__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29383__a,0);
} 
return G__29382__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29382.cljs$lang$maxFixedArity = 1;
G__29382.cljs$lang$applyTo = (function (arglist__29384){
var opts__20028__auto__ = cljs.core.first(arglist__29384);
var children__20029__auto__ = cljs.core.rest(arglist__29384);
return G__29382__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29382.cljs$core$IFn$_invoke$arity$variadic = G__29382__delegate;
return G__29382;
})()
;
om_tools$dom$meta = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$meta__0.call(this);
default:
var G__29385 = null;
if (arguments.length > 1) {
var G__29386__i = 0, G__29386__a = new Array(arguments.length -  1);
while (G__29386__i < G__29386__a.length) {G__29386__a[G__29386__i] = arguments[G__29386__i + 1]; ++G__29386__i;}
G__29385 = new cljs.core.IndexedSeq(G__29386__a,0);
}
return om_tools$dom$meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$meta.cljs$lang$maxFixedArity = 1;
om_tools$dom$meta.cljs$lang$applyTo = om_tools$dom$meta__2.cljs$lang$applyTo;
om_tools$dom$meta.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$meta__0;
om_tools$dom$meta.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$meta__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$meta;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.meter = (function() {
var om_tools$dom$meter = null;
var om_tools$dom$meter__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});
var om_tools$dom$meter__2 = (function() { 
var G__29387__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__20028__auto__,children__20029__auto__);
};
var G__29387 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29388__i = 0, G__29388__a = new Array(arguments.length -  1);
while (G__29388__i < G__29388__a.length) {G__29388__a[G__29388__i] = arguments[G__29388__i + 1]; ++G__29388__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29388__a,0);
} 
return G__29387__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29387.cljs$lang$maxFixedArity = 1;
G__29387.cljs$lang$applyTo = (function (arglist__29389){
var opts__20028__auto__ = cljs.core.first(arglist__29389);
var children__20029__auto__ = cljs.core.rest(arglist__29389);
return G__29387__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29387.cljs$core$IFn$_invoke$arity$variadic = G__29387__delegate;
return G__29387;
})()
;
om_tools$dom$meter = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$meter__0.call(this);
default:
var G__29390 = null;
if (arguments.length > 1) {
var G__29391__i = 0, G__29391__a = new Array(arguments.length -  1);
while (G__29391__i < G__29391__a.length) {G__29391__a[G__29391__i] = arguments[G__29391__i + 1]; ++G__29391__i;}
G__29390 = new cljs.core.IndexedSeq(G__29391__a,0);
}
return om_tools$dom$meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$meter.cljs$lang$maxFixedArity = 1;
om_tools$dom$meter.cljs$lang$applyTo = om_tools$dom$meter__2.cljs$lang$applyTo;
om_tools$dom$meter.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$meter__0;
om_tools$dom$meter.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$meter__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$meter;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.nav = (function() {
var om_tools$dom$nav = null;
var om_tools$dom$nav__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});
var om_tools$dom$nav__2 = (function() { 
var G__29392__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__20028__auto__,children__20029__auto__);
};
var G__29392 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29393__i = 0, G__29393__a = new Array(arguments.length -  1);
while (G__29393__i < G__29393__a.length) {G__29393__a[G__29393__i] = arguments[G__29393__i + 1]; ++G__29393__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29393__a,0);
} 
return G__29392__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29392.cljs$lang$maxFixedArity = 1;
G__29392.cljs$lang$applyTo = (function (arglist__29394){
var opts__20028__auto__ = cljs.core.first(arglist__29394);
var children__20029__auto__ = cljs.core.rest(arglist__29394);
return G__29392__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29392.cljs$core$IFn$_invoke$arity$variadic = G__29392__delegate;
return G__29392;
})()
;
om_tools$dom$nav = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$nav__0.call(this);
default:
var G__29395 = null;
if (arguments.length > 1) {
var G__29396__i = 0, G__29396__a = new Array(arguments.length -  1);
while (G__29396__i < G__29396__a.length) {G__29396__a[G__29396__i] = arguments[G__29396__i + 1]; ++G__29396__i;}
G__29395 = new cljs.core.IndexedSeq(G__29396__a,0);
}
return om_tools$dom$nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$nav.cljs$lang$maxFixedArity = 1;
om_tools$dom$nav.cljs$lang$applyTo = om_tools$dom$nav__2.cljs$lang$applyTo;
om_tools$dom$nav.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$nav__0;
om_tools$dom$nav.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$nav__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$nav;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.noscript = (function() {
var om_tools$dom$noscript = null;
var om_tools$dom$noscript__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});
var om_tools$dom$noscript__2 = (function() { 
var G__29397__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__20028__auto__,children__20029__auto__);
};
var G__29397 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29398__i = 0, G__29398__a = new Array(arguments.length -  1);
while (G__29398__i < G__29398__a.length) {G__29398__a[G__29398__i] = arguments[G__29398__i + 1]; ++G__29398__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29398__a,0);
} 
return G__29397__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29397.cljs$lang$maxFixedArity = 1;
G__29397.cljs$lang$applyTo = (function (arglist__29399){
var opts__20028__auto__ = cljs.core.first(arglist__29399);
var children__20029__auto__ = cljs.core.rest(arglist__29399);
return G__29397__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29397.cljs$core$IFn$_invoke$arity$variadic = G__29397__delegate;
return G__29397;
})()
;
om_tools$dom$noscript = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$noscript__0.call(this);
default:
var G__29400 = null;
if (arguments.length > 1) {
var G__29401__i = 0, G__29401__a = new Array(arguments.length -  1);
while (G__29401__i < G__29401__a.length) {G__29401__a[G__29401__i] = arguments[G__29401__i + 1]; ++G__29401__i;}
G__29400 = new cljs.core.IndexedSeq(G__29401__a,0);
}
return om_tools$dom$noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$noscript.cljs$lang$maxFixedArity = 1;
om_tools$dom$noscript.cljs$lang$applyTo = om_tools$dom$noscript__2.cljs$lang$applyTo;
om_tools$dom$noscript.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$noscript__0;
om_tools$dom$noscript.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$noscript__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$noscript;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.object = (function() {
var om_tools$dom$object = null;
var om_tools$dom$object__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});
var om_tools$dom$object__2 = (function() { 
var G__29402__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__20028__auto__,children__20029__auto__);
};
var G__29402 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29403__i = 0, G__29403__a = new Array(arguments.length -  1);
while (G__29403__i < G__29403__a.length) {G__29403__a[G__29403__i] = arguments[G__29403__i + 1]; ++G__29403__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29403__a,0);
} 
return G__29402__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29402.cljs$lang$maxFixedArity = 1;
G__29402.cljs$lang$applyTo = (function (arglist__29404){
var opts__20028__auto__ = cljs.core.first(arglist__29404);
var children__20029__auto__ = cljs.core.rest(arglist__29404);
return G__29402__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29402.cljs$core$IFn$_invoke$arity$variadic = G__29402__delegate;
return G__29402;
})()
;
om_tools$dom$object = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$object__0.call(this);
default:
var G__29405 = null;
if (arguments.length > 1) {
var G__29406__i = 0, G__29406__a = new Array(arguments.length -  1);
while (G__29406__i < G__29406__a.length) {G__29406__a[G__29406__i] = arguments[G__29406__i + 1]; ++G__29406__i;}
G__29405 = new cljs.core.IndexedSeq(G__29406__a,0);
}
return om_tools$dom$object__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$object.cljs$lang$maxFixedArity = 1;
om_tools$dom$object.cljs$lang$applyTo = om_tools$dom$object__2.cljs$lang$applyTo;
om_tools$dom$object.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$object__0;
om_tools$dom$object.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$object__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$object;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ol = (function() {
var om_tools$dom$ol = null;
var om_tools$dom$ol__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});
var om_tools$dom$ol__2 = (function() { 
var G__29407__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__20028__auto__,children__20029__auto__);
};
var G__29407 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29408__i = 0, G__29408__a = new Array(arguments.length -  1);
while (G__29408__i < G__29408__a.length) {G__29408__a[G__29408__i] = arguments[G__29408__i + 1]; ++G__29408__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29408__a,0);
} 
return G__29407__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29407.cljs$lang$maxFixedArity = 1;
G__29407.cljs$lang$applyTo = (function (arglist__29409){
var opts__20028__auto__ = cljs.core.first(arglist__29409);
var children__20029__auto__ = cljs.core.rest(arglist__29409);
return G__29407__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29407.cljs$core$IFn$_invoke$arity$variadic = G__29407__delegate;
return G__29407;
})()
;
om_tools$dom$ol = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ol__0.call(this);
default:
var G__29410 = null;
if (arguments.length > 1) {
var G__29411__i = 0, G__29411__a = new Array(arguments.length -  1);
while (G__29411__i < G__29411__a.length) {G__29411__a[G__29411__i] = arguments[G__29411__i + 1]; ++G__29411__i;}
G__29410 = new cljs.core.IndexedSeq(G__29411__a,0);
}
return om_tools$dom$ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ol.cljs$lang$maxFixedArity = 1;
om_tools$dom$ol.cljs$lang$applyTo = om_tools$dom$ol__2.cljs$lang$applyTo;
om_tools$dom$ol.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ol__0;
om_tools$dom$ol.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ol__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ol;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.optgroup = (function() {
var om_tools$dom$optgroup = null;
var om_tools$dom$optgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});
var om_tools$dom$optgroup__2 = (function() { 
var G__29412__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__20028__auto__,children__20029__auto__);
};
var G__29412 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29413__i = 0, G__29413__a = new Array(arguments.length -  1);
while (G__29413__i < G__29413__a.length) {G__29413__a[G__29413__i] = arguments[G__29413__i + 1]; ++G__29413__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29413__a,0);
} 
return G__29412__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29412.cljs$lang$maxFixedArity = 1;
G__29412.cljs$lang$applyTo = (function (arglist__29414){
var opts__20028__auto__ = cljs.core.first(arglist__29414);
var children__20029__auto__ = cljs.core.rest(arglist__29414);
return G__29412__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29412.cljs$core$IFn$_invoke$arity$variadic = G__29412__delegate;
return G__29412;
})()
;
om_tools$dom$optgroup = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$optgroup__0.call(this);
default:
var G__29415 = null;
if (arguments.length > 1) {
var G__29416__i = 0, G__29416__a = new Array(arguments.length -  1);
while (G__29416__i < G__29416__a.length) {G__29416__a[G__29416__i] = arguments[G__29416__i + 1]; ++G__29416__i;}
G__29415 = new cljs.core.IndexedSeq(G__29416__a,0);
}
return om_tools$dom$optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$optgroup.cljs$lang$maxFixedArity = 1;
om_tools$dom$optgroup.cljs$lang$applyTo = om_tools$dom$optgroup__2.cljs$lang$applyTo;
om_tools$dom$optgroup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$optgroup__0;
om_tools$dom$optgroup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$optgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$optgroup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.output = (function() {
var om_tools$dom$output = null;
var om_tools$dom$output__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});
var om_tools$dom$output__2 = (function() { 
var G__29417__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__20028__auto__,children__20029__auto__);
};
var G__29417 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29418__i = 0, G__29418__a = new Array(arguments.length -  1);
while (G__29418__i < G__29418__a.length) {G__29418__a[G__29418__i] = arguments[G__29418__i + 1]; ++G__29418__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29418__a,0);
} 
return G__29417__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29417.cljs$lang$maxFixedArity = 1;
G__29417.cljs$lang$applyTo = (function (arglist__29419){
var opts__20028__auto__ = cljs.core.first(arglist__29419);
var children__20029__auto__ = cljs.core.rest(arglist__29419);
return G__29417__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29417.cljs$core$IFn$_invoke$arity$variadic = G__29417__delegate;
return G__29417;
})()
;
om_tools$dom$output = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$output__0.call(this);
default:
var G__29420 = null;
if (arguments.length > 1) {
var G__29421__i = 0, G__29421__a = new Array(arguments.length -  1);
while (G__29421__i < G__29421__a.length) {G__29421__a[G__29421__i] = arguments[G__29421__i + 1]; ++G__29421__i;}
G__29420 = new cljs.core.IndexedSeq(G__29421__a,0);
}
return om_tools$dom$output__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$output.cljs$lang$maxFixedArity = 1;
om_tools$dom$output.cljs$lang$applyTo = om_tools$dom$output__2.cljs$lang$applyTo;
om_tools$dom$output.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$output__0;
om_tools$dom$output.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$output__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$output;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.p = (function() {
var om_tools$dom$p = null;
var om_tools$dom$p__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});
var om_tools$dom$p__2 = (function() { 
var G__29422__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__20028__auto__,children__20029__auto__);
};
var G__29422 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29423__i = 0, G__29423__a = new Array(arguments.length -  1);
while (G__29423__i < G__29423__a.length) {G__29423__a[G__29423__i] = arguments[G__29423__i + 1]; ++G__29423__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29423__a,0);
} 
return G__29422__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29422.cljs$lang$maxFixedArity = 1;
G__29422.cljs$lang$applyTo = (function (arglist__29424){
var opts__20028__auto__ = cljs.core.first(arglist__29424);
var children__20029__auto__ = cljs.core.rest(arglist__29424);
return G__29422__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29422.cljs$core$IFn$_invoke$arity$variadic = G__29422__delegate;
return G__29422;
})()
;
om_tools$dom$p = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$p__0.call(this);
default:
var G__29425 = null;
if (arguments.length > 1) {
var G__29426__i = 0, G__29426__a = new Array(arguments.length -  1);
while (G__29426__i < G__29426__a.length) {G__29426__a[G__29426__i] = arguments[G__29426__i + 1]; ++G__29426__i;}
G__29425 = new cljs.core.IndexedSeq(G__29426__a,0);
}
return om_tools$dom$p__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$p.cljs$lang$maxFixedArity = 1;
om_tools$dom$p.cljs$lang$applyTo = om_tools$dom$p__2.cljs$lang$applyTo;
om_tools$dom$p.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$p__0;
om_tools$dom$p.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$p__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$p;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.param = (function() {
var om_tools$dom$param = null;
var om_tools$dom$param__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});
var om_tools$dom$param__2 = (function() { 
var G__29427__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__20028__auto__,children__20029__auto__);
};
var G__29427 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29428__i = 0, G__29428__a = new Array(arguments.length -  1);
while (G__29428__i < G__29428__a.length) {G__29428__a[G__29428__i] = arguments[G__29428__i + 1]; ++G__29428__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29428__a,0);
} 
return G__29427__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29427.cljs$lang$maxFixedArity = 1;
G__29427.cljs$lang$applyTo = (function (arglist__29429){
var opts__20028__auto__ = cljs.core.first(arglist__29429);
var children__20029__auto__ = cljs.core.rest(arglist__29429);
return G__29427__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29427.cljs$core$IFn$_invoke$arity$variadic = G__29427__delegate;
return G__29427;
})()
;
om_tools$dom$param = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$param__0.call(this);
default:
var G__29430 = null;
if (arguments.length > 1) {
var G__29431__i = 0, G__29431__a = new Array(arguments.length -  1);
while (G__29431__i < G__29431__a.length) {G__29431__a[G__29431__i] = arguments[G__29431__i + 1]; ++G__29431__i;}
G__29430 = new cljs.core.IndexedSeq(G__29431__a,0);
}
return om_tools$dom$param__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$param.cljs$lang$maxFixedArity = 1;
om_tools$dom$param.cljs$lang$applyTo = om_tools$dom$param__2.cljs$lang$applyTo;
om_tools$dom$param.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$param__0;
om_tools$dom$param.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$param__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$param;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.pre = (function() {
var om_tools$dom$pre = null;
var om_tools$dom$pre__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});
var om_tools$dom$pre__2 = (function() { 
var G__29432__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__20028__auto__,children__20029__auto__);
};
var G__29432 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29433__i = 0, G__29433__a = new Array(arguments.length -  1);
while (G__29433__i < G__29433__a.length) {G__29433__a[G__29433__i] = arguments[G__29433__i + 1]; ++G__29433__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29433__a,0);
} 
return G__29432__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29432.cljs$lang$maxFixedArity = 1;
G__29432.cljs$lang$applyTo = (function (arglist__29434){
var opts__20028__auto__ = cljs.core.first(arglist__29434);
var children__20029__auto__ = cljs.core.rest(arglist__29434);
return G__29432__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29432.cljs$core$IFn$_invoke$arity$variadic = G__29432__delegate;
return G__29432;
})()
;
om_tools$dom$pre = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$pre__0.call(this);
default:
var G__29435 = null;
if (arguments.length > 1) {
var G__29436__i = 0, G__29436__a = new Array(arguments.length -  1);
while (G__29436__i < G__29436__a.length) {G__29436__a[G__29436__i] = arguments[G__29436__i + 1]; ++G__29436__i;}
G__29435 = new cljs.core.IndexedSeq(G__29436__a,0);
}
return om_tools$dom$pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$pre.cljs$lang$maxFixedArity = 1;
om_tools$dom$pre.cljs$lang$applyTo = om_tools$dom$pre__2.cljs$lang$applyTo;
om_tools$dom$pre.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$pre__0;
om_tools$dom$pre.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$pre__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$pre;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.progress = (function() {
var om_tools$dom$progress = null;
var om_tools$dom$progress__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});
var om_tools$dom$progress__2 = (function() { 
var G__29437__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__20028__auto__,children__20029__auto__);
};
var G__29437 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29438__i = 0, G__29438__a = new Array(arguments.length -  1);
while (G__29438__i < G__29438__a.length) {G__29438__a[G__29438__i] = arguments[G__29438__i + 1]; ++G__29438__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29438__a,0);
} 
return G__29437__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29437.cljs$lang$maxFixedArity = 1;
G__29437.cljs$lang$applyTo = (function (arglist__29439){
var opts__20028__auto__ = cljs.core.first(arglist__29439);
var children__20029__auto__ = cljs.core.rest(arglist__29439);
return G__29437__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29437.cljs$core$IFn$_invoke$arity$variadic = G__29437__delegate;
return G__29437;
})()
;
om_tools$dom$progress = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$progress__0.call(this);
default:
var G__29440 = null;
if (arguments.length > 1) {
var G__29441__i = 0, G__29441__a = new Array(arguments.length -  1);
while (G__29441__i < G__29441__a.length) {G__29441__a[G__29441__i] = arguments[G__29441__i + 1]; ++G__29441__i;}
G__29440 = new cljs.core.IndexedSeq(G__29441__a,0);
}
return om_tools$dom$progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$progress.cljs$lang$maxFixedArity = 1;
om_tools$dom$progress.cljs$lang$applyTo = om_tools$dom$progress__2.cljs$lang$applyTo;
om_tools$dom$progress.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$progress__0;
om_tools$dom$progress.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$progress__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$progress;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.q = (function() {
var om_tools$dom$q = null;
var om_tools$dom$q__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});
var om_tools$dom$q__2 = (function() { 
var G__29442__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__20028__auto__,children__20029__auto__);
};
var G__29442 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29443__i = 0, G__29443__a = new Array(arguments.length -  1);
while (G__29443__i < G__29443__a.length) {G__29443__a[G__29443__i] = arguments[G__29443__i + 1]; ++G__29443__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29443__a,0);
} 
return G__29442__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29442.cljs$lang$maxFixedArity = 1;
G__29442.cljs$lang$applyTo = (function (arglist__29444){
var opts__20028__auto__ = cljs.core.first(arglist__29444);
var children__20029__auto__ = cljs.core.rest(arglist__29444);
return G__29442__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29442.cljs$core$IFn$_invoke$arity$variadic = G__29442__delegate;
return G__29442;
})()
;
om_tools$dom$q = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$q__0.call(this);
default:
var G__29445 = null;
if (arguments.length > 1) {
var G__29446__i = 0, G__29446__a = new Array(arguments.length -  1);
while (G__29446__i < G__29446__a.length) {G__29446__a[G__29446__i] = arguments[G__29446__i + 1]; ++G__29446__i;}
G__29445 = new cljs.core.IndexedSeq(G__29446__a,0);
}
return om_tools$dom$q__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$q.cljs$lang$maxFixedArity = 1;
om_tools$dom$q.cljs$lang$applyTo = om_tools$dom$q__2.cljs$lang$applyTo;
om_tools$dom$q.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$q__0;
om_tools$dom$q.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$q__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$q;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rp = (function() {
var om_tools$dom$rp = null;
var om_tools$dom$rp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});
var om_tools$dom$rp__2 = (function() { 
var G__29447__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__20028__auto__,children__20029__auto__);
};
var G__29447 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29448__i = 0, G__29448__a = new Array(arguments.length -  1);
while (G__29448__i < G__29448__a.length) {G__29448__a[G__29448__i] = arguments[G__29448__i + 1]; ++G__29448__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29448__a,0);
} 
return G__29447__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29447.cljs$lang$maxFixedArity = 1;
G__29447.cljs$lang$applyTo = (function (arglist__29449){
var opts__20028__auto__ = cljs.core.first(arglist__29449);
var children__20029__auto__ = cljs.core.rest(arglist__29449);
return G__29447__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29447.cljs$core$IFn$_invoke$arity$variadic = G__29447__delegate;
return G__29447;
})()
;
om_tools$dom$rp = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rp__0.call(this);
default:
var G__29450 = null;
if (arguments.length > 1) {
var G__29451__i = 0, G__29451__a = new Array(arguments.length -  1);
while (G__29451__i < G__29451__a.length) {G__29451__a[G__29451__i] = arguments[G__29451__i + 1]; ++G__29451__i;}
G__29450 = new cljs.core.IndexedSeq(G__29451__a,0);
}
return om_tools$dom$rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rp.cljs$lang$maxFixedArity = 1;
om_tools$dom$rp.cljs$lang$applyTo = om_tools$dom$rp__2.cljs$lang$applyTo;
om_tools$dom$rp.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rp__0;
om_tools$dom$rp.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rp__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rp;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rt = (function() {
var om_tools$dom$rt = null;
var om_tools$dom$rt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});
var om_tools$dom$rt__2 = (function() { 
var G__29452__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__20028__auto__,children__20029__auto__);
};
var G__29452 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29453__i = 0, G__29453__a = new Array(arguments.length -  1);
while (G__29453__i < G__29453__a.length) {G__29453__a[G__29453__i] = arguments[G__29453__i + 1]; ++G__29453__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29453__a,0);
} 
return G__29452__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29452.cljs$lang$maxFixedArity = 1;
G__29452.cljs$lang$applyTo = (function (arglist__29454){
var opts__20028__auto__ = cljs.core.first(arglist__29454);
var children__20029__auto__ = cljs.core.rest(arglist__29454);
return G__29452__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29452.cljs$core$IFn$_invoke$arity$variadic = G__29452__delegate;
return G__29452;
})()
;
om_tools$dom$rt = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rt__0.call(this);
default:
var G__29455 = null;
if (arguments.length > 1) {
var G__29456__i = 0, G__29456__a = new Array(arguments.length -  1);
while (G__29456__i < G__29456__a.length) {G__29456__a[G__29456__i] = arguments[G__29456__i + 1]; ++G__29456__i;}
G__29455 = new cljs.core.IndexedSeq(G__29456__a,0);
}
return om_tools$dom$rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rt.cljs$lang$maxFixedArity = 1;
om_tools$dom$rt.cljs$lang$applyTo = om_tools$dom$rt__2.cljs$lang$applyTo;
om_tools$dom$rt.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rt__0;
om_tools$dom$rt.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rt__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rt;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ruby = (function() {
var om_tools$dom$ruby = null;
var om_tools$dom$ruby__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});
var om_tools$dom$ruby__2 = (function() { 
var G__29457__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__20028__auto__,children__20029__auto__);
};
var G__29457 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29458__i = 0, G__29458__a = new Array(arguments.length -  1);
while (G__29458__i < G__29458__a.length) {G__29458__a[G__29458__i] = arguments[G__29458__i + 1]; ++G__29458__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29458__a,0);
} 
return G__29457__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29457.cljs$lang$maxFixedArity = 1;
G__29457.cljs$lang$applyTo = (function (arglist__29459){
var opts__20028__auto__ = cljs.core.first(arglist__29459);
var children__20029__auto__ = cljs.core.rest(arglist__29459);
return G__29457__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29457.cljs$core$IFn$_invoke$arity$variadic = G__29457__delegate;
return G__29457;
})()
;
om_tools$dom$ruby = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ruby__0.call(this);
default:
var G__29460 = null;
if (arguments.length > 1) {
var G__29461__i = 0, G__29461__a = new Array(arguments.length -  1);
while (G__29461__i < G__29461__a.length) {G__29461__a[G__29461__i] = arguments[G__29461__i + 1]; ++G__29461__i;}
G__29460 = new cljs.core.IndexedSeq(G__29461__a,0);
}
return om_tools$dom$ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ruby.cljs$lang$maxFixedArity = 1;
om_tools$dom$ruby.cljs$lang$applyTo = om_tools$dom$ruby__2.cljs$lang$applyTo;
om_tools$dom$ruby.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ruby__0;
om_tools$dom$ruby.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ruby__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ruby;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.s = (function() {
var om_tools$dom$s = null;
var om_tools$dom$s__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});
var om_tools$dom$s__2 = (function() { 
var G__29462__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__20028__auto__,children__20029__auto__);
};
var G__29462 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29463__i = 0, G__29463__a = new Array(arguments.length -  1);
while (G__29463__i < G__29463__a.length) {G__29463__a[G__29463__i] = arguments[G__29463__i + 1]; ++G__29463__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29463__a,0);
} 
return G__29462__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29462.cljs$lang$maxFixedArity = 1;
G__29462.cljs$lang$applyTo = (function (arglist__29464){
var opts__20028__auto__ = cljs.core.first(arglist__29464);
var children__20029__auto__ = cljs.core.rest(arglist__29464);
return G__29462__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29462.cljs$core$IFn$_invoke$arity$variadic = G__29462__delegate;
return G__29462;
})()
;
om_tools$dom$s = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$s__0.call(this);
default:
var G__29465 = null;
if (arguments.length > 1) {
var G__29466__i = 0, G__29466__a = new Array(arguments.length -  1);
while (G__29466__i < G__29466__a.length) {G__29466__a[G__29466__i] = arguments[G__29466__i + 1]; ++G__29466__i;}
G__29465 = new cljs.core.IndexedSeq(G__29466__a,0);
}
return om_tools$dom$s__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$s.cljs$lang$maxFixedArity = 1;
om_tools$dom$s.cljs$lang$applyTo = om_tools$dom$s__2.cljs$lang$applyTo;
om_tools$dom$s.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$s__0;
om_tools$dom$s.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$s__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$s;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.samp = (function() {
var om_tools$dom$samp = null;
var om_tools$dom$samp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});
var om_tools$dom$samp__2 = (function() { 
var G__29467__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__20028__auto__,children__20029__auto__);
};
var G__29467 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29468__i = 0, G__29468__a = new Array(arguments.length -  1);
while (G__29468__i < G__29468__a.length) {G__29468__a[G__29468__i] = arguments[G__29468__i + 1]; ++G__29468__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29468__a,0);
} 
return G__29467__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29467.cljs$lang$maxFixedArity = 1;
G__29467.cljs$lang$applyTo = (function (arglist__29469){
var opts__20028__auto__ = cljs.core.first(arglist__29469);
var children__20029__auto__ = cljs.core.rest(arglist__29469);
return G__29467__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29467.cljs$core$IFn$_invoke$arity$variadic = G__29467__delegate;
return G__29467;
})()
;
om_tools$dom$samp = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$samp__0.call(this);
default:
var G__29470 = null;
if (arguments.length > 1) {
var G__29471__i = 0, G__29471__a = new Array(arguments.length -  1);
while (G__29471__i < G__29471__a.length) {G__29471__a[G__29471__i] = arguments[G__29471__i + 1]; ++G__29471__i;}
G__29470 = new cljs.core.IndexedSeq(G__29471__a,0);
}
return om_tools$dom$samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$samp.cljs$lang$maxFixedArity = 1;
om_tools$dom$samp.cljs$lang$applyTo = om_tools$dom$samp__2.cljs$lang$applyTo;
om_tools$dom$samp.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$samp__0;
om_tools$dom$samp.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$samp__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$samp;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.script = (function() {
var om_tools$dom$script = null;
var om_tools$dom$script__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});
var om_tools$dom$script__2 = (function() { 
var G__29472__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__20028__auto__,children__20029__auto__);
};
var G__29472 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29473__i = 0, G__29473__a = new Array(arguments.length -  1);
while (G__29473__i < G__29473__a.length) {G__29473__a[G__29473__i] = arguments[G__29473__i + 1]; ++G__29473__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29473__a,0);
} 
return G__29472__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29472.cljs$lang$maxFixedArity = 1;
G__29472.cljs$lang$applyTo = (function (arglist__29474){
var opts__20028__auto__ = cljs.core.first(arglist__29474);
var children__20029__auto__ = cljs.core.rest(arglist__29474);
return G__29472__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29472.cljs$core$IFn$_invoke$arity$variadic = G__29472__delegate;
return G__29472;
})()
;
om_tools$dom$script = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$script__0.call(this);
default:
var G__29475 = null;
if (arguments.length > 1) {
var G__29476__i = 0, G__29476__a = new Array(arguments.length -  1);
while (G__29476__i < G__29476__a.length) {G__29476__a[G__29476__i] = arguments[G__29476__i + 1]; ++G__29476__i;}
G__29475 = new cljs.core.IndexedSeq(G__29476__a,0);
}
return om_tools$dom$script__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$script.cljs$lang$maxFixedArity = 1;
om_tools$dom$script.cljs$lang$applyTo = om_tools$dom$script__2.cljs$lang$applyTo;
om_tools$dom$script.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$script__0;
om_tools$dom$script.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$script__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$script;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.section = (function() {
var om_tools$dom$section = null;
var om_tools$dom$section__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});
var om_tools$dom$section__2 = (function() { 
var G__29477__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__20028__auto__,children__20029__auto__);
};
var G__29477 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29478__i = 0, G__29478__a = new Array(arguments.length -  1);
while (G__29478__i < G__29478__a.length) {G__29478__a[G__29478__i] = arguments[G__29478__i + 1]; ++G__29478__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29478__a,0);
} 
return G__29477__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29477.cljs$lang$maxFixedArity = 1;
G__29477.cljs$lang$applyTo = (function (arglist__29479){
var opts__20028__auto__ = cljs.core.first(arglist__29479);
var children__20029__auto__ = cljs.core.rest(arglist__29479);
return G__29477__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29477.cljs$core$IFn$_invoke$arity$variadic = G__29477__delegate;
return G__29477;
})()
;
om_tools$dom$section = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$section__0.call(this);
default:
var G__29480 = null;
if (arguments.length > 1) {
var G__29481__i = 0, G__29481__a = new Array(arguments.length -  1);
while (G__29481__i < G__29481__a.length) {G__29481__a[G__29481__i] = arguments[G__29481__i + 1]; ++G__29481__i;}
G__29480 = new cljs.core.IndexedSeq(G__29481__a,0);
}
return om_tools$dom$section__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$section.cljs$lang$maxFixedArity = 1;
om_tools$dom$section.cljs$lang$applyTo = om_tools$dom$section__2.cljs$lang$applyTo;
om_tools$dom$section.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$section__0;
om_tools$dom$section.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$section__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$section;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.select = (function() {
var om_tools$dom$select = null;
var om_tools$dom$select__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});
var om_tools$dom$select__2 = (function() { 
var G__29482__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__20028__auto__,children__20029__auto__);
};
var G__29482 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29483__i = 0, G__29483__a = new Array(arguments.length -  1);
while (G__29483__i < G__29483__a.length) {G__29483__a[G__29483__i] = arguments[G__29483__i + 1]; ++G__29483__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29483__a,0);
} 
return G__29482__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29482.cljs$lang$maxFixedArity = 1;
G__29482.cljs$lang$applyTo = (function (arglist__29484){
var opts__20028__auto__ = cljs.core.first(arglist__29484);
var children__20029__auto__ = cljs.core.rest(arglist__29484);
return G__29482__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29482.cljs$core$IFn$_invoke$arity$variadic = G__29482__delegate;
return G__29482;
})()
;
om_tools$dom$select = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$select__0.call(this);
default:
var G__29485 = null;
if (arguments.length > 1) {
var G__29486__i = 0, G__29486__a = new Array(arguments.length -  1);
while (G__29486__i < G__29486__a.length) {G__29486__a[G__29486__i] = arguments[G__29486__i + 1]; ++G__29486__i;}
G__29485 = new cljs.core.IndexedSeq(G__29486__a,0);
}
return om_tools$dom$select__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$select.cljs$lang$maxFixedArity = 1;
om_tools$dom$select.cljs$lang$applyTo = om_tools$dom$select__2.cljs$lang$applyTo;
om_tools$dom$select.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$select__0;
om_tools$dom$select.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$select__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$select;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.small = (function() {
var om_tools$dom$small = null;
var om_tools$dom$small__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});
var om_tools$dom$small__2 = (function() { 
var G__29487__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__20028__auto__,children__20029__auto__);
};
var G__29487 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29488__i = 0, G__29488__a = new Array(arguments.length -  1);
while (G__29488__i < G__29488__a.length) {G__29488__a[G__29488__i] = arguments[G__29488__i + 1]; ++G__29488__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29488__a,0);
} 
return G__29487__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29487.cljs$lang$maxFixedArity = 1;
G__29487.cljs$lang$applyTo = (function (arglist__29489){
var opts__20028__auto__ = cljs.core.first(arglist__29489);
var children__20029__auto__ = cljs.core.rest(arglist__29489);
return G__29487__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29487.cljs$core$IFn$_invoke$arity$variadic = G__29487__delegate;
return G__29487;
})()
;
om_tools$dom$small = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$small__0.call(this);
default:
var G__29490 = null;
if (arguments.length > 1) {
var G__29491__i = 0, G__29491__a = new Array(arguments.length -  1);
while (G__29491__i < G__29491__a.length) {G__29491__a[G__29491__i] = arguments[G__29491__i + 1]; ++G__29491__i;}
G__29490 = new cljs.core.IndexedSeq(G__29491__a,0);
}
return om_tools$dom$small__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$small.cljs$lang$maxFixedArity = 1;
om_tools$dom$small.cljs$lang$applyTo = om_tools$dom$small__2.cljs$lang$applyTo;
om_tools$dom$small.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$small__0;
om_tools$dom$small.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$small__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$small;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.source = (function() {
var om_tools$dom$source = null;
var om_tools$dom$source__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});
var om_tools$dom$source__2 = (function() { 
var G__29492__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__20028__auto__,children__20029__auto__);
};
var G__29492 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29493__i = 0, G__29493__a = new Array(arguments.length -  1);
while (G__29493__i < G__29493__a.length) {G__29493__a[G__29493__i] = arguments[G__29493__i + 1]; ++G__29493__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29493__a,0);
} 
return G__29492__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29492.cljs$lang$maxFixedArity = 1;
G__29492.cljs$lang$applyTo = (function (arglist__29494){
var opts__20028__auto__ = cljs.core.first(arglist__29494);
var children__20029__auto__ = cljs.core.rest(arglist__29494);
return G__29492__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29492.cljs$core$IFn$_invoke$arity$variadic = G__29492__delegate;
return G__29492;
})()
;
om_tools$dom$source = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$source__0.call(this);
default:
var G__29495 = null;
if (arguments.length > 1) {
var G__29496__i = 0, G__29496__a = new Array(arguments.length -  1);
while (G__29496__i < G__29496__a.length) {G__29496__a[G__29496__i] = arguments[G__29496__i + 1]; ++G__29496__i;}
G__29495 = new cljs.core.IndexedSeq(G__29496__a,0);
}
return om_tools$dom$source__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$source.cljs$lang$maxFixedArity = 1;
om_tools$dom$source.cljs$lang$applyTo = om_tools$dom$source__2.cljs$lang$applyTo;
om_tools$dom$source.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$source__0;
om_tools$dom$source.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$source__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$source;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.span = (function() {
var om_tools$dom$span = null;
var om_tools$dom$span__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});
var om_tools$dom$span__2 = (function() { 
var G__29497__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__20028__auto__,children__20029__auto__);
};
var G__29497 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29498__i = 0, G__29498__a = new Array(arguments.length -  1);
while (G__29498__i < G__29498__a.length) {G__29498__a[G__29498__i] = arguments[G__29498__i + 1]; ++G__29498__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29498__a,0);
} 
return G__29497__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29497.cljs$lang$maxFixedArity = 1;
G__29497.cljs$lang$applyTo = (function (arglist__29499){
var opts__20028__auto__ = cljs.core.first(arglist__29499);
var children__20029__auto__ = cljs.core.rest(arglist__29499);
return G__29497__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29497.cljs$core$IFn$_invoke$arity$variadic = G__29497__delegate;
return G__29497;
})()
;
om_tools$dom$span = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$span__0.call(this);
default:
var G__29500 = null;
if (arguments.length > 1) {
var G__29501__i = 0, G__29501__a = new Array(arguments.length -  1);
while (G__29501__i < G__29501__a.length) {G__29501__a[G__29501__i] = arguments[G__29501__i + 1]; ++G__29501__i;}
G__29500 = new cljs.core.IndexedSeq(G__29501__a,0);
}
return om_tools$dom$span__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$span.cljs$lang$maxFixedArity = 1;
om_tools$dom$span.cljs$lang$applyTo = om_tools$dom$span__2.cljs$lang$applyTo;
om_tools$dom$span.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$span__0;
om_tools$dom$span.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$span__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$span;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.strong = (function() {
var om_tools$dom$strong = null;
var om_tools$dom$strong__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});
var om_tools$dom$strong__2 = (function() { 
var G__29502__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__20028__auto__,children__20029__auto__);
};
var G__29502 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29503__i = 0, G__29503__a = new Array(arguments.length -  1);
while (G__29503__i < G__29503__a.length) {G__29503__a[G__29503__i] = arguments[G__29503__i + 1]; ++G__29503__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29503__a,0);
} 
return G__29502__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29502.cljs$lang$maxFixedArity = 1;
G__29502.cljs$lang$applyTo = (function (arglist__29504){
var opts__20028__auto__ = cljs.core.first(arglist__29504);
var children__20029__auto__ = cljs.core.rest(arglist__29504);
return G__29502__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29502.cljs$core$IFn$_invoke$arity$variadic = G__29502__delegate;
return G__29502;
})()
;
om_tools$dom$strong = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$strong__0.call(this);
default:
var G__29505 = null;
if (arguments.length > 1) {
var G__29506__i = 0, G__29506__a = new Array(arguments.length -  1);
while (G__29506__i < G__29506__a.length) {G__29506__a[G__29506__i] = arguments[G__29506__i + 1]; ++G__29506__i;}
G__29505 = new cljs.core.IndexedSeq(G__29506__a,0);
}
return om_tools$dom$strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$strong.cljs$lang$maxFixedArity = 1;
om_tools$dom$strong.cljs$lang$applyTo = om_tools$dom$strong__2.cljs$lang$applyTo;
om_tools$dom$strong.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$strong__0;
om_tools$dom$strong.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$strong__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$strong;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.style = (function() {
var om_tools$dom$style = null;
var om_tools$dom$style__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});
var om_tools$dom$style__2 = (function() { 
var G__29507__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__20028__auto__,children__20029__auto__);
};
var G__29507 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29508__i = 0, G__29508__a = new Array(arguments.length -  1);
while (G__29508__i < G__29508__a.length) {G__29508__a[G__29508__i] = arguments[G__29508__i + 1]; ++G__29508__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29508__a,0);
} 
return G__29507__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29507.cljs$lang$maxFixedArity = 1;
G__29507.cljs$lang$applyTo = (function (arglist__29509){
var opts__20028__auto__ = cljs.core.first(arglist__29509);
var children__20029__auto__ = cljs.core.rest(arglist__29509);
return G__29507__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29507.cljs$core$IFn$_invoke$arity$variadic = G__29507__delegate;
return G__29507;
})()
;
om_tools$dom$style = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$style__0.call(this);
default:
var G__29510 = null;
if (arguments.length > 1) {
var G__29511__i = 0, G__29511__a = new Array(arguments.length -  1);
while (G__29511__i < G__29511__a.length) {G__29511__a[G__29511__i] = arguments[G__29511__i + 1]; ++G__29511__i;}
G__29510 = new cljs.core.IndexedSeq(G__29511__a,0);
}
return om_tools$dom$style__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$style.cljs$lang$maxFixedArity = 1;
om_tools$dom$style.cljs$lang$applyTo = om_tools$dom$style__2.cljs$lang$applyTo;
om_tools$dom$style.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$style__0;
om_tools$dom$style.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$style__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$style;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.sub = (function() {
var om_tools$dom$sub = null;
var om_tools$dom$sub__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});
var om_tools$dom$sub__2 = (function() { 
var G__29512__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__20028__auto__,children__20029__auto__);
};
var G__29512 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29513__i = 0, G__29513__a = new Array(arguments.length -  1);
while (G__29513__i < G__29513__a.length) {G__29513__a[G__29513__i] = arguments[G__29513__i + 1]; ++G__29513__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29513__a,0);
} 
return G__29512__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29512.cljs$lang$maxFixedArity = 1;
G__29512.cljs$lang$applyTo = (function (arglist__29514){
var opts__20028__auto__ = cljs.core.first(arglist__29514);
var children__20029__auto__ = cljs.core.rest(arglist__29514);
return G__29512__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29512.cljs$core$IFn$_invoke$arity$variadic = G__29512__delegate;
return G__29512;
})()
;
om_tools$dom$sub = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$sub__0.call(this);
default:
var G__29515 = null;
if (arguments.length > 1) {
var G__29516__i = 0, G__29516__a = new Array(arguments.length -  1);
while (G__29516__i < G__29516__a.length) {G__29516__a[G__29516__i] = arguments[G__29516__i + 1]; ++G__29516__i;}
G__29515 = new cljs.core.IndexedSeq(G__29516__a,0);
}
return om_tools$dom$sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$sub.cljs$lang$maxFixedArity = 1;
om_tools$dom$sub.cljs$lang$applyTo = om_tools$dom$sub__2.cljs$lang$applyTo;
om_tools$dom$sub.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$sub__0;
om_tools$dom$sub.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$sub__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$sub;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.summary = (function() {
var om_tools$dom$summary = null;
var om_tools$dom$summary__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});
var om_tools$dom$summary__2 = (function() { 
var G__29517__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__20028__auto__,children__20029__auto__);
};
var G__29517 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29518__i = 0, G__29518__a = new Array(arguments.length -  1);
while (G__29518__i < G__29518__a.length) {G__29518__a[G__29518__i] = arguments[G__29518__i + 1]; ++G__29518__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29518__a,0);
} 
return G__29517__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29517.cljs$lang$maxFixedArity = 1;
G__29517.cljs$lang$applyTo = (function (arglist__29519){
var opts__20028__auto__ = cljs.core.first(arglist__29519);
var children__20029__auto__ = cljs.core.rest(arglist__29519);
return G__29517__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29517.cljs$core$IFn$_invoke$arity$variadic = G__29517__delegate;
return G__29517;
})()
;
om_tools$dom$summary = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$summary__0.call(this);
default:
var G__29520 = null;
if (arguments.length > 1) {
var G__29521__i = 0, G__29521__a = new Array(arguments.length -  1);
while (G__29521__i < G__29521__a.length) {G__29521__a[G__29521__i] = arguments[G__29521__i + 1]; ++G__29521__i;}
G__29520 = new cljs.core.IndexedSeq(G__29521__a,0);
}
return om_tools$dom$summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$summary.cljs$lang$maxFixedArity = 1;
om_tools$dom$summary.cljs$lang$applyTo = om_tools$dom$summary__2.cljs$lang$applyTo;
om_tools$dom$summary.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$summary__0;
om_tools$dom$summary.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$summary__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$summary;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.sup = (function() {
var om_tools$dom$sup = null;
var om_tools$dom$sup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});
var om_tools$dom$sup__2 = (function() { 
var G__29522__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__20028__auto__,children__20029__auto__);
};
var G__29522 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29523__i = 0, G__29523__a = new Array(arguments.length -  1);
while (G__29523__i < G__29523__a.length) {G__29523__a[G__29523__i] = arguments[G__29523__i + 1]; ++G__29523__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29523__a,0);
} 
return G__29522__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29522.cljs$lang$maxFixedArity = 1;
G__29522.cljs$lang$applyTo = (function (arglist__29524){
var opts__20028__auto__ = cljs.core.first(arglist__29524);
var children__20029__auto__ = cljs.core.rest(arglist__29524);
return G__29522__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29522.cljs$core$IFn$_invoke$arity$variadic = G__29522__delegate;
return G__29522;
})()
;
om_tools$dom$sup = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$sup__0.call(this);
default:
var G__29525 = null;
if (arguments.length > 1) {
var G__29526__i = 0, G__29526__a = new Array(arguments.length -  1);
while (G__29526__i < G__29526__a.length) {G__29526__a[G__29526__i] = arguments[G__29526__i + 1]; ++G__29526__i;}
G__29525 = new cljs.core.IndexedSeq(G__29526__a,0);
}
return om_tools$dom$sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$sup.cljs$lang$maxFixedArity = 1;
om_tools$dom$sup.cljs$lang$applyTo = om_tools$dom$sup__2.cljs$lang$applyTo;
om_tools$dom$sup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$sup__0;
om_tools$dom$sup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$sup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$sup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.table = (function() {
var om_tools$dom$table = null;
var om_tools$dom$table__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});
var om_tools$dom$table__2 = (function() { 
var G__29527__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__20028__auto__,children__20029__auto__);
};
var G__29527 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29528__i = 0, G__29528__a = new Array(arguments.length -  1);
while (G__29528__i < G__29528__a.length) {G__29528__a[G__29528__i] = arguments[G__29528__i + 1]; ++G__29528__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29528__a,0);
} 
return G__29527__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29527.cljs$lang$maxFixedArity = 1;
G__29527.cljs$lang$applyTo = (function (arglist__29529){
var opts__20028__auto__ = cljs.core.first(arglist__29529);
var children__20029__auto__ = cljs.core.rest(arglist__29529);
return G__29527__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29527.cljs$core$IFn$_invoke$arity$variadic = G__29527__delegate;
return G__29527;
})()
;
om_tools$dom$table = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$table__0.call(this);
default:
var G__29530 = null;
if (arguments.length > 1) {
var G__29531__i = 0, G__29531__a = new Array(arguments.length -  1);
while (G__29531__i < G__29531__a.length) {G__29531__a[G__29531__i] = arguments[G__29531__i + 1]; ++G__29531__i;}
G__29530 = new cljs.core.IndexedSeq(G__29531__a,0);
}
return om_tools$dom$table__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$table.cljs$lang$maxFixedArity = 1;
om_tools$dom$table.cljs$lang$applyTo = om_tools$dom$table__2.cljs$lang$applyTo;
om_tools$dom$table.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$table__0;
om_tools$dom$table.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$table__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$table;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tbody = (function() {
var om_tools$dom$tbody = null;
var om_tools$dom$tbody__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});
var om_tools$dom$tbody__2 = (function() { 
var G__29532__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__20028__auto__,children__20029__auto__);
};
var G__29532 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29533__i = 0, G__29533__a = new Array(arguments.length -  1);
while (G__29533__i < G__29533__a.length) {G__29533__a[G__29533__i] = arguments[G__29533__i + 1]; ++G__29533__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29533__a,0);
} 
return G__29532__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29532.cljs$lang$maxFixedArity = 1;
G__29532.cljs$lang$applyTo = (function (arglist__29534){
var opts__20028__auto__ = cljs.core.first(arglist__29534);
var children__20029__auto__ = cljs.core.rest(arglist__29534);
return G__29532__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29532.cljs$core$IFn$_invoke$arity$variadic = G__29532__delegate;
return G__29532;
})()
;
om_tools$dom$tbody = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tbody__0.call(this);
default:
var G__29535 = null;
if (arguments.length > 1) {
var G__29536__i = 0, G__29536__a = new Array(arguments.length -  1);
while (G__29536__i < G__29536__a.length) {G__29536__a[G__29536__i] = arguments[G__29536__i + 1]; ++G__29536__i;}
G__29535 = new cljs.core.IndexedSeq(G__29536__a,0);
}
return om_tools$dom$tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tbody.cljs$lang$maxFixedArity = 1;
om_tools$dom$tbody.cljs$lang$applyTo = om_tools$dom$tbody__2.cljs$lang$applyTo;
om_tools$dom$tbody.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tbody__0;
om_tools$dom$tbody.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tbody__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tbody;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.td = (function() {
var om_tools$dom$td = null;
var om_tools$dom$td__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});
var om_tools$dom$td__2 = (function() { 
var G__29537__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__20028__auto__,children__20029__auto__);
};
var G__29537 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29538__i = 0, G__29538__a = new Array(arguments.length -  1);
while (G__29538__i < G__29538__a.length) {G__29538__a[G__29538__i] = arguments[G__29538__i + 1]; ++G__29538__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29538__a,0);
} 
return G__29537__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29537.cljs$lang$maxFixedArity = 1;
G__29537.cljs$lang$applyTo = (function (arglist__29539){
var opts__20028__auto__ = cljs.core.first(arglist__29539);
var children__20029__auto__ = cljs.core.rest(arglist__29539);
return G__29537__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29537.cljs$core$IFn$_invoke$arity$variadic = G__29537__delegate;
return G__29537;
})()
;
om_tools$dom$td = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$td__0.call(this);
default:
var G__29540 = null;
if (arguments.length > 1) {
var G__29541__i = 0, G__29541__a = new Array(arguments.length -  1);
while (G__29541__i < G__29541__a.length) {G__29541__a[G__29541__i] = arguments[G__29541__i + 1]; ++G__29541__i;}
G__29540 = new cljs.core.IndexedSeq(G__29541__a,0);
}
return om_tools$dom$td__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$td.cljs$lang$maxFixedArity = 1;
om_tools$dom$td.cljs$lang$applyTo = om_tools$dom$td__2.cljs$lang$applyTo;
om_tools$dom$td.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$td__0;
om_tools$dom$td.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$td__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$td;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tfoot = (function() {
var om_tools$dom$tfoot = null;
var om_tools$dom$tfoot__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});
var om_tools$dom$tfoot__2 = (function() { 
var G__29542__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__20028__auto__,children__20029__auto__);
};
var G__29542 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29543__i = 0, G__29543__a = new Array(arguments.length -  1);
while (G__29543__i < G__29543__a.length) {G__29543__a[G__29543__i] = arguments[G__29543__i + 1]; ++G__29543__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29543__a,0);
} 
return G__29542__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29542.cljs$lang$maxFixedArity = 1;
G__29542.cljs$lang$applyTo = (function (arglist__29544){
var opts__20028__auto__ = cljs.core.first(arglist__29544);
var children__20029__auto__ = cljs.core.rest(arglist__29544);
return G__29542__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29542.cljs$core$IFn$_invoke$arity$variadic = G__29542__delegate;
return G__29542;
})()
;
om_tools$dom$tfoot = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tfoot__0.call(this);
default:
var G__29545 = null;
if (arguments.length > 1) {
var G__29546__i = 0, G__29546__a = new Array(arguments.length -  1);
while (G__29546__i < G__29546__a.length) {G__29546__a[G__29546__i] = arguments[G__29546__i + 1]; ++G__29546__i;}
G__29545 = new cljs.core.IndexedSeq(G__29546__a,0);
}
return om_tools$dom$tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tfoot.cljs$lang$maxFixedArity = 1;
om_tools$dom$tfoot.cljs$lang$applyTo = om_tools$dom$tfoot__2.cljs$lang$applyTo;
om_tools$dom$tfoot.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tfoot__0;
om_tools$dom$tfoot.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tfoot__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tfoot;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.th = (function() {
var om_tools$dom$th = null;
var om_tools$dom$th__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});
var om_tools$dom$th__2 = (function() { 
var G__29547__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__20028__auto__,children__20029__auto__);
};
var G__29547 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29548__i = 0, G__29548__a = new Array(arguments.length -  1);
while (G__29548__i < G__29548__a.length) {G__29548__a[G__29548__i] = arguments[G__29548__i + 1]; ++G__29548__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29548__a,0);
} 
return G__29547__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29547.cljs$lang$maxFixedArity = 1;
G__29547.cljs$lang$applyTo = (function (arglist__29549){
var opts__20028__auto__ = cljs.core.first(arglist__29549);
var children__20029__auto__ = cljs.core.rest(arglist__29549);
return G__29547__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29547.cljs$core$IFn$_invoke$arity$variadic = G__29547__delegate;
return G__29547;
})()
;
om_tools$dom$th = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$th__0.call(this);
default:
var G__29550 = null;
if (arguments.length > 1) {
var G__29551__i = 0, G__29551__a = new Array(arguments.length -  1);
while (G__29551__i < G__29551__a.length) {G__29551__a[G__29551__i] = arguments[G__29551__i + 1]; ++G__29551__i;}
G__29550 = new cljs.core.IndexedSeq(G__29551__a,0);
}
return om_tools$dom$th__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$th.cljs$lang$maxFixedArity = 1;
om_tools$dom$th.cljs$lang$applyTo = om_tools$dom$th__2.cljs$lang$applyTo;
om_tools$dom$th.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$th__0;
om_tools$dom$th.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$th__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$th;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.thead = (function() {
var om_tools$dom$thead = null;
var om_tools$dom$thead__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});
var om_tools$dom$thead__2 = (function() { 
var G__29552__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__20028__auto__,children__20029__auto__);
};
var G__29552 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29553__i = 0, G__29553__a = new Array(arguments.length -  1);
while (G__29553__i < G__29553__a.length) {G__29553__a[G__29553__i] = arguments[G__29553__i + 1]; ++G__29553__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29553__a,0);
} 
return G__29552__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29552.cljs$lang$maxFixedArity = 1;
G__29552.cljs$lang$applyTo = (function (arglist__29554){
var opts__20028__auto__ = cljs.core.first(arglist__29554);
var children__20029__auto__ = cljs.core.rest(arglist__29554);
return G__29552__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29552.cljs$core$IFn$_invoke$arity$variadic = G__29552__delegate;
return G__29552;
})()
;
om_tools$dom$thead = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$thead__0.call(this);
default:
var G__29555 = null;
if (arguments.length > 1) {
var G__29556__i = 0, G__29556__a = new Array(arguments.length -  1);
while (G__29556__i < G__29556__a.length) {G__29556__a[G__29556__i] = arguments[G__29556__i + 1]; ++G__29556__i;}
G__29555 = new cljs.core.IndexedSeq(G__29556__a,0);
}
return om_tools$dom$thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$thead.cljs$lang$maxFixedArity = 1;
om_tools$dom$thead.cljs$lang$applyTo = om_tools$dom$thead__2.cljs$lang$applyTo;
om_tools$dom$thead.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$thead__0;
om_tools$dom$thead.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$thead__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$thead;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.time = (function() {
var om_tools$dom$time = null;
var om_tools$dom$time__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});
var om_tools$dom$time__2 = (function() { 
var G__29557__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__20028__auto__,children__20029__auto__);
};
var G__29557 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29558__i = 0, G__29558__a = new Array(arguments.length -  1);
while (G__29558__i < G__29558__a.length) {G__29558__a[G__29558__i] = arguments[G__29558__i + 1]; ++G__29558__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29558__a,0);
} 
return G__29557__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29557.cljs$lang$maxFixedArity = 1;
G__29557.cljs$lang$applyTo = (function (arglist__29559){
var opts__20028__auto__ = cljs.core.first(arglist__29559);
var children__20029__auto__ = cljs.core.rest(arglist__29559);
return G__29557__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29557.cljs$core$IFn$_invoke$arity$variadic = G__29557__delegate;
return G__29557;
})()
;
om_tools$dom$time = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$time__0.call(this);
default:
var G__29560 = null;
if (arguments.length > 1) {
var G__29561__i = 0, G__29561__a = new Array(arguments.length -  1);
while (G__29561__i < G__29561__a.length) {G__29561__a[G__29561__i] = arguments[G__29561__i + 1]; ++G__29561__i;}
G__29560 = new cljs.core.IndexedSeq(G__29561__a,0);
}
return om_tools$dom$time__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$time.cljs$lang$maxFixedArity = 1;
om_tools$dom$time.cljs$lang$applyTo = om_tools$dom$time__2.cljs$lang$applyTo;
om_tools$dom$time.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$time__0;
om_tools$dom$time.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$time__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$time;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.title = (function() {
var om_tools$dom$title = null;
var om_tools$dom$title__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});
var om_tools$dom$title__2 = (function() { 
var G__29562__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__20028__auto__,children__20029__auto__);
};
var G__29562 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29563__i = 0, G__29563__a = new Array(arguments.length -  1);
while (G__29563__i < G__29563__a.length) {G__29563__a[G__29563__i] = arguments[G__29563__i + 1]; ++G__29563__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29563__a,0);
} 
return G__29562__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29562.cljs$lang$maxFixedArity = 1;
G__29562.cljs$lang$applyTo = (function (arglist__29564){
var opts__20028__auto__ = cljs.core.first(arglist__29564);
var children__20029__auto__ = cljs.core.rest(arglist__29564);
return G__29562__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29562.cljs$core$IFn$_invoke$arity$variadic = G__29562__delegate;
return G__29562;
})()
;
om_tools$dom$title = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$title__0.call(this);
default:
var G__29565 = null;
if (arguments.length > 1) {
var G__29566__i = 0, G__29566__a = new Array(arguments.length -  1);
while (G__29566__i < G__29566__a.length) {G__29566__a[G__29566__i] = arguments[G__29566__i + 1]; ++G__29566__i;}
G__29565 = new cljs.core.IndexedSeq(G__29566__a,0);
}
return om_tools$dom$title__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$title.cljs$lang$maxFixedArity = 1;
om_tools$dom$title.cljs$lang$applyTo = om_tools$dom$title__2.cljs$lang$applyTo;
om_tools$dom$title.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$title__0;
om_tools$dom$title.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$title__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$title;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tr = (function() {
var om_tools$dom$tr = null;
var om_tools$dom$tr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});
var om_tools$dom$tr__2 = (function() { 
var G__29567__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__20028__auto__,children__20029__auto__);
};
var G__29567 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29568__i = 0, G__29568__a = new Array(arguments.length -  1);
while (G__29568__i < G__29568__a.length) {G__29568__a[G__29568__i] = arguments[G__29568__i + 1]; ++G__29568__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29568__a,0);
} 
return G__29567__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29567.cljs$lang$maxFixedArity = 1;
G__29567.cljs$lang$applyTo = (function (arglist__29569){
var opts__20028__auto__ = cljs.core.first(arglist__29569);
var children__20029__auto__ = cljs.core.rest(arglist__29569);
return G__29567__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29567.cljs$core$IFn$_invoke$arity$variadic = G__29567__delegate;
return G__29567;
})()
;
om_tools$dom$tr = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tr__0.call(this);
default:
var G__29570 = null;
if (arguments.length > 1) {
var G__29571__i = 0, G__29571__a = new Array(arguments.length -  1);
while (G__29571__i < G__29571__a.length) {G__29571__a[G__29571__i] = arguments[G__29571__i + 1]; ++G__29571__i;}
G__29570 = new cljs.core.IndexedSeq(G__29571__a,0);
}
return om_tools$dom$tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tr.cljs$lang$maxFixedArity = 1;
om_tools$dom$tr.cljs$lang$applyTo = om_tools$dom$tr__2.cljs$lang$applyTo;
om_tools$dom$tr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tr__0;
om_tools$dom$tr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.track = (function() {
var om_tools$dom$track = null;
var om_tools$dom$track__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});
var om_tools$dom$track__2 = (function() { 
var G__29572__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__20028__auto__,children__20029__auto__);
};
var G__29572 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29573__i = 0, G__29573__a = new Array(arguments.length -  1);
while (G__29573__i < G__29573__a.length) {G__29573__a[G__29573__i] = arguments[G__29573__i + 1]; ++G__29573__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29573__a,0);
} 
return G__29572__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29572.cljs$lang$maxFixedArity = 1;
G__29572.cljs$lang$applyTo = (function (arglist__29574){
var opts__20028__auto__ = cljs.core.first(arglist__29574);
var children__20029__auto__ = cljs.core.rest(arglist__29574);
return G__29572__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29572.cljs$core$IFn$_invoke$arity$variadic = G__29572__delegate;
return G__29572;
})()
;
om_tools$dom$track = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$track__0.call(this);
default:
var G__29575 = null;
if (arguments.length > 1) {
var G__29576__i = 0, G__29576__a = new Array(arguments.length -  1);
while (G__29576__i < G__29576__a.length) {G__29576__a[G__29576__i] = arguments[G__29576__i + 1]; ++G__29576__i;}
G__29575 = new cljs.core.IndexedSeq(G__29576__a,0);
}
return om_tools$dom$track__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$track.cljs$lang$maxFixedArity = 1;
om_tools$dom$track.cljs$lang$applyTo = om_tools$dom$track__2.cljs$lang$applyTo;
om_tools$dom$track.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$track__0;
om_tools$dom$track.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$track__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$track;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.u = (function() {
var om_tools$dom$u = null;
var om_tools$dom$u__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});
var om_tools$dom$u__2 = (function() { 
var G__29577__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__20028__auto__,children__20029__auto__);
};
var G__29577 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29578__i = 0, G__29578__a = new Array(arguments.length -  1);
while (G__29578__i < G__29578__a.length) {G__29578__a[G__29578__i] = arguments[G__29578__i + 1]; ++G__29578__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29578__a,0);
} 
return G__29577__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29577.cljs$lang$maxFixedArity = 1;
G__29577.cljs$lang$applyTo = (function (arglist__29579){
var opts__20028__auto__ = cljs.core.first(arglist__29579);
var children__20029__auto__ = cljs.core.rest(arglist__29579);
return G__29577__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29577.cljs$core$IFn$_invoke$arity$variadic = G__29577__delegate;
return G__29577;
})()
;
om_tools$dom$u = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$u__0.call(this);
default:
var G__29580 = null;
if (arguments.length > 1) {
var G__29581__i = 0, G__29581__a = new Array(arguments.length -  1);
while (G__29581__i < G__29581__a.length) {G__29581__a[G__29581__i] = arguments[G__29581__i + 1]; ++G__29581__i;}
G__29580 = new cljs.core.IndexedSeq(G__29581__a,0);
}
return om_tools$dom$u__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$u.cljs$lang$maxFixedArity = 1;
om_tools$dom$u.cljs$lang$applyTo = om_tools$dom$u__2.cljs$lang$applyTo;
om_tools$dom$u.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$u__0;
om_tools$dom$u.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$u__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$u;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ul = (function() {
var om_tools$dom$ul = null;
var om_tools$dom$ul__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});
var om_tools$dom$ul__2 = (function() { 
var G__29582__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__20028__auto__,children__20029__auto__);
};
var G__29582 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29583__i = 0, G__29583__a = new Array(arguments.length -  1);
while (G__29583__i < G__29583__a.length) {G__29583__a[G__29583__i] = arguments[G__29583__i + 1]; ++G__29583__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29583__a,0);
} 
return G__29582__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29582.cljs$lang$maxFixedArity = 1;
G__29582.cljs$lang$applyTo = (function (arglist__29584){
var opts__20028__auto__ = cljs.core.first(arglist__29584);
var children__20029__auto__ = cljs.core.rest(arglist__29584);
return G__29582__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29582.cljs$core$IFn$_invoke$arity$variadic = G__29582__delegate;
return G__29582;
})()
;
om_tools$dom$ul = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ul__0.call(this);
default:
var G__29585 = null;
if (arguments.length > 1) {
var G__29586__i = 0, G__29586__a = new Array(arguments.length -  1);
while (G__29586__i < G__29586__a.length) {G__29586__a[G__29586__i] = arguments[G__29586__i + 1]; ++G__29586__i;}
G__29585 = new cljs.core.IndexedSeq(G__29586__a,0);
}
return om_tools$dom$ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ul.cljs$lang$maxFixedArity = 1;
om_tools$dom$ul.cljs$lang$applyTo = om_tools$dom$ul__2.cljs$lang$applyTo;
om_tools$dom$ul.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ul__0;
om_tools$dom$ul.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ul__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ul;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.var$ = (function() {
var om_tools$dom$var = null;
var om_tools$dom$var__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});
var om_tools$dom$var__2 = (function() { 
var G__29587__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__20028__auto__,children__20029__auto__);
};
var G__29587 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29588__i = 0, G__29588__a = new Array(arguments.length -  1);
while (G__29588__i < G__29588__a.length) {G__29588__a[G__29588__i] = arguments[G__29588__i + 1]; ++G__29588__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29588__a,0);
} 
return G__29587__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29587.cljs$lang$maxFixedArity = 1;
G__29587.cljs$lang$applyTo = (function (arglist__29589){
var opts__20028__auto__ = cljs.core.first(arglist__29589);
var children__20029__auto__ = cljs.core.rest(arglist__29589);
return G__29587__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29587.cljs$core$IFn$_invoke$arity$variadic = G__29587__delegate;
return G__29587;
})()
;
om_tools$dom$var = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$var__0.call(this);
default:
var G__29590 = null;
if (arguments.length > 1) {
var G__29591__i = 0, G__29591__a = new Array(arguments.length -  1);
while (G__29591__i < G__29591__a.length) {G__29591__a[G__29591__i] = arguments[G__29591__i + 1]; ++G__29591__i;}
G__29590 = new cljs.core.IndexedSeq(G__29591__a,0);
}
return om_tools$dom$var__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$var.cljs$lang$maxFixedArity = 1;
om_tools$dom$var.cljs$lang$applyTo = om_tools$dom$var__2.cljs$lang$applyTo;
om_tools$dom$var.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$var__0;
om_tools$dom$var.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$var__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$var;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.video = (function() {
var om_tools$dom$video = null;
var om_tools$dom$video__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});
var om_tools$dom$video__2 = (function() { 
var G__29592__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__20028__auto__,children__20029__auto__);
};
var G__29592 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29593__i = 0, G__29593__a = new Array(arguments.length -  1);
while (G__29593__i < G__29593__a.length) {G__29593__a[G__29593__i] = arguments[G__29593__i + 1]; ++G__29593__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29593__a,0);
} 
return G__29592__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29592.cljs$lang$maxFixedArity = 1;
G__29592.cljs$lang$applyTo = (function (arglist__29594){
var opts__20028__auto__ = cljs.core.first(arglist__29594);
var children__20029__auto__ = cljs.core.rest(arglist__29594);
return G__29592__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29592.cljs$core$IFn$_invoke$arity$variadic = G__29592__delegate;
return G__29592;
})()
;
om_tools$dom$video = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$video__0.call(this);
default:
var G__29595 = null;
if (arguments.length > 1) {
var G__29596__i = 0, G__29596__a = new Array(arguments.length -  1);
while (G__29596__i < G__29596__a.length) {G__29596__a[G__29596__i] = arguments[G__29596__i + 1]; ++G__29596__i;}
G__29595 = new cljs.core.IndexedSeq(G__29596__a,0);
}
return om_tools$dom$video__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$video.cljs$lang$maxFixedArity = 1;
om_tools$dom$video.cljs$lang$applyTo = om_tools$dom$video__2.cljs$lang$applyTo;
om_tools$dom$video.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$video__0;
om_tools$dom$video.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$video__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$video;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.wbr = (function() {
var om_tools$dom$wbr = null;
var om_tools$dom$wbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});
var om_tools$dom$wbr__2 = (function() { 
var G__29597__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__20028__auto__,children__20029__auto__);
};
var G__29597 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29598__i = 0, G__29598__a = new Array(arguments.length -  1);
while (G__29598__i < G__29598__a.length) {G__29598__a[G__29598__i] = arguments[G__29598__i + 1]; ++G__29598__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29598__a,0);
} 
return G__29597__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29597.cljs$lang$maxFixedArity = 1;
G__29597.cljs$lang$applyTo = (function (arglist__29599){
var opts__20028__auto__ = cljs.core.first(arglist__29599);
var children__20029__auto__ = cljs.core.rest(arglist__29599);
return G__29597__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29597.cljs$core$IFn$_invoke$arity$variadic = G__29597__delegate;
return G__29597;
})()
;
om_tools$dom$wbr = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$wbr__0.call(this);
default:
var G__29600 = null;
if (arguments.length > 1) {
var G__29601__i = 0, G__29601__a = new Array(arguments.length -  1);
while (G__29601__i < G__29601__a.length) {G__29601__a[G__29601__i] = arguments[G__29601__i + 1]; ++G__29601__i;}
G__29600 = new cljs.core.IndexedSeq(G__29601__a,0);
}
return om_tools$dom$wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$wbr.cljs$lang$maxFixedArity = 1;
om_tools$dom$wbr.cljs$lang$applyTo = om_tools$dom$wbr__2.cljs$lang$applyTo;
om_tools$dom$wbr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$wbr__0;
om_tools$dom$wbr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$wbr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$wbr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.circle = (function() {
var om_tools$dom$circle = null;
var om_tools$dom$circle__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});
var om_tools$dom$circle__2 = (function() { 
var G__29602__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__20028__auto__,children__20029__auto__);
};
var G__29602 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29603__i = 0, G__29603__a = new Array(arguments.length -  1);
while (G__29603__i < G__29603__a.length) {G__29603__a[G__29603__i] = arguments[G__29603__i + 1]; ++G__29603__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29603__a,0);
} 
return G__29602__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29602.cljs$lang$maxFixedArity = 1;
G__29602.cljs$lang$applyTo = (function (arglist__29604){
var opts__20028__auto__ = cljs.core.first(arglist__29604);
var children__20029__auto__ = cljs.core.rest(arglist__29604);
return G__29602__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29602.cljs$core$IFn$_invoke$arity$variadic = G__29602__delegate;
return G__29602;
})()
;
om_tools$dom$circle = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$circle__0.call(this);
default:
var G__29605 = null;
if (arguments.length > 1) {
var G__29606__i = 0, G__29606__a = new Array(arguments.length -  1);
while (G__29606__i < G__29606__a.length) {G__29606__a[G__29606__i] = arguments[G__29606__i + 1]; ++G__29606__i;}
G__29605 = new cljs.core.IndexedSeq(G__29606__a,0);
}
return om_tools$dom$circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$circle.cljs$lang$maxFixedArity = 1;
om_tools$dom$circle.cljs$lang$applyTo = om_tools$dom$circle__2.cljs$lang$applyTo;
om_tools$dom$circle.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$circle__0;
om_tools$dom$circle.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$circle__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$circle;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ellipse = (function() {
var om_tools$dom$ellipse = null;
var om_tools$dom$ellipse__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});
var om_tools$dom$ellipse__2 = (function() { 
var G__29607__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__20028__auto__,children__20029__auto__);
};
var G__29607 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29608__i = 0, G__29608__a = new Array(arguments.length -  1);
while (G__29608__i < G__29608__a.length) {G__29608__a[G__29608__i] = arguments[G__29608__i + 1]; ++G__29608__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29608__a,0);
} 
return G__29607__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29607.cljs$lang$maxFixedArity = 1;
G__29607.cljs$lang$applyTo = (function (arglist__29609){
var opts__20028__auto__ = cljs.core.first(arglist__29609);
var children__20029__auto__ = cljs.core.rest(arglist__29609);
return G__29607__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29607.cljs$core$IFn$_invoke$arity$variadic = G__29607__delegate;
return G__29607;
})()
;
om_tools$dom$ellipse = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ellipse__0.call(this);
default:
var G__29610 = null;
if (arguments.length > 1) {
var G__29611__i = 0, G__29611__a = new Array(arguments.length -  1);
while (G__29611__i < G__29611__a.length) {G__29611__a[G__29611__i] = arguments[G__29611__i + 1]; ++G__29611__i;}
G__29610 = new cljs.core.IndexedSeq(G__29611__a,0);
}
return om_tools$dom$ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ellipse.cljs$lang$maxFixedArity = 1;
om_tools$dom$ellipse.cljs$lang$applyTo = om_tools$dom$ellipse__2.cljs$lang$applyTo;
om_tools$dom$ellipse.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ellipse__0;
om_tools$dom$ellipse.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ellipse__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ellipse;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.g = (function() {
var om_tools$dom$g = null;
var om_tools$dom$g__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});
var om_tools$dom$g__2 = (function() { 
var G__29612__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__20028__auto__,children__20029__auto__);
};
var G__29612 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29613__i = 0, G__29613__a = new Array(arguments.length -  1);
while (G__29613__i < G__29613__a.length) {G__29613__a[G__29613__i] = arguments[G__29613__i + 1]; ++G__29613__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29613__a,0);
} 
return G__29612__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29612.cljs$lang$maxFixedArity = 1;
G__29612.cljs$lang$applyTo = (function (arglist__29614){
var opts__20028__auto__ = cljs.core.first(arglist__29614);
var children__20029__auto__ = cljs.core.rest(arglist__29614);
return G__29612__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29612.cljs$core$IFn$_invoke$arity$variadic = G__29612__delegate;
return G__29612;
})()
;
om_tools$dom$g = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$g__0.call(this);
default:
var G__29615 = null;
if (arguments.length > 1) {
var G__29616__i = 0, G__29616__a = new Array(arguments.length -  1);
while (G__29616__i < G__29616__a.length) {G__29616__a[G__29616__i] = arguments[G__29616__i + 1]; ++G__29616__i;}
G__29615 = new cljs.core.IndexedSeq(G__29616__a,0);
}
return om_tools$dom$g__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$g.cljs$lang$maxFixedArity = 1;
om_tools$dom$g.cljs$lang$applyTo = om_tools$dom$g__2.cljs$lang$applyTo;
om_tools$dom$g.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$g__0;
om_tools$dom$g.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$g__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$g;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.line = (function() {
var om_tools$dom$line = null;
var om_tools$dom$line__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});
var om_tools$dom$line__2 = (function() { 
var G__29617__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__20028__auto__,children__20029__auto__);
};
var G__29617 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29618__i = 0, G__29618__a = new Array(arguments.length -  1);
while (G__29618__i < G__29618__a.length) {G__29618__a[G__29618__i] = arguments[G__29618__i + 1]; ++G__29618__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29618__a,0);
} 
return G__29617__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29617.cljs$lang$maxFixedArity = 1;
G__29617.cljs$lang$applyTo = (function (arglist__29619){
var opts__20028__auto__ = cljs.core.first(arglist__29619);
var children__20029__auto__ = cljs.core.rest(arglist__29619);
return G__29617__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29617.cljs$core$IFn$_invoke$arity$variadic = G__29617__delegate;
return G__29617;
})()
;
om_tools$dom$line = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$line__0.call(this);
default:
var G__29620 = null;
if (arguments.length > 1) {
var G__29621__i = 0, G__29621__a = new Array(arguments.length -  1);
while (G__29621__i < G__29621__a.length) {G__29621__a[G__29621__i] = arguments[G__29621__i + 1]; ++G__29621__i;}
G__29620 = new cljs.core.IndexedSeq(G__29621__a,0);
}
return om_tools$dom$line__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$line.cljs$lang$maxFixedArity = 1;
om_tools$dom$line.cljs$lang$applyTo = om_tools$dom$line__2.cljs$lang$applyTo;
om_tools$dom$line.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$line__0;
om_tools$dom$line.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$line__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$line;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.path = (function() {
var om_tools$dom$path = null;
var om_tools$dom$path__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});
var om_tools$dom$path__2 = (function() { 
var G__29622__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__20028__auto__,children__20029__auto__);
};
var G__29622 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29623__i = 0, G__29623__a = new Array(arguments.length -  1);
while (G__29623__i < G__29623__a.length) {G__29623__a[G__29623__i] = arguments[G__29623__i + 1]; ++G__29623__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29623__a,0);
} 
return G__29622__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29622.cljs$lang$maxFixedArity = 1;
G__29622.cljs$lang$applyTo = (function (arglist__29624){
var opts__20028__auto__ = cljs.core.first(arglist__29624);
var children__20029__auto__ = cljs.core.rest(arglist__29624);
return G__29622__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29622.cljs$core$IFn$_invoke$arity$variadic = G__29622__delegate;
return G__29622;
})()
;
om_tools$dom$path = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$path__0.call(this);
default:
var G__29625 = null;
if (arguments.length > 1) {
var G__29626__i = 0, G__29626__a = new Array(arguments.length -  1);
while (G__29626__i < G__29626__a.length) {G__29626__a[G__29626__i] = arguments[G__29626__i + 1]; ++G__29626__i;}
G__29625 = new cljs.core.IndexedSeq(G__29626__a,0);
}
return om_tools$dom$path__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$path.cljs$lang$maxFixedArity = 1;
om_tools$dom$path.cljs$lang$applyTo = om_tools$dom$path__2.cljs$lang$applyTo;
om_tools$dom$path.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$path__0;
om_tools$dom$path.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$path__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$path;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.polyline = (function() {
var om_tools$dom$polyline = null;
var om_tools$dom$polyline__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});
var om_tools$dom$polyline__2 = (function() { 
var G__29627__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__20028__auto__,children__20029__auto__);
};
var G__29627 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29628__i = 0, G__29628__a = new Array(arguments.length -  1);
while (G__29628__i < G__29628__a.length) {G__29628__a[G__29628__i] = arguments[G__29628__i + 1]; ++G__29628__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29628__a,0);
} 
return G__29627__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29627.cljs$lang$maxFixedArity = 1;
G__29627.cljs$lang$applyTo = (function (arglist__29629){
var opts__20028__auto__ = cljs.core.first(arglist__29629);
var children__20029__auto__ = cljs.core.rest(arglist__29629);
return G__29627__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29627.cljs$core$IFn$_invoke$arity$variadic = G__29627__delegate;
return G__29627;
})()
;
om_tools$dom$polyline = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$polyline__0.call(this);
default:
var G__29630 = null;
if (arguments.length > 1) {
var G__29631__i = 0, G__29631__a = new Array(arguments.length -  1);
while (G__29631__i < G__29631__a.length) {G__29631__a[G__29631__i] = arguments[G__29631__i + 1]; ++G__29631__i;}
G__29630 = new cljs.core.IndexedSeq(G__29631__a,0);
}
return om_tools$dom$polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$polyline.cljs$lang$maxFixedArity = 1;
om_tools$dom$polyline.cljs$lang$applyTo = om_tools$dom$polyline__2.cljs$lang$applyTo;
om_tools$dom$polyline.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$polyline__0;
om_tools$dom$polyline.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$polyline__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$polyline;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rect = (function() {
var om_tools$dom$rect = null;
var om_tools$dom$rect__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});
var om_tools$dom$rect__2 = (function() { 
var G__29632__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__20028__auto__,children__20029__auto__);
};
var G__29632 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29633__i = 0, G__29633__a = new Array(arguments.length -  1);
while (G__29633__i < G__29633__a.length) {G__29633__a[G__29633__i] = arguments[G__29633__i + 1]; ++G__29633__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29633__a,0);
} 
return G__29632__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29632.cljs$lang$maxFixedArity = 1;
G__29632.cljs$lang$applyTo = (function (arglist__29634){
var opts__20028__auto__ = cljs.core.first(arglist__29634);
var children__20029__auto__ = cljs.core.rest(arglist__29634);
return G__29632__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29632.cljs$core$IFn$_invoke$arity$variadic = G__29632__delegate;
return G__29632;
})()
;
om_tools$dom$rect = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rect__0.call(this);
default:
var G__29635 = null;
if (arguments.length > 1) {
var G__29636__i = 0, G__29636__a = new Array(arguments.length -  1);
while (G__29636__i < G__29636__a.length) {G__29636__a[G__29636__i] = arguments[G__29636__i + 1]; ++G__29636__i;}
G__29635 = new cljs.core.IndexedSeq(G__29636__a,0);
}
return om_tools$dom$rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rect.cljs$lang$maxFixedArity = 1;
om_tools$dom$rect.cljs$lang$applyTo = om_tools$dom$rect__2.cljs$lang$applyTo;
om_tools$dom$rect.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rect__0;
om_tools$dom$rect.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rect__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rect;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.svg = (function() {
var om_tools$dom$svg = null;
var om_tools$dom$svg__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});
var om_tools$dom$svg__2 = (function() { 
var G__29637__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__20028__auto__,children__20029__auto__);
};
var G__29637 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29638__i = 0, G__29638__a = new Array(arguments.length -  1);
while (G__29638__i < G__29638__a.length) {G__29638__a[G__29638__i] = arguments[G__29638__i + 1]; ++G__29638__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29638__a,0);
} 
return G__29637__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29637.cljs$lang$maxFixedArity = 1;
G__29637.cljs$lang$applyTo = (function (arglist__29639){
var opts__20028__auto__ = cljs.core.first(arglist__29639);
var children__20029__auto__ = cljs.core.rest(arglist__29639);
return G__29637__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29637.cljs$core$IFn$_invoke$arity$variadic = G__29637__delegate;
return G__29637;
})()
;
om_tools$dom$svg = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$svg__0.call(this);
default:
var G__29640 = null;
if (arguments.length > 1) {
var G__29641__i = 0, G__29641__a = new Array(arguments.length -  1);
while (G__29641__i < G__29641__a.length) {G__29641__a[G__29641__i] = arguments[G__29641__i + 1]; ++G__29641__i;}
G__29640 = new cljs.core.IndexedSeq(G__29641__a,0);
}
return om_tools$dom$svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$svg.cljs$lang$maxFixedArity = 1;
om_tools$dom$svg.cljs$lang$applyTo = om_tools$dom$svg__2.cljs$lang$applyTo;
om_tools$dom$svg.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$svg__0;
om_tools$dom$svg.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$svg__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$svg;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.text = (function() {
var om_tools$dom$text = null;
var om_tools$dom$text__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});
var om_tools$dom$text__2 = (function() { 
var G__29642__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__20028__auto__,children__20029__auto__);
};
var G__29642 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29643__i = 0, G__29643__a = new Array(arguments.length -  1);
while (G__29643__i < G__29643__a.length) {G__29643__a[G__29643__i] = arguments[G__29643__i + 1]; ++G__29643__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29643__a,0);
} 
return G__29642__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29642.cljs$lang$maxFixedArity = 1;
G__29642.cljs$lang$applyTo = (function (arglist__29644){
var opts__20028__auto__ = cljs.core.first(arglist__29644);
var children__20029__auto__ = cljs.core.rest(arglist__29644);
return G__29642__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29642.cljs$core$IFn$_invoke$arity$variadic = G__29642__delegate;
return G__29642;
})()
;
om_tools$dom$text = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$text__0.call(this);
default:
var G__29645 = null;
if (arguments.length > 1) {
var G__29646__i = 0, G__29646__a = new Array(arguments.length -  1);
while (G__29646__i < G__29646__a.length) {G__29646__a[G__29646__i] = arguments[G__29646__i + 1]; ++G__29646__i;}
G__29645 = new cljs.core.IndexedSeq(G__29646__a,0);
}
return om_tools$dom$text__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$text.cljs$lang$maxFixedArity = 1;
om_tools$dom$text.cljs$lang$applyTo = om_tools$dom$text__2.cljs$lang$applyTo;
om_tools$dom$text.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$text__0;
om_tools$dom$text.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$text__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$text;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.defs = (function() {
var om_tools$dom$defs = null;
var om_tools$dom$defs__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});
var om_tools$dom$defs__2 = (function() { 
var G__29647__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__20028__auto__,children__20029__auto__);
};
var G__29647 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29648__i = 0, G__29648__a = new Array(arguments.length -  1);
while (G__29648__i < G__29648__a.length) {G__29648__a[G__29648__i] = arguments[G__29648__i + 1]; ++G__29648__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29648__a,0);
} 
return G__29647__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29647.cljs$lang$maxFixedArity = 1;
G__29647.cljs$lang$applyTo = (function (arglist__29649){
var opts__20028__auto__ = cljs.core.first(arglist__29649);
var children__20029__auto__ = cljs.core.rest(arglist__29649);
return G__29647__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29647.cljs$core$IFn$_invoke$arity$variadic = G__29647__delegate;
return G__29647;
})()
;
om_tools$dom$defs = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$defs__0.call(this);
default:
var G__29650 = null;
if (arguments.length > 1) {
var G__29651__i = 0, G__29651__a = new Array(arguments.length -  1);
while (G__29651__i < G__29651__a.length) {G__29651__a[G__29651__i] = arguments[G__29651__i + 1]; ++G__29651__i;}
G__29650 = new cljs.core.IndexedSeq(G__29651__a,0);
}
return om_tools$dom$defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$defs.cljs$lang$maxFixedArity = 1;
om_tools$dom$defs.cljs$lang$applyTo = om_tools$dom$defs__2.cljs$lang$applyTo;
om_tools$dom$defs.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$defs__0;
om_tools$dom$defs.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$defs__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$defs;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.linearGradient = (function() {
var om_tools$dom$linearGradient = null;
var om_tools$dom$linearGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});
var om_tools$dom$linearGradient__2 = (function() { 
var G__29652__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__20028__auto__,children__20029__auto__);
};
var G__29652 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29653__i = 0, G__29653__a = new Array(arguments.length -  1);
while (G__29653__i < G__29653__a.length) {G__29653__a[G__29653__i] = arguments[G__29653__i + 1]; ++G__29653__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29653__a,0);
} 
return G__29652__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29652.cljs$lang$maxFixedArity = 1;
G__29652.cljs$lang$applyTo = (function (arglist__29654){
var opts__20028__auto__ = cljs.core.first(arglist__29654);
var children__20029__auto__ = cljs.core.rest(arglist__29654);
return G__29652__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29652.cljs$core$IFn$_invoke$arity$variadic = G__29652__delegate;
return G__29652;
})()
;
om_tools$dom$linearGradient = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$linearGradient__0.call(this);
default:
var G__29655 = null;
if (arguments.length > 1) {
var G__29656__i = 0, G__29656__a = new Array(arguments.length -  1);
while (G__29656__i < G__29656__a.length) {G__29656__a[G__29656__i] = arguments[G__29656__i + 1]; ++G__29656__i;}
G__29655 = new cljs.core.IndexedSeq(G__29656__a,0);
}
return om_tools$dom$linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$linearGradient.cljs$lang$maxFixedArity = 1;
om_tools$dom$linearGradient.cljs$lang$applyTo = om_tools$dom$linearGradient__2.cljs$lang$applyTo;
om_tools$dom$linearGradient.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$linearGradient__0;
om_tools$dom$linearGradient.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$linearGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$linearGradient;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.polygon = (function() {
var om_tools$dom$polygon = null;
var om_tools$dom$polygon__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});
var om_tools$dom$polygon__2 = (function() { 
var G__29657__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__20028__auto__,children__20029__auto__);
};
var G__29657 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29658__i = 0, G__29658__a = new Array(arguments.length -  1);
while (G__29658__i < G__29658__a.length) {G__29658__a[G__29658__i] = arguments[G__29658__i + 1]; ++G__29658__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29658__a,0);
} 
return G__29657__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29657.cljs$lang$maxFixedArity = 1;
G__29657.cljs$lang$applyTo = (function (arglist__29659){
var opts__20028__auto__ = cljs.core.first(arglist__29659);
var children__20029__auto__ = cljs.core.rest(arglist__29659);
return G__29657__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29657.cljs$core$IFn$_invoke$arity$variadic = G__29657__delegate;
return G__29657;
})()
;
om_tools$dom$polygon = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$polygon__0.call(this);
default:
var G__29660 = null;
if (arguments.length > 1) {
var G__29661__i = 0, G__29661__a = new Array(arguments.length -  1);
while (G__29661__i < G__29661__a.length) {G__29661__a[G__29661__i] = arguments[G__29661__i + 1]; ++G__29661__i;}
G__29660 = new cljs.core.IndexedSeq(G__29661__a,0);
}
return om_tools$dom$polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$polygon.cljs$lang$maxFixedArity = 1;
om_tools$dom$polygon.cljs$lang$applyTo = om_tools$dom$polygon__2.cljs$lang$applyTo;
om_tools$dom$polygon.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$polygon__0;
om_tools$dom$polygon.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$polygon__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$polygon;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.radialGradient = (function() {
var om_tools$dom$radialGradient = null;
var om_tools$dom$radialGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});
var om_tools$dom$radialGradient__2 = (function() { 
var G__29662__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__20028__auto__,children__20029__auto__);
};
var G__29662 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29663__i = 0, G__29663__a = new Array(arguments.length -  1);
while (G__29663__i < G__29663__a.length) {G__29663__a[G__29663__i] = arguments[G__29663__i + 1]; ++G__29663__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29663__a,0);
} 
return G__29662__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29662.cljs$lang$maxFixedArity = 1;
G__29662.cljs$lang$applyTo = (function (arglist__29664){
var opts__20028__auto__ = cljs.core.first(arglist__29664);
var children__20029__auto__ = cljs.core.rest(arglist__29664);
return G__29662__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29662.cljs$core$IFn$_invoke$arity$variadic = G__29662__delegate;
return G__29662;
})()
;
om_tools$dom$radialGradient = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$radialGradient__0.call(this);
default:
var G__29665 = null;
if (arguments.length > 1) {
var G__29666__i = 0, G__29666__a = new Array(arguments.length -  1);
while (G__29666__i < G__29666__a.length) {G__29666__a[G__29666__i] = arguments[G__29666__i + 1]; ++G__29666__i;}
G__29665 = new cljs.core.IndexedSeq(G__29666__a,0);
}
return om_tools$dom$radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$radialGradient.cljs$lang$maxFixedArity = 1;
om_tools$dom$radialGradient.cljs$lang$applyTo = om_tools$dom$radialGradient__2.cljs$lang$applyTo;
om_tools$dom$radialGradient.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$radialGradient__0;
om_tools$dom$radialGradient.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$radialGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$radialGradient;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.stop = (function() {
var om_tools$dom$stop = null;
var om_tools$dom$stop__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});
var om_tools$dom$stop__2 = (function() { 
var G__29667__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__20028__auto__,children__20029__auto__);
};
var G__29667 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29668__i = 0, G__29668__a = new Array(arguments.length -  1);
while (G__29668__i < G__29668__a.length) {G__29668__a[G__29668__i] = arguments[G__29668__i + 1]; ++G__29668__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29668__a,0);
} 
return G__29667__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29667.cljs$lang$maxFixedArity = 1;
G__29667.cljs$lang$applyTo = (function (arglist__29669){
var opts__20028__auto__ = cljs.core.first(arglist__29669);
var children__20029__auto__ = cljs.core.rest(arglist__29669);
return G__29667__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29667.cljs$core$IFn$_invoke$arity$variadic = G__29667__delegate;
return G__29667;
})()
;
om_tools$dom$stop = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$stop__0.call(this);
default:
var G__29670 = null;
if (arguments.length > 1) {
var G__29671__i = 0, G__29671__a = new Array(arguments.length -  1);
while (G__29671__i < G__29671__a.length) {G__29671__a[G__29671__i] = arguments[G__29671__i + 1]; ++G__29671__i;}
G__29670 = new cljs.core.IndexedSeq(G__29671__a,0);
}
return om_tools$dom$stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$stop.cljs$lang$maxFixedArity = 1;
om_tools$dom$stop.cljs$lang$applyTo = om_tools$dom$stop__2.cljs$lang$applyTo;
om_tools$dom$stop.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$stop__0;
om_tools$dom$stop.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$stop__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$stop;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tspan = (function() {
var om_tools$dom$tspan = null;
var om_tools$dom$tspan__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});
var om_tools$dom$tspan__2 = (function() { 
var G__29672__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__20028__auto__,children__20029__auto__);
};
var G__29672 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29673__i = 0, G__29673__a = new Array(arguments.length -  1);
while (G__29673__i < G__29673__a.length) {G__29673__a[G__29673__i] = arguments[G__29673__i + 1]; ++G__29673__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29673__a,0);
} 
return G__29672__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29672.cljs$lang$maxFixedArity = 1;
G__29672.cljs$lang$applyTo = (function (arglist__29674){
var opts__20028__auto__ = cljs.core.first(arglist__29674);
var children__20029__auto__ = cljs.core.rest(arglist__29674);
return G__29672__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29672.cljs$core$IFn$_invoke$arity$variadic = G__29672__delegate;
return G__29672;
})()
;
om_tools$dom$tspan = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tspan__0.call(this);
default:
var G__29675 = null;
if (arguments.length > 1) {
var G__29676__i = 0, G__29676__a = new Array(arguments.length -  1);
while (G__29676__i < G__29676__a.length) {G__29676__a[G__29676__i] = arguments[G__29676__i + 1]; ++G__29676__i;}
G__29675 = new cljs.core.IndexedSeq(G__29676__a,0);
}
return om_tools$dom$tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tspan.cljs$lang$maxFixedArity = 1;
om_tools$dom$tspan.cljs$lang$applyTo = om_tools$dom$tspan__2.cljs$lang$applyTo;
om_tools$dom$tspan.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tspan__0;
om_tools$dom$tspan.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tspan__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tspan;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.input = (function() {
var om_tools$dom$input = null;
var om_tools$dom$input__0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});
var om_tools$dom$input__2 = (function() { 
var G__29677__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__20028__auto__,children__20029__auto__);
};
var G__29677 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29678__i = 0, G__29678__a = new Array(arguments.length -  1);
while (G__29678__i < G__29678__a.length) {G__29678__a[G__29678__i] = arguments[G__29678__i + 1]; ++G__29678__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29678__a,0);
} 
return G__29677__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29677.cljs$lang$maxFixedArity = 1;
G__29677.cljs$lang$applyTo = (function (arglist__29679){
var opts__20028__auto__ = cljs.core.first(arglist__29679);
var children__20029__auto__ = cljs.core.rest(arglist__29679);
return G__29677__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29677.cljs$core$IFn$_invoke$arity$variadic = G__29677__delegate;
return G__29677;
})()
;
om_tools$dom$input = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$input__0.call(this);
default:
var G__29680 = null;
if (arguments.length > 1) {
var G__29681__i = 0, G__29681__a = new Array(arguments.length -  1);
while (G__29681__i < G__29681__a.length) {G__29681__a[G__29681__i] = arguments[G__29681__i + 1]; ++G__29681__i;}
G__29680 = new cljs.core.IndexedSeq(G__29681__a,0);
}
return om_tools$dom$input__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$input.cljs$lang$maxFixedArity = 1;
om_tools$dom$input.cljs$lang$applyTo = om_tools$dom$input__2.cljs$lang$applyTo;
om_tools$dom$input.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$input__0;
om_tools$dom$input.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$input__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$input;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.textarea = (function() {
var om_tools$dom$textarea = null;
var om_tools$dom$textarea__0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});
var om_tools$dom$textarea__2 = (function() { 
var G__29682__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__20028__auto__,children__20029__auto__);
};
var G__29682 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29683__i = 0, G__29683__a = new Array(arguments.length -  1);
while (G__29683__i < G__29683__a.length) {G__29683__a[G__29683__i] = arguments[G__29683__i + 1]; ++G__29683__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29683__a,0);
} 
return G__29682__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29682.cljs$lang$maxFixedArity = 1;
G__29682.cljs$lang$applyTo = (function (arglist__29684){
var opts__20028__auto__ = cljs.core.first(arglist__29684);
var children__20029__auto__ = cljs.core.rest(arglist__29684);
return G__29682__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29682.cljs$core$IFn$_invoke$arity$variadic = G__29682__delegate;
return G__29682;
})()
;
om_tools$dom$textarea = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$textarea__0.call(this);
default:
var G__29685 = null;
if (arguments.length > 1) {
var G__29686__i = 0, G__29686__a = new Array(arguments.length -  1);
while (G__29686__i < G__29686__a.length) {G__29686__a[G__29686__i] = arguments[G__29686__i + 1]; ++G__29686__i;}
G__29685 = new cljs.core.IndexedSeq(G__29686__a,0);
}
return om_tools$dom$textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$textarea.cljs$lang$maxFixedArity = 1;
om_tools$dom$textarea.cljs$lang$applyTo = om_tools$dom$textarea__2.cljs$lang$applyTo;
om_tools$dom$textarea.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$textarea__0;
om_tools$dom$textarea.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$textarea__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$textarea;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.option = (function() {
var om_tools$dom$option = null;
var om_tools$dom$option__0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});
var om_tools$dom$option__2 = (function() { 
var G__29687__delegate = function (opts__20028__auto__,children__20029__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__20028__auto__,children__20029__auto__);
};
var G__29687 = function (opts__20028__auto__,var_args){
var children__20029__auto__ = null;
if (arguments.length > 1) {
var G__29688__i = 0, G__29688__a = new Array(arguments.length -  1);
while (G__29688__i < G__29688__a.length) {G__29688__a[G__29688__i] = arguments[G__29688__i + 1]; ++G__29688__i;}
  children__20029__auto__ = new cljs.core.IndexedSeq(G__29688__a,0);
} 
return G__29687__delegate.call(this,opts__20028__auto__,children__20029__auto__);};
G__29687.cljs$lang$maxFixedArity = 1;
G__29687.cljs$lang$applyTo = (function (arglist__29689){
var opts__20028__auto__ = cljs.core.first(arglist__29689);
var children__20029__auto__ = cljs.core.rest(arglist__29689);
return G__29687__delegate(opts__20028__auto__,children__20029__auto__);
});
G__29687.cljs$core$IFn$_invoke$arity$variadic = G__29687__delegate;
return G__29687;
})()
;
om_tools$dom$option = function(opts__20028__auto__,var_args){
var children__20029__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$option__0.call(this);
default:
var G__29690 = null;
if (arguments.length > 1) {
var G__29691__i = 0, G__29691__a = new Array(arguments.length -  1);
while (G__29691__i < G__29691__a.length) {G__29691__a[G__29691__i] = arguments[G__29691__i + 1]; ++G__29691__i;}
G__29690 = new cljs.core.IndexedSeq(G__29691__a,0);
}
return om_tools$dom$option__2.cljs$core$IFn$_invoke$arity$variadic(opts__20028__auto__, G__29690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$option.cljs$lang$maxFixedArity = 1;
om_tools$dom$option.cljs$lang$applyTo = om_tools$dom$option__2.cljs$lang$applyTo;
om_tools$dom$option.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$option__0;
om_tools$dom$option.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$option__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$option;
})()
;
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1427705345520