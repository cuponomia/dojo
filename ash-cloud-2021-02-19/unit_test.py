import unittest
from application import spread, count_airports, get_first_airport_date, get_all_airports_date

class TestDependencia(unittest.TestCase):
	
	def test_spread_fill_forward(self):
		input = [
			['*','.']
			]
		expected = [
			['*', '*']
			]
		self.assertEqual(spread(input), expected)
		
	def test_spread_fill_downward(self):
		input = [
			['*'], 
			['.']
			]
		expected = [
			['*'], 
			['*']
			]
		self.assertEqual(spread(input), expected)
		
	def test_spread_fill_upward_backward(self):
		input = [
			['.', '.'],
			['.', '*']
		]
		expected = [
			['.', '*'],
			['*', '*']
		]
		self.assertEqual(spread(input), expected)
		
	def test_count_airport(self):
		input = [
			['A', '*'],
			['.', 'A']
		]
		expected = 2
		self.assertEqual(count_airports(input), expected)
		
	def test_count_airport(self):
		input = [
			['*', '', '.'],
			['.', '.', 'A'],
			['.', '.', '.']
		]
		expected = 3
		self.assertEqual(get_first_airport_date(input), expected)
		
		
	def test_days_count_to_fill_all_airport(self):
		input = [
			['*', 'A', '.'],
			['.', '.', 'A'],
			['.', '.', '.']
		]
		expected = 3
		self.assertEqual(get_all_airports_date(input), expected)

unittest.main()

