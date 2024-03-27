var assert = require('assert');
var app = require('./app');
var PacMan = app.app.PacMan;
var Map = app.app.Map;

describe('App', function() {
    
    describe('PacMan', function(){
        const map =  new Map(10, 10)
        let pacMan = new PacMan(0,0, PacMan.DirectionEnum.right, map);


        it('should look up', function() {
            pacMan.setDirection(PacMan.DirectionEnum.up)
            
            assert.equal(pacMan.direction, PacMan.DirectionEnum.up);
        });
        it('should look down', function() {
            pacMan.setDirection(PacMan.DirectionEnum.down)
            
            assert.equal(pacMan.direction, PacMan.DirectionEnum.down);
        });
        it('should look left', function() {
            pacMan.setDirection(PacMan.DirectionEnum.left)
            
            assert.equal(pacMan.direction, PacMan.DirectionEnum.left);
        });
        it('should look right', function() {
            pacMan.setDirection(PacMan.DirectionEnum.right)
            
            assert.equal(pacMan.direction, PacMan.DirectionEnum.right);
        });
        it('should move right', function() {
            pacMan = new PacMan(0,0, PacMan.DirectionEnum.right, map);
            pacMan.tick()            
            
            assert.equal(pacMan.position.x, 1);
            assert.equal(pacMan.position.y, 0);
        });
        it('should move down', function() {
            pacMan = new PacMan(0,0, PacMan.DirectionEnum.down, map);
            pacMan.tick()            
            
            assert.equal(pacMan.position.x, 0);
            assert.equal(pacMan.position.y, 1);
        });
        it('should move up', function() {
            pacMan = new PacMan(0,1, PacMan.DirectionEnum.up, map);
            pacMan.tick()            
            
            assert.equal(pacMan.position.x, 0);
            assert.equal(pacMan.position.y, 0);
        });
        it('should move left', function() {
            pacMan = new PacMan(1,0, PacMan.DirectionEnum.left, map);
            pacMan.tick()            
            
            assert.equal(pacMan.position.x, 0);
            assert.equal(pacMan.position.y, 0);
        });
        it('should move left', function() {
            pacMan = new PacMan(0,0, PacMan.DirectionEnum.left, map);
            pacMan.tick()            
            
            assert.equal(pacMan.position.x, 0);
            assert.equal(pacMan.position.y, 0);
        });
        
    });
})