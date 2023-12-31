// test JEST to make sure the shape is generated correctly
const Circle = require('../circle.js');

describe('Circle', () => {
    it('should return the shape of a circle based off the users choice', () => {
        const circle = new Circle('purple','XXX','turquoise');
        expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="purple" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="turquoise">XXX</text>
        </svg>
        `);
    })
})