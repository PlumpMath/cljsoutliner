// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17638_17650 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17639_17651 = null;
var count__17640_17652 = (0);
var i__17641_17653 = (0);
while(true){
if((i__17641_17653 < count__17640_17652)){
var f_17654 = cljs.core._nth.call(null,chunk__17639_17651,i__17641_17653);
cljs.core.println.call(null,"  ",f_17654);

var G__17655 = seq__17638_17650;
var G__17656 = chunk__17639_17651;
var G__17657 = count__17640_17652;
var G__17658 = (i__17641_17653 + (1));
seq__17638_17650 = G__17655;
chunk__17639_17651 = G__17656;
count__17640_17652 = G__17657;
i__17641_17653 = G__17658;
continue;
} else {
var temp__4126__auto___17659 = cljs.core.seq.call(null,seq__17638_17650);
if(temp__4126__auto___17659){
var seq__17638_17660__$1 = temp__4126__auto___17659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17638_17660__$1)){
var c__17376__auto___17661 = cljs.core.chunk_first.call(null,seq__17638_17660__$1);
var G__17662 = cljs.core.chunk_rest.call(null,seq__17638_17660__$1);
var G__17663 = c__17376__auto___17661;
var G__17664 = cljs.core.count.call(null,c__17376__auto___17661);
var G__17665 = (0);
seq__17638_17650 = G__17662;
chunk__17639_17651 = G__17663;
count__17640_17652 = G__17664;
i__17641_17653 = G__17665;
continue;
} else {
var f_17666 = cljs.core.first.call(null,seq__17638_17660__$1);
cljs.core.println.call(null,"  ",f_17666);

var G__17667 = cljs.core.next.call(null,seq__17638_17660__$1);
var G__17668 = null;
var G__17669 = (0);
var G__17670 = (0);
seq__17638_17650 = G__17667;
chunk__17639_17651 = G__17668;
count__17640_17652 = G__17669;
i__17641_17653 = G__17670;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__16591__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17642 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17643 = null;
var count__17644 = (0);
var i__17645 = (0);
while(true){
if((i__17645 < count__17644)){
var vec__17646 = cljs.core._nth.call(null,chunk__17643,i__17645);
var name = cljs.core.nth.call(null,vec__17646,(0),null);
var map__17647 = cljs.core.nth.call(null,vec__17646,(1),null);
var map__17647__$1 = ((cljs.core.seq_QMARK_.call(null,map__17647))?cljs.core.apply.call(null,cljs.core.hash_map,map__17647):map__17647);
var arglists = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17671 = seq__17642;
var G__17672 = chunk__17643;
var G__17673 = count__17644;
var G__17674 = (i__17645 + (1));
seq__17642 = G__17671;
chunk__17643 = G__17672;
count__17644 = G__17673;
i__17645 = G__17674;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17642);
if(temp__4126__auto__){
var seq__17642__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17642__$1)){
var c__17376__auto__ = cljs.core.chunk_first.call(null,seq__17642__$1);
var G__17675 = cljs.core.chunk_rest.call(null,seq__17642__$1);
var G__17676 = c__17376__auto__;
var G__17677 = cljs.core.count.call(null,c__17376__auto__);
var G__17678 = (0);
seq__17642 = G__17675;
chunk__17643 = G__17676;
count__17644 = G__17677;
i__17645 = G__17678;
continue;
} else {
var vec__17648 = cljs.core.first.call(null,seq__17642__$1);
var name = cljs.core.nth.call(null,vec__17648,(0),null);
var map__17649 = cljs.core.nth.call(null,vec__17648,(1),null);
var map__17649__$1 = ((cljs.core.seq_QMARK_.call(null,map__17649))?cljs.core.apply.call(null,cljs.core.hash_map,map__17649):map__17649);
var arglists = cljs.core.get.call(null,map__17649__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17649__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17679 = cljs.core.next.call(null,seq__17642__$1);
var G__17680 = null;
var G__17681 = (0);
var G__17682 = (0);
seq__17642 = G__17679;
chunk__17643 = G__17680;
count__17644 = G__17681;
i__17645 = G__17682;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1427705289094