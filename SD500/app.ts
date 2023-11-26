// Async

//Stack
// JS work at one at time - since it is happening so fast. It looks multitasking

console.log("Sending request to server");
setTimeout(()=>{
    console.log("Data received after 2 sec.");
    console.log("Data receiving back...");
}, 2000);


