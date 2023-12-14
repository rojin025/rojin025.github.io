// console.log("Exam Prep");

// // Not all callbacks are Async
// console.log("Start");
// [1, 2, 3].forEach((num) => console.log(num));
// console.log("end");

// // //Start
// // // 1
// // // 2
// // // 3
// // // end

// // Not all callbacks are Async
// console.log("Start");
// [1, 2, 3].forEach((num) => setTimeout((_) => console.log(num), 0));
// console.log("end");
// // // Start
// // // end
// // // 1
// // // 2
// // // 3

// console.log("start");
// function foo() {
//   return new Promise((resolve) => resolve(`foo`));
// }
// async function bar() {
//   console.log("bar-start");

//   let result = await foo();
//   console.log(result);
//   console.log("bar-end");
// }
// bar();
// console.log("end");

// Promise

const promiseInstance = new Promise(function (resolve, reject) {
  resolve("x");
  reject("y");
});

// promiseInstance
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("see YOu Soon"));

// Async and await , fetch
function getData() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// console.log(getData());

// // Find output
// const promise = new Promise((resolve, reject) => {
//   console.log(`Promise starts`);
//   resolve(`Promise result`);
//   console.log(`Promise ends`);
// });
// console.log(`Code starts`);
// promise.then(console.log);
// console.log(`Code ends`);

// // // Find output 2
// const promise = new Promise((resolve, reject) => {
//   console.log("hello promise");
//   setTimeout(() => {
//     resolve("Promise results");
//     console.log("Timeout");
//   }, 1000); // resolve after 1 second
//   console.log("goodbye promise");
// });
// console.log("Code starts");
// promise.then((result) => {
//   console.log(result);
// });
// console.log("I love asynchronous programming");

// // Find output 3
// setTimeout(() => console.log("setTimeout results"), 0);
// const promise = new Promise((resolve) => resolve(`Promise results`));
// promise.then(console.log);
// console.log("I love asynchronous programming");

// // // Find output 3
// console.log("start");
// const foo = async () => {
//   console.log("Hello");
//   return "Foo Here";
// };

// foo().then(console.log);
// console.log("end");

// // Await Example

console.log("Start");
function foo() {
  console.log("Foo-start");
  return new Promise((resolve, reject) => reject("FOo"));
}
async function bar() {
  console.log("Bar- Start");
  try {
    const result = await foo();
    console.log(result);
  } catch (e) {
    console.error("error: ", e);
  }
  console.log("bar-end");
}
bar();
console.log("end");
