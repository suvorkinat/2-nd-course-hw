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
  
    let inputFirstWord = prompt('Введите первое слово');
    let inputLastWord = prompt('Введите последнее слово');
  
    inputFirstWord = inputFirstWord.toLowerCase(); 
    inputLastWord = inputLastWord.toLowerCase(); 
  
    if (inputFirstWord === fruits[0].toLowerCase() && inputLastWord === fruits[fruits.length - 1].toLowerCase()) {
      alert('Поздравляю! Вы угадали!');
    } else if (inputFirstWord === fruits[0].toLowerCase() || inputLastWord === fruits[fruits.length - 1].toLowerCase()) {
      alert('Вы были близки к победе!');
    } else {
      alert('Вы не угадали!');
    }
  }
  gameFruits();