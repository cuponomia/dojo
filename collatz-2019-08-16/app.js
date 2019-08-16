/* PROBLEMA: Conjectura de Collatz
http://dojopuzzles.com/problemas/exibe/analisando-a-conjectura-de-collatz/
*/

const collatz = {
    nextTerm: function(number) {
        if (number % 2 === 0)
            return number / 2
        return number * 3 + 1
    },
    
    sequence: function(input) {
        let count = 1
        while(input != 1){
            input = this.nextTerm(input)
            count++
        }
        return count
    },
    
    findMinNumberWithMaxTerms: function(nInitial, nLast) {
        let result;
        let seqMax = 0;
        let nMax = 0;
        for (let n=nInitial; n<=nLast; n++) {
            result = this.sequence(n);
            if (result > seqMax) {
                seqMax = result;
                nMax = n;
            }
        }
        console.log([nMax, seqMax])
        return [nMax, seqMax]
    }
};



// should return 10 terms when input is 13'
exports.collatz = collatz;

// n = n/2 (n é par)
// n = 3n + 1 (n é ímpar)