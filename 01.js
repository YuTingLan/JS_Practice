// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
    // 實作程式碼寫在這裡
    
    //先做排序, 並由小至大排序
    arr.sort((num1, num2) => num1 - num2);
    //上面已經做完由小值大排序, 所以直接取用arr[0]跟arr[1]位置再做加總就可以得到陣列中兩個最小值的總和
    return arr[0] + arr[1];
}
  const list1 = [19, 5, 42, 2, 77]
  const list2 = [23, 15, 59, 4, 17]
  
  console.log(sumOfSmallestValues(list1)) // 印出 7
  console.log(sumOfSmallestValues(list2)) // 印出 19