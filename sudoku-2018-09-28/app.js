/* PROBLEMA: Sudoku
http://dojopuzzles.com/problemas/exibe/sudoku/
*/

exports.checkBoard = function(board){
    // INPUT: [ 3, 3 ]
    // OUTPUT: [ 1, 2 ]

    
    for (var i = 0; i < board.length; i++) {
        var seenNumbers = [];    
        
        for (var j = 0; j < board.length; j++) {
            var value = board[i, j];
    
            if (value == 0)
                continue;
                
            if (seenNumbers.indexOf(value) != -1)
                return [i+1, j+1];
                
            seenNumbers.push(value);
        }
    }
    
    return [];
}