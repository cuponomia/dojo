import unittest
from miojo import miojo

class TestMiojo(unittest.TestCase):
	
	def test_example(self):
		self.assertEqual(miojo(3, 5, 7), [10, 2, 1])
		self.assertEqual(miojo(1, 2, 3), [5, 1, 1])
	
	def test_valid_amp_times(self):
		self.assertEqual(miojo(3, 1, 2), [-1, -1, -1])
		
	def test_time_greater_than_miojo_time(self):
		self.assertEqual(miojo(3, 30, 90), [-1, -1, -1])
		
	
unittest.main()


'''

durações diferentes

INPUT:
	minutos preparo do miojo: 3 min (deve ser sempre menor que o tempo das ampulhetas)
	tempo da ampulheta 1: 5 min
	tempo da ampulheta 2: 7 min
	
OUTPUT: 
	TEMPO MÍNIMO NECESSÁRIO PRA FICAR PRONTO: 10 min, rodando a ampulheta 1 x vezes e a ampulheta 2 x vezes
	ou
	NÃO É POSSÍVEL NO TEMPO EXATO
	

RASCUNHO:
	
	abs(5 * 1 - 7 * 1) = 2
	NEXT = MIN(5*iteracao1, 7*iteracao2)
	abs(NEXT * 2 - 7 * 1) = 3

'''