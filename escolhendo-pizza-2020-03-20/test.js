var assert = require('assert');
var app = require('./app');

describe('Pizza', function() {
    
/*
    it('given_pizza_return_person', function() {
        var people = app.pizza.people
        var luca = people['Luca'];
        var renato = people['Renato'];
        var likeMarguerita = 0
        
        assert.notEqual(luca[likeMarguerita], renato[likeMarguerita]);
    });
*/
    
    it('given_tastes_return_importance', function() {
        let tastes = app.pizza.people['Luca'];
        assert.deepEqual(app.pizza.getImportance(tastes), [100, 80, 60, 80, 60, 40]);
    });
    
    it('get_match_taste', function() {
        let tastes = app.pizza.people['Luca'];
        assert.deepEqual(app.pizza.getCompatibility('Luca'), 4);
    });
    
   /* it('get_importance', function() {
        let tastes = app.pizza.people['Luca'];
        assert.deepEqual(app.pizza.getImportance(tastes), [100, 80, 60, 80, 60, 40]);
    });*/
    
/*
    it('given_importance_return_compatibility', function() {
        let tastes = app.pizza.people['Luca'];
        let importances = app.pizza.getImportance(tastes);
        
        assert.equal(app.pizza.getCompatibility(importances, app.pizza.people['Renato']), 4 * 1 + 5 * 0.8 + 4 * 0.6 + 5 * 0.8 + 4 * 0.6 + 3 * 0.4);
    });
*/
});