const assert = require('assert');
const formatPoint= require('./index');
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');
// calculateDistancePoints.js
describe('formatDate', () => {
    const calculateDistancePoints = (distance, hillSize, kPoint) => {
        describe('calculateDistancePoints', () => {
            it('sum up distance, hillSize, kPoint', () => {
                const distance =  (x);

                const hillSize = (y);

                const kPoint =  (z);
                assert.equal(distance, hillSize, kPoint);
            });
        });
    };

    // calculateStylePoints.js
    const calculateStylePoints = (styleNotes) => {
        describe('calculateStylePoints', () => {
            it('sum up styleNotes', () => {
                const styleNotes = (v);
                
                assert.equal(styleNotes);
            });
        });
    };
    // calculateTotalPoints.js

    const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
        const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
        const stylePoints = calculateStylePoints(styleNotes);

        return distancePoints + stylePoints + windFactor + gateFactor;
    };
});

module.exports = calculateDistancePoints;
module.exports = calculateStylePoints;
module.exports = calculateTotalPoints;
