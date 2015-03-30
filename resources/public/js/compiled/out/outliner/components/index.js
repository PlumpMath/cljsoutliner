// Compiled by ClojureScript 0.0-3126 {}
goog.provide('outliner.components.index');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('goog.events');
goog.require('daviferreira.MediumEditor');
goog.require('om.core');
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
outliner.components.index.normal_keymap = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37),new cljs.core.Keyword(null,"alt","alt",-3214426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),new cljs.core.Keyword(null,"shift","shift",997140064)], null)],[new cljs.core.Keyword(null,"toggle-edit","toggle-edit",750646855),new cljs.core.Keyword(null,"node-down","node-down",-217393565),new cljs.core.Keyword(null,"right-shift-node","right-shift-node",-1851094135),new cljs.core.Keyword(null,"cursor-up","cursor-up",-1902830020),new cljs.core.Keyword(null,"cursor-down","cursor-down",-261386401),new cljs.core.Keyword(null,"node-up","node-up",-1444087570),new cljs.core.Keyword(null,"destroy-node","destroy-node",-1501394977),new cljs.core.Keyword(null,"cursor-left","cursor-left",-1993752625),new cljs.core.Keyword(null,"toggle-closed","toggle-closed",-1634014707),new cljs.core.Keyword(null,"right-shift-node","right-shift-node",-1851094135),new cljs.core.Keyword(null,"cursor-right","cursor-right",-25128121),new cljs.core.Keyword(null,"left-shift-node","left-shift-node",-2097301469),new cljs.core.Keyword(null,"left-shift-node","left-shift-node",-2097301469)]);
outliner.components.index.edit_keymap = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(27)], null),new cljs.core.Keyword(null,"toggle-edit","toggle-edit",750646855)], true, false);
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
var G__26062 = cljs.core.conj.call(null,p,new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.count.call(null,children) - (1)));
p = G__26062;
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
var G__26063 = outliner.components.index.get_parent.call(null,p);
p = G__26063;
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

var ufv___26077 = schema.utils.use_fn_validation;
var output_schema26065_26078 = schema.core.Any;
var input_schema26066_26079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"head","head",869147608,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26067_26080 = schema.core.checker.call(null,input_schema26066_26079);
var output_checker26068_26081 = schema.core.checker.call(null,output_schema26065_26078);
/**
 * Inputs: [head owner]
 */
outliner.components.index.outline_head = ((function (ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081){
return (function outliner$components$index$outline_head(G__26069,G__26070){
var validate__20255__auto__ = ufv___26077.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___26082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26069,G__26070], null);
var temp__4126__auto___26083 = input_checker26067_26080.call(null,args__20256__auto___26082);
if(cljs.core.truth_(temp__4126__auto___26083)){
var error__20257__auto___26084 = temp__4126__auto___26083;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20257__auto___26084)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___26084,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___26082,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26066_26079,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var head = G__26069;
var owner = G__26070;
while(true){
if(typeof outliner.components.index.t26074 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t26074 = (function (input_schema26066,G__26069,owner,output_schema26065,output_checker26068,outline_head,input_checker26067,head,ufv__,G__26070,validate__20255__auto__,meta26075){
this.input_schema26066 = input_schema26066;
this.G__26069 = G__26069;
this.owner = owner;
this.output_schema26065 = output_schema26065;
this.output_checker26068 = output_checker26068;
this.outline_head = outline_head;
this.input_checker26067 = input_checker26067;
this.head = head;
this.ufv__ = ufv__;
this.G__26070 = G__26070;
this.validate__20255__auto__ = validate__20255__auto__;
this.meta26075 = meta26075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t26074.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t26074.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-head";
});})(validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081))
;

outliner.components.index.t26074.prototype.om$core$IRender$ = true;

outliner.components.index.t26074.prototype.om$core$IRender$render$arity$1 = ((function (validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.h1,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.head)],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h2,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(self__.head)],null))))],null)));
});})(validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081))
;

outliner.components.index.t26074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081){
return (function (_26076){
var self__ = this;
var _26076__$1 = this;
return self__.meta26075;
});})(validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081))
;

outliner.components.index.t26074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081){
return (function (_26076,meta26075__$1){
var self__ = this;
var _26076__$1 = this;
return (new outliner.components.index.t26074(self__.input_schema26066,self__.G__26069,self__.owner,self__.output_schema26065,self__.output_checker26068,self__.outline_head,self__.input_checker26067,self__.head,self__.ufv__,self__.G__26070,self__.validate__20255__auto__,meta26075__$1));
});})(validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081))
;

outliner.components.index.t26074.cljs$lang$type = true;

outliner.components.index.t26074.cljs$lang$ctorStr = "outliner.components.index/t26074";

outliner.components.index.t26074.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t26074");
});})(validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081))
;

outliner.components.index.__GT_t26074 = ((function (validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081){
return (function outliner$components$index$outline_head_$___GT_t26074(input_schema26066__$1,G__26069__$1,owner__$1,output_schema26065__$1,output_checker26068__$1,outline_head__$1,input_checker26067__$1,head__$1,ufv____$1,G__26070__$1,validate__20255__auto____$1,meta26075){
return (new outliner.components.index.t26074(input_schema26066__$1,G__26069__$1,owner__$1,output_schema26065__$1,output_checker26068__$1,outline_head__$1,input_checker26067__$1,head__$1,ufv____$1,G__26070__$1,validate__20255__auto____$1,meta26075));
});})(validate__20255__auto__,ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081))
;

}

return (new outliner.components.index.t26074(input_schema26066_26079,G__26069,owner,output_schema26065_26078,output_checker26068_26081,outliner$components$index$outline_head,input_checker26067_26080,head,ufv___26077,G__26070,validate__20255__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___26085 = output_checker26068_26081.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___26085)){
var error__20257__auto___26086 = temp__4126__auto___26085;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20257__auto___26086)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___26086,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26065_26078,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___26077,output_schema26065_26078,input_schema26066_26079,input_checker26067_26080,output_checker26068_26081))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_head),schema.core.make_fn_schema.call(null,output_schema26065_26078,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26066_26079], null)));

outliner.components.index.__GT_outline_head = (function() {
var outliner$components$index$__GT_outline_head = null;
var outliner$components$index$__GT_outline_head__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22988__auto__);
});
var outliner$components$index$__GT_outline_head__2 = (function (cursor__22988__auto__,m26064){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22988__auto__,m26064);
});
outliner$components$index$__GT_outline_head = function(cursor__22988__auto__,m26064){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_head__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_outline_head__2.call(this,cursor__22988__auto__,m26064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_head__1;
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_head__2;
return outliner$components$index$__GT_outline_head;
})()
;

var ufv___26106 = schema.utils.use_fn_validation;
var output_schema26088_26107 = schema.core.Any;
var input_schema26089_26108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"node","node",-2073234571,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26090_26109 = schema.core.checker.call(null,input_schema26089_26108);
var output_checker26091_26110 = schema.core.checker.call(null,output_schema26088_26107);
/**
 * Inputs: [node owner]
 */
outliner.components.index.outline_body = ((function (ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function outliner$components$index$outline_body(G__26092,G__26093){
var validate__20255__auto__ = ufv___26106.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___26111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26092,G__26093], null);
var temp__4126__auto___26112 = input_checker26090_26109.call(null,args__20256__auto___26111);
if(cljs.core.truth_(temp__4126__auto___26112)){
var error__20257__auto___26113 = temp__4126__auto___26112;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20257__auto___26113)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___26113,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___26111,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26089_26108,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var node = G__26092;
var owner = G__26093;
while(true){
if(typeof outliner.components.index.t26100 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t26100 = (function (owner,output_checker26091,G__26093,output_schema26088,input_schema26089,node,G__26092,input_checker26090,outline_body,ufv__,validate__20255__auto__,meta26101){
this.owner = owner;
this.output_checker26091 = output_checker26091;
this.G__26093 = G__26093;
this.output_schema26088 = output_schema26088;
this.input_schema26089 = input_schema26089;
this.node = node;
this.G__26092 = G__26092;
this.input_checker26090 = input_checker26090;
this.outline_body = outline_body;
this.ufv__ = ufv__;
this.validate__20255__auto__ = validate__20255__auto__;
this.meta26101 = meta26101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t26100.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t26100.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-body";
});})(validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
;

outliner.components.index.t26100.prototype.om$core$IDidUpdate$ = true;

outliner.components.index.t26100.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__26103 = om.core.get_state.call(null,self__.owner);
var map__26103__$1 = ((cljs.core.seq_QMARK_.call(null,map__26103))?cljs.core.apply.call(null,cljs.core.hash_map,map__26103):map__26103);
var editor_ref = cljs.core.get.call(null,map__26103__$1,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
var selected = cljs.core.get.call(null,map__26103__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__26103__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var mode = cljs.core.get.call(null,map__26103__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),mode)) && (cljs.core._EQ_.call(null,om.core.path.call(null,self__.node),cljs.core.concat.call(null,base_path,selected)))){
if((om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)) == null)){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),(new MediumEditor(om.core.get_node.call(null,self__.owner,"txt"))));
} else {
return null;
}
} else {
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)))){
return om.core.transact_BANG_.call(null,self__.node,((function (map__26103,map__26103__$1,editor_ref,selected,base_path,mode,___$3,validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function (d){
var new_txt = (om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).serialize()["element-0"]["value"]);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).destroy();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),null);

return cljs.core.assoc_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_txt);
});})(map__26103,map__26103__$1,editor_ref,selected,base_path,mode,___$3,validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
);
} else {
return null;
}
}
});})(validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
;

outliner.components.index.t26100.prototype.om$core$IRenderState$ = true;

outliner.components.index.t26100.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function (_,p__26104){
var self__ = this;
var map__26105 = p__26104;
var map__26105__$1 = ((cljs.core.seq_QMARK_.call(null,map__26105))?cljs.core.apply.call(null,cljs.core.hash_map,map__26105):map__26105);
var state = map__26105__$1;
var click_chan = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512));
var selected = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.li,{"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__26105,map__26105__$1,state,click_chan,selected,base_path,validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function (e){
e.stopPropagation();

e.preventDefault();

return cljs.core.async.put_BANG_.call(null,click_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-path","new-path",1732999939),om.core.path.call(null,self__.node)], null));
});})(___$1,map__26105,map__26105__$1,state,click_chan,selected,base_path,validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
), "className": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,om.core.path.call(null,self__.node),cljs.core.concat.call(null,base_path,selected)))?"selected":""))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node)))?React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node))}, "ref": "txt", "className": "txt"},null):null),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))))?om_tools.dom.element.call(null,React.DOM.ol,om.core.build_all.call(null,self__.outline_body,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null)),cljs.core.PersistentVector.EMPTY):null)],null))));
});})(validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
;

outliner.components.index.t26100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function (_26102){
var self__ = this;
var _26102__$1 = this;
return self__.meta26101;
});})(validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
;

outliner.components.index.t26100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function (_26102,meta26101__$1){
var self__ = this;
var _26102__$1 = this;
return (new outliner.components.index.t26100(self__.owner,self__.output_checker26091,self__.G__26093,self__.output_schema26088,self__.input_schema26089,self__.node,self__.G__26092,self__.input_checker26090,self__.outline_body,self__.ufv__,self__.validate__20255__auto__,meta26101__$1));
});})(validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
;

outliner.components.index.t26100.cljs$lang$type = true;

outliner.components.index.t26100.cljs$lang$ctorStr = "outliner.components.index/t26100";

outliner.components.index.t26100.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t26100");
});})(validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
;

outliner.components.index.__GT_t26100 = ((function (validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110){
return (function outliner$components$index$outline_body_$___GT_t26100(owner__$1,output_checker26091__$1,G__26093__$1,output_schema26088__$1,input_schema26089__$1,node__$1,G__26092__$1,input_checker26090__$1,outline_body__$1,ufv____$1,validate__20255__auto____$1,meta26101){
return (new outliner.components.index.t26100(owner__$1,output_checker26091__$1,G__26093__$1,output_schema26088__$1,input_schema26089__$1,node__$1,G__26092__$1,input_checker26090__$1,outline_body__$1,ufv____$1,validate__20255__auto____$1,meta26101));
});})(validate__20255__auto__,ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
;

}

return (new outliner.components.index.t26100(owner,output_checker26091_26110,G__26093,output_schema26088_26107,input_schema26089_26108,node,G__26092,input_checker26090_26109,outliner$components$index$outline_body,ufv___26106,validate__20255__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___26114 = output_checker26091_26110.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___26114)){
var error__20257__auto___26115 = temp__4126__auto___26114;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20257__auto___26115)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___26115,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26088_26107,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___26106,output_schema26088_26107,input_schema26089_26108,input_checker26090_26109,output_checker26091_26110))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_body),schema.core.make_fn_schema.call(null,output_schema26088_26107,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26089_26108], null)));

outliner.components.index.__GT_outline_body = (function() {
var outliner$components$index$__GT_outline_body = null;
var outliner$components$index$__GT_outline_body__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22988__auto__);
});
var outliner$components$index$__GT_outline_body__2 = (function (cursor__22988__auto__,m26087){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22988__auto__,m26087);
});
outliner$components$index$__GT_outline_body = function(cursor__22988__auto__,m26087){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_body__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_outline_body__2.call(this,cursor__22988__auto__,m26087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_body__1;
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_body__2;
return outliner$components$index$__GT_outline_body;
})()
;

var ufv___26911 = schema.utils.use_fn_validation;
var output_schema26117_26912 = schema.core.Any;
var input_schema26118_26913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26119_26914 = schema.core.checker.call(null,input_schema26118_26913);
var output_checker26120_26915 = schema.core.checker.call(null,output_schema26117_26912);
/**
 * Inputs: [data owner]
 */
outliner.components.index.component = ((function (ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function outliner$components$index$component(G__26121,G__26122){
var validate__20255__auto__ = ufv___26911.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___26916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26121,G__26122], null);
var temp__4126__auto___26917 = input_checker26119_26914.call(null,args__20256__auto___26916);
if(cljs.core.truth_(temp__4126__auto___26917)){
var error__20257__auto___26918 = temp__4126__auto___26917;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20257__auto___26918)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___26918,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___26916,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26118_26913,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var data = G__26121;
var owner = G__26122;
while(true){
if(typeof outliner.components.index.t26517 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t26517 = (function (G__26122,owner,data,output_checker26120,input_checker26119,output_schema26117,input_schema26118,G__26121,component,ufv__,validate__20255__auto__,meta26518){
this.G__26122 = G__26122;
this.owner = owner;
this.data = data;
this.output_checker26120 = output_checker26120;
this.input_checker26119 = input_checker26119;
this.output_schema26117 = output_schema26117;
this.input_schema26118 = input_schema26118;
this.G__26121 = G__26121;
this.component = component;
this.ufv__ = ufv__;
this.validate__20255__auto__ = validate__20255__auto__;
this.meta26518 = meta26518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t26517.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t26517.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (_){
var self__ = this;
var ___$1 = this;
return "component";
});})(validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;

outliner.components.index.t26517.prototype.om$core$IRenderState$ = true;

outliner.components.index.t26517.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "yeah"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h2,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,outliner.components.index.outline_head,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,React.DOM.ol,{"className": "root"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,outliner.components.index.outline_body,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))],null))))],null))));
});})(validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;

outliner.components.index.t26517.prototype.om$core$IInitState$ = true;

outliner.components.index.t26517.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (_){
var self__ = this;
var ___$1 = this;
var key_down_chan = outliner.components.index.listen.call(null,window,"keydown");
var click_chan = cljs.core.async.chan.call(null);
var base_path = om.core.path.call(null,self__.data);
var c__22905__auto___26919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (){
var f__22906__auto__ = (function (){var switch__22884__auto__ = ((function (c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (state_26745){
var state_val_26746 = (state_26745[(1)]);
if((state_val_26746 === (65))){
var inst_26659 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26747_26920 = state_26745__$1;
(statearr_26747_26920[(2)] = inst_26659);

(statearr_26747_26920[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (70))){
var inst_26570 = (state_26745[(7)]);
var state_26745__$1 = state_26745;
var statearr_26748_26921 = state_26745__$1;
(statearr_26748_26921[(2)] = inst_26570);

(statearr_26748_26921[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (62))){
var inst_26617 = (state_26745[(8)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26617)){
var statearr_26749_26922 = state_26745__$1;
(statearr_26749_26922[(1)] = (63));

} else {
var statearr_26750_26923 = state_26745__$1;
(statearr_26750_26923[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (74))){
var inst_26542 = (state_26745[(9)]);
var inst_26588 = (state_26745[(10)]);
var inst_26593 = (state_26745[(11)]);
var inst_26536 = (state_26745[(12)]);
var inst_26537 = (state_26745[(13)]);
var inst_26609 = (state_26745[(14)]);
var inst_26531 = (state_26745[(15)]);
var inst_26571 = (state_26745[(16)]);
var inst_26530 = (state_26745[(17)]);
var inst_26574 = (state_26745[(18)]);
var inst_26617 = (state_26745[(8)]);
var inst_26568 = (state_26745[(19)]);
var inst_26582 = (state_26745[(20)]);
var inst_26532 = (state_26745[(21)]);
var inst_26570 = (state_26745[(7)]);
var inst_26572 = (state_26745[(22)]);
var inst_26677 = (function (){var up_path = inst_26609;
var current_child_idx = inst_26571;
var is_root = inst_26572;
var vec__26525 = inst_26530;
var parent_children = inst_26593;
var parent = inst_26588;
var val__22914__auto__ = inst_26531;
var G__26522 = click_chan;
var down_path = inst_26617;
var command = inst_26568;
var e = inst_26536;
var parent_path = inst_26582;
var current_path = inst_26570;
var vec__26535 = inst_26530;
var c = inst_26537;
var ch26523 = inst_26532;
var ret26524 = inst_26530;
var current = inst_26574;
var keyevent__GT_command = inst_26542;
var G__26521 = key_down_chan;
return ((function (up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (d){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current))){
return cljs.core.update_in.call(null,d,current_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359));
} else {
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"closed","closed",-919675359)),true);
}
});
;})(up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
})();
var inst_26678 = om.core.transact_BANG_.call(null,self__.data,inst_26677);
var state_26745__$1 = state_26745;
var statearr_26751_26924 = state_26745__$1;
(statearr_26751_26924[(2)] = inst_26678);

(statearr_26751_26924[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (7))){
var inst_26740 = (state_26745[(2)]);
var state_26745__$1 = (function (){var statearr_26752 = state_26745;
(statearr_26752[(23)] = inst_26740);

return statearr_26752;
})();
var statearr_26753_26925 = state_26745__$1;
(statearr_26753_26925[(2)] = null);

(statearr_26753_26925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (59))){
var inst_26542 = (state_26745[(9)]);
var inst_26588 = (state_26745[(10)]);
var inst_26593 = (state_26745[(11)]);
var inst_26536 = (state_26745[(12)]);
var inst_26537 = (state_26745[(13)]);
var inst_26609 = (state_26745[(14)]);
var inst_26531 = (state_26745[(15)]);
var inst_26571 = (state_26745[(16)]);
var inst_26530 = (state_26745[(17)]);
var inst_26574 = (state_26745[(18)]);
var inst_26617 = (state_26745[(8)]);
var inst_26568 = (state_26745[(19)]);
var inst_26582 = (state_26745[(20)]);
var inst_26532 = (state_26745[(21)]);
var inst_26570 = (state_26745[(7)]);
var inst_26572 = (state_26745[(22)]);
var inst_26642 = cljs.core.deref.call(null,self__.data);
var inst_26643 = cljs.core.get_in.call(null,inst_26642,inst_26609);
var inst_26644 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_26609);
var inst_26645 = (function (){var up_path = inst_26609;
var current_child_idx = inst_26571;
var is_root = inst_26572;
var vec__26525 = inst_26530;
var parent_children = inst_26593;
var parent = inst_26588;
var val__22914__auto__ = inst_26531;
var G__26522 = click_chan;
var down_path = inst_26617;
var command = inst_26568;
var swap_node = inst_26643;
var e = inst_26536;
var parent_path = inst_26582;
var current_path = inst_26570;
var vec__26535 = inst_26530;
var c = inst_26537;
var ch26523 = inst_26532;
var ret26524 = inst_26530;
var current = inst_26574;
var keyevent__GT_command = inst_26542;
var G__26521 = key_down_chan;
return ((function (up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,swap_node,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,inst_26642,inst_26643,inst_26644,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),up_path,current);
});
;})(up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,swap_node,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,inst_26642,inst_26643,inst_26644,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
})();
var inst_26646 = om.core.transact_BANG_.call(null,self__.data,inst_26645);
var state_26745__$1 = (function (){var statearr_26754 = state_26745;
(statearr_26754[(24)] = inst_26644);

return statearr_26754;
})();
var statearr_26755_26926 = state_26745__$1;
(statearr_26755_26926[(2)] = inst_26646);

(statearr_26755_26926[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (86))){
var state_26745__$1 = state_26745;
var statearr_26756_26927 = state_26745__$1;
(statearr_26756_26927[(2)] = null);

(statearr_26756_26927[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (20))){
var state_26745__$1 = state_26745;
var statearr_26757_26928 = state_26745__$1;
(statearr_26757_26928[(2)] = new cljs.core.Keyword(null,"meta","meta",1499536964));

(statearr_26757_26928[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (72))){
var inst_26542 = (state_26745[(9)]);
var inst_26588 = (state_26745[(10)]);
var inst_26593 = (state_26745[(11)]);
var inst_26536 = (state_26745[(12)]);
var inst_26537 = (state_26745[(13)]);
var inst_26609 = (state_26745[(14)]);
var inst_26531 = (state_26745[(15)]);
var inst_26571 = (state_26745[(16)]);
var inst_26530 = (state_26745[(17)]);
var inst_26574 = (state_26745[(18)]);
var inst_26617 = (state_26745[(8)]);
var inst_26568 = (state_26745[(19)]);
var inst_26582 = (state_26745[(20)]);
var inst_26532 = (state_26745[(21)]);
var inst_26570 = (state_26745[(7)]);
var inst_26572 = (state_26745[(22)]);
var inst_26667 = (state_26745[(2)]);
var inst_26668 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_26667);
var inst_26669 = (function (){var up_path = inst_26609;
var current_child_idx = inst_26571;
var is_root = inst_26572;
var vec__26525 = inst_26530;
var parent_children = inst_26593;
var parent = inst_26588;
var val__22914__auto__ = inst_26531;
var G__26522 = click_chan;
var down_path = inst_26617;
var command = inst_26568;
var e = inst_26536;
var parent_path = inst_26582;
var current_path = inst_26570;
var vec__26535 = inst_26530;
var c = inst_26537;
var ch26523 = inst_26532;
var ret26524 = inst_26530;
var current = inst_26574;
var keyevent__GT_command = inst_26542;
var G__26521 = key_down_chan;
return ((function (up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,inst_26667,inst_26668,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,inst_26667,inst_26668,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
})();
var inst_26670 = om.core.transact_BANG_.call(null,self__.data,inst_26669);
var state_26745__$1 = (function (){var statearr_26758 = state_26745;
(statearr_26758[(25)] = inst_26668);

return statearr_26758;
})();
var statearr_26759_26929 = state_26745__$1;
(statearr_26759_26929[(2)] = inst_26670);

(statearr_26759_26929[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (58))){
var inst_26609 = (state_26745[(14)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26609)){
var statearr_26760_26930 = state_26745__$1;
(statearr_26760_26930[(1)] = (59));

} else {
var statearr_26761_26931 = state_26745__$1;
(statearr_26761_26931[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (60))){
var state_26745__$1 = state_26745;
var statearr_26762_26932 = state_26745__$1;
(statearr_26762_26932[(2)] = null);

(statearr_26762_26932[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (27))){
var inst_26582 = (state_26745[(20)]);
var state_26745__$1 = state_26745;
var statearr_26763_26933 = state_26745__$1;
(statearr_26763_26933[(2)] = inst_26582);

(statearr_26763_26933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (1))){
var state_26745__$1 = state_26745;
var statearr_26764_26934 = state_26745__$1;
(statearr_26764_26934[(2)] = null);

(statearr_26764_26934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (69))){
var inst_26673 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26765_26935 = state_26745__$1;
(statearr_26765_26935[(2)] = inst_26673);

(statearr_26765_26935[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (101))){
var inst_26736 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26766_26936 = state_26745__$1;
(statearr_26766_26936[(2)] = inst_26736);

(statearr_26766_26936[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (24))){
var inst_26575 = (state_26745[(26)]);
var state_26745__$1 = state_26745;
var statearr_26767_26937 = state_26745__$1;
(statearr_26767_26937[(2)] = inst_26575);

(statearr_26767_26937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (55))){
var inst_26609 = (state_26745[(14)]);
var inst_26571 = (state_26745[(16)]);
var inst_26582 = (state_26745[(20)]);
var inst_26633 = outliner.components.index.gen_left_path.call(null,inst_26571,inst_26582,inst_26609,self__.data);
var state_26745__$1 = state_26745;
var statearr_26768_26938 = state_26745__$1;
(statearr_26768_26938[(2)] = inst_26633);

(statearr_26768_26938[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (85))){
var inst_26542 = (state_26745[(9)]);
var inst_26588 = (state_26745[(10)]);
var inst_26593 = (state_26745[(11)]);
var inst_26536 = (state_26745[(12)]);
var inst_26537 = (state_26745[(13)]);
var inst_26609 = (state_26745[(14)]);
var inst_26531 = (state_26745[(15)]);
var inst_26571 = (state_26745[(16)]);
var inst_26530 = (state_26745[(17)]);
var inst_26574 = (state_26745[(18)]);
var inst_26617 = (state_26745[(8)]);
var inst_26568 = (state_26745[(19)]);
var inst_26582 = (state_26745[(20)]);
var inst_26532 = (state_26745[(21)]);
var inst_26570 = (state_26745[(7)]);
var inst_26572 = (state_26745[(22)]);
var inst_26697 = (function (){var up_path = inst_26609;
var current_child_idx = inst_26571;
var is_root = inst_26572;
var vec__26525 = inst_26530;
var parent_children = inst_26593;
var parent = inst_26588;
var val__22914__auto__ = inst_26531;
var G__26522 = click_chan;
var down_path = inst_26617;
var command = inst_26568;
var e = inst_26536;
var parent_path = inst_26582;
var current_path = inst_26570;
var vec__26535 = inst_26530;
var c = inst_26537;
var ch26523 = inst_26532;
var ret26524 = inst_26530;
var current = inst_26574;
var keyevent__GT_command = inst_26542;
var G__26521 = key_down_chan;
return ((function (up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = outliner.components.index.get_indexless.call(null,parent_path);
var destination_index = (cljs.core.last.call(null,parent_path) + (1));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,destination_children,(0),destination_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current], null),cljs.core.subvec.call(null,destination_children,destination_index)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,destination_index));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,destination_path,new_destination_children),cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
})();
var inst_26698 = om.core.transact_BANG_.call(null,self__.data,inst_26697);
var state_26745__$1 = state_26745;
var statearr_26769_26939 = state_26745__$1;
(statearr_26769_26939[(2)] = inst_26698);

(statearr_26769_26939[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (39))){
var state_26745__$1 = state_26745;
var statearr_26770_26940 = state_26745__$1;
(statearr_26770_26940[(2)] = null);

(statearr_26770_26940[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (88))){
var inst_26572 = (state_26745[(22)]);
var inst_26703 = cljs.core.not.call(null,inst_26572);
var state_26745__$1 = state_26745;
if(inst_26703){
var statearr_26771_26941 = state_26745__$1;
(statearr_26771_26941[(1)] = (89));

} else {
var statearr_26772_26942 = state_26745__$1;
(statearr_26772_26942[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (46))){
var inst_26609 = (state_26745[(14)]);
var inst_26620 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_26609);
var state_26745__$1 = state_26745;
var statearr_26773_26943 = state_26745__$1;
(statearr_26773_26943[(2)] = inst_26620);

(statearr_26773_26943[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (4))){
var inst_26530 = (state_26745[(17)]);
var inst_26532 = (state_26745[(21)]);
var inst_26530__$1 = (state_26745[(2)]);
var inst_26531 = cljs.core.nth.call(null,inst_26530__$1,(0),null);
var inst_26532__$1 = cljs.core.nth.call(null,inst_26530__$1,(1),null);
var inst_26533 = cljs.core._EQ_.call(null,inst_26532__$1,key_down_chan);
var state_26745__$1 = (function (){var statearr_26774 = state_26745;
(statearr_26774[(15)] = inst_26531);

(statearr_26774[(17)] = inst_26530__$1);

(statearr_26774[(21)] = inst_26532__$1);

return statearr_26774;
})();
if(inst_26533){
var statearr_26775_26944 = state_26745__$1;
(statearr_26775_26944[(1)] = (5));

} else {
var statearr_26776_26945 = state_26745__$1;
(statearr_26776_26945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (77))){
var inst_26609 = (state_26745[(14)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26609)){
var statearr_26777_26946 = state_26745__$1;
(statearr_26777_26946[(1)] = (78));

} else {
var statearr_26778_26947 = state_26745__$1;
(statearr_26778_26947[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (95))){
var state_26745__$1 = state_26745;
var statearr_26779_26948 = state_26745__$1;
(statearr_26779_26948[(2)] = null);

(statearr_26779_26948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (54))){
var inst_26570 = (state_26745[(7)]);
var state_26745__$1 = state_26745;
var statearr_26780_26949 = state_26745__$1;
(statearr_26780_26949[(2)] = inst_26570);

(statearr_26780_26949[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (92))){
var inst_26708 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var state_26745__$1 = state_26745;
var statearr_26781_26950 = state_26745__$1;
(statearr_26781_26950[(2)] = inst_26708);

(statearr_26781_26950[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (15))){
var inst_26550 = (state_26745[(27)]);
var state_26745__$1 = state_26745;
var statearr_26782_26951 = state_26745__$1;
(statearr_26782_26951[(2)] = inst_26550);

(statearr_26782_26951[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (48))){
var inst_26623 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26783_26952 = state_26745__$1;
(statearr_26783_26952[(2)] = inst_26623);

(statearr_26783_26952[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (50))){
var inst_26617 = (state_26745[(8)]);
var inst_26626 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_26617);
var state_26745__$1 = state_26745;
var statearr_26784_26953 = state_26745__$1;
(statearr_26784_26953[(2)] = inst_26626);

(statearr_26784_26953[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (75))){
var state_26745__$1 = state_26745;
var statearr_26785_26954 = state_26745__$1;
(statearr_26785_26954[(2)] = null);

(statearr_26785_26954[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (99))){
var inst_26531 = (state_26745[(15)]);
var state_26745__$1 = state_26745;
var statearr_26786_26955 = state_26745__$1;
(statearr_26786_26955[(2)] = inst_26531);

(statearr_26786_26955[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (21))){
var inst_26560 = (state_26745[(28)]);
var state_26745__$1 = state_26745;
var statearr_26787_26956 = state_26745__$1;
(statearr_26787_26956[(2)] = inst_26560);

(statearr_26787_26956[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (31))){
var inst_26572 = (state_26745[(22)]);
var inst_26593 = (state_26745[(2)]);
var state_26745__$1 = (function (){var statearr_26788 = state_26745;
(statearr_26788[(11)] = inst_26593);

return statearr_26788;
})();
if(cljs.core.truth_(inst_26572)){
var statearr_26789_26957 = state_26745__$1;
(statearr_26789_26957[(1)] = (32));

} else {
var statearr_26790_26958 = state_26745__$1;
(statearr_26790_26958[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (32))){
var state_26745__$1 = state_26745;
var statearr_26791_26959 = state_26745__$1;
(statearr_26791_26959[(2)] = false);

(statearr_26791_26959[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (40))){
var inst_26605 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26792_26960 = state_26745__$1;
(statearr_26792_26960[(2)] = inst_26605);

(statearr_26792_26960[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (91))){
var inst_26715 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26793_26961 = state_26745__$1;
(statearr_26793_26961[(2)] = inst_26715);

(statearr_26793_26961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (56))){
var inst_26635 = (state_26745[(2)]);
var inst_26636 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_26635);
var state_26745__$1 = state_26745;
var statearr_26794_26962 = state_26745__$1;
(statearr_26794_26962[(2)] = inst_26636);

(statearr_26794_26962[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (33))){
var inst_26593 = (state_26745[(11)]);
var inst_26571 = (state_26745[(16)]);
var inst_26596 = (inst_26571 - (1));
var inst_26597 = cljs.core.get.call(null,inst_26593,inst_26596,false);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26597)){
var statearr_26795_26963 = state_26745__$1;
(statearr_26795_26963[(1)] = (35));

} else {
var statearr_26796_26964 = state_26745__$1;
(statearr_26796_26964[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (13))){
var inst_26536 = (state_26745[(12)]);
var inst_26550 = (state_26745[(27)]);
var inst_26549 = (state_26745[(2)]);
var inst_26550__$1 = inst_26536.altKey;
var state_26745__$1 = (function (){var statearr_26797 = state_26745;
(statearr_26797[(29)] = inst_26549);

(statearr_26797[(27)] = inst_26550__$1);

return statearr_26797;
})();
if(cljs.core.truth_(inst_26550__$1)){
var statearr_26798_26965 = state_26745__$1;
(statearr_26798_26965[(1)] = (14));

} else {
var statearr_26799_26966 = state_26745__$1;
(statearr_26799_26966[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (22))){
var inst_26542 = (state_26745[(9)]);
var inst_26543 = (state_26745[(30)]);
var inst_26544 = (state_26745[(31)]);
var inst_26575 = (state_26745[(26)]);
var inst_26554 = (state_26745[(32)]);
var inst_26559 = (state_26745[(33)]);
var inst_26549 = (state_26745[(29)]);
var inst_26570 = (state_26745[(7)]);
var inst_26572 = (state_26745[(22)]);
var inst_26564 = (state_26745[(2)]);
var inst_26565 = [inst_26544,inst_26549,inst_26554,inst_26559,inst_26564];
var inst_26566 = (new cljs.core.PersistentVector(null,5,(5),inst_26543,inst_26565,null));
var inst_26567 = cljs.core.filter.call(null,cljs.core.identity,inst_26566);
var inst_26568 = inst_26542.call(null,inst_26567);
var inst_26569 = om.core.get_state.call(null,self__.owner);
var inst_26570__$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(inst_26569);
var inst_26571 = cljs.core.last.call(null,inst_26570__$1);
var inst_26572__$1 = cljs.core._EQ_.call(null,outliner.components.index.root_node,inst_26570__$1);
var inst_26573 = cljs.core.deref.call(null,self__.data);
var inst_26574 = cljs.core.get_in.call(null,inst_26573,inst_26570__$1);
var inst_26575__$1 = !(inst_26572__$1);
var state_26745__$1 = (function (){var statearr_26800 = state_26745;
(statearr_26800[(16)] = inst_26571);

(statearr_26800[(26)] = inst_26575__$1);

(statearr_26800[(18)] = inst_26574);

(statearr_26800[(19)] = inst_26568);

(statearr_26800[(7)] = inst_26570__$1);

(statearr_26800[(22)] = inst_26572__$1);

return statearr_26800;
})();
if(inst_26575__$1){
var statearr_26801_26967 = state_26745__$1;
(statearr_26801_26967[(1)] = (23));

} else {
var statearr_26802_26968 = state_26745__$1;
(statearr_26802_26968[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (90))){
var state_26745__$1 = state_26745;
var statearr_26803_26969 = state_26745__$1;
(statearr_26803_26969[(2)] = null);

(statearr_26803_26969[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (36))){
var state_26745__$1 = state_26745;
var statearr_26804_26970 = state_26745__$1;
(statearr_26804_26970[(1)] = (38));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (41))){
var inst_26571 = (state_26745[(16)]);
var inst_26582 = (state_26745[(20)]);
var inst_26613 = (inst_26571 + (1));
var inst_26614 = cljs.core.conj.call(null,inst_26582,new cljs.core.Keyword(null,"children","children",-940561982),inst_26613);
var state_26745__$1 = state_26745;
var statearr_26806_26971 = state_26745__$1;
(statearr_26806_26971[(2)] = inst_26614);

(statearr_26806_26971[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (89))){
var inst_26705 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var inst_26706 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),inst_26705);
var state_26745__$1 = state_26745;
if(inst_26706){
var statearr_26807_26972 = state_26745__$1;
(statearr_26807_26972[(1)] = (92));

} else {
var statearr_26808_26973 = state_26745__$1;
(statearr_26808_26973[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (100))){
var state_26745__$1 = state_26745;
var statearr_26809_26974 = state_26745__$1;
(statearr_26809_26974[(2)] = null);

(statearr_26809_26974[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (43))){
var inst_26574 = (state_26745[(18)]);
var inst_26568 = (state_26745[(19)]);
var inst_26617 = (state_26745[(2)]);
var inst_26618 = cljs.core.println.call(null,inst_26574);
var state_26745__$1 = (function (){var statearr_26810 = state_26745;
(statearr_26810[(34)] = inst_26618);

(statearr_26810[(8)] = inst_26617);

return statearr_26810;
})();
var G__26811_26975 = (((inst_26568 instanceof cljs.core.Keyword))?inst_26568.fqn:null);
switch (G__26811_26975) {
case "left-shift-node":
var statearr_26812_26977 = state_26745__$1;
(statearr_26812_26977[(1)] = (81));


break;
case "node-down":
var statearr_26813_26978 = state_26745__$1;
(statearr_26813_26978[(1)] = (62));


break;
case "toggle-edit":
var statearr_26814_26979 = state_26745__$1;
(statearr_26814_26979[(1)] = (88));


break;
case "cursor-right":
var statearr_26815_26980 = state_26745__$1;
(statearr_26815_26980[(1)] = (57));


break;
case "right-shift-node":
var statearr_26816_26981 = state_26745__$1;
(statearr_26816_26981[(1)] = (77));


break;
case "toggle-closed":
var statearr_26817_26982 = state_26745__$1;
(statearr_26817_26982[(1)] = (73));


break;
case "node-up":
var statearr_26818_26983 = state_26745__$1;
(statearr_26818_26983[(1)] = (58));


break;
case "cursor-left":
var statearr_26819_26984 = state_26745__$1;
(statearr_26819_26984[(1)] = (53));


break;
case "cursor-up":
var statearr_26820_26985 = state_26745__$1;
(statearr_26820_26985[(1)] = (45));


break;
case "cursor-down":
var statearr_26821_26986 = state_26745__$1;
(statearr_26821_26986[(1)] = (49));


break;
case "destroy-node":
var statearr_26822_26987 = state_26745__$1;
(statearr_26822_26987[(1)] = (66));


break;
default:
var statearr_26823_26988 = state_26745__$1;
(statearr_26823_26988[(1)] = (95));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (61))){
var inst_26649 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26824_26989 = state_26745__$1;
(statearr_26824_26989[(2)] = inst_26649);

(statearr_26824_26989[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (29))){
var inst_26588 = (state_26745[(10)]);
var inst_26590 = cljs.core.get.call(null,inst_26588,new cljs.core.Keyword(null,"children","children",-940561982),false);
var state_26745__$1 = state_26745;
var statearr_26825_26990 = state_26745__$1;
(statearr_26825_26990[(2)] = inst_26590);

(statearr_26825_26990[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (44))){
var inst_26720 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26826_26991 = state_26745__$1;
(statearr_26826_26991[(2)] = inst_26720);

(statearr_26826_26991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (93))){
var inst_26710 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var state_26745__$1 = state_26745;
var statearr_26827_26992 = state_26745__$1;
(statearr_26827_26992[(2)] = inst_26710);

(statearr_26827_26992[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (6))){
var inst_26532 = (state_26745[(21)]);
var inst_26722 = cljs.core._EQ_.call(null,inst_26532,click_chan);
var state_26745__$1 = state_26745;
if(inst_26722){
var statearr_26828_26993 = state_26745__$1;
(statearr_26828_26993[(1)] = (96));

} else {
var statearr_26829_26994 = state_26745__$1;
(statearr_26829_26994[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (28))){
var inst_26588 = (state_26745[(10)]);
var inst_26588__$1 = (state_26745[(2)]);
var state_26745__$1 = (function (){var statearr_26830 = state_26745;
(statearr_26830[(10)] = inst_26588__$1);

return statearr_26830;
})();
if(cljs.core.truth_(inst_26588__$1)){
var statearr_26831_26995 = state_26745__$1;
(statearr_26831_26995[(1)] = (29));

} else {
var statearr_26832_26996 = state_26745__$1;
(statearr_26832_26996[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (64))){
var state_26745__$1 = state_26745;
var statearr_26833_26997 = state_26745__$1;
(statearr_26833_26997[(2)] = null);

(statearr_26833_26997[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (51))){
var state_26745__$1 = state_26745;
var statearr_26834_26998 = state_26745__$1;
(statearr_26834_26998[(2)] = null);

(statearr_26834_26998[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (25))){
var inst_26582 = (state_26745[(20)]);
var inst_26582__$1 = (state_26745[(2)]);
var state_26745__$1 = (function (){var statearr_26835 = state_26745;
(statearr_26835[(20)] = inst_26582__$1);

return statearr_26835;
})();
if(cljs.core.truth_(inst_26582__$1)){
var statearr_26836_26999 = state_26745__$1;
(statearr_26836_26999[(1)] = (26));

} else {
var statearr_26837_27000 = state_26745__$1;
(statearr_26837_27000[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (34))){
var inst_26593 = (state_26745[(11)]);
var inst_26571 = (state_26745[(16)]);
var inst_26609 = (state_26745[(2)]);
var inst_26610 = (inst_26571 + (1));
var inst_26611 = cljs.core.get.call(null,inst_26593,inst_26610,false);
var state_26745__$1 = (function (){var statearr_26838 = state_26745;
(statearr_26838[(14)] = inst_26609);

return statearr_26838;
})();
if(cljs.core.truth_(inst_26611)){
var statearr_26839_27001 = state_26745__$1;
(statearr_26839_27001[(1)] = (41));

} else {
var statearr_26840_27002 = state_26745__$1;
(statearr_26840_27002[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (17))){
var state_26745__$1 = state_26745;
var statearr_26841_27003 = state_26745__$1;
(statearr_26841_27003[(2)] = new cljs.core.Keyword(null,"ctrl","ctrl",361402094));

(statearr_26841_27003[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (3))){
var inst_26743 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26745__$1,inst_26743);
} else {
if((state_val_26746 === (12))){
var inst_26545 = (state_26745[(35)]);
var state_26745__$1 = state_26745;
var statearr_26842_27004 = state_26745__$1;
(statearr_26842_27004[(2)] = inst_26545);

(statearr_26842_27004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (2))){
var inst_26526 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26527 = [key_down_chan,click_chan];
var inst_26528 = (new cljs.core.PersistentVector(null,2,(5),inst_26526,inst_26527,null));
var state_26745__$1 = state_26745;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26745__$1,(4),inst_26528);
} else {
if((state_val_26746 === (66))){
var inst_26572 = (state_26745[(22)]);
var inst_26661 = cljs.core.not.call(null,inst_26572);
var state_26745__$1 = state_26745;
if(inst_26661){
var statearr_26843_27005 = state_26745__$1;
(statearr_26843_27005[(1)] = (67));

} else {
var statearr_26844_27006 = state_26745__$1;
(statearr_26844_27006[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (23))){
var inst_26570 = (state_26745[(7)]);
var inst_26577 = cljs.core.count.call(null,inst_26570);
var inst_26578 = (inst_26577 - (2));
var inst_26579 = cljs.core.subvec.call(null,inst_26570,(0),inst_26578);
var state_26745__$1 = state_26745;
var statearr_26845_27007 = state_26745__$1;
(statearr_26845_27007[(2)] = inst_26579);

(statearr_26845_27007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (47))){
var state_26745__$1 = state_26745;
var statearr_26846_27008 = state_26745__$1;
(statearr_26846_27008[(2)] = null);

(statearr_26846_27008[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (35))){
var inst_26571 = (state_26745[(16)]);
var inst_26582 = (state_26745[(20)]);
var inst_26599 = (inst_26571 - (1));
var inst_26600 = cljs.core.conj.call(null,inst_26582,new cljs.core.Keyword(null,"children","children",-940561982),inst_26599);
var state_26745__$1 = state_26745;
var statearr_26847_27009 = state_26745__$1;
(statearr_26847_27009[(2)] = inst_26600);

(statearr_26847_27009[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (82))){
var inst_26582 = (state_26745[(20)]);
var inst_26691 = cljs.core._EQ_.call(null,inst_26582,outliner.components.index.root_node);
var inst_26692 = !(inst_26691);
var state_26745__$1 = state_26745;
var statearr_26848_27010 = state_26745__$1;
(statearr_26848_27010[(2)] = inst_26692);

(statearr_26848_27010[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (76))){
var inst_26681 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26849_27011 = state_26745__$1;
(statearr_26849_27011[(2)] = inst_26681);

(statearr_26849_27011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (97))){
var inst_26532 = (state_26745[(21)]);
var inst_26732 = cljs.core._EQ_.call(null,inst_26532,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_26745__$1 = state_26745;
if(inst_26732){
var statearr_26850_27012 = state_26745__$1;
(statearr_26850_27012[(1)] = (99));

} else {
var statearr_26851_27013 = state_26745__$1;
(statearr_26851_27013[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (19))){
var inst_26560 = (state_26745[(28)]);
var inst_26536 = (state_26745[(12)]);
var inst_26559 = (state_26745[(2)]);
var inst_26560__$1 = inst_26536.metaKey;
var state_26745__$1 = (function (){var statearr_26852 = state_26745;
(statearr_26852[(28)] = inst_26560__$1);

(statearr_26852[(33)] = inst_26559);

return statearr_26852;
})();
if(cljs.core.truth_(inst_26560__$1)){
var statearr_26853_27014 = state_26745__$1;
(statearr_26853_27014[(1)] = (20));

} else {
var statearr_26854_27015 = state_26745__$1;
(statearr_26854_27015[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (57))){
var inst_26593 = (state_26745[(11)]);
var inst_26571 = (state_26745[(16)]);
var inst_26574 = (state_26745[(18)]);
var inst_26617 = (state_26745[(8)]);
var inst_26582 = (state_26745[(20)]);
var inst_26570 = (state_26745[(7)]);
var inst_26638 = outliner.components.index.gen_right_path.call(null,inst_26570,inst_26574,inst_26571,inst_26582,inst_26593,inst_26617,self__.data);
var inst_26639 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_26638);
var state_26745__$1 = state_26745;
var statearr_26855_27016 = state_26745__$1;
(statearr_26855_27016[(2)] = inst_26639);

(statearr_26855_27016[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (68))){
var state_26745__$1 = state_26745;
var statearr_26856_27017 = state_26745__$1;
(statearr_26856_27017[(2)] = null);

(statearr_26856_27017[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (11))){
var state_26745__$1 = state_26745;
var statearr_26857_27018 = state_26745__$1;
(statearr_26857_27018[(2)] = new cljs.core.Keyword(null,"shift","shift",997140064));

(statearr_26857_27018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (9))){
var state_26745__$1 = state_26745;
var statearr_26858_27019 = state_26745__$1;
(statearr_26858_27019[(2)] = outliner.components.index.edit_keymap);

(statearr_26858_27019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (5))){
var inst_26530 = (state_26745[(17)]);
var inst_26536 = cljs.core.nth.call(null,inst_26530,(0),null);
var inst_26537 = cljs.core.nth.call(null,inst_26530,(1),null);
var inst_26540 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_26745__$1 = (function (){var statearr_26859 = state_26745;
(statearr_26859[(12)] = inst_26536);

(statearr_26859[(13)] = inst_26537);

return statearr_26859;
})();
var G__26860_27020 = (((inst_26540 instanceof cljs.core.Keyword))?inst_26540.fqn:null);
switch (G__26860_27020) {
case "editing":
var statearr_26861_27022 = state_26745__$1;
(statearr_26861_27022[(1)] = (9));


break;
default:
var statearr_26862_27023 = state_26745__$1;
(statearr_26862_27023[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (83))){
var inst_26582 = (state_26745[(20)]);
var state_26745__$1 = state_26745;
var statearr_26863_27024 = state_26745__$1;
(statearr_26863_27024[(2)] = inst_26582);

(statearr_26863_27024[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (14))){
var state_26745__$1 = state_26745;
var statearr_26864_27025 = state_26745__$1;
(statearr_26864_27025[(2)] = new cljs.core.Keyword(null,"alt","alt",-3214426));

(statearr_26864_27025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (45))){
var inst_26609 = (state_26745[(14)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26609)){
var statearr_26865_27026 = state_26745__$1;
(statearr_26865_27026[(1)] = (46));

} else {
var statearr_26866_27027 = state_26745__$1;
(statearr_26866_27027[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (53))){
var inst_26572 = (state_26745[(22)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26572)){
var statearr_26867_27028 = state_26745__$1;
(statearr_26867_27028[(1)] = (54));

} else {
var statearr_26868_27029 = state_26745__$1;
(statearr_26868_27029[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (78))){
var inst_26542 = (state_26745[(9)]);
var inst_26588 = (state_26745[(10)]);
var inst_26593 = (state_26745[(11)]);
var inst_26536 = (state_26745[(12)]);
var inst_26537 = (state_26745[(13)]);
var inst_26609 = (state_26745[(14)]);
var inst_26531 = (state_26745[(15)]);
var inst_26571 = (state_26745[(16)]);
var inst_26530 = (state_26745[(17)]);
var inst_26574 = (state_26745[(18)]);
var inst_26617 = (state_26745[(8)]);
var inst_26568 = (state_26745[(19)]);
var inst_26582 = (state_26745[(20)]);
var inst_26532 = (state_26745[(21)]);
var inst_26570 = (state_26745[(7)]);
var inst_26572 = (state_26745[(22)]);
var inst_26684 = (function (){var up_path = inst_26609;
var current_child_idx = inst_26571;
var is_root = inst_26572;
var vec__26525 = inst_26530;
var parent_children = inst_26593;
var parent = inst_26588;
var val__22914__auto__ = inst_26531;
var G__26522 = click_chan;
var down_path = inst_26617;
var command = inst_26568;
var e = inst_26536;
var parent_path = inst_26582;
var current_path = inst_26570;
var vec__26535 = inst_26530;
var c = inst_26537;
var ch26523 = inst_26532;
var ret26524 = inst_26530;
var current = inst_26574;
var keyevent__GT_command = inst_26542;
var G__26521 = key_down_chan;
return ((function (up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = cljs.core.conj.call(null,up_path,new cljs.core.Keyword(null,"children","children",-940561982));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.conj.call(null,destination_children,current);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,(cljs.core.count.call(null,new_destination_children) - (1))));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children),up_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359)),destination_path,new_destination_children);
});
;})(up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
})();
var inst_26685 = om.core.transact_BANG_.call(null,self__.data,inst_26684);
var state_26745__$1 = state_26745;
var statearr_26869_27030 = state_26745__$1;
(statearr_26869_27030[(2)] = inst_26685);

(statearr_26869_27030[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (26))){
var inst_26582 = (state_26745[(20)]);
var inst_26584 = cljs.core.deref.call(null,self__.data);
var inst_26585 = cljs.core.get_in.call(null,inst_26584,inst_26582);
var state_26745__$1 = state_26745;
var statearr_26870_27031 = state_26745__$1;
(statearr_26870_27031[(2)] = inst_26585);

(statearr_26870_27031[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (16))){
var inst_26536 = (state_26745[(12)]);
var inst_26555 = (state_26745[(36)]);
var inst_26554 = (state_26745[(2)]);
var inst_26555__$1 = inst_26536.ctrlKey;
var state_26745__$1 = (function (){var statearr_26871 = state_26745;
(statearr_26871[(32)] = inst_26554);

(statearr_26871[(36)] = inst_26555__$1);

return statearr_26871;
})();
if(cljs.core.truth_(inst_26555__$1)){
var statearr_26872_27032 = state_26745__$1;
(statearr_26872_27032[(1)] = (17));

} else {
var statearr_26873_27033 = state_26745__$1;
(statearr_26873_27033[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (81))){
var inst_26582 = (state_26745[(20)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26582)){
var statearr_26874_27034 = state_26745__$1;
(statearr_26874_27034[(1)] = (82));

} else {
var statearr_26875_27035 = state_26745__$1;
(statearr_26875_27035[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (79))){
var state_26745__$1 = state_26745;
var statearr_26876_27036 = state_26745__$1;
(statearr_26876_27036[(2)] = null);

(statearr_26876_27036[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (38))){
var state_26745__$1 = state_26745;
var statearr_26877_27037 = state_26745__$1;
(statearr_26877_27037[(2)] = false);

(statearr_26877_27037[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (98))){
var inst_26738 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26878_27038 = state_26745__$1;
(statearr_26878_27038[(2)] = inst_26738);

(statearr_26878_27038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (87))){
var inst_26701 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26879_27039 = state_26745__$1;
(statearr_26879_27039[(2)] = inst_26701);

(statearr_26879_27039[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (30))){
var inst_26588 = (state_26745[(10)]);
var state_26745__$1 = state_26745;
var statearr_26880_27040 = state_26745__$1;
(statearr_26880_27040[(2)] = inst_26588);

(statearr_26880_27040[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (73))){
var inst_26572 = (state_26745[(22)]);
var inst_26675 = cljs.core.not.call(null,inst_26572);
var state_26745__$1 = state_26745;
if(inst_26675){
var statearr_26881_27041 = state_26745__$1;
(statearr_26881_27041[(1)] = (74));

} else {
var statearr_26882_27042 = state_26745__$1;
(statearr_26882_27042[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (96))){
var inst_26530 = (state_26745[(17)]);
var inst_26725 = cljs.core.nth.call(null,inst_26530,(0),null);
var inst_26726 = cljs.core.nth.call(null,inst_26530,(1),null);
var inst_26727 = new cljs.core.Keyword(null,"new-path","new-path",1732999939).cljs$core$IFn$_invoke$arity$1(inst_26725);
var inst_26728 = cljs.core.count.call(null,base_path);
var inst_26729 = cljs.core.subvec.call(null,inst_26727,inst_26728);
var inst_26730 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_26729);
var state_26745__$1 = (function (){var statearr_26883 = state_26745;
(statearr_26883[(37)] = inst_26726);

return statearr_26883;
})();
var statearr_26884_27043 = state_26745__$1;
(statearr_26884_27043[(2)] = inst_26730);

(statearr_26884_27043[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (10))){
var state_26745__$1 = state_26745;
var statearr_26885_27044 = state_26745__$1;
(statearr_26885_27044[(2)] = outliner.components.index.normal_keymap);

(statearr_26885_27044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (18))){
var inst_26555 = (state_26745[(36)]);
var state_26745__$1 = state_26745;
var statearr_26886_27045 = state_26745__$1;
(statearr_26886_27045[(2)] = inst_26555);

(statearr_26886_27045[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (52))){
var inst_26629 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26887_27046 = state_26745__$1;
(statearr_26887_27046[(2)] = inst_26629);

(statearr_26887_27046[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (67))){
var inst_26572 = (state_26745[(22)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26572)){
var statearr_26888_27047 = state_26745__$1;
(statearr_26888_27047[(1)] = (70));

} else {
var statearr_26889_27048 = state_26745__$1;
(statearr_26889_27048[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (71))){
var inst_26609 = (state_26745[(14)]);
var inst_26571 = (state_26745[(16)]);
var inst_26582 = (state_26745[(20)]);
var inst_26665 = outliner.components.index.gen_left_path.call(null,inst_26571,inst_26582,inst_26609,self__.data);
var state_26745__$1 = state_26745;
var statearr_26890_27049 = state_26745__$1;
(statearr_26890_27049[(2)] = inst_26665);

(statearr_26890_27049[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (42))){
var state_26745__$1 = state_26745;
var statearr_26891_27050 = state_26745__$1;
(statearr_26891_27050[(2)] = false);

(statearr_26891_27050[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (80))){
var inst_26688 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26892_27051 = state_26745__$1;
(statearr_26892_27051[(2)] = inst_26688);

(statearr_26892_27051[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (37))){
var inst_26607 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26893_27052 = state_26745__$1;
(statearr_26893_27052[(2)] = inst_26607);

(statearr_26893_27052[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (63))){
var inst_26542 = (state_26745[(9)]);
var inst_26588 = (state_26745[(10)]);
var inst_26593 = (state_26745[(11)]);
var inst_26536 = (state_26745[(12)]);
var inst_26537 = (state_26745[(13)]);
var inst_26609 = (state_26745[(14)]);
var inst_26531 = (state_26745[(15)]);
var inst_26571 = (state_26745[(16)]);
var inst_26530 = (state_26745[(17)]);
var inst_26574 = (state_26745[(18)]);
var inst_26617 = (state_26745[(8)]);
var inst_26568 = (state_26745[(19)]);
var inst_26582 = (state_26745[(20)]);
var inst_26532 = (state_26745[(21)]);
var inst_26570 = (state_26745[(7)]);
var inst_26572 = (state_26745[(22)]);
var inst_26652 = cljs.core.deref.call(null,self__.data);
var inst_26653 = cljs.core.get_in.call(null,inst_26652,inst_26617);
var inst_26654 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_26617);
var inst_26655 = (function (){var up_path = inst_26609;
var current_child_idx = inst_26571;
var is_root = inst_26572;
var vec__26525 = inst_26530;
var parent_children = inst_26593;
var parent = inst_26588;
var val__22914__auto__ = inst_26531;
var G__26522 = click_chan;
var down_path = inst_26617;
var command = inst_26568;
var swap_node = inst_26653;
var e = inst_26536;
var parent_path = inst_26582;
var current_path = inst_26570;
var vec__26535 = inst_26530;
var c = inst_26537;
var ch26523 = inst_26532;
var ret26524 = inst_26530;
var current = inst_26574;
var keyevent__GT_command = inst_26542;
var G__26521 = key_down_chan;
return ((function (up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,swap_node,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,inst_26652,inst_26653,inst_26654,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),down_path,current);
});
;})(up_path,current_child_idx,is_root,vec__26525,parent_children,parent,val__22914__auto__,G__26522,down_path,command,swap_node,e,parent_path,current_path,vec__26535,c,ch26523,ret26524,current,keyevent__GT_command,G__26521,inst_26542,inst_26588,inst_26593,inst_26536,inst_26537,inst_26609,inst_26531,inst_26571,inst_26530,inst_26574,inst_26617,inst_26568,inst_26582,inst_26532,inst_26570,inst_26572,inst_26652,inst_26653,inst_26654,state_val_26746,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
})();
var inst_26656 = om.core.transact_BANG_.call(null,self__.data,inst_26655);
var state_26745__$1 = (function (){var statearr_26894 = state_26745;
(statearr_26894[(38)] = inst_26654);

return statearr_26894;
})();
var statearr_26895_27053 = state_26745__$1;
(statearr_26895_27053[(2)] = inst_26656);

(statearr_26895_27053[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (94))){
var inst_26712 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26896_27054 = state_26745__$1;
(statearr_26896_27054[(2)] = inst_26712);

(statearr_26896_27054[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (8))){
var inst_26536 = (state_26745[(12)]);
var inst_26545 = (state_26745[(35)]);
var inst_26542 = (state_26745[(2)]);
var inst_26543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26544 = inst_26536.keyCode;
var inst_26545__$1 = inst_26536.shiftKey;
var state_26745__$1 = (function (){var statearr_26897 = state_26745;
(statearr_26897[(9)] = inst_26542);

(statearr_26897[(30)] = inst_26543);

(statearr_26897[(31)] = inst_26544);

(statearr_26897[(35)] = inst_26545__$1);

return statearr_26897;
})();
if(cljs.core.truth_(inst_26545__$1)){
var statearr_26898_27055 = state_26745__$1;
(statearr_26898_27055[(1)] = (11));

} else {
var statearr_26899_27056 = state_26745__$1;
(statearr_26899_27056[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (49))){
var inst_26617 = (state_26745[(8)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26617)){
var statearr_26900_27057 = state_26745__$1;
(statearr_26900_27057[(1)] = (50));

} else {
var statearr_26901_27058 = state_26745__$1;
(statearr_26901_27058[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (84))){
var inst_26695 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26695)){
var statearr_26902_27059 = state_26745__$1;
(statearr_26902_27059[(1)] = (85));

} else {
var statearr_26903_27060 = state_26745__$1;
(statearr_26903_27060[(1)] = (86));

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
});})(c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;
return ((function (switch__22884__auto__,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function() {
var outliner$components$index$component_$_state_machine__22885__auto__ = null;
var outliner$components$index$component_$_state_machine__22885__auto____0 = (function (){
var statearr_26907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26907[(0)] = outliner$components$index$component_$_state_machine__22885__auto__);

(statearr_26907[(1)] = (1));

return statearr_26907;
});
var outliner$components$index$component_$_state_machine__22885__auto____1 = (function (state_26745){
while(true){
var ret_value__22886__auto__ = (function (){try{while(true){
var result__22887__auto__ = switch__22884__auto__.call(null,state_26745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22887__auto__;
}
break;
}
}catch (e26908){if((e26908 instanceof Object)){
var ex__22888__auto__ = e26908;
var statearr_26909_27061 = state_26745;
(statearr_26909_27061[(5)] = ex__22888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27062 = state_26745;
state_26745 = G__27062;
continue;
} else {
return ret_value__22886__auto__;
}
break;
}
});
outliner$components$index$component_$_state_machine__22885__auto__ = function(state_26745){
switch(arguments.length){
case 0:
return outliner$components$index$component_$_state_machine__22885__auto____0.call(this);
case 1:
return outliner$components$index$component_$_state_machine__22885__auto____1.call(this,state_26745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$component_$_state_machine__22885__auto__.cljs$core$IFn$_invoke$arity$0 = outliner$components$index$component_$_state_machine__22885__auto____0;
outliner$components$index$component_$_state_machine__22885__auto__.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$component_$_state_machine__22885__auto____1;
return outliner$components$index$component_$_state_machine__22885__auto__;
})()
;})(switch__22884__auto__,c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
})();
var state__22907__auto__ = (function (){var statearr_26910 = f__22906__auto__.call(null);
(statearr_26910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22905__auto___26919);

return statearr_26910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22907__auto__);
});})(c__22905__auto___26919,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
);


return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),outliner.components.index.root_node,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null);
});})(validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;

outliner.components.index.t26517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (_26519){
var self__ = this;
var _26519__$1 = this;
return self__.meta26518;
});})(validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;

outliner.components.index.t26517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (_26519,meta26518__$1){
var self__ = this;
var _26519__$1 = this;
return (new outliner.components.index.t26517(self__.G__26122,self__.owner,self__.data,self__.output_checker26120,self__.input_checker26119,self__.output_schema26117,self__.input_schema26118,self__.G__26121,self__.component,self__.ufv__,self__.validate__20255__auto__,meta26518__$1));
});})(validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;

outliner.components.index.t26517.cljs$lang$type = true;

outliner.components.index.t26517.cljs$lang$ctorStr = "outliner.components.index/t26517";

outliner.components.index.t26517.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t26517");
});})(validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;

outliner.components.index.__GT_t26517 = ((function (validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915){
return (function outliner$components$index$component_$___GT_t26517(G__26122__$1,owner__$1,data__$1,output_checker26120__$1,input_checker26119__$1,output_schema26117__$1,input_schema26118__$1,G__26121__$1,component__$1,ufv____$1,validate__20255__auto____$1,meta26518){
return (new outliner.components.index.t26517(G__26122__$1,owner__$1,data__$1,output_checker26120__$1,input_checker26119__$1,output_schema26117__$1,input_schema26118__$1,G__26121__$1,component__$1,ufv____$1,validate__20255__auto____$1,meta26518));
});})(validate__20255__auto__,ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;

}

return (new outliner.components.index.t26517(G__26122,owner,data,output_checker26120_26915,input_checker26119_26914,output_schema26117_26912,input_schema26118_26913,G__26121,outliner$components$index$component,ufv___26911,validate__20255__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___27063 = output_checker26120_26915.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___27063)){
var error__20257__auto___27064 = temp__4126__auto___27063;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20257__auto___27064)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___27064,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26117_26912,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___26911,output_schema26117_26912,input_schema26118_26913,input_checker26119_26914,output_checker26120_26915))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.component),schema.core.make_fn_schema.call(null,output_schema26117_26912,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26118_26913], null)));

outliner.components.index.__GT_component = (function() {
var outliner$components$index$__GT_component = null;
var outliner$components$index$__GT_component__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.component,cursor__22988__auto__);
});
var outliner$components$index$__GT_component__2 = (function (cursor__22988__auto__,m26116){
return om.core.build.call(null,outliner.components.index.component,cursor__22988__auto__,m26116);
});
outliner$components$index$__GT_component = function(cursor__22988__auto__,m26116){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_component__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_component__2.call(this,cursor__22988__auto__,m26116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_component__1;
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_component__2;
return outliner$components$index$__GT_component;
})()
;

//# sourceMappingURL=index.js.map?rel=1427714366839