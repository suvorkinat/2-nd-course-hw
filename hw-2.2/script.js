/*Задание 1
let a = 10;
a = 20;
alert (a);*/
/* Задание 2
const releaseYear ='Год выпуска первого iPhone - 2007';
alert (releaseYear);*/
/* Задание 3
const userName = "Брендан Эйх";
alert(userName);*/
/* Задание 4
let x = 10;
let y = 2;
alert(x + y);
alert(x-y);
alert(x*y);
alert(x/y);*/
/*Задание 5
let a = 2;
let b = 5;
let result = a**5;
alert(result);
*/
/* Задание 6 
let a = 9;
let b = 2;
let result = a % b;
alert(result);*/
/*Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);
*/
/*Задание 8
let age = prompt('Сколько вам лет?')
alert(age);
*/
/*Задание 9.0
const user = {
    name: "Tanya",
    age: 24,
    isAdmin: true,
};
//Задание 9.1
user['cityofresidance']= 'Saint-Prtersburg';
alert(user['cityofresidance']);
//Задание 9.2
user.age = 18;
// Задание 9.3
delete user['city of residence'];
// Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
console.log(user[info]);
alert(user);
// Задание 10 
let name = prompt ('Назовите свое имя');
alert (`Hello, ${name}!`);*/

// Homework 2.6
/*Task 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i< arr.length; i++) {
    console.log(arr[i])
    if(arr[i] === 10) break
}
//Task 2 
const index = arr.indexOf(4);
console.log(index);
*/
/*Task 3
const arr = [1, 3, 5, 10, 20]; 
const str = arr.join(' ');
console.log(str);
//Task 4
let arr04 = [];
for (let i = 0; i < 3; i++) {
  arr04[i] = [];
  for (let j = 0; j < 3; j++) {
    arr04[i][j] = 1;
  }
}
console.log(arr04);
//Task 5
const arr05 = [1, 1, 1];
arr05.push(2, 2, 2);
console.log(arr05);
//Task 6
let arr06 = [9, 8, 7, "a", 6, 5];
arr06.sort().pop();
console.log(arr06);
//Task 7
const arr07 = [9, 8, 7, 6, 5];
const guess = Number(prompt("Угадай число:"), 10);
if (arr07.includes(guess)) {
  alert("Угадал!");
} else {
  alert("Не угадал");
}
//Task 8
let string = "abcdef";
console.log(string.split("").reverse().join(""));
//Task 9
let arr09 = [
  [1, 2, 3],
  [4, 5, 6],
];
const flatArr09 = arr09.flat();
console.log(flatArr09);
//Task 10
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr10.length - 1; i++) {
  console.log(arr10[i] + arr10[i + 1]);
}
//Task 11
function SquareNumbers(arr11) {
  return arr11.map((num) => num ** 2);
}
//Task 12
function getLengthWords(words) {
  return words.map((word) => word.length);
}
//Task 13
function filterPositive(array) {
  return array.filter(el => el < 0 )
}
console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2])); 
//Task 14
let Arr14 = [];
for (let i = 0; i < 10; i++) {
Arr14.push(Math.floor(Math.random() * 10) + 1);
}
let parityArr = Arr14.filter((el) => el % 2 === 0);
console.log(Arr14);
console.log(parityArr);
//Task 15
let Arr15 = [];
for (let i = 0; i< 6; i++) {
    Arr15.push(Math.floor(Math.random() * 10) + 1);
}
console.log(Arr15);
const averege = (Arr15.reduce((a,b) => (a+b)))/(Arr15.length);
console.log(averege.toFixed(2));
*/
//Homework 2.7
/*Task 1
let str = 'js';
let result = str.toUpperCase();
console.log(result);*/
//Task 2
/*
const animal = ["Кошка", "Кит", "Комар", "Носорог"];
function str(arr, word) {
  return arr
    .map((element) => element.toLowerCase())
    .filter((element) => element.startsWith(word));
}
console.log(str(animal, "ко"));
//Task 3
let number = 32.58884;
let roundedDown = Math.floor(number);
let roundedUp = Math.ceil(number);
let roundedNearest = Math.round(number);
console.log(roundedDown);
console.log(roundedUp);
console.log(roundedNearest);
*/
//Task 4
/*
let numbers = [52, 53, 49, 77, 21, 32];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
console.log('Наименьшее число:', minValue);
console.log('Наибольшее число:', maxValue);
*/
//Task 5
/*
function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(1, 10));
*/
//Task 6
/*
function getRandomNumber(maxValue) {
  const getRandom = [];
  for (let i = 0; i < Math.floor(maxValue / 2); i++) {
    getRandom[i] = Math.floor(Math.random() * maxValue);
  }
  return getRandom;
}
console.log(getRandomNumber(7));
//Task 7
function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(20, 100));
*/
//Task
/*
let currentDate = new Date();
console.log(currentDate);
*/
//Task 9
/*
let currentDate = new Date();
let futureDate = new Date(currentDate.setDate(currentDate.getDate() + 73));
console.log(futureDate);
*/
//Task 10

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];
const hours = ["часов", "часа", "час"];
const minutes = ["минут", "минуты", "минута"];
const seconds = ["секунд", "секунда", "секунды"];
const currentDate = new Date();

let fullDate = `Дата: ${currentDate.getDate()} ${
  months[currentDate.getMonth()]
} ${currentDate.getFullYear()} - это ${days[currentDate.getDay()]}`;
let fullTime = `Время: ${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;
console.log(fullDate);
console.log(fullTime);

//homework 2.8
/*
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
people.sort(function(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    else {
        return 0;
    }
});
console.log(people);

//Task 2 
function isPositive(el) {
    return el > 0;
    }
    function isMale(el) {
    return el.gender === 'male';
    }
    function filter(arr, callback) {
    const output = [];
    arr.map(el => {
        if(callback(el)) {
            output.push(el)
        }
    });
    return output;
}
    console.log(filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); 

//Task 3
let TimerId = setInterval(() => console.log(new Date()), 3000);

setTimeout(() => {
  clearInterval(TimerId);

  console.log("30 секунд прошло");
}, 30000);

//Task 4 
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})
//Task 5
function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi("Глеб"));
*/