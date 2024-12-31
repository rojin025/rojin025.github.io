// // // // let arr = [1, 2, 3, 4, 5, 6];

// // // // function even(arr) {
// // // //     for (let x of arr) {
// // // //         if (x % 2 == 0)
// // // //             console.log(x);
// // // //     }
// // // // }

// // // // even(arr);


// // // function isPalindrome(str){
// //     let rev = '';
// //     for (let element of str ){
// //         rev= element+rev;
// //     };
// //     return (str === rev);
// // }
// // if( str === rev){
// //     console.log("Is Palindrome");
// // } else {
// //     console.log("NOT Palindrome");

// // }
// // }

// let obj = {
//     a: 1,
//     b: "Apple",
//     c: "Apple",
// }
// let obj2 = {
//     a: 1,
//     b: "pple",
//     c: "Aple",
//     d: "apple",
// }
// // console.log (obj.a);

// // let ab; console.log(ab);        // undefine
// // let abc = null; console.log(abc);        // null

// function findApple(obj) {
//     for (let key in obj) {
//         if (obj[key] === 'Apple') {
//             console.log("There is Apple in obj");
//             return;
//         }
//     }
//     console.log ("Apple Not found.");
// }

// // findApple(obj);
// obj.a;
// obj[key];   // key is a var ;not value
// obj.key;    // syntax error-> undefined


// //suresh
// let nums = [4, 23, 40, 5, 8];

// function finEvenNum(nums) {

//     let arr = [];

//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] % 2 === 0) {

//             arr.push(nums[i]);
//             console.log(nums[i]);
//         }

//     }
//     return arr;
// }

// finEvenNum(nums);

let arr = [10, 23, 4, 5, 89];


function evenNum(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if(arr[i]%2===0){

            newArr.push(arr[i]);
            // console.log(arr[i])
        }

        // return newArr;

    }   
    console.log(newArr)

}

evenNum(arr);


