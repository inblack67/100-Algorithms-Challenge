function isTandemRepeat (inputString: string): boolean {
    const strLen = inputString.length;
    const half1 = inputString.slice(0, strLen / 2);
    const half2 = inputString.slice(strLen / 2);
    return half1 === half2;
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));
