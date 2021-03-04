function makeArrayConsecutive3 (statues: number[]): number {
    const data = [ ...statues ];
    const sortedData = data.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < sortedData.length; i++) {
        const el = sortedData[ i ];
        const nextEl = sortedData[ i + 1 ];
        if (nextEl) {
            const diff = nextEl - el;
            if (diff > 1) {
                console.log(diff);
                count += diff - 1;
            }
        }
    }
    return count;
}
function makeArrayConsecutive2 (statues: number[]): number {
    const data = [ ...statues ];
    const sortedData = data.sort((a, b) => a - b);
    const min = sortedData[ 0 ];
    const max = sortedData[ sortedData.length - 1 ];
    let count = 0;
    for (let i = min; i < max; i++) {
        if (!sortedData.includes(i)) {
            count++;
        }
    }
    return count;
}

console.log(makeArrayConsecutive2([ 6, 2, 3, 8 ]));