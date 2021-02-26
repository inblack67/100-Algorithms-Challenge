const sortByHeight = (a: number[]): number[] => {
    const arr = [ ...a ];
    const filteredArr = arr.filter(el => el !== -1);
    const sortedFilterArr = filteredArr.sort((a, b) => a - b);
    let j = 0;
    arr.forEach((el, i) => {
        if (el !== -1) {
            arr[ i ] = sortedFilterArr[ j ];
            j++;
        }
    });
    return arr;
};

console.log(sortByHeight([ -1, 150, 190, 170, -1, -1, 160, 180 ]));