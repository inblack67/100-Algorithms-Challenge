function stringsConstruction (a: string, b: string): number {
    const pureA = a.trim().toLowerCase().split('').sort().join('');
    const pureB = b.trim().toLowerCase().split('').sort().join('');

    const populationOfA = {};
    const populationOfB = {};

    pureA.split('').forEach(el => {
        if (populationOfA.hasOwnProperty(el)) {
            populationOfA[ el ]++;
        } else {
            populationOfA[ el ] = 1;
        }
    });

    pureB.split('').forEach(el => {
        if (populationOfB.hasOwnProperty(el)) {
            populationOfB[ el ]++;
        } else {
            populationOfB[ el ] = 1;
        }
    });

    const res: number[] = [];

    for (const i in populationOfA) {
        const el = populationOfA[ i ];
        if (Object.prototype.hasOwnProperty.call(populationOfA, i)) {

            if (!populationOfB[ i ] || populationOfB[ i ] < el) {
                return 0;
            }

            res.push(Math.floor(populationOfB[ i ] / el));
        }
    }

    return Math.min(...res);
}

console.log(stringsConstruction('abc', 'abccba'));
console.log(stringsConstruction('abc', 'abccabbca'));