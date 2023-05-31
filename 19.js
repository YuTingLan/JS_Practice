// 編號：CANDY-019
// 程式語言：JavaScript
// 題目：檢查是否為某個數字的平方數

function isSquare(num) {
    // 實作寫在這裡
    //取其平方根並判斷是否有小數點
    return Math.sqrt(num) % 1 == 0
}
  console.log(isSquare(0)) // true
  console.log(isSquare(4)) // true
  console.log(isSquare(5)) // false
  console.log(isSquare(100)) // true
  console.log(isSquare(-4)) // false
  console.log(isSquare(-1)) // false