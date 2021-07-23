assert = require 'assert'

Holes = require './application'

describe 'Task instance', ->
    it "given_A_letter_return_1", -> 
        holes = new Holes
        result = holes.getCharHoleCount("A")
        assert.equal(result, 1)
        
    it "given_V_letter_return_0", -> 
        holes = new Holes
        result = holes.getCharHoleCount("V")
        assert.equal(result, 0)
        
    it "given_B_letter_return_2", -> 
        holes = new Holes
        result = holes.getCharHoleCount("B")
        assert.equal(result, 2)
      
    it "given_text_sum_word", -> 
        holes = new Holes
        result = holes.getTextHoleSum("Cuponomia")
        assert.equal(result, 4)
        
    it "given_text_sum_phrase", -> 
        holes = new Holes
        result = holes.getTextHoleSum("CoffeeScript never more")
        assert.equal(result, 8)
