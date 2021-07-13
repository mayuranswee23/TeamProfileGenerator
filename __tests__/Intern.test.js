const internTest = require ('../lib/Intern');
const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('name', 123, 'email', 'school');
  
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
//   expect(intern.role).toEqual('Intern');

})