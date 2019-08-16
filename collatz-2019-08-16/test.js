var assert = require('assert');
var app = require('./app');

describe('Collatz', function() {
  describe('#nextTerm()', function() {
	
  	it('should return next term 40 when input is 13', function() {
      let input = 13;
      
      assert.equal(app.collatz.nextTerm(input), 40);
    });
    
  });
  
  describe('#sequence()', function() {
    
    it('should return 10 terms when input is 13', function() {
      let input = 13;
      
      assert.equal(app.collatz.sequence(input), 10);
    });
    
    it('should return 9 terms when input is 40', function() {
      let input = 40;
      
      assert.equal(app.collatz.sequence(input), 9);
    });
  
    it('should return 1 term when input is 1', function() {
      let input = 1;
      assert.equal(app.collatz.sequence(input), 1);
    });
    
  });
  
  describe('#findMinNumberWithMaxTerms()', function() {
  
    it('find for small number', function() {
      let result = app.collatz.findMinNumberWithMaxTerms(1, 3);
      assert.deepEqual([3, 8], result);
    });
    
    it('find for big number', function() {
      app.collatz.findMinNumberWithMaxTerms(1, 100000);
      assert.deepEqual([77031, 351], result);
    });
  });
});