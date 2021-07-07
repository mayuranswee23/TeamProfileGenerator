
const employeeTest = require ('../lib/Employee');
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('name', 123, 'email');
  
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.role).toEqual('Employee')

})