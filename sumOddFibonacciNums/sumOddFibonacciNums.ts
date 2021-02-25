const getFibonacci = (upTo: number): number[] => {
    if (upTo <= 1) {
        return [ 1 ];
    }
    const uptoArr = [];
    for (let i = 0; i < upTo; i++) {
        uptoArr[ i ] = i;
    }

    const fib = [ 1, 1 ];

    for (let i = 0; i < uptoArr.length; i++) {
        const el = uptoArr[ i ];
        if (el > 1) {
            const sum = fib[ i - 2 ] + fib[ i - 1 ];
            fib.push(sum);
        }
    }
    return fib;
};

const sumOddFibonacciNums2 = (num: number): number => {
    let sum = 0;
    const fib = getFibonacci(num);
    fib.forEach((el) => {
        if (el % 2 !== 0 && el < num) {
            sum += el;
        }
    });
    return sum;
};

const isOdd = (num: number) => {
    return num % 2 !== 0;
};

const sumOddFibonacciNums = (num: number): number => {
    let sum = 0;
    let prev = 0;
    let curr = 1;

    for (let i = 2; i < num; i++) {
        if (isOdd(curr) && curr < num) {
            sum += curr;
        }
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return sum;
};

console.log(sumOddFibonacciNums(10));
console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));