import { solve } from './solve';

test('calc number is divisible by 3 and 5', function () {
  let result = solve.fizzBuzz(15);
  expect(result).toBe('FizzBuzz');
});

test('calc number is divisible by 3', function () {
  let result = solve.fizzBuzz(6);
  expect(result).toBe('Fizz');
});