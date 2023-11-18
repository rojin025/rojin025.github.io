/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/

export function copyArray<T>(arr: T[]): T[] {
  // COMPLETE THIS
  return [...arr];
}
export function concat<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

export function findMin(...arr: number[]): number {
  return Math.min(...arr);
}
export function findMax(arr: number[]): number {
  return Math.max(...arr);
}

export function findProduct(...arr: number[]): number {
  //   let newArr = arr;
  return arr.reduce((product, num) => product * num, 1);
}
