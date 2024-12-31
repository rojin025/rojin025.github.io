console.log("Hello world!");

interface Name {
  name: string;
}
// interface NameAndAge extends Name {age: number}
interface Age {
  age: number;
}

const obj: Name & Age = { name: "Rojin", age: 20 };
// const obj : NameAndAge = {name: "Rojin", age: 0}

function lastItemsOfArray<T>(arr: T[]): T | undefined {
  return arr[-1];
}

interface Val<T> {
  value: T;
}

const val1: Val<number> = { value: 9 };
const val2: Val<string> = { value: "9" };

// #########################################################################################################
// Day 3

// const firstName = "Rojin";
// const x = { firstName }; // Shortcut to assign value of firtName with key firstNaem

// const y = { [firstName]: firstName }; // [ will be evaluated and store as a key] // rojin: "rojin"

// const asaad = { firstName: "Assad", lastName: "Saad" };
// const age = { age: 2 };

// const z = Object.create(x);

// const person = Object.assign(assad, age);

// console.log(asaad);
// console.log(age);
// console.log(person);
// console.log(person === asaad);

// const name = { first: "Java" };
// const person = Object.assign(assad, name); //

// const person2 = Object.assign({}, assad);

// // Copying object both are doing samethings
// const person2 = Object.assign({}, assad); //
// const personC = { ...asaad };

// const person2 = Object.assign({}, assad, age); // age will replace assad if its property confilts with eachothers. we replace from right to left
// const personC = { ...asaad, ...name };
