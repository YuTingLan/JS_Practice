# 編號：CANDY-014
# 程式語言：Ruby
# 題目：把鄰近的重複值去除，但仍照原本的順序排序
# 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

def uniqueOrder(sequence)
    # 實作寫在這裡
    if( sequence.class == String )
        sequence = sequence.chars
    end

    sequence.chunk { |x| x }.map{|x| x.first }.inspect
end
  
puts uniqueOrder("AABCC") # [ 'A', 'B', 'C']
puts uniqueOrder("AAABBBCCBCC") # [ 'A', 'B', 'C', 'B', 'C']
puts uniqueOrder([1, 2, 1, 2, 1]) # [ 1, 2, 1, 2, 1 ]
puts uniqueOrder([1, 1, 1, 2, 2, 2, 1]) # [1, 2, 1]