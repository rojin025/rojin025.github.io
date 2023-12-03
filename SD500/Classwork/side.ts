// class Player {
//     readonly firstName: string;
//     readonly lastName: string;
//     private score = 0;
//     constructor(firstName: string, lastName: string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     private secretMethod(): void {
//         console.log("The Secret!");
//     }
// }

// Short Cut

interface Paycheck {
    salary: number;
}

interface CheckPlayer {
    check(): void;
}

class Player {
    protected _score = 0;
    private _life = 10;
    constructor(
        public firstName: string,
        public lastName: string
    ) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get score(){
        return this._score;
    }

    set score(newScore: number){
        if(newScore<0) throw new Error ("Score cannot be negative!") ;
        this._score = newScore;
    }

    private secretMethod(): void {
        console.log("The Secret!");
    }
}

class Admin extends Player implements Paycheck, CheckPlayer {
    constructor(public firstName: string , public lastName: string, public salary: number){
        super(firstName,lastName);
    }
    maxScore(score: number){
        this._score = score;
    }
    check(){
        console.log("Checking Players!");
    }
}

const player1 = new Player("Player", "One");
console.log("Player Full Name: ", player1.fullName);
console.log("Player Score: ", player1.score);
// player1.secretMethod();  Can not access

player1.score = 10;
console.log("Updated Score: ", player1.score);

const myAdmin = new Admin("Super", "Man", 10000);
myAdmin.maxScore(90);
console.log(myAdmin);
myAdmin.check();

// console.log(" ####################################################################");
// Abstract Class 
abstract class Employee {
    constructor(public first: string, public last: string){}
    abstract getPay(salary: number): number;
    sayHi(){
        console.log("Hello World!");
    }
}

class FullTimeEmp extends Employee {
    constructor(
        first: string, 
        last: string,
        private yearlySalary: number
        ){
        super(first, last);
    }
    getPay(): number {
        return this.yearlySalary;
    }
    multi(x: number, y: number): number{
        return x * y;
    }
}

class PartTimeEmp extends Employee{
    constructor(
        first: string, 
        last: string,
        public hrRate: number, 
        public workingHour: number
    ){
        super(first, last);
    }
    getPay(): number {
        return this.hrRate * this.workingHour;
    }
    pay = () => {this.hrRate * this.workingHour };
}

const ram = new FullTimeEmp("Ram", "Baral", 135000);
// console.log(ram);
// console.log("Pay Ram: ",ram.getPay());

const shyam = new PartTimeEmp("Shyam" , "Grung", 30, 2000);
// console.log("Shyam: " , shyam);
// console.log("Pay Shyam ", shyam.getPay());

console.log(" ####################################################################");
// Bind
    //  The bind method will clone the function and permanently replace this
    //  inside the function with the provided parameter.
    //  will permanently attach this to var myGetPay
const myGetPay = shyam.getPay.bind(shyam);
console.log("Bind Method : Shyam Salary ", myGetPay());
console.log("------ Function Currying ------");
const mutiplie2 = ram.multi.bind(null, 2); // here x will be cloned to be 3;
const square3 = ram.multi.bind({},3,3);   // we are multiplying 3 with 3

console.log("Muliple of 2 is ", mutiplie2(2));
console.log("Square of 3 is ", square3());



// Call and Apply
    // Does not clone the original function
    // it is only used to invoke the funtion 
    // a for array
        // 
// const myPay = shyam.pay.call(shyam);
// console.log("Arrow: ", myPay);    // still undefined
// console.log("End!!");   



// Arrow function
    // "this" is evaluated to its surrounding scope of the arrow
    // Does not care how it is invoked or from where?   
