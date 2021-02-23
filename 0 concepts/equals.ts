const compareUs = (a: number | string, b: number | string) => {
    const de = a == b;
    const te = a === b;
    return { de, te };
};

console.log(compareUs(5, '5'));