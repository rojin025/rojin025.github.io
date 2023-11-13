/**
 *
 * @param {*} str -> rojin
 * @returns {string} first char in uppercase rojin -> Rojin
 */
export function ucFirst(str) {
    const upperCased = str ? str[0].toUpperCase() + str.slice(1) : str;
    return upperCased;
}
const spamWords = ["xxx", "xxxx", "xxxxx", "viagra"];
spamWords;
/**
 * @param {string} str
 * @returns {boolean} true for string in spam else false
 */
export function checkSpam(str) {
    const spamWord = str.toLowerCase();
    for (const word of spamWords) {
        if (spamWord.includes(word))
            return true;
    }
    return false;
}
/**
 * Truncates a string if it exceeds the specified maxlength.
 * @param {string} str - The input string.
 * @param {number} maxlength - The maximum length of the truncated string.
 * @returns {string} - The truncated string.
 */
export function truncate(str, maxlength) {
    // if (str.length <= maxlength) return str;
    // else return str.slice(0, maxlength) + "...";
    return str.length <= maxlength ? str : str.slice(0, maxlength - 1) + "...";
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for (const num of arr) {
        currentSum = Math.max(0, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
        // console.log("Num :", num);
        // console.log("cureent Sum :", currentSum);
        // console.log("Maxsum :", maxSum);
    }
    return maxSum;
}
export function camelize(str) {
    if (str ?? "") {
        const words = str.split("-") || [];
        const camelizeWords = words.map((word, index) => {
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        });
        return camelizeWords.join("");
    }
    else {
        return "";
    }
    // return (str ?? "").split("-").map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join("");
}
export function extractCurrencyValue(currencyString) {
    return parseFloat(currencyString.replace(/[^\d.]/g, ""));
}
