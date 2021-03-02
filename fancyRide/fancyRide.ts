// if fares are not in increasing order
function fancyRide (l: number, fares: number[]): string {
    const credit = 20;
    const cars = [ "UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV" ];

    const menu = {};

    cars.forEach((el, i) => {
        menu[ el ] = fares[ i ];
    });

    const chances = {};

    for (const key in menu) {
        if (Object.prototype.hasOwnProperty.call(menu, key)) {
            const el = menu[ key ];
            const totalPrice = el * l;
            if (totalPrice <= credit) {
                chances[ totalPrice ] = key;
            }
        }
    }

    const prices = Object.keys(chances);

    const numPrices = prices.map(el => +el);

    const finalPrice = Math.max(...numPrices);

    return chances[ finalPrice ];
}

/// if fares are in increasing order
function fancyRide2 (l: number, fares: number[]): string {
    const credit = 20;
    const cars = [ "UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV" ];

    for (let i = fares.length - 1; i >= 0; i--) {
        const el = fares[ i ];
        const totalFare = el * l;
        if (totalFare <= credit) {
            return cars[ i ];
        }
    }

}

console.log(fancyRide(30, [ 0.3, 0.5, 0.7, 1, 1.3 ]));
console.log(fancyRide2(30, [ 0.3, 0.5, 0.7, 1, 1.3 ]));