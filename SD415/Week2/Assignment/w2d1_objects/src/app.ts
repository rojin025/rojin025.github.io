/*  Create 3 objects, student1, student2, student3
 property studentId :  s101, s102, s103 respectively
property quiz answers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, gradeQuiz, that takes the quiz array and an array of correct 
 answers, e.g., [3,1,2,4] and returns an object that has properties with the names of each studentId and the value of the property will be their score on the quiz (one point for each correct answer)
 expect   { s101: 3, s102: 2, s103: 3 }
*/

type Student = {
  studentId: number;
  quizAnswers: number[];
};

type Grade = {
  id: number;
  score: number;
};

const student1 = {
  studentId: "101",
  quizAnswers: [1, 1, 2, 4],
};
const student2 = {
  studentId: "102",
  quizAnswers: [2, 1, 2, 2],
};
const student3 = {
  studentId: "103",
  quizAnswers: [3, 1, 3, 4],
};

const students = [student1, student2, student3];
const answers = [3, 1, 2, 4];
students;
/**
 *  2.1
 * @param stdAnsArray Array with current student answers
 * @returns total Score result
 *  each score        corr score
 * [1, 1, 2, 4] === [3, 1, 2, 4] -> 3
 */
export function gradeStudent(stdAnsArray: number[], answers: number[]): number {
  let result = 0;
  for (let i = 0; i < answers.length; i++) {
    if (stdAnsArray[i] === answers[i]) result++;
  }
  return result;
}

/**
 *  2.2
 * @param {Array} quizArray has student objects
 * @param {*} answers has the correct answers
 * @returns {Array} contains quiz scores for each student
 *  students ===  [3, 1, 2, 4] -> [3, 2, 3]
 */
export function gradeQuiz(quizArray: Student[], answers: number[]): number[] {
  const grades = [];
  for (const student of quizArray) {
    const studentScore = scoreStudent(student, answers);
    grades.push(studentScore);
  }
  return grades;
}

/**
 *  2.3
 * @param {Array} quizArray has student objects
 * @param {*} answers has the correct answers
 * @returns {Array} contains quiz scores for each student
 *  students ===  [3, 1, 2, 4] -> [ { id: 101, score: 3 },
                                    { id: 102, score: 2 },
                                    { id: 103, score: 3 }])
 */
export function gradeQuizLabeled(
  quizArray: Student[],
  answers: number[]
): Grade[] {
  const grades = [];
  for (const student of quizArray) {
    const studentScore = scoreStudent(student, answers);
    const stuId = student.studentId;
    grades.push({ id: stuId, score: studentScore });
  }
  return grades;
}

/**
 *
 * @param {Object} student is student object
 * @param {*} answers are quiz answers
 * @returns {number} score for the quiz
 */
function scoreStudent(student: Student, answers: number[]): number {
  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (student.quizAnswers[i] === answers[i]) {
      score = score + 1;
    }
  }
  return score;
}
