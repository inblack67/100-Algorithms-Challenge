const reflectString = (inputString: string): string => {
    const dictionary = {};
    for (let i = 97; i <= 122; i++) {
        const char = String.fromCharCode(i);
        dictionary[ char ] = String.fromCharCode(i - 1);
    }
    dictionary[ 'a' ] = 'z';
    dictionary[ 'z' ] = 'a';

    const str = inputString.toLowerCase();
    const strArr = str.split('');
    strArr.forEach((el, i) => {
        strArr[ i ] = dictionary[ el ];
    });
    const res = strArr.join('');
    return res;
};

const reflectString2 = (inputString: string): string => {
    const str = inputString.toLowerCase();
    const strArr = str.split('');
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
