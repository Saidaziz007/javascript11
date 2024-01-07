// 5.10

// 1

// let n = 30;

// const getOddDividersSum = (n) => {
//   let res = 0;
//   for (let i = 1; i <= n / 2; i++) {
//     if (i % 2 !== 0 && n % i == 0) {
//       res += i;
//     }
//   }
//   return res;
// };

// console.log(getOddDividersSum(n));

// 2

// let arr = [
//   "Abdulaziz",
//   "Shahobiddin",
//   "Shohrux",
//   "Shukurjon",
//   "Azamat",
//   "Rahmatulla",
// ];
// let str = "az";

// const search = (arr, str) => {
//   let res = [];
//   for (const el of arr) {
//     if (el.toLowerCase().search(str) != -1) {
//       res.push(el);
//     }
//   }
//   return res;
// };

// console.log(search(arr, str));

// 3

// let n = 5;
// let arr = [2, 5, 7, 10, 0, 18, 15];

// const getDividersSum = (arr, n) => {
//   return arr.reduce((acc, el) => {
//     if (el % n == 0) {
//       acc += el;
//     }
//     return acc;
//   }, 0);
// };

// console.log(getDividersSum(arr, n));

// 4

// let str = "Abdulaziz programmer is full-stack developer.";

// const checkSentence = (str) => {
//   if (
//     str.charCodeAt(0) >= 65 &&
//     str.charCodeAt(0) <= 90 &&
//     str.charCodeAt(str.length - 1) == 46
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkSentence(str));

// 5

// let str = "Abdulaziz Programmer";

// const getNumberOfCases = (str) => {
//   return str.split("").reduce(
//     (acc, el) => {
//       if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
//         acc.uppercase++;
//       } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
//         acc.lowercase++;
//       }
//       return acc;
//     },
//     { uppercase: 0, lowercase: 0 }
//   );
// };

// console.log(getNumberOfCases(str));

// 6

// let obj = { a: 1, b: 2, c: 3 };

// const changeObjToString = (obj) => Object.keys(obj).concat(Object.values(obj)).join("");

// console.log(changeObjToString(obj));

// 7

// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const getProductsSum = (...rest) => {
//   let res = 0;
//   rest.forEach((i) => {
//     res += products.reduce((acc, el) => {
//       return i == el.id ? acc + el.price : acc;
//     }, 0);
//   });
//   return res;
// };

// console.log(getProductsSum(4, 6, 9));

// 8

// let n = 3;
// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const getTopProducts = (products, n) => products.sort((a, b) => b.price-a.price).splice(0, n).map(el => el.name);

// console.log(getTopProducts(products, n));
