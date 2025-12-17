//ПРАКТИЧЕСКАЯ  5
function isVip(purchase) {
    return purchase > 20;
}

const getDiscount = function(purchase, total) {
    if (isVip(purchase) && total > 1000) {
        return total * 0.1;
    }
    return 0;
};

const getTotalPrice = (discount, total) => total - discount;

function formatPrice(name, price, currency = "₽") {
    return `${name}, стоимость заказа: ${price} ${currency}`;
}

function getUserData() {
    let userName;
    let purchase;
    
    while (true) {
        userName = prompt("Введите ваше имя:");
        if (userName && userName.trim() !== "") {
            userName = userName.trim();
            break;
        }
        alert("Имя не может быть пустым.");
    }
    
    while (true) {
        const input = prompt("Введите количество покупок:");
        purchase = Number(input);
        if (!isNaN(purchase) && purchase >= 0) {
            break;
        }
        alert("Введите корректное число.");
    }
    
    return { userName, purchase };
}

function initDiscountCalculator() {
    const currentTotal = 1500;
    const userData = getUserData();
    const discount = getDiscount(userData.purchase, currentTotal);
    const total = getTotalPrice(discount, currentTotal);
    const result = formatPrice(userData.userName, total);
    
    console.log(result);
    alert(result);
    return result;
}

initDiscountCalculator();


// Практическая лекция5

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0;
    let b = 1;
    let result = 0;
    
    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    
    return result;
}

console.log(fib(0));
console.log(fib(1)); 
console.log(fib(2)); 
console.log(fib(3)); 
console.log(fib(4));  
console.log(fib(5));  
console.log(fib(6));  
console.log(fib(10)); 
console.log(fib(20)); 
