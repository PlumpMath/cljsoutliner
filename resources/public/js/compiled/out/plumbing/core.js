// Compiled by ClojureScript 0.0-3126 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * 
 * WARNING As of Clojure 1.7 this function exists in clojure.core and
 * will not be exported by this namespace.
 * @param {...*} var_args
 */
plumbing.core.update = (function() {
var plumbing$core$update = null;
var plumbing$core$update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var plumbing$core$update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var plumbing$core$update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var plumbing$core$update__6 = (function() { 
var G__30570__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__30570 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__30571__i = 0, G__30571__a = new Array(arguments.length -  5);
while (G__30571__i < G__30571__a.length) {G__30571__a[G__30571__i] = arguments[G__30571__i + 5]; ++G__30571__i;}
  xs = new cljs.core.IndexedSeq(G__30571__a,0);
} 
return G__30570__delegate.call(this,m,k,f,x1,x2,xs);};
G__30570.cljs$lang$maxFixedArity = 5;
G__30570.cljs$lang$applyTo = (function (arglist__30572){
var m = cljs.core.first(arglist__30572);
arglist__30572 = cljs.core.next(arglist__30572);
var k = cljs.core.first(arglist__30572);
arglist__30572 = cljs.core.next(arglist__30572);
var f = cljs.core.first(arglist__30572);
arglist__30572 = cljs.core.next(arglist__30572);
var x1 = cljs.core.first(arglist__30572);
arglist__30572 = cljs.core.next(arglist__30572);
var x2 = cljs.core.first(arglist__30572);
var xs = cljs.core.rest(arglist__30572);
return G__30570__delegate(m,k,f,x1,x2,xs);
});
G__30570.cljs$core$IFn$_invoke$arity$variadic = G__30570__delegate;
return G__30570;
})()
;
plumbing$core$update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return plumbing$core$update__3.call(this,m,k,f);
case 4:
return plumbing$core$update__4.call(this,m,k,f,x1);
case 5:
return plumbing$core$update__5.call(this,m,k,f,x1,x2);
default:
var G__30573 = null;
if (arguments.length > 5) {
var G__30574__i = 0, G__30574__a = new Array(arguments.length -  5);
while (G__30574__i < G__30574__a.length) {G__30574__a[G__30574__i] = arguments[G__30574__i + 5]; ++G__30574__i;}
G__30573 = new cljs.core.IndexedSeq(G__30574__a,0);
}
return plumbing$core$update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__30573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$update.cljs$lang$maxFixedArity = 5;
plumbing$core$update.cljs$lang$applyTo = plumbing$core$update__6.cljs$lang$applyTo;
plumbing$core$update.cljs$core$IFn$_invoke$arity$3 = plumbing$core$update__3;
plumbing$core$update.cljs$core$IFn$_invoke$arity$4 = plumbing$core$update__4;
plumbing$core$update.cljs$core$IFn$_invoke$arity$5 = plumbing$core$update__5;
plumbing$core$update.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$update__6.cljs$core$IFn$_invoke$arity$variadic;
return plumbing$core$update;
})()
;
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__22157__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__30583_30589 = cljs.core.seq.call(null,m);
var chunk__30584_30590 = null;
var count__30585_30591 = (0);
var i__30586_30592 = (0);
while(true){
if((i__30586_30592 < count__30585_30591)){
var vec__30587_30593 = cljs.core._nth.call(null,chunk__30584_30590,i__30586_30592);
var k_30594 = cljs.core.nth.call(null,vec__30587_30593,(0),null);
var v_30595 = cljs.core.nth.call(null,vec__30587_30593,(1),null);
var m30582_30596 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30582_30596,k_30594,f.call(null,v_30595)));

var G__30597 = seq__30583_30589;
var G__30598 = chunk__30584_30590;
var G__30599 = count__30585_30591;
var G__30600 = (i__30586_30592 + (1));
seq__30583_30589 = G__30597;
chunk__30584_30590 = G__30598;
count__30585_30591 = G__30599;
i__30586_30592 = G__30600;
continue;
} else {
var temp__4126__auto___30601 = cljs.core.seq.call(null,seq__30583_30589);
if(temp__4126__auto___30601){
var seq__30583_30602__$1 = temp__4126__auto___30601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30583_30602__$1)){
var c__17376__auto___30603 = cljs.core.chunk_first.call(null,seq__30583_30602__$1);
var G__30604 = cljs.core.chunk_rest.call(null,seq__30583_30602__$1);
var G__30605 = c__17376__auto___30603;
var G__30606 = cljs.core.count.call(null,c__17376__auto___30603);
var G__30607 = (0);
seq__30583_30589 = G__30604;
chunk__30584_30590 = G__30605;
count__30585_30591 = G__30606;
i__30586_30592 = G__30607;
continue;
} else {
var vec__30588_30608 = cljs.core.first.call(null,seq__30583_30602__$1);
var k_30609 = cljs.core.nth.call(null,vec__30588_30608,(0),null);
var v_30610 = cljs.core.nth.call(null,vec__30588_30608,(1),null);
var m30582_30611 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30582_30611,k_30609,f.call(null,v_30610)));

var G__30612 = cljs.core.next.call(null,seq__30583_30602__$1);
var G__30613 = null;
var G__30614 = (0);
var G__30615 = (0);
seq__30583_30589 = G__30612;
chunk__30584_30590 = G__30613;
count__30585_30591 = G__30614;
i__30586_30592 = G__30615;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__22157__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__22157__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__30624_30630 = cljs.core.seq.call(null,m);
var chunk__30625_30631 = null;
var count__30626_30632 = (0);
var i__30627_30633 = (0);
while(true){
if((i__30627_30633 < count__30626_30632)){
var vec__30628_30634 = cljs.core._nth.call(null,chunk__30625_30631,i__30627_30633);
var k_30635 = cljs.core.nth.call(null,vec__30628_30634,(0),null);
var v_30636 = cljs.core.nth.call(null,vec__30628_30634,(1),null);
var m30623_30637 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30623_30637,f.call(null,k_30635),v_30636));

var G__30638 = seq__30624_30630;
var G__30639 = chunk__30625_30631;
var G__30640 = count__30626_30632;
var G__30641 = (i__30627_30633 + (1));
seq__30624_30630 = G__30638;
chunk__30625_30631 = G__30639;
count__30626_30632 = G__30640;
i__30627_30633 = G__30641;
continue;
} else {
var temp__4126__auto___30642 = cljs.core.seq.call(null,seq__30624_30630);
if(temp__4126__auto___30642){
var seq__30624_30643__$1 = temp__4126__auto___30642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30624_30643__$1)){
var c__17376__auto___30644 = cljs.core.chunk_first.call(null,seq__30624_30643__$1);
var G__30645 = cljs.core.chunk_rest.call(null,seq__30624_30643__$1);
var G__30646 = c__17376__auto___30644;
var G__30647 = cljs.core.count.call(null,c__17376__auto___30644);
var G__30648 = (0);
seq__30624_30630 = G__30645;
chunk__30625_30631 = G__30646;
count__30626_30632 = G__30647;
i__30627_30633 = G__30648;
continue;
} else {
var vec__30629_30649 = cljs.core.first.call(null,seq__30624_30643__$1);
var k_30650 = cljs.core.nth.call(null,vec__30629_30649,(0),null);
var v_30651 = cljs.core.nth.call(null,vec__30629_30649,(1),null);
var m30623_30652 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30623_30652,f.call(null,k_30650),v_30651));

var G__30653 = cljs.core.next.call(null,seq__30624_30643__$1);
var G__30654 = null;
var G__30655 = (0);
var G__30656 = (0);
seq__30624_30630 = G__30653;
chunk__30625_30631 = G__30654;
count__30626_30632 = G__30655;
i__30627_30633 = G__30656;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__22157__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__22157__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__30663_30667 = cljs.core.seq.call(null,ks);
var chunk__30664_30668 = null;
var count__30665_30669 = (0);
var i__30666_30670 = (0);
while(true){
if((i__30666_30670 < count__30665_30669)){
var k_30671 = cljs.core._nth.call(null,chunk__30664_30668,i__30666_30670);
var m30662_30672 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30662_30672,k_30671,f.call(null,k_30671)));

var G__30673 = seq__30663_30667;
var G__30674 = chunk__30664_30668;
var G__30675 = count__30665_30669;
var G__30676 = (i__30666_30670 + (1));
seq__30663_30667 = G__30673;
chunk__30664_30668 = G__30674;
count__30665_30669 = G__30675;
i__30666_30670 = G__30676;
continue;
} else {
var temp__4126__auto___30677 = cljs.core.seq.call(null,seq__30663_30667);
if(temp__4126__auto___30677){
var seq__30663_30678__$1 = temp__4126__auto___30677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30663_30678__$1)){
var c__17376__auto___30679 = cljs.core.chunk_first.call(null,seq__30663_30678__$1);
var G__30680 = cljs.core.chunk_rest.call(null,seq__30663_30678__$1);
var G__30681 = c__17376__auto___30679;
var G__30682 = cljs.core.count.call(null,c__17376__auto___30679);
var G__30683 = (0);
seq__30663_30667 = G__30680;
chunk__30664_30668 = G__30681;
count__30665_30669 = G__30682;
i__30666_30670 = G__30683;
continue;
} else {
var k_30684 = cljs.core.first.call(null,seq__30663_30678__$1);
var m30662_30685 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30662_30685,k_30684,f.call(null,k_30684)));

var G__30686 = cljs.core.next.call(null,seq__30663_30678__$1);
var G__30687 = null;
var G__30688 = (0);
var G__30689 = (0);
seq__30663_30667 = G__30686;
chunk__30664_30668 = G__30687;
count__30665_30669 = G__30688;
i__30666_30670 = G__30689;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__22157__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__22157__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__30696_30700 = cljs.core.seq.call(null,vs);
var chunk__30697_30701 = null;
var count__30698_30702 = (0);
var i__30699_30703 = (0);
while(true){
if((i__30699_30703 < count__30698_30702)){
var v_30704 = cljs.core._nth.call(null,chunk__30697_30701,i__30699_30703);
var m30695_30705 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30695_30705,f.call(null,v_30704),v_30704));

var G__30706 = seq__30696_30700;
var G__30707 = chunk__30697_30701;
var G__30708 = count__30698_30702;
var G__30709 = (i__30699_30703 + (1));
seq__30696_30700 = G__30706;
chunk__30697_30701 = G__30707;
count__30698_30702 = G__30708;
i__30699_30703 = G__30709;
continue;
} else {
var temp__4126__auto___30710 = cljs.core.seq.call(null,seq__30696_30700);
if(temp__4126__auto___30710){
var seq__30696_30711__$1 = temp__4126__auto___30710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30696_30711__$1)){
var c__17376__auto___30712 = cljs.core.chunk_first.call(null,seq__30696_30711__$1);
var G__30713 = cljs.core.chunk_rest.call(null,seq__30696_30711__$1);
var G__30714 = c__17376__auto___30712;
var G__30715 = cljs.core.count.call(null,c__17376__auto___30712);
var G__30716 = (0);
seq__30696_30700 = G__30713;
chunk__30697_30701 = G__30714;
count__30698_30702 = G__30715;
i__30699_30703 = G__30716;
continue;
} else {
var v_30717 = cljs.core.first.call(null,seq__30696_30711__$1);
var m30695_30718 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30695_30718,f.call(null,v_30717),v_30717));

var G__30719 = cljs.core.next.call(null,seq__30696_30711__$1);
var G__30720 = null;
var G__30721 = (0);
var G__30722 = (0);
seq__30696_30700 = G__30719;
chunk__30697_30701 = G__30720;
count__30698_30702 = G__30721;
i__30699_30703 = G__30722;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__22157__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__30723){
var vec__30725 = p__30723;
var k = cljs.core.nth.call(null,vec__30725,(0),null);
var ks = cljs.core.nthnext.call(null,vec__30725,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__16579__auto__ = ks;
if(and__16579__auto__){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__16579__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__22157__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__30734_30740 = cljs.core.seq.call(null,x);
var chunk__30735_30741 = null;
var count__30736_30742 = (0);
var i__30737_30743 = (0);
while(true){
if((i__30737_30743 < count__30736_30742)){
var vec__30738_30744 = cljs.core._nth.call(null,chunk__30735_30741,i__30737_30743);
var k_30745 = cljs.core.nth.call(null,vec__30738_30744,(0),null);
var v_30746 = cljs.core.nth.call(null,vec__30738_30744,(1),null);
var m30733_30747 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30733_30747,((typeof k_30745 === 'string')?cljs.core.keyword.call(null,k_30745):k_30745),plumbing$core$keywordize_map.call(null,v_30746)));

var G__30748 = seq__30734_30740;
var G__30749 = chunk__30735_30741;
var G__30750 = count__30736_30742;
var G__30751 = (i__30737_30743 + (1));
seq__30734_30740 = G__30748;
chunk__30735_30741 = G__30749;
count__30736_30742 = G__30750;
i__30737_30743 = G__30751;
continue;
} else {
var temp__4126__auto___30752 = cljs.core.seq.call(null,seq__30734_30740);
if(temp__4126__auto___30752){
var seq__30734_30753__$1 = temp__4126__auto___30752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30734_30753__$1)){
var c__17376__auto___30754 = cljs.core.chunk_first.call(null,seq__30734_30753__$1);
var G__30755 = cljs.core.chunk_rest.call(null,seq__30734_30753__$1);
var G__30756 = c__17376__auto___30754;
var G__30757 = cljs.core.count.call(null,c__17376__auto___30754);
var G__30758 = (0);
seq__30734_30740 = G__30755;
chunk__30735_30741 = G__30756;
count__30736_30742 = G__30757;
i__30737_30743 = G__30758;
continue;
} else {
var vec__30739_30759 = cljs.core.first.call(null,seq__30734_30753__$1);
var k_30760 = cljs.core.nth.call(null,vec__30739_30759,(0),null);
var v_30761 = cljs.core.nth.call(null,vec__30739_30759,(1),null);
var m30733_30762 = cljs.core.deref.call(null,m_atom__22157__auto__);
cljs.core.reset_BANG_.call(null,m_atom__22157__auto__,cljs.core.assoc_BANG_.call(null,m30733_30762,((typeof k_30760 === 'string')?cljs.core.keyword.call(null,k_30760):k_30760),plumbing$core$keywordize_map.call(null,v_30761)));

var G__30763 = cljs.core.next.call(null,seq__30734_30753__$1);
var G__30764 = null;
var G__30765 = (0);
var G__30766 = (0);
seq__30734_30740 = G__30763;
chunk__30735_30741 = G__30764;
count__30736_30742 = G__30765;
i__30737_30743 = G__30766;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__22157__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__22238__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__22238__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__30767 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__30768 = cljs.core.next.call(null,ks);
m = G__30767;
ks = G__30768;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 * @param {...*} var_args
 */
plumbing.core.assoc_when = (function() { 
var plumbing$core$assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__16591__auto__ = m;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__17345__auto__ = (function plumbing$core$assoc_when_$_iter__30777(s__30778){
return (new cljs.core.LazySeq(null,(function (){
var s__30778__$1 = s__30778;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30778__$1);
if(temp__4126__auto__){
var s__30778__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30778__$2)){
var c__17343__auto__ = cljs.core.chunk_first.call(null,s__30778__$2);
var size__17344__auto__ = cljs.core.count.call(null,c__17343__auto__);
var b__30780 = cljs.core.chunk_buffer.call(null,size__17344__auto__);
if((function (){var i__30779 = (0);
while(true){
if((i__30779 < size__17344__auto__)){
var vec__30783 = cljs.core._nth.call(null,c__17343__auto__,i__30779);
var k = cljs.core.nth.call(null,vec__30783,(0),null);
var v = cljs.core.nth.call(null,vec__30783,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__30780,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30785 = (i__30779 + (1));
i__30779 = G__30785;
continue;
} else {
var G__30786 = (i__30779 + (1));
i__30779 = G__30786;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30780),plumbing$core$assoc_when_$_iter__30777.call(null,cljs.core.chunk_rest.call(null,s__30778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30780),null);
}
} else {
var vec__30784 = cljs.core.first.call(null,s__30778__$2);
var k = cljs.core.nth.call(null,vec__30784,(0),null);
var v = cljs.core.nth.call(null,vec__30784,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$assoc_when_$_iter__30777.call(null,cljs.core.rest.call(null,s__30778__$2)));
} else {
var G__30787 = cljs.core.rest.call(null,s__30778__$2);
s__30778__$1 = G__30787;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17345__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var plumbing$core$assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__30788__i = 0, G__30788__a = new Array(arguments.length -  1);
while (G__30788__i < G__30788__a.length) {G__30788__a[G__30788__i] = arguments[G__30788__i + 1]; ++G__30788__i;}
  kvs = new cljs.core.IndexedSeq(G__30788__a,0);
} 
return plumbing$core$assoc_when__delegate.call(this,m,kvs);};
plumbing$core$assoc_when.cljs$lang$maxFixedArity = 1;
plumbing$core$assoc_when.cljs$lang$applyTo = (function (arglist__30789){
var m = cljs.core.first(arglist__30789);
var kvs = cljs.core.rest(arglist__30789);
return plumbing$core$assoc_when__delegate(m,kvs);
});
plumbing$core$assoc_when.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$assoc_when__delegate;
return plumbing$core$assoc_when;
})()
;
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 * @param {...*} var_args
 */
plumbing.core.update_in_when = (function() { 
var plumbing$core$update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var plumbing$core$update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__30790__i = 0, G__30790__a = new Array(arguments.length -  3);
while (G__30790__i < G__30790__a.length) {G__30790__a[G__30790__i] = arguments[G__30790__i + 3]; ++G__30790__i;}
  args = new cljs.core.IndexedSeq(G__30790__a,0);
} 
return plumbing$core$update_in_when__delegate.call(this,m,key_seq,f,args);};
plumbing$core$update_in_when.cljs$lang$maxFixedArity = 3;
plumbing$core$update_in_when.cljs$lang$applyTo = (function (arglist__30791){
var m = cljs.core.first(arglist__30791);
arglist__30791 = cljs.core.next(arglist__30791);
var key_seq = cljs.core.first(arglist__30791);
arglist__30791 = cljs.core.next(arglist__30791);
var f = cljs.core.first(arglist__30791);
var args = cljs.core.rest(arglist__30791);
return plumbing$core$update_in_when__delegate(m,key_seq,f,args);
});
plumbing$core$update_in_when.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$update_in_when__delegate;
return plumbing$core$update_in_when;
})()
;
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function() {
var plumbing$core$sum = null;
var plumbing$core$sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var plumbing$core$sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
plumbing$core$sum = function(f,xs){
switch(arguments.length){
case 1:
return plumbing$core$sum__1.call(this,f);
case 2:
return plumbing$core$sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$sum.cljs$core$IFn$_invoke$arity$1 = plumbing$core$sum__1;
plumbing$core$sum.cljs$core$IFn$_invoke$arity$2 = plumbing$core$sum__2;
return plumbing$core$sum;
})()
;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__17345__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__30796(s__30797){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__30797__$1 = s__30797;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30797__$1);
if(temp__4126__auto__){
var s__30797__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30797__$2)){
var c__17343__auto__ = cljs.core.chunk_first.call(null,s__30797__$2);
var size__17344__auto__ = cljs.core.count.call(null,c__17343__auto__);
var b__30799 = cljs.core.chunk_buffer.call(null,size__17344__auto__);
if((function (){var i__30798 = (0);
while(true){
if((i__30798 < size__17344__auto__)){
var x = cljs.core._nth.call(null,c__17343__auto__,i__30798);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__30799,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__30800 = (i__30798 + (1));
i__30798 = G__30800;
continue;
} else {
var G__30801 = (i__30798 + (1));
i__30798 = G__30801;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30799),plumbing$core$distinct_by_$_iter__30796.call(null,cljs.core.chunk_rest.call(null,s__30797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30799),null);
}
} else {
var x = cljs.core.first.call(null,s__30797__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__30796.call(null,cljs.core.rest.call(null,s__30797__$2)));
} else {
var G__30802 = cljs.core.rest.call(null,s__30797__$2);
s__30797__$1 = G__30802;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__17345__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 * @param {...*} var_args
 */
plumbing.core.interleave_all = (function() { 
var plumbing$core$interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$interleave_all_$_helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$interleave_all_$_helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var plumbing$core$interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__30803__i = 0, G__30803__a = new Array(arguments.length -  0);
while (G__30803__i < G__30803__a.length) {G__30803__a[G__30803__i] = arguments[G__30803__i + 0]; ++G__30803__i;}
  colls = new cljs.core.IndexedSeq(G__30803__a,0);
} 
return plumbing$core$interleave_all__delegate.call(this,colls);};
plumbing$core$interleave_all.cljs$lang$maxFixedArity = 0;
plumbing$core$interleave_all.cljs$lang$applyTo = (function (arglist__30804){
var colls = cljs.core.seq(arglist__30804);
return plumbing$core$interleave_all__delegate(colls);
});
plumbing$core$interleave_all.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$interleave_all__delegate;
return plumbing$core$interleave_all;
})()
;
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 * @param {...*} var_args
 */
plumbing.core.conj_when = (function() {
var plumbing$core$conj_when = null;
var plumbing$core$conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var plumbing$core$conj_when__3 = (function() { 
var G__30805__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__30806 = plumbing$core$conj_when.call(null,coll,x);
var G__30807 = cljs.core.first.call(null,xs);
var G__30808 = cljs.core.next.call(null,xs);
coll = G__30806;
x = G__30807;
xs = G__30808;
continue;
} else {
return plumbing$core$conj_when.call(null,coll,x);
}
break;
}
};
var G__30805 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__30809__i = 0, G__30809__a = new Array(arguments.length -  2);
while (G__30809__i < G__30809__a.length) {G__30809__a[G__30809__i] = arguments[G__30809__i + 2]; ++G__30809__i;}
  xs = new cljs.core.IndexedSeq(G__30809__a,0);
} 
return G__30805__delegate.call(this,coll,x,xs);};
G__30805.cljs$lang$maxFixedArity = 2;
G__30805.cljs$lang$applyTo = (function (arglist__30810){
var coll = cljs.core.first(arglist__30810);
arglist__30810 = cljs.core.next(arglist__30810);
var x = cljs.core.first(arglist__30810);
var xs = cljs.core.rest(arglist__30810);
return G__30805__delegate(coll,x,xs);
});
G__30805.cljs$core$IFn$_invoke$arity$variadic = G__30805__delegate;
return G__30805;
})()
;
plumbing$core$conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return plumbing$core$conj_when__2.call(this,coll,x);
default:
var G__30811 = null;
if (arguments.length > 2) {
var G__30812__i = 0, G__30812__a = new Array(arguments.length -  2);
while (G__30812__i < G__30812__a.length) {G__30812__a[G__30812__i] = arguments[G__30812__i + 2]; ++G__30812__i;}
G__30811 = new cljs.core.IndexedSeq(G__30812__a,0);
}
return plumbing$core$conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__30811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$conj_when.cljs$lang$maxFixedArity = 2;
plumbing$core$conj_when.cljs$lang$applyTo = plumbing$core$conj_when__3.cljs$lang$applyTo;
plumbing$core$conj_when.cljs$core$IFn$_invoke$arity$2 = plumbing$core$conj_when__2;
plumbing$core$conj_when.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return plumbing$core$conj_when;
})()
;
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 * @param {...*} var_args
 */
plumbing.core.swap_pair_BANG_ = (function() {
var plumbing$core$swap_pair_BANG_ = null;
var plumbing$core$swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var plumbing$core$swap_pair_BANG___3 = (function() { 
var G__30814__delegate = function (a,f,args){
return plumbing$core$swap_pair_BANG_.call(null,a,(function (p1__30813_SHARP_){
return cljs.core.apply.call(null,f,p1__30813_SHARP_,args);
}));
};
var G__30814 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__30815__i = 0, G__30815__a = new Array(arguments.length -  2);
while (G__30815__i < G__30815__a.length) {G__30815__a[G__30815__i] = arguments[G__30815__i + 2]; ++G__30815__i;}
  args = new cljs.core.IndexedSeq(G__30815__a,0);
} 
return G__30814__delegate.call(this,a,f,args);};
G__30814.cljs$lang$maxFixedArity = 2;
G__30814.cljs$lang$applyTo = (function (arglist__30816){
var a = cljs.core.first(arglist__30816);
arglist__30816 = cljs.core.next(arglist__30816);
var f = cljs.core.first(arglist__30816);
var args = cljs.core.rest(arglist__30816);
return G__30814__delegate(a,f,args);
});
G__30814.cljs$core$IFn$_invoke$arity$variadic = G__30814__delegate;
return G__30814;
})()
;
plumbing$core$swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return plumbing$core$swap_pair_BANG___2.call(this,a,f);
default:
var G__30817 = null;
if (arguments.length > 2) {
var G__30818__i = 0, G__30818__a = new Array(arguments.length -  2);
while (G__30818__i < G__30818__a.length) {G__30818__a[G__30818__i] = arguments[G__30818__i + 2]; ++G__30818__i;}
G__30817 = new cljs.core.IndexedSeq(G__30818__a,0);
}
return plumbing$core$swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__30817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
plumbing$core$swap_pair_BANG_.cljs$lang$applyTo = plumbing$core$swap_pair_BANG___3.cljs$lang$applyTo;
plumbing$core$swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = plumbing$core$swap_pair_BANG___2;
plumbing$core$swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return plumbing$core$swap_pair_BANG_;
})()
;
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 * @param {...*} var_args
 */
plumbing.core.mapply = (function() {
var plumbing$core$mapply = null;
var plumbing$core$mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var plumbing$core$mapply__3 = (function() { 
var G__30819__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__30819 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__30820__i = 0, G__30820__a = new Array(arguments.length -  2);
while (G__30820__i < G__30820__a.length) {G__30820__a[G__30820__i] = arguments[G__30820__i + 2]; ++G__30820__i;}
  args = new cljs.core.IndexedSeq(G__30820__a,0);
} 
return G__30819__delegate.call(this,f,arg,args);};
G__30819.cljs$lang$maxFixedArity = 2;
G__30819.cljs$lang$applyTo = (function (arglist__30821){
var f = cljs.core.first(arglist__30821);
arglist__30821 = cljs.core.next(arglist__30821);
var arg = cljs.core.first(arglist__30821);
var args = cljs.core.rest(arglist__30821);
return G__30819__delegate(f,arg,args);
});
G__30819.cljs$core$IFn$_invoke$arity$variadic = G__30819__delegate;
return G__30819;
})()
;
plumbing$core$mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return plumbing$core$mapply__2.call(this,f,arg);
default:
var G__30822 = null;
if (arguments.length > 2) {
var G__30823__i = 0, G__30823__a = new Array(arguments.length -  2);
while (G__30823__i < G__30823__a.length) {G__30823__a[G__30823__i] = arguments[G__30823__i + 2]; ++G__30823__i;}
G__30822 = new cljs.core.IndexedSeq(G__30823__a,0);
}
return plumbing$core$mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__30822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$mapply.cljs$lang$maxFixedArity = 2;
plumbing$core$mapply.cljs$lang$applyTo = plumbing$core$mapply__3.cljs$lang$applyTo;
plumbing$core$mapply.cljs$core$IFn$_invoke$arity$2 = plumbing$core$mapply__2;
plumbing$core$mapply.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return plumbing$core$mapply;
})()
;

//# sourceMappingURL=core.js.map?rel=1427705347614