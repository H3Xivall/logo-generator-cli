import { Triange, Square, Circle } from '../lib/shapes';

describe('Triangle', () => {
    it('should render a triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
});
describe('Square', () => {
    it('should render a square', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue"/>');
    });
});
describe('Circle', () => {
    it('should render a circle', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });
});
