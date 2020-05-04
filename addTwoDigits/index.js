const addDigits = number => number.toString().split('').reduce((acc, next) => parseInt(acc) + parseInt(next));

console.log(addDigits(102));