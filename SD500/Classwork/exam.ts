console.log("Exam Prep:");

// HomeWork 3

type Course = {
    id: number;
    title: string;
    description: string;
};

type Student = {
    id: number;
    name: string;
    courses: Course[];
};

let data_1 : readonly Student[] = Object.freeze([]);
let data_2 : { [student_id: string]: {name: string , courses: Course[]} } = Object.freeze({});

function addStudent_V1(new_student: Student): boolean{
    const stdExist = data_1.some( std => std.id === new_student.id);
    if(stdExist) return false;

    const new_data = [...data_1, new_student];
    data_1 = new_data;
    return true;
}

function addStudent_V2(new_student: Student): boolean{
    const stdExist = data_2.hasOwnProperty(new_student.id);
    if (stdExist) return false;

    const new_data = structuredClone(data_2);
    new_data[new_student.id] = {name: new_student.name, courses: []}
    data_2 = new_data;
    return true;
}

function getStudent_V1(student_id: number): Student | null{
    const stdExist = data_1.find(std => std.id === student_id)
    if (!stdExist) return null;

    return stdExist;
}
function getStudent_V2(student_id: number): Student | null {
    const stdExist = data_2.hasOwnProperty(student_id);
    if (!stdExist) return null;
    
    return {id: student_id, ...structuredClone(data_2[student_id])};
    
}

// Adding 
addStudent_V2({
    id : 4,
    name: "Rojin",
    courses: [],
});
addStudent_V2({
    id : 5,
    name: "Suresh",
    courses: [],
});
addStudent_V1({
    id : 1,
    name: "Rojin",
    courses: [],
});
addStudent_V1({
    id : 2,
    name: "Suresh",
    courses: [],
});

// GetStd test
console.log("Getting Std with ID - 1 ",getStudent_V1(1));
console.log("Getting Std with ID - 10 ",getStudent_V1(10));

console.log("Getting Std with ID - 5 ",getStudent_V2(5));
console.log("Getting Std with ID - 10 ",getStudent_V2(10));

console.log(data_1);
console.log("--------------------------------------------------------");
console.log(data_2);

// const stdObj = {
//     '4': { name: 'Rojin', course: [{id:1, title:"WAP",description: "wap-500" }] },
//     '5': { name: 'Suresh', course: [] }
//   }

// const stdObjClone = {id: 4, ...structuredClone(stdObj[4])};
// console.log(stdObjClone);
// // console.log({id: 4 ,...stdObj[4]});