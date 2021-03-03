function maxMultiple (divisor: number, bound: number): number {
    for (let i = bound; i > 0; i--) {
        if (i % divisor === 0) {
            return i;
        }
    }
}

console.log(maxMultiple(3, 10));