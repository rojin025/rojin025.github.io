// //Destructuring Arr
// const arr = ["java", "Script", "inspired"];

// let [name, , lname] = arr;

// console.log(name);
// console.log(lname);

// Split

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split("o");
// console.log(words);
// //[ 'The quick br', 'wn f', 'x jumps ', 'ver the lazy d', 'g.' ]

// const str2 = "The quick brown fox jumps over the lazy dog.";

// const words2 = str2.split(" ");
// console.log(words2);
// // expected output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

// Sort

// let arr = [2, 1, 15];
// // the method reorders the content of arr
// arr.sort();
// console.log(arr); // [1, 15, 2]

// function compareNumeric(a: number, b: number): number {
//   if (a > b) return 1; //a comes after b if 1
//   if (a == b) return 0;
//   return -1; //a comes before b if -1
// }

// arr = [2, 1, 15];
// arr.sort(compareNumeric);
// console.log("---- Sorting with number ----");
// console.log(arr); // [1, 2, 15]

// // Des
// function des(a: number, b: number): number {
//   if (a > b) return -1; //a comes after b if 1
//   if (a == b) return 0;
//   return 1; //a comes before b if -1
// }

// arr.sort(des);
// console.log("Descending Order", arr); // [ 15, 2, 1 ]

// // // Des lecxical
// function des(anum: number, bnum: number): number {
//   let a = anum.toString();
//   let b = bnum.toString();
//   if (a > b) return -1; //a comes after b if 1
//   if (a == b) return 0;
//   return 1; //a comes before b if -1
// }

// let arr = [2, 1, 15];
// arr.sort(des);
// console.log("Lexi Descending Order", arr); // [ 15, 2, 1 ]

// // Using arrow fun
// let arr = [2, 1, 15];

// // Asscending
// arr.sort((a, b) => a - b);
// console.log(arr);

// // Descending
// arr.sort((a, b) => b - a);
// console.log(arr);

// Reduce

//  //  ########################//  ########################//  ########################//  ################################################
// let arr = [11, 2, 3, 4, -5];

// // Find Sum of whole arr
// let sum = arr.reduce(function (sum, current) {
//   return sum + current;
// }, 0);
// let result2 = arr.reduce((sum, current) => sum + current, 0);
// console.log(sum); // 15
// console.log(result2); // 15

// // Max
// const max = arr.reduce((max, current) => (max > current ? max : current));
// console.log("Max", max);

// // Min
// const min = arr.reduce((a, b) => (a < b ? a : b));
// console.log("Minimun ", min);

// // sorting an object

//Let’s find the one with id === 1:

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Zete" },
//   { id: 3, name: "Aary" },
// ];
// let userSort = users.sort((a, b) => {
//   let nameA = a.name;
//   let nameB = b.name;
//   if (nameA > nameB) return 1;
//   if (nameA < nameB) return -1;
//   return 0;
// });

// console.log("Sort Obj: ", userSort);

//  ##################################################################################################################

//  ################################################################################
//  ################################################################################
// Day 4 Callbacks

// function f(x: number): void {
//   console.log("Value of x : ", x);
// }

// console.log(f()); //   compile error: no argument

// console.log(f(1)); //1
// undefined

// console.log(f(1, 2)); //  expected one argument

// let mySetTimeout = setTimeout(f, 1000, 2);
// passing function f after 1 sec with 2 arg
// setTimeout is expecting a function refrence!!!

// console.log(mySetTimeout);
// clearTimeout(mySetTimeout);

// let timerId = setTimeout(f, 1000, 2);
// console.log(timerId);
// clearTimeout(timerId);
// console.log(timerId);

// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log("tick"), 2000);
// // after 5 seconds stop
// setTimeout(() => {
//   clearInterval(timerId);
//   console.log("stop");
// }, 5000);

// Be sure to use meaningful variable names and write JSdoc comments for findHighScores and any helper functions.

// Exam selfPractice

// function multiplyEvens(...arr: number[]): number {
//   return arr.reduce((sum, num) => (num % 2 === 0 ? sum * num : sum), 1);
// }

// console.log(multiplyEvens(1, 6, 3, 4, 17, 2)); //48
// console.log(multiplyEvens); //48

// function foo(callBack: (num: number) => number, num: number): number {
//   return callBack(num);
// }

// function squ(num: number): number {
//   return num * num;
// }

// function cube(num: number): number {
//   return num ** 3;
// }

// console.log("Squre :", foo(squ, 2));
// console.log("Cube :", foo(cube, 2));
