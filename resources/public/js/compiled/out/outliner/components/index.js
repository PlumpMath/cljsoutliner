// Compiled by ClojureScript 0.0-3126 {}
goog.provide('outliner.components.index');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('goog.events');
outliner.components.index.root_node = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(0)], null);
outliner.components.index.listen = (function outliner$components$index$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
if((cljs.core._EQ_.call(null,e.keyCode,(8))) || (cljs.core._EQ_.call(null,e.keyCode,(9)))){
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
outliner.components.index.keyevent__GT_command = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),new cljs.core.Keyword(null,"shift","shift",997140064)], null)],[new cljs.core.Keyword(null,"toggle-edit","toggle-edit",750646855),new cljs.core.Keyword(null,"node-down","node-down",-217393565),new cljs.core.Keyword(null,"right-shift-node","right-shift-node",-1851094135),new cljs.core.Keyword(null,"cursor-up","cursor-up",-1902830020),new cljs.core.Keyword(null,"cursor-down","cursor-down",-261386401),new cljs.core.Keyword(null,"node-up","node-up",-1444087570),new cljs.core.Keyword(null,"destroy-node","destroy-node",-1501394977),new cljs.core.Keyword(null,"cursor-left","cursor-left",-1993752625),new cljs.core.Keyword(null,"toggle-closed","toggle-closed",-1634014707),new cljs.core.Keyword(null,"right-shift-node","right-shift-node",-1851094135),new cljs.core.Keyword(null,"cursor-right","cursor-right",-25128121),new cljs.core.Keyword(null,"left-shift-node","left-shift-node",-2097301469),new cljs.core.Keyword(null,"left-shift-node","left-shift-node",-2097301469)]);
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
var G__26670 = cljs.core.conj.call(null,p,new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.count.call(null,children) - (1)));
p = G__26670;
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
var G__26671 = outliner.components.index.get_parent.call(null,p);
p = G__26671;
continue;

}
}
break;
}
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

var ufv___26685 = schema.utils.use_fn_validation;
var output_schema26673_26686 = schema.core.Any;
var input_schema26674_26687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"head","head",869147608,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26675_26688 = schema.core.checker.call(null,input_schema26674_26687);
var output_checker26676_26689 = schema.core.checker.call(null,output_schema26673_26686);
/**
 * Inputs: [head owner]
 */
outliner.components.index.outline_head = ((function (ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689){
return (function outliner$components$index$outline_head(G__26677,G__26678){
var validate__20273__auto__ = ufv___26685.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___26690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26677,G__26678], null);
var temp__4126__auto___26691 = input_checker26675_26688.call(null,args__20274__auto___26690);
if(cljs.core.truth_(temp__4126__auto___26691)){
var error__20275__auto___26692 = temp__4126__auto___26691;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20275__auto___26692)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___26692,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___26690,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26674_26687,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var head = G__26677;
var owner = G__26678;
while(true){
if(typeof outliner.components.index.t26682 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t26682 = (function (output_checker26676,owner,output_schema26673,G__26677,input_schema26674,outline_head,G__26678,validate__20273__auto__,head,input_checker26675,ufv__,meta26683){
this.output_checker26676 = output_checker26676;
this.owner = owner;
this.output_schema26673 = output_schema26673;
this.G__26677 = G__26677;
this.input_schema26674 = input_schema26674;
this.outline_head = outline_head;
this.G__26678 = G__26678;
this.validate__20273__auto__ = validate__20273__auto__;
this.head = head;
this.input_checker26675 = input_checker26675;
this.ufv__ = ufv__;
this.meta26683 = meta26683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t26682.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t26682.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-head";
});})(validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689))
;

outliner.components.index.t26682.prototype.om$core$IRender$ = true;

outliner.components.index.t26682.prototype.om$core$IRender$render$arity$1 = ((function (validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.h1,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.head)],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h2,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(self__.head)],null))))],null)));
});})(validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689))
;

outliner.components.index.t26682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689){
return (function (_26684){
var self__ = this;
var _26684__$1 = this;
return self__.meta26683;
});})(validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689))
;

outliner.components.index.t26682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689){
return (function (_26684,meta26683__$1){
var self__ = this;
var _26684__$1 = this;
return (new outliner.components.index.t26682(self__.output_checker26676,self__.owner,self__.output_schema26673,self__.G__26677,self__.input_schema26674,self__.outline_head,self__.G__26678,self__.validate__20273__auto__,self__.head,self__.input_checker26675,self__.ufv__,meta26683__$1));
});})(validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689))
;

outliner.components.index.t26682.cljs$lang$type = true;

outliner.components.index.t26682.cljs$lang$ctorStr = "outliner.components.index/t26682";

outliner.components.index.t26682.cljs$lang$ctorPrWriter = ((function (validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t26682");
});})(validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689))
;

outliner.components.index.__GT_t26682 = ((function (validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689){
return (function outliner$components$index$outline_head_$___GT_t26682(output_checker26676__$1,owner__$1,output_schema26673__$1,G__26677__$1,input_schema26674__$1,outline_head__$1,G__26678__$1,validate__20273__auto____$1,head__$1,input_checker26675__$1,ufv____$1,meta26683){
return (new outliner.components.index.t26682(output_checker26676__$1,owner__$1,output_schema26673__$1,G__26677__$1,input_schema26674__$1,outline_head__$1,G__26678__$1,validate__20273__auto____$1,head__$1,input_checker26675__$1,ufv____$1,meta26683));
});})(validate__20273__auto__,ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689))
;

}

return (new outliner.components.index.t26682(output_checker26676_26689,owner,output_schema26673_26686,G__26677,input_schema26674_26687,outliner$components$index$outline_head,G__26678,validate__20273__auto__,head,input_checker26675_26688,ufv___26685,null));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___26693 = output_checker26676_26689.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___26693)){
var error__20275__auto___26694 = temp__4126__auto___26693;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20275__auto___26694)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___26694,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26673_26686,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___26685,output_schema26673_26686,input_schema26674_26687,input_checker26675_26688,output_checker26676_26689))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_head),schema.core.make_fn_schema.call(null,output_schema26673_26686,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26674_26687], null)));

outliner.components.index.__GT_outline_head = (function() {
var outliner$components$index$__GT_outline_head = null;
var outliner$components$index$__GT_outline_head__1 = (function (cursor__23820__auto__){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__23820__auto__);
});
var outliner$components$index$__GT_outline_head__2 = (function (cursor__23820__auto__,m26672){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__23820__auto__,m26672);
});
outliner$components$index$__GT_outline_head = function(cursor__23820__auto__,m26672){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_head__1.call(this,cursor__23820__auto__);
case 2:
return outliner$components$index$__GT_outline_head__2.call(this,cursor__23820__auto__,m26672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_head__1;
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_head__2;
return outliner$components$index$__GT_outline_head;
})()
;

var ufv___26712 = schema.utils.use_fn_validation;
var output_schema26696_26713 = schema.core.Any;
var input_schema26697_26714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"node","node",-2073234571,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26698_26715 = schema.core.checker.call(null,input_schema26697_26714);
var output_checker26699_26716 = schema.core.checker.call(null,output_schema26696_26713);
/**
 * Inputs: [node owner]
 */
outliner.components.index.outline_body = ((function (ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716){
return (function outliner$components$index$outline_body(G__26700,G__26701){
var validate__20273__auto__ = ufv___26712.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___26717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26700,G__26701], null);
var temp__4126__auto___26718 = input_checker26698_26715.call(null,args__20274__auto___26717);
if(cljs.core.truth_(temp__4126__auto___26718)){
var error__20275__auto___26719 = temp__4126__auto___26718;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20275__auto___26719)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___26719,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___26717,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26697_26714,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var node = G__26700;
var owner = G__26701;
while(true){
if(typeof outliner.components.index.t26707 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t26707 = (function (owner,G__26700,node,input_checker26698,validate__20273__auto__,output_checker26699,input_schema26697,G__26701,output_schema26696,outline_body,ufv__,meta26708){
this.owner = owner;
this.G__26700 = G__26700;
this.node = node;
this.input_checker26698 = input_checker26698;
this.validate__20273__auto__ = validate__20273__auto__;
this.output_checker26699 = output_checker26699;
this.input_schema26697 = input_schema26697;
this.G__26701 = G__26701;
this.output_schema26696 = output_schema26696;
this.outline_body = outline_body;
this.ufv__ = ufv__;
this.meta26708 = meta26708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t26707.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t26707.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-body";
});})(validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716))
;

outliner.components.index.t26707.prototype.om$core$IRenderState$ = true;

outliner.components.index.t26707.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716){
return (function (_,p__26710){
var self__ = this;
var map__26711 = p__26710;
var map__26711__$1 = ((cljs.core.seq_QMARK_.call(null,map__26711))?cljs.core.apply.call(null,cljs.core.hash_map,map__26711):map__26711);
var state = map__26711__$1;
var click_chan = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512));
var selected = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var ___$1 = this;
cljs.core.print.call(null,self__.node);

return cljs.core.apply.call(null,React.DOM.li,{"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__26711,map__26711__$1,state,click_chan,selected,base_path,validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716){
return (function (e){
e.stopPropagation();

e.preventDefault();

return cljs.core.async.put_BANG_.call(null,click_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-path","new-path",1732999939),om.core.path.call(null,self__.node)], null));
});})(___$1,map__26711,map__26711__$1,state,click_chan,selected,base_path,validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716))
), "className": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,om.core.path.call(null,self__.node),cljs.core.concat.call(null,base_path,selected)))?"selected":""))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node)))?cljs.core.apply.call(null,React.DOM.div,{"contentEditable": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(self__.node))?"true":"false")), "className": "txt"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node))],null)))):null),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))))?om_tools.dom.element.call(null,React.DOM.ol,om.core.build_all.call(null,self__.outline_body,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null)),cljs.core.PersistentVector.EMPTY):null)],null))));
});})(validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716))
;

outliner.components.index.t26707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716){
return (function (_26709){
var self__ = this;
var _26709__$1 = this;
return self__.meta26708;
});})(validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716))
;

outliner.components.index.t26707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716){
return (function (_26709,meta26708__$1){
var self__ = this;
var _26709__$1 = this;
return (new outliner.components.index.t26707(self__.owner,self__.G__26700,self__.node,self__.input_checker26698,self__.validate__20273__auto__,self__.output_checker26699,self__.input_schema26697,self__.G__26701,self__.output_schema26696,self__.outline_body,self__.ufv__,meta26708__$1));
});})(validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716))
;

outliner.components.index.t26707.cljs$lang$type = true;

outliner.components.index.t26707.cljs$lang$ctorStr = "outliner.components.index/t26707";

outliner.components.index.t26707.cljs$lang$ctorPrWriter = ((function (validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t26707");
});})(validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716))
;

outliner.components.index.__GT_t26707 = ((function (validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716){
return (function outliner$components$index$outline_body_$___GT_t26707(owner__$1,G__26700__$1,node__$1,input_checker26698__$1,validate__20273__auto____$1,output_checker26699__$1,input_schema26697__$1,G__26701__$1,output_schema26696__$1,outline_body__$1,ufv____$1,meta26708){
return (new outliner.components.index.t26707(owner__$1,G__26700__$1,node__$1,input_checker26698__$1,validate__20273__auto____$1,output_checker26699__$1,input_schema26697__$1,G__26701__$1,output_schema26696__$1,outline_body__$1,ufv____$1,meta26708));
});})(validate__20273__auto__,ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716))
;

}

return (new outliner.components.index.t26707(owner,G__26700,node,input_checker26698_26715,validate__20273__auto__,output_checker26699_26716,input_schema26697_26714,G__26701,output_schema26696_26713,outliner$components$index$outline_body,ufv___26712,null));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___26720 = output_checker26699_26716.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___26720)){
var error__20275__auto___26721 = temp__4126__auto___26720;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20275__auto___26721)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___26721,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26696_26713,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___26712,output_schema26696_26713,input_schema26697_26714,input_checker26698_26715,output_checker26699_26716))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_body),schema.core.make_fn_schema.call(null,output_schema26696_26713,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26697_26714], null)));

outliner.components.index.__GT_outline_body = (function() {
var outliner$components$index$__GT_outline_body = null;
var outliner$components$index$__GT_outline_body__1 = (function (cursor__23820__auto__){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__23820__auto__);
});
var outliner$components$index$__GT_outline_body__2 = (function (cursor__23820__auto__,m26695){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__23820__auto__,m26695);
});
outliner$components$index$__GT_outline_body = function(cursor__23820__auto__,m26695){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_body__1.call(this,cursor__23820__auto__);
case 2:
return outliner$components$index$__GT_outline_body__2.call(this,cursor__23820__auto__,m26695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_body__1;
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_body__2;
return outliner$components$index$__GT_outline_body;
})()
;

var ufv___27473 = schema.utils.use_fn_validation;
var output_schema26723_27474 = schema.core.Any;
var input_schema26724_27475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26725_27476 = schema.core.checker.call(null,input_schema26724_27475);
var output_checker26726_27477 = schema.core.checker.call(null,output_schema26723_27474);
/**
 * Inputs: [data owner]
 */
outliner.components.index.component = ((function (ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function outliner$components$index$component(G__26727,G__26728){
var validate__20273__auto__ = ufv___27473.get_cell();
if(cljs.core.truth_(validate__20273__auto__)){
var args__20274__auto___27478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26727,G__26728], null);
var temp__4126__auto___27479 = input_checker26725_27476.call(null,args__20274__auto___27478);
if(cljs.core.truth_(temp__4126__auto___27479)){
var error__20275__auto___27480 = temp__4126__auto___27479;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20275__auto___27480)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___27480,new cljs.core.Keyword(null,"value","value",305978217),args__20274__auto___27478,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26724_27475,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20276__auto__ = (function (){var data = G__26727;
var owner = G__26728;
while(true){
if(typeof outliner.components.index.t27101 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t27101 = (function (owner,G__26728,data,input_schema26724,output_schema26723,G__26727,output_checker26726,component,input_checker26725,validate__20273__auto__,ufv__,meta27102){
this.owner = owner;
this.G__26728 = G__26728;
this.data = data;
this.input_schema26724 = input_schema26724;
this.output_schema26723 = output_schema26723;
this.G__26727 = G__26727;
this.output_checker26726 = output_checker26726;
this.component = component;
this.input_checker26725 = input_checker26725;
this.validate__20273__auto__ = validate__20273__auto__;
this.ufv__ = ufv__;
this.meta27102 = meta27102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t27101.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t27101.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (_){
var self__ = this;
var ___$1 = this;
return "component";
});})(validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;

outliner.components.index.t27101.prototype.om$core$IRenderState$ = true;

outliner.components.index.t27101.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "yeah"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h2,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,outliner.components.index.outline_head,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,React.DOM.ol,{"className": "root"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,outliner.components.index.outline_body,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))],null))))],null))));
});})(validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;

outliner.components.index.t27101.prototype.om$core$IInitState$ = true;

outliner.components.index.t27101.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (_){
var self__ = this;
var ___$1 = this;
var key_down_chan = outliner.components.index.listen.call(null,window,"keydown");
var click_chan = cljs.core.async.chan.call(null);
var base_path = om.core.path.call(null,self__.data);
var c__23737__auto___27481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (state_27317){
var state_val_27318 = (state_27317[(1)]);
if((state_val_27318 === (65))){
var state_27317__$1 = state_27317;
var statearr_27319_27482 = state_27317__$1;
(statearr_27319_27482[(2)] = null);

(statearr_27319_27482[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (70))){
var inst_27151 = (state_27317[(7)]);
var inst_27253 = cljs.core.not.call(null,inst_27151);
var state_27317__$1 = state_27317;
if(inst_27253){
var statearr_27320_27483 = state_27317__$1;
(statearr_27320_27483[(1)] = (71));

} else {
var statearr_27321_27484 = state_27317__$1;
(statearr_27321_27484[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (62))){
var inst_27237 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27322_27485 = state_27317__$1;
(statearr_27322_27485[(2)] = inst_27237);

(statearr_27322_27485[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (74))){
var inst_27188 = (state_27317[(8)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27188)){
var statearr_27323_27486 = state_27317__$1;
(statearr_27323_27486[(1)] = (75));

} else {
var statearr_27324_27487 = state_27317__$1;
(statearr_27324_27487[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (7))){
var inst_27312 = (state_27317[(2)]);
var state_27317__$1 = (function (){var statearr_27325 = state_27317;
(statearr_27325[(9)] = inst_27312);

return statearr_27325;
})();
var statearr_27326_27488 = state_27317__$1;
(statearr_27326_27488[(2)] = null);

(statearr_27326_27488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (59))){
var inst_27196 = (state_27317[(10)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27196)){
var statearr_27327_27489 = state_27317__$1;
(statearr_27327_27489[(1)] = (60));

} else {
var statearr_27328_27490 = state_27317__$1;
(statearr_27328_27490[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (86))){
var inst_27167 = (state_27317[(11)]);
var inst_27196 = (state_27317[(10)]);
var inst_27151 = (state_27317[(7)]);
var inst_27149 = (state_27317[(12)]);
var inst_27121 = (state_27317[(13)]);
var inst_27116 = (state_27317[(14)]);
var inst_27120 = (state_27317[(15)]);
var inst_27188 = (state_27317[(8)]);
var inst_27114 = (state_27317[(16)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27115 = (state_27317[(19)]);
var inst_27147 = (state_27317[(20)]);
var inst_27172 = (state_27317[(21)]);
var inst_27153 = (state_27317[(22)]);
var inst_27283 = (function (){var val__23746__auto__ = inst_27115;
var up_path = inst_27188;
var current_child_idx = inst_27150;
var is_root = inst_27151;
var ret27108 = inst_27114;
var vec__27109 = inst_27114;
var parent_children = inst_27172;
var ch27107 = inst_27116;
var parent = inst_27167;
var G__27106 = click_chan;
var down_path = inst_27196;
var command = inst_27147;
var e = inst_27120;
var parent_path = inst_27161;
var current_path = inst_27149;
var G__27105 = key_down_chan;
var c = inst_27121;
var current = inst_27153;
var vec__27119 = inst_27114;
return ((function (val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (d){
if(cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(current))){
return cljs.core.update_in.call(null,d,current_path,cljs.core.dissoc,new cljs.core.Keyword(null,"editing","editing",1365491601));
} else {
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"editing","editing",1365491601)),true);
}
});
;})(val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
})();
var inst_27284 = om.core.transact_BANG_.call(null,self__.data,inst_27283);
var state_27317__$1 = state_27317;
var statearr_27329_27491 = state_27317__$1;
(statearr_27329_27491[(2)] = inst_27284);

(statearr_27329_27491[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (20))){
var inst_27149 = (state_27317[(12)]);
var inst_27156 = cljs.core.count.call(null,inst_27149);
var inst_27157 = (inst_27156 - (2));
var inst_27158 = cljs.core.subvec.call(null,inst_27149,(0),inst_27157);
var state_27317__$1 = state_27317;
var statearr_27330_27492 = state_27317__$1;
(statearr_27330_27492[(2)] = inst_27158);

(statearr_27330_27492[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (72))){
var state_27317__$1 = state_27317;
var statearr_27331_27493 = state_27317__$1;
(statearr_27331_27493[(2)] = null);

(statearr_27331_27493[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (58))){
var inst_27227 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27332_27494 = state_27317__$1;
(statearr_27332_27494[(2)] = inst_27227);

(statearr_27332_27494[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (60))){
var inst_27167 = (state_27317[(11)]);
var inst_27196 = (state_27317[(10)]);
var inst_27151 = (state_27317[(7)]);
var inst_27149 = (state_27317[(12)]);
var inst_27121 = (state_27317[(13)]);
var inst_27116 = (state_27317[(14)]);
var inst_27120 = (state_27317[(15)]);
var inst_27188 = (state_27317[(8)]);
var inst_27114 = (state_27317[(16)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27115 = (state_27317[(19)]);
var inst_27147 = (state_27317[(20)]);
var inst_27172 = (state_27317[(21)]);
var inst_27153 = (state_27317[(22)]);
var inst_27230 = cljs.core.deref.call(null,self__.data);
var inst_27231 = cljs.core.get_in.call(null,inst_27230,inst_27196);
var inst_27232 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_27196);
var inst_27233 = (function (){var val__23746__auto__ = inst_27115;
var up_path = inst_27188;
var current_child_idx = inst_27150;
var is_root = inst_27151;
var ret27108 = inst_27114;
var vec__27109 = inst_27114;
var parent_children = inst_27172;
var ch27107 = inst_27116;
var parent = inst_27167;
var G__27106 = click_chan;
var down_path = inst_27196;
var command = inst_27147;
var swap_node = inst_27231;
var e = inst_27120;
var parent_path = inst_27161;
var current_path = inst_27149;
var G__27105 = key_down_chan;
var c = inst_27121;
var current = inst_27153;
var vec__27119 = inst_27114;
return ((function (val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,swap_node,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,inst_27230,inst_27231,inst_27232,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),down_path,current);
});
;})(val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,swap_node,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,inst_27230,inst_27231,inst_27232,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
})();
var inst_27234 = om.core.transact_BANG_.call(null,self__.data,inst_27233);
var state_27317__$1 = (function (){var statearr_27333 = state_27317;
(statearr_27333[(23)] = inst_27232);

return statearr_27333;
})();
var statearr_27334_27495 = state_27317__$1;
(statearr_27334_27495[(2)] = inst_27234);

(statearr_27334_27495[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (27))){
var inst_27167 = (state_27317[(11)]);
var state_27317__$1 = state_27317;
var statearr_27335_27496 = state_27317__$1;
(statearr_27335_27496[(2)] = inst_27167);

(statearr_27335_27496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (1))){
var state_27317__$1 = state_27317;
var statearr_27336_27497 = state_27317__$1;
(statearr_27336_27497[(2)] = null);

(statearr_27336_27497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (69))){
var inst_27167 = (state_27317[(11)]);
var inst_27196 = (state_27317[(10)]);
var inst_27151 = (state_27317[(7)]);
var inst_27149 = (state_27317[(12)]);
var inst_27121 = (state_27317[(13)]);
var inst_27116 = (state_27317[(14)]);
var inst_27120 = (state_27317[(15)]);
var inst_27188 = (state_27317[(8)]);
var inst_27114 = (state_27317[(16)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27115 = (state_27317[(19)]);
var inst_27147 = (state_27317[(20)]);
var inst_27172 = (state_27317[(21)]);
var inst_27153 = (state_27317[(22)]);
var inst_27245 = (state_27317[(2)]);
var inst_27246 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_27245);
var inst_27247 = (function (){var val__23746__auto__ = inst_27115;
var up_path = inst_27188;
var current_child_idx = inst_27150;
var is_root = inst_27151;
var ret27108 = inst_27114;
var vec__27109 = inst_27114;
var parent_children = inst_27172;
var ch27107 = inst_27116;
var parent = inst_27167;
var G__27106 = click_chan;
var down_path = inst_27196;
var command = inst_27147;
var e = inst_27120;
var parent_path = inst_27161;
var current_path = inst_27149;
var G__27105 = key_down_chan;
var c = inst_27121;
var current = inst_27153;
var vec__27119 = inst_27114;
return ((function (val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,inst_27245,inst_27246,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,inst_27245,inst_27246,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
})();
var inst_27248 = om.core.transact_BANG_.call(null,self__.data,inst_27247);
var state_27317__$1 = (function (){var statearr_27337 = state_27317;
(statearr_27337[(24)] = inst_27246);

return statearr_27337;
})();
var statearr_27338_27498 = state_27317__$1;
(statearr_27338_27498[(2)] = inst_27248);

(statearr_27338_27498[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (24))){
var inst_27161 = (state_27317[(18)]);
var state_27317__$1 = state_27317;
var statearr_27339_27499 = state_27317__$1;
(statearr_27339_27499[(2)] = inst_27161);

(statearr_27339_27499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (55))){
var inst_27188 = (state_27317[(8)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27188)){
var statearr_27340_27500 = state_27317__$1;
(statearr_27340_27500[(1)] = (56));

} else {
var statearr_27341_27501 = state_27317__$1;
(statearr_27341_27501[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (85))){
var inst_27151 = (state_27317[(7)]);
var inst_27281 = cljs.core.not.call(null,inst_27151);
var state_27317__$1 = state_27317;
if(inst_27281){
var statearr_27342_27502 = state_27317__$1;
(statearr_27342_27502[(1)] = (86));

} else {
var statearr_27343_27503 = state_27317__$1;
(statearr_27343_27503[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (39))){
var state_27317__$1 = state_27317;
var statearr_27344_27504 = state_27317__$1;
(statearr_27344_27504[(2)] = false);

(statearr_27344_27504[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (88))){
var inst_27287 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27345_27505 = state_27317__$1;
(statearr_27345_27505[(2)] = inst_27287);

(statearr_27345_27505[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (46))){
var inst_27196 = (state_27317[(10)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27196)){
var statearr_27346_27506 = state_27317__$1;
(statearr_27346_27506[(1)] = (47));

} else {
var statearr_27347_27507 = state_27317__$1;
(statearr_27347_27507[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (4))){
var inst_27116 = (state_27317[(14)]);
var inst_27114 = (state_27317[(16)]);
var inst_27114__$1 = (state_27317[(2)]);
var inst_27115 = cljs.core.nth.call(null,inst_27114__$1,(0),null);
var inst_27116__$1 = cljs.core.nth.call(null,inst_27114__$1,(1),null);
var inst_27117 = cljs.core._EQ_.call(null,inst_27116__$1,key_down_chan);
var state_27317__$1 = (function (){var statearr_27348 = state_27317;
(statearr_27348[(14)] = inst_27116__$1);

(statearr_27348[(16)] = inst_27114__$1);

(statearr_27348[(19)] = inst_27115);

return statearr_27348;
})();
if(inst_27117){
var statearr_27349_27508 = state_27317__$1;
(statearr_27349_27508[(1)] = (5));

} else {
var statearr_27350_27509 = state_27317__$1;
(statearr_27350_27509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (77))){
var inst_27266 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27351_27510 = state_27317__$1;
(statearr_27351_27510[(2)] = inst_27266);

(statearr_27351_27510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (95))){
var inst_27308 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27352_27511 = state_27317__$1;
(statearr_27352_27511[(2)] = inst_27308);

(statearr_27352_27511[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (54))){
var inst_27196 = (state_27317[(10)]);
var inst_27149 = (state_27317[(12)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27172 = (state_27317[(21)]);
var inst_27153 = (state_27317[(22)]);
var inst_27216 = outliner.components.index.gen_right_path.call(null,inst_27149,inst_27153,inst_27150,inst_27161,inst_27172,inst_27196,self__.data);
var inst_27217 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_27216);
var state_27317__$1 = state_27317;
var statearr_27353_27512 = state_27317__$1;
(statearr_27353_27512[(2)] = inst_27217);

(statearr_27353_27512[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (92))){
var inst_27310 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27354_27513 = state_27317__$1;
(statearr_27354_27513[(2)] = inst_27310);

(statearr_27354_27513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (15))){
var inst_27134 = (state_27317[(25)]);
var state_27317__$1 = state_27317;
var statearr_27355_27514 = state_27317__$1;
(statearr_27355_27514[(2)] = inst_27134);

(statearr_27355_27514[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (48))){
var state_27317__$1 = state_27317;
var statearr_27356_27515 = state_27317__$1;
(statearr_27356_27515[(2)] = null);

(statearr_27356_27515[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (50))){
var inst_27151 = (state_27317[(7)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27151)){
var statearr_27357_27516 = state_27317__$1;
(statearr_27357_27516[(1)] = (51));

} else {
var statearr_27358_27517 = state_27317__$1;
(statearr_27358_27517[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (75))){
var inst_27167 = (state_27317[(11)]);
var inst_27196 = (state_27317[(10)]);
var inst_27151 = (state_27317[(7)]);
var inst_27149 = (state_27317[(12)]);
var inst_27121 = (state_27317[(13)]);
var inst_27116 = (state_27317[(14)]);
var inst_27120 = (state_27317[(15)]);
var inst_27188 = (state_27317[(8)]);
var inst_27114 = (state_27317[(16)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27115 = (state_27317[(19)]);
var inst_27147 = (state_27317[(20)]);
var inst_27172 = (state_27317[(21)]);
var inst_27153 = (state_27317[(22)]);
var inst_27262 = (function (){var val__23746__auto__ = inst_27115;
var up_path = inst_27188;
var current_child_idx = inst_27150;
var is_root = inst_27151;
var ret27108 = inst_27114;
var vec__27109 = inst_27114;
var parent_children = inst_27172;
var ch27107 = inst_27116;
var parent = inst_27167;
var G__27106 = click_chan;
var down_path = inst_27196;
var command = inst_27147;
var e = inst_27120;
var parent_path = inst_27161;
var current_path = inst_27149;
var G__27105 = key_down_chan;
var c = inst_27121;
var current = inst_27153;
var vec__27119 = inst_27114;
return ((function (val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = cljs.core.conj.call(null,up_path,new cljs.core.Keyword(null,"children","children",-940561982));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.conj.call(null,destination_children,current);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,(cljs.core.count.call(null,new_destination_children) - (1))));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children),up_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359)),destination_path,new_destination_children);
});
;})(val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
})();
var inst_27263 = om.core.transact_BANG_.call(null,self__.data,inst_27262);
var state_27317__$1 = state_27317;
var statearr_27359_27519 = state_27317__$1;
(statearr_27359_27519[(2)] = inst_27263);

(statearr_27359_27519[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (21))){
var inst_27154 = (state_27317[(26)]);
var state_27317__$1 = state_27317;
var statearr_27360_27520 = state_27317__$1;
(statearr_27360_27520[(2)] = inst_27154);

(statearr_27360_27520[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (31))){
var inst_27150 = (state_27317[(17)]);
var inst_27172 = (state_27317[(21)]);
var inst_27188 = (state_27317[(2)]);
var inst_27189 = (inst_27150 + (1));
var inst_27190 = cljs.core.get.call(null,inst_27172,inst_27189,false);
var state_27317__$1 = (function (){var statearr_27361 = state_27317;
(statearr_27361[(8)] = inst_27188);

return statearr_27361;
})();
if(cljs.core.truth_(inst_27190)){
var statearr_27362_27521 = state_27317__$1;
(statearr_27362_27521[(1)] = (38));

} else {
var statearr_27363_27522 = state_27317__$1;
(statearr_27363_27522[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (32))){
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27178 = (inst_27150 - (1));
var inst_27179 = cljs.core.conj.call(null,inst_27161,new cljs.core.Keyword(null,"children","children",-940561982),inst_27178);
var state_27317__$1 = state_27317;
var statearr_27364_27523 = state_27317__$1;
(statearr_27364_27523[(2)] = inst_27179);

(statearr_27364_27523[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (40))){
var inst_27147 = (state_27317[(20)]);
var inst_27196 = (state_27317[(2)]);
var state_27317__$1 = (function (){var statearr_27365 = state_27317;
(statearr_27365[(10)] = inst_27196);

return statearr_27365;
})();
var G__27366_27524 = (((inst_27147 instanceof cljs.core.Keyword))?inst_27147.fqn:null);
switch (G__27366_27524) {
case "left-shift-node":
var statearr_27367_27526 = state_27317__$1;
(statearr_27367_27526[(1)] = (78));


break;
case "node-down":
var statearr_27368_27527 = state_27317__$1;
(statearr_27368_27527[(1)] = (59));


break;
case "cursor-right":
var statearr_27369_27528 = state_27317__$1;
(statearr_27369_27528[(1)] = (54));


break;
case "toggle-editing":
var statearr_27370_27529 = state_27317__$1;
(statearr_27370_27529[(1)] = (85));


break;
case "right-shift-node":
var statearr_27371_27530 = state_27317__$1;
(statearr_27371_27530[(1)] = (74));


break;
case "toggle-closed":
var statearr_27372_27531 = state_27317__$1;
(statearr_27372_27531[(1)] = (70));


break;
case "node-up":
var statearr_27373_27532 = state_27317__$1;
(statearr_27373_27532[(1)] = (55));


break;
case "cursor-left":
var statearr_27374_27533 = state_27317__$1;
(statearr_27374_27533[(1)] = (50));


break;
case "cursor-up":
var statearr_27375_27534 = state_27317__$1;
(statearr_27375_27534[(1)] = (42));


break;
case "cursor-down":
var statearr_27376_27535 = state_27317__$1;
(statearr_27376_27535[(1)] = (46));


break;
case "destroy-node":
var statearr_27377_27536 = state_27317__$1;
(statearr_27377_27536[(1)] = (63));


break;
default:
var statearr_27378_27537 = state_27317__$1;
(statearr_27378_27537[(1)] = (89));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (91))){
var inst_27116 = (state_27317[(14)]);
var inst_27304 = cljs.core._EQ_.call(null,inst_27116,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_27317__$1 = state_27317;
if(inst_27304){
var statearr_27379_27538 = state_27317__$1;
(statearr_27379_27538[(1)] = (93));

} else {
var statearr_27380_27539 = state_27317__$1;
(statearr_27380_27539[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (56))){
var inst_27167 = (state_27317[(11)]);
var inst_27196 = (state_27317[(10)]);
var inst_27151 = (state_27317[(7)]);
var inst_27149 = (state_27317[(12)]);
var inst_27121 = (state_27317[(13)]);
var inst_27116 = (state_27317[(14)]);
var inst_27120 = (state_27317[(15)]);
var inst_27188 = (state_27317[(8)]);
var inst_27114 = (state_27317[(16)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27115 = (state_27317[(19)]);
var inst_27147 = (state_27317[(20)]);
var inst_27172 = (state_27317[(21)]);
var inst_27153 = (state_27317[(22)]);
var inst_27220 = cljs.core.deref.call(null,self__.data);
var inst_27221 = cljs.core.get_in.call(null,inst_27220,inst_27188);
var inst_27222 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_27188);
var inst_27223 = (function (){var val__23746__auto__ = inst_27115;
var up_path = inst_27188;
var current_child_idx = inst_27150;
var is_root = inst_27151;
var ret27108 = inst_27114;
var vec__27109 = inst_27114;
var parent_children = inst_27172;
var ch27107 = inst_27116;
var parent = inst_27167;
var G__27106 = click_chan;
var down_path = inst_27196;
var command = inst_27147;
var swap_node = inst_27221;
var e = inst_27120;
var parent_path = inst_27161;
var current_path = inst_27149;
var G__27105 = key_down_chan;
var c = inst_27121;
var current = inst_27153;
var vec__27119 = inst_27114;
return ((function (val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,swap_node,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,inst_27220,inst_27221,inst_27222,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),up_path,current);
});
;})(val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,swap_node,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,inst_27220,inst_27221,inst_27222,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
})();
var inst_27224 = om.core.transact_BANG_.call(null,self__.data,inst_27223);
var state_27317__$1 = (function (){var statearr_27381 = state_27317;
(statearr_27381[(27)] = inst_27222);

return statearr_27381;
})();
var statearr_27382_27540 = state_27317__$1;
(statearr_27382_27540[(2)] = inst_27224);

(statearr_27382_27540[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (33))){
var state_27317__$1 = state_27317;
var statearr_27383_27541 = state_27317__$1;
(statearr_27383_27541[(1)] = (35));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (13))){
var inst_27120 = (state_27317[(15)]);
var inst_27134 = (state_27317[(25)]);
var inst_27133 = (state_27317[(2)]);
var inst_27134__$1 = inst_27120.ctrlKey;
var state_27317__$1 = (function (){var statearr_27385 = state_27317;
(statearr_27385[(28)] = inst_27133);

(statearr_27385[(25)] = inst_27134__$1);

return statearr_27385;
})();
if(cljs.core.truth_(inst_27134__$1)){
var statearr_27386_27542 = state_27317__$1;
(statearr_27386_27542[(1)] = (14));

} else {
var statearr_27387_27543 = state_27317__$1;
(statearr_27387_27543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (22))){
var inst_27161 = (state_27317[(18)]);
var inst_27161__$1 = (state_27317[(2)]);
var state_27317__$1 = (function (){var statearr_27388 = state_27317;
(statearr_27388[(18)] = inst_27161__$1);

return statearr_27388;
})();
if(cljs.core.truth_(inst_27161__$1)){
var statearr_27389_27544 = state_27317__$1;
(statearr_27389_27544[(1)] = (23));

} else {
var statearr_27390_27545 = state_27317__$1;
(statearr_27390_27545[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (90))){
var inst_27114 = (state_27317[(16)]);
var inst_27297 = cljs.core.nth.call(null,inst_27114,(0),null);
var inst_27298 = cljs.core.nth.call(null,inst_27114,(1),null);
var inst_27299 = new cljs.core.Keyword(null,"new-path","new-path",1732999939).cljs$core$IFn$_invoke$arity$1(inst_27297);
var inst_27300 = cljs.core.count.call(null,base_path);
var inst_27301 = cljs.core.subvec.call(null,inst_27299,inst_27300);
var inst_27302 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_27301);
var state_27317__$1 = (function (){var statearr_27391 = state_27317;
(statearr_27391[(29)] = inst_27298);

return statearr_27391;
})();
var statearr_27392_27546 = state_27317__$1;
(statearr_27392_27546[(2)] = inst_27302);

(statearr_27392_27546[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (36))){
var state_27317__$1 = state_27317;
var statearr_27393_27547 = state_27317__$1;
(statearr_27393_27547[(2)] = null);

(statearr_27393_27547[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (41))){
var inst_27292 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27394_27548 = state_27317__$1;
(statearr_27394_27548[(2)] = inst_27292);

(statearr_27394_27548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (89))){
var state_27317__$1 = state_27317;
var statearr_27395_27549 = state_27317__$1;
(statearr_27395_27549[(2)] = null);

(statearr_27395_27549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (43))){
var inst_27188 = (state_27317[(8)]);
var inst_27198 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_27188);
var state_27317__$1 = state_27317;
var statearr_27396_27550 = state_27317__$1;
(statearr_27396_27550[(2)] = inst_27198);

(statearr_27396_27550[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (61))){
var state_27317__$1 = state_27317;
var statearr_27397_27551 = state_27317__$1;
(statearr_27397_27551[(2)] = null);

(statearr_27397_27551[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (29))){
var state_27317__$1 = state_27317;
var statearr_27398_27552 = state_27317__$1;
(statearr_27398_27552[(2)] = false);

(statearr_27398_27552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (44))){
var state_27317__$1 = state_27317;
var statearr_27399_27553 = state_27317__$1;
(statearr_27399_27553[(2)] = null);

(statearr_27399_27553[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (93))){
var inst_27115 = (state_27317[(19)]);
var state_27317__$1 = state_27317;
var statearr_27400_27554 = state_27317__$1;
(statearr_27400_27554[(2)] = inst_27115);

(statearr_27400_27554[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (6))){
var inst_27116 = (state_27317[(14)]);
var inst_27294 = cljs.core._EQ_.call(null,inst_27116,click_chan);
var state_27317__$1 = state_27317;
if(inst_27294){
var statearr_27401_27555 = state_27317__$1;
(statearr_27401_27555[(1)] = (90));

} else {
var statearr_27402_27556 = state_27317__$1;
(statearr_27402_27556[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (28))){
var inst_27151 = (state_27317[(7)]);
var inst_27172 = (state_27317[(2)]);
var state_27317__$1 = (function (){var statearr_27403 = state_27317;
(statearr_27403[(21)] = inst_27172);

return statearr_27403;
})();
if(cljs.core.truth_(inst_27151)){
var statearr_27404_27557 = state_27317__$1;
(statearr_27404_27557[(1)] = (29));

} else {
var statearr_27405_27558 = state_27317__$1;
(statearr_27405_27558[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (64))){
var inst_27151 = (state_27317[(7)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27151)){
var statearr_27406_27559 = state_27317__$1;
(statearr_27406_27559[(1)] = (67));

} else {
var statearr_27407_27560 = state_27317__$1;
(statearr_27407_27560[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (51))){
var inst_27149 = (state_27317[(12)]);
var state_27317__$1 = state_27317;
var statearr_27408_27561 = state_27317__$1;
(statearr_27408_27561[(2)] = inst_27149);

(statearr_27408_27561[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (25))){
var inst_27167 = (state_27317[(11)]);
var inst_27167__$1 = (state_27317[(2)]);
var state_27317__$1 = (function (){var statearr_27409 = state_27317;
(statearr_27409[(11)] = inst_27167__$1);

return statearr_27409;
})();
if(cljs.core.truth_(inst_27167__$1)){
var statearr_27410_27562 = state_27317__$1;
(statearr_27410_27562[(1)] = (26));

} else {
var statearr_27411_27563 = state_27317__$1;
(statearr_27411_27563[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (34))){
var inst_27186 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27412_27564 = state_27317__$1;
(statearr_27412_27564[(2)] = inst_27186);

(statearr_27412_27564[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (17))){
var state_27317__$1 = state_27317;
var statearr_27413_27565 = state_27317__$1;
(statearr_27413_27565[(2)] = new cljs.core.Keyword(null,"meta","meta",1499536964));

(statearr_27413_27565[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (3))){
var inst_27315 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27317__$1,inst_27315);
} else {
if((state_val_27318 === (12))){
var inst_27129 = (state_27317[(30)]);
var state_27317__$1 = state_27317;
var statearr_27414_27566 = state_27317__$1;
(statearr_27414_27566[(2)] = inst_27129);

(statearr_27414_27566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (2))){
var inst_27110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27111 = [key_down_chan,click_chan];
var inst_27112 = (new cljs.core.PersistentVector(null,2,(5),inst_27110,inst_27111,null));
var state_27317__$1 = state_27317;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27317__$1,(4),inst_27112);
} else {
if((state_val_27318 === (66))){
var inst_27251 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27415_27567 = state_27317__$1;
(statearr_27415_27567[(2)] = inst_27251);

(statearr_27415_27567[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (23))){
var inst_27161 = (state_27317[(18)]);
var inst_27163 = cljs.core.deref.call(null,self__.data);
var inst_27164 = cljs.core.get_in.call(null,inst_27163,inst_27161);
var state_27317__$1 = state_27317;
var statearr_27416_27568 = state_27317__$1;
(statearr_27416_27568[(2)] = inst_27164);

(statearr_27416_27568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (47))){
var inst_27196 = (state_27317[(10)]);
var inst_27204 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_27196);
var state_27317__$1 = state_27317;
var statearr_27417_27569 = state_27317__$1;
(statearr_27417_27569[(2)] = inst_27204);

(statearr_27417_27569[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (35))){
var state_27317__$1 = state_27317;
var statearr_27418_27570 = state_27317__$1;
(statearr_27418_27570[(2)] = false);

(statearr_27418_27570[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (82))){
var inst_27167 = (state_27317[(11)]);
var inst_27196 = (state_27317[(10)]);
var inst_27151 = (state_27317[(7)]);
var inst_27149 = (state_27317[(12)]);
var inst_27121 = (state_27317[(13)]);
var inst_27116 = (state_27317[(14)]);
var inst_27120 = (state_27317[(15)]);
var inst_27188 = (state_27317[(8)]);
var inst_27114 = (state_27317[(16)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27115 = (state_27317[(19)]);
var inst_27147 = (state_27317[(20)]);
var inst_27172 = (state_27317[(21)]);
var inst_27153 = (state_27317[(22)]);
var inst_27275 = (function (){var val__23746__auto__ = inst_27115;
var up_path = inst_27188;
var current_child_idx = inst_27150;
var is_root = inst_27151;
var ret27108 = inst_27114;
var vec__27109 = inst_27114;
var parent_children = inst_27172;
var ch27107 = inst_27116;
var parent = inst_27167;
var G__27106 = click_chan;
var down_path = inst_27196;
var command = inst_27147;
var e = inst_27120;
var parent_path = inst_27161;
var current_path = inst_27149;
var G__27105 = key_down_chan;
var c = inst_27121;
var current = inst_27153;
var vec__27119 = inst_27114;
return ((function (val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = outliner.components.index.get_indexless.call(null,parent_path);
var destination_index = (cljs.core.last.call(null,parent_path) + (1));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,destination_children,(0),destination_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current], null),cljs.core.subvec.call(null,destination_children,destination_index)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,destination_index));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,destination_path,new_destination_children),cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
})();
var inst_27276 = om.core.transact_BANG_.call(null,self__.data,inst_27275);
var state_27317__$1 = state_27317;
var statearr_27419_27571 = state_27317__$1;
(statearr_27419_27571[(2)] = inst_27276);

(statearr_27419_27571[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (76))){
var state_27317__$1 = state_27317;
var statearr_27420_27572 = state_27317__$1;
(statearr_27420_27572[(2)] = null);

(statearr_27420_27572[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (19))){
var inst_27151 = (state_27317[(7)]);
var inst_27149 = (state_27317[(12)]);
var inst_27133 = (state_27317[(28)]);
var inst_27123 = (state_27317[(31)]);
var inst_27128 = (state_27317[(32)]);
var inst_27122 = (state_27317[(33)]);
var inst_27154 = (state_27317[(26)]);
var inst_27138 = (state_27317[(34)]);
var inst_27143 = (state_27317[(2)]);
var inst_27144 = [inst_27123,inst_27128,inst_27133,inst_27138,inst_27143];
var inst_27145 = (new cljs.core.PersistentVector(null,5,(5),inst_27122,inst_27144,null));
var inst_27146 = cljs.core.filter.call(null,cljs.core.identity,inst_27145);
var inst_27147 = outliner.components.index.keyevent__GT_command.call(null,inst_27146);
var inst_27148 = om.core.get_state.call(null,self__.owner);
var inst_27149__$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(inst_27148);
var inst_27150 = cljs.core.last.call(null,inst_27149__$1);
var inst_27151__$1 = cljs.core._EQ_.call(null,outliner.components.index.root_node,inst_27149__$1);
var inst_27152 = cljs.core.deref.call(null,self__.data);
var inst_27153 = cljs.core.get_in.call(null,inst_27152,inst_27149__$1);
var inst_27154__$1 = !(inst_27151__$1);
var state_27317__$1 = (function (){var statearr_27421 = state_27317;
(statearr_27421[(7)] = inst_27151__$1);

(statearr_27421[(12)] = inst_27149__$1);

(statearr_27421[(17)] = inst_27150);

(statearr_27421[(20)] = inst_27147);

(statearr_27421[(26)] = inst_27154__$1);

(statearr_27421[(22)] = inst_27153);

return statearr_27421;
})();
if(inst_27154__$1){
var statearr_27422_27573 = state_27317__$1;
(statearr_27422_27573[(1)] = (20));

} else {
var statearr_27423_27574 = state_27317__$1;
(statearr_27423_27574[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (57))){
var state_27317__$1 = state_27317;
var statearr_27424_27575 = state_27317__$1;
(statearr_27424_27575[(2)] = null);

(statearr_27424_27575[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (68))){
var inst_27188 = (state_27317[(8)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27243 = outliner.components.index.gen_left_path.call(null,inst_27150,inst_27161,inst_27188,self__.data);
var state_27317__$1 = state_27317;
var statearr_27425_27576 = state_27317__$1;
(statearr_27425_27576[(2)] = inst_27243);

(statearr_27425_27576[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (11))){
var state_27317__$1 = state_27317;
var statearr_27426_27577 = state_27317__$1;
(statearr_27426_27577[(2)] = new cljs.core.Keyword(null,"alt","alt",-3214426));

(statearr_27426_27577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (9))){
var inst_27124 = (state_27317[(35)]);
var state_27317__$1 = state_27317;
var statearr_27427_27578 = state_27317__$1;
(statearr_27427_27578[(2)] = inst_27124);

(statearr_27427_27578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (5))){
var inst_27124 = (state_27317[(35)]);
var inst_27120 = (state_27317[(15)]);
var inst_27114 = (state_27317[(16)]);
var inst_27120__$1 = cljs.core.nth.call(null,inst_27114,(0),null);
var inst_27121 = cljs.core.nth.call(null,inst_27114,(1),null);
var inst_27122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27123 = inst_27120__$1.keyCode;
var inst_27124__$1 = inst_27120__$1.shiftKey;
var state_27317__$1 = (function (){var statearr_27428 = state_27317;
(statearr_27428[(35)] = inst_27124__$1);

(statearr_27428[(13)] = inst_27121);

(statearr_27428[(15)] = inst_27120__$1);

(statearr_27428[(31)] = inst_27123);

(statearr_27428[(33)] = inst_27122);

return statearr_27428;
})();
if(cljs.core.truth_(inst_27124__$1)){
var statearr_27429_27579 = state_27317__$1;
(statearr_27429_27579[(1)] = (8));

} else {
var statearr_27430_27580 = state_27317__$1;
(statearr_27430_27580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (83))){
var state_27317__$1 = state_27317;
var statearr_27431_27581 = state_27317__$1;
(statearr_27431_27581[(2)] = null);

(statearr_27431_27581[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (14))){
var state_27317__$1 = state_27317;
var statearr_27432_27582 = state_27317__$1;
(statearr_27432_27582[(2)] = new cljs.core.Keyword(null,"ctrl","ctrl",361402094));

(statearr_27432_27582[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (45))){
var inst_27201 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27433_27583 = state_27317__$1;
(statearr_27433_27583[(2)] = inst_27201);

(statearr_27433_27583[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (53))){
var inst_27213 = (state_27317[(2)]);
var inst_27214 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_27213);
var state_27317__$1 = state_27317;
var statearr_27434_27584 = state_27317__$1;
(statearr_27434_27584[(2)] = inst_27214);

(statearr_27434_27584[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (78))){
var inst_27161 = (state_27317[(18)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27161)){
var statearr_27435_27585 = state_27317__$1;
(statearr_27435_27585[(1)] = (79));

} else {
var statearr_27436_27586 = state_27317__$1;
(statearr_27436_27586[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (26))){
var inst_27167 = (state_27317[(11)]);
var inst_27169 = cljs.core.get.call(null,inst_27167,new cljs.core.Keyword(null,"children","children",-940561982),false);
var state_27317__$1 = state_27317;
var statearr_27437_27587 = state_27317__$1;
(statearr_27437_27587[(2)] = inst_27169);

(statearr_27437_27587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (16))){
var inst_27139 = (state_27317[(36)]);
var inst_27120 = (state_27317[(15)]);
var inst_27138 = (state_27317[(2)]);
var inst_27139__$1 = inst_27120.metaKey;
var state_27317__$1 = (function (){var statearr_27438 = state_27317;
(statearr_27438[(36)] = inst_27139__$1);

(statearr_27438[(34)] = inst_27138);

return statearr_27438;
})();
if(cljs.core.truth_(inst_27139__$1)){
var statearr_27439_27588 = state_27317__$1;
(statearr_27439_27588[(1)] = (17));

} else {
var statearr_27440_27589 = state_27317__$1;
(statearr_27440_27589[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (81))){
var inst_27273 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27273)){
var statearr_27441_27590 = state_27317__$1;
(statearr_27441_27590[(1)] = (82));

} else {
var statearr_27442_27591 = state_27317__$1;
(statearr_27442_27591[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (79))){
var inst_27161 = (state_27317[(18)]);
var inst_27269 = cljs.core._EQ_.call(null,inst_27161,outliner.components.index.root_node);
var inst_27270 = !(inst_27269);
var state_27317__$1 = state_27317;
var statearr_27443_27592 = state_27317__$1;
(statearr_27443_27592[(2)] = inst_27270);

(statearr_27443_27592[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (38))){
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27192 = (inst_27150 + (1));
var inst_27193 = cljs.core.conj.call(null,inst_27161,new cljs.core.Keyword(null,"children","children",-940561982),inst_27192);
var state_27317__$1 = state_27317;
var statearr_27444_27593 = state_27317__$1;
(statearr_27444_27593[(2)] = inst_27193);

(statearr_27444_27593[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (87))){
var state_27317__$1 = state_27317;
var statearr_27445_27594 = state_27317__$1;
(statearr_27445_27594[(2)] = null);

(statearr_27445_27594[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (30))){
var inst_27150 = (state_27317[(17)]);
var inst_27172 = (state_27317[(21)]);
var inst_27175 = (inst_27150 - (1));
var inst_27176 = cljs.core.get.call(null,inst_27172,inst_27175,false);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27176)){
var statearr_27446_27595 = state_27317__$1;
(statearr_27446_27595[(1)] = (32));

} else {
var statearr_27447_27596 = state_27317__$1;
(statearr_27447_27596[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (73))){
var inst_27259 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27448_27597 = state_27317__$1;
(statearr_27448_27597[(2)] = inst_27259);

(statearr_27448_27597[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (10))){
var inst_27129 = (state_27317[(30)]);
var inst_27120 = (state_27317[(15)]);
var inst_27128 = (state_27317[(2)]);
var inst_27129__$1 = inst_27120.altKey;
var state_27317__$1 = (function (){var statearr_27449 = state_27317;
(statearr_27449[(30)] = inst_27129__$1);

(statearr_27449[(32)] = inst_27128);

return statearr_27449;
})();
if(cljs.core.truth_(inst_27129__$1)){
var statearr_27450_27598 = state_27317__$1;
(statearr_27450_27598[(1)] = (11));

} else {
var statearr_27451_27599 = state_27317__$1;
(statearr_27451_27599[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (18))){
var inst_27139 = (state_27317[(36)]);
var state_27317__$1 = state_27317;
var statearr_27452_27600 = state_27317__$1;
(statearr_27452_27600[(2)] = inst_27139);

(statearr_27452_27600[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (52))){
var inst_27188 = (state_27317[(8)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27211 = outliner.components.index.gen_left_path.call(null,inst_27150,inst_27161,inst_27188,self__.data);
var state_27317__$1 = state_27317;
var statearr_27453_27601 = state_27317__$1;
(statearr_27453_27601[(2)] = inst_27211);

(statearr_27453_27601[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (67))){
var inst_27149 = (state_27317[(12)]);
var state_27317__$1 = state_27317;
var statearr_27454_27602 = state_27317__$1;
(statearr_27454_27602[(2)] = inst_27149);

(statearr_27454_27602[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (71))){
var inst_27167 = (state_27317[(11)]);
var inst_27196 = (state_27317[(10)]);
var inst_27151 = (state_27317[(7)]);
var inst_27149 = (state_27317[(12)]);
var inst_27121 = (state_27317[(13)]);
var inst_27116 = (state_27317[(14)]);
var inst_27120 = (state_27317[(15)]);
var inst_27188 = (state_27317[(8)]);
var inst_27114 = (state_27317[(16)]);
var inst_27150 = (state_27317[(17)]);
var inst_27161 = (state_27317[(18)]);
var inst_27115 = (state_27317[(19)]);
var inst_27147 = (state_27317[(20)]);
var inst_27172 = (state_27317[(21)]);
var inst_27153 = (state_27317[(22)]);
var inst_27255 = (function (){var val__23746__auto__ = inst_27115;
var up_path = inst_27188;
var current_child_idx = inst_27150;
var is_root = inst_27151;
var ret27108 = inst_27114;
var vec__27109 = inst_27114;
var parent_children = inst_27172;
var ch27107 = inst_27116;
var parent = inst_27167;
var G__27106 = click_chan;
var down_path = inst_27196;
var command = inst_27147;
var e = inst_27120;
var parent_path = inst_27161;
var current_path = inst_27149;
var G__27105 = key_down_chan;
var c = inst_27121;
var current = inst_27153;
var vec__27119 = inst_27114;
return ((function (val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (d){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current))){
return cljs.core.update_in.call(null,d,current_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359));
} else {
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"closed","closed",-919675359)),true);
}
});
;})(val__23746__auto__,up_path,current_child_idx,is_root,ret27108,vec__27109,parent_children,ch27107,parent,G__27106,down_path,command,e,parent_path,current_path,G__27105,c,current,vec__27119,inst_27167,inst_27196,inst_27151,inst_27149,inst_27121,inst_27116,inst_27120,inst_27188,inst_27114,inst_27150,inst_27161,inst_27115,inst_27147,inst_27172,inst_27153,state_val_27318,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
})();
var inst_27256 = om.core.transact_BANG_.call(null,self__.data,inst_27255);
var state_27317__$1 = state_27317;
var statearr_27455_27603 = state_27317__$1;
(statearr_27455_27603[(2)] = inst_27256);

(statearr_27455_27603[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (42))){
var inst_27188 = (state_27317[(8)]);
var state_27317__$1 = state_27317;
if(cljs.core.truth_(inst_27188)){
var statearr_27456_27604 = state_27317__$1;
(statearr_27456_27604[(1)] = (43));

} else {
var statearr_27457_27605 = state_27317__$1;
(statearr_27457_27605[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (80))){
var inst_27161 = (state_27317[(18)]);
var state_27317__$1 = state_27317;
var statearr_27458_27606 = state_27317__$1;
(statearr_27458_27606[(2)] = inst_27161);

(statearr_27458_27606[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (37))){
var inst_27184 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27459_27607 = state_27317__$1;
(statearr_27459_27607[(2)] = inst_27184);

(statearr_27459_27607[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (63))){
var inst_27151 = (state_27317[(7)]);
var inst_27239 = cljs.core.not.call(null,inst_27151);
var state_27317__$1 = state_27317;
if(inst_27239){
var statearr_27460_27608 = state_27317__$1;
(statearr_27460_27608[(1)] = (64));

} else {
var statearr_27461_27609 = state_27317__$1;
(statearr_27461_27609[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (94))){
var state_27317__$1 = state_27317;
var statearr_27462_27610 = state_27317__$1;
(statearr_27462_27610[(2)] = null);

(statearr_27462_27610[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (8))){
var state_27317__$1 = state_27317;
var statearr_27463_27611 = state_27317__$1;
(statearr_27463_27611[(2)] = new cljs.core.Keyword(null,"shift","shift",997140064));

(statearr_27463_27611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (49))){
var inst_27207 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27464_27612 = state_27317__$1;
(statearr_27464_27612[(2)] = inst_27207);

(statearr_27464_27612[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (84))){
var inst_27279 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27465_27613 = state_27317__$1;
(statearr_27465_27613[(2)] = inst_27279);

(statearr_27465_27613[(1)] = (41));


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
});})(c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;
return ((function (switch__23722__auto__,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function() {
var outliner$components$index$component_$_state_machine__23723__auto__ = null;
var outliner$components$index$component_$_state_machine__23723__auto____0 = (function (){
var statearr_27469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27469[(0)] = outliner$components$index$component_$_state_machine__23723__auto__);

(statearr_27469[(1)] = (1));

return statearr_27469;
});
var outliner$components$index$component_$_state_machine__23723__auto____1 = (function (state_27317){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_27317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e27470){if((e27470 instanceof Object)){
var ex__23726__auto__ = e27470;
var statearr_27471_27614 = state_27317;
(statearr_27471_27614[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27615 = state_27317;
state_27317 = G__27615;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
outliner$components$index$component_$_state_machine__23723__auto__ = function(state_27317){
switch(arguments.length){
case 0:
return outliner$components$index$component_$_state_machine__23723__auto____0.call(this);
case 1:
return outliner$components$index$component_$_state_machine__23723__auto____1.call(this,state_27317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$component_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = outliner$components$index$component_$_state_machine__23723__auto____0;
outliner$components$index$component_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$component_$_state_machine__23723__auto____1;
return outliner$components$index$component_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
})();
var state__23739__auto__ = (function (){var statearr_27472 = f__23738__auto__.call(null);
(statearr_27472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___27481);

return statearr_27472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___27481,key_down_chan,click_chan,base_path,___$1,validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
);


return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),outliner.components.index.root_node,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path], null);
});})(validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;

outliner.components.index.t27101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (_27103){
var self__ = this;
var _27103__$1 = this;
return self__.meta27102;
});})(validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;

outliner.components.index.t27101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (_27103,meta27102__$1){
var self__ = this;
var _27103__$1 = this;
return (new outliner.components.index.t27101(self__.owner,self__.G__26728,self__.data,self__.input_schema26724,self__.output_schema26723,self__.G__26727,self__.output_checker26726,self__.component,self__.input_checker26725,self__.validate__20273__auto__,self__.ufv__,meta27102__$1));
});})(validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;

outliner.components.index.t27101.cljs$lang$type = true;

outliner.components.index.t27101.cljs$lang$ctorStr = "outliner.components.index/t27101";

outliner.components.index.t27101.cljs$lang$ctorPrWriter = ((function (validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t27101");
});})(validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;

outliner.components.index.__GT_t27101 = ((function (validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477){
return (function outliner$components$index$component_$___GT_t27101(owner__$1,G__26728__$1,data__$1,input_schema26724__$1,output_schema26723__$1,G__26727__$1,output_checker26726__$1,component__$1,input_checker26725__$1,validate__20273__auto____$1,ufv____$1,meta27102){
return (new outliner.components.index.t27101(owner__$1,G__26728__$1,data__$1,input_schema26724__$1,output_schema26723__$1,G__26727__$1,output_checker26726__$1,component__$1,input_checker26725__$1,validate__20273__auto____$1,ufv____$1,meta27102));
});})(validate__20273__auto__,ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;

}

return (new outliner.components.index.t27101(owner,G__26728,data,input_schema26724_27475,output_schema26723_27474,G__26727,output_checker26726_27477,outliner$components$index$component,input_checker26725_27476,validate__20273__auto__,ufv___27473,null));
break;
}
})();
if(cljs.core.truth_(validate__20273__auto__)){
var temp__4126__auto___27616 = output_checker26726_27477.call(null,o__20276__auto__);
if(cljs.core.truth_(temp__4126__auto___27616)){
var error__20275__auto___27617 = temp__4126__auto___27616;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20275__auto___27617)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20275__auto___27617,new cljs.core.Keyword(null,"value","value",305978217),o__20276__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26723_27474,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20276__auto__;
});})(ufv___27473,output_schema26723_27474,input_schema26724_27475,input_checker26725_27476,output_checker26726_27477))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.component),schema.core.make_fn_schema.call(null,output_schema26723_27474,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26724_27475], null)));

outliner.components.index.__GT_component = (function() {
var outliner$components$index$__GT_component = null;
var outliner$components$index$__GT_component__1 = (function (cursor__23820__auto__){
return om.core.build.call(null,outliner.components.index.component,cursor__23820__auto__);
});
var outliner$components$index$__GT_component__2 = (function (cursor__23820__auto__,m26722){
return om.core.build.call(null,outliner.components.index.component,cursor__23820__auto__,m26722);
});
outliner$components$index$__GT_component = function(cursor__23820__auto__,m26722){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_component__1.call(this,cursor__23820__auto__);
case 2:
return outliner$components$index$__GT_component__2.call(this,cursor__23820__auto__,m26722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_component__1;
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_component__2;
return outliner$components$index$__GT_component;
})()
;

//# sourceMappingURL=index.js.map?rel=1427705344221