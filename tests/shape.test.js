const Shape = require('../lib/shape.js');

describe('Shape', () => {
    test('should create a red circle', () => {
        const shape = new Shape('red');
        expect(shape.color).toEqual('red');
    })
})