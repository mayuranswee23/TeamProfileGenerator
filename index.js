const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

teamMembers = [];

function team() {
    function getManager(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the name of the team manager',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'Enter the employee ID of the manager',
            name: 'managerID'
        },
        {
            type: 'input',
            message: "Enter the manager's email",
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: "Enter the manager's office number",
            name: 'managerOfficeNumber'
        },
        {
            type: 'list',
            message: 'Which employee would you like to input next?',
            name: 'employeeSelect', 
            choices: ['Engineer', 'Intern', 'Exit']
    },
    ])
    .then(response => {
        const manager = new Manager (response.managerName, reponse.managerID, reponse.managerEmail, reponse.managerOfficeNumber);
        teamMembers.push(manager);
    })
}
    function getEngineer (){
        return inquirer.prompt([
            {
                type: 'input',
                message: 'Enter the name of the engineer',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'Enter the employee ID of the engineer',
                name: 'engineerID'
            },
            {
                type: 'input',
                message: "Enter the engineer's email",
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: "Enter the engineer's github username",
                name: 'engineerGithub'
            }
        ])
        .then(response => {
            const engineer = new Engineer (response.engineerName, reponse.engineerID, reponse.engineerEmail, reponse.engineerGithub);
            teamMembers.push(engineer);
        })
    }
    function getIntern (){
        return inquirer.prompt([
            {
                type: 'input',
                message: 'Enter the name of the intern',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'Enter the employee ID of the intern',
                name: 'internID'
            },
            {
                type: 'input',
                message: "Enter the intern's email",
                name: 'internEmail'
            },
            {
                type: 'input',
                message: "Enter the intern's school name",
                name: 'internSchool'
            }
        ])
        .then(response => {
            const intern = new Engineer (response.engineerName, reponse.engineerID, reponse.engineerEmail, reponse.engineerGithub);
            teamMembers.push(engineer);
        })
    }
}