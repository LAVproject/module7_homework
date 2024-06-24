// Функция выводит информацию о пользователе
function printInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}

// Объект с информацией о пользователе
const person = {
    name: "John",
    age: 30,
};

// Вызов функции с использованием call
printInfo.call(person, person.name, person.age);