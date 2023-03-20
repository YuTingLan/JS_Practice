// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
    // 實作寫在這裡
    const obj = numbers.reduce((acc, cv) => {
      // 找到重複的key
      if(cv in acc){
        acc[cv]++;
      }else{
        // 賦予新的key, value為1
        acc[cv] = 1;
      }
      return acc;
    }, {});
    // 先找到奇數value
    const oddValue = Object.values(obj).filter(x => x % 2 !==0);
    // 透過value去找key
    return Object.keys(obj).find(x => obj[x] == oddValue);
  };
  
  console.log(findOddElm([1, 1, 2])) // 印出 2
  console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])) // 印出 1
  console.log(findOddElm([0, 1, 0, 1, 0])) // 印出 0
  console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])) // 印出 -1
  console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 印出 5