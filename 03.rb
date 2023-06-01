# 編號：CANDY-003
# 程式語言：Ruby
# 題目：完成函數的內容，把陣列裡的 0 都移到最後面

list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

def moveZerosToEnd(arr)
  # 程式碼寫在這裡
  zero = arr.select{ |x| x == 0 }
  non_zero = arr.select{ |x| x != 0 }
  result = non_zero + zero
  result.to_s
end

result = moveZerosToEnd(list)
puts result; # 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]