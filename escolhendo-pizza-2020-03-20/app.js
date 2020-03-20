/* PROBLEMA: Escolhendo uma pizza
http://dojopuzzles.com/problemas/exibe/escolhendo-uma-pizza/

Renato = [4, 5, 4, 5, 4, 3]
Marcelo = [2, 2, 1, 3, 5, 2]
Lenon = [4, 5, 2, 1, 1, 3]
Renata = [4, 5, 1, 1, 3, 4]
Washington = [1, 1, 2, 3, 4, 3]
Tino = [1, 5, 1, 4, 3, 2]
Luca = [5, 4, 3, 4, 3, 2]

'Renato',
'Marcelo',
'Lenon',
'Renata',
'Washington',
'Tino',
'Luca'
*/

/*
Renato      = { "Marguerita" : 4, "Quatro queijos" : 5, "Escarola" : 4, "Portuguesa" : 5, "Frango+Catupiry" : 4, "Napolitana" : 3 }
Marcelo     = { "Marguerita" : 2, "Quatro queijos" : 2, "Escarola" : 1, "Portuguesa" : 3, "Frango+Catupiry" : 5, "Napolitana" : 2 }
Lenon       = { "Marguerita" : 4, "Quatro queijos" : 5, "Escarola" : 2, "Portuguesa" : 1, "Frango+Catupiry" : 1, "Napolitana" : 3 }
Renata      = { "Marguerita" : 4, "Quatro queijos" : 5, "Escarola" : 1, "Portuguesa" : 1, "Frango+Catupiry" : 3, "Napolitana" : 4 }
Washington  = { "Marguerita" : 1, "Quatro queijos" : 1, "Escarola" : 2, "Portuguesa" : 3, "Frango+Catupiry" : 4, "Napolitana" : 3 }
Tino        = { "Marguerita" : 1, "Quatro queijos" : 5, "Escarola" : 1, "Portuguesa" : 4, "Frango+Catupiry" : 3, "Napolitana" : 2 }
Luca        = { "Marguerita" : 5, "Quatro queijos" : 4, "Escarola" : 3, "Portuguesa" : 4, "Frango+Catupiry" : 3, "Napolitana" : 2 

*/

const pizza = {
    
    people: {
        'Renato': [4, 5, 4, 5, 4, 3],
        'Marcelo': [2, 2, 1, 3, 5, 2],
        'Lenon': [4, 5, 2, 1, 1, 3],
        'Renata': [4, 5, 1, 1, 3, 4],
        'Washington': [1, 1, 2, 3, 4, 3],
        'Tino': [1, 5, 1, 4, 3, 2],
        'Luca': [5, 4, 3, 4, 3, 2] 
    },
    
    getImportance: function(tastes) {
 
        
        let max = Math.max(...tastes);
        console.log('max', max);
        
        // 5 = 100
        
        return [100, 80, 60, 80, 60, 40];
    },
    
    
    
    getCompatibility: function(person) {
        
        console.log(this.people[person][0])
        
        var compatibility = people[0]
        
        foreach(var p in this.people)
        {
            
            
            if(p[0] > people[person])
                personDiff = 
        }
        
        return this.people[person][0];
    },
    
    getPeopleSameTaste: function(pizza, like){

    },

};

exports.pizza = pizza;