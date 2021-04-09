import unittest
from application import get_tallest_column, get_area_between_columns, get_sum_area_between_columns, left_sum_area, get_water_area, right_sum_area

#para rodar os testes: python unit_test.py
class TestDependencia(unittest.TestCase):
	
	def test_get_tallest_column(self):
		input = [1]
		result = 0
		self.assertEqual(get_tallest_column(input), result)
	
	def test_get_tallest_column_3(self):
		input = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]
		result = 5
		self.assertEqual(get_tallest_column(input), result)
		
	def test_get_area_between_columns(self):
		input = [3, 0, 0, 6]
		area = 6
		self.assertEqual(get_area_between_columns(input), area)

	def test_get_sum_area_between_columns(self):
		input = [1, 2, 3, 4, 6]
		output = 9
		self.assertEqual(get_sum_area_between_columns(input), output)
		
	def test_left_sum_area(self):
		input = [1, 0, 3, 0, 6]
		output = 3
		self.assertEqual(left_sum_area(input)[0], output)
		
	def test_right_sum_area(self):
		input = [6, 0, 4]
		output = 4
		self.assertEqual(right_sum_area(input)[0], output)

	def test_get_water_area(self):
		input = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]
		output = 26
		self.assertEqual(get_water_area(input), output)
		
	def test_get_water_area_2(self):
		input = [5, 0, 7, 0, 3, 5, 4]
		output = 5+10-3
		self.assertEqual(get_water_area(input), output)
		
	def test_get_water_area_3(self):
		input = [5, 0, 7, 0, 7, 5, 4]
		output = 12
		self.assertEqual(get_water_area(input), output)
		
	def test_get_water_area_4(self):
		input = [5, 0, 7, 0, 3, 5, 7]
		output = 5+21-3-5
		self.assertEqual(get_water_area(input), output)

unittest.main()

