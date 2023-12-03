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
let data_2 : { [student_id: string]: {name: string , course: Course[]} } = Object.freeze({});

function addStudent_V1(new_student: Student): boolean{
    const stdExist = data_1.some( std => std.id === new_student.id);
    if(stdExist) return false;

    const new_data = [...data_1, new_student];
    data_1 = new_data;
    return true;
}

function addStudent_V2(new_student: Student): boolean{
    const stdExist = data_2.hasOwnProperty(new_student.id);
    return false;

    const new_data = structuredClone(data_2);
    new_data[new_student.id] = {name: new_student.name, course: []}
    data_2 = new_data;
    return true;
}