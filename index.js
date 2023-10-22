// IMPORTS & MODULES //
// inquirer used for the questions
const inquirer = require('inquirer');
// fs for writeFile
const fs = require('fs');
// connecting the questions module
const questions = require('./lib/questions');
// connecting the createShape
const createShape = require('./lib/createShape.js');
// file path for making the logo file
const createFile = "./examples/logo.svg";
// added to make the text fun colors!
const chalk = require('chalk');

// function to generate logo
function generateLogo(response) {
    // calling on the create shape module
    const svgImage = createShape(response);
    // writing the file to generate the logo // also using chalk within the template literal to make the text fun colors.
    fs.writeFile(createFile, svgImage, () => console.log(`
    ${chalk.magentaBright('~~~~~~~~~~~ Your new logo has been generated as "logo.svg" ~~~~~~~~~~~')}
    ${chalk.cyanBright('~~~~~~~~~~~~ This file can be found in the examples folder ~~~~~~~~~~~~')}

    ${chalk.red('please note that if you did not enter a color it will default to black')}
    `))
}

// function to initiate the questions
function init() {
        console.log(
        `
        ${chalk.magentaBright('~~~~~~~~~~ Welcome to your logo generator! ~~~~~~~~~~')}
        ${chalk.cyanBright('~~~~~~~~~~~~~ Follow the prompts below. ~~~~~~~~~~~~~')}
        `),
    // tapping into the inquierer import capability and the questions module
    inquirer
    .prompt(questions)
    // after answering the questions, initiating the generateLogo function
    .then((response) => {
        generateLogo(response);
    })
    // to catch any errors
    .catch(err => {
        console.log(err)
    });
}

// call init function
init();