type Timer = {
    hours: number;
    minutes: number;
};

const getSumOfDigits = (num: number): number => {
    const str = num.toString();
    if (str.length <= 1) {
        return num;
    }
    let sum = 0;
    const strArr = str.split('');
    strArr.forEach(el => sum += +el);
    return sum;
};

function lateRide (n: number): number {
    const timer: Timer = { hours: 0, minutes: 0 };
    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    timer.hours = hours;
    timer.minutes = minutes;
    const sumOfHoursDigits = getSumOfDigits(timer.hours);
    const sumOfMinutesDigits = getSumOfDigits(timer.minutes);
    const res = sumOfHoursDigits + sumOfMinutesDigits;
    return res;
}

console.log(lateRide(240));
console.log(lateRide(808));
