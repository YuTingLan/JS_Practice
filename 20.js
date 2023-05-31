// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
    // 實作寫在這裡
    str = str.toLowerCase()
    // 用正規表示法篩出 'x' 和 'o', 如果呼叫的方法中沒有 'x' 和 'o'回傳空陣列
    const countX = (str.match(/x/g) || []);
    const countO = (str.match(/o/g) || []);
    // 用陣列長度去比較 'x' 和 'o' 的數量是否相同
    return countX.length == countO.length;

}

console.log(xxoo("ooxx")) // true
console.log(xxoo("xxoo")) // true
console.log(xxoo("xxooo")) // false
console.log(xxoo("xoox")) // true
console.log(xxoo("ooAA")) // false
console.log(xxoo("xoXoA")) // true