// Day 5 Class and Access Modify

class Person {
  // protected id = 123;
  private ssn = 123;
  jersey = 8;

  constructor(public name: string = "Guest", protected age: number = 0) {}

  ssnNum(ssn: number) {
    this.ssn = ssn;
  }
  greet() {
    console.log("Hello, ", this.name);
  }
}

// const gerrard = new Person("Steven Gerrard", 45);
// gerrard.ssnNum(456);
// gerrard.jersey = 10;
// console.log(gerrard);

// // We are ex
// class SuperPerson extends Person {
//   constructor(public power: string, name: string, age?: number) {
//     super(name, age); // if we don't
//   }
//   // we can access protected in extended class
//   // id;
//   greet(): void {
//     console.log(`I am ${this.name}, and my age is ${this.age}.
// My superpower is, I can ${this.power}.`);
//   }
// }

// // // Complete it
// // // classs rainPerson {
// // //     cont
// // // }

// const rojin = new Person("Rojin");
// rojin.greet();

// const superRojin = new SuperPerson("Think", "Theo");
// superRojin.greet();
// // superRojin.id; // cannot acess

// // console.log(superRojin.power);
// // console.log(superRojin.greet());
// // // console.log(superRojin.id); // its protected
// // // console.log(superRojin.ssn); // it private
// // // superRojin.name = ""

// // // Thinks to Remember:
// //     // access modifier
// //     // overriding
// //     // Constructor

// // // ########################################################################
// // class Person {
// //     id =123;
// //     foo() {
// //         console.log("my foo pointing To Object.Prototype");
// //     }
// // }

// // const p1 = new Person();
// // const p2 = new Person();

// // console.log(p1);
// // console.log(p2);

// // p1.foo();
// // p2.foo();

// // console.log(p1.foo.toString);
// // console.log(`p1.foo

// // .toString`);    // this will print it shape as well

// // // p1.__proto__.greet;  // donot touch __proto__

// // console.log("--------------");
// // const foo = p1.foo;
// // // Its not suppose to work
// // foo(); // we are calling it from Global context

// // // Function.bind(obj)
