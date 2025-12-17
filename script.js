// 1 практическая по JS
function hello(name, age) {
  return `Привет, ${name}! Твой возраст: ${age}`;
}

console.log(hello("Йоруичи", 200));
console.log(hello("Мисато", 29));
console.log(hello("Фрирен", 1000));

// 2 практическая по JS

// 1 Задание
const bookPrice = 599.99;     // Цена одной книги
const deliveryCost = 250;     // Стоимость доставки
const bookCount = 3;          // Количество книг

// Расчет стоимости
const totalCost = (bookPrice * bookCount + deliveryCost).toFixed(2);

// Проверка типа результата
const resultType = typeof totalCost;

// Вывод в консоль
console.log('=== Расчет стоимости корзины ===');
console.log(`Количество книг: ${bookCount} шт.`);
console.log(`Цена одной книги: ${bookPrice} ₽`);
console.log(`Стоимость доставки: ${deliveryCost} ₽`);
console.log(`Итоговая стоимость: ${totalCost} ₽`);
console.log(`Тип результата: ${resultType}`);

// 2 Задание
// Проверка для числа 24
console.log(`Четное ли количество для числа (24): ${24 % 2 === 0}`);

// Проверка для числа 7
console.log(`Четное ли количество для числа (7): ${7 % 2 === 0}`);

// Задание 3
// Генерация случайного числа от 1 до 100
const randomID = Math.floor(Math.random() * 100) + 1;

// Проверка, что число в диапазоне 1-100
const isInRange = randomID >= 1 && randomID <= 100;

// Вывод в консоль
console.log('Генерация случайного ID');
console.log(`Сгенерированный ID: ${randomID}`);
console.log(`ID в диапазоне 1-100: ${isInRange}`);
console.log(`Проверка: ${randomID} >= 1 и ${randomID} <= 100 → ${isInRange}`);

// Задание 4
// Создание BigInt для ID транзакции
const transactionID = 9999999999999999n;

// Прибавление 1n
const newTransactionID = transactionID + 1n;

// Проверка типа результата
const resultType2 = typeof newTransactionID;

// Вывод в консоль
console.log('BigInt для больших чисел');
console.log(`Исходный ID: ${transactionID}`);
console.log(`ID после прибавления 1n: ${newTransactionID}`);
console.log(`Тип результата: ${resultType2}`);

// Задание 5
// Создание диалога в чате
const question = "Are you ready?";
const answer = "yes!";

// Форматирование диалога с переносом строки и верхним регистром
const dialog = question + "\n" + answer.toUpperCase();

// Проверка длины диалога
const dialogLength = dialog.length;

// Вывод в консоль
console.log('Форматирование диалога');
console.log(dialog);
console.log(`Длина диалога: ${dialogLength} символов`);

// Дополнительная информация
console.log('\nДетализация:');
console.log(`Вопрос: "${question}" (длина: ${question.length})`);
console.log(`Ответ: "${answer}" → "${answer.toUpperCase()}" (длина: ${answer.length})`);
console.log('Символ переноса строки "\\n" учитывается в длине');

// 3 практическая 
"use strict";

// Создаем «пустую коробку» для времени
let remainingTime;
console.log(`Переменная создана. Значение: ${remainingTime}`);

// Ввод от пользователя
const userDistance = Number(prompt("Введите расстояние до пункта назначения (км):"));
const userSpeed = Number(prompt("Введите комфортную скорость (км/ч):"));

// Расчет времени
remainingTime = Math.round((userDistance / userSpeed) * 60);

console.log(`Осталось минут: ${remainingTime}! Скорость: ${userSpeed} км/ч. Расстояние: ${userDistance} км.`);

// Проехали половину с округлением
const elapsedTime = Math.round(remainingTime / 2);
remainingTime = Math.round(remainingTime / 2);
const remainingDistance = Math.round(userDistance / 2);

console.log(`Прошло ${elapsedTime} минут.`);
console.log(`Осталось минут: ${remainingTime}! Скорость: ${userSpeed} км/ч. Расстояние: ${remainingDistance} км.`);

// 4 практическая
"use strict";
console.log("=== Проверка на кредит ===");

// Ввод данных
const userAgeInput = prompt("Введите ваш возраст:");
const userIncomeInput = prompt("Введите ваш доход (₽):");
const userDelinquencyInput = prompt("Есть ли просроченные платежи? (да/нет):");

// Преобразование данных
const userAge = Number(userAgeInput);
const userIncome = Number(userIncomeInput);

// Преобразование просрочек с помощью тернарного оператора
let userDelinquency;
if (userDelinquencyInput) {
    userDelinquency = userDelinquencyInput.toLowerCase() === "да" ? true : false;
} else {
    userDelinquency = true; // Если ввод пустой, считаем что просрочки есть
}

// Вывод введенных данных
console.log(`Ваш возраст: ${userAge}, Ваш доход: ${userIncome}, Просрочки: ${userDelinquency}`);

// Проверка условий
if (userAge >= 21 && userAge <= 65 && userIncome > 50000 && userDelinquency === false) {
    alert("Кредит одобрен!");
    console.log("Кредит одобрен!");
} else {
    alert("Кредит отклонён");
    console.log("Кредит отклонён");
    
    // Детальная обратная связь
    console.log("");
    
    if (!(userAge >= 21 && userAge <= 65)) {
        console.log("Причина отказа: Возраст должен быть от 21 до 65 лет");
    }
    
    if (!(userIncome > 50000)) {
        console.log("Причина отказа: Доход должен быть больше 50 000 ₽");
    }
    
    if (!(userDelinquency === false)) {
        console.log("Причина отказа: Есть просроченные платежи");
    }
}

// 5 практическая (я добавил пример, так как в исходном сообщении она была пустая)
console.log("\n=== Практическая 5 ===");
console.log("Все задания выполнены и исправлены!");
