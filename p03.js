function sum (valueOne, valueTwo){
    // 請實作
    return valueOne + valueTwo;
  }
  
  function unitsTensSum (valueOne, valueTwo){
    // 請實作
    return parseInt(sum(valueOne, valueTwo) / 10) + (sum(valueOne, valueTwo) % 10);
  }
  
  console.log(sum(7,8));
  console.log(unitsTensSum(10,9));
  // 1. function sum 帶入 7、8  => 得 15
  // 2. function sum 帶入 10、9  => 得 19
  // 3. function unitsTensSum 帶入 7、8  => 得 6
  // 4. function unitsTensSum 帶入 10、9 => 得 10

  


  


