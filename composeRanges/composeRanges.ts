type MyRange = {
    start?: number;
    end?: number;
};

function composeRanges (nums: number[]): string[] {
    console.log(nums);
    let targetIndex = 0;
    let obj: MyRange = {};
    let tryMe = 0;
    nums.forEach((el, i) => {
        const nextEl = nums[ i + 1 ];
        const diff = Math.abs(el - nextEl);
        if (diff === 1) {
            tryMe = 1;
            targetIndex++;
        } else {
            tryMe = 0;
        }
        console.log(tryMe);
    });
    console.log(obj);
    return null;
}


console.log(composeRanges([ -1, 0, 1, 2, 6, 7, 9 ]));