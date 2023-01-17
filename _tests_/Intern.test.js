const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getId", () => {
    it("should return input ID of intern", () => {
      const Id = 1234;
      const name = "bill";
      const email = "bill@gmail.com";
      const role = "Intern";
      const school = "DU";

      const test = new Intern(name, Id, email, school);
      const resultId = test.getId();
      const resultName = test.getName();
      const resultEmail = test.getEmail();
      const resultRole = test.getRole();
      const resultSchool = test.getSchool();

      expect(resultId).toEqual(Id);
      expect(resultName).toEqual(name);
      expect(resultEmail).toEqual(email);
      expect(resultRole).toEqual(role);
      expect(resultSchool).toEqual(school);
    });
  });
});
