// //ПРАКТИЧЕСКАЯ1
// function hello(name, age) {
//     console.log(typeof name);
//     console.log(typeof age);
    
//     return `Привет, ${name}! Твой возраст: ${age}`;
// }

// console.log(hello("Алиса", 18));
// console.log(hello("Петр", 25));
// console.log(hello("Мария", 30));



// //ПРАКТИЧЕСКАЯ  5
// function isVip(purchase) {
//     return purchase > 20;
// }

// const getDiscount = function(purchase, total) {
//     if (isVip(purchase) && total > 1000) {
//         return total * 0.1;
//     }
//     return 0;
// };

// const getTotalPrice = (discount, total) => total - discount;

// function formatPrice(name, price, currency = "₽") {
//     return `${name}, стоимость заказа: ${price} ${currency}`;
// }

// function getUserData() {
//     let userName;
//     let purchase;
    
//     while (true) {
//         userName = prompt("Введите ваше имя:");
//         if (userName && userName.trim() !== "") {
//             userName = userName.trim();
//             break;
//         }
//         alert("Имя не может быть пустым.");
//     }
    
//     while (true) {
//         const input = prompt("Введите количество покупок:");
//         purchase = Number(input);
//         if (!isNaN(purchase) && purchase >= 0) {
//             break;
//         }
//         alert("Введите корректное число.");
//     }
    
//     return { userName, purchase };
// }

// function initDiscountCalculator() {
//     const currentTotal = 1500;
//     const userData = getUserData();
//     const discount = getDiscount(userData.purchase, currentTotal);
//     const total = getTotalPrice(discount, currentTotal);
//     const result = formatPrice(userData.userName, total);
    
//     console.log(result);
//     alert(result);
//     return result;
// }

// initDiscountCalculator();





// // Практическая лекция 6

// function fib(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
    
//     let a = 0;
//     let b = 1;
//     let result = 0;
    
//     for (let i = 2; i <= n; i++) {
//         result = a + b;
//         a = b;
//         b = result;
//     }
    
//     return result;
// }

// console.log(fib(0));
// console.log(fib(1)); 
// console.log(fib(2)); 
// console.log(fib(3)); 
// console.log(fib(4));  
// console.log(fib(5));  
// console.log(fib(6));  
// console.log(fib(10)); 
// console.log(fib(20)); 




// // Практическая 8

// function randomInteger(min, max) {

//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log("Тест диапазона 1-5:");
// for (let i = 0; i < 10; i++) {
//     console.log(randomInteger(1, 5));
// }

// console.log("\nТест диапазона 7-15:");
// for (let i = 0; i < 10; i++) {
//     console.log(randomInteger(7, 15));
// }

// console.log("\nТест диапазона 40-42:");
// for (let i = 0; i < 10; i++) {
//     console.log(randomInteger(40, 42));
// }

// console.log("\nПроверка границ:");
// let hasMin = false;
// let hasMax = false;

// for (let i = 0; i < 1000; i++) {
//     const num = randomInteger(1, 5);
//     if (num === 1) hasMin = true;
//     if (num === 5) hasMax = true;
// }

// console.log("Было сгенерировано минимальное значение (1):", hasMin);
// console.log("Было сгенерировано максимальное значение (5):", hasMax);



// //ПРАКТИЧЕСКАЯ 9
// function pow(x, n) {
//   let result = 1;
  
//   for (let i = 0; i < n; i++) {
//     result = result * x;
//   }
  
//   return result;
// }

// const userNumber = prompt("Введите число:");
// const userPower = prompt("Введите степень:");

// const numberValue = Number(userNumber);
// const powerValue = Number(userPower);

// if (isNaN(numberValue) || isNaN(powerValue)) {
//   console.log("Ошибка: нужно вводить числа!");
// } else {
//   const calculationResult = pow(numberValue, powerValue);
//   console.log(calculationResult);
// }





// //Продвинутое форматирование текста в HTML
// <!DOCTYPE html>
// <html lang="ru">
// <head>
//     <meta charset="UTF-8">
//     <title>Театральный блог</title>
// </head>
// <body>
//     <header>
//         <h1>Театральный блог</h1>
//     </header>
    
//     <nav>
//         <ul>
//             <li><a href="#">Главная</a></li>
//             <li><a href="#">Статьи</a></li>
//             <li><a href="#">Контакты</a></li>
//         </ul>
//     </nav>
    
//     <main>
//         <article>
//             <h2>Основы театра</h2>
//             <p>Премьера <time datetime="2025-05-15">15 мая 2025</time>.</p>
            
//             <section>
//                 <h3>Термины</h3>
//                 <dl>
//                     <dt>Солилоквий</dt>
//                     <dd>Речь персонажа сам с собой для публики.</dd>
//                     <dt>Монолог</dt>
//                     <dd>Речь, обращённая к публике и персонажам.</dd>
//                     <dd>Может быть частью диалога.</dd>
//                 </dl>
//             </section>
            
//             <section>
//                 <h3>Цитата</h3>
//                 <blockquote cite="https://example.com/theater">
//                     <p>Театр — это зеркало души.</p>
//                 </blockquote>
//                 <p>Из <a href="https://example.com/shakespeare"><cite>Гамлета</cite></a>.</p>
//                 <p>Шекспир сказал: <q>Весь мир — театр</q>.</p>
//             </section>
            
//             <section>
//                 <h3>Код сцены</h3>
//                 <pre><code>let scene = document.querySelector('div');
// scene.onclick = function() { alert('Театр!'); }</code></pre>
//                 <p>Переменная <var>scene</var> задаёт сцену.</p>
//             </section>
//         </article>
        
//         <aside>
//             <h2>Контакты</h2>
//             <address>Иван Петров<br>Москва, ivan@example.com</address>
//         </aside>
//     </main>
    
//     <footer>
//         <p>© 2025 Театральный блог. Все права защищены.</p>
//     </footer>
// </body>
// </html>


