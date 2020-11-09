def duplicate_encode(word : String)
  letter_occurences = Hash(Char, Int32).new(default_value = 0)
  word.downcase.each_char do |letter|
    letter_occurences[letter] += 1
  end

  replacement_hash = Hash(Char, Char).new
  letter_occurences.each do |key, value|
    if value == 1
      replacement_hash[key] = '('
    else
      replacement_hash[key] = ')'
    end
  end

  word.downcase.gsub(replacement_hash)
end
