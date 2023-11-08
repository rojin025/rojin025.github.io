export function calCompound(principle, intrestRate, year) {
    let cAmt = 0;
    //A = P(1 + r)^t
    for (let i = 0; i < year; i++) {
        console.log(cAmt);
        cAmt = principle * (1 + intrestRate);
        principle = cAmt;
    }
    return cAmt;
}
// let principle = 1000;
// const intrestRate = 0.1 / 12;
// const year = 1 * 12;
// console.log("compound amount is ", calCompound(principle, intrestRate, year));
