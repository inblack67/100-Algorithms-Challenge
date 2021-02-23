function validTime (time: string): boolean {
    const timeArr = time.split(':');
    const hour = +timeArr[ 0 ];
    const min = +timeArr[ 1 ];
    if (hour > 23 || hour < 0) {
        return false;
    }
    if (min > 59 || min < 0) {
        return false;
    }
    return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
console.log(validTime('00:00'));