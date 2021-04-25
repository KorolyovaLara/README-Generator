// List of all packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const emailValidator = require('email-validator');
const generateMarkdown = require('./utils/generateMarkdown');

// The array of questions for user input to pre-fill README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
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
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: (value) => {
            if (value) { return true } 
            else { return "Please provide the installation instructions your project." }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples for use.',
        validate: (value) => {
            if (value) { return true } 
            else { return "Please provide examples for use." }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidelines?',
        validate: (value) => {
            if (value) { return true } 
            else { return "Please enter your contribution guidelines." }
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: (value) => {
            if (value) { return true } 
            else { return "Please enter your test instructions." }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: ["MIT", "ISC", "BSD3", "Mozilla", "Apache", "GNU"],
        validate: (value) => {
            if (value) { return true } 
            else { return "Please choose a license for your project." }
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {
            if (value) { return true } 
            else { return 'Please enter your username.' }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) => {
            if (emailValidator.validate(value)) { return true } 
            else { return 'Please enter a valid email address' }
        },
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, or any third-party assets that require attribution.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
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