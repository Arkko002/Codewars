class SplitStrings
  def solution(str)
    result = [] of String
    while str.size > 0
      if str.size == 1
        result.push(str[0, 1])
      else
        result.push(str[0, 2])

        str = str.sub(0..1, "")
      end
    end

    result
  end
end
