// let obj = { id: 1, name: "John" };
// let obj2 = obj.map((x) => x);
// console.log(obj2);

// let arr = [1, 2, 3];
// let two = arr.map((x) => x * 2);
// console.log(two);

// // Example object
// const myObject = { a: 1, b: 2, c: 3 };

// // Use Object.entries to convert the object into an array of [key, value] pairs
// const entries = Object.entries(myObject);
// console.log(entries);

// // Use map to transform the array
// const transformedArray = entries.map(([key, value]) => {
//   // Apply some transformation to the key or value
//   return { key: key, newValue: value * 2 };
// });

// console.log(transformedArray);

// // Q4
// const myArray = ["Java Script", "Type Script"];
// let result: string[] = [];
// myArray.map((name) => {
//   const splitedArray = name.split(" ");
//   {
//     console.log("splitedArray[0] = " + splitedArray[0]);
//     console.log("splitedArray[1] = " + splitedArray[1]);
//     result.push(
//       "{First: " + splitedArray[0] + " Last: " + splitedArray[1] + "}"
//     ); // String.
//     // result.push(`{First: ${splitedArray[0]} Last: ${splitedArray[1]}}`);
//   }
// });

// console.log(result);
// // split
// const myString = "Java-Script";

// console.log(myString.split("a")); //[ 'J', 'v', '-Script' ]
// console.log(myString.split("-")); //[ 'Java', 'Script' ]
// console.log(myString.split(""));
// //[
// //     'J', 'a', 'v', 'a',
// //     ' ', 'S', 'c', 'r',
// //     'i', 'p', 't'
// //   ]

// // Q5

// const nums = [1, 2, 3, 4, 5];

// function replaceEnds(nums: number[], start: number, end: number): number[] {
//   let result = nums.slice(); //  [1, 2, 3, 4, 5] copy the whole array to make it pure
//   result.splice(0, 1, start);
//   console.log(result);
//   result.splice(nums.length - 1, 1, end);
//   return result;
// }

// console.log("Expected [9,2,3,4,100]", replaceEnds(nums, 9, 100));
// console.log("slice Eg = ", nums.slice(0, 2)); // [ 1, 2 ]
// console.log("nums = ", nums); // [1,2,3,4,5]

// Q6
// foo(square, 5 ); // 25
// foo(cube, 2 ); // 8

// //6. [5]

// // Higher-order function `foo`
// function foo(func: (num: number) => number, num: number): number {
//   return func(num);
// }

// // Function to calculate the square of a number
// function square(x: number): number {
//   return x * x;
// }

// // Function to calculate the cube of a number
// function cube(x: number): number {
//   return x ** 3;
// }

// // Example usage
// console.log(foo(square, 5)); // Should output 25 (square of 5)
// console.log(foo(cube, 2)); // Should output 8  (cube of 2)

// console.log(cube);

//7. [25]Implement a fitness tracking application that allows users to monitor their daily workout statistics.
// • should, work for a dailyRecord with 1 or more day objects.
const session1 = { userId: 1, duration: 60 };
const session2 = { userId: 2, duration: 45 };
const session3 = { userId: 2, duration: 30 };
const session4 = { userId: 3, duration: 15 };
const session5 = { userId: 3, duration: 75 };

const day1 = { sessions: [session1, session2], date: "01/10/2022" };
const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };

const dailyRecord = [day1, day2];
dailyRecord;

// a. define types for Session and Day

type Session = {
  userId: number;
  duration: number;
};

type Day = {
  sessions: Session[];
  date: string;
};

// b. Utilize a for..of loop in a function, calculateDailyTotalDuration,
// to find the total workout duration for a given day.
// console.log("Expect 120:", calculateDailyTotalDuration(day2.sessions));

// function calculateDailyTotalDuration(sessions: Session[]): number {
//   let result = 0;
//   for (const session of sessions) {
//     result += session.duration;
//   }
//   return result;
// }

// console.log("Expect 120:", calculateDailyTotalDuration(day2.sessions));

//c. Develop a function, calculateTotalDuration, using a for.of loop,
// to find the total workout duration across all days in the dailyRecord array.
// Utilize the previously defined calculateDaily TotalDuration function.
//console.log/"Expect 225:", calculateTotalDuration(dailyRecord));

// function calculateTotalDuration(dailyRecord: Day[]): number {
//   let result = 0;
//   for (const days of dailyRecord) {
//     for (const session of days.sessions) {
//       result += session.duration;
//     }
//   }
//   return result;
// }
// console.log("Expect 225:", calculateTotalDuration(dailyRecord));

//d. Write a function getAllSessions that will use the concat method to return
//an array with all the sessions in the dailyRecord.

function getAllSessions(dailyRecord: Day[]): Session[] {
  let result: Session[] = [];
  for (const day of dailyRecord) {
    // result = result.concat(day.sessions);
    console.log(day.sessions);
  }
  return result;
}

console.log(
  "Expect [session1, session2, session3, session 4, session5]: ",
  getAllSessions(dailyRecord)
);

//Beni Code
// function squares(num: number): number {
//   return num * num;
// }
// function cubes(num: number): number {
//   return num * num * num;
// }
// function foo(callback: (num: number) => number, inputNum: number): number {
//   return callback(inputNum);
// }
// console.log(foo(squares, 5));
// console.log(foo(cubes, 5));

// const day1 = { sessions: [session1, session2], date: "01/10/2022" };
// const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
// let result = day1.sessions.concat(day2.sessions);
// console.log(result);

//e. Use an appropriate array method to get all sessions for a given userid Hint: use getAllSessions.
function getAllSessionsForUser(dailyRecord: Day[], user: number): Session[] {
  let result: Session[] = [];
  for (const day of dailyRecord) {
    day.sessions.filter((session) => {
      if (session.userId === user) {
        result.push(session);
      }
    });
  }
  return result;
}

console.log(
  "Expect [session2, session3]: ",
  getAllSessionsForUser(dailyRecord, 2)
);

// //f. Use an appropriate array method to get array of just duration times [60, 45, 30, 15,75]
// // Hint: use getAllSessions.
// // console.log/Expect [60, 45, 30, 15,75]: ", getAllDurations(dailyRecord)

// function getAllDurations(dailyRecord: Day[]): number[] {
//   const records = getAllSessions(dailyRecord);
//   return records.map((record) => record.duration);
// }
// console.log("Expect [60, 45, 30, 15,75]: ", getAllDurations(dailyRecord));
