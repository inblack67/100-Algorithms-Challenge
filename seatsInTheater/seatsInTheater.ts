function seatsInTheater (nCols: number, nRows: number, col: number, row: number): number {
    const tRow = nRows - row;
    const tCol = nCols - col + 1;   // my col will be included too
    const newOrder = tRow * tCol;
    return newOrder;
}

console.log(seatsInTheater(16, 11, 5, 3));