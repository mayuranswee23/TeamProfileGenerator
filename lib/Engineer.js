const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
    getHTML(){
        // return `<p>${this.name}</p>
        // <p>${this.id}</p>
        // <p>${this.email}</p>
        // <p>${this.github}</p>`
        return `
    <div class="card flex-container" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Enginner</h5>
    <h6 class="card-subtitle mb-2 text-muted">ID: ${this.id}</h6>
    <p class="card-text">${this.name}</p>
    <a href="https://github.com/${this.github}" class="card-link">Github Link</a>
    <a href="mailto:${this.email}" class="card-link">Email link</a>
  </div>
</div>`
    }
}

module.exports = Engineer; 