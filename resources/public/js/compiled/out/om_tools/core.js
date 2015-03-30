// Compiled by ClojureScript 0.0-3126 {}
goog.provide('om_tools.core');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('plumbing.fnk.schema');
goog.require('om.core');
/**
 * Returns an atom-like object for reading and writing Om component
 * state.
 * 
 * Note: Behavior may exactly not match atoms when deref'ing
 * immediately following a reset!/swap! because Om processes state
 * changes asynchronously in separate render phases.
 */
om_tools.core.state_proxy = (function om_tools$core$state_proxy(owner){
if(cljs.core.truth_(owner)){
var get_state = (function (){
return om.core.get_state.call(null,owner);
});
if(typeof om_tools.core.t29963 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tools.core.t29963 = (function (get_state,owner,state_proxy,meta29964){
this.get_state = get_state;
this.owner = owner;
this.state_proxy = state_proxy;
this.meta29964 = meta29964;
this.cljs$lang$protocol_mask$partition1$ = 98304;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
om_tools.core.t29963.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (get_state){
return (function (s,f){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null)));
});})(get_state))
;

om_tools.core.t29963.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (get_state){
return (function (s,f,x){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x));
});})(get_state))
;

om_tools.core.t29963.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (get_state){
return (function (s,f,x,y){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x,y));
});})(get_state))
;

om_tools.core.t29963.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (get_state){
return (function (s,f,x,y,more){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,cljs.core.apply.call(null,f,self__.get_state.call(null),x,y,more));
});})(get_state))
;

om_tools.core.t29963.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (get_state){
return (function (_,v){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,v);
});})(get_state))
;

om_tools.core.t29963.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (get_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.get_state.call(null);
});})(get_state))
;

om_tools.core.t29963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (get_state){
return (function (_29965){
var self__ = this;
var _29965__$1 = this;
return self__.meta29964;
});})(get_state))
;

om_tools.core.t29963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (get_state){
return (function (_29965,meta29964__$1){
var self__ = this;
var _29965__$1 = this;
return (new om_tools.core.t29963(self__.get_state,self__.owner,self__.state_proxy,meta29964__$1));
});})(get_state))
;

om_tools.core.t29963.cljs$lang$type = true;

om_tools.core.t29963.cljs$lang$ctorStr = "om-tools.core/t29963";

om_tools.core.t29963.cljs$lang$ctorPrWriter = ((function (get_state){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"om-tools.core/t29963");
});})(get_state))
;

om_tools.core.__GT_t29963 = ((function (get_state){
return (function om_tools$core$state_proxy_$___GT_t29963(get_state__$1,owner__$1,state_proxy__$1,meta29964){
return (new om_tools.core.t29963(get_state__$1,owner__$1,state_proxy__$1,meta29964));
});})(get_state))
;

}

return (new om_tools.core.t29963(get_state,owner,om_tools$core$state_proxy,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
/**
 * Calls om.core/set-state! when current value not= to v and returns
 * updated owner, otherwise nil.
 * Used to prevent no-op updates from entering render queue
 */
om_tools.core.set_state_QMARK__BANG_ = (function() {
var om_tools$core$set_state_QMARK__BANG_ = null;
var om_tools$core$set_state_QMARK__BANG___2 = (function (owner,v){
if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner))){
return null;
} else {
return om.core.set_state_BANG_.call(null,owner,v);
}
});
var om_tools$core$set_state_QMARK__BANG___3 = (function (owner,korks,v){
if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner,korks))){
return null;
} else {
return om.core.set_state_BANG_.call(null,owner,korks,v);
}
});
om_tools$core$set_state_QMARK__BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om_tools$core$set_state_QMARK__BANG___2.call(this,owner,korks);
case 3:
return om_tools$core$set_state_QMARK__BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$core$set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 = om_tools$core$set_state_QMARK__BANG___2;
om_tools$core$set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3 = om_tools$core$set_state_QMARK__BANG___3;
return om_tools$core$set_state_QMARK__BANG_;
})()
;

//# sourceMappingURL=core.js.map?rel=1427705346054