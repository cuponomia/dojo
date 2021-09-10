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
		self.assertEqual(points, 100)
		self.assertEqual(array, [2,2,2,3,3])

	def test_is_not_single_one(self):
		points, array = Greed().isSingle([1,1,2,2,3,3])
		self.assertEqual(points, 0)
		self.assertEqual(array, [1,1,2,2,3,3])

	def test_is_single_five(self):
		points, array = Greed().isSingle([2,2,2,2,3,5])
		self.assertEqual(points, 50)
		self.assertEqual(array, [2,2,2,2,3])

	def test_is_not_single_five(self):
		points, array = Greed().isSingle([2,2,2,2,5,5])
		self.assertEqual(points, 0)
		self.assertEqual(array, [2,2,2,2,5,5])

	def test_score_400(self):
		score = Greed().score([2,2,2,2,5,5])
		self.assertEqual(score, 400)

	def test_score_300(self):
		score = Greed().score([3,3,3,2,5,5])
		self.assertEqual(score, 300)

	def test_score_400_333_1(self):
		score = Greed().score([3,3,3,1,5,5])
		self.assertEqual(score, 400)

	def test_score_700_333_444(self):
		score = Greed().score([3,3,3,4,4,4])
		self.assertEqual(score, 700)


unittest.main()