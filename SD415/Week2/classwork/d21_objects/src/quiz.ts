// Object Blueprint
type Student = {
  studentId: number;
  quizAnswer: number[];
};

const student1 = {
  studentId: 101,
  quizAnswer: [1, 1, 2, 4],
};
const student2 = {
  studentId: 102,
  quizAnswer: [2, 1, 2, 2],
};
const student3 = {
  studentId: 103,
  quizAnswer: [3, 1, 3, 4],
};

const correstScore = [3, 1, 3, 4];
let studends = [student1, student2, student3];

export function gradeStudent(student: Student, correstScore: number[]): number {
  let result = 0;
  for (let i = 0; i < correstScore.length; i++) {
    if (student.quizAnswer[i] === correstScore[i]) result++;
  }
  return result;
}

console.log(gradeStudent(student1, correstScore));

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
studends;

//   runResult(studends);
// Classwork Generic type
//function recersArray<typeArr>

// const quizAnswer = [
//   [1, 1, 2, 4],
//   [2, 1, 2, 2],
//   [3, 1, 3, 4],
// ];
