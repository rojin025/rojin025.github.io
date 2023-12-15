// console.log("Exam Prep");

// // Async
// console.log(1);
// const a = setTimeout(function () {
//   console.log(2);
// }, 1000);
// const b = setTimeout(function () {
//   console.log(3);
// }, 0);
// console.log(4);

// // Async
// setTimeout(() => {
//   console.log(`a`);
//   setTimeout(() => console.log(`c`), 0);
//   console.log(`b`);
// }, 0);

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

// // Promise Practise
// function calorieFood(calorie: number) {
//   return new Promise((resolve, reject) => {
//     if (calorie > 800) resolve("Pizza");
//     reject("Salad");
//   });
// }

// // Promise find Output
// const promise1 = new Promise((resolve, reject) => {
//   console.log("hello promise"); // sync
//   setTimeout(() => console.log(`timeout results`), 1); // async
//   setTimeout(() => resolve("Promise results"), 1); // async
//   console.log("goodbye promise"); // sync
// });
// console.log("Code starts");
// promise1.then((result) => {
//   console.log(result);
// });
// console.log("I love asynchronous programming");

// calorieFood(1500)
//   .then((food) => console.log("Eatting ", food))
//   .then(() => console.log("I am Storing some Pizza for tomorrow"))
//   .catch((salad) => console.log("Eating Salad"))
//   .finally(() => console.log("gn"));

// const promise = new Promise((resolve, reject) => {
//   console.log(`Promise starts`);
//   resolve(`Promise result`);
//   console.log(`Promise ends`);
// });
// console.log(`Code starts`);
// promise.then(console.log);
// console.log(`Code ends`);

// // Find output
// const promise = new Promise((resolve, reject) => {
//   console.log(`Promise starts`);
//   resolve(`Promise result`);
//   console.log(`Promise ends`);
// });
// console.log(`Code starts`);
// promise.then(console.log);
// console.log(`Code ends`);

// // // // Find output 2
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

// // Async and await , fetch
// function getData() {
//   fetch("https://api.kanye.rest")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }

// console.log(getData());

// // // Find output 3
// console.log("start");
// const foo = async () => {
//   console.log("Hello");
//   return "Foo Here";
// };

// foo().then(console.log);
// console.log("end");

// // // // Await
// console.log("start");
// function foo2() {
//   return new Promise((resolve) => resolve(`foo2`));
// }
// async function bar() {
//   console.log("bar-start");
//   // foo2 and foo is same but different approach
//   //foo().then(result => { console.log(result); console.log('bar-end'); })
//   let result = await foo2();
//   console.log(result);
//   console.log("bar-end");
// }
// bar();
// console.log("end");

// // // Await Example
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
//   console.log("After Result");
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

function orderPizza() {
  console.log("Orderd received "); //  Syncronous
  const cheese = 40;
  //
  return new Promise<{ [Key: string]: string }>((reslove, reject) => {
    //
    // return "reslove, reject" statement
    if (cheese >= 50) {
      console.log("Preparing Pizza"); //  Syncronous
      reslove({
        // Async
        pizzaType: "Hawain Pizza.",
      });
      console.log("Order Finish..."); //  Syncronous
      // return this in true case
    } else
      reject(
        // Async
        { error: "Preparing Salad!" }
      ); // return this in false case
  });
}

// orderPizza()
//   .then((pizza) => {
//     // Async
//     console.log(`Uber Drvier outside`);
//     console.log(`Pizza Reveived`);
//     return pizza;
//   }) //   we can run multiple then channing
//   .then(({ pizzaType }) => console.log(`eating ${pizzaType}`))
//   .catch(({ error }) => console.log(`${error}`)) // only one catch works
//   .finally(() => console.log(`goodnight `));

// console.log("Uber picking it up...");

async function getMyQuote() {
  try {
    const dataResponse = await fetch("https://api.kanye.rest/");
    const data = await dataResponse.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
// getMyQuote();
// console.log("Kanye Quotes:");

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

// const subject2 = new Subject2<string>();
// const observer1 = (msg: string) => console.log("Hello ", msg);
// const observer2 = (msg: string) => console.log("Namaste ", msg);

// subject2.subscribe(observer1);
// subject2.subscribe(observer2);

// subject2.emit("Rojin");
// subject2.unsubsribe(observer2);
// subject2.emit("Asaad");

class Subject3<T, U> {
  #observers: Function[] = [];

  subscribe(callback: Function) {
    this.#observers.push(callback);
  }

  emit(para1: T, para2: U) {
    for (const callback of this.#observers)
      setTimeout(() => callback(para1, para2), 1000);
  }
}

const subject3 = new Subject3<string, number>();
subject3.subscribe((name: string, grade: number) =>
  console.log(`Name ${name}, Grade ${grade}`)
);
subject3.subscribe((name: string, grade: number) =>
  console.log(`NAM ${name}, Score is ${grade}`)
);

// subject3.emit("Rojin", 4);
