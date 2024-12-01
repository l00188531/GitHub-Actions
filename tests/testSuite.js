// tests/testSuite.js

const { add, subtract } = require('../index');

test('adds 5 + 7 to equal 12', () => {
  expect(add(5, 7)).toBe(12);
});

test('subtracts 10 - 4 to equal 6', () => {
  expect(subtract(10, 4)).toBe(6);
});
