import unittest
from application import BasketQuery, AddItemToBasketCommand, Product
#from parameterized import parameterized

class TestBasketQuery(unittest.TestCase):

	def test_get_empty_basket(self):
		mockDatabase = {
			'basket': []
		}
		basketQuery = BasketQuery(mockDatabase)

		self.assertEqual(basketQuery.getBasket(), [])

	def test_get_basket_with_products(self):
		mockDatabase = {
			'basket': [
				{'productId': 1}
			]
		}
		basketQuery = BasketQuery(mockDatabase)

		self.assertNotEqual(len(basketQuery.getBasket()), 0)
		
class TestAddItemToBasketCommand(unittest.TestCase):
	
	def test_add_item(self):
		mockDatabase = {
			'basket': []
		}
		basketCommand = AddItemToBasketCommand(mockDatabase, Product("produto1", 2))
		basketCommand.run()
		
		testItem = mockDatabase["basket"][0]
		self.assertEqual(testItem.name, "produto1")
		self.assertEqual(testItem.quantity, 2)

	def test_sync_add_item(self):
		commandDB = {
			'basket': []
		}
		queryDB = {
			'basket': []
		}
		basketCommand = AddItemToBasketCommand(commandDB, Product("produto2", 1))
		basketQuery = BasketQuery(queryDB)
		
		basketCommand.run()
		
		self.assertNotEqual(len(basketQuery.getBasket()), 0)
		

#	@parameterized.expand([
  #	['a', 97],
  #	['B', 98],
  #	['c', 99],
  #	['Z', 122],
  #	['w', 119]
  #])
	
unittest.main()