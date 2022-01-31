# https://codingdojo.org/kata/BankOCR/

import unittest
from application import OCR
#from parameterized import parameterized

class TestOCR(unittest.TestCase):
		
	def test_blank_equals_zero(self):
		input = " "
		result = OCR().calculate(input)
		self.assertEqual(result, "0")
		
	def test_underline_equals_1(self):
		input = "_"
		result = OCR().calculate(input)
		self.assertEqual(result, "1")
		
	def test_pipe_equals_two(self):
		input = "|"
		result = OCR().calculate(input)
		self.assertEqual(result, "2")
		
	def test_line_should_calculate_all(self):
		input = " _|_"
		result = OCR().calculate_caracter(input)
		self.assertEqual(result, "0121")

	def test_line_break(self):
		input = "   "\
				"  |"\
				"  |"
		result = OCR().calculate_caracter(input)
		self.assertEqual(result, "000002002")
		
	def test_pattern_is_one(self):
		input = "000002002"
		result = OCR().decode_character(input)
		self.assertEqual(result, "1")

	def test_line_is_123456789(self):
		input = "    _  _     _  _  _  _  _ \n"\
				"  | _| _||_||_ |_   ||_||_|\n"\
				"  ||_  _|  | _||_|  ||_| _|\n"\
				"                           "
		result = OCR().decode_line(input)
		self.assertEqual(result, "123456789")
		
	def test_line_is_183456780(self):
		input = "    _  _     _  _  _  _  _ \n"\
				"  ||_| _||_||_ |_   ||_|| |\n"\
				"  ||_| _|  | _||_|  ||_||_|\n"\
				"                           "
		result = OCR().decode_line(input)
		self.assertEqual(result, "183456780")

unittest.main()


###
#      |  |
# 000002002
#  _  _||_ 
# 010012210
###