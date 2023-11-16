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

function bookingFlight(): () => void {
  let passengerCount = 0;

  return function (): number {
    passengerCount++;
    console.log("Passing Counting :- ", passengerCount);
    return passengerCount;
  };
}

const process = bookingFlight();
console.log("Processing ", process());
console.log("Processing ", process());
