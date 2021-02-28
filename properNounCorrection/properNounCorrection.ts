const properNounCorrection = (noun: string): string => {
    const str = noun.trim().toLowerCase();
    const res = str[ 0 ].toUpperCase() + str.slice(1);
    return res;
};

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));