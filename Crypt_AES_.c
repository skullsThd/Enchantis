#include <stdio.h>
#include <openssl/aes.h>

void encrypt_aes(unsigned char *data, int data_len, unsigned char *key) {
    AES_KEY aes_key;
    AES_set_encrypt_key(key, 128, &aes_key);
    AES_encrypt(data, data, &aes_key);
}

void decrypt_aes(unsigned char *data, int data_len, unsigned char *key) {
    AES_KEY aes_key;
    AES_set_decrypt_key(key, 128, &aes_key);
    AES_decrypt(data, data, &aes_key);
}
