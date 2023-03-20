// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"]
const chars2 = ["O", "Q", "R", "S"]

function missingChar(chars) {
  // 實作寫在這裡

  for(let i = 0; i < chars.length; i++) {
    //將字串轉成ascii
    const SOne = chars[i].charCodeAt(0);
    const STwo = chars[i + 1].charCodeAt(0);
    //按順序的話, 前後字母差值為1, 故若陣列中前後字串相減後差值 >1 = 有缺字母
    if(STwo - SOne > 1){
      //故SOne+1 or STwo-1 即為陣列中缺少的字母
      //將ascii碼轉為對應字母
      return String.fromCharCode(SOne+1);  
    }
  }
}

console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P

// console.log(["a", "b", "c", "d", "f", "g"].charCodeAt(0)); 
// returns 65:"A"

// 提示：
// 可使用字串的 charCodeAt 方法...