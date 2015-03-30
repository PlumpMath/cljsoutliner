// Compiled by ClojureScript 0.0-3126 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__35555_SHARP_,p2__35556_SHARP_){
var and__16579__auto__ = p1__35555_SHARP_;
if(cljs.core.truth_(and__16579__auto__)){
return p2__35556_SHARP_;
} else {
return and__16579__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16591__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16591__auto__){
return or__16591__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__35558_SHARP_,p2__35557_SHARP_){
return [cljs.core.str(p2__35557_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16591__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16591__auto__){
return or__16591__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16591__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17488__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17490__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17490__auto__,method_table__17486__auto__,prefer_table__17487__auto__,method_cache__17488__auto__,cached_hierarchy__17489__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35559){
var map__35560 = p__35559;
var map__35560__$1 = ((cljs.core.seq_QMARK_.call(null,map__35560))?cljs.core.apply.call(null,cljs.core.hash_map,map__35560):map__35560);
var file = cljs.core.get.call(null,map__35560__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35561){
var map__35562 = p__35561;
var map__35562__$1 = ((cljs.core.seq_QMARK_.call(null,map__35562))?cljs.core.apply.call(null,cljs.core.hash_map,map__35562):map__35562);
var namespace = cljs.core.get.call(null,map__35562__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17488__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17490__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17490__auto__,method_table__17486__auto__,prefer_table__17487__auto__,method_cache__17488__auto__,cached_hierarchy__17489__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e35563){if((e35563 instanceof Error)){
var e = e35563;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35563;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35564,callback){
var map__35566 = p__35564;
var map__35566__$1 = ((cljs.core.seq_QMARK_.call(null,map__35566))?cljs.core.apply.call(null,cljs.core.hash_map,map__35566):map__35566);
var file_msg = map__35566__$1;
var request_url = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35566,map__35566__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35566,map__35566__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35567){
var map__35569 = p__35567;
var map__35569__$1 = ((cljs.core.seq_QMARK_.call(null,map__35569))?cljs.core.apply.call(null,cljs.core.hash_map,map__35569):map__35569);
var file_msg = map__35569__$1;
var meta_data = cljs.core.get.call(null,map__35569__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__35569__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16591__auto__ = meta_data;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16579__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16579__auto__){
var or__16591__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16591__auto____$1)){
return or__16591__auto____$1;
} else {
var and__16579__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16579__auto____$1){
var or__16591__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16591__auto____$2){
return or__16591__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16579__auto____$1;
}
}
}
} else {
return and__16579__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35570,callback){
var map__35572 = p__35570;
var map__35572__$1 = ((cljs.core.seq_QMARK_.call(null,map__35572))?cljs.core.apply.call(null,cljs.core.hash_map,map__35572):map__35572);
var file_msg = map__35572__$1;
var namespace = cljs.core.get.call(null,map__35572__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__35572__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23737__auto___35659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___35659,out){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___35659,out){
return (function (state_35641){
var state_val_35642 = (state_35641[(1)]);
if((state_val_35642 === (7))){
var inst_35625 = (state_35641[(7)]);
var inst_35631 = (state_35641[(2)]);
var inst_35632 = cljs.core.async.put_BANG_.call(null,out,inst_35631);
var inst_35621 = inst_35625;
var state_35641__$1 = (function (){var statearr_35643 = state_35641;
(statearr_35643[(8)] = inst_35621);

(statearr_35643[(9)] = inst_35632);

return statearr_35643;
})();
var statearr_35644_35660 = state_35641__$1;
(statearr_35644_35660[(2)] = null);

(statearr_35644_35660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (6))){
var inst_35637 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35645_35661 = state_35641__$1;
(statearr_35645_35661[(2)] = inst_35637);

(statearr_35645_35661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (5))){
var inst_35635 = cljs.core.async.close_BANG_.call(null,out);
var state_35641__$1 = state_35641;
var statearr_35646_35662 = state_35641__$1;
(statearr_35646_35662[(2)] = inst_35635);

(statearr_35646_35662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (4))){
var inst_35624 = (state_35641[(10)]);
var inst_35629 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35624);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35641__$1,(7),inst_35629);
} else {
if((state_val_35642 === (3))){
var inst_35639 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35641__$1,inst_35639);
} else {
if((state_val_35642 === (2))){
var inst_35624 = (state_35641[(10)]);
var inst_35621 = (state_35641[(8)]);
var inst_35624__$1 = cljs.core.nth.call(null,inst_35621,(0),null);
var inst_35625 = cljs.core.nthnext.call(null,inst_35621,(1));
var inst_35626 = (inst_35624__$1 == null);
var inst_35627 = cljs.core.not.call(null,inst_35626);
var state_35641__$1 = (function (){var statearr_35647 = state_35641;
(statearr_35647[(7)] = inst_35625);

(statearr_35647[(10)] = inst_35624__$1);

return statearr_35647;
})();
if(inst_35627){
var statearr_35648_35663 = state_35641__$1;
(statearr_35648_35663[(1)] = (4));

} else {
var statearr_35649_35664 = state_35641__$1;
(statearr_35649_35664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (1))){
var inst_35619 = cljs.core.nth.call(null,files,(0),null);
var inst_35620 = cljs.core.nthnext.call(null,files,(1));
var inst_35621 = files;
var state_35641__$1 = (function (){var statearr_35650 = state_35641;
(statearr_35650[(8)] = inst_35621);

(statearr_35650[(11)] = inst_35620);

(statearr_35650[(12)] = inst_35619);

return statearr_35650;
})();
var statearr_35651_35665 = state_35641__$1;
(statearr_35651_35665[(2)] = null);

(statearr_35651_35665[(1)] = (2));


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
});})(c__23737__auto___35659,out))
;
return ((function (switch__23722__auto__,c__23737__auto___35659,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto____0 = (function (){
var statearr_35655 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35655[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto__);

(statearr_35655[(1)] = (1));

return statearr_35655;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto____1 = (function (state_35641){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_35641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e35656){if((e35656 instanceof Object)){
var ex__23726__auto__ = e35656;
var statearr_35657_35666 = state_35641;
(statearr_35657_35666[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35667 = state_35641;
state_35641 = G__35667;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto__ = function(state_35641){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto____1.call(this,state_35641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___35659,out))
})();
var state__23739__auto__ = (function (){var statearr_35658 = f__23738__auto__.call(null);
(statearr_35658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___35659);

return statearr_35658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___35659,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__35668,p__35669){
var map__35672 = p__35668;
var map__35672__$1 = ((cljs.core.seq_QMARK_.call(null,map__35672))?cljs.core.apply.call(null,cljs.core.hash_map,map__35672):map__35672);
var opts = map__35672__$1;
var url_rewriter = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35673 = p__35669;
var map__35673__$1 = ((cljs.core.seq_QMARK_.call(null,map__35673))?cljs.core.apply.call(null,cljs.core.hash_map,map__35673):map__35673);
var file_msg = map__35673__$1;
var file = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35674){
var map__35677 = p__35674;
var map__35677__$1 = ((cljs.core.seq_QMARK_.call(null,map__35677))?cljs.core.apply.call(null,cljs.core.hash_map,map__35677):map__35677);
var file = cljs.core.get.call(null,map__35677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__35677__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16579__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16579__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16579__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e35678){var e = e35678;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35683,p__35684){
var map__35885 = p__35683;
var map__35885__$1 = ((cljs.core.seq_QMARK_.call(null,map__35885))?cljs.core.apply.call(null,cljs.core.hash_map,map__35885):map__35885);
var opts = map__35885__$1;
var load_unchanged_files = cljs.core.get.call(null,map__35885__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__35885__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__35885__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__35886 = p__35684;
var map__35886__$1 = ((cljs.core.seq_QMARK_.call(null,map__35886))?cljs.core.apply.call(null,cljs.core.hash_map,map__35886):map__35886);
var msg = map__35886__$1;
var files = cljs.core.get.call(null,map__35886__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (state_36010){
var state_val_36011 = (state_36010[(1)]);
if((state_val_36011 === (7))){
var inst_35898 = (state_36010[(7)]);
var inst_35897 = (state_36010[(8)]);
var inst_35900 = (state_36010[(9)]);
var inst_35899 = (state_36010[(10)]);
var inst_35905 = cljs.core._nth.call(null,inst_35898,inst_35900);
var inst_35906 = figwheel.client.file_reloading.eval_body.call(null,inst_35905);
var inst_35907 = (inst_35900 + (1));
var tmp36012 = inst_35898;
var tmp36013 = inst_35897;
var tmp36014 = inst_35899;
var inst_35897__$1 = tmp36013;
var inst_35898__$1 = tmp36012;
var inst_35899__$1 = tmp36014;
var inst_35900__$1 = inst_35907;
var state_36010__$1 = (function (){var statearr_36015 = state_36010;
(statearr_36015[(7)] = inst_35898__$1);

(statearr_36015[(11)] = inst_35906);

(statearr_36015[(8)] = inst_35897__$1);

(statearr_36015[(9)] = inst_35900__$1);

(statearr_36015[(10)] = inst_35899__$1);

return statearr_36015;
})();
var statearr_36016_36085 = state_36010__$1;
(statearr_36016_36085[(2)] = null);

(statearr_36016_36085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (20))){
var inst_35942 = (state_36010[(12)]);
var inst_35947 = (state_36010[(13)]);
var inst_35943 = (state_36010[(14)]);
var inst_35949 = (state_36010[(15)]);
var inst_35946 = (state_36010[(16)]);
var inst_35952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35954 = (function (){var files_not_loaded = inst_35949;
var res = inst_35947;
var res_SINGLEQUOTE_ = inst_35946;
var files_SINGLEQUOTE_ = inst_35943;
var all_files = inst_35942;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35942,inst_35947,inst_35943,inst_35949,inst_35946,inst_35952,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (p__35953){
var map__36017 = p__35953;
var map__36017__$1 = ((cljs.core.seq_QMARK_.call(null,map__36017))?cljs.core.apply.call(null,cljs.core.hash_map,map__36017):map__36017);
var file = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35942,inst_35947,inst_35943,inst_35949,inst_35946,inst_35952,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
})();
var inst_35955 = cljs.core.map.call(null,inst_35954,inst_35947);
var inst_35956 = cljs.core.pr_str.call(null,inst_35955);
var inst_35957 = figwheel.client.utils.log.call(null,inst_35956);
var inst_35958 = (function (){var files_not_loaded = inst_35949;
var res = inst_35947;
var res_SINGLEQUOTE_ = inst_35946;
var files_SINGLEQUOTE_ = inst_35943;
var all_files = inst_35942;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35942,inst_35947,inst_35943,inst_35949,inst_35946,inst_35952,inst_35954,inst_35955,inst_35956,inst_35957,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35942,inst_35947,inst_35943,inst_35949,inst_35946,inst_35952,inst_35954,inst_35955,inst_35956,inst_35957,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
})();
var inst_35959 = setTimeout(inst_35958,(10));
var state_36010__$1 = (function (){var statearr_36018 = state_36010;
(statearr_36018[(17)] = inst_35952);

(statearr_36018[(18)] = inst_35957);

return statearr_36018;
})();
var statearr_36019_36086 = state_36010__$1;
(statearr_36019_36086[(2)] = inst_35959);

(statearr_36019_36086[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (27))){
var inst_35969 = (state_36010[(19)]);
var state_36010__$1 = state_36010;
var statearr_36020_36087 = state_36010__$1;
(statearr_36020_36087[(2)] = inst_35969);

(statearr_36020_36087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (1))){
var inst_35889 = (state_36010[(20)]);
var inst_35887 = before_jsload.call(null,files);
var inst_35888 = (function (){return ((function (inst_35889,inst_35887,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (p1__35679_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35679_SHARP_);
});
;})(inst_35889,inst_35887,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
})();
var inst_35889__$1 = cljs.core.filter.call(null,inst_35888,files);
var inst_35890 = cljs.core.not_empty.call(null,inst_35889__$1);
var state_36010__$1 = (function (){var statearr_36021 = state_36010;
(statearr_36021[(20)] = inst_35889__$1);

(statearr_36021[(21)] = inst_35887);

return statearr_36021;
})();
if(cljs.core.truth_(inst_35890)){
var statearr_36022_36088 = state_36010__$1;
(statearr_36022_36088[(1)] = (2));

} else {
var statearr_36023_36089 = state_36010__$1;
(statearr_36023_36089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (24))){
var state_36010__$1 = state_36010;
var statearr_36024_36090 = state_36010__$1;
(statearr_36024_36090[(2)] = null);

(statearr_36024_36090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (4))){
var inst_35934 = (state_36010[(2)]);
var inst_35935 = (function (){return ((function (inst_35934,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (p1__35680_SHARP_){
var and__16579__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35680_SHARP_);
if(cljs.core.truth_(and__16579__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35680_SHARP_));
} else {
return and__16579__auto__;
}
});
;})(inst_35934,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
})();
var inst_35936 = cljs.core.filter.call(null,inst_35935,files);
var state_36010__$1 = (function (){var statearr_36025 = state_36010;
(statearr_36025[(22)] = inst_35934);

(statearr_36025[(23)] = inst_35936);

return statearr_36025;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_36026_36091 = state_36010__$1;
(statearr_36026_36091[(1)] = (16));

} else {
var statearr_36027_36092 = state_36010__$1;
(statearr_36027_36092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (15))){
var inst_35924 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36028_36093 = state_36010__$1;
(statearr_36028_36093[(2)] = inst_35924);

(statearr_36028_36093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (21))){
var state_36010__$1 = state_36010;
var statearr_36029_36094 = state_36010__$1;
(statearr_36029_36094[(2)] = null);

(statearr_36029_36094[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (31))){
var inst_35977 = (state_36010[(24)]);
var inst_35987 = (state_36010[(2)]);
var inst_35988 = cljs.core.not_empty.call(null,inst_35977);
var state_36010__$1 = (function (){var statearr_36030 = state_36010;
(statearr_36030[(25)] = inst_35987);

return statearr_36030;
})();
if(cljs.core.truth_(inst_35988)){
var statearr_36031_36095 = state_36010__$1;
(statearr_36031_36095[(1)] = (32));

} else {
var statearr_36032_36096 = state_36010__$1;
(statearr_36032_36096[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (32))){
var inst_35977 = (state_36010[(24)]);
var inst_35990 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35977);
var inst_35991 = cljs.core.pr_str.call(null,inst_35990);
var inst_35992 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35991)].join('');
var inst_35993 = figwheel.client.utils.log.call(null,inst_35992);
var state_36010__$1 = state_36010;
var statearr_36033_36097 = state_36010__$1;
(statearr_36033_36097[(2)] = inst_35993);

(statearr_36033_36097[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (33))){
var state_36010__$1 = state_36010;
var statearr_36034_36098 = state_36010__$1;
(statearr_36034_36098[(2)] = null);

(statearr_36034_36098[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (13))){
var inst_35910 = (state_36010[(26)]);
var inst_35914 = cljs.core.chunk_first.call(null,inst_35910);
var inst_35915 = cljs.core.chunk_rest.call(null,inst_35910);
var inst_35916 = cljs.core.count.call(null,inst_35914);
var inst_35897 = inst_35915;
var inst_35898 = inst_35914;
var inst_35899 = inst_35916;
var inst_35900 = (0);
var state_36010__$1 = (function (){var statearr_36035 = state_36010;
(statearr_36035[(7)] = inst_35898);

(statearr_36035[(8)] = inst_35897);

(statearr_36035[(9)] = inst_35900);

(statearr_36035[(10)] = inst_35899);

return statearr_36035;
})();
var statearr_36036_36099 = state_36010__$1;
(statearr_36036_36099[(2)] = null);

(statearr_36036_36099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (22))){
var inst_35949 = (state_36010[(15)]);
var inst_35962 = (state_36010[(2)]);
var inst_35963 = cljs.core.not_empty.call(null,inst_35949);
var state_36010__$1 = (function (){var statearr_36037 = state_36010;
(statearr_36037[(27)] = inst_35962);

return statearr_36037;
})();
if(cljs.core.truth_(inst_35963)){
var statearr_36038_36100 = state_36010__$1;
(statearr_36038_36100[(1)] = (23));

} else {
var statearr_36039_36101 = state_36010__$1;
(statearr_36039_36101[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (36))){
var state_36010__$1 = state_36010;
var statearr_36040_36102 = state_36010__$1;
(statearr_36040_36102[(2)] = null);

(statearr_36040_36102[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (29))){
var inst_35978 = (state_36010[(28)]);
var inst_35981 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35978);
var inst_35982 = cljs.core.pr_str.call(null,inst_35981);
var inst_35983 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35982)].join('');
var inst_35984 = figwheel.client.utils.log.call(null,inst_35983);
var state_36010__$1 = state_36010;
var statearr_36041_36103 = state_36010__$1;
(statearr_36041_36103[(2)] = inst_35984);

(statearr_36041_36103[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (6))){
var inst_35931 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36042_36104 = state_36010__$1;
(statearr_36042_36104[(2)] = inst_35931);

(statearr_36042_36104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (28))){
var inst_35978 = (state_36010[(28)]);
var inst_35975 = (state_36010[(2)]);
var inst_35976 = cljs.core.get.call(null,inst_35975,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35977 = cljs.core.get.call(null,inst_35975,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35978__$1 = cljs.core.get.call(null,inst_35975,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35979 = cljs.core.not_empty.call(null,inst_35978__$1);
var state_36010__$1 = (function (){var statearr_36043 = state_36010;
(statearr_36043[(28)] = inst_35978__$1);

(statearr_36043[(29)] = inst_35976);

(statearr_36043[(24)] = inst_35977);

return statearr_36043;
})();
if(cljs.core.truth_(inst_35979)){
var statearr_36044_36105 = state_36010__$1;
(statearr_36044_36105[(1)] = (29));

} else {
var statearr_36045_36106 = state_36010__$1;
(statearr_36045_36106[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (25))){
var inst_36008 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36010__$1,inst_36008);
} else {
if((state_val_36011 === (34))){
var inst_35976 = (state_36010[(29)]);
var inst_35996 = (state_36010[(2)]);
var inst_35997 = cljs.core.not_empty.call(null,inst_35976);
var state_36010__$1 = (function (){var statearr_36046 = state_36010;
(statearr_36046[(30)] = inst_35996);

return statearr_36046;
})();
if(cljs.core.truth_(inst_35997)){
var statearr_36047_36107 = state_36010__$1;
(statearr_36047_36107[(1)] = (35));

} else {
var statearr_36048_36108 = state_36010__$1;
(statearr_36048_36108[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (17))){
var inst_35936 = (state_36010[(23)]);
var state_36010__$1 = state_36010;
var statearr_36049_36109 = state_36010__$1;
(statearr_36049_36109[(2)] = inst_35936);

(statearr_36049_36109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (3))){
var state_36010__$1 = state_36010;
var statearr_36050_36110 = state_36010__$1;
(statearr_36050_36110[(2)] = null);

(statearr_36050_36110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (12))){
var inst_35927 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36051_36111 = state_36010__$1;
(statearr_36051_36111[(2)] = inst_35927);

(statearr_36051_36111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (2))){
var inst_35889 = (state_36010[(20)]);
var inst_35896 = cljs.core.seq.call(null,inst_35889);
var inst_35897 = inst_35896;
var inst_35898 = null;
var inst_35899 = (0);
var inst_35900 = (0);
var state_36010__$1 = (function (){var statearr_36052 = state_36010;
(statearr_36052[(7)] = inst_35898);

(statearr_36052[(8)] = inst_35897);

(statearr_36052[(9)] = inst_35900);

(statearr_36052[(10)] = inst_35899);

return statearr_36052;
})();
var statearr_36053_36112 = state_36010__$1;
(statearr_36053_36112[(2)] = null);

(statearr_36053_36112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (23))){
var inst_35942 = (state_36010[(12)]);
var inst_35947 = (state_36010[(13)]);
var inst_35969 = (state_36010[(19)]);
var inst_35943 = (state_36010[(14)]);
var inst_35949 = (state_36010[(15)]);
var inst_35946 = (state_36010[(16)]);
var inst_35965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35968 = (function (){var files_not_loaded = inst_35949;
var res = inst_35947;
var res_SINGLEQUOTE_ = inst_35946;
var files_SINGLEQUOTE_ = inst_35943;
var all_files = inst_35942;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35942,inst_35947,inst_35969,inst_35943,inst_35949,inst_35946,inst_35965,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (p__35967){
var map__36054 = p__35967;
var map__36054__$1 = ((cljs.core.seq_QMARK_.call(null,map__36054))?cljs.core.apply.call(null,cljs.core.hash_map,map__36054):map__36054);
var meta_data = cljs.core.get.call(null,map__36054__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35942,inst_35947,inst_35969,inst_35943,inst_35949,inst_35946,inst_35965,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
})();
var inst_35969__$1 = cljs.core.group_by.call(null,inst_35968,inst_35949);
var inst_35970 = cljs.core.seq_QMARK_.call(null,inst_35969__$1);
var state_36010__$1 = (function (){var statearr_36055 = state_36010;
(statearr_36055[(31)] = inst_35965);

(statearr_36055[(19)] = inst_35969__$1);

return statearr_36055;
})();
if(inst_35970){
var statearr_36056_36113 = state_36010__$1;
(statearr_36056_36113[(1)] = (26));

} else {
var statearr_36057_36114 = state_36010__$1;
(statearr_36057_36114[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (35))){
var inst_35976 = (state_36010[(29)]);
var inst_35999 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35976);
var inst_36000 = cljs.core.pr_str.call(null,inst_35999);
var inst_36001 = [cljs.core.str("not required: "),cljs.core.str(inst_36000)].join('');
var inst_36002 = figwheel.client.utils.log.call(null,inst_36001);
var state_36010__$1 = state_36010;
var statearr_36058_36115 = state_36010__$1;
(statearr_36058_36115[(2)] = inst_36002);

(statearr_36058_36115[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (19))){
var inst_35942 = (state_36010[(12)]);
var inst_35947 = (state_36010[(13)]);
var inst_35943 = (state_36010[(14)]);
var inst_35946 = (state_36010[(16)]);
var inst_35946__$1 = (state_36010[(2)]);
var inst_35947__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35946__$1);
var inst_35948 = (function (){var res = inst_35947__$1;
var res_SINGLEQUOTE_ = inst_35946__$1;
var files_SINGLEQUOTE_ = inst_35943;
var all_files = inst_35942;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35942,inst_35947,inst_35943,inst_35946,inst_35946__$1,inst_35947__$1,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (p1__35682_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35682_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35942,inst_35947,inst_35943,inst_35946,inst_35946__$1,inst_35947__$1,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
})();
var inst_35949 = cljs.core.filter.call(null,inst_35948,inst_35946__$1);
var inst_35950 = cljs.core.not_empty.call(null,inst_35947__$1);
var state_36010__$1 = (function (){var statearr_36059 = state_36010;
(statearr_36059[(13)] = inst_35947__$1);

(statearr_36059[(15)] = inst_35949);

(statearr_36059[(16)] = inst_35946__$1);

return statearr_36059;
})();
if(cljs.core.truth_(inst_35950)){
var statearr_36060_36116 = state_36010__$1;
(statearr_36060_36116[(1)] = (20));

} else {
var statearr_36061_36117 = state_36010__$1;
(statearr_36061_36117[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (11))){
var state_36010__$1 = state_36010;
var statearr_36062_36118 = state_36010__$1;
(statearr_36062_36118[(2)] = null);

(statearr_36062_36118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (9))){
var inst_35929 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36063_36119 = state_36010__$1;
(statearr_36063_36119[(2)] = inst_35929);

(statearr_36063_36119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (5))){
var inst_35900 = (state_36010[(9)]);
var inst_35899 = (state_36010[(10)]);
var inst_35902 = (inst_35900 < inst_35899);
var inst_35903 = inst_35902;
var state_36010__$1 = state_36010;
if(cljs.core.truth_(inst_35903)){
var statearr_36064_36120 = state_36010__$1;
(statearr_36064_36120[(1)] = (7));

} else {
var statearr_36065_36121 = state_36010__$1;
(statearr_36065_36121[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (14))){
var inst_35910 = (state_36010[(26)]);
var inst_35919 = cljs.core.first.call(null,inst_35910);
var inst_35920 = figwheel.client.file_reloading.eval_body.call(null,inst_35919);
var inst_35921 = cljs.core.next.call(null,inst_35910);
var inst_35897 = inst_35921;
var inst_35898 = null;
var inst_35899 = (0);
var inst_35900 = (0);
var state_36010__$1 = (function (){var statearr_36066 = state_36010;
(statearr_36066[(32)] = inst_35920);

(statearr_36066[(7)] = inst_35898);

(statearr_36066[(8)] = inst_35897);

(statearr_36066[(9)] = inst_35900);

(statearr_36066[(10)] = inst_35899);

return statearr_36066;
})();
var statearr_36067_36122 = state_36010__$1;
(statearr_36067_36122[(2)] = null);

(statearr_36067_36122[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (26))){
var inst_35969 = (state_36010[(19)]);
var inst_35972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35969);
var state_36010__$1 = state_36010;
var statearr_36068_36123 = state_36010__$1;
(statearr_36068_36123[(2)] = inst_35972);

(statearr_36068_36123[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (16))){
var inst_35936 = (state_36010[(23)]);
var inst_35938 = (function (){var all_files = inst_35936;
return ((function (all_files,inst_35936,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function (p1__35681_SHARP_){
return cljs.core.update_in.call(null,p1__35681_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35936,state_val_36011,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
})();
var inst_35939 = cljs.core.map.call(null,inst_35938,inst_35936);
var state_36010__$1 = state_36010;
var statearr_36069_36124 = state_36010__$1;
(statearr_36069_36124[(2)] = inst_35939);

(statearr_36069_36124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (30))){
var state_36010__$1 = state_36010;
var statearr_36070_36125 = state_36010__$1;
(statearr_36070_36125[(2)] = null);

(statearr_36070_36125[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (10))){
var inst_35910 = (state_36010[(26)]);
var inst_35912 = cljs.core.chunked_seq_QMARK_.call(null,inst_35910);
var state_36010__$1 = state_36010;
if(inst_35912){
var statearr_36071_36126 = state_36010__$1;
(statearr_36071_36126[(1)] = (13));

} else {
var statearr_36072_36127 = state_36010__$1;
(statearr_36072_36127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (18))){
var inst_35942 = (state_36010[(12)]);
var inst_35943 = (state_36010[(14)]);
var inst_35942__$1 = (state_36010[(2)]);
var inst_35943__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35942__$1);
var inst_35944 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35943__$1);
var state_36010__$1 = (function (){var statearr_36073 = state_36010;
(statearr_36073[(12)] = inst_35942__$1);

(statearr_36073[(14)] = inst_35943__$1);

return statearr_36073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,(19),inst_35944);
} else {
if((state_val_36011 === (37))){
var inst_36005 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36074_36128 = state_36010__$1;
(statearr_36074_36128[(2)] = inst_36005);

(statearr_36074_36128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (8))){
var inst_35910 = (state_36010[(26)]);
var inst_35897 = (state_36010[(8)]);
var inst_35910__$1 = cljs.core.seq.call(null,inst_35897);
var state_36010__$1 = (function (){var statearr_36075 = state_36010;
(statearr_36075[(26)] = inst_35910__$1);

return statearr_36075;
})();
if(inst_35910__$1){
var statearr_36076_36129 = state_36010__$1;
(statearr_36076_36129[(1)] = (10));

} else {
var statearr_36077_36130 = state_36010__$1;
(statearr_36077_36130[(1)] = (11));

}

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
});})(c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
;
return ((function (switch__23722__auto__,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto____0 = (function (){
var statearr_36081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36081[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto__);

(statearr_36081[(1)] = (1));

return statearr_36081;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto____1 = (function (state_36010){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_36010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e36082){if((e36082 instanceof Object)){
var ex__23726__auto__ = e36082;
var statearr_36083_36131 = state_36010;
(statearr_36083_36131[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36132 = state_36010;
state_36010 = G__36132;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
})();
var state__23739__auto__ = (function (){var statearr_36084 = f__23738__auto__.call(null);
(statearr_36084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto__);

return statearr_36084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto__,map__35885,map__35885__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35886,map__35886__$1,msg,files))
);

return c__23737__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36135,link){
var map__36137 = p__36135;
var map__36137__$1 = ((cljs.core.seq_QMARK_.call(null,map__36137))?cljs.core.apply.call(null,cljs.core.hash_map,map__36137):map__36137);
var file = cljs.core.get.call(null,map__36137__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__36137,map__36137__$1,file){
return (function (p1__36133_SHARP_,p2__36134_SHARP_){
if(cljs.core._EQ_.call(null,p1__36133_SHARP_,p2__36134_SHARP_)){
return p1__36133_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__36137,map__36137__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36141){
var map__36142 = p__36141;
var map__36142__$1 = ((cljs.core.seq_QMARK_.call(null,map__36142))?cljs.core.apply.call(null,cljs.core.hash_map,map__36142):map__36142);
var current_url_length = cljs.core.get.call(null,map__36142__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__36142__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36138_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36138_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36143){
var map__36145 = p__36143;
var map__36145__$1 = ((cljs.core.seq_QMARK_.call(null,map__36145))?cljs.core.apply.call(null,cljs.core.hash_map,map__36145):map__36145);
var f_data = map__36145__$1;
var request_url = cljs.core.get.call(null,map__36145__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__36145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16591__auto__ = request_url;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36146,files_msg){
var map__36168 = p__36146;
var map__36168__$1 = ((cljs.core.seq_QMARK_.call(null,map__36168))?cljs.core.apply.call(null,cljs.core.hash_map,map__36168):map__36168);
var opts = map__36168__$1;
var on_cssload = cljs.core.get.call(null,map__36168__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36169_36189 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36170_36190 = null;
var count__36171_36191 = (0);
var i__36172_36192 = (0);
while(true){
if((i__36172_36192 < count__36171_36191)){
var f_36193 = cljs.core._nth.call(null,chunk__36170_36190,i__36172_36192);
figwheel.client.file_reloading.reload_css_file.call(null,f_36193);

var G__36194 = seq__36169_36189;
var G__36195 = chunk__36170_36190;
var G__36196 = count__36171_36191;
var G__36197 = (i__36172_36192 + (1));
seq__36169_36189 = G__36194;
chunk__36170_36190 = G__36195;
count__36171_36191 = G__36196;
i__36172_36192 = G__36197;
continue;
} else {
var temp__4126__auto___36198 = cljs.core.seq.call(null,seq__36169_36189);
if(temp__4126__auto___36198){
var seq__36169_36199__$1 = temp__4126__auto___36198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36169_36199__$1)){
var c__17376__auto___36200 = cljs.core.chunk_first.call(null,seq__36169_36199__$1);
var G__36201 = cljs.core.chunk_rest.call(null,seq__36169_36199__$1);
var G__36202 = c__17376__auto___36200;
var G__36203 = cljs.core.count.call(null,c__17376__auto___36200);
var G__36204 = (0);
seq__36169_36189 = G__36201;
chunk__36170_36190 = G__36202;
count__36171_36191 = G__36203;
i__36172_36192 = G__36204;
continue;
} else {
var f_36205 = cljs.core.first.call(null,seq__36169_36199__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36205);

var G__36206 = cljs.core.next.call(null,seq__36169_36199__$1);
var G__36207 = null;
var G__36208 = (0);
var G__36209 = (0);
seq__36169_36189 = G__36206;
chunk__36170_36190 = G__36207;
count__36171_36191 = G__36208;
i__36172_36192 = G__36209;
continue;
}
} else {
}
}
break;
}

var c__23737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto__,map__36168,map__36168__$1,opts,on_cssload){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto__,map__36168,map__36168__$1,opts,on_cssload){
return (function (state_36179){
var state_val_36180 = (state_36179[(1)]);
if((state_val_36180 === (2))){
var inst_36175 = (state_36179[(2)]);
var inst_36176 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_36177 = on_cssload.call(null,inst_36176);
var state_36179__$1 = (function (){var statearr_36181 = state_36179;
(statearr_36181[(7)] = inst_36175);

return statearr_36181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36179__$1,inst_36177);
} else {
if((state_val_36180 === (1))){
var inst_36173 = cljs.core.async.timeout.call(null,(100));
var state_36179__$1 = state_36179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36179__$1,(2),inst_36173);
} else {
return null;
}
}
});})(c__23737__auto__,map__36168,map__36168__$1,opts,on_cssload))
;
return ((function (switch__23722__auto__,c__23737__auto__,map__36168,map__36168__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto____0 = (function (){
var statearr_36185 = [null,null,null,null,null,null,null,null];
(statearr_36185[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto__);

(statearr_36185[(1)] = (1));

return statearr_36185;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto____1 = (function (state_36179){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_36179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e36186){if((e36186 instanceof Object)){
var ex__23726__auto__ = e36186;
var statearr_36187_36210 = state_36179;
(statearr_36187_36210[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36211 = state_36179;
state_36179 = G__36211;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto__ = function(state_36179){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto____1.call(this,state_36179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto__,map__36168,map__36168__$1,opts,on_cssload))
})();
var state__23739__auto__ = (function (){var statearr_36188 = f__23738__auto__.call(null);
(statearr_36188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto__);

return statearr_36188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto__,map__36168,map__36168__$1,opts,on_cssload))
);

return c__23737__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1427705351197