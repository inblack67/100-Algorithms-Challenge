function maxMultiple2 (divisor: number, bound: number): number {
    for (let i = bound; i > 0; i--) {
        if (i % divisor === 0) {
            return i;
        }
    }
}
function maxMultiple (divisor: number, bound: number): number {
    const rem = bound % divisor;
    return bound - rem;
}

console.log(maxMultiple(3, 10));