
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What should your logo say? (Limit it to three characters)',
        validate: (textInput) => {
            if (textInput.length <= 3) {
                return true;
            } else {
                return console.log(`
                Your logo name needs to be three characters or less. Try again.
                `)
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What COLOR should the text of your logo be? (CSS keywords or hexadecimal will work)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What SHAPE would you like your logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What COLOR should the shape of your logo be? (CSS keywords or hexadecimal will work)',
    }
];

module.exports = questions;