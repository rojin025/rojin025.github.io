/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/
export function copyArray(arr) {
    // COMPLETE THIS
    return [...arr];
}
export function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
export function findMin(...arr) {
    return Math.min(...arr);
}
export function findMax(...arr) {
    return Math.max(...arr);
}
export function findProduct(...arr) {
    //   let newArr = arr;
    return arr.reduce((product, num) => product * num, 1);
}
