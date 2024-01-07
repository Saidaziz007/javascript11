// 3.10

// 1

// let n = 3;

// const getSum = (n) => {
//   let odd = 1;
//   let even = 1;
//   for (let i = 1; i <= 2 * n; i++) {
//     if (i % 2 == 0) {
//       even *= i;
//     } else {
//       odd *= i;
//     }
//   }
//   return odd + even
// };

// console.log(getSum(n));

// 2

// let arr = [1589, 31851, 512, 180975, 78];

// const getHighestNumberOfDigits = (arr) => arr.sort((a, b) => b.toString().length - a.toString().length)[0];

// console.log(getHighestNumberOfDigits(arr));

// 3

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];

// const getStringArr = (arr) => {
//   let res = [];
//   for (const el of arr) {
//     if (typeof el === "string") {
//       res.push(el);
//     }
//   }
//   return res;
// };

// console.log(getStringArr(arr));

// 4

// let str = "Hello! How are you? I'm doing great. What's new?";
// const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
// let count = 0;

// const getPunctuationNumber = (str) => {
//   str.split("").map((el) => {
//     if (punctuationSigns.includes(el)) {
//       count++;
//     }
//   });
//   return count;
// };

// console.log(getPunctuationNumber(str));

// 5

// let str = "Abdulaziz Programmer";

// const switchLetters = (str) => {
//   return str
//     .split("")
//     .map((el) => {
//       let temp = el;
//       if (temp == el.toUpperCase()) {
//         return el.toLowerCase();
//       } else {
//         return el.toUpperCase();
//       }
//     })
//     .join("");
// };

// console.log(switchLetters(str));

// 6

// let obj = { a: 1, b: 2, c: 3 };

// const changeObjToArr = (obj) => {
//   let res = [];
//   for (const el in obj) {
//     res.push(el + obj[el]);
//   }
//   return res;
// };

// console.log(changeObjToArr(obj));

// 7

// let students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];

// const seperateStudents = (students) => {
//   let grant = [];
//   let contract = [];
//   for (const el of students) {
//     if (el.isGrant) {
//       grant.push(el.name);
//     } else {
//       contract.push(el.name);
//     }
//   }
//   return { grant, contract };
// };

// console.log(seperateStudents(students));

// 8

// const books = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true },
// ];

// const getTotalPages = (books) => {
//   return books.reduce((acc, el) => {
//     if (el.isReadFinished) {
//       acc += el.pages;
//     }
//     return acc;
//   }, 0);
// };

// console.log(getTotalPages(books));
