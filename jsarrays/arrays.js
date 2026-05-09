// let arr = [1,2,3,4,5,6];

// for (var1 =0; i<7;i++){
//    console.log(arr[i]);
// }

// console.log(arr);

//  arr[2] = arr[2] + 10;

//  console.log(arr);

//  arr = [];

//  console.log(arr);

// let arr = [12,23,34,45,56,67,78,89,90];

// console.log(arr);

// arr.push(99);

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.shift(11);

// console.log(arr);

// arr.unshift();

// console.log(arr);

// console.log(arr.at(4));

// console.log(arr.indexOf(78));

// console.log(arr.includes(89));
// console.log(arr.indexOf(78));

// let unar = [56,1,2,54,9,7,6,2];
// console.log(unar);
// unar.sort();
// console.log(unar);

// unar.reverse();
// console.log(unar);

// let ar = [12,23,34,45,67];
//  for (var i = 0; i<7 ; i++){
//     console.log(ar[i]);

//  }

//   console.log("for each loop");
//   ar.forEach((element)=>{
//     ar.forEach((element));
//  });

// arrayylist------------------->

// let fd = [
//     ["rajvardhan","454-77-28",4568278667,"bhopal","teacher"]    
//     ["pranay","454-77-28",4568278667,"bhopal","teacher"]
//     ["ashish","454-77-28",4568278667,"bhopal","teacher"]
//     ["atif","454-77-28",4568278667,"bhopal","teacher"]
// ];

// fd.forEach((Element) =>{
//     console.log(element
// }

//json method------------>

// const persons = [
//   {
//     name: "Siddhant Sharma",
//     city: "Bhopal",
//     phone: "9876543210",
//     skill: "Web Development",
//     profession: "Frontend Developer"
//   },
//   {
//     name: "Rahul Verma",
//     city: "Indore",
//     phone: "9123456780",
//     skill: "Data Analysis",
//     profession: "Data Scientist"
//   },
//   {
//     name: "Priya Patel",
//     city: "Mumbai",
//     phone: "9988776655",
//     skill: "Graphic Design",
//     profession: "UI/UX Designer"
//   },
//   {
//     name: "Amit Kumar",
//     city: "Delhi",
//     phone: "9871234560",
//     skill: "Java Programming",
//     profession: "Backend Developer"
//   },
//   {
//     name: "Sneha Joshi",
//     city: "Pune",
//     phone: "9765432100",
//     skill: "Digital Marketing",
//     profession: "Marketing Manager"
//   }
// ];

// // Print all persons
// persons.forEach((person) => {
//   console.log("Name       : " + person.name);
//   console.log("City       : " + person.city);
//   console.log("Phone      : " + person.phone);
//   console.log("Skill      : " + person.skill);
//   console.log("Profession : " + person.profession);
//   console.log("----------------------------");
// });

// console.log(person);
// console.log(person[1]["name"]);

// person.map((element, idx)) =>


    
// let vishal ={
//     name: "Sneha Joshi",
//     city: "Pune",
//     phone: "9765432100",
//     skill: "Digital Marketing",
//     profession: "Marketing Manager"
// };

// console.log(Object.keys(vishal));
// console.log(object.values(vishal));

let ar = [1,2,3,9,8,7,6,5,4];

ar.sort ((a,b) => a-b);

console.log(ar);

console.log(ar.find((val) => val === 7));
console.log(ar.findIndex((val) => val === 7));
console.log(ar.findLastIndex((val) => val === 7));

let ar2 = [1,2,3,9,8,7,6,5,4];
console.log(ar2.filter((val) => val => 6)); // ek se jyada result toh filter
console.log(ar2.find((val) => val => 6)); // ek result toh find
console.log(ar2.slice(0,7))

let c = 3.14;
console.log(c.toFixed(5));

let name = "siddhant rajput"
