// // class Player {
// //     readonly firstName: string;
// //     readonly lastName: string;
// //     private score = 0;
// //     constructor(firstName: string, lastName: string){
// //         this.firstName = firstName;
// //         this.lastName = lastName;
// //     }

// import { error } from "console";
// import { get } from "http";

// //     private secretMethod(): void {
// //         console.log("The Secret!");
// //     }
// // }

// // Short Cut

// interface Paycheck {
//     salary: number;
// }

// interface CheckPlayer {
//     check(): void;
// }

// class Player {
//     protected _score = 0;
//     private _life = 10;
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ) {}

//     get fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     get score(){
//         return this._score;
//     }

//     set score(newScore: number){
//         if(newScore<0) throw new Error ("Score cannot be negative!") ;
//         this._score = newScore;
//     }

//     private secretMethod(): void {
//         console.log("The Secret!");
//     }
// }

// class Admin extends Player implements Paycheck, CheckPlayer {
//     constructor(public firstName: string , public lastName: string, public salary: number){
//         super(firstName,lastName);
//     }
//     maxScore(score: number){
//         this._score = score;
//     }
//     check(){
//         console.log("Checking Players!");
//     }
// }

// const player1 = new Player("Player", "One");
// console.log("Player Full Name: ", player1.fullName);
// console.log("Player Score: ", player1.score);
// // player1.secretMethod();  Can not access

// player1.score = 10;
// console.log("Updated Score: ", player1.score);

// const myAdmin = new Admin("Super", "Man", 10000);
// myAdmin.maxScore(90);
// console.log(myAdmin);
// myAdmin.check();

// // console.log(" ####################################################################");
// // Abstract Class
// abstract class Employee {
//     constructor(public first: string, public last: string){}
//     abstract getPay(salary: number): number;
//     sayHi(){
//         console.log("Hello World!");
//     }
// }

// class FullTimeEmp extends Employee {
//     constructor(
//         first: string,
//         last: string,
//         private yearlySalary: number
//         ){
//         super(first, last);
//     }
//     getPay(): number {
//         return this.yearlySalary;
//     }
//     multi(x: number, y: number): number{
//         return x * y;
//     }
// }

// class PartTimeEmp extends Employee{
//     constructor(
//         first: string,
//         last: string,
//         public hrRate: number,
//         public workingHour: number
//     ){
//         super(first, last);
//     }
//     getPay(): number {
//         return this.hrRate * this.workingHour;
//     }
//     pay = () => {this.hrRate * this.workingHour };
// }

// const ram = new FullTimeEmp("Ram", "Baral", 135000);
// // console.log(ram);
// // console.log("Pay Ram: ",ram.getPay());

// const shyam = new PartTimeEmp("Shyam" , "Grung", 30, 2000);
// // console.log("Shyam: " , shyam);
// // console.log("Pay Shyam ", shyam.getPay());

// console.log(" ####################################################################");
// // // Bind
// //     //  The bind method will clone the function and permanently replace this
// //     //  inside the function with the provided parameter.
// //     //  will permanently attach this to var myGetPay
// // const myGetPay = shyam.getPay.bind(shyam);
// // console.log("Bind Method : Shyam Salary ", myGetPay());
// // console.log("------ Function Currying ------");
// // const mutiplie2 = ram.multi.bind(null, 2); // here x will be cloned to be 3;
// // const square3 = ram.multi.bind({},3,3);   // we are multiplying 3 with 3

// // console.log("Muliple of 2 is ", mutiplie2(2));
// // console.log("Square of 3 is ", square3());

// console.log("------ Call and Apply ------");
// // Call and Apply
//     // Does not clone the original function
//     // it is only used to invoke the funtion with (Parameter)
//     // a for array

// // console.log("Call() ");
// // console.log(ram.getPay());

// const person = { name: "Asaad",
// printNow() { console.log(`Hi ${this.name}!`); } };
// // person.printNow(); // Hi Asaad!
// // person.printNow.apply(person); // Hi Asaad!

// // Function borrowing
// const ramu ={ name: "Ramu"};
// person.printNow.apply(ramu);    // Hi Ramu! // From person

// // const myPay = shyam.pay.call(shyam);
// // console.log("Arrow: ", myPay);    // still undefined
// // console.log("End!!");

// // Arrow function
//     // "this" is evaluated to its surrounding scope of the arrow
//     // Does not care how it is invoked or from where?

// 2nd Phase
console.log(
  " ####################################################################"
);
// Fetch and promises
// const getData = function () {
//   fetch("https://api.kanye.rest/")
//     .then(function (response) {
//       // respose obj has json
//       // json returns new promise
//       return response.json(); // data - new promise
//     })
//     .then((data) => console.log(data));
// };

const getData = function () {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Something went wrong!", error.message));
};

// getData();

// /*
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */

// console.log("Self test");

// function whereAmI(lat: number, lng: number) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((respose) => {
//       // if (!respose.ok) throw new Error("Error", respose.status);
//       return respose.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .catch((e) => console.log(e));
// }

// // whereAmI(52.508, 13.381);

/** Promisification */

// const lotteryPromise = new Promise((resolve, reject) => {
//   if (Math.random() >= 0.7) resolve("Congratulations!!!!! You Win!");
//   reject(new Error("You lose!"));
// });

// // Promisifation
// lotteryPromise
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message))
//   .finally(() => console.log("Stay Blessed!"));

//Assignment
import fetch, { Response } from "cross-fetch";
import prompts from "prompts";

export interface Data {
  name: string;
  email: string;
  phone: string;
}

async function application() {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const userResponse = await prompts({
    type: "number",
    name: "id",
    message: "Enter User ID(1-10):?",
    validate: (value: number) =>
      value >= 1 && value <= 10 ? true : "ID between 1 - 10 ",
  });

  const rawResponse = await fetch(url + userResponse["id"]);
  const { name, email, phone } = await rawResponse.json();

  const data: Data = {
    name: name,
    email: email,
    phone: phone,
  };
  console.log("User: ", data);
  application();
}

// application();
console.log("Running side");
