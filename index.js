// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'filePath',
        message: 'Enter the file path where you want to create the README.md (please include README.md in your Pathing):',
    },
    {
        type: 'input',
        name: 'NameProject',
        message: 'Enter the name of the project:',
    },
    {
        type: 'input',
        name: 'describe',
        message: 'Enter the description of the project:',
      },
      {
        type: 'input',
        name: 'insttruct',
        message: 'Describe how to use the project',
      },
      {
        type: 'input',
        name: 'liscence',
        message: 'What is the liscense of your project?'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers);
            writeToFile('README.md', generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
