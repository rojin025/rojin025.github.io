// /* write a function, sumPoints, to get the total points across all players */

// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// console.log("expect 10: ", sumPoints(players));

// type Player = {
//   name: String;
//   points: number[];
// };

// function sumPoints(players: Player[]): number {
//   let result = 0;
//   for (const player of players) {
//     for (const point of player.points) {
//       result += point;
//     }
//   }
//   return result;
// }

// /* write a function findProps to return an array of all the properties in any given object */
// console.log("expect [a, b, c]: ", findProps({ a: 1, b: 2, c: 3 }));
// type MyObject = {
//   a: number;
//   b: number;
//   c: number;
// };
// function findProps(myobj: MyObject): string[] {
//   let myArr: string[] = [];
//   for (const key in myobj) {
//     myArr.push(key);
//   }
//   return myArr;
// }
