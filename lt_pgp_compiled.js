if(!lt.util.load.provided_QMARK_('lt.plugins.lt-pgp')) {
goog.provide('lt.plugins.lt_pgp');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
cljs.core.enable_console_print_BANG_.call(null);
lt.plugins.lt_pgp.find_keys = (function find_keys(keys,key_ids){var iter__7466__auto__ = (function iter__8564(s__8565){return (new cljs.core.LazySeq(null,(function (){var s__8565__$1 = s__8565;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8565__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var k = cljs.core.first.call(null,xs__4579__auto__);var iterys__7462__auto__ = ((function (s__8565__$1,k,xs__4579__auto__,temp__4092__auto__){
return (function iter__8566(s__8567){return (new cljs.core.LazySeq(null,((function (s__8565__$1,k,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8567__$1 = s__8567;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8567__$1);if(temp__4092__auto____$1)
{var s__8567__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8567__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8567__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8569 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8568 = 0;while(true){
if((i__8568 < size__7465__auto__))
{var k_id = cljs.core._nth.call(null,c__7464__auto__,i__8568);if(cljs.core.truth_(cljs.core.some.call(null,((function (i__8568,s__8567__$1,s__8565__$1,k_id,c__7464__auto__,size__7465__auto__,b__8569,s__8567__$2,temp__4092__auto____$1,k,xs__4579__auto__,temp__4092__auto__){
return (function (p1__8557_SHARP_){return k_id.equals(p1__8557_SHARP_);
});})(i__8568,s__8567__$1,s__8565__$1,k_id,c__7464__auto__,size__7465__auto__,b__8569,s__8567__$2,temp__4092__auto____$1,k,xs__4579__auto__,temp__4092__auto__))
,cljs.core.js__GT_clj.call(null,k.getKeyIds()))))
{cljs.core.chunk_append.call(null,b__8569,k);
{
var G__8573 = (i__8568 + 1);
i__8568 = G__8573;
continue;
}
} else
{{
var G__8574 = (i__8568 + 1);
i__8568 = G__8574;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8569),iter__8566.call(null,cljs.core.chunk_rest.call(null,s__8567__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8569),null);
}
} else
{var k_id = cljs.core.first.call(null,s__8567__$2);if(cljs.core.truth_(cljs.core.some.call(null,((function (s__8567__$1,s__8565__$1,k_id,s__8567__$2,temp__4092__auto____$1,k,xs__4579__auto__,temp__4092__auto__){
return (function (p1__8557_SHARP_){return k_id.equals(p1__8557_SHARP_);
});})(s__8567__$1,s__8565__$1,k_id,s__8567__$2,temp__4092__auto____$1,k,xs__4579__auto__,temp__4092__auto__))
,cljs.core.js__GT_clj.call(null,k.getKeyIds()))))
{return cljs.core.cons.call(null,k,iter__8566.call(null,cljs.core.rest.call(null,s__8567__$2)));
} else
{{
var G__8575 = cljs.core.rest.call(null,s__8567__$2);
s__8567__$1 = G__8575;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__8565__$1,k,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8565__$1,k,xs__4579__auto__,temp__4092__auto__))
;var fs__7463__auto__ = cljs.core.seq.call(null,iterys__7462__auto__.call(null,key_ids));if(fs__7463__auto__)
{return cljs.core.concat.call(null,fs__7463__auto__,iter__8564.call(null,cljs.core.rest.call(null,s__8565__$1)));
} else
{{
var G__8576 = cljs.core.rest.call(null,s__8565__$1);
s__8565__$1 = G__8576;
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
lt.plugins.lt_pgp.__BEH__encrypt_on_save = (function __BEH__encrypt_on_save(ed,content){lt.plugins.lt_pgp.k = ed;
var key_ids = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-pgp","lt-pgp",4214432518),new cljs.core.Keyword(null,"key-ids","key-ids",4492252604)], null));var ks = cljs.core.clj__GT_js.call(null,lt.plugins.lt_pgp.find_keys.call(null,lt.plugins.lt_pgp.keyring.keys,key_ids));return openpgp.encryptMessage(ks,content);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","encrypt-on-save","lt.plugins.lt-pgp/encrypt-on-save",1039136031),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__encrypt_on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"PGP: Re-encrypt the file with the new contents on save",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save+","save+",1123115456),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","lt-pgp","lt.plugins.lt-pgp/lt-pgp",1913263856),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-pgp","lt-pgp",4214432518)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-pgp",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-password","lt.plugins.lt-pgp/prompt-password",1952579904)], null));
lt.plugins.lt_pgp.password_popup = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Private Key Password",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Private Key password",new cljs.core.Keyword(null,"type","type",1017479852),"password"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null);
lt.plugins.lt_pgp.__BEH__decrypt_with_password = (function __BEH__decrypt_with_password(p){var password = lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))));var vec__8571 = cljs.core.first.call(null,new cljs.core.Keyword(null,"decrypt-queue","decrypt-queue",2688638019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.lt_pgp.lt_pgp_obj)));var ed = cljs.core.nth.call(null,vec__8571,0,null);var message = cljs.core.nth.call(null,vec__8571,1,null);var priv_key = cljs.core.nth.call(null,vec__8571,2,null);var key_ids = cljs.core.nth.call(null,vec__8571,3,null);var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);lt.object.update_BANG_.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decrypt-queue","decrypt-queue",2688638019)], null),cljs.core.rest);
priv_key.decryptKeyPacket(key_ids,password);
return cm.setValue(openpgp.decryptMessage(priv_key,message));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","decrypt-with-password","lt.plugins.lt-pgp/decrypt-with-password",1141498590),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__decrypt_with_password,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.lt_pgp.__BEH__prompt_password = (function __BEH__prompt_password(obj,ed,message,priv_key,key_ids){cljs.core.println.call(null,"Prompting password");
lt.object.update_BANG_.call(null,lt.plugins.lt_pgp.lt_pgp_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decrypt-queue","decrypt-queue",2688638019)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ed,message,priv_key,key_ids], null));
var p = lt.objs.popup.popup_BANG_.call(null,lt.plugins.lt_pgp.password_popup);return lt.object.add_behavior_BANG_.call(null,p,new cljs.core.Keyword("lt.plugins.lt-pgp","decrypt-with-password","lt.plugins.lt-pgp/decrypt-with-password",1141498590));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-password","lt.plugins.lt-pgp/prompt-password",1952579904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__prompt_password,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-pgp","prompt-password","lt.plugins.lt-pgp/prompt-password",1952579904),null], null), null));
lt.plugins.lt_pgp.__BEH__decrypt_on_init = (function __BEH__decrypt_on_init(obj,ed){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,ed,new cljs.core.Keyword(null,"editor.pgp","editor.pgp",3751358666))))
{var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);var message = openpgp.message.readArmored(cm.getValue());var key_ids = message.getEncryptionKeyIds();var keys = lt.plugins.lt_pgp.find_keys.call(null,lt.plugins.lt_pgp.keyring.keys,key_ids);var priv_key = cljs.core.first.call(null,cljs.core.filter.call(null,((function (cm,message,key_ids,keys){
return (function (p1__8572_SHARP_){return p1__8572_SHARP_.isPrivate();
});})(cm,message,key_ids,keys))
,keys));lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-pgp","lt-pgp",4214432518),new cljs.core.Keyword(null,"key-ids","key-ids",4492252604)], null),cljs.core.constantly.call(null,key_ids));
cljs.core.println.call(null,"decrypting!");
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
lt.plugins.lt_pgp.__BEH__save_key = (function __BEH__save_key(stuff){var key = lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stuff))));cljs.core.println.call(null,"saving key: ",key);
lt.plugins.lt_pgp.keyring.importKey(key);
return lt.plugins.lt_pgp.keyring.store();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","save-key","lt.plugins.lt-pgp/save-key",883537515),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_pgp.__BEH__save_key,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-pgp","add-key","lt.plugins.lt-pgp/add-key",1287527183),new cljs.core.Keyword(null,"desc","desc",1016984067),"PGP: Add key to keyring",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Paste your key:",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Public Key",new cljs.core.Keyword(null,"style","style",1123684643),"height: 400px; width:400px;"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));return lt.object.add_behavior_BANG_.call(null,p,new cljs.core.Keyword("lt.plugins.lt-pgp","save-key","lt.plugins.lt-pgp/save-key",883537515));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-pgp","clear-keyring","lt.plugins.lt-pgp/clear-keyring",2456914155),new cljs.core.Keyword(null,"desc","desc",1016984067),"PGP: Delete all keys from keyring",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.plugins.lt_pgp.keyring.clear();
return lt.plugins.lt_pgp.keyring.store();
})], null));
lt.plugins.lt_pgp.lt_pgp_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-pgp","lt-pgp","lt.plugins.lt-pgp/lt-pgp",1913263856));
}

//# sourceMappingURL=lt_pgp_compiled.js.map