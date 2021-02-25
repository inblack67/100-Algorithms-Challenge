const swapDigits = (a: number[], currentIndex: number): number[] => {
    const arr = [ ...a ];
    for (let i = 0; i < currentIndex; i++) {
        arr[ i ] = arr[ i ] === 0 ? 1 : 0;  // opposite the prev lights
    }
    arr[ currentIndex ] = 0;    // current on light => turn it off
    return arr;
};

function switchLights (a: number[]): number[] {

    let arr = [ ...a ];

    arr.forEach((el, i) => {
        if (el === 1) {
            // light is on
            arr = [ ...swapDigits(arr, i) ];
        }
    });

    return arr;
}

console.log(switchLights([ 1, 1, 1, 1, 1 ]));


// const swapDigits = (arr: number[]): number[] => {
//     const res = arr.map((el) => el === 0 ? 1 : 0);
//     return res;
// };

// function switchLights (a: number[]): number[] {

//     let arr = [ ...a ];

//     arr.forEach((light, i) => {
//         if (light === 1) {
//             if (i === 0) {
//                 arr[ 0 ] = 0;
//             } else if (i === 1) {
//                 arr[ 0 ] = arr[ 0 ] === 1 ? 0 : 1;
//                 arr[ 1 ] = 0;
//             } else {
//                 const prevLights = arr.slice(0, i);
//                 const swappedPrevDigits = swapDigits(prevLights);
//                 swappedPrevDigits.forEach((el, j) => {
//                     arr[ j ] = el;
//                 });
//                 arr[ i ] = 0;
//             }
//         }
//     });

//     return arr;
// }

// const arr = [ 1, 2, 3, 4 ];
// const sliceMe = (arr: number[]) => arr.slice(2, 4);
// console.log(sliceMe(arr));

// console.log(switchLights([ 1, 1, 1, 1, 1 ]));
// console.log(switchLights([ 1, 1, 1, 1, 1 ]));
// console.log(switchLights([ 1, 1, 1, 1, 1 ]));
// console.log(switchLights([ 1, 1, 1, 1, 1 ]));
// console.log(switchLights([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ]));
// console.log(switchLights([ 0, 0 ]));