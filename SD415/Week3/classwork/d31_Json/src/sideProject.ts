// //1. Giving default value
// function rollDice(num: number = 6): number {
//   return Math.floor(Math.random() * num) + 1;
// }

// console.log(rollDice()); // Random number between 1 and 6
// console.log(rollDice(10)); // Random number between 1 and 10

// // Order Matter's in giving default value
// function sayHi(
//   name: string,
//   msg: string = "Hello,",
//   pun: string = "!"
// ): string {
//   return `${msg} ${name}${pun}`;
// }

// console.log(sayHi("world")); //Hello, world!
// console.log(sayHi("world is great", "The", "!!!!!!!!")); //  The world is great!!!!!!!!

// // 2. Spread "...nums"
// const nums = [1, 2, 3];
// console.log(Math.max(...nums)); //  3
// console.log(Math.min(...nums)); //  1

// const nums2 = [4, 5, 6];
// console.log([...nums, ...nums2]); // [ 1, 2, 3, 4, 5, 6 ]
// console.log([...nums, ...nums2, 7, 8, 9]); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// const str = "Hello";
// console.log(...str); // H e l l o

// // spread used in object    (Pure)
// const person = {
//   name: "Invalid",
//   lname: "Bijukchhe",
//   school: "MIU",
// };
// const person2 = {
//   name: "Rojin",
//   job: "FullStack Dev",
// };

// const personInfo = { ...person, ...person2 }; // name is overWriten and copied to new
// //  {
// //   name: 'Rojin',
// //   lname: 'Bijukchhe',
// //   school: 'MIU',
// //   job: 'FullStack Dev'
// //  }
// console.log(personInfo); // 2nd one wins

// //{ name: 'Rojin', lname: 'Bijukchhe', school: 'MIU', country: 'USA' }
// const emp = { ...person, ...person2, country: "USA", isAdmin: true }; //  Adding last entry [key : Value]
// console.log(emp);

// // creating obj with spread prop using arr
// const myNums = { ...[1, 2, 3, 4] };
//         // {   "0": 1,
//         //     "1": 2,   // Did you notice keys are idex of arr
//         //     "2": 3,
//         //     "3": 4
//         // };
// console.log(myNums);

// // 3. Rest

// function printWinner(
//   gold: string,
//   silver: string,
//   ...everyoneElse: string[]
// ): void {
//   console.log("Gold is ", gold);
//   console.log("Silver is ", silver);
//   console.log("Thanks to ", everyoneElse);
// }

// // Gold is  Ram
// // Silver is  Syam
// // Thanks to  [ 'Tina', 'Phat', 'Hue' ]
// printWinner("Ram", "Syam", "Tina", "Phat", "Hue");

// const nums = [1, 2, 3, 4];

// function sum(...nums: number[]): number {
//   return nums.reduce((total, num) => total + num);
// }

// console.log("Total sum is ", sum(...nums));

// // 4. Destructuring Array
// const students = ["Ram", "Syam", "Tina", "Phat", "Hue"];
// const [first, sec, third, ...rest] = students;       //  ...rest here is rest

// //  Ram
// // Syam
// // Tina
// // [ 'Phat', 'Hue' ]
// console.log(first);
// console.log(sec);
// console.log(third);
// console.log(rest);

// //  // 5. Destructuring Object
// const student = {
//   name: "Suresh",
//   lname: "Bamma",
//   id: 1233,
//   gpa: 3.98,
//   dob: 1995,
// };

// const { name, gpa: score } = student;
// console.log(name);
// console.log("Score: ", score);

// type Student = {
//   name: string;
//   lname: string;
//   id: number;
//   gpa: number;
//   dob: number;
// };
// function fullInfo({ name: fName, lname, id: stdID }: Student): string {
//   return `"${fName} ${lname}" and student id: "${stdID}"`;
// }

// console.log(fullInfo(student));

// Day 4 Closures
//  #########################################################################################################
//  #########################################################################################################

// function bookingFlight(): () => void {
//   let passengerCount = 0;

//   return function (): number {
//     passengerCount++;
//     console.log("Passing Counting :- ", passengerCount);
//     return passengerCount;
//   };
// }

// const process = bookingFlight();
// console.log("Processing ", process());
// console.log("Processing ", process());

// console.dir(process); //

// Generic Function ; I am implementing diffrenet approahes
// let f: () => void = () => {};

// // function f 1st birthplace
// const g = function (): void {
//   const a = 23; //  closure variable connected to f
//   f = function (): void {
//     console.log(a * 2);
//   };
// };

// // function f 2nd birthplace
// const h = function (): void {
//   const a = 7;
//   f = (): void => {
//     console.log(a * 2);
//   };
// };

// g(); //
// console.log("Running f");
// f(); //  46
// console.log(g); // [Function: g]
// console.log(g()); //  undefined

// console.log("Running H");
// h();
// console.log("Redefining function f");
// f(); //  14

// // example 2
// const boardPassengers = function (
//   totalPassengers: number,
//   waitTime: number
// ): void {
//   const passengersGroup = totalPassengers / 3;
//   let group = 1;

//   // Clouser birth place
//   setTimeout(function (): void {
//     console.log(
//       `We are now boarding group ${group} all ${passengersGroup} passengers.`
//     );
//     group++;
//   }, waitTime * 1000);

//   console.log(`Inboarding Passangers in ${waitTime} secounds!!!`);
// };

// const passengersGroup = 1200; // will be ignored by clouser
// passengersGroup;
// boardPassengers(180, 3);

//  Section 10: A Closer look at Funcitons
//  #########################################################################################################
//  #########################################################################################################

// Default parameters
// const dataBase: FlightData[] = [];

// type FlightData = {
//   flightNumber: string;
//   numPassanger: number;
//   price: number;
// };

// const flightBooking = function (
//   flightNumber: string,
//   numPassanger: number = 1,
//   price: number = 99 * numPassanger
// ): FlightData[] {
//   const booking = {
//     flightNumber,
//     numPassanger,
//     price,
//   };

//   dataBase.push(booking);
//   return dataBase;
// };

// flightBooking("1H6B89", 8, 199);
// flightBooking("xxB891");
// flightBooking("2A6B80", 2, 99);

// console.log("Data Base of all flights:");
// console.log(dataBase);

//  Section 11: Working with array
//  #########################################################################################################
//  #########################################################################################################

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr;

// At Method

// // Old ways
// const last = arr.slice(-1)[0]; // 3 value extacted after array
// console.log(last);
// console.log(arr[arr.length - 1]); // 3

// // New way
// console.log(arr.at(-1)); // 3 -> value it self
// console.log("Java".at(0)); // "J"


// // Working with Map

// // Normal Map
// const mapped = arr.map(function(num, i, arr) {
//     console.log(` Current num: ${num}, index: ${i} in ${arr}`);
//     return num*2;
// })

// // Arrow
// const mapped = arr.map((num, i, arr) =>{
//     console.log(` Current num: ${num}, index: ${i} in ${arr}`);
//     return num*2;
// });

// //  One liner
// const mapped = arr.map((num, i) =>
//     (` Current num: ${num}, index: ${i}, ${num} is ${((num % 2) === 0) ? "Even": "Odd"}`)
// );
// console.log("Mapped array is ", mapped);


type Player = {
    name: string;
    jersey: number;
    stats: Stats[];
  };
  
  type Stats = {
    game: number;
    points: number;
  };
  
//   type JerseyPoints = {
//     jersey: number;
//     total: number;
//   };
  
  //The following objects record the season statistics for players on a basketball team.
  const player1: Player = {
    name: "Rojin Bijukchhe",
    jersey: 8,
    stats: [
      { game: 1, points: 6 },
      { game: 2, points: 7 },
    ],
  };
  const player2 = {
    name: "James Bond",
    jersey: 12,
    stats: [
      { game: 1, points: 16 },
      { game: 2, points: 14 },
    ],
  };
    const player3 = {
    name: "Steven Great Gerrard",
    jersey: 6,
    stats: [
      { game: 1, points: 10 },
      { game: 2, points: 6 },
    ],
  };
  const teamStats = [player1, player2, player3];
  teamStats;

  const userName = player3.name
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');

  console.log(userName);

  const createUName = (player: Player)=>{
    return player.name
        .toLowerCase()
        .split(" ")
        .map(word => word[0])
        .join('')
  }
  const userNames = (teamStats: Player[]): string[] => {
    let userNames: string[] = [];
    teamStats.forEach(player =>
            userNames.push(createUName(player))
        )
    return userNames;        
  }

  console.log(    userNames(teamStats));


  // Channing methords
let data1: number[] = [5,2,4,1,15,8,3];
let data2: number[] = [16,6,10,5,6,1,4];

function calculateAvg(data: number[]): number{
    return data
        .map(age => age <= 2 ? age * 2 : 16 + age * 4 )
        .filter(age => age >= 18)
        .reduce((acc, age, _, arr) => {
            return acc + age/ arr.length
        },0);
}

console.log(calculateAvg(data1));
console.log(calculateAvg(data2));