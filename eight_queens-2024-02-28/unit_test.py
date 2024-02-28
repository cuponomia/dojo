import unittest
import main

class TestMainCode(unittest.TestCase):

    def test_xyz(self):
        result = True
        self.assertEqual(result, True)
        
    def test_position_filled_when_there_is_queen_returns_true(self):
        self.assertEqual(main.is_position_filled(['0','0','*','0']), True)

    def test_position_filled_when_there_is_not_queen_returns_false(self):
        self.assertEqual(main.is_position_filled(['0','0','0','0']), False)

    def test_get_row_should_return_row_from_position(self):
        main.board = [
            ['1', '0', '*', '0' ],
            ['2', '0', '0', '0' ],
            ['3', '0', '*', '0' ]
        ]
        self.assertEqual(main.get_row(2), ['3', '0', '*', '0' ])
        
    def test_get_column_should_return_column_from_position(self):
        main.board = [
            ['1', '0', '*', 'a' ],
            ['2', '0', '0', 'b' ],
            ['3', '0', '*', 'c' ]
        ]
        self.assertEqual(main.get_column(3), ['a', 'b', 'c' ])

    def test_get_diagonal_from_0_0_returns_diagonal_from_starting_point_downwards(self):
        main.board = [
            ['1', '0', '*'],
            ['2', '5', '0'],
            ['3', '0', '*']
        ]
        self.assertEqual(main.get_negative_diagonal(0, 0), ['1', '5', '*'])

if __name__ == '__main__':
    unittest.main()