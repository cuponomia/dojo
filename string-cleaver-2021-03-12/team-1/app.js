const app = {
    getMatchingWords: (string, dictionary) => {
        let clearedList = dictionary.filter(word => string.includes(word));
        return clearedList;
    },
    
    cleave(string, clearedList) {
        let currentWord = '';

        for (let i = 0; i < string.length; i++) {
            currentWord += string[i];
            console.log(string, currentWord)
            
            if(clearedList.includes(currentWord))
            {
                if(i + 1 === string.length) return currentWord;
                
                let remainingPhrase = this.cleave(string.substring(i + 1), clearedList);
                if (remainingPhrase) {
                    return currentWord + " " + remainingPhrase;
                }
            }
        }

        return false;
    }
}

exports.app = app;