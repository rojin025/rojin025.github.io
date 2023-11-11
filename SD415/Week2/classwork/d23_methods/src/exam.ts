// console.log("I am running exam.ts");

// //1
// function showMessage(from: string, text: string): void {
//   from = "*" + from + "*"; // make "from" look nicer
//   console.log(from + ": " + text);
// }
// let from = "Ann";
// showMessage(from, "Hello"); // *Ann*: Hello

//2
// function sayHi(): void {
//   console.log("Hello");
// }
// const myHi = sayHi();
// myHi;
// console.log("1", sayHi());
// function higherOrder(): () => void {
//   return sayHi;
// }
// higherOrder()();

// //3
// function sayHi(): void {
//   console.log("Hello");
// }

// const myHi = sayHi();
// console.log(myHi);

// console.log(sayHi());

// function higherOrder(): () => void {
//   return sayHi;
// }

// higherOrder()();

// function ask(question: string, yes: () => void, no: () => void): void {
//   if (ans === "yes") yes();
//   else no();
// }

// let ans = "no";
// ask;

// ask(
//   "Do you agree",
//   function (): void {
//     console.log("Yes, I do Agree!");
//   },
//   function (): void {
//     console.log("NO!!!!!");
//   }
// );

// type NumCallBack = (num: number) => number;

// function myCallBack(fun: NumCallBack, arg: number): void {
//   console.log(fun(arg));
// }

// function cube(num: number): number {
//   return num ** 3;
// }

// function cubeSquare(num: number): number {
//   return num % 2 === 0 ? num ** 3 : num ** 2;
// }

// // Test with cube function
// myCallBack(cube, 10); // Output: 100

// // Test with cubeSquare function
// myCallBack(cubeSquare, 10); // Output: 100
// myCallBack(cubeSquare, 9); // Output: 81

// //10
// function executor(func: string, num1: number, num2: number): number {
//   if (func === "add") return num1 + num2;
//   else return num1 * num2;
// }

// console.log(executor("add", 5, 10));
// console.log(executor("mult", 5, 10));

// // Sum
// const sum = (num1: number, num2: number): number => num1 + num2;
// console.log(sum(1, 2));

// // Say Hi
// const sayHi = (name: string): void => console.log("Hello ", name);
// sayHi("rojin");

// // Brackets
// const diff = (n1: number, n2: number): number => {
//   return n1 - n2;
// };
// console.log(diff(3, 1));
// console.log(diff(3, 3));

// type Person = {
//   name: string;
//   age: number;
// };

// function personInfo(person: Person): void {
//   console.log(person.name + " " + person.age);
// }

// const ram = {
//   name: "Ram Baral",
//   age: 33,
// };

// personInfo(ram);

// type Student = {
//   studentId: number;
//   quizAnswers: number[];
// };
// // Student;

// const student1: Student = {
//   studentId: 101,
//   quizAnswers: [1, 1, 2, 4],
// };

// const student2: Student = {
//   studentId: 102,
//   quizAnswers: [2, 1, 2, 2],
// };

// const student3: Student = {
//   studentId: 103,
//   quizAnswers: [3, 1, 2, 4],
// };

// const answers = [3, 1, 2, 4];

// function computeScore(student: Student, answers: number[]): number {
//   const score = student.quizAnswers;
//   let result = 0;
//   for (let i = 0; i < answers.length; i++) {
//     if (score[i] === answers[i]) result++;
//   }
//   return result;
// }

// console.log(computeScore(student1, answers));
// console.log(computeScore(student2, answers));
// console.log(computeScore(student3, answers));

// const students = [student1, student2, student3];

// function gradeQuiz(students: Student[], answers: number[]): number[] {
//   let results = [];
//   for (const student of students) {
//     results.push(computeScore(student, answers));
//   }
//   return results;
// }

// console.log(gradeQuiz(students, answers));

// let myObj = {
//   name: "John Chena",
//   sayHi: function (): void {
//     console.log(this.name, " says : 'You cant see me!!!!'");
//   },
// };

// console.log(myObj.sayHi());

// // Awesome

// let calculator = {
//   operand1: 0,
//   operand2: 0,
//   getValues: function (x: number, y: number): void {
//     this.operand1 = x;
//     this.operand2 = y;
//   },
//   sum: function () {
//     return this.operand1 + this.operand2;
//   },
//   mul: function () {
//     return this.operand1 * this.operand2;
//   },
// };

// calculator.getValues(5, 10);
// console.log("sum -> ", calculator.sum());
// // console.log("mul -> ", calculator.mul());

// const loggedInUsername = "Sam";
// const users = [
//   { name: "Oby", age: 12 },
//   { name: "Heera", age: 32 },
// ];
// const loggedInUser = users.find((u) => u.name === loggedInUsername);
// console.log(loggedInUser);
// //'loggedInUser' is possibly 'undefined'.
// // console.log(loggedInUser.age);   // compile error

// const java = "I love Java!!";
// let str: string;

// for (let i = 0; i < java.length; i++) {
//   str = java.slice(i);
//   console.log(str);
// }

// console.log(java.repeat(2));

// const answers = [3, 1, 2, 4];
// let result = [1];

// answers.forEach((num) => result.push(num + num));
// console.log(result);

// [1, 5, 16, 3, 108].forEach(function (num) {
//   if (num % 2 === 0) console.log(num);
// });

// IndexOf
// const java = "I love Java!!";

// console.log(java.indexOf("as"));

// filter Method
// return all that meets conditions

// const answers = [3, 1, 2, 4];

// let result = answers.filter((num) => num % 2 === 0);
// console.log(result);

// let users = [
//   { id: 81, name: "John" },
//   { id: 52, name: "Pete" },
//   { id: 93, name: "Mary" },
//   { id: 63, name: "Mary" },
// ];

// let goodUser = users.filter((user) => user.id > 80);
// console.log(goodUser);

// let john = users.findIndex((user) => user.name === "John");
// console.log(john);

// const numbers = [1, 5, 18, 2, 77, 108];
// ➢ use filter, find, and findIndex to find
// ➢ all the even numbers
// ➢ the first even number
// ➢ the index of the first even number

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log("even", evenNumbers);
// console.log(
//   "1st even",
//   numbers.find((num) => num % 2 === 0)
// );
// console.log(
//   "index even",
//   numbers.findIndex((num) => num % 2 === 0)
// );

// // Split and Join
// const java = "I love Java!!";

// let words = java.split(" ");
// console.log(words);

// let joins = words.join(" ");
// console.log(joins);

// Map

// const numbers = [1, 5, 18, 2, 77, 108];

// console.log(numbers.map((num, index) => index + " : " + num));

// const arr = ["I", "love", "Java!!"];
// console.log(arr.map((str, index) => index + " : " + str.length));

// sort
const numbers = [1, 5, 18, 2, 77, 108];
const words = ["x", "a", "c", "b"];
// function des(a: number, b: number): number {
//   if (a < b) return 1;
//   if (a > b) return -1;
//   return 0;
// }
function ass(a: number, b: number): number {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
console.log(numbers.sort(ass));
console.log(words.sort());
