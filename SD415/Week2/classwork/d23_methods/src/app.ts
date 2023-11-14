// // CW 1
// type Person = {
//   name: string;
//   age: number;
//   job: string;
//   sayHi: (this: Person) => void;
// };
// const manager: Person = {
//   name: "John",
//   age: 27,
//   job: "Software Engineer",
//   sayHi: sayHowdy,
// };
// const intern: Person = {
//   name: "Ben",
//   age: 21,
//   job: "Software Engineer Intern",
//   sayHi: sayHowdy,
// };
// function sayHowdy(this: Person) {
//   console.log(`Hello, my name is  ${this.name} and I am ${this.job}.`);
// }

// manager.sayHi();
// intern.sayHi();

// : colon

// CW 2 // we avoid short hand notations

// let x = 5;
// let y = { x };
// console.log(y); //  {x : 5}

// function sum(arr: number[]): number {
//   return 1;
// }

// const foo = { sum };

// console.log(foo.sum);
// console.log(foo.sum([1, 2, 3]));

// CW 3

////write a for loop to print out the values of the properties according to the property names in the
// propertyOrder array. You must use the properties array to access the values. You cannot directly
// write console.log(numbers.one) …

// const numbers: { [key: string]: number } = {
//   one: 1,
//   two: 22,
//   three: 333,
//   four: 444,
// };
// const propertyOrder = ["one", "four", "three", "two"];

// for (const key of propertyOrder) {
//   console.log(numbers[key]);
// }

// // using in
// for (const key in numbers) {
//   console.log(numbers[key]);
// }

// const num: { [key: string]: number } = {
//   one: 1,
//   two: 22,
//   three: 333,
//   four: 444,
// };

// const propertyOrder = ["one", "four", "three", "two"];

// for (const key of propertyOrder) {
//   console.log(num[key]);
// }

// Quiz

// /* write a function, sumPoints, to get the total points across all players */

// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// console.log("expect 10: ", sumPoints(players));

// type Player = {
//   name: String;
//   points: number[];
// };

// function sumPoints(players: Player[]): number {
//   let result = 0;
//   for (const player of players) {
//     for (const points of player.points) {
//       result += points;
//     }
//   }
//   return result;
// }

// /* write a function findProps to return an array of all the properties in any given object */

// //exam prep
// type myObject = {
//   a: number;
//   b: number;
//   c: number;
// };

// function findProps(obj: myObject): number[] {
//   let result = [];
//   for (const key in obj) {
//     result.push(obj[key as keyof myObject]);
//   }
//   return result;
// }

// console.log("expect [1, 2, 3]: ", findProps({ a: 1, b: 2, c: 3 }));

// type MyObject = {
//   a: number;
//   b: number;
//   c: number;
// };
// function findProps(myobj: MyObject): string[] {
//   let myArr: string[] = [];
//   for (const key in myobj) {
//     myArr.push(key);
//   }
//   return myArr;
// }

// console.log((0.666667).toFixed(4) == (2 / 3).toFixed(4)); // true?
// console.log(0.6666666666666667 === 2 / 3); // true?
// console.log((2 / 3).toFixed(4));

// let str = "Widget with id";
// console.log(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
// console.log(str.indexOf("widget")); // -1, not found, the search is case-sensitive
// console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// const myString = "Slice is cool!";
// for (let i = 0; i < myString.length; i++) {
//   console.log(myString.slice(i));
// }

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });

// // Classwork
// const arr = [1, 5, 16, 3, 108];
// arr.forEach((num: number): void => {
//   if (num % 2 === 0) console.log(num);
// });

// function isOdd

// CW

// // use slice and splice to implement the replaceInterior function
// function replaceInterior(arr: number[], replacement: number): number[] {
//   let result = arr.slice();
//   result.splice(1, arr.length - 2, replacement);
//   return result;
// }

// let arr = [1, 2, 3, 4, 5];
// const result = replaceInterior(arr, 999);

// console.log("expect [1, 999, 5]: ", result);
// const result2 = replaceInterior(arr, 1234);
// console.log("expect [1, 1234, 5]: ", result2);
// console.log("expect [1, 2, 3, 4, 5]: ", arr);

// ➢ use filter, find, and findIndex to find
// ➢ all the even numbers
// ➢ the first even number
// ➢ the index of the first even number
// const numbers = [1, 5, 18, 2, 77, 108];
// const findEven = numbers.filter((item) => item % 2 === 0);
// // console.log(findEven);
// const findFirst = findEven.find(findEven[0]);
// console.log(findFirst);
// const findEven = numbers.filter((item) => item % 2 === 0);
// console.log(findEven);

// Self Practice

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");

// console.log(arr); // now ["Let's", "dance", "right", "now"]

// let arr = ["I", "study", "JavaScript"];
// arr;
// // arr.splice(1, 1);
// arr.splice(1, 1, "Love");
// console.log(arr);
// // arr.concat(["j", "a", "v", " a"]);   // Why didnot it work
// arr.push("Java");
// console.log(arr.length);

// let arrClone = arr.slice();
// console.log(arrClone);

// arr.forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });

// let num = [1, 2];
// console.log(num.concat([3, 4]));

// let str = "java";
// console.log(str.concat("Script"));

// Find
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
//   { id: 4, name: "Mary" },
// ];

// let user = users.find((item) => item.id >= 1);
// console.log(user);

// const findUser =

// let myInt = 555;
// myInt = false;

// let hike = "1043huthuthut";
// let what = parseInt(hike, 10);
// console.log(what);

// const array123 = [1, 2, 3];

// // use map and an arrow function to get a new array with the squares of each element -- i.e., [1, 4, 9]

// const square = array123.map(someFunction);
// square;

// // console.log(
// //   "cube is ",
// //   array123.map((num) => num * num * num)
// // );

// function someFunction(num: number): number {
//   return num * num;
// }
// // console.log(square);
// console.log("3.35 -> ", (3.35).toFixed(1));
// console.log("6.35 -> ", (6.35).toFixed(1));
// console.log("3.35 -> ", Math.ceil(3.35));
// console.log("6.35 -> ", Math.ceil(6.35));

// cw

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
// let lengths2 = ["Bilbo", "Gandalf", "Nazgul"].map(
//   (item, index) => index + ": " + item.length
// );
// console.log(lengths); // [5,7,6]
// // modify so that it logs array with index: item.length instead of just item.length
// console.log("expect [0: 5, 1: 7, 2: 6]", lengths2);
