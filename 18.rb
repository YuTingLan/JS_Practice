# 編號：CANDY-018
# 程式語言：Ruby
# 題目：實作一個可以印出隨機整數的函數
def randomNumber(min, max = nil)
    max ||= min
    

    if ( min == max )
        min = 0
    end
    
    max = max - 1
    return (min..max).to_a.sample
    
end

puts randomNumber(50) # 隨機印出 0 ~ 49 之間的任何一個數字
puts randomNumber(5, 30) # 隨機印出 5 ~ 29 之間的任何一個數字