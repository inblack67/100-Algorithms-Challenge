const isCaseInsensitivePalindrome = (inputString: string): boolean => {
    const pureStrArr = inputString.toLowerCase().split('');
    const reversedPureStrArr = [ ...pureStrArr ].reverse();
    return pureStrArr.join('') === reversedPureStrArr.join('');
};

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));