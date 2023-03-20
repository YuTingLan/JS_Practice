// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
    // 實作寫在這裡
    //用indexOf找出重複的元素,再用filter把不一樣的元素過濾掉
    const sameArr = numbers.filter(function (element, index, numbers) {
        return numbers.indexOf(element) !== index;
    });
    //用filter把numbers中不等於sameArr[0]的元素濾出
    const resultArr = numbers.filter( (x) => {
        return x !== sameArr[0];
    });
    //最後回傳的值再轉成數字
    return Number(resultArr);
  }
  
  console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) // 印出 3
  console.log(findDifferent([2, 2, 2, 4, 2, 2])) // 印出 4
  console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) // 印出 8