// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');





// TODO: Create an array of questions for user input
const questions = [{

    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: `What is your project's decription?`,
  },
  {
    type: 'input',
    name: 'contents',
    message: 'What are the Table of Contents?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is the installation?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter your usage information.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter your License information.',
    choices: ["MIT", "Apache 2.0", "Halloween"]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter your Contributors information.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter your tests information.',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Enter your questions section.',
  },
];

 



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName , data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        (writeToFile('ReadME.md', generateMarkdown(answers)))
    });
};

// Function call to initialize app
init();
