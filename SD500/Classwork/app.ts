// // Promise
// console.log("I am runnning");

// // function orderPizza() {
// //   const cheese = 100;
// //   //
// //   return new Promise<string>((reslove, reject) => {
// //     //
// //     // return "reslove, reject" statement
// //     if (cheese >= 50) reslove("Hawain Pizza."); // return this in true case
// //     else reject("No cheese!"); // return this in false case
// //   });
// // }

// // // we can do then chainnning

// // // orderPizza()
// // //   .then((pizza) => console.log(`eating ${pizza}`))
// // //   .catch((error) => console.log(`eating ${error}`))
// // //   .finally(() => console.log(`goodnight `));

// // orderPizza()
// //   .then((pizza) => {
// //     console.log(`Yess`);
// //     return pizza;
// //   }) //   we can run multiple then channing
// //   .then((pizza) => console.log(`eating ${pizza}`))
// //   .catch((error) => console.log(`eating ${error}`)) // only one catch works
// //   .finally(() => console.log(`goodnight `));

// // Promise is Fuction Constructor new object -> new Promise
// // async function
// // doesnot sit in macroQuee

// // // ################################################################################################
// // function orderPizza() {
// //   console.log("Orderd received "); //  Syncronous
// //   const cheese = 40;
// //   //
// //   return new Promise<{ [Key: string]: string }>((reslove, reject) => {
// //     //
// //     // return "reslove, reject" statement
// //     if (cheese >= 50) {
// //       console.log("Preparing"); //  Syncronous
// //       reslove({
// //         // Async
// //         pizzaType: "Hawain Pizza.",
// //       });
// //       console.log("Order Finish..."); //  Syncronous
// //       // return this in true case
// //     } else
// //       reject(
// //         // Async
// //         { error: "No cheese!" }
// //       ); // return this in false case
// //   });
// // }

// // orderPizza()
// //   .then((pizza) => {
// //     // Async
// //     console.log(`Yess`);
// //     return pizza;
// //   }) //   we can run multiple then channing
// //   .then(({ pizzaType }) => console.log(`eating ${pizzaType}`))
// //   .catch(({ error }) => console.log(`Error: ${error}`)) // only one catch works
// //   .finally(() => console.log(`goodnight `));

// //   console.log("starting in");

// // // // ################################################################################################
// // const promise = new Promise((resolve, reject) => {
// //   console.log("Hello Promise"); // S

// //   setTimeout(() => {
// //     resolve("Promise results"); // A
// //   }, 1000); // resolve after 1 second console.log('goodbye promise');
// //   console.log("Promise Set"); // S
// // });

// // console.log("Code starts"); // S
// // promise.then((result) => {
// //   console.log(result);  // S
// // });
// // console.log("I love asynchronous programming"); // S

// // // ################################################################################################
// const promise = new Promise((resolve, reject) => {
//   console.log("Hello Promise"); // S

//   setTimeout(() => {
//     resolve("Promise results"); // A
//   }, 1001); // resolve after 1 second console.log('goodbye promise');
//   setTimeout(() => {
//     console.log("Timeout results"); // A
//   }, 1000); // resolve after 1 second console.log('goodbye promise');
//   console.log("Promise Set"); // S
// });

// console.log("Code starts"); // S
// promise.then((result) => {
//   console.log(result); // S
// });
// console.log("I love asynchronous programming"); // S

// // // ################################################################################################
// const p = new Promise((resolve, reject) => {
//   console.log("Hello Promise"); // S
//   reject("d");
// });

// p.then(console.log);
// p.then(console.log);
// p.catch(console.log);
// p.finally(console.log);

// // Async
// // - compiler treat - we should return asyncronously

// // Dont do it like this
// async function foo() {
//   console.log("foo"); // S
//   return "this is asyn"; // Promis .reslove(this)  // async
// }

// console.log("start");
// foo().then(console.log);
// console.log("End");

// Await
console.log("start");
function foo2() {
  return new Promise((resolve) => resolve(`foo2`));
}
async function bar() {
  console.log("bar-start");
  // foo2 and foo is same but different approach
  //foo().then(result => { console.log(result); console.log('bar-end'); })
  let result = await foo2();
  console.log(result);
  console.log("bar-end");
}
bar();
console.log("end");
