var assert = require('assert');
var app = require('./app');

describe('Troco', function() {
  describe('#getChange()', function() {
	
  	it('test_receivedValue_equals_totalValue_returnEmpty', function() {
      assert.deepEqual(app.getChange(1.00, 1.00), []);
    });
  
    it('test_returns_one_10Cents_coin', function() {
      assert.deepEqual(app.getChange(1.00, 1.50), [ [0.50, 1] ] );
    });
	
  	it('test_returns_coin_less_0.5', function() {
      assert.deepEqual(app.getChange(1.00, 1.10), [ [0.10, 1 ] ]);
    });
    
    it('two coins', function() {
      assert.deepEqual(app.getChange(1.00, 1.20), [ [0.10, 2 ] ]);
    });
    
    it('very tiny coin', function() {
      assert.deepEqual(app.getChange(1.00, 1.01), [ [0.01, 1 ] ]);
    });
    
    it('sum coins to return change', function() {
      assert.deepEqual(app.getChange(1.00, 1.55), [ [0.50, 1 ], [0.05, 1] ]);
    });
    
    it('return 1 bill', function() {
      assert.deepEqual(app.getChange(1.00, 2.00), [ [1.00, 1 ] ]);
    });
    
  });
});

// INPUT: valor total 1,00 - valor recebido 1,20 
// OUTPUT: 2 moedas de 0,10

// VALORES: [100, 50, 10, 5, 1, 0.5, 0.1, 0.05, 0.01]
// valor recebido - valor total = 0.20 = valor do troco
// valor do troco é menor ou igual a 100? sim > vai pro próximo item da lista
// valor do troco é menor ou igual a 50? sim > vai pro próximo item da lista
// ...
// valor do troco é menor ou igual que 0.1? não > incrementa a posição do 0.1
// valor do troco é menor ou igual que 0.1? não > incrementa a posição do 0.1
// ...
// valor do troco = 0 > fim