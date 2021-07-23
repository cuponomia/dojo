class Synchronizer:
	listeners = {}

	def subscribe(event, callback):
		if event not in self.listeners:
			self.listeners[event] = []

		self.listeners[event].append(callback)

	def emit(event, data):
		if event in self.listeners:
			for listener in self.listeners[event]:
				listener(data)


class BasketHandler:
	
	def __init__(self, database):
		self.database = database;

	def on(event, item):
		if event == 'BasketItemAdded':
			self.database["basket"].append(item)
		
	

synchronizer = Synchronizer()

synchronizer.subscribe('BasketItemAdded',)


class BasketQuery:
	
	def __init__(self, database):
		self.database = database;
	
	def getBasket(self):
		return self.database["basket"]
	
	def getItemInBasket(self, productId):
		array = list(filter(lambda product: product["productId"] == productId, self.database["basket"]))
		if len(array) > 0:
			return array[0]
		return None


class AddItemToBasketCommand:
	
	def __init__(self, database, item):
		self.database = database
		self.item = item
	#	self.basketQuery = basketQuery
	#	self.basketQuery = basketQuery

	def run(self):
		self.database["basket"].append(self.item)
		synchronizer.emit('BasketItemAdded', self.item)
	#	queryItem = self.basketQuery.getItemInBasket(item["productId"])
	#	if queryItem not None:
			
	#		array = list(filter(lambda product: product["productId"] == productId, self.database["basket"]))
			
	#		item["quantity"] = queryItem["quantity"] + 1
		#	self.database["basket"].append(item)


class Product:
	
	def __init__(self, name, quantity):
		self.name = name
		self.quantity = quantity
