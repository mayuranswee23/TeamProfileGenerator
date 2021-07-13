const managerTest = require ('../lib/Manager');
const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an manager object', () => {
  const manager = new Manager('name', 123, 'email', 456);
  
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
//   expect(manager.role).toEqual('Manager');

})