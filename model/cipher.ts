// model/cipher.ts
export const Cipher = {
  // 暗号化マッピングテーブル
  encryptionTable: {
    a: ':solution:',
    b: ':404:',
    c: ':BIG:',
    d: ':kizoku:',
    e: ':shugyo:',
    f: ':heimin:',
    g: ':swifzae:',
    h: ':postgresazae:',
    i: ':apploe:',
    j: ':bunae:',
    k: ':gophae:',
    l: ':shazae:',
    m: ':unity:',
    n: ':_enpera:',
    o: ':_sazae:',
    p: ':sazae_kaido:',
    q: ':lgtm:',
    r: ':sinchoku_yosi:',
    s: ':sinchoku_null:',
    t: ':jian:',
    u: ':mitei:',
    v: ':web:',
    w: ':iine:',
    x: ':shazai_syazai:',
    y: ':sazae_bikkuri:',
    z: ':sazae_arrow:',
  }as { [key: string]: string }, // これを追加

  // 復号化マッピングテーブルを生成
  getDecryptionTable: function () {
    const decryptionTable: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(this.encryptionTable)) {
      decryptionTable[value] = key;
    }
    return decryptionTable;
  },

  // 暗号化関数
  encrypt: function (input: string): string {
    return input.split('').map(char => this.encryptionTable[char.toLowerCase()] || char).join(' ');
  },

  // 復号化関数
  decrypt: function (input: string): string {
    const decryptionTable = this.getDecryptionTable();
    const regex = new RegExp(Object.keys(decryptionTable).join('|'), 'gi');
    return input.replace(regex, matched => decryptionTable[matched]);
  },
};
