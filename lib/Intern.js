const Employee = require('./Employee.js')

class Intern extends Employee{
    constructor(name,id,email,school) {
        super(name,id,email)
        this.school=school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'role'
    }
}
module.exports=Intern



// `school`

// getSchool(school)

// getRole()