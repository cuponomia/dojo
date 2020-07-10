/* PROBLEMA: Identificando Progressões Aritméticas
http://dojopuzzles.com/problemas/exibe/identificando-progressoes-aritmeticas/
*/

const progressoes = {
    
    // ratio = R
    getNextIndex: function(ratio, array, index) {

        var number = array[index];
        
        var nextNumber = number + ratio;
        
        var nextIndex = array.indexOf(nextNumber);
        
        return nextIndex;
    },
    
    getGroupInArray: function(ratio, array, index) {
        let result = [array[index]];
        let actual = this.getNextIndex(ratio,array,index);
        
        while (actual > -1) {
            result.push(array[actual]);
            actual = this.getNextIndex(ratio,array,actual); 
        }
        
        if (result.length >= 3) {
            return result;
        }
    },
    
    getGroupsInArray: function(ratio, array) {
        let result = [];
        
        for (let i = 0; i < array.length;) {
            let indexResult = this.getGroupInArray(ratio, array, i);
            
            if (indexResult) {
                result.push(indexResult);
                
                i += indexResult[indexResult.length - 1];
            } else {
                i++;
            }
        }
        
        return result;
    }
};

exports.progressoes = progressoes;

/* Fórmula PA => an = a1 + (n - 1) * R 

Por exemplo, dado o subconjunto (1,2,3,5,6,7,9) teríamos como resultado:

(1,2,3) = R: 1
(5,6,7) = R: 1
(1,3,5,7,9) = R: 2
(3,6,9) = R: 3
(1,5,9) = R: 4

//(1,3,5) não deve ser apresentada, porque já faz parte de (1,3,5,7,9).

                                                         
    testar se há um próximo elemento na PA a partir de (INDEX, R, ARRAY)

*/