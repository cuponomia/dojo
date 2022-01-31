class OCR:

	numbers_patterns = {
		"000002002" : "1",
		"010012210" : "2",
		"010012012" : "3",
		"000212002" : "4",
		"010210012" : "5",
		"010210212" : "6",
		"010002002" : "7",
		"010212212" : "8",
		"010212012" : "9",
		"010202212" : "0",
	}

	def calculate(self, input):
		if input == " ":
			return "0"
		if input == "_":
			return "1"
		if input == "|":
			return "2"
			
		return "?"
		
	def calculate_caracter(self, input):
		retorna = ""
		for char in input:
			retorna += self.calculate(char)
		return retorna

	def decode_character(self, input):
		return self.numbers_patterns[input]

	def decode_line(self, input):
		file_lines = input.split('\n')
	
		result = ""
		
		for i in range(0, 27, 3):
		    char = ""
		    char += file_lines[0][i] + file_lines[0][i + 1] + file_lines[0][i + 2]
		    char += file_lines[1][i] + file_lines[1][i + 1] + file_lines[1][i + 2]
		    char += file_lines[2][i] + file_lines[2][i + 1] + file_lines[2][i + 2]
		    result += self.decode_character(self.calculate_caracter(char))
			
		
		return result