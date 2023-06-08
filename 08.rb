# 編號：CANDY-008
# 程式語言：Ruby
# 題目：傳入一字串，計算得分最高的字
#      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
#      所有傳入的字都是小寫。

def highestScoreWord(input) 
    # 實作寫在這裡
    word = input.split(" ")
    sum_word = word.map { |word| word.chars.sum { |word| word.ord - 'a'.ord } }
    max_sum = sum_word.max

    max_word = word[sum_word.index(max_sum)]
    return max_word
end

puts highestScoreWord("lorem ipsum dolor sit amet") # 印出 ipsum
puts highestScoreWord("heyn i need a rubygem up to build this") # 印出 rubygem
puts highestScoreWord("in time machine there are some bugs") # 印出 there  

