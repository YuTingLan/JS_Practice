# 編號：CANDY-016
# 程式語言：Ruby
# 題目：把原本 snake_case 的字轉換成 camelCase 格式
# 範例："hello_world" -> "helloWorld"

def toCamelCase(str)
    # 實作寫在這裡
    # 使用正則表達式找到所有 '_' 後面的字母並轉換為大寫
    str.gsub(/_(\w)/) { $1.upcase }
end
  
puts toCamelCase("book") # book
puts toCamelCase("book_store") # bookStore
puts toCamelCase("get_good_score") # getGoodScore