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

console.log(fancyRide(30, [ 0.3, 0.5, 0.7, 1, 1.3 ]));