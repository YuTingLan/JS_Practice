// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  // 實作寫在這裡
    //數字轉字串,分割字串, 計算平方, 用“”把字符連接起來
    const result = num.toString()
                      .split("")
                      .map((x) => Math.pow(Number(x), 2)).join("");
    // console.log(result);
    return Number(result);
}

console.log(squareDigits(3212)) // 印出 9414
console.log(squareDigits(2112)) // 印出 4114
console.log(squareDigits(387)) // 印出 96449