// Compiled by ClojureScript 0.0-3126 {}
goog.provide('outliner.core');
goog.require('cljs.core');
goog.require('outliner.components.error');
goog.require('outliner.components.index');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
React.initializeTouchEvents(true);
outliner.core.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"blog",new cljs.core.Keyword(null,"modified","modified",-2134587826),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),true,new cljs.core.Keyword(null,"name","name",1843675177),"2014",new cljs.core.Keyword(null,"text","text",-1790561697),"2014",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"December 2014",new cljs.core.Keyword(null,"text","text",-1790561697),"December",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"December 12",new cljs.core.Keyword(null,"text","text",-1790561697),"December 12",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"text","text",-1790561697),"test4",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"test5",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"test6",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"December 20",new cljs.core.Keyword(null,"text","text",-1790561697),"December 20",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"text","text",-1790561697),"test7",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"test8",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"test9",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"November 2014",new cljs.core.Keyword(null,"text","text",-1790561697),"November 2014",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"November 20",new cljs.core.Keyword(null,"text","text",-1790561697),"November 20",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"test1",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"test2",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"test3",new cljs.core.Keyword(null,"created","created",-704993748),"Thu Nov 20 2014 16:07:11 GMT+0900 (JST)"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null));

var ufv___27635 = schema.utils.use_fn_validation;
var output_schema27621_27636 = schema.core.Any;
var input_schema27622_27637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker27623_27638 = schema.core.checker.call(null,input_schema27622_27637);
var output_checker27624_27639 = schema.core.checker.call(null,output_schema27621_27636);
/**
 * Inputs: [data owner]
 */
outliner.core.main_component = ((function (ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639){
return (function outliner$core$main_component(G__27625,G__27626){
var validate__20273__auto__ = ufv___27635.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___27640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27625,G__27626], null);
var temp__4126__auto___27641 = input_checker27623_27638.call(null,args__20274__auto___27640);
if(cljs.core.truth_(temp__4126__auto___27641)){
var error__20275__auto___27642 = temp__4126__auto___27641;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"main-component","main-component",-40016256,null),cljs.core.pr_str.call(null,error__20275__auto___27642)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___27642,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___27640,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27622_27637,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var data = G__27625;
var owner = G__27626;
while(true){
if(typeof outliner.core.t27631 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.core.t27631 = (function (main_component,owner,data,G__27626,output_checker27624,validate__20273__auto__,input_schema27622,input_checker27623,G__27625,output_schema27621,ufv__,meta27632){
this.main_component = main_component;
this.owner = owner;
this.data = data;
this.G__27626 = G__27626;
this.output_checker27624 = output_checker27624;
this.validate__20273__auto__ = validate__20273__auto__;
this.input_schema27622 = input_schema27622;
this.input_checker27623 = input_checker27623;
this.G__27625 = G__27625;
this.output_schema27621 = output_schema27621;
this.ufv__ = ufv__;
this.meta27632 = meta27632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.core.t27631.prototype.om$core$IDisplayName$ = true;

outliner.core.t27631.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639){
return (function (_){
var self__ = this;
var ___$1 = this;
return "main-component";
});})(validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639))
;

outliner.core.t27631.prototype.om$core$IRender$ = true;

outliner.core.t27631.prototype.om$core$IRender$render$arity$1 = ((function (validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,(function (){var G__27634 = (((new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(self__.data) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(self__.data).fqn:null);
switch (G__27634) {
case "error":
return outliner.components.error.component;

break;
case "index":
return outliner.components.index.component;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(self__.data))].join('')));

}
})(),cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.data)))],null))));
});})(validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639))
;

outliner.core.t27631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639){
return (function (_27633){
var self__ = this;
var _27633__$1 = this;
return self__.meta27632;
});})(validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639))
;

outliner.core.t27631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639){
return (function (_27633,meta27632__$1){
var self__ = this;
var _27633__$1 = this;
return (new outliner.core.t27631(self__.main_component,self__.owner,self__.data,self__.G__27626,self__.output_checker27624,self__.validate__20273__auto__,self__.input_schema27622,self__.input_checker27623,self__.G__27625,self__.output_schema27621,self__.ufv__,meta27632__$1));
});})(validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639))
;

outliner.core.t27631.cljs$lang$type = true;

outliner.core.t27631.cljs$lang$ctorStr = "outliner.core/t27631";

outliner.core.t27631.cljs$lang$ctorPrWriter = ((function (validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.core/t27631");
});})(validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639))
;

outliner.core.__GT_t27631 = ((function (validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639){
return (function outliner$core$main_component_$___GT_t27631(main_component__$1,owner__$1,data__$1,G__27626__$1,output_checker27624__$1,validate__20273__auto____$1,input_schema27622__$1,input_checker27623__$1,G__27625__$1,output_schema27621__$1,ufv____$1,meta27632){
return (new outliner.core.t27631(main_component__$1,owner__$1,data__$1,G__27626__$1,output_checker27624__$1,validate__20273__auto____$1,input_schema27622__$1,input_checker27623__$1,G__27625__$1,output_schema27621__$1,ufv____$1,meta27632));
});})(validate__20273__auto__,ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639))
;

}

return (new outliner.core.t27631(outliner$core$main_component,owner,data,G__27626,output_checker27624_27639,validate__20273__auto__,input_schema27622_27637,input_checker27623_27638,G__27625,output_schema27621_27636,ufv___27635,null));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___27644 = output_checker27624_27639.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___27644)){
var error__20275__auto___27645 = temp__4126__auto___27644;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"main-component","main-component",-40016256,null),cljs.core.pr_str.call(null,error__20275__auto___27645)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___27645,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27621_27636,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___27635,output_schema27621_27636,input_schema27622_27637,input_checker27623_27638,output_checker27624_27639))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.core.main_component),schema.core.make_fn_schema.call(null,output_schema27621_27636,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27622_27637], null)));

outliner.core.__GT_main_component = (function() {
var outliner$core$__GT_main_component = null;
var outliner$core$__GT_main_component__1 = (function (cursor__23820__auto__){
return om.core.build.call(null,outliner.core.main_component,cursor__23820__auto__);
});
var outliner$core$__GT_main_component__2 = (function (cursor__23820__auto__,m27620){
return om.core.build.call(null,outliner.core.main_component,cursor__23820__auto__,m27620);
});
outliner$core$__GT_main_component = function(cursor__23820__auto__,m27620){
switch(arguments.length){
case 1:
return outliner$core$__GT_main_component__1.call(this,cursor__23820__auto__);
case 2:
return outliner$core$__GT_main_component__2.call(this,cursor__23820__auto__,m27620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$core$__GT_main_component.cljs$core$IFn$_invoke$arity$1 = outliner$core$__GT_main_component__1;
outliner$core$__GT_main_component.cljs$core$IFn$_invoke$arity$2 = outliner$core$__GT_main_component__2;
return outliner$core$__GT_main_component;
})()
;
om.core.root.call(null,outliner.core.main_component,outliner.core.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map?rel=1427705344436