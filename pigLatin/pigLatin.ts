const isVowel = (str: string) => str.match(/[a|e|i|o|u]/gi);

function pigLatin2 (str: string): string {
    let myStr = str;
    const isFirstVowel = isVowel(myStr[ 0 ]);
    if (isFirstVowel) {
        myStr = myStr.concat('way');
    } else {
        const strArr = myStr.split('');
        const x = strArr.shift();
        strArr[ strArr.length ] = x;
        let modString = strArr.join('');
        modString = modString.concat('ay');
        return modString;
    }
    return myStr;
}

// if we are supposed to go until we get a vowel or the string ends
function pigLatin (str: string): string {
    let myStr = str;
    const isFirstVowel = isVowel(myStr[ 0 ]);
    if (isFirstVowel) {
        myStr = myStr.concat('way');
        return myStr;
    } else {
        const strArr = myStr.split('');

        for (let i = 0; i < strArr.length; i++) {
            const el = strArr[ i ];
            if (isVowel(el)) {
                myStr = myStr.concat('ay');
                return myStr;
            } else {
                const strArr2 = myStr.split('');
                strArr2.shift();
                myStr = strArr2.join('');
                myStr = myStr.concat(el);
            }
        }
    }
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
