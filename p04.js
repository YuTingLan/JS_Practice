// 請寫一個 JavaScript 函式，接收一個陣列，回傳這個陣列中的最大值

function findMaxValue(arr){
    return Math.max(...arr);
}
console.log(findMaxValue([3,5,33,1,66,7,43]));