var assert = require('assert');
var app = require('./app');

describe('EfeitoMagnetico', function() {
    
    describe('isInsideMagneticRadius', function(){
        it('should return the magnetic point if cursor point is inside magnetic radius', function() {
            const magneticPoint = [0, 0, 5];
            const point = [3, 4];
            const result = app.magnetic.checkIfInsideMagneticPoint(point, magneticPoint);
            
            assert.equal(result, true);
        });
    });
    
    // create false scenario

    describe('testDistance', function() {
        it('given points (0,0), (3, 4) result be 5', function() {
            const point1 = [0, 0];
            const point2 = [3, 4];

            const result = app.magnetic.getDistance(point1, point2);
            
            assert.equal(result, 5);
        });
    });
    
    describe('getDistanceXEq0', function() {
        it('given points (0,1), (1, 1) result be 1', function() {
            const point1 = [0, 1];
            const point2 = [1, 1];

            const result = app.magnetic.getDistance(point1, point2);
            
            assert.equal(result, 1);
        });
    });

    describe('getStartingPoint', function() {
        it('given magnetic points and point calculate inside magnetic point', function() {
            
            // create magPoints
            let magPoints = [
                [0,0,0],
                [1,1,1]
            ]
            
            // point inside mag
            let point = [0,1]
            
            let result = app.magnetic.getStartingPoint(point,magPoints)
            // return magPoint
            
            assert.deepEqual(result, magPoints[1])
        });
        
        it('given magnetic points and point calculate closest magnetic point', function() {
            
            // create magPoints
            let magPoints = [
                [0,0,0],
                [1,1,10],
                [2,2,10]
            ]
            
            // point inside mag
            let point = [2,2]
            
            let result = app.magnetic.getStartingPoint(point,magPoints)
            let result2 = app.magnetic.getStartingPoint([-1,-1], magPoints)
            // return magPoint

            assert.deepEqual(result, magPoints[2])
            assert.deepEqual(result2, magPoints[1])
        });
        
        it('given magnetic points and point calculate closest magnetic point', function() {
            
            // create magPoints
            let magPoints = [
                [0,0,0],
                [5,6,7],
                [2,2,10]
            ]
            
            // point inside mag
            let point = [0,0]
            
            let result = app.magnetic.getStartingPoint(point,magPoints)
            // return magPoint

            assert.deepEqual(result, [0,0,0])
        });
        
        it('given point outside magnetic points should return the point itself', function() {
            
            // create magPoints
            let magPoints = [
                [0,0,0],
                [1,1,1]
            ]
            
            // point inside mag
            let point = [2,2]
            
            let result = app.magnetic.getStartingPoint(point,magPoints)
            // return magPoint
            
            assert.deepEqual(result, point)
        });
    });
    
    // create false scenario
});

/*exemplo 

it('on_12_list_return_2_as_true_ratio_1', function() {
            let array = [1,2,3];
            let ratio = 1;
            let index = 0;
            
            let nextIndex = app.progressoes.getNextIndex(ratio, array, index);
            
            assert.equal(nextIndex, 1, "ok");
        });*/