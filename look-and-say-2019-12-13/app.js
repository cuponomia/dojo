/* PROBLEMA: Look and say
http://dojopuzzles.com/problemas/exibe/sequencia-look-and-say/
*/

const lookAndSay = {
    
    
    getNextSequence: function(input) {

        let i = 1;
        let output = "";

        //console.log('input', input);
        
        /*if(input.length == 1){
            output = "1" + input;
        }*/
        
        // input 1 1 
        
        let counter = 1;
        while (i <= input.length) {
            console.log('i', i);
            
            if (input[i] == input[i-1]) {
                counter++;
                console.log('if', output)
            }else{
                output += counter + input[i-1];
                console.log('else', output)
                counter = 1;
            }
            
            
            i++;
        }
        
        console.log(output);
        return output;
    },
    findSequence: function(index, input){
        var last = input;
        for(var i = 0; i < index; i++) last = this.getNextSequence(last);
        return last
    }
};

exports.lookAndSay = lookAndSay;