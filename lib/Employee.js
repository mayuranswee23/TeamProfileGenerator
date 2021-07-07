class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee'
    }
    getHTML(){
        return `<p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.github}</p>`
    }
}

module.exports = Employee;