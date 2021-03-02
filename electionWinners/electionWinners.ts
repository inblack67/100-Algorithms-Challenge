function electionsWinners (votes: number[], k: number): number {
    const goodTillNow = Math.max(...votes);
    let count = 0;
    const res: number[] = [];
    votes.forEach(el => {
        if (el + k > goodTillNow) {
            if (res.includes(el)) {
                // resetting to defaults
                count = 0;
                res.splice(0);
                return count;
            }
            res.push(el);
            count++;
        }
    });
    // console.log(res);   // candidates who have a chance to win
    return count;
}

console.log(electionsWinners([ 10, 11, 12, 15 ], 3));
console.log(electionsWinners([ 2, 3, 5, 2 ], 3));