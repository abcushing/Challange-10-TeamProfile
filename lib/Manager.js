const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getofficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
