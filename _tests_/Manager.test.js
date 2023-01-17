const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("testing manager", () => {
    it("should return input of manager", () => {
      const Id = 1234;
      const name = "bill";
      const email = "bill@gmail.com";
      const role = "Manager";
      const officeNumber = "1234";

      const test = new Manager(name, Id, email, officeNumber);
      const resultId = test.getId();
      const resultName = test.getName();
      const resultEmail = test.getEmail();
      const resultRole = test.getRole();
      const resultofficeNumber = test.getofficeNumber();

      expect(resultId).toEqual(Id);
      expect(resultName).toEqual(name);
      expect(resultEmail).toEqual(email);
      expect(resultRole).toEqual(role);
      expect(resultofficeNumber).toEqual(officeNumber);
    });
  });
});
