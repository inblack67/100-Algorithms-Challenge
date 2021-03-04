const getSumOfElements = (rest: number[]) => rest.reduce((a, b) => a + b);

function ratingThreshold (threshold: number, ratings: number[][]): number[] {
    console.log(threshold);
    console.log(ratings);
    const res: number[] = [];
    ratings.forEach((el, i) => {
        const sum = getSumOfElements(el);
        const avg = sum / el.length;
        if (avg < threshold) {
            res.push(i);
        }
    });
    return res;
}

console.log(ratingThreshold(3.5,
    [ [ 3, 4 ],
    [ 3, 3, 3, 4 ],
    [ 4 ] ]));