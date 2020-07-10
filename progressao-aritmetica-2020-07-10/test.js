var assert = require('assert');
var app = require('./app');

describe('Progressoes', function() {
    
    describe('getNextIndex', function(){
        it('on_12_list_return_2_as_true_ratio_1', function() {
            let array = [1,2,3];
            let ratio = 1;
            let index = 0;
            
            let nextIndex = app.progressoes.getNextIndex(ratio, array, index);
            
            assert.equal(nextIndex, 1, "ok");
        });
        
        
         it('on_13457_list_ratio_2_index_1_return_index3', function() {
            let array = [1,3,4,5,7];
            let ratio = 2;
            let index = 1;
            
            let nextIndex = app.progressoes.getNextIndex(ratio, array, index);
            
            assert.equal(nextIndex, 3, "ok");
        });
        
        
        it('on_13457_list_ratio_2_index4_return_-1', function() {
            let array = [1,3,4,5,7];
            let ratio = 2;
            let index = 4;
            
            let nextIndex = app.progressoes.getNextIndex(ratio, array, index);
            
            assert.equal(nextIndex, -1, "ok");
        });
    });
    
    describe('getGroupInArray', function(){
        it('on_1234579_list_ratio_1_index0_return_123', function() {
            let array = [1,2,3,5,6,7,9];
            let ratio = 1;
            let index = 0;

            let nextIndex = app.progressoes.getGroupInArray(ratio, array, index);

            assert.deepEqual(nextIndex, [1,2,3], "deve retornar um array");
        });
        
        it('on_123567_list_ratio_4_return_null', function() {
            let array = [1,2,3,5,6,7];
            let ratio = 4;
            let index = 0;

            let nextIndex = app.progressoes.getGroupInArray(ratio, array, index);

            assert.equal(nextIndex, undefined, "deve retornar nulo");
        });
    });
    
    describe('getGroupsInArray', function(){
        it('on_1234579_list_ratio_1_return_123_567', function() {
            let array = [1,2,3,5,6,7,9];
            let ratio = 1;

            let subgroups = app.progressoes.getGroupsInArray(ratio, array);

            assert.deepEqual(subgroups, [[1,2,3], [5, 6, 7]], "deve retornar um array");
        });
    });
    
    //testar se há um próximo elemento na PA a partir de (INDEX, R, ARRAY)
});