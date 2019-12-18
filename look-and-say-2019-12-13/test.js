var assert = require('assert');
var app = require('./app');

describe('LookAndSay', function() {
    
    it('should return 11 when input is 1', function() {
       assert.equal(app.lookAndSay.getNextSequence("1"), "11");
    });
    
    it('should return 21 when input is 11', function() {
       assert.equal(app.lookAndSay.getNextSequence("11"), "21");
    });
    
    it('should return 1211 when input is 21', function() {
      assert.equal(app.lookAndSay.getNextSequence("21"), "1211");
    });
    
    it('should return 111221 when input is 1211', function() {
      assert.equal(app.lookAndSay.getNextSequence("1211"), "111221");
    });
    
    it('should return 312211 when input is 111221', function() {
      assert.equal(app.lookAndSay.getNextSequence("111221"), "312211");
    });
    
    it('should return 312211 when input is 111221', function() {
      assert.equal(app.lookAndSay.findSequence(10, "1"), "11131221133112132113212221");
    });
});