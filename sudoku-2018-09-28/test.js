var assert = require('assert');
var app = require('./app');

describe('Sudoku', function() {
  describe('#checkBoard()', function() {
	
	it('empty board return empty', function() {
      assert.deepEqual(app.checkBoard([]), []);
    });
    
    it('check if one element return ok', function() {
        assert.deepEqual(app.checkBoard([1, 0]), []);
    });
    
    it('check all blank return ok', function() {
        assert.deepEqual(app.checkBoard([0, 0]), []);
    });
    
    it('check if there are repeated elements', function() {
        assert.deepEqual(app.checkBoard([3, 3]), [1, 2]);
        assert.deepEqual(app.checkBoard([ [3, 3], [0, 0] ]), [1, 2]);
    });
    
    it('check if there are repeated elements in a board with multiple lines', function () {
        assert.deepEqual(app.checkBoard([ [0, 0], [0, 0] ]), []);
    });
    
    it('check if there are repeated elements in a board with multiple lines', function () {
        assert.deepEqual(app.checkBoard([ [3, 0], [3, 0] ]), [1, 2]);
    });
    
  });
});

// INPUT: [ 3, 3 ]
// OUTPUT: [ 1, 2 ]