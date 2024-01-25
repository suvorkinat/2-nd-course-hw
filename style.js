function date(number) {
    if ((number >= 1 && number <= 2) || number === 12) {
        return `Winter`;    
    } else if (number >= 3 && number <= 5) {
        return `Spring`;
    } else if (number >= 6 && number <= 8) {
        return `Summer`;
    } else if (number >= 9 && number <= 11) {
        return `Autumn`;
    } else {
        return `There is no such month!`;
    }
}
alert(date(number));
//task 11, hw 2.7
function gameFruits() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let inputFirstword = prompt('Введите первое слово');
    let inputLastWord = prompt('Введите последнее слово');
    if (inputFirstword === fruits.indexOf[0] && inputLastWord === fruits.indexOf[6]) {
        return alert('Поздравляю! Вы угадали!');
    } else if (inputFirstword !== fruits.indexOf[0] && inputLastWord !== fruits.indexOf[6]) {
        return alert('Вы не угадали')
    }
     else {
        return alert('Вы были близки к победе!');
    } 
}