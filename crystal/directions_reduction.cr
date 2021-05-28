def dir_reduc(arr : Array(String)) : Array(String)
	reduction_hash = Hash(String, String).new
	reduction_hash["NORTH"] = "SOUTH"
	reduction_hash["SOUTH"] = "NORTH"
	reduction_hash["EAST"] = "WEST"
	reduction_hash["WEST"] = "EAST"

  
	while(reduc(arr, reduction_hash))
	end

	return arr
end

def reduc(arr : Array(String), hash) : Bool
	arr.each_with_index do |dir, i|
		break if i + 1 > arr.size - 1

		if hash[dir] == arr[i + 1]
			arr.delete_at(i..i+1)
			return true
		end
	end

	return false
end

dir_reduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

def dir_reduc(arr : Array(String)) : Array(String)
	reduction_hash = Hash(String, String).new
	reduction_hash["NORTH"] = "SOUTH"
	reduction_hash["SOUTH"] = "NORTH"
	reduction_hash["EAST"] = "WEST"
	reduction_hash["WEST"] = "EAST"

  
	keep_looping = true
	while(keep_looping)
		keep_looping = false
		arr.each_with_index do |dir, i|
      break if i + 1 > arr.size - 1
    
			if arr[i + 1] == reduction_hash[dir]
				keep_looping = true
				arr.delete_at(i..i+1)
			end
		end
	end

	return arr
end
