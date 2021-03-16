var assert = require('assert');
var app = require('./app');

describe('SearchForWord', function() {
    it('SearchForWord_SentenceStartsWithWord', function() {
        let sentence = "thequickbrownfox";
        
        let word = app.dojo.searchForWord(sentence, ["the"]);
        
        assert.equal(word, "the");
    });
    it('SearchForWord_SentenceDoNotStartsWithWord', function() {
        let sentence = "aquickbrownfox";
        
        let word = app.dojo.searchForWord(sentence, ["the"]);
        
        assert.equal(word, undefined);
    });
    
    it('Cleaver_SentenceDoNotStartsWithWord', function() {
        let sentence = "dadois";
        
        let word = app.dojo.cleaver(sentence, ["dado", "is", "dois"]);
        
        assert.equal(word, 'dado is');
    });

    it('Cleaver_SentenceDoNotStartsWithWord', function() {
        let sentence = "dadois";
        
        let word = app.dojo.cleaver(sentence, ["dois", "is", "dado"]);
        
        assert.equal(word, 'dado is');
    });
    
    it('Cleaver_SentenceWithOneWord_ReturnWord', function() {
        let sentence = "aqui";
        
        let word = app.dojo.cleaver(sentence, [ "agora", "aqui"]);
        
        assert.equal(word, "aqui");
    });
    
    it('Cleaver_SentenceWithTwoWord_ReturnWithSpace', function() {
        let sentence = "aquiagora";
        
        let word = app.dojo.cleaver(sentence, [ "agora", "aqui"]);
        
        assert.equal(word, "aqui agora");
    });
    
    it('Cleaver_SentenceWithTwoWord_CantFindWord', function() {
        let sentence = "aquiagora";
        
        let word = app.dojo.cleaver(sentence, ["agora"]);
        
        assert.equal(word, "Cleaving stalled: Word not found");
    });
    
    it('Cleaver_SentenceWithTwoWord_SentenceNotFinished', function() {
        let sentence = "aquiagora";
        
        let word = app.dojo.cleaver(sentence, ["aqui"]);
        
        assert.equal(word, "Cleaving stalled: Word not found");
    });
    
    it('Cleaver_LongSentence_ShouldFindSentence', function() {
        let sentence = "foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen";
        
        let word = app.dojo.cleaver(sentence, ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']);
        
        assert.equal(word, "Cleaving stalled: Word not found");
    });
    
    it('Cleaver_LongSentence_ShouldFindSentence', function() {
        let sentence = "solavancodoissolavanco";
        
        let word = app.dojo.cleaver(sentence, ["sola", "solavanco", "dois"]);
        
        assert.equal(word, "solavanco dois solavanco");
    });
    
    it('Cleaver_LongSentence_ShouldFindSentence', function() {
        let sentence = "sacolapis";
        
        let word = app.dojo.cleaver(sentence, ["saco", "sacola", "lapis"]);
        
        assert.equal(word, "saco lapis");
    });

});