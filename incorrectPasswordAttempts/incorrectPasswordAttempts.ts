function incorrectPasscodeAttempts (passcode: string, attempts: string[]): boolean {
    let tried = 0;
    for (let i = 0; i < attempts.length; i++) {
        const el = attempts[ i ];
        if (el === passcode && tried < 10) {
            tried = 0;
        } else {
            tried++;
        }
    }
    return tried >= 10;
}

console.log(incorrectPasscodeAttempts('1111', [ "1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111" ]));