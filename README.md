# PGP for Light Table
This plugin allows you to edit and create PGP encrypted files seamlessly.

# How to use

## Importing keys
Right now this plugin doesn't use your local GPG key database (on the plus side this means you don't need GPG installed to use this). So to add keys to the plugin's keyring use the command `PGP: Add key to keyring`. You'll need to paste in your ASCII armored key. Use `gpg --export -a NAME` to export your public key, and `gpg  --export-secret-keys` to export your private key.


If you want to read encrypted files, you'll need to add a private key as well.

## Creating a file
Simply make a new file and save it with either a
`.gpg`, `.pgp`, or `.asc` extension and you'll be prompted to pick a key (or keys) to encrypt the file with.

## Reading a file

When you open a `.gpg`, `.pgp`, or `.asc` file,
the pgp will check if it has the keys necessary to decrypt it. If it can decrypt the file, you'll see the decrypted contents in the editor. If your private key is password protected it will prompt you for your decryption password, before decrypting.

You can save the file after any changes, and the file will be re-encrypted with the new content.
