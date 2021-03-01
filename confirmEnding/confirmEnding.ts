const confirmEnding2 = (str: string, target: string) => str.endsWith(target);

const confirmEnding = (str: string, target: string) => {
    const sub = str.substring(str.length - target.length);
    return sub === target;
};

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(confirmEnding("yo whats 7up", " 7up"));