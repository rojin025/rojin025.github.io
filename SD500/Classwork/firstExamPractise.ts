// // // HomeWork 3

// type Course = {
//   id: number;
//   title?: string;
//   description?: string;
// };

// type Student = {
//   id: number;
//   name: string;
//   courses: Course[];
// };

// let data_1: readonly Student[] = Object.freeze([]);
// let data_2: { [student_id: string]: { name: string; courses: Course[] } } =
//   Object.freeze({});

// function addStudent_V1(new_student: Student): boolean {
//   const stdExist = data_1.some((std) => std.id === new_student.id);
//   if (stdExist) return false;

//   const new_data = [...data_1, new_student];
//   data_1 = new_data;
//   return true;
// }

// function addStudent_V2(new_student: Student): boolean {
//   const stdExist = data_2.hasOwnProperty(new_student.id);
//   if (stdExist) return false;

//   const new_data = structuredClone(data_2);
//   const { id, name, courses } = new_student;
//   console.log("updating");
//   new_data[id] = { name, courses };
//   data_2 = new_data;
//   return true;
// }

// function getStudent_V1(student_id: number): Student | null {
//   const stdExist = data_1.find((std) => std.id === student_id);
//   if (!stdExist) return null;

//   return stdExist;
// }
// function getStudent_V2(student_id: number): Student | null {
//   const stdExist = data_2.hasOwnProperty(student_id);
//   if (!stdExist) return null;

//   return { id: student_id, ...structuredClone(data_2[student_id]) };
// }

// function updateStudent_V1(updateStudent: Student): boolean {
//   if (!getStudent_V1(updateStudent.id)) return false;

//   const updatedData = data_1.map((std) => {
//     if (std.id === updateStudent.id) return updateStudent;
//     return std;
//   });
//   data_1 = updatedData;
//   return true;
// }

// function updateStudent_V2(updateStudent: Student): boolean {
//   if (!getStudent_V2(updateStudent.id)) return false;

//   const { id, name, courses } = updateStudent;
//   const updatedData = structuredClone(data_2);

//   updatedData[id] = { name, courses };
//   data_2 = updatedData;
//   return true;
// }

// function removeStudent_V1(stdId: number): boolean {
//   if (!getStudent_V1(stdId)) return false;

//   const newData = data_1.filter((std) => std.id !== stdId);
//   data_1 = newData;
//   return true;
// }
// function removeStudent_V2(stdId: number): boolean {
//   if (!getStudent_V2(stdId)) return false;

//   const newData = structuredClone(data_2);
//   delete newData[stdId];
//   data_2 = newData;
//   return true;
// }

// // Adding
// addStudent_V2({
//   id: 4,
//   name: "Rojin",
//   courses: [{ id: 101 }, { id: 501 }],
// });
// addStudent_V2({
//   id: 5,
//   name: "Suresh",
//   courses: [{ id: 401 }],
// });
// addStudent_V1({
//   id: 1,
//   name: "Rojin",
//   courses: [],
// });
// addStudent_V1({
//   id: 2,
//   name: "Suresh",
//   courses: [],
// });

// // GetStd test
// // console.log("Getting Std with ID - 1 ",getStudent_V1(1));
// // console.log("Getting Std with ID - 10 ",getStudent_V1(10));

// // console.log("Getting Std with ID - 5 ",getStudent_V2(5));
// // console.log("Getting Std with ID - 10 ",getStudent_V2(10));

// // console.log(data_1);
// console.log("--------------------------------------------------------");
// console.log(data_2);

// // // Update
// // updateStudent_V1({
// //     id : 1,
// //     name: "Zeus",
// //     courses: [],
// // });

// // console.log(updateStudent_V1({
// //     id : 100,
// //     name: "Zeus",
// //     courses: [],
// // }));

// updateStudent_V2({
//   id: 5,
//   name: "GOD",
//   courses: [],
// });

// console.log(
//   updateStudent_V2({
//     id: 100,
//     name: "Zeus",
//     courses: [],
//   })
// );

// console.log("--------------------------------------------------------");
// console.log(data_2);

// // // // Removing
// // // console.log(removeStudent_V1(2)? "Successfully Removed" : "Cannot find the Student!");
// // // console.log(removeStudent_V1(2)? "Successfully Removed" : "Cannot find the Student!");

// // console.log(removeStudent_V2(5)? "Successfully Removed" : "Cannot find the Student!");
// // console.log(removeStudent_V2(2)? "Successfully Removed" : "Cannot find the Student!");

// // console.log("Updated Data: ",data_1);
// // console.log("Updated Data: ",data_2);

// // // const stdObj = {
// // //     '4': { name: 'Rojin', course: [{id:1, title:"WAP",description: "wap-500" }] },
// // //     '5': { name: 'Suresh', course: [] }
// // //   }

// // // const stdObjClone = {id: 4, ...structuredClone(stdObj[4])};
// // // console.log(stdObjClone);
// // // // console.log({id: 4 ,...stdObj[4]});

// // // Array method practice

// // function convertTitleCase(title: string ): string{
// //     const capitalize = (str:string) => str[0].toUpperCase() + str.slice(1);

// //     const exceptions = ["an", "or", "and", "in", "on", "the"];

// //     const titleCase  = title
// //         .toLowerCase()
// //         .split(" ")
// //         .map( word => exceptions.includes(word)? word : capitalize(word))
// //         .join(" ");
// //     return capitalize(titleCase);
// // }

// // console.log(convertTitleCase("hello world!!! THIS is the title or an TITLE!"));

// console.log("Exam is Tommorow!");

// // const transactions = [10000, -500, -1990, 100, 400, -30, -90, -800, 0, 1000, -600];
// // const transactions2 = [1, 2 ,-3];

// // const total = transactions.reduce((total, cur) => total + cur, 0);
// // const total2 = transactions2.reduce((total, cur) => total + cur, 0);

// // const {debit, credit} = transactions.reduce(
// //         (total, cur) => {
// //             (cur > 0) ?
// //             total.debit += cur :
// //             total.credit += cur;
// //             return total;
// //         }, {debit:0, credit:0}
// //         );

// // console.log("Total is ", total);
// // console.log("Total is ", total2);
// // console.log("Total is ", debit , credit);

// console.log("how function is invoked: Call, Apply and Bind");
// // const ram = {
// //     name: "Ram",
// //     lname: "Baral",
// //     hi: function (str: string ){
// //         console.log(str , this.name);
// //     },
// //     fname: function (){
// //         console.log(this.name, this.lname);
// //     }
// // }

// // const shyam ={
// //     name: "Syam",
// //     lname: "Gurrng"
// // }

// // console.log(ram);
// // ram.hi("HI!!");

// // ram.hi.call(shyam, "Hello");
// // ram.fname.apply(shyam)

// // const greetRojin = ram.hi.bind({},"Hello");
// // greetRojin();

// console.log("Proto");

// function multiply(x: number, b: number) {
//   console.log(x * b);
// }

// // const two = multiply.apply(null, [2,2]);
// // const three = multiply.call({}, 3,3);

// // const person = {
// //     name: "Asaad",
// //     printAfterOneSecond() {
// //         let name = "inside";
// //         console.log(`1. ${this.name}!`);
// //         setTimeout(() => { console.log(`2. ${this.name}!`); }, 1000);
// // }, };
// // person.printAfterOneSecond();

// // Scoping

// // function foo() {
// //     let a = 1, b = 20, c;
// //     console.log(a, b, c);

// //     function bar() {
// //         let b = 300, c = 4000;
// //         console.log(a, b, c);
// //         a = a + b + c;
// //         console.log(a, b, c);
// //     }

// //     bar();
// //         console.log(a, b, c);
// // }
// // foo();

// // exam test
// const myobj = {
//   name: "1",
//   foo: {
//     name: "2 -> ",
//     myFoo: function () {
//       console.log(this.name);
//     },
//   },
// };

// let myObjet = myobj.foo;
// console.log(myObjet);
// myobj.foo.myFoo();
// myObjet.myFoo();

// //
// class Shape {
//   constructor(private name: string, private color: string) {}

//   printArea() {
//     return 0;
//   }

//   getNameAndColor(): string[] {
//     return [this.name, this.color];
//   }
// }

// class Rectangle extends Shape {
//   constructor(name, color, private length: number, private width: number) {
//     super(name, color);
//   }

//   printArea() {
//     const area = this.length * this.width;
//     const [name, color] = this.getNameAndColor();
//     console.log(`The area of the ${name} ${color} is {area}`);
//     return area;
//   }
// }

// console.log(`Start`);
// [1, 2, 3].forEach((i) => setTimeout((_) => console.log(i)), 0);
// console.log(`Finish`);
