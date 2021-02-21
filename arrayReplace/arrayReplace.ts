const arrayReplace = (inputArray: number[], elemToReplace: number, substitutionElem: number): number[] => {

    // soln - 1
    // pure without any side effects
    const neededArr = inputArray.map(el => {
        if (el === elemToReplace) {
            return substitutionElem;
        }
        return el;
    });

    return neededArr;

    // ===below solns change the original arr===

    // soln-2
    // inputArray.forEach((el, i) => {
    //     if (el === elemToReplace) {
    //         inputArray[ i ] = substitutionElem;
    //     }
    // });
    // return inputArray;

    // soln-3
    // for (let i = 0; i < inputArray.length; i++) {
    //     const element = inputArray[ i ];
    //     if (element === elemToReplace) {
    //         inputArray[ i ] = substitutionElem;
    //     }
    // }
    // return inputArray;
};

const arr = [ 1, 2, 1 ];
console.log(arrayReplace(arr, 1, 3));