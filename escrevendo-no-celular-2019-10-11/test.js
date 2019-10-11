var assert = require('assert');
var app = require('./app');

describe('Collatz', function() {
	
  	it('should return 2 when input is A', function() {
      assert.equal(app.sms.getNumberFromLetter("A"), "2");
    });
    
    it('should return 3 when input is D', function() {
      assert.equal(app.sms.getNumberFromLetter("D"), "3");
    });
    
    it('should return 22 when input is B', function() {
      assert.equal(app.sms.getNumberFromLetter("B"), "22");
    });
    
    it('should return 222 when input is C', function() {
      assert.equal(app.sms.getNumberFromLetter("C"), "222");
    });
    
    it('should return 23 when input is AD', function() {
      assert.equal(app.sms.getNumberFromLetter("AD"), "23");
    });
});