// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions to create team
const questions = [
{
    type:'input',
    name:'github',
    message:'What is your Team Name?',
},

{
    type:'input',
    name:'title',
    message:'What is the name of the team project?'
},

{
    type:'input',
    name:'email',
    message:'Who is your team lead?',
},

{
    type:'input',
    name:'email',
    message:'Who are your Engeneers?',
},

{
    type:'input',
    name:'email',
    message:'Who is your Interm',
},

{
    type:'input',
    name:'description',
    message:'Write a short description of the project',
},

// {
//     type:'input',
//     name:'license',
//     message:'What kind of licnce will you use? (n/a for none)',
//     choices: ['MIT', 'APACHE 2.0','GPL3.0','BSD 3', 'n/a' ],
// },

// {
//     type:'input',
//     name:'installation',
//     message:'What command should be run to install dependancies? (npm i is the default)',
//     default: 'npm i',
// },

// {
//     type:'input',
//     name:'testing',
//     message:'What command to run tests? (default is npm test)',
//     default:'npm test',
// },

{
    type:'input',
    name:'useage',
    message:'What does the user need to know about using the repository?',
},

{
    type:'input',
    name:'contributing',
    message:'What does the user need to know about contributing to this project?'
},

{
    type:'input',
    name:'notes',
    message:'Any other notes about this project?'
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('README.md file successfully created!');
      });
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
        console.log(res);
        writeToFile('./README.md', generateMarkdown(res));
    });
}

// Function call to initialize app
init();