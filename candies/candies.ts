function candies (n: number, m: number): number {
    // n => children
    // m => candies
    const minCandies = Math.floor(m / n);
    const totalCandies = minCandies * n;
    return totalCandies;
}

console.log(candies(3, 10));