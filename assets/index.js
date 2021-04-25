// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const emailValidator = require('email-validator');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

//! WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions (npm test)
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?',
        validate: (value) => {
            if (value) { return true } 
            else { return "Please enter your project Title." }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining your project.',
        validate: (value) => {
            if (value) { return true } 
            else { return "Please enter a description for your project." }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license.',
        choices: ["MIT", "ISC", "BSD3"],
        validate: (value) => {
            if (value) { return true } 
            else { return "Please enter a description for your project." }
        },
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt (questions)
    .then (data => {
        console.log(data);
        return writeToFile ('README.md', generateMarkdown(data)) 
    })
}



// Function call to initialize app
init();