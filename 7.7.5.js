// Функция сортирует массив уникальных чисел и сортирует его по возрастанию
function getUniqueSortedNumbers(arr) {
    // Создаем массив с уникальными числами
    const uniqueNumbers = [...new Set(arr)];
    // Сортируем числа в порядке возрастания
    return uniqueNumbers.sort((a, b) => a - b);
}

// Массив чисел
const numbers = [1, 2, 3, 1, 5, 4, 2, 3, 5];
// Получаем новый массив, содержащий только уникальные числа, отсортированные в порядке возрастания
const uniqueSortedNumbers = getUniqueSortedNumbers(numbers);

// Выводим результат в консоль
console.log(uniqueSortedNumbers);