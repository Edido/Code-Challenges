export const solve = {
  fizzBuzz: function (number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
    } else if (number % 3 === 0) {
      return 'Fizz';
    } else if (number % 5 === 0) {
      return 'Buzz';
    } else {
      return number;
    }
  },
  printResult: function (number) {
    for (let i = 1; i <= number; i++) {
      // eslint-disable-next-line no-console
      console.log(this.fizzBuzz(i));
    }
  }
};
