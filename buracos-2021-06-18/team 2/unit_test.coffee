# unit_test.coffee

assert = require 'assert'

Buracos = require './application'

describe 'Task instance', ->
    it "given_A_letter_return_1", -> 
        buracos = new Buracos
        result = buracos.get_buracos("A")
        assert.equal(result, 1)
    
    it "given_B_letter_return_2", -> 
        buracos = new Buracos
        result = buracos.get_buracos("B")
        assert.equal(result, 2)
    
    it "given_C_letter_return_0", -> 
        buracos = new Buracos
        result = buracos.get_buracos("C")
        assert.equal(result, 0)
    
    it "given_AB_return_3", -> 
        buracos = new Buracos
        result = buracos.count_buracos("AB")
        assert.equal(result, 3)
        
    it "given_ABDO_return_5", -> 
        buracos = new Buracos
        result = buracos.count_buracos("ABDO")
        assert.equal(result, 5)
        
    it "given_CASA_return_2", -> 
        buracos = new Buracos
        result = buracos.count_buracos("CASA")
        assert.equal(result, 2)

    it "given_casas_return_2", -> 
        buracos = new Buracos
        result = buracos.count_buracos("casas")
        assert.equal(result, 2)

    it "given_casas_return_2", -> 
        buracos = new Buracos
        result = buracos.count_buracos("The quick brown fox jumps over the lazy dog")
        assert.equal(result, 14)
    
    it "given_AB_return_3_rec", -> 
        buracos = new Buracos
        result = buracos.count_buracos_rec("AB")
        assert.equal(result, 3)
    
    it "given_casas_return_2", -> 
        buracos = new Buracos
        result = buracos.count_buracos_rec("The quick brown fox jumps over the lazy dog")
        assert.equal(result, 14)