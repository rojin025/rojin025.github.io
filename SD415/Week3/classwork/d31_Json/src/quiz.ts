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

// write JSON a side this reference point
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

GPT;
// function getSumById(dataArray: OuterObject[], id: number): number {
//   const foundData = dataArray.find(({ id: dataId }) => id === dataId);
//   return foundData
//     ? foundData.data.map(({ value }) => value).reduce((total, value) => total + value, 0)
//     : 0;
// }


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

// //9
// function printMe(){console.log("Hello!");};
// () => console.log("Hello");
// const printMe2 = () => console.log("Hello");

// // 12.
// function executor(operator: (num1: number, num2: number)=>number, num1: number, num2: number): number{
//   return operator(num1, num2);
// }
// function sum(num1: number, num2: number):number{
//   return num1 + num2;
// }
// function mult(num1: number, num2: number):number{
//   return num1 * num2;
// }

// console.log(executor(sum,5,10));
// console.log(executor(mult,5,10));

// // 13
// let calculator = {
//   operand1: 0,
//   operand2: 0,
//   setValue:function(x: number, y: number): void {
//     this.operand1 = x;
//     this.operand2 = y;
//   },
//   sum: function ()  {return this.operand1 + this.operand2},
//   mul: function ()  {return this.operand1 * this.operand2},
// };

// calculator.setValue(2,3);
// console.log("Expeted 5",calculator.sum());
// console.log("Expeted 6",calculator.mul());

// let arr = [4,2,8,15];
// console.log(arr.sort());
// console.log(arr.sort((a,b) => a-b)); //asc
// console.log(arr.sort((a,b) => b-a)); //des

// let str = "I Love TypeScript And Java";
// let words = str.split(' ');
// console.log(words.sort().join(' '));  //And I Java Love TypeScript
// console.log(words.sort((a,b) => a.length - b.length).join(' '));  //I And Java Love TypeScript

// // 16

// let length = [ "Bilbo", "Gandalf", "Nazgul"];

// const indexLength = length.map((item, index) => (`${index}:${item.length}`));
// // const indexLength = length.map((item, index) => console.log(`${index}:${item.length}`));
// console.log( indexLength);

// Bank Code

//const bank = {
//   getBalance: function (id: number): number {
//     const customer = transDB.find(customer => customer.customerId === id);
//     if (!customer) return 0; // Return 0 if customer not found
//     return customer.customerTransactions.reduce((acc, trans) => acc + trans, 0);
// },

// bankBalance: function (): number {
//     return transDB.reduce((acc, customer) => acc + this.getBalance(customer.customerId), 0);
// }
// };

// return bank;

export function makeBank() {
  const transDB = [
      { customerId: 1, customerTransactions: [10, 50, -40] },
      { customerId: 2, customerTransactions: [10, 10, -10] },
      { customerId: 3, customerTransactions: [5, -5, 55] }
  ];

  const bank = {
    getBalance : function (id: number){
      const customer = transDB.find(cid => cid.customerId === id);
      if(!customer) return 0;
      return customer.customerTransactions.reduce( (total , trans) => total + trans, 0);
    },
    bankBalance: function (){
      return transDB.reduce((acc, customer) => acc + this.getBalance(customer.customerId), 0);
    }
  }
  
  return bank;
}

const myBank = makeBank();

// Example usage:
console.log("Customer 1 Balance:", myBank.getBalance(1));
console.log("Bank Balance:", myBank.bankBalance());

// interface Task {
//   taskId: number;
//   taskDescription: string;
//   priority: 'High' | 'Medium' | 'Low';
//   completed: boolean;
// }

// interface TaskManager {
//   tasks: Task[];
//   getIncompleteTasksCount(priority: 'High' | 'Medium' | 'Low'): number;
//   totalIncompleteTasks(): number;
// }

// const taskManager: TaskManager = {
//   tasks: [],
//   getIncompleteTasksCount(priority: 'High' | 'Medium' | 'Low'): number {
//     return this.tasks.reduce((count, task) => {
//       if (task.priority === priority && !task.completed) {
//         count++;
//       }
//       return count;
//     }, 0);
//   },
//   totalIncompleteTasks(): number {
//     return this.tasks.reduce((count, task) => {
//       if (!task.completed) {
//         count++;
//       }
//       return count;
//     }, 0);
//   },
// };

// // Sample data for tasks
// taskManager.tasks = [
//   { taskId: 1, taskDescription: 'Write a report', priority: 'High', completed: false },
//   { taskId: 2, taskDescription: 'Attend a meeting', priority: 'Medium', completed: true },
//   { taskId: 3, taskDescription: 'Code a new feature', priority: 'High', completed: false },
// ];

// // Example usage
// console.log(taskManager.getIncompleteTasksCount('High')); // Output: 2 (number of incomplete tasks with high priority)
// console.log(taskManager.totalIncompleteTasks()); // Output: 2 (total number of incomplete tasks)

// interface Task {
//   taskId: number;
//   taskDescription: string;
//   priority: 'High' | 'Medium' | 'Low';
//   completed: boolean;
// }

// interface TaskManager {
//   getIncompleteTasksCount(priority: 'High' | 'Medium' | 'Low'): number;
//   totalIncompleteTasks(): number;
// }

// function makeTask(id: number, description: string, priority: 'High' | 'Medium' | 'Low', completed: boolean): Task {
//   return {
//     taskId: id,
//     taskDescription: description,
//     priority: priority,
//     completed: completed,
//   };
// }

// function makeTaskManager() {
//   const tasks: Task[] = [];

//   const taskManager: TaskManager = {
//     getIncompleteTasksCount(priority: 'High' | 'Medium' | 'Low'): number {
//       return tasks.reduce((count, task) => {
//         if (task.priority === priority && !task.completed) {
//           count++;
//         }
//         return count;
//       }, 0);
//     },
//     totalIncompleteTasks(): number {
//       return tasks.reduce((count, task) => {
//         if (!task.completed) {
//           count++;
//         }
//         return count;
//       }, 0);
//     },
//   };

//   return {
//     taskManager,
//     makeTask,
//   };
// }

// // Example usage
// const { taskManager, makeTask } = makeTaskManager();

// const task1 = makeTask(1, 'Write a report', 'High', false);
// const task2 = makeTask(2, 'Attend a meeting', 'Medium', true);
// const task3 = makeTask(3, 'Code a new feature', 'High', false);

// taskManager.taskManager.tasks.push(task1, task2, task3);

// // Example usage
// console.log(taskManager.taskManager.getIncompleteTasksCount('High')); // Output: 2 (number of incomplete tasks with high priority)
// console.log(taskManager.taskManager.totalIncompleteTasks()); // Output: 2 (total number of incomplete tasks)

type Item = {
  item: string;
  price: number;
};

type Cart = {
  addItem: (item: string, price: number) => void;
  removeItem: (item: string) => void;
  getTotal: () => number;
};

function createShoppingCart(): Cart{
  //Clouser
  const items: Item[] = [];

  return {
    addItem: (item: string, price: number ): void => {
      items.push({item: item, price: price});
    },
    removeItem: (itemToRemove: string): void => {
      const index = items.findIndex((i) => i.item === itemToRemove);
      if (index >= 0 )   items.splice(index,1);
    },
    getTotal: () => {
      return items.reduce((total, item) => total + item.price, 0);
    },
  }
}

const myCart = createShoppingCart();
myCart.addItem('Shirt', 20);
myCart.addItem('Jeans', 50);
console.log(myCart.getTotal());
myCart.removeItem('Shirt');
myCart.removeItem('Shoes');
console.log(myCart.getTotal());
