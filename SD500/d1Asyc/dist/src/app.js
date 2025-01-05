import { 
//   sumTo,
//   factorial,
//   fibonacci,
//   outputList,
//   outputListLoop,
// reverseList,
reverseListLoop, } from "../src/recursion.js";
let list;
list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};
console.log(reverseListLoop(list));
