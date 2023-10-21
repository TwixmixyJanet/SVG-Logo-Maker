// imports and connections
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const createShape = require('./lib/createShape.js');
const createFile = "./examples/logo.svg";
const chalk = require('chalk');

// function to generate logo
function generateLogo(response) {
    const svgImage = createShape(response);
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
    inquirer
    .prompt(questions)
    .then((response) => {
        generateLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

// call init
init();