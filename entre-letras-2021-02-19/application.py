class Alphabet:
	def getCharCode(self, letter):
		return ord(letter.lower())
	
	def isInRange(self, letter):
		beginIndex = self.getCharCode('a')
		endIndex = self.getCharCode('z')
		charIndex = self.getCharCode(letter)
		return 1 if charIndex >= beginIndex and charIndex <= endIndex else 0
		
	def isInOrder(self, firstLetter, secondLetter):
		if not self.isInRange(firstLetter) or not self.isInRange(secondLetter):
			return False
		if (self.getCharCode(secondLetter) - self.getCharCode(firstLetter) > 0):
			return True
		return False
		
	def getLettersInRange(self, firstLetter, secondLetter):
		if not self.isInOrder(firstLetter, secondLetter):
			return -1
		
		firstCharCode = self.getCharCode(firstLetter)
		secondCharCode = self.getCharCode(secondLetter)
		
		return secondCharCode - firstCharCode - 1
	
if __name__ == "__main__":
    alf = Alphabet()
    a = input('First letter: ')
    b = input('Second letter: ')
    distance = alf.getLettersInRange(a, b)
    if distance >= 0:
    	print("All right! The distance between letter {0} and {1} is {2}. :D".format(a,b,distance))
    else:
    	print("Oh no! The letters must be in order! D:")