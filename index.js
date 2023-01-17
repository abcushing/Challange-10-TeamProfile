const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const teamPage = require("./index.html");
var employees = [];

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "What is the employee role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern", "Employee"],
      },
    ])
    .then((data) => {
      if (data.role[0] === "Manager") {
        getManagerData();
      } else if (data.role[0] === "Engineer") {
        getEngineerData();
      } else if (data.role[0] === "Intern") {
        getInternData();
      } else if (data.role[0] === "Employee") {
        getEmployeeData();
      }
    });
}

function getManagerData() {
  console.log("before employee ");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the employee ID?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the employee Office Number?",
      },
    ])
    .then((data) => {
      data.role = "Manager";
      let manager = new Manager(data.name, data.ID, data.email, data.office);
      employees.push(manager);
      nextEmployee();
    });
}

function getEngineerData() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the employee ID?",
      },
      {
        type: "input",
        name: "Github",
        message: "What is the employee Github?",
      },
    ])
    .then((data) => {
      data.role = "Engineer";
      console.log(data);
      let engineer = new Engineer(data.name, data.ID, data.email, data.Github);
      employees.push(engineer);
      nextEmployee();
    });
}

function getInternData() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the employee ID?",
      },
      {
        type: "input",
        name: "School",
        message: "What is the employee school?",
      },
    ])
    .then((data) => {
      data.role = "Intern";
      let intern = new Intern(data.name, data.ID, data.email, data.School);
      employees.push(intern);
      nextEmployee();
    });
}

function getEmployeeData() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the employee ID?",
      },
    ])
    .then((data) => {
      data.role = "Employee";
      console.log(data);
      let employee = new Employee(data.name, data.ID, data.email);
      employees.push(employee);
      nextEmployee();
    });
}

function nextEmployee() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Do you want to add another employee or finish?",
        name: "continue",
        choices: ["y", "n"],
      },
    ])
    .then((data) => {
      console.log(data);
      if (data.continue[0] === "y") {
        addEmployee();
      } else {
        console.log("added employees");
        console.log(employees);
        let generatedHTML = createHTML(employees);
        console.log(generatedHTML);
        writeToFile("./dist/teamfile.html", generatedHTML);
      }
    });
}
function createHTML(employees) {
  let HTML = "";
  for (var i = 0; i < employees.length; i++) {
    let special;
    if (employees[i].getRole() === "Manager") {
      special = "Office Number: " + employees[i].getofficeNumber();
    } else if (employees[i].getRole() === "Engineer") {
      special =
        `Github: <a href = "mailto:  ` +
        employees[i].getgithub() +
        `">` +
        employees[i].getgithub() +
        `</a>`;
    } else if (employees[i].getRole() === "Intern") {
      special = "School: " + employees[i].getSchool();
    }
    HTML += `
          <div>
          <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
          <div class="card">
          <div class="card-body">
          <h5 class="card-title">${employees[i].getName()}</h5>
          <h5 class="card-title">${employees[i].getRole()}</h5>
          <ul>
          <li>Employee ID: ${employees[i].id}</li>
          <li>Employee Email: <a href = "mailto: ${employees[i].email}">
          ${employees[i].email}</a></li>
          <li>${special}</li>
          </ul>
          </div>
          </div>
          </div>
          </div>
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
// function to write the file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("teamfile.html file successfully created!");
  });
}

// function to initialize app
function init() {
  addEmployee();
  console.log("employees= ", employees);
}

init();
