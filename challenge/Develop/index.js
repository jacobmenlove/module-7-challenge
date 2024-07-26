// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'Input',
        name: 'Title',
        message: 'Please name your project.', 
    },
    {
        type: 'Input',
        name: 'Description',
        message: 'Please describe the purpose and function of this project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the license applicable to this project.'
        chocies: 
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
