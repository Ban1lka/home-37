// let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4];
// console.log (arr)
// let result = arr.filter((current) => {
//     return !(current%2) && !(current == 0);
// });
// console.log(result);
// ______________________________________
// let arr = [1,1,2,1,9];
// let result = [];
// arr.forEach((current) => {
//     if (result.some((item) => item == current)) {
//         return;
//     }
//     result.push(current);
// });
// console.log(result);
// ______________________________________
// let user = {
//     name:"Denys",
//     age: 30,
//     height:191,
//     weight: 85,
//     eye: "blue",
// };
// let result = []; 
// user.hair = "black";
// console.log(user);
// for ( key in user ) {
//     // result.push(user[key]);
//     result.push(key);
// }
// console.log(result.length);
// console.log(result[3]);
// ______________________________________
// let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4];
// let result = arr.map((current, index) =>  {
//     if (!((index+1) % 3)) {
//         return current * 4;
//     }
//     return current;
// });
// ______________________________________
// [ 0, 1, 8, 3, 4, 20, 6, 7, 32, 9, -1, -8, -3, -4]
// console.log(result);
// 1.2999999999999998
// let num = 1.2999999999999998;
// console.log( num.toFixed(2) );
// ______________________________________
// 1.3
// let jacobs = +"fff";
// console.log(jacobs);
// let a = NaN;
// console.log(a);
// ______________________________________
// let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, 15];
// let result = arr.filter((current) => {
//     return current <= 15 && current >= -2;
// });
// console.log(result.sort(compareNumeric));
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// [] -2..5;
// ______________________________________
// let array = [ 0, 1, 1, 1, 2, 7, 3, 4, 5, 6, 7, 7, 8, 9, -1, -2, -3, -4, 15];
// console.log(Array.from(new Set(array)));
//______________________________________
// let user = {
//     name:"Denys",
//     age: 30,
//     height:191,
//     weight: 85,
//     eye: "blue",
// };
// let string = JSON.stringify(user);
// console.log(typeof string);
// ______________________________________
// let date = new Date();
// // час в вашем текущем часовом поясе
// console.log( date.getHours() );
// // час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
// console.log( date.getUTCHours() );
// ______________________________________
// let animal = 1, human = 5, car;
// console.log(animal, human, car);
// let [man, woman] = ["Kirill", "Ann"];
// console.log([man, woman]);
// let a = 10;
// someNameOfFunction(a);
// function someNameOfFunction(firstParameter) {
//     console.log(firstParameter);
// }
// function multiply(first, second) {
//     first += 6;
//     return first * second;
// }
// console.log(multiply(a, 3));
// ______________________________________
// function checkAge(age) {
//     console.log(arguments);
//     for (let i=0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// if (age > 18) {
//     return true;
// } else {
//     return confirm('Родители разрешили?');
// }
// }
// checkAge("ds", 11, 3, 4, 4);
// ______________________________________
// function checkAndMultiply(x) {
//     if (typeof x === "number") {
//         return x * 5;
//     }
//     let resultat = +prompt('Введите число');
//     if (resultat) {
//         return resultat * 5;
//     }
//     return "Вы ввели не число";
// }
// // let a = checkAndMultiply(3); //3*5=15
// let b = checkAndMultiply("ddd"); //someNumber from prompt()*5=?
// // console.log(a);
// console.log(b);
// ______________________________________
// function sumSalaries(salaries) {
//     if (Object.entries(animal).length === 0) {
//         return 0;
//     }
//     let values = Object.values(salaries);
//     let sum = 0;
//     for (let value of values) {
//         sum = sum + value;
//     }
//     return sum;
// }
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// console.log( sumSalaries(salaries) );
// ______________________________________
// let car = {
//     color: 'red',
//     company: 'Ford',
//     door: 5,
// }
// let roof = {
//     color: 'black',
//     material: 'metall',
//     length: 15,
//     width: 10,
// }
// let newObj = {};
// Object.assign(newObj, car, roof);
// console.log(newObj);
// ______________________________________
// let page = document.querySelector('.page');
// let themeButton = document.querySelector('.theme-button');
// themeButton.onclick = function() {
//   page.classList.toggle('light-theme');
//   page.classList.toggle('dark-theme');
// };
"use strict";