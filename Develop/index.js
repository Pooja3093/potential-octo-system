// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Import `generateMarkdown.js`
const generate = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'Please enter your GitHub username:',
    'Please enter your email address:',
    'Please enter your Project tiltle:',
    'Please enter a description for your project:',
    'Please enter installation instructions:',
    'Please enter usage instructions:',
    'Please enter contribution guidelines:',
    'Please enter test instructions:',
    'Please choose a licence:'    
];

// Gather information from user
function gatherInfoAndGenerate(){
    inquirer
    .prompt([
        {
        type: 'input',
        message: questions[0],
        name: 'userName',
        },
        {
        type: 'input',
        message: questions[1],
        name: 'email',
        },
        {
        type: 'input',
        message: questions[2],
        name: 'title',
        },
        {
        type: 'input',
        message: questions[3],
        name: 'description',
        },
        {
        type: 'input',
        message: questions[4],
        name: 'install',
        },
        {
        type: 'input',
        message: questions[5],
        name: 'usage',
        },
        {
        type: 'input',
        message: questions[6],
        name: 'contribute',
        },
        {
        type: 'input',
        message: questions[7],
        name: 'test',
        },
        {
        type: 'checkbox',
        message: questions[8],
        name: 'license',
        choices: ['None', 'Apache 2.0 License', 'BSD 3-Clause License', 'Eclipse Public License 1.0', 'GNU GPL v3', 'IBM Public License Version 1.0', 'The MIT License', 'Mozilla Public License 2.0', 'Open Database License (ODbL)'],
        }
    ])
    .then((response) => {
    writeToFile(generate(response));
    });
}
// TODO: Create a function to write README file
function writeToFile(template) {
    fs.writeFile('README.md', template, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}

// TODO: Create a function to write README file
function writeToFile(template) {
    fs.writeFile('README.md', template, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}

// TODO: Create a function to initialize app
function init() {

    gatherInfoAndGenerate();
    
}

// Function call to initialize app
init();
