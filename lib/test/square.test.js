// const { describe } = require('eslint/lib/rule-tester/rule-tester');
const Square = require('../square');

describe('Square', () => {
    it('should return the shape of a square based off the users choice', () => {
        const square = new Square('purple','XXX','turquoise');
        expect(square.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="purple"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="turquoise">XXX</text>
        </svg>
        `)
    })
})