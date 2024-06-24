// Функция устанавливает полное имя пользователю переданному объекту
function setFullName(fullName) {
    this.fullName = fullName;
}

// Объект с данными по человеку
const person = {
    name: "John",
    age: 30,
};

// Создаем новую функцию с помощью bind
const setPersonFullName = setFullName.bind(person);

// Вызываем новую функцию
setPersonFullName("John Smith");

// Выводим результат в консоль
console.log(person);