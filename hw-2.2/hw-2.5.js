/*Task 1
let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
function low_Number(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
let result = low_Number(a,b);
console.log(result);
*/
/*Task 2
let num = prompt("Введите число");
function enterNumber(num) {
  if (num % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}
let result = enterNumber(num);
console.log(result);
*/
/*Task 3.1
const squareOutput = (a) => console.log(a ** 2);
//Task 3/2
const returnSquare = (a) => a ** 2;
*/
/*Task 4
function sayHi() {
  let age = Number(prompt("Сколько вам лет?"));
  if (age < 0) {
    console.log("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    console.log("Привет, друг!");
  } else {
    console.log("Добро пожаловать!");
  }
}
sayHi();
*/
/*Task 5
let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
function value(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return a * b;
  }
}
let result = value (a, b);
console.log(result);
*/
/*Task 6
function cube(a) {
  if (isNaN(a)) {
    return `Вы ввели неправильное значение`;
  } else {
    return Math.pow(a, 3);
  }
}
let a = 10;
console.log(cube(a));
*/
/*Task 7
const circle1 = {
  radius: 4,
  getArea() {
    return 3.14 * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * 3.14 * this.radius;
  },
};
const circle2 = {
  radius: 6,
  getArea() {
    return 3.14 * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * 3.14 * this.radius;
  },
};
*/
