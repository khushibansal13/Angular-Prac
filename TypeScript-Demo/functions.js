"use strict";
const mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(2, 3));
//here num3 is optional parameter
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
// here num3 is required parameter
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 5));
// here num3 is rest parameter
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, curr) => acc + curr, 0);
}
// all three ways we can write in rest parameter
let numbers = [1, 1, 1];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[1, 1, 1]));
console.log(add2(2, 3, 1, 1, 1));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d"]);
