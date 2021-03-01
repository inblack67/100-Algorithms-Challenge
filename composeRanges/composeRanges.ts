type MyRange = {
    start: number;
    end: number;
};

const composeRanges = (nums: number[]): string[] => {
    const res: string[] = [];
    const ranges: MyRange[] = [ { start: nums[ 0 ], end: nums[ 0 ] } ];

    for (let i = 1; i < nums.length; i++) {
        const el = nums[ i ];
        const index = ranges.length - 1;
        if (el === ranges[ index ].end + 1) {
            ranges[ index ].end = el;
        } else {
            ranges.push({ start: el, end: el });
        }
    }

    ranges.forEach(range => {
        if (range.start !== range.end) {
            const str = `${ range.start }->${ range.end }`;
            res.push(str);
        } else {
            res.push(range.start.toString());
        }
    });

    return res;

};

console.log(composeRanges([ -1, 0, 1, 2, 6, 7, 9 ]));