// Функция калькулятор
function calculate(a, b, operator) {
    // Проверяем operator
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Деление на ноль недопустимо";
            } else {
                return a / b;
            }
        default:
            return "Неверный оператор";
    }
}

// Объект со значениями
const values = {
    a: 10,
    b: 5,
    operator: "/",
};

// Результат
const result = calculate.apply(values, [2, 3, "+"]);

// Выводим результат в консоль
console.log(result);