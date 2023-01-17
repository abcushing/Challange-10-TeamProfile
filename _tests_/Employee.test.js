const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getId", () => {
    it("should return input ID of employee", () => {
      const Id = 1234;
      const name = "bill";
      const email = "bill@gmail.com";
      const role = "Employee";

      const test = new Employee(name, Id, email);
      const resultId = test.getId();
      const resultName = test.getName();
      const resultEmail = test.getEmail();
      const resultRole = test.getRole();

      expect(resultId).toEqual(Id);
      expect(resultName).toEqual(name);
      expect(resultEmail).toEqual(email);
      expect(resultRole).toEqual(role);
    });
  });
});
