// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
    // 實作寫在這裡
    constructor(){
      this.items = [];
    }

    push(item){
      if(item == null){
        return;
      }
      this.items.push(item);
    }

    pop(){
      if(this.items.length === 0 ){
        return null;
      } 
      return this.items.pop();
    }

    get size(){
      return this.items.length;
    }

  }
  
  const stack = new Stack()
  stack.push(123)
  stack.push(456)
  stack.push()
  console.log(stack.size) // 印出 2
  
  const item = stack.pop() // 取出元素
  console.log(item) // 印出 456
  
  stack.pop() // 繼續取出元素
  console.log(stack.size) // 印出 0