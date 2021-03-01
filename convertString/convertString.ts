function convertString (s: string, t: string): boolean {
    const sourceArr = s.split('');
    const targetArr = t.split('');
    const sourceCounts = {};
    const targetCounts = {};
    sourceArr.forEach(el => {
        if (sourceCounts[ el ]) {
            sourceCounts[ el ]++;
        } else {
            sourceCounts[ el ] = 1;
        }
    });
    targetArr.forEach(el => {
        if (targetCounts[ el ]) {
            targetCounts[ el ]++;
        } else {
            targetCounts[ el ] = 1;
        }
    });
    for (const key in targetCounts) {
        if (Object.prototype.hasOwnProperty.call(targetCounts, key)) {
            if (!sourceCounts[ key ]) {
                return false;
            }
        }
    }
    for (const key in sourceCounts) {
        if (Object.prototype.hasOwnProperty.call(sourceCounts, key)) {
            const el = sourceCounts[ key ];
            if (targetCounts[ key ] > el) {
                return false;
            }
        }
    }
    return true;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcddy'));
