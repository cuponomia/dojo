import unittest
import sudoku

class TestMainCode(unittest.TestCase):

	def test_count_digits(self):
		grid = [ 
			[ 0, 0, 0 , 0, 2, 1 ],
			[ 0, 4, 2 , 0, 3, 0 ],

			[ 0, 0, 0 , 0, 6, 3 ],
			[ 3, 1, 0 , 0, 0, 0 ],

			[ 0, 2, 0 , 3, 4, 0 ],
			[ 4, 3, 0 , 0, 0, 0 ]
		]

		result = sudoku.count_digits(grid)
		self.assertEqual(result[3], 5)
		self.assertEqual(result[0], 22)
	
	def test_least_empty_rows(self):
		grid = [ 
			[ 0, 0, 0 , 0, 2, 1 ],
			[ 0, 4, 2 , 0, 3, 0 ],

			[ 0, 0, 0 , 0, 6, 3 ],
			[ 3, 1, 0 , 0, 0, 0 ],

			[ 0, 2, 0 , 3, 4, 0 ],
			[ 4, 3, 0 , 0, 0, 0 ]
		]

		result = sudoku.get_least_empty_rows(grid)
		self.assertEqual(result, [1, 4])

	def test_least_empty_cols(self):
		grid = [ 
			[ 0, 0, 0 , 0, 2, 1 ],
			[ 0, 4, 2 , 0, 3, 0 ],

			[ 0, 0, 0 , 0, 6, 3 ],
			[ 3, 1, 0 , 0, 0, 0 ],

			[ 0, 2, 0 , 3, 4, 0 ],
			[ 4, 3, 0 , 0, 0, 0 ]
		]

		result = sudoku.get_least_empty_cols(grid)
		self.assertEqual(result, [1, 4])

	# def test_resolve_single_missing_digit_in_row(self):
	#     grid = [ 
	#       [ 0, 0, 0 , 0, 2, 1 ],
	#       [ 0, 4, 2 , 0, 3, 0 ],

	#       [ 0, 0, 0 , 0, 6, 3 ],
	#       [ 3, 1, 0 , 0, 0, 0 ],

	#       [ 0, 2, 0 , 3, 4, 0 ],
	#       [ 4, 3, 0 , 0, 0, 0 ]
	#     ]
	#     result = sudoku.resolve_single_digit_in_row(grid)
	#     self.assertEqual(result, False)

	def test_get_row_from_grid(self):
		grid = [ 
			[ 0, 0, 0 , 0, 2, 1 ],
			[ 0, 4, 2 , 0, 3, 0 ],

			[ 0, 0, 0 , 0, 6, 3 ],
			[ 3, 1, 0 , 0, 0, 0 ],

			[ 0, 2, 0 , 3, 4, 0 ],
			[ 4, 3, 0 , 0, 0, 0 ]
		]
		self.assertEqual(sudoku.get_row(grid, 2), [0, 0, 0, 0, 6, 3])

	def test_get_column_from_grid(self):
		grid = [ 
			[ 0, 0, 0 , 0, 2, 1 ],
			[ 0, 4, 2 , 0, 3, 0 ],

			[ 0, 0, 0 , 0, 6, 3 ],
			[ 3, 1, 0 , 0, 0, 0 ],

			[ 0, 2, 0 , 3, 4, 0 ],
			[ 4, 3, 0 , 0, 0, 0 ]
		]
		self.assertEqual(sudoku.get_column(grid, 2), [0, 2, 0, 0, 0, 0])

	def test_get_possible_digits_in_row(self):
		row = [ 0, 0, 0 , 0, 2, 1 ]
		result = sudoku.get_possible_digits_in_row(row)
		self.assertEqual(result, [3,4,5,6])

	def test_solve_hidden_singles(self):
		grid = [ 
			[ 0, 6, 4 , 5, 2, 1 ],
			[ 1, 0, 0 , 0, 0, 0 ],

			[ 2, 0, 0 , 0, 0, 0 ],
			[ 5, 0, 0 , 0, 0, 0 ],

			[ 4, 0, 0 , 0, 0, 0 ],
			[ 0, 0, 0 , 0, 0, 0 ]
		]
		self.assertEqual(sudoku.solve_hidden_singles(grid),
		[ 
			[ 3, 6, 4 , 5, 2, 1 ],
			[ 1, 0, 0 , 0, 0, 0 ],

			[ 2, 0, 0 , 0, 0, 0 ],
			[ 5, 0, 0 , 0, 0, 0 ],

			[ 4, 0, 0 , 0, 0, 0 ],
			[ 6, 0, 0 , 0, 0, 0 ]
		])


if __name__ == '__main__':
	unittest.main()