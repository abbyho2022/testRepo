// const crypto = require('crypto');
// const HashKey = "EIF2OZTTlPPF8jsDx9nn8zw8GYk7Acff"; // set random encryption key
// const HashIV = "UUhJUaCgZsV8LnLj"; // set random initialisation vector
// // ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

// const mid = "TWD987086921";

// const encrypt = ((val) => {
//   let cipher = crypto.createCipheriv('aes-256-cbc', HashKey, HashIV);
//   let encrypted = cipher.update(val, 'utf8', 'base64');
//   encrypted += cipher.final('base64');
//   return encrypted;
// });

// const decrypt = ((encrypted) => {
//   let decipher = crypto.createDecipheriv('aes-256-cbc', HashKey, HashIV);
//   let decrypted = decipher.update(encrypted, 'base64', 'utf8');
//   return (decrypted + decipher.final('utf8'));
// });



// encrypted_key = encrypt(mid);
// original_mid = decrypt(encrypted_key);

// console.log('encrypted_key', encrypted_key)
// console.log('original_phrase', original_phrase)

// // star this gist if you found it useful

const NewebPay = require('node-newebpay')

let key = 'EIF2OZTTlPPF8jsDx9nn8zw8GYk7Acff'
let iv = 'UUhJUaCgZsV8LnLj'
let trade_info = {
  MerchantID: 'MS3256516',
  RespondType: 'JSON',
  TimeStamp: Date.now(),
  Version: '2.0',
  MerchantOrderNo: 'A000016', 
  Amt: 40,
  ItemDesc: 'Test',
  Email:'abby.ho@eztable.com',
  LINEPAY: 1
}
let trade_info_aes = NewebPay(key, iv).TradeInfo(trade_info).encrypt()
console.log(trade_info_aes)

let trade_info_dec = NewebPay(key, iv).TradeInfo(trade_info_aes).decrypt()
console.log(trade_info_dec)

let trade_sha = NewebPay(key, iv).TradeInfo(trade_info_aes).TradeSha()
console.log(trade_sha) 