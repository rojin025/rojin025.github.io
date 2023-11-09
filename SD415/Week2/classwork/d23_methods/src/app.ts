// CW 1
// type Person = {
//   name: string;
//   age: number;
//   job: string;
//   sayHi(this: Person): void;
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
//   console.log(`Hello, my name is  ${this.name}`);
// }

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
//     for (const point of player.points) {
//       result += point;
//     }
//   }
//   return result;
// }

// /* write a function findProps to return an array of all the properties in any given object */
// console.log("expect [a, b, c]: ", findProps({ a: 1, b: 2, c: 3 }));
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

// let str = "Widget with id";
// console.log(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
// console.log(str.indexOf("widget")); // -1, not found, the search is case-sensitive
// console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// const myString = "Slice is cool!";
// for (let i = 0; i < myString.length; i++) {
//   console.log(myString.slice(i, myString.length));
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
//   result.splice(1, arr.length / 2, replacement);
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
