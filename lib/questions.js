const inquirer = require('inquirer');

const questions = [
    console.log(
        `
        ~~~~~~~~~~ Welcome to your logo generator! ~~~~~~~~~~
        ~~~~~~~~~~~~~ Follow the prompts below. ~~~~~~~~~~~~~
        `),
    {
        type: 'input',
        name: 'text',
        message: 'What should your logo say? Limit it to three characters.',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log(`Your logo name is be three characters or less. Try again.`)
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text of your logo be? (CSS keywords or hexadecimal will work)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the shape of your logo be? (CSS keywords or hexadecimal will work)',
    }
];

module.exports = questions;