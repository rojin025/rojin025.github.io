// 5. Assignment
// Cost of House                 Down Payment
// $0 to less than 50K          5% of the cost
// $50K to less than 100K       $1000 + 10% of (cost - $50K)
// $100K to less than 200K      $2000 + 15% of (cost - $100K)
// $200K and above              $5000 + 10% of (cost - $200K)
let cost = 20000;
let downPayment = 0;
export function calDownPay(cost) {
    if (cost >= 0 && cost < 50000) {
        downPayment = (5 / 100) * cost;
    }
    else if (cost >= 50000 && cost < 100000) {
        downPayment = 1000 + (10 / 100) * cost;
    }
    else if (cost >= 100000 && cost < 200000) {
        downPayment = 2000 + (15 / 100) * cost;
    }
    else if (cost >= 200000) {
        downPayment = 5000 + (10 / 100) * cost;
    }
    else {
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
