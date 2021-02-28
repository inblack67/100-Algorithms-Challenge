function commonCharacterCount (s1: string, s2: string): number {
    const s1Arr = s1.split('');
    const s2Arr = s2.split('');
    const obj1 = {};
    const obj2 = {};
    let count = 0;

    s1Arr.forEach(el => obj1[ el ] ? obj1[ el ]++ : obj1[ el ] = 1);
    s2Arr.forEach(el => obj2[ el ] ? obj2[ el ]++ : obj2[ el ] = 1);


    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            if (Object.prototype.hasOwnProperty.call(obj2, key)) {
                count++;
            }
        }
    }

    return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));