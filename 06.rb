# 編號：CANDY-006
# 程式語言：Ruby
# 題目：找出在數字陣列裡跟其它元素不一樣的值
def findDifferent(numbers)
    # 實作寫在這裡
    obj = Hash.new(0)

    numbers.each do |num|
        obj[num] += 1
    end

    obj.each do |num, counts|
        if counts == 1
            return num
        end
    end
end
  
puts findDifferent([1, 1, 1, 1, 3, 1, 1, 1]) # 印出 3
puts findDifferent([2, 2, 2, 4, 2, 2]) # 印出 4
puts findDifferent([8, 3, 3, 3, 3, 3, 3, 3]) # 印出 8
  