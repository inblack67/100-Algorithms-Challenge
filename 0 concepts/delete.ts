// delete el from an array or a property from an obj

const obj = {
    one: 1,
    two: 2,
    three: 3
};

const arr = [ 1, 2, 3, 4 ];

delete arr[ 0 ];
delete obj.one;

console.log(arr);
console.log(obj);
console.log(obj.hasOwnProperty('one'));