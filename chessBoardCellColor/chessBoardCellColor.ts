const isEven = (num: number): boolean => num % 2 === 0;
const areSimilar = (num1: number, num2: number) => {
    if (isEven(num1) === isEven(num2)) {
        return true;
    }
    return false;
};
function chessBoardCellColor (cell1: string, cell2: string): boolean {

    const chess = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8
    };

    const cell1X = chess[ cell1[ 0 ] ];
    const cell2X = chess[ cell2[ 0 ] ];
    const cell1Y = +cell1[ 1 ];
    const cell2Y = +cell2[ 1 ];

    if (areSimilar(cell1X, cell1Y) && areSimilar(cell2X, cell2Y)) {
        return true;
    }

    return false;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('E5', 'B8'));
console.log(chessBoardCellColor('H8', 'D4'));
