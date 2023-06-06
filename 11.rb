# 編號：CANDY-011
# 程式語言：Ruby
# 題目：找出一個數字陣列裡，出現奇數次數的數字
# 範例：[1, 1, 0]，`0` 只有出現 1 次
#      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

def findOddElm(numbers)
    # 實作寫在這裡
    obj = Hash.new(0)

    numbers.each do |key|
        obj[key] += 1
    end

    obj.each do |key, value|
        if(value % 2 != 0)
            return key
        end
    end
end
  
puts findOddElm([1, 1, 2]) # 印出 2
puts findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10]) # 印出 1
puts findOddElm([0, 1, 0, 1, 0]) # 印出 0
puts findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5]) # 印出 -1
puts findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) # 印出 5