// import the parent shape
const Shape = require('./parentShape.js');

// based off the parent shape input, pass it to the circle
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    // render the SVG through parameters defined on the w3 website
    render() {
        return `
        <svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

// export circle to createShape
module.exports = Circle;