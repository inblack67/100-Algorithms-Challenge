function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourStrongestArm = Math.max(yourLeft, yourRight);
    const yourWeakestArm = Math.min(yourLeft, yourRight);
    const friendsStrongestArm = Math.max(friendsLeft, friendsRight);
    const friendsWeakestArm = Math.min(friendsLeft, friendsRight);
    return (yourStrongestArm === friendsStrongestArm && yourWeakestArm === friendsWeakestArm);
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
