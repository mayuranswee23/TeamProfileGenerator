const engineerTest = require ('../lib/Engineer');
const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('name', 123, 'email', 'github', 'engineer');
  
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
//   expect(engineer.role).toEqual('Engineer');

})