const solve = require('./solve');

test('calc number is divisible by 3 and 5', function () {
  let result = solve.fizzBuzz(15);
  expect(result).toBe('FizzBuzz');
});
