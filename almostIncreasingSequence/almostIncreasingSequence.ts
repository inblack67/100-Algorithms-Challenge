function almostIncreasingSequence(sequence: number[]): boolean {
    let res = false;
    let chances = 0;
    sequence.forEach((el, i) => {
        const next = sequence[i + 1];
        const curr = el;
        console.log(next)
        console.log(curr)
        if (next < curr) {
            res = true;
        }
        else {
            if (chances < 1) {
                res = true;
                chances += 1;
            }
            else {
                res = false;
            }
        }
    })

    return res;
}

// console.log(almostIncreasingSequence([1, 3, 2, 0]))
console.log(almostIncreasingSequence([1, 3, 2]))