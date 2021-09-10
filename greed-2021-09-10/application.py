class Greed:

	def isXOfKind(self, array):
		count_map = {}

		for number in array:
			count_map[number] = count_map.get(number, 0) + 1

		for number, count in count_map.items():
			if count >= 3:
				remaining_array = [x for x in array if x != number]
	
				if number == 1:
					return 500 * (2 ** (count - 2)), remaining_array

				return number * 50 * (2 ** (count - 2)), remaining_array

		return 0, array

	def isStraight(self, array):
		sorted_array = sorted(array)

		if [1, 2, 3, 4, 5, 6] == sorted_array:
			return 1200, []

		return 0, array

	def isThreePairs(self, array):
		if len(array) < 6:
			return 0, array

		unique_array = list(set(array))

		score, remaining_array = self.isXOfKind(array)

		if len(unique_array) == 3 and not score:
			return 800, []

		return 0, array

	def isSingle(self, array):
		count_map = {}

		for number in array:
			count_map[number] = count_map.get(number, 0) + 1

		if count_map.get(1, 0) == 1:
			return 100, [number for number in array if number != 1]

		if count_map.get(5, 0) == 1:
			return 50, [number for number in array if number != 5]

		return 0, array

	def score(self, array):
		rules = [
			self.isStraight,
			self.isThreePairs,
			self.isXOfKind,
			self.isXOfKind,
			self.isSingle,
			self.isSingle,
		]

		total_score = 0

		for rule in rules:
			score, array = rule(array)
			total_score += score

		return total_score
