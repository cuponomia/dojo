





/*
Ordem:

Fabricio
Daniel
Higor
Adauto
Lucas

*/

class Game {
    createMap(width, height) {
        this.map = new Map(width, height)
        return this
    }

    run() {
        setInterval()
    }
}

class Map {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class PacMan {
    constructor(x, y, direction, map){
        this.x = x;
        this.y = y;
        this._direction = direction;
        this._map = map;
    }

    static DirectionEnum = {
        up: 'V',
        down: '^',
        left: '>',
        right: '<'
    }    

    setPosition(x, y){
        this.x = x;
        this.y = y;
    }

    get position() {
        return {x: this.x, y: this.y}
    }
    
    get direction() {
        return this._direction;
    }

    setDirection(direction) {
        this._direction = direction;
    }

    tick() {
        switch (this._direction) {
            case PacMan.DirectionEnum.up:
                if(this.y > 0) this.y--;
                break;
            case PacMan.DirectionEnum.down:
                if(this.y < this._map.height) this.y++;
                break;
            case PacMan.DirectionEnum.left:
                if(this.x > 0) this.x--;
                break;
            case PacMan.DirectionEnum.right:
                if(this.x < this._map.width) this.x++;
                break;
            default:
                break;
        }
    }
}

exports.app = { PacMan, Map }