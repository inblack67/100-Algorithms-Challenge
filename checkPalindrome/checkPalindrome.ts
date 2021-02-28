function checkPalindrome (inputString: string): boolean {
    const str = inputString.trim().toLowerCase();
    const strArr = str.split('');
    const s1 = strArr.join('');
    const s2 = [ ...strArr ].reverse().join('');
    return s1 === s2;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
