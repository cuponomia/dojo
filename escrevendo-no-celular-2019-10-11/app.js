/* PROBLEMA: Escrevendo no celular
http://dojopuzzles.com/problemas/exibe/escrevendo-no-celular/
*/

const sms = {
    
    getNumberFromLetter: function(letter) {
        const letters = {
            65: "2",
            68: "3",
            71: "4",
            74: "5",
            77: "6",
            80: "7",
            84: "8",
            87: "9",
            32: "0"
        };
        
        var text = "";
        
        for (let i = 0; i < letter.length; i++) {
            var rep = 1;
            var letterCode = letter.charCodeAt(i);
            while(!letters[letterCode]){
                rep++;
                letterCode--;
            }
            text += letters[letterCode].repeat(rep);
        }
        
        return text;
    }
};

exports.sms = sms;