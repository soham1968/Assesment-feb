/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "karen", age: "19", marks: 35 },
  { id: 3, name: "jack", age: "20", marks: 85 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((student) => {
    if (student.marks >= 50) {
      console.log(`${student.name} scored above 50 marks.`);
    }
  });
  console.log("using map function");
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if (student.marks >= 50) {
      console.log(`${student.name} scored above 50 marks.`);
    }
  });
  console.log("using for-each function");
}

function addData() {
  //Write your code here, just console.log
  const newStudent = { id: 4, name: "Susan", age: "21", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
  // console.log(arr[3]);
  console.log("New student added succesfully");
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.forEach((student, index) => {
    if (student.marks < 50) {
      arr.splice(index, 1);
    }
  });
  console.log(arr);
  console.log("Failed student removed succesfully");
}

function concatenateArray() {
  //Write your code here, just console.log
  const additionalStudents = [
    { id: 5, name: "Emily", marks: 80 },
    { id: 6, name: "Frank", marks: 35 },
    { id: 7, name: "Grace", marks: 55 },
  ];
  arr = arr.concat(additionalStudents);
  console.log(arr);
  console.log("New students were added succesfully");
}
