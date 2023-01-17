const inquirer = require("inquirer");
const fs = require("fs");

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

    nextEmployee();
    // const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
    //   err ? console.log(err) : console.log("Success!")
    // );
  });

function getManagerData() {
  console.log("before employee ");
  inquirer
    .prompt([
      {
        type: "input",
        name: "Employee name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "Employee email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "Employee ID",
        message: "What is the employee ID?",
      },
      {
        type: "input",
        name: "Employee Office Number",
        message: "What is the employee Office Number?",
      },
    ])
    .then((data) => {
      console.log("data.role= ", data.role);
      data.role = "Manager";
      console.log(data);
    });
}

function getEngineerData() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Employee name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "Employee email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "Employee ID",
        message: "What is the employee ID?",
      },
      {
        type: "input",
        name: "Employee Github",
        message: "What is the employee Github?",
      },
    ])
    .then((data) => {
      data.role = "Engineer";
      console.log(data);
    });
}

function getInternData() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Employee name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "Employee email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "Employee ID",
        message: "What is the employee ID?",
      },
      {
        type: "input",
        name: "Employee School",
        message: "What is the employee school?",
      },
    ])
    .then((data) => {
      data.role = "Intern";
      console.log(data);
    });
}

function getManagerData() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Employee name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "Employee email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "Employee ID",
        message: "What is the employee ID?",
      },
      {
        type: "input",
        name: "Employee Office Number",
        message: "What is the employee Office Number?",
      },
    ])
    .then((data) => {
      data.role = "Manager";
      console.log(data);
    });
}

function getEmployeeData() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Employee name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "Employee email",
        message: "What is the employee email?",
      },
      {
        type: "input",
        name: "Employee ID",
        message: "What is the employee ID?",
      },
    ])
    .then((data) => {
      data.role = "Employee";
      console.log(data);
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
    });
}
