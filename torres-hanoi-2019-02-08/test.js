var assert = require('assert');
var app = require('./app');

describe('Hanoi', function() {
  describe('#getChange()', function() {
	
  	it('test_oneDisk_equals_oneMovement', function() {
      let input = [ [1], [] , [] ];
      assert.deepEqual(app.getMovements(input), [ [], [], [1]]);
    });
    
    // it('test_oneDisk_equals_oneMovement', function() {
    //   let input = [ [1 , 2, 3], [] , [] ];
    //   assert.deepEqual(app.getMovements(1), 1);
    // });
    
  });
});

/*

1 disco = 1 movimento
2 discos = 3 movimentos
3 discos = 7 movimentos

*/