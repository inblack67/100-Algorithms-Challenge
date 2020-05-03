const add = (a, b) => a+b;

console.log(add(5,6));

const addAll = (...rest) => rest.reduce((acc, v) => acc + v, 0);

console.log(addAll(6,5,1,6,2));