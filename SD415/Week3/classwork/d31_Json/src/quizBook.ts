//  ##################################################################################################################
//  ##################################################################################################################
// Quiz d2

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

// const team = {
//   point: "Bob",
//   shooting: "Fred",
//   power: "Jim",
//   small: "Al",
//   center: "Big Sleep",
// };
// // 1. destructure the team object onto variables with the same names as the properties
// const { point, shooting, power, small, center } = team;
// point;
// shooting;
// small;
// console.log("expect Big Sleep - ", center);
// console.log("expect Jim - ", power);

// // // 2. destructure the team onto variables:
// // one (point guard),
// // two (shooting guard),
// //  three (small forward),
// //   four (power forward) and
// //   five (center)

// const {
//   point: one,
//   shooting: two,
//   power: four,
//   small: three,
//   center: five,
// } = team;
// // go find point property in team and assgin it to one.
// two;
// three;
// five;

// console.log("type of Jim - four: ", typeof four);
// console.log("expect Jim: ", four);
// console.log("expect Bob: ", one);

// // stringified array
// const numbers = "[0, 1, 2, 3]";
// const numbers2 = JSON.parse(numbers);
// console.log(numbers2[1]); // 1

// let user =
//   '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// const myUser = JSON.parse(user);
// console.log(myUser.friends[1]); // 1

//  ##################################################################################################################
//  ##################################################################################################################
// Day 3

// let [firstName, surname] = "Ilya Kantor".split(" ");
// const arr1234 = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr1234;
// console.log(a);
// console.log(b);
// console.log(c);

// quiz4

// flatten(dailyRecord) returns:

// [
// { date: '01/10/2022', id: 1, amount: 100 },
// { date: '01/10/2022', id: 2, amount: 10 },
// { date: '01/11/2022', id: 3, amount: 1 },
// { date: '01/11/2022', id: 2, amount: 5 },
// { date: '01/11/2022', id: 1, amount: 15 }
//   ]

// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 2, amount: 5 };
// const donation5 = {
//   funderId: 1,
//   amount: 15,
// };

// const day1 = {
//   donations: [donation1, donation2],
//   date: "01/10/2022",
// };

// const day2 = {
//   donations: [donation3, donation4, donation5],
//   date: "01/11/2022",
// };

// const dailyRecord = [day1, day2];

// type Donation = {
//   funderId: number;
//   amount: number;
// };

// type myData = {
//   date: string;
//   id: number;
//   amount: number;
// };

// type Day = {
//   donations: Donation[];
//   date: string;
// };

// function flatten(dailyRecord: Day[]): myData[] {
//   let result: myData[] = [];
//   // dailyRecord.forEach((day) => {
//   //   day.donations.map((donation) => {
//   //     result.push({
//   //       date: day.date,
//   //       id: donation.funderId,
//   //       amount: donation.amount,
//   //     });
//   //   });
//   // });
//   dailyRecord.map(({ donations, date }) => {
//     donations.map(({ funderId, amount }) => {
//       result.push({ date: date, id: funderId, amount: amount });
//     });
//   });
//   return result;
// }
// //  { date: '01/10/2022', id: 1, amount: 100 }
// console.log("flattening : ", flatten(dailyRecord));

// Write your own version of Array.map.
// Write a function, myMap(arr, fun) that takes an array and
// a function as arguments and
// returns a new array that is formed by applying
// the function to each element
// of the array and saving the result in the new array.
// Do not use the Array.map method in your code.

// function myMap(arr: number[], fun: (num: number) => number): number[] {
//   let result: number[] = [];
//   for (const num of arr) {
//     result.push(fun(num));
//   }
//   return result;
// }

// function mul(num: number): number {
//   return num * 2;
// }
// function sqr(num: number): number {
//   return num ** 2;
// }

// console.log("myMap : ", myMap([1, 2, 3], mul)); //  myMap :  [ 2, 4, 6 ]
// console.log("sqr : ", myMap([1, 2, 3], sqr)); // myMap3 :  [ 1, 4, 9 ]

// //Write a function, smash, that uses map and destructuring in parameters
// // of the callback function. Remember that you need () around destructuring brackets
// // for an object if you do not have let or const.
// // smash input is an array of objects with x and y properties.
// // It returns an array that has the x and y values added together.

// const bar = [
//   { x: 1, y: 2 },
//   { x: 10, y: 4 },
//   { x: 4, y: 2 },
// ];
// console.log("expect [3, 14, 6]:", smash(bar));

// type Bar = {
//   x: number;
//   y: number;
// };

// function smash(bar: Bar[]): number[] {
//   return bar.map(({ x: number1, y: number2 }) => number1 + number2);
// }

// Write a function, makeCounter() that declares a local variable, count, and
// another local variable, innerFunc, which is an inner function; innerFunc will
// increment the count variable and return the incremented value. makeCounter
// should return innerFunc.

// // Encapsulation of data
// function makeCounter(): () => number {
//   let count = 0;
//   //create fun
//   // console.log("count before: ", count);
//   return function innerFunc(): number {
//     count++; // 1
//     // console.log("inner count: ", count);
//     return count;
//   };
// }

// let counter = makeCounter();
// console.log("global call - ", counter()); // 1
// // let counter2 = makeCounter(); //  making another copy of fun
// // console.log(counter2());
// let counter2 = counter; //  but here we are refering to same fun
// console.log("global call - ", counter2());
// console.log("global call - ", counter2());
// // Call it twice to make different counters, counter1 and counter2.

// // Do they keep independent counts?

// console.log("----------------");
// console.log(makeCounter()()); //  lost // it default's to 0 after calling
// console.log(makeCounter()()); //  lost count

//  ##################################################################################################################
//  ##################################################################################################################

//  3

// Recall the makeCounter code:

// function makeCounter(): ()=>number {

//   let count = 0;

//   return function():number { count++; return count; };

// }

// // Rewrite makeCounter to that the callback function it returns can take an increment as an argument.
// // This will allow the caller to increase the count by a given number.  E.g.,
// // const myCount = makeCounter();
// // myCount(10);  // will return the count incremented by 10.

// function makeCounter(): (increment?: number) => number {
//   let count = 0;

//   return function (increment?: number): number {
//     count += increment ?? 1; //  nullish coalescing operator
//     return count;
//   };
// }

// const myCount = makeCounter();
// console.log("My current count number is :", myCount()); //  1
// console.log("My current count(10) number is :", myCount(10)); //  11

// 4

// Now modify makeCounter so that the callback it returns accepts an argument for
//  the increment value, and also it returns a warning string whenever it has been
// incremented by a value greater than 1.  E.g.,

// function makeCounter(): (increment?: number) => number {
//   let count = 0;

//   return function (increment?: number): number {
//     count += increment ?? 1;
//     if (increment && increment > 1)
//       console.log("Warining: + > 1 by", increment); // checking truthy too
//     return count;
//   };
// }

// const counter = makeCounter();
// console.log(counter(10));
// console.log(counter(2));
//will return "Warning:  increment was by value greater than 1: " + x

// where x is the current count value as normal.

// Also, your counter should still handle the case where it is called
// with no argument and increments by 1 as normal.

// function makeCounter(): () => number {
//   let count = 0;

//   return function (num: number = 1): number {
//     if (num > 1) {
//       console.log(`Warning:  increment was by value greater than 1: ${num}`);
//     }
//     count += num;
//     return count;
//   };
// }

// 5 Quiz
// //The following objects record the season statistics for players on a basketball team.

// const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
// const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
// const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
// const teamStats = [player1, player2, player3];
// //Write a function, findHighScores, that finds the high score in the season for each player as follows:
// console.log("expect [{jersey: 8, high: 7},
// {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " ,
//  findHighScores(teamStats));

// const player1 = {
//   jersey: 8,
//   stats: [
//     { game: 1, points: 6 },
//     { game: 2, points: 7 },
//   ],
// };
// const player2 = {
//   jersey: 12,
//   stats: [
//     { game: 1, points: 16 },
//     { game: 2, points: 14 },
//   ],
// };

//          { game: 5, points: 89 },
// type Stats = { game: number; points: number };

// const player3 = {
//   jersey: 6,
//   stats: [
//     { game: 1, points: 10 }, //  1 stats
//     { game: 2, points: 6 }, //  2
//   ],
// };
// const teamStats = [player1, player2, player3];

// type Player = {
//   jersey: number;
//   stats: Stats[];
// };

// type MyData = {
//   jersey: number;
//   high: number;
// };
// function findHighScores(teamStats: Player[]): MyData[] {
//   let result: MyData[] = [];
//   //          DS doesnot need ()
//   for (const { jersey, stats } of teamStats) {
//     //        () needed for destructures
//     const pointsArr = stats.map(({ points }) => points); // [ 10 , 6 ]
//     const maxPoint = Math.max(...pointsArr); //  10
//     result.push({ jersey: jersey, high: maxPoint });
//   }
//   return result;
// }

// findHighScores(teamStats);

// // GPT Awesomeness
// const findHighScores2 = (teamStats: Player[]): MyData[] =>
//   teamStats.map(({ jersey, stats }) => ({
//     jersey,
//     high: Math.max(...stats.map(({ points }) => points)),
//   }));

// const result: MyData[] = findHighScores2(teamStats);
// console.log(result);

//
// function makeWorker() {
//   let name = "Pete";

//   return function () {
//     console.log(name);
//   };
// }

// let name = "John";
// name;

// // create a function

// let work = makeWorker();

// // call it

// console.log(work()); // what will it show?

// Quiz 4
// Write a function, evenRecurse, that will use recursion to print all positive even numbers less than a given number, e.g.,
// evenRecurse(7) will log 6,4,2,0

// function evenRecurse(num: number): void {
//   if (num === 0) {
//     console.log(num);
//     return;
//   } else {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//     evenRecurse(num - 1);
//   }
// }

// evenRecurse(7);

//write a function, averagePoints, to get an array containing the average points across for each player .
//  Then modify the function to return objects,

// // Try with a regular for..of loop and then using map and reduce.
// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// type Player = {
//   name: string;
//   points: number[];
// };

// function averagePoints(players: Player[]): number[] {
//   let result: number[] = [];
//   //          Points -> destucture
//   for (const { points } of players) {   //
//     // name;     //  "Bob"
//     //  points: [1, 2, 1] -> 4  // use reduce to get total number.
//     let total = points.reduce((total, point) => total + point, 0);
//     let avg = total / points.length;
//     result.push(avg);
//   }
//   return result;
// }

// console.log(averagePoints);   //  Funtion // 0 . it will print out funciton as ref
// // console.log(averagePoints());  //

// console.log("expect [1.33, 1, 1 ]: ", averagePoints(players));

// type PointLabel = {
//   [key: string]: number;
// };

// function averagePointsLabeled(players: Player[]): PointLabel[] {
//   let result: PointLabel[] = [];
//   for (const { name, points } of players) {
//     name;
//     let total = points.reduce((total, point) => total + point, 0);
//     let avg: number = Number((total / points.length).toFixed(2));
//     result.push({ [name]: avg });
//   }
//   return result;
// }

// console.log(
//   "expect [{Bob:1.33}, {Andre:1}, {Max:1} ]: ",
//   averagePointsLabeled(players)
// );

// // Geli
// console.log((123.2345).toFixed(2));

// function averagePoints(players:Player[]):number[]{
//   let avrgPoints:number[]=[];
//   //let avergWithNames:{name:string,points:number}[]=[];

//   for (const player of players){
//     if (player.points.length>0){
//     let total=player.points.reduce((sum,point) =>sum+point,0)
//      avrgPoints.push(total/player.points.length);
//      //avergWithNames.push({name:player.name,points:avrgPoints})
//     }
//   }

// return avrgPoints
// }
// console.log (averagePoints(players));

