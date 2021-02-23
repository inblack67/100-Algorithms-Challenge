const avoidObstacles = (inputArray: number[]): number => {
    const copiedArray = [ ...inputArray ];
    const sortedArr = copiedArray.sort((a, b) => a - b);
    const arrLength = sortedArr[ sortedArr.length - 1 ];
    const myPath = new Array(arrLength);

    for (let i = 0; i < arrLength; i++) {
        myPath[ i ] = 0;
    }

    sortedArr.forEach((el, i) => {
        // -1 = an obstacle
        myPath[ el ] = -1;     // populating obstacles
    });

    // console.log(myPath);

    let jumps = -1;

    myPath.forEach((el, i) => {
        if (el !== -1) {
            // safe
            jumps++;
        }
    });

    return jumps;
};

console.log(avoidObstacles([ 5, 3, 2, 7, 10, 15 ]));
console.log(avoidObstacles([ 5, 3, 6, 7, 9 ]));