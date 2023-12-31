/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
const salaries1 = {
  John: 100,
  Pete: 300,
  Mary: 250,
  Bob: 301,
  Alice: 400,
  Sally: 250,
};
export function topSalary(salaries) {
  if (!salaries || Object.keys(salaries).length === 0) {
    return "none";
  }
  const salariesArr = Object.entries(salaries);
  let maxSalary = salariesArr[0][1];
  let maxPerson = "";
  // console.log(salariesArr);
  // console.log(maxSalary);
  salariesArr.forEach(([person, salary]) => {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxPerson = person;
    }
  });
  return maxPerson;
}
console.log(topSalary(salaries1));
