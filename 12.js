// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
    // 實作寫在這裡
    // 判斷num是不是個位數 
    if(num < 10){
      return num;
    }
    // round one : 轉換input型態並切割數字
    let numToStr = String(num).split("");
    // 把陣列中的數字做累加運算
    digitalArr = numToStr.reduce((acc, cv) => {
      return acc + Number(cv);
    }, 0);
    // 回傳累加後的最終結果
    // *numberReducer(digitalArr)  可以使用“遞迴”方法呼叫自己
    return numberReducer(digitalArr);
  }
  
  console.log(numberReducer(9527)) // 印出 5
  console.log(numberReducer(1450)) // 印出 1
  console.log(numberReducer(5566108)) // 印出 4
  console.log(numberReducer(1234567890)) // 印出 9





  // const numberReducer = (num) => {
  //   // 實作寫在這裡 
  //   let numToStr = String(num).split("")
  //   let digitalArr = num;
  //   for(let i = 0; i < String(digitalArr).length; i++) {
  //     numToStr = String(digitalArr).split("");
  //     digitalArr = numToStr.reduce((acc, cv) => {
  //       return acc + Number(cv);
  //     }, 0);
  //   }
  //   return digitalArr;
  // }