//task1
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage('Ukraine', 100, 20));
//task2
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

console.log(makeTransaction(5, 1000, 6000));
console.log(makeTransaction(5, 1000, 4000));
//task3
function makeArray(firstArray, secondArray, maxLength) {
  const combinedArray = firstArray.concat(secondArray);
  return combinedArray.length > maxLength
    ? combinedArray.slice(0, maxLength)
    : combinedArray;
}

console.log(makeArray([1, 2], [3, 4, 5], 4));
console.log(makeArray([1, 8], [3, 9, 5], 10));
//task4
// Функція створення масиву заданої довжини з випадковими числами
const createArray = length =>
  Array.from({ length }, () => Math.floor(Math.random() * 100));

// Функція для обчислення суми елементів між мінімальним і максимальним значенням
const sumBetweenMinAndMax = arr => {
  const minIndex = arr.indexOf(Math.min(...arr));
  const maxIndex = arr.indexOf(Math.max(...arr));
  const [start, end] = [
    Math.min(minIndex, maxIndex) + 1,
    Math.max(minIndex, maxIndex),
  ];
  return arr.slice(start, end).reduce((sum, num) => sum + num, 0);
};
// Функція швидкого сортування масиву
const quickSort = arr =>
  arr.length <= 1
    ? arr
    : [
        ...quickSort(arr.filter(el => el < arr[0])),
        ...arr.filter(el => el === arr[0]),
        ...quickSort(arr.filter(el => el > arr[0])),
      ];
// Основна програма
const arrayLength = parseInt(
  prompt('Введіть кількість елементів у масиві:'),
  10,
);
const array = createArray(arrayLength);
console.log('Вхідний масив:', array);
console.log(
  'Сума елементів між мінімальним і максимальним значеннями:',
  sumBetweenMinAndMax(array),
);
console.log('Вихідний масив (відсортований):', quickSort(array));
//task5

$(function () {
  // Ініціалізація datepicker
  $('#datepicker').datepicker({
    changeMonth: true, // Перехід між місяцями
    changeYear: true, // Перехід між роками
    dateFormat: 'yy-mm-dd', // Формат дати
  });
});

function cancelDate() {
  $('#datepicker').val(''); // Очищає поле вибору дати
}
