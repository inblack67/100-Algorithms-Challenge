function areSimilar(a: number[], b: number[]): boolean {
    const str1 = a.toString();
    const str2 = b.toString();
    const arr1 = [];
    const arr2 = [];

    if (str1 === str2) {
        return true;
    }

    a.forEach((num, i) => {
        if (num !== b[i]) {
            arr1.push(num);
            arr2.push(b[i]);
        }
    })

    if (arr1.length === 2 && (arr1.toString() === arr2.reverse().toString())) {
        return true;
    }

    return false
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
