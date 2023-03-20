// 請寫一個 JavaScript 函式，接收一個字串，回傳這個字串中出現次數最多的字元及其出現次數。若有多個字元出現次數相同，請回傳其中任意一個。

function nToStr(str){
    const strArr = str.split("").reduce((acc, cv, index, arr) => {
        if(cv in acc){
            acc[cv] += 1;
        }else{
            acc[cv] = 1;
        }
        return acc;
    },{})
   return `${Object.keys(strArr).find( (x) => strArr[x] == (Math.max(...Object.values(strArr))))} : ${Math.max(...Object.values(strArr))}` ;
}
console.log(nToStr("hello world"));





// obj = {"aa" : 1 , "bb" : 2 , "cc" : 3}
// // obj["aa"] = 1
// // // 用 key 找 value
// // console.log(obj["aa"]);
// // //用 value 找 key
// // console.log(Object.keys(obj).find( (x) => obj[x] == 1));

// console.log(Object.keys(obj));