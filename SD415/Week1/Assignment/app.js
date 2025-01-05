// //Assignment 1
// let age = 0;

// // using Do While 
// // do{
// //     age = prompt("Enter your age:");
// // }while (age<=18)

// // console.log("Age verified!");

// // using While 
// age = 0;
// while(age <= 18){

//     age = prompt("Enter your age:");
//     console.log("Age no good!");
// }
// console.log("Age verified");

// //Assignment 2
// let principle = prompt("Please Enter yearly Principle:"); //1000;
// const intrestRate =prompt("Please Enter yearly Interest Rate:"); //.10;
// const year = prompt("Please Enter compound Year:"); //5;
// let compoundedAmount = 0;

// //A = P(1 + r)^t
// for(let i = 0; i< year; i++){
//     compoundedAmount = principle*(1+intrestRate);
//     principle = compoundedAmount;
// }

// console.log(compoundedAmount);


// 12345
// 12345
// 12345
// 12345
// 12345

// for(let i = 0; i < 5; i++){
//     console.log("12345");
// }


// // 1
// // 22
// // 333
// // 4444
// // 55555

let str = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        str += "" + i;//st
    }
    console.log(str);
    str = ""; //reset
}


// // 55555
// // 4444
// // 333
// // 22
// // 1

// let str = "";
// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         str += "" + i;
//         // } while (i <= 3)
//     }
//     console.log(str);
//     str = "";
// }


// // 5. Assignment

// // Cost of House                 Down Payment
// // $0 to less than 50K          5% of the cost
// // $50K to less than 100K       $1000 + 10% of (cost - $50K)
// // $100K to less than 200K      $2000 + 15% of (cost - $100K)
// // $200K and above              $5000 + 10% of (cost - $200K)

// let cost = prompt("Enter your House valuation:");
// let downPayment = 0;

// if (cost >=0 && cost < 50000){
//     downPayment = 5/100 * cost;
// } else if (cost >=50000 && cost < 100000){
//     downPayment = 1000 + (10/100 * cost);
// } else if (cost >=100000 && cost < 200000){
//     downPayment = 2000 + (15/100 * cost);
// } else if (cost >= 200000){
//     downPayment = 5000 + (10/100 * cost);
// } else {
//     console.log("Invalid input");
// }

// console.log("Your downpayment is " + downPayment);

// // // 6. Assignment

// // Input    Output
// // 123      6
// // 102      3
// // 8        8

// // let number = Number(prompt("Please Enter a Number: "));
// let number = -801;
// let rem = 0;
// let sum = 0;

// if (!number < 0){
// while (true){
//     rem = Number(number%10);
//     console.log(typeof rem)
//     sum += rem;
//     console.log(typeof sum)
//     number = parseInt(number/10);
//     console.log( "rem" + rem +" " + "sum"  + sum  + " " + "number"  + number);
//     if (number <= 9 ){
//         console.log( number)
//         console.log(typeof number)
//         sum +=number;
//         break
//     }
// }} else {
//     console.log("Invalid number" + number);
// }

// console.log("sum is " +sum);