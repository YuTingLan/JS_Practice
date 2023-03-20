// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) 
{
    // 實作寫在這裡
    // 找出偶數
    let evenNumbers = numbers.filter(num => num % 2 == 0);
    // 找出基數
    let oddNumbers = numbers.filter(num => num % 2 != 0);

    // 如果偶數陣列的長度 = 1, 那偶數就是陣列中不合群的數
    // 相反的偶數陣列的長度 != 1, 那基數才是陣列中不合群的數
    // 最後再轉成數字型態輸出
    if(evenNumbers.length === 1)
    {
        return evenNumbers[0];
    }
    else
    {
        return oddNumbers[0];
    }
}

  console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
  console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160



  