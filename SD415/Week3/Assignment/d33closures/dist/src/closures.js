/**
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 */
export function inArray(arr) {
    return (num) => arr.includes(num);
}
/**
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 */
export function inBetween(low, high) {
    return (num) => {
        return num >= low && num <= high;
    };
}
/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            return i;
        };
        shooters.push(shooter);
    }
    return shooters;
}
