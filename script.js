// Task 1
function task1() {
  const country = document.getElementById('country').value;
  const price = parseFloat(document.getElementById('price').value);
  const deliveryFee = parseFloat(document.getElementById('deliveryFee').value);
  const totalPrice = price + deliveryFee;
  console.log(`Доставка в ${country} коштуватиме ${totalPrice} кредитів`);
}

// Task 2
function task2() {
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const pricePerDroid = parseFloat(
    document.getElementById('pricePerDroid').value,
  );
  const customerCredits = parseFloat(
    document.getElementById('customerCredits').value,
  );
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    console.log('Недостатньо коштів!');
  } else {
    console.log(
      `Ви замовили ${quantity} дроїдів на суму ${totalPrice} кредитів!`,
    );
  }
}

// Task 3
function task3() {
  const firstArray = document
    .getElementById('firstArray')
    .value.split(',')
    .map(Number);
  const secondArray = document
    .getElementById('secondArray')
    .value.split(',')
    .map(Number);
  const maxLength = parseInt(document.getElementById('maxLength').value, 10);
  const combinedArray = firstArray.concat(secondArray);
  const result =
    combinedArray.length > maxLength
      ? combinedArray.slice(0, maxLength)
      : combinedArray;
  console.log('Комбінований масив:', result);
}

// Task 4
function task4() {
  const arrayLength = parseInt(
    document.getElementById('arrayLength').value,
    10,
  );
  const array = Array.from({ length: arrayLength }, () =>
    Math.floor(Math.random() * 100),
  );
  console.log('Згенерований масив:', array);
  const minIndex = array.indexOf(Math.min(...array));
  const maxIndex = array.indexOf(Math.max(...array));
  const [start, end] = [
    Math.min(minIndex, maxIndex) + 1,
    Math.max(minIndex, maxIndex),
  ];
  const sum = array.slice(start, end).reduce((sum, num) => sum + num, 0);
  console.log('Сума між мінімальним та максимальним значеннями:', sum);
  const quickSort = arr =>
    arr.length <= 1
      ? arr
      : [
          ...quickSort(arr.filter(el => el < arr[0])),
          ...arr.filter(el => el === arr[0]),
          ...quickSort(arr.filter(el => el > arr[0])),
        ];
  console.log('Відсортований масив:', quickSort(array));
}

// Task 5
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'yy-mm-dd',
  });
});

function cancelDate() {
  $('#datepicker').val('');
  console.log('Вибір дати скасовано');
}
