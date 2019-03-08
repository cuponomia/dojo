import unittest
from application import espiral

class TestEspiral(unittest.TestCase):
	
	def test_example(self):
		self.assertEqual(espiral(1, 1), [[1]])
		
	def third_line_first_column(self):
		self.assertEqual(espiral(3, 3), [[1, 2, 3], [8, 9, 4], [7, 6 ,5]])
	
unittest.main()

#  1  2  3  4
#  12 13 14 5  
#  11 15 16 6
#  10  9  8  7

# indiceLinha = l = 0
# indiceColuna = c = 0
# valor = 0

#1° passada
# l = 0, c = 0, valor = 1
# 1 0
# 0 0

#2° passada
# l = 0, c = 1, valor = 2
# 1 2
# 0 0

#3° passada
# l = 2, c = 1, valor = 3
# 1 2
# 0 3

#4° passada
# l = 1, c = 0, valor = 4
# 1 2
# 4 3

#5° passada
# 

# 1 2
# 4 3


# 1  2 3
#10 11 4
# 9 12 5
# 8  7 6
