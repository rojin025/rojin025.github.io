// let scores = [10, 20, 30, 40, 50];

// function findAverage(array: number[]): number {
//   let total = 0;
//   for (let arr of array) {
//     total += arr;
//   }
//   console.log("Total total is ", total);
//   return total / array.length;
// }

// function randomNumbers(array: number[]): number[] {
//   for (let i = 1; i < 10; i++) array.push(i);
//   console.log(array);
//   return array;
// }

// const average = findAverage(scores);
// console.log("Average is ", average);

// console.log("########## 2nd Array ##########");

// // let secArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let secArray: number[] = [];
// let myarray: number[] = randomNumbers(secArray);
// // secArray = randomNumber(secArray);
// console.log(findAverage(myarray));

// /*
// •Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
// •Now write a function named findAverage, that takes an array as an argument and return average of the array values.
// •Call findAverage function passing array you created in step1 and save the return result in a variable, average.
// •Print the average, it should be 30 for this example.
// •Create a second array with values from 1 to 9 and find the average of the array values.
// •Should compute correct average for an array of any size.
// */
// const score: number[] = [10, 20, 30, 40, 50];
// // find ave
// function finAverage(score: number[]): number {
//   let average = 0;
//   let sum = 0;
//   for (let i = 0; i < score.length; i++) {
//     sum += score[i];
//     console.log(sum);
//   }
//   average = sum / score.length;
//   return average;
// }
// console.log("the average ", finAverage(score));

// //• Write a function that accepts a two-dimensional array of numbers and returns the sum of all
// // the elements in the array.
// // • How many loops do you need?
// // • Inner loop?
// // • Try with indices and also for..of
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// function sumMatrix(arr: number[][]): number {
//   let sum = 0;
//   //implement this
//   for (let row = 0; row < matrix.length; row++) {
//     // i can replce it with for each loop.
//     for (const col of arr[row]) {
//       sum += col;
//     }
//   }
//   return sum;
// }
// console.log("expect 45: ", sumMatrix(matrix));

// Exercises
// Given an expression array exp, write a function, balanced(expression: string[]) to examine whether the pairs he
// of “{“, “}” are balanced.
// Consider the following algorithm. Will it solve the problem? (test it by hand with the examples below)
// - Use a for .. of loop with the expression array
// - push any left bracket onto a new array, expressionStack
// - on a right bracket pop the expressionStack and check that return value is a left bracket
// -- using the array as a stack
// - if not, then not balanced
// - if stack empty at end then balanced, else not balanced
// Example:
// Input: exp = [ "{", "}", "{", "{", "}", "}“ ]
// Output: Balanced
// Input: exp = [ "{", "{", "}", "{" ]
// Output: Not Balanced

// const exp: string[] = ["{", "}", "{", "{", "}", "}"];  //  true
// const exp: string[] = ["{", "}"];     //  true
// const exp: string[] = ["0", "{", "}", "{"];   //  Error -> 0
const exp: string[] = ["}", "{", "}", "{", "}"]; //  Error -> } but goes with it.

function isBalance(exp: string[]): boolean {
  let expressionStack: string[] = [];
  for (const bracket of exp) {
    if (bracket === "{") expressionStack.push(bracket);
    else if (bracket === "}") expressionStack.pop();
    else {
      console.log("Invalid input, Error is -> ", bracket);
      return false;
    }
    console.log(bracket);
  }
  console.log(expressionStack);
  if (expressionStack.length === 0) return true;
  return false;
}

// console.log(isBalance(exp));

// Exam Prep

console.log("+++++++ Practicing For Exam +++++++++");
let arr1 = [5, 6, 7, 8, 9];
let arr2 = [34, 35, 66, 77, 87, 100];

/**
 *
 * @param myArray holds number's of array
 * @returns total numbers divisible by 5 in myArray
 */
function div5(myArray: number[]): number {
  let divisibleNum = 0;
  for (let num of myArray) {
    if (num % 5 === 0) {
      console.log(num);
      divisibleNum++;
    }
  }
  return divisibleNum;
}

// console.log("1st Array:" + div5(arr1));
// console.log("2nd Array:" + div5(arr2));

function xyz(arg1: string): boolean {
  if (arg1) {
    return true;
  } else {
    return false;
  }
}

const returnVal = xyz("");
// console.log("Output is ", returnVal);

/**
 *
 * @param hi is Array with highs of each day
 * @param low is Array with lows of each day
 * @param sum will hold total difference hi - low
 * @returns sum
 */
function calcDifferential(hi: number[], low: number[]): number {
  let sum = 0;
  let eachDiff = 0;

  for (let i = 0; i < hi.length; i++) {
    eachDiff = hi[i] - low[i];
    if (eachDiff === 0) sum += 1;
    else sum += eachDiff;
  }
  return sum;
}

// console.log(calcDifferential([80, 78, 82], [50, 48, 52]));
// console.log(calcDifferential([10, 20, 30, 40], [10, 20, 20, 20]));

function matrixMatch(arr1: number[][], arr2: number[][]): number[][] {
  let matchArray: number[][] = [];
  let row = arr1.length;
  let col = arr1[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if ()
      matchArray[i][j] = 1;
    }
  }

  return matchArray;
}
