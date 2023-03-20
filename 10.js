// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"
function expandedForm(num) 
{
  const numArr = num.toString().split("")
  const result = numArr.map((currentValue, index) =>{
    // 計算10的指數
    const zeros = Math.pow(10, numArr.length - 1 - index);
    if(currentValue > 0){
      if(index === numArr.length - 1){
        return `${currentValue}`;
      }else{
        return `${zeros} x ${currentValue}`
      }
    }else{
      return "";
    }
}).filter((x) => x !== "").join(" + ");
  return result;
}

console.log(expandedForm(8)) // 印出 8
console.log(expandedForm(25)) // 印出 10 x 2 + 5
console.log(expandedForm(148)) // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)) // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)) // 印出 10000 x 6 + 100 x 3 + 8





// function expandedForm(num) 
// {
//   const numArr = num.toString().split("");
//   // 計算10的指數
//   const zeros = Math.pow(10, numArr.length - 1);
//   const result = numArr.reduce((acc, cv, index) => 
//   {
//     const digital = Number(cv);
    
//     if(digital > 0) 
//     {
//       // 判斷是否為最後一個數字
//       if(index === numArr.length - 1)
//       {
//         // 印出最後一個個位數
//         acc[acc.length] = String(digital);
//       }
//       else
//       {
//         // 印出個位數以外的其餘位數
//         acc[acc.length] = (`${zeros} x ${digital}`)
//       }
//       return acc;
//     }else
//     {
//       // 過濾所有位數為零的數字
//       return acc;
//     }
//   }, []).join(" + ");
//   return result;
// }