console.log("Quiz Connected!");
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

