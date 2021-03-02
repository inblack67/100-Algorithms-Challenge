function electionsWinners (votes: number[], k: number): number {
    const copy = [ ...votes ];
    const sortedVotes = copy.sort((a, b) => b - a);
    const res: number[] = [];   // can be a winner
    const goodTillNow = Math.max(...sortedVotes);

    if (k === 0 && sortedVotes[ 0 ] !== sortedVotes[ 1 ]) {
        res.push(sortedVotes[ 0 ]);
        return res.length;
    }

    sortedVotes.forEach(el => {
        if (el + k > goodTillNow) {
            res.push(el);
        }
    });

    return res.length;
}

console.log(electionsWinners([ 10, 11, 12, 15 ], 5));
console.log(electionsWinners([ 2, 3, 5, 2 ], 3));