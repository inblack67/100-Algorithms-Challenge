const isPrime = (num: number): boolean => {
    if (num <= 1) {
        return false;
    }
    let copiedNum = num;
    for (let i = 2; i <= num / 2; i++) {
        console.log(i);
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const sumAllPrimes = (num: number): number => {
    if (num < 2) {
        return null;
    }
    if (num === 2) {
        return 2;
    }
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        const isNumPrime = isPrime(i);
        if (isNumPrime) {
            sum += i;
        }
    }
    return sum;
};

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));