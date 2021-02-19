import unittest
from application import Alphabet

class TestAlphabet(unittest.TestCase):	
	def test_letter_index(self):
		alphabet = Alphabet()
		self.assertEqual(alphabet.getCharCode("a"), 97)
		self.assertEqual(alphabet.getCharCode("Z"), 122)
		self.assertEqual(alphabet.getCharCode("w"), 119)
		
	def test_isInRange_notInRange(self):
		alphabet = Alphabet()
		self.assertEqual(alphabet.isInRange("#"), 0)
		
	def test_isInRange_isInRange(self):
		alphabet = Alphabet()
		self.assertEqual(alphabet.isInRange("m"), 1)
		
	def test_isInOrder(self):
		alphabet = Alphabet()
		self.assertEqual(alphabet.isInOrder("a", "b"), True)
		self.assertEqual(alphabet.isInOrder("a", "c"), True)
		self.assertEqual(alphabet.isInOrder("a", "d"), True)
		self.assertEqual(alphabet.isInOrder("#", "b"), False)
		self.assertEqual(alphabet.isInOrder("a", "#"), False)
		self.assertEqual(alphabet.isInOrder("d", "a"), False)
	
	def test_getLettersInRange(self):
		alphabet = Alphabet()
		self.assertEqual(alphabet.getLettersInRange("a", "c"), 1)
		self.assertEqual(alphabet.getLettersInRange("a", "e"), 3)
		self.assertEqual(alphabet.getLettersInRange("a", "a"), 0)
			
unittest.main()
