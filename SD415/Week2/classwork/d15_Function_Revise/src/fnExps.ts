/**
 *@returns {number} double the input
 */
export function double(num: number): number {
  return num * 2;
}

/**
 * @returns {number} 100 times the input
 */
export function times100(num: number): number {
  return num * 100;
}

/**
 * @returns {number} triple the input
 */
export function triples(num: number): number {
  return num * 3;
}

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(
  arr: number[],
  myFunction: (item: number) => number
): number[] {
  const result: number[] = [];
  for (const item of arr) {
    result.push(myFunction(item));
  }
  return result;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMapArrow(
  arr: number[],
  myFunction: (item: number) => number
): number[] {
  const result: number[] = arr.map((item) => myFunction(item));
  return result;
}

export function myCallback(func: (num: number) => number, arg: number): void {
  console.log(func(arg));
}
export function cube(arg: number): number {
  return arg * arg * arg;
}
export function cubeSquare(arg: number): number {
  if (arg % 2 === 0) return arg * arg * arg;
  else return 0;
}

myCallback(cube, 10);
myCallback(cubeSquare, 10);
myCallback(cubeSquare, 9);
