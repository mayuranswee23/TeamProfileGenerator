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
        
            // return `<p>${this.name}</p>
            // <p>${this.id}</p>
            // <p>${this.email}</p>
            // <p>${this.github}</p>`
            return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <h6 class="card-subtitle mb-2 text-muted">ID: ${this.id}</h6>
        <p class="card-text">${this.name}</p>
        <p class="card-text">School: ${this.school}</p>
        <a href="mailto:${this.email}" class="card-link">Email link</a>
        
      </div>
    </div>`
        }
    
}

module.exports = Intern; 