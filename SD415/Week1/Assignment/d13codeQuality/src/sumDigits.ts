// // 6. Assignment

// Input    Output
// 123      6
// 102      3
// 8        8
export function sumDigit(num: number): number {
  let rem = 0;
  let sum = 0;
  if (num >= 0) {
    while (true) {
      rem = Number(num % 10);
      sum += rem;
      num = Math.floor(num / 10);
      if (num <= 9) {
        sum += num;
        break;
      }
    }
  } else {
    console.log("Invalid number" + num);
  }
  console.log("sum is " + sum);
  return sum;
}
