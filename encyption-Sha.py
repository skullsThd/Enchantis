import hashlib

def hash_sha256(data):
    sha256 = hashlib.sha256()
    sha256.update(data)
    hashed_data = sha256.digest()
    return hashed_data
