/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import { gradeStudent, gradeQuiz, gradeQuizLabeled } from "../src/app.js";
const student1 = {
  studentId: 101,
  quizAnswers: [1, 1, 2, 4],
};
const student2 = {
  studentId: 102,
  quizAnswers: [2, 1, 2, 2],
};
const student3 = {
  studentId: 103,
  quizAnswers: [3, 1, 3, 4],
};
const students = [student1, student2, student3];
/* 2.1.	 Function, quizAnswers that computes and returns the score for a single student.  */
describe("Returns the score for a single student", function () {
  it("tests double Student 1", function () {
    assert.deepEqual(gradeStudent(student1.quizAnswers, [3, 1, 2, 4]), 3);
  });
  it("tests double Student 2", function () {
    assert.deepEqual(gradeStudent(student2.quizAnswers, [3, 1, 2, 4]), 2);
  });
});
/* 2.2.	 Complete the function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g.,
[3,1,2,4] and returns an array that has scores for each student.  */
describe("Returns the score for a single student", function () {
  it("tests double Student 1", function () {
    assert.deepEqual(gradeQuiz(students, [3, 1, 2, 4]), [3, 2, 3]);
  });
});
/* 2.3.	 Complete the function, gradeQuizLabeled, that is like gradeQuiz except that it returns objects for
each student with properties of studentId and score. */
describe("Returns the score for a single student", function () {
  it("tests double Student 1", function () {
    assert.deepEqual(gradeQuizLabeled(students, [3, 1, 2, 4]), [
      { id: 101, score: 3 },
      { id: 102, score: 2 },
      { id: 103, score: 3 },
    ]);
  });
});
