const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createShape(response) {

    if (response.shape === 'Circle') {
        let inputShape = new Circle (response.shapeColor, response.text, response.textColor)
        return inputShape.render()
    }

    if (response.shape === 'Square') {
        let inputShape = new Square (response.shapeColor, response.text, response.textColor)
        return inputShape.render()
    }

    if (response.shape === 'Triangle') {
        let inputShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return inputShape.render()
    }
}

module.exports = createShape;