import unittest
import sudoku

class TestMainCode(unittest.TestCase):

    def test_most_single_given_digit(self):
        grid = [ 
            [ 0, 0, 0 , 0, 2, 1 ],
            [ 0, 4, 2 , 0, 3, 0 ],

            [ 0, 0, 0 , 0, 6, 3 ],
            [ 3, 1, 0 , 0, 0, 0 ],

            [ 0, 2, 0 , 3, 4, 0 ],
            [ 4, 3, 0 , 0, 0, 0 ]
        ]

        result = sudoku.get_most_given_digit(grid)
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

if __name__ == '__main__':
    unittest.main()