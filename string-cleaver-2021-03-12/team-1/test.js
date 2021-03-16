var assert = require('assert');
var app = require('./app');


const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing'];
const s1 = 'solongandthanksforallthefish'
const s2 = 'solongandthanksforalllthefish'
const s3 = 'tosummarizethesummaryofthesummarypeopleareaproblem'
const s4 = 'timeisanillusionlunchtimedoublyso'
const s5 = 'ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby'
const s6 = 'ilovedeadlinesilovethewheezingnoisetheymakeastheygoby'
const s7 = 'foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'

describe('test', function() {

describe('test_matching_array', function () {
    it('when_words_in_dictionary_return_proper_worlds', function() {
        let words = ["Adauto", "Douglas", "Samuel", "Roberto", "Fabricio", "Rafael", "Matheus"]
        assert.deepEqual(app.app.getMatchingWords("AdautoDouglas", words), ["Adauto", "Douglas"]);
    })
    
    it('cleaves_phrase_', function() {
        let words = ["sola", "solavanco", "dois"]
        assert.equal(app.app.cleave("solavancodois", words), "solavanco dois");
        assert.equal(app.app.cleave('solavancodoissolavanco', words), 'solavanco dois solavanco')
        //assert.equal(app.app.cleave('aabaaab', ['aa','aab']), 'aab aa aab')
    })
    
    it('cleaves_phrase_sacolapis', function() {
        let words = ["saco", "sacola", "lapis"]
        assert.equal(app.app.cleave('sacolapis', words), 'saco lapis')
    })
    
    it('test_edabit', function() {
        assert.equal(app.app.cleave(s1, words), 'so long and thanks for all the fish')
        assert.equal(app.app.cleave(s2, words), false)
        assert.equal(app.app.cleave(s3, words), 'to summarize the summary of the summary people are a problem')
        assert.equal(app.app.cleave(s4, words), 'time is an illusion lunchtime doubly so')
        assert.equal(app.app.cleave(s5, words), 'i love deadlines i love the whooshing noise they make as they go by')
        assert.equal(app.app.cleave(s6, words), false)
        assert.equal(app.app.cleave(s7, words), 'for a moment nothing happened then after a second or so nothing continued to happen')
    })
}) 
    
});

/*
    ['aa','aab']
    'aabaaaab'

    solongandthanksforallthefish
      longandthanksforallthefish
          andthanksforallthefish
             thanksforallthefish
                   forallthefish
                      allthefish
                         thefish
                            fish

     it('on_13457_list_ratio_2_index_1_return_index3', function() {
            let array = [1,3,4,5,7];
            let ratio = 2;
            let index = 1;
            
            let nextIndex = app.progressoes.getNextIndex(ratio, array, index);
            
            assert.equal(nextIndex, 3, "ok");
        });
        
        
    words = ['sola', 'solavanco', 'dois']
    solavancodois
             dois
*/
