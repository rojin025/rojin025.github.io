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

// Quiz d32

// const array123 = [1, 2, 3];

// use map and an arrow function to get a new array
//  with the squares of each element -- i.e., [1, 4, 9]

// const result = array123.map((num) => num * num);
// console.log("Expected [ 1, 4, 9 ]: ", result);

// //6
// const arr123 = [1, 2, 3];

// // Use reduce to get the sum of the elements of arr123.

// // I can use ,0
// const sum = arr123.reduce((sum, current) => sum + current);
// console.log("Sum is ", sum);

//which of the following will output 1 or 0? (assume prompt is installed and declared)
// const guess = prompt("Enter either alpha or beta") ?? "alpha;"
// const abc = {[key: string]: number} = {alpha: 1, beta: 0};

// 8

/* write a function, maxPoints, to find and return the maximum points of any single player.   */

// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// type Player = {
//   name: string;
//   points: number[];
// };
// function maxPoints(players: Player[]): number {
//   let maxPoint = 0;
//   for (const player of players) {
//     let currentPoint = 0;
//     for (const point of player.points) {
//       currentPoint += point;
//     }
//     if (currentPoint > maxPoint) {
//       maxPoint = currentPoint;
//     }
//   }
//   return maxPoint;
// }

// console.log("expect 4:", maxPoints(players));

// Use reduce to find the sum of an array.
// Use reduce to find the largest element of an array.
// [you may run out of time for these in the quiz, but they will be good practice later for the exam. Note that there are 0 points in this quiz for this question.]

// const arr = [1, 2, 3];
// const sum = arr.reduce((sum, current) => sum + current);
// console.log("Sum is 6 :", sum);

// const largest = arr.reduce((largest, current) => {
//   if (largest < current) {
//     return current;
//   }
//   return largest;
// });

// console.log("Largest is 6 : ", largest);

// // Max
// const max = arr.reduce((max, current) => (max > current ? max : current));
// console.log("Max", max);

// const team = ["Bob", "Fred", "Jim"];
// // destructure the team array onto variables with the same names as the elements, but all lower case
// const [bob, fred, jim] = team;

// console.log("expect Bob", bob);
// console.log("expect Fred", fred);
// console.log("expect Jim", jim);

const team = {
  point: "Bob",
  shooting: "Fred",
  power: "Jim",
  small: "Al",
  center: "Big Sleep",
};
// 1. destructure the team object onto variables with the same names as the properties
const { point, shooting, power, small, center } = team;
point;
shooting;
small;
console.log("expect Big Sleep - ", center);
console.log("expect Jim - ", power);

// // 2. destructure the team onto variables:
// one (point guard),
// two (shooting guard),
//  three (small forward),
//   four (power forward) and
//   five (center)

const {
  point: one,
  shooting: two,
  power: four,
  small: three,
  center: five,
} = team;
// go find point property in team and assgin it to one.
two;
three;
five;

console.log("type of Jim - four: ", typeof four);
console.log("expect Jim: ", four);
console.log("expect Bob: ", one);

// stringified array
const numbers = "[0, 1, 2, 3]";
const numbers2 = JSON.parse(numbers);
console.log(numbers2[1]); // 1

let user =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
const myUser = JSON.parse(user);
console.log(myUser.friends[1]); // 1
