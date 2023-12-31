// test JEST to make sure the shape is generated correctly
const Triangle = require('../triangle');

describe('Triangle', () => {
    it('should return the shape of a triangle based off the users choice', () => {
        const triangle = new Triangle('purple','XXX','turquoise');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="purple" />
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="turquoise">XXX</text>
        </svg>
        `);
    })
})