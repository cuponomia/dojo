import unittest
from application import dependencia

class TestDependencia(unittest.TestCase):
	
	def test_one_dependency(self):
		input = [['A','B']]
		expected = [['A', 'B']]
		self.assertEqual(dependencia(input), expected)
		
	def test_two_dependency(self):
		input = [['A','B'],['B','C']]
		expected = [['A','B','C'], ['B','C']]
		self.assertEqual(dependencia(input), expected)
		

	
unittest.main()


  # A   B   
  # B   C 

  
  
  
  # A   B   C
  # B   C   E
  # C   G
  # D   A   F
  # E   F
  # F   H