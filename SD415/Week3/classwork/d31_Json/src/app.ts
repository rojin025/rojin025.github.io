let GPT = "";
let Question = "";
let CW = "";
const DAY = "";
Question;

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
// Day 4 Callbacks setTimeOut

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

// setTimeout

// function sayHi(phrase: string, name: string): void {
//   console.log(phrase + " " + name);
// }

// setTimeout(sayHi, 1000, "Hello", "World!!!");
// let timeId = setInterval(sayHi, 1000, "Hello", "World!!!");

// setTimeout(() => {
//   console.log("Killing Loop");
//   clearInterval(timeId);
// }, 5000);

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

//  ##################################################################################################################
//  ##################################################################################################################

DAY;

//  Day 5   Recursion

// function factorial(num: number): number {
//   if (num < 0) return -1;
//   else if (num === 0) return 1;
//   else {
//     return num * factorial(num - 1);
//   }
// }
// console.log("Factorial for 3 is 6 -> ", factorial(3));
// console.log("Factorial for 5 is 120 -> ", factorial(5));
// console.log("Factorial for 0 is 1 -> ", factorial(0));
// console.log("Factorial for -4 is -1 -> ", factorial(-4));

// //  | (num:number,power:number) => number
// // function pow(num: number, power: number): number {}

GPT;
// function fact(num: number): number | undefined {
//   if (num < 0) {
//     return undefined;
//   } else if (num === 0) {
//     return 1;
//   } else {
//     const result = factorial(num - 1);
//     return result !== undefined ? num * result : undefined;
//   }
// }

// console.log("Factorial for 5 is 120 -> ", fact(5));
// console.log("Factorial for 0 is 1 -> ", fact(0));
// console.log("Factorial for -4 is undefined -> ", fact(-4));

CW;
// function findLength(str: string): number {
//   if (str === "") return 0;
//   else return 1 + findLength(str.slice(1));
// }

// console.log("Length :", findLength("Hello"));

// function myInstances(str: string , target):

CW;
// // Find length of a String recursively, without using length property
// function countInstances(str: string, letter: string): number {}
// if (str ==="")
// return 0;
// else if (str[0]
// === 1Btter） ｛
// //add 1 if letter equals str[0]
// return 1 + countInstances(str.substr(1), letter);
// else {
// return
// countInstances (str.substr(1), letter);
// }

GPT;
// function countInstances(str: string, letter: string, index: number = 0, count: number = 0): number {
//     // Base case: end of the string
//     if (index === str.length) {
//       return count;

//     // Check if the current character is the specified letter
//     if (str[index] === letter) {
//       count++;
//     }

//     // Move to the next character in the string
//     return countInstances(str, letter, index + 1, count);
//   }

//   // Example usage:
//   const myString: string = "banana";
//   const myLetter: string = "a";
//   const instances: number = countInstances(myString, myLetter);

//   console.log(`The letter '${myLetter}' appears ${instances} times in '${myString}'.`);

DAY;

// //  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so
// function fibonacci(n: number): number {
//   if (n < 0) {
//     return 0;
//   }
//   if (n <= 1) {
//     console.log(n);
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log("-10 =>", fibonacci(-10));
// console.log("0 =>", fibonacci(0));
// console.log("1 =>", fibonacci(1));
// console.log("3 =>", fibonacci(3));

CW;

// modify the sum salaries example to
// ➢ log the names to the console
// ➢ pretty straightforward

type Person = { name: string; salary: number };
//index signature since do not know names of properties ahead of time
//Department is an object with an unknwon number and name of properties that are strings and values
//that are Person[] or Department objects

type Department = { [deptName: string]: Person[] | Department };
const company: Department = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

const nameList: Person[] = [];

function printName(department: Department) {
  if (Array.isArray(department)) {
    // case (1)
    department.forEach((person) => {
      console.log(person.name);
      nameList.push(person.name);
    });
    return;
  } else {
    // case (2)
    for (const subDepartment of Object.values(department)) {
      printName(subDepartment as Department);
    }
  }
}
printName(company);
console.log("Person List = ", nameList);

// function sumSalaries(department: Department) {
//   if (Array.isArray(department)) {
//     // case (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//   } else {
//     // case (2)
//     let sum = 0;
//     for (const subdep of Object.values(department)) {
//       const subDepartment = subdep as Department;
//       sum += sumSalaries(subDepartment); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company)); // 6700
