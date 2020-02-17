import unittest
from application import Tenis

class TestTenis(unittest.TestCase):
	
	def test_scorePlayer1_shouldReturnPlayer1AddedScore(self):
		tenis =  Tenis()
		tenis.scorePlayer1()
		self.assertEqual(tenis.getScorePlayer1(), "15")
		self.assertEqual(tenis.getScorePlayer2(), "0")
		
	def test_scorePlayer1_shouldReturnPlayer1Score_equalTo30(self):
		tenis =  Tenis()
		tenis.scorePlayer1()
		tenis.scorePlayer1()
		self.assertEqual(tenis.getScorePlayer1(), "30")

	def test_player1_scored_more_than_40_and_no_deuce_player1_is_winner(self):
		tenis =  Tenis()
		tenis.scorePlayer1()
		tenis.scorePlayer1()
		tenis.scorePlayer1()
		tenis.scorePlayer1()
		self.assertEqual(tenis.getScorePlayer1(), "Win")
		self.assertNotEqual(tenis.getScorePlayer2(), "Win")
		
	def test_player1_and_player2_have_40_points(self):
		tenis =  Tenis()
		tenis.scorePlayer1() # 15
		tenis.scorePlayer2() # 15
		tenis.scorePlayer1() # 30
		tenis.scorePlayer2() # 30
		tenis.scorePlayer1() # 40
		tenis.scorePlayer2() # 40
		self.assertEqual(tenis.getScorePlayer1(), "40")
		self.assertEqual(tenis.getScorePlayer2(), "40")
		
	def test_player1_and_player2_have_deuce(self):
		tenis =  Tenis()
		tenis.scorePlayer1() # 15
		tenis.scorePlayer2() # 15
		tenis.scorePlayer1() # 30
		tenis.scorePlayer2() # 30
		tenis.scorePlayer1() # 40
		tenis.scorePlayer2() # 40
		tenis.scorePlayer1() # Ad
		tenis.scorePlayer2() # Ad -> return both to 40
		self.assertEqual(tenis.getScorePlayer1(), "40")
		self.assertEqual(tenis.getScorePlayer2(), "40")
		
	def test_player1_and_player2_have_40_points(self):
		tenis =  Tenis()
		tenis.scorePlayer1() # 15
		tenis.scorePlayer2() # 15
		tenis.scorePlayer1() # 30
		tenis.scorePlayer2() # 30
		tenis.scorePlayer1() # 40
		tenis.scorePlayer2() # 40
		tenis.scorePlayer1() # Ad
		self.assertEqual(tenis.getScorePlayer1(), "Ad")
		self.assertEqual(tenis.getScorePlayer2(), "40")
	
	def test_player2_turn_and_win(self):
		tenis =  Tenis()
		tenis.scorePlayer1() # 15
		tenis.scorePlayer2() # 15
		tenis.scorePlayer1() # 30
		tenis.scorePlayer2() # 30
		tenis.scorePlayer1() # 40
		tenis.scorePlayer2() # 40
		tenis.scorePlayer1() # Ad
		tenis.scorePlayer2() # Ad -> both to 40
		tenis.scorePlayer2() # Ad
		tenis.scorePlayer2() # Win
		self.assertEqual(tenis.getScorePlayer1(), "40")
		self.assertEqual(tenis.getScorePlayer2(), "Win")

unittest.main()