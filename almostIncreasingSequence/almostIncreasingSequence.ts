function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;
    sequence.forEach((num, i) => {
        if (num <= sequence[i - 1]) {
            count++;
            if (sequence[i - 1] >= sequence[i + 1] && num <= sequence[i - 2]) {
                count++;
            }
        }
    })
    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 0]))
console.log(almostIncreasingSequence([1, 3, 2]))