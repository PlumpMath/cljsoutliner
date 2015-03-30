// Compiled by ClojureScript 0.0-3126 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__20888__20889__auto__){
var G__29968 = p1__20888__20889__auto__;
if(G__29968){
var bit__17265__auto__ = null;
if(cljs.core.truth_((function (){var or__16591__auto__ = bit__17265__auto__;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return G__29968.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__29968.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__29968);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__29968);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__29969_SHARP_){
return (cljs.core.val.call(null,p1__29969_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__29971 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__29971,(0),null);
var v = cljs.core.nth.call(null,vec__29971,(1),null);
var p = vec__29971;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___29977 = schema.utils.use_fn_validation;
var output_schema29972_29978 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema29973_29979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker29974_29980 = schema.core.checker.call(null,input_schema29973_29979);
var output_checker29975_29981 = schema.core.checker.call(null,output_schema29972_29978);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___29977,output_schema29972_29978,input_schema29973_29979,input_checker29974_29980,output_checker29975_29981){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__29976){
var validate__20273__auto__ = ufv___29977.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___29982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29976], null);
var temp__4126__auto___29983 = input_checker29974_29980.call(null,args__20274__auto___29982);
if(cljs.core.truth_(temp__4126__auto___29983)){
var error__20275__auto___29984 = temp__4126__auto___29983;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__20275__auto___29984)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___29984,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___29982,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29973_29979,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var k = G__29976;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___29985 = output_checker29975_29981.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___29985)){
var error__20275__auto___29986 = temp__4126__auto___29985;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__20275__auto___29986)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___29986,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29972_29978,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___29977,output_schema29972_29978,input_schema29973_29979,input_checker29974_29980,output_checker29975_29981))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema29972_29978,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29973_29979], null)));
var ufv___29992 = schema.utils.use_fn_validation;
var output_schema29987_29993 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema29988_29994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker29989_29995 = schema.core.checker.call(null,input_schema29988_29994);
var output_checker29990_29996 = schema.core.checker.call(null,output_schema29987_29993);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___29992,output_schema29987_29993,input_schema29988_29994,input_checker29989_29995,output_checker29990_29996){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__29991){
var validate__20273__auto__ = ufv___29992.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___29997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29991], null);
var temp__4126__auto___29998 = input_checker29989_29995.call(null,args__20274__auto___29997);
if(cljs.core.truth_(temp__4126__auto___29998)){
var error__20275__auto___29999 = temp__4126__auto___29998;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__20275__auto___29999)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___29999,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___29997,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29988_29994,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var s = G__29991;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___30000 = output_checker29990_29996.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___30000)){
var error__20275__auto___30001 = temp__4126__auto___30000;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__20275__auto___30001)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30001,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29987_29993,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___29992,output_schema29987_29993,input_schema29988_29994,input_checker29989_29995,output_checker29990_29996))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema29987_29993,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29988_29994], null)));
var ufv___30007 = schema.utils.use_fn_validation;
var output_schema30002_30008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema30003_30009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker30004_30010 = schema.core.checker.call(null,input_schema30003_30009);
var output_checker30005_30011 = schema.core.checker.call(null,output_schema30002_30008);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___30007,output_schema30002_30008,input_schema30003_30009,input_checker30004_30010,output_checker30005_30011){
return (function plumbing$fnk$schema$split_schema_keys(G__30006){
var validate__20273__auto__ = ufv___30007.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___30012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30006], null);
var temp__4126__auto___30013 = input_checker30004_30010.call(null,args__20274__auto___30012);
if(cljs.core.truth_(temp__4126__auto___30013)){
var error__20275__auto___30014 = temp__4126__auto___30013;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__20275__auto___30014)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30014,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___30012,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30003_30009,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var s = G__30006;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___30015 = output_checker30005_30011.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___30015)){
var error__20275__auto___30016 = temp__4126__auto___30015;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__20275__auto___30016)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30016,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30002_30008,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___30007,output_schema30002_30008,input_schema30003_30009,input_checker30004_30010,output_checker30005_30011))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema30002_30008,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30003_30009], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 * @param {...*} var_args
 */
plumbing.fnk.schema.merge_on_with = (function() { 
var plumbing$fnk$schema$merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__30020){
var vec__30021 = p__30020;
var k = cljs.core.nth.call(null,vec__30021,(0),null);
var v = cljs.core.nth.call(null,vec__30021,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30022 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__30022,(0),null);
var ov = cljs.core.nth.call(null,vec__30022,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var plumbing$fnk$schema$merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__30023__i = 0, G__30023__a = new Array(arguments.length -  3);
while (G__30023__i < G__30023__a.length) {G__30023__a[G__30023__i] = arguments[G__30023__i + 3]; ++G__30023__i;}
  maps = new cljs.core.IndexedSeq(G__30023__a,0);
} 
return plumbing$fnk$schema$merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
plumbing$fnk$schema$merge_on_with.cljs$lang$maxFixedArity = 3;
plumbing$fnk$schema$merge_on_with.cljs$lang$applyTo = (function (arglist__30024){
var key_project = cljs.core.first(arglist__30024);
arglist__30024 = cljs.core.next(arglist__30024);
var key_combine = cljs.core.first(arglist__30024);
arglist__30024 = cljs.core.next(arglist__30024);
var val_combine = cljs.core.first(arglist__30024);
var maps = cljs.core.rest(arglist__30024);
return plumbing$fnk$schema$merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
plumbing$fnk$schema$merge_on_with.cljs$core$IFn$_invoke$arity$variadic = plumbing$fnk$schema$merge_on_with__delegate;
return plumbing$fnk$schema$merge_on_with;
})()
;
var ufv___30032 = schema.utils.use_fn_validation;
var output_schema30026_30033 = plumbing.fnk.schema.InputSchema;
var input_schema30027_30034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker30028_30035 = schema.core.checker.call(null,input_schema30027_30034);
var output_checker30029_30036 = schema.core.checker.call(null,output_schema30026_30033);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___30032,output_schema30026_30033,input_schema30027_30034,input_checker30028_30035,output_checker30029_30036){
return (function plumbing$fnk$schema$union_input_schemata(G__30030,G__30031){
var validate__20273__auto__ = ufv___30032.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___30037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30030,G__30031], null);
var temp__4126__auto___30038 = input_checker30028_30035.call(null,args__20274__auto___30037);
if(cljs.core.truth_(temp__4126__auto___30038)){
var error__20275__auto___30039 = temp__4126__auto___30038;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__20275__auto___30039)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30039,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___30037,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30027_30034,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var i1 = G__30030;
var i2 = G__30031;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__20273__auto__,ufv___30032,output_schema30026_30033,input_schema30027_30034,input_checker30028_30035,output_checker30029_30036){
return (function (p1__30025_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__30025_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__30025_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__20273__auto__,ufv___30032,output_schema30026_30033,input_schema30027_30034,input_checker30028_30035,output_checker30029_30036))
,((function (validate__20273__auto__,ufv___30032,output_schema30026_30033,input_schema30027_30034,input_checker30028_30035,output_checker30029_30036){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__20273__auto__,ufv___30032,output_schema30026_30033,input_schema30027_30034,input_checker30028_30035,output_checker30029_30036))
,((function (validate__20273__auto__,ufv___30032,output_schema30026_30033,input_schema30027_30034,input_checker30028_30035,output_checker30029_30036){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__20273__auto__,ufv___30032,output_schema30026_30033,input_schema30027_30034,input_checker30028_30035,output_checker30029_30036))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___30040 = output_checker30029_30036.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___30040)){
var error__20275__auto___30041 = temp__4126__auto___30040;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__20275__auto___30041)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30041,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30026_30033,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___30032,output_schema30026_30033,input_schema30027_30034,input_checker30028_30035,output_checker30029_30036))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema30026_30033,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30027_30034], null)));
var ufv___30047 = schema.utils.use_fn_validation;
var output_schema30042_30048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema30043_30049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker30044_30050 = schema.core.checker.call(null,input_schema30043_30049);
var output_checker30045_30051 = schema.core.checker.call(null,output_schema30042_30048);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___30047,output_schema30042_30048,input_schema30043_30049,input_checker30044_30050,output_checker30045_30051){
return (function plumbing$fnk$schema$required_toplevel_keys(G__30046){
var validate__20273__auto__ = ufv___30047.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___30052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30046], null);
var temp__4126__auto___30053 = input_checker30044_30050.call(null,args__20274__auto___30052);
if(cljs.core.truth_(temp__4126__auto___30053)){
var error__20275__auto___30054 = temp__4126__auto___30053;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__20275__auto___30054)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30054,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___30052,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30043_30049,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var input_schema = G__30046;
while(true){
return cljs.core.keep.call(null,((function (validate__20273__auto__,ufv___30047,output_schema30042_30048,input_schema30043_30049,input_checker30044_30050,output_checker30045_30051){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__20273__auto__,ufv___30047,output_schema30042_30048,input_schema30043_30049,input_checker30044_30050,output_checker30045_30051))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___30055 = output_checker30045_30051.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___30055)){
var error__20275__auto___30056 = temp__4126__auto___30055;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__20275__auto___30056)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30056,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30042_30048,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___30047,output_schema30042_30048,input_schema30043_30049,input_checker30044_30050,output_checker30045_30051))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema30042_30048,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30043_30049], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17345__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__30065(s__30066){
return (new cljs.core.LazySeq(null,(function (){
var s__30066__$1 = s__30066;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30066__$1);
if(temp__4126__auto__){
var s__30066__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30066__$2)){
var c__17343__auto__ = cljs.core.chunk_first.call(null,s__30066__$2);
var size__17344__auto__ = cljs.core.count.call(null,c__17343__auto__);
var b__30068 = cljs.core.chunk_buffer.call(null,size__17344__auto__);
if((function (){var i__30067 = (0);
while(true){
if((i__30067 < size__17344__auto__)){
var vec__30071 = cljs.core._nth.call(null,c__17343__auto__,i__30067);
var k = cljs.core.nth.call(null,vec__30071,(0),null);
var v = cljs.core.nth.call(null,vec__30071,(1),null);
cljs.core.chunk_append.call(null,b__30068,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__30073 = (i__30067 + (1));
i__30067 = G__30073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30068),plumbing$fnk$schema$guess_expr_output_schema_$_iter__30065.call(null,cljs.core.chunk_rest.call(null,s__30066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30068),null);
}
} else {
var vec__30072 = cljs.core.first.call(null,s__30066__$2);
var k = cljs.core.nth.call(null,vec__30072,(0),null);
var v = cljs.core.nth.call(null,vec__30072,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__30065.call(null,cljs.core.rest.call(null,s__30066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17345__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17345__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__30082(s__30083){
return (new cljs.core.LazySeq(null,(function (){
var s__30083__$1 = s__30083;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30083__$1);
if(temp__4126__auto__){
var s__30083__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30083__$2)){
var c__17343__auto__ = cljs.core.chunk_first.call(null,s__30083__$2);
var size__17344__auto__ = cljs.core.count.call(null,c__17343__auto__);
var b__30085 = cljs.core.chunk_buffer.call(null,size__17344__auto__);
if((function (){var i__30084 = (0);
while(true){
if((i__30084 < size__17344__auto__)){
var vec__30088 = cljs.core._nth.call(null,c__17343__auto__,i__30084);
var k = cljs.core.nth.call(null,vec__30088,(0),null);
var v = cljs.core.nth.call(null,vec__30088,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__30085,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__30090 = (i__30084 + (1));
i__30084 = G__30090;
continue;
} else {
var G__30091 = (i__30084 + (1));
i__30084 = G__30091;
continue;
}
} else {
var G__30092 = (i__30084 + (1));
i__30084 = G__30092;
continue;
}
} else {
var G__30093 = (i__30084 + (1));
i__30084 = G__30093;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30085),plumbing$fnk$schema$schema_diff_$_iter__30082.call(null,cljs.core.chunk_rest.call(null,s__30083__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30085),null);
}
} else {
var vec__30089 = cljs.core.first.call(null,s__30083__$2);
var k = cljs.core.nth.call(null,vec__30089,(0),null);
var v = cljs.core.nth.call(null,vec__30089,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__30082.call(null,cljs.core.rest.call(null,s__30083__$2)));
} else {
var G__30094 = cljs.core.rest.call(null,s__30083__$2);
s__30083__$1 = G__30094;
continue;
}
} else {
var G__30095 = cljs.core.rest.call(null,s__30083__$2);
s__30083__$1 = G__30095;
continue;
}
} else {
var G__30096 = cljs.core.rest.call(null,s__30083__$2);
s__30083__$1 = G__30096;
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
return iter__17345__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___30119 = schema.utils.use_fn_validation;
var output_schema30097_30120 = schema.core.Any;
var input_schema30098_30121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker30099_30122 = schema.core.checker.call(null,input_schema30098_30121);
var output_checker30100_30123 = schema.core.checker.call(null,output_schema30097_30120);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___30119,output_schema30097_30120,input_schema30098_30121,input_checker30099_30122,output_checker30100_30123){
return (function plumbing$fnk$schema$compose_schemata(G__30101,G__30102){
var validate__20273__auto__ = true;
if(validate__20273__auto__){
var args__20274__auto___30124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30101,G__30102], null);
var temp__4126__auto___30125 = input_checker30099_30122.call(null,args__20274__auto___30124);
if(cljs.core.truth_(temp__4126__auto___30125)){
var error__20275__auto___30126 = temp__4126__auto___30125;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__20275__auto___30126)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30126,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___30124,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30098_30121,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var G__30113 = G__30101;
var vec__30115 = G__30113;
var i2 = cljs.core.nth.call(null,vec__30115,(0),null);
var o2 = cljs.core.nth.call(null,vec__30115,(1),null);
var G__30114 = G__30102;
var vec__30116 = G__30114;
var i1 = cljs.core.nth.call(null,vec__30116,(0),null);
var o1 = cljs.core.nth.call(null,vec__30116,(1),null);
var G__30113__$1 = G__30113;
var G__30114__$1 = G__30114;
while(true){
var vec__30117 = G__30113__$1;
var i2__$1 = cljs.core.nth.call(null,vec__30117,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__30117,(1),null);
var vec__30118 = G__30114__$1;
var i1__$1 = cljs.core.nth.call(null,vec__30118,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__30118,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__20273__auto__){
var temp__4126__auto___30127 = output_checker30100_30123.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___30127)){
var error__20275__auto___30128 = temp__4126__auto___30127;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__20275__auto___30128)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30128,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30097_30120,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___30119,output_schema30097_30120,input_schema30098_30121,input_checker30099_30122,output_checker30100_30123))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema30097_30120,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30098_30121], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___30207 = schema.utils.use_fn_validation;
var output_schema30129_30208 = schema.core.Any;
var input_schema30130_30209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker30131_30210 = schema.core.checker.call(null,input_schema30130_30209);
var output_checker30132_30211 = schema.core.checker.call(null,output_schema30129_30208);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211){
return (function plumbing$fnk$schema$split_schema(G__30133,G__30134){
var validate__20273__auto__ = ufv___30207.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___30212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30133,G__30134], null);
var temp__4126__auto___30213 = input_checker30131_30210.call(null,args__20274__auto___30212);
if(cljs.core.truth_(temp__4126__auto___30213)){
var error__20275__auto___30214 = temp__4126__auto___30213;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__20275__auto___30214)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30214,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___30212,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30130_30209,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var s = G__30133;
var ks = G__30134;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__17345__auto__ = ((function (ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211){
return (function plumbing$fnk$schema$split_schema_$_iter__30171(s__30172){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211){
return (function (){
var s__30172__$1 = s__30172;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30172__$1);
if(temp__4126__auto__){
var s__30172__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30172__$2)){
var c__17343__auto__ = cljs.core.chunk_first.call(null,s__30172__$2);
var size__17344__auto__ = cljs.core.count.call(null,c__17343__auto__);
var b__30174 = cljs.core.chunk_buffer.call(null,size__17344__auto__);
if((function (){var i__30173 = (0);
while(true){
if((i__30173 < size__17344__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__17343__auto__,i__30173);
cljs.core.chunk_append.call(null,b__30174,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17345__auto__ = ((function (i__30173,in_QMARK_,c__17343__auto__,size__17344__auto__,b__30174,s__30172__$2,temp__4126__auto__,ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211){
return (function plumbing$fnk$schema$split_schema_$_iter__30171_$_iter__30191(s__30192){
return (new cljs.core.LazySeq(null,((function (i__30173,in_QMARK_,c__17343__auto__,size__17344__auto__,b__30174,s__30172__$2,temp__4126__auto__,ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211){
return (function (){
var s__30192__$1 = s__30192;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30192__$1);
if(temp__4126__auto____$1){
var s__30192__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30192__$2)){
var c__17343__auto____$1 = cljs.core.chunk_first.call(null,s__30192__$2);
var size__17344__auto____$1 = cljs.core.count.call(null,c__17343__auto____$1);
var b__30194 = cljs.core.chunk_buffer.call(null,size__17344__auto____$1);
if((function (){var i__30193 = (0);
while(true){
if((i__30193 < size__17344__auto____$1)){
var vec__30197 = cljs.core._nth.call(null,c__17343__auto____$1,i__30193);
var k = cljs.core.nth.call(null,vec__30197,(0),null);
var v = cljs.core.nth.call(null,vec__30197,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__30194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30215 = (i__30193 + (1));
i__30193 = G__30215;
continue;
} else {
var G__30216 = (i__30193 + (1));
i__30193 = G__30216;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30194),plumbing$fnk$schema$split_schema_$_iter__30171_$_iter__30191.call(null,cljs.core.chunk_rest.call(null,s__30192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30194),null);
}
} else {
var vec__30198 = cljs.core.first.call(null,s__30192__$2);
var k = cljs.core.nth.call(null,vec__30198,(0),null);
var v = cljs.core.nth.call(null,vec__30198,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__30171_$_iter__30191.call(null,cljs.core.rest.call(null,s__30192__$2)));
} else {
var G__30217 = cljs.core.rest.call(null,s__30192__$2);
s__30192__$1 = G__30217;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__30173,in_QMARK_,c__17343__auto__,size__17344__auto__,b__30174,s__30172__$2,temp__4126__auto__,ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211))
,null,null));
});})(i__30173,in_QMARK_,c__17343__auto__,size__17344__auto__,b__30174,s__30172__$2,temp__4126__auto__,ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211))
;
return iter__17345__auto__.call(null,s);
})()));

var G__30218 = (i__30173 + (1));
i__30173 = G__30218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30174),plumbing$fnk$schema$split_schema_$_iter__30171.call(null,cljs.core.chunk_rest.call(null,s__30172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30174),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__30172__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17345__auto__ = ((function (in_QMARK_,s__30172__$2,temp__4126__auto__,ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211){
return (function plumbing$fnk$schema$split_schema_$_iter__30171_$_iter__30199(s__30200){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__30172__$2,temp__4126__auto__,ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211){
return (function (){
var s__30200__$1 = s__30200;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30200__$1);
if(temp__4126__auto____$1){
var s__30200__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30200__$2)){
var c__17343__auto__ = cljs.core.chunk_first.call(null,s__30200__$2);
var size__17344__auto__ = cljs.core.count.call(null,c__17343__auto__);
var b__30202 = cljs.core.chunk_buffer.call(null,size__17344__auto__);
if((function (){var i__30201 = (0);
while(true){
if((i__30201 < size__17344__auto__)){
var vec__30205 = cljs.core._nth.call(null,c__17343__auto__,i__30201);
var k = cljs.core.nth.call(null,vec__30205,(0),null);
var v = cljs.core.nth.call(null,vec__30205,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__30202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30219 = (i__30201 + (1));
i__30201 = G__30219;
continue;
} else {
var G__30220 = (i__30201 + (1));
i__30201 = G__30220;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30202),plumbing$fnk$schema$split_schema_$_iter__30171_$_iter__30199.call(null,cljs.core.chunk_rest.call(null,s__30200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30202),null);
}
} else {
var vec__30206 = cljs.core.first.call(null,s__30200__$2);
var k = cljs.core.nth.call(null,vec__30206,(0),null);
var v = cljs.core.nth.call(null,vec__30206,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__30171_$_iter__30199.call(null,cljs.core.rest.call(null,s__30200__$2)));
} else {
var G__30221 = cljs.core.rest.call(null,s__30200__$2);
s__30200__$1 = G__30221;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__30172__$2,temp__4126__auto__,ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211))
,null,null));
});})(in_QMARK_,s__30172__$2,temp__4126__auto__,ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211))
;
return iter__17345__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__30171.call(null,cljs.core.rest.call(null,s__30172__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211))
,null,null));
});})(ks__$1,validate__20273__auto__,ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211))
;
return iter__17345__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___30222 = output_checker30132_30211.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___30222)){
var error__20275__auto___30223 = temp__4126__auto___30222;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__20275__auto___30223)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30223,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30129_30208,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___30207,output_schema30129_30208,input_schema30130_30209,input_checker30131_30210,output_checker30132_30211))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema30129_30208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30130_30209], null)));
var ufv___30254 = schema.utils.use_fn_validation;
var output_schema30224_30255 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema30225_30256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker30226_30257 = schema.core.checker.call(null,input_schema30225_30256);
var output_checker30227_30258 = schema.core.checker.call(null,output_schema30224_30255);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___30254,output_schema30224_30255,input_schema30225_30256,input_checker30226_30257,output_checker30227_30258){
return (function plumbing$fnk$schema$sequence_schemata(G__30228,G__30229){
var validate__20273__auto__ = ufv___30254.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___30259 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30228,G__30229], null);
var temp__4126__auto___30260 = input_checker30226_30257.call(null,args__20274__auto___30259);
if(cljs.core.truth_(temp__4126__auto___30260)){
var error__20275__auto___30261 = temp__4126__auto___30260;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__20275__auto___30261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30261,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___30259,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30225_30256,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var G__30245 = G__30228;
var vec__30247 = G__30245;
var i1 = cljs.core.nth.call(null,vec__30247,(0),null);
var o1 = cljs.core.nth.call(null,vec__30247,(1),null);
var G__30246 = G__30229;
var vec__30248 = G__30246;
var k = cljs.core.nth.call(null,vec__30248,(0),null);
var vec__30249 = cljs.core.nth.call(null,vec__30248,(1),null);
var i2 = cljs.core.nth.call(null,vec__30249,(0),null);
var o2 = cljs.core.nth.call(null,vec__30249,(1),null);
var G__30245__$1 = G__30245;
var G__30246__$1 = G__30246;
while(true){
var vec__30250 = G__30245__$1;
var i1__$1 = cljs.core.nth.call(null,vec__30250,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__30250,(1),null);
var vec__30251 = G__30246__$1;
var k__$1 = cljs.core.nth.call(null,vec__30251,(0),null);
var vec__30252 = cljs.core.nth.call(null,vec__30251,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__30252,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__30252,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__30253 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__30253,(0),null);
var unused = cljs.core.nth.call(null,vec__30253,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___30262 = output_checker30227_30258.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___30262)){
var error__20275__auto___30263 = temp__4126__auto___30262;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__20275__auto___30263)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___30263,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30224_30255,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___30254,output_schema30224_30255,input_schema30225_30256,input_checker30226_30257,output_checker30227_30258))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema30224_30255,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30225_30256], null)));

//# sourceMappingURL=schema.js.map?rel=1427705346402