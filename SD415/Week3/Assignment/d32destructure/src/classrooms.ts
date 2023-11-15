export {
  collectRoomNumbers,
  collectRoomsAndCapacities,
  collectLabeledRoomCaps,
  countStudentsInClassroom,
  findClassroomsWithCapacity,
  findStudentsOlderThan,
  averageStudentAge,
}; //implement these

type Classroom = {
  //YOUR CODE HERE
  roomNumber: number;
  capacity: number;
  students: Student[];
};

type Student = {
  //YOUR CODE HERE
  name: string;
  age: number;
};

export const classrooms = [
  {
    roomNumber: 101,
    capacity: 30,
    students: [
      { name: "Alice", age: 18 },
      { name: "Bob", age: 19 },
      { name: "Charlie", age: 17 },
    ],
  },
  {
    roomNumber: 102,
    capacity: 25,
    students: [
      { name: "David", age: 20 },
      { name: "Eve", age: 18 },
    ],
  },
  {
    roomNumber: 103,
    capacity: 35,
    students: [
      { name: "Frank", age: 19 },
      { name: "Grace", age: 20 },
      { name: "Helen", age: 17 },
    ],
  },
];

// Creating Type of Room
type Room = {
  roomNumber: number;
  capacity: number;
};

// 1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
function collectRoomNumbers(): number[] {
  return classrooms.map((classroom) => classroom.roomNumber);
}

// 2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this
// string format:  [“101::30”, :102::25”, “103::35”].
function collectRoomsAndCapacities(): string[] {
  return classrooms.map(
    (classroom) => `${classroom.roomNumber}::${classroom.capacity}`
  );
}

// 3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object
// format [{roomNumber: 101, capacity: 30} , …  ]
function collectLabeledRoomCaps(): Room[] {
  return classrooms.map((classroom) => ({
    roomNumber: classroom.roomNumber,
    capacity: classroom.capacity,
  }));
}

// 4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a
// roomNumber as parameters and returns the number of students in the specified classroom.
function countStudentsInClassroom(
  classrooms: Classroom[],
  roomNumber: number
): number | undefined {
  const classroom = classrooms.find(
    (classroom) => classroom.roomNumber === roomNumber
  );
  return classroom?.students.length;
}

// 5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
//  minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
function findClassroomsWithCapacity(
  classrooms: Classroom[],
  minCapacity: number
): Classroom[] {
  return classrooms.filter((classroom) => classroom.capacity >= minCapacity);
}

// type StdWithClass = {
//   classroomNumber: number;
//   student: Student;
// };

// 6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum
// age as parameters and returns an array of student objects who are older than the specified age,
//  along with the name of their classroom.
function findStudentsOlderThan(
  classrooms: Classroom[],
  minAge: number
): Student[] {
  let result: Student[] = [];
  classrooms.forEach((classroom) => {
    result = result.concat(
      classroom.students.filter((student) => student.age > minAge)
    );
  });
  return result;
}

// 7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns
// the average age of students across all classrooms.
function averageStudentAge(classrooms: Classroom[]): number {
  let totalAge = 0;
  let totalStd = 0;
  classrooms.forEach((classroom) => {
    classroom.students.forEach((student) => {
      totalAge += student.age;
      totalStd++;
    });
  });
  return totalAge / totalStd;
}
