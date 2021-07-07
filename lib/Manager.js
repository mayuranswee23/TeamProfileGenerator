const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }
    getHTML(){
        return `<p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.officeNumber}</p>`
    }
}

module.exports = Manager; 