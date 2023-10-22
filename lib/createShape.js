// import of all the shapes parameters to then generate them
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

// based off the response, the correct shape will generate
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

// export to the main index
module.exports = createShape;