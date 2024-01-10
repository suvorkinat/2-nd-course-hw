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
const enterNumber = () => {
  let userEnter = Number(prompt('Введите число'))
  if (userEnter % 2 === 0) {
    console.log('Число четное');
  } else {
    console.log('Число нечетное');
  }
}
enterNumber();
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
const checkNumb = (a, b) => {
    return isNaN(a, b) ? `Одно или оба значения не являются числом` : a * b;
    }
    console.log(checkNumb(prompt(), prompt())); 
*/
/*Task 6
function checkNumber() {
  let input = prompt("Введите число");
  if (isNaN(input)) {
    return `Вы ввели неправильное значение`;
  } else {
    return input * 3;
  }
}
checkNumber();
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