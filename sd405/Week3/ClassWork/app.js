// var arr = [55, 44, 65];
// var set = new Set(arr);
// console.log(set.size === arr.length);
// console.log(set.has(65));


// var arr = [55, true, "65"];

// function typeOf(arr) {
//     let dataArr = [];
//     for (let x of arr) {
//         // console.log(typeof x)
//         dataArr.push(typeof x)
//     }
//     console.log(dataArr);
// }

// typeOf(arr);


// // Working with length of each data type; 
// var arr = [55, true, "65",[],{name:"Rojin", age:18}];
// // expected output is [2,4,2,0,0]

// function lengthOf(arr) {
//     let dataArr = [];
//     for (let x of arr) {
//         if (!(x.isArrray || typeof x === "object")) {
//             x = x + '';
//             // console.log(typeof x)
//             dataArr.push(x.length)
//         } else {
//             dataArr.push(0);
//         }
//     }
//     console.log(dataArr);
// }

// lengthOf(arr);


// 5. Obj Creating Arr
// let array = [50, "Apple" , {a:1}]
// output: {number0:50, string1:"apple , object2:{a:1}"}

let array = [50, "Apple", { a: 1 }]

function createObj(array) {
    //create typeof
    let myObj = {};
    let i = 0;
    let key = '';
    for (let data of array) {
        // console.log(typeof x)
        //create obj
        key = typeof data + i++;
        console.log(key);
        // //assign it to object
        myObj[key] = data;
    }2
    console.log(myObj);
}

createObj(array);
