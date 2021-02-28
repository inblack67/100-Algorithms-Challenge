function centuryFromYear (year: number): number {
    const century = year / 100;
    return Math.ceil(century);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));