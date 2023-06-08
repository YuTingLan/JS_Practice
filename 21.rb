# 編號：CANDY-021
# 程式語言：Ruby
# 題目：實作 Stack 資料結構

class Stack
    # 實作寫在這裡
    def initialize
      @items = []
    end
  
    def push(item)
      if item.nil?
        return
      end
      @items.push(item)
    end
  
    def pop
      if @items.length == 0
        return nil
      end
      return @items.pop
    end
  
    def size
      return @items.length
    end
end
  
stack = Stack.new
stack.push(123)
stack.push(456)
stack.push(nil)
puts stack.size # 印出 2

item = stack.pop # 取出元素
puts item # 印出 456

stack.pop # 繼續取出元素
puts stack.size # 印出 0  