const reverseAString = (str: string): string => str.split('').reverse().join('');

const reverseAString2 = (str: string): string => {
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        const el = str[ i ];
        revString += el;
    }
    return revString;
};

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));