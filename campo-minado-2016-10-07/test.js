var assert = require('assert');
var app = require('./app');

describe('MineBoardApp', function() {
  describe('#createMineBoard()', function() {
	var mine = '*';

    it('Validate rows and cols', function() {
        var result = app.createMineBoard(1,4);
        assert.equal(1,result.length);
        assert.equal(4,result[0].length);
    });

    it('Validate rows and cols 2', function() {
        var result = app.createMineBoard(1,10);
        assert.equal(1,result.length);
        assert.equal(10,result[0].length);
    });

	it('When initializing, all numbers should be zero', function() {
		var result = app.createMineBoard(1, 4);
		assert.equal(0, result[0][0]);
		assert.equal(0, result[0][1]);
		assert.equal(0, result[0][2]);
		assert.equal(0, result[0][3]);
	});

	it('When adding mine, it should be there', function(){
		var board = app.createMineBoard(1, 4);
		app.addMine(0, 0, board);
		assert.equal(mine, board[0][0]);
	});

	it('When adding mine at random position, it should be there', function(){		
		var board = app.createMineBoard(1, 4);
		app.addMine(0, 1, board);
		assert.equal(mine, board[0][1]);
	});	

	it('Mine in last position, previous position should be 1', function(){
		var board = app.createMineBoard(1, 4);
		app.addMine(0, 3, board);
		assert.equal(1, board[0][2]);
	});

	it('Mine in first position, next position should be 1', function(){
		var board = app.createMineBoard(1, 4);
		app.addMine(0, 0, board);
		assert.equal(1, board[0][1]);
	});

	it('Add mine before other mine, there should be two mines in a row', function(){
		var board = app.createMineBoard(1, 4);		
		app.addMine(0, 1, board);			
		app.addMine(0, 0, board);
		assert.equal(mine, board[0][1]);
	});	
	it('Cell in the middle of two mines should be 2', function(){
		var board = app.createMineBoard(1, 4);		
		app.addMine(0, 0, board);			
		app.addMine(0, 2, board);
		assert.equal(2, board[0][1]);
	});	

  });
});