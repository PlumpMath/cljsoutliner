// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t31328 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31328 = (function (f,fn_handler,meta31329){
this.f = f;
this.fn_handler = fn_handler;
this.meta31329 = meta31329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31328.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31330){
var self__ = this;
var _31330__$1 = this;
return self__.meta31329;
});

cljs.core.async.t31328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31330,meta31329__$1){
var self__ = this;
var _31330__$1 = this;
return (new cljs.core.async.t31328(self__.f,self__.fn_handler,meta31329__$1));
});

cljs.core.async.t31328.cljs$lang$type = true;

cljs.core.async.t31328.cljs$lang$ctorStr = "cljs.core.async/t31328";

cljs.core.async.t31328.cljs$lang$ctorPrWriter = (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t31328");
});

cljs.core.async.__GT_t31328 = (function cljs$core$async$fn_handler_$___GT_t31328(f__$1,fn_handler__$1,meta31329){
return (new cljs.core.async.t31328(f__$1,fn_handler__$1,meta31329));
});

}

return (new cljs.core.async.t31328(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__31332 = buff;
if(G__31332){
var bit__17265__auto__ = null;
if(cljs.core.truth_((function (){var or__16591__auto__ = bit__17265__auto__;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return G__31332.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31332.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31332);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31332);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31333 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31333);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31333,ret){
return (function (){
return fn1.call(null,val_31333);
});})(val_31333,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17476__auto___31334 = n;
var x_31335 = (0);
while(true){
if((x_31335 < n__17476__auto___31334)){
(a[x_31335] = (0));

var G__31336 = (x_31335 + (1));
x_31335 = G__31336;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31337 = (i + (1));
i = G__31337;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31341 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31341 = (function (flag,alt_flag,meta31342){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31342 = meta31342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31341.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31343){
var self__ = this;
var _31343__$1 = this;
return self__.meta31342;
});})(flag))
;

cljs.core.async.t31341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31343,meta31342__$1){
var self__ = this;
var _31343__$1 = this;
return (new cljs.core.async.t31341(self__.flag,self__.alt_flag,meta31342__$1));
});})(flag))
;

cljs.core.async.t31341.cljs$lang$type = true;

cljs.core.async.t31341.cljs$lang$ctorStr = "cljs.core.async/t31341";

cljs.core.async.t31341.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t31341");
});})(flag))
;

cljs.core.async.__GT_t31341 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t31341(flag__$1,alt_flag__$1,meta31342){
return (new cljs.core.async.t31341(flag__$1,alt_flag__$1,meta31342));
});})(flag))
;

}

return (new cljs.core.async.t31341(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t31347 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31347 = (function (cb,flag,alt_handler,meta31348){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31348 = meta31348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31347.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31349){
var self__ = this;
var _31349__$1 = this;
return self__.meta31348;
});

cljs.core.async.t31347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31349,meta31348__$1){
var self__ = this;
var _31349__$1 = this;
return (new cljs.core.async.t31347(self__.cb,self__.flag,self__.alt_handler,meta31348__$1));
});

cljs.core.async.t31347.cljs$lang$type = true;

cljs.core.async.t31347.cljs$lang$ctorStr = "cljs.core.async/t31347";

cljs.core.async.t31347.cljs$lang$ctorPrWriter = (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t31347");
});

cljs.core.async.__GT_t31347 = (function cljs$core$async$alt_handler_$___GT_t31347(cb__$1,flag__$1,alt_handler__$1,meta31348){
return (new cljs.core.async.t31347(cb__$1,flag__$1,alt_handler__$1,meta31348));
});

}

return (new cljs.core.async.t31347(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31350_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31350_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31351_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31351_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16591__auto__ = wport;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31352 = (i + (1));
i = G__31352;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16591__auto__ = ret;
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16579__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16579__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16579__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__31353){
var map__31355 = p__31353;
var map__31355__$1 = ((cljs.core.seq_QMARK_.call(null,map__31355))?cljs.core.apply.call(null,cljs.core.hash_map,map__31355):map__31355);
var opts = map__31355__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__31353 = null;
if (arguments.length > 1) {
var G__31356__i = 0, G__31356__a = new Array(arguments.length -  1);
while (G__31356__i < G__31356__a.length) {G__31356__a[G__31356__i] = arguments[G__31356__i + 1]; ++G__31356__i;}
  p__31353 = new cljs.core.IndexedSeq(G__31356__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__31353);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__31357){
var ports = cljs.core.first(arglist__31357);
var p__31353 = cljs.core.rest(arglist__31357);
return cljs$core$async$alts_BANG___delegate(ports,p__31353);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__23737__auto___31452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___31452){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___31452){
return (function (state_31428){
var state_val_31429 = (state_31428[(1)]);
if((state_val_31429 === (7))){
var inst_31424 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31430_31453 = state_31428__$1;
(statearr_31430_31453[(2)] = inst_31424);

(statearr_31430_31453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (1))){
var state_31428__$1 = state_31428;
var statearr_31431_31454 = state_31428__$1;
(statearr_31431_31454[(2)] = null);

(statearr_31431_31454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (4))){
var inst_31407 = (state_31428[(7)]);
var inst_31407__$1 = (state_31428[(2)]);
var inst_31408 = (inst_31407__$1 == null);
var state_31428__$1 = (function (){var statearr_31432 = state_31428;
(statearr_31432[(7)] = inst_31407__$1);

return statearr_31432;
})();
if(cljs.core.truth_(inst_31408)){
var statearr_31433_31455 = state_31428__$1;
(statearr_31433_31455[(1)] = (5));

} else {
var statearr_31434_31456 = state_31428__$1;
(statearr_31434_31456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (13))){
var state_31428__$1 = state_31428;
var statearr_31435_31457 = state_31428__$1;
(statearr_31435_31457[(2)] = null);

(statearr_31435_31457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (6))){
var inst_31407 = (state_31428[(7)]);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31428__$1,(11),to,inst_31407);
} else {
if((state_val_31429 === (3))){
var inst_31426 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31428__$1,inst_31426);
} else {
if((state_val_31429 === (12))){
var state_31428__$1 = state_31428;
var statearr_31436_31458 = state_31428__$1;
(statearr_31436_31458[(2)] = null);

(statearr_31436_31458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (2))){
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(4),from);
} else {
if((state_val_31429 === (11))){
var inst_31417 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
if(cljs.core.truth_(inst_31417)){
var statearr_31437_31459 = state_31428__$1;
(statearr_31437_31459[(1)] = (12));

} else {
var statearr_31438_31460 = state_31428__$1;
(statearr_31438_31460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (9))){
var state_31428__$1 = state_31428;
var statearr_31439_31461 = state_31428__$1;
(statearr_31439_31461[(2)] = null);

(statearr_31439_31461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (5))){
var state_31428__$1 = state_31428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31440_31462 = state_31428__$1;
(statearr_31440_31462[(1)] = (8));

} else {
var statearr_31441_31463 = state_31428__$1;
(statearr_31441_31463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (14))){
var inst_31422 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31442_31464 = state_31428__$1;
(statearr_31442_31464[(2)] = inst_31422);

(statearr_31442_31464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (10))){
var inst_31414 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31443_31465 = state_31428__$1;
(statearr_31443_31465[(2)] = inst_31414);

(statearr_31443_31465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (8))){
var inst_31411 = cljs.core.async.close_BANG_.call(null,to);
var state_31428__$1 = state_31428;
var statearr_31444_31466 = state_31428__$1;
(statearr_31444_31466[(2)] = inst_31411);

(statearr_31444_31466[(1)] = (10));


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
});})(c__23737__auto___31452))
;
return ((function (switch__23722__auto__,c__23737__auto___31452){
return (function() {
var cljs$core$async$pipe_$_state_machine__23723__auto__ = null;
var cljs$core$async$pipe_$_state_machine__23723__auto____0 = (function (){
var statearr_31448 = [null,null,null,null,null,null,null,null];
(statearr_31448[(0)] = cljs$core$async$pipe_$_state_machine__23723__auto__);

(statearr_31448[(1)] = (1));

return statearr_31448;
});
var cljs$core$async$pipe_$_state_machine__23723__auto____1 = (function (state_31428){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_31428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e31449){if((e31449 instanceof Object)){
var ex__23726__auto__ = e31449;
var statearr_31450_31467 = state_31428;
(statearr_31450_31467[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31468 = state_31428;
state_31428 = G__31468;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__23723__auto__ = function(state_31428){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__23723__auto____1.call(this,state_31428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__23723__auto____0;
cljs$core$async$pipe_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__23723__auto____1;
return cljs$core$async$pipe_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___31452))
})();
var state__23739__auto__ = (function (){var statearr_31451 = f__23738__auto__.call(null);
(statearr_31451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___31452);

return statearr_31451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___31452))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31652){
var vec__31653 = p__31652;
var v = cljs.core.nth.call(null,vec__31653,(0),null);
var p = cljs.core.nth.call(null,vec__31653,(1),null);
var job = vec__31653;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23737__auto___31835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___31835,res,vec__31653,v,p,job,jobs,results){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___31835,res,vec__31653,v,p,job,jobs,results){
return (function (state_31658){
var state_val_31659 = (state_31658[(1)]);
if((state_val_31659 === (2))){
var inst_31655 = (state_31658[(2)]);
var inst_31656 = cljs.core.async.close_BANG_.call(null,res);
var state_31658__$1 = (function (){var statearr_31660 = state_31658;
(statearr_31660[(7)] = inst_31655);

return statearr_31660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31658__$1,inst_31656);
} else {
if((state_val_31659 === (1))){
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31658__$1,(2),res,v);
} else {
return null;
}
}
});})(c__23737__auto___31835,res,vec__31653,v,p,job,jobs,results))
;
return ((function (switch__23722__auto__,c__23737__auto___31835,res,vec__31653,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0 = (function (){
var statearr_31664 = [null,null,null,null,null,null,null,null];
(statearr_31664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__);

(statearr_31664[(1)] = (1));

return statearr_31664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1 = (function (state_31658){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_31658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e31665){if((e31665 instanceof Object)){
var ex__23726__auto__ = e31665;
var statearr_31666_31836 = state_31658;
(statearr_31666_31836[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31837 = state_31658;
state_31658 = G__31837;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___31835,res,vec__31653,v,p,job,jobs,results))
})();
var state__23739__auto__ = (function (){var statearr_31667 = f__23738__auto__.call(null);
(statearr_31667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___31835);

return statearr_31667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___31835,res,vec__31653,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31668){
var vec__31669 = p__31668;
var v = cljs.core.nth.call(null,vec__31669,(0),null);
var p = cljs.core.nth.call(null,vec__31669,(1),null);
var job = vec__31669;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17476__auto___31838 = n;
var __31839 = (0);
while(true){
if((__31839 < n__17476__auto___31838)){
var G__31670_31840 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31670_31840) {
case "async":
var c__23737__auto___31842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31839,c__23737__auto___31842,G__31670_31840,n__17476__auto___31838,jobs,results,process,async){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (__31839,c__23737__auto___31842,G__31670_31840,n__17476__auto___31838,jobs,results,process,async){
return (function (state_31683){
var state_val_31684 = (state_31683[(1)]);
if((state_val_31684 === (7))){
var inst_31679 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31685_31843 = state_31683__$1;
(statearr_31685_31843[(2)] = inst_31679);

(statearr_31685_31843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (6))){
var state_31683__$1 = state_31683;
var statearr_31686_31844 = state_31683__$1;
(statearr_31686_31844[(2)] = null);

(statearr_31686_31844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (5))){
var state_31683__$1 = state_31683;
var statearr_31687_31845 = state_31683__$1;
(statearr_31687_31845[(2)] = null);

(statearr_31687_31845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (4))){
var inst_31673 = (state_31683[(2)]);
var inst_31674 = async.call(null,inst_31673);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31674)){
var statearr_31688_31846 = state_31683__$1;
(statearr_31688_31846[(1)] = (5));

} else {
var statearr_31689_31847 = state_31683__$1;
(statearr_31689_31847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (3))){
var inst_31681 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31683__$1,inst_31681);
} else {
if((state_val_31684 === (2))){
var state_31683__$1 = state_31683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31683__$1,(4),jobs);
} else {
if((state_val_31684 === (1))){
var state_31683__$1 = state_31683;
var statearr_31690_31848 = state_31683__$1;
(statearr_31690_31848[(2)] = null);

(statearr_31690_31848[(1)] = (2));


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
});})(__31839,c__23737__auto___31842,G__31670_31840,n__17476__auto___31838,jobs,results,process,async))
;
return ((function (__31839,switch__23722__auto__,c__23737__auto___31842,G__31670_31840,n__17476__auto___31838,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0 = (function (){
var statearr_31694 = [null,null,null,null,null,null,null];
(statearr_31694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__);

(statearr_31694[(1)] = (1));

return statearr_31694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1 = (function (state_31683){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_31683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e31695){if((e31695 instanceof Object)){
var ex__23726__auto__ = e31695;
var statearr_31696_31849 = state_31683;
(statearr_31696_31849[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31850 = state_31683;
state_31683 = G__31850;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = function(state_31683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1.call(this,state_31683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__;
})()
;})(__31839,switch__23722__auto__,c__23737__auto___31842,G__31670_31840,n__17476__auto___31838,jobs,results,process,async))
})();
var state__23739__auto__ = (function (){var statearr_31697 = f__23738__auto__.call(null);
(statearr_31697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___31842);

return statearr_31697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(__31839,c__23737__auto___31842,G__31670_31840,n__17476__auto___31838,jobs,results,process,async))
);


break;
case "compute":
var c__23737__auto___31851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31839,c__23737__auto___31851,G__31670_31840,n__17476__auto___31838,jobs,results,process,async){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (__31839,c__23737__auto___31851,G__31670_31840,n__17476__auto___31838,jobs,results,process,async){
return (function (state_31710){
var state_val_31711 = (state_31710[(1)]);
if((state_val_31711 === (7))){
var inst_31706 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31712_31852 = state_31710__$1;
(statearr_31712_31852[(2)] = inst_31706);

(statearr_31712_31852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (6))){
var state_31710__$1 = state_31710;
var statearr_31713_31853 = state_31710__$1;
(statearr_31713_31853[(2)] = null);

(statearr_31713_31853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (5))){
var state_31710__$1 = state_31710;
var statearr_31714_31854 = state_31710__$1;
(statearr_31714_31854[(2)] = null);

(statearr_31714_31854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (4))){
var inst_31700 = (state_31710[(2)]);
var inst_31701 = process.call(null,inst_31700);
var state_31710__$1 = state_31710;
if(cljs.core.truth_(inst_31701)){
var statearr_31715_31855 = state_31710__$1;
(statearr_31715_31855[(1)] = (5));

} else {
var statearr_31716_31856 = state_31710__$1;
(statearr_31716_31856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (3))){
var inst_31708 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31710__$1,inst_31708);
} else {
if((state_val_31711 === (2))){
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31710__$1,(4),jobs);
} else {
if((state_val_31711 === (1))){
var state_31710__$1 = state_31710;
var statearr_31717_31857 = state_31710__$1;
(statearr_31717_31857[(2)] = null);

(statearr_31717_31857[(1)] = (2));


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
});})(__31839,c__23737__auto___31851,G__31670_31840,n__17476__auto___31838,jobs,results,process,async))
;
return ((function (__31839,switch__23722__auto__,c__23737__auto___31851,G__31670_31840,n__17476__auto___31838,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0 = (function (){
var statearr_31721 = [null,null,null,null,null,null,null];
(statearr_31721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__);

(statearr_31721[(1)] = (1));

return statearr_31721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1 = (function (state_31710){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_31710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e31722){if((e31722 instanceof Object)){
var ex__23726__auto__ = e31722;
var statearr_31723_31858 = state_31710;
(statearr_31723_31858[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31859 = state_31710;
state_31710 = G__31859;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = function(state_31710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1.call(this,state_31710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__;
})()
;})(__31839,switch__23722__auto__,c__23737__auto___31851,G__31670_31840,n__17476__auto___31838,jobs,results,process,async))
})();
var state__23739__auto__ = (function (){var statearr_31724 = f__23738__auto__.call(null);
(statearr_31724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___31851);

return statearr_31724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(__31839,c__23737__auto___31851,G__31670_31840,n__17476__auto___31838,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31860 = (__31839 + (1));
__31839 = G__31860;
continue;
} else {
}
break;
}

var c__23737__auto___31861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___31861,jobs,results,process,async){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___31861,jobs,results,process,async){
return (function (state_31746){
var state_val_31747 = (state_31746[(1)]);
if((state_val_31747 === (9))){
var inst_31739 = (state_31746[(2)]);
var state_31746__$1 = (function (){var statearr_31748 = state_31746;
(statearr_31748[(7)] = inst_31739);

return statearr_31748;
})();
var statearr_31749_31862 = state_31746__$1;
(statearr_31749_31862[(2)] = null);

(statearr_31749_31862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (8))){
var inst_31732 = (state_31746[(8)]);
var inst_31737 = (state_31746[(2)]);
var state_31746__$1 = (function (){var statearr_31750 = state_31746;
(statearr_31750[(9)] = inst_31737);

return statearr_31750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31746__$1,(9),results,inst_31732);
} else {
if((state_val_31747 === (7))){
var inst_31742 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31751_31863 = state_31746__$1;
(statearr_31751_31863[(2)] = inst_31742);

(statearr_31751_31863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (6))){
var inst_31732 = (state_31746[(8)]);
var inst_31727 = (state_31746[(10)]);
var inst_31732__$1 = cljs.core.async.chan.call(null,(1));
var inst_31733 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31734 = [inst_31727,inst_31732__$1];
var inst_31735 = (new cljs.core.PersistentVector(null,2,(5),inst_31733,inst_31734,null));
var state_31746__$1 = (function (){var statearr_31752 = state_31746;
(statearr_31752[(8)] = inst_31732__$1);

return statearr_31752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31746__$1,(8),jobs,inst_31735);
} else {
if((state_val_31747 === (5))){
var inst_31730 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31746__$1 = state_31746;
var statearr_31753_31864 = state_31746__$1;
(statearr_31753_31864[(2)] = inst_31730);

(statearr_31753_31864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (4))){
var inst_31727 = (state_31746[(10)]);
var inst_31727__$1 = (state_31746[(2)]);
var inst_31728 = (inst_31727__$1 == null);
var state_31746__$1 = (function (){var statearr_31754 = state_31746;
(statearr_31754[(10)] = inst_31727__$1);

return statearr_31754;
})();
if(cljs.core.truth_(inst_31728)){
var statearr_31755_31865 = state_31746__$1;
(statearr_31755_31865[(1)] = (5));

} else {
var statearr_31756_31866 = state_31746__$1;
(statearr_31756_31866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (3))){
var inst_31744 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31746__$1,inst_31744);
} else {
if((state_val_31747 === (2))){
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31746__$1,(4),from);
} else {
if((state_val_31747 === (1))){
var state_31746__$1 = state_31746;
var statearr_31757_31867 = state_31746__$1;
(statearr_31757_31867[(2)] = null);

(statearr_31757_31867[(1)] = (2));


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
});})(c__23737__auto___31861,jobs,results,process,async))
;
return ((function (switch__23722__auto__,c__23737__auto___31861,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0 = (function (){
var statearr_31761 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__);

(statearr_31761[(1)] = (1));

return statearr_31761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1 = (function (state_31746){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_31746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e31762){if((e31762 instanceof Object)){
var ex__23726__auto__ = e31762;
var statearr_31763_31868 = state_31746;
(statearr_31763_31868[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31869 = state_31746;
state_31746 = G__31869;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = function(state_31746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1.call(this,state_31746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___31861,jobs,results,process,async))
})();
var state__23739__auto__ = (function (){var statearr_31764 = f__23738__auto__.call(null);
(statearr_31764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___31861);

return statearr_31764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___31861,jobs,results,process,async))
);


var c__23737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto__,jobs,results,process,async){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto__,jobs,results,process,async){
return (function (state_31802){
var state_val_31803 = (state_31802[(1)]);
if((state_val_31803 === (7))){
var inst_31798 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
var statearr_31804_31870 = state_31802__$1;
(statearr_31804_31870[(2)] = inst_31798);

(statearr_31804_31870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (20))){
var state_31802__$1 = state_31802;
var statearr_31805_31871 = state_31802__$1;
(statearr_31805_31871[(2)] = null);

(statearr_31805_31871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (1))){
var state_31802__$1 = state_31802;
var statearr_31806_31872 = state_31802__$1;
(statearr_31806_31872[(2)] = null);

(statearr_31806_31872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (4))){
var inst_31767 = (state_31802[(7)]);
var inst_31767__$1 = (state_31802[(2)]);
var inst_31768 = (inst_31767__$1 == null);
var state_31802__$1 = (function (){var statearr_31807 = state_31802;
(statearr_31807[(7)] = inst_31767__$1);

return statearr_31807;
})();
if(cljs.core.truth_(inst_31768)){
var statearr_31808_31873 = state_31802__$1;
(statearr_31808_31873[(1)] = (5));

} else {
var statearr_31809_31874 = state_31802__$1;
(statearr_31809_31874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (15))){
var inst_31780 = (state_31802[(8)]);
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31802__$1,(18),to,inst_31780);
} else {
if((state_val_31803 === (21))){
var inst_31793 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
var statearr_31810_31875 = state_31802__$1;
(statearr_31810_31875[(2)] = inst_31793);

(statearr_31810_31875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (13))){
var inst_31795 = (state_31802[(2)]);
var state_31802__$1 = (function (){var statearr_31811 = state_31802;
(statearr_31811[(9)] = inst_31795);

return statearr_31811;
})();
var statearr_31812_31876 = state_31802__$1;
(statearr_31812_31876[(2)] = null);

(statearr_31812_31876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (6))){
var inst_31767 = (state_31802[(7)]);
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31802__$1,(11),inst_31767);
} else {
if((state_val_31803 === (17))){
var inst_31788 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
if(cljs.core.truth_(inst_31788)){
var statearr_31813_31877 = state_31802__$1;
(statearr_31813_31877[(1)] = (19));

} else {
var statearr_31814_31878 = state_31802__$1;
(statearr_31814_31878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (3))){
var inst_31800 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31802__$1,inst_31800);
} else {
if((state_val_31803 === (12))){
var inst_31777 = (state_31802[(10)]);
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31802__$1,(14),inst_31777);
} else {
if((state_val_31803 === (2))){
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31802__$1,(4),results);
} else {
if((state_val_31803 === (19))){
var state_31802__$1 = state_31802;
var statearr_31815_31879 = state_31802__$1;
(statearr_31815_31879[(2)] = null);

(statearr_31815_31879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (11))){
var inst_31777 = (state_31802[(2)]);
var state_31802__$1 = (function (){var statearr_31816 = state_31802;
(statearr_31816[(10)] = inst_31777);

return statearr_31816;
})();
var statearr_31817_31880 = state_31802__$1;
(statearr_31817_31880[(2)] = null);

(statearr_31817_31880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (9))){
var state_31802__$1 = state_31802;
var statearr_31818_31881 = state_31802__$1;
(statearr_31818_31881[(2)] = null);

(statearr_31818_31881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (5))){
var state_31802__$1 = state_31802;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31819_31882 = state_31802__$1;
(statearr_31819_31882[(1)] = (8));

} else {
var statearr_31820_31883 = state_31802__$1;
(statearr_31820_31883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (14))){
var inst_31782 = (state_31802[(11)]);
var inst_31780 = (state_31802[(8)]);
var inst_31780__$1 = (state_31802[(2)]);
var inst_31781 = (inst_31780__$1 == null);
var inst_31782__$1 = cljs.core.not.call(null,inst_31781);
var state_31802__$1 = (function (){var statearr_31821 = state_31802;
(statearr_31821[(11)] = inst_31782__$1);

(statearr_31821[(8)] = inst_31780__$1);

return statearr_31821;
})();
if(inst_31782__$1){
var statearr_31822_31884 = state_31802__$1;
(statearr_31822_31884[(1)] = (15));

} else {
var statearr_31823_31885 = state_31802__$1;
(statearr_31823_31885[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (16))){
var inst_31782 = (state_31802[(11)]);
var state_31802__$1 = state_31802;
var statearr_31824_31886 = state_31802__$1;
(statearr_31824_31886[(2)] = inst_31782);

(statearr_31824_31886[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (10))){
var inst_31774 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
var statearr_31825_31887 = state_31802__$1;
(statearr_31825_31887[(2)] = inst_31774);

(statearr_31825_31887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (18))){
var inst_31785 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
var statearr_31826_31888 = state_31802__$1;
(statearr_31826_31888[(2)] = inst_31785);

(statearr_31826_31888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (8))){
var inst_31771 = cljs.core.async.close_BANG_.call(null,to);
var state_31802__$1 = state_31802;
var statearr_31827_31889 = state_31802__$1;
(statearr_31827_31889[(2)] = inst_31771);

(statearr_31827_31889[(1)] = (10));


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
});})(c__23737__auto__,jobs,results,process,async))
;
return ((function (switch__23722__auto__,c__23737__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0 = (function (){
var statearr_31831 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__);

(statearr_31831[(1)] = (1));

return statearr_31831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1 = (function (state_31802){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_31802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e31832){if((e31832 instanceof Object)){
var ex__23726__auto__ = e31832;
var statearr_31833_31890 = state_31802;
(statearr_31833_31890[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31891 = state_31802;
state_31802 = G__31891;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__ = function(state_31802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1.call(this,state_31802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto__,jobs,results,process,async))
})();
var state__23739__auto__ = (function (){var statearr_31834 = f__23738__auto__.call(null);
(statearr_31834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto__);

return statearr_31834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto__,jobs,results,process,async))
);

return c__23737__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23737__auto___31992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___31992,tc,fc){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___31992,tc,fc){
return (function (state_31967){
var state_val_31968 = (state_31967[(1)]);
if((state_val_31968 === (7))){
var inst_31963 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
var statearr_31969_31993 = state_31967__$1;
(statearr_31969_31993[(2)] = inst_31963);

(statearr_31969_31993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (1))){
var state_31967__$1 = state_31967;
var statearr_31970_31994 = state_31967__$1;
(statearr_31970_31994[(2)] = null);

(statearr_31970_31994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (4))){
var inst_31944 = (state_31967[(7)]);
var inst_31944__$1 = (state_31967[(2)]);
var inst_31945 = (inst_31944__$1 == null);
var state_31967__$1 = (function (){var statearr_31971 = state_31967;
(statearr_31971[(7)] = inst_31944__$1);

return statearr_31971;
})();
if(cljs.core.truth_(inst_31945)){
var statearr_31972_31995 = state_31967__$1;
(statearr_31972_31995[(1)] = (5));

} else {
var statearr_31973_31996 = state_31967__$1;
(statearr_31973_31996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (13))){
var state_31967__$1 = state_31967;
var statearr_31974_31997 = state_31967__$1;
(statearr_31974_31997[(2)] = null);

(statearr_31974_31997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (6))){
var inst_31944 = (state_31967[(7)]);
var inst_31950 = p.call(null,inst_31944);
var state_31967__$1 = state_31967;
if(cljs.core.truth_(inst_31950)){
var statearr_31975_31998 = state_31967__$1;
(statearr_31975_31998[(1)] = (9));

} else {
var statearr_31976_31999 = state_31967__$1;
(statearr_31976_31999[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (3))){
var inst_31965 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31967__$1,inst_31965);
} else {
if((state_val_31968 === (12))){
var state_31967__$1 = state_31967;
var statearr_31977_32000 = state_31967__$1;
(statearr_31977_32000[(2)] = null);

(statearr_31977_32000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (2))){
var state_31967__$1 = state_31967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31967__$1,(4),ch);
} else {
if((state_val_31968 === (11))){
var inst_31944 = (state_31967[(7)]);
var inst_31954 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31967__$1,(8),inst_31954,inst_31944);
} else {
if((state_val_31968 === (9))){
var state_31967__$1 = state_31967;
var statearr_31978_32001 = state_31967__$1;
(statearr_31978_32001[(2)] = tc);

(statearr_31978_32001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (5))){
var inst_31947 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31948 = cljs.core.async.close_BANG_.call(null,fc);
var state_31967__$1 = (function (){var statearr_31979 = state_31967;
(statearr_31979[(8)] = inst_31947);

return statearr_31979;
})();
var statearr_31980_32002 = state_31967__$1;
(statearr_31980_32002[(2)] = inst_31948);

(statearr_31980_32002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (14))){
var inst_31961 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
var statearr_31981_32003 = state_31967__$1;
(statearr_31981_32003[(2)] = inst_31961);

(statearr_31981_32003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (10))){
var state_31967__$1 = state_31967;
var statearr_31982_32004 = state_31967__$1;
(statearr_31982_32004[(2)] = fc);

(statearr_31982_32004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (8))){
var inst_31956 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
if(cljs.core.truth_(inst_31956)){
var statearr_31983_32005 = state_31967__$1;
(statearr_31983_32005[(1)] = (12));

} else {
var statearr_31984_32006 = state_31967__$1;
(statearr_31984_32006[(1)] = (13));

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
});})(c__23737__auto___31992,tc,fc))
;
return ((function (switch__23722__auto__,c__23737__auto___31992,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__23723__auto__ = null;
var cljs$core$async$split_$_state_machine__23723__auto____0 = (function (){
var statearr_31988 = [null,null,null,null,null,null,null,null,null];
(statearr_31988[(0)] = cljs$core$async$split_$_state_machine__23723__auto__);

(statearr_31988[(1)] = (1));

return statearr_31988;
});
var cljs$core$async$split_$_state_machine__23723__auto____1 = (function (state_31967){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_31967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e31989){if((e31989 instanceof Object)){
var ex__23726__auto__ = e31989;
var statearr_31990_32007 = state_31967;
(statearr_31990_32007[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32008 = state_31967;
state_31967 = G__32008;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__23723__auto__ = function(state_31967){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__23723__auto____1.call(this,state_31967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__23723__auto____0;
cljs$core$async$split_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__23723__auto____1;
return cljs$core$async$split_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___31992,tc,fc))
})();
var state__23739__auto__ = (function (){var statearr_31991 = f__23738__auto__.call(null);
(statearr_31991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___31992);

return statearr_31991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___31992,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto__){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto__){
return (function (state_32055){
var state_val_32056 = (state_32055[(1)]);
if((state_val_32056 === (7))){
var inst_32051 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32057_32073 = state_32055__$1;
(statearr_32057_32073[(2)] = inst_32051);

(statearr_32057_32073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (6))){
var inst_32044 = (state_32055[(7)]);
var inst_32041 = (state_32055[(8)]);
var inst_32048 = f.call(null,inst_32041,inst_32044);
var inst_32041__$1 = inst_32048;
var state_32055__$1 = (function (){var statearr_32058 = state_32055;
(statearr_32058[(8)] = inst_32041__$1);

return statearr_32058;
})();
var statearr_32059_32074 = state_32055__$1;
(statearr_32059_32074[(2)] = null);

(statearr_32059_32074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (5))){
var inst_32041 = (state_32055[(8)]);
var state_32055__$1 = state_32055;
var statearr_32060_32075 = state_32055__$1;
(statearr_32060_32075[(2)] = inst_32041);

(statearr_32060_32075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (4))){
var inst_32044 = (state_32055[(7)]);
var inst_32044__$1 = (state_32055[(2)]);
var inst_32045 = (inst_32044__$1 == null);
var state_32055__$1 = (function (){var statearr_32061 = state_32055;
(statearr_32061[(7)] = inst_32044__$1);

return statearr_32061;
})();
if(cljs.core.truth_(inst_32045)){
var statearr_32062_32076 = state_32055__$1;
(statearr_32062_32076[(1)] = (5));

} else {
var statearr_32063_32077 = state_32055__$1;
(statearr_32063_32077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (3))){
var inst_32053 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32055__$1,inst_32053);
} else {
if((state_val_32056 === (2))){
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32055__$1,(4),ch);
} else {
if((state_val_32056 === (1))){
var inst_32041 = init;
var state_32055__$1 = (function (){var statearr_32064 = state_32055;
(statearr_32064[(8)] = inst_32041);

return statearr_32064;
})();
var statearr_32065_32078 = state_32055__$1;
(statearr_32065_32078[(2)] = null);

(statearr_32065_32078[(1)] = (2));


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
});})(c__23737__auto__))
;
return ((function (switch__23722__auto__,c__23737__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23723__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23723__auto____0 = (function (){
var statearr_32069 = [null,null,null,null,null,null,null,null,null];
(statearr_32069[(0)] = cljs$core$async$reduce_$_state_machine__23723__auto__);

(statearr_32069[(1)] = (1));

return statearr_32069;
});
var cljs$core$async$reduce_$_state_machine__23723__auto____1 = (function (state_32055){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_32055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e32070){if((e32070 instanceof Object)){
var ex__23726__auto__ = e32070;
var statearr_32071_32079 = state_32055;
(statearr_32071_32079[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32080 = state_32055;
state_32055 = G__32080;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23723__auto__ = function(state_32055){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23723__auto____1.call(this,state_32055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23723__auto____0;
cljs$core$async$reduce_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23723__auto____1;
return cljs$core$async$reduce_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto__))
})();
var state__23739__auto__ = (function (){var statearr_32072 = f__23738__auto__.call(null);
(statearr_32072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto__);

return statearr_32072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto__))
);

return c__23737__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__23737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto__){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto__){
return (function (state_32154){
var state_val_32155 = (state_32154[(1)]);
if((state_val_32155 === (7))){
var inst_32136 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32156_32179 = state_32154__$1;
(statearr_32156_32179[(2)] = inst_32136);

(statearr_32156_32179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (1))){
var inst_32130 = cljs.core.seq.call(null,coll);
var inst_32131 = inst_32130;
var state_32154__$1 = (function (){var statearr_32157 = state_32154;
(statearr_32157[(7)] = inst_32131);

return statearr_32157;
})();
var statearr_32158_32180 = state_32154__$1;
(statearr_32158_32180[(2)] = null);

(statearr_32158_32180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (4))){
var inst_32131 = (state_32154[(7)]);
var inst_32134 = cljs.core.first.call(null,inst_32131);
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32154__$1,(7),ch,inst_32134);
} else {
if((state_val_32155 === (13))){
var inst_32148 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32159_32181 = state_32154__$1;
(statearr_32159_32181[(2)] = inst_32148);

(statearr_32159_32181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (6))){
var inst_32139 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
if(cljs.core.truth_(inst_32139)){
var statearr_32160_32182 = state_32154__$1;
(statearr_32160_32182[(1)] = (8));

} else {
var statearr_32161_32183 = state_32154__$1;
(statearr_32161_32183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (3))){
var inst_32152 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32154__$1,inst_32152);
} else {
if((state_val_32155 === (12))){
var state_32154__$1 = state_32154;
var statearr_32162_32184 = state_32154__$1;
(statearr_32162_32184[(2)] = null);

(statearr_32162_32184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (2))){
var inst_32131 = (state_32154[(7)]);
var state_32154__$1 = state_32154;
if(cljs.core.truth_(inst_32131)){
var statearr_32163_32185 = state_32154__$1;
(statearr_32163_32185[(1)] = (4));

} else {
var statearr_32164_32186 = state_32154__$1;
(statearr_32164_32186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (11))){
var inst_32145 = cljs.core.async.close_BANG_.call(null,ch);
var state_32154__$1 = state_32154;
var statearr_32165_32187 = state_32154__$1;
(statearr_32165_32187[(2)] = inst_32145);

(statearr_32165_32187[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (9))){
var state_32154__$1 = state_32154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32166_32188 = state_32154__$1;
(statearr_32166_32188[(1)] = (11));

} else {
var statearr_32167_32189 = state_32154__$1;
(statearr_32167_32189[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (5))){
var inst_32131 = (state_32154[(7)]);
var state_32154__$1 = state_32154;
var statearr_32168_32190 = state_32154__$1;
(statearr_32168_32190[(2)] = inst_32131);

(statearr_32168_32190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (10))){
var inst_32150 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32169_32191 = state_32154__$1;
(statearr_32169_32191[(2)] = inst_32150);

(statearr_32169_32191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (8))){
var inst_32131 = (state_32154[(7)]);
var inst_32141 = cljs.core.next.call(null,inst_32131);
var inst_32131__$1 = inst_32141;
var state_32154__$1 = (function (){var statearr_32170 = state_32154;
(statearr_32170[(7)] = inst_32131__$1);

return statearr_32170;
})();
var statearr_32171_32192 = state_32154__$1;
(statearr_32171_32192[(2)] = null);

(statearr_32171_32192[(1)] = (2));


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
});})(c__23737__auto__))
;
return ((function (switch__23722__auto__,c__23737__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__23723__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__23723__auto____0 = (function (){
var statearr_32175 = [null,null,null,null,null,null,null,null];
(statearr_32175[(0)] = cljs$core$async$onto_chan_$_state_machine__23723__auto__);

(statearr_32175[(1)] = (1));

return statearr_32175;
});
var cljs$core$async$onto_chan_$_state_machine__23723__auto____1 = (function (state_32154){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_32154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e32176){if((e32176 instanceof Object)){
var ex__23726__auto__ = e32176;
var statearr_32177_32193 = state_32154;
(statearr_32177_32193[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32194 = state_32154;
state_32154 = G__32194;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__23723__auto__ = function(state_32154){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__23723__auto____1.call(this,state_32154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__23723__auto____0;
cljs$core$async$onto_chan_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__23723__auto____1;
return cljs$core$async$onto_chan_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto__))
})();
var state__23739__auto__ = (function (){var statearr_32178 = f__23738__auto__.call(null);
(statearr_32178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto__);

return statearr_32178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto__))
);

return c__23737__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj32196 = {};
return obj32196;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16579__auto__ = _;
if(and__16579__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16579__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17227__auto__ = (((_ == null))?null:_);
return (function (){var or__16591__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32198 = {};
return obj32198;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16579__auto__ = m;
if(and__16579__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16579__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17227__auto__ = (((m == null))?null:m);
return (function (){var or__16591__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16579__auto__ = m;
if(and__16579__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16579__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17227__auto__ = (((m == null))?null:m);
return (function (){var or__16591__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16579__auto__ = m;
if(and__16579__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16579__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17227__auto__ = (((m == null))?null:m);
return (function (){var or__16591__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t32420 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32420 = (function (cs,ch,mult,meta32421){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32421 = meta32421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32420.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32420.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32420.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32420.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32420.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32422){
var self__ = this;
var _32422__$1 = this;
return self__.meta32421;
});})(cs))
;

cljs.core.async.t32420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32422,meta32421__$1){
var self__ = this;
var _32422__$1 = this;
return (new cljs.core.async.t32420(self__.cs,self__.ch,self__.mult,meta32421__$1));
});})(cs))
;

cljs.core.async.t32420.cljs$lang$type = true;

cljs.core.async.t32420.cljs$lang$ctorStr = "cljs.core.async/t32420";

cljs.core.async.t32420.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t32420");
});})(cs))
;

cljs.core.async.__GT_t32420 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t32420(cs__$1,ch__$1,mult__$1,meta32421){
return (new cljs.core.async.t32420(cs__$1,ch__$1,mult__$1,meta32421));
});})(cs))
;

}

return (new cljs.core.async.t32420(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23737__auto___32641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___32641,cs,m,dchan,dctr,done){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___32641,cs,m,dchan,dctr,done){
return (function (state_32553){
var state_val_32554 = (state_32553[(1)]);
if((state_val_32554 === (7))){
var inst_32549 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32555_32642 = state_32553__$1;
(statearr_32555_32642[(2)] = inst_32549);

(statearr_32555_32642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (20))){
var inst_32454 = (state_32553[(7)]);
var inst_32464 = cljs.core.first.call(null,inst_32454);
var inst_32465 = cljs.core.nth.call(null,inst_32464,(0),null);
var inst_32466 = cljs.core.nth.call(null,inst_32464,(1),null);
var state_32553__$1 = (function (){var statearr_32556 = state_32553;
(statearr_32556[(8)] = inst_32465);

return statearr_32556;
})();
if(cljs.core.truth_(inst_32466)){
var statearr_32557_32643 = state_32553__$1;
(statearr_32557_32643[(1)] = (22));

} else {
var statearr_32558_32644 = state_32553__$1;
(statearr_32558_32644[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (27))){
var inst_32494 = (state_32553[(9)]);
var inst_32496 = (state_32553[(10)]);
var inst_32425 = (state_32553[(11)]);
var inst_32501 = (state_32553[(12)]);
var inst_32501__$1 = cljs.core._nth.call(null,inst_32494,inst_32496);
var inst_32502 = cljs.core.async.put_BANG_.call(null,inst_32501__$1,inst_32425,done);
var state_32553__$1 = (function (){var statearr_32559 = state_32553;
(statearr_32559[(12)] = inst_32501__$1);

return statearr_32559;
})();
if(cljs.core.truth_(inst_32502)){
var statearr_32560_32645 = state_32553__$1;
(statearr_32560_32645[(1)] = (30));

} else {
var statearr_32561_32646 = state_32553__$1;
(statearr_32561_32646[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (1))){
var state_32553__$1 = state_32553;
var statearr_32562_32647 = state_32553__$1;
(statearr_32562_32647[(2)] = null);

(statearr_32562_32647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (24))){
var inst_32454 = (state_32553[(7)]);
var inst_32471 = (state_32553[(2)]);
var inst_32472 = cljs.core.next.call(null,inst_32454);
var inst_32434 = inst_32472;
var inst_32435 = null;
var inst_32436 = (0);
var inst_32437 = (0);
var state_32553__$1 = (function (){var statearr_32563 = state_32553;
(statearr_32563[(13)] = inst_32436);

(statearr_32563[(14)] = inst_32434);

(statearr_32563[(15)] = inst_32437);

(statearr_32563[(16)] = inst_32471);

(statearr_32563[(17)] = inst_32435);

return statearr_32563;
})();
var statearr_32564_32648 = state_32553__$1;
(statearr_32564_32648[(2)] = null);

(statearr_32564_32648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (39))){
var state_32553__$1 = state_32553;
var statearr_32568_32649 = state_32553__$1;
(statearr_32568_32649[(2)] = null);

(statearr_32568_32649[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (4))){
var inst_32425 = (state_32553[(11)]);
var inst_32425__$1 = (state_32553[(2)]);
var inst_32426 = (inst_32425__$1 == null);
var state_32553__$1 = (function (){var statearr_32569 = state_32553;
(statearr_32569[(11)] = inst_32425__$1);

return statearr_32569;
})();
if(cljs.core.truth_(inst_32426)){
var statearr_32570_32650 = state_32553__$1;
(statearr_32570_32650[(1)] = (5));

} else {
var statearr_32571_32651 = state_32553__$1;
(statearr_32571_32651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (15))){
var inst_32436 = (state_32553[(13)]);
var inst_32434 = (state_32553[(14)]);
var inst_32437 = (state_32553[(15)]);
var inst_32435 = (state_32553[(17)]);
var inst_32450 = (state_32553[(2)]);
var inst_32451 = (inst_32437 + (1));
var tmp32565 = inst_32436;
var tmp32566 = inst_32434;
var tmp32567 = inst_32435;
var inst_32434__$1 = tmp32566;
var inst_32435__$1 = tmp32567;
var inst_32436__$1 = tmp32565;
var inst_32437__$1 = inst_32451;
var state_32553__$1 = (function (){var statearr_32572 = state_32553;
(statearr_32572[(13)] = inst_32436__$1);

(statearr_32572[(14)] = inst_32434__$1);

(statearr_32572[(15)] = inst_32437__$1);

(statearr_32572[(18)] = inst_32450);

(statearr_32572[(17)] = inst_32435__$1);

return statearr_32572;
})();
var statearr_32573_32652 = state_32553__$1;
(statearr_32573_32652[(2)] = null);

(statearr_32573_32652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (21))){
var inst_32475 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32577_32653 = state_32553__$1;
(statearr_32577_32653[(2)] = inst_32475);

(statearr_32577_32653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (31))){
var inst_32501 = (state_32553[(12)]);
var inst_32505 = done.call(null,null);
var inst_32506 = cljs.core.async.untap_STAR_.call(null,m,inst_32501);
var state_32553__$1 = (function (){var statearr_32578 = state_32553;
(statearr_32578[(19)] = inst_32505);

return statearr_32578;
})();
var statearr_32579_32654 = state_32553__$1;
(statearr_32579_32654[(2)] = inst_32506);

(statearr_32579_32654[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (32))){
var inst_32494 = (state_32553[(9)]);
var inst_32493 = (state_32553[(20)]);
var inst_32496 = (state_32553[(10)]);
var inst_32495 = (state_32553[(21)]);
var inst_32508 = (state_32553[(2)]);
var inst_32509 = (inst_32496 + (1));
var tmp32574 = inst_32494;
var tmp32575 = inst_32493;
var tmp32576 = inst_32495;
var inst_32493__$1 = tmp32575;
var inst_32494__$1 = tmp32574;
var inst_32495__$1 = tmp32576;
var inst_32496__$1 = inst_32509;
var state_32553__$1 = (function (){var statearr_32580 = state_32553;
(statearr_32580[(9)] = inst_32494__$1);

(statearr_32580[(20)] = inst_32493__$1);

(statearr_32580[(10)] = inst_32496__$1);

(statearr_32580[(22)] = inst_32508);

(statearr_32580[(21)] = inst_32495__$1);

return statearr_32580;
})();
var statearr_32581_32655 = state_32553__$1;
(statearr_32581_32655[(2)] = null);

(statearr_32581_32655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (40))){
var inst_32521 = (state_32553[(23)]);
var inst_32525 = done.call(null,null);
var inst_32526 = cljs.core.async.untap_STAR_.call(null,m,inst_32521);
var state_32553__$1 = (function (){var statearr_32582 = state_32553;
(statearr_32582[(24)] = inst_32525);

return statearr_32582;
})();
var statearr_32583_32656 = state_32553__$1;
(statearr_32583_32656[(2)] = inst_32526);

(statearr_32583_32656[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (33))){
var inst_32512 = (state_32553[(25)]);
var inst_32514 = cljs.core.chunked_seq_QMARK_.call(null,inst_32512);
var state_32553__$1 = state_32553;
if(inst_32514){
var statearr_32584_32657 = state_32553__$1;
(statearr_32584_32657[(1)] = (36));

} else {
var statearr_32585_32658 = state_32553__$1;
(statearr_32585_32658[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (13))){
var inst_32444 = (state_32553[(26)]);
var inst_32447 = cljs.core.async.close_BANG_.call(null,inst_32444);
var state_32553__$1 = state_32553;
var statearr_32586_32659 = state_32553__$1;
(statearr_32586_32659[(2)] = inst_32447);

(statearr_32586_32659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (22))){
var inst_32465 = (state_32553[(8)]);
var inst_32468 = cljs.core.async.close_BANG_.call(null,inst_32465);
var state_32553__$1 = state_32553;
var statearr_32587_32660 = state_32553__$1;
(statearr_32587_32660[(2)] = inst_32468);

(statearr_32587_32660[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (36))){
var inst_32512 = (state_32553[(25)]);
var inst_32516 = cljs.core.chunk_first.call(null,inst_32512);
var inst_32517 = cljs.core.chunk_rest.call(null,inst_32512);
var inst_32518 = cljs.core.count.call(null,inst_32516);
var inst_32493 = inst_32517;
var inst_32494 = inst_32516;
var inst_32495 = inst_32518;
var inst_32496 = (0);
var state_32553__$1 = (function (){var statearr_32588 = state_32553;
(statearr_32588[(9)] = inst_32494);

(statearr_32588[(20)] = inst_32493);

(statearr_32588[(10)] = inst_32496);

(statearr_32588[(21)] = inst_32495);

return statearr_32588;
})();
var statearr_32589_32661 = state_32553__$1;
(statearr_32589_32661[(2)] = null);

(statearr_32589_32661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (41))){
var inst_32512 = (state_32553[(25)]);
var inst_32528 = (state_32553[(2)]);
var inst_32529 = cljs.core.next.call(null,inst_32512);
var inst_32493 = inst_32529;
var inst_32494 = null;
var inst_32495 = (0);
var inst_32496 = (0);
var state_32553__$1 = (function (){var statearr_32590 = state_32553;
(statearr_32590[(27)] = inst_32528);

(statearr_32590[(9)] = inst_32494);

(statearr_32590[(20)] = inst_32493);

(statearr_32590[(10)] = inst_32496);

(statearr_32590[(21)] = inst_32495);

return statearr_32590;
})();
var statearr_32591_32662 = state_32553__$1;
(statearr_32591_32662[(2)] = null);

(statearr_32591_32662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (43))){
var state_32553__$1 = state_32553;
var statearr_32592_32663 = state_32553__$1;
(statearr_32592_32663[(2)] = null);

(statearr_32592_32663[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (29))){
var inst_32537 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32593_32664 = state_32553__$1;
(statearr_32593_32664[(2)] = inst_32537);

(statearr_32593_32664[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (44))){
var inst_32546 = (state_32553[(2)]);
var state_32553__$1 = (function (){var statearr_32594 = state_32553;
(statearr_32594[(28)] = inst_32546);

return statearr_32594;
})();
var statearr_32595_32665 = state_32553__$1;
(statearr_32595_32665[(2)] = null);

(statearr_32595_32665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (6))){
var inst_32485 = (state_32553[(29)]);
var inst_32484 = cljs.core.deref.call(null,cs);
var inst_32485__$1 = cljs.core.keys.call(null,inst_32484);
var inst_32486 = cljs.core.count.call(null,inst_32485__$1);
var inst_32487 = cljs.core.reset_BANG_.call(null,dctr,inst_32486);
var inst_32492 = cljs.core.seq.call(null,inst_32485__$1);
var inst_32493 = inst_32492;
var inst_32494 = null;
var inst_32495 = (0);
var inst_32496 = (0);
var state_32553__$1 = (function (){var statearr_32596 = state_32553;
(statearr_32596[(29)] = inst_32485__$1);

(statearr_32596[(9)] = inst_32494);

(statearr_32596[(30)] = inst_32487);

(statearr_32596[(20)] = inst_32493);

(statearr_32596[(10)] = inst_32496);

(statearr_32596[(21)] = inst_32495);

return statearr_32596;
})();
var statearr_32597_32666 = state_32553__$1;
(statearr_32597_32666[(2)] = null);

(statearr_32597_32666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (28))){
var inst_32493 = (state_32553[(20)]);
var inst_32512 = (state_32553[(25)]);
var inst_32512__$1 = cljs.core.seq.call(null,inst_32493);
var state_32553__$1 = (function (){var statearr_32598 = state_32553;
(statearr_32598[(25)] = inst_32512__$1);

return statearr_32598;
})();
if(inst_32512__$1){
var statearr_32599_32667 = state_32553__$1;
(statearr_32599_32667[(1)] = (33));

} else {
var statearr_32600_32668 = state_32553__$1;
(statearr_32600_32668[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (25))){
var inst_32496 = (state_32553[(10)]);
var inst_32495 = (state_32553[(21)]);
var inst_32498 = (inst_32496 < inst_32495);
var inst_32499 = inst_32498;
var state_32553__$1 = state_32553;
if(cljs.core.truth_(inst_32499)){
var statearr_32601_32669 = state_32553__$1;
(statearr_32601_32669[(1)] = (27));

} else {
var statearr_32602_32670 = state_32553__$1;
(statearr_32602_32670[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (34))){
var state_32553__$1 = state_32553;
var statearr_32603_32671 = state_32553__$1;
(statearr_32603_32671[(2)] = null);

(statearr_32603_32671[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (17))){
var state_32553__$1 = state_32553;
var statearr_32604_32672 = state_32553__$1;
(statearr_32604_32672[(2)] = null);

(statearr_32604_32672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (3))){
var inst_32551 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32553__$1,inst_32551);
} else {
if((state_val_32554 === (12))){
var inst_32480 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32605_32673 = state_32553__$1;
(statearr_32605_32673[(2)] = inst_32480);

(statearr_32605_32673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (2))){
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32553__$1,(4),ch);
} else {
if((state_val_32554 === (23))){
var state_32553__$1 = state_32553;
var statearr_32606_32674 = state_32553__$1;
(statearr_32606_32674[(2)] = null);

(statearr_32606_32674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (35))){
var inst_32535 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32607_32675 = state_32553__$1;
(statearr_32607_32675[(2)] = inst_32535);

(statearr_32607_32675[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (19))){
var inst_32454 = (state_32553[(7)]);
var inst_32458 = cljs.core.chunk_first.call(null,inst_32454);
var inst_32459 = cljs.core.chunk_rest.call(null,inst_32454);
var inst_32460 = cljs.core.count.call(null,inst_32458);
var inst_32434 = inst_32459;
var inst_32435 = inst_32458;
var inst_32436 = inst_32460;
var inst_32437 = (0);
var state_32553__$1 = (function (){var statearr_32608 = state_32553;
(statearr_32608[(13)] = inst_32436);

(statearr_32608[(14)] = inst_32434);

(statearr_32608[(15)] = inst_32437);

(statearr_32608[(17)] = inst_32435);

return statearr_32608;
})();
var statearr_32609_32676 = state_32553__$1;
(statearr_32609_32676[(2)] = null);

(statearr_32609_32676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (11))){
var inst_32434 = (state_32553[(14)]);
var inst_32454 = (state_32553[(7)]);
var inst_32454__$1 = cljs.core.seq.call(null,inst_32434);
var state_32553__$1 = (function (){var statearr_32610 = state_32553;
(statearr_32610[(7)] = inst_32454__$1);

return statearr_32610;
})();
if(inst_32454__$1){
var statearr_32611_32677 = state_32553__$1;
(statearr_32611_32677[(1)] = (16));

} else {
var statearr_32612_32678 = state_32553__$1;
(statearr_32612_32678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (9))){
var inst_32482 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32613_32679 = state_32553__$1;
(statearr_32613_32679[(2)] = inst_32482);

(statearr_32613_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (5))){
var inst_32432 = cljs.core.deref.call(null,cs);
var inst_32433 = cljs.core.seq.call(null,inst_32432);
var inst_32434 = inst_32433;
var inst_32435 = null;
var inst_32436 = (0);
var inst_32437 = (0);
var state_32553__$1 = (function (){var statearr_32614 = state_32553;
(statearr_32614[(13)] = inst_32436);

(statearr_32614[(14)] = inst_32434);

(statearr_32614[(15)] = inst_32437);

(statearr_32614[(17)] = inst_32435);

return statearr_32614;
})();
var statearr_32615_32680 = state_32553__$1;
(statearr_32615_32680[(2)] = null);

(statearr_32615_32680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (14))){
var state_32553__$1 = state_32553;
var statearr_32616_32681 = state_32553__$1;
(statearr_32616_32681[(2)] = null);

(statearr_32616_32681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (45))){
var inst_32543 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32617_32682 = state_32553__$1;
(statearr_32617_32682[(2)] = inst_32543);

(statearr_32617_32682[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (26))){
var inst_32485 = (state_32553[(29)]);
var inst_32539 = (state_32553[(2)]);
var inst_32540 = cljs.core.seq.call(null,inst_32485);
var state_32553__$1 = (function (){var statearr_32618 = state_32553;
(statearr_32618[(31)] = inst_32539);

return statearr_32618;
})();
if(inst_32540){
var statearr_32619_32683 = state_32553__$1;
(statearr_32619_32683[(1)] = (42));

} else {
var statearr_32620_32684 = state_32553__$1;
(statearr_32620_32684[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (16))){
var inst_32454 = (state_32553[(7)]);
var inst_32456 = cljs.core.chunked_seq_QMARK_.call(null,inst_32454);
var state_32553__$1 = state_32553;
if(inst_32456){
var statearr_32621_32685 = state_32553__$1;
(statearr_32621_32685[(1)] = (19));

} else {
var statearr_32622_32686 = state_32553__$1;
(statearr_32622_32686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (38))){
var inst_32532 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32623_32687 = state_32553__$1;
(statearr_32623_32687[(2)] = inst_32532);

(statearr_32623_32687[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (30))){
var state_32553__$1 = state_32553;
var statearr_32624_32688 = state_32553__$1;
(statearr_32624_32688[(2)] = null);

(statearr_32624_32688[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (10))){
var inst_32437 = (state_32553[(15)]);
var inst_32435 = (state_32553[(17)]);
var inst_32443 = cljs.core._nth.call(null,inst_32435,inst_32437);
var inst_32444 = cljs.core.nth.call(null,inst_32443,(0),null);
var inst_32445 = cljs.core.nth.call(null,inst_32443,(1),null);
var state_32553__$1 = (function (){var statearr_32625 = state_32553;
(statearr_32625[(26)] = inst_32444);

return statearr_32625;
})();
if(cljs.core.truth_(inst_32445)){
var statearr_32626_32689 = state_32553__$1;
(statearr_32626_32689[(1)] = (13));

} else {
var statearr_32627_32690 = state_32553__$1;
(statearr_32627_32690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (18))){
var inst_32478 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32628_32691 = state_32553__$1;
(statearr_32628_32691[(2)] = inst_32478);

(statearr_32628_32691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (42))){
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32553__$1,(45),dchan);
} else {
if((state_val_32554 === (37))){
var inst_32521 = (state_32553[(23)]);
var inst_32425 = (state_32553[(11)]);
var inst_32512 = (state_32553[(25)]);
var inst_32521__$1 = cljs.core.first.call(null,inst_32512);
var inst_32522 = cljs.core.async.put_BANG_.call(null,inst_32521__$1,inst_32425,done);
var state_32553__$1 = (function (){var statearr_32629 = state_32553;
(statearr_32629[(23)] = inst_32521__$1);

return statearr_32629;
})();
if(cljs.core.truth_(inst_32522)){
var statearr_32630_32692 = state_32553__$1;
(statearr_32630_32692[(1)] = (39));

} else {
var statearr_32631_32693 = state_32553__$1;
(statearr_32631_32693[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (8))){
var inst_32436 = (state_32553[(13)]);
var inst_32437 = (state_32553[(15)]);
var inst_32439 = (inst_32437 < inst_32436);
var inst_32440 = inst_32439;
var state_32553__$1 = state_32553;
if(cljs.core.truth_(inst_32440)){
var statearr_32632_32694 = state_32553__$1;
(statearr_32632_32694[(1)] = (10));

} else {
var statearr_32633_32695 = state_32553__$1;
(statearr_32633_32695[(1)] = (11));

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
});})(c__23737__auto___32641,cs,m,dchan,dctr,done))
;
return ((function (switch__23722__auto__,c__23737__auto___32641,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23723__auto__ = null;
var cljs$core$async$mult_$_state_machine__23723__auto____0 = (function (){
var statearr_32637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32637[(0)] = cljs$core$async$mult_$_state_machine__23723__auto__);

(statearr_32637[(1)] = (1));

return statearr_32637;
});
var cljs$core$async$mult_$_state_machine__23723__auto____1 = (function (state_32553){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_32553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e32638){if((e32638 instanceof Object)){
var ex__23726__auto__ = e32638;
var statearr_32639_32696 = state_32553;
(statearr_32639_32696[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32697 = state_32553;
state_32553 = G__32697;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23723__auto__ = function(state_32553){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23723__auto____1.call(this,state_32553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23723__auto____0;
cljs$core$async$mult_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23723__auto____1;
return cljs$core$async$mult_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___32641,cs,m,dchan,dctr,done))
})();
var state__23739__auto__ = (function (){var statearr_32640 = f__23738__auto__.call(null);
(statearr_32640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___32641);

return statearr_32640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___32641,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj32699 = {};
return obj32699;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16579__auto__ = m;
if(and__16579__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16579__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17227__auto__ = (((m == null))?null:m);
return (function (){var or__16591__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16579__auto__ = m;
if(and__16579__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16579__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17227__auto__ = (((m == null))?null:m);
return (function (){var or__16591__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16579__auto__ = m;
if(and__16579__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16579__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17227__auto__ = (((m == null))?null:m);
return (function (){var or__16591__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16579__auto__ = m;
if(and__16579__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16579__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17227__auto__ = (((m == null))?null:m);
return (function (){var or__16591__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16579__auto__ = m;
if(and__16579__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16579__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17227__auto__ = (((m == null))?null:m);
return (function (){var or__16591__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32700){
var map__32705 = p__32700;
var map__32705__$1 = ((cljs.core.seq_QMARK_.call(null,map__32705))?cljs.core.apply.call(null,cljs.core.hash_map,map__32705):map__32705);
var opts = map__32705__$1;
var statearr_32706_32709 = state;
(statearr_32706_32709[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32705,map__32705__$1,opts){
return (function (val){
var statearr_32707_32710 = state;
(statearr_32707_32710[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32705,map__32705__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32708_32711 = state;
(statearr_32708_32711[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32700 = null;
if (arguments.length > 3) {
var G__32712__i = 0, G__32712__a = new Array(arguments.length -  3);
while (G__32712__i < G__32712__a.length) {G__32712__a[G__32712__i] = arguments[G__32712__i + 3]; ++G__32712__i;}
  p__32700 = new cljs.core.IndexedSeq(G__32712__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32700);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32713){
var state = cljs.core.first(arglist__32713);
arglist__32713 = cljs.core.next(arglist__32713);
var cont_block = cljs.core.first(arglist__32713);
arglist__32713 = cljs.core.next(arglist__32713);
var ports = cljs.core.first(arglist__32713);
var p__32700 = cljs.core.rest(arglist__32713);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__32700);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32833 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32833 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32834){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32834 = meta32834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32833.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32833.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32833.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32833.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32833.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32833.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32833.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32835){
var self__ = this;
var _32835__$1 = this;
return self__.meta32834;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32835,meta32834__$1){
var self__ = this;
var _32835__$1 = this;
return (new cljs.core.async.t32833(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32834__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32833.cljs$lang$type = true;

cljs.core.async.t32833.cljs$lang$ctorStr = "cljs.core.async/t32833";

cljs.core.async.t32833.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t32833");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32833 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t32833(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32834){
return (new cljs.core.async.t32833(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32834));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32833(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23737__auto___32952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32905){
var state_val_32906 = (state_32905[(1)]);
if((state_val_32906 === (7))){
var inst_32849 = (state_32905[(7)]);
var inst_32854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32849);
var state_32905__$1 = state_32905;
var statearr_32907_32953 = state_32905__$1;
(statearr_32907_32953[(2)] = inst_32854);

(statearr_32907_32953[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (20))){
var inst_32864 = (state_32905[(8)]);
var state_32905__$1 = state_32905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32905__$1,(23),out,inst_32864);
} else {
if((state_val_32906 === (1))){
var inst_32839 = (state_32905[(9)]);
var inst_32839__$1 = calc_state.call(null);
var inst_32840 = cljs.core.seq_QMARK_.call(null,inst_32839__$1);
var state_32905__$1 = (function (){var statearr_32908 = state_32905;
(statearr_32908[(9)] = inst_32839__$1);

return statearr_32908;
})();
if(inst_32840){
var statearr_32909_32954 = state_32905__$1;
(statearr_32909_32954[(1)] = (2));

} else {
var statearr_32910_32955 = state_32905__$1;
(statearr_32910_32955[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (24))){
var inst_32857 = (state_32905[(10)]);
var inst_32849 = inst_32857;
var state_32905__$1 = (function (){var statearr_32911 = state_32905;
(statearr_32911[(7)] = inst_32849);

return statearr_32911;
})();
var statearr_32912_32956 = state_32905__$1;
(statearr_32912_32956[(2)] = null);

(statearr_32912_32956[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (4))){
var inst_32839 = (state_32905[(9)]);
var inst_32845 = (state_32905[(2)]);
var inst_32846 = cljs.core.get.call(null,inst_32845,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32847 = cljs.core.get.call(null,inst_32845,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32848 = cljs.core.get.call(null,inst_32845,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32849 = inst_32839;
var state_32905__$1 = (function (){var statearr_32913 = state_32905;
(statearr_32913[(7)] = inst_32849);

(statearr_32913[(11)] = inst_32846);

(statearr_32913[(12)] = inst_32848);

(statearr_32913[(13)] = inst_32847);

return statearr_32913;
})();
var statearr_32914_32957 = state_32905__$1;
(statearr_32914_32957[(2)] = null);

(statearr_32914_32957[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (15))){
var state_32905__$1 = state_32905;
var statearr_32915_32958 = state_32905__$1;
(statearr_32915_32958[(2)] = null);

(statearr_32915_32958[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (21))){
var inst_32857 = (state_32905[(10)]);
var inst_32849 = inst_32857;
var state_32905__$1 = (function (){var statearr_32916 = state_32905;
(statearr_32916[(7)] = inst_32849);

return statearr_32916;
})();
var statearr_32917_32959 = state_32905__$1;
(statearr_32917_32959[(2)] = null);

(statearr_32917_32959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (13))){
var inst_32901 = (state_32905[(2)]);
var state_32905__$1 = state_32905;
var statearr_32918_32960 = state_32905__$1;
(statearr_32918_32960[(2)] = inst_32901);

(statearr_32918_32960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (22))){
var inst_32899 = (state_32905[(2)]);
var state_32905__$1 = state_32905;
var statearr_32919_32961 = state_32905__$1;
(statearr_32919_32961[(2)] = inst_32899);

(statearr_32919_32961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (6))){
var inst_32903 = (state_32905[(2)]);
var state_32905__$1 = state_32905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32905__$1,inst_32903);
} else {
if((state_val_32906 === (25))){
var state_32905__$1 = state_32905;
var statearr_32920_32962 = state_32905__$1;
(statearr_32920_32962[(2)] = null);

(statearr_32920_32962[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (17))){
var inst_32879 = (state_32905[(14)]);
var state_32905__$1 = state_32905;
var statearr_32921_32963 = state_32905__$1;
(statearr_32921_32963[(2)] = inst_32879);

(statearr_32921_32963[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (3))){
var inst_32839 = (state_32905[(9)]);
var state_32905__$1 = state_32905;
var statearr_32922_32964 = state_32905__$1;
(statearr_32922_32964[(2)] = inst_32839);

(statearr_32922_32964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (12))){
var inst_32879 = (state_32905[(14)]);
var inst_32860 = (state_32905[(15)]);
var inst_32865 = (state_32905[(16)]);
var inst_32879__$1 = inst_32860.call(null,inst_32865);
var state_32905__$1 = (function (){var statearr_32923 = state_32905;
(statearr_32923[(14)] = inst_32879__$1);

return statearr_32923;
})();
if(cljs.core.truth_(inst_32879__$1)){
var statearr_32924_32965 = state_32905__$1;
(statearr_32924_32965[(1)] = (17));

} else {
var statearr_32925_32966 = state_32905__$1;
(statearr_32925_32966[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (2))){
var inst_32839 = (state_32905[(9)]);
var inst_32842 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32839);
var state_32905__$1 = state_32905;
var statearr_32926_32967 = state_32905__$1;
(statearr_32926_32967[(2)] = inst_32842);

(statearr_32926_32967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (23))){
var inst_32890 = (state_32905[(2)]);
var state_32905__$1 = state_32905;
if(cljs.core.truth_(inst_32890)){
var statearr_32927_32968 = state_32905__$1;
(statearr_32927_32968[(1)] = (24));

} else {
var statearr_32928_32969 = state_32905__$1;
(statearr_32928_32969[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (19))){
var inst_32887 = (state_32905[(2)]);
var state_32905__$1 = state_32905;
if(cljs.core.truth_(inst_32887)){
var statearr_32929_32970 = state_32905__$1;
(statearr_32929_32970[(1)] = (20));

} else {
var statearr_32930_32971 = state_32905__$1;
(statearr_32930_32971[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (11))){
var inst_32864 = (state_32905[(8)]);
var inst_32870 = (inst_32864 == null);
var state_32905__$1 = state_32905;
if(cljs.core.truth_(inst_32870)){
var statearr_32931_32972 = state_32905__$1;
(statearr_32931_32972[(1)] = (14));

} else {
var statearr_32932_32973 = state_32905__$1;
(statearr_32932_32973[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (9))){
var inst_32857 = (state_32905[(10)]);
var inst_32857__$1 = (state_32905[(2)]);
var inst_32858 = cljs.core.get.call(null,inst_32857__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32859 = cljs.core.get.call(null,inst_32857__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32860 = cljs.core.get.call(null,inst_32857__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32905__$1 = (function (){var statearr_32933 = state_32905;
(statearr_32933[(10)] = inst_32857__$1);

(statearr_32933[(17)] = inst_32859);

(statearr_32933[(15)] = inst_32860);

return statearr_32933;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32905__$1,(10),inst_32858);
} else {
if((state_val_32906 === (5))){
var inst_32849 = (state_32905[(7)]);
var inst_32852 = cljs.core.seq_QMARK_.call(null,inst_32849);
var state_32905__$1 = state_32905;
if(inst_32852){
var statearr_32934_32974 = state_32905__$1;
(statearr_32934_32974[(1)] = (7));

} else {
var statearr_32935_32975 = state_32905__$1;
(statearr_32935_32975[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (14))){
var inst_32865 = (state_32905[(16)]);
var inst_32872 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32865);
var state_32905__$1 = state_32905;
var statearr_32936_32976 = state_32905__$1;
(statearr_32936_32976[(2)] = inst_32872);

(statearr_32936_32976[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (26))){
var inst_32895 = (state_32905[(2)]);
var state_32905__$1 = state_32905;
var statearr_32937_32977 = state_32905__$1;
(statearr_32937_32977[(2)] = inst_32895);

(statearr_32937_32977[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (16))){
var inst_32875 = (state_32905[(2)]);
var inst_32876 = calc_state.call(null);
var inst_32849 = inst_32876;
var state_32905__$1 = (function (){var statearr_32938 = state_32905;
(statearr_32938[(7)] = inst_32849);

(statearr_32938[(18)] = inst_32875);

return statearr_32938;
})();
var statearr_32939_32978 = state_32905__$1;
(statearr_32939_32978[(2)] = null);

(statearr_32939_32978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (10))){
var inst_32864 = (state_32905[(8)]);
var inst_32865 = (state_32905[(16)]);
var inst_32863 = (state_32905[(2)]);
var inst_32864__$1 = cljs.core.nth.call(null,inst_32863,(0),null);
var inst_32865__$1 = cljs.core.nth.call(null,inst_32863,(1),null);
var inst_32866 = (inst_32864__$1 == null);
var inst_32867 = cljs.core._EQ_.call(null,inst_32865__$1,change);
var inst_32868 = (inst_32866) || (inst_32867);
var state_32905__$1 = (function (){var statearr_32940 = state_32905;
(statearr_32940[(8)] = inst_32864__$1);

(statearr_32940[(16)] = inst_32865__$1);

return statearr_32940;
})();
if(cljs.core.truth_(inst_32868)){
var statearr_32941_32979 = state_32905__$1;
(statearr_32941_32979[(1)] = (11));

} else {
var statearr_32942_32980 = state_32905__$1;
(statearr_32942_32980[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (18))){
var inst_32859 = (state_32905[(17)]);
var inst_32860 = (state_32905[(15)]);
var inst_32865 = (state_32905[(16)]);
var inst_32882 = cljs.core.empty_QMARK_.call(null,inst_32860);
var inst_32883 = inst_32859.call(null,inst_32865);
var inst_32884 = cljs.core.not.call(null,inst_32883);
var inst_32885 = (inst_32882) && (inst_32884);
var state_32905__$1 = state_32905;
var statearr_32943_32981 = state_32905__$1;
(statearr_32943_32981[(2)] = inst_32885);

(statearr_32943_32981[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32906 === (8))){
var inst_32849 = (state_32905[(7)]);
var state_32905__$1 = state_32905;
var statearr_32944_32982 = state_32905__$1;
(statearr_32944_32982[(2)] = inst_32849);

(statearr_32944_32982[(1)] = (9));


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
});})(c__23737__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23722__auto__,c__23737__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23723__auto__ = null;
var cljs$core$async$mix_$_state_machine__23723__auto____0 = (function (){
var statearr_32948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32948[(0)] = cljs$core$async$mix_$_state_machine__23723__auto__);

(statearr_32948[(1)] = (1));

return statearr_32948;
});
var cljs$core$async$mix_$_state_machine__23723__auto____1 = (function (state_32905){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_32905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e32949){if((e32949 instanceof Object)){
var ex__23726__auto__ = e32949;
var statearr_32950_32983 = state_32905;
(statearr_32950_32983[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32984 = state_32905;
state_32905 = G__32984;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23723__auto__ = function(state_32905){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23723__auto____1.call(this,state_32905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23723__auto____0;
cljs$core$async$mix_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23723__auto____1;
return cljs$core$async$mix_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23739__auto__ = (function (){var statearr_32951 = f__23738__auto__.call(null);
(statearr_32951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___32952);

return statearr_32951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj32986 = {};
return obj32986;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16579__auto__ = p;
if(and__16579__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16579__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17227__auto__ = (((p == null))?null:p);
return (function (){var or__16591__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16579__auto__ = p;
if(and__16579__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16579__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17227__auto__ = (((p == null))?null:p);
return (function (){var or__16591__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__16579__auto__ = p;
if(and__16579__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16579__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17227__auto__ = (((p == null))?null:p);
return (function (){var or__16591__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16579__auto__ = p;
if(and__16579__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16579__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17227__auto__ = (((p == null))?null:p);
return (function (){var or__16591__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17227__auto__)]);
if(or__16591__auto__){
return or__16591__auto__;
} else {
var or__16591__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16591__auto____$1){
return or__16591__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16591__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16591__auto__)){
return or__16591__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16591__auto__,mults){
return (function (p1__32987_SHARP_){
if(cljs.core.truth_(p1__32987_SHARP_.call(null,topic))){
return p1__32987_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32987_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16591__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33110 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33110 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33111){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33111 = meta33111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33110.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33110.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33110.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33110.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t33110.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33110.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33112){
var self__ = this;
var _33112__$1 = this;
return self__.meta33111;
});})(mults,ensure_mult))
;

cljs.core.async.t33110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33112,meta33111__$1){
var self__ = this;
var _33112__$1 = this;
return (new cljs.core.async.t33110(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33111__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33110.cljs$lang$type = true;

cljs.core.async.t33110.cljs$lang$ctorStr = "cljs.core.async/t33110";

cljs.core.async.t33110.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t33110");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33110 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t33110(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33111){
return (new cljs.core.async.t33110(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33111));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33110(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23737__auto___33232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___33232,mults,ensure_mult,p){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___33232,mults,ensure_mult,p){
return (function (state_33184){
var state_val_33185 = (state_33184[(1)]);
if((state_val_33185 === (7))){
var inst_33180 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33186_33233 = state_33184__$1;
(statearr_33186_33233[(2)] = inst_33180);

(statearr_33186_33233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (20))){
var state_33184__$1 = state_33184;
var statearr_33187_33234 = state_33184__$1;
(statearr_33187_33234[(2)] = null);

(statearr_33187_33234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (1))){
var state_33184__$1 = state_33184;
var statearr_33188_33235 = state_33184__$1;
(statearr_33188_33235[(2)] = null);

(statearr_33188_33235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (24))){
var inst_33163 = (state_33184[(7)]);
var inst_33172 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33163);
var state_33184__$1 = state_33184;
var statearr_33189_33236 = state_33184__$1;
(statearr_33189_33236[(2)] = inst_33172);

(statearr_33189_33236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (4))){
var inst_33115 = (state_33184[(8)]);
var inst_33115__$1 = (state_33184[(2)]);
var inst_33116 = (inst_33115__$1 == null);
var state_33184__$1 = (function (){var statearr_33190 = state_33184;
(statearr_33190[(8)] = inst_33115__$1);

return statearr_33190;
})();
if(cljs.core.truth_(inst_33116)){
var statearr_33191_33237 = state_33184__$1;
(statearr_33191_33237[(1)] = (5));

} else {
var statearr_33192_33238 = state_33184__$1;
(statearr_33192_33238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (15))){
var inst_33157 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33193_33239 = state_33184__$1;
(statearr_33193_33239[(2)] = inst_33157);

(statearr_33193_33239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (21))){
var inst_33177 = (state_33184[(2)]);
var state_33184__$1 = (function (){var statearr_33194 = state_33184;
(statearr_33194[(9)] = inst_33177);

return statearr_33194;
})();
var statearr_33195_33240 = state_33184__$1;
(statearr_33195_33240[(2)] = null);

(statearr_33195_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (13))){
var inst_33139 = (state_33184[(10)]);
var inst_33141 = cljs.core.chunked_seq_QMARK_.call(null,inst_33139);
var state_33184__$1 = state_33184;
if(inst_33141){
var statearr_33196_33241 = state_33184__$1;
(statearr_33196_33241[(1)] = (16));

} else {
var statearr_33197_33242 = state_33184__$1;
(statearr_33197_33242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (22))){
var inst_33169 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
if(cljs.core.truth_(inst_33169)){
var statearr_33198_33243 = state_33184__$1;
(statearr_33198_33243[(1)] = (23));

} else {
var statearr_33199_33244 = state_33184__$1;
(statearr_33199_33244[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (6))){
var inst_33165 = (state_33184[(11)]);
var inst_33115 = (state_33184[(8)]);
var inst_33163 = (state_33184[(7)]);
var inst_33163__$1 = topic_fn.call(null,inst_33115);
var inst_33164 = cljs.core.deref.call(null,mults);
var inst_33165__$1 = cljs.core.get.call(null,inst_33164,inst_33163__$1);
var state_33184__$1 = (function (){var statearr_33200 = state_33184;
(statearr_33200[(11)] = inst_33165__$1);

(statearr_33200[(7)] = inst_33163__$1);

return statearr_33200;
})();
if(cljs.core.truth_(inst_33165__$1)){
var statearr_33201_33245 = state_33184__$1;
(statearr_33201_33245[(1)] = (19));

} else {
var statearr_33202_33246 = state_33184__$1;
(statearr_33202_33246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (25))){
var inst_33174 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33203_33247 = state_33184__$1;
(statearr_33203_33247[(2)] = inst_33174);

(statearr_33203_33247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (17))){
var inst_33139 = (state_33184[(10)]);
var inst_33148 = cljs.core.first.call(null,inst_33139);
var inst_33149 = cljs.core.async.muxch_STAR_.call(null,inst_33148);
var inst_33150 = cljs.core.async.close_BANG_.call(null,inst_33149);
var inst_33151 = cljs.core.next.call(null,inst_33139);
var inst_33125 = inst_33151;
var inst_33126 = null;
var inst_33127 = (0);
var inst_33128 = (0);
var state_33184__$1 = (function (){var statearr_33204 = state_33184;
(statearr_33204[(12)] = inst_33128);

(statearr_33204[(13)] = inst_33126);

(statearr_33204[(14)] = inst_33125);

(statearr_33204[(15)] = inst_33150);

(statearr_33204[(16)] = inst_33127);

return statearr_33204;
})();
var statearr_33205_33248 = state_33184__$1;
(statearr_33205_33248[(2)] = null);

(statearr_33205_33248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (3))){
var inst_33182 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33184__$1,inst_33182);
} else {
if((state_val_33185 === (12))){
var inst_33159 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33206_33249 = state_33184__$1;
(statearr_33206_33249[(2)] = inst_33159);

(statearr_33206_33249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (2))){
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33184__$1,(4),ch);
} else {
if((state_val_33185 === (23))){
var state_33184__$1 = state_33184;
var statearr_33207_33250 = state_33184__$1;
(statearr_33207_33250[(2)] = null);

(statearr_33207_33250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (19))){
var inst_33165 = (state_33184[(11)]);
var inst_33115 = (state_33184[(8)]);
var inst_33167 = cljs.core.async.muxch_STAR_.call(null,inst_33165);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33184__$1,(22),inst_33167,inst_33115);
} else {
if((state_val_33185 === (11))){
var inst_33139 = (state_33184[(10)]);
var inst_33125 = (state_33184[(14)]);
var inst_33139__$1 = cljs.core.seq.call(null,inst_33125);
var state_33184__$1 = (function (){var statearr_33208 = state_33184;
(statearr_33208[(10)] = inst_33139__$1);

return statearr_33208;
})();
if(inst_33139__$1){
var statearr_33209_33251 = state_33184__$1;
(statearr_33209_33251[(1)] = (13));

} else {
var statearr_33210_33252 = state_33184__$1;
(statearr_33210_33252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (9))){
var inst_33161 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33211_33253 = state_33184__$1;
(statearr_33211_33253[(2)] = inst_33161);

(statearr_33211_33253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (5))){
var inst_33122 = cljs.core.deref.call(null,mults);
var inst_33123 = cljs.core.vals.call(null,inst_33122);
var inst_33124 = cljs.core.seq.call(null,inst_33123);
var inst_33125 = inst_33124;
var inst_33126 = null;
var inst_33127 = (0);
var inst_33128 = (0);
var state_33184__$1 = (function (){var statearr_33212 = state_33184;
(statearr_33212[(12)] = inst_33128);

(statearr_33212[(13)] = inst_33126);

(statearr_33212[(14)] = inst_33125);

(statearr_33212[(16)] = inst_33127);

return statearr_33212;
})();
var statearr_33213_33254 = state_33184__$1;
(statearr_33213_33254[(2)] = null);

(statearr_33213_33254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (14))){
var state_33184__$1 = state_33184;
var statearr_33217_33255 = state_33184__$1;
(statearr_33217_33255[(2)] = null);

(statearr_33217_33255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (16))){
var inst_33139 = (state_33184[(10)]);
var inst_33143 = cljs.core.chunk_first.call(null,inst_33139);
var inst_33144 = cljs.core.chunk_rest.call(null,inst_33139);
var inst_33145 = cljs.core.count.call(null,inst_33143);
var inst_33125 = inst_33144;
var inst_33126 = inst_33143;
var inst_33127 = inst_33145;
var inst_33128 = (0);
var state_33184__$1 = (function (){var statearr_33218 = state_33184;
(statearr_33218[(12)] = inst_33128);

(statearr_33218[(13)] = inst_33126);

(statearr_33218[(14)] = inst_33125);

(statearr_33218[(16)] = inst_33127);

return statearr_33218;
})();
var statearr_33219_33256 = state_33184__$1;
(statearr_33219_33256[(2)] = null);

(statearr_33219_33256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (10))){
var inst_33128 = (state_33184[(12)]);
var inst_33126 = (state_33184[(13)]);
var inst_33125 = (state_33184[(14)]);
var inst_33127 = (state_33184[(16)]);
var inst_33133 = cljs.core._nth.call(null,inst_33126,inst_33128);
var inst_33134 = cljs.core.async.muxch_STAR_.call(null,inst_33133);
var inst_33135 = cljs.core.async.close_BANG_.call(null,inst_33134);
var inst_33136 = (inst_33128 + (1));
var tmp33214 = inst_33126;
var tmp33215 = inst_33125;
var tmp33216 = inst_33127;
var inst_33125__$1 = tmp33215;
var inst_33126__$1 = tmp33214;
var inst_33127__$1 = tmp33216;
var inst_33128__$1 = inst_33136;
var state_33184__$1 = (function (){var statearr_33220 = state_33184;
(statearr_33220[(12)] = inst_33128__$1);

(statearr_33220[(13)] = inst_33126__$1);

(statearr_33220[(14)] = inst_33125__$1);

(statearr_33220[(16)] = inst_33127__$1);

(statearr_33220[(17)] = inst_33135);

return statearr_33220;
})();
var statearr_33221_33257 = state_33184__$1;
(statearr_33221_33257[(2)] = null);

(statearr_33221_33257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (18))){
var inst_33154 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33222_33258 = state_33184__$1;
(statearr_33222_33258[(2)] = inst_33154);

(statearr_33222_33258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (8))){
var inst_33128 = (state_33184[(12)]);
var inst_33127 = (state_33184[(16)]);
var inst_33130 = (inst_33128 < inst_33127);
var inst_33131 = inst_33130;
var state_33184__$1 = state_33184;
if(cljs.core.truth_(inst_33131)){
var statearr_33223_33259 = state_33184__$1;
(statearr_33223_33259[(1)] = (10));

} else {
var statearr_33224_33260 = state_33184__$1;
(statearr_33224_33260[(1)] = (11));

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
});})(c__23737__auto___33232,mults,ensure_mult,p))
;
return ((function (switch__23722__auto__,c__23737__auto___33232,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__23723__auto__ = null;
var cljs$core$async$pub_$_state_machine__23723__auto____0 = (function (){
var statearr_33228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33228[(0)] = cljs$core$async$pub_$_state_machine__23723__auto__);

(statearr_33228[(1)] = (1));

return statearr_33228;
});
var cljs$core$async$pub_$_state_machine__23723__auto____1 = (function (state_33184){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_33184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e33229){if((e33229 instanceof Object)){
var ex__23726__auto__ = e33229;
var statearr_33230_33261 = state_33184;
(statearr_33230_33261[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33262 = state_33184;
state_33184 = G__33262;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__23723__auto__ = function(state_33184){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__23723__auto____1.call(this,state_33184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__23723__auto____0;
cljs$core$async$pub_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__23723__auto____1;
return cljs$core$async$pub_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___33232,mults,ensure_mult,p))
})();
var state__23739__auto__ = (function (){var statearr_33231 = f__23738__auto__.call(null);
(statearr_33231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___33232);

return statearr_33231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___33232,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23737__auto___33399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33369){
var state_val_33370 = (state_33369[(1)]);
if((state_val_33370 === (7))){
var state_33369__$1 = state_33369;
var statearr_33371_33400 = state_33369__$1;
(statearr_33371_33400[(2)] = null);

(statearr_33371_33400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (1))){
var state_33369__$1 = state_33369;
var statearr_33372_33401 = state_33369__$1;
(statearr_33372_33401[(2)] = null);

(statearr_33372_33401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (4))){
var inst_33333 = (state_33369[(7)]);
var inst_33335 = (inst_33333 < cnt);
var state_33369__$1 = state_33369;
if(cljs.core.truth_(inst_33335)){
var statearr_33373_33402 = state_33369__$1;
(statearr_33373_33402[(1)] = (6));

} else {
var statearr_33374_33403 = state_33369__$1;
(statearr_33374_33403[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (15))){
var inst_33365 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33375_33404 = state_33369__$1;
(statearr_33375_33404[(2)] = inst_33365);

(statearr_33375_33404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (13))){
var inst_33358 = cljs.core.async.close_BANG_.call(null,out);
var state_33369__$1 = state_33369;
var statearr_33376_33405 = state_33369__$1;
(statearr_33376_33405[(2)] = inst_33358);

(statearr_33376_33405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (6))){
var state_33369__$1 = state_33369;
var statearr_33377_33406 = state_33369__$1;
(statearr_33377_33406[(2)] = null);

(statearr_33377_33406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (3))){
var inst_33367 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33369__$1,inst_33367);
} else {
if((state_val_33370 === (12))){
var inst_33355 = (state_33369[(8)]);
var inst_33355__$1 = (state_33369[(2)]);
var inst_33356 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33355__$1);
var state_33369__$1 = (function (){var statearr_33378 = state_33369;
(statearr_33378[(8)] = inst_33355__$1);

return statearr_33378;
})();
if(cljs.core.truth_(inst_33356)){
var statearr_33379_33407 = state_33369__$1;
(statearr_33379_33407[(1)] = (13));

} else {
var statearr_33380_33408 = state_33369__$1;
(statearr_33380_33408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (2))){
var inst_33332 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33333 = (0);
var state_33369__$1 = (function (){var statearr_33381 = state_33369;
(statearr_33381[(9)] = inst_33332);

(statearr_33381[(7)] = inst_33333);

return statearr_33381;
})();
var statearr_33382_33409 = state_33369__$1;
(statearr_33382_33409[(2)] = null);

(statearr_33382_33409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (11))){
var inst_33333 = (state_33369[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33369,(10),Object,null,(9));
var inst_33342 = chs__$1.call(null,inst_33333);
var inst_33343 = done.call(null,inst_33333);
var inst_33344 = cljs.core.async.take_BANG_.call(null,inst_33342,inst_33343);
var state_33369__$1 = state_33369;
var statearr_33383_33410 = state_33369__$1;
(statearr_33383_33410[(2)] = inst_33344);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (9))){
var inst_33333 = (state_33369[(7)]);
var inst_33346 = (state_33369[(2)]);
var inst_33347 = (inst_33333 + (1));
var inst_33333__$1 = inst_33347;
var state_33369__$1 = (function (){var statearr_33384 = state_33369;
(statearr_33384[(10)] = inst_33346);

(statearr_33384[(7)] = inst_33333__$1);

return statearr_33384;
})();
var statearr_33385_33411 = state_33369__$1;
(statearr_33385_33411[(2)] = null);

(statearr_33385_33411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (5))){
var inst_33353 = (state_33369[(2)]);
var state_33369__$1 = (function (){var statearr_33386 = state_33369;
(statearr_33386[(11)] = inst_33353);

return statearr_33386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33369__$1,(12),dchan);
} else {
if((state_val_33370 === (14))){
var inst_33355 = (state_33369[(8)]);
var inst_33360 = cljs.core.apply.call(null,f,inst_33355);
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33369__$1,(16),out,inst_33360);
} else {
if((state_val_33370 === (16))){
var inst_33362 = (state_33369[(2)]);
var state_33369__$1 = (function (){var statearr_33387 = state_33369;
(statearr_33387[(12)] = inst_33362);

return statearr_33387;
})();
var statearr_33388_33412 = state_33369__$1;
(statearr_33388_33412[(2)] = null);

(statearr_33388_33412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (10))){
var inst_33337 = (state_33369[(2)]);
var inst_33338 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33369__$1 = (function (){var statearr_33389 = state_33369;
(statearr_33389[(13)] = inst_33337);

return statearr_33389;
})();
var statearr_33390_33413 = state_33369__$1;
(statearr_33390_33413[(2)] = inst_33338);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (8))){
var inst_33351 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33391_33414 = state_33369__$1;
(statearr_33391_33414[(2)] = inst_33351);

(statearr_33391_33414[(1)] = (5));


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
});})(c__23737__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23722__auto__,c__23737__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__23723__auto__ = null;
var cljs$core$async$map_$_state_machine__23723__auto____0 = (function (){
var statearr_33395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33395[(0)] = cljs$core$async$map_$_state_machine__23723__auto__);

(statearr_33395[(1)] = (1));

return statearr_33395;
});
var cljs$core$async$map_$_state_machine__23723__auto____1 = (function (state_33369){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_33369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e33396){if((e33396 instanceof Object)){
var ex__23726__auto__ = e33396;
var statearr_33397_33415 = state_33369;
(statearr_33397_33415[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33416 = state_33369;
state_33369 = G__33416;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__23723__auto__ = function(state_33369){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__23723__auto____1.call(this,state_33369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__23723__auto____0;
cljs$core$async$map_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__23723__auto____1;
return cljs$core$async$map_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23739__auto__ = (function (){var statearr_33398 = f__23738__auto__.call(null);
(statearr_33398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___33399);

return statearr_33398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23737__auto___33524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___33524,out){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___33524,out){
return (function (state_33500){
var state_val_33501 = (state_33500[(1)]);
if((state_val_33501 === (7))){
var inst_33480 = (state_33500[(7)]);
var inst_33479 = (state_33500[(8)]);
var inst_33479__$1 = (state_33500[(2)]);
var inst_33480__$1 = cljs.core.nth.call(null,inst_33479__$1,(0),null);
var inst_33481 = cljs.core.nth.call(null,inst_33479__$1,(1),null);
var inst_33482 = (inst_33480__$1 == null);
var state_33500__$1 = (function (){var statearr_33502 = state_33500;
(statearr_33502[(7)] = inst_33480__$1);

(statearr_33502[(8)] = inst_33479__$1);

(statearr_33502[(9)] = inst_33481);

return statearr_33502;
})();
if(cljs.core.truth_(inst_33482)){
var statearr_33503_33525 = state_33500__$1;
(statearr_33503_33525[(1)] = (8));

} else {
var statearr_33504_33526 = state_33500__$1;
(statearr_33504_33526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (1))){
var inst_33471 = cljs.core.vec.call(null,chs);
var inst_33472 = inst_33471;
var state_33500__$1 = (function (){var statearr_33505 = state_33500;
(statearr_33505[(10)] = inst_33472);

return statearr_33505;
})();
var statearr_33506_33527 = state_33500__$1;
(statearr_33506_33527[(2)] = null);

(statearr_33506_33527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (4))){
var inst_33472 = (state_33500[(10)]);
var state_33500__$1 = state_33500;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33500__$1,(7),inst_33472);
} else {
if((state_val_33501 === (6))){
var inst_33496 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33507_33528 = state_33500__$1;
(statearr_33507_33528[(2)] = inst_33496);

(statearr_33507_33528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (3))){
var inst_33498 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33500__$1,inst_33498);
} else {
if((state_val_33501 === (2))){
var inst_33472 = (state_33500[(10)]);
var inst_33474 = cljs.core.count.call(null,inst_33472);
var inst_33475 = (inst_33474 > (0));
var state_33500__$1 = state_33500;
if(cljs.core.truth_(inst_33475)){
var statearr_33509_33529 = state_33500__$1;
(statearr_33509_33529[(1)] = (4));

} else {
var statearr_33510_33530 = state_33500__$1;
(statearr_33510_33530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (11))){
var inst_33472 = (state_33500[(10)]);
var inst_33489 = (state_33500[(2)]);
var tmp33508 = inst_33472;
var inst_33472__$1 = tmp33508;
var state_33500__$1 = (function (){var statearr_33511 = state_33500;
(statearr_33511[(10)] = inst_33472__$1);

(statearr_33511[(11)] = inst_33489);

return statearr_33511;
})();
var statearr_33512_33531 = state_33500__$1;
(statearr_33512_33531[(2)] = null);

(statearr_33512_33531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (9))){
var inst_33480 = (state_33500[(7)]);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33500__$1,(11),out,inst_33480);
} else {
if((state_val_33501 === (5))){
var inst_33494 = cljs.core.async.close_BANG_.call(null,out);
var state_33500__$1 = state_33500;
var statearr_33513_33532 = state_33500__$1;
(statearr_33513_33532[(2)] = inst_33494);

(statearr_33513_33532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (10))){
var inst_33492 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33514_33533 = state_33500__$1;
(statearr_33514_33533[(2)] = inst_33492);

(statearr_33514_33533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (8))){
var inst_33480 = (state_33500[(7)]);
var inst_33472 = (state_33500[(10)]);
var inst_33479 = (state_33500[(8)]);
var inst_33481 = (state_33500[(9)]);
var inst_33484 = (function (){var c = inst_33481;
var v = inst_33480;
var vec__33477 = inst_33479;
var cs = inst_33472;
return ((function (c,v,vec__33477,cs,inst_33480,inst_33472,inst_33479,inst_33481,state_val_33501,c__23737__auto___33524,out){
return (function (p1__33417_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33417_SHARP_);
});
;})(c,v,vec__33477,cs,inst_33480,inst_33472,inst_33479,inst_33481,state_val_33501,c__23737__auto___33524,out))
})();
var inst_33485 = cljs.core.filterv.call(null,inst_33484,inst_33472);
var inst_33472__$1 = inst_33485;
var state_33500__$1 = (function (){var statearr_33515 = state_33500;
(statearr_33515[(10)] = inst_33472__$1);

return statearr_33515;
})();
var statearr_33516_33534 = state_33500__$1;
(statearr_33516_33534[(2)] = null);

(statearr_33516_33534[(1)] = (2));


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
});})(c__23737__auto___33524,out))
;
return ((function (switch__23722__auto__,c__23737__auto___33524,out){
return (function() {
var cljs$core$async$merge_$_state_machine__23723__auto__ = null;
var cljs$core$async$merge_$_state_machine__23723__auto____0 = (function (){
var statearr_33520 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33520[(0)] = cljs$core$async$merge_$_state_machine__23723__auto__);

(statearr_33520[(1)] = (1));

return statearr_33520;
});
var cljs$core$async$merge_$_state_machine__23723__auto____1 = (function (state_33500){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_33500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e33521){if((e33521 instanceof Object)){
var ex__23726__auto__ = e33521;
var statearr_33522_33535 = state_33500;
(statearr_33522_33535[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33536 = state_33500;
state_33500 = G__33536;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__23723__auto__ = function(state_33500){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__23723__auto____1.call(this,state_33500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__23723__auto____0;
cljs$core$async$merge_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__23723__auto____1;
return cljs$core$async$merge_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___33524,out))
})();
var state__23739__auto__ = (function (){var statearr_33523 = f__23738__auto__.call(null);
(statearr_33523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___33524);

return statearr_33523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___33524,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23737__auto___33629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___33629,out){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___33629,out){
return (function (state_33606){
var state_val_33607 = (state_33606[(1)]);
if((state_val_33607 === (7))){
var inst_33588 = (state_33606[(7)]);
var inst_33588__$1 = (state_33606[(2)]);
var inst_33589 = (inst_33588__$1 == null);
var inst_33590 = cljs.core.not.call(null,inst_33589);
var state_33606__$1 = (function (){var statearr_33608 = state_33606;
(statearr_33608[(7)] = inst_33588__$1);

return statearr_33608;
})();
if(inst_33590){
var statearr_33609_33630 = state_33606__$1;
(statearr_33609_33630[(1)] = (8));

} else {
var statearr_33610_33631 = state_33606__$1;
(statearr_33610_33631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (1))){
var inst_33583 = (0);
var state_33606__$1 = (function (){var statearr_33611 = state_33606;
(statearr_33611[(8)] = inst_33583);

return statearr_33611;
})();
var statearr_33612_33632 = state_33606__$1;
(statearr_33612_33632[(2)] = null);

(statearr_33612_33632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (4))){
var state_33606__$1 = state_33606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33606__$1,(7),ch);
} else {
if((state_val_33607 === (6))){
var inst_33601 = (state_33606[(2)]);
var state_33606__$1 = state_33606;
var statearr_33613_33633 = state_33606__$1;
(statearr_33613_33633[(2)] = inst_33601);

(statearr_33613_33633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (3))){
var inst_33603 = (state_33606[(2)]);
var inst_33604 = cljs.core.async.close_BANG_.call(null,out);
var state_33606__$1 = (function (){var statearr_33614 = state_33606;
(statearr_33614[(9)] = inst_33603);

return statearr_33614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33606__$1,inst_33604);
} else {
if((state_val_33607 === (2))){
var inst_33583 = (state_33606[(8)]);
var inst_33585 = (inst_33583 < n);
var state_33606__$1 = state_33606;
if(cljs.core.truth_(inst_33585)){
var statearr_33615_33634 = state_33606__$1;
(statearr_33615_33634[(1)] = (4));

} else {
var statearr_33616_33635 = state_33606__$1;
(statearr_33616_33635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (11))){
var inst_33583 = (state_33606[(8)]);
var inst_33593 = (state_33606[(2)]);
var inst_33594 = (inst_33583 + (1));
var inst_33583__$1 = inst_33594;
var state_33606__$1 = (function (){var statearr_33617 = state_33606;
(statearr_33617[(8)] = inst_33583__$1);

(statearr_33617[(10)] = inst_33593);

return statearr_33617;
})();
var statearr_33618_33636 = state_33606__$1;
(statearr_33618_33636[(2)] = null);

(statearr_33618_33636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (9))){
var state_33606__$1 = state_33606;
var statearr_33619_33637 = state_33606__$1;
(statearr_33619_33637[(2)] = null);

(statearr_33619_33637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (5))){
var state_33606__$1 = state_33606;
var statearr_33620_33638 = state_33606__$1;
(statearr_33620_33638[(2)] = null);

(statearr_33620_33638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (10))){
var inst_33598 = (state_33606[(2)]);
var state_33606__$1 = state_33606;
var statearr_33621_33639 = state_33606__$1;
(statearr_33621_33639[(2)] = inst_33598);

(statearr_33621_33639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (8))){
var inst_33588 = (state_33606[(7)]);
var state_33606__$1 = state_33606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33606__$1,(11),out,inst_33588);
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
});})(c__23737__auto___33629,out))
;
return ((function (switch__23722__auto__,c__23737__auto___33629,out){
return (function() {
var cljs$core$async$take_$_state_machine__23723__auto__ = null;
var cljs$core$async$take_$_state_machine__23723__auto____0 = (function (){
var statearr_33625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33625[(0)] = cljs$core$async$take_$_state_machine__23723__auto__);

(statearr_33625[(1)] = (1));

return statearr_33625;
});
var cljs$core$async$take_$_state_machine__23723__auto____1 = (function (state_33606){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_33606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e33626){if((e33626 instanceof Object)){
var ex__23726__auto__ = e33626;
var statearr_33627_33640 = state_33606;
(statearr_33627_33640[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33641 = state_33606;
state_33606 = G__33641;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__23723__auto__ = function(state_33606){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__23723__auto____1.call(this,state_33606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__23723__auto____0;
cljs$core$async$take_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__23723__auto____1;
return cljs$core$async$take_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___33629,out))
})();
var state__23739__auto__ = (function (){var statearr_33628 = f__23738__auto__.call(null);
(statearr_33628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___33629);

return statearr_33628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___33629,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t33649 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33649 = (function (ch,f,map_LT_,meta33650){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33650 = meta33650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33649.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33649.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33652 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33652 = (function (fn1,_,meta33650,map_LT_,f,ch,meta33653){
this.fn1 = fn1;
this._ = _;
this.meta33650 = meta33650;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33653 = meta33653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33642_SHARP_){
return f1.call(null,(((p1__33642_SHARP_ == null))?null:self__.f.call(null,p1__33642_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33654){
var self__ = this;
var _33654__$1 = this;
return self__.meta33653;
});})(___$1))
;

cljs.core.async.t33652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33654,meta33653__$1){
var self__ = this;
var _33654__$1 = this;
return (new cljs.core.async.t33652(self__.fn1,self__._,self__.meta33650,self__.map_LT_,self__.f,self__.ch,meta33653__$1));
});})(___$1))
;

cljs.core.async.t33652.cljs$lang$type = true;

cljs.core.async.t33652.cljs$lang$ctorStr = "cljs.core.async/t33652";

cljs.core.async.t33652.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t33652");
});})(___$1))
;

cljs.core.async.__GT_t33652 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t33652(fn1__$1,___$2,meta33650__$1,map_LT___$1,f__$1,ch__$1,meta33653){
return (new cljs.core.async.t33652(fn1__$1,___$2,meta33650__$1,map_LT___$1,f__$1,ch__$1,meta33653));
});})(___$1))
;

}

return (new cljs.core.async.t33652(fn1,___$1,self__.meta33650,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16579__auto__ = ret;
if(cljs.core.truth_(and__16579__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16579__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33649.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33649.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33651){
var self__ = this;
var _33651__$1 = this;
return self__.meta33650;
});

cljs.core.async.t33649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33651,meta33650__$1){
var self__ = this;
var _33651__$1 = this;
return (new cljs.core.async.t33649(self__.ch,self__.f,self__.map_LT_,meta33650__$1));
});

cljs.core.async.t33649.cljs$lang$type = true;

cljs.core.async.t33649.cljs$lang$ctorStr = "cljs.core.async/t33649";

cljs.core.async.t33649.cljs$lang$ctorPrWriter = (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t33649");
});

cljs.core.async.__GT_t33649 = (function cljs$core$async$map_LT__$___GT_t33649(ch__$1,f__$1,map_LT___$1,meta33650){
return (new cljs.core.async.t33649(ch__$1,f__$1,map_LT___$1,meta33650));
});

}

return (new cljs.core.async.t33649(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t33658 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33658 = (function (ch,f,map_GT_,meta33659){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33659 = meta33659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33660){
var self__ = this;
var _33660__$1 = this;
return self__.meta33659;
});

cljs.core.async.t33658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33660,meta33659__$1){
var self__ = this;
var _33660__$1 = this;
return (new cljs.core.async.t33658(self__.ch,self__.f,self__.map_GT_,meta33659__$1));
});

cljs.core.async.t33658.cljs$lang$type = true;

cljs.core.async.t33658.cljs$lang$ctorStr = "cljs.core.async/t33658";

cljs.core.async.t33658.cljs$lang$ctorPrWriter = (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t33658");
});

cljs.core.async.__GT_t33658 = (function cljs$core$async$map_GT__$___GT_t33658(ch__$1,f__$1,map_GT___$1,meta33659){
return (new cljs.core.async.t33658(ch__$1,f__$1,map_GT___$1,meta33659));
});

}

return (new cljs.core.async.t33658(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t33664 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33664 = (function (ch,p,filter_GT_,meta33665){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33665 = meta33665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33664.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33664.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33664.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33664.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33664.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33664.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33664.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33666){
var self__ = this;
var _33666__$1 = this;
return self__.meta33665;
});

cljs.core.async.t33664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33666,meta33665__$1){
var self__ = this;
var _33666__$1 = this;
return (new cljs.core.async.t33664(self__.ch,self__.p,self__.filter_GT_,meta33665__$1));
});

cljs.core.async.t33664.cljs$lang$type = true;

cljs.core.async.t33664.cljs$lang$ctorStr = "cljs.core.async/t33664";

cljs.core.async.t33664.cljs$lang$ctorPrWriter = (function (this__17170__auto__,writer__17171__auto__,opt__17172__auto__){
return cljs.core._write.call(null,writer__17171__auto__,"cljs.core.async/t33664");
});

cljs.core.async.__GT_t33664 = (function cljs$core$async$filter_GT__$___GT_t33664(ch__$1,p__$1,filter_GT___$1,meta33665){
return (new cljs.core.async.t33664(ch__$1,p__$1,filter_GT___$1,meta33665));
});

}

return (new cljs.core.async.t33664(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23737__auto___33749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___33749,out){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___33749,out){
return (function (state_33728){
var state_val_33729 = (state_33728[(1)]);
if((state_val_33729 === (7))){
var inst_33724 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33730_33750 = state_33728__$1;
(statearr_33730_33750[(2)] = inst_33724);

(statearr_33730_33750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (1))){
var state_33728__$1 = state_33728;
var statearr_33731_33751 = state_33728__$1;
(statearr_33731_33751[(2)] = null);

(statearr_33731_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (4))){
var inst_33710 = (state_33728[(7)]);
var inst_33710__$1 = (state_33728[(2)]);
var inst_33711 = (inst_33710__$1 == null);
var state_33728__$1 = (function (){var statearr_33732 = state_33728;
(statearr_33732[(7)] = inst_33710__$1);

return statearr_33732;
})();
if(cljs.core.truth_(inst_33711)){
var statearr_33733_33752 = state_33728__$1;
(statearr_33733_33752[(1)] = (5));

} else {
var statearr_33734_33753 = state_33728__$1;
(statearr_33734_33753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (6))){
var inst_33710 = (state_33728[(7)]);
var inst_33715 = p.call(null,inst_33710);
var state_33728__$1 = state_33728;
if(cljs.core.truth_(inst_33715)){
var statearr_33735_33754 = state_33728__$1;
(statearr_33735_33754[(1)] = (8));

} else {
var statearr_33736_33755 = state_33728__$1;
(statearr_33736_33755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (3))){
var inst_33726 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33728__$1,inst_33726);
} else {
if((state_val_33729 === (2))){
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33728__$1,(4),ch);
} else {
if((state_val_33729 === (11))){
var inst_33718 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33737_33756 = state_33728__$1;
(statearr_33737_33756[(2)] = inst_33718);

(statearr_33737_33756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (9))){
var state_33728__$1 = state_33728;
var statearr_33738_33757 = state_33728__$1;
(statearr_33738_33757[(2)] = null);

(statearr_33738_33757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (5))){
var inst_33713 = cljs.core.async.close_BANG_.call(null,out);
var state_33728__$1 = state_33728;
var statearr_33739_33758 = state_33728__$1;
(statearr_33739_33758[(2)] = inst_33713);

(statearr_33739_33758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (10))){
var inst_33721 = (state_33728[(2)]);
var state_33728__$1 = (function (){var statearr_33740 = state_33728;
(statearr_33740[(8)] = inst_33721);

return statearr_33740;
})();
var statearr_33741_33759 = state_33728__$1;
(statearr_33741_33759[(2)] = null);

(statearr_33741_33759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (8))){
var inst_33710 = (state_33728[(7)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33728__$1,(11),out,inst_33710);
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
});})(c__23737__auto___33749,out))
;
return ((function (switch__23722__auto__,c__23737__auto___33749,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__23723__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__23723__auto____0 = (function (){
var statearr_33745 = [null,null,null,null,null,null,null,null,null];
(statearr_33745[(0)] = cljs$core$async$filter_LT__$_state_machine__23723__auto__);

(statearr_33745[(1)] = (1));

return statearr_33745;
});
var cljs$core$async$filter_LT__$_state_machine__23723__auto____1 = (function (state_33728){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_33728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e33746){if((e33746 instanceof Object)){
var ex__23726__auto__ = e33746;
var statearr_33747_33760 = state_33728;
(statearr_33747_33760[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33761 = state_33728;
state_33728 = G__33761;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__23723__auto__ = function(state_33728){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__23723__auto____1.call(this,state_33728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__23723__auto____0;
cljs$core$async$filter_LT__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__23723__auto____1;
return cljs$core$async$filter_LT__$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___33749,out))
})();
var state__23739__auto__ = (function (){var statearr_33748 = f__23738__auto__.call(null);
(statearr_33748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___33749);

return statearr_33748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___33749,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto__){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto__){
return (function (state_33927){
var state_val_33928 = (state_33927[(1)]);
if((state_val_33928 === (7))){
var inst_33923 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33929_33970 = state_33927__$1;
(statearr_33929_33970[(2)] = inst_33923);

(statearr_33929_33970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (20))){
var inst_33893 = (state_33927[(7)]);
var inst_33904 = (state_33927[(2)]);
var inst_33905 = cljs.core.next.call(null,inst_33893);
var inst_33879 = inst_33905;
var inst_33880 = null;
var inst_33881 = (0);
var inst_33882 = (0);
var state_33927__$1 = (function (){var statearr_33930 = state_33927;
(statearr_33930[(8)] = inst_33881);

(statearr_33930[(9)] = inst_33882);

(statearr_33930[(10)] = inst_33880);

(statearr_33930[(11)] = inst_33904);

(statearr_33930[(12)] = inst_33879);

return statearr_33930;
})();
var statearr_33931_33971 = state_33927__$1;
(statearr_33931_33971[(2)] = null);

(statearr_33931_33971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (1))){
var state_33927__$1 = state_33927;
var statearr_33932_33972 = state_33927__$1;
(statearr_33932_33972[(2)] = null);

(statearr_33932_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (4))){
var inst_33868 = (state_33927[(13)]);
var inst_33868__$1 = (state_33927[(2)]);
var inst_33869 = (inst_33868__$1 == null);
var state_33927__$1 = (function (){var statearr_33933 = state_33927;
(statearr_33933[(13)] = inst_33868__$1);

return statearr_33933;
})();
if(cljs.core.truth_(inst_33869)){
var statearr_33934_33973 = state_33927__$1;
(statearr_33934_33973[(1)] = (5));

} else {
var statearr_33935_33974 = state_33927__$1;
(statearr_33935_33974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (15))){
var state_33927__$1 = state_33927;
var statearr_33939_33975 = state_33927__$1;
(statearr_33939_33975[(2)] = null);

(statearr_33939_33975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (21))){
var state_33927__$1 = state_33927;
var statearr_33940_33976 = state_33927__$1;
(statearr_33940_33976[(2)] = null);

(statearr_33940_33976[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (13))){
var inst_33881 = (state_33927[(8)]);
var inst_33882 = (state_33927[(9)]);
var inst_33880 = (state_33927[(10)]);
var inst_33879 = (state_33927[(12)]);
var inst_33889 = (state_33927[(2)]);
var inst_33890 = (inst_33882 + (1));
var tmp33936 = inst_33881;
var tmp33937 = inst_33880;
var tmp33938 = inst_33879;
var inst_33879__$1 = tmp33938;
var inst_33880__$1 = tmp33937;
var inst_33881__$1 = tmp33936;
var inst_33882__$1 = inst_33890;
var state_33927__$1 = (function (){var statearr_33941 = state_33927;
(statearr_33941[(8)] = inst_33881__$1);

(statearr_33941[(9)] = inst_33882__$1);

(statearr_33941[(10)] = inst_33880__$1);

(statearr_33941[(14)] = inst_33889);

(statearr_33941[(12)] = inst_33879__$1);

return statearr_33941;
})();
var statearr_33942_33977 = state_33927__$1;
(statearr_33942_33977[(2)] = null);

(statearr_33942_33977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (22))){
var state_33927__$1 = state_33927;
var statearr_33943_33978 = state_33927__$1;
(statearr_33943_33978[(2)] = null);

(statearr_33943_33978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (6))){
var inst_33868 = (state_33927[(13)]);
var inst_33877 = f.call(null,inst_33868);
var inst_33878 = cljs.core.seq.call(null,inst_33877);
var inst_33879 = inst_33878;
var inst_33880 = null;
var inst_33881 = (0);
var inst_33882 = (0);
var state_33927__$1 = (function (){var statearr_33944 = state_33927;
(statearr_33944[(8)] = inst_33881);

(statearr_33944[(9)] = inst_33882);

(statearr_33944[(10)] = inst_33880);

(statearr_33944[(12)] = inst_33879);

return statearr_33944;
})();
var statearr_33945_33979 = state_33927__$1;
(statearr_33945_33979[(2)] = null);

(statearr_33945_33979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (17))){
var inst_33893 = (state_33927[(7)]);
var inst_33897 = cljs.core.chunk_first.call(null,inst_33893);
var inst_33898 = cljs.core.chunk_rest.call(null,inst_33893);
var inst_33899 = cljs.core.count.call(null,inst_33897);
var inst_33879 = inst_33898;
var inst_33880 = inst_33897;
var inst_33881 = inst_33899;
var inst_33882 = (0);
var state_33927__$1 = (function (){var statearr_33946 = state_33927;
(statearr_33946[(8)] = inst_33881);

(statearr_33946[(9)] = inst_33882);

(statearr_33946[(10)] = inst_33880);

(statearr_33946[(12)] = inst_33879);

return statearr_33946;
})();
var statearr_33947_33980 = state_33927__$1;
(statearr_33947_33980[(2)] = null);

(statearr_33947_33980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (3))){
var inst_33925 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33927__$1,inst_33925);
} else {
if((state_val_33928 === (12))){
var inst_33913 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33948_33981 = state_33927__$1;
(statearr_33948_33981[(2)] = inst_33913);

(statearr_33948_33981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (2))){
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33927__$1,(4),in$);
} else {
if((state_val_33928 === (23))){
var inst_33921 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33949_33982 = state_33927__$1;
(statearr_33949_33982[(2)] = inst_33921);

(statearr_33949_33982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (19))){
var inst_33908 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33950_33983 = state_33927__$1;
(statearr_33950_33983[(2)] = inst_33908);

(statearr_33950_33983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (11))){
var inst_33893 = (state_33927[(7)]);
var inst_33879 = (state_33927[(12)]);
var inst_33893__$1 = cljs.core.seq.call(null,inst_33879);
var state_33927__$1 = (function (){var statearr_33951 = state_33927;
(statearr_33951[(7)] = inst_33893__$1);

return statearr_33951;
})();
if(inst_33893__$1){
var statearr_33952_33984 = state_33927__$1;
(statearr_33952_33984[(1)] = (14));

} else {
var statearr_33953_33985 = state_33927__$1;
(statearr_33953_33985[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (9))){
var inst_33915 = (state_33927[(2)]);
var inst_33916 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33927__$1 = (function (){var statearr_33954 = state_33927;
(statearr_33954[(15)] = inst_33915);

return statearr_33954;
})();
if(cljs.core.truth_(inst_33916)){
var statearr_33955_33986 = state_33927__$1;
(statearr_33955_33986[(1)] = (21));

} else {
var statearr_33956_33987 = state_33927__$1;
(statearr_33956_33987[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (5))){
var inst_33871 = cljs.core.async.close_BANG_.call(null,out);
var state_33927__$1 = state_33927;
var statearr_33957_33988 = state_33927__$1;
(statearr_33957_33988[(2)] = inst_33871);

(statearr_33957_33988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (14))){
var inst_33893 = (state_33927[(7)]);
var inst_33895 = cljs.core.chunked_seq_QMARK_.call(null,inst_33893);
var state_33927__$1 = state_33927;
if(inst_33895){
var statearr_33958_33989 = state_33927__$1;
(statearr_33958_33989[(1)] = (17));

} else {
var statearr_33959_33990 = state_33927__$1;
(statearr_33959_33990[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (16))){
var inst_33911 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33960_33991 = state_33927__$1;
(statearr_33960_33991[(2)] = inst_33911);

(statearr_33960_33991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (10))){
var inst_33882 = (state_33927[(9)]);
var inst_33880 = (state_33927[(10)]);
var inst_33887 = cljs.core._nth.call(null,inst_33880,inst_33882);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33927__$1,(13),out,inst_33887);
} else {
if((state_val_33928 === (18))){
var inst_33893 = (state_33927[(7)]);
var inst_33902 = cljs.core.first.call(null,inst_33893);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33927__$1,(20),out,inst_33902);
} else {
if((state_val_33928 === (8))){
var inst_33881 = (state_33927[(8)]);
var inst_33882 = (state_33927[(9)]);
var inst_33884 = (inst_33882 < inst_33881);
var inst_33885 = inst_33884;
var state_33927__$1 = state_33927;
if(cljs.core.truth_(inst_33885)){
var statearr_33961_33992 = state_33927__$1;
(statearr_33961_33992[(1)] = (10));

} else {
var statearr_33962_33993 = state_33927__$1;
(statearr_33962_33993[(1)] = (11));

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
});})(c__23737__auto__))
;
return ((function (switch__23722__auto__,c__23737__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23723__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23723__auto____0 = (function (){
var statearr_33966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33966[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23723__auto__);

(statearr_33966[(1)] = (1));

return statearr_33966;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23723__auto____1 = (function (state_33927){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_33927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e33967){if((e33967 instanceof Object)){
var ex__23726__auto__ = e33967;
var statearr_33968_33994 = state_33927;
(statearr_33968_33994[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33995 = state_33927;
state_33927 = G__33995;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23723__auto__ = function(state_33927){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23723__auto____1.call(this,state_33927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23723__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23723__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto__))
})();
var state__23739__auto__ = (function (){var statearr_33969 = f__23738__auto__.call(null);
(statearr_33969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto__);

return statearr_33969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto__))
);

return c__23737__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23737__auto___34092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___34092,out){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___34092,out){
return (function (state_34067){
var state_val_34068 = (state_34067[(1)]);
if((state_val_34068 === (7))){
var inst_34062 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34069_34093 = state_34067__$1;
(statearr_34069_34093[(2)] = inst_34062);

(statearr_34069_34093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (1))){
var inst_34044 = null;
var state_34067__$1 = (function (){var statearr_34070 = state_34067;
(statearr_34070[(7)] = inst_34044);

return statearr_34070;
})();
var statearr_34071_34094 = state_34067__$1;
(statearr_34071_34094[(2)] = null);

(statearr_34071_34094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (4))){
var inst_34047 = (state_34067[(8)]);
var inst_34047__$1 = (state_34067[(2)]);
var inst_34048 = (inst_34047__$1 == null);
var inst_34049 = cljs.core.not.call(null,inst_34048);
var state_34067__$1 = (function (){var statearr_34072 = state_34067;
(statearr_34072[(8)] = inst_34047__$1);

return statearr_34072;
})();
if(inst_34049){
var statearr_34073_34095 = state_34067__$1;
(statearr_34073_34095[(1)] = (5));

} else {
var statearr_34074_34096 = state_34067__$1;
(statearr_34074_34096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (6))){
var state_34067__$1 = state_34067;
var statearr_34075_34097 = state_34067__$1;
(statearr_34075_34097[(2)] = null);

(statearr_34075_34097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (3))){
var inst_34064 = (state_34067[(2)]);
var inst_34065 = cljs.core.async.close_BANG_.call(null,out);
var state_34067__$1 = (function (){var statearr_34076 = state_34067;
(statearr_34076[(9)] = inst_34064);

return statearr_34076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34067__$1,inst_34065);
} else {
if((state_val_34068 === (2))){
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34067__$1,(4),ch);
} else {
if((state_val_34068 === (11))){
var inst_34047 = (state_34067[(8)]);
var inst_34056 = (state_34067[(2)]);
var inst_34044 = inst_34047;
var state_34067__$1 = (function (){var statearr_34077 = state_34067;
(statearr_34077[(10)] = inst_34056);

(statearr_34077[(7)] = inst_34044);

return statearr_34077;
})();
var statearr_34078_34098 = state_34067__$1;
(statearr_34078_34098[(2)] = null);

(statearr_34078_34098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (9))){
var inst_34047 = (state_34067[(8)]);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34067__$1,(11),out,inst_34047);
} else {
if((state_val_34068 === (5))){
var inst_34047 = (state_34067[(8)]);
var inst_34044 = (state_34067[(7)]);
var inst_34051 = cljs.core._EQ_.call(null,inst_34047,inst_34044);
var state_34067__$1 = state_34067;
if(inst_34051){
var statearr_34080_34099 = state_34067__$1;
(statearr_34080_34099[(1)] = (8));

} else {
var statearr_34081_34100 = state_34067__$1;
(statearr_34081_34100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (10))){
var inst_34059 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34082_34101 = state_34067__$1;
(statearr_34082_34101[(2)] = inst_34059);

(statearr_34082_34101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (8))){
var inst_34044 = (state_34067[(7)]);
var tmp34079 = inst_34044;
var inst_34044__$1 = tmp34079;
var state_34067__$1 = (function (){var statearr_34083 = state_34067;
(statearr_34083[(7)] = inst_34044__$1);

return statearr_34083;
})();
var statearr_34084_34102 = state_34067__$1;
(statearr_34084_34102[(2)] = null);

(statearr_34084_34102[(1)] = (2));


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
});})(c__23737__auto___34092,out))
;
return ((function (switch__23722__auto__,c__23737__auto___34092,out){
return (function() {
var cljs$core$async$unique_$_state_machine__23723__auto__ = null;
var cljs$core$async$unique_$_state_machine__23723__auto____0 = (function (){
var statearr_34088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34088[(0)] = cljs$core$async$unique_$_state_machine__23723__auto__);

(statearr_34088[(1)] = (1));

return statearr_34088;
});
var cljs$core$async$unique_$_state_machine__23723__auto____1 = (function (state_34067){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_34067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e34089){if((e34089 instanceof Object)){
var ex__23726__auto__ = e34089;
var statearr_34090_34103 = state_34067;
(statearr_34090_34103[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34104 = state_34067;
state_34067 = G__34104;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__23723__auto__ = function(state_34067){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__23723__auto____1.call(this,state_34067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__23723__auto____0;
cljs$core$async$unique_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__23723__auto____1;
return cljs$core$async$unique_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___34092,out))
})();
var state__23739__auto__ = (function (){var statearr_34091 = f__23738__auto__.call(null);
(statearr_34091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___34092);

return statearr_34091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___34092,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23737__auto___34239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___34239,out){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___34239,out){
return (function (state_34209){
var state_val_34210 = (state_34209[(1)]);
if((state_val_34210 === (7))){
var inst_34205 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34211_34240 = state_34209__$1;
(statearr_34211_34240[(2)] = inst_34205);

(statearr_34211_34240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (1))){
var inst_34172 = (new Array(n));
var inst_34173 = inst_34172;
var inst_34174 = (0);
var state_34209__$1 = (function (){var statearr_34212 = state_34209;
(statearr_34212[(7)] = inst_34174);

(statearr_34212[(8)] = inst_34173);

return statearr_34212;
})();
var statearr_34213_34241 = state_34209__$1;
(statearr_34213_34241[(2)] = null);

(statearr_34213_34241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (4))){
var inst_34177 = (state_34209[(9)]);
var inst_34177__$1 = (state_34209[(2)]);
var inst_34178 = (inst_34177__$1 == null);
var inst_34179 = cljs.core.not.call(null,inst_34178);
var state_34209__$1 = (function (){var statearr_34214 = state_34209;
(statearr_34214[(9)] = inst_34177__$1);

return statearr_34214;
})();
if(inst_34179){
var statearr_34215_34242 = state_34209__$1;
(statearr_34215_34242[(1)] = (5));

} else {
var statearr_34216_34243 = state_34209__$1;
(statearr_34216_34243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (15))){
var inst_34199 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34217_34244 = state_34209__$1;
(statearr_34217_34244[(2)] = inst_34199);

(statearr_34217_34244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (13))){
var state_34209__$1 = state_34209;
var statearr_34218_34245 = state_34209__$1;
(statearr_34218_34245[(2)] = null);

(statearr_34218_34245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (6))){
var inst_34174 = (state_34209[(7)]);
var inst_34195 = (inst_34174 > (0));
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34195)){
var statearr_34219_34246 = state_34209__$1;
(statearr_34219_34246[(1)] = (12));

} else {
var statearr_34220_34247 = state_34209__$1;
(statearr_34220_34247[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (3))){
var inst_34207 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34209__$1,inst_34207);
} else {
if((state_val_34210 === (12))){
var inst_34173 = (state_34209[(8)]);
var inst_34197 = cljs.core.vec.call(null,inst_34173);
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34209__$1,(15),out,inst_34197);
} else {
if((state_val_34210 === (2))){
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34209__$1,(4),ch);
} else {
if((state_val_34210 === (11))){
var inst_34189 = (state_34209[(2)]);
var inst_34190 = (new Array(n));
var inst_34173 = inst_34190;
var inst_34174 = (0);
var state_34209__$1 = (function (){var statearr_34221 = state_34209;
(statearr_34221[(7)] = inst_34174);

(statearr_34221[(10)] = inst_34189);

(statearr_34221[(8)] = inst_34173);

return statearr_34221;
})();
var statearr_34222_34248 = state_34209__$1;
(statearr_34222_34248[(2)] = null);

(statearr_34222_34248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (9))){
var inst_34173 = (state_34209[(8)]);
var inst_34187 = cljs.core.vec.call(null,inst_34173);
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34209__$1,(11),out,inst_34187);
} else {
if((state_val_34210 === (5))){
var inst_34174 = (state_34209[(7)]);
var inst_34182 = (state_34209[(11)]);
var inst_34177 = (state_34209[(9)]);
var inst_34173 = (state_34209[(8)]);
var inst_34181 = (inst_34173[inst_34174] = inst_34177);
var inst_34182__$1 = (inst_34174 + (1));
var inst_34183 = (inst_34182__$1 < n);
var state_34209__$1 = (function (){var statearr_34223 = state_34209;
(statearr_34223[(11)] = inst_34182__$1);

(statearr_34223[(12)] = inst_34181);

return statearr_34223;
})();
if(cljs.core.truth_(inst_34183)){
var statearr_34224_34249 = state_34209__$1;
(statearr_34224_34249[(1)] = (8));

} else {
var statearr_34225_34250 = state_34209__$1;
(statearr_34225_34250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (14))){
var inst_34202 = (state_34209[(2)]);
var inst_34203 = cljs.core.async.close_BANG_.call(null,out);
var state_34209__$1 = (function (){var statearr_34227 = state_34209;
(statearr_34227[(13)] = inst_34202);

return statearr_34227;
})();
var statearr_34228_34251 = state_34209__$1;
(statearr_34228_34251[(2)] = inst_34203);

(statearr_34228_34251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (10))){
var inst_34193 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34229_34252 = state_34209__$1;
(statearr_34229_34252[(2)] = inst_34193);

(statearr_34229_34252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (8))){
var inst_34182 = (state_34209[(11)]);
var inst_34173 = (state_34209[(8)]);
var tmp34226 = inst_34173;
var inst_34173__$1 = tmp34226;
var inst_34174 = inst_34182;
var state_34209__$1 = (function (){var statearr_34230 = state_34209;
(statearr_34230[(7)] = inst_34174);

(statearr_34230[(8)] = inst_34173__$1);

return statearr_34230;
})();
var statearr_34231_34253 = state_34209__$1;
(statearr_34231_34253[(2)] = null);

(statearr_34231_34253[(1)] = (2));


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
});})(c__23737__auto___34239,out))
;
return ((function (switch__23722__auto__,c__23737__auto___34239,out){
return (function() {
var cljs$core$async$partition_$_state_machine__23723__auto__ = null;
var cljs$core$async$partition_$_state_machine__23723__auto____0 = (function (){
var statearr_34235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34235[(0)] = cljs$core$async$partition_$_state_machine__23723__auto__);

(statearr_34235[(1)] = (1));

return statearr_34235;
});
var cljs$core$async$partition_$_state_machine__23723__auto____1 = (function (state_34209){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_34209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e34236){if((e34236 instanceof Object)){
var ex__23726__auto__ = e34236;
var statearr_34237_34254 = state_34209;
(statearr_34237_34254[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34255 = state_34209;
state_34209 = G__34255;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__23723__auto__ = function(state_34209){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__23723__auto____1.call(this,state_34209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__23723__auto____0;
cljs$core$async$partition_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__23723__auto____1;
return cljs$core$async$partition_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___34239,out))
})();
var state__23739__auto__ = (function (){var statearr_34238 = f__23738__auto__.call(null);
(statearr_34238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___34239);

return statearr_34238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___34239,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23737__auto___34398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23737__auto___34398,out){
return (function (){
var f__23738__auto__ = (function (){var switch__23722__auto__ = ((function (c__23737__auto___34398,out){
return (function (state_34368){
var state_val_34369 = (state_34368[(1)]);
if((state_val_34369 === (7))){
var inst_34364 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
var statearr_34370_34399 = state_34368__$1;
(statearr_34370_34399[(2)] = inst_34364);

(statearr_34370_34399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (1))){
var inst_34327 = [];
var inst_34328 = inst_34327;
var inst_34329 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34368__$1 = (function (){var statearr_34371 = state_34368;
(statearr_34371[(7)] = inst_34328);

(statearr_34371[(8)] = inst_34329);

return statearr_34371;
})();
var statearr_34372_34400 = state_34368__$1;
(statearr_34372_34400[(2)] = null);

(statearr_34372_34400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (4))){
var inst_34332 = (state_34368[(9)]);
var inst_34332__$1 = (state_34368[(2)]);
var inst_34333 = (inst_34332__$1 == null);
var inst_34334 = cljs.core.not.call(null,inst_34333);
var state_34368__$1 = (function (){var statearr_34373 = state_34368;
(statearr_34373[(9)] = inst_34332__$1);

return statearr_34373;
})();
if(inst_34334){
var statearr_34374_34401 = state_34368__$1;
(statearr_34374_34401[(1)] = (5));

} else {
var statearr_34375_34402 = state_34368__$1;
(statearr_34375_34402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (15))){
var inst_34358 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
var statearr_34376_34403 = state_34368__$1;
(statearr_34376_34403[(2)] = inst_34358);

(statearr_34376_34403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (13))){
var state_34368__$1 = state_34368;
var statearr_34377_34404 = state_34368__$1;
(statearr_34377_34404[(2)] = null);

(statearr_34377_34404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (6))){
var inst_34328 = (state_34368[(7)]);
var inst_34353 = inst_34328.length;
var inst_34354 = (inst_34353 > (0));
var state_34368__$1 = state_34368;
if(cljs.core.truth_(inst_34354)){
var statearr_34378_34405 = state_34368__$1;
(statearr_34378_34405[(1)] = (12));

} else {
var statearr_34379_34406 = state_34368__$1;
(statearr_34379_34406[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (3))){
var inst_34366 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34368__$1,inst_34366);
} else {
if((state_val_34369 === (12))){
var inst_34328 = (state_34368[(7)]);
var inst_34356 = cljs.core.vec.call(null,inst_34328);
var state_34368__$1 = state_34368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34368__$1,(15),out,inst_34356);
} else {
if((state_val_34369 === (2))){
var state_34368__$1 = state_34368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34368__$1,(4),ch);
} else {
if((state_val_34369 === (11))){
var inst_34336 = (state_34368[(10)]);
var inst_34332 = (state_34368[(9)]);
var inst_34346 = (state_34368[(2)]);
var inst_34347 = [];
var inst_34348 = inst_34347.push(inst_34332);
var inst_34328 = inst_34347;
var inst_34329 = inst_34336;
var state_34368__$1 = (function (){var statearr_34380 = state_34368;
(statearr_34380[(11)] = inst_34346);

(statearr_34380[(7)] = inst_34328);

(statearr_34380[(12)] = inst_34348);

(statearr_34380[(8)] = inst_34329);

return statearr_34380;
})();
var statearr_34381_34407 = state_34368__$1;
(statearr_34381_34407[(2)] = null);

(statearr_34381_34407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (9))){
var inst_34328 = (state_34368[(7)]);
var inst_34344 = cljs.core.vec.call(null,inst_34328);
var state_34368__$1 = state_34368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34368__$1,(11),out,inst_34344);
} else {
if((state_val_34369 === (5))){
var inst_34336 = (state_34368[(10)]);
var inst_34332 = (state_34368[(9)]);
var inst_34329 = (state_34368[(8)]);
var inst_34336__$1 = f.call(null,inst_34332);
var inst_34337 = cljs.core._EQ_.call(null,inst_34336__$1,inst_34329);
var inst_34338 = cljs.core.keyword_identical_QMARK_.call(null,inst_34329,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34339 = (inst_34337) || (inst_34338);
var state_34368__$1 = (function (){var statearr_34382 = state_34368;
(statearr_34382[(10)] = inst_34336__$1);

return statearr_34382;
})();
if(cljs.core.truth_(inst_34339)){
var statearr_34383_34408 = state_34368__$1;
(statearr_34383_34408[(1)] = (8));

} else {
var statearr_34384_34409 = state_34368__$1;
(statearr_34384_34409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (14))){
var inst_34361 = (state_34368[(2)]);
var inst_34362 = cljs.core.async.close_BANG_.call(null,out);
var state_34368__$1 = (function (){var statearr_34386 = state_34368;
(statearr_34386[(13)] = inst_34361);

return statearr_34386;
})();
var statearr_34387_34410 = state_34368__$1;
(statearr_34387_34410[(2)] = inst_34362);

(statearr_34387_34410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (10))){
var inst_34351 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
var statearr_34388_34411 = state_34368__$1;
(statearr_34388_34411[(2)] = inst_34351);

(statearr_34388_34411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (8))){
var inst_34336 = (state_34368[(10)]);
var inst_34332 = (state_34368[(9)]);
var inst_34328 = (state_34368[(7)]);
var inst_34341 = inst_34328.push(inst_34332);
var tmp34385 = inst_34328;
var inst_34328__$1 = tmp34385;
var inst_34329 = inst_34336;
var state_34368__$1 = (function (){var statearr_34389 = state_34368;
(statearr_34389[(14)] = inst_34341);

(statearr_34389[(7)] = inst_34328__$1);

(statearr_34389[(8)] = inst_34329);

return statearr_34389;
})();
var statearr_34390_34412 = state_34368__$1;
(statearr_34390_34412[(2)] = null);

(statearr_34390_34412[(1)] = (2));


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
});})(c__23737__auto___34398,out))
;
return ((function (switch__23722__auto__,c__23737__auto___34398,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__23723__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__23723__auto____0 = (function (){
var statearr_34394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34394[(0)] = cljs$core$async$partition_by_$_state_machine__23723__auto__);

(statearr_34394[(1)] = (1));

return statearr_34394;
});
var cljs$core$async$partition_by_$_state_machine__23723__auto____1 = (function (state_34368){
while(true){
var ret_value__23724__auto__ = (function (){try{while(true){
var result__23725__auto__ = switch__23722__auto__.call(null,state_34368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23725__auto__;
}
break;
}
}catch (e34395){if((e34395 instanceof Object)){
var ex__23726__auto__ = e34395;
var statearr_34396_34413 = state_34368;
(statearr_34396_34413[(5)] = ex__23726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34414 = state_34368;
state_34368 = G__34414;
continue;
} else {
return ret_value__23724__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__23723__auto__ = function(state_34368){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__23723__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__23723__auto____1.call(this,state_34368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__23723__auto____0;
cljs$core$async$partition_by_$_state_machine__23723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__23723__auto____1;
return cljs$core$async$partition_by_$_state_machine__23723__auto__;
})()
;})(switch__23722__auto__,c__23737__auto___34398,out))
})();
var state__23739__auto__ = (function (){var statearr_34397 = f__23738__auto__.call(null);
(statearr_34397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23737__auto___34398);

return statearr_34397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23739__auto__);
});})(c__23737__auto___34398,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1427705349648