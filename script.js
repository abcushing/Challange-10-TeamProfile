// packages needed for this application
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");

const employees = [];
inquirer = prompt([
  {
    type: "input",
    name: "manager",
    message: "What is the Managers name?",
  },
  {
    type: "input",
    name: "id",
    message: "what is the Managers ID?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "what is the employees office number",
  },
  {
    type: "input",
    name: "email",
    message: "what is the employees email?",
  },
]).then(function (responses) {
  const manager = new Manager(
    responses.manager,
    responses.id,
    responses.email,
    responses.officeNumber
  );
  employees.push(manager);
  menu();
});

function menu() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "what would you like to do?",
      choices: ["add engineer", "add intern", "build team"],
    })
    .then(function (response) {
      if (response.choice === "add engineer") {
        inquirer = prompt([
          {
            type: "input",
            name: "engineer",
            message: "What is the engineers name?",
          },
          {
            type: "input",
            name: "id",
            message: "what is the engineers ID?",
          },
          {
            type: "input",
            name: "github",
            message: "what is the employees github?",
          },
          {
            type: "input",
            name: "email",
            message: "what is the employees email?",
          },
        ]).then(function (responses) {
          const engineer = new Engineer(
            responses.engineer,
            responses.id,
            responses.email,
            responses.github
          );
          employees.push(engineer);
          menu();
        });
      } else if (response.choice === "add intern") {
        inquirer = prompt([
          {
            type: "input",
            name: "intern",
            message: "What is the intern name?",
          },
          {
            type: "input",
            name: "id",
            message: "what is the intern ID?",
          },
          {
            type: "input",
            name: "school",
            message: "what is the interns school?",
          },
          {
            type: "input",
            name: "email",
            message: "what is the interns email?",
          },
        ]).then(function (responses) {
          const intern = new intern(
            responses.intern,
            responses.id,
            responses.email,
            responses.school
          );
          employees.push(intern);
          menu();
        });
      } else {
      }
    });
}
function createHTML(employees) {
  let HTML = "";
  for (var i = 0; i < employees.length; i++) {
    let special;
    if (employees[i].getRole() === "Manager") {
      special = employees[i].getofficeNumber();
    } else if (employees[i].getRole() === "Engineer") {
      special = employees[i].getgithub();
    }
    HTML += `
        <div>
        <p>${employees[i].name}</p>
        <p>${employees[i].getRole()}</p>
        <ul>
        <li>${employees[i].id}</li>
        <li>${employees[i].email}</li>
        <li>${special}</li>
        `;
  }
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>

<body><h1>employee profile</h1>
  ${HTML}
</body>

</html>
    `;
}

const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const { finished } = require("stream");

// function to write the file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("teamfile.md file successfully created!");
  });
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
    console.log(res);
    writeToFile("./teamfile.html", createHTML(employees));
  });
}

// Function call to initialize app
init();
