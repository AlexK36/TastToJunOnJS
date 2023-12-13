// 1. Напишите функцию для вычисления факториала числа.
function fac(num) {
    if (num === 1) {
        return 1
    } else {
        return num * fac(num - 1)
    }
}

console.log(fac(3));
// 2. Напишите функцию для вычисления числа Фибоначчи на определенном индексе.
function fib(num) {
    if (num === 0) {
        return 0
    }
    else if (num === 1 || num === 2) {
        return 1
    } else {
        return fib(num - 2) + fib(num - 1)
    }
}
console.log(fib(17));
// 3. Напишите функцию для подсчета суммы цифр числа.
function sum(num) {
    num = `${num}`
    if (num.length === 1) {
        return +num
    } else {
        return +num[0] + sum(num.slice(1))
    }
}

console.log(sum(1234));
// 4. Напишите функцию для нахождения наибольшего общего делителя двух чисел.
function del(x, y) {
    if (y > x) {
        return del(y, x)
    } else if (!y) {
        return x
    } else {
        return del(y, x % y)
    }
}

console.log(del(15, 30));
// 5. Напишите функцию для проверки, является ли строка палиндромом.

function palindrom(str) {
    if (str.length <= 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    let withoutFAndLElem = str.slice(1, str.length - 1)
    return palindrom(withoutFAndLElem)
}

console.log(palindrom(11));
// 6. Напишите функцию для нахождения всех возможных комбинаций элементов в массиве.
const array = [1, 2, 3];
function combinations(arr) {
    if (arr.length === 0) {
        return [[]];
    }

    const firstElement = arr[0];
    const remainingElements = arr.slice(1);

    const combinationsWithoutFirst = combinations(remainingElements);
    const combinationsWithFirst = [];

    combinationsWithoutFirst.forEach(combination => {
        combinationsWithFirst.push([...combination, firstElement]);
    });

    return [...combinationsWithoutFirst, ...combinationsWithFirst];
}

console.log(combinations(array));
// 7. Напишите функцию для нахождения наименьшего элемента в массиве.
const array1 = [2, 3, 14, 56, 7, 6, 4, 1]
function findMin(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    let minimum = arr[0];
    for (const item of arr) {
        if (item < minimum) {
            minimum = item; // если находим другое минимальное число, то сохраняем в переменную
        }
    }
    return minimum
}

console.log(findMin(array1));
// 8. Напишите функцию для нахождения суммы всех элементов в массиве.
// reduce

const array3 = [1, 2, 55, 4, 7, 8]
function sum(arr) {
    return arr.reduce((acc, elem) => acc + elem, 0)
}

console.log(sum(array3));
// рекурсия
const array2 = [1, 2, 55, 4, 7, 8]
function sumNew(arr) {
    if (arr.length === 0) {
        return 0
    } else {
        return arr[0] + sumNew(arr.slice(1))
    }
}

console.log(sumNew(array2));
// 9. Напишите функцию для нахождения наибольшего элемента в двумерном массиве.

// 10. Напишите функцию для проверки, является ли число простым.