const users = ['John','Erick','Cypher','Todd']

function helloUser(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `Hello ${item}`
        }
    }
    return 'There is no hello for you, an undefined user...'
}

console.log(helloUser(users, 'John'))
// ==================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function checkForNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}

checkForNumbers(numbers);

// ==================

function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Ошибка: деление на ноль';
            }
        default:
            return 'Ошибка: неверный оператор';
    }
}

const result1 = calculator(2, 3, 'minus');
console.log(result1); // Вывод: -1

const result2 = calculator(5, 10, 'plus');
console.log(result2); // Вывод: 15

const result3 = calculator(4, 2, 'multiply');
console.log(result3); // Вывод: 8

const result4 = calculator(10, 2, 'divide');
console.log(result4); // Вывод: 5

const result5 = calculator(10, 0, 'divide');
console.log(result5); // Вывод: Ошибка: деление на ноль

const result6 = calculator(10, 5, 'unknown');
console.log(result6); // Вывод: Ошибка: неверный оператор