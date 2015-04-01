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
return cljs.core.into.call(null,cljs.core.subvec.call(null,parent_children,(0),current_child_idx),cljs.core.subvec.call(null,parent_children,(current_child_idx + (1))));
});
outliner.components.index.add_node_to_parent = (function outliner$components$index$add_node_to_parent(parent_children,current_child_idx){
if(cljs.core.empty_QMARK_.call(null,parent_children)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [outliner.components.index.gen_empty_text_node.call(null)], null);
} else {
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,parent_children,(0),(current_child_idx + (1))),outliner.components.index.gen_empty_text_node.call(null)),cljs.core.subvec.call(null,parent_children,(current_child_idx + (1))));
}
});
outliner.components.index.normal_keymap = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),new cljs.core.Keyword(null,"shift","shift",997140064)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),new cljs.core.Keyword(null,"shift","shift",997140064)], null)],[new cljs.core.Keyword(null,"add-new-sibbling","add-new-sibbling",81995544),new cljs.core.Keyword(null,"node-down","node-down",-217393565),new cljs.core.Keyword(null,"right-shift-node","right-shift-node",-1851094135),new cljs.core.Keyword(null,"cursor-up","cursor-up",-1902830020),new cljs.core.Keyword(null,"cursor-down","cursor-down",-261386401),new cljs.core.Keyword(null,"add-new-child","add-new-child",-2145986926),new cljs.core.Keyword(null,"node-up","node-up",-1444087570),new cljs.core.Keyword(null,"destroy-node","destroy-node",-1501394977),new cljs.core.Keyword(null,"cursor-left","cursor-left",-1993752625),new cljs.core.Keyword(null,"toggle-closed","toggle-closed",-1634014707),new cljs.core.Keyword(null,"toggle-edit","toggle-edit",750646855),new cljs.core.Keyword(null,"right-shift-node","right-shift-node",-1851094135),new cljs.core.Keyword(null,"cursor-right","cursor-right",-25128121),new cljs.core.Keyword(null,"destroy-node","destroy-node",-1501394977),new cljs.core.Keyword(null,"left-shift-node","left-shift-node",-2097301469),new cljs.core.Keyword(null,"left-shift-node","left-shift-node",-2097301469)]);
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
var G__125987 = cljs.core.conj.call(null,p,new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.count.call(null,children) - (1)));
p = G__125987;
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
var G__125988 = outliner.components.index.get_parent.call(null,p);
p = G__125988;
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

var ufv___126002 = schema.utils.use_fn_validation;
var output_schema125990_126003 = schema.core.Any;
var input_schema125991_126004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"head","head",869147608,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker125992_126005 = schema.core.checker.call(null,input_schema125991_126004);
var output_checker125993_126006 = schema.core.checker.call(null,output_schema125990_126003);
/**
 * Inputs: [head owner]
 */
outliner.components.index.outline_head = ((function (ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006){
return (function outliner$components$index$outline_head(G__125994,G__125995){
var validate__20245__auto__ = ufv___126002.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___126007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__125994,G__125995], null);
var temp__4126__auto___126008 = input_checker125992_126005.call(null,args__20246__auto___126007);
if(cljs.core.truth_(temp__4126__auto___126008)){
var error__20247__auto___126009 = temp__4126__auto___126008;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20247__auto___126009)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___126009,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___126007,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema125991_126004,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var head = G__125994;
var owner = G__125995;
while(true){
if(typeof outliner.components.index.t125999 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t125999 = (function (owner,G__125995,input_checker125992,outline_head,input_schema125991,validate__20245__auto__,G__125994,head,output_checker125993,output_schema125990,ufv__,meta126000){
this.owner = owner;
this.G__125995 = G__125995;
this.input_checker125992 = input_checker125992;
this.outline_head = outline_head;
this.input_schema125991 = input_schema125991;
this.validate__20245__auto__ = validate__20245__auto__;
this.G__125994 = G__125994;
this.head = head;
this.output_checker125993 = output_checker125993;
this.output_schema125990 = output_schema125990;
this.ufv__ = ufv__;
this.meta126000 = meta126000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t125999.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t125999.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-head";
});})(validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006))
;

outliner.components.index.t125999.prototype.om$core$IRender$ = true;

outliner.components.index.t125999.prototype.om$core$IRender$render$arity$1 = ((function (validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.h1,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.head)],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h2,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(self__.head)],null))))],null)));
});})(validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006))
;

outliner.components.index.t125999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006){
return (function (_126001){
var self__ = this;
var _126001__$1 = this;
return self__.meta126000;
});})(validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006))
;

outliner.components.index.t125999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006){
return (function (_126001,meta126000__$1){
var self__ = this;
var _126001__$1 = this;
return (new outliner.components.index.t125999(self__.owner,self__.G__125995,self__.input_checker125992,self__.outline_head,self__.input_schema125991,self__.validate__20245__auto__,self__.G__125994,self__.head,self__.output_checker125993,self__.output_schema125990,self__.ufv__,meta126000__$1));
});})(validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006))
;

outliner.components.index.t125999.cljs$lang$type = true;

outliner.components.index.t125999.cljs$lang$ctorStr = "outliner.components.index/t125999";

outliner.components.index.t125999.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t125999");
});})(validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006))
;

outliner.components.index.__GT_t125999 = ((function (validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006){
return (function outliner$components$index$outline_head_$___GT_t125999(owner__$1,G__125995__$1,input_checker125992__$1,outline_head__$1,input_schema125991__$1,validate__20245__auto____$1,G__125994__$1,head__$1,output_checker125993__$1,output_schema125990__$1,ufv____$1,meta126000){
return (new outliner.components.index.t125999(owner__$1,G__125995__$1,input_checker125992__$1,outline_head__$1,input_schema125991__$1,validate__20245__auto____$1,G__125994__$1,head__$1,output_checker125993__$1,output_schema125990__$1,ufv____$1,meta126000));
});})(validate__20245__auto__,ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006))
;

}

return (new outliner.components.index.t125999(owner,G__125995,input_checker125992_126005,outliner$components$index$outline_head,input_schema125991_126004,validate__20245__auto__,G__125994,head,output_checker125993_126006,output_schema125990_126003,ufv___126002,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___126010 = output_checker125993_126006.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___126010)){
var error__20247__auto___126011 = temp__4126__auto___126010;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20247__auto___126011)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___126011,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema125990_126003,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___126002,output_schema125990_126003,input_schema125991_126004,input_checker125992_126005,output_checker125993_126006))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_head),schema.core.make_fn_schema.call(null,output_schema125990_126003,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema125991_126004], null)));

outliner.components.index.__GT_outline_head = (function() {
var outliner$components$index$__GT_outline_head = null;
var outliner$components$index$__GT_outline_head__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22978__auto__);
});
var outliner$components$index$__GT_outline_head__2 = (function (cursor__22978__auto__,m125989){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22978__auto__,m125989);
});
outliner$components$index$__GT_outline_head = function(cursor__22978__auto__,m125989){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_head__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_outline_head__2.call(this,cursor__22978__auto__,m125989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_head__1;
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_head__2;
return outliner$components$index$__GT_outline_head;
})()
;

var ufv___126031 = schema.utils.use_fn_validation;
var output_schema126013_126032 = schema.core.Any;
var input_schema126014_126033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"node","node",-2073234571,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker126015_126034 = schema.core.checker.call(null,input_schema126014_126033);
var output_checker126016_126035 = schema.core.checker.call(null,output_schema126013_126032);
/**
 * Inputs: [node owner]
 */
outliner.components.index.outline_body = ((function (ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function outliner$components$index$outline_body(G__126017,G__126018){
var validate__20245__auto__ = ufv___126031.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___126036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__126017,G__126018], null);
var temp__4126__auto___126037 = input_checker126015_126034.call(null,args__20246__auto___126036);
if(cljs.core.truth_(temp__4126__auto___126037)){
var error__20247__auto___126038 = temp__4126__auto___126037;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20247__auto___126038)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___126038,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___126036,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema126014_126033,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var node = G__126017;
var owner = G__126018;
while(true){
if(typeof outliner.components.index.t126025 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t126025 = (function (output_checker126016,owner,output_schema126013,input_schema126014,input_checker126015,node,validate__20245__auto__,G__126018,G__126017,outline_body,ufv__,meta126026){
this.output_checker126016 = output_checker126016;
this.owner = owner;
this.output_schema126013 = output_schema126013;
this.input_schema126014 = input_schema126014;
this.input_checker126015 = input_checker126015;
this.node = node;
this.validate__20245__auto__ = validate__20245__auto__;
this.G__126018 = G__126018;
this.G__126017 = G__126017;
this.outline_body = outline_body;
this.ufv__ = ufv__;
this.meta126026 = meta126026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t126025.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t126025.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-body";
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

outliner.components.index.t126025.prototype.om$core$IWillUnmount$ = true;

outliner.components.index.t126025.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
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
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

outliner.components.index.t126025.prototype.om$core$IDidUpdate$ = true;

outliner.components.index.t126025.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__126028 = om.core.get_state.call(null,self__.owner);
var map__126028__$1 = ((cljs.core.seq_QMARK_.call(null,map__126028))?cljs.core.apply.call(null,cljs.core.hash_map,map__126028):map__126028);
var editor_ref = cljs.core.get.call(null,map__126028__$1,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
var selected = cljs.core.get.call(null,map__126028__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__126028__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var mode = cljs.core.get.call(null,map__126028__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
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
return om.core.transact_BANG_.call(null,self__.node,((function (map__126028,map__126028__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (d){
var new_txt = (om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).serialize()["element-0"]["value"]);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).destroy();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),null);

return cljs.core.assoc_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_txt);
});})(map__126028,map__126028__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
);
} else {
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);

}
}
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

outliner.components.index.t126025.prototype.om$core$IDidMount$ = true;

outliner.components.index.t126025.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616),true);
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

outliner.components.index.t126025.prototype.om$core$IRenderState$ = true;

outliner.components.index.t126025.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (_,p__126029){
var self__ = this;
var map__126030 = p__126029;
var map__126030__$1 = ((cljs.core.seq_QMARK_.call(null,map__126030))?cljs.core.apply.call(null,cljs.core.hash_map,map__126030):map__126030);
var state = map__126030__$1;
var mode = cljs.core.get.call(null,map__126030__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var click_chan = cljs.core.get.call(null,map__126030__$1,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512));
var selected = cljs.core.get.call(null,map__126030__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__126030__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))?"closed":"open")),cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,om.core.path.call(null,self__.node),cljs.core.concat.call(null,base_path,selected)))?"selected":""))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node)))?React.DOM.p({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__126030,map__126030__$1,state,mode,click_chan,selected,base_path,validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (e){
e.stopPropagation();

e.preventDefault();

return cljs.core.async.put_BANG_.call(null,click_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-path","new-path",1732999939),om.core.path.call(null,self__.node)], null));
});})(___$1,map__126030,map__126030__$1,state,mode,click_chan,selected,base_path,validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
), "dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node))}, "ref": "txt", "className": "txt"},null):null),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))))?om_tools.dom.element.call(null,React.DOM.ol,om.core.build_all.call(null,self__.outline_body,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"mode","mode",654403691),mode], null)], null)),cljs.core.PersistentVector.EMPTY):null)],null))));
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

outliner.components.index.t126025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (_126027){
var self__ = this;
var _126027__$1 = this;
return self__.meta126026;
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

outliner.components.index.t126025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (_126027,meta126026__$1){
var self__ = this;
var _126027__$1 = this;
return (new outliner.components.index.t126025(self__.output_checker126016,self__.owner,self__.output_schema126013,self__.input_schema126014,self__.input_checker126015,self__.node,self__.validate__20245__auto__,self__.G__126018,self__.G__126017,self__.outline_body,self__.ufv__,meta126026__$1));
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

outliner.components.index.t126025.cljs$lang$type = true;

outliner.components.index.t126025.cljs$lang$ctorStr = "outliner.components.index/t126025";

outliner.components.index.t126025.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t126025");
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

outliner.components.index.__GT_t126025 = ((function (validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035){
return (function outliner$components$index$outline_body_$___GT_t126025(output_checker126016__$1,owner__$1,output_schema126013__$1,input_schema126014__$1,input_checker126015__$1,node__$1,validate__20245__auto____$1,G__126018__$1,G__126017__$1,outline_body__$1,ufv____$1,meta126026){
return (new outliner.components.index.t126025(output_checker126016__$1,owner__$1,output_schema126013__$1,input_schema126014__$1,input_checker126015__$1,node__$1,validate__20245__auto____$1,G__126018__$1,G__126017__$1,outline_body__$1,ufv____$1,meta126026));
});})(validate__20245__auto__,ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

}

return (new outliner.components.index.t126025(output_checker126016_126035,owner,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,node,validate__20245__auto__,G__126018,G__126017,outliner$components$index$outline_body,ufv___126031,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___126039 = output_checker126016_126035.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___126039)){
var error__20247__auto___126040 = temp__4126__auto___126039;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20247__auto___126040)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___126040,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema126013_126032,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___126031,output_schema126013_126032,input_schema126014_126033,input_checker126015_126034,output_checker126016_126035))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_body),schema.core.make_fn_schema.call(null,output_schema126013_126032,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema126014_126033], null)));

outliner.components.index.__GT_outline_body = (function() {
var outliner$components$index$__GT_outline_body = null;
var outliner$components$index$__GT_outline_body__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22978__auto__);
});
var outliner$components$index$__GT_outline_body__2 = (function (cursor__22978__auto__,m126012){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22978__auto__,m126012);
});
outliner$components$index$__GT_outline_body = function(cursor__22978__auto__,m126012){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_body__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_outline_body__2.call(this,cursor__22978__auto__,m126012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_body__1;
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_body__2;
return outliner$components$index$__GT_outline_body;
})()
;

var ufv___126922 = schema.utils.use_fn_validation;
var output_schema126044_126923 = schema.core.Any;
var input_schema126045_126924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker126046_126925 = schema.core.checker.call(null,input_schema126045_126924);
var output_checker126047_126926 = schema.core.checker.call(null,output_schema126044_126923);
/**
 * Inputs: [data owner]
 */
outliner.components.index.component = ((function (ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function outliner$components$index$component(G__126048,G__126049){
var validate__20245__auto__ = ufv___126922.get_cell();
if(cljs.core.truth_(validate__20245__auto__)){
var args__20246__auto___126927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__126048,G__126049], null);
var temp__4126__auto___126928 = input_checker126046_126925.call(null,args__20246__auto___126927);
if(cljs.core.truth_(temp__4126__auto___126928)){
var error__20247__auto___126929 = temp__4126__auto___126928;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20247__auto___126929)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___126929,new cljs.core.Keyword(null,"value","value",305978217),args__20246__auto___126927,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema126045_126924,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20248__auto__ = (function (){var data = G__126048;
var owner = G__126049;
while(true){
if(typeof outliner.components.index.t126486 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t126486 = (function (owner,G__126048,data,G__126049,output_checker126047,component,input_checker126046,input_schema126045,validate__20245__auto__,ufv__,output_schema126044,meta126487){
this.owner = owner;
this.G__126048 = G__126048;
this.data = data;
this.G__126049 = G__126049;
this.output_checker126047 = output_checker126047;
this.component = component;
this.input_checker126046 = input_checker126046;
this.input_schema126045 = input_schema126045;
this.validate__20245__auto__ = validate__20245__auto__;
this.ufv__ = ufv__;
this.output_schema126044 = output_schema126044;
this.meta126487 = meta126487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t126486.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t126486.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (_){
var self__ = this;
var ___$1 = this;
return "component";
});})(validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;

outliner.components.index.t126486.prototype.om$core$IRenderState$ = true;

outliner.components.index.t126486.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "yeah"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h2,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,outliner.components.index.outline_head,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,React.DOM.ol,{"className": "root"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,outliner.components.index.outline_body,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))],null))))],null))));
});})(validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;

outliner.components.index.t126486.prototype.om$core$IInitState$ = true;

outliner.components.index.t126486.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (_){
var self__ = this;
var ___$1 = this;
var key_down_chan = outliner.components.index.listen.call(null,window,"keydown");
var click_chan = cljs.core.async.chan.call(null);
var base_path = om.core.path.call(null,self__.data);
var c__22895__auto___126930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (){
var f__22896__auto__ = (function (){var switch__22874__auto__ = ((function (c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (state_126742){
var state_val_126743 = (state_126742[(1)]);
if((state_val_126743 === (65))){
var inst_126627 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126744_126931 = state_126742__$1;
(statearr_126744_126931[(2)] = inst_126627);

(statearr_126744_126931[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (70))){
var inst_126539 = (state_126742[(7)]);
var state_126742__$1 = state_126742;
var statearr_126745_126932 = state_126742__$1;
(statearr_126745_126932[(2)] = inst_126539);

(statearr_126745_126932[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (62))){
var inst_126586 = (state_126742[(8)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126586)){
var statearr_126746_126933 = state_126742__$1;
(statearr_126746_126933[(1)] = (63));

} else {
var statearr_126747_126934 = state_126742__$1;
(statearr_126747_126934[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (74))){
var inst_126541 = (state_126742[(9)]);
var inst_126505 = (state_126742[(10)]);
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126506 = (state_126742[(14)]);
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126557 = (state_126742[(17)]);
var inst_126537 = (state_126742[(18)]);
var inst_126578 = (state_126742[(19)]);
var inst_126500 = (state_126742[(20)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126645 = (function (){var vec__126504 = inst_126499;
var up_path = inst_126578;
var G__126490 = key_down_chan;
var current_child_idx = inst_126540;
var is_root = inst_126541;
var parent_children = inst_126562;
var parent = inst_126557;
var ch126492 = inst_126501;
var down_path = inst_126586;
var command = inst_126537;
var ret126493 = inst_126499;
var G__126491 = click_chan;
var e = inst_126505;
var parent_path = inst_126551;
var current_path = inst_126539;
var val__22904__auto__ = inst_126500;
var c = inst_126506;
var vec__126494 = inst_126499;
var current = inst_126543;
var keyevent__GT_command = inst_126511;
return ((function (vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (d){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current))){
return cljs.core.update_in.call(null,d,current_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359));
} else {
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"closed","closed",-919675359)),true);
}
});
;})(vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var inst_126646 = om.core.transact_BANG_.call(null,self__.data,inst_126645);
var state_126742__$1 = state_126742;
var statearr_126748_126935 = state_126742__$1;
(statearr_126748_126935[(2)] = inst_126646);

(statearr_126748_126935[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (7))){
var inst_126737 = (state_126742[(2)]);
var state_126742__$1 = (function (){var statearr_126749 = state_126742;
(statearr_126749[(23)] = inst_126737);

return statearr_126749;
})();
var statearr_126750_126936 = state_126742__$1;
(statearr_126750_126936[(2)] = null);

(statearr_126750_126936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (59))){
var inst_126541 = (state_126742[(9)]);
var inst_126505 = (state_126742[(10)]);
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126506 = (state_126742[(14)]);
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126557 = (state_126742[(17)]);
var inst_126537 = (state_126742[(18)]);
var inst_126578 = (state_126742[(19)]);
var inst_126500 = (state_126742[(20)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126610 = cljs.core.deref.call(null,self__.data);
var inst_126611 = cljs.core.get_in.call(null,inst_126610,inst_126578);
var inst_126612 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126578);
var inst_126613 = (function (){var vec__126504 = inst_126499;
var up_path = inst_126578;
var G__126490 = key_down_chan;
var current_child_idx = inst_126540;
var is_root = inst_126541;
var parent_children = inst_126562;
var parent = inst_126557;
var ch126492 = inst_126501;
var down_path = inst_126586;
var command = inst_126537;
var ret126493 = inst_126499;
var swap_node = inst_126611;
var G__126491 = click_chan;
var e = inst_126505;
var parent_path = inst_126551;
var current_path = inst_126539;
var val__22904__auto__ = inst_126500;
var c = inst_126506;
var vec__126494 = inst_126499;
var current = inst_126543;
var keyevent__GT_command = inst_126511;
return ((function (vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,swap_node,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126610,inst_126611,inst_126612,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),up_path,current);
});
;})(vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,swap_node,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126610,inst_126611,inst_126612,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var inst_126614 = om.core.transact_BANG_.call(null,self__.data,inst_126613);
var state_126742__$1 = (function (){var statearr_126751 = state_126742;
(statearr_126751[(24)] = inst_126612);

return statearr_126751;
})();
var statearr_126752_126937 = state_126742__$1;
(statearr_126752_126937[(2)] = inst_126614);

(statearr_126752_126937[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (86))){
var state_126742__$1 = state_126742;
var statearr_126753_126938 = state_126742__$1;
(statearr_126753_126938[(2)] = null);

(statearr_126753_126938[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (20))){
var state_126742__$1 = state_126742;
var statearr_126754_126939 = state_126742__$1;
(statearr_126754_126939[(2)] = new cljs.core.Keyword(null,"meta","meta",1499536964));

(statearr_126754_126939[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (72))){
var inst_126541 = (state_126742[(9)]);
var inst_126505 = (state_126742[(10)]);
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126506 = (state_126742[(14)]);
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126557 = (state_126742[(17)]);
var inst_126537 = (state_126742[(18)]);
var inst_126578 = (state_126742[(19)]);
var inst_126500 = (state_126742[(20)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126635 = (state_126742[(2)]);
var inst_126636 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126635);
var inst_126637 = (function (){var vec__126504 = inst_126499;
var up_path = inst_126578;
var G__126490 = key_down_chan;
var current_child_idx = inst_126540;
var is_root = inst_126541;
var parent_children = inst_126562;
var parent = inst_126557;
var ch126492 = inst_126501;
var down_path = inst_126586;
var command = inst_126537;
var ret126493 = inst_126499;
var G__126491 = click_chan;
var e = inst_126505;
var parent_path = inst_126551;
var current_path = inst_126539;
var val__22904__auto__ = inst_126500;
var c = inst_126506;
var vec__126494 = inst_126499;
var current = inst_126543;
var keyevent__GT_command = inst_126511;
return ((function (vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126635,inst_126636,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126635,inst_126636,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var inst_126638 = om.core.transact_BANG_.call(null,self__.data,inst_126637);
var state_126742__$1 = (function (){var statearr_126755 = state_126742;
(statearr_126755[(25)] = inst_126636);

return statearr_126755;
})();
var statearr_126756_126940 = state_126742__$1;
(statearr_126756_126940[(2)] = inst_126638);

(statearr_126756_126940[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (58))){
var inst_126578 = (state_126742[(19)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126578)){
var statearr_126757_126941 = state_126742__$1;
(statearr_126757_126941[(1)] = (59));

} else {
var statearr_126758_126942 = state_126742__$1;
(statearr_126758_126942[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (60))){
var state_126742__$1 = state_126742;
var statearr_126759_126943 = state_126742__$1;
(statearr_126759_126943[(2)] = null);

(statearr_126759_126943[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (27))){
var inst_126551 = (state_126742[(11)]);
var state_126742__$1 = state_126742;
var statearr_126760_126944 = state_126742__$1;
(statearr_126760_126944[(2)] = inst_126551);

(statearr_126760_126944[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (1))){
var state_126742__$1 = state_126742;
var statearr_126761_126945 = state_126742__$1;
(statearr_126761_126945[(2)] = null);

(statearr_126761_126945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (69))){
var inst_126641 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126762_126946 = state_126742__$1;
(statearr_126762_126946[(2)] = inst_126641);

(statearr_126762_126946[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (101))){
var state_126742__$1 = state_126742;
var statearr_126763_126947 = state_126742__$1;
(statearr_126763_126947[(2)] = null);

(statearr_126763_126947[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (24))){
var inst_126544 = (state_126742[(26)]);
var state_126742__$1 = state_126742;
var statearr_126764_126948 = state_126742__$1;
(statearr_126764_126948[(2)] = inst_126544);

(statearr_126764_126948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (102))){
var inst_126712 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126765_126949 = state_126742__$1;
(statearr_126765_126949[(2)] = inst_126712);

(statearr_126765_126949[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (55))){
var inst_126551 = (state_126742[(11)]);
var inst_126540 = (state_126742[(13)]);
var inst_126578 = (state_126742[(19)]);
var inst_126601 = outliner.components.index.gen_left_path.call(null,inst_126540,inst_126551,inst_126578,self__.data);
var state_126742__$1 = state_126742;
var statearr_126766_126950 = state_126742__$1;
(statearr_126766_126950[(2)] = inst_126601);

(statearr_126766_126950[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (85))){
var inst_126541 = (state_126742[(9)]);
var inst_126505 = (state_126742[(10)]);
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126506 = (state_126742[(14)]);
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126557 = (state_126742[(17)]);
var inst_126537 = (state_126742[(18)]);
var inst_126578 = (state_126742[(19)]);
var inst_126500 = (state_126742[(20)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126665 = (function (){var vec__126504 = inst_126499;
var up_path = inst_126578;
var G__126490 = key_down_chan;
var current_child_idx = inst_126540;
var is_root = inst_126541;
var parent_children = inst_126562;
var parent = inst_126557;
var ch126492 = inst_126501;
var down_path = inst_126586;
var command = inst_126537;
var ret126493 = inst_126499;
var G__126491 = click_chan;
var e = inst_126505;
var parent_path = inst_126551;
var current_path = inst_126539;
var val__22904__auto__ = inst_126500;
var c = inst_126506;
var vec__126494 = inst_126499;
var current = inst_126543;
var keyevent__GT_command = inst_126511;
return ((function (vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = outliner.components.index.get_indexless.call(null,parent_path);
var destination_index = (cljs.core.last.call(null,parent_path) + (1));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,destination_children,(0),destination_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current], null),cljs.core.subvec.call(null,destination_children,destination_index)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,destination_index));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,destination_path,new_destination_children),cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var inst_126666 = om.core.transact_BANG_.call(null,self__.data,inst_126665);
var state_126742__$1 = state_126742;
var statearr_126767_126951 = state_126742__$1;
(statearr_126767_126951[(2)] = inst_126666);

(statearr_126767_126951[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (39))){
var state_126742__$1 = state_126742;
var statearr_126768_126952 = state_126742__$1;
(statearr_126768_126952[(2)] = null);

(statearr_126768_126952[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (88))){
var inst_126541 = (state_126742[(9)]);
var inst_126671 = cljs.core.not.call(null,inst_126541);
var state_126742__$1 = state_126742;
if(inst_126671){
var statearr_126769_126953 = state_126742__$1;
(statearr_126769_126953[(1)] = (89));

} else {
var statearr_126770_126954 = state_126742__$1;
(statearr_126770_126954[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (46))){
var inst_126578 = (state_126742[(19)]);
var inst_126588 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126578);
var state_126742__$1 = state_126742;
var statearr_126771_126955 = state_126742__$1;
(statearr_126771_126955[(2)] = inst_126588);

(statearr_126771_126955[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (4))){
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126499__$1 = (state_126742[(2)]);
var inst_126500 = cljs.core.nth.call(null,inst_126499__$1,(0),null);
var inst_126501__$1 = cljs.core.nth.call(null,inst_126499__$1,(1),null);
var inst_126502 = cljs.core._EQ_.call(null,inst_126501__$1,key_down_chan);
var state_126742__$1 = (function (){var statearr_126772 = state_126742;
(statearr_126772[(15)] = inst_126501__$1);

(statearr_126772[(16)] = inst_126499__$1);

(statearr_126772[(20)] = inst_126500);

return statearr_126772;
})();
if(inst_126502){
var statearr_126773_126956 = state_126742__$1;
(statearr_126773_126956[(1)] = (5));

} else {
var statearr_126774_126957 = state_126742__$1;
(statearr_126774_126957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (77))){
var inst_126578 = (state_126742[(19)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126578)){
var statearr_126775_126958 = state_126742__$1;
(statearr_126775_126958[(1)] = (78));

} else {
var statearr_126776_126959 = state_126742__$1;
(statearr_126776_126959[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (106))){
var inst_126735 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126777_126960 = state_126742__$1;
(statearr_126777_126960[(2)] = inst_126735);

(statearr_126777_126960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (95))){
var inst_126541 = (state_126742[(9)]);
var inst_126685 = cljs.core.not.call(null,inst_126541);
var state_126742__$1 = state_126742;
if(inst_126685){
var statearr_126778_126961 = state_126742__$1;
(statearr_126778_126961[(1)] = (96));

} else {
var statearr_126779_126962 = state_126742__$1;
(statearr_126779_126962[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (54))){
var inst_126539 = (state_126742[(7)]);
var state_126742__$1 = state_126742;
var statearr_126780_126963 = state_126742__$1;
(statearr_126780_126963[(2)] = inst_126539);

(statearr_126780_126963[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (92))){
var inst_126676 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var state_126742__$1 = state_126742;
var statearr_126781_126964 = state_126742__$1;
(statearr_126781_126964[(2)] = inst_126676);

(statearr_126781_126964[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (104))){
var inst_126499 = (state_126742[(16)]);
var inst_126722 = cljs.core.nth.call(null,inst_126499,(0),null);
var inst_126723 = cljs.core.nth.call(null,inst_126499,(1),null);
var inst_126724 = new cljs.core.Keyword(null,"new-path","new-path",1732999939).cljs$core$IFn$_invoke$arity$1(inst_126722);
var inst_126725 = cljs.core.count.call(null,base_path);
var inst_126726 = cljs.core.subvec.call(null,inst_126724,inst_126725);
var inst_126727 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126726);
var state_126742__$1 = (function (){var statearr_126782 = state_126742;
(statearr_126782[(27)] = inst_126723);

return statearr_126782;
})();
var statearr_126783_126965 = state_126742__$1;
(statearr_126783_126965[(2)] = inst_126727);

(statearr_126783_126965[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (15))){
var inst_126519 = (state_126742[(28)]);
var state_126742__$1 = state_126742;
var statearr_126784_126966 = state_126742__$1;
(statearr_126784_126966[(2)] = inst_126519);

(statearr_126784_126966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (48))){
var inst_126591 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126785_126967 = state_126742__$1;
(statearr_126785_126967[(2)] = inst_126591);

(statearr_126785_126967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (50))){
var inst_126586 = (state_126742[(8)]);
var inst_126594 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126586);
var state_126742__$1 = state_126742;
var statearr_126786_126968 = state_126742__$1;
(statearr_126786_126968[(2)] = inst_126594);

(statearr_126786_126968[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (75))){
var state_126742__$1 = state_126742;
var statearr_126787_126969 = state_126742__$1;
(statearr_126787_126969[(2)] = null);

(statearr_126787_126969[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (99))){
var inst_126541 = (state_126742[(9)]);
var inst_126698 = cljs.core.not.call(null,inst_126541);
var state_126742__$1 = state_126742;
if(inst_126698){
var statearr_126788_126970 = state_126742__$1;
(statearr_126788_126970[(1)] = (100));

} else {
var statearr_126789_126971 = state_126742__$1;
(statearr_126789_126971[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (21))){
var inst_126529 = (state_126742[(29)]);
var state_126742__$1 = state_126742;
var statearr_126790_126972 = state_126742__$1;
(statearr_126790_126972[(2)] = inst_126529);

(statearr_126790_126972[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (31))){
var inst_126541 = (state_126742[(9)]);
var inst_126562 = (state_126742[(2)]);
var state_126742__$1 = (function (){var statearr_126791 = state_126742;
(statearr_126791[(12)] = inst_126562);

return statearr_126791;
})();
if(cljs.core.truth_(inst_126541)){
var statearr_126792_126973 = state_126742__$1;
(statearr_126792_126973[(1)] = (32));

} else {
var statearr_126793_126974 = state_126742__$1;
(statearr_126793_126974[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (32))){
var state_126742__$1 = state_126742;
var statearr_126794_126975 = state_126742__$1;
(statearr_126794_126975[(2)] = false);

(statearr_126794_126975[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (40))){
var inst_126574 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126795_126976 = state_126742__$1;
(statearr_126795_126976[(2)] = inst_126574);

(statearr_126795_126976[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (91))){
var inst_126683 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126796_126977 = state_126742__$1;
(statearr_126796_126977[(2)] = inst_126683);

(statearr_126796_126977[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (108))){
var state_126742__$1 = state_126742;
var statearr_126797_126978 = state_126742__$1;
(statearr_126797_126978[(2)] = null);

(statearr_126797_126978[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (56))){
var inst_126603 = (state_126742[(2)]);
var inst_126604 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126603);
var state_126742__$1 = state_126742;
var statearr_126798_126979 = state_126742__$1;
(statearr_126798_126979[(2)] = inst_126604);

(statearr_126798_126979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (33))){
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126565 = (inst_126540 - (1));
var inst_126566 = cljs.core.get.call(null,inst_126562,inst_126565,false);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126566)){
var statearr_126799_126980 = state_126742__$1;
(statearr_126799_126980[(1)] = (35));

} else {
var statearr_126800_126981 = state_126742__$1;
(statearr_126800_126981[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (13))){
var inst_126505 = (state_126742[(10)]);
var inst_126519 = (state_126742[(28)]);
var inst_126518 = (state_126742[(2)]);
var inst_126519__$1 = inst_126505.altKey;
var state_126742__$1 = (function (){var statearr_126801 = state_126742;
(statearr_126801[(30)] = inst_126518);

(statearr_126801[(28)] = inst_126519__$1);

return statearr_126801;
})();
if(cljs.core.truth_(inst_126519__$1)){
var statearr_126802_126982 = state_126742__$1;
(statearr_126802_126982[(1)] = (14));

} else {
var statearr_126803_126983 = state_126742__$1;
(statearr_126803_126983[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (22))){
var inst_126523 = (state_126742[(31)]);
var inst_126541 = (state_126742[(9)]);
var inst_126518 = (state_126742[(30)]);
var inst_126513 = (state_126742[(32)]);
var inst_126512 = (state_126742[(33)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126528 = (state_126742[(34)]);
var inst_126544 = (state_126742[(26)]);
var inst_126533 = (state_126742[(2)]);
var inst_126534 = [inst_126513,inst_126518,inst_126523,inst_126528,inst_126533];
var inst_126535 = (new cljs.core.PersistentVector(null,5,(5),inst_126512,inst_126534,null));
var inst_126536 = cljs.core.filter.call(null,cljs.core.identity,inst_126535);
var inst_126537 = inst_126511.call(null,inst_126536);
var inst_126538 = om.core.get_state.call(null,self__.owner);
var inst_126539__$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(inst_126538);
var inst_126540 = cljs.core.last.call(null,inst_126539__$1);
var inst_126541__$1 = cljs.core._EQ_.call(null,outliner.components.index.root_node,inst_126539__$1);
var inst_126542 = cljs.core.deref.call(null,self__.data);
var inst_126543 = cljs.core.get_in.call(null,inst_126542,inst_126539__$1);
var inst_126544__$1 = !(inst_126541__$1);
var state_126742__$1 = (function (){var statearr_126804 = state_126742;
(statearr_126804[(9)] = inst_126541__$1);

(statearr_126804[(13)] = inst_126540);

(statearr_126804[(18)] = inst_126537);

(statearr_126804[(7)] = inst_126539__$1);

(statearr_126804[(22)] = inst_126543);

(statearr_126804[(26)] = inst_126544__$1);

return statearr_126804;
})();
if(inst_126544__$1){
var statearr_126805_126984 = state_126742__$1;
(statearr_126805_126984[(1)] = (23));

} else {
var statearr_126806_126985 = state_126742__$1;
(statearr_126806_126985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (90))){
var state_126742__$1 = state_126742;
var statearr_126807_126986 = state_126742__$1;
(statearr_126807_126986[(2)] = null);

(statearr_126807_126986[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (109))){
var inst_126733 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126808_126987 = state_126742__$1;
(statearr_126808_126987[(2)] = inst_126733);

(statearr_126808_126987[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (36))){
var state_126742__$1 = state_126742;
var statearr_126809_126988 = state_126742__$1;
(statearr_126809_126988[(1)] = (38));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (41))){
var inst_126551 = (state_126742[(11)]);
var inst_126540 = (state_126742[(13)]);
var inst_126582 = (inst_126540 + (1));
var inst_126583 = cljs.core.conj.call(null,inst_126551,new cljs.core.Keyword(null,"children","children",-940561982),inst_126582);
var state_126742__$1 = state_126742;
var statearr_126811_126989 = state_126742__$1;
(statearr_126811_126989[(2)] = inst_126583);

(statearr_126811_126989[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (89))){
var inst_126673 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var inst_126674 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),inst_126673);
var state_126742__$1 = state_126742;
if(inst_126674){
var statearr_126812_126990 = state_126742__$1;
(statearr_126812_126990[(1)] = (92));

} else {
var statearr_126813_126991 = state_126742__$1;
(statearr_126813_126991[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (100))){
var inst_126541 = (state_126742[(9)]);
var inst_126505 = (state_126742[(10)]);
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126506 = (state_126742[(14)]);
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126557 = (state_126742[(17)]);
var inst_126537 = (state_126742[(18)]);
var inst_126578 = (state_126742[(19)]);
var inst_126500 = (state_126742[(20)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126700 = inst_126543.call(null,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_126701 = outliner.components.index.gen_empty_text_node.call(null);
var inst_126702 = cljs.core.conj.call(null,inst_126700,inst_126701);
var inst_126703 = cljs.core.count.call(null,inst_126702);
var inst_126704 = (inst_126703 - (1));
var inst_126705 = cljs.core.conj.call(null,inst_126539,new cljs.core.Keyword(null,"children","children",-940561982),inst_126704);
var inst_126706 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126705);
var inst_126707 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var inst_126708 = (function (){var vec__126504 = inst_126499;
var up_path = inst_126578;
var G__126490 = key_down_chan;
var current_children = inst_126700;
var current_child_idx = inst_126540;
var is_root = inst_126541;
var new_path = inst_126705;
var parent_children = inst_126562;
var parent = inst_126557;
var new_children = inst_126702;
var ch126492 = inst_126501;
var down_path = inst_126586;
var command = inst_126537;
var ret126493 = inst_126499;
var G__126491 = click_chan;
var e = inst_126505;
var parent_path = inst_126551;
var current_path = inst_126539;
var val__22904__auto__ = inst_126500;
var c = inst_126506;
var vec__126494 = inst_126499;
var current = inst_126543;
var keyevent__GT_command = inst_126511;
return ((function (vec__126504,up_path,G__126490,current_children,current_child_idx,is_root,new_path,parent_children,parent,new_children,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126700,inst_126701,inst_126702,inst_126703,inst_126704,inst_126705,inst_126706,inst_126707,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (p1__126042_SHARP_){
return cljs.core.assoc_in.call(null,p1__126042_SHARP_,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_children);
});
;})(vec__126504,up_path,G__126490,current_children,current_child_idx,is_root,new_path,parent_children,parent,new_children,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126700,inst_126701,inst_126702,inst_126703,inst_126704,inst_126705,inst_126706,inst_126707,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var inst_126709 = om.core.transact_BANG_.call(null,self__.data,inst_126708);
var state_126742__$1 = (function (){var statearr_126814 = state_126742;
(statearr_126814[(35)] = inst_126707);

(statearr_126814[(36)] = inst_126706);

return statearr_126814;
})();
var statearr_126815_126992 = state_126742__$1;
(statearr_126815_126992[(2)] = inst_126709);

(statearr_126815_126992[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (43))){
var inst_126537 = (state_126742[(18)]);
var inst_126586 = (state_126742[(2)]);
var state_126742__$1 = (function (){var statearr_126816 = state_126742;
(statearr_126816[(8)] = inst_126586);

return statearr_126816;
})();
var G__126817_126993 = (((inst_126537 instanceof cljs.core.Keyword))?inst_126537.fqn:null);
switch (G__126817_126993) {
case "left-shift-node":
var statearr_126818_126995 = state_126742__$1;
(statearr_126818_126995[(1)] = (81));


break;
case "node-down":
var statearr_126819_126996 = state_126742__$1;
(statearr_126819_126996[(1)] = (62));


break;
case "toggle-edit":
var statearr_126820_126997 = state_126742__$1;
(statearr_126820_126997[(1)] = (88));


break;
case "cursor-right":
var statearr_126821_126998 = state_126742__$1;
(statearr_126821_126998[(1)] = (57));


break;
case "right-shift-node":
var statearr_126822_126999 = state_126742__$1;
(statearr_126822_126999[(1)] = (77));


break;
case "toggle-closed":
var statearr_126823_127000 = state_126742__$1;
(statearr_126823_127000[(1)] = (73));


break;
case "node-up":
var statearr_126824_127001 = state_126742__$1;
(statearr_126824_127001[(1)] = (58));


break;
case "cursor-left":
var statearr_126825_127002 = state_126742__$1;
(statearr_126825_127002[(1)] = (53));


break;
case "add-new-child":
var statearr_126826_127003 = state_126742__$1;
(statearr_126826_127003[(1)] = (99));


break;
case "add-new-sibbling":
var statearr_126827_127004 = state_126742__$1;
(statearr_126827_127004[(1)] = (95));


break;
case "cursor-up":
var statearr_126828_127005 = state_126742__$1;
(statearr_126828_127005[(1)] = (45));


break;
case "cursor-down":
var statearr_126829_127006 = state_126742__$1;
(statearr_126829_127006[(1)] = (49));


break;
case "destroy-node":
var statearr_126830_127007 = state_126742__$1;
(statearr_126830_127007[(1)] = (66));


break;
default:
var statearr_126831_127008 = state_126742__$1;
(statearr_126831_127008[(1)] = (103));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (61))){
var inst_126617 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126832_127009 = state_126742__$1;
(statearr_126832_127009[(2)] = inst_126617);

(statearr_126832_127009[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (29))){
var inst_126557 = (state_126742[(17)]);
var inst_126559 = cljs.core.get.call(null,inst_126557,new cljs.core.Keyword(null,"children","children",-940561982),false);
var state_126742__$1 = state_126742;
var statearr_126833_127010 = state_126742__$1;
(statearr_126833_127010[(2)] = inst_126559);

(statearr_126833_127010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (44))){
var inst_126717 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126834_127011 = state_126742__$1;
(statearr_126834_127011[(2)] = inst_126717);

(statearr_126834_127011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (93))){
var inst_126678 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var state_126742__$1 = state_126742;
var statearr_126835_127012 = state_126742__$1;
(statearr_126835_127012[(2)] = inst_126678);

(statearr_126835_127012[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (6))){
var inst_126501 = (state_126742[(15)]);
var inst_126719 = cljs.core._EQ_.call(null,inst_126501,click_chan);
var state_126742__$1 = state_126742;
if(inst_126719){
var statearr_126836_127013 = state_126742__$1;
(statearr_126836_127013[(1)] = (104));

} else {
var statearr_126837_127014 = state_126742__$1;
(statearr_126837_127014[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (28))){
var inst_126557 = (state_126742[(17)]);
var inst_126557__$1 = (state_126742[(2)]);
var state_126742__$1 = (function (){var statearr_126838 = state_126742;
(statearr_126838[(17)] = inst_126557__$1);

return statearr_126838;
})();
if(cljs.core.truth_(inst_126557__$1)){
var statearr_126839_127015 = state_126742__$1;
(statearr_126839_127015[(1)] = (29));

} else {
var statearr_126840_127016 = state_126742__$1;
(statearr_126840_127016[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (64))){
var state_126742__$1 = state_126742;
var statearr_126841_127017 = state_126742__$1;
(statearr_126841_127017[(2)] = null);

(statearr_126841_127017[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (103))){
var state_126742__$1 = state_126742;
var statearr_126842_127018 = state_126742__$1;
(statearr_126842_127018[(2)] = null);

(statearr_126842_127018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (51))){
var state_126742__$1 = state_126742;
var statearr_126843_127019 = state_126742__$1;
(statearr_126843_127019[(2)] = null);

(statearr_126843_127019[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (25))){
var inst_126551 = (state_126742[(11)]);
var inst_126551__$1 = (state_126742[(2)]);
var state_126742__$1 = (function (){var statearr_126844 = state_126742;
(statearr_126844[(11)] = inst_126551__$1);

return statearr_126844;
})();
if(cljs.core.truth_(inst_126551__$1)){
var statearr_126845_127020 = state_126742__$1;
(statearr_126845_127020[(1)] = (26));

} else {
var statearr_126846_127021 = state_126742__$1;
(statearr_126846_127021[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (34))){
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126578 = (state_126742[(2)]);
var inst_126579 = (inst_126540 + (1));
var inst_126580 = cljs.core.get.call(null,inst_126562,inst_126579,false);
var state_126742__$1 = (function (){var statearr_126847 = state_126742;
(statearr_126847[(19)] = inst_126578);

return statearr_126847;
})();
if(cljs.core.truth_(inst_126580)){
var statearr_126848_127022 = state_126742__$1;
(statearr_126848_127022[(1)] = (41));

} else {
var statearr_126849_127023 = state_126742__$1;
(statearr_126849_127023[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (17))){
var state_126742__$1 = state_126742;
var statearr_126850_127024 = state_126742__$1;
(statearr_126850_127024[(2)] = new cljs.core.Keyword(null,"ctrl","ctrl",361402094));

(statearr_126850_127024[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (3))){
var inst_126740 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_126742__$1,inst_126740);
} else {
if((state_val_126743 === (12))){
var inst_126514 = (state_126742[(37)]);
var state_126742__$1 = state_126742;
var statearr_126851_127025 = state_126742__$1;
(statearr_126851_127025[(2)] = inst_126514);

(statearr_126851_127025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (2))){
var inst_126495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126496 = [key_down_chan,click_chan];
var inst_126497 = (new cljs.core.PersistentVector(null,2,(5),inst_126495,inst_126496,null));
var state_126742__$1 = state_126742;
return cljs.core.async.ioc_alts_BANG_.call(null,state_126742__$1,(4),inst_126497);
} else {
if((state_val_126743 === (66))){
var inst_126541 = (state_126742[(9)]);
var inst_126629 = cljs.core.not.call(null,inst_126541);
var state_126742__$1 = state_126742;
if(inst_126629){
var statearr_126852_127026 = state_126742__$1;
(statearr_126852_127026[(1)] = (67));

} else {
var statearr_126853_127027 = state_126742__$1;
(statearr_126853_127027[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (107))){
var inst_126500 = (state_126742[(20)]);
var state_126742__$1 = state_126742;
var statearr_126854_127028 = state_126742__$1;
(statearr_126854_127028[(2)] = inst_126500);

(statearr_126854_127028[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (23))){
var inst_126539 = (state_126742[(7)]);
var inst_126546 = cljs.core.count.call(null,inst_126539);
var inst_126547 = (inst_126546 - (2));
var inst_126548 = cljs.core.subvec.call(null,inst_126539,(0),inst_126547);
var state_126742__$1 = state_126742;
var statearr_126855_127029 = state_126742__$1;
(statearr_126855_127029[(2)] = inst_126548);

(statearr_126855_127029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (47))){
var state_126742__$1 = state_126742;
var statearr_126856_127030 = state_126742__$1;
(statearr_126856_127030[(2)] = null);

(statearr_126856_127030[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (35))){
var inst_126551 = (state_126742[(11)]);
var inst_126540 = (state_126742[(13)]);
var inst_126568 = (inst_126540 - (1));
var inst_126569 = cljs.core.conj.call(null,inst_126551,new cljs.core.Keyword(null,"children","children",-940561982),inst_126568);
var state_126742__$1 = state_126742;
var statearr_126857_127031 = state_126742__$1;
(statearr_126857_127031[(2)] = inst_126569);

(statearr_126857_127031[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (82))){
var inst_126551 = (state_126742[(11)]);
var inst_126659 = cljs.core._EQ_.call(null,inst_126551,outliner.components.index.root_node);
var inst_126660 = !(inst_126659);
var state_126742__$1 = state_126742;
var statearr_126858_127032 = state_126742__$1;
(statearr_126858_127032[(2)] = inst_126660);

(statearr_126858_127032[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (76))){
var inst_126649 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126859_127033 = state_126742__$1;
(statearr_126859_127033[(2)] = inst_126649);

(statearr_126859_127033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (97))){
var state_126742__$1 = state_126742;
var statearr_126860_127034 = state_126742__$1;
(statearr_126860_127034[(2)] = null);

(statearr_126860_127034[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (19))){
var inst_126505 = (state_126742[(10)]);
var inst_126529 = (state_126742[(29)]);
var inst_126528 = (state_126742[(2)]);
var inst_126529__$1 = inst_126505.metaKey;
var state_126742__$1 = (function (){var statearr_126861 = state_126742;
(statearr_126861[(29)] = inst_126529__$1);

(statearr_126861[(34)] = inst_126528);

return statearr_126861;
})();
if(cljs.core.truth_(inst_126529__$1)){
var statearr_126862_127035 = state_126742__$1;
(statearr_126862_127035[(1)] = (20));

} else {
var statearr_126863_127036 = state_126742__$1;
(statearr_126863_127036[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (57))){
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126539 = (state_126742[(7)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126606 = outliner.components.index.gen_right_path.call(null,inst_126539,inst_126543,inst_126540,inst_126551,inst_126562,inst_126586,self__.data);
var inst_126607 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126606);
var state_126742__$1 = state_126742;
var statearr_126864_127037 = state_126742__$1;
(statearr_126864_127037[(2)] = inst_126607);

(statearr_126864_127037[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (68))){
var state_126742__$1 = state_126742;
var statearr_126865_127038 = state_126742__$1;
(statearr_126865_127038[(2)] = null);

(statearr_126865_127038[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (11))){
var state_126742__$1 = state_126742;
var statearr_126866_127039 = state_126742__$1;
(statearr_126866_127039[(2)] = new cljs.core.Keyword(null,"shift","shift",997140064));

(statearr_126866_127039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (9))){
var state_126742__$1 = state_126742;
var statearr_126867_127040 = state_126742__$1;
(statearr_126867_127040[(2)] = outliner.components.index.edit_keymap);

(statearr_126867_127040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (5))){
var inst_126499 = (state_126742[(16)]);
var inst_126505 = cljs.core.nth.call(null,inst_126499,(0),null);
var inst_126506 = cljs.core.nth.call(null,inst_126499,(1),null);
var inst_126509 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_126742__$1 = (function (){var statearr_126868 = state_126742;
(statearr_126868[(10)] = inst_126505);

(statearr_126868[(14)] = inst_126506);

return statearr_126868;
})();
var G__126869_127041 = (((inst_126509 instanceof cljs.core.Keyword))?inst_126509.fqn:null);
switch (G__126869_127041) {
case "editing":
var statearr_126870_127043 = state_126742__$1;
(statearr_126870_127043[(1)] = (9));


break;
default:
var statearr_126871_127044 = state_126742__$1;
(statearr_126871_127044[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (83))){
var inst_126551 = (state_126742[(11)]);
var state_126742__$1 = state_126742;
var statearr_126872_127045 = state_126742__$1;
(statearr_126872_127045[(2)] = inst_126551);

(statearr_126872_127045[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (14))){
var state_126742__$1 = state_126742;
var statearr_126873_127046 = state_126742__$1;
(statearr_126873_127046[(2)] = new cljs.core.Keyword(null,"alt","alt",-3214426));

(statearr_126873_127046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (45))){
var inst_126578 = (state_126742[(19)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126578)){
var statearr_126874_127047 = state_126742__$1;
(statearr_126874_127047[(1)] = (46));

} else {
var statearr_126875_127048 = state_126742__$1;
(statearr_126875_127048[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (53))){
var inst_126541 = (state_126742[(9)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126541)){
var statearr_126876_127049 = state_126742__$1;
(statearr_126876_127049[(1)] = (54));

} else {
var statearr_126877_127050 = state_126742__$1;
(statearr_126877_127050[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (78))){
var inst_126541 = (state_126742[(9)]);
var inst_126505 = (state_126742[(10)]);
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126506 = (state_126742[(14)]);
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126557 = (state_126742[(17)]);
var inst_126537 = (state_126742[(18)]);
var inst_126578 = (state_126742[(19)]);
var inst_126500 = (state_126742[(20)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126652 = (function (){var vec__126504 = inst_126499;
var up_path = inst_126578;
var G__126490 = key_down_chan;
var current_child_idx = inst_126540;
var is_root = inst_126541;
var parent_children = inst_126562;
var parent = inst_126557;
var ch126492 = inst_126501;
var down_path = inst_126586;
var command = inst_126537;
var ret126493 = inst_126499;
var G__126491 = click_chan;
var e = inst_126505;
var parent_path = inst_126551;
var current_path = inst_126539;
var val__22904__auto__ = inst_126500;
var c = inst_126506;
var vec__126494 = inst_126499;
var current = inst_126543;
var keyevent__GT_command = inst_126511;
return ((function (vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = cljs.core.conj.call(null,up_path,new cljs.core.Keyword(null,"children","children",-940561982));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.conj.call(null,destination_children,current);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,(cljs.core.count.call(null,new_destination_children) - (1))));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children),up_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359)),destination_path,new_destination_children);
});
;})(vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var inst_126653 = om.core.transact_BANG_.call(null,self__.data,inst_126652);
var state_126742__$1 = state_126742;
var statearr_126878_127051 = state_126742__$1;
(statearr_126878_127051[(2)] = inst_126653);

(statearr_126878_127051[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (26))){
var inst_126551 = (state_126742[(11)]);
var inst_126553 = cljs.core.deref.call(null,self__.data);
var inst_126554 = cljs.core.get_in.call(null,inst_126553,inst_126551);
var state_126742__$1 = state_126742;
var statearr_126879_127052 = state_126742__$1;
(statearr_126879_127052[(2)] = inst_126554);

(statearr_126879_127052[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (16))){
var inst_126524 = (state_126742[(38)]);
var inst_126505 = (state_126742[(10)]);
var inst_126523 = (state_126742[(2)]);
var inst_126524__$1 = inst_126505.ctrlKey;
var state_126742__$1 = (function (){var statearr_126880 = state_126742;
(statearr_126880[(31)] = inst_126523);

(statearr_126880[(38)] = inst_126524__$1);

return statearr_126880;
})();
if(cljs.core.truth_(inst_126524__$1)){
var statearr_126881_127053 = state_126742__$1;
(statearr_126881_127053[(1)] = (17));

} else {
var statearr_126882_127054 = state_126742__$1;
(statearr_126882_127054[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (81))){
var inst_126551 = (state_126742[(11)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126551)){
var statearr_126883_127055 = state_126742__$1;
(statearr_126883_127055[(1)] = (82));

} else {
var statearr_126884_127056 = state_126742__$1;
(statearr_126884_127056[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (79))){
var state_126742__$1 = state_126742;
var statearr_126885_127057 = state_126742__$1;
(statearr_126885_127057[(2)] = null);

(statearr_126885_127057[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (38))){
var state_126742__$1 = state_126742;
var statearr_126886_127058 = state_126742__$1;
(statearr_126886_127058[(2)] = false);

(statearr_126886_127058[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (98))){
var inst_126696 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126887_127059 = state_126742__$1;
(statearr_126887_127059[(2)] = inst_126696);

(statearr_126887_127059[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (87))){
var inst_126669 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126888_127060 = state_126742__$1;
(statearr_126888_127060[(2)] = inst_126669);

(statearr_126888_127060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (30))){
var inst_126557 = (state_126742[(17)]);
var state_126742__$1 = state_126742;
var statearr_126889_127061 = state_126742__$1;
(statearr_126889_127061[(2)] = inst_126557);

(statearr_126889_127061[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (73))){
var inst_126541 = (state_126742[(9)]);
var inst_126643 = cljs.core.not.call(null,inst_126541);
var state_126742__$1 = state_126742;
if(inst_126643){
var statearr_126890_127062 = state_126742__$1;
(statearr_126890_127062[(1)] = (74));

} else {
var statearr_126891_127063 = state_126742__$1;
(statearr_126891_127063[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (96))){
var inst_126541 = (state_126742[(9)]);
var inst_126505 = (state_126742[(10)]);
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126506 = (state_126742[(14)]);
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126557 = (state_126742[(17)]);
var inst_126537 = (state_126742[(18)]);
var inst_126578 = (state_126742[(19)]);
var inst_126500 = (state_126742[(20)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126687 = outliner.components.index.add_node_to_parent.call(null,inst_126562,inst_126540);
var inst_126688 = (inst_126540 + (1));
var inst_126689 = cljs.core.conj.call(null,inst_126551,new cljs.core.Keyword(null,"children","children",-940561982),inst_126688);
var inst_126690 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126689);
var inst_126691 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var inst_126692 = (function (){var vec__126504 = inst_126499;
var up_path = inst_126578;
var G__126490 = key_down_chan;
var current_child_idx = inst_126540;
var new_sibblings = inst_126687;
var is_root = inst_126541;
var new_path = inst_126689;
var parent_children = inst_126562;
var parent = inst_126557;
var ch126492 = inst_126501;
var down_path = inst_126586;
var command = inst_126537;
var ret126493 = inst_126499;
var G__126491 = click_chan;
var e = inst_126505;
var parent_path = inst_126551;
var current_path = inst_126539;
var val__22904__auto__ = inst_126500;
var c = inst_126506;
var vec__126494 = inst_126499;
var current = inst_126543;
var keyevent__GT_command = inst_126511;
return ((function (vec__126504,up_path,G__126490,current_child_idx,new_sibblings,is_root,new_path,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126687,inst_126688,inst_126689,inst_126690,inst_126691,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (p1__126041_SHARP_){
return cljs.core.assoc_in.call(null,p1__126041_SHARP_,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_sibblings);
});
;})(vec__126504,up_path,G__126490,current_child_idx,new_sibblings,is_root,new_path,parent_children,parent,ch126492,down_path,command,ret126493,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126687,inst_126688,inst_126689,inst_126690,inst_126691,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var inst_126693 = om.core.transact_BANG_.call(null,self__.data,inst_126692);
var state_126742__$1 = (function (){var statearr_126892 = state_126742;
(statearr_126892[(39)] = inst_126691);

(statearr_126892[(40)] = inst_126690);

return statearr_126892;
})();
var statearr_126893_127064 = state_126742__$1;
(statearr_126893_127064[(2)] = inst_126693);

(statearr_126893_127064[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (10))){
var state_126742__$1 = state_126742;
var statearr_126894_127065 = state_126742__$1;
(statearr_126894_127065[(2)] = outliner.components.index.normal_keymap);

(statearr_126894_127065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (18))){
var inst_126524 = (state_126742[(38)]);
var state_126742__$1 = state_126742;
var statearr_126895_127066 = state_126742__$1;
(statearr_126895_127066[(2)] = inst_126524);

(statearr_126895_127066[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (105))){
var inst_126501 = (state_126742[(15)]);
var inst_126729 = cljs.core._EQ_.call(null,inst_126501,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_126742__$1 = state_126742;
if(inst_126729){
var statearr_126896_127067 = state_126742__$1;
(statearr_126896_127067[(1)] = (107));

} else {
var statearr_126897_127068 = state_126742__$1;
(statearr_126897_127068[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (52))){
var inst_126597 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126898_127069 = state_126742__$1;
(statearr_126898_127069[(2)] = inst_126597);

(statearr_126898_127069[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (67))){
var inst_126541 = (state_126742[(9)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126541)){
var statearr_126899_127070 = state_126742__$1;
(statearr_126899_127070[(1)] = (70));

} else {
var statearr_126900_127071 = state_126742__$1;
(statearr_126900_127071[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (71))){
var inst_126551 = (state_126742[(11)]);
var inst_126540 = (state_126742[(13)]);
var inst_126578 = (state_126742[(19)]);
var inst_126633 = outliner.components.index.gen_left_path.call(null,inst_126540,inst_126551,inst_126578,self__.data);
var state_126742__$1 = state_126742;
var statearr_126901_127072 = state_126742__$1;
(statearr_126901_127072[(2)] = inst_126633);

(statearr_126901_127072[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (42))){
var state_126742__$1 = state_126742;
var statearr_126902_127073 = state_126742__$1;
(statearr_126902_127073[(2)] = false);

(statearr_126902_127073[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (80))){
var inst_126656 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126903_127074 = state_126742__$1;
(statearr_126903_127074[(2)] = inst_126656);

(statearr_126903_127074[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (37))){
var inst_126576 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126904_127075 = state_126742__$1;
(statearr_126904_127075[(2)] = inst_126576);

(statearr_126904_127075[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (63))){
var inst_126541 = (state_126742[(9)]);
var inst_126505 = (state_126742[(10)]);
var inst_126551 = (state_126742[(11)]);
var inst_126562 = (state_126742[(12)]);
var inst_126540 = (state_126742[(13)]);
var inst_126506 = (state_126742[(14)]);
var inst_126501 = (state_126742[(15)]);
var inst_126499 = (state_126742[(16)]);
var inst_126557 = (state_126742[(17)]);
var inst_126537 = (state_126742[(18)]);
var inst_126578 = (state_126742[(19)]);
var inst_126500 = (state_126742[(20)]);
var inst_126539 = (state_126742[(7)]);
var inst_126511 = (state_126742[(21)]);
var inst_126586 = (state_126742[(8)]);
var inst_126543 = (state_126742[(22)]);
var inst_126620 = cljs.core.deref.call(null,self__.data);
var inst_126621 = cljs.core.get_in.call(null,inst_126620,inst_126586);
var inst_126622 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_126586);
var inst_126623 = (function (){var vec__126504 = inst_126499;
var up_path = inst_126578;
var G__126490 = key_down_chan;
var current_child_idx = inst_126540;
var is_root = inst_126541;
var parent_children = inst_126562;
var parent = inst_126557;
var ch126492 = inst_126501;
var down_path = inst_126586;
var command = inst_126537;
var ret126493 = inst_126499;
var swap_node = inst_126621;
var G__126491 = click_chan;
var e = inst_126505;
var parent_path = inst_126551;
var current_path = inst_126539;
var val__22904__auto__ = inst_126500;
var c = inst_126506;
var vec__126494 = inst_126499;
var current = inst_126543;
var keyevent__GT_command = inst_126511;
return ((function (vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,swap_node,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126620,inst_126621,inst_126622,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),down_path,current);
});
;})(vec__126504,up_path,G__126490,current_child_idx,is_root,parent_children,parent,ch126492,down_path,command,ret126493,swap_node,G__126491,e,parent_path,current_path,val__22904__auto__,c,vec__126494,current,keyevent__GT_command,inst_126541,inst_126505,inst_126551,inst_126562,inst_126540,inst_126506,inst_126501,inst_126499,inst_126557,inst_126537,inst_126578,inst_126500,inst_126539,inst_126511,inst_126586,inst_126543,inst_126620,inst_126621,inst_126622,state_val_126743,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var inst_126624 = om.core.transact_BANG_.call(null,self__.data,inst_126623);
var state_126742__$1 = (function (){var statearr_126905 = state_126742;
(statearr_126905[(41)] = inst_126622);

return statearr_126905;
})();
var statearr_126906_127076 = state_126742__$1;
(statearr_126906_127076[(2)] = inst_126624);

(statearr_126906_127076[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (94))){
var inst_126680 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
var statearr_126907_127077 = state_126742__$1;
(statearr_126907_127077[(2)] = inst_126680);

(statearr_126907_127077[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (8))){
var inst_126514 = (state_126742[(37)]);
var inst_126505 = (state_126742[(10)]);
var inst_126511 = (state_126742[(2)]);
var inst_126512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126513 = inst_126505.keyCode;
var inst_126514__$1 = inst_126505.shiftKey;
var state_126742__$1 = (function (){var statearr_126908 = state_126742;
(statearr_126908[(37)] = inst_126514__$1);

(statearr_126908[(32)] = inst_126513);

(statearr_126908[(33)] = inst_126512);

(statearr_126908[(21)] = inst_126511);

return statearr_126908;
})();
if(cljs.core.truth_(inst_126514__$1)){
var statearr_126909_127078 = state_126742__$1;
(statearr_126909_127078[(1)] = (11));

} else {
var statearr_126910_127079 = state_126742__$1;
(statearr_126910_127079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (49))){
var inst_126586 = (state_126742[(8)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126586)){
var statearr_126911_127080 = state_126742__$1;
(statearr_126911_127080[(1)] = (50));

} else {
var statearr_126912_127081 = state_126742__$1;
(statearr_126912_127081[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126743 === (84))){
var inst_126663 = (state_126742[(2)]);
var state_126742__$1 = state_126742;
if(cljs.core.truth_(inst_126663)){
var statearr_126913_127082 = state_126742__$1;
(statearr_126913_127082[(1)] = (85));

} else {
var statearr_126914_127083 = state_126742__$1;
(statearr_126914_127083[(1)] = (86));

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
});})(c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;
return ((function (switch__22874__auto__,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function() {
var outliner$components$index$component_$_state_machine__22875__auto__ = null;
var outliner$components$index$component_$_state_machine__22875__auto____0 = (function (){
var statearr_126918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_126918[(0)] = outliner$components$index$component_$_state_machine__22875__auto__);

(statearr_126918[(1)] = (1));

return statearr_126918;
});
var outliner$components$index$component_$_state_machine__22875__auto____1 = (function (state_126742){
while(true){
var ret_value__22876__auto__ = (function (){try{while(true){
var result__22877__auto__ = switch__22874__auto__.call(null,state_126742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22877__auto__;
}
break;
}
}catch (e126919){if((e126919 instanceof Object)){
var ex__22878__auto__ = e126919;
var statearr_126920_127084 = state_126742;
(statearr_126920_127084[(5)] = ex__22878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_126742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e126919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127085 = state_126742;
state_126742 = G__127085;
continue;
} else {
return ret_value__22876__auto__;
}
break;
}
});
outliner$components$index$component_$_state_machine__22875__auto__ = function(state_126742){
switch(arguments.length){
case 0:
return outliner$components$index$component_$_state_machine__22875__auto____0.call(this);
case 1:
return outliner$components$index$component_$_state_machine__22875__auto____1.call(this,state_126742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$component_$_state_machine__22875__auto__.cljs$core$IFn$_invoke$arity$0 = outliner$components$index$component_$_state_machine__22875__auto____0;
outliner$components$index$component_$_state_machine__22875__auto__.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$component_$_state_machine__22875__auto____1;
return outliner$components$index$component_$_state_machine__22875__auto__;
})()
;})(switch__22874__auto__,c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
})();
var state__22897__auto__ = (function (){var statearr_126921 = f__22896__auto__.call(null);
(statearr_126921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22895__auto___126930);

return statearr_126921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22897__auto__);
});})(c__22895__auto___126930,key_down_chan,click_chan,base_path,___$1,validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
);


return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),outliner.components.index.root_node,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null);
});})(validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;

outliner.components.index.t126486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (_126488){
var self__ = this;
var _126488__$1 = this;
return self__.meta126487;
});})(validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;

outliner.components.index.t126486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (_126488,meta126487__$1){
var self__ = this;
var _126488__$1 = this;
return (new outliner.components.index.t126486(self__.owner,self__.G__126048,self__.data,self__.G__126049,self__.output_checker126047,self__.component,self__.input_checker126046,self__.input_schema126045,self__.validate__20245__auto__,self__.ufv__,self__.output_schema126044,meta126487__$1));
});})(validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;

outliner.components.index.t126486.cljs$lang$type = true;

outliner.components.index.t126486.cljs$lang$ctorStr = "outliner.components.index/t126486";

outliner.components.index.t126486.cljs$lang$ctorPrWriter = ((function (validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t126486");
});})(validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;

outliner.components.index.__GT_t126486 = ((function (validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926){
return (function outliner$components$index$component_$___GT_t126486(owner__$1,G__126048__$1,data__$1,G__126049__$1,output_checker126047__$1,component__$1,input_checker126046__$1,input_schema126045__$1,validate__20245__auto____$1,ufv____$1,output_schema126044__$1,meta126487){
return (new outliner.components.index.t126486(owner__$1,G__126048__$1,data__$1,G__126049__$1,output_checker126047__$1,component__$1,input_checker126046__$1,input_schema126045__$1,validate__20245__auto____$1,ufv____$1,output_schema126044__$1,meta126487));
});})(validate__20245__auto__,ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;

}

return (new outliner.components.index.t126486(owner,G__126048,data,G__126049,output_checker126047_126926,outliner$components$index$component,input_checker126046_126925,input_schema126045_126924,validate__20245__auto__,ufv___126922,output_schema126044_126923,null));
break;
}
})();
if(cljs.core.truth_(validate__20245__auto__)){
var temp__4126__auto___127086 = output_checker126047_126926.call(null,o__20248__auto__);
if(cljs.core.truth_(temp__4126__auto___127086)){
var error__20247__auto___127087 = temp__4126__auto___127086;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20247__auto___127087)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20247__auto___127087,new cljs.core.Keyword(null,"value","value",305978217),o__20248__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema126044_126923,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20248__auto__;
});})(ufv___126922,output_schema126044_126923,input_schema126045_126924,input_checker126046_126925,output_checker126047_126926))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.component),schema.core.make_fn_schema.call(null,output_schema126044_126923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema126045_126924], null)));

outliner.components.index.__GT_component = (function() {
var outliner$components$index$__GT_component = null;
var outliner$components$index$__GT_component__1 = (function (cursor__22978__auto__){
return om.core.build.call(null,outliner.components.index.component,cursor__22978__auto__);
});
var outliner$components$index$__GT_component__2 = (function (cursor__22978__auto__,m126043){
return om.core.build.call(null,outliner.components.index.component,cursor__22978__auto__,m126043);
});
outliner$components$index$__GT_component = function(cursor__22978__auto__,m126043){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_component__1.call(this,cursor__22978__auto__);
case 2:
return outliner$components$index$__GT_component__2.call(this,cursor__22978__auto__,m126043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_component__1;
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_component__2;
return outliner$components$index$__GT_component;
})()
;

//# sourceMappingURL=index.js.map?rel=1427869363823