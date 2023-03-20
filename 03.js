// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
  // 程式碼寫在這裡
  let filteredOne = list.filter( (x) => {
    return x === 0;
  });
  let filteredTwo = list.filter( (x) => {
    return x !== 0;
  });
  return filteredTwo.concat(filteredOne);


//   or
// 程式碼寫在這裡
//   let zeroArr = [];
//   let newArr = [];

//   for(let i = 0; i < arr.length; i++) {
//       if(arr[i] === 0){        
//           zeroArr = [...zeroArr, arr[i]];
//           // console.log(zeroArr);
//       }else{
//           newArr = [...newArr, arr[i]];
//           // console.log(newArr);
//       };
//   }
//   return newArr.concat(zeroArr);
// }

//   or
// 程式碼寫在這裡
// let zeroArr = []; //存放０的陣列
// let newArr = [];  // 存放重組後的新陣列

// for(let i = 0; i < arr.length; i++) {
//     //判斷陣列中有＝＝＝0的元素就存到zeroArr
//     //使用pash將元素從最後面一個一個加上去
//     if(arr[i] === 0){        
//         zeroArr.push(arr[i]);
//     }else{
//         newArr.push(arr[i]); //否則就存到newArr
//     };
// };

// //使用concat合併陣列後並回傳
// let newList = newArr.concat(zeroArr);
// return newList;
}

let result = moveZerosToEnd(list)
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]