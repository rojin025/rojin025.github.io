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

// const promiseInstance = new Promise(function (resolve, reject) {
//   resolve("x");
//   reject("y");
// });

// promiseInstance
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("see YOu Soon"));

// // Async and await , fetch
// function getData() {
//   fetch("https://api.kanye.rest")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }

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

// console.log("Start");
// function foo() {
//   console.log("Foo-start");
//   return new Promise((resolve, reject) => reject("FOo"));
// }
// async function bar() {
//   console.log("Bar- Start");
//   try {
//     const result = await foo();
//     console.log(result);
//   } catch (e) {
//     console.error("error: ", e);
//   }
//   console.log("bar-end");
// }
// bar();
// console.log("end");

// // // Await Example 2
// console.log(`Start`);
// async function myFunction() {
//   console.log(`A`);
//   const result = await myPromiseTask();
//   console.log(result);
// }
// myFunction();
// console.log(`End`);
// function myPromiseTask() {
//   return new Promise((resolve) => {
//     console.log(`C`);
//     resolve(`Task Results`);
//     console.log(`D`);
//   });
// }

// // Fetch
async function getQuote() {
  const response = await fetch("https://api.kanye.rest/");
  const data = await response.json();
  console.log(data);
}

// getQuote();

// Singleton Pattern

class Singletion {
  static #instance: any;

  static getInstance() {
    if (!this.#instance) this.#instance = new Object("I am an Instance");
    return this.#instance;
  }
}

const instance1 = Singletion.getInstance();
const instance2 = Singletion.getInstance();

// console.log(instance1);
// console.log(instance2);

// more Singleton Practise
class Singletion2 {
  static #instance: any;

  static getInstance() {
    if (!this.#instance) this.#instance = new Object("I am an instance");

    return this.#instance;
  }

  static resetInstance() {
    this.#instance = null;
  }
}

// const instance21 = Singletion2.getInstance();
// console.log("Instance21 is ", instance21);

// // Singletion2.resetInstance();

// const instance22 = Singletion2.getInstance();
// console.log("Instance22 is ", instance22 === instance21);

class Singleton3 {
  static #instance: any;
  static sKey = "myKey";

  static getInstance(key: string) {
    if (key === this.sKey && !this.#instance)
      this.#instance = new Object("I am an Singleton Instance");
    return this.#instance;
  }
}

// const instance31 = Singleton3.getInstance("wp");
// console.log(instance31);
// const instance32 = Singleton3.getInstance("myKey");
// const instance33 = Singleton3.getInstance("myKey");
// console.log(instance32);
// console.log("Same INstance ?", instance31 === instance32);
// console.log("Same INstance ?", instance33 === instance32);

// // Observer Patter
class Subject<T> {
  #observers: Function[] = [];
  subscribe(callback: Function) {
    this.#observers.push(callback);
  }

  emit(msg: T) {
    this.#observers.forEach((callback) => callback(msg));
  }
}

// const subject = new Subject<string>();
// subject.subscribe((msg: string) => console.log("Hello ", msg));
// subject.subscribe((msg: string) =>
//   console.log("Welcome to my world! How do you like it", msg, "?")
// );
// subject.emit("Asaad");

// Observer with Unsubscribe pattern
class Subject2<T> {
  #observers: Function[] = [];

  subscribe(callback: Function) {
    this.#observers.push(callback);
  }

  unsubsribe(callback: Function) {
    this.#observers = this.#observers.filter(
      (observer) => observer !== callback
    );
  }

  emit(msg: T) {
    this.#observers.forEach((callback) => callback(msg));
  }
}

const subject2 = new Subject2<string>();
const observer1 = (msg: string) => console.log("Hello ", msg);
const observer2 = (msg: string) => console.log("Namaste ", msg);

subject2.subscribe(observer1);
subject2.subscribe(observer2);

subject2.emit("Rojin");
subject2.unsubsribe(observer2);
subject2.emit("Asaad");
