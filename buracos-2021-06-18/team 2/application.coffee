# application.coffee

class Buracos

    dict = {
        A: 1,
        B: 2,
        D: 1,
        O: 1,
        P: 1,
        Q: 1,
        R: 1,
        a: 1,
        b: 1,
        d: 1,
        e: 1,
        g: 2,
        o: 1,
        p: 1,
        q: 1
    }

    get_buracos: (a) ->
        dict[a] ? 0

    count_buracos: (string) ->
        self = this
        return string.split('').reduce(((acc, valor) ->  acc + self.get_buracos(valor)), 0)
    
    count_buracos_rec: (text) ->
        return this.get_buracos(text) if text.length == 1
        return this.get_buracos(text[0]) + this.count_buracos_rec(text.substr(1))
        
module.exports = Buracos
