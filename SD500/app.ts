// Async

// //Stack
// // JS work at one at time - since it is happening so fast. It looks multitasking

// console.log("Sending request to server");
// setTimeout(()=>{
//     console.log("Data received after 2 sec.");
//     console.log("Data receiving back...");
// }, 2000);

// console.log("Line at end");

// // Web API -> take cares of setTimeout
// // Browser is keeping track of time

// Generic Call back function
const delayedColorChange = (newColor: string, delay: number, doNext : ()=> void) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

delayedColorChange("red",1000, () => {
    delayedColorChange("blue", 1000, ()=>{
        console.log("Some Function");
    })
})