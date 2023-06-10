from cryptography.fernet import Fernet

def encrypt_with_password(data, password):
    key = Fernet.generate_key()
    cipher = Fernet(key)
    encrypted_data = cipher.encrypt(data)
    return key, encrypted_data

def decrypt_with_password(encrypted_data, password):
    cipher = Fernet(key)
    decrypted_data = cipher.decrypt(encrypted_data)
    return decrypted_data
