exports.createMineBoard = function(rows, cols){
	var board = [];
	var row = [];
	for (var i = 0; i <cols; i++) {
		row[i] = 0;
	};

	board.push(row);
	return board;
}

exports.addMine = function(row, col, board){
	board[0][col] = '*';
	if(board[0][col + 1] != "*"){
		board[0][col + 1] += 1;	
	}
	if(board[0][col - 1] !=	"*"){
		board[0][col - 1] += 1 ;	
	}

}


//[*, *, 1, 0]