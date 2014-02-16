(ns lt.plugins.lt-pgp
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.popup :as popup]
            [lt.objs.editor :as editor]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(enable-console-print!)

(defn find-keys [keys key-ids]
  (for [k keys
        k-id key-ids
        :when (some #(.equals k-id %) (js->clj (.getKeyIds k)))]
    k))

(def keyring (js/openpgp.Keyring.))

(declare lt-pgp-obj)
(behavior ::encrypt-on-save
          :triggers #{:save+}
          :desc "PGP: Re-encrypt the file with the new contents on save"
          :reaction (fn [ed content]
                      (def k ed)
                      (let [key-ids (get-in @ed [:lt-pgp :key-ids])
                            ks (clj->js (find-keys (.-keys keyring) key-ids))]
                        (js/openpgp.encryptMessage ks content))))

(object/object* ::lt-pgp
                :tags [:lt-pgp]
                :name "lt-pgp"
                :behaviors [::prompt-password])

(def password-popup
  {:header "Private Key Password"
   :body [:input {:placeholder "Private Key password"
                  :type "password"}]
   :buttons [{:label "Done"}]})

(behavior ::decrypt-with-password
          :triggers #{:close}
          :reaction (fn [p]
                      (let [password (dom/val (dom/$ :input (:content @p)))
                            [ed message priv-key key-ids] (first (:decrypt-queue @lt-pgp-obj))
                            cm (editor/->cm-ed ed)]
                        (object/update! lt-pgp-obj [:decrypt-queue] rest)
                        (.decryptKeyPacket priv-key key-ids password)
                        (.setValue cm (js/openpgp.decryptMessage priv-key message)))))


(behavior ::prompt-password
          :triggers #{::prompt-password}
          :reaction (fn [obj ed message priv-key key-ids]
                      (println "Prompting password")
                      (object/update! lt-pgp-obj [:decrypt-queue] conj [ed message priv-key key-ids])
                      (let [p (popup/popup! password-popup)]
                        (object/add-behavior! p ::decrypt-with-password))))

(behavior ::decrypt-on-init
          :triggers #{:open}
          :desc "PGP: Decrypt when a file is opened"
          :reaction (fn [obj ed]
                      (when (object/has-tag? ed :editor.pgp)
                        (let [cm (editor/->cm-ed ed)
                              message (js/openpgp.message.readArmored (.getValue cm))
                              key-ids (.getEncryptionKeyIds message)
                              keys (find-keys (.-keys keyring) key-ids)
                              priv-key (first (filter #(.isPrivate %) keys))]
                          (object/update! ed [:lt-pgp :key-ids] (constantly key-ids))
                          (println "decrypting!")
                          ;; See if we need a password to decrypt first
                          (if (.decryptKeyPacket priv-key key-ids "")
                            (.setValue cm (js/openpgp.decryptMessage priv-key message))
                            ;; We do need  a password, so let's prompt for one
                            (object/raise lt-pgp-obj ::prompt-password
                                          ed message priv-key key-ids))))))

(behavior ::save-key
          :triggers #{:close}
          :reaction (fn [stuff]
                      (let [key (dom/val (dom/$ :textarea (:content @stuff)))]
                        (println "saving key: " key)
                        (.importKey keyring key)
                        (.store keyring))))

(cmd/command {:command ::add-key
              :desc "PGP: Add key to keyring"
              :exec (fn []
                      (let [p
                            (popup/popup!
                             {:header "Paste your key:"
                              :body [:textarea {:placeholder "Public Key"
                                                 :style "height: 400px; width:400px;"}]
                              :buttons [{:label "Done"}]})]
                        (object/add-behavior! p ::save-key)))})

(cmd/command {:command ::clear-keyring
              :desc "PGP: Delete all keys from keyring"
              :exec (fn []
                      ;; Delete the keys
                      (.clear keyring)
                      ;; Delete localstorage
                      (.store keyring))})


(def lt-pgp-obj (object/create ::lt-pgp))
