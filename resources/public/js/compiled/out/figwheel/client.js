// Compiled by ClojureScript 0.0-3126 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34540__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34541__i = 0, G__34541__a = new Array(arguments.length -  0);
while (G__34541__i < G__34541__a.length) {G__34541__a[G__34541__i] = arguments[G__34541__i + 0]; ++G__34541__i;}
  args = new cljs.core.IndexedSeq(G__34541__a,0);
} 
return G__34540__delegate.call(this,args);};
G__34540.cljs$lang$maxFixedArity = 0;
G__34540.cljs$lang$applyTo = (function (arglist__34542){
var args = cljs.core.seq(arglist__34542);
return G__34540__delegate(args);
});
G__34540.cljs$core$IFn$_invoke$arity$variadic = G__34540__delegate;
return G__34540;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34543){
var map__34545 = p__34543;
var map__34545__$1 = ((cljs.core.seq_QMARK_.call(null,map__34545))?cljs.core.apply.call(null,cljs.core.hash_map,map__34545):map__34545);
var class$ = cljs.core.get.call(null,map__34545__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__34545__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16591__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16579__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16579__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16579__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23737__auto___34674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___34674,ch){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___34674,ch){
return (function (state_34648){
var state_val_34649 = (state_34648[(1)]);
if((state_val_34649 === (7))){
var inst_34644 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
var statearr_34650_34675 = state_34648__$1;
(statearr_34650_34675[(2)] = inst_34644);

(statearr_34650_34675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (1))){
var state_34648__$1 = state_34648;
var statearr_34651_34676 = state_34648__$1;
(statearr_34651_34676[(2)] = null);

(statearr_34651_34676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (4))){
var inst_34612 = (state_34648[(7)]);
var inst_34612__$1 = (state_34648[(2)]);
var state_34648__$1 = (function (){var statearr_34652 = state_34648;
(statearr_34652[(7)] = inst_34612__$1);

return statearr_34652;
})();
if(cljs.core.truth_(inst_34612__$1)){
var statearr_34653_34677 = state_34648__$1;
(statearr_34653_34677[(1)] = (5));

} else {
var statearr_34654_34678 = state_34648__$1;
(statearr_34654_34678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (13))){
var state_34648__$1 = state_34648;
var statearr_34655_34679 = state_34648__$1;
(statearr_34655_34679[(2)] = null);

(statearr_34655_34679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (6))){
var state_34648__$1 = state_34648;
var statearr_34656_34680 = state_34648__$1;
(statearr_34656_34680[(2)] = null);

(statearr_34656_34680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (3))){
var inst_34646 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34648__$1,inst_34646);
} else {
if((state_val_34649 === (12))){
var inst_34619 = (state_34648[(8)]);
var inst_34632 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34619);
var inst_34633 = cljs.core.first.call(null,inst_34632);
var inst_34634 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34633);
var inst_34635 = console.warn("Figwheel: Not loading code with warnings - ",inst_34634);
var state_34648__$1 = state_34648;
var statearr_34657_34681 = state_34648__$1;
(statearr_34657_34681[(2)] = inst_34635);

(statearr_34657_34681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (2))){
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34648__$1,(4),ch);
} else {
if((state_val_34649 === (11))){
var inst_34628 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
var statearr_34658_34682 = state_34648__$1;
(statearr_34658_34682[(2)] = inst_34628);

(statearr_34658_34682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (9))){
var inst_34618 = (state_34648[(9)]);
var inst_34630 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34618,opts);
var state_34648__$1 = state_34648;
if(inst_34630){
var statearr_34659_34683 = state_34648__$1;
(statearr_34659_34683[(1)] = (12));

} else {
var statearr_34660_34684 = state_34648__$1;
(statearr_34660_34684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (5))){
var inst_34612 = (state_34648[(7)]);
var inst_34618 = (state_34648[(9)]);
var inst_34614 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34615 = (new cljs.core.PersistentArrayMap(null,2,inst_34614,null));
var inst_34616 = (new cljs.core.PersistentHashSet(null,inst_34615,null));
var inst_34617 = figwheel.client.focus_msgs.call(null,inst_34616,inst_34612);
var inst_34618__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34617);
var inst_34619 = cljs.core.first.call(null,inst_34617);
var inst_34620 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34618__$1,opts);
var state_34648__$1 = (function (){var statearr_34661 = state_34648;
(statearr_34661[(8)] = inst_34619);

(statearr_34661[(9)] = inst_34618__$1);

return statearr_34661;
})();
if(cljs.core.truth_(inst_34620)){
var statearr_34662_34685 = state_34648__$1;
(statearr_34662_34685[(1)] = (8));

} else {
var statearr_34663_34686 = state_34648__$1;
(statearr_34663_34686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (14))){
var inst_34638 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
var statearr_34664_34687 = state_34648__$1;
(statearr_34664_34687[(2)] = inst_34638);

(statearr_34664_34687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (10))){
var inst_34640 = (state_34648[(2)]);
var state_34648__$1 = (function (){var statearr_34665 = state_34648;
(statearr_34665[(10)] = inst_34640);

return statearr_34665;
})();
var statearr_34666_34688 = state_34648__$1;
(statearr_34666_34688[(2)] = null);

(statearr_34666_34688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (8))){
var inst_34619 = (state_34648[(8)]);
var inst_34622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34623 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34619);
var inst_34624 = cljs.core.async.timeout.call(null,(1000));
var inst_34625 = [inst_34623,inst_34624];
var inst_34626 = (new cljs.core.PersistentVector(null,2,(5),inst_34622,inst_34625,null));
var state_34648__$1 = state_34648;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34648__$1,(11),inst_34626);
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
});})(c__23737__auto___34674,ch))
;
return ((function (switch__23722__auto__,c__23737__auto___34674,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23723__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23723__auto____0 = (function (){
var statearr_34670 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34670[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23723__auto__);

(statearr_34670[(1)] = (1));

return statearr_34670;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23723__auto____1 = (function (state_34648){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_34648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e34671){if((e34671 instanceof Object)){
var ex__23726__auto__ = e34671;
var statearr_34672_34689 = state_34648;
(statearr_34672_34689[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34690 = state_34648;
state_34648 = G__34690;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23723__auto__ = function(state_34648){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23723__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23723__auto____1.call(this,state_34648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23723__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23723__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___34674,ch))
})();
var state__23739__auto__ = (function (){var statearr_34673 = f__23738__auto__.call(null);
(statearr_34673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___34674);

return statearr_34673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___34674,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34691_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34691_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34700 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34693_SHARP_,p2__34692_SHARP_){
return [cljs.core.str(p2__34692_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34700){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34698 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34699 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34698,_STAR_print_newline_STAR_34699,base_path_34700){
return (function() { 
var G__34701__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34702__i = 0, G__34702__a = new Array(arguments.length -  0);
while (G__34702__i < G__34702__a.length) {G__34702__a[G__34702__i] = arguments[G__34702__i + 0]; ++G__34702__i;}
  args = new cljs.core.IndexedSeq(G__34702__a,0);
} 
return G__34701__delegate.call(this,args);};
G__34701.cljs$lang$maxFixedArity = 0;
G__34701.cljs$lang$applyTo = (function (arglist__34703){
var args = cljs.core.seq(arglist__34703);
return G__34701__delegate(args);
});
G__34701.cljs$core$IFn$_invoke$arity$variadic = G__34701__delegate;
return G__34701;
})()
;})(_STAR_print_fn_STAR_34698,_STAR_print_newline_STAR_34699,base_path_34700))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34699;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34698;
}}catch (e34697){if((e34697 instanceof Error)){
var e = e34697;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34700], null));
} else {
var e = e34697;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34700))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34704){
var map__34709 = p__34704;
var map__34709__$1 = ((cljs.core.seq_QMARK_.call(null,map__34709))?cljs.core.apply.call(null,cljs.core.hash_map,map__34709):map__34709);
var opts = map__34709__$1;
var build_id = cljs.core.get.call(null,map__34709__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34709,map__34709__$1,opts,build_id){
return (function (p__34710){
var vec__34711 = p__34710;
var map__34712 = cljs.core.nth.call(null,vec__34711,(0),null);
var map__34712__$1 = ((cljs.core.seq_QMARK_.call(null,map__34712))?cljs.core.apply.call(null,cljs.core.hash_map,map__34712):map__34712);
var msg = map__34712__$1;
var msg_name = cljs.core.get.call(null,map__34712__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34711,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34711,map__34712,map__34712__$1,msg,msg_name,_,map__34709,map__34709__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34711,map__34712,map__34712__$1,msg,msg_name,_,map__34709,map__34709__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34709,map__34709__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34716){
var vec__34717 = p__34716;
var map__34718 = cljs.core.nth.call(null,vec__34717,(0),null);
var map__34718__$1 = ((cljs.core.seq_QMARK_.call(null,map__34718))?cljs.core.apply.call(null,cljs.core.hash_map,map__34718):map__34718);
var msg = map__34718__$1;
var msg_name = cljs.core.get.call(null,map__34718__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34717,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34719){
var map__34727 = p__34719;
var map__34727__$1 = ((cljs.core.seq_QMARK_.call(null,map__34727))?cljs.core.apply.call(null,cljs.core.hash_map,map__34727):map__34727);
var on_compile_fail = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__34727,map__34727__$1,on_compile_fail,on_compile_warning){
return (function (p__34728){
var vec__34729 = p__34728;
var map__34730 = cljs.core.nth.call(null,vec__34729,(0),null);
var map__34730__$1 = ((cljs.core.seq_QMARK_.call(null,map__34730))?cljs.core.apply.call(null,cljs.core.hash_map,map__34730):map__34730);
var msg = map__34730__$1;
var msg_name = cljs.core.get.call(null,map__34730__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34729,(1));
var pred__34731 = cljs.core._EQ_;
var expr__34732 = msg_name;
if(cljs.core.truth_(pred__34731.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34732))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34731.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34732))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34727,map__34727__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto__,msg_hist,msg_names,msg){
return (function (state_34929){
var state_val_34930 = (state_34929[(1)]);
if((state_val_34930 === (7))){
var inst_34865 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34931_34972 = state_34929__$1;
(statearr_34931_34972[(2)] = inst_34865);

(statearr_34931_34972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (20))){
var inst_34891 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34929__$1 = state_34929;
if(inst_34891){
var statearr_34932_34973 = state_34929__$1;
(statearr_34932_34973[(1)] = (22));

} else {
var statearr_34933_34974 = state_34929__$1;
(statearr_34933_34974[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (27))){
var inst_34903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34904 = figwheel.client.heads_up.display_warning.call(null,inst_34903);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(30),inst_34904);
} else {
if((state_val_34930 === (1))){
var inst_34853 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34929__$1 = state_34929;
if(cljs.core.truth_(inst_34853)){
var statearr_34934_34975 = state_34929__$1;
(statearr_34934_34975[(1)] = (2));

} else {
var statearr_34935_34976 = state_34929__$1;
(statearr_34935_34976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (24))){
var inst_34919 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34936_34977 = state_34929__$1;
(statearr_34936_34977[(2)] = inst_34919);

(statearr_34936_34977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (4))){
var inst_34927 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34929__$1,inst_34927);
} else {
if((state_val_34930 === (15))){
var inst_34880 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34881 = figwheel.client.format_messages.call(null,inst_34880);
var inst_34882 = figwheel.client.heads_up.display_error.call(null,inst_34881);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(18),inst_34882);
} else {
if((state_val_34930 === (21))){
var inst_34921 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34937_34978 = state_34929__$1;
(statearr_34937_34978[(2)] = inst_34921);

(statearr_34937_34978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (31))){
var inst_34910 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(34),inst_34910);
} else {
if((state_val_34930 === (32))){
var state_34929__$1 = state_34929;
var statearr_34938_34979 = state_34929__$1;
(statearr_34938_34979[(2)] = null);

(statearr_34938_34979[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (33))){
var inst_34915 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34939_34980 = state_34929__$1;
(statearr_34939_34980[(2)] = inst_34915);

(statearr_34939_34980[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (13))){
var inst_34871 = (state_34929[(2)]);
var inst_34872 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34873 = figwheel.client.format_messages.call(null,inst_34872);
var inst_34874 = figwheel.client.heads_up.display_error.call(null,inst_34873);
var state_34929__$1 = (function (){var statearr_34940 = state_34929;
(statearr_34940[(7)] = inst_34871);

return statearr_34940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(14),inst_34874);
} else {
if((state_val_34930 === (22))){
var inst_34893 = figwheel.client.heads_up.clear.call(null);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(25),inst_34893);
} else {
if((state_val_34930 === (29))){
var inst_34917 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34941_34981 = state_34929__$1;
(statearr_34941_34981[(2)] = inst_34917);

(statearr_34941_34981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (6))){
var inst_34861 = figwheel.client.heads_up.clear.call(null);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(9),inst_34861);
} else {
if((state_val_34930 === (28))){
var inst_34908 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34929__$1 = state_34929;
if(inst_34908){
var statearr_34942_34982 = state_34929__$1;
(statearr_34942_34982[(1)] = (31));

} else {
var statearr_34943_34983 = state_34929__$1;
(statearr_34943_34983[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (25))){
var inst_34895 = (state_34929[(2)]);
var inst_34896 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34897 = figwheel.client.heads_up.display_warning.call(null,inst_34896);
var state_34929__$1 = (function (){var statearr_34944 = state_34929;
(statearr_34944[(8)] = inst_34895);

return statearr_34944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(26),inst_34897);
} else {
if((state_val_34930 === (34))){
var inst_34912 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34945_34984 = state_34929__$1;
(statearr_34945_34984[(2)] = inst_34912);

(statearr_34945_34984[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (17))){
var inst_34923 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34946_34985 = state_34929__$1;
(statearr_34946_34985[(2)] = inst_34923);

(statearr_34946_34985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (3))){
var inst_34867 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34929__$1 = state_34929;
if(inst_34867){
var statearr_34947_34986 = state_34929__$1;
(statearr_34947_34986[(1)] = (10));

} else {
var statearr_34948_34987 = state_34929__$1;
(statearr_34948_34987[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (12))){
var inst_34925 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34949_34988 = state_34929__$1;
(statearr_34949_34988[(2)] = inst_34925);

(statearr_34949_34988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (2))){
var inst_34855 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34929__$1 = state_34929;
if(cljs.core.truth_(inst_34855)){
var statearr_34950_34989 = state_34929__$1;
(statearr_34950_34989[(1)] = (5));

} else {
var statearr_34951_34990 = state_34929__$1;
(statearr_34951_34990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (23))){
var inst_34901 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34929__$1 = state_34929;
if(inst_34901){
var statearr_34952_34991 = state_34929__$1;
(statearr_34952_34991[(1)] = (27));

} else {
var statearr_34953_34992 = state_34929__$1;
(statearr_34953_34992[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (19))){
var inst_34888 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34889 = figwheel.client.heads_up.append_message.call(null,inst_34888);
var state_34929__$1 = state_34929;
var statearr_34954_34993 = state_34929__$1;
(statearr_34954_34993[(2)] = inst_34889);

(statearr_34954_34993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (11))){
var inst_34878 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34929__$1 = state_34929;
if(inst_34878){
var statearr_34955_34994 = state_34929__$1;
(statearr_34955_34994[(1)] = (15));

} else {
var statearr_34956_34995 = state_34929__$1;
(statearr_34956_34995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (9))){
var inst_34863 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34957_34996 = state_34929__$1;
(statearr_34957_34996[(2)] = inst_34863);

(statearr_34957_34996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (5))){
var inst_34857 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(8),inst_34857);
} else {
if((state_val_34930 === (14))){
var inst_34876 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34958_34997 = state_34929__$1;
(statearr_34958_34997[(2)] = inst_34876);

(statearr_34958_34997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (26))){
var inst_34899 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34959_34998 = state_34929__$1;
(statearr_34959_34998[(2)] = inst_34899);

(statearr_34959_34998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (16))){
var inst_34886 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34929__$1 = state_34929;
if(inst_34886){
var statearr_34960_34999 = state_34929__$1;
(statearr_34960_34999[(1)] = (19));

} else {
var statearr_34961_35000 = state_34929__$1;
(statearr_34961_35000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (30))){
var inst_34906 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34962_35001 = state_34929__$1;
(statearr_34962_35001[(2)] = inst_34906);

(statearr_34962_35001[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (10))){
var inst_34869 = figwheel.client.heads_up.clear.call(null);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34929__$1,(13),inst_34869);
} else {
if((state_val_34930 === (18))){
var inst_34884 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34963_35002 = state_34929__$1;
(statearr_34963_35002[(2)] = inst_34884);

(statearr_34963_35002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (8))){
var inst_34859 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34964_35003 = state_34929__$1;
(statearr_34964_35003[(2)] = inst_34859);

(statearr_34964_35003[(1)] = (7));


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
});})(c__23737__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23722__auto__,c__23737__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto____0 = (function (){
var statearr_34968 = [null,null,null,null,null,null,null,null,null];
(statearr_34968[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto__);

(statearr_34968[(1)] = (1));

return statearr_34968;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto____1 = (function (state_34929){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_34929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e34969){if((e34969 instanceof Object)){
var ex__23726__auto__ = e34969;
var statearr_34970_35004 = state_34929;
(statearr_34970_35004[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35005 = state_34929;
state_34929 = G__35005;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto__ = function(state_34929){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto____1.call(this,state_34929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto__,msg_hist,msg_names,msg))
})();
var state__23739__auto__ = (function (){var statearr_34971 = f__23738__auto__.call(null);
(statearr_34971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto__);

return statearr_34971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto__,msg_hist,msg_names,msg))
);

return c__23737__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23737__auto___35068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___35068,ch){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___35068,ch){
return (function (state_35051){
var state_val_35052 = (state_35051[(1)]);
if((state_val_35052 === (8))){
var inst_35043 = (state_35051[(2)]);
var state_35051__$1 = (function (){var statearr_35053 = state_35051;
(statearr_35053[(7)] = inst_35043);

return statearr_35053;
})();
var statearr_35054_35069 = state_35051__$1;
(statearr_35054_35069[(2)] = null);

(statearr_35054_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (7))){
var inst_35047 = (state_35051[(2)]);
var state_35051__$1 = state_35051;
var statearr_35055_35070 = state_35051__$1;
(statearr_35055_35070[(2)] = inst_35047);

(statearr_35055_35070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (6))){
var state_35051__$1 = state_35051;
var statearr_35056_35071 = state_35051__$1;
(statearr_35056_35071[(2)] = null);

(statearr_35056_35071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (5))){
var inst_35039 = (state_35051[(8)]);
var inst_35041 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35039);
var state_35051__$1 = state_35051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35051__$1,(8),inst_35041);
} else {
if((state_val_35052 === (4))){
var inst_35039 = (state_35051[(8)]);
var inst_35039__$1 = (state_35051[(2)]);
var state_35051__$1 = (function (){var statearr_35057 = state_35051;
(statearr_35057[(8)] = inst_35039__$1);

return statearr_35057;
})();
if(cljs.core.truth_(inst_35039__$1)){
var statearr_35058_35072 = state_35051__$1;
(statearr_35058_35072[(1)] = (5));

} else {
var statearr_35059_35073 = state_35051__$1;
(statearr_35059_35073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (3))){
var inst_35049 = (state_35051[(2)]);
var state_35051__$1 = state_35051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35051__$1,inst_35049);
} else {
if((state_val_35052 === (2))){
var state_35051__$1 = state_35051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35051__$1,(4),ch);
} else {
if((state_val_35052 === (1))){
var state_35051__$1 = state_35051;
var statearr_35060_35074 = state_35051__$1;
(statearr_35060_35074[(2)] = null);

(statearr_35060_35074[(1)] = (2));


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
});})(c__23737__auto___35068,ch))
;
return ((function (switch__23722__auto__,c__23737__auto___35068,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23723__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23723__auto____0 = (function (){
var statearr_35064 = [null,null,null,null,null,null,null,null,null];
(statearr_35064[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23723__auto__);

(statearr_35064[(1)] = (1));

return statearr_35064;
});
var figwheel$client$heads_up_plugin_$_state_machine__23723__auto____1 = (function (state_35051){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_35051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e35065){if((e35065 instanceof Object)){
var ex__23726__auto__ = e35065;
var statearr_35066_35075 = state_35051;
(statearr_35066_35075[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35076 = state_35051;
state_35051 = G__35076;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23723__auto__ = function(state_35051){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23723__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23723__auto____1.call(this,state_35051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23723__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23723__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___35068,ch))
})();
var state__23739__auto__ = (function (){var statearr_35067 = f__23738__auto__.call(null);
(statearr_35067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___35068);

return statearr_35067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___35068,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto__){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto__){
return (function (state_35097){
var state_val_35098 = (state_35097[(1)]);
if((state_val_35098 === (2))){
var inst_35094 = (state_35097[(2)]);
var inst_35095 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35097__$1 = (function (){var statearr_35099 = state_35097;
(statearr_35099[(7)] = inst_35094);

return statearr_35099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35097__$1,inst_35095);
} else {
if((state_val_35098 === (1))){
var inst_35092 = cljs.core.async.timeout.call(null,(3000));
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35097__$1,(2),inst_35092);
} else {
return null;
}
}
});})(c__23737__auto__))
;
return ((function (switch__23722__auto__,c__23737__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23723__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23723__auto____0 = (function (){
var statearr_35103 = [null,null,null,null,null,null,null,null];
(statearr_35103[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23723__auto__);

(statearr_35103[(1)] = (1));

return statearr_35103;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23723__auto____1 = (function (state_35097){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_35097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e35104){if((e35104 instanceof Object)){
var ex__23726__auto__ = e35104;
var statearr_35105_35107 = state_35097;
(statearr_35105_35107[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35108 = state_35097;
state_35097 = G__35108;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23723__auto__ = function(state_35097){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23723__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23723__auto____1.call(this,state_35097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23723__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23723__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto__))
})();
var state__23739__auto__ = (function (){var statearr_35106 = f__23738__auto__.call(null);
(statearr_35106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto__);

return statearr_35106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto__))
);

return c__23737__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16579__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16579__auto__)){
return ("CustomEvent" in window);
} else {
return and__16579__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj35112 = {"detail":url};
return obj35112;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35113){
var map__35119 = p__35113;
var map__35119__$1 = ((cljs.core.seq_QMARK_.call(null,map__35119))?cljs.core.apply.call(null,cljs.core.hash_map,map__35119):map__35119);
var ed = map__35119__$1;
var exception_data = cljs.core.get.call(null,map__35119__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__35119__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35120_35124 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35121_35125 = null;
var count__35122_35126 = (0);
var i__35123_35127 = (0);
while(true){
if((i__35123_35127 < count__35122_35126)){
var msg_35128 = cljs.core._nth.call(null,chunk__35121_35125,i__35123_35127);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35128);

var G__35129 = seq__35120_35124;
var G__35130 = chunk__35121_35125;
var G__35131 = count__35122_35126;
var G__35132 = (i__35123_35127 + (1));
seq__35120_35124 = G__35129;
chunk__35121_35125 = G__35130;
count__35122_35126 = G__35131;
i__35123_35127 = G__35132;
continue;
} else {
var temp__4126__auto___35133 = cljs.core.seq.call(null,seq__35120_35124);
if(temp__4126__auto___35133){
var seq__35120_35134__$1 = temp__4126__auto___35133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35120_35134__$1)){
var c__17376__auto___35135 = cljs.core.chunk_first.call(null,seq__35120_35134__$1);
var G__35136 = cljs.core.chunk_rest.call(null,seq__35120_35134__$1);
var G__35137 = c__17376__auto___35135;
var G__35138 = cljs.core.count.call(null,c__17376__auto___35135);
var G__35139 = (0);
seq__35120_35124 = G__35136;
chunk__35121_35125 = G__35137;
count__35122_35126 = G__35138;
i__35123_35127 = G__35139;
continue;
} else {
var msg_35140 = cljs.core.first.call(null,seq__35120_35134__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35140);

var G__35141 = cljs.core.next.call(null,seq__35120_35134__$1);
var G__35142 = null;
var G__35143 = (0);
var G__35144 = (0);
seq__35120_35124 = G__35141;
chunk__35121_35125 = G__35142;
count__35122_35126 = G__35143;
i__35123_35127 = G__35144;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35145){
var map__35147 = p__35145;
var map__35147__$1 = ((cljs.core.seq_QMARK_.call(null,map__35147))?cljs.core.apply.call(null,cljs.core.hash_map,map__35147):map__35147);
var w = map__35147__$1;
var message = cljs.core.get.call(null,map__35147__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16579__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16579__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16579__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35154 = cljs.core.seq.call(null,plugins);
var chunk__35155 = null;
var count__35156 = (0);
var i__35157 = (0);
while(true){
if((i__35157 < count__35156)){
var vec__35158 = cljs.core._nth.call(null,chunk__35155,i__35157);
var k = cljs.core.nth.call(null,vec__35158,(0),null);
var plugin = cljs.core.nth.call(null,vec__35158,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35160 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35154,chunk__35155,count__35156,i__35157,pl_35160,vec__35158,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35160.call(null,msg_hist);
});})(seq__35154,chunk__35155,count__35156,i__35157,pl_35160,vec__35158,k,plugin))
);
} else {
}

var G__35161 = seq__35154;
var G__35162 = chunk__35155;
var G__35163 = count__35156;
var G__35164 = (i__35157 + (1));
seq__35154 = G__35161;
chunk__35155 = G__35162;
count__35156 = G__35163;
i__35157 = G__35164;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35154);
if(temp__4126__auto__){
var seq__35154__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35154__$1)){
var c__17376__auto__ = cljs.core.chunk_first.call(null,seq__35154__$1);
var G__35165 = cljs.core.chunk_rest.call(null,seq__35154__$1);
var G__35166 = c__17376__auto__;
var G__35167 = cljs.core.count.call(null,c__17376__auto__);
var G__35168 = (0);
seq__35154 = G__35165;
chunk__35155 = G__35166;
count__35156 = G__35167;
i__35157 = G__35168;
continue;
} else {
var vec__35159 = cljs.core.first.call(null,seq__35154__$1);
var k = cljs.core.nth.call(null,vec__35159,(0),null);
var plugin = cljs.core.nth.call(null,vec__35159,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35169 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35154,chunk__35155,count__35156,i__35157,pl_35169,vec__35159,k,plugin,seq__35154__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35169.call(null,msg_hist);
});})(seq__35154,chunk__35155,count__35156,i__35157,pl_35169,vec__35159,k,plugin,seq__35154__$1,temp__4126__auto__))
);
} else {
}

var G__35170 = cljs.core.next.call(null,seq__35154__$1);
var G__35171 = null;
var G__35172 = (0);
var G__35173 = (0);
seq__35154 = G__35170;
chunk__35155 = G__35171;
count__35156 = G__35172;
i__35157 = G__35173;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__35174){
var map__35176 = p__35174;
var map__35176__$1 = ((cljs.core.seq_QMARK_.call(null,map__35176))?cljs.core.apply.call(null,cljs.core.hash_map,map__35176):map__35176);
var opts = map__35176__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__35174 = null;
if (arguments.length > 0) {
var G__35177__i = 0, G__35177__a = new Array(arguments.length -  0);
while (G__35177__i < G__35177__a.length) {G__35177__a[G__35177__i] = arguments[G__35177__i + 0]; ++G__35177__i;}
  p__35174 = new cljs.core.IndexedSeq(G__35177__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__35174);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__35178){
var p__35174 = cljs.core.seq(arglist__35178);
return figwheel$client$watch_and_reload__delegate(p__35174);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1427705350373