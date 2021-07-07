const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getschool(){
        return this.school;
    }
    getRole(){
        return "Intern"
    }
    getHTML(){
        return `<p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.school}</p>`
    }
}

module.exports = Intern; 