(ns lt.plugins.lt-pgp
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.popup :as popup]
            [lt.objs.editor :as editor]
            [lt.objs.context :as ctx]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(enable-console-print!)

(defn find-keys [keys key-ids]
  (for [k keys
        k-id key-ids
        :when (some #(.equals k-id %) (js->clj (.getKeyIds k)))]
    k))

(defn find-keys-with-infos [keys key-infos]
  (for [k keys
        k-info key-infos
        :when (< -1 (.indexOf (.getUserIds k) k-info))]
    k))


(def keyring (js/openpgp.Keyring.))

(declare lt-pgp-obj)

(defn select-keys-popup [ks]
  {:header "Select your encryption keys"
   :body (vec
          (concat [:select {:multiple "true" :id "key-select" :style "width: 300px;"}]
                  (for [k ks]
                    [:option k])))
   :buttons [{:label "Encrypt"}]})


(behavior ::encrypt-with-given-keys
          :triggers #{:close}
          :reaction (fn [p]
                      (let [select-el (dom/$ :select (:content @p))
                            key-infos (-> select-el js/$ (.val) js->clj)
                            keys (find-keys-with-infos (.-keys keyring) key-infos)
                            ed  (first (get-in @lt-pgp-obj [:encrypt-queue]))
                            key-ids (mapcat #(.getKeyIds %) keys)]
                        (ctx/out! :popup.input.select2)
                        (swap! lt-pgp-obj assoc-in [:saving] false)
                        (object/update! lt-pgp-obj [:encrypt-queue] rest)
                        (swap! ed assoc-in [:lt-pgp :key-ids] key-ids)
                        (object/raise ed :save))))

(behavior ::prompt-select-keys
          :triggers #{::prompt-select-keys}
          :desc "Prompt the user to pick the keys for the file"
          :reaction (fn [obj ed message]
                      (let [key-infos (set (mapcat js->clj (map #(.getUserIds %) (.-keys keyring))))
                            p (popup/popup!
                               (select-keys-popup key-infos))]
                        (.select2 (js/$ "#key-select"))
                        (ctx/in! :popup.input.select2)
                        (object/add-behavior! p ::encrypt-with-given-keys)
                        (object/update! lt-pgp-obj [:encrypt-queue] conj ed))))

(behavior ::prompt-no-keys
          :triggers #{::prompt-no-keys}
          :desc "Tell the user there aren't any keys to use"
          :reaction (fn [obj]
                      (popup/popup!
                       {:header "No keys available"
                        :body [:p "Use the command PGP: Add key to keyring to add a key"]
                        :buttons [{:label "Ok"}]})))

(behavior ::encrypt-on-save
          :triggers #{:save+}
          :desc "PGP: Re-encrypt the file with the new contents on save"
          :reaction (fn [ed content]
                      (let [key-ids (get-in @ed [:lt-pgp :key-ids])
                            ks (clj->js (find-keys (.-keys keyring) key-ids))]
                        (if (zero? (count ks))
                          (if (zero? (count (.-keys keyring)))
                            (object/raise lt-pgp-obj ::prompt-no-keys)
                            (when-not (@lt-pgp-obj :saving)
                              (swap! lt-pgp-obj assoc-in [:saving] true)
                              (object/raise lt-pgp-obj ::prompt-select-keys ed message)))
                          (js/openpgp.encryptMessage ks content)))))


(object/object* ::lt-pgp
                :tags [:lt-pgp]
                :name "lt-pgp"
                :behaviors [::prompt-password ::prompt-select-keys ::prompt-no-keys])

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
                        (.importKey keyring key)
                        (.store keyring))))

(cmd/command {:command ::add-key
              :desc "PGP: Add key to keyring"
              :exec (fn []
                      (let [p
                            (popup/popup!
                             {:header "Paste your key:"
                              :body [:textarea {:placeholder "Public/Private Key"
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

