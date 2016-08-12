import unittest
from por_extenso import por_extenso

class TestCheque(unittest.TestCase):
	
	def test_unidade(self):
		self.assertEquals(por_extenso(1), "um")
		self.assertEquals(por_extenso(2), "dois")
		self.assertEquals(por_extenso(3), "tres")
		self.assertEquals(por_extenso(4), "quatro")
		self.assertEquals(por_extenso(5), "cinco")
		self.assertEquals(por_extenso(6), "seis")
		self.assertEquals(por_extenso(7), "sete")
		self.assertEquals(por_extenso(8), "oito")
		self.assertEquals(por_extenso(9), "nove")

	def test_dezena(self):
		self.assertEquals(por_extenso(10), "dez")
		self.assertEquals(por_extenso(20), "vinte")
		self.assertEquals(por_extenso(30), "trinta")
		self.assertEquals(por_extenso(40), "quarenta")
		self.assertEquals(por_extenso(50), "cinquenta")
		self.assertEquals(por_extenso(60), "sessenta")
		self.assertEquals(por_extenso(70), "setenta")
		self.assertEquals(por_extenso(80), "oitenta")
		self.assertEquals(por_extenso(90), "noventa")

	def test_dezena_mais_unidade(self):

		self.assertEquals(por_extenso(22), 'vinte e dois')
		self.assertEquals(por_extenso(35), 'trinta e cinco')
		self.assertEquals(por_extenso(11), 'onze')
		self.assertEquals(por_extenso(12), 'doze')

unittest.main()