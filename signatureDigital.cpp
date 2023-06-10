#include <iostream>
#include <openssl/rsa.h>
#include <openssl/pem.h>

void sign_rsa(const unsigned char *data, int data_len, RSA *private_key) {
    unsigned char signature[RSA_size(private_key)];
    unsigned int signature_len;
    RSA_sign(NID_sha256, data, data_len, signature, &signature_len, private_key);
}

bool verify_rsa(const unsigned char *data, int data_len, const unsigned char *signature, int signature_len, RSA *public_key) {
    return RSA_verify(NID_sha256, data, data_len, signature, signature_len, public_key);
}
