/* PROBLEMA: Efeito Magnético
https://dojopuzzles.com/problems/efeito-magnetico/
*/

const magnetic = {
    
    checkIfInsideMagneticPoint: function(point, magneticPoint) {
        const distance = this.getDistance(point, magneticPoint);

        return distance <= magneticPoint[2];
    },
    getDistance: function(point1, point2) {
        const xDelta = point1[0] - point2[0];
        const yDelta = point1[1] - point2[1];

        return Math.sqrt(xDelta ** 2 + yDelta ** 2);
    },
    getStartingPoint: function(point, magneticPoints) {
        let shortestDistance = Infinity;
        let shortestPoint = null;
        
        magneticPoints.forEach(magPoint => {
            if (!this.checkIfInsideMagneticPoint(point, magPoint)) return;
            
            let distance = this.getDistance(point, magPoint);
    
            if (distance > shortestDistance) return;
    
            shortestDistance = distance;
            shortestPoint = magPoint;
        });

        return shortestPoint || point;
    }
};

exports.magnetic = magnetic;