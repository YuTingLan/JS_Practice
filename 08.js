// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) 
{
    // 實作寫在這裡
    // inputArr = [ 'in', 'time', 'machine', 'there', 'are' , 'some' , 'bugs' ]
    // inputArr.length = 7
    // inputArr[j] => inputArr[0]=in...inputArr[6]=bugs
    // inputArr[j].split("") => inputArr[0] = i,n..inputArr[6] = b,u,g,s
    // word.charCodeAt() - 96, 是因為這樣英文字母a..z的計分才會是從1...26
    // scoringArr = [24, 48, 54, 57, 25, 53, 50]
    // maxScore = 57
    // maxIndex = 4
    // inputArr[4] = there

    const scoringArr = []; 
    const inputArr = input.split(" ");  
    for(let j = 0; j < inputArr.length; j++)  
    {
        scoringArr.push(inputArr[j].split("")
                                   .reduce((acc, word) => acc + word.charCodeAt(0) - 96, 1));             
    }
    const maxScore = Math.max(...scoringArr);
    const maxIndex = scoringArr.indexOf(maxScore)
    return inputArr[maxIndex];
}
  
  console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
  console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
  console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there  
  