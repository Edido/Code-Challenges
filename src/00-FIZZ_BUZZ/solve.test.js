import { solve } from './solve';

test('calc number is divisible by 3 and 5', function () {
  let result = solve.fizzBuzz(15);
  expect(result).toBe('FizzBuzz');
});

test('calc number is divisible by 3', function () {
  let result = solve.fizzBuzz(6);
  expect(result).toBe('Fizz');
});

test('calc number is divisible by 5', function () {
  let result = solve.fizzBuzz(10);
  expect(result).toBe('Buzz');
});

test('calc number is not divisible by 3 or 5', function () {
  let result = solve.fizzBuzz(7);
  expect(result).toBe(7);
});

test ('print result', function () {
  solve.printResult(100);
});