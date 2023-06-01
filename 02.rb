# 編號：CANDY-002
# 程式語言：Ruby
# 題目：請寫一小段程式，印出連續陣列裡缺少的字元

chars1 = ["a", "b", "c", "d", "f", "g"]
chars2 = ["O", "Q", "R", "S"]

def missingChar(chars)
    char_all = Set.new(chars[0]...chars[-1])
    miss_char = char_all - chars
    miss_char.to_a
end

puts missingChar(chars1) # 印出 e
puts missingChar(chars2) # 印出 P