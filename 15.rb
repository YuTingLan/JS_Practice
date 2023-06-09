# 編號：CANDY-015
# 程式語言：Ruby
# 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
# 範例：
#      "abcdef" -> ['ab', 'cd', 'ef']
#      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

def splitString(str)
    # 實作寫在這裡
    return str.chars.each_slice(2).map { |s| s.join.ljust(2, "_") }.inspect
end
puts splitString("abcdef") # ["ab", "cd", "ef"]
puts splitString("abcdefg") # ["ab", "cd", "ef", "g_"]
puts splitString("") # []