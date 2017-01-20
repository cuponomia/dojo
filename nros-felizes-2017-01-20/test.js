'use strict';

var assert = require('assert');
var Calc = require('./app');

describe('Calc', () => {
  describe('#isHappy', () => {
    let calc;

    beforeEach(() => {      
      calc = new Calc();
    });



    it('1 is happy', () => {      
      let result = calc.isHappy(1);
      assert.equal(true, result);
    });

    it('2 is not happy', () => {      
      let result = calc.isHappy(2);
      assert.equal(false, result);
    });


    it('10 is happy', () => {      
      let result = calc.isHappy(10);
      assert.equal(true, result);
    });

    it('7 is happy', () => {      
      let result = calc.isHappy(7);
      assert.equal(true, result);
    });

    it('97 is happy', () => {      
      let result = calc.isHappy(97);
      assert.equal(true, result);
    });

    it('4 is not happy', () => {      
      let result = calc.isHappy(4);
      assert.equal(false, result);
    });

    it('11 is not happy', () => {      
      let result = calc.isHappy(11);
      assert.equal(false, result);
    });

  });
});