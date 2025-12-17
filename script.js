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
