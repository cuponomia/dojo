def spread(input):
	
	result = [row[:] for row in input] # quantos A? = x
	for i, row in enumerate(input):
		for j, val in enumerate(row):
			if is_smoke(val):
				
				# fill current
				result[i][j] = '*'
			
				# fill upward
				if i - 1 >= 0:
					result[i - 1][j] = '*'
					
			    # fill downward
				if i + 1 < len(input):
					result[i + 1][j] = '*'
				
				# fill forward
				if j+1 < len(row):
					result[i][j + 1] = '*'
					
						
				# fill backward
				if j-1 >= 0:
					result[i][j - 1] = '*'
				
	return result #


def count_airports(input):
	count = 0

	for row in input:
		for val in row:
			if val == 'A':
				count += 1

	return count


def get_first_airport_date(input):
	original_count = count_airports(input)
	current_count = original_count

	days_passed = 0

	while current_count == original_count:
		days_passed += 1
		print(input)
		input = spread(input)
		print(input)
		current_count = count_airports(input)

	return days_passed


def get_all_airports_date(input):
	current_count = count_airports(input)

	days_passed = 0

	while current_count != 0:
		days_passed += 1
		print(input)
		input = spread(input)
		print(input)
		current_count = count_airports(input)

	return days_passed


def is_smoke(input):
	return input == '*'