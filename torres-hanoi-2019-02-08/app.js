/* PROBLEMA: Torre de Hanoi
http://dojopuzzles.com/problemas/exibe/torres-de-hanoi/
*/

exports.getMovements = function(input, target){
    /*let pilhas = input;
    
    const target = 2;*/
    
    return mudar(input, target);
    
    /*output[2] = output[0,0];
    output[0] = [];
    
    return output;*/
}

const mudar = function(discos) {
    var movimentos = 0;
    if(discos == 1){
        return 1;
    }
    movimentos += mudar(discos--);
    return movimentos;
}

const pegarDiscoMenor = function(arr){
    let min = 0;
    
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i];
        }
    }
    
    return min;
}