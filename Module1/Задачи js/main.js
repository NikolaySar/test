// 1 Даны две строки. Сравнить строки. Вывести символы большей строки, на количество которых отличается.

const differenceSymbols = (str1, str2) => {
  const longerStr = str1.length > str2.length ? str1 : str2;
  const shorterStr = str1.length > str2.length ? str2 : str1;

  let diffChars = "";

  for (let i = shorterStr.length; i < longerStr.length; i++) {
    diffChars += longerStr[i];
  }

  return diffChars;
};

const text1 = "text education part 2";
const text2 = "text education";
const result = differenceSymbols(text1, text2);
console.log(result); // Output: ' part 2'

// 2 В функцию передается несколько массивов. Вывести элементы из первого массива, переданного в функцию, которые имеются во всех других переданных в функцию массивах

function CommonArray(...arrays) {
  firstAr = arrays[0];
  othersAr = arrays.splice(1);

  return firstAr.filter((element) =>
    othersAr.every((array) => array.includes(element))
  );
}

const arr1 = [3, 6, 1, 8, 3, 6, 3, 6, 3, 6];
const arr2 = [1, 4, 2, 4];
const arr3 = [6, 3, 2, 8, 1];
console.log(CommonArray(arr1, arr2, arr3));
// Output: 1

// 3 Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

function removeDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

const inputArray = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];
console.log(removeDuplicates(inputArray)); // Output: [4, 7, 1, 9, 6, 8, 3]

// 4

function range(start, end, step = 1) {
  const rangeArray = [];
  let currentNum = start;

  if (step > 0) {
    while (currentNum <= end) {
      rangeArray.push(currentNum);
      currentNum += step;
    }
  } else {
    while (currentNum >= end) {
      rangeArray.push(currentNum);
      currentNum += step;
    }
  }

  return rangeArray;
}

console.log(range(5, 2, -1)); // Output: [5, 4, 3, 2]
console.log(range(4, 16, 2));

// 6. Напишите функцию, которая четное число возводит в квадрат, а нечетное в куб. После умножает это значение на 2-й параметр. Прибавляет 3-й и находит корень от получившегося результата, округленный до сотых. Но за счет того, что функция вызывает функцию.
function Number(num) {
  return function (multi) {
    return function (add) {
      const n1 = num % 2 === 0 ? Math.pow(num, 2) : Math.pow(num, 3);
      const result = n1 * multi + add;
      return Math.round(Math.sqrt(result) * 100) / 100;
    };
  };
}

const result = Number(17)(6)(2);
console.log(result);

// 7. Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false если нет
function Palindrom(str) {
  const str1 = str.split("").reverse().join("");
  return str1 === str;
}
const result = "test";
console.log(Palindrom(result));

// 	8. Удалить из массива значения, индексы которых указаны во втором массиве

function removeIndexNumber(arr, indx) {
  return arr.filter((_, i) => !indx.includes(i));
}

const arr1 = [5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1];
const arr2 = [2, 5, 1];

console.log(removeIndexNumber(arr1, arr2));

// 9

// 10. Вернуть массив тех значений, которые есть в первом, но нет во втором
function getValue(arr1, arr2) {
  return arr1.filter((value) => !arr2.includes(value));
}

const arr1 = [4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4];
const arr2 = [4, 5, 6, 7, 8];

console.log(getValue(arr1, arr2));

// 11. Вернуть отсортированный массив уникальных значений

// 12. Реализуйте функцию, которая принимает на вход объект и возвращает массив-пар.
function newArray(obj) {
  return Object.entries(obj);
}

const val = { dog: 6, cat: 11 };

console.log(newArray(val));

// 13 Создайте функцию, которая параметром принимает объект. Функция умножает все числовые свойства объекта на 2.

function multipleNumber(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

const input = { name: "test", age: 25, weight: 65, height: 165 };
console.log(multipleNumber(input));

// 15 Вывести сообщение равны ли 2 объекта.
function isEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!keysB.includes(key) || !isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

const a = { test: 8, text: 9 };
const b = { test: 8, text: 9 };

console.log(isEqual(a, b));
