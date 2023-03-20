// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283
// 各數字分別乘以 1,2,1,2,1,2,4,1

function isValidVatNumber(vat) {
    // 實作寫在這裡
    const params = [1,2,1,2,1,2,4,1];
    // 把統編跟邏輯乘數分解並分開相乘
    const product = vat.split("")
                  .map((value, index) => {return value * params[index];})
    // 算出乘績之和（個位數＋十位數）
    const productSum = product.reduce((acc, cv) => {
      return acc += parseInt(cv / 10) + (cv % 10) 
    }, 0)
    // 統一編號邏輯檢查
    return (vat.slice(6,7) !== 7 && productSum % 5 == 0);
  }
  
  console.log(isValidVatNumber("10458575")) // true
  console.log(isValidVatNumber("88117125")) // true
  console.log(isValidVatNumber("53212539")) // true
  console.log(isValidVatNumber("88117126")) // false