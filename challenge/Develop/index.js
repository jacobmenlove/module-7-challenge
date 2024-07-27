// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => input ? true : 'Title is required!'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:',
        validate: input => input ? true : 'Description is required!'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        default: 'No installation instructions provided.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage examples:',
        default: 'No usage examples provided.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
        default: 'None'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors?',
        default: 'No contributors listed.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are included?',
        default: 'No tests included.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: input => input ? true : 'GitHub username is required!'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: input => input ? true : 'Email address is required!'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
        console.log('README.md file has been generated successfully!');
    } catch (error) {
        console.error('Error generating README:', error);
    }
}
// Function call to initialize app
init();
