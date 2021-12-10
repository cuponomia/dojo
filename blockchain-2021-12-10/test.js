var assert = require('assert');
var app = require('./app');

describe('Blockchain', function() {
    it('generateHash', function() {
        let sentence = "thequickbrownfox";
        
        let hash = app.generateHash(sentence);
        
        assert.equal(hash, "bd484b82d7875e115c7273e9c6102ca4946b7c55fe905012be9152b87fe09568");
    });
    
    it('mine', function() {
        let sentence = "thequickbrownfox";
        
        //let hash = app.generateHash(sentence);
        let [nounce] = app.mine(sentence);
        
        assert.equal(nounce, 78984);
    });
    
    it('generateBlock', function() {
        let sentence = "thequickbrownfox";
        
        //let hash = app.generateHash(sentence);
        let [block, hash] = app.generateBlock({ sentence }, "0000000000000000000000000000000000000000000000000000000000000000");

        assert.equal(hash, "000096dd0c27a9ef5e5b98a8663c06642fd678a16dbdc883ca3bd67d4ca89e93");
    });

    // it('signSentence', function() {
    //     let sentence = "thequickbrownfox";
    //     let privateKey = "104122790863053607319938805689303316739953807072058650804344623253955101340956";
    //     let sign = app.signSentence(privateKey,sentence);
    //     assert.equal(sign, "3044022057c9b547e0c7267fd287783ee4de4804c62e2702ecad59c94214aa2968fe9109022053f0d416c94c7c3a0b5c0260ee298565a77fd0ba3a666123bf1f815b35b46220");
    // });

    
    it('signSentence', function() {
        let sentence = "thequickbrownfox";

        let keys = app.generateKey();

        let signedSentence = app.signSentence(keys.privateKey, sentence);

        let isSigned = app.verify(keys.publicKey, signedSentence, sentence);
        assert.equal(isSigned, true);
    });
    
    it('certificateBlock', function() {
        let sentence = "thequickbrownfox";
        
        //let hash = app.generateHash(sentence);
        let [block, hash] = app.generateBlock({ sentence }, "0000000000000000000000000000000000000000000000000000000000000000");

        let [secondBlock, secondHash] = app.generateBlock({ sentence }, hash);

        assert.equal(hash, "000096dd0c27a9ef5e5b98a8663c06642fd678a16dbdc883ca3bd67d4ca89e93");
        assert.equal(secondHash, "0000469867af7e77679a5279572be6f2f0831bc6955bc098a73cd3912e448950");
    });
});