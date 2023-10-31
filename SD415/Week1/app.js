// import promptsync from "promptsync"

function init() {
    // let currentYear = 2023;



    // // // running();

    // // //Fucntion expression
    // // const calcAge = function(birthYear){
    // //     return currentYear - birthYear;
    // // }

    // // let age = console.log('Enter your age:');

    // // //Arrow Function
    // // const calcAgeArrow = birthYear => currentYear - birthYear;
    // // const x = calcAgeArrow(age);

    // // console.log(`Your age is ${x}`);

    // // // Taking 2 parameter
    // // const calcAgeNameArrow = (birthYear, firstName) => {
    // //     const age = currentYear - birthYear;
    // //     const retirement = 65 - age;
    // //     return `Dear ${firstName},Your retirement age is ${retirement}.`
    // // }; 

    // // console.log(calcAgeNameArrow(1993,"Rojin"));

    // //Arrays

    // const years = [1991, 1993, 2007, 1969];
    // const ages = [];

    // for (let i = 0; i < years.length; i++) {
    //     ages.push(currentYear - years[i]);
    // }

    // console.log(ages);

    // let x = Number(prompt("enter x"));
    // let y = Number(prompt("enter y"));

    // let sum = console.log("Sum id " + (x+y));


    // // Enter Name classwork
    // let name = (prompt("Enter Name"));
    // console.log("Hi, " + name);

    // // old way
    // const prompt = promptsync()
    // let name2 = (prompt("Enter Name"));
    // console.log("Hi, " + name2);

    // const prompt = require("prompt-sync")();
    
    // const tempInCelsius = prompt("Enter value in celsius: ")
    // const tempInFahrenheit = 9 / 5 * Number(tempInCelsius) + 32;
    // console.log(tempInFahrenheit);

    

}

function running() {
    console.log("I am connected!");
}


window.onload = init;