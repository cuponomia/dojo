const SHA256 = require('crypto-js/sha256');
const crypto = require('crypto');

module.exports = {
    generateHash: function(sentence) {
        let hash = SHA256(sentence);
        return hash;
    },

    mine: function(sentence){
        let nounce = 0;
        while(nounce <= 500000){
            let hash = this.generateHash(sentence + nounce);
            if(hash.toString().substring(0,4) === "0000"){
                return [nounce, hash.toString()];
            }
            nounce++;
        }

        return "not_found";
    },

    generateBlock(content, previousHash) {
        const block = {
            ...content,
            previousHash: previousHash,
        };

        const [nounce, hash] = this.mine(JSON.stringify(block));

        block.nounce = nounce;

        return [block, hash];
    },

    generateKey() {
        const keypair = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
          });

        return {  privateKey: keypair.privateKey, publicKey: keypair.publicKey };
    },

    signSentence(privateKey, sentence) {
        let sign = crypto.createSign('SHA256');
        sign.update(sentence).end();
        //sign.sign(privateKey);
        return sign.sign(privateKey);
    },

    verify(publicKey, signature, sentence){
        const verify = crypto.createVerify('SHA256');
        verify.update(sentence);
        return  verify.verify(publicKey, signature);
    }
    
} 