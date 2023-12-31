// // Function Revise

// export function myCallback(func: (num: number) => number, arg: number): void {
//   console.log(func(arg));
// }
// export function cube(arg: number): number {
//   return arg * arg * arg;
// }
// export function cubeSquare(arg: number): number {
//   if (arg % 2 === 0) return arg * arg * arg;
//   else return arg * arg;
// }

// myCallback(cube, 10);
// myCallback(cubeSquare, 10);
// myCallback(cubeSquare, 9);

// Object Blueprint
type Student = {
  studentId: number;
  quizAnswer: number[];
};

const std1 = {
  studentId: 101,
  quizAnswer: [1, 1, 2, 4],
};
const std2 = {
  studentId: 102,
  quizAnswer: [2, 1, 2, 2],
};
const std3 = {
  studentId: 103,
  quizAnswer: [3, 1, 3, 4],
};

let studends = [std1, std2, std3];

// const quizAnswer = [
//   [1, 1, 2, 4],
//   [2, 1, 2, 2],
//   [3, 1, 3, 4],
// ];

const correstScore = [3, 1, 3, 4];

export function runResult(studends: Student[]): void {
  console.log("####### Result #######");
  for (const std of studends) {
    const scores = std.quizAnswer;
    let result = 0;
    for (let i = 0; i < correstScore.length; i++) {
      if (scores[i] === correstScore[i]) result++;
    }
    console.log(`${std.studentId}  scored  ${result}`);
  }
  console.log("#####################");
}

runResult(studends);

// function recersArray<typeArr>
