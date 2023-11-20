// console.log("Quiz Connected!");
let QUIZ = "";
const EXAM ="";
const GPT ="";

QUIZ
// Final Quiz
//1. write a function, averagePoints, to get an array containing
// the average points across for each player .

// Try with a regular for..of loop and then using map.
type Player = {
  name: string;
  points: number[];
};
// type MyData ={ 
//   [key: string]: number;
// };
const player1: Player = {name: "Bob", points: [1, 2, 1]};
const player2: Player  = {name: "Andre", points: [2, 0, 1]};
const player3: Player  = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];players;

function averagePoints(players: Player[]): number[]{
  return players.map(({points}) => {
    return points.reduce((total, point) => total + point/points.length, 0);
  });
}
// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
averagePoints;


//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players));

// // 2. 
// use map and an arrow function to get a new array with the squares of each element -- i.e., [1, 4, 9]

// const array123 = [1, 2, 3];
// console.log("Square : ",array123.map( (num) => num * num));

// 3. Implement the ask function, which should callback the yes function if the user answers yes to the question, else

// calls back the no function.
// const prompt = require("prompt-sync")();
// function ask(question, yes, no) {
// }
// function showOk() {
// console.log ( "You agreed." );
// }
// function showCancel() {
// console.log ( "You canceled the execution." );
// }
// ask("Do you agree?", showOk, showCancel);

function ask(question: string, yes: ()=> void, no: () => void): void{
  // question = "yes";
  if(question === "yes") yes();
  else no();
}
 
function yes(): void{
  console.log("You Agree!");
}

function no(): void{
  console.log("No You dont agree!");
}

ask("Do you agree?", yes, no);

// 4. replace the showCancel and showOk function declaration with arrow functions in the ask call
ask("Do you agree?", 
  function ():void{console.log("Agree");},
  function ():void{console.log("Disagree");})

EXAM;

// 3
type MASH = {
  a: number;
  b: number;
  c: number;
}
const abcs = [{a:1, b:2, c:3}, {a:2, b:2, c:2}, {a:5, b:2, c:3}];
function mash(mashArr: MASH[]): number[]{
  return mashArr.map(({a,b,c}) => a*b*c);
}
abcs;mash;
// console.log("Expected [6,8,30]", mash(abcs));

// 4.
type InnerObject = {
  name: string;
  value: number;
};

type OuterObject= {
  id: number;
  data: InnerObject[];
}

const dataArray : OuterObject[] = [
  {
    id: 1,
    data: [
      {name: "A", value: 10},
      {name: "B", value: 20}
    ]
  },
  {
    id: 2,
    data: [
      {name: "C", value: 30},
      {name: "D", value: 40}
    ]
  }
]

function getTotalSum(dataArray: OuterObject[]): number{
  let valueArr:number[] = [];
  dataArray.forEach(({data}) => {
    ( data.map(({value}) => valueArr.push(value)));
  });
  return valueArr.reduce((total, value) => total + value,0);
}
getTotalSum;
// console.log("Expectiong : 100 ",  getTotalSum(dataArray));

GPT;
// function getTotalSum(dataArray: OuterObject[]): number {
//   return dataArray
//     .map(({ data }) => data.map(({ value }) => value))
//     .flat()
//     .reduce((total, value) => total + value, 0);
// }
// console.log("Expecting: 100", getTotalSum(dataArray));

function getAllName(dataArray: OuterObject[]): string[]{
  return dataArray
    .map(({data}) => data
    .map(({name}) => name))
    .flat();
}
getAllName;
// console.log("Names are ",getAllName(dataArray));

function getSumById(dataArray: OuterObject[], id: number): number{
  for(const {id: dataId, data} of dataArray ){
    if (id === dataId ) {
      return data.map(({value}) => value).reduce((total, value) => total + value, 0);
   }
  }
  return 0;
}
getSumById;dataArray;

// console.log("id 2 is 70: ", getSumById(dataArray, 2));
// console.log("id 1 is 30: ", getSumById(dataArray, 1));
// console.log("id 10 is 0: ", getSumById(dataArray, 10));

//5
let timerId: NodeJS.Timeout;
function timer415(time: number){
  timerId = setInterval(timer,1000,time);
}
// CallBack
function timer(time: number): void{
  if (time >= 0) {
    console.log(time);
    timer(--time);
  } else {
    clearInterval(timerId);
  } 
}

timer415;
// timer415(10);

function timer41(time: number): void {
  let timerId: NodeJS.Timeout;

  function tick(): void {
    if (time >= 0) {
      console.log(time);
      time--;
    } else {
      clearInterval(timerId);
    }
  }

  timerId = setInterval(tick, 1000);
}

// timer41(10);
timer41;

// function myTimer(time: number): void{
//   let timerId: NodeJS.Timeout;
//   function tick(): void {
//     if(time>= 0){
//       console.log(time);
//       time--;
//     } else {
//       clearInterval(timerId);
//     }
//   }
//   timerId = setInterval(tick, 1000);
// }
// myTimer(10);

// 6 Is prime

function recursivePrime(num: number){
  if (num < 1) return;
  else{
    ifPrimePrint(num);
    recursivePrime(num - 1);
  }

}

// Check and print
function ifPrimePrint(num: number){
  for(let i = num -1 ; i > 1; i--){
    if(num % i === 0){
      return
    }
  }
  console.log(num);
}

// recursivePrime(20);
recursivePrime;

// 7 

type TreeNode = {
  name: string;
  value: string | null;
  children: TreeNode[] | null;
};

const node4 = { name:"label", value: "Name", children: null };
const node5 = { name:"input", value: "this was typed by user", children: null };
const node3 = { name:"p", value: "this is text in the paragarph", children: null };
const node2 = { name:"div", value: null, children: [node4, node5] };
const node1 = { name:"body", value: null, children: [node2, node3] };
node1;
  
function nodeWalker(node: TreeNode | null) {
  if (!node) return;
  console.log(node.name);
  if (node.children && node.children.length > 0) {
    node.children.forEach((child) => {
      nodeWalker(child);
    });
  }
}
// nodeWalker(node1);
nodeWalker;

type Person = {
  name: string;
  age: number;
}

const array: Person[] = [
  {name: "ram", age:29},
  {name: "shyam", age:40},
  {name: "ram", age:19},
]

function getAverageAge( arr: Person[]): number{
   return Number(
    (arr.map(({age}) => age)
    .reduce((total, age) => 
    total + age, 0)/ arr.length).toFixed(2));
}
getAverageAge;
// console.log("Avg: ", getAverageAge(array));

// function findOldestMan(arr: Person[]): Person{
//   let oldPerson = arr[0];
//   for(const person of arr){
//     if(person.age > oldPerson.age)
//       oldPerson = person;
//   }
//   console.log(oldPerson);
//   return oldPerson;
// }

// findOldestMan(array);

GPT;
function findOldestMan(persons: Person[]): Person |  null{
  if (!persons || persons.length === 0){
    console.log("Empty");
    return null;
  }
  return persons.reduce((oldest, current) => current.age > oldest.age? current: oldest);
}
console.log("Oldest person is ",findOldestMan(array));

