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
        writeToFile('./teamfile.js', generateMarkdown(res));
    });
}

// Function call to initialize app
init();