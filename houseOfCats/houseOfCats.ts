function houseOfCats (legs: number): number[] {
    const humanLegs = 2;
    const catLegs = 4;
    let availableLegs = legs;
    const people: number[] = [];
    while (availableLegs > 0) {
        people.unshift(availableLegs / humanLegs);
        availableLegs -= catLegs;
    }
    return people;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
