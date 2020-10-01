function alternatingSums(a: number[]): number[] {
    const result = [];
    let w1 = 0, w2 = 0;
    a.forEach((num, i, arr) => {
        const team1 = arr[2 * i];
        const team2 = arr[2 * i + 1];
        if (team1 !== undefined) {
            w1 += team1;
        }
        if (team2 !== undefined) {
            w2 += team2;
        }
    })
    result.push(w1);
    result.push(w2);
    return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))