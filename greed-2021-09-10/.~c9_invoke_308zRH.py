import unittest
from application import Greed
#from parameterized import parameterized

class TestGreed(unittest.TestCase):
		
	def test_not_is_six_of_kind(self):
		points, array = Greed().isXOfKind([1,2,3,4,5,6])
		self.assertEqual(points, 0)
		self.assertEqual(array, [1,2,3,4,5,6])
	
	def test_is_six_of_kind(self):
		points, array = Greed().isXOfKind([6,6,6,6,6,6])
		self.assertEqual(points, 4800)
		self.assertEqual(array, [])

	def test_is_three_of_kind(self):
		points, array = Greed().isXOfKind([1,3,3,6,6,6])
		self.assertEqual(points, 600)
		self.assertEqual(array, [1,3,3])

	def test_is_not_straight(self):
		points, array = Greed().isStraight([1,2,3,4,6,6])
		self.assertEqual(points, 0)
		self.assertEqual(array, [1,2,3,4,6,6])

	def test_is_straight(self):
		points, array = Greed().isStraight([2,1,3,4,5,6])
		self.assertEqual(points, 1200)
		self.assertEqual(array, [])

	def test_is_three_pairs(self):
		points, array = Greed().isThreePairs([1,1,2,2,3,3])
		self.assertEqual(points, 800)
		self.assertEqual(array, [])

	def test_is_not_three_pairs(self):
		points, array = Greed().isThreePairs([1,2,2,2,3,3])
		self.assertEqual(points, 0)
		self.assertEqual(array, [1,2,2,2,3,3])

	def test_is_single_one(self):
		points, array = Greed().isSingle([1,2,2,2,3,3])
		self.assertEqual(points, 0)
		self.assertEqual(array, [1,2,2,2,3,3])


unittest.main()