const dojo = {
    recursive: function(sentence, dictionary) {
        let result = [];
        
        if(!sentence.length) {
            console.log(result);
            return;
        }
        
        let word = dictionary.find(word => sentence.startsWith(word))

        if(word) {
            result.push(word);
           
            sentence = sentence.substring(word.length);
        }
        
        return this.recursive(sentence, dictionary);
    },
    cleaver: function(sentence, dictionary) {
        let result = [];
        
        dictionary.sort((a, b) => b.length - a.length); 
        
        while (sentence.length) {
            var word = this.searchForWord(sentence, dictionary);

            if (!word) return "Cleaving stalled: Word not found";

            result.push(word);

            sentence = sentence.substring(word.length);
        }
        
        return result.join(' ');
    },
    
    searchForWord: function(sentence, dictionary) {
        return dictionary.find((word) => sentence.startsWith(word))
    }
}

/*
const s7 = 'foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'
const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']
Test.assertEquals(cleave(s7, words), 'for a moment nothing happened then after a second or so nothing continued to happen')


[dog, fox, lazy, over, jumps, brown, quick, the, a, away]
 [thequickbrownfoxjumpsoverthelazydog]


const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']
const s1 = 'solongandthanksforallthefish'
const s2 = 'solongandthanksforalllthefish'
const s3 = 'tosummarizethesummaryofthesummarypeopleareaproblem'
const s4 = 'timeisanillusionlunchtimedoublyso'
const s5 = 'ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby'
const s6 = 'ilovedeadlinesilovethewheezingnoisetheymakeastheygoby'
const s7 = 'foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'

Test.assertEquals(cleave(s1, words), 'so long and thanks for all the fish')
Test.assertEquals(cleave(s2, words), "Cleaving stalled: Word not found")
Test.assertEquals(cleave(s3, words), 'to summarize the summary of the summary people are a problem')
Test.assertEquals(cleave(s4, words), 'time is an illusion lunchtime doubly so')
Test.assertEquals(cleave(s5, words), 'i love deadlines i love the whooshing noise they make as they go by')
Test.assertEquals(cleave(s6, words), "Cleaving stalled: Word not found")
Test.assertEquals(cleave(s7, words), 'for a moment nothing happened then after a second or so nothing continued to happen')

// Quotes credit: Douglas Adams


*/

exports.dojo = dojo;