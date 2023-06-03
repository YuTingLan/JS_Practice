# 編號：CANDY-007
# 程式語言：Ruby
# 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

def findSomeDifferent(numbers) 
    # 實作寫在這裡
    odd_numbers = numbers.select{ |num| num.odd? } 
    even_numbers = numbers.select{ |num| num.even? } 
  
    return odd_numbers.to_a if odd_numbers.length == 1
    return even_numbers.to_a if even_numbers.length == 1

end

  puts findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36]) # 印出 11
  puts findSomeDifferent([160, 3, 1719, 19, 11, 13, -21]) # 印出 160



  