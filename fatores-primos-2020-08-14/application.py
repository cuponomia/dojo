class FatoresPrimos:
	
	def isPrime(self, number):
		if number < 2:
			return False
			
		for i in range(2, number):
			if number % i == 0:
				return False
		return True
		
	def getPrimeGreaterThan(self, number):
		prime = number + 1
		while not self.isPrime(prime):
			prime = prime + 1
			
		return prime
		
	def getFactors(self, number):
		prime = 2
		factors =[]

		while prime <= number:
			if number % prime == 0:
			  factors.append(prime)
			  number = number / prime
			else:
				prime = self.getPrimeGreaterThan(prime)
		return factors
