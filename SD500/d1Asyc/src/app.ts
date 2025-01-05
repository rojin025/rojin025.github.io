const CHAPTER ="";

CHAPTER;
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

// // Generic Call back function
// const delayedColorChange = (newColor: string, delay: number, doNext : ()=> void) => {
//   setTimeout(() => {
//       document.body.style.backgroundColor = newColor;
//       doNext && doNext();
//   }, delay);
// }

// delayedColorChange("red",1000, () => {
//   delayedColorChange("blue", 1000, ()=>{
//       console.log("Some Function");
//   })
// })

CHAPTER;
// ###########################################################################################
// Asyn example
// const searchMoviesAPI: () => void = () => {
  
//   saveToMyDB(
//     movies,
//     ()=>{
//       //if it works, run this:
//     },
//     ()=> {
//       //If it doesnot work, Run this:
//     }
//     );
//   // This part should be outside the saveToMyDB callback
//   // if API is down, or request failed.  
//   ()=> {
//     // if API is down, or request failed.  
//   }
// };

// searchMoviesAPI;


// // Assuming a type definition for saveToMyDB
// type SaveToMyDBType = (
//   movies: string[],
//   successCallback: () => void,
//   errorCallback: () => void
// ) => void;

// // Assuming the actual implementation of saveToMyDB
// const saveToMyDB: SaveToMyDBType = (movies, successCallback, errorCallback) => {
//   movies;
//   // Implementation of saveToMyDB
//   // ...

//   // Simulate success or failure callbacks
//   const isSuccess = true; // Set to true for success, false for failure
//   if (isSuccess) {
//     successCallback();
//   } else {
//     errorCallback();
//   }
// };

// // Assuming movies is defined somewhere in your code
// const movies: string[] = ["movie1", "movie2", "movie3"];

// // Async example
// const searchMoviesAPI: () => void = () => {
//   saveToMyDB(
//     movies,
//     () => {
//       // If it works, run this:
//       console.log("Success callback");
//     },
//     () => {
//       // If it does not work, run this:
//       console.error("Error callback");
//     }
//   );

//   // Move this part outside of the saveToMyDB callback
//   // if API is down, or request failed.
//   console.log("API down or request failed");

//   // Now, use the 'movies' variable somewhere to satisfy TypeScript
//   console.log("Movies:", movies);
// };

// // Invoke the searchMoviesAPI function
// searchMoviesAPI();


CHAPTER;