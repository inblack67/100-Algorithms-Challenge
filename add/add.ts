const add = (...param: number[]): number => param.reduce((prev, curr) => prev + curr, 0);

const res = add(1, 2, 3, 34, 4, 56, 6, 6);
console.log(res);