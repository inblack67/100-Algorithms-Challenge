function celsiusToFahrenheit (celsius: number): number {
    const far = (9 / 5 * (celsius)) + 32;
    return far;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));