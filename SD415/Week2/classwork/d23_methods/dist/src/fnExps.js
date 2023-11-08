/**
 *@returns {number} double the input
 */
export function double(num) {
    return num * 2;
}
/**
 * @returns {number} 100 times the input
 */
export function times100(num) {
    return num * 100;
}
/**
 * @returns {number} triple the input
 */
export function triples(num) {
    return num * 3;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr, myFunction) {
    const result = [];
    for (const item of arr) {
        result.push(myFunction(item));
    }
    return result;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMapArrow(arr, myFunction) {
    const result = arr.map((item) => myFunction(item));
    return result;
}
export function myCallback(func, arg) {
    console.log(func(arg));
}
export function cube(arg) {
    return arg * arg * arg;
}
export function cubeSquare(arg) {
    if (arg % 2 === 0)
        return arg * arg * arg;
    else
        return 0;
}
myCallback(cube, 10);
myCallback(cubeSquare, 10);
myCallback(cubeSquare, 9);
