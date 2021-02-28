function circleOfNumbers (n: number, firstNumber: number): number {
    const clock: number[] = [];
    for (let i = 0; i < n; i++) {
        clock.push(i);
    }
    const mid = n / 2;
    let target: number;
    if (firstNumber >= mid) {
        target = firstNumber - mid;
    } else {
        target = clock.indexOf(firstNumber) + mid;
    }
    return clock[ target ];
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 9));