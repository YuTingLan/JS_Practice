# 編號：CANDY-012
# 程式語言：Ruby
# 題目：把數字加總，最終濃縮成個位數
# 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
#      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

def numberReducer(num)
    # 實作寫在這裡
    if num < 10
        return num
    else
        return numberReducer(num.digits.sum)
    end
end
  
puts numberReducer(9527) # 印出 5
puts numberReducer(1450) # 印出 1
puts numberReducer(5566108) # 印出 4
puts numberReducer(1234567890) # 印出 9