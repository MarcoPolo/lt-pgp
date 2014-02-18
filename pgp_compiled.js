if(!lt.util.load.provided_QMARK_('lt.plugins.lt-pgp')) {
goog.provide('lt.plugins.lt_pgp');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
cljs.core.enable_console_print_BANG_.call(null);
lt.plugins.lt_pgp.find_keys = (function find_keys(keys,key_ids){var iter__7466__auto__ = (function iter__8202(s__8203){return (new cljs.core.LazySeq(null,(function (){var s__8203__$1 = s__8203;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8203__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var k = cljs.core.first.call(null,xs__4579__auto__);var iterys__7462__auto__ = ((function (s__8203__$1,k,xs__4579__auto__,temp__4092__auto__){
return (function iter__8204(s__8205){return (new cljs.core.LazySeq(null,((function (s__8203__$1,k,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8205__$1 = s__8205;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8205__$1);if(temp__4092__auto____$1)
{var s__8205__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8205__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8205__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8207 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8206 = 0;while(true){
if((i__8206 < size__7465__auto__))
{var k_id = cljs.core._nth.call(null,c__7464__auto__,i__8206);if(cljs.core.truth_(cljs.core.some.call(null,((function (i__8206,s__8205__$1,s__8203__$1,k_id,c__7464__auto__,size__7465__auto__,b__8207,s__8205__$2,temp__4092__auto____$1,k,xs__4579__auto__,temp__4092__auto__){
return (function (p1__8195_SHARP_){return k_id.equals(p1__8195_SHARP_);
});})(i__8206,s__8205__$1,s__8203__$1,k_id,c__7464__auto__,size__7465__auto__,b__8207,s__8205__$2,temp__4092__auto____$1,k,xs__4579__auto__,temp__4092__auto__))
,cljs.core.js__GT_clj.call(null,k.getKeyIds()))))
{cljs.core.chunk_append.call(null,b__8207,k);
{
var G__8243 = (i__8206 + 1);
i__8206 = G__8243;
continue;
}
} else
{{
var G__8244 = (i__8206 + 1);
i__8206 = G__8244;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8207),iter__8204.call(null,cljs.core.chunk_rest.call(null,s__8205__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8207),null);
}
} else
{var k_id = cljs.core.first.call(null,s__8205__$2);if(cljs.core.truth_(cljs.core.some.call(null,((function (s__8205__$1,s__8203__$1,k_id,s__8205__$2,temp__4092__auto____$1,k,xs__4579__auto__,temp__4092__auto__){
return (function (p1__8195_SHARP_){return k_id.equals(p1__8195_SHARP_);
});})(s__8205__$1,s__8203__$1,k_id,s__8205__$2,temp__4092__auto____$1,k,xs__4579__auto__,temp__4092__auto__))
,cljs.core.js__GT_clj.call(null,k.getKeyIds()))))
{return cljs.core.cons.call(null,k,iter__8204.call(null,cljs.core.rest.call(null,s__8205__$2)));
} else
{{
var G__8245 = cljs.core.rest.call(null,s__8205__$2);
s__8205__$1 = G__8245;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8203__$1,k,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8203__$1,k,xs__4579__auto__,temp__4092__auto__))
;var fs__7463__auto__ = cljs.core.seq.call(null,iterys__7462__auto__.call(null,key_ids));if(fs__7463__auto__)
{return cljs.core.concat.call(null,fs__7463__auto__,iter__8202.call(null,cljs.core.rest.call(null,s__8203__$1)));
} else
{{
var G__8246 = cljs.core.rest.call(null,s__8203__$1);
s__8203__$1 = G__8246;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,keys);
});
lt.plugins.lt_pgp.find_keys_with_infos = (function find_keys_with_infos(keys,key_infos){var iter__7466__auto__ = (function iter__8214(s__8215){return (new cljs.core.LazySeq(null,(function (){var s__8215__$1 = s__8215;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8215__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var k = cljs.core.first.call(null,xs__4579__auto__);var iterys__7462__auto__ = ((function (s__8215__$1,k,xs__4579__auto__,temp__4092__auto__){
return (function iter__8216(s__8217){return (new cljs.core.LazySeq(null,((function (s__8215__$1,k,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8217__$1 = s__8217;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8217__$1);if(temp__4092__auto____$1)
{var s__8217__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8217__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8217__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8219 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8218 = 0;while(true){
if((i__8218 < size__7465__auto__))
{var k_info = cljs.core._nth.call(null,c__7464__auto__,i__8218);if((-1 < k.getUserIds().indexOf(k_info)))
{cljs.core.chunk_append.call(null,b__8219,k);
{
var G__8247 = (i__8218 + 1);
i__8218 = G__8247;
continue;
}
} else
{{
var G__8248 = (i__8218 + 1);
i__8218 = G__8248;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8219),iter__8216.call(null,cljs.core.chunk_rest.call(null,s__8217__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8219),null);
}
} else
{var k_info = cljs.core.first.call(null,s__8217__$2);if((-1 < k.getUserIds().indexOf(k_info)))
{return cljs.core.cons.call(null,k,iter__8216.call(null,cljs.core.rest.call(null,s__8217__$2)));
} else
{{
var G__8249 = cljs.core.rest.call(null,s__8217__$2);
s__8217__$1 = G__8249;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8215__$1,k,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8215__$1,k,xs__4579__auto__,temp__4092__auto__))
;var fs__7463__auto__ = cljs.core.seq.call(null,iterys__7462__auto__.call(null,key_infos));if(fs__7463__auto__)
{return cljs.core.concat.call(null,fs__7463__auto__,iter__8214.call(null,cljs.core.rest.call(null,s__8215__$1)));
} else
{{
var G__8250 = cljs.core.rest.call(null,s__8215__$1);
s__8215__$1 = G__8250;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,keys);
});
lt.plugins.lt_pgp.keyring = (new openpgp.Keyring());
lt.plugins.lt_pgp.select_keys_popup = (function select_keys_popup(ks){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Select your encryption keys",new cljs.core.Keyword(null,"body","body",1016933652),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"multiple","multiple",1667733890),"true",new cljs.core.Keyword(null,"id","id",1013907597),"key-select",new cljs.core.Keyword(null,"style","style",1123684643),"width: 300px;"], null)], null),(function (){var iter__7466__auto__ = (function iter__8224(s__8225){return (new cljs.core.LazySeq(null,(function (){var s__8225__$1 = s__8225;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8225__$1);if(temp__4092__auto__)
{var s__8225__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8225__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8225__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8227 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8226 = 0;while(true){
if((i__8226 < size__7465__auto__))
{var k = cljs.core._nth.call(null,c__7464__auto__,i__8226);cljs.core.chunk_append.call(null,b__8227,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),k], null));
{
var G__8251 = (i__8226 + 1);
i__8226 = G__8251;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8227),iter__8224.call(null,cljs.core.chunk_rest.call(null,s__8225__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8227),null);
}
} else
{var k = cljs.core.first.call(null,s__8225__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),k], null),iter__8224.call(null,cljs.core.rest.call(null,s__8225__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,ks);
})())),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Encrypt"], null)], null)], null);
});
lt.plugins.lt_pgp.__BEH__encrypt_with_given_keys = (function __BEH__encrypt_with_given_keys(p){var select_el = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)));var key_infos = cljs.core.js__GT_clj.call(null,$(select_el).val());var keys = lt.plugins.lt_pgp.find_keys_with_infos.call(null,lt.plugins.lt_pgp.keyring.keys,key_infos);var ed = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_pgp.lt_pgp_obj),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encrypt-queue","encrypt-queue",3556979483)], null)));var key_ids = cljs.core.mapcat.call(null,((function (select_el,key_infos,keys,ed){
return (function (p1__8228_SHARP_){return p1__8228_SHARP_.getKeyIds();
});})(select_el,key_infos,keys,ed))
,keys);lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input.select2","popup.input.select2",4112542274));
cljs.core.swap_BANG_.call(null,lt.plugins.lt_pgp.lt_pgp_obj,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saving","saving",4399457900)], null),false);
lt.object.update_BANG_.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encrypt-queue","encrypt-queue",3556979483)], null),cljs.core.rest);
cljs.core.swap_BANG_.call(null,ed,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-pgp","lt-pgp",4214432518),new cljs.core.Keyword(null,"key-ids","key-ids",4492252604)], null),key_ids);
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"save","save",1017427183));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","encrypt-with-given-keys","lt.plugins.lt-pgp/encrypt-with-given-keys",2513654303),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__encrypt_with_given_keys,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.lt_pgp.__BEH__prompt_select_keys = (function __BEH__prompt_select_keys(obj,ed,message){var key_infos = cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.js__GT_clj,cljs.core.map.call(null,(function (p1__8229_SHARP_){return p1__8229_SHARP_.getUserIds();
}),lt.plugins.lt_pgp.keyring.keys)));var p = lt.objs.popup.popup_BANG_.call(null,lt.plugins.lt_pgp.select_keys_popup.call(null,key_infos));$("#key-select").select2();
lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input.select2","popup.input.select2",4112542274));
lt.object.add_behavior_BANG_.call(null,p,new cljs.core.Keyword("lt.plugins.lt-pgp","encrypt-with-given-keys","lt.plugins.lt-pgp/encrypt-with-given-keys",2513654303));
return lt.object.update_BANG_.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encrypt-queue","encrypt-queue",3556979483)], null),cljs.core.conj,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-select-keys","lt.plugins.lt-pgp/prompt-select-keys",4162795816),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__prompt_select_keys,new cljs.core.Keyword(null,"desc","desc",1016984067),"Prompt the user to pick the keys for the file",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-select-keys","lt.plugins.lt-pgp/prompt-select-keys",4162795816),null], null), null));
lt.plugins.lt_pgp.__BEH__prompt_no_keys = (function __BEH__prompt_no_keys(obj){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"No keys available",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Use the command PGP: Add key to keyring to add a key"], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Ok"], null)], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-no-keys","lt.plugins.lt-pgp/prompt-no-keys",550122243),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__prompt_no_keys,new cljs.core.Keyword(null,"desc","desc",1016984067),"Tell the user there aren't any keys to use",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-no-keys","lt.plugins.lt-pgp/prompt-no-keys",550122243),null], null), null));
lt.plugins.lt_pgp.__BEH__encrypt_on_save = (function __BEH__encrypt_on_save(ed,content){var key_ids = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-pgp","lt-pgp",4214432518),new cljs.core.Keyword(null,"key-ids","key-ids",4492252604)], null));var ks = cljs.core.clj__GT_js.call(null,lt.plugins.lt_pgp.find_keys.call(null,lt.plugins.lt_pgp.keyring.keys,key_ids));if((cljs.core.count.call(null,ks) === 0))
{if((cljs.core.count.call(null,lt.plugins.lt_pgp.keyring.keys) === 0))
{return lt.object.raise.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-no-keys","lt.plugins.lt-pgp/prompt-no-keys",550122243));
} else
{if(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.lt_pgp.lt_pgp_obj).call(null,new cljs.core.Keyword(null,"saving","saving",4399457900))))
{return null;
} else
{cljs.core.swap_BANG_.call(null,lt.plugins.lt_pgp.lt_pgp_obj,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saving","saving",4399457900)], null),true);
return lt.object.raise.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-select-keys","lt.plugins.lt-pgp/prompt-select-keys",4162795816),ed,lt.plugins.lt_pgp.message);
}
}
} else
{return openpgp.encryptMessage(ks,content);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","encrypt-on-save","lt.plugins.lt-pgp/encrypt-on-save",1039136031),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__encrypt_on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"PGP: Re-encrypt the file with the new contents on save",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save+","save+",1123115456),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","lt-pgp","lt.plugins.lt-pgp/lt-pgp",1913263856),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-pgp","lt-pgp",4214432518)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-pgp",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-password","lt.plugins.lt-pgp/prompt-password",1952579904),new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-select-keys","lt.plugins.lt-pgp/prompt-select-keys",4162795816),new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-no-keys","lt.plugins.lt-pgp/prompt-no-keys",550122243)], null));
lt.plugins.lt_pgp.password_popup = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Private Key Password",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Private Key password",new cljs.core.Keyword(null,"type","type",1017479852),"password"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null);
lt.plugins.lt_pgp.__BEH__decrypt_with_password = (function __BEH__decrypt_with_password(p){var password = lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))));var vec__8231 = cljs.core.first.call(null,new cljs.core.Keyword(null,"decrypt-queue","decrypt-queue",2688638019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.lt_pgp.lt_pgp_obj)));var ed = cljs.core.nth.call(null,vec__8231,0,null);var message = cljs.core.nth.call(null,vec__8231,1,null);var priv_key = cljs.core.nth.call(null,vec__8231,2,null);var key_ids = cljs.core.nth.call(null,vec__8231,3,null);var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);lt.object.update_BANG_.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decrypt-queue","decrypt-queue",2688638019)], null),cljs.core.rest);
priv_key.decryptKeyPacket(key_ids,password);
return cm.setValue(openpgp.decryptMessage(priv_key,message));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","decrypt-with-password","lt.plugins.lt-pgp/decrypt-with-password",1141498590),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__decrypt_with_password,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.lt_pgp.__BEH__prompt_password = (function __BEH__prompt_password(obj,ed,message,priv_key,key_ids){lt.object.update_BANG_.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decrypt-queue","decrypt-queue",2688638019)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ed,message,priv_key,key_ids], null));
var p = lt.objs.popup.popup_BANG_.call(null,lt.plugins.lt_pgp.password_popup);return lt.object.add_behavior_BANG_.call(null,p,new cljs.core.Keyword("lt.plugins.lt-pgp","decrypt-with-password","lt.plugins.lt-pgp/decrypt-with-password",1141498590));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-password","lt.plugins.lt-pgp/prompt-password",1952579904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__prompt_password,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-password","lt.plugins.lt-pgp/prompt-password",1952579904),null], null), null));
lt.plugins.lt_pgp.__BEH__decrypt_on_init = (function __BEH__decrypt_on_init(obj,ed){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,ed,new cljs.core.Keyword(null,"editor.pgp","editor.pgp",3751358666))))
{var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);var message = openpgp.message.readArmored(cm.getValue());var key_ids = message.getEncryptionKeyIds();var keys = lt.plugins.lt_pgp.find_keys.call(null,lt.plugins.lt_pgp.keyring.keys,key_ids);var priv_key = cljs.core.first.call(null,cljs.core.filter.call(null,((function (cm,message,key_ids,keys){
return (function (p1__8232_SHARP_){return p1__8232_SHARP_.isPrivate();
});})(cm,message,key_ids,keys))
,keys));lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-pgp","lt-pgp",4214432518),new cljs.core.Keyword(null,"key-ids","key-ids",4492252604)], null),cljs.core.constantly.call(null,key_ids));
if(cljs.core.truth_(priv_key.decryptKeyPacket(key_ids,"")))
{return cm.setValue(openpgp.decryptMessage(priv_key,message));
} else
{return lt.object.raise.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-password","lt.plugins.lt-pgp/prompt-password",1952579904),ed,message,priv_key,key_ids);
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","decrypt-on-init","lt.plugins.lt-pgp/decrypt-on-init",4030961754),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__decrypt_on_init,new cljs.core.Keyword(null,"desc","desc",1016984067),"PGP: Decrypt when a file is opened",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.plugins.lt_pgp.__BEH__save_key = (function __BEH__save_key(stuff){var key = lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stuff))));lt.plugins.lt_pgp.keyring.importKey(key);
return lt.plugins.lt_pgp.keyring.store();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","save-key","lt.plugins.lt-pgp/save-key",883537515),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__save_key,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-pgp","add-key","lt.plugins.lt-pgp/add-key",1287527183),new cljs.core.Keyword(null,"desc","desc",1016984067),"PGP: Add key to keyring",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Paste your key:",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Public/Private Key",new cljs.core.Keyword(null,"style","style",1123684643),"height: 400px; width:400px;"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));return lt.object.add_behavior_BANG_.call(null,p,new cljs.core.Keyword("lt.plugins.lt-pgp","save-key","lt.plugins.lt-pgp/save-key",883537515));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-pgp","clear-keyring","lt.plugins.lt-pgp/clear-keyring",2456914155),new cljs.core.Keyword(null,"desc","desc",1016984067),"PGP: Delete all keys from keyring",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.plugins.lt_pgp.keyring.clear();
return lt.plugins.lt_pgp.keyring.store();
})], null));
lt.plugins.lt_pgp.lt_pgp_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","lt-pgp","lt.plugins.lt-pgp/lt-pgp",1913263856));
}

//# sourceMappingURL=pgp_compiled.js.map