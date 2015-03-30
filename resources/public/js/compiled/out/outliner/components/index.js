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
var G__67237 = cljs.core.conj.call(null,p,new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.count.call(null,children) - (1)));
p = G__67237;
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
var G__67238 = outliner.components.index.get_parent.call(null,p);
p = G__67238;
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

var ufv___67252 = schema.utils.use_fn_validation;
var output_schema67240_67253 = schema.core.Any;
var input_schema67241_67254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"head","head",869147608,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker67242_67255 = schema.core.checker.call(null,input_schema67241_67254);
var output_checker67243_67256 = schema.core.checker.call(null,output_schema67240_67253);
/**
 * Inputs: [head owner]
 */
outliner.components.index.outline_head = ((function (ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256){
return (function outliner$components$index$outline_head(G__67244,G__67245){
var validate__20255__auto__ = ufv___67252.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___67257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67244,G__67245], null);
var temp__4126__auto___67258 = input_checker67242_67255.call(null,args__20256__auto___67257);
if(cljs.core.truth_(temp__4126__auto___67258)){
var error__20257__auto___67259 = temp__4126__auto___67258;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20257__auto___67259)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___67259,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___67257,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67241_67254,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var head = G__67244;
var owner = G__67245;
while(true){
if(typeof outliner.components.index.t67249 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t67249 = (function (G__67245,owner,G__67244,input_schema67241,outline_head,input_checker67242,output_checker67243,head,ufv__,validate__20255__auto__,output_schema67240,meta67250){
this.G__67245 = G__67245;
this.owner = owner;
this.G__67244 = G__67244;
this.input_schema67241 = input_schema67241;
this.outline_head = outline_head;
this.input_checker67242 = input_checker67242;
this.output_checker67243 = output_checker67243;
this.head = head;
this.ufv__ = ufv__;
this.validate__20255__auto__ = validate__20255__auto__;
this.output_schema67240 = output_schema67240;
this.meta67250 = meta67250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t67249.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t67249.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-head";
});})(validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256))
;

outliner.components.index.t67249.prototype.om$core$IRender$ = true;

outliner.components.index.t67249.prototype.om$core$IRender$render$arity$1 = ((function (validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.h1,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.head)],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h2,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(self__.head)],null))))],null)));
});})(validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256))
;

outliner.components.index.t67249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256){
return (function (_67251){
var self__ = this;
var _67251__$1 = this;
return self__.meta67250;
});})(validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256))
;

outliner.components.index.t67249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256){
return (function (_67251,meta67250__$1){
var self__ = this;
var _67251__$1 = this;
return (new outliner.components.index.t67249(self__.G__67245,self__.owner,self__.G__67244,self__.input_schema67241,self__.outline_head,self__.input_checker67242,self__.output_checker67243,self__.head,self__.ufv__,self__.validate__20255__auto__,self__.output_schema67240,meta67250__$1));
});})(validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256))
;

outliner.components.index.t67249.cljs$lang$type = true;

outliner.components.index.t67249.cljs$lang$ctorStr = "outliner.components.index/t67249";

outliner.components.index.t67249.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t67249");
});})(validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256))
;

outliner.components.index.__GT_t67249 = ((function (validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256){
return (function outliner$components$index$outline_head_$___GT_t67249(G__67245__$1,owner__$1,G__67244__$1,input_schema67241__$1,outline_head__$1,input_checker67242__$1,output_checker67243__$1,head__$1,ufv____$1,validate__20255__auto____$1,output_schema67240__$1,meta67250){
return (new outliner.components.index.t67249(G__67245__$1,owner__$1,G__67244__$1,input_schema67241__$1,outline_head__$1,input_checker67242__$1,output_checker67243__$1,head__$1,ufv____$1,validate__20255__auto____$1,output_schema67240__$1,meta67250));
});})(validate__20255__auto__,ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256))
;

}

return (new outliner.components.index.t67249(G__67245,owner,G__67244,input_schema67241_67254,outliner$components$index$outline_head,input_checker67242_67255,output_checker67243_67256,head,ufv___67252,validate__20255__auto__,output_schema67240_67253,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___67260 = output_checker67243_67256.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___67260)){
var error__20257__auto___67261 = temp__4126__auto___67260;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-head","outline-head",-351297394,null),cljs.core.pr_str.call(null,error__20257__auto___67261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___67261,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67240_67253,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___67252,output_schema67240_67253,input_schema67241_67254,input_checker67242_67255,output_checker67243_67256))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_head),schema.core.make_fn_schema.call(null,output_schema67240_67253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67241_67254], null)));

outliner.components.index.__GT_outline_head = (function() {
var outliner$components$index$__GT_outline_head = null;
var outliner$components$index$__GT_outline_head__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22988__auto__);
});
var outliner$components$index$__GT_outline_head__2 = (function (cursor__22988__auto__,m67239){
return om.core.build.call(null,outliner.components.index.outline_head,cursor__22988__auto__,m67239);
});
outliner$components$index$__GT_outline_head = function(cursor__22988__auto__,m67239){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_head__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_outline_head__2.call(this,cursor__22988__auto__,m67239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_head__1;
outliner$components$index$__GT_outline_head.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_head__2;
return outliner$components$index$__GT_outline_head;
})()
;

var ufv___67281 = schema.utils.use_fn_validation;
var output_schema67263_67282 = schema.core.Any;
var input_schema67264_67283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"node","node",-2073234571,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker67265_67284 = schema.core.checker.call(null,input_schema67264_67283);
var output_checker67266_67285 = schema.core.checker.call(null,output_schema67263_67282);
/**
 * Inputs: [node owner]
 */
outliner.components.index.outline_body = ((function (ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function outliner$components$index$outline_body(G__67267,G__67268){
var validate__20255__auto__ = ufv___67281.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___67286 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67267,G__67268], null);
var temp__4126__auto___67287 = input_checker67265_67284.call(null,args__20256__auto___67286);
if(cljs.core.truth_(temp__4126__auto___67287)){
var error__20257__auto___67288 = temp__4126__auto___67287;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20257__auto___67288)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___67288,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___67286,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67264_67283,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var node = G__67267;
var owner = G__67268;
while(true){
if(typeof outliner.components.index.t67275 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t67275 = (function (G__67268,output_checker67266,output_schema67263,owner,input_schema67264,G__67267,node,input_checker67265,outline_body,ufv__,validate__20255__auto__,meta67276){
this.G__67268 = G__67268;
this.output_checker67266 = output_checker67266;
this.output_schema67263 = output_schema67263;
this.owner = owner;
this.input_schema67264 = input_schema67264;
this.G__67267 = G__67267;
this.node = node;
this.input_checker67265 = input_checker67265;
this.outline_body = outline_body;
this.ufv__ = ufv__;
this.validate__20255__auto__ = validate__20255__auto__;
this.meta67276 = meta67276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t67275.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t67275.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function (_){
var self__ = this;
var ___$1 = this;
return "outline-body";
});})(validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
;

outliner.components.index.t67275.prototype.om$core$IDidUpdate$ = true;

outliner.components.index.t67275.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__67278 = om.core.get_state.call(null,self__.owner);
var map__67278__$1 = ((cljs.core.seq_QMARK_.call(null,map__67278))?cljs.core.apply.call(null,cljs.core.hash_map,map__67278):map__67278);
var editor_ref = cljs.core.get.call(null,map__67278__$1,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
var selected = cljs.core.get.call(null,map__67278__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__67278__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var mode = cljs.core.get.call(null,map__67278__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var current_node = om.core.path.call(null,self__.node);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),mode)) && (cljs.core._EQ_.call(null,current_node,cljs.core.concat.call(null,base_path,selected))) && ((om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)) == null))){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),(new MediumEditor(om.core.get_node.call(null,self__.owner,"txt"))));

return om.core.get_node.call(null,self__.owner,"txt").focus();
} else {
if(cljs.core.truth_((function (){var and__16579__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
if(cljs.core.truth_(and__16579__auto__)){
return (cljs.core.not_EQ_.call(null,current_node,cljs.core.concat.call(null,base_path,selected))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),mode));
} else {
return and__16579__auto__;
}
})())){
return om.core.transact_BANG_.call(null,self__.node,((function (map__67278,map__67278__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function (d){
var new_txt = (om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).serialize()["element-0"]["value"]);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370)).destroy();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370),null);

return cljs.core.assoc_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_txt);
});})(map__67278,map__67278__$1,editor_ref,selected,base_path,mode,current_node,___$3,validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
);
} else {
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);

}
}
});})(validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
;

outliner.components.index.t67275.prototype.om$core$IRenderState$ = true;

outliner.components.index.t67275.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function (_,p__67279){
var self__ = this;
var map__67280 = p__67279;
var map__67280__$1 = ((cljs.core.seq_QMARK_.call(null,map__67280))?cljs.core.apply.call(null,cljs.core.hash_map,map__67280):map__67280);
var state = map__67280__$1;
var mode = cljs.core.get.call(null,map__67280__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var click_chan = cljs.core.get.call(null,map__67280__$1,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512));
var selected = cljs.core.get.call(null,map__67280__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var base_path = cljs.core.get.call(null,map__67280__$1,new cljs.core.Keyword(null,"base-path","base-path",495760020));
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.li,{"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__67280,map__67280__$1,state,mode,click_chan,selected,base_path,validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function (e){
e.stopPropagation();

e.preventDefault();

return cljs.core.async.put_BANG_.call(null,click_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-path","new-path",1732999939),om.core.path.call(null,self__.node)], null));
});})(___$1,map__67280,map__67280__$1,state,mode,click_chan,selected,base_path,validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
), "className": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,om.core.path.call(null,self__.node),cljs.core.concat.call(null,base_path,selected)))?"selected":""))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node)))?React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(self__.node))}, "ref": "txt", "className": "txt"},null):null),(((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(self__.node))))?om_tools.dom.element.call(null,React.DOM.ol,om.core.build_all.call(null,self__.outline_body,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.node),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"mode","mode",654403691),mode], null)], null)),cljs.core.PersistentVector.EMPTY):null)],null))));
});})(validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
;

outliner.components.index.t67275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function (_67277){
var self__ = this;
var _67277__$1 = this;
return self__.meta67276;
});})(validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
;

outliner.components.index.t67275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function (_67277,meta67276__$1){
var self__ = this;
var _67277__$1 = this;
return (new outliner.components.index.t67275(self__.G__67268,self__.output_checker67266,self__.output_schema67263,self__.owner,self__.input_schema67264,self__.G__67267,self__.node,self__.input_checker67265,self__.outline_body,self__.ufv__,self__.validate__20255__auto__,meta67276__$1));
});})(validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
;

outliner.components.index.t67275.cljs$lang$type = true;

outliner.components.index.t67275.cljs$lang$ctorStr = "outliner.components.index/t67275";

outliner.components.index.t67275.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t67275");
});})(validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
;

outliner.components.index.__GT_t67275 = ((function (validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285){
return (function outliner$components$index$outline_body_$___GT_t67275(G__67268__$1,output_checker67266__$1,output_schema67263__$1,owner__$1,input_schema67264__$1,G__67267__$1,node__$1,input_checker67265__$1,outline_body__$1,ufv____$1,validate__20255__auto____$1,meta67276){
return (new outliner.components.index.t67275(G__67268__$1,output_checker67266__$1,output_schema67263__$1,owner__$1,input_schema67264__$1,G__67267__$1,node__$1,input_checker67265__$1,outline_body__$1,ufv____$1,validate__20255__auto____$1,meta67276));
});})(validate__20255__auto__,ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
;

}

return (new outliner.components.index.t67275(G__67268,output_checker67266_67285,output_schema67263_67282,owner,input_schema67264_67283,G__67267,node,input_checker67265_67284,outliner$components$index$outline_body,ufv___67281,validate__20255__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___67289 = output_checker67266_67285.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___67289)){
var error__20257__auto___67290 = temp__4126__auto___67289;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"outline-body","outline-body",313408444,null),cljs.core.pr_str.call(null,error__20257__auto___67290)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___67290,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67263_67282,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___67281,output_schema67263_67282,input_schema67264_67283,input_checker67265_67284,output_checker67266_67285))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.outline_body),schema.core.make_fn_schema.call(null,output_schema67263_67282,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67264_67283], null)));

outliner.components.index.__GT_outline_body = (function() {
var outliner$components$index$__GT_outline_body = null;
var outliner$components$index$__GT_outline_body__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22988__auto__);
});
var outliner$components$index$__GT_outline_body__2 = (function (cursor__22988__auto__,m67262){
return om.core.build.call(null,outliner.components.index.outline_body,cursor__22988__auto__,m67262);
});
outliner$components$index$__GT_outline_body = function(cursor__22988__auto__,m67262){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_outline_body__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_outline_body__2.call(this,cursor__22988__auto__,m67262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_outline_body__1;
outliner$components$index$__GT_outline_body.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_outline_body__2;
return outliner$components$index$__GT_outline_body;
})()
;

var ufv___68084 = schema.utils.use_fn_validation;
var output_schema67292_68085 = schema.core.Any;
var input_schema67293_68086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker67294_68087 = schema.core.checker.call(null,input_schema67293_68086);
var output_checker67295_68088 = schema.core.checker.call(null,output_schema67292_68085);
/**
 * Inputs: [data owner]
 */
outliner.components.index.component = ((function (ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function outliner$components$index$component(G__67296,G__67297){
var validate__20255__auto__ = ufv___68084.get_cell();
if(cljs.core.truth_(validate__20255__auto__)){
var args__20256__auto___68089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67296,G__67297], null);
var temp__4126__auto___68090 = input_checker67294_68087.call(null,args__20256__auto___68089);
if(cljs.core.truth_(temp__4126__auto___68090)){
var error__20257__auto___68091 = temp__4126__auto___68090;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20257__auto___68091)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___68091,new cljs.core.Keyword(null,"value","value",305978217),args__20256__auto___68089,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67293_68086,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__20258__auto__ = (function (){var data = G__67296;
var owner = G__67297;
while(true){
if(typeof outliner.components.index.t67691 !== 'undefined'){
} else {

/**
* @constructor
*/
outliner.components.index.t67691 = (function (owner,data,input_checker67294,component,input_schema67293,output_schema67292,output_checker67295,G__67297,ufv__,G__67296,validate__20255__auto__,meta67692){
this.owner = owner;
this.data = data;
this.input_checker67294 = input_checker67294;
this.component = component;
this.input_schema67293 = input_schema67293;
this.output_schema67292 = output_schema67292;
this.output_checker67295 = output_checker67295;
this.G__67297 = G__67297;
this.ufv__ = ufv__;
this.G__67296 = G__67296;
this.validate__20255__auto__ = validate__20255__auto__;
this.meta67692 = meta67692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
outliner.components.index.t67691.prototype.om$core$IDisplayName$ = true;

outliner.components.index.t67691.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (_){
var self__ = this;
var ___$1 = this;
return "component";
});})(validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;

outliner.components.index.t67691.prototype.om$core$IRenderState$ = true;

outliner.components.index.t67691.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "yeah"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h2,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,outliner.components.index.outline_head,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.apply.call(null,React.DOM.ol,{"className": "root"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,outliner.components.index.outline_body,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))],null))))],null))));
});})(validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;

outliner.components.index.t67691.prototype.om$core$IInitState$ = true;

outliner.components.index.t67691.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (_){
var self__ = this;
var ___$1 = this;
var key_down_chan = outliner.components.index.listen.call(null,window,"keydown");
var click_chan = cljs.core.async.chan.call(null);
var base_path = om.core.path.call(null,self__.data);
var c__22905__auto___68092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (){
var f__22906__auto__ = (function (){var switch__22884__auto__ = ((function (c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (state_67918){
var state_val_67919 = (state_67918[(1)]);
if((state_val_67919 === (65))){
var inst_67832 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_67920_68093 = state_67918__$1;
(statearr_67920_68093[(2)] = inst_67832);

(statearr_67920_68093[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (70))){
var inst_67744 = (state_67918[(7)]);
var state_67918__$1 = state_67918;
var statearr_67921_68094 = state_67918__$1;
(statearr_67921_68094[(2)] = inst_67744);

(statearr_67921_68094[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (62))){
var inst_67791 = (state_67918[(8)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67791)){
var statearr_67922_68095 = state_67918__$1;
(statearr_67922_68095[(1)] = (63));

} else {
var statearr_67923_68096 = state_67918__$1;
(statearr_67923_68096[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (74))){
var inst_67742 = (state_67918[(9)]);
var inst_67706 = (state_67918[(10)]);
var inst_67756 = (state_67918[(11)]);
var inst_67744 = (state_67918[(7)]);
var inst_67791 = (state_67918[(8)]);
var inst_67710 = (state_67918[(12)]);
var inst_67762 = (state_67918[(13)]);
var inst_67704 = (state_67918[(14)]);
var inst_67767 = (state_67918[(15)]);
var inst_67711 = (state_67918[(16)]);
var inst_67748 = (state_67918[(17)]);
var inst_67705 = (state_67918[(18)]);
var inst_67746 = (state_67918[(19)]);
var inst_67783 = (state_67918[(20)]);
var inst_67745 = (state_67918[(21)]);
var inst_67716 = (state_67918[(22)]);
var inst_67850 = (function (){var vec__67699 = inst_67704;
var up_path = inst_67783;
var current_child_idx = inst_67745;
var is_root = inst_67746;
var parent_children = inst_67767;
var ch67697 = inst_67706;
var parent = inst_67762;
var vec__67709 = inst_67704;
var val__22914__auto__ = inst_67705;
var ret67698 = inst_67704;
var down_path = inst_67791;
var command = inst_67742;
var G__67696 = click_chan;
var e = inst_67710;
var parent_path = inst_67756;
var G__67695 = key_down_chan;
var current_path = inst_67744;
var c = inst_67711;
var current = inst_67748;
var keyevent__GT_command = inst_67716;
return ((function (vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (d){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(current))){
return cljs.core.update_in.call(null,d,current_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359));
} else {
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"closed","closed",-919675359)),true);
}
});
;})(vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
})();
var inst_67851 = om.core.transact_BANG_.call(null,self__.data,inst_67850);
var state_67918__$1 = state_67918;
var statearr_67924_68097 = state_67918__$1;
(statearr_67924_68097[(2)] = inst_67851);

(statearr_67924_68097[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (7))){
var inst_67913 = (state_67918[(2)]);
var state_67918__$1 = (function (){var statearr_67925 = state_67918;
(statearr_67925[(23)] = inst_67913);

return statearr_67925;
})();
var statearr_67926_68098 = state_67918__$1;
(statearr_67926_68098[(2)] = null);

(statearr_67926_68098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (59))){
var inst_67742 = (state_67918[(9)]);
var inst_67706 = (state_67918[(10)]);
var inst_67756 = (state_67918[(11)]);
var inst_67744 = (state_67918[(7)]);
var inst_67791 = (state_67918[(8)]);
var inst_67710 = (state_67918[(12)]);
var inst_67762 = (state_67918[(13)]);
var inst_67704 = (state_67918[(14)]);
var inst_67767 = (state_67918[(15)]);
var inst_67711 = (state_67918[(16)]);
var inst_67748 = (state_67918[(17)]);
var inst_67705 = (state_67918[(18)]);
var inst_67746 = (state_67918[(19)]);
var inst_67783 = (state_67918[(20)]);
var inst_67745 = (state_67918[(21)]);
var inst_67716 = (state_67918[(22)]);
var inst_67815 = cljs.core.deref.call(null,self__.data);
var inst_67816 = cljs.core.get_in.call(null,inst_67815,inst_67783);
var inst_67817 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_67783);
var inst_67818 = (function (){var vec__67699 = inst_67704;
var up_path = inst_67783;
var current_child_idx = inst_67745;
var is_root = inst_67746;
var parent_children = inst_67767;
var ch67697 = inst_67706;
var parent = inst_67762;
var vec__67709 = inst_67704;
var val__22914__auto__ = inst_67705;
var ret67698 = inst_67704;
var down_path = inst_67791;
var command = inst_67742;
var swap_node = inst_67816;
var G__67696 = click_chan;
var e = inst_67710;
var parent_path = inst_67756;
var G__67695 = key_down_chan;
var current_path = inst_67744;
var c = inst_67711;
var current = inst_67748;
var keyevent__GT_command = inst_67716;
return ((function (vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,swap_node,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,inst_67815,inst_67816,inst_67817,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),up_path,current);
});
;})(vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,swap_node,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,inst_67815,inst_67816,inst_67817,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
})();
var inst_67819 = om.core.transact_BANG_.call(null,self__.data,inst_67818);
var state_67918__$1 = (function (){var statearr_67927 = state_67918;
(statearr_67927[(24)] = inst_67817);

return statearr_67927;
})();
var statearr_67928_68099 = state_67918__$1;
(statearr_67928_68099[(2)] = inst_67819);

(statearr_67928_68099[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (86))){
var state_67918__$1 = state_67918;
var statearr_67929_68100 = state_67918__$1;
(statearr_67929_68100[(2)] = null);

(statearr_67929_68100[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (20))){
var state_67918__$1 = state_67918;
var statearr_67930_68101 = state_67918__$1;
(statearr_67930_68101[(2)] = new cljs.core.Keyword(null,"meta","meta",1499536964));

(statearr_67930_68101[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (72))){
var inst_67742 = (state_67918[(9)]);
var inst_67706 = (state_67918[(10)]);
var inst_67756 = (state_67918[(11)]);
var inst_67744 = (state_67918[(7)]);
var inst_67791 = (state_67918[(8)]);
var inst_67710 = (state_67918[(12)]);
var inst_67762 = (state_67918[(13)]);
var inst_67704 = (state_67918[(14)]);
var inst_67767 = (state_67918[(15)]);
var inst_67711 = (state_67918[(16)]);
var inst_67748 = (state_67918[(17)]);
var inst_67705 = (state_67918[(18)]);
var inst_67746 = (state_67918[(19)]);
var inst_67783 = (state_67918[(20)]);
var inst_67745 = (state_67918[(21)]);
var inst_67716 = (state_67918[(22)]);
var inst_67840 = (state_67918[(2)]);
var inst_67841 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_67840);
var inst_67842 = (function (){var vec__67699 = inst_67704;
var up_path = inst_67783;
var current_child_idx = inst_67745;
var is_root = inst_67746;
var parent_children = inst_67767;
var ch67697 = inst_67706;
var parent = inst_67762;
var vec__67709 = inst_67704;
var val__22914__auto__ = inst_67705;
var ret67698 = inst_67704;
var down_path = inst_67791;
var command = inst_67742;
var G__67696 = click_chan;
var e = inst_67710;
var parent_path = inst_67756;
var G__67695 = key_down_chan;
var current_path = inst_67744;
var c = inst_67711;
var current = inst_67748;
var keyevent__GT_command = inst_67716;
return ((function (vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,inst_67840,inst_67841,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
return cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,inst_67840,inst_67841,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
})();
var inst_67843 = om.core.transact_BANG_.call(null,self__.data,inst_67842);
var state_67918__$1 = (function (){var statearr_67931 = state_67918;
(statearr_67931[(25)] = inst_67841);

return statearr_67931;
})();
var statearr_67932_68102 = state_67918__$1;
(statearr_67932_68102[(2)] = inst_67843);

(statearr_67932_68102[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (58))){
var inst_67783 = (state_67918[(20)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67783)){
var statearr_67933_68103 = state_67918__$1;
(statearr_67933_68103[(1)] = (59));

} else {
var statearr_67934_68104 = state_67918__$1;
(statearr_67934_68104[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (60))){
var state_67918__$1 = state_67918;
var statearr_67935_68105 = state_67918__$1;
(statearr_67935_68105[(2)] = null);

(statearr_67935_68105[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (27))){
var inst_67756 = (state_67918[(11)]);
var state_67918__$1 = state_67918;
var statearr_67936_68106 = state_67918__$1;
(statearr_67936_68106[(2)] = inst_67756);

(statearr_67936_68106[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (1))){
var state_67918__$1 = state_67918;
var statearr_67937_68107 = state_67918__$1;
(statearr_67937_68107[(2)] = null);

(statearr_67937_68107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (69))){
var inst_67846 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_67938_68108 = state_67918__$1;
(statearr_67938_68108[(2)] = inst_67846);

(statearr_67938_68108[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (101))){
var inst_67909 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_67939_68109 = state_67918__$1;
(statearr_67939_68109[(2)] = inst_67909);

(statearr_67939_68109[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (24))){
var inst_67749 = (state_67918[(26)]);
var state_67918__$1 = state_67918;
var statearr_67940_68110 = state_67918__$1;
(statearr_67940_68110[(2)] = inst_67749);

(statearr_67940_68110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (55))){
var inst_67756 = (state_67918[(11)]);
var inst_67783 = (state_67918[(20)]);
var inst_67745 = (state_67918[(21)]);
var inst_67806 = outliner.components.index.gen_left_path.call(null,inst_67745,inst_67756,inst_67783,self__.data);
var state_67918__$1 = state_67918;
var statearr_67941_68111 = state_67918__$1;
(statearr_67941_68111[(2)] = inst_67806);

(statearr_67941_68111[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (85))){
var inst_67742 = (state_67918[(9)]);
var inst_67706 = (state_67918[(10)]);
var inst_67756 = (state_67918[(11)]);
var inst_67744 = (state_67918[(7)]);
var inst_67791 = (state_67918[(8)]);
var inst_67710 = (state_67918[(12)]);
var inst_67762 = (state_67918[(13)]);
var inst_67704 = (state_67918[(14)]);
var inst_67767 = (state_67918[(15)]);
var inst_67711 = (state_67918[(16)]);
var inst_67748 = (state_67918[(17)]);
var inst_67705 = (state_67918[(18)]);
var inst_67746 = (state_67918[(19)]);
var inst_67783 = (state_67918[(20)]);
var inst_67745 = (state_67918[(21)]);
var inst_67716 = (state_67918[(22)]);
var inst_67870 = (function (){var vec__67699 = inst_67704;
var up_path = inst_67783;
var current_child_idx = inst_67745;
var is_root = inst_67746;
var parent_children = inst_67767;
var ch67697 = inst_67706;
var parent = inst_67762;
var vec__67709 = inst_67704;
var val__22914__auto__ = inst_67705;
var ret67698 = inst_67704;
var down_path = inst_67791;
var command = inst_67742;
var G__67696 = click_chan;
var e = inst_67710;
var parent_path = inst_67756;
var G__67695 = key_down_chan;
var current_path = inst_67744;
var c = inst_67711;
var current = inst_67748;
var keyevent__GT_command = inst_67716;
return ((function (vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = outliner.components.index.get_indexless.call(null,parent_path);
var destination_index = (cljs.core.last.call(null,parent_path) + (1));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,destination_children,(0),destination_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current], null),cljs.core.subvec.call(null,destination_children,destination_index)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,destination_index));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,destination_path,new_destination_children),cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children);
});
;})(vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
})();
var inst_67871 = om.core.transact_BANG_.call(null,self__.data,inst_67870);
var state_67918__$1 = state_67918;
var statearr_67942_68112 = state_67918__$1;
(statearr_67942_68112[(2)] = inst_67871);

(statearr_67942_68112[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (39))){
var state_67918__$1 = state_67918;
var statearr_67943_68113 = state_67918__$1;
(statearr_67943_68113[(2)] = null);

(statearr_67943_68113[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (88))){
var inst_67746 = (state_67918[(19)]);
var inst_67876 = cljs.core.not.call(null,inst_67746);
var state_67918__$1 = state_67918;
if(inst_67876){
var statearr_67944_68114 = state_67918__$1;
(statearr_67944_68114[(1)] = (89));

} else {
var statearr_67945_68115 = state_67918__$1;
(statearr_67945_68115[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (46))){
var inst_67783 = (state_67918[(20)]);
var inst_67793 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_67783);
var state_67918__$1 = state_67918;
var statearr_67946_68116 = state_67918__$1;
(statearr_67946_68116[(2)] = inst_67793);

(statearr_67946_68116[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (4))){
var inst_67706 = (state_67918[(10)]);
var inst_67704 = (state_67918[(14)]);
var inst_67704__$1 = (state_67918[(2)]);
var inst_67705 = cljs.core.nth.call(null,inst_67704__$1,(0),null);
var inst_67706__$1 = cljs.core.nth.call(null,inst_67704__$1,(1),null);
var inst_67707 = cljs.core._EQ_.call(null,inst_67706__$1,key_down_chan);
var state_67918__$1 = (function (){var statearr_67947 = state_67918;
(statearr_67947[(10)] = inst_67706__$1);

(statearr_67947[(14)] = inst_67704__$1);

(statearr_67947[(18)] = inst_67705);

return statearr_67947;
})();
if(inst_67707){
var statearr_67948_68117 = state_67918__$1;
(statearr_67948_68117[(1)] = (5));

} else {
var statearr_67949_68118 = state_67918__$1;
(statearr_67949_68118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (77))){
var inst_67783 = (state_67918[(20)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67783)){
var statearr_67950_68119 = state_67918__$1;
(statearr_67950_68119[(1)] = (78));

} else {
var statearr_67951_68120 = state_67918__$1;
(statearr_67951_68120[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (95))){
var state_67918__$1 = state_67918;
var statearr_67952_68121 = state_67918__$1;
(statearr_67952_68121[(2)] = null);

(statearr_67952_68121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (54))){
var inst_67744 = (state_67918[(7)]);
var state_67918__$1 = state_67918;
var statearr_67953_68122 = state_67918__$1;
(statearr_67953_68122[(2)] = inst_67744);

(statearr_67953_68122[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (92))){
var inst_67881 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var state_67918__$1 = state_67918;
var statearr_67954_68123 = state_67918__$1;
(statearr_67954_68123[(2)] = inst_67881);

(statearr_67954_68123[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (15))){
var inst_67724 = (state_67918[(27)]);
var state_67918__$1 = state_67918;
var statearr_67955_68124 = state_67918__$1;
(statearr_67955_68124[(2)] = inst_67724);

(statearr_67955_68124[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (48))){
var inst_67796 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_67956_68125 = state_67918__$1;
(statearr_67956_68125[(2)] = inst_67796);

(statearr_67956_68125[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (50))){
var inst_67791 = (state_67918[(8)]);
var inst_67799 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_67791);
var state_67918__$1 = state_67918;
var statearr_67957_68126 = state_67918__$1;
(statearr_67957_68126[(2)] = inst_67799);

(statearr_67957_68126[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (75))){
var state_67918__$1 = state_67918;
var statearr_67958_68127 = state_67918__$1;
(statearr_67958_68127[(2)] = null);

(statearr_67958_68127[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (99))){
var inst_67705 = (state_67918[(18)]);
var state_67918__$1 = state_67918;
var statearr_67959_68128 = state_67918__$1;
(statearr_67959_68128[(2)] = inst_67705);

(statearr_67959_68128[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (21))){
var inst_67734 = (state_67918[(28)]);
var state_67918__$1 = state_67918;
var statearr_67960_68129 = state_67918__$1;
(statearr_67960_68129[(2)] = inst_67734);

(statearr_67960_68129[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (31))){
var inst_67746 = (state_67918[(19)]);
var inst_67767 = (state_67918[(2)]);
var state_67918__$1 = (function (){var statearr_67961 = state_67918;
(statearr_67961[(15)] = inst_67767);

return statearr_67961;
})();
if(cljs.core.truth_(inst_67746)){
var statearr_67962_68130 = state_67918__$1;
(statearr_67962_68130[(1)] = (32));

} else {
var statearr_67963_68131 = state_67918__$1;
(statearr_67963_68131[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (32))){
var state_67918__$1 = state_67918;
var statearr_67964_68132 = state_67918__$1;
(statearr_67964_68132[(2)] = false);

(statearr_67964_68132[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (40))){
var inst_67779 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_67965_68133 = state_67918__$1;
(statearr_67965_68133[(2)] = inst_67779);

(statearr_67965_68133[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (91))){
var inst_67888 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_67966_68134 = state_67918__$1;
(statearr_67966_68134[(2)] = inst_67888);

(statearr_67966_68134[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (56))){
var inst_67808 = (state_67918[(2)]);
var inst_67809 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_67808);
var state_67918__$1 = state_67918;
var statearr_67967_68135 = state_67918__$1;
(statearr_67967_68135[(2)] = inst_67809);

(statearr_67967_68135[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (33))){
var inst_67767 = (state_67918[(15)]);
var inst_67745 = (state_67918[(21)]);
var inst_67770 = (inst_67745 - (1));
var inst_67771 = cljs.core.get.call(null,inst_67767,inst_67770,false);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67771)){
var statearr_67968_68136 = state_67918__$1;
(statearr_67968_68136[(1)] = (35));

} else {
var statearr_67969_68137 = state_67918__$1;
(statearr_67969_68137[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (13))){
var inst_67710 = (state_67918[(12)]);
var inst_67724 = (state_67918[(27)]);
var inst_67723 = (state_67918[(2)]);
var inst_67724__$1 = inst_67710.altKey;
var state_67918__$1 = (function (){var statearr_67970 = state_67918;
(statearr_67970[(29)] = inst_67723);

(statearr_67970[(27)] = inst_67724__$1);

return statearr_67970;
})();
if(cljs.core.truth_(inst_67724__$1)){
var statearr_67971_68138 = state_67918__$1;
(statearr_67971_68138[(1)] = (14));

} else {
var statearr_67972_68139 = state_67918__$1;
(statearr_67972_68139[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (22))){
var inst_67744 = (state_67918[(7)]);
var inst_67718 = (state_67918[(30)]);
var inst_67749 = (state_67918[(26)]);
var inst_67723 = (state_67918[(29)]);
var inst_67733 = (state_67918[(31)]);
var inst_67746 = (state_67918[(19)]);
var inst_67717 = (state_67918[(32)]);
var inst_67716 = (state_67918[(22)]);
var inst_67728 = (state_67918[(33)]);
var inst_67738 = (state_67918[(2)]);
var inst_67739 = [inst_67718,inst_67723,inst_67728,inst_67733,inst_67738];
var inst_67740 = (new cljs.core.PersistentVector(null,5,(5),inst_67717,inst_67739,null));
var inst_67741 = cljs.core.filter.call(null,cljs.core.identity,inst_67740);
var inst_67742 = inst_67716.call(null,inst_67741);
var inst_67743 = om.core.get_state.call(null,self__.owner);
var inst_67744__$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(inst_67743);
var inst_67745 = cljs.core.last.call(null,inst_67744__$1);
var inst_67746__$1 = cljs.core._EQ_.call(null,outliner.components.index.root_node,inst_67744__$1);
var inst_67747 = cljs.core.deref.call(null,self__.data);
var inst_67748 = cljs.core.get_in.call(null,inst_67747,inst_67744__$1);
var inst_67749__$1 = !(inst_67746__$1);
var state_67918__$1 = (function (){var statearr_67973 = state_67918;
(statearr_67973[(9)] = inst_67742);

(statearr_67973[(7)] = inst_67744__$1);

(statearr_67973[(26)] = inst_67749__$1);

(statearr_67973[(17)] = inst_67748);

(statearr_67973[(19)] = inst_67746__$1);

(statearr_67973[(21)] = inst_67745);

return statearr_67973;
})();
if(inst_67749__$1){
var statearr_67974_68140 = state_67918__$1;
(statearr_67974_68140[(1)] = (23));

} else {
var statearr_67975_68141 = state_67918__$1;
(statearr_67975_68141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (90))){
var state_67918__$1 = state_67918;
var statearr_67976_68142 = state_67918__$1;
(statearr_67976_68142[(2)] = null);

(statearr_67976_68142[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (36))){
var state_67918__$1 = state_67918;
var statearr_67977_68143 = state_67918__$1;
(statearr_67977_68143[(1)] = (38));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (41))){
var inst_67756 = (state_67918[(11)]);
var inst_67745 = (state_67918[(21)]);
var inst_67787 = (inst_67745 + (1));
var inst_67788 = cljs.core.conj.call(null,inst_67756,new cljs.core.Keyword(null,"children","children",-940561982),inst_67787);
var state_67918__$1 = state_67918;
var statearr_67979_68144 = state_67918__$1;
(statearr_67979_68144[(2)] = inst_67788);

(statearr_67979_68144[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (89))){
var inst_67878 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var inst_67879 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),inst_67878);
var state_67918__$1 = state_67918;
if(inst_67879){
var statearr_67980_68145 = state_67918__$1;
(statearr_67980_68145[(1)] = (92));

} else {
var statearr_67981_68146 = state_67918__$1;
(statearr_67981_68146[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (100))){
var state_67918__$1 = state_67918;
var statearr_67982_68147 = state_67918__$1;
(statearr_67982_68147[(2)] = null);

(statearr_67982_68147[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (43))){
var inst_67742 = (state_67918[(9)]);
var inst_67791 = (state_67918[(2)]);
var state_67918__$1 = (function (){var statearr_67983 = state_67918;
(statearr_67983[(8)] = inst_67791);

return statearr_67983;
})();
var G__67984_68148 = (((inst_67742 instanceof cljs.core.Keyword))?inst_67742.fqn:null);
switch (G__67984_68148) {
case "left-shift-node":
var statearr_67985_68150 = state_67918__$1;
(statearr_67985_68150[(1)] = (81));


break;
case "node-down":
var statearr_67986_68151 = state_67918__$1;
(statearr_67986_68151[(1)] = (62));


break;
case "toggle-edit":
var statearr_67987_68152 = state_67918__$1;
(statearr_67987_68152[(1)] = (88));


break;
case "cursor-right":
var statearr_67988_68153 = state_67918__$1;
(statearr_67988_68153[(1)] = (57));


break;
case "right-shift-node":
var statearr_67989_68154 = state_67918__$1;
(statearr_67989_68154[(1)] = (77));


break;
case "toggle-closed":
var statearr_67990_68155 = state_67918__$1;
(statearr_67990_68155[(1)] = (73));


break;
case "node-up":
var statearr_67991_68156 = state_67918__$1;
(statearr_67991_68156[(1)] = (58));


break;
case "cursor-left":
var statearr_67992_68157 = state_67918__$1;
(statearr_67992_68157[(1)] = (53));


break;
case "cursor-up":
var statearr_67993_68158 = state_67918__$1;
(statearr_67993_68158[(1)] = (45));


break;
case "cursor-down":
var statearr_67994_68159 = state_67918__$1;
(statearr_67994_68159[(1)] = (49));


break;
case "destroy-node":
var statearr_67995_68160 = state_67918__$1;
(statearr_67995_68160[(1)] = (66));


break;
default:
var statearr_67996_68161 = state_67918__$1;
(statearr_67996_68161[(1)] = (95));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (61))){
var inst_67822 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_67997_68162 = state_67918__$1;
(statearr_67997_68162[(2)] = inst_67822);

(statearr_67997_68162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (29))){
var inst_67762 = (state_67918[(13)]);
var inst_67764 = cljs.core.get.call(null,inst_67762,new cljs.core.Keyword(null,"children","children",-940561982),false);
var state_67918__$1 = state_67918;
var statearr_67998_68163 = state_67918__$1;
(statearr_67998_68163[(2)] = inst_67764);

(statearr_67998_68163[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (44))){
var inst_67893 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_67999_68164 = state_67918__$1;
(statearr_67999_68164[(2)] = inst_67893);

(statearr_67999_68164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (93))){
var inst_67883 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
var state_67918__$1 = state_67918;
var statearr_68000_68165 = state_67918__$1;
(statearr_68000_68165[(2)] = inst_67883);

(statearr_68000_68165[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (6))){
var inst_67706 = (state_67918[(10)]);
var inst_67895 = cljs.core._EQ_.call(null,inst_67706,click_chan);
var state_67918__$1 = state_67918;
if(inst_67895){
var statearr_68001_68166 = state_67918__$1;
(statearr_68001_68166[(1)] = (96));

} else {
var statearr_68002_68167 = state_67918__$1;
(statearr_68002_68167[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (28))){
var inst_67762 = (state_67918[(13)]);
var inst_67762__$1 = (state_67918[(2)]);
var state_67918__$1 = (function (){var statearr_68003 = state_67918;
(statearr_68003[(13)] = inst_67762__$1);

return statearr_68003;
})();
if(cljs.core.truth_(inst_67762__$1)){
var statearr_68004_68168 = state_67918__$1;
(statearr_68004_68168[(1)] = (29));

} else {
var statearr_68005_68169 = state_67918__$1;
(statearr_68005_68169[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (64))){
var state_67918__$1 = state_67918;
var statearr_68006_68170 = state_67918__$1;
(statearr_68006_68170[(2)] = null);

(statearr_68006_68170[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (51))){
var state_67918__$1 = state_67918;
var statearr_68007_68171 = state_67918__$1;
(statearr_68007_68171[(2)] = null);

(statearr_68007_68171[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (25))){
var inst_67756 = (state_67918[(11)]);
var inst_67756__$1 = (state_67918[(2)]);
var state_67918__$1 = (function (){var statearr_68008 = state_67918;
(statearr_68008[(11)] = inst_67756__$1);

return statearr_68008;
})();
if(cljs.core.truth_(inst_67756__$1)){
var statearr_68009_68172 = state_67918__$1;
(statearr_68009_68172[(1)] = (26));

} else {
var statearr_68010_68173 = state_67918__$1;
(statearr_68010_68173[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (34))){
var inst_67767 = (state_67918[(15)]);
var inst_67745 = (state_67918[(21)]);
var inst_67783 = (state_67918[(2)]);
var inst_67784 = (inst_67745 + (1));
var inst_67785 = cljs.core.get.call(null,inst_67767,inst_67784,false);
var state_67918__$1 = (function (){var statearr_68011 = state_67918;
(statearr_68011[(20)] = inst_67783);

return statearr_68011;
})();
if(cljs.core.truth_(inst_67785)){
var statearr_68012_68174 = state_67918__$1;
(statearr_68012_68174[(1)] = (41));

} else {
var statearr_68013_68175 = state_67918__$1;
(statearr_68013_68175[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (17))){
var state_67918__$1 = state_67918;
var statearr_68014_68176 = state_67918__$1;
(statearr_68014_68176[(2)] = new cljs.core.Keyword(null,"ctrl","ctrl",361402094));

(statearr_68014_68176[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (3))){
var inst_67916 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67918__$1,inst_67916);
} else {
if((state_val_67919 === (12))){
var inst_67719 = (state_67918[(34)]);
var state_67918__$1 = state_67918;
var statearr_68015_68177 = state_67918__$1;
(statearr_68015_68177[(2)] = inst_67719);

(statearr_68015_68177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (2))){
var inst_67700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67701 = [key_down_chan,click_chan];
var inst_67702 = (new cljs.core.PersistentVector(null,2,(5),inst_67700,inst_67701,null));
var state_67918__$1 = state_67918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_67918__$1,(4),inst_67702);
} else {
if((state_val_67919 === (66))){
var inst_67746 = (state_67918[(19)]);
var inst_67834 = cljs.core.not.call(null,inst_67746);
var state_67918__$1 = state_67918;
if(inst_67834){
var statearr_68016_68178 = state_67918__$1;
(statearr_68016_68178[(1)] = (67));

} else {
var statearr_68017_68179 = state_67918__$1;
(statearr_68017_68179[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (23))){
var inst_67744 = (state_67918[(7)]);
var inst_67751 = cljs.core.count.call(null,inst_67744);
var inst_67752 = (inst_67751 - (2));
var inst_67753 = cljs.core.subvec.call(null,inst_67744,(0),inst_67752);
var state_67918__$1 = state_67918;
var statearr_68018_68180 = state_67918__$1;
(statearr_68018_68180[(2)] = inst_67753);

(statearr_68018_68180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (47))){
var state_67918__$1 = state_67918;
var statearr_68019_68181 = state_67918__$1;
(statearr_68019_68181[(2)] = null);

(statearr_68019_68181[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (35))){
var inst_67756 = (state_67918[(11)]);
var inst_67745 = (state_67918[(21)]);
var inst_67773 = (inst_67745 - (1));
var inst_67774 = cljs.core.conj.call(null,inst_67756,new cljs.core.Keyword(null,"children","children",-940561982),inst_67773);
var state_67918__$1 = state_67918;
var statearr_68020_68182 = state_67918__$1;
(statearr_68020_68182[(2)] = inst_67774);

(statearr_68020_68182[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (82))){
var inst_67756 = (state_67918[(11)]);
var inst_67864 = cljs.core._EQ_.call(null,inst_67756,outliner.components.index.root_node);
var inst_67865 = !(inst_67864);
var state_67918__$1 = state_67918;
var statearr_68021_68183 = state_67918__$1;
(statearr_68021_68183[(2)] = inst_67865);

(statearr_68021_68183[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (76))){
var inst_67854 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_68022_68184 = state_67918__$1;
(statearr_68022_68184[(2)] = inst_67854);

(statearr_68022_68184[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (97))){
var inst_67706 = (state_67918[(10)]);
var inst_67905 = cljs.core._EQ_.call(null,inst_67706,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_67918__$1 = state_67918;
if(inst_67905){
var statearr_68023_68185 = state_67918__$1;
(statearr_68023_68185[(1)] = (99));

} else {
var statearr_68024_68186 = state_67918__$1;
(statearr_68024_68186[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (19))){
var inst_67710 = (state_67918[(12)]);
var inst_67734 = (state_67918[(28)]);
var inst_67733 = (state_67918[(2)]);
var inst_67734__$1 = inst_67710.metaKey;
var state_67918__$1 = (function (){var statearr_68025 = state_67918;
(statearr_68025[(31)] = inst_67733);

(statearr_68025[(28)] = inst_67734__$1);

return statearr_68025;
})();
if(cljs.core.truth_(inst_67734__$1)){
var statearr_68026_68187 = state_67918__$1;
(statearr_68026_68187[(1)] = (20));

} else {
var statearr_68027_68188 = state_67918__$1;
(statearr_68027_68188[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (57))){
var inst_67756 = (state_67918[(11)]);
var inst_67744 = (state_67918[(7)]);
var inst_67791 = (state_67918[(8)]);
var inst_67767 = (state_67918[(15)]);
var inst_67748 = (state_67918[(17)]);
var inst_67745 = (state_67918[(21)]);
var inst_67811 = outliner.components.index.gen_right_path.call(null,inst_67744,inst_67748,inst_67745,inst_67756,inst_67767,inst_67791,self__.data);
var inst_67812 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_67811);
var state_67918__$1 = state_67918;
var statearr_68028_68189 = state_67918__$1;
(statearr_68028_68189[(2)] = inst_67812);

(statearr_68028_68189[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (68))){
var state_67918__$1 = state_67918;
var statearr_68029_68190 = state_67918__$1;
(statearr_68029_68190[(2)] = null);

(statearr_68029_68190[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (11))){
var state_67918__$1 = state_67918;
var statearr_68030_68191 = state_67918__$1;
(statearr_68030_68191[(2)] = new cljs.core.Keyword(null,"shift","shift",997140064));

(statearr_68030_68191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (9))){
var state_67918__$1 = state_67918;
var statearr_68031_68192 = state_67918__$1;
(statearr_68031_68192[(2)] = outliner.components.index.edit_keymap);

(statearr_68031_68192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (5))){
var inst_67704 = (state_67918[(14)]);
var inst_67710 = cljs.core.nth.call(null,inst_67704,(0),null);
var inst_67711 = cljs.core.nth.call(null,inst_67704,(1),null);
var inst_67714 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_67918__$1 = (function (){var statearr_68032 = state_67918;
(statearr_68032[(12)] = inst_67710);

(statearr_68032[(16)] = inst_67711);

return statearr_68032;
})();
var G__68033_68193 = (((inst_67714 instanceof cljs.core.Keyword))?inst_67714.fqn:null);
switch (G__68033_68193) {
case "editing":
var statearr_68034_68195 = state_67918__$1;
(statearr_68034_68195[(1)] = (9));


break;
default:
var statearr_68035_68196 = state_67918__$1;
(statearr_68035_68196[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (83))){
var inst_67756 = (state_67918[(11)]);
var state_67918__$1 = state_67918;
var statearr_68036_68197 = state_67918__$1;
(statearr_68036_68197[(2)] = inst_67756);

(statearr_68036_68197[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (14))){
var state_67918__$1 = state_67918;
var statearr_68037_68198 = state_67918__$1;
(statearr_68037_68198[(2)] = new cljs.core.Keyword(null,"alt","alt",-3214426));

(statearr_68037_68198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (45))){
var inst_67783 = (state_67918[(20)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67783)){
var statearr_68038_68199 = state_67918__$1;
(statearr_68038_68199[(1)] = (46));

} else {
var statearr_68039_68200 = state_67918__$1;
(statearr_68039_68200[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (53))){
var inst_67746 = (state_67918[(19)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67746)){
var statearr_68040_68201 = state_67918__$1;
(statearr_68040_68201[(1)] = (54));

} else {
var statearr_68041_68202 = state_67918__$1;
(statearr_68041_68202[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (78))){
var inst_67742 = (state_67918[(9)]);
var inst_67706 = (state_67918[(10)]);
var inst_67756 = (state_67918[(11)]);
var inst_67744 = (state_67918[(7)]);
var inst_67791 = (state_67918[(8)]);
var inst_67710 = (state_67918[(12)]);
var inst_67762 = (state_67918[(13)]);
var inst_67704 = (state_67918[(14)]);
var inst_67767 = (state_67918[(15)]);
var inst_67711 = (state_67918[(16)]);
var inst_67748 = (state_67918[(17)]);
var inst_67705 = (state_67918[(18)]);
var inst_67746 = (state_67918[(19)]);
var inst_67783 = (state_67918[(20)]);
var inst_67745 = (state_67918[(21)]);
var inst_67716 = (state_67918[(22)]);
var inst_67857 = (function (){var vec__67699 = inst_67704;
var up_path = inst_67783;
var current_child_idx = inst_67745;
var is_root = inst_67746;
var parent_children = inst_67767;
var ch67697 = inst_67706;
var parent = inst_67762;
var vec__67709 = inst_67704;
var val__22914__auto__ = inst_67705;
var ret67698 = inst_67704;
var down_path = inst_67791;
var command = inst_67742;
var G__67696 = click_chan;
var e = inst_67710;
var parent_path = inst_67756;
var G__67695 = key_down_chan;
var current_path = inst_67744;
var c = inst_67711;
var current = inst_67748;
var keyevent__GT_command = inst_67716;
return ((function (vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (d){
var new_parent_children = outliner.components.index.remove_node_from_parent.call(null,parent_children,current_child_idx);
var destination_path = cljs.core.conj.call(null,up_path,new cljs.core.Keyword(null,"children","children",-940561982));
var destination_children = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),destination_path);
var new_destination_children = cljs.core.conj.call(null,destination_children,current);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.call(null,destination_path,(cljs.core.count.call(null,new_destination_children) - (1))));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,d,cljs.core.conj.call(null,parent_path,new cljs.core.Keyword(null,"children","children",-940561982)),new_parent_children),up_path,cljs.core.dissoc,new cljs.core.Keyword(null,"closed","closed",-919675359)),destination_path,new_destination_children);
});
;})(vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
})();
var inst_67858 = om.core.transact_BANG_.call(null,self__.data,inst_67857);
var state_67918__$1 = state_67918;
var statearr_68042_68203 = state_67918__$1;
(statearr_68042_68203[(2)] = inst_67858);

(statearr_68042_68203[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (26))){
var inst_67756 = (state_67918[(11)]);
var inst_67758 = cljs.core.deref.call(null,self__.data);
var inst_67759 = cljs.core.get_in.call(null,inst_67758,inst_67756);
var state_67918__$1 = state_67918;
var statearr_68043_68204 = state_67918__$1;
(statearr_68043_68204[(2)] = inst_67759);

(statearr_68043_68204[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (16))){
var inst_67710 = (state_67918[(12)]);
var inst_67729 = (state_67918[(35)]);
var inst_67728 = (state_67918[(2)]);
var inst_67729__$1 = inst_67710.ctrlKey;
var state_67918__$1 = (function (){var statearr_68044 = state_67918;
(statearr_68044[(35)] = inst_67729__$1);

(statearr_68044[(33)] = inst_67728);

return statearr_68044;
})();
if(cljs.core.truth_(inst_67729__$1)){
var statearr_68045_68205 = state_67918__$1;
(statearr_68045_68205[(1)] = (17));

} else {
var statearr_68046_68206 = state_67918__$1;
(statearr_68046_68206[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (81))){
var inst_67756 = (state_67918[(11)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67756)){
var statearr_68047_68207 = state_67918__$1;
(statearr_68047_68207[(1)] = (82));

} else {
var statearr_68048_68208 = state_67918__$1;
(statearr_68048_68208[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (79))){
var state_67918__$1 = state_67918;
var statearr_68049_68209 = state_67918__$1;
(statearr_68049_68209[(2)] = null);

(statearr_68049_68209[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (38))){
var state_67918__$1 = state_67918;
var statearr_68050_68210 = state_67918__$1;
(statearr_68050_68210[(2)] = false);

(statearr_68050_68210[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (98))){
var inst_67911 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_68051_68211 = state_67918__$1;
(statearr_68051_68211[(2)] = inst_67911);

(statearr_68051_68211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (87))){
var inst_67874 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_68052_68212 = state_67918__$1;
(statearr_68052_68212[(2)] = inst_67874);

(statearr_68052_68212[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (30))){
var inst_67762 = (state_67918[(13)]);
var state_67918__$1 = state_67918;
var statearr_68053_68213 = state_67918__$1;
(statearr_68053_68213[(2)] = inst_67762);

(statearr_68053_68213[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (73))){
var inst_67746 = (state_67918[(19)]);
var inst_67848 = cljs.core.not.call(null,inst_67746);
var state_67918__$1 = state_67918;
if(inst_67848){
var statearr_68054_68214 = state_67918__$1;
(statearr_68054_68214[(1)] = (74));

} else {
var statearr_68055_68215 = state_67918__$1;
(statearr_68055_68215[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (96))){
var inst_67704 = (state_67918[(14)]);
var inst_67898 = cljs.core.nth.call(null,inst_67704,(0),null);
var inst_67899 = cljs.core.nth.call(null,inst_67704,(1),null);
var inst_67900 = new cljs.core.Keyword(null,"new-path","new-path",1732999939).cljs$core$IFn$_invoke$arity$1(inst_67898);
var inst_67901 = cljs.core.count.call(null,base_path);
var inst_67902 = cljs.core.subvec.call(null,inst_67900,inst_67901);
var inst_67903 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_67902);
var state_67918__$1 = (function (){var statearr_68056 = state_67918;
(statearr_68056[(36)] = inst_67899);

return statearr_68056;
})();
var statearr_68057_68216 = state_67918__$1;
(statearr_68057_68216[(2)] = inst_67903);

(statearr_68057_68216[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (10))){
var state_67918__$1 = state_67918;
var statearr_68058_68217 = state_67918__$1;
(statearr_68058_68217[(2)] = outliner.components.index.normal_keymap);

(statearr_68058_68217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (18))){
var inst_67729 = (state_67918[(35)]);
var state_67918__$1 = state_67918;
var statearr_68059_68218 = state_67918__$1;
(statearr_68059_68218[(2)] = inst_67729);

(statearr_68059_68218[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (52))){
var inst_67802 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_68060_68219 = state_67918__$1;
(statearr_68060_68219[(2)] = inst_67802);

(statearr_68060_68219[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (67))){
var inst_67746 = (state_67918[(19)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67746)){
var statearr_68061_68220 = state_67918__$1;
(statearr_68061_68220[(1)] = (70));

} else {
var statearr_68062_68221 = state_67918__$1;
(statearr_68062_68221[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (71))){
var inst_67756 = (state_67918[(11)]);
var inst_67783 = (state_67918[(20)]);
var inst_67745 = (state_67918[(21)]);
var inst_67838 = outliner.components.index.gen_left_path.call(null,inst_67745,inst_67756,inst_67783,self__.data);
var state_67918__$1 = state_67918;
var statearr_68063_68222 = state_67918__$1;
(statearr_68063_68222[(2)] = inst_67838);

(statearr_68063_68222[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (42))){
var state_67918__$1 = state_67918;
var statearr_68064_68223 = state_67918__$1;
(statearr_68064_68223[(2)] = false);

(statearr_68064_68223[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (80))){
var inst_67861 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_68065_68224 = state_67918__$1;
(statearr_68065_68224[(2)] = inst_67861);

(statearr_68065_68224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (37))){
var inst_67781 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_68066_68225 = state_67918__$1;
(statearr_68066_68225[(2)] = inst_67781);

(statearr_68066_68225[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (63))){
var inst_67742 = (state_67918[(9)]);
var inst_67706 = (state_67918[(10)]);
var inst_67756 = (state_67918[(11)]);
var inst_67744 = (state_67918[(7)]);
var inst_67791 = (state_67918[(8)]);
var inst_67710 = (state_67918[(12)]);
var inst_67762 = (state_67918[(13)]);
var inst_67704 = (state_67918[(14)]);
var inst_67767 = (state_67918[(15)]);
var inst_67711 = (state_67918[(16)]);
var inst_67748 = (state_67918[(17)]);
var inst_67705 = (state_67918[(18)]);
var inst_67746 = (state_67918[(19)]);
var inst_67783 = (state_67918[(20)]);
var inst_67745 = (state_67918[(21)]);
var inst_67716 = (state_67918[(22)]);
var inst_67825 = cljs.core.deref.call(null,self__.data);
var inst_67826 = cljs.core.get_in.call(null,inst_67825,inst_67791);
var inst_67827 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_67791);
var inst_67828 = (function (){var vec__67699 = inst_67704;
var up_path = inst_67783;
var current_child_idx = inst_67745;
var is_root = inst_67746;
var parent_children = inst_67767;
var ch67697 = inst_67706;
var parent = inst_67762;
var vec__67709 = inst_67704;
var val__22914__auto__ = inst_67705;
var ret67698 = inst_67704;
var down_path = inst_67791;
var command = inst_67742;
var swap_node = inst_67826;
var G__67696 = click_chan;
var e = inst_67710;
var parent_path = inst_67756;
var G__67695 = key_down_chan;
var current_path = inst_67744;
var c = inst_67711;
var current = inst_67748;
var keyevent__GT_command = inst_67716;
return ((function (vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,swap_node,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,inst_67825,inst_67826,inst_67827,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (d){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,d,current_path,swap_node),down_path,current);
});
;})(vec__67699,up_path,current_child_idx,is_root,parent_children,ch67697,parent,vec__67709,val__22914__auto__,ret67698,down_path,command,swap_node,G__67696,e,parent_path,G__67695,current_path,c,current,keyevent__GT_command,inst_67742,inst_67706,inst_67756,inst_67744,inst_67791,inst_67710,inst_67762,inst_67704,inst_67767,inst_67711,inst_67748,inst_67705,inst_67746,inst_67783,inst_67745,inst_67716,inst_67825,inst_67826,inst_67827,state_val_67919,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
})();
var inst_67829 = om.core.transact_BANG_.call(null,self__.data,inst_67828);
var state_67918__$1 = (function (){var statearr_68067 = state_67918;
(statearr_68067[(37)] = inst_67827);

return statearr_68067;
})();
var statearr_68068_68226 = state_67918__$1;
(statearr_68068_68226[(2)] = inst_67829);

(statearr_68068_68226[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (94))){
var inst_67885 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
var statearr_68069_68227 = state_67918__$1;
(statearr_68069_68227[(2)] = inst_67885);

(statearr_68069_68227[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (8))){
var inst_67710 = (state_67918[(12)]);
var inst_67719 = (state_67918[(34)]);
var inst_67716 = (state_67918[(2)]);
var inst_67717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67718 = inst_67710.keyCode;
var inst_67719__$1 = inst_67710.shiftKey;
var state_67918__$1 = (function (){var statearr_68070 = state_67918;
(statearr_68070[(30)] = inst_67718);

(statearr_68070[(32)] = inst_67717);

(statearr_68070[(22)] = inst_67716);

(statearr_68070[(34)] = inst_67719__$1);

return statearr_68070;
})();
if(cljs.core.truth_(inst_67719__$1)){
var statearr_68071_68228 = state_67918__$1;
(statearr_68071_68228[(1)] = (11));

} else {
var statearr_68072_68229 = state_67918__$1;
(statearr_68072_68229[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (49))){
var inst_67791 = (state_67918[(8)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67791)){
var statearr_68073_68230 = state_67918__$1;
(statearr_68073_68230[(1)] = (50));

} else {
var statearr_68074_68231 = state_67918__$1;
(statearr_68074_68231[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67919 === (84))){
var inst_67868 = (state_67918[(2)]);
var state_67918__$1 = state_67918;
if(cljs.core.truth_(inst_67868)){
var statearr_68075_68232 = state_67918__$1;
(statearr_68075_68232[(1)] = (85));

} else {
var statearr_68076_68233 = state_67918__$1;
(statearr_68076_68233[(1)] = (86));

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
});})(c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;
return ((function (switch__22884__auto__,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function() {
var outliner$components$index$component_$_state_machine__22885__auto__ = null;
var outliner$components$index$component_$_state_machine__22885__auto____0 = (function (){
var statearr_68080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68080[(0)] = outliner$components$index$component_$_state_machine__22885__auto__);

(statearr_68080[(1)] = (1));

return statearr_68080;
});
var outliner$components$index$component_$_state_machine__22885__auto____1 = (function (state_67918){
while(true){
var ret_value__22886__auto__ = (function (){try{while(true){
var result__22887__auto__ = switch__22884__auto__.call(null,state_67918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22887__auto__;
}
break;
}
}catch (e68081){if((e68081 instanceof Object)){
var ex__22888__auto__ = e68081;
var statearr_68082_68234 = state_67918;
(statearr_68082_68234[(5)] = ex__22888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68235 = state_67918;
state_67918 = G__68235;
continue;
} else {
return ret_value__22886__auto__;
}
break;
}
});
outliner$components$index$component_$_state_machine__22885__auto__ = function(state_67918){
switch(arguments.length){
case 0:
return outliner$components$index$component_$_state_machine__22885__auto____0.call(this);
case 1:
return outliner$components$index$component_$_state_machine__22885__auto____1.call(this,state_67918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$component_$_state_machine__22885__auto__.cljs$core$IFn$_invoke$arity$0 = outliner$components$index$component_$_state_machine__22885__auto____0;
outliner$components$index$component_$_state_machine__22885__auto__.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$component_$_state_machine__22885__auto____1;
return outliner$components$index$component_$_state_machine__22885__auto__;
})()
;})(switch__22884__auto__,c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
})();
var state__22907__auto__ = (function (){var statearr_68083 = f__22906__auto__.call(null);
(statearr_68083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22905__auto___68092);

return statearr_68083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22907__auto__);
});})(c__22905__auto___68092,key_down_chan,click_chan,base_path,___$1,validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
);


return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),outliner.components.index.root_node,new cljs.core.Keyword(null,"click-chan","click-chan",1478147512),click_chan,new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null);
});})(validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;

outliner.components.index.t67691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (_67693){
var self__ = this;
var _67693__$1 = this;
return self__.meta67692;
});})(validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;

outliner.components.index.t67691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (_67693,meta67692__$1){
var self__ = this;
var _67693__$1 = this;
return (new outliner.components.index.t67691(self__.owner,self__.data,self__.input_checker67294,self__.component,self__.input_schema67293,self__.output_schema67292,self__.output_checker67295,self__.G__67297,self__.ufv__,self__.G__67296,self__.validate__20255__auto__,meta67692__$1));
});})(validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;

outliner.components.index.t67691.cljs$lang$type = true;

outliner.components.index.t67691.cljs$lang$ctorStr = "outliner.components.index/t67691";

outliner.components.index.t67691.cljs$lang$ctorPrWriter = ((function (validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"outliner.components.index/t67691");
});})(validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;

outliner.components.index.__GT_t67691 = ((function (validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088){
return (function outliner$components$index$component_$___GT_t67691(owner__$1,data__$1,input_checker67294__$1,component__$1,input_schema67293__$1,output_schema67292__$1,output_checker67295__$1,G__67297__$1,ufv____$1,G__67296__$1,validate__20255__auto____$1,meta67692){
return (new outliner.components.index.t67691(owner__$1,data__$1,input_checker67294__$1,component__$1,input_schema67293__$1,output_schema67292__$1,output_checker67295__$1,G__67297__$1,ufv____$1,G__67296__$1,validate__20255__auto____$1,meta67692));
});})(validate__20255__auto__,ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;

}

return (new outliner.components.index.t67691(owner,data,input_checker67294_68087,outliner$components$index$component,input_schema67293_68086,output_schema67292_68085,output_checker67295_68088,G__67297,ufv___68084,G__67296,validate__20255__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__20255__auto__)){
var temp__4126__auto___68236 = output_checker67295_68088.call(null,o__20258__auto__);
if(cljs.core.truth_(temp__4126__auto___68236)){
var error__20257__auto___68237 = temp__4126__auto___68236;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__20257__auto___68237)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__20257__auto___68237,new cljs.core.Keyword(null,"value","value",305978217),o__20258__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67292_68085,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__20258__auto__;
});})(ufv___68084,output_schema67292_68085,input_schema67293_68086,input_checker67294_68087,output_checker67295_68088))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,outliner.components.index.component),schema.core.make_fn_schema.call(null,output_schema67292_68085,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67293_68086], null)));

outliner.components.index.__GT_component = (function() {
var outliner$components$index$__GT_component = null;
var outliner$components$index$__GT_component__1 = (function (cursor__22988__auto__){
return om.core.build.call(null,outliner.components.index.component,cursor__22988__auto__);
});
var outliner$components$index$__GT_component__2 = (function (cursor__22988__auto__,m67291){
return om.core.build.call(null,outliner.components.index.component,cursor__22988__auto__,m67291);
});
outliner$components$index$__GT_component = function(cursor__22988__auto__,m67291){
switch(arguments.length){
case 1:
return outliner$components$index$__GT_component__1.call(this,cursor__22988__auto__);
case 2:
return outliner$components$index$__GT_component__2.call(this,cursor__22988__auto__,m67291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$1 = outliner$components$index$__GT_component__1;
outliner$components$index$__GT_component.cljs$core$IFn$_invoke$arity$2 = outliner$components$index$__GT_component__2;
return outliner$components$index$__GT_component;
})()
;

//# sourceMappingURL=index.js.map?rel=1427720208744