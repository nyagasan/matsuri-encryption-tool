// model/cipher.ts
export const Cipher = {
    // 暗号化マッピングテーブル
    encryptionTable: {
      a: ':apple:',
      b: ':banana:',
      // 他のアルファベットに対応する暗号も同様に追加...
    } as { [key: string]: string },
  
    // 復号化マッピングテーブル
    decryptionTable: {
      ':apple:': 'a',
      ':banana:': 'b',
      // 他の暗号に対応するアルファベットも同様に追加...
    } as { [key: string]: string },
  
    // 暗号化関数
    encrypt: (input: string): string => {
      return input.split('').map((char) => Cipher.encryptionTable[char.toLowerCase()] || char).join(' ');
    },
  
    // 復号化関数
    decrypt: (input: string): string => {
      const regex = RegExp(Object.keys(Cipher.decryptionTable).join('|'), 'gi');
      return input.replace(regex, (matched) => Cipher.decryptionTable[matched] || matched);
    },
  };
  