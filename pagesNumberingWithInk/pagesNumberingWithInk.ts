function pagesNumberingWithInk (current: number, numberOfDigits: number): number {
    let digitsLeft = numberOfDigits;
    let currentPage = current;
    let count = 0;

    while (digitsLeft > 0) {
        currentPage += 1;
        digitsLeft -= currentPage.toString().length;
        count++;
    }
    return count;
}

const current = 1;
const numberOfDigits = 5;
console.log(pagesNumberingWithInk(current, numberOfDigits));
console.log(pagesNumberingWithInk(8, 4));