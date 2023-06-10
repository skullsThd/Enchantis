using System;
using System.Security.Cryptography;

class Program {
    static void Main() {
        byte[] data = new byte[] { 0x01, 0x02, 0x03, 0x04, 0x05 };
        byte[] key = new byte[16]; // Chiave di 16 byte (128 bit)
        
        using (Aes aes = Aes.Create()) {
            aes.Key = key;
            aes.GenerateIV();
            
            ICryptoTransform encryptor = aes.CreateEncryptor();
            byte[] encryptedData = encryptor.TransformFinalBlock(data, 0, data.Length);
            
            ICryptoTransform decryptor = aes.CreateDecryptor();
            byte[] decryptedData = decryptor.TransformFinalBlock(encryptedData, 0, encryptedData.Length);
        }
    }
}
