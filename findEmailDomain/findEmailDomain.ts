function findEmailDomain (address: string): string {
    const last = address.lastIndexOf('@');
    const res = address.slice(last + 1);
    return res;
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
