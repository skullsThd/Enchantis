#include <iostream>
#include <openssl/rsa.h>
#include <openssl/pem.h>

void encrypt_rsa(const unsigned char *data, int data_len, RSA *public_key) {
    unsigned char encrypted_data[RSA_size(public_key)];
    int encrypted_data_len = RSA_public_encrypt(data_len, data, encrypted_data, public_key, RSA_PKCS1_PADDING);
}

void decrypt_rsa(const unsigned char *encrypted_data, int encrypted_data_len, RSA *private_key) {
    unsigned char decrypted_data[RSA_size(private_key)];
    int decrypted_data_len = RSA_private_decrypt(encrypted_data_len, encrypted_data, decrypted_data, private_key, RSA_PKCS1_PADDING);
}
