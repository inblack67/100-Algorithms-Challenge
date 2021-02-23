const bishopAndPawn = (bishop: string, pawn: string): boolean => {

    let result = false;

    const chess = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
    };

    const bishopX = chess[ bishop[ 0 ] ];
    const bishopY = parseInt(bishop[ 1 ]);

    const pawnX = chess[ pawn[ 0 ] ];
    const pawnY = parseInt(pawn[ 1 ]);

    const bishopCoordinates = { x: bishopX, y: bishopY };
    const pawnCoordinates = { x: pawnX, y: pawnY };
    console.log(bishopCoordinates);
    console.log(pawnCoordinates);

    if (bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === bishopY + pawnX) {
        result = true;
    }

    return result;
};

console.log(bishopAndPawn('a1', 'c3'));