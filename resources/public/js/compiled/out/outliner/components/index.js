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
if((cljs.core.not_EQ_.call(null,"true",e.target.contentEditable)) && ((cljs.core._EQ_.call(null,e.keyCode,(8))) || (cljs.core._EQ_.call(null,e.keyCode,(9))))){
e.preventDefault();
} else {
}

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
var G__122676 = cljs.core.conj.call(null,p,new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.count.call(null,children) - (1)));
p = G__122676;
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
var G__122677 = outliner.components.index.get_parent.call(null,p);
p = G__122677;
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

var ufv___122691 = schema.utils.use_fn_validation;
var output_schema122679_122692 = schema.core.Any;
var input_schema122680_122693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"head","head",869147608,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker122681_122694 = schema.core.checker.call(null,input_schema122680_122693);
var output_checker122682_122695 = schema.core.checker.call(null,output_schema122679_122692);
/**
 * Inputs: [head owner]
 */
outliner.components.index.outline_head = ((function (ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695){
return (function outliner$components$index$outline_head(G__122683,G__122684){
var validate__20245__auto__ = ufv___122691.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___122696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__122683,G__122684], null);
var temp__4126__auto___122697 = input_checker122681_122694.call(null,args__20246__auto___122696);
if(cljs.core.truth_(temp__4126__auto___122697)){
var error__20247__auto___122698 = temp__4126__auto___122697;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20247__auto___122698)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___122698,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___122696,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema122680_122693,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var head = G__122683;
var owner = G__122684;
while(true){
if(typeof outliner.components.index.t122688 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t122688 = (function (owner,output_schema122679,G__122683,outline_head,G__122684,validate__20245__auto__,output_checker122682,head,input_schema122680,ufv__,input_checker122681,meta122689){
this.owner = owner;
this.output_schema122679 = output_schema122679;
this.G__122683 = G__122683;
this.outline_head = outline_head;
this.G__122684 = G__122684;
this.validate__20245__auto__ = validate__20245__auto__;
this.output_checker122682 = output_checker122682;
this.head = head;
this.input_schema122680 = input_schema122680;
this.ufv__ = ufv__;
this.input_checker122681 = input_checker122681;
this.meta122689 = meta122689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t122688.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t122688.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-head";
});})(validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695))
;

outliner.components.index.t122688.prototype.om$core$IRender$ = true;

outliner.components.index.t122688.prototype.om$core$IRender$render$arity$1 = ((function (validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.h1,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.head)],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h2,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(self__.head)],null))))],null)));
});})(validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695))
;

outliner.components.index.t122688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695){
return (function (_122690){
var self__ = this;
var _122690__$1 = this;
return self__.meta122689;
});})(validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695))
;

outliner.components.index.t122688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695){
return (function (_122690,meta122689__$1){
var self__ = this;
var _122690__$1 = this;
return (new outliner.components.index.t122688(self__.owner,self__.output_schema122679,self__.G__122683,self__.outline_head,self__.G__122684,self__.validate__20245__auto__,self__.output_checker122682,self__.head,self__.input_schema122680,self__.ufv__,self__.input_checker122681,meta122689__$1));
});})(validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695))
;

outliner.components.index.t122688.cljs$lang$type = true;

outliner.components.index.t122688.cljs$lang$ctorStr = "outliner.components.index/t122688";

outliner.components.index.t122688.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t122688");
});})(validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695))
;

outliner.components.index.__GT_t122688 = ((function (validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695){
return (function outliner$components$index$outline_head_$___GT_t122688(owner__$1,output_schema122679__$1,G__122683__$1,outline_head__$1,G__122684__$1,validate__20245__auto____$1,output_checker122682__$1,head__$1,input_schema122680__$1,ufv____$1,input_checker122681__$1,meta122689){
return (new outliner.components.index.t122688(owner__$1,output_schema122679__$1,G__122683__$1,outline_head__$1,G__122684__$1,validate__20245__auto____$1,output_checker122682__$1,head__$1,input_schema122680__$1,ufv____$1,input_checker122681__$1,meta122689));
});})(validate__20245__auto__,ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695))
;

}

return (new outliner.components.index.t122688(owner,output_schema122679_122692,G__122683,outliner$components$index$outline_head,G__122684,validate__20245__auto__,output_checker122682_122695,head,input_schema122680_122693,ufv___122691,input_checker122681_122694,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___122699 = output_checker122682_122695.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___122699)){
var error__20247__auto___122700 = temp__4126__auto___122699;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20247__auto___122700)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___122700,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema122679_122692,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___122691,output_schema122679_122692,input_schema122680_122693,input_checker122681_122694,output_checker122682_122695))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_head),schema.core.make_fn_schema.call(null,output_schema122679_122692,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema122680_122693], null)));

outliner.components.index.__GT_outline_head = (function() {
var outliner$components$index$__GT_outline_head = null;
var outliner$components$index$__GT_outline_head__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22978__auto__);
});
var outliner$components$index$__GT_outline_head__2 = (function (cursor__22978__auto__,m122678){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22978__auto__,m122678);
});
outliner$components$index$__GT_outline_head = function(cursor__22978__auto__,m122678){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_head__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_outline_head__2.call(this,cursor__22978__auto__,m122678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_head__1;
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_head__2;
return outliner$components$index$__GT_outline_head;
})()
;

var ufv___122720 = schema.utils.use_fn_validation;
var output_schema122702_122721 = schema.core.Any;
var input_schema122703_122722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"node","node",-2073234571,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker122704_122723 = schema.core.checker.call(null,input_schema122703_122722);
var output_checker122705_122724 = schema.core.checker.call(null,output_schema122702_122721);
/**
 * Inputs: [node owner]
 */
outliner.components.index.outline_body = ((function (ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function outliner$components$index$outline_body(G__122706,G__122707){
var validate__20245__auto__ = ufv___122720.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___122725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__122706,G__122707], null);
var temp__4126__auto___122726 = input_checker122704_122723.call(null,args__20246__auto___122725);
if(cljs.core.truth_(temp__4126__auto___122726)){
var error__20247__auto___122727 = temp__4126__auto___122726;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20247__auto___122727)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___122727,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___122725,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema122703_122722,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var node = G__122706;
var owner = G__122707;
while(true){
if(typeof outliner.components.index.t122714 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t122714 = (function (owner,input_checker122704,output_checker122705,G__122706,input_schema122703,node,G__122707,validate__20245__auto__,outline_body,output_schema122702,ufv__,meta122715){
this.owner = owner;
this.input_checker122704 = input_checker122704;
this.output_checker122705 = output_checker122705;
this.G__122706 = G__122706;
this.input_schema122703 = input_schema122703;
this.node = node;
this.G__122707 = G__122707;
this.validate__20245__auto__ = validate__20245__auto__;
this.outline_body = outline_body;
this.output_schema122702 = output_schema122702;
this.ufv__ = ufv__;
this.meta122715 = meta122715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t122714.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t122714.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-body";
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

outliner.components.index.t122714.prototype.om$core$IWillUnmount$ = true;

outliner.components.index.t122714.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
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
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

outliner.components.index.t122714.prototype.om$core$IDidUpdate$ = true;

outliner.components.index.t122714.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__122717 = om.core.get_state.call(null,self__.owner);
var map__122717__$1 = ((cljs.core.seq_QMARK_.call(null,map__122717))?cljs.core.apply.call(null,cljs.core.hash_map,map__122717):map__122717);
var editor_ref = cljs.core.get.call(null,map__122717__$1,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
var selected = cljs.core.get.call(null,map__122717__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__122717__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var mode = cljs.core.get.call(null,map__122717__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
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
return om.core.transact_BANG_.call(null,self__.node,((function (map__122717,map__122717__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (d){
var new_txt = (om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).serialize()["element-0"]["value"]);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).destroy();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),null);

return cljs.core.assoc_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_txt);
});})(map__122717,map__122717__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
);
} else {
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);

}
}
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

outliner.components.index.t122714.prototype.om$core$IDidMount$ = true;

outliner.components.index.t122714.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616),true);
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

outliner.components.index.t122714.prototype.om$core$IRenderState$ = true;

outliner.components.index.t122714.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (_,p__122718){
var self__ = this;
var map__122719 = p__122718;
var map__122719__$1 = ((cljs.core.seq_QMARK_.call(null,map__122719))?cljs.core.apply.call(null,cljs.core.hash_map,map__122719):map__122719);
var state = map__122719__$1;
var mode = cljs.core.get.call(null,map__122719__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var click_chan = cljs.core.get.call(null,map__122719__$1,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512));
var selected = cljs.core.get.call(null,map__122719__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__122719__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))?"closed":"open")),cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,om.core.path.call(null,self__.node),cljs.core.concat.call(null,base_path,selected)))?"selected":""))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node)))?React.DOM.p({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__122719,map__122719__$1,state,mode,click_chan,selected,base_path,validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (e){
e.stopPropagation();

e.preventDefault();

return cljs.core.async.put_BANG_.call(null,click_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-path","new-path",1732999939),om.core.path.call(null,self__.node)], null));
});})(___$1,map__122719,map__122719__$1,state,mode,click_chan,selected,base_path,validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
), "dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node))}, "ref": "txt", "className": "txt"},null):null),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))))?om_tools.dom.element.call(null,React.DOM.ol,om.core.build_all.call(null,self__.outline_body,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"mode","mode",654403691),mode], null)], null)),cljs.core.PersistentVector.EMPTY):null)],null))));
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

outliner.components.index.t122714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (_122716){
var self__ = this;
var _122716__$1 = this;
return self__.meta122715;
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

outliner.components.index.t122714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (_122716,meta122715__$1){
var self__ = this;
var _122716__$1 = this;
return (new outliner.components.index.t122714(self__.owner,self__.input_checker122704,self__.output_checker122705,self__.G__122706,self__.input_schema122703,self__.node,self__.G__122707,self__.validate__20245__auto__,self__.outline_body,self__.output_schema122702,self__.ufv__,meta122715__$1));
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

outliner.components.index.t122714.cljs$lang$type = true;

outliner.components.index.t122714.cljs$lang$ctorStr = "outliner.components.index/t122714";

outliner.components.index.t122714.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t122714");
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

outliner.components.index.__GT_t122714 = ((function (validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724){
return (function outliner$components$index$outline_body_$___GT_t122714(owner__$1,input_checker122704__$1,output_checker122705__$1,G__122706__$1,input_schema122703__$1,node__$1,G__122707__$1,validate__20245__auto____$1,outline_body__$1,output_schema122702__$1,ufv____$1,meta122715){
return (new outliner.components.index.t122714(owner__$1,input_checker122704__$1,output_checker122705__$1,G__122706__$1,input_schema122703__$1,node__$1,G__122707__$1,validate__20245__auto____$1,outline_body__$1,output_schema122702__$1,ufv____$1,meta122715));
});})(validate__20245__auto__,ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

}

return (new outliner.components.index.t122714(owner,input_checker122704_122723,output_checker122705_122724,G__122706,input_schema122703_122722,node,G__122707,validate__20245__auto__,outliner$components$index$outline_body,output_schema122702_122721,ufv___122720,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___122728 = output_checker122705_122724.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___122728)){
var error__20247__auto___122729 = temp__4126__auto___122728;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20247__auto___122729)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___122729,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema122702_122721,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___122720,output_schema122702_122721,input_schema122703_122722,input_checker122704_122723,output_checker122705_122724))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_body),schema.core.make_fn_schema.call(null,output_schema122702_122721,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema122703_122722], null)));

outliner.components.index.__GT_outline_body = (function() {
var outliner$components$index$__GT_outline_body = null;
var outliner$components$index$__GT_outline_body__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22978__auto__);
});
var outliner$components$index$__GT_outline_body__2 = (function (cursor__22978__auto__,m122701){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22978__auto__,m122701);
});
outliner$components$index$__GT_outline_body = function(cursor__22978__auto__,m122701){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_body__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_outline_body__2.call(this,cursor__22978__auto__,m122701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_body__1;
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_body__2;
return outliner$components$index$__GT_outline_body;
})()
;

var ufv___123611 = schema.utils.use_fn_validation;
var output_schema122733_123612 = schema.core.Any;
var input_schema122734_123613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker122735_123614 = schema.core.checker.call(null,input_schema122734_123613);
var output_checker122736_123615 = schema.core.checker.call(null,output_schema122733_123612);
/**
 * Inputs: [data owner]
 */
outliner.components.index.component = ((function (ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function outliner$components$index$component(G__122737,G__122738){
var validate__20245__auto__ = ufv___123611.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___123616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__122737,G__122738], null);
var temp__4126__auto___123617 = input_checker122735_123614.call(null,args__20246__auto___123616);
if(cljs.core.truth_(temp__4126__auto___123617)){
var error__20247__auto___123618 = temp__4126__auto___123617;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20247__auto___123618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___123618,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___123616,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema122734_123613,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var data = G__122737;
var owner = G__122738;
while(true){
if(typeof outliner.components.index.t123175 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t123175 = (function (output_checker122736,G__122737,G__122738,owner,input_schema122734,data,component,validate__20245__auto__,input_checker122735,output_schema122733,ufv__,meta123176){
this.output_checker122736 = output_checker122736;
this.G__122737 = G__122737;
this.G__122738 = G__122738;
this.owner = owner;
this.input_schema122734 = input_schema122734;
this.data = data;
this.component = component;
this.validate__20245__auto__ = validate__20245__auto__;
this.input_checker122735 = input_checker122735;
this.output_schema122733 = output_schema122733;
this.ufv__ = ufv__;
this.meta123176 = meta123176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t123175.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t123175.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (_){
var self__ = this;
var ___$1 = this;
return "component";
});})(validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;

outliner.components.index.t123175.prototype.om$core$IRenderState$ = true;

outliner.components.index.t123175.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "yeah"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h2,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,outliner.components.index.outline_head,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,React.DOM.ol,{"className": "root"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,outliner.components.index.outline_body,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))],null))))],null))));
});})(validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;

outliner.components.index.t123175.prototype.om$core$IInitState$ = true;

outliner.components.index.t123175.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (_){
var self__ = this;
var ___$1 = this;
var key_down_chan = outliner.components.index.listen.call(null,window,"keydown");
var click_chan = cljs.core.async.chan.call(null);
var base_path = om.core.path.call(null,self__.data);
var c__22895__auto___123619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (){
var f__22896__auto__ = (function (){var switch__22874__auto__ = ((function (c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (state_123431){
var state_val_123432 = (state_123431[(1)]);
if((state_val_123432 === (65))){
var inst_123316 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123433_123620 = state_123431__$1;
(statearr_123433_123620[(2)] = inst_123316);

(statearr_123433_123620[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (70))){
var inst_123228 = (state_123431[(7)]);
var state_123431__$1 = state_123431;
var statearr_123434_123621 = state_123431__$1;
(statearr_123434_123621[(2)] = inst_123228);

(statearr_123434_123621[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (62))){
var inst_123275 = (state_123431[(8)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123275)){
var statearr_123435_123622 = state_123431__$1;
(statearr_123435_123622[(1)] = (63));

} else {
var statearr_123436_123623 = state_123431__$1;
(statearr_123436_123623[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (74))){
var inst_123228 = (state_123431[(7)]);
var inst_123226 = (state_123431[(9)]);
var inst_123246 = (state_123431[(10)]);
var inst_123194 = (state_123431[(11)]);
var inst_123189 = (state_123431[(12)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123195 = (state_123431[(19)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123334 = (function (){var up_path = inst_123267;
var current_child_idx = inst_123229;
var is_root = inst_123230;
var vec__123183 = inst_123188;
var parent_children = inst_123251;
var parent = inst_123246;
var ch123181 = inst_123190;
var G__123180 = click_chan;
var down_path = inst_123275;
var command = inst_123226;
var e = inst_123194;
var parent_path = inst_123240;
var current_path = inst_123228;
var G__123179 = key_down_chan;
var val__22904__auto__ = inst_123189;
var c = inst_123195;
var ret123182 = inst_123188;
var current = inst_123232;
var keyevent__GT_command = inst_123200;
var vec__123193 = inst_123188;
return ((function (up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (d){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current))){
return cljs.core.update_in.call(null,d,current_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359));
} else {
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"closed","closed",-919675359)),true);
}
});
;})(up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var inst_123335 = om.core.transact_BANG_.call(null,self__.data,inst_123334);
var state_123431__$1 = state_123431;
var statearr_123437_123624 = state_123431__$1;
(statearr_123437_123624[(2)] = inst_123335);

(statearr_123437_123624[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (7))){
var inst_123426 = (state_123431[(2)]);
var state_123431__$1 = (function (){var statearr_123438 = state_123431;
(statearr_123438[(23)] = inst_123426);

return statearr_123438;
})();
var statearr_123439_123625 = state_123431__$1;
(statearr_123439_123625[(2)] = null);

(statearr_123439_123625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (59))){
var inst_123228 = (state_123431[(7)]);
var inst_123226 = (state_123431[(9)]);
var inst_123246 = (state_123431[(10)]);
var inst_123194 = (state_123431[(11)]);
var inst_123189 = (state_123431[(12)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123195 = (state_123431[(19)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123299 = cljs.core.deref.call(null,self__.data);
var inst_123300 = cljs.core.get_in.call(null,inst_123299,inst_123267);
var inst_123301 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123267);
var inst_123302 = (function (){var up_path = inst_123267;
var current_child_idx = inst_123229;
var is_root = inst_123230;
var vec__123183 = inst_123188;
var parent_children = inst_123251;
var parent = inst_123246;
var ch123181 = inst_123190;
var G__123180 = click_chan;
var down_path = inst_123275;
var command = inst_123226;
var swap_node = inst_123300;
var e = inst_123194;
var parent_path = inst_123240;
var current_path = inst_123228;
var G__123179 = key_down_chan;
var val__22904__auto__ = inst_123189;
var c = inst_123195;
var ret123182 = inst_123188;
var current = inst_123232;
var keyevent__GT_command = inst_123200;
var vec__123193 = inst_123188;
return ((function (up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,swap_node,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123299,inst_123300,inst_123301,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),up_path,current);
});
;})(up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,swap_node,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123299,inst_123300,inst_123301,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var inst_123303 = om.core.transact_BANG_.call(null,self__.data,inst_123302);
var state_123431__$1 = (function (){var statearr_123440 = state_123431;
(statearr_123440[(24)] = inst_123301);

return statearr_123440;
})();
var statearr_123441_123626 = state_123431__$1;
(statearr_123441_123626[(2)] = inst_123303);

(statearr_123441_123626[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (86))){
var state_123431__$1 = state_123431;
var statearr_123442_123627 = state_123431__$1;
(statearr_123442_123627[(2)] = null);

(statearr_123442_123627[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (20))){
var state_123431__$1 = state_123431;
var statearr_123443_123628 = state_123431__$1;
(statearr_123443_123628[(2)] = new cljs.core.Keyword(null,"meta","meta",1499536964));

(statearr_123443_123628[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (72))){
var inst_123228 = (state_123431[(7)]);
var inst_123226 = (state_123431[(9)]);
var inst_123246 = (state_123431[(10)]);
var inst_123194 = (state_123431[(11)]);
var inst_123189 = (state_123431[(12)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123195 = (state_123431[(19)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123324 = (state_123431[(2)]);
var inst_123325 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123324);
var inst_123326 = (function (){var up_path = inst_123267;
var current_child_idx = inst_123229;
var is_root = inst_123230;
var vec__123183 = inst_123188;
var parent_children = inst_123251;
var parent = inst_123246;
var ch123181 = inst_123190;
var G__123180 = click_chan;
var down_path = inst_123275;
var command = inst_123226;
var e = inst_123194;
var parent_path = inst_123240;
var current_path = inst_123228;
var G__123179 = key_down_chan;
var val__22904__auto__ = inst_123189;
var c = inst_123195;
var ret123182 = inst_123188;
var current = inst_123232;
var keyevent__GT_command = inst_123200;
var vec__123193 = inst_123188;
return ((function (up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123324,inst_123325,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123324,inst_123325,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var inst_123327 = om.core.transact_BANG_.call(null,self__.data,inst_123326);
var state_123431__$1 = (function (){var statearr_123444 = state_123431;
(statearr_123444[(25)] = inst_123325);

return statearr_123444;
})();
var statearr_123445_123629 = state_123431__$1;
(statearr_123445_123629[(2)] = inst_123327);

(statearr_123445_123629[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (58))){
var inst_123267 = (state_123431[(21)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123267)){
var statearr_123446_123630 = state_123431__$1;
(statearr_123446_123630[(1)] = (59));

} else {
var statearr_123447_123631 = state_123431__$1;
(statearr_123447_123631[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (60))){
var state_123431__$1 = state_123431;
var statearr_123448_123632 = state_123431__$1;
(statearr_123448_123632[(2)] = null);

(statearr_123448_123632[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (27))){
var inst_123240 = (state_123431[(22)]);
var state_123431__$1 = state_123431;
var statearr_123449_123633 = state_123431__$1;
(statearr_123449_123633[(2)] = inst_123240);

(statearr_123449_123633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (1))){
var state_123431__$1 = state_123431;
var statearr_123450_123634 = state_123431__$1;
(statearr_123450_123634[(2)] = null);

(statearr_123450_123634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (69))){
var inst_123330 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123451_123635 = state_123431__$1;
(statearr_123451_123635[(2)] = inst_123330);

(statearr_123451_123635[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (101))){
var state_123431__$1 = state_123431;
var statearr_123452_123636 = state_123431__$1;
(statearr_123452_123636[(2)] = null);

(statearr_123452_123636[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (24))){
var inst_123233 = (state_123431[(26)]);
var state_123431__$1 = state_123431;
var statearr_123453_123637 = state_123431__$1;
(statearr_123453_123637[(2)] = inst_123233);

(statearr_123453_123637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (102))){
var inst_123401 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123454_123638 = state_123431__$1;
(statearr_123454_123638[(2)] = inst_123401);

(statearr_123454_123638[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (55))){
var inst_123229 = (state_123431[(13)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123290 = outliner.components.index.gen_left_path.call(null,inst_123229,inst_123240,inst_123267,self__.data);
var state_123431__$1 = state_123431;
var statearr_123455_123639 = state_123431__$1;
(statearr_123455_123639[(2)] = inst_123290);

(statearr_123455_123639[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (85))){
var inst_123228 = (state_123431[(7)]);
var inst_123226 = (state_123431[(9)]);
var inst_123246 = (state_123431[(10)]);
var inst_123194 = (state_123431[(11)]);
var inst_123189 = (state_123431[(12)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123195 = (state_123431[(19)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123354 = (function (){var up_path = inst_123267;
var current_child_idx = inst_123229;
var is_root = inst_123230;
var vec__123183 = inst_123188;
var parent_children = inst_123251;
var parent = inst_123246;
var ch123181 = inst_123190;
var G__123180 = click_chan;
var down_path = inst_123275;
var command = inst_123226;
var e = inst_123194;
var parent_path = inst_123240;
var current_path = inst_123228;
var G__123179 = key_down_chan;
var val__22904__auto__ = inst_123189;
var c = inst_123195;
var ret123182 = inst_123188;
var current = inst_123232;
var keyevent__GT_command = inst_123200;
var vec__123193 = inst_123188;
return ((function (up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = outliner.components.index.get_indexless.call(null,parent_path);
var destination_index = (cljs.core.last.call(null,parent_path) + (1));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,destination_children,(0),destination_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current], null),cljs.core.subvec.call(null,destination_children,destination_index)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,destination_index));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,destination_path,new_destination_children),cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var inst_123355 = om.core.transact_BANG_.call(null,self__.data,inst_123354);
var state_123431__$1 = state_123431;
var statearr_123456_123640 = state_123431__$1;
(statearr_123456_123640[(2)] = inst_123355);

(statearr_123456_123640[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (39))){
var state_123431__$1 = state_123431;
var statearr_123457_123641 = state_123431__$1;
(statearr_123457_123641[(2)] = null);

(statearr_123457_123641[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (88))){
var inst_123230 = (state_123431[(16)]);
var inst_123360 = cljs.core.not.call(null,inst_123230);
var state_123431__$1 = state_123431;
if(inst_123360){
var statearr_123458_123642 = state_123431__$1;
(statearr_123458_123642[(1)] = (89));

} else {
var statearr_123459_123643 = state_123431__$1;
(statearr_123459_123643[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (46))){
var inst_123267 = (state_123431[(21)]);
var inst_123277 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123267);
var state_123431__$1 = state_123431;
var statearr_123460_123644 = state_123431__$1;
(statearr_123460_123644[(2)] = inst_123277);

(statearr_123460_123644[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (4))){
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123188__$1 = (state_123431[(2)]);
var inst_123189 = cljs.core.nth.call(null,inst_123188__$1,(0),null);
var inst_123190__$1 = cljs.core.nth.call(null,inst_123188__$1,(1),null);
var inst_123191 = cljs.core._EQ_.call(null,inst_123190__$1,key_down_chan);
var state_123431__$1 = (function (){var statearr_123461 = state_123431;
(statearr_123461[(12)] = inst_123189);

(statearr_123461[(17)] = inst_123190__$1);

(statearr_123461[(18)] = inst_123188__$1);

return statearr_123461;
})();
if(inst_123191){
var statearr_123462_123645 = state_123431__$1;
(statearr_123462_123645[(1)] = (5));

} else {
var statearr_123463_123646 = state_123431__$1;
(statearr_123463_123646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (77))){
var inst_123267 = (state_123431[(21)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123267)){
var statearr_123464_123647 = state_123431__$1;
(statearr_123464_123647[(1)] = (78));

} else {
var statearr_123465_123648 = state_123431__$1;
(statearr_123465_123648[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (106))){
var inst_123424 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123466_123649 = state_123431__$1;
(statearr_123466_123649[(2)] = inst_123424);

(statearr_123466_123649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (95))){
var inst_123230 = (state_123431[(16)]);
var inst_123374 = cljs.core.not.call(null,inst_123230);
var state_123431__$1 = state_123431;
if(inst_123374){
var statearr_123467_123650 = state_123431__$1;
(statearr_123467_123650[(1)] = (96));

} else {
var statearr_123468_123651 = state_123431__$1;
(statearr_123468_123651[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (54))){
var inst_123228 = (state_123431[(7)]);
var state_123431__$1 = state_123431;
var statearr_123469_123652 = state_123431__$1;
(statearr_123469_123652[(2)] = inst_123228);

(statearr_123469_123652[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (92))){
var inst_123365 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var state_123431__$1 = state_123431;
var statearr_123470_123653 = state_123431__$1;
(statearr_123470_123653[(2)] = inst_123365);

(statearr_123470_123653[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (104))){
var inst_123188 = (state_123431[(18)]);
var inst_123411 = cljs.core.nth.call(null,inst_123188,(0),null);
var inst_123412 = cljs.core.nth.call(null,inst_123188,(1),null);
var inst_123413 = new cljs.core.Keyword(null,"new-path","new-path",1732999939).cljs$core$IFn$_invoke$arity$1(inst_123411);
var inst_123414 = cljs.core.count.call(null,base_path);
var inst_123415 = cljs.core.subvec.call(null,inst_123413,inst_123414);
var inst_123416 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123415);
var state_123431__$1 = (function (){var statearr_123471 = state_123431;
(statearr_123471[(27)] = inst_123412);

return statearr_123471;
})();
var statearr_123472_123654 = state_123431__$1;
(statearr_123472_123654[(2)] = inst_123416);

(statearr_123472_123654[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (15))){
var inst_123208 = (state_123431[(28)]);
var state_123431__$1 = state_123431;
var statearr_123473_123655 = state_123431__$1;
(statearr_123473_123655[(2)] = inst_123208);

(statearr_123473_123655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (48))){
var inst_123280 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123474_123656 = state_123431__$1;
(statearr_123474_123656[(2)] = inst_123280);

(statearr_123474_123656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (50))){
var inst_123275 = (state_123431[(8)]);
var inst_123283 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123275);
var state_123431__$1 = state_123431;
var statearr_123475_123657 = state_123431__$1;
(statearr_123475_123657[(2)] = inst_123283);

(statearr_123475_123657[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (75))){
var state_123431__$1 = state_123431;
var statearr_123476_123658 = state_123431__$1;
(statearr_123476_123658[(2)] = null);

(statearr_123476_123658[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (99))){
var inst_123230 = (state_123431[(16)]);
var inst_123387 = cljs.core.not.call(null,inst_123230);
var state_123431__$1 = state_123431;
if(inst_123387){
var statearr_123477_123659 = state_123431__$1;
(statearr_123477_123659[(1)] = (100));

} else {
var statearr_123478_123660 = state_123431__$1;
(statearr_123478_123660[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (21))){
var inst_123218 = (state_123431[(29)]);
var state_123431__$1 = state_123431;
var statearr_123479_123661 = state_123431__$1;
(statearr_123479_123661[(2)] = inst_123218);

(statearr_123479_123661[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (31))){
var inst_123230 = (state_123431[(16)]);
var inst_123251 = (state_123431[(2)]);
var state_123431__$1 = (function (){var statearr_123480 = state_123431;
(statearr_123480[(20)] = inst_123251);

return statearr_123480;
})();
if(cljs.core.truth_(inst_123230)){
var statearr_123481_123662 = state_123431__$1;
(statearr_123481_123662[(1)] = (32));

} else {
var statearr_123482_123663 = state_123431__$1;
(statearr_123482_123663[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (32))){
var state_123431__$1 = state_123431;
var statearr_123483_123664 = state_123431__$1;
(statearr_123483_123664[(2)] = false);

(statearr_123483_123664[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (40))){
var inst_123263 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123484_123665 = state_123431__$1;
(statearr_123484_123665[(2)] = inst_123263);

(statearr_123484_123665[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (91))){
var inst_123372 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123485_123666 = state_123431__$1;
(statearr_123485_123666[(2)] = inst_123372);

(statearr_123485_123666[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (108))){
var state_123431__$1 = state_123431;
var statearr_123486_123667 = state_123431__$1;
(statearr_123486_123667[(2)] = null);

(statearr_123486_123667[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (56))){
var inst_123292 = (state_123431[(2)]);
var inst_123293 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123292);
var state_123431__$1 = state_123431;
var statearr_123487_123668 = state_123431__$1;
(statearr_123487_123668[(2)] = inst_123293);

(statearr_123487_123668[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (33))){
var inst_123229 = (state_123431[(13)]);
var inst_123251 = (state_123431[(20)]);
var inst_123254 = (inst_123229 - (1));
var inst_123255 = cljs.core.get.call(null,inst_123251,inst_123254,false);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123255)){
var statearr_123488_123669 = state_123431__$1;
(statearr_123488_123669[(1)] = (35));

} else {
var statearr_123489_123670 = state_123431__$1;
(statearr_123489_123670[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (13))){
var inst_123194 = (state_123431[(11)]);
var inst_123208 = (state_123431[(28)]);
var inst_123207 = (state_123431[(2)]);
var inst_123208__$1 = inst_123194.altKey;
var state_123431__$1 = (function (){var statearr_123490 = state_123431;
(statearr_123490[(30)] = inst_123207);

(statearr_123490[(28)] = inst_123208__$1);

return statearr_123490;
})();
if(cljs.core.truth_(inst_123208__$1)){
var statearr_123491_123671 = state_123431__$1;
(statearr_123491_123671[(1)] = (14));

} else {
var statearr_123492_123672 = state_123431__$1;
(statearr_123492_123672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (22))){
var inst_123228 = (state_123431[(7)]);
var inst_123217 = (state_123431[(31)]);
var inst_123212 = (state_123431[(32)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123201 = (state_123431[(33)]);
var inst_123233 = (state_123431[(26)]);
var inst_123202 = (state_123431[(34)]);
var inst_123207 = (state_123431[(30)]);
var inst_123222 = (state_123431[(2)]);
var inst_123223 = [inst_123202,inst_123207,inst_123212,inst_123217,inst_123222];
var inst_123224 = (new cljs.core.PersistentVector(null,5,(5),inst_123201,inst_123223,null));
var inst_123225 = cljs.core.filter.call(null,cljs.core.identity,inst_123224);
var inst_123226 = inst_123200.call(null,inst_123225);
var inst_123227 = om.core.get_state.call(null,self__.owner);
var inst_123228__$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(inst_123227);
var inst_123229 = cljs.core.last.call(null,inst_123228__$1);
var inst_123230__$1 = cljs.core._EQ_.call(null,outliner.components.index.root_node,inst_123228__$1);
var inst_123231 = cljs.core.deref.call(null,self__.data);
var inst_123232 = cljs.core.get_in.call(null,inst_123231,inst_123228__$1);
var inst_123233__$1 = !(inst_123230__$1);
var state_123431__$1 = (function (){var statearr_123493 = state_123431;
(statearr_123493[(7)] = inst_123228__$1);

(statearr_123493[(9)] = inst_123226);

(statearr_123493[(13)] = inst_123229);

(statearr_123493[(14)] = inst_123232);

(statearr_123493[(16)] = inst_123230__$1);

(statearr_123493[(26)] = inst_123233__$1);

return statearr_123493;
})();
if(inst_123233__$1){
var statearr_123494_123673 = state_123431__$1;
(statearr_123494_123673[(1)] = (23));

} else {
var statearr_123495_123674 = state_123431__$1;
(statearr_123495_123674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (90))){
var state_123431__$1 = state_123431;
var statearr_123496_123675 = state_123431__$1;
(statearr_123496_123675[(2)] = null);

(statearr_123496_123675[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (109))){
var inst_123422 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123497_123676 = state_123431__$1;
(statearr_123497_123676[(2)] = inst_123422);

(statearr_123497_123676[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (36))){
var state_123431__$1 = state_123431;
var statearr_123498_123677 = state_123431__$1;
(statearr_123498_123677[(1)] = (38));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (41))){
var inst_123229 = (state_123431[(13)]);
var inst_123240 = (state_123431[(22)]);
var inst_123271 = (inst_123229 + (1));
var inst_123272 = cljs.core.conj.call(null,inst_123240,new cljs.core.Keyword(null,"children","children",-940561982),inst_123271);
var state_123431__$1 = state_123431;
var statearr_123500_123678 = state_123431__$1;
(statearr_123500_123678[(2)] = inst_123272);

(statearr_123500_123678[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (89))){
var inst_123362 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var inst_123363 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),inst_123362);
var state_123431__$1 = state_123431;
if(inst_123363){
var statearr_123501_123679 = state_123431__$1;
(statearr_123501_123679[(1)] = (92));

} else {
var statearr_123502_123680 = state_123431__$1;
(statearr_123502_123680[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (100))){
var inst_123228 = (state_123431[(7)]);
var inst_123226 = (state_123431[(9)]);
var inst_123246 = (state_123431[(10)]);
var inst_123194 = (state_123431[(11)]);
var inst_123189 = (state_123431[(12)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123195 = (state_123431[(19)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123389 = inst_123232.call(null,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_123390 = outliner.components.index.gen_empty_text_node.call(null);
var inst_123391 = cljs.core.conj.call(null,inst_123389,inst_123390);
var inst_123392 = cljs.core.count.call(null,inst_123391);
var inst_123393 = (inst_123392 - (1));
var inst_123394 = cljs.core.conj.call(null,inst_123228,new cljs.core.Keyword(null,"children","children",-940561982),inst_123393);
var inst_123395 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123394);
var inst_123396 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var inst_123397 = (function (){var up_path = inst_123267;
var current_children = inst_123389;
var current_child_idx = inst_123229;
var is_root = inst_123230;
var vec__123183 = inst_123188;
var new_path = inst_123394;
var parent_children = inst_123251;
var parent = inst_123246;
var new_children = inst_123391;
var ch123181 = inst_123190;
var G__123180 = click_chan;
var down_path = inst_123275;
var command = inst_123226;
var e = inst_123194;
var parent_path = inst_123240;
var current_path = inst_123228;
var G__123179 = key_down_chan;
var val__22904__auto__ = inst_123189;
var c = inst_123195;
var ret123182 = inst_123188;
var current = inst_123232;
var keyevent__GT_command = inst_123200;
var vec__123193 = inst_123188;
return ((function (up_path,current_children,current_child_idx,is_root,vec__123183,new_path,parent_children,parent,new_children,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123389,inst_123390,inst_123391,inst_123392,inst_123393,inst_123394,inst_123395,inst_123396,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (p1__122731_SHARP_){
return cljs.core.assoc_in.call(null,p1__122731_SHARP_,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_children);
});
;})(up_path,current_children,current_child_idx,is_root,vec__123183,new_path,parent_children,parent,new_children,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123389,inst_123390,inst_123391,inst_123392,inst_123393,inst_123394,inst_123395,inst_123396,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var inst_123398 = om.core.transact_BANG_.call(null,self__.data,inst_123397);
var state_123431__$1 = (function (){var statearr_123503 = state_123431;
(statearr_123503[(35)] = inst_123395);

(statearr_123503[(36)] = inst_123396);

return statearr_123503;
})();
var statearr_123504_123681 = state_123431__$1;
(statearr_123504_123681[(2)] = inst_123398);

(statearr_123504_123681[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (43))){
var inst_123226 = (state_123431[(9)]);
var inst_123275 = (state_123431[(2)]);
var state_123431__$1 = (function (){var statearr_123505 = state_123431;
(statearr_123505[(8)] = inst_123275);

return statearr_123505;
})();
var G__123506_123682 = (((inst_123226 instanceof cljs.core.Keyword))?inst_123226.fqn:null);
switch (G__123506_123682) {
case "left-shift-node":
var statearr_123507_123684 = state_123431__$1;
(statearr_123507_123684[(1)] = (81));


break;
case "node-down":
var statearr_123508_123685 = state_123431__$1;
(statearr_123508_123685[(1)] = (62));


break;
case "toggle-edit":
var statearr_123509_123686 = state_123431__$1;
(statearr_123509_123686[(1)] = (88));


break;
case "cursor-right":
var statearr_123510_123687 = state_123431__$1;
(statearr_123510_123687[(1)] = (57));


break;
case "right-shift-node":
var statearr_123511_123688 = state_123431__$1;
(statearr_123511_123688[(1)] = (77));


break;
case "toggle-closed":
var statearr_123512_123689 = state_123431__$1;
(statearr_123512_123689[(1)] = (73));


break;
case "node-up":
var statearr_123513_123690 = state_123431__$1;
(statearr_123513_123690[(1)] = (58));


break;
case "cursor-left":
var statearr_123514_123691 = state_123431__$1;
(statearr_123514_123691[(1)] = (53));


break;
case "add-new-child":
var statearr_123515_123692 = state_123431__$1;
(statearr_123515_123692[(1)] = (99));


break;
case "add-new-sibbling":
var statearr_123516_123693 = state_123431__$1;
(statearr_123516_123693[(1)] = (95));


break;
case "cursor-up":
var statearr_123517_123694 = state_123431__$1;
(statearr_123517_123694[(1)] = (45));


break;
case "cursor-down":
var statearr_123518_123695 = state_123431__$1;
(statearr_123518_123695[(1)] = (49));


break;
case "destroy-node":
var statearr_123519_123696 = state_123431__$1;
(statearr_123519_123696[(1)] = (66));


break;
default:
var statearr_123520_123697 = state_123431__$1;
(statearr_123520_123697[(1)] = (103));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (61))){
var inst_123306 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123521_123698 = state_123431__$1;
(statearr_123521_123698[(2)] = inst_123306);

(statearr_123521_123698[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (29))){
var inst_123246 = (state_123431[(10)]);
var inst_123248 = cljs.core.get.call(null,inst_123246,new cljs.core.Keyword(null,"children","children",-940561982),false);
var state_123431__$1 = state_123431;
var statearr_123522_123699 = state_123431__$1;
(statearr_123522_123699[(2)] = inst_123248);

(statearr_123522_123699[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (44))){
var inst_123406 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123523_123700 = state_123431__$1;
(statearr_123523_123700[(2)] = inst_123406);

(statearr_123523_123700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (93))){
var inst_123367 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var state_123431__$1 = state_123431;
var statearr_123524_123701 = state_123431__$1;
(statearr_123524_123701[(2)] = inst_123367);

(statearr_123524_123701[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (6))){
var inst_123190 = (state_123431[(17)]);
var inst_123408 = cljs.core._EQ_.call(null,inst_123190,click_chan);
var state_123431__$1 = state_123431;
if(inst_123408){
var statearr_123525_123702 = state_123431__$1;
(statearr_123525_123702[(1)] = (104));

} else {
var statearr_123526_123703 = state_123431__$1;
(statearr_123526_123703[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (28))){
var inst_123246 = (state_123431[(10)]);
var inst_123246__$1 = (state_123431[(2)]);
var state_123431__$1 = (function (){var statearr_123527 = state_123431;
(statearr_123527[(10)] = inst_123246__$1);

return statearr_123527;
})();
if(cljs.core.truth_(inst_123246__$1)){
var statearr_123528_123704 = state_123431__$1;
(statearr_123528_123704[(1)] = (29));

} else {
var statearr_123529_123705 = state_123431__$1;
(statearr_123529_123705[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (64))){
var state_123431__$1 = state_123431;
var statearr_123530_123706 = state_123431__$1;
(statearr_123530_123706[(2)] = null);

(statearr_123530_123706[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (103))){
var state_123431__$1 = state_123431;
var statearr_123531_123707 = state_123431__$1;
(statearr_123531_123707[(2)] = null);

(statearr_123531_123707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (51))){
var state_123431__$1 = state_123431;
var statearr_123532_123708 = state_123431__$1;
(statearr_123532_123708[(2)] = null);

(statearr_123532_123708[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (25))){
var inst_123240 = (state_123431[(22)]);
var inst_123240__$1 = (state_123431[(2)]);
var state_123431__$1 = (function (){var statearr_123533 = state_123431;
(statearr_123533[(22)] = inst_123240__$1);

return statearr_123533;
})();
if(cljs.core.truth_(inst_123240__$1)){
var statearr_123534_123709 = state_123431__$1;
(statearr_123534_123709[(1)] = (26));

} else {
var statearr_123535_123710 = state_123431__$1;
(statearr_123535_123710[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (34))){
var inst_123229 = (state_123431[(13)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(2)]);
var inst_123268 = (inst_123229 + (1));
var inst_123269 = cljs.core.get.call(null,inst_123251,inst_123268,false);
var state_123431__$1 = (function (){var statearr_123536 = state_123431;
(statearr_123536[(21)] = inst_123267);

return statearr_123536;
})();
if(cljs.core.truth_(inst_123269)){
var statearr_123537_123711 = state_123431__$1;
(statearr_123537_123711[(1)] = (41));

} else {
var statearr_123538_123712 = state_123431__$1;
(statearr_123538_123712[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (17))){
var state_123431__$1 = state_123431;
var statearr_123539_123713 = state_123431__$1;
(statearr_123539_123713[(2)] = new cljs.core.Keyword(null,"ctrl","ctrl",361402094));

(statearr_123539_123713[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (3))){
var inst_123429 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_123431__$1,inst_123429);
} else {
if((state_val_123432 === (12))){
var inst_123203 = (state_123431[(37)]);
var state_123431__$1 = state_123431;
var statearr_123540_123714 = state_123431__$1;
(statearr_123540_123714[(2)] = inst_123203);

(statearr_123540_123714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (2))){
var inst_123184 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123185 = [key_down_chan,click_chan];
var inst_123186 = (new cljs.core.PersistentVector(null,2,(5),inst_123184,inst_123185,null));
var state_123431__$1 = state_123431;
return cljs.core.async.ioc_alts_BANG_.call(null,state_123431__$1,(4),inst_123186);
} else {
if((state_val_123432 === (66))){
var inst_123230 = (state_123431[(16)]);
var inst_123318 = cljs.core.not.call(null,inst_123230);
var state_123431__$1 = state_123431;
if(inst_123318){
var statearr_123541_123715 = state_123431__$1;
(statearr_123541_123715[(1)] = (67));

} else {
var statearr_123542_123716 = state_123431__$1;
(statearr_123542_123716[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (107))){
var inst_123189 = (state_123431[(12)]);
var state_123431__$1 = state_123431;
var statearr_123543_123717 = state_123431__$1;
(statearr_123543_123717[(2)] = inst_123189);

(statearr_123543_123717[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (23))){
var inst_123228 = (state_123431[(7)]);
var inst_123235 = cljs.core.count.call(null,inst_123228);
var inst_123236 = (inst_123235 - (2));
var inst_123237 = cljs.core.subvec.call(null,inst_123228,(0),inst_123236);
var state_123431__$1 = state_123431;
var statearr_123544_123718 = state_123431__$1;
(statearr_123544_123718[(2)] = inst_123237);

(statearr_123544_123718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (47))){
var state_123431__$1 = state_123431;
var statearr_123545_123719 = state_123431__$1;
(statearr_123545_123719[(2)] = null);

(statearr_123545_123719[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (35))){
var inst_123229 = (state_123431[(13)]);
var inst_123240 = (state_123431[(22)]);
var inst_123257 = (inst_123229 - (1));
var inst_123258 = cljs.core.conj.call(null,inst_123240,new cljs.core.Keyword(null,"children","children",-940561982),inst_123257);
var state_123431__$1 = state_123431;
var statearr_123546_123720 = state_123431__$1;
(statearr_123546_123720[(2)] = inst_123258);

(statearr_123546_123720[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (82))){
var inst_123240 = (state_123431[(22)]);
var inst_123348 = cljs.core._EQ_.call(null,inst_123240,outliner.components.index.root_node);
var inst_123349 = !(inst_123348);
var state_123431__$1 = state_123431;
var statearr_123547_123721 = state_123431__$1;
(statearr_123547_123721[(2)] = inst_123349);

(statearr_123547_123721[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (76))){
var inst_123338 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123548_123722 = state_123431__$1;
(statearr_123548_123722[(2)] = inst_123338);

(statearr_123548_123722[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (97))){
var state_123431__$1 = state_123431;
var statearr_123549_123723 = state_123431__$1;
(statearr_123549_123723[(2)] = null);

(statearr_123549_123723[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (19))){
var inst_123194 = (state_123431[(11)]);
var inst_123218 = (state_123431[(29)]);
var inst_123217 = (state_123431[(2)]);
var inst_123218__$1 = inst_123194.metaKey;
var state_123431__$1 = (function (){var statearr_123550 = state_123431;
(statearr_123550[(31)] = inst_123217);

(statearr_123550[(29)] = inst_123218__$1);

return statearr_123550;
})();
if(cljs.core.truth_(inst_123218__$1)){
var statearr_123551_123724 = state_123431__$1;
(statearr_123551_123724[(1)] = (20));

} else {
var statearr_123552_123725 = state_123431__$1;
(statearr_123552_123725[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (57))){
var inst_123228 = (state_123431[(7)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123251 = (state_123431[(20)]);
var inst_123240 = (state_123431[(22)]);
var inst_123295 = outliner.components.index.gen_right_path.call(null,inst_123228,inst_123232,inst_123229,inst_123240,inst_123251,inst_123275,self__.data);
var inst_123296 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123295);
var state_123431__$1 = state_123431;
var statearr_123553_123726 = state_123431__$1;
(statearr_123553_123726[(2)] = inst_123296);

(statearr_123553_123726[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (68))){
var state_123431__$1 = state_123431;
var statearr_123554_123727 = state_123431__$1;
(statearr_123554_123727[(2)] = null);

(statearr_123554_123727[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (11))){
var state_123431__$1 = state_123431;
var statearr_123555_123728 = state_123431__$1;
(statearr_123555_123728[(2)] = new cljs.core.Keyword(null,"shift","shift",997140064));

(statearr_123555_123728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (9))){
var state_123431__$1 = state_123431;
var statearr_123556_123729 = state_123431__$1;
(statearr_123556_123729[(2)] = outliner.components.index.edit_keymap);

(statearr_123556_123729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (5))){
var inst_123188 = (state_123431[(18)]);
var inst_123194 = cljs.core.nth.call(null,inst_123188,(0),null);
var inst_123195 = cljs.core.nth.call(null,inst_123188,(1),null);
var inst_123198 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_123431__$1 = (function (){var statearr_123557 = state_123431;
(statearr_123557[(11)] = inst_123194);

(statearr_123557[(19)] = inst_123195);

return statearr_123557;
})();
var G__123558_123730 = (((inst_123198 instanceof cljs.core.Keyword))?inst_123198.fqn:null);
switch (G__123558_123730) {
case "editing":
var statearr_123559_123732 = state_123431__$1;
(statearr_123559_123732[(1)] = (9));


break;
default:
var statearr_123560_123733 = state_123431__$1;
(statearr_123560_123733[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (83))){
var inst_123240 = (state_123431[(22)]);
var state_123431__$1 = state_123431;
var statearr_123561_123734 = state_123431__$1;
(statearr_123561_123734[(2)] = inst_123240);

(statearr_123561_123734[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (14))){
var state_123431__$1 = state_123431;
var statearr_123562_123735 = state_123431__$1;
(statearr_123562_123735[(2)] = new cljs.core.Keyword(null,"alt","alt",-3214426));

(statearr_123562_123735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (45))){
var inst_123267 = (state_123431[(21)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123267)){
var statearr_123563_123736 = state_123431__$1;
(statearr_123563_123736[(1)] = (46));

} else {
var statearr_123564_123737 = state_123431__$1;
(statearr_123564_123737[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (53))){
var inst_123230 = (state_123431[(16)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123230)){
var statearr_123565_123738 = state_123431__$1;
(statearr_123565_123738[(1)] = (54));

} else {
var statearr_123566_123739 = state_123431__$1;
(statearr_123566_123739[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (78))){
var inst_123228 = (state_123431[(7)]);
var inst_123226 = (state_123431[(9)]);
var inst_123246 = (state_123431[(10)]);
var inst_123194 = (state_123431[(11)]);
var inst_123189 = (state_123431[(12)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123195 = (state_123431[(19)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123341 = (function (){var up_path = inst_123267;
var current_child_idx = inst_123229;
var is_root = inst_123230;
var vec__123183 = inst_123188;
var parent_children = inst_123251;
var parent = inst_123246;
var ch123181 = inst_123190;
var G__123180 = click_chan;
var down_path = inst_123275;
var command = inst_123226;
var e = inst_123194;
var parent_path = inst_123240;
var current_path = inst_123228;
var G__123179 = key_down_chan;
var val__22904__auto__ = inst_123189;
var c = inst_123195;
var ret123182 = inst_123188;
var current = inst_123232;
var keyevent__GT_command = inst_123200;
var vec__123193 = inst_123188;
return ((function (up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = cljs.core.conj.call(null,up_path,new cljs.core.Keyword(null,"children","children",-940561982));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.conj.call(null,destination_children,current);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,(cljs.core.count.call(null,new_destination_children) - (1))));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children),up_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359)),destination_path,new_destination_children);
});
;})(up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var inst_123342 = om.core.transact_BANG_.call(null,self__.data,inst_123341);
var state_123431__$1 = state_123431;
var statearr_123567_123740 = state_123431__$1;
(statearr_123567_123740[(2)] = inst_123342);

(statearr_123567_123740[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (26))){
var inst_123240 = (state_123431[(22)]);
var inst_123242 = cljs.core.deref.call(null,self__.data);
var inst_123243 = cljs.core.get_in.call(null,inst_123242,inst_123240);
var state_123431__$1 = state_123431;
var statearr_123568_123741 = state_123431__$1;
(statearr_123568_123741[(2)] = inst_123243);

(statearr_123568_123741[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (16))){
var inst_123194 = (state_123431[(11)]);
var inst_123213 = (state_123431[(38)]);
var inst_123212 = (state_123431[(2)]);
var inst_123213__$1 = inst_123194.ctrlKey;
var state_123431__$1 = (function (){var statearr_123569 = state_123431;
(statearr_123569[(32)] = inst_123212);

(statearr_123569[(38)] = inst_123213__$1);

return statearr_123569;
})();
if(cljs.core.truth_(inst_123213__$1)){
var statearr_123570_123742 = state_123431__$1;
(statearr_123570_123742[(1)] = (17));

} else {
var statearr_123571_123743 = state_123431__$1;
(statearr_123571_123743[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (81))){
var inst_123240 = (state_123431[(22)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123240)){
var statearr_123572_123744 = state_123431__$1;
(statearr_123572_123744[(1)] = (82));

} else {
var statearr_123573_123745 = state_123431__$1;
(statearr_123573_123745[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (79))){
var state_123431__$1 = state_123431;
var statearr_123574_123746 = state_123431__$1;
(statearr_123574_123746[(2)] = null);

(statearr_123574_123746[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (38))){
var state_123431__$1 = state_123431;
var statearr_123575_123747 = state_123431__$1;
(statearr_123575_123747[(2)] = false);

(statearr_123575_123747[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (98))){
var inst_123385 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123576_123748 = state_123431__$1;
(statearr_123576_123748[(2)] = inst_123385);

(statearr_123576_123748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (87))){
var inst_123358 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123577_123749 = state_123431__$1;
(statearr_123577_123749[(2)] = inst_123358);

(statearr_123577_123749[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (30))){
var inst_123246 = (state_123431[(10)]);
var state_123431__$1 = state_123431;
var statearr_123578_123750 = state_123431__$1;
(statearr_123578_123750[(2)] = inst_123246);

(statearr_123578_123750[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (73))){
var inst_123230 = (state_123431[(16)]);
var inst_123332 = cljs.core.not.call(null,inst_123230);
var state_123431__$1 = state_123431;
if(inst_123332){
var statearr_123579_123751 = state_123431__$1;
(statearr_123579_123751[(1)] = (74));

} else {
var statearr_123580_123752 = state_123431__$1;
(statearr_123580_123752[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (96))){
var inst_123228 = (state_123431[(7)]);
var inst_123226 = (state_123431[(9)]);
var inst_123246 = (state_123431[(10)]);
var inst_123194 = (state_123431[(11)]);
var inst_123189 = (state_123431[(12)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123195 = (state_123431[(19)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123376 = outliner.components.index.add_node_to_parent.call(null,inst_123251,inst_123229);
var inst_123377 = (inst_123229 + (1));
var inst_123378 = cljs.core.conj.call(null,inst_123240,new cljs.core.Keyword(null,"children","children",-940561982),inst_123377);
var inst_123379 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123378);
var inst_123380 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var inst_123381 = (function (){var up_path = inst_123267;
var current_child_idx = inst_123229;
var new_sibblings = inst_123376;
var is_root = inst_123230;
var vec__123183 = inst_123188;
var new_path = inst_123378;
var parent_children = inst_123251;
var parent = inst_123246;
var ch123181 = inst_123190;
var G__123180 = click_chan;
var down_path = inst_123275;
var command = inst_123226;
var e = inst_123194;
var parent_path = inst_123240;
var current_path = inst_123228;
var G__123179 = key_down_chan;
var val__22904__auto__ = inst_123189;
var c = inst_123195;
var ret123182 = inst_123188;
var current = inst_123232;
var keyevent__GT_command = inst_123200;
var vec__123193 = inst_123188;
return ((function (up_path,current_child_idx,new_sibblings,is_root,vec__123183,new_path,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123376,inst_123377,inst_123378,inst_123379,inst_123380,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (p1__122730_SHARP_){
return cljs.core.assoc_in.call(null,p1__122730_SHARP_,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_sibblings);
});
;})(up_path,current_child_idx,new_sibblings,is_root,vec__123183,new_path,parent_children,parent,ch123181,G__123180,down_path,command,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123376,inst_123377,inst_123378,inst_123379,inst_123380,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var inst_123382 = om.core.transact_BANG_.call(null,self__.data,inst_123381);
var state_123431__$1 = (function (){var statearr_123581 = state_123431;
(statearr_123581[(39)] = inst_123380);

(statearr_123581[(40)] = inst_123379);

return statearr_123581;
})();
var statearr_123582_123753 = state_123431__$1;
(statearr_123582_123753[(2)] = inst_123382);

(statearr_123582_123753[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (10))){
var state_123431__$1 = state_123431;
var statearr_123583_123754 = state_123431__$1;
(statearr_123583_123754[(2)] = outliner.components.index.normal_keymap);

(statearr_123583_123754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (18))){
var inst_123213 = (state_123431[(38)]);
var state_123431__$1 = state_123431;
var statearr_123584_123755 = state_123431__$1;
(statearr_123584_123755[(2)] = inst_123213);

(statearr_123584_123755[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (105))){
var inst_123190 = (state_123431[(17)]);
var inst_123418 = cljs.core._EQ_.call(null,inst_123190,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_123431__$1 = state_123431;
if(inst_123418){
var statearr_123585_123756 = state_123431__$1;
(statearr_123585_123756[(1)] = (107));

} else {
var statearr_123586_123757 = state_123431__$1;
(statearr_123586_123757[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (52))){
var inst_123286 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123587_123758 = state_123431__$1;
(statearr_123587_123758[(2)] = inst_123286);

(statearr_123587_123758[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (67))){
var inst_123230 = (state_123431[(16)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123230)){
var statearr_123588_123759 = state_123431__$1;
(statearr_123588_123759[(1)] = (70));

} else {
var statearr_123589_123760 = state_123431__$1;
(statearr_123589_123760[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (71))){
var inst_123229 = (state_123431[(13)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123322 = outliner.components.index.gen_left_path.call(null,inst_123229,inst_123240,inst_123267,self__.data);
var state_123431__$1 = state_123431;
var statearr_123590_123761 = state_123431__$1;
(statearr_123590_123761[(2)] = inst_123322);

(statearr_123590_123761[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (42))){
var state_123431__$1 = state_123431;
var statearr_123591_123762 = state_123431__$1;
(statearr_123591_123762[(2)] = false);

(statearr_123591_123762[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (80))){
var inst_123345 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123592_123763 = state_123431__$1;
(statearr_123592_123763[(2)] = inst_123345);

(statearr_123592_123763[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (37))){
var inst_123265 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123593_123764 = state_123431__$1;
(statearr_123593_123764[(2)] = inst_123265);

(statearr_123593_123764[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (63))){
var inst_123228 = (state_123431[(7)]);
var inst_123226 = (state_123431[(9)]);
var inst_123246 = (state_123431[(10)]);
var inst_123194 = (state_123431[(11)]);
var inst_123189 = (state_123431[(12)]);
var inst_123229 = (state_123431[(13)]);
var inst_123275 = (state_123431[(8)]);
var inst_123232 = (state_123431[(14)]);
var inst_123200 = (state_123431[(15)]);
var inst_123230 = (state_123431[(16)]);
var inst_123190 = (state_123431[(17)]);
var inst_123188 = (state_123431[(18)]);
var inst_123195 = (state_123431[(19)]);
var inst_123251 = (state_123431[(20)]);
var inst_123267 = (state_123431[(21)]);
var inst_123240 = (state_123431[(22)]);
var inst_123309 = cljs.core.deref.call(null,self__.data);
var inst_123310 = cljs.core.get_in.call(null,inst_123309,inst_123275);
var inst_123311 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_123275);
var inst_123312 = (function (){var up_path = inst_123267;
var current_child_idx = inst_123229;
var is_root = inst_123230;
var vec__123183 = inst_123188;
var parent_children = inst_123251;
var parent = inst_123246;
var ch123181 = inst_123190;
var G__123180 = click_chan;
var down_path = inst_123275;
var command = inst_123226;
var swap_node = inst_123310;
var e = inst_123194;
var parent_path = inst_123240;
var current_path = inst_123228;
var G__123179 = key_down_chan;
var val__22904__auto__ = inst_123189;
var c = inst_123195;
var ret123182 = inst_123188;
var current = inst_123232;
var keyevent__GT_command = inst_123200;
var vec__123193 = inst_123188;
return ((function (up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,swap_node,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123309,inst_123310,inst_123311,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),down_path,current);
});
;})(up_path,current_child_idx,is_root,vec__123183,parent_children,parent,ch123181,G__123180,down_path,command,swap_node,e,parent_path,current_path,G__123179,val__22904__auto__,c,ret123182,current,keyevent__GT_command,vec__123193,inst_123228,inst_123226,inst_123246,inst_123194,inst_123189,inst_123229,inst_123275,inst_123232,inst_123200,inst_123230,inst_123190,inst_123188,inst_123195,inst_123251,inst_123267,inst_123240,inst_123309,inst_123310,inst_123311,state_val_123432,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var inst_123313 = om.core.transact_BANG_.call(null,self__.data,inst_123312);
var state_123431__$1 = (function (){var statearr_123594 = state_123431;
(statearr_123594[(41)] = inst_123311);

return statearr_123594;
})();
var statearr_123595_123765 = state_123431__$1;
(statearr_123595_123765[(2)] = inst_123313);

(statearr_123595_123765[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (94))){
var inst_123369 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
var statearr_123596_123766 = state_123431__$1;
(statearr_123596_123766[(2)] = inst_123369);

(statearr_123596_123766[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (8))){
var inst_123194 = (state_123431[(11)]);
var inst_123203 = (state_123431[(37)]);
var inst_123200 = (state_123431[(2)]);
var inst_123201 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123202 = inst_123194.keyCode;
var inst_123203__$1 = inst_123194.shiftKey;
var state_123431__$1 = (function (){var statearr_123597 = state_123431;
(statearr_123597[(37)] = inst_123203__$1);

(statearr_123597[(15)] = inst_123200);

(statearr_123597[(33)] = inst_123201);

(statearr_123597[(34)] = inst_123202);

return statearr_123597;
})();
if(cljs.core.truth_(inst_123203__$1)){
var statearr_123598_123767 = state_123431__$1;
(statearr_123598_123767[(1)] = (11));

} else {
var statearr_123599_123768 = state_123431__$1;
(statearr_123599_123768[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (49))){
var inst_123275 = (state_123431[(8)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123275)){
var statearr_123600_123769 = state_123431__$1;
(statearr_123600_123769[(1)] = (50));

} else {
var statearr_123601_123770 = state_123431__$1;
(statearr_123601_123770[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123432 === (84))){
var inst_123352 = (state_123431[(2)]);
var state_123431__$1 = state_123431;
if(cljs.core.truth_(inst_123352)){
var statearr_123602_123771 = state_123431__$1;
(statearr_123602_123771[(1)] = (85));

} else {
var statearr_123603_123772 = state_123431__$1;
(statearr_123603_123772[(1)] = (86));

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
});})(c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;
return ((function (switch__22874__auto__,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function() {
var outliner$components$index$component_$_state_machine__22875__auto__ = null;
var outliner$components$index$component_$_state_machine__22875__auto____0 = (function (){
var statearr_123607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_123607[(0)] = outliner$components$index$component_$_state_machine__22875__auto__);

(statearr_123607[(1)] = (1));

return statearr_123607;
});
var outliner$components$index$component_$_state_machine__22875__auto____1 = (function (state_123431){
while(true){
var ret_value__22876__auto__ = (function (){try{while(true){
var result__22877__auto__ = switch__22874__auto__.call(null,state_123431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22877__auto__;
}
break;
}
}catch (e123608){if((e123608 instanceof Object)){
var ex__22878__auto__ = e123608;
var statearr_123609_123773 = state_123431;
(statearr_123609_123773[(5)] = ex__22878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_123431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123774 = state_123431;
state_123431 = G__123774;
continue;
} else {
return ret_value__22876__auto__;
}
break;
}
});
outliner$components$index$component_$_state_machine__22875__auto__ = function(state_123431){
switch(arguments.length){
case 0:
return outliner$components$index$component_$_state_machine__22875__auto____0.call(this);
case 1:
return outliner$components$index$component_$_state_machine__22875__auto____1.call(this,state_123431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$component_$_state_machine__22875__auto__.cljs$core$IFn$_invoke$arity$0 = outliner$components$index$component_$_state_machine__22875__auto____0;
outliner$components$index$component_$_state_machine__22875__auto__.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$component_$_state_machine__22875__auto____1;
return outliner$components$index$component_$_state_machine__22875__auto__;
})()
;})(switch__22874__auto__,c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
})();
var state__22897__auto__ = (function (){var statearr_123610 = f__22896__auto__.call(null);
(statearr_123610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22895__auto___123619);

return statearr_123610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22897__auto__);
});})(c__22895__auto___123619,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
);


return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),outliner.components.index.root_node,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null);
});})(validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;

outliner.components.index.t123175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (_123177){
var self__ = this;
var _123177__$1 = this;
return self__.meta123176;
});})(validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;

outliner.components.index.t123175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (_123177,meta123176__$1){
var self__ = this;
var _123177__$1 = this;
return (new outliner.components.index.t123175(self__.output_checker122736,self__.G__122737,self__.G__122738,self__.owner,self__.input_schema122734,self__.data,self__.component,self__.validate__20245__auto__,self__.input_checker122735,self__.output_schema122733,self__.ufv__,meta123176__$1));
});})(validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;

outliner.components.index.t123175.cljs$lang$type = true;

outliner.components.index.t123175.cljs$lang$ctorStr = "outliner.components.index/t123175";

outliner.components.index.t123175.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t123175");
});})(validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;

outliner.components.index.__GT_t123175 = ((function (validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615){
return (function outliner$components$index$component_$___GT_t123175(output_checker122736__$1,G__122737__$1,G__122738__$1,owner__$1,input_schema122734__$1,data__$1,component__$1,validate__20245__auto____$1,input_checker122735__$1,output_schema122733__$1,ufv____$1,meta123176){
return (new outliner.components.index.t123175(output_checker122736__$1,G__122737__$1,G__122738__$1,owner__$1,input_schema122734__$1,data__$1,component__$1,validate__20245__auto____$1,input_checker122735__$1,output_schema122733__$1,ufv____$1,meta123176));
});})(validate__20245__auto__,ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;

}

return (new outliner.components.index.t123175(output_checker122736_123615,G__122737,G__122738,owner,input_schema122734_123613,data,outliner$components$index$component,validate__20245__auto__,input_checker122735_123614,output_schema122733_123612,ufv___123611,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___123775 = output_checker122736_123615.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___123775)){
var error__20247__auto___123776 = temp__4126__auto___123775;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20247__auto___123776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___123776,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema122733_123612,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___123611,output_schema122733_123612,input_schema122734_123613,input_checker122735_123614,output_checker122736_123615))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.component),schema.core.make_fn_schema.call(null,output_schema122733_123612,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema122734_123613], null)));

outliner.components.index.__GT_component = (function() {
var outliner$components$index$__GT_component = null;
var outliner$components$index$__GT_component__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.component,cursor__22978__auto__);
});
var outliner$components$index$__GT_component__2 = (function (cursor__22978__auto__,m122732){
return om.core.build.call(null,outliner.components.index.component,cursor__22978__auto__,m122732);
});
outliner$components$index$__GT_component = function(cursor__22978__auto__,m122732){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_component__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_component__2.call(this,cursor__22978__auto__,m122732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_component__1;
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_component__2;
return outliner$components$index$__GT_component;
})()
;

//# sourceMappingURL=index.js.map?rel=1427868933765