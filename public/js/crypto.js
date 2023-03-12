const crypto = require('crypto'); // 導入加密模組

function hash(input) {
  const hash = crypto.createHash('sha256'); // 使用sha256加密法
  hash.update(input); //將需要的資料放入hash加密
  return hash.digest('base64').slice(0, 5); // digest() 方法計算雜湊值並轉換為 base64 編碼的字串、使用 String.slice() 方法從雜湊值字串的開頭切割出前 5 個字元
}

module.exports = { hash } // 在 short.js 中，使用 module.exports = { hash } 導出一個對象，該對象中包含了一個 hash 函數，這樣在其他檔案中導入 short.js 時，就可以使用 hash 函數了。