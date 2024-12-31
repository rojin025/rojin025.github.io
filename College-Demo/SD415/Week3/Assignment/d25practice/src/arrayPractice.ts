export type Person = {
  name: string;
  age: number;
};

export function doubleNums(arr: number[]): number[] {
  return arr.map((num) => num * 2);
}

export function doubleAges(arr: number[]): number[] {
  return arr.map((age) => age * 2);
}

export function filterEven(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

export function filterOver10(arr: number[]): number[] {
  return arr.filter((num) => num > 10);
}

export function findEvenNum(arr: number[]): number | undefined {
  return arr.find((num) => num % 2 === 0);
}

export function findEvenAge(arr: number[]): number | undefined {
  return arr.find((age) => age % 2 === 0);
}

export function includesEvenNum(arr: number[]): boolean {
  for (const num of arr) {
    if (num % 2 === 0) return true;
  }
  return false;
}

export function includesEvenAge(arr: number[]): boolean {
  for (const num of arr) {
    if (num % 2 === 0) return true;
  }
  return false;
}
