import unittest
from application import get_smallest_column, get_water_volume, get_all_water_volume

#para rodar os testes: python unit_test.py
class TestDependencia(unittest.TestCase):
	
	def test_get_smallest_valid__value(self):
		input = [6,0,0,4]
		self.assertEqual(get_smallest_column(input), 4);
		
	def test_get_water_between_2_bars(self):
		input = [6,0,0,4]
		self.assertEqual(get_water_volume(input), 8);
		
	def test_get_water_between_2_bars_with_bar_in_th_middle(self):
		input = [6,0,0,3,0,5]
		self.assertEqual(get_water_volume(input), 17);

	def test_get_all_water_volume(self):
		input = [6,0,0,3,0,5,0,1]
		self.assertEqual(get_all_water_volume(input), 18); # o valor é 18 (12 + 5 + 1)

unittest.main()

