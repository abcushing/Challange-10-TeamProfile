const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const teamPage = require("./index.html");

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
      console.log("data role= ", data);
      if (data.role[0] === "Manager") {
        getManagerData();
      } else if (data.role[0] === "Engineer") {
        getEngineerData();
      } else if (data.role[0] === "Intern") {
        getInternData();
      } else if (data.role[0] === "Employee") {
        getEmployeeData();
      }

      // const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;
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
      console.log("data.role= ", data.role);
      data.role = "Manager";
      console.log(data);
      let manager = new Manager(data.name, data.ID, data.email, data.office);
      //   fs.appendFile(
      //     "./dist/employees.json",
      //     JSON.stringify(data, null, "\t"),
      //     (err) => (err ? console.log(err) : console.log("Success!"))
      //   );
      //   buildHTML(manager);
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
      //   fs.appendFile(
      //     "./dist/employees.json",
      //     JSON.stringify(data, null, "\t"),
      //     (err) => (err ? console.log(err) : console.log("Success!"))
      //   );
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
      console.log(data);
      let intern = new Intern(data.name, data.ID, data.email, data.School);
      //   fs.appendFile(
      //     "./dist/employees.json",
      //     JSON.stringify(data, null, "\t"),
      //     (err) => (err ? console.log(err) : console.log("Success!"))
      //   );
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
      //   fs.appendFile(
      //     "./dist/employees.json",
      //     JSON.stringify(data, null, "\t"),
      //     (err) => (err ? console.log(err) : console.log("Success!"))
      //   );
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
      }
    });
}

// function initializeJSON() {}

// function buildHTML(employee) {
//   let htmlTemplate = fs.readFileSync("./index.html", "utf8");
//   console.log(employee);
//   let employeeHTML = ` <div class="col">
//   <div class="card">
//       <div class="card-body">
//           <h5 id="role" class="card-title">`;
//   employeeHTML += employee.getRole();
//   employeeHTML += `</h5>
//           <p id="empID" class="card-text">`;
//   employeeHTML += employee.getId();
//   employeeHTML += ` </p>
//           <p id="empemail" class="card-text">`;
//   employeeHTML += employee.getEmail();
//   employeeHTML += `</p>
//           <p id="empnumber" class="card-text">`;
//   employeeHTML += employee.getofficeNumber();
//   employeeHTML += `</p>
//       </div>
//   </div>
// </div>`;

//   htmlTemplate.getElementById("card").appendChild(employeeHTML);
// }

function createHTML(employee) {
  let HTML = "";
  for (var i = 0; i < employee.length; i++) {
    let special;
    if (employee[i].getRole() === "Manager") {
      special = employee[i].getofficeNumber();
    } else if (employee[i].getRole() === "Engineer") {
      special = employee[i].getgithub();
    }
    HTML += `
          <div>
          <p>${employee[i].name}</p>
          <p>${employee[i].getRole()}</p>
          <ul>
          <li>${employee[i].id}</li>
          <li>${employee[i].email}</li>
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
  addEmployee().then(writeToFile("./teamfile.html", createHTML(employees)));
  //   inquirer.prompt(questions).then((res) => {
  //     console.log(res);
  // writeToFile("./teamfile.html", createHTML(employees));
  //   });
}

init();
