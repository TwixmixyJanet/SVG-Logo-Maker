// imported to make the text fun colors!
const chalk = require('chalk');

// inquirer questions
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What should your logo TEXT say? (Limit it to three characters)',
        // validation of the input to make sure it's 3 characters or less
        validate: (textInput) => {
            if (textInput.length <= 3) {
                return true;
            } else {
                return console.log(`
                Your logo TEXT needs to be three characters or less. Try again.
                `)
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What COLOR should the TEXT of your logo be? (CSS keywords or hexadecimal will work)',
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
        message: 'What COLOR should the SHAPE of your logo be? (CSS keywords or hexadecimal will work)',
    }
];

// export for questions to the main index file
module.exports = questions;