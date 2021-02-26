const sortByLength = (inputArray: string[]): string[] => {
    const copiedArray = [ ...inputArray ];
    copiedArray.sort((a, b) => a.length - b.length);

    // heavy
    // copiedArray.sort((a, b) => {
    //     if (a.length >= b.length) {
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });

    return copiedArray;
};

const arr = [ "abc",
    "",
    "aaa",
    "a",
    "zz" ];
console.log(sortByLength(arr));