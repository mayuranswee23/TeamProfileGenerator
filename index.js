const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const {writeHTML, copyStyle} = require('./src/generatePage');
const template = require('./src/page-template');


teamMembers = [];


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
        const manager = new Manager (response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber);
        teamMembers.push(manager);
        console.log('HI')
        newTeamMember();
        console.log('Bye')
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
            const engineer = new Engineer (response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
            teamMembers.push(engineer);
            newTeamMember();
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
            const intern = new Intern (response.internName, response.internID, response.internEmail, response.internSchool);
            teamMembers.push(intern);
            newTeamMember();
        })
    }


const newTeamMember =() => {
    return inquirer.prompt([
        {
        type: 'confirm',
        name: 'addNewMember',
        message: 'Would you like to add another team member?',
        default: false
        },
        {
            type: 'list',
            message: 'Which employee would you like to input next?',
            name: 'employeeSelect', 
            choices: ['Engineer', 'Intern', 'Exit']
        },
    ]). then(response => {
        const jobTitle = response.employeeSelect;
        if (jobTitle === 'Engineer') {
            getEngineer();
        } else if (jobTitle === 'Intern'){
            getIntern();
        } else if (jobTitle === 'Exit'){
            console.log('Team Sheet has been generated')
            generatePage()
        }
    })
}

getManager()
// .then(newTeamMember())
// .then(teamData => {
//     return template(teamData);
// })
// .then(createHTML => {
//     return writeHTML (createHTML);
// })

function generatePage (){
    fs.writeFileSync('./dist/index.html', template(teamMembers))
}