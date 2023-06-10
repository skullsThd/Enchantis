// Esempio di crittografia simmetrica con AES in Java

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

public class AESExample {
    public static void main(String[] args) throws Exception {
        String plainText = "Hello, World!";
        
        // Genera una chiave AES
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(128);
        SecretKey secretKey = keyGen.generateKey();
        
        // Cifra il testo
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encryptedData = cipher.doFinal(plainText.getBytes());
        
        // Decifra il testo
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decryptedData = cipher.doFinal(encryptedData);
        
        // Stampa il risultato
        System.out.println("Testo originale: " + plainText);
        System.out.println("Testo cifrato: " + new String(encryptedData));
        System.out.println("Testo decifrato: " + new String(decryptedData));
    }
}
