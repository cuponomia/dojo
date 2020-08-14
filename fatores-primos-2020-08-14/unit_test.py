import unittest
from application import FatoresPrimos
from parameterized import parameterized

class TestFatoresPrimos(unittest.TestCase):	
	def teste_given_number_return_factors(self):
		fatoresPrimos = FatoresPrimos()
		self.assertEqual(fatoresPrimos.getFactors(10), [2, 5])
		self.assertEqual(fatoresPrimos.getFactors(100), [2, 2, 5, 5])
		self.assertEqual(fatoresPrimos.getFactors(2), [2])
		self.assertEqual(fatoresPrimos.getFactors(5), [5])
		self.assertEqual(fatoresPrimos.getFactors(276), [2, 2, 3, 23])
		
	def teste_given_number_return_wrong_factors(self):
		fatoresPrimos = FatoresPrimos()
		self.assertNotEqual(fatoresPrimos.getFactors(276), [2, 2, 3, 22])

	@parameterized.expand([
  	[1, False],
  	[2, True],
  	[4, False],
  	[103, True],
  	[102, False]
  ])
	def test_prime(self, number, expected):
		fatoresPrimos = FatoresPrimos()
		self.assertEqual(fatoresPrimos.isPrime(number), expected)
		
unittest.main()