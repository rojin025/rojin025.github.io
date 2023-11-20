console.log("Quiz Connected!");
let QUIZ = "";


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
