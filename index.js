// imports and connections
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const createShape = require('./lib/createShape.js');
const createFile = "./examples/logo.svg";

// function to generate logo
function generateLogo(response) {
    const svgImage = createShape(response);
    fs.writeFile(createFile, svgImage, () => console.log(`Your new logo has been generated as "logo.svg"`))
}

// function to initiate the questions
function init() {
    inquirer.createPromptModule(questions)
    .then((response) => {
        generateLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

// call init
init();