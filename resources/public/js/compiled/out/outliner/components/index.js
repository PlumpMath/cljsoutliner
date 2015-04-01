// Compiled by ClojureScript 0.0-3126 {}
goog.provide('outliner.components.index');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('goog.events');
goog.require('daviferreira.MediumEditor');
goog.require('om.core');
goog.require('goog.date.DateTime');
outliner.components.index.root_node = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(0)], null);
outliner.components.index.gen_empty_text_node = (function outliner$components$index$gen_empty_text_node(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"closed","closed",-919675359),false,new cljs.core.Keyword(null,"text","text",-1790561697)," ",new cljs.core.Keyword(null,"created","created",-704993748),(new goog.date.DateTime())], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null);
});
outliner.components.index.listen = (function outliner$components$index$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){

return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
outliner.components.index.get_indexless = (function outliner$components$index$get_indexless(current_path){
return cljs.core.subvec.call(null,current_path,(0),(cljs.core.count.call(null,current_path) - (1)));
});
outliner.components.index.get_parent = (function outliner$components$index$get_parent(current_path){
return cljs.core.subvec.call(null,current_path,(0),(cljs.core.count.call(null,current_path) - (2)));
});
outliner.components.index.remove_node_from_parent = (function outliner$components$index$remove_node_from_parent(parent_children,current_child_idx){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,parent_children,(0),current_child_idx),cljs.core.subvec.call(null,parent_children,(current_child_idx + (1)))));
});
outliner.components.index.add_node_to_parent = (function outliner$components$index$add_node_to_parent(parent_children,current_child_idx){
if(cljs.core.empty_QMARK_.call(null,parent_children)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [outliner.components.index.gen_empty_text_node.call(null)], null);
} else {
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,parent_children,(0),(current_child_idx + (1))),outliner.components.index.gen_empty_text_node.call(null)),cljs.core.subvec.call(null,parent_children,(current_child_idx + (1))));
}
});
outliner.components.index.normal_keymap = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),new cljs.core.Keyword(null,"shift","shift",997140064)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),new cljs.core.Keyword(null,"shift","shift",997140064)], null)],[new cljs.core.Keyword(null,"add-new-sibbling","add-new-sibbling",81995544),new cljs.core.Keyword(null,"node-down","node-down",-217393565),new cljs.core.Keyword(null,"right-shift-node","right-shift-node",-1851094135),new cljs.core.Keyword(null,"cursor-up","cursor-up",-1902830020),new cljs.core.Keyword(null,"cursor-down","cursor-down",-261386401),new cljs.core.Keyword(null,"add-new-child","add-new-child",-2145986926),new cljs.core.Keyword(null,"node-up","node-up",-1444087570),new cljs.core.Keyword(null,"cursor-left","cursor-left",-1993752625),new cljs.core.Keyword(null,"toggle-closed","toggle-closed",-1634014707),new cljs.core.Keyword(null,"toggle-edit","toggle-edit",750646855),new cljs.core.Keyword(null,"right-shift-node","right-shift-node",-1851094135),new cljs.core.Keyword(null,"cursor-right","cursor-right",-25128121),new cljs.core.Keyword(null,"destroy-node","destroy-node",-1501394977),new cljs.core.Keyword(null,"left-shift-node","left-shift-node",-2097301469),new cljs.core.Keyword(null,"left-shift-node","left-shift-node",-2097301469)]);
outliner.components.index.edit_keymap = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(27)], null),new cljs.core.Keyword(null,"toggle-edit","toggle-edit",750646855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38)], null),new cljs.core.Keyword(null,"cursor-left","cursor-left",-1993752625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40)], null),new cljs.core.Keyword(null,"cursor-right","cursor-right",-25128121),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),new cljs.core.Keyword(null,"add-new-sibbling","add-new-sibbling",81995544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),new cljs.core.Keyword(null,"shift","shift",997140064)], null),new cljs.core.Keyword(null,"add-new-sibbling","add-new-sibbling",81995544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.Keyword(null,"add-new-child","add-new-child",-2145986926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.Keyword(null,"destroy-node","destroy-node",-1501394977)], true, false);
outliner.components.index.prev_depth_path = (function outliner$components$index$prev_depth_path(parent_path,body){
var p = parent_path;
while(true){
var current = cljs.core.get_in.call(null,body,p);
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_((function (){var or__16591__auto__ = cljs.core.empty_QMARK_.call(null,children);
if(or__16591__auto__){
return or__16591__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current);
}
})())){
return p;
} else {
var G__100594 = cljs.core.conj.call(null,p,new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.count.call(null,children) - (1)));
p = G__100594;
continue;
}
break;
}
});
outliner.components.index.gen_left_path = (function outliner$components$index$gen_left_path(current_child_idx,parent_path,up_path,data){
if((current_child_idx === (0))){
return parent_path;
} else {
return outliner.components.index.prev_depth_path.call(null,up_path,cljs.core.deref.call(null,data));

}
});
outliner.components.index.next_depth_path = (function outliner$components$index$next_depth_path(parent_path,body){
var p = parent_path;
while(true){
var current_p_idx = cljs.core.last.call(null,p);
var maybe_new_p = cljs.core.conj.call(null,outliner.components.index.get_indexless.call(null,p),(current_p_idx + (1)));
var maybe_new_node = cljs.core.get_in.call(null,body,maybe_new_p,false);
if(cljs.core._EQ_.call(null,outliner.components.index.root_node,p)){
return false;
} else {
if(cljs.core.truth_(maybe_new_node)){
return maybe_new_p;
} else {
var G__100595 = outliner.components.index.get_parent.call(null,p);
p = G__100595;
continue;

}
}
break;
}
});
outliner.components.index.init_editor = (function outliner$components$index$init_editor(dom_node){
return (new MediumEditor(dom_node,{"buttons": ["bold","italic","underline","anchor"], "disablePlaceholders": true, "disableReturn": true}));
});
outliner.components.index.gen_right_path = (function outliner$components$index$gen_right_path(current_path,current,current_child_idx,parent_path,parent_children,down_path,data){
if((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(current)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current)))){
return cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"children","children",-940561982),(0));
} else {
if(cljs.core.truth_((function (){var and__16579__auto__ = parent_children;
if(cljs.core.truth_(and__16579__auto__)){
return (current_child_idx < (cljs.core.count.call(null,parent_children) - (1)));
} else {
return and__16579__auto__;
}
})())){
return down_path;
} else {
var or__16591__auto__ = outliner.components.index.next_depth_path.call(null,parent_path,cljs.core.deref.call(null,data));
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return current_path;
}

}
}
});

var ufv___100609 = schema.utils.use_fn_validation;
var output_schema100597_100610 = schema.core.Any;
var input_schema100598_100611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"head","head",869147608,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker100599_100612 = schema.core.checker.call(null,input_schema100598_100611);
var output_checker100600_100613 = schema.core.checker.call(null,output_schema100597_100610);
/**
 * Inputs: [head owner]
 */
outliner.components.index.outline_head = ((function (ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613){
return (function outliner$components$index$outline_head(G__100601,G__100602){
var validate__20245__auto__ = ufv___100609.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___100614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__100601,G__100602], null);
var temp__4126__auto___100615 = input_checker100599_100612.call(null,args__20246__auto___100614);
if(cljs.core.truth_(temp__4126__auto___100615)){
var error__20247__auto___100616 = temp__4126__auto___100615;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20247__auto___100616)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___100616,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___100614,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema100598_100611,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var head = G__100601;
var owner = G__100602;
while(true){
if(typeof outliner.components.index.t100606 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t100606 = (function (G__100601,owner,output_checker100600,input_checker100599,input_schema100598,outline_head,G__100602,validate__20245__auto__,head,output_schema100597,ufv__,meta100607){
this.G__100601 = G__100601;
this.owner = owner;
this.output_checker100600 = output_checker100600;
this.input_checker100599 = input_checker100599;
this.input_schema100598 = input_schema100598;
this.outline_head = outline_head;
this.G__100602 = G__100602;
this.validate__20245__auto__ = validate__20245__auto__;
this.head = head;
this.output_schema100597 = output_schema100597;
this.ufv__ = ufv__;
this.meta100607 = meta100607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t100606.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t100606.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-head";
});})(validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613))
;

outliner.components.index.t100606.prototype.om$core$IRender$ = true;

outliner.components.index.t100606.prototype.om$core$IRender$render$arity$1 = ((function (validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.h1,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.head)],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h2,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(self__.head)],null))))],null)));
});})(validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613))
;

outliner.components.index.t100606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613){
return (function (_100608){
var self__ = this;
var _100608__$1 = this;
return self__.meta100607;
});})(validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613))
;

outliner.components.index.t100606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613){
return (function (_100608,meta100607__$1){
var self__ = this;
var _100608__$1 = this;
return (new outliner.components.index.t100606(self__.G__100601,self__.owner,self__.output_checker100600,self__.input_checker100599,self__.input_schema100598,self__.outline_head,self__.G__100602,self__.validate__20245__auto__,self__.head,self__.output_schema100597,self__.ufv__,meta100607__$1));
});})(validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613))
;

outliner.components.index.t100606.cljs$lang$type = true;

outliner.components.index.t100606.cljs$lang$ctorStr = "outliner.components.index/t100606";

outliner.components.index.t100606.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t100606");
});})(validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613))
;

outliner.components.index.__GT_t100606 = ((function (validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613){
return (function outliner$components$index$outline_head_$___GT_t100606(G__100601__$1,owner__$1,output_checker100600__$1,input_checker100599__$1,input_schema100598__$1,outline_head__$1,G__100602__$1,validate__20245__auto____$1,head__$1,output_schema100597__$1,ufv____$1,meta100607){
return (new outliner.components.index.t100606(G__100601__$1,owner__$1,output_checker100600__$1,input_checker100599__$1,input_schema100598__$1,outline_head__$1,G__100602__$1,validate__20245__auto____$1,head__$1,output_schema100597__$1,ufv____$1,meta100607));
});})(validate__20245__auto__,ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613))
;

}

return (new outliner.components.index.t100606(G__100601,owner,output_checker100600_100613,input_checker100599_100612,input_schema100598_100611,outliner$components$index$outline_head,G__100602,validate__20245__auto__,head,output_schema100597_100610,ufv___100609,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___100617 = output_checker100600_100613.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___100617)){
var error__20247__auto___100618 = temp__4126__auto___100617;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20247__auto___100618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___100618,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema100597_100610,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___100609,output_schema100597_100610,input_schema100598_100611,input_checker100599_100612,output_checker100600_100613))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_head),schema.core.make_fn_schema.call(null,output_schema100597_100610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema100598_100611], null)));

outliner.components.index.__GT_outline_head = (function() {
var outliner$components$index$__GT_outline_head = null;
var outliner$components$index$__GT_outline_head__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22978__auto__);
});
var outliner$components$index$__GT_outline_head__2 = (function (cursor__22978__auto__,m100596){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22978__auto__,m100596);
});
outliner$components$index$__GT_outline_head = function(cursor__22978__auto__,m100596){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_head__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_outline_head__2.call(this,cursor__22978__auto__,m100596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_head__1;
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_head__2;
return outliner$components$index$__GT_outline_head;
})()
;

var ufv___100638 = schema.utils.use_fn_validation;
var output_schema100620_100639 = schema.core.Any;
var input_schema100621_100640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"node","node",-2073234571,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker100622_100641 = schema.core.checker.call(null,input_schema100621_100640);
var output_checker100623_100642 = schema.core.checker.call(null,output_schema100620_100639);
/**
 * Inputs: [node owner]
 */
outliner.components.index.outline_body = ((function (ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function outliner$components$index$outline_body(G__100624,G__100625){
var validate__20245__auto__ = ufv___100638.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___100643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__100624,G__100625], null);
var temp__4126__auto___100644 = input_checker100622_100641.call(null,args__20246__auto___100643);
if(cljs.core.truth_(temp__4126__auto___100644)){
var error__20247__auto___100645 = temp__4126__auto___100644;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20247__auto___100645)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___100645,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___100643,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema100621_100640,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var node = G__100624;
var owner = G__100625;
while(true){
if(typeof outliner.components.index.t100632 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t100632 = (function (owner,output_checker100623,input_schema100621,G__100624,G__100625,node,validate__20245__auto__,outline_body,ufv__,output_schema100620,input_checker100622,meta100633){
this.owner = owner;
this.output_checker100623 = output_checker100623;
this.input_schema100621 = input_schema100621;
this.G__100624 = G__100624;
this.G__100625 = G__100625;
this.node = node;
this.validate__20245__auto__ = validate__20245__auto__;
this.outline_body = outline_body;
this.ufv__ = ufv__;
this.output_schema100620 = output_schema100620;
this.input_checker100622 = input_checker100622;
this.meta100633 = meta100633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t100632.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t100632.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-body";
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

outliner.components.index.t100632.prototype.om$core$IWillUnmount$ = true;

outliner.components.index.t100632.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (_){
var self__ = this;
var ___$1 = this;
var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
if(cljs.core.truth_(temp__4126__auto__)){
var editor = temp__4126__auto__;
return editor.destroy();
} else {
return null;
}
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

outliner.components.index.t100632.prototype.om$core$IDidUpdate$ = true;

outliner.components.index.t100632.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__100635 = om.core.get_state.call(null,self__.owner);
var map__100635__$1 = ((cljs.core.seq_QMARK_.call(null,map__100635))?cljs.core.apply.call(null,cljs.core.hash_map,map__100635):map__100635);
var editor_ref = cljs.core.get.call(null,map__100635__$1,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
var selected = cljs.core.get.call(null,map__100635__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__100635__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var mode = cljs.core.get.call(null,map__100635__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var current_node = om.core.path.call(null,self__.node);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),mode)) && (cljs.core._EQ_.call(null,current_node,cljs.core.concat.call(null,base_path,selected))) && ((om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)) == null))){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),outliner.components.index.init_editor.call(null,om.core.get_node.call(null,self__.owner,"txt")));

return om.core.get_node.call(null,self__.owner,"txt").focus();
} else {
if(cljs.core.truth_((function (){var and__16579__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
if(cljs.core.truth_(and__16579__auto__)){
return (cljs.core.not_EQ_.call(null,current_node,cljs.core.concat.call(null,base_path,selected))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),mode));
} else {
return and__16579__auto__;
}
})())){
return om.core.transact_BANG_.call(null,self__.node,((function (map__100635,map__100635__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (d){
var new_txt = (om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).serialize()["element-0"]["value"]);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).destroy();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),null);

return cljs.core.assoc_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_txt);
});})(map__100635,map__100635__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
);
} else {
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);

}
}
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

outliner.components.index.t100632.prototype.om$core$IDidMount$ = true;

outliner.components.index.t100632.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616),true);
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

outliner.components.index.t100632.prototype.om$core$IRenderState$ = true;

outliner.components.index.t100632.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (_,p__100636){
var self__ = this;
var map__100637 = p__100636;
var map__100637__$1 = ((cljs.core.seq_QMARK_.call(null,map__100637))?cljs.core.apply.call(null,cljs.core.hash_map,map__100637):map__100637);
var state = map__100637__$1;
var mode = cljs.core.get.call(null,map__100637__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var click_chan = cljs.core.get.call(null,map__100637__$1,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512));
var selected = cljs.core.get.call(null,map__100637__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__100637__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,om.core.path.call(null,self__.node),cljs.core.concat.call(null,base_path,selected)))?"selected":""))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node)))?React.DOM.p({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__100637,map__100637__$1,state,mode,click_chan,selected,base_path,validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (e){
e.stopPropagation();

e.preventDefault();

return cljs.core.async.put_BANG_.call(null,click_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-path","new-path",1732999939),om.core.path.call(null,self__.node)], null));
});})(___$1,map__100637,map__100637__$1,state,mode,click_chan,selected,base_path,validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
), "dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node))}, "ref": "txt", "className": om_tools.dom.format_opts.call(null,[cljs.core.str("txt "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))?"closed":"open"))].join(''))},null):null),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))))?om_tools.dom.element.call(null,React.DOM.ol,om.core.build_all.call(null,self__.outline_body,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"mode","mode",654403691),mode], null)], null)),cljs.core.PersistentVector.EMPTY):null)],null))));
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

outliner.components.index.t100632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (_100634){
var self__ = this;
var _100634__$1 = this;
return self__.meta100633;
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

outliner.components.index.t100632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (_100634,meta100633__$1){
var self__ = this;
var _100634__$1 = this;
return (new outliner.components.index.t100632(self__.owner,self__.output_checker100623,self__.input_schema100621,self__.G__100624,self__.G__100625,self__.node,self__.validate__20245__auto__,self__.outline_body,self__.ufv__,self__.output_schema100620,self__.input_checker100622,meta100633__$1));
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

outliner.components.index.t100632.cljs$lang$type = true;

outliner.components.index.t100632.cljs$lang$ctorStr = "outliner.components.index/t100632";

outliner.components.index.t100632.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t100632");
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

outliner.components.index.__GT_t100632 = ((function (validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642){
return (function outliner$components$index$outline_body_$___GT_t100632(owner__$1,output_checker100623__$1,input_schema100621__$1,G__100624__$1,G__100625__$1,node__$1,validate__20245__auto____$1,outline_body__$1,ufv____$1,output_schema100620__$1,input_checker100622__$1,meta100633){
return (new outliner.components.index.t100632(owner__$1,output_checker100623__$1,input_schema100621__$1,G__100624__$1,G__100625__$1,node__$1,validate__20245__auto____$1,outline_body__$1,ufv____$1,output_schema100620__$1,input_checker100622__$1,meta100633));
});})(validate__20245__auto__,ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

}

return (new outliner.components.index.t100632(owner,output_checker100623_100642,input_schema100621_100640,G__100624,G__100625,node,validate__20245__auto__,outliner$components$index$outline_body,ufv___100638,output_schema100620_100639,input_checker100622_100641,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___100646 = output_checker100623_100642.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___100646)){
var error__20247__auto___100647 = temp__4126__auto___100646;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20247__auto___100647)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___100647,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema100620_100639,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___100638,output_schema100620_100639,input_schema100621_100640,input_checker100622_100641,output_checker100623_100642))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_body),schema.core.make_fn_schema.call(null,output_schema100620_100639,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema100621_100640], null)));

outliner.components.index.__GT_outline_body = (function() {
var outliner$components$index$__GT_outline_body = null;
var outliner$components$index$__GT_outline_body__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22978__auto__);
});
var outliner$components$index$__GT_outline_body__2 = (function (cursor__22978__auto__,m100619){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22978__auto__,m100619);
});
outliner$components$index$__GT_outline_body = function(cursor__22978__auto__,m100619){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_body__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_outline_body__2.call(this,cursor__22978__auto__,m100619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_body__1;
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_body__2;
return outliner$components$index$__GT_outline_body;
})()
;

var ufv___101529 = schema.utils.use_fn_validation;
var output_schema100651_101530 = schema.core.Any;
var input_schema100652_101531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker100653_101532 = schema.core.checker.call(null,input_schema100652_101531);
var output_checker100654_101533 = schema.core.checker.call(null,output_schema100651_101530);
/**
 * Inputs: [data owner]
 */
outliner.components.index.component = ((function (ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function outliner$components$index$component(G__100655,G__100656){
var validate__20245__auto__ = ufv___101529.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___101534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__100655,G__100656], null);
var temp__4126__auto___101535 = input_checker100653_101532.call(null,args__20246__auto___101534);
if(cljs.core.truth_(temp__4126__auto___101535)){
var error__20247__auto___101536 = temp__4126__auto___101535;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20247__auto___101536)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___101536,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___101534,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema100652_101531,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var data = G__100655;
var owner = G__100656;
while(true){
if(typeof outliner.components.index.t101093 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t101093 = (function (output_checker100654,G__100656,owner,output_schema100651,data,input_schema100652,component,input_checker100653,G__100655,validate__20245__auto__,ufv__,meta101094){
this.output_checker100654 = output_checker100654;
this.G__100656 = G__100656;
this.owner = owner;
this.output_schema100651 = output_schema100651;
this.data = data;
this.input_schema100652 = input_schema100652;
this.component = component;
this.input_checker100653 = input_checker100653;
this.G__100655 = G__100655;
this.validate__20245__auto__ = validate__20245__auto__;
this.ufv__ = ufv__;
this.meta101094 = meta101094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t101093.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t101093.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (_){
var self__ = this;
var ___$1 = this;
return "component";
});})(validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;

outliner.components.index.t101093.prototype.om$core$IRenderState$ = true;

outliner.components.index.t101093.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "yeah"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h2,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,outliner.components.index.outline_head,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,React.DOM.ol,{"className": "root"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,outliner.components.index.outline_body,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))],null))))],null))));
});})(validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;

outliner.components.index.t101093.prototype.om$core$IInitState$ = true;

outliner.components.index.t101093.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (_){
var self__ = this;
var ___$1 = this;
var key_down_chan = outliner.components.index.listen.call(null,window,"keydown");
var click_chan = cljs.core.async.chan.call(null);
var base_path = om.core.path.call(null,self__.data);
var c__22895__auto___101537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (){
var f__22896__auto__ = (function (){var switch__22874__auto__ = ((function (c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (state_101349){
var state_val_101350 = (state_101349[(1)]);
if((state_val_101350 === (65))){
var inst_101234 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101351_101538 = state_101349__$1;
(statearr_101351_101538[(2)] = inst_101234);

(statearr_101351_101538[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (70))){
var inst_101146 = (state_101349[(7)]);
var state_101349__$1 = state_101349;
var statearr_101352_101539 = state_101349__$1;
(statearr_101352_101539[(2)] = inst_101146);

(statearr_101352_101539[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (62))){
var inst_101193 = (state_101349[(8)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101193)){
var statearr_101353_101540 = state_101349__$1;
(statearr_101353_101540[(1)] = (63));

} else {
var statearr_101354_101541 = state_101349__$1;
(statearr_101354_101541[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (74))){
var inst_101158 = (state_101349[(9)]);
var inst_101106 = (state_101349[(10)]);
var inst_101164 = (state_101349[(11)]);
var inst_101107 = (state_101349[(12)]);
var inst_101185 = (state_101349[(13)]);
var inst_101144 = (state_101349[(14)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101113 = (state_101349[(17)]);
var inst_101112 = (state_101349[(18)]);
var inst_101147 = (state_101349[(19)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101108 = (state_101349[(21)]);
var inst_101118 = (state_101349[(22)]);
var inst_101193 = (state_101349[(8)]);
var inst_101252 = (function (){var G__101097 = key_down_chan;
var up_path = inst_101185;
var current_child_idx = inst_101147;
var is_root = inst_101148;
var ret101100 = inst_101106;
var parent_children = inst_101169;
var parent = inst_101164;
var G__101098 = click_chan;
var vec__101111 = inst_101106;
var down_path = inst_101193;
var command = inst_101144;
var vec__101101 = inst_101106;
var ch101099 = inst_101108;
var e = inst_101112;
var parent_path = inst_101158;
var current_path = inst_101146;
var val__22904__auto__ = inst_101107;
var c = inst_101113;
var current = inst_101150;
var keyevent__GT_command = inst_101118;
return ((function (G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (d){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current))){
return cljs.core.update_in.call(null,d,current_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359));
} else {
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"closed","closed",-919675359)),true);
}
});
;})(G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var inst_101253 = om.core.transact_BANG_.call(null,self__.data,inst_101252);
var state_101349__$1 = state_101349;
var statearr_101355_101542 = state_101349__$1;
(statearr_101355_101542[(2)] = inst_101253);

(statearr_101355_101542[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (7))){
var inst_101344 = (state_101349[(2)]);
var state_101349__$1 = (function (){var statearr_101356 = state_101349;
(statearr_101356[(23)] = inst_101344);

return statearr_101356;
})();
var statearr_101357_101543 = state_101349__$1;
(statearr_101357_101543[(2)] = null);

(statearr_101357_101543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (59))){
var inst_101158 = (state_101349[(9)]);
var inst_101106 = (state_101349[(10)]);
var inst_101164 = (state_101349[(11)]);
var inst_101107 = (state_101349[(12)]);
var inst_101185 = (state_101349[(13)]);
var inst_101144 = (state_101349[(14)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101113 = (state_101349[(17)]);
var inst_101112 = (state_101349[(18)]);
var inst_101147 = (state_101349[(19)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101108 = (state_101349[(21)]);
var inst_101118 = (state_101349[(22)]);
var inst_101193 = (state_101349[(8)]);
var inst_101217 = cljs.core.deref.call(null,self__.data);
var inst_101218 = cljs.core.get_in.call(null,inst_101217,inst_101185);
var inst_101219 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101185);
var inst_101220 = (function (){var G__101097 = key_down_chan;
var up_path = inst_101185;
var current_child_idx = inst_101147;
var is_root = inst_101148;
var ret101100 = inst_101106;
var parent_children = inst_101169;
var parent = inst_101164;
var G__101098 = click_chan;
var vec__101111 = inst_101106;
var down_path = inst_101193;
var command = inst_101144;
var vec__101101 = inst_101106;
var swap_node = inst_101218;
var ch101099 = inst_101108;
var e = inst_101112;
var parent_path = inst_101158;
var current_path = inst_101146;
var val__22904__auto__ = inst_101107;
var c = inst_101113;
var current = inst_101150;
var keyevent__GT_command = inst_101118;
return ((function (G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,swap_node,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101217,inst_101218,inst_101219,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),up_path,current);
});
;})(G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,swap_node,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101217,inst_101218,inst_101219,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var inst_101221 = om.core.transact_BANG_.call(null,self__.data,inst_101220);
var state_101349__$1 = (function (){var statearr_101358 = state_101349;
(statearr_101358[(24)] = inst_101219);

return statearr_101358;
})();
var statearr_101359_101544 = state_101349__$1;
(statearr_101359_101544[(2)] = inst_101221);

(statearr_101359_101544[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (86))){
var state_101349__$1 = state_101349;
var statearr_101360_101545 = state_101349__$1;
(statearr_101360_101545[(2)] = null);

(statearr_101360_101545[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (20))){
var state_101349__$1 = state_101349;
var statearr_101361_101546 = state_101349__$1;
(statearr_101361_101546[(2)] = new cljs.core.Keyword(null,"meta","meta",1499536964));

(statearr_101361_101546[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (72))){
var inst_101158 = (state_101349[(9)]);
var inst_101106 = (state_101349[(10)]);
var inst_101164 = (state_101349[(11)]);
var inst_101107 = (state_101349[(12)]);
var inst_101185 = (state_101349[(13)]);
var inst_101144 = (state_101349[(14)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101113 = (state_101349[(17)]);
var inst_101112 = (state_101349[(18)]);
var inst_101147 = (state_101349[(19)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101108 = (state_101349[(21)]);
var inst_101118 = (state_101349[(22)]);
var inst_101193 = (state_101349[(8)]);
var inst_101242 = (state_101349[(2)]);
var inst_101243 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101242);
var inst_101244 = (function (){var G__101097 = key_down_chan;
var up_path = inst_101185;
var current_child_idx = inst_101147;
var is_root = inst_101148;
var ret101100 = inst_101106;
var parent_children = inst_101169;
var parent = inst_101164;
var G__101098 = click_chan;
var vec__101111 = inst_101106;
var down_path = inst_101193;
var command = inst_101144;
var vec__101101 = inst_101106;
var ch101099 = inst_101108;
var e = inst_101112;
var parent_path = inst_101158;
var current_path = inst_101146;
var val__22904__auto__ = inst_101107;
var c = inst_101113;
var current = inst_101150;
var keyevent__GT_command = inst_101118;
return ((function (G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101242,inst_101243,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101242,inst_101243,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var inst_101245 = om.core.transact_BANG_.call(null,self__.data,inst_101244);
var state_101349__$1 = (function (){var statearr_101362 = state_101349;
(statearr_101362[(25)] = inst_101243);

return statearr_101362;
})();
var statearr_101363_101547 = state_101349__$1;
(statearr_101363_101547[(2)] = inst_101245);

(statearr_101363_101547[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (58))){
var inst_101185 = (state_101349[(13)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101185)){
var statearr_101364_101548 = state_101349__$1;
(statearr_101364_101548[(1)] = (59));

} else {
var statearr_101365_101549 = state_101349__$1;
(statearr_101365_101549[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (60))){
var state_101349__$1 = state_101349;
var statearr_101366_101550 = state_101349__$1;
(statearr_101366_101550[(2)] = null);

(statearr_101366_101550[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (27))){
var inst_101158 = (state_101349[(9)]);
var state_101349__$1 = state_101349;
var statearr_101367_101551 = state_101349__$1;
(statearr_101367_101551[(2)] = inst_101158);

(statearr_101367_101551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (1))){
var state_101349__$1 = state_101349;
var statearr_101368_101552 = state_101349__$1;
(statearr_101368_101552[(2)] = null);

(statearr_101368_101552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (69))){
var inst_101248 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101369_101553 = state_101349__$1;
(statearr_101369_101553[(2)] = inst_101248);

(statearr_101369_101553[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (101))){
var state_101349__$1 = state_101349;
var statearr_101370_101554 = state_101349__$1;
(statearr_101370_101554[(2)] = null);

(statearr_101370_101554[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (24))){
var inst_101151 = (state_101349[(26)]);
var state_101349__$1 = state_101349;
var statearr_101371_101555 = state_101349__$1;
(statearr_101371_101555[(2)] = inst_101151);

(statearr_101371_101555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (102))){
var inst_101319 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101372_101556 = state_101349__$1;
(statearr_101372_101556[(2)] = inst_101319);

(statearr_101372_101556[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (55))){
var inst_101158 = (state_101349[(9)]);
var inst_101185 = (state_101349[(13)]);
var inst_101147 = (state_101349[(19)]);
var inst_101208 = outliner.components.index.gen_left_path.call(null,inst_101147,inst_101158,inst_101185,self__.data);
var state_101349__$1 = state_101349;
var statearr_101373_101557 = state_101349__$1;
(statearr_101373_101557[(2)] = inst_101208);

(statearr_101373_101557[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (85))){
var inst_101158 = (state_101349[(9)]);
var inst_101106 = (state_101349[(10)]);
var inst_101164 = (state_101349[(11)]);
var inst_101107 = (state_101349[(12)]);
var inst_101185 = (state_101349[(13)]);
var inst_101144 = (state_101349[(14)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101113 = (state_101349[(17)]);
var inst_101112 = (state_101349[(18)]);
var inst_101147 = (state_101349[(19)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101108 = (state_101349[(21)]);
var inst_101118 = (state_101349[(22)]);
var inst_101193 = (state_101349[(8)]);
var inst_101272 = (function (){var G__101097 = key_down_chan;
var up_path = inst_101185;
var current_child_idx = inst_101147;
var is_root = inst_101148;
var ret101100 = inst_101106;
var parent_children = inst_101169;
var parent = inst_101164;
var G__101098 = click_chan;
var vec__101111 = inst_101106;
var down_path = inst_101193;
var command = inst_101144;
var vec__101101 = inst_101106;
var ch101099 = inst_101108;
var e = inst_101112;
var parent_path = inst_101158;
var current_path = inst_101146;
var val__22904__auto__ = inst_101107;
var c = inst_101113;
var current = inst_101150;
var keyevent__GT_command = inst_101118;
return ((function (G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = outliner.components.index.get_indexless.call(null,parent_path);
var destination_index = (cljs.core.last.call(null,parent_path) + (1));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,destination_children,(0),destination_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current], null),cljs.core.subvec.call(null,destination_children,destination_index)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,destination_index));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,destination_path,new_destination_children),cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var inst_101273 = om.core.transact_BANG_.call(null,self__.data,inst_101272);
var state_101349__$1 = state_101349;
var statearr_101374_101558 = state_101349__$1;
(statearr_101374_101558[(2)] = inst_101273);

(statearr_101374_101558[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (39))){
var state_101349__$1 = state_101349;
var statearr_101375_101559 = state_101349__$1;
(statearr_101375_101559[(2)] = null);

(statearr_101375_101559[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (88))){
var inst_101148 = (state_101349[(20)]);
var inst_101278 = cljs.core.not.call(null,inst_101148);
var state_101349__$1 = state_101349;
if(inst_101278){
var statearr_101376_101560 = state_101349__$1;
(statearr_101376_101560[(1)] = (89));

} else {
var statearr_101377_101561 = state_101349__$1;
(statearr_101377_101561[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (46))){
var inst_101185 = (state_101349[(13)]);
var inst_101195 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101185);
var state_101349__$1 = state_101349;
var statearr_101378_101562 = state_101349__$1;
(statearr_101378_101562[(2)] = inst_101195);

(statearr_101378_101562[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (4))){
var inst_101106 = (state_101349[(10)]);
var inst_101108 = (state_101349[(21)]);
var inst_101106__$1 = (state_101349[(2)]);
var inst_101107 = cljs.core.nth.call(null,inst_101106__$1,(0),null);
var inst_101108__$1 = cljs.core.nth.call(null,inst_101106__$1,(1),null);
var inst_101109 = cljs.core._EQ_.call(null,inst_101108__$1,key_down_chan);
var state_101349__$1 = (function (){var statearr_101379 = state_101349;
(statearr_101379[(10)] = inst_101106__$1);

(statearr_101379[(12)] = inst_101107);

(statearr_101379[(21)] = inst_101108__$1);

return statearr_101379;
})();
if(inst_101109){
var statearr_101380_101563 = state_101349__$1;
(statearr_101380_101563[(1)] = (5));

} else {
var statearr_101381_101564 = state_101349__$1;
(statearr_101381_101564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (77))){
var inst_101185 = (state_101349[(13)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101185)){
var statearr_101382_101565 = state_101349__$1;
(statearr_101382_101565[(1)] = (78));

} else {
var statearr_101383_101566 = state_101349__$1;
(statearr_101383_101566[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (106))){
var inst_101342 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101384_101567 = state_101349__$1;
(statearr_101384_101567[(2)] = inst_101342);

(statearr_101384_101567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (95))){
var inst_101148 = (state_101349[(20)]);
var inst_101292 = cljs.core.not.call(null,inst_101148);
var state_101349__$1 = state_101349;
if(inst_101292){
var statearr_101385_101568 = state_101349__$1;
(statearr_101385_101568[(1)] = (96));

} else {
var statearr_101386_101569 = state_101349__$1;
(statearr_101386_101569[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (54))){
var inst_101146 = (state_101349[(7)]);
var state_101349__$1 = state_101349;
var statearr_101387_101570 = state_101349__$1;
(statearr_101387_101570[(2)] = inst_101146);

(statearr_101387_101570[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (92))){
var inst_101283 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var state_101349__$1 = state_101349;
var statearr_101388_101571 = state_101349__$1;
(statearr_101388_101571[(2)] = inst_101283);

(statearr_101388_101571[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (104))){
var inst_101106 = (state_101349[(10)]);
var inst_101329 = cljs.core.nth.call(null,inst_101106,(0),null);
var inst_101330 = cljs.core.nth.call(null,inst_101106,(1),null);
var inst_101331 = new cljs.core.Keyword(null,"new-path","new-path",1732999939).cljs$core$IFn$_invoke$arity$1(inst_101329);
var inst_101332 = cljs.core.count.call(null,base_path);
var inst_101333 = cljs.core.subvec.call(null,inst_101331,inst_101332);
var inst_101334 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101333);
var state_101349__$1 = (function (){var statearr_101389 = state_101349;
(statearr_101389[(27)] = inst_101330);

return statearr_101389;
})();
var statearr_101390_101572 = state_101349__$1;
(statearr_101390_101572[(2)] = inst_101334);

(statearr_101390_101572[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (15))){
var inst_101126 = (state_101349[(28)]);
var state_101349__$1 = state_101349;
var statearr_101391_101573 = state_101349__$1;
(statearr_101391_101573[(2)] = inst_101126);

(statearr_101391_101573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (48))){
var inst_101198 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101392_101574 = state_101349__$1;
(statearr_101392_101574[(2)] = inst_101198);

(statearr_101392_101574[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (50))){
var inst_101193 = (state_101349[(8)]);
var inst_101201 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101193);
var state_101349__$1 = state_101349;
var statearr_101393_101575 = state_101349__$1;
(statearr_101393_101575[(2)] = inst_101201);

(statearr_101393_101575[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (75))){
var state_101349__$1 = state_101349;
var statearr_101394_101576 = state_101349__$1;
(statearr_101394_101576[(2)] = null);

(statearr_101394_101576[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (99))){
var inst_101148 = (state_101349[(20)]);
var inst_101305 = cljs.core.not.call(null,inst_101148);
var state_101349__$1 = state_101349;
if(inst_101305){
var statearr_101395_101577 = state_101349__$1;
(statearr_101395_101577[(1)] = (100));

} else {
var statearr_101396_101578 = state_101349__$1;
(statearr_101396_101578[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (21))){
var inst_101136 = (state_101349[(29)]);
var state_101349__$1 = state_101349;
var statearr_101397_101579 = state_101349__$1;
(statearr_101397_101579[(2)] = inst_101136);

(statearr_101397_101579[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (31))){
var inst_101148 = (state_101349[(20)]);
var inst_101169 = (state_101349[(2)]);
var state_101349__$1 = (function (){var statearr_101398 = state_101349;
(statearr_101398[(15)] = inst_101169);

return statearr_101398;
})();
if(cljs.core.truth_(inst_101148)){
var statearr_101399_101580 = state_101349__$1;
(statearr_101399_101580[(1)] = (32));

} else {
var statearr_101400_101581 = state_101349__$1;
(statearr_101400_101581[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (32))){
var state_101349__$1 = state_101349;
var statearr_101401_101582 = state_101349__$1;
(statearr_101401_101582[(2)] = false);

(statearr_101401_101582[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (40))){
var inst_101181 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101402_101583 = state_101349__$1;
(statearr_101402_101583[(2)] = inst_101181);

(statearr_101402_101583[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (91))){
var inst_101290 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101403_101584 = state_101349__$1;
(statearr_101403_101584[(2)] = inst_101290);

(statearr_101403_101584[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (108))){
var state_101349__$1 = state_101349;
var statearr_101404_101585 = state_101349__$1;
(statearr_101404_101585[(2)] = null);

(statearr_101404_101585[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (56))){
var inst_101210 = (state_101349[(2)]);
var inst_101211 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101210);
var state_101349__$1 = state_101349;
var statearr_101405_101586 = state_101349__$1;
(statearr_101405_101586[(2)] = inst_101211);

(statearr_101405_101586[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (33))){
var inst_101169 = (state_101349[(15)]);
var inst_101147 = (state_101349[(19)]);
var inst_101172 = (inst_101147 - (1));
var inst_101173 = cljs.core.get.call(null,inst_101169,inst_101172,false);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101173)){
var statearr_101406_101587 = state_101349__$1;
(statearr_101406_101587[(1)] = (35));

} else {
var statearr_101407_101588 = state_101349__$1;
(statearr_101407_101588[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (13))){
var inst_101126 = (state_101349[(28)]);
var inst_101112 = (state_101349[(18)]);
var inst_101125 = (state_101349[(2)]);
var inst_101126__$1 = inst_101112.altKey;
var state_101349__$1 = (function (){var statearr_101408 = state_101349;
(statearr_101408[(28)] = inst_101126__$1);

(statearr_101408[(30)] = inst_101125);

return statearr_101408;
})();
if(cljs.core.truth_(inst_101126__$1)){
var statearr_101409_101589 = state_101349__$1;
(statearr_101409_101589[(1)] = (14));

} else {
var statearr_101410_101590 = state_101349__$1;
(statearr_101410_101590[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (22))){
var inst_101120 = (state_101349[(31)]);
var inst_101151 = (state_101349[(26)]);
var inst_101130 = (state_101349[(32)]);
var inst_101125 = (state_101349[(30)]);
var inst_101119 = (state_101349[(33)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101118 = (state_101349[(22)]);
var inst_101135 = (state_101349[(34)]);
var inst_101140 = (state_101349[(2)]);
var inst_101141 = [inst_101120,inst_101125,inst_101130,inst_101135,inst_101140];
var inst_101142 = (new cljs.core.PersistentVector(null,5,(5),inst_101119,inst_101141,null));
var inst_101143 = cljs.core.filter.call(null,cljs.core.identity,inst_101142);
var inst_101144 = inst_101118.call(null,inst_101143);
var inst_101145 = om.core.get_state.call(null,self__.owner);
var inst_101146__$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(inst_101145);
var inst_101147 = cljs.core.last.call(null,inst_101146__$1);
var inst_101148__$1 = cljs.core._EQ_.call(null,outliner.components.index.root_node,inst_101146__$1);
var inst_101149 = cljs.core.deref.call(null,self__.data);
var inst_101150 = cljs.core.get_in.call(null,inst_101149,inst_101146__$1);
var inst_101151__$1 = !(inst_101148__$1);
var state_101349__$1 = (function (){var statearr_101411 = state_101349;
(statearr_101411[(26)] = inst_101151__$1);

(statearr_101411[(14)] = inst_101144);

(statearr_101411[(16)] = inst_101150);

(statearr_101411[(19)] = inst_101147);

(statearr_101411[(20)] = inst_101148__$1);

(statearr_101411[(7)] = inst_101146__$1);

return statearr_101411;
})();
if(inst_101151__$1){
var statearr_101412_101591 = state_101349__$1;
(statearr_101412_101591[(1)] = (23));

} else {
var statearr_101413_101592 = state_101349__$1;
(statearr_101413_101592[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (90))){
var state_101349__$1 = state_101349;
var statearr_101414_101593 = state_101349__$1;
(statearr_101414_101593[(2)] = null);

(statearr_101414_101593[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (109))){
var inst_101340 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101415_101594 = state_101349__$1;
(statearr_101415_101594[(2)] = inst_101340);

(statearr_101415_101594[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (36))){
var state_101349__$1 = state_101349;
var statearr_101416_101595 = state_101349__$1;
(statearr_101416_101595[(1)] = (38));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (41))){
var inst_101158 = (state_101349[(9)]);
var inst_101147 = (state_101349[(19)]);
var inst_101189 = (inst_101147 + (1));
var inst_101190 = cljs.core.conj.call(null,inst_101158,new cljs.core.Keyword(null,"children","children",-940561982),inst_101189);
var state_101349__$1 = state_101349;
var statearr_101418_101596 = state_101349__$1;
(statearr_101418_101596[(2)] = inst_101190);

(statearr_101418_101596[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (89))){
var inst_101280 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var inst_101281 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),inst_101280);
var state_101349__$1 = state_101349;
if(inst_101281){
var statearr_101419_101597 = state_101349__$1;
(statearr_101419_101597[(1)] = (92));

} else {
var statearr_101420_101598 = state_101349__$1;
(statearr_101420_101598[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (100))){
var inst_101158 = (state_101349[(9)]);
var inst_101106 = (state_101349[(10)]);
var inst_101164 = (state_101349[(11)]);
var inst_101107 = (state_101349[(12)]);
var inst_101185 = (state_101349[(13)]);
var inst_101144 = (state_101349[(14)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101113 = (state_101349[(17)]);
var inst_101112 = (state_101349[(18)]);
var inst_101147 = (state_101349[(19)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101108 = (state_101349[(21)]);
var inst_101118 = (state_101349[(22)]);
var inst_101193 = (state_101349[(8)]);
var inst_101307 = inst_101150.call(null,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_101308 = outliner.components.index.gen_empty_text_node.call(null);
var inst_101309 = cljs.core.conj.call(null,inst_101307,inst_101308);
var inst_101310 = cljs.core.count.call(null,inst_101309);
var inst_101311 = (inst_101310 - (1));
var inst_101312 = cljs.core.conj.call(null,inst_101146,new cljs.core.Keyword(null,"children","children",-940561982),inst_101311);
var inst_101313 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101312);
var inst_101314 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var inst_101315 = (function (){var G__101097 = key_down_chan;
var up_path = inst_101185;
var current_children = inst_101307;
var current_child_idx = inst_101147;
var is_root = inst_101148;
var ret101100 = inst_101106;
var new_path = inst_101312;
var parent_children = inst_101169;
var parent = inst_101164;
var new_children = inst_101309;
var G__101098 = click_chan;
var vec__101111 = inst_101106;
var down_path = inst_101193;
var command = inst_101144;
var vec__101101 = inst_101106;
var ch101099 = inst_101108;
var e = inst_101112;
var parent_path = inst_101158;
var current_path = inst_101146;
var val__22904__auto__ = inst_101107;
var c = inst_101113;
var current = inst_101150;
var keyevent__GT_command = inst_101118;
return ((function (G__101097,up_path,current_children,current_child_idx,is_root,ret101100,new_path,parent_children,parent,new_children,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101307,inst_101308,inst_101309,inst_101310,inst_101311,inst_101312,inst_101313,inst_101314,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (p1__100649_SHARP_){
return cljs.core.assoc_in.call(null,p1__100649_SHARP_,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_children);
});
;})(G__101097,up_path,current_children,current_child_idx,is_root,ret101100,new_path,parent_children,parent,new_children,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101307,inst_101308,inst_101309,inst_101310,inst_101311,inst_101312,inst_101313,inst_101314,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var inst_101316 = om.core.transact_BANG_.call(null,self__.data,inst_101315);
var state_101349__$1 = (function (){var statearr_101421 = state_101349;
(statearr_101421[(35)] = inst_101313);

(statearr_101421[(36)] = inst_101314);

return statearr_101421;
})();
var statearr_101422_101599 = state_101349__$1;
(statearr_101422_101599[(2)] = inst_101316);

(statearr_101422_101599[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (43))){
var inst_101144 = (state_101349[(14)]);
var inst_101193 = (state_101349[(2)]);
var state_101349__$1 = (function (){var statearr_101423 = state_101349;
(statearr_101423[(8)] = inst_101193);

return statearr_101423;
})();
var G__101424_101600 = (((inst_101144 instanceof cljs.core.Keyword))?inst_101144.fqn:null);
switch (G__101424_101600) {
case "left-shift-node":
var statearr_101425_101602 = state_101349__$1;
(statearr_101425_101602[(1)] = (81));


break;
case "node-down":
var statearr_101426_101603 = state_101349__$1;
(statearr_101426_101603[(1)] = (62));


break;
case "toggle-edit":
var statearr_101427_101604 = state_101349__$1;
(statearr_101427_101604[(1)] = (88));


break;
case "cursor-right":
var statearr_101428_101605 = state_101349__$1;
(statearr_101428_101605[(1)] = (57));


break;
case "right-shift-node":
var statearr_101429_101606 = state_101349__$1;
(statearr_101429_101606[(1)] = (77));


break;
case "toggle-closed":
var statearr_101430_101607 = state_101349__$1;
(statearr_101430_101607[(1)] = (73));


break;
case "node-up":
var statearr_101431_101608 = state_101349__$1;
(statearr_101431_101608[(1)] = (58));


break;
case "cursor-left":
var statearr_101432_101609 = state_101349__$1;
(statearr_101432_101609[(1)] = (53));


break;
case "add-new-child":
var statearr_101433_101610 = state_101349__$1;
(statearr_101433_101610[(1)] = (99));


break;
case "add-new-sibbling":
var statearr_101434_101611 = state_101349__$1;
(statearr_101434_101611[(1)] = (95));


break;
case "cursor-up":
var statearr_101435_101612 = state_101349__$1;
(statearr_101435_101612[(1)] = (45));


break;
case "cursor-down":
var statearr_101436_101613 = state_101349__$1;
(statearr_101436_101613[(1)] = (49));


break;
case "destroy-node":
var statearr_101437_101614 = state_101349__$1;
(statearr_101437_101614[(1)] = (66));


break;
default:
var statearr_101438_101615 = state_101349__$1;
(statearr_101438_101615[(1)] = (103));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (61))){
var inst_101224 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101439_101616 = state_101349__$1;
(statearr_101439_101616[(2)] = inst_101224);

(statearr_101439_101616[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (29))){
var inst_101164 = (state_101349[(11)]);
var inst_101166 = cljs.core.get.call(null,inst_101164,new cljs.core.Keyword(null,"children","children",-940561982),false);
var state_101349__$1 = state_101349;
var statearr_101440_101617 = state_101349__$1;
(statearr_101440_101617[(2)] = inst_101166);

(statearr_101440_101617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (44))){
var inst_101324 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101441_101618 = state_101349__$1;
(statearr_101441_101618[(2)] = inst_101324);

(statearr_101441_101618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (93))){
var inst_101285 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var state_101349__$1 = state_101349;
var statearr_101442_101619 = state_101349__$1;
(statearr_101442_101619[(2)] = inst_101285);

(statearr_101442_101619[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (6))){
var inst_101108 = (state_101349[(21)]);
var inst_101326 = cljs.core._EQ_.call(null,inst_101108,click_chan);
var state_101349__$1 = state_101349;
if(inst_101326){
var statearr_101443_101620 = state_101349__$1;
(statearr_101443_101620[(1)] = (104));

} else {
var statearr_101444_101621 = state_101349__$1;
(statearr_101444_101621[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (28))){
var inst_101164 = (state_101349[(11)]);
var inst_101164__$1 = (state_101349[(2)]);
var state_101349__$1 = (function (){var statearr_101445 = state_101349;
(statearr_101445[(11)] = inst_101164__$1);

return statearr_101445;
})();
if(cljs.core.truth_(inst_101164__$1)){
var statearr_101446_101622 = state_101349__$1;
(statearr_101446_101622[(1)] = (29));

} else {
var statearr_101447_101623 = state_101349__$1;
(statearr_101447_101623[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (64))){
var state_101349__$1 = state_101349;
var statearr_101448_101624 = state_101349__$1;
(statearr_101448_101624[(2)] = null);

(statearr_101448_101624[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (103))){
var state_101349__$1 = state_101349;
var statearr_101449_101625 = state_101349__$1;
(statearr_101449_101625[(2)] = null);

(statearr_101449_101625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (51))){
var state_101349__$1 = state_101349;
var statearr_101450_101626 = state_101349__$1;
(statearr_101450_101626[(2)] = null);

(statearr_101450_101626[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (25))){
var inst_101158 = (state_101349[(9)]);
var inst_101158__$1 = (state_101349[(2)]);
var state_101349__$1 = (function (){var statearr_101451 = state_101349;
(statearr_101451[(9)] = inst_101158__$1);

return statearr_101451;
})();
if(cljs.core.truth_(inst_101158__$1)){
var statearr_101452_101627 = state_101349__$1;
(statearr_101452_101627[(1)] = (26));

} else {
var statearr_101453_101628 = state_101349__$1;
(statearr_101453_101628[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (34))){
var inst_101169 = (state_101349[(15)]);
var inst_101147 = (state_101349[(19)]);
var inst_101185 = (state_101349[(2)]);
var inst_101186 = (inst_101147 + (1));
var inst_101187 = cljs.core.get.call(null,inst_101169,inst_101186,false);
var state_101349__$1 = (function (){var statearr_101454 = state_101349;
(statearr_101454[(13)] = inst_101185);

return statearr_101454;
})();
if(cljs.core.truth_(inst_101187)){
var statearr_101455_101629 = state_101349__$1;
(statearr_101455_101629[(1)] = (41));

} else {
var statearr_101456_101630 = state_101349__$1;
(statearr_101456_101630[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (17))){
var state_101349__$1 = state_101349;
var statearr_101457_101631 = state_101349__$1;
(statearr_101457_101631[(2)] = new cljs.core.Keyword(null,"ctrl","ctrl",361402094));

(statearr_101457_101631[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (3))){
var inst_101347 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101349__$1,inst_101347);
} else {
if((state_val_101350 === (12))){
var inst_101121 = (state_101349[(37)]);
var state_101349__$1 = state_101349;
var statearr_101458_101632 = state_101349__$1;
(statearr_101458_101632[(2)] = inst_101121);

(statearr_101458_101632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (2))){
var inst_101102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_101103 = [key_down_chan,click_chan];
var inst_101104 = (new cljs.core.PersistentVector(null,2,(5),inst_101102,inst_101103,null));
var state_101349__$1 = state_101349;
return cljs.core.async.ioc_alts_BANG_.call(null,state_101349__$1,(4),inst_101104);
} else {
if((state_val_101350 === (66))){
var inst_101148 = (state_101349[(20)]);
var inst_101236 = cljs.core.not.call(null,inst_101148);
var state_101349__$1 = state_101349;
if(inst_101236){
var statearr_101459_101633 = state_101349__$1;
(statearr_101459_101633[(1)] = (67));

} else {
var statearr_101460_101634 = state_101349__$1;
(statearr_101460_101634[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (107))){
var inst_101107 = (state_101349[(12)]);
var state_101349__$1 = state_101349;
var statearr_101461_101635 = state_101349__$1;
(statearr_101461_101635[(2)] = inst_101107);

(statearr_101461_101635[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (23))){
var inst_101146 = (state_101349[(7)]);
var inst_101153 = cljs.core.count.call(null,inst_101146);
var inst_101154 = (inst_101153 - (2));
var inst_101155 = cljs.core.subvec.call(null,inst_101146,(0),inst_101154);
var state_101349__$1 = state_101349;
var statearr_101462_101636 = state_101349__$1;
(statearr_101462_101636[(2)] = inst_101155);

(statearr_101462_101636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (47))){
var state_101349__$1 = state_101349;
var statearr_101463_101637 = state_101349__$1;
(statearr_101463_101637[(2)] = null);

(statearr_101463_101637[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (35))){
var inst_101158 = (state_101349[(9)]);
var inst_101147 = (state_101349[(19)]);
var inst_101175 = (inst_101147 - (1));
var inst_101176 = cljs.core.conj.call(null,inst_101158,new cljs.core.Keyword(null,"children","children",-940561982),inst_101175);
var state_101349__$1 = state_101349;
var statearr_101464_101638 = state_101349__$1;
(statearr_101464_101638[(2)] = inst_101176);

(statearr_101464_101638[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (82))){
var inst_101158 = (state_101349[(9)]);
var inst_101266 = cljs.core._EQ_.call(null,inst_101158,outliner.components.index.root_node);
var inst_101267 = !(inst_101266);
var state_101349__$1 = state_101349;
var statearr_101465_101639 = state_101349__$1;
(statearr_101465_101639[(2)] = inst_101267);

(statearr_101465_101639[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (76))){
var inst_101256 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101466_101640 = state_101349__$1;
(statearr_101466_101640[(2)] = inst_101256);

(statearr_101466_101640[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (97))){
var state_101349__$1 = state_101349;
var statearr_101467_101641 = state_101349__$1;
(statearr_101467_101641[(2)] = null);

(statearr_101467_101641[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (19))){
var inst_101136 = (state_101349[(29)]);
var inst_101112 = (state_101349[(18)]);
var inst_101135 = (state_101349[(2)]);
var inst_101136__$1 = inst_101112.metaKey;
var state_101349__$1 = (function (){var statearr_101468 = state_101349;
(statearr_101468[(29)] = inst_101136__$1);

(statearr_101468[(34)] = inst_101135);

return statearr_101468;
})();
if(cljs.core.truth_(inst_101136__$1)){
var statearr_101469_101642 = state_101349__$1;
(statearr_101469_101642[(1)] = (20));

} else {
var statearr_101470_101643 = state_101349__$1;
(statearr_101470_101643[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (57))){
var inst_101158 = (state_101349[(9)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101147 = (state_101349[(19)]);
var inst_101146 = (state_101349[(7)]);
var inst_101193 = (state_101349[(8)]);
var inst_101213 = outliner.components.index.gen_right_path.call(null,inst_101146,inst_101150,inst_101147,inst_101158,inst_101169,inst_101193,self__.data);
var inst_101214 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101213);
var state_101349__$1 = state_101349;
var statearr_101471_101644 = state_101349__$1;
(statearr_101471_101644[(2)] = inst_101214);

(statearr_101471_101644[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (68))){
var state_101349__$1 = state_101349;
var statearr_101472_101645 = state_101349__$1;
(statearr_101472_101645[(2)] = null);

(statearr_101472_101645[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (11))){
var state_101349__$1 = state_101349;
var statearr_101473_101646 = state_101349__$1;
(statearr_101473_101646[(2)] = new cljs.core.Keyword(null,"shift","shift",997140064));

(statearr_101473_101646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (9))){
var state_101349__$1 = state_101349;
var statearr_101474_101647 = state_101349__$1;
(statearr_101474_101647[(2)] = outliner.components.index.edit_keymap);

(statearr_101474_101647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (5))){
var inst_101106 = (state_101349[(10)]);
var inst_101112 = cljs.core.nth.call(null,inst_101106,(0),null);
var inst_101113 = cljs.core.nth.call(null,inst_101106,(1),null);
var inst_101116 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_101349__$1 = (function (){var statearr_101475 = state_101349;
(statearr_101475[(17)] = inst_101113);

(statearr_101475[(18)] = inst_101112);

return statearr_101475;
})();
var G__101476_101648 = (((inst_101116 instanceof cljs.core.Keyword))?inst_101116.fqn:null);
switch (G__101476_101648) {
case "editing":
var statearr_101477_101650 = state_101349__$1;
(statearr_101477_101650[(1)] = (9));


break;
default:
var statearr_101478_101651 = state_101349__$1;
(statearr_101478_101651[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (83))){
var inst_101158 = (state_101349[(9)]);
var state_101349__$1 = state_101349;
var statearr_101479_101652 = state_101349__$1;
(statearr_101479_101652[(2)] = inst_101158);

(statearr_101479_101652[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (14))){
var state_101349__$1 = state_101349;
var statearr_101480_101653 = state_101349__$1;
(statearr_101480_101653[(2)] = new cljs.core.Keyword(null,"alt","alt",-3214426));

(statearr_101480_101653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (45))){
var inst_101185 = (state_101349[(13)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101185)){
var statearr_101481_101654 = state_101349__$1;
(statearr_101481_101654[(1)] = (46));

} else {
var statearr_101482_101655 = state_101349__$1;
(statearr_101482_101655[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (53))){
var inst_101148 = (state_101349[(20)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101148)){
var statearr_101483_101656 = state_101349__$1;
(statearr_101483_101656[(1)] = (54));

} else {
var statearr_101484_101657 = state_101349__$1;
(statearr_101484_101657[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (78))){
var inst_101158 = (state_101349[(9)]);
var inst_101106 = (state_101349[(10)]);
var inst_101164 = (state_101349[(11)]);
var inst_101107 = (state_101349[(12)]);
var inst_101185 = (state_101349[(13)]);
var inst_101144 = (state_101349[(14)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101113 = (state_101349[(17)]);
var inst_101112 = (state_101349[(18)]);
var inst_101147 = (state_101349[(19)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101108 = (state_101349[(21)]);
var inst_101118 = (state_101349[(22)]);
var inst_101193 = (state_101349[(8)]);
var inst_101259 = (function (){var G__101097 = key_down_chan;
var up_path = inst_101185;
var current_child_idx = inst_101147;
var is_root = inst_101148;
var ret101100 = inst_101106;
var parent_children = inst_101169;
var parent = inst_101164;
var G__101098 = click_chan;
var vec__101111 = inst_101106;
var down_path = inst_101193;
var command = inst_101144;
var vec__101101 = inst_101106;
var ch101099 = inst_101108;
var e = inst_101112;
var parent_path = inst_101158;
var current_path = inst_101146;
var val__22904__auto__ = inst_101107;
var c = inst_101113;
var current = inst_101150;
var keyevent__GT_command = inst_101118;
return ((function (G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = cljs.core.conj.call(null,up_path,new cljs.core.Keyword(null,"children","children",-940561982));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.conj.call(null,destination_children,current);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,(cljs.core.count.call(null,new_destination_children) - (1))));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children),up_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359)),destination_path,new_destination_children);
});
;})(G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var inst_101260 = om.core.transact_BANG_.call(null,self__.data,inst_101259);
var state_101349__$1 = state_101349;
var statearr_101485_101658 = state_101349__$1;
(statearr_101485_101658[(2)] = inst_101260);

(statearr_101485_101658[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (26))){
var inst_101158 = (state_101349[(9)]);
var inst_101160 = cljs.core.deref.call(null,self__.data);
var inst_101161 = cljs.core.get_in.call(null,inst_101160,inst_101158);
var state_101349__$1 = state_101349;
var statearr_101486_101659 = state_101349__$1;
(statearr_101486_101659[(2)] = inst_101161);

(statearr_101486_101659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (16))){
var inst_101131 = (state_101349[(38)]);
var inst_101112 = (state_101349[(18)]);
var inst_101130 = (state_101349[(2)]);
var inst_101131__$1 = inst_101112.ctrlKey;
var state_101349__$1 = (function (){var statearr_101487 = state_101349;
(statearr_101487[(32)] = inst_101130);

(statearr_101487[(38)] = inst_101131__$1);

return statearr_101487;
})();
if(cljs.core.truth_(inst_101131__$1)){
var statearr_101488_101660 = state_101349__$1;
(statearr_101488_101660[(1)] = (17));

} else {
var statearr_101489_101661 = state_101349__$1;
(statearr_101489_101661[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (81))){
var inst_101158 = (state_101349[(9)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101158)){
var statearr_101490_101662 = state_101349__$1;
(statearr_101490_101662[(1)] = (82));

} else {
var statearr_101491_101663 = state_101349__$1;
(statearr_101491_101663[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (79))){
var state_101349__$1 = state_101349;
var statearr_101492_101664 = state_101349__$1;
(statearr_101492_101664[(2)] = null);

(statearr_101492_101664[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (38))){
var state_101349__$1 = state_101349;
var statearr_101493_101665 = state_101349__$1;
(statearr_101493_101665[(2)] = false);

(statearr_101493_101665[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (98))){
var inst_101303 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101494_101666 = state_101349__$1;
(statearr_101494_101666[(2)] = inst_101303);

(statearr_101494_101666[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (87))){
var inst_101276 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101495_101667 = state_101349__$1;
(statearr_101495_101667[(2)] = inst_101276);

(statearr_101495_101667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (30))){
var inst_101164 = (state_101349[(11)]);
var state_101349__$1 = state_101349;
var statearr_101496_101668 = state_101349__$1;
(statearr_101496_101668[(2)] = inst_101164);

(statearr_101496_101668[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (73))){
var inst_101148 = (state_101349[(20)]);
var inst_101250 = cljs.core.not.call(null,inst_101148);
var state_101349__$1 = state_101349;
if(inst_101250){
var statearr_101497_101669 = state_101349__$1;
(statearr_101497_101669[(1)] = (74));

} else {
var statearr_101498_101670 = state_101349__$1;
(statearr_101498_101670[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (96))){
var inst_101158 = (state_101349[(9)]);
var inst_101106 = (state_101349[(10)]);
var inst_101164 = (state_101349[(11)]);
var inst_101107 = (state_101349[(12)]);
var inst_101185 = (state_101349[(13)]);
var inst_101144 = (state_101349[(14)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101113 = (state_101349[(17)]);
var inst_101112 = (state_101349[(18)]);
var inst_101147 = (state_101349[(19)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101108 = (state_101349[(21)]);
var inst_101118 = (state_101349[(22)]);
var inst_101193 = (state_101349[(8)]);
var inst_101294 = outliner.components.index.add_node_to_parent.call(null,inst_101169,inst_101147);
var inst_101295 = (inst_101147 + (1));
var inst_101296 = cljs.core.conj.call(null,inst_101158,new cljs.core.Keyword(null,"children","children",-940561982),inst_101295);
var inst_101297 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101296);
var inst_101298 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var inst_101299 = (function (){var G__101097 = key_down_chan;
var up_path = inst_101185;
var current_child_idx = inst_101147;
var new_sibblings = inst_101294;
var is_root = inst_101148;
var ret101100 = inst_101106;
var new_path = inst_101296;
var parent_children = inst_101169;
var parent = inst_101164;
var G__101098 = click_chan;
var vec__101111 = inst_101106;
var down_path = inst_101193;
var command = inst_101144;
var vec__101101 = inst_101106;
var ch101099 = inst_101108;
var e = inst_101112;
var parent_path = inst_101158;
var current_path = inst_101146;
var val__22904__auto__ = inst_101107;
var c = inst_101113;
var current = inst_101150;
var keyevent__GT_command = inst_101118;
return ((function (G__101097,up_path,current_child_idx,new_sibblings,is_root,ret101100,new_path,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101294,inst_101295,inst_101296,inst_101297,inst_101298,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (p1__100648_SHARP_){
return cljs.core.assoc_in.call(null,p1__100648_SHARP_,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_sibblings);
});
;})(G__101097,up_path,current_child_idx,new_sibblings,is_root,ret101100,new_path,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101294,inst_101295,inst_101296,inst_101297,inst_101298,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var inst_101300 = om.core.transact_BANG_.call(null,self__.data,inst_101299);
var state_101349__$1 = (function (){var statearr_101499 = state_101349;
(statearr_101499[(39)] = inst_101298);

(statearr_101499[(40)] = inst_101297);

return statearr_101499;
})();
var statearr_101500_101671 = state_101349__$1;
(statearr_101500_101671[(2)] = inst_101300);

(statearr_101500_101671[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (10))){
var state_101349__$1 = state_101349;
var statearr_101501_101672 = state_101349__$1;
(statearr_101501_101672[(2)] = outliner.components.index.normal_keymap);

(statearr_101501_101672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (18))){
var inst_101131 = (state_101349[(38)]);
var state_101349__$1 = state_101349;
var statearr_101502_101673 = state_101349__$1;
(statearr_101502_101673[(2)] = inst_101131);

(statearr_101502_101673[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (105))){
var inst_101108 = (state_101349[(21)]);
var inst_101336 = cljs.core._EQ_.call(null,inst_101108,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_101349__$1 = state_101349;
if(inst_101336){
var statearr_101503_101674 = state_101349__$1;
(statearr_101503_101674[(1)] = (107));

} else {
var statearr_101504_101675 = state_101349__$1;
(statearr_101504_101675[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (52))){
var inst_101204 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101505_101676 = state_101349__$1;
(statearr_101505_101676[(2)] = inst_101204);

(statearr_101505_101676[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (67))){
var inst_101148 = (state_101349[(20)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101148)){
var statearr_101506_101677 = state_101349__$1;
(statearr_101506_101677[(1)] = (70));

} else {
var statearr_101507_101678 = state_101349__$1;
(statearr_101507_101678[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (71))){
var inst_101158 = (state_101349[(9)]);
var inst_101185 = (state_101349[(13)]);
var inst_101147 = (state_101349[(19)]);
var inst_101240 = outliner.components.index.gen_left_path.call(null,inst_101147,inst_101158,inst_101185,self__.data);
var state_101349__$1 = state_101349;
var statearr_101508_101679 = state_101349__$1;
(statearr_101508_101679[(2)] = inst_101240);

(statearr_101508_101679[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (42))){
var state_101349__$1 = state_101349;
var statearr_101509_101680 = state_101349__$1;
(statearr_101509_101680[(2)] = false);

(statearr_101509_101680[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (80))){
var inst_101263 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101510_101681 = state_101349__$1;
(statearr_101510_101681[(2)] = inst_101263);

(statearr_101510_101681[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (37))){
var inst_101183 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101511_101682 = state_101349__$1;
(statearr_101511_101682[(2)] = inst_101183);

(statearr_101511_101682[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (63))){
var inst_101158 = (state_101349[(9)]);
var inst_101106 = (state_101349[(10)]);
var inst_101164 = (state_101349[(11)]);
var inst_101107 = (state_101349[(12)]);
var inst_101185 = (state_101349[(13)]);
var inst_101144 = (state_101349[(14)]);
var inst_101169 = (state_101349[(15)]);
var inst_101150 = (state_101349[(16)]);
var inst_101113 = (state_101349[(17)]);
var inst_101112 = (state_101349[(18)]);
var inst_101147 = (state_101349[(19)]);
var inst_101148 = (state_101349[(20)]);
var inst_101146 = (state_101349[(7)]);
var inst_101108 = (state_101349[(21)]);
var inst_101118 = (state_101349[(22)]);
var inst_101193 = (state_101349[(8)]);
var inst_101227 = cljs.core.deref.call(null,self__.data);
var inst_101228 = cljs.core.get_in.call(null,inst_101227,inst_101193);
var inst_101229 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_101193);
var inst_101230 = (function (){var G__101097 = key_down_chan;
var up_path = inst_101185;
var current_child_idx = inst_101147;
var is_root = inst_101148;
var ret101100 = inst_101106;
var parent_children = inst_101169;
var parent = inst_101164;
var G__101098 = click_chan;
var vec__101111 = inst_101106;
var down_path = inst_101193;
var command = inst_101144;
var vec__101101 = inst_101106;
var swap_node = inst_101228;
var ch101099 = inst_101108;
var e = inst_101112;
var parent_path = inst_101158;
var current_path = inst_101146;
var val__22904__auto__ = inst_101107;
var c = inst_101113;
var current = inst_101150;
var keyevent__GT_command = inst_101118;
return ((function (G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,swap_node,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101227,inst_101228,inst_101229,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),down_path,current);
});
;})(G__101097,up_path,current_child_idx,is_root,ret101100,parent_children,parent,G__101098,vec__101111,down_path,command,vec__101101,swap_node,ch101099,e,parent_path,current_path,val__22904__auto__,c,current,keyevent__GT_command,inst_101158,inst_101106,inst_101164,inst_101107,inst_101185,inst_101144,inst_101169,inst_101150,inst_101113,inst_101112,inst_101147,inst_101148,inst_101146,inst_101108,inst_101118,inst_101193,inst_101227,inst_101228,inst_101229,state_val_101350,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var inst_101231 = om.core.transact_BANG_.call(null,self__.data,inst_101230);
var state_101349__$1 = (function (){var statearr_101512 = state_101349;
(statearr_101512[(41)] = inst_101229);

return statearr_101512;
})();
var statearr_101513_101683 = state_101349__$1;
(statearr_101513_101683[(2)] = inst_101231);

(statearr_101513_101683[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (94))){
var inst_101287 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
var statearr_101514_101684 = state_101349__$1;
(statearr_101514_101684[(2)] = inst_101287);

(statearr_101514_101684[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (8))){
var inst_101112 = (state_101349[(18)]);
var inst_101121 = (state_101349[(37)]);
var inst_101118 = (state_101349[(2)]);
var inst_101119 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_101120 = inst_101112.keyCode;
var inst_101121__$1 = inst_101112.shiftKey;
var state_101349__$1 = (function (){var statearr_101515 = state_101349;
(statearr_101515[(31)] = inst_101120);

(statearr_101515[(33)] = inst_101119);

(statearr_101515[(22)] = inst_101118);

(statearr_101515[(37)] = inst_101121__$1);

return statearr_101515;
})();
if(cljs.core.truth_(inst_101121__$1)){
var statearr_101516_101685 = state_101349__$1;
(statearr_101516_101685[(1)] = (11));

} else {
var statearr_101517_101686 = state_101349__$1;
(statearr_101517_101686[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (49))){
var inst_101193 = (state_101349[(8)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101193)){
var statearr_101518_101687 = state_101349__$1;
(statearr_101518_101687[(1)] = (50));

} else {
var statearr_101519_101688 = state_101349__$1;
(statearr_101519_101688[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101350 === (84))){
var inst_101270 = (state_101349[(2)]);
var state_101349__$1 = state_101349;
if(cljs.core.truth_(inst_101270)){
var statearr_101520_101689 = state_101349__$1;
(statearr_101520_101689[(1)] = (85));

} else {
var statearr_101521_101690 = state_101349__$1;
(statearr_101521_101690[(1)] = (86));

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
});})(c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;
return ((function (switch__22874__auto__,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function() {
var outliner$components$index$component_$_state_machine__22875__auto__ = null;
var outliner$components$index$component_$_state_machine__22875__auto____0 = (function (){
var statearr_101525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_101525[(0)] = outliner$components$index$component_$_state_machine__22875__auto__);

(statearr_101525[(1)] = (1));

return statearr_101525;
});
var outliner$components$index$component_$_state_machine__22875__auto____1 = (function (state_101349){
while(true){
var ret_value__22876__auto__ = (function (){try{while(true){
var result__22877__auto__ = switch__22874__auto__.call(null,state_101349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22877__auto__;
}
break;
}
}catch (e101526){if((e101526 instanceof Object)){
var ex__22878__auto__ = e101526;
var statearr_101527_101691 = state_101349;
(statearr_101527_101691[(5)] = ex__22878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101692 = state_101349;
state_101349 = G__101692;
continue;
} else {
return ret_value__22876__auto__;
}
break;
}
});
outliner$components$index$component_$_state_machine__22875__auto__ = function(state_101349){
switch(arguments.length){
case 0:
return outliner$components$index$component_$_state_machine__22875__auto____0.call(this);
case 1:
return outliner$components$index$component_$_state_machine__22875__auto____1.call(this,state_101349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$component_$_state_machine__22875__auto__.cljs$core$IFn$_invoke$arity$0 = outliner$components$index$component_$_state_machine__22875__auto____0;
outliner$components$index$component_$_state_machine__22875__auto__.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$component_$_state_machine__22875__auto____1;
return outliner$components$index$component_$_state_machine__22875__auto__;
})()
;})(switch__22874__auto__,c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
})();
var state__22897__auto__ = (function (){var statearr_101528 = f__22896__auto__.call(null);
(statearr_101528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22895__auto___101537);

return statearr_101528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22897__auto__);
});})(c__22895__auto___101537,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
);


return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),outliner.components.index.root_node,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null);
});})(validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;

outliner.components.index.t101093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (_101095){
var self__ = this;
var _101095__$1 = this;
return self__.meta101094;
});})(validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;

outliner.components.index.t101093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (_101095,meta101094__$1){
var self__ = this;
var _101095__$1 = this;
return (new outliner.components.index.t101093(self__.output_checker100654,self__.G__100656,self__.owner,self__.output_schema100651,self__.data,self__.input_schema100652,self__.component,self__.input_checker100653,self__.G__100655,self__.validate__20245__auto__,self__.ufv__,meta101094__$1));
});})(validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;

outliner.components.index.t101093.cljs$lang$type = true;

outliner.components.index.t101093.cljs$lang$ctorStr = "outliner.components.index/t101093";

outliner.components.index.t101093.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t101093");
});})(validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;

outliner.components.index.__GT_t101093 = ((function (validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533){
return (function outliner$components$index$component_$___GT_t101093(output_checker100654__$1,G__100656__$1,owner__$1,output_schema100651__$1,data__$1,input_schema100652__$1,component__$1,input_checker100653__$1,G__100655__$1,validate__20245__auto____$1,ufv____$1,meta101094){
return (new outliner.components.index.t101093(output_checker100654__$1,G__100656__$1,owner__$1,output_schema100651__$1,data__$1,input_schema100652__$1,component__$1,input_checker100653__$1,G__100655__$1,validate__20245__auto____$1,ufv____$1,meta101094));
});})(validate__20245__auto__,ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;

}

return (new outliner.components.index.t101093(output_checker100654_101533,G__100656,owner,output_schema100651_101530,data,input_schema100652_101531,outliner$components$index$component,input_checker100653_101532,G__100655,validate__20245__auto__,ufv___101529,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___101693 = output_checker100654_101533.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___101693)){
var error__20247__auto___101694 = temp__4126__auto___101693;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20247__auto___101694)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___101694,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema100651_101530,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___101529,output_schema100651_101530,input_schema100652_101531,input_checker100653_101532,output_checker100654_101533))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.component),schema.core.make_fn_schema.call(null,output_schema100651_101530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema100652_101531], null)));

outliner.components.index.__GT_component = (function() {
var outliner$components$index$__GT_component = null;
var outliner$components$index$__GT_component__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.component,cursor__22978__auto__);
});
var outliner$components$index$__GT_component__2 = (function (cursor__22978__auto__,m100650){
return om.core.build.call(null,outliner.components.index.component,cursor__22978__auto__,m100650);
});
outliner$components$index$__GT_component = function(cursor__22978__auto__,m100650){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_component__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_component__2.call(this,cursor__22978__auto__,m100650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_component__1;
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_component__2;
return outliner$components$index$__GT_component;
})()
;

//# sourceMappingURL=index.js.map?rel=1427867344031