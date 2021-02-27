const reflectString = (inputString: string): string => {
    const strArr = inputString.split('');

    strArr.forEach((el, i) => {
        const code = el.charCodeAt(0);
        if (code === 97) {
            strArr[ i ] = 'z';
        } else if (code === 122) {
            strArr[ i ] = 'a';
        }
        else {
            strArr[ i ] = String.fromCharCode(code - 1);
        }
    });

    return strArr.join('');
};

console.log(reflectString("namez"));
