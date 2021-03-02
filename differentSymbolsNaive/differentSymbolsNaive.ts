function differentSymbolsNaive (s: string): number {
    const strArr = s.split('');
    const obj = {};
    strArr.forEach(el => {
        if (obj[ el ]) {
            obj[ el ]++;
        } else {
            obj[ el ] = 1;
        }
    });
    const keys = Object.keys(obj);
    return keys.length;
}

console.log(differentSymbolsNaive('cabca'));
