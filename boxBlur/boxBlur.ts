type MatrixOrder = {
    rows: number;
    cols: number;
};

const findMatrixOrder = (matrix: number[][]): MatrixOrder => {
    const rows = matrix.length;
    const cols = matrix[ 0 ].length;
    return { rows, cols };
};

const findMatrixMidElement = (matrix: number[][]): number => {
    const rows = matrix.length;
    const cols = matrix[ 0 ].length;

    const midRowIndex = Math.floor(rows / 2);
    const midColIndex = Math.floor(cols / 2);

    const midEl = matrix[ midRowIndex ][ midColIndex ];

    return midEl;
};

const boxBlur = (image: number[][]): number[][] => {
    const imageOrder = findMatrixOrder(image);
    const imageMidEl = findMatrixMidElement(image);
    if (imageOrder.rows === 3 && imageOrder.cols === 3) {
        let sum = 0;
        image.forEach((row) => {
            row.forEach((col) => {
                sum += col;
            });
        });
        const res = Math.floor(sum / 9);
        return [ [ res ] ];
    }
    return [];
};

// const mat = [ [ 1, 1, 1, 2, 1, 1 ],
// [ 1, 7, 1, 3, 1, 2 ],
// [ 1, 1, 1, 4, 1, 2 ],
// [ 1, 1, 1, 5, 1, 2, ],
// [ 1, 1, 1, 6, 1, 2 ],
// [ 1, 1, 1, 7, 1, 2 ], ];

const mat = [ [ 1, 1, 1 ],
[ 1, 7, 1 ],
[ 1, 1, 1 ], ];

console.log(boxBlur(mat,));

// console.log(boxBlur([ [ 1, 1, 1 ],
// [ 1, 7, 1 ],
// [ 1, 1, 1 ], ]));