class Tenis:
	
	def __init__(self):
		self.scores = ["0", "15", "30", "40", "Ad", "Win"]
		self.player1ScoreIndex = 0
		self.player2ScoreIndex = 0
	
	def scorePlayer1(self):
		self.player1ScoreIndex = self.player1ScoreIndex + 1
		self.checkScores()

	def scorePlayer2(self):
		self.player2ScoreIndex = self.player2ScoreIndex + 1
		self.checkScores()
		
	def getScorePlayer1(self):
		return self.scores[self.player1ScoreIndex]
		
	def getScorePlayer2(self):
		return self.scores[self.player2ScoreIndex]
		
	def has_deuce(self):
		return self.getScorePlayer1() == "Ad" and self.getScorePlayer2() == "Ad"
	
	def checkScores(self):
		if(self.has_deuce()):
			self.player1ScoreIndex = self.player1ScoreIndex - 1
			self.player2ScoreIndex = self.player2ScoreIndex - 1
		
		if (self.player1ScoreIndex > 3 and self.player2ScoreIndex < 3):
			self.player1ScoreIndex = self.player1ScoreIndex + 1
		elif (self.player2ScoreIndex > 3 and self.player1ScoreIndex < 3):
			self.player2ScoreIndex = self.player2ScoreIndex + 1