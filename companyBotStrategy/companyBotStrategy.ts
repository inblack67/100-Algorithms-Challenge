function companyBotStrategy (trainingData: number[][]): number {
    const data = [ ...trainingData ];
    let sum = 0;
    let count = 0;

    data.forEach((arr) => {
        if (arr[ 1 ] === 1) {
            sum += arr[ 0 ];
            count++;
        }
    });

    const avg = sum ? sum / count : 0;
    return avg;

}

console.log(companyBotStrategy([ [ 3, 1 ], [ 6, 1 ], [ 4, 1 ], [ 5, 1 ] ]));
console.log(companyBotStrategy([ [ 4, 1 ], [ 4, -1 ], [ 0, 0 ], [ 6, 1 ] ]));
console.log(companyBotStrategy([ [ 4, -1 ], [ 0, 0 ], [ 5, -1 ] ]));