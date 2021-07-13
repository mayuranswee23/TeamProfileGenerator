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
        // return `<p>${this.name}</p>
        // <p>${this.id}</p>
        // <p>${this.email}</p>
        // <p>${this.github}</p>`
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h6 class="card-subtitle mb-2 text-muted">ID: ${this.id}</h6>
    <p class="card-text">${this.name}</p>
    <p class="card-text">Office Number: ${this.officeNumber}</p>
    <a href="mailto:${this.email}" class="card-link">Email link</a>
    </div>
    </div>`
    }
}

module.exports = Manager; 