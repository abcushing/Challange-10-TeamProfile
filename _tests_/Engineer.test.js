const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getId", () => {
    it("should return input ID of engineeer", () => {
      const Id = 1234;
      const name = "bill";
      const email = "bill@gmail.com";
      const role = "Engineer";
      const github = "bill@github.com";

      const test = new Engineer(name, Id, email, github);
      const resultId = test.getId();
      const resultName = test.getName();
      const resultEmail = test.getEmail();
      const resultRole = test.getRole();
      const resultGithub = test.getgithub();

      expect(resultId).toEqual(Id);
      expect(resultName).toEqual(name);
      expect(resultEmail).toEqual(email);
      expect(resultRole).toEqual(role);
      expect(resultGithub).toEqual(github);
    });
  });
});
