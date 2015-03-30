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
var G__62217 = cljs.core.conj.call(null,p,new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.count.call(null,children) - (1)));
p = G__62217;
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
var G__62218 = outliner.components.index.get_parent.call(null,p);
p = G__62218;
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

var ufv___62232 = schema.utils.use_fn_validation;
var output_schema62220_62233 = schema.core.Any;
var input_schema62221_62234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"head","head",869147608,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker62222_62235 = schema.core.checker.call(null,input_schema62221_62234);
var output_checker62223_62236 = schema.core.checker.call(null,output_schema62220_62233);
/**
 * Inputs: [head owner]
 */
outliner.components.index.outline_head = ((function (ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236){
return (function outliner$components$index$outline_head(G__62224,G__62225){
var validate__20255__auto__ = ufv___62232.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___62237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__62224,G__62225], null);
var temp__4126__auto___62238 = input_checker62222_62235.call(null,args__20256__auto___62237);
if(cljs.core.truth_(temp__4126__auto___62238)){
var error__20257__auto___62239 = temp__4126__auto___62238;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20257__auto___62239)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___62239,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___62237,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema62221_62234,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var head = G__62224;
var owner = G__62225;
while(true){
if(typeof outliner.components.index.t62229 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t62229 = (function (owner,G__62224,output_checker62223,input_schema62221,outline_head,G__62225,input_checker62222,head,ufv__,validate__20255__auto__,output_schema62220,meta62230){
this.owner = owner;
this.G__62224 = G__62224;
this.output_checker62223 = output_checker62223;
this.input_schema62221 = input_schema62221;
this.outline_head = outline_head;
this.G__62225 = G__62225;
this.input_checker62222 = input_checker62222;
this.head = head;
this.ufv__ = ufv__;
this.validate__20255__auto__ = validate__20255__auto__;
this.output_schema62220 = output_schema62220;
this.meta62230 = meta62230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t62229.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t62229.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-head";
});})(validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236))
;

outliner.components.index.t62229.prototype.om$core$IRender$ = true;

outliner.components.index.t62229.prototype.om$core$IRender$render$arity$1 = ((function (validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.h1,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.head)],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h2,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(self__.head)],null))))],null)));
});})(validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236))
;

outliner.components.index.t62229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236){
return (function (_62231){
var self__ = this;
var _62231__$1 = this;
return self__.meta62230;
});})(validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236))
;

outliner.components.index.t62229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236){
return (function (_62231,meta62230__$1){
var self__ = this;
var _62231__$1 = this;
return (new outliner.components.index.t62229(self__.owner,self__.G__62224,self__.output_checker62223,self__.input_schema62221,self__.outline_head,self__.G__62225,self__.input_checker62222,self__.head,self__.ufv__,self__.validate__20255__auto__,self__.output_schema62220,meta62230__$1));
});})(validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236))
;

outliner.components.index.t62229.cljs$lang$type = true;

outliner.components.index.t62229.cljs$lang$ctorStr = "outliner.components.index/t62229";

outliner.components.index.t62229.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t62229");
});})(validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236))
;

outliner.components.index.__GT_t62229 = ((function (validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236){
return (function outliner$components$index$outline_head_$___GT_t62229(owner__$1,G__62224__$1,output_checker62223__$1,input_schema62221__$1,outline_head__$1,G__62225__$1,input_checker62222__$1,head__$1,ufv____$1,validate__20255__auto____$1,output_schema62220__$1,meta62230){
return (new outliner.components.index.t62229(owner__$1,G__62224__$1,output_checker62223__$1,input_schema62221__$1,outline_head__$1,G__62225__$1,input_checker62222__$1,head__$1,ufv____$1,validate__20255__auto____$1,output_schema62220__$1,meta62230));
});})(validate__20255__auto__,ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236))
;

}

return (new outliner.components.index.t62229(owner,G__62224,output_checker62223_62236,input_schema62221_62234,outliner$components$index$outline_head,G__62225,input_checker62222_62235,head,ufv___62232,validate__20255__auto__,output_schema62220_62233,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___62240 = output_checker62223_62236.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___62240)){
var error__20257__auto___62241 = temp__4126__auto___62240;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20257__auto___62241)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___62241,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema62220_62233,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___62232,output_schema62220_62233,input_schema62221_62234,input_checker62222_62235,output_checker62223_62236))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_head),schema.core.make_fn_schema.call(null,output_schema62220_62233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema62221_62234], null)));

outliner.components.index.__GT_outline_head = (function() {
var outliner$components$index$__GT_outline_head = null;
var outliner$components$index$__GT_outline_head__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22988__auto__);
});
var outliner$components$index$__GT_outline_head__2 = (function (cursor__22988__auto__,m62219){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22988__auto__,m62219);
});
outliner$components$index$__GT_outline_head = function(cursor__22988__auto__,m62219){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_head__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_outline_head__2.call(this,cursor__22988__auto__,m62219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_head__1;
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_head__2;
return outliner$components$index$__GT_outline_head;
})()
;

var ufv___62261 = schema.utils.use_fn_validation;
var output_schema62243_62262 = schema.core.Any;
var input_schema62244_62263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"node","node",-2073234571,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker62245_62264 = schema.core.checker.call(null,input_schema62244_62263);
var output_checker62246_62265 = schema.core.checker.call(null,output_schema62243_62262);
/**
 * Inputs: [node owner]
 */
outliner.components.index.outline_body = ((function (ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function outliner$components$index$outline_body(G__62247,G__62248){
var validate__20255__auto__ = ufv___62261.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___62266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__62247,G__62248], null);
var temp__4126__auto___62267 = input_checker62245_62264.call(null,args__20256__auto___62266);
if(cljs.core.truth_(temp__4126__auto___62267)){
var error__20257__auto___62268 = temp__4126__auto___62267;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20257__auto___62268)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___62268,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___62266,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema62244_62263,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var node = G__62247;
var owner = G__62248;
while(true){
if(typeof outliner.components.index.t62255 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t62255 = (function (G__62247,owner,output_checker62246,node,input_schema62244,input_checker62245,output_schema62243,outline_body,ufv__,validate__20255__auto__,G__62248,meta62256){
this.G__62247 = G__62247;
this.owner = owner;
this.output_checker62246 = output_checker62246;
this.node = node;
this.input_schema62244 = input_schema62244;
this.input_checker62245 = input_checker62245;
this.output_schema62243 = output_schema62243;
this.outline_body = outline_body;
this.ufv__ = ufv__;
this.validate__20255__auto__ = validate__20255__auto__;
this.G__62248 = G__62248;
this.meta62256 = meta62256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t62255.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t62255.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-body";
});})(validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
;

outliner.components.index.t62255.prototype.om$core$IDidUpdate$ = true;

outliner.components.index.t62255.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__62258 = om.core.get_state.call(null,self__.owner);
var map__62258__$1 = ((cljs.core.seq_QMARK_.call(null,map__62258))?cljs.core.apply.call(null,cljs.core.hash_map,map__62258):map__62258);
var editor_ref = cljs.core.get.call(null,map__62258__$1,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
var selected = cljs.core.get.call(null,map__62258__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__62258__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var mode = cljs.core.get.call(null,map__62258__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var current_node = om.core.path.call(null,self__.node);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),mode)) && (cljs.core._EQ_.call(null,current_node,cljs.core.concat.call(null,base_path,selected))) && ((om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)) == null))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),(new MediumEditor(om.core.get_node.call(null,self__.owner,"txt"))));
} else {
if(cljs.core.truth_((function (){var and__16579__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
if(cljs.core.truth_(and__16579__auto__)){
return (cljs.core.not_EQ_.call(null,current_node,cljs.core.concat.call(null,base_path,selected))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),mode));
} else {
return and__16579__auto__;
}
})())){
return om.core.transact_BANG_.call(null,self__.node,((function (map__62258,map__62258__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function (d){
var new_txt = (om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).serialize()["element-0"]["value"]);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).destroy();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),null);

return cljs.core.assoc_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_txt);
});})(map__62258,map__62258__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
);
} else {
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);

}
}
});})(validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
;

outliner.components.index.t62255.prototype.om$core$IRenderState$ = true;

outliner.components.index.t62255.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function (_,p__62259){
var self__ = this;
var map__62260 = p__62259;
var map__62260__$1 = ((cljs.core.seq_QMARK_.call(null,map__62260))?cljs.core.apply.call(null,cljs.core.hash_map,map__62260):map__62260);
var state = map__62260__$1;
var mode = cljs.core.get.call(null,map__62260__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var click_chan = cljs.core.get.call(null,map__62260__$1,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512));
var selected = cljs.core.get.call(null,map__62260__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__62260__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.li,{"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__62260,map__62260__$1,state,mode,click_chan,selected,base_path,validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function (e){
e.stopPropagation();

e.preventDefault();

return cljs.core.async.put_BANG_.call(null,click_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-path","new-path",1732999939),om.core.path.call(null,self__.node)], null));
});})(___$1,map__62260,map__62260__$1,state,mode,click_chan,selected,base_path,validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
), "className": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,om.core.path.call(null,self__.node),cljs.core.concat.call(null,base_path,selected)))?"selected":""))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node)))?React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node))}, "ref": "txt", "className": "txt"},null):null),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))))?om_tools.dom.element.call(null,React.DOM.ol,om.core.build_all.call(null,self__.outline_body,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"mode","mode",654403691),mode], null)], null)),cljs.core.PersistentVector.EMPTY):null)],null))));
});})(validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
;

outliner.components.index.t62255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function (_62257){
var self__ = this;
var _62257__$1 = this;
return self__.meta62256;
});})(validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
;

outliner.components.index.t62255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function (_62257,meta62256__$1){
var self__ = this;
var _62257__$1 = this;
return (new outliner.components.index.t62255(self__.G__62247,self__.owner,self__.output_checker62246,self__.node,self__.input_schema62244,self__.input_checker62245,self__.output_schema62243,self__.outline_body,self__.ufv__,self__.validate__20255__auto__,self__.G__62248,meta62256__$1));
});})(validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
;

outliner.components.index.t62255.cljs$lang$type = true;

outliner.components.index.t62255.cljs$lang$ctorStr = "outliner.components.index/t62255";

outliner.components.index.t62255.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t62255");
});})(validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
;

outliner.components.index.__GT_t62255 = ((function (validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265){
return (function outliner$components$index$outline_body_$___GT_t62255(G__62247__$1,owner__$1,output_checker62246__$1,node__$1,input_schema62244__$1,input_checker62245__$1,output_schema62243__$1,outline_body__$1,ufv____$1,validate__20255__auto____$1,G__62248__$1,meta62256){
return (new outliner.components.index.t62255(G__62247__$1,owner__$1,output_checker62246__$1,node__$1,input_schema62244__$1,input_checker62245__$1,output_schema62243__$1,outline_body__$1,ufv____$1,validate__20255__auto____$1,G__62248__$1,meta62256));
});})(validate__20255__auto__,ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
;

}

return (new outliner.components.index.t62255(G__62247,owner,output_checker62246_62265,node,input_schema62244_62263,input_checker62245_62264,output_schema62243_62262,outliner$components$index$outline_body,ufv___62261,validate__20255__auto__,G__62248,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___62269 = output_checker62246_62265.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___62269)){
var error__20257__auto___62270 = temp__4126__auto___62269;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20257__auto___62270)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___62270,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema62243_62262,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___62261,output_schema62243_62262,input_schema62244_62263,input_checker62245_62264,output_checker62246_62265))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_body),schema.core.make_fn_schema.call(null,output_schema62243_62262,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema62244_62263], null)));

outliner.components.index.__GT_outline_body = (function() {
var outliner$components$index$__GT_outline_body = null;
var outliner$components$index$__GT_outline_body__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22988__auto__);
});
var outliner$components$index$__GT_outline_body__2 = (function (cursor__22988__auto__,m62242){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22988__auto__,m62242);
});
outliner$components$index$__GT_outline_body = function(cursor__22988__auto__,m62242){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_body__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_outline_body__2.call(this,cursor__22988__auto__,m62242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_body__1;
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_body__2;
return outliner$components$index$__GT_outline_body;
})()
;

var ufv___63064 = schema.utils.use_fn_validation;
var output_schema62272_63065 = schema.core.Any;
var input_schema62273_63066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker62274_63067 = schema.core.checker.call(null,input_schema62273_63066);
var output_checker62275_63068 = schema.core.checker.call(null,output_schema62272_63065);
/**
 * Inputs: [data owner]
 */
outliner.components.index.component = ((function (ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function outliner$components$index$component(G__62276,G__62277){
var validate__20255__auto__ = ufv___63064.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___63069 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__62276,G__62277], null);
var temp__4126__auto___63070 = input_checker62274_63067.call(null,args__20256__auto___63069);
if(cljs.core.truth_(temp__4126__auto___63070)){
var error__20257__auto___63071 = temp__4126__auto___63070;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20257__auto___63071)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___63071,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___63069,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema62273_63066,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var data = G__62276;
var owner = G__62277;
while(true){
if(typeof outliner.components.index.t62671 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t62671 = (function (owner,data,output_checker62275,input_schema62273,output_schema62272,component,G__62276,ufv__,input_checker62274,G__62277,validate__20255__auto__,meta62672){
this.owner = owner;
this.data = data;
this.output_checker62275 = output_checker62275;
this.input_schema62273 = input_schema62273;
this.output_schema62272 = output_schema62272;
this.component = component;
this.G__62276 = G__62276;
this.ufv__ = ufv__;
this.input_checker62274 = input_checker62274;
this.G__62277 = G__62277;
this.validate__20255__auto__ = validate__20255__auto__;
this.meta62672 = meta62672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t62671.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t62671.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (_){
var self__ = this;
var ___$1 = this;
return "component";
});})(validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;

outliner.components.index.t62671.prototype.om$core$IRenderState$ = true;

outliner.components.index.t62671.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "yeah"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h2,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,outliner.components.index.outline_head,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,React.DOM.ol,{"className": "root"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,outliner.components.index.outline_body,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))],null))))],null))));
});})(validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;

outliner.components.index.t62671.prototype.om$core$IInitState$ = true;

outliner.components.index.t62671.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (_){
var self__ = this;
var ___$1 = this;
var key_down_chan = outliner.components.index.listen.call(null,window,"keydown");
var click_chan = cljs.core.async.chan.call(null);
var base_path = om.core.path.call(null,self__.data);
var c__22905__auto___63072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (){
var f__22906__auto__ = (function (){var switch__22884__auto__ = ((function (c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (state_62898){
var state_val_62899 = (state_62898[(1)]);
if((state_val_62899 === (65))){
var inst_62812 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_62900_63073 = state_62898__$1;
(statearr_62900_63073[(2)] = inst_62812);

(statearr_62900_63073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (70))){
var inst_62724 = (state_62898[(7)]);
var state_62898__$1 = state_62898;
var statearr_62901_63074 = state_62898__$1;
(statearr_62901_63074[(2)] = inst_62724);

(statearr_62901_63074[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (62))){
var inst_62771 = (state_62898[(8)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62771)){
var statearr_62902_63075 = state_62898__$1;
(statearr_62902_63075[(1)] = (63));

} else {
var statearr_62903_63076 = state_62898__$1;
(statearr_62903_63076[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (74))){
var inst_62696 = (state_62898[(9)]);
var inst_62724 = (state_62898[(7)]);
var inst_62747 = (state_62898[(10)]);
var inst_62691 = (state_62898[(11)]);
var inst_62684 = (state_62898[(12)]);
var inst_62690 = (state_62898[(13)]);
var inst_62726 = (state_62898[(14)]);
var inst_62742 = (state_62898[(15)]);
var inst_62728 = (state_62898[(16)]);
var inst_62771 = (state_62898[(8)]);
var inst_62763 = (state_62898[(17)]);
var inst_62725 = (state_62898[(18)]);
var inst_62722 = (state_62898[(19)]);
var inst_62686 = (state_62898[(20)]);
var inst_62736 = (state_62898[(21)]);
var inst_62685 = (state_62898[(22)]);
var inst_62830 = (function (){var up_path = inst_62763;
var G__62676 = click_chan;
var G__62675 = key_down_chan;
var vec__62679 = inst_62684;
var current_child_idx = inst_62725;
var is_root = inst_62726;
var parent_children = inst_62747;
var parent = inst_62742;
var ch62677 = inst_62686;
var val__22914__auto__ = inst_62685;
var ret62678 = inst_62684;
var down_path = inst_62771;
var command = inst_62722;
var vec__62689 = inst_62684;
var e = inst_62690;
var parent_path = inst_62736;
var current_path = inst_62724;
var c = inst_62691;
var current = inst_62728;
var keyevent__GT_command = inst_62696;
return ((function (up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (d){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current))){
return cljs.core.update_in.call(null,d,current_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359));
} else {
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"closed","closed",-919675359)),true);
}
});
;})(up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
})();
var inst_62831 = om.core.transact_BANG_.call(null,self__.data,inst_62830);
var state_62898__$1 = state_62898;
var statearr_62904_63077 = state_62898__$1;
(statearr_62904_63077[(2)] = inst_62831);

(statearr_62904_63077[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (7))){
var inst_62893 = (state_62898[(2)]);
var state_62898__$1 = (function (){var statearr_62905 = state_62898;
(statearr_62905[(23)] = inst_62893);

return statearr_62905;
})();
var statearr_62906_63078 = state_62898__$1;
(statearr_62906_63078[(2)] = null);

(statearr_62906_63078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (59))){
var inst_62696 = (state_62898[(9)]);
var inst_62724 = (state_62898[(7)]);
var inst_62747 = (state_62898[(10)]);
var inst_62691 = (state_62898[(11)]);
var inst_62684 = (state_62898[(12)]);
var inst_62690 = (state_62898[(13)]);
var inst_62726 = (state_62898[(14)]);
var inst_62742 = (state_62898[(15)]);
var inst_62728 = (state_62898[(16)]);
var inst_62771 = (state_62898[(8)]);
var inst_62763 = (state_62898[(17)]);
var inst_62725 = (state_62898[(18)]);
var inst_62722 = (state_62898[(19)]);
var inst_62686 = (state_62898[(20)]);
var inst_62736 = (state_62898[(21)]);
var inst_62685 = (state_62898[(22)]);
var inst_62795 = cljs.core.deref.call(null,self__.data);
var inst_62796 = cljs.core.get_in.call(null,inst_62795,inst_62763);
var inst_62797 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_62763);
var inst_62798 = (function (){var up_path = inst_62763;
var G__62676 = click_chan;
var G__62675 = key_down_chan;
var vec__62679 = inst_62684;
var current_child_idx = inst_62725;
var is_root = inst_62726;
var parent_children = inst_62747;
var parent = inst_62742;
var ch62677 = inst_62686;
var val__22914__auto__ = inst_62685;
var ret62678 = inst_62684;
var down_path = inst_62771;
var command = inst_62722;
var swap_node = inst_62796;
var vec__62689 = inst_62684;
var e = inst_62690;
var parent_path = inst_62736;
var current_path = inst_62724;
var c = inst_62691;
var current = inst_62728;
var keyevent__GT_command = inst_62696;
return ((function (up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,swap_node,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,inst_62795,inst_62796,inst_62797,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),up_path,current);
});
;})(up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,swap_node,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,inst_62795,inst_62796,inst_62797,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
})();
var inst_62799 = om.core.transact_BANG_.call(null,self__.data,inst_62798);
var state_62898__$1 = (function (){var statearr_62907 = state_62898;
(statearr_62907[(24)] = inst_62797);

return statearr_62907;
})();
var statearr_62908_63079 = state_62898__$1;
(statearr_62908_63079[(2)] = inst_62799);

(statearr_62908_63079[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (86))){
var state_62898__$1 = state_62898;
var statearr_62909_63080 = state_62898__$1;
(statearr_62909_63080[(2)] = null);

(statearr_62909_63080[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (20))){
var state_62898__$1 = state_62898;
var statearr_62910_63081 = state_62898__$1;
(statearr_62910_63081[(2)] = new cljs.core.Keyword(null,"meta","meta",1499536964));

(statearr_62910_63081[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (72))){
var inst_62696 = (state_62898[(9)]);
var inst_62724 = (state_62898[(7)]);
var inst_62747 = (state_62898[(10)]);
var inst_62691 = (state_62898[(11)]);
var inst_62684 = (state_62898[(12)]);
var inst_62690 = (state_62898[(13)]);
var inst_62726 = (state_62898[(14)]);
var inst_62742 = (state_62898[(15)]);
var inst_62728 = (state_62898[(16)]);
var inst_62771 = (state_62898[(8)]);
var inst_62763 = (state_62898[(17)]);
var inst_62725 = (state_62898[(18)]);
var inst_62722 = (state_62898[(19)]);
var inst_62686 = (state_62898[(20)]);
var inst_62736 = (state_62898[(21)]);
var inst_62685 = (state_62898[(22)]);
var inst_62820 = (state_62898[(2)]);
var inst_62821 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_62820);
var inst_62822 = (function (){var up_path = inst_62763;
var G__62676 = click_chan;
var G__62675 = key_down_chan;
var vec__62679 = inst_62684;
var current_child_idx = inst_62725;
var is_root = inst_62726;
var parent_children = inst_62747;
var parent = inst_62742;
var ch62677 = inst_62686;
var val__22914__auto__ = inst_62685;
var ret62678 = inst_62684;
var down_path = inst_62771;
var command = inst_62722;
var vec__62689 = inst_62684;
var e = inst_62690;
var parent_path = inst_62736;
var current_path = inst_62724;
var c = inst_62691;
var current = inst_62728;
var keyevent__GT_command = inst_62696;
return ((function (up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,inst_62820,inst_62821,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,inst_62820,inst_62821,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
})();
var inst_62823 = om.core.transact_BANG_.call(null,self__.data,inst_62822);
var state_62898__$1 = (function (){var statearr_62911 = state_62898;
(statearr_62911[(25)] = inst_62821);

return statearr_62911;
})();
var statearr_62912_63082 = state_62898__$1;
(statearr_62912_63082[(2)] = inst_62823);

(statearr_62912_63082[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (58))){
var inst_62763 = (state_62898[(17)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62763)){
var statearr_62913_63083 = state_62898__$1;
(statearr_62913_63083[(1)] = (59));

} else {
var statearr_62914_63084 = state_62898__$1;
(statearr_62914_63084[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (60))){
var state_62898__$1 = state_62898;
var statearr_62915_63085 = state_62898__$1;
(statearr_62915_63085[(2)] = null);

(statearr_62915_63085[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (27))){
var inst_62736 = (state_62898[(21)]);
var state_62898__$1 = state_62898;
var statearr_62916_63086 = state_62898__$1;
(statearr_62916_63086[(2)] = inst_62736);

(statearr_62916_63086[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (1))){
var state_62898__$1 = state_62898;
var statearr_62917_63087 = state_62898__$1;
(statearr_62917_63087[(2)] = null);

(statearr_62917_63087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (69))){
var inst_62826 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_62918_63088 = state_62898__$1;
(statearr_62918_63088[(2)] = inst_62826);

(statearr_62918_63088[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (101))){
var inst_62889 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_62919_63089 = state_62898__$1;
(statearr_62919_63089[(2)] = inst_62889);

(statearr_62919_63089[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (24))){
var inst_62729 = (state_62898[(26)]);
var state_62898__$1 = state_62898;
var statearr_62920_63090 = state_62898__$1;
(statearr_62920_63090[(2)] = inst_62729);

(statearr_62920_63090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (55))){
var inst_62763 = (state_62898[(17)]);
var inst_62725 = (state_62898[(18)]);
var inst_62736 = (state_62898[(21)]);
var inst_62786 = outliner.components.index.gen_left_path.call(null,inst_62725,inst_62736,inst_62763,self__.data);
var state_62898__$1 = state_62898;
var statearr_62921_63091 = state_62898__$1;
(statearr_62921_63091[(2)] = inst_62786);

(statearr_62921_63091[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (85))){
var inst_62696 = (state_62898[(9)]);
var inst_62724 = (state_62898[(7)]);
var inst_62747 = (state_62898[(10)]);
var inst_62691 = (state_62898[(11)]);
var inst_62684 = (state_62898[(12)]);
var inst_62690 = (state_62898[(13)]);
var inst_62726 = (state_62898[(14)]);
var inst_62742 = (state_62898[(15)]);
var inst_62728 = (state_62898[(16)]);
var inst_62771 = (state_62898[(8)]);
var inst_62763 = (state_62898[(17)]);
var inst_62725 = (state_62898[(18)]);
var inst_62722 = (state_62898[(19)]);
var inst_62686 = (state_62898[(20)]);
var inst_62736 = (state_62898[(21)]);
var inst_62685 = (state_62898[(22)]);
var inst_62850 = (function (){var up_path = inst_62763;
var G__62676 = click_chan;
var G__62675 = key_down_chan;
var vec__62679 = inst_62684;
var current_child_idx = inst_62725;
var is_root = inst_62726;
var parent_children = inst_62747;
var parent = inst_62742;
var ch62677 = inst_62686;
var val__22914__auto__ = inst_62685;
var ret62678 = inst_62684;
var down_path = inst_62771;
var command = inst_62722;
var vec__62689 = inst_62684;
var e = inst_62690;
var parent_path = inst_62736;
var current_path = inst_62724;
var c = inst_62691;
var current = inst_62728;
var keyevent__GT_command = inst_62696;
return ((function (up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = outliner.components.index.get_indexless.call(null,parent_path);
var destination_index = (cljs.core.last.call(null,parent_path) + (1));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,destination_children,(0),destination_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current], null),cljs.core.subvec.call(null,destination_children,destination_index)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,destination_index));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,destination_path,new_destination_children),cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
})();
var inst_62851 = om.core.transact_BANG_.call(null,self__.data,inst_62850);
var state_62898__$1 = state_62898;
var statearr_62922_63092 = state_62898__$1;
(statearr_62922_63092[(2)] = inst_62851);

(statearr_62922_63092[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (39))){
var state_62898__$1 = state_62898;
var statearr_62923_63093 = state_62898__$1;
(statearr_62923_63093[(2)] = null);

(statearr_62923_63093[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (88))){
var inst_62726 = (state_62898[(14)]);
var inst_62856 = cljs.core.not.call(null,inst_62726);
var state_62898__$1 = state_62898;
if(inst_62856){
var statearr_62924_63094 = state_62898__$1;
(statearr_62924_63094[(1)] = (89));

} else {
var statearr_62925_63095 = state_62898__$1;
(statearr_62925_63095[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (46))){
var inst_62763 = (state_62898[(17)]);
var inst_62773 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_62763);
var state_62898__$1 = state_62898;
var statearr_62926_63096 = state_62898__$1;
(statearr_62926_63096[(2)] = inst_62773);

(statearr_62926_63096[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (4))){
var inst_62684 = (state_62898[(12)]);
var inst_62686 = (state_62898[(20)]);
var inst_62684__$1 = (state_62898[(2)]);
var inst_62685 = cljs.core.nth.call(null,inst_62684__$1,(0),null);
var inst_62686__$1 = cljs.core.nth.call(null,inst_62684__$1,(1),null);
var inst_62687 = cljs.core._EQ_.call(null,inst_62686__$1,key_down_chan);
var state_62898__$1 = (function (){var statearr_62927 = state_62898;
(statearr_62927[(12)] = inst_62684__$1);

(statearr_62927[(20)] = inst_62686__$1);

(statearr_62927[(22)] = inst_62685);

return statearr_62927;
})();
if(inst_62687){
var statearr_62928_63097 = state_62898__$1;
(statearr_62928_63097[(1)] = (5));

} else {
var statearr_62929_63098 = state_62898__$1;
(statearr_62929_63098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (77))){
var inst_62763 = (state_62898[(17)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62763)){
var statearr_62930_63099 = state_62898__$1;
(statearr_62930_63099[(1)] = (78));

} else {
var statearr_62931_63100 = state_62898__$1;
(statearr_62931_63100[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (95))){
var state_62898__$1 = state_62898;
var statearr_62932_63101 = state_62898__$1;
(statearr_62932_63101[(2)] = null);

(statearr_62932_63101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (54))){
var inst_62724 = (state_62898[(7)]);
var state_62898__$1 = state_62898;
var statearr_62933_63102 = state_62898__$1;
(statearr_62933_63102[(2)] = inst_62724);

(statearr_62933_63102[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (92))){
var inst_62861 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var state_62898__$1 = state_62898;
var statearr_62934_63103 = state_62898__$1;
(statearr_62934_63103[(2)] = inst_62861);

(statearr_62934_63103[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (15))){
var inst_62704 = (state_62898[(27)]);
var state_62898__$1 = state_62898;
var statearr_62935_63104 = state_62898__$1;
(statearr_62935_63104[(2)] = inst_62704);

(statearr_62935_63104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (48))){
var inst_62776 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_62936_63105 = state_62898__$1;
(statearr_62936_63105[(2)] = inst_62776);

(statearr_62936_63105[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (50))){
var inst_62771 = (state_62898[(8)]);
var inst_62779 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_62771);
var state_62898__$1 = state_62898;
var statearr_62937_63106 = state_62898__$1;
(statearr_62937_63106[(2)] = inst_62779);

(statearr_62937_63106[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (75))){
var state_62898__$1 = state_62898;
var statearr_62938_63107 = state_62898__$1;
(statearr_62938_63107[(2)] = null);

(statearr_62938_63107[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (99))){
var inst_62685 = (state_62898[(22)]);
var state_62898__$1 = state_62898;
var statearr_62939_63108 = state_62898__$1;
(statearr_62939_63108[(2)] = inst_62685);

(statearr_62939_63108[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (21))){
var inst_62714 = (state_62898[(28)]);
var state_62898__$1 = state_62898;
var statearr_62940_63109 = state_62898__$1;
(statearr_62940_63109[(2)] = inst_62714);

(statearr_62940_63109[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (31))){
var inst_62726 = (state_62898[(14)]);
var inst_62747 = (state_62898[(2)]);
var state_62898__$1 = (function (){var statearr_62941 = state_62898;
(statearr_62941[(10)] = inst_62747);

return statearr_62941;
})();
if(cljs.core.truth_(inst_62726)){
var statearr_62942_63110 = state_62898__$1;
(statearr_62942_63110[(1)] = (32));

} else {
var statearr_62943_63111 = state_62898__$1;
(statearr_62943_63111[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (32))){
var state_62898__$1 = state_62898;
var statearr_62944_63112 = state_62898__$1;
(statearr_62944_63112[(2)] = false);

(statearr_62944_63112[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (40))){
var inst_62759 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_62945_63113 = state_62898__$1;
(statearr_62945_63113[(2)] = inst_62759);

(statearr_62945_63113[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (91))){
var inst_62868 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_62946_63114 = state_62898__$1;
(statearr_62946_63114[(2)] = inst_62868);

(statearr_62946_63114[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (56))){
var inst_62788 = (state_62898[(2)]);
var inst_62789 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_62788);
var state_62898__$1 = state_62898;
var statearr_62947_63115 = state_62898__$1;
(statearr_62947_63115[(2)] = inst_62789);

(statearr_62947_63115[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (33))){
var inst_62747 = (state_62898[(10)]);
var inst_62725 = (state_62898[(18)]);
var inst_62750 = (inst_62725 - (1));
var inst_62751 = cljs.core.get.call(null,inst_62747,inst_62750,false);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62751)){
var statearr_62948_63116 = state_62898__$1;
(statearr_62948_63116[(1)] = (35));

} else {
var statearr_62949_63117 = state_62898__$1;
(statearr_62949_63117[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (13))){
var inst_62690 = (state_62898[(13)]);
var inst_62704 = (state_62898[(27)]);
var inst_62703 = (state_62898[(2)]);
var inst_62704__$1 = inst_62690.altKey;
var state_62898__$1 = (function (){var statearr_62950 = state_62898;
(statearr_62950[(29)] = inst_62703);

(statearr_62950[(27)] = inst_62704__$1);

return statearr_62950;
})();
if(cljs.core.truth_(inst_62704__$1)){
var statearr_62951_63118 = state_62898__$1;
(statearr_62951_63118[(1)] = (14));

} else {
var statearr_62952_63119 = state_62898__$1;
(statearr_62952_63119[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (22))){
var inst_62696 = (state_62898[(9)]);
var inst_62724 = (state_62898[(7)]);
var inst_62726 = (state_62898[(14)]);
var inst_62703 = (state_62898[(29)]);
var inst_62713 = (state_62898[(30)]);
var inst_62698 = (state_62898[(31)]);
var inst_62697 = (state_62898[(32)]);
var inst_62708 = (state_62898[(33)]);
var inst_62729 = (state_62898[(26)]);
var inst_62718 = (state_62898[(2)]);
var inst_62719 = [inst_62698,inst_62703,inst_62708,inst_62713,inst_62718];
var inst_62720 = (new cljs.core.PersistentVector(null,5,(5),inst_62697,inst_62719,null));
var inst_62721 = cljs.core.filter.call(null,cljs.core.identity,inst_62720);
var inst_62722 = inst_62696.call(null,inst_62721);
var inst_62723 = om.core.get_state.call(null,self__.owner);
var inst_62724__$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(inst_62723);
var inst_62725 = cljs.core.last.call(null,inst_62724__$1);
var inst_62726__$1 = cljs.core._EQ_.call(null,outliner.components.index.root_node,inst_62724__$1);
var inst_62727 = cljs.core.deref.call(null,self__.data);
var inst_62728 = cljs.core.get_in.call(null,inst_62727,inst_62724__$1);
var inst_62729__$1 = !(inst_62726__$1);
var state_62898__$1 = (function (){var statearr_62953 = state_62898;
(statearr_62953[(7)] = inst_62724__$1);

(statearr_62953[(14)] = inst_62726__$1);

(statearr_62953[(16)] = inst_62728);

(statearr_62953[(18)] = inst_62725);

(statearr_62953[(19)] = inst_62722);

(statearr_62953[(26)] = inst_62729__$1);

return statearr_62953;
})();
if(inst_62729__$1){
var statearr_62954_63120 = state_62898__$1;
(statearr_62954_63120[(1)] = (23));

} else {
var statearr_62955_63121 = state_62898__$1;
(statearr_62955_63121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (90))){
var state_62898__$1 = state_62898;
var statearr_62956_63122 = state_62898__$1;
(statearr_62956_63122[(2)] = null);

(statearr_62956_63122[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (36))){
var state_62898__$1 = state_62898;
var statearr_62957_63123 = state_62898__$1;
(statearr_62957_63123[(1)] = (38));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (41))){
var inst_62725 = (state_62898[(18)]);
var inst_62736 = (state_62898[(21)]);
var inst_62767 = (inst_62725 + (1));
var inst_62768 = cljs.core.conj.call(null,inst_62736,new cljs.core.Keyword(null,"children","children",-940561982),inst_62767);
var state_62898__$1 = state_62898;
var statearr_62959_63124 = state_62898__$1;
(statearr_62959_63124[(2)] = inst_62768);

(statearr_62959_63124[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (89))){
var inst_62858 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var inst_62859 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),inst_62858);
var state_62898__$1 = state_62898;
if(inst_62859){
var statearr_62960_63125 = state_62898__$1;
(statearr_62960_63125[(1)] = (92));

} else {
var statearr_62961_63126 = state_62898__$1;
(statearr_62961_63126[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (100))){
var state_62898__$1 = state_62898;
var statearr_62962_63127 = state_62898__$1;
(statearr_62962_63127[(2)] = null);

(statearr_62962_63127[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (43))){
var inst_62722 = (state_62898[(19)]);
var inst_62771 = (state_62898[(2)]);
var state_62898__$1 = (function (){var statearr_62963 = state_62898;
(statearr_62963[(8)] = inst_62771);

return statearr_62963;
})();
var G__62964_63128 = (((inst_62722 instanceof cljs.core.Keyword))?inst_62722.fqn:null);
switch (G__62964_63128) {
case "left-shift-node":
var statearr_62965_63130 = state_62898__$1;
(statearr_62965_63130[(1)] = (81));


break;
case "node-down":
var statearr_62966_63131 = state_62898__$1;
(statearr_62966_63131[(1)] = (62));


break;
case "toggle-edit":
var statearr_62967_63132 = state_62898__$1;
(statearr_62967_63132[(1)] = (88));


break;
case "cursor-right":
var statearr_62968_63133 = state_62898__$1;
(statearr_62968_63133[(1)] = (57));


break;
case "right-shift-node":
var statearr_62969_63134 = state_62898__$1;
(statearr_62969_63134[(1)] = (77));


break;
case "toggle-closed":
var statearr_62970_63135 = state_62898__$1;
(statearr_62970_63135[(1)] = (73));


break;
case "node-up":
var statearr_62971_63136 = state_62898__$1;
(statearr_62971_63136[(1)] = (58));


break;
case "cursor-left":
var statearr_62972_63137 = state_62898__$1;
(statearr_62972_63137[(1)] = (53));


break;
case "cursor-up":
var statearr_62973_63138 = state_62898__$1;
(statearr_62973_63138[(1)] = (45));


break;
case "cursor-down":
var statearr_62974_63139 = state_62898__$1;
(statearr_62974_63139[(1)] = (49));


break;
case "destroy-node":
var statearr_62975_63140 = state_62898__$1;
(statearr_62975_63140[(1)] = (66));


break;
default:
var statearr_62976_63141 = state_62898__$1;
(statearr_62976_63141[(1)] = (95));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (61))){
var inst_62802 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_62977_63142 = state_62898__$1;
(statearr_62977_63142[(2)] = inst_62802);

(statearr_62977_63142[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (29))){
var inst_62742 = (state_62898[(15)]);
var inst_62744 = cljs.core.get.call(null,inst_62742,new cljs.core.Keyword(null,"children","children",-940561982),false);
var state_62898__$1 = state_62898;
var statearr_62978_63143 = state_62898__$1;
(statearr_62978_63143[(2)] = inst_62744);

(statearr_62978_63143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (44))){
var inst_62873 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_62979_63144 = state_62898__$1;
(statearr_62979_63144[(2)] = inst_62873);

(statearr_62979_63144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (93))){
var inst_62863 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var state_62898__$1 = state_62898;
var statearr_62980_63145 = state_62898__$1;
(statearr_62980_63145[(2)] = inst_62863);

(statearr_62980_63145[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (6))){
var inst_62686 = (state_62898[(20)]);
var inst_62875 = cljs.core._EQ_.call(null,inst_62686,click_chan);
var state_62898__$1 = state_62898;
if(inst_62875){
var statearr_62981_63146 = state_62898__$1;
(statearr_62981_63146[(1)] = (96));

} else {
var statearr_62982_63147 = state_62898__$1;
(statearr_62982_63147[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (28))){
var inst_62742 = (state_62898[(15)]);
var inst_62742__$1 = (state_62898[(2)]);
var state_62898__$1 = (function (){var statearr_62983 = state_62898;
(statearr_62983[(15)] = inst_62742__$1);

return statearr_62983;
})();
if(cljs.core.truth_(inst_62742__$1)){
var statearr_62984_63148 = state_62898__$1;
(statearr_62984_63148[(1)] = (29));

} else {
var statearr_62985_63149 = state_62898__$1;
(statearr_62985_63149[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (64))){
var state_62898__$1 = state_62898;
var statearr_62986_63150 = state_62898__$1;
(statearr_62986_63150[(2)] = null);

(statearr_62986_63150[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (51))){
var state_62898__$1 = state_62898;
var statearr_62987_63151 = state_62898__$1;
(statearr_62987_63151[(2)] = null);

(statearr_62987_63151[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (25))){
var inst_62736 = (state_62898[(21)]);
var inst_62736__$1 = (state_62898[(2)]);
var state_62898__$1 = (function (){var statearr_62988 = state_62898;
(statearr_62988[(21)] = inst_62736__$1);

return statearr_62988;
})();
if(cljs.core.truth_(inst_62736__$1)){
var statearr_62989_63152 = state_62898__$1;
(statearr_62989_63152[(1)] = (26));

} else {
var statearr_62990_63153 = state_62898__$1;
(statearr_62990_63153[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (34))){
var inst_62747 = (state_62898[(10)]);
var inst_62725 = (state_62898[(18)]);
var inst_62763 = (state_62898[(2)]);
var inst_62764 = (inst_62725 + (1));
var inst_62765 = cljs.core.get.call(null,inst_62747,inst_62764,false);
var state_62898__$1 = (function (){var statearr_62991 = state_62898;
(statearr_62991[(17)] = inst_62763);

return statearr_62991;
})();
if(cljs.core.truth_(inst_62765)){
var statearr_62992_63154 = state_62898__$1;
(statearr_62992_63154[(1)] = (41));

} else {
var statearr_62993_63155 = state_62898__$1;
(statearr_62993_63155[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (17))){
var state_62898__$1 = state_62898;
var statearr_62994_63156 = state_62898__$1;
(statearr_62994_63156[(2)] = new cljs.core.Keyword(null,"ctrl","ctrl",361402094));

(statearr_62994_63156[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (3))){
var inst_62896 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62898__$1,inst_62896);
} else {
if((state_val_62899 === (12))){
var inst_62699 = (state_62898[(34)]);
var state_62898__$1 = state_62898;
var statearr_62995_63157 = state_62898__$1;
(statearr_62995_63157[(2)] = inst_62699);

(statearr_62995_63157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (2))){
var inst_62680 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62681 = [key_down_chan,click_chan];
var inst_62682 = (new cljs.core.PersistentVector(null,2,(5),inst_62680,inst_62681,null));
var state_62898__$1 = state_62898;
return cljs.core.async.ioc_alts_BANG_.call(null,state_62898__$1,(4),inst_62682);
} else {
if((state_val_62899 === (66))){
var inst_62726 = (state_62898[(14)]);
var inst_62814 = cljs.core.not.call(null,inst_62726);
var state_62898__$1 = state_62898;
if(inst_62814){
var statearr_62996_63158 = state_62898__$1;
(statearr_62996_63158[(1)] = (67));

} else {
var statearr_62997_63159 = state_62898__$1;
(statearr_62997_63159[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (23))){
var inst_62724 = (state_62898[(7)]);
var inst_62731 = cljs.core.count.call(null,inst_62724);
var inst_62732 = (inst_62731 - (2));
var inst_62733 = cljs.core.subvec.call(null,inst_62724,(0),inst_62732);
var state_62898__$1 = state_62898;
var statearr_62998_63160 = state_62898__$1;
(statearr_62998_63160[(2)] = inst_62733);

(statearr_62998_63160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (47))){
var state_62898__$1 = state_62898;
var statearr_62999_63161 = state_62898__$1;
(statearr_62999_63161[(2)] = null);

(statearr_62999_63161[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (35))){
var inst_62725 = (state_62898[(18)]);
var inst_62736 = (state_62898[(21)]);
var inst_62753 = (inst_62725 - (1));
var inst_62754 = cljs.core.conj.call(null,inst_62736,new cljs.core.Keyword(null,"children","children",-940561982),inst_62753);
var state_62898__$1 = state_62898;
var statearr_63000_63162 = state_62898__$1;
(statearr_63000_63162[(2)] = inst_62754);

(statearr_63000_63162[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (82))){
var inst_62736 = (state_62898[(21)]);
var inst_62844 = cljs.core._EQ_.call(null,inst_62736,outliner.components.index.root_node);
var inst_62845 = !(inst_62844);
var state_62898__$1 = state_62898;
var statearr_63001_63163 = state_62898__$1;
(statearr_63001_63163[(2)] = inst_62845);

(statearr_63001_63163[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (76))){
var inst_62834 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_63002_63164 = state_62898__$1;
(statearr_63002_63164[(2)] = inst_62834);

(statearr_63002_63164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (97))){
var inst_62686 = (state_62898[(20)]);
var inst_62885 = cljs.core._EQ_.call(null,inst_62686,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_62898__$1 = state_62898;
if(inst_62885){
var statearr_63003_63165 = state_62898__$1;
(statearr_63003_63165[(1)] = (99));

} else {
var statearr_63004_63166 = state_62898__$1;
(statearr_63004_63166[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (19))){
var inst_62690 = (state_62898[(13)]);
var inst_62714 = (state_62898[(28)]);
var inst_62713 = (state_62898[(2)]);
var inst_62714__$1 = inst_62690.metaKey;
var state_62898__$1 = (function (){var statearr_63005 = state_62898;
(statearr_63005[(28)] = inst_62714__$1);

(statearr_63005[(30)] = inst_62713);

return statearr_63005;
})();
if(cljs.core.truth_(inst_62714__$1)){
var statearr_63006_63167 = state_62898__$1;
(statearr_63006_63167[(1)] = (20));

} else {
var statearr_63007_63168 = state_62898__$1;
(statearr_63007_63168[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (57))){
var inst_62724 = (state_62898[(7)]);
var inst_62747 = (state_62898[(10)]);
var inst_62728 = (state_62898[(16)]);
var inst_62771 = (state_62898[(8)]);
var inst_62725 = (state_62898[(18)]);
var inst_62736 = (state_62898[(21)]);
var inst_62791 = outliner.components.index.gen_right_path.call(null,inst_62724,inst_62728,inst_62725,inst_62736,inst_62747,inst_62771,self__.data);
var inst_62792 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_62791);
var state_62898__$1 = state_62898;
var statearr_63008_63169 = state_62898__$1;
(statearr_63008_63169[(2)] = inst_62792);

(statearr_63008_63169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (68))){
var state_62898__$1 = state_62898;
var statearr_63009_63170 = state_62898__$1;
(statearr_63009_63170[(2)] = null);

(statearr_63009_63170[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (11))){
var state_62898__$1 = state_62898;
var statearr_63010_63171 = state_62898__$1;
(statearr_63010_63171[(2)] = new cljs.core.Keyword(null,"shift","shift",997140064));

(statearr_63010_63171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (9))){
var state_62898__$1 = state_62898;
var statearr_63011_63172 = state_62898__$1;
(statearr_63011_63172[(2)] = outliner.components.index.edit_keymap);

(statearr_63011_63172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (5))){
var inst_62684 = (state_62898[(12)]);
var inst_62690 = cljs.core.nth.call(null,inst_62684,(0),null);
var inst_62691 = cljs.core.nth.call(null,inst_62684,(1),null);
var inst_62694 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_62898__$1 = (function (){var statearr_63012 = state_62898;
(statearr_63012[(11)] = inst_62691);

(statearr_63012[(13)] = inst_62690);

return statearr_63012;
})();
var G__63013_63173 = (((inst_62694 instanceof cljs.core.Keyword))?inst_62694.fqn:null);
switch (G__63013_63173) {
case "editing":
var statearr_63014_63175 = state_62898__$1;
(statearr_63014_63175[(1)] = (9));


break;
default:
var statearr_63015_63176 = state_62898__$1;
(statearr_63015_63176[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (83))){
var inst_62736 = (state_62898[(21)]);
var state_62898__$1 = state_62898;
var statearr_63016_63177 = state_62898__$1;
(statearr_63016_63177[(2)] = inst_62736);

(statearr_63016_63177[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (14))){
var state_62898__$1 = state_62898;
var statearr_63017_63178 = state_62898__$1;
(statearr_63017_63178[(2)] = new cljs.core.Keyword(null,"alt","alt",-3214426));

(statearr_63017_63178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (45))){
var inst_62763 = (state_62898[(17)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62763)){
var statearr_63018_63179 = state_62898__$1;
(statearr_63018_63179[(1)] = (46));

} else {
var statearr_63019_63180 = state_62898__$1;
(statearr_63019_63180[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (53))){
var inst_62726 = (state_62898[(14)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62726)){
var statearr_63020_63181 = state_62898__$1;
(statearr_63020_63181[(1)] = (54));

} else {
var statearr_63021_63182 = state_62898__$1;
(statearr_63021_63182[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (78))){
var inst_62696 = (state_62898[(9)]);
var inst_62724 = (state_62898[(7)]);
var inst_62747 = (state_62898[(10)]);
var inst_62691 = (state_62898[(11)]);
var inst_62684 = (state_62898[(12)]);
var inst_62690 = (state_62898[(13)]);
var inst_62726 = (state_62898[(14)]);
var inst_62742 = (state_62898[(15)]);
var inst_62728 = (state_62898[(16)]);
var inst_62771 = (state_62898[(8)]);
var inst_62763 = (state_62898[(17)]);
var inst_62725 = (state_62898[(18)]);
var inst_62722 = (state_62898[(19)]);
var inst_62686 = (state_62898[(20)]);
var inst_62736 = (state_62898[(21)]);
var inst_62685 = (state_62898[(22)]);
var inst_62837 = (function (){var up_path = inst_62763;
var G__62676 = click_chan;
var G__62675 = key_down_chan;
var vec__62679 = inst_62684;
var current_child_idx = inst_62725;
var is_root = inst_62726;
var parent_children = inst_62747;
var parent = inst_62742;
var ch62677 = inst_62686;
var val__22914__auto__ = inst_62685;
var ret62678 = inst_62684;
var down_path = inst_62771;
var command = inst_62722;
var vec__62689 = inst_62684;
var e = inst_62690;
var parent_path = inst_62736;
var current_path = inst_62724;
var c = inst_62691;
var current = inst_62728;
var keyevent__GT_command = inst_62696;
return ((function (up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = cljs.core.conj.call(null,up_path,new cljs.core.Keyword(null,"children","children",-940561982));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.conj.call(null,destination_children,current);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,(cljs.core.count.call(null,new_destination_children) - (1))));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children),up_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359)),destination_path,new_destination_children);
});
;})(up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
})();
var inst_62838 = om.core.transact_BANG_.call(null,self__.data,inst_62837);
var state_62898__$1 = state_62898;
var statearr_63022_63183 = state_62898__$1;
(statearr_63022_63183[(2)] = inst_62838);

(statearr_63022_63183[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (26))){
var inst_62736 = (state_62898[(21)]);
var inst_62738 = cljs.core.deref.call(null,self__.data);
var inst_62739 = cljs.core.get_in.call(null,inst_62738,inst_62736);
var state_62898__$1 = state_62898;
var statearr_63023_63184 = state_62898__$1;
(statearr_63023_63184[(2)] = inst_62739);

(statearr_63023_63184[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (16))){
var inst_62690 = (state_62898[(13)]);
var inst_62709 = (state_62898[(35)]);
var inst_62708 = (state_62898[(2)]);
var inst_62709__$1 = inst_62690.ctrlKey;
var state_62898__$1 = (function (){var statearr_63024 = state_62898;
(statearr_63024[(33)] = inst_62708);

(statearr_63024[(35)] = inst_62709__$1);

return statearr_63024;
})();
if(cljs.core.truth_(inst_62709__$1)){
var statearr_63025_63185 = state_62898__$1;
(statearr_63025_63185[(1)] = (17));

} else {
var statearr_63026_63186 = state_62898__$1;
(statearr_63026_63186[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (81))){
var inst_62736 = (state_62898[(21)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62736)){
var statearr_63027_63187 = state_62898__$1;
(statearr_63027_63187[(1)] = (82));

} else {
var statearr_63028_63188 = state_62898__$1;
(statearr_63028_63188[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (79))){
var state_62898__$1 = state_62898;
var statearr_63029_63189 = state_62898__$1;
(statearr_63029_63189[(2)] = null);

(statearr_63029_63189[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (38))){
var state_62898__$1 = state_62898;
var statearr_63030_63190 = state_62898__$1;
(statearr_63030_63190[(2)] = false);

(statearr_63030_63190[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (98))){
var inst_62891 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_63031_63191 = state_62898__$1;
(statearr_63031_63191[(2)] = inst_62891);

(statearr_63031_63191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (87))){
var inst_62854 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_63032_63192 = state_62898__$1;
(statearr_63032_63192[(2)] = inst_62854);

(statearr_63032_63192[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (30))){
var inst_62742 = (state_62898[(15)]);
var state_62898__$1 = state_62898;
var statearr_63033_63193 = state_62898__$1;
(statearr_63033_63193[(2)] = inst_62742);

(statearr_63033_63193[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (73))){
var inst_62726 = (state_62898[(14)]);
var inst_62828 = cljs.core.not.call(null,inst_62726);
var state_62898__$1 = state_62898;
if(inst_62828){
var statearr_63034_63194 = state_62898__$1;
(statearr_63034_63194[(1)] = (74));

} else {
var statearr_63035_63195 = state_62898__$1;
(statearr_63035_63195[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (96))){
var inst_62684 = (state_62898[(12)]);
var inst_62878 = cljs.core.nth.call(null,inst_62684,(0),null);
var inst_62879 = cljs.core.nth.call(null,inst_62684,(1),null);
var inst_62880 = new cljs.core.Keyword(null,"new-path","new-path",1732999939).cljs$core$IFn$_invoke$arity$1(inst_62878);
var inst_62881 = cljs.core.count.call(null,base_path);
var inst_62882 = cljs.core.subvec.call(null,inst_62880,inst_62881);
var inst_62883 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_62882);
var state_62898__$1 = (function (){var statearr_63036 = state_62898;
(statearr_63036[(36)] = inst_62879);

return statearr_63036;
})();
var statearr_63037_63196 = state_62898__$1;
(statearr_63037_63196[(2)] = inst_62883);

(statearr_63037_63196[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (10))){
var state_62898__$1 = state_62898;
var statearr_63038_63197 = state_62898__$1;
(statearr_63038_63197[(2)] = outliner.components.index.normal_keymap);

(statearr_63038_63197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (18))){
var inst_62709 = (state_62898[(35)]);
var state_62898__$1 = state_62898;
var statearr_63039_63198 = state_62898__$1;
(statearr_63039_63198[(2)] = inst_62709);

(statearr_63039_63198[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (52))){
var inst_62782 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_63040_63199 = state_62898__$1;
(statearr_63040_63199[(2)] = inst_62782);

(statearr_63040_63199[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (67))){
var inst_62726 = (state_62898[(14)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62726)){
var statearr_63041_63200 = state_62898__$1;
(statearr_63041_63200[(1)] = (70));

} else {
var statearr_63042_63201 = state_62898__$1;
(statearr_63042_63201[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (71))){
var inst_62763 = (state_62898[(17)]);
var inst_62725 = (state_62898[(18)]);
var inst_62736 = (state_62898[(21)]);
var inst_62818 = outliner.components.index.gen_left_path.call(null,inst_62725,inst_62736,inst_62763,self__.data);
var state_62898__$1 = state_62898;
var statearr_63043_63202 = state_62898__$1;
(statearr_63043_63202[(2)] = inst_62818);

(statearr_63043_63202[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (42))){
var state_62898__$1 = state_62898;
var statearr_63044_63203 = state_62898__$1;
(statearr_63044_63203[(2)] = false);

(statearr_63044_63203[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (80))){
var inst_62841 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_63045_63204 = state_62898__$1;
(statearr_63045_63204[(2)] = inst_62841);

(statearr_63045_63204[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (37))){
var inst_62761 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_63046_63205 = state_62898__$1;
(statearr_63046_63205[(2)] = inst_62761);

(statearr_63046_63205[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (63))){
var inst_62696 = (state_62898[(9)]);
var inst_62724 = (state_62898[(7)]);
var inst_62747 = (state_62898[(10)]);
var inst_62691 = (state_62898[(11)]);
var inst_62684 = (state_62898[(12)]);
var inst_62690 = (state_62898[(13)]);
var inst_62726 = (state_62898[(14)]);
var inst_62742 = (state_62898[(15)]);
var inst_62728 = (state_62898[(16)]);
var inst_62771 = (state_62898[(8)]);
var inst_62763 = (state_62898[(17)]);
var inst_62725 = (state_62898[(18)]);
var inst_62722 = (state_62898[(19)]);
var inst_62686 = (state_62898[(20)]);
var inst_62736 = (state_62898[(21)]);
var inst_62685 = (state_62898[(22)]);
var inst_62805 = cljs.core.deref.call(null,self__.data);
var inst_62806 = cljs.core.get_in.call(null,inst_62805,inst_62771);
var inst_62807 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_62771);
var inst_62808 = (function (){var up_path = inst_62763;
var G__62676 = click_chan;
var G__62675 = key_down_chan;
var vec__62679 = inst_62684;
var current_child_idx = inst_62725;
var is_root = inst_62726;
var parent_children = inst_62747;
var parent = inst_62742;
var ch62677 = inst_62686;
var val__22914__auto__ = inst_62685;
var ret62678 = inst_62684;
var down_path = inst_62771;
var command = inst_62722;
var swap_node = inst_62806;
var vec__62689 = inst_62684;
var e = inst_62690;
var parent_path = inst_62736;
var current_path = inst_62724;
var c = inst_62691;
var current = inst_62728;
var keyevent__GT_command = inst_62696;
return ((function (up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,swap_node,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,inst_62805,inst_62806,inst_62807,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),down_path,current);
});
;})(up_path,G__62676,G__62675,vec__62679,current_child_idx,is_root,parent_children,parent,ch62677,val__22914__auto__,ret62678,down_path,command,swap_node,vec__62689,e,parent_path,current_path,c,current,keyevent__GT_command,inst_62696,inst_62724,inst_62747,inst_62691,inst_62684,inst_62690,inst_62726,inst_62742,inst_62728,inst_62771,inst_62763,inst_62725,inst_62722,inst_62686,inst_62736,inst_62685,inst_62805,inst_62806,inst_62807,state_val_62899,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
})();
var inst_62809 = om.core.transact_BANG_.call(null,self__.data,inst_62808);
var state_62898__$1 = (function (){var statearr_63047 = state_62898;
(statearr_63047[(37)] = inst_62807);

return statearr_63047;
})();
var statearr_63048_63206 = state_62898__$1;
(statearr_63048_63206[(2)] = inst_62809);

(statearr_63048_63206[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (94))){
var inst_62865 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
var statearr_63049_63207 = state_62898__$1;
(statearr_63049_63207[(2)] = inst_62865);

(statearr_63049_63207[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (8))){
var inst_62699 = (state_62898[(34)]);
var inst_62690 = (state_62898[(13)]);
var inst_62696 = (state_62898[(2)]);
var inst_62697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62698 = inst_62690.keyCode;
var inst_62699__$1 = inst_62690.shiftKey;
var state_62898__$1 = (function (){var statearr_63050 = state_62898;
(statearr_63050[(9)] = inst_62696);

(statearr_63050[(34)] = inst_62699__$1);

(statearr_63050[(31)] = inst_62698);

(statearr_63050[(32)] = inst_62697);

return statearr_63050;
})();
if(cljs.core.truth_(inst_62699__$1)){
var statearr_63051_63208 = state_62898__$1;
(statearr_63051_63208[(1)] = (11));

} else {
var statearr_63052_63209 = state_62898__$1;
(statearr_63052_63209[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (49))){
var inst_62771 = (state_62898[(8)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62771)){
var statearr_63053_63210 = state_62898__$1;
(statearr_63053_63210[(1)] = (50));

} else {
var statearr_63054_63211 = state_62898__$1;
(statearr_63054_63211[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62899 === (84))){
var inst_62848 = (state_62898[(2)]);
var state_62898__$1 = state_62898;
if(cljs.core.truth_(inst_62848)){
var statearr_63055_63212 = state_62898__$1;
(statearr_63055_63212[(1)] = (85));

} else {
var statearr_63056_63213 = state_62898__$1;
(statearr_63056_63213[(1)] = (86));

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
});})(c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;
return ((function (switch__22884__auto__,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function() {
var outliner$components$index$component_$_state_machine__22885__auto__ = null;
var outliner$components$index$component_$_state_machine__22885__auto____0 = (function (){
var statearr_63060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63060[(0)] = outliner$components$index$component_$_state_machine__22885__auto__);

(statearr_63060[(1)] = (1));

return statearr_63060;
});
var outliner$components$index$component_$_state_machine__22885__auto____1 = (function (state_62898){
while(true){
var ret_value__22886__auto__ = (function (){try{while(true){
var result__22887__auto__ = switch__22884__auto__.call(null,state_62898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22887__auto__;
}
break;
}
}catch (e63061){if((e63061 instanceof Object)){
var ex__22888__auto__ = e63061;
var statearr_63062_63214 = state_62898;
(statearr_63062_63214[(5)] = ex__22888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63215 = state_62898;
state_62898 = G__63215;
continue;
} else {
return ret_value__22886__auto__;
}
break;
}
});
outliner$components$index$component_$_state_machine__22885__auto__ = function(state_62898){
switch(arguments.length){
case 0:
return outliner$components$index$component_$_state_machine__22885__auto____0.call(this);
case 1:
return outliner$components$index$component_$_state_machine__22885__auto____1.call(this,state_62898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$component_$_state_machine__22885__auto__.cljs$core$IFn$_invoke$arity$0 = outliner$components$index$component_$_state_machine__22885__auto____0;
outliner$components$index$component_$_state_machine__22885__auto__.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$component_$_state_machine__22885__auto____1;
return outliner$components$index$component_$_state_machine__22885__auto__;
})()
;})(switch__22884__auto__,c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
})();
var state__22907__auto__ = (function (){var statearr_63063 = f__22906__auto__.call(null);
(statearr_63063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22905__auto___63072);

return statearr_63063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22907__auto__);
});})(c__22905__auto___63072,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
);


return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),outliner.components.index.root_node,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null);
});})(validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;

outliner.components.index.t62671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (_62673){
var self__ = this;
var _62673__$1 = this;
return self__.meta62672;
});})(validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;

outliner.components.index.t62671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (_62673,meta62672__$1){
var self__ = this;
var _62673__$1 = this;
return (new outliner.components.index.t62671(self__.owner,self__.data,self__.output_checker62275,self__.input_schema62273,self__.output_schema62272,self__.component,self__.G__62276,self__.ufv__,self__.input_checker62274,self__.G__62277,self__.validate__20255__auto__,meta62672__$1));
});})(validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;

outliner.components.index.t62671.cljs$lang$type = true;

outliner.components.index.t62671.cljs$lang$ctorStr = "outliner.components.index/t62671";

outliner.components.index.t62671.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t62671");
});})(validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;

outliner.components.index.__GT_t62671 = ((function (validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068){
return (function outliner$components$index$component_$___GT_t62671(owner__$1,data__$1,output_checker62275__$1,input_schema62273__$1,output_schema62272__$1,component__$1,G__62276__$1,ufv____$1,input_checker62274__$1,G__62277__$1,validate__20255__auto____$1,meta62672){
return (new outliner.components.index.t62671(owner__$1,data__$1,output_checker62275__$1,input_schema62273__$1,output_schema62272__$1,component__$1,G__62276__$1,ufv____$1,input_checker62274__$1,G__62277__$1,validate__20255__auto____$1,meta62672));
});})(validate__20255__auto__,ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;

}

return (new outliner.components.index.t62671(owner,data,output_checker62275_63068,input_schema62273_63066,output_schema62272_63065,outliner$components$index$component,G__62276,ufv___63064,input_checker62274_63067,G__62277,validate__20255__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___63216 = output_checker62275_63068.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___63216)){
var error__20257__auto___63217 = temp__4126__auto___63216;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20257__auto___63217)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___63217,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema62272_63065,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___63064,output_schema62272_63065,input_schema62273_63066,input_checker62274_63067,output_checker62275_63068))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.component),schema.core.make_fn_schema.call(null,output_schema62272_63065,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema62273_63066], null)));

outliner.components.index.__GT_component = (function() {
var outliner$components$index$__GT_component = null;
var outliner$components$index$__GT_component__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.component,cursor__22988__auto__);
});
var outliner$components$index$__GT_component__2 = (function (cursor__22988__auto__,m62271){
return om.core.build.call(null,outliner.components.index.component,cursor__22988__auto__,m62271);
});
outliner$components$index$__GT_component = function(cursor__22988__auto__,m62271){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_component__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_component__2.call(this,cursor__22988__auto__,m62271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_component__1;
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_component__2;
return outliner$components$index$__GT_component;
})()
;

//# sourceMappingURL=index.js.map?rel=1427717570821