# 編號：CANDY-017
# 程式語言：Ruby
# 題目：計算數字的 2 進位裡有幾個 1
# 範例：5 -> 101 -> 2 個 1

def countBits(num) 
    # 實作寫在這裡
    num.digits(2).reject { |x| x == 0 }.length
end
  
puts countBits(1234) # 5
puts countBits(1450) # 6
puts countBits(9527) # 8