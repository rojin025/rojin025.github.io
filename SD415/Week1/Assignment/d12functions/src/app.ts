"use strict";

// import promptSync from "prompt-sync";
// const prompt = promptSync();
// let name = prompt("What is your name?: ");
// console.log("Hi ", name);

// function add(a: number, b: number): number {
//   return a + b;
// }
// const sum1: number = add(10, 15);
// const sum2: number = add(9, 5);
// console.log(`sum 1: ${sum1} sum 2: ${sum2}`);

// Ass 1
function calCommission(isSalaried: boolean, sales: number): number {
  let comission = 0;
  if (isSalaried) {
    console.log("Salaried man!");
    if (sales < 300) {
      console.log("Low performace no commission");
    } else if (sales >= 300 && sales <= 500) {
      comission = 0.01 * sales;
    } else if (sales > 500) {
      comission = 0.02 * sales;
    }
  } else {
    console.log("Un Salatied Man!");
    if (sales < 300) {
      console.log("Low performace no commission");
    } else if (sales >= 300 && sales <= 500) {
      comission = 0.02 * sales;
    } else if (sales > 500) {
      comission = 0.03 * sales;
    }
  }
  return comission;
}

// const isSalaried = false;
// const sales = 10;
// console.log("Your commission is : ", calCommission(isSalaried, sales));

// //Assignment 2

function calCompound(
  principle: number,
  intrestRate: number,
  year: number
): number {
  let cAmt = 0;
  //A = P(1 + r)^t
  for (let i = 0; i < year; i++) {
    console.log(cAmt);
    cAmt = principle * (1 + intrestRate);
    principle = cAmt;
  }
  return cAmt;
}

let principle = 1000;
const intrestRate = 0.1 / 12;
const year = 1 * 12;

// console.log("compound amount is ", calCompound(principle, intrestRate, year));

// 5. Assignment

// Cost of House                 Down Payment
// $0 to less than 50K          5% of the cost
// $50K to less than 100K       $1000 + 10% of (cost - $50K)
// $100K to less than 200K      $2000 + 15% of (cost - $100K)
// $200K and above              $5000 + 10% of (cost - $200K)

let cost = 20000;
let downPayment = 0;

function calDownPay(cost: number): number {
  if (cost >= 0 && cost < 50000) {
    downPayment = (5 / 100) * cost;
  } else if (cost >= 50000 && cost < 100000) {
    downPayment = 1000 + (10 / 100) * cost;
  } else if (cost >= 100000 && cost < 200000) {
    downPayment = 2000 + (15 / 100) * cost;
  } else if (cost >= 200000) {
    downPayment = 5000 + (10 / 100) * cost;
  } else {
    console.log("Invalid input");
  }
  return downPayment;
}

// // Output
// // Cost : 200000 Your DownPay is  25000
// // Cost : 120000 Your DownPay is  20000
// // Cost : 20000 Your DownPay is  1000

// downPayment = calDownPay(cost);
// console.log(`Cost : ${cost} Your DownPay is  ${downPayment}`);

// // 6. Assignment

// Input    Output
// 123      6
// 102      3
// 8        8

// let number = Number(prompt("Please Enter a Number: "));
let number = 801;
let rem = 0;
let sum = 0;

function sumDigit(num: number) {
  if (num >= 0) {
    while (true) {
      rem = Number(num % 10);
      sum += rem;
      num = Math.floor(num / 10);
      // console.log("rem" + rem + " " + "sum" + sum + " " + "number" + num);
      if (num <= 9) {
        sum += num;
        break;
      }
    }
  } else {
    console.log("Invalid number" + number);
  }

  console.log("sum is " + sum);
}

sumDigit(123);
