// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
    // 實作寫在這裡
    if(str.length % 2 !== 0){
        //字串長度為單數的補‘＿‘
        const el = ["_"];   
        return (str.concat(el).match(/.{1,2}/g))
    }
    return str.match(/.{1,2}/g) || [];
}
  console.log(splitString("abcdef")) // ["ab", "cd", "ef"]
  console.log(splitString("abcdefg")) // ["ab", "cd", "ef", "g_"]
  console.log(splitString("")) // []