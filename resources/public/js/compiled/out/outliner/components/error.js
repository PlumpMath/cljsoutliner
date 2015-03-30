// Compiled by ClojureScript 0.0-3126 {}
goog.provide('outliner.components.error');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');

var ufv___23888 = schema.utils.use_fn_validation;
var output_schema23876_23889 = schema.core.Any;
var input_schema23877_23890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker23878_23891 = schema.core.checker.call(null,input_schema23877_23890);
var output_checker23879_23892 = schema.core.checker.call(null,output_schema23876_23889);
/**
 * Inputs: [data owner]
 */
outliner.components.error.component = ((function (ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892){
return (function outliner$components$error$component(G__23880,G__23881){
var validate__20273__auto__ = ufv___23888.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___23893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23880,G__23881], null);
var temp__4126__auto___23894 = input_checker23878_23891.call(null,args__20274__auto___23893);
if(cljs.core.truth_(temp__4126__auto___23894)){
var error__20275__auto___23895 = temp__4126__auto___23894;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20275__auto___23895)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___23895,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___23893,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23877_23890,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var data = G__23880;
var owner = G__23881;
while(true){
if(typeof outliner.components.error.t23885 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.error.t23885 = (function (input_checker23878,owner,data,G__23881,output_checker23879,component,G__23880,input_schema23877,output_schema23876,validate__20273__auto__,ufv__,meta23886){
this.input_checker23878 = input_checker23878;
this.owner = owner;
this.data = data;
this.G__23881 = G__23881;
this.output_checker23879 = output_checker23879;
this.component = component;
this.G__23880 = G__23880;
this.input_schema23877 = input_schema23877;
this.output_schema23876 = output_schema23876;
this.validate__20273__auto__ = validate__20273__auto__;
this.ufv__ = ufv__;
this.meta23886 = meta23886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.error.t23885.prototype.om$core$IDisplayName$ = true;

outliner.components.error.t23885.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892){
return (function (_){
var self__ = this;
var ___$1 = this;
return "component";
});})(validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892))
;

outliner.components.error.t23885.prototype.om$core$IRender$ = true;

outliner.components.error.t23885.prototype.om$core$IRender$render$arity$1 = ((function (validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "yeah"},"error");
});})(validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892))
;

outliner.components.error.t23885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892){
return (function (_23887){
var self__ = this;
var _23887__$1 = this;
return self__.meta23886;
});})(validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892))
;

outliner.components.error.t23885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892){
return (function (_23887,meta23886__$1){
var self__ = this;
var _23887__$1 = this;
return (new outliner.components.error.t23885(self__.input_checker23878,self__.owner,self__.data,self__.G__23881,self__.output_checker23879,self__.component,self__.G__23880,self__.input_schema23877,self__.output_schema23876,self__.validate__20273__auto__,self__.ufv__,meta23886__$1));
});})(validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892))
;

outliner.components.error.t23885.cljs$lang$type = true;

outliner.components.error.t23885.cljs$lang$ctorStr = "outliner.components.error/t23885";

outliner.components.error.t23885.cljs$lang$ctorPrWriter = ((function (validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.error/t23885");
});})(validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892))
;

outliner.components.error.__GT_t23885 = ((function (validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892){
return (function outliner$components$error$component_$___GT_t23885(input_checker23878__$1,owner__$1,data__$1,G__23881__$1,output_checker23879__$1,component__$1,G__23880__$1,input_schema23877__$1,output_schema23876__$1,validate__20273__auto____$1,ufv____$1,meta23886){
return (new outliner.components.error.t23885(input_checker23878__$1,owner__$1,data__$1,G__23881__$1,output_checker23879__$1,component__$1,G__23880__$1,input_schema23877__$1,output_schema23876__$1,validate__20273__auto____$1,ufv____$1,meta23886));
});})(validate__20273__auto__,ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892))
;

}

return (new outliner.components.error.t23885(input_checker23878_23891,owner,data,G__23881,output_checker23879_23892,outliner$components$error$component,G__23880,input_schema23877_23890,output_schema23876_23889,validate__20273__auto__,ufv___23888,null));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___23896 = output_checker23879_23892.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___23896)){
var error__20275__auto___23897 = temp__4126__auto___23896;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20275__auto___23897)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___23897,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23876_23889,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___23888,output_schema23876_23889,input_schema23877_23890,input_checker23878_23891,output_checker23879_23892))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.error.component),schema.core.make_fn_schema.call(null,output_schema23876_23889,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23877_23890], null)));

outliner.components.error.__GT_component = (function() {
var outliner$components$error$__GT_component = null;
var outliner$components$error$__GT_component__1 = (function (cursor__23820__auto__){
return om.core.build.call(null,outliner.components.error.component,cursor__23820__auto__);
});
var outliner$components$error$__GT_component__2 = (function (cursor__23820__auto__,m23875){
return om.core.build.call(null,outliner.components.error.component,cursor__23820__auto__,m23875);
});
outliner$components$error$__GT_component = function(cursor__23820__auto__,m23875){
switch(arguments.length){
case 1:
return outliner$components$error$__GT_component__1.call(this,cursor__23820__auto__);
case 2:
return outliner$components$error$__GT_component__2.call(this,cursor__23820__auto__,m23875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$error$__GT_component.cljs$core$IFn$_invoke$arity$1 = outliner$components$error$__GT_component__1;
outliner$components$error$__GT_component.cljs$core$IFn$_invoke$arity$2 = outliner$components$error$__GT_component__2;
return outliner$components$error$__GT_component;
})()
;

//# sourceMappingURL=error.js.map?rel=1427705342417