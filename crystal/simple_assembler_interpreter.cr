def simple_assembler(program : Array(String))
  # return an Hash(String, Int32) with the registers
  registers = Hash(String, Int32).new

  curr_index = 0
  while (curr_index < program.size)
    cmd_split = program[curr_index].split(" ")
	
	case cmd_split[0]
	when "mov"
      registers[cmd_split[1]] = cmd_split[2].to_i do
        registers[cmd_split[1]] = registers[cmd_split[2]]
	  end
	when "inc" then registers[cmd_split[1]] += 1
    when "dec" then registers[cmd_split[1]] -= 1
	when "jnz"
      reg_value = 0
      begin
        reg_value = registers[cmd_split[1]]
      rescue
        reg_value = cmd_split[1].to_i
      end

      if reg_value != 0
        curr_index += cmd_split[2].to_i
        next
      end
	end

    curr_index += 1
  end

	registers
end

simple_assembler(["mov c 12", "mov b 0", "mov a 200", "dec a", "inc b", "jnz a -2", "dec c", "mov a b", "jnz c -5", "jnz 0 1", "mov c a"])
