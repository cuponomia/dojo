/* PROBLEMA: Troco
http://dojopuzzles.com/problemas/exibe/troco/
*/

exports.getChange = function(productValue, givenValue){
    const coins = [1.00, 0.5, 0.1, 0.05, 0.01];
    
    let diff = (givenValue - productValue).toFixed(2);

    
    if (diff == 0.00)
        return [];
    
    let i = 0;
    let numberOfCoins = 0.00;
    let returnValue = [];
    while(Math.floor(diff) != 0.00) {
        numberOfCoins = calculateNumberOfCoins(diff, coins[i]);
        console.log("numberOfCoins: "+ numberOfCoins);
        if (numberOfCoins >= 1) {
            returnValue.push([coins[i], numberOfCoins]);
            diff -= (numberOfCoins * coins[i]);
        }
        
        /*if (diff == coins[i]){
                return [ [coins[i], 1] ];
        }*/
        
        i++;
    }
    
    return returnValue;
    
    /*while(diff % coins[i] != 0) {
        
        countCoins = diff / coins[i];
        
        i++;
    }*/
    
   
        
    //return [];
}

const calculateNumberOfCoins = function(changeValue, coinValue){
    return Math.floor(changeValue / coinValue);
}