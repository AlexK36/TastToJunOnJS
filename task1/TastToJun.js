let john = {
    name: "John",
    age: 23,
};

let map = new Map();
map.set(john);

john = null;

console.log(map.keys());

let weakMap = new WeakMap();

let ob = {
    name: "John",
};

weakMap.set(ob, "ok");

console.log(weakMap.get(ob));

//WeekSet

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
];

let readMassenger = new WeakSet();

readMassenger.add(messages[0]);
readMassenger.add(messages[1]);
result = "Read message 0: " + readMassenger.has(messages[0]);
console.log(result);

//Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: "John",
    age: 30,
};

function count(obj) {
    let count = 0;
    for (value of Object.keys(obj)) {
        if (value) {
            count++;
        }
    }
    return count;
}

// второе решение

function count(obj) {
    return Object.keys(obj).length;
}

//Напишите функцию count(obj), которая возвращает количество свойств объекта:

//Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of. Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function sumSalaries(salaries) {
    let sum = 0;
    for (let value of Object.values(salaries)) {
        sum += value;
    }

    return sum;
}

//Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of. Если объект salaries пуст, то результат должен быть 0.

let options = {
    title: "Menu",
    width: 100,
    height: 200,
};

let { title, wi, h } = options;
console.log(title);
console.log(wi);
console.log(h);

// диструктуризация
//Напишите деструктурирующее присваивание, которое: свойство name присвоит в переменную name.свойство years присвоит в переменную age. свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
let user1 = {
    name: "John",
    years: 30,
};
let { name, year: age, isAdmin = false } = user1;
//Напишите деструктурирующее присваивание, которое: свойство name присвоит в переменную name.свойство years присвоит в переменную age. свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника. Если объект salaries пустой, то нужно вернуть null. Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

let salaries1 = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function topSalary(salaries1) {
    let max = 0;
    let maxName = null;

    for (let [keys, value] of Object.entries(salaries1)) {
        if (max < value) {
            max = value;
            maxName = keys;
        }
    }
    return maxName;
}

//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника. Если объект salaries пустой, то нужно вернуть null. Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

let newDate = new Date();
newDate.getTime();

console.log(newDate);

//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let date = new Date(2012, 1, 20, 3, 12);

console.log(date);

//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    return days[date.getDay()];
}

//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user12 = {
    name: "Василий Иванович",
    age: 35,
};

let json = JSON.parse(JSON.stringify(user12));
console.log(user12);

//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

//Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
    number: 23,
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
    JSON.stringify(meetup, function replacer(key, value) {
        return key !== "" && value == meetup ? undefined : value;
    })
);

//Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

// Рекурсия

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert(pow(2, 4)); // 16

// как выглядят ее вызовы
// pow(2, 4) = 2 * pow(2, 3)
// pow(2, 3) = 2 * pow(2, 2)
// pow(2, 2) = 2 * pow(2, 1)
// pow(2, 1) = 2

//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// с помощью рекурсии
function sumTo(n) {
    if (n == 1) return 1;
    return n * sumTo(n - 1);
}

console.log(sumTo(4));
// с помощью цикла

function sumTo(n) {
    let realno = 0;
    if (n == 1) return 1;
    for (let i = 0; i < n; i++) {
        realno += i;
    }
    return realno;
}

console.log(sumTo(4));

//С использованием формулы арифметической прогрессии.
function sumTo(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumTo(4));
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

// числа фибоначи через рекурсию

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(8));

// числа фибоначи через цикл
f = 1;
s = 1;
r = 2;
newr = s + r;
new2r = newr + r;
new3r = newr + new2r;
new4r = new2r + new3r;
new5r = new3r + new4r;
new6r = new4r + new5r;
s = 2;
r = 3;
f = 2;
s = 3;
r = 5;
function fib(n) {
    let firstNum = 1;
    let secondNum = 1;
    for (let i = 3; i <= n; i++) {
        let result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
    }
    return secondNum;
}

console.log(fib(7));
// цикл фиб через цикл

//Напишите функцию printList(list), которая выводит элементы списка по одному. через цикл

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

function printList(list) {
    let temp = list;
    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

let newR = printList(list);
console.log(newR);

//через рекурсию

function printList(list) {
    console.log(list.value); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }
}

console.log(printList(list));
// через рекурсию в обратном порядке

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}

console.log(printList(list));
//

// Сделайте набор «готовых к употреблению» фильтров: inBetween(a, b) – между a и b (включительно). inArray([...]) – находится в данном массиве.

let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// Сделайте набор «готовых к употреблению» фильтров: inBetween(a, b) – между a и b (включительно). inArray([...]) – находится в данном массиве.

// ОБЪЕКТЫ keys value entries   9 УРОК

//Создайте функцию countProperties(obj), которая принимает объект и возвращает количество его свойств.
function countProperties(obj) {
    return Object.value(obj);
}
//Создайте функцию countProperties(obj), которая принимает объект и возвращает количество его свойств.

//Создайте функцию hasProperty(obj, key), которая принимает объект и ключ, а затем проверяет, есть ли у этого объекта свойство с таким ключом.
let newObj = {
    name: "John",
    age: 23,
};
let key = "age";
function hasProperty(obj, key) {
    return obj.hasOwnProperty(key) ? true : false;
}

console.log(hasProperty(newObj, key));
//Создайте функцию hasProperty(obj, key), которая принимает объект и ключ, а затем проверяет, есть ли у этого объекта свойство с таким ключом.
//Создайте функцию sumValues(obj), которая принимает объект с числовыми значениями и возвращает сумму всех значений.
let objectToSum = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function sumValues(obj) {
    let sum = 0;
    for (let salary of Object.values(obj)) {
        sum += salary;
    }
    return sum;
}

console.log(sumValues(objectToSum));
//Создайте функцию sumValues(obj), которая принимает объект с числовыми значениями и возвращает сумму всех значений.
//Создайте функцию multiplyNumeric(obj, factor), которая принимает объект с числовыми значениями и умножает каждое значение на заданный множитель.
let objectToMultiplication = {
    John: 100,
    Pete: 300,
    Mary: 250,
};
let fac = 2;
// через Object.value
function multiplyNumeric(obj, factor) {
    for (let value of Object.values(obj)) {
        return (value *= factor);
    }
}
// через for in
function multiplyNumeric(obj, factor) {
    for (let value in obj) {
        obj[value] *= factor;
    }
}
console.log(multiplyNumeric(objectToMultiplication, fac));
//Создайте функцию multiplyNumeric(obj, factor), которая принимает объект с числовыми значениями и умножает каждое значение на заданный множитель.
//Создайте функцию findMax(obj), которая принимает объект с числовыми значениями и возвращает ключ с максимальным значением.
let objectMax = {
    John: 100,
    Pete: 300,
    Mary: 250,
};
function findMax(obj) {
    let maxKey = null;
    let max = 0;
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            maxKey = key;
        }
    }
    return maxKey;
}

console.log(findMax(objectMax));
//Создайте функцию findMax(obj), которая принимает объект с числовыми значениями и возвращает ключ с максимальным значением.
//Создайте функцию copyObj(obj), которая создает и возвращает копию переданного объекта.
let objectCopy = {
    John: 100,
    Pete: 300,
    Mary: 250,
};
function copyObj(obj) {
    let newObj;
    return (newObj = { ...obj });
}
console.log(objectCopy);
console.log(copyObj(objectCopy));
// через Object.assign
let objectCopy2 = {
    John: 100,
    Pete: 300,
    Mary: 250,
};
function copyObj(obj) {
    let clone = Object.assign({}, obj);
    return clone;
}
console.log(objectCopy2);
console.log(copyObj(objectCopy2));

// через for in
let objectCopy3 = {
    John: 100,
    Pete: 300,
    Mary: 250,
};
function copyObj(obj) {
    let clone = {};
    for (let key in obj) {
        clone[key] = obj[key];
    }
    return clone;
}
console.log(objectCopy3);
console.log(copyObj(objectCopy3));
//Создайте функцию copyObj(obj), которая создает и возвращает копию переданного объекта.
//Создайте функцию mergeObjects(obj1, obj2), которая принимает два объекта и объединяет их в один, возвращая новый объект с объединенными свойствами.

function mergeObjects(obj1, obj2) {
    let newObj = Object.assign({}, obj1, obj2);
    return newObj;
}
//Создайте функцию mergeObjects(obj1, obj2), которая принимает два объекта и объединяет их в один, возвращая новый объект с объединенными свойствами.
//Создайте функцию reverseObject(obj), которая принимает объект и меняет местами его ключи и значения. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let objectCopy4 = {
    name: "Alex",
    age: 30,
    female: true,
};
function reverseObject(obj) {
    let newObject = {};
    for (let key in obj) {
        newObject[obj[key]] = key;
    }
    return newObject;
}

console.log(reverseObject(objectCopy4));
//Создайте функцию reverseObject(obj), которая принимает объект и меняет местами его ключи и значения.
//Создайте функцию filterObject(obj, callback), которая принимает объект и функцию обратного вызова. Функция должна вернуть новый объект с теми свойствами, для которых функция обратного вызова возвращает true.
let obj = {
    name: "John",
    age: 25,
    city: "New York",
};

function isString(value) {
    return typeof value === "string";
}

function filterObject(obj, callback) {
    let result = {};
    for (key in obj) {
        if (obj.hasOwnProperty(key) && callback(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}

let filteredObj = filterObject(obj, isString);
console.log(filteredObj);
//Создайте функцию filterObject(obj, callback), которая принимает объект и функцию обратного вызова. Функция должна вернуть новый объект с теми свойствами, для которых функция обратного вызова возвращает true.
//Создайте функцию sortObject(obj), которая принимает объект с числовыми значениями и сортирует его свойства по возрастанию значений, возвращая новый объект.
let objForSort = {
    4: 133,
    2: 25,
    1: 123,
};

function sortObject(obj) {
    // [[name, john], [age, 25], [city, ny]]
    let max = 0;
    let maxName;
    for (let [key, value] of Object.entries(obj)) {
        if (value > max) {
            max = value;
            maxName = key;
        }
    }
    return maxName;
}

console.log(sortObject(objForSort)); // просто смог вывести ключ у которого максимальное значение сама задача не получилась !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Создайте функцию sortObject(obj), которая принимает объект с числовыми значениями и сортирует его свойства по возрастанию значений, возвращая новый объект.

//Напишите функцию sum, которая бы работала следующим образом:
//sum(1)(2) == 3; // 1 + 2
//sum(1)(2)(3) == 6; // 1 + 2 + 3

function sum(a) {
    let sum = a;

    function f(b) {
        sum += b;
        return f;
    }

    f.toString = function () {
        return sum;
    };

    return f;
}

let newE = sum(1)(2)(3);

console.log(newE);

//Напишите функцию, которая принимает два числа и возвращает их сумму.
function sum(a, b) {
    return a + b;
}
//Напишите функцию, которая принимает два числа и возвращает их сумму.
//Напишите функцию, которая принимает массив чисел и возвращает их среднее арифметическое значение.
// через for of
let arr1 = [1, 2, 3, 4, 5];
function massToSred(arr) {
    let sum = 0;
    count = 0;
    for (let arg of arr) {
        sum += arg;
        count++;
    }
    return sum / count;
}

console.log(massToSred(arr1));

// через for
let arr2 = [1, 2, 3, 4, 5];
function massToSred(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
    }
    return sum / count;
}
console.log(massToSred(arr2));
//Напишите функцию, которая принимает массив чисел и возвращает их среднее арифметическое значение.
//Напишите функцию, которая принимает строку и возвращает ее длину.
let str1 = "Aleeleleele";
function strLength(str) {
    return str.length;
}
console.log(strLength(str1));
//Напишите функцию, которая принимает строку и возвращает ее длину.
//Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий из длин каждой строки.
let arrStr = ["Alex", "Jonh", "MassTr"];
function arrToLengthStr(arr) {
    let newArr = [];
    for (let arg of arr) {
        newArr.push(arg.length);
    }
    return newArr;
}
console.log(arrToLengthStr(arrStr));
//Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий из длин каждой строки.
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из квадратов каждого числа.
let arrNumTox = [2, 10, 5, 11];
function numTox(arr) {
    let arrNew = [];
    for (let arg of arr) {
        arrNew.push(Math.pow(arg, 2));
    }
    return arrNew;
}

console.log(numTox(arrNumTox));
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из квадратов каждого числа.
//Напишите функцию, которая принимает строку и возвращает ее в обратном порядке.
let strToReverse = "Alexandr";
function reverseStr(str) {
    return str.toLowerCase().split("").reverse().join("");
}

console.log(reverseStr(strToReverse));
//Напишите функцию, которая принимает строку и возвращает ее в обратном порядке.
//Напишите функцию, которая принимает массив чисел и возвращает наименьшее значение из этого массива.
let numToLower = [5, 7, 10, 1, 100, 20];
function lowerNum(arr) {
    max = 0;
    for (let arg of arr) {
        if (arg > max) {
            max = arg;
        }
    }
    return max;
}

console.log(lowerNum(numToLower));
//Напишите функцию, которая принимает массив чисел и возвращает наименьшее значение из этого массива.
//Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий из первых букв каждой строки.
let arrFirstL = ["Alex", "Jonh", "Ann", "Sophi"];
function firstLatterArr(arr) {
    let newArr = [];
    for (let arg of arr) {
        newArr.push(arg[0]);
    }
    return newArr;
}

console.log(firstLatterArr(arrFirstL));
//Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий из первых букв каждой строки.
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из нечетных чисел.
let newArrN = [1, 4, 5, 7, 10, 12, 3, 15];
function arrToNewArr(arr) {
    let newArr = [];
    for (arg of arr) {
        if (arg % 2 == 1) {
            newArr.push(arg);
        }
    }
    return newArr;
}
console.log(arrToNewArr(newArrN));
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из нечетных чисел.
//Напишите функцию, которая принимает два числа, a и b, и возвращает их наибольший общий делитель.

function maxDel(a, b) {
    let c = 0;
    if (a / c == false && b / c == false) {
        c++;
    } else {
        return c;
    }
}

console.log(maxDel(4, 8));
//Напишите функцию, которая принимает два числа, a и b, и возвращает их наибольший общий делитель.
function maxDel(a, b) {
    while (b != 0) {
        a, (b = b), a % b;
    }
    return a;
}
console.log(maxDel(24, 36));

function NOD(x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
}
console.log(NOD(10, 25));

console.log(NOD(24, 36));

//Создайте функцию, которая проверяет, является ли заданное число простым числом.
//Простые числа - это числа, которые делятся без остатка только на 1 и на само себя.
function findProst(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num;
}
function printPrimes(max) {
    for (let i = 2; i <= max; i++) {
        if (findProst(i)) console.log(i);
    }
}
printPrimes(100);
//Создайте функцию, которая проверяет, является ли заданное число простым числом.
//Напишите программу, которая вычисляет факториал заданного числа.
function findFact(num) {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log(findFact(5));
//Напишите программу, которая вычисляет факториал заданного числа.
//Создайте функцию, которая находит среднее арифметическое всех чисел в заданном массиве.
let arrForAverage = [1, 6, 10, 8];
function findAverage(arr) {
    res = 0;
    for (let arg of arr) {
        res += arg;
    }
    return res / arr.length;
}

console.log(findAverage(arrForAverage));
//Создайте функцию, которая находит среднее арифметическое всех чисел в заданном массиве.
//Напишите программу, которая удаляет все повторяющиеся элементы из заданного массива.
// через цикл
let arrRepeat = [1, 2, 4, 2, 8, 4, 10, 12]
function delRepeat(arr) {
    let uninque = []
    for (let i = 0; i < arr.length; i++) {
        if (!uninque.includes(arr[i])) {
            uninque.push(arr[i])
        }
    }
    return uninque
}
console.log(delRepeat(arrRepeat))
// через новую коллекцию 
let arrRepeat2 = [1, 2, 4, 2, 8, 4, 10, 12]
let newSet = new Set(arrRepeat2)
let uninque = Array.from(newSet)
console.log(uninque)
// через filter
let arrRepeat3 = [1, 2, 4, 2, 8, 4, 10, 12]
let uninque2 = arrRepeat3.filter((item, index) => arrRepeat3.indexOf(item) == index)
console.log(uninque2)
//Напишите программу, которая удаляет все повторяющиеся элементы из заданного массива.
//Создайте функцию, которая проверяет, является ли заданная строка палиндромом.
// не доделан вариант
let strPol = "а роза упала на лапу Азора"
function findPol(str) {
    let newStr = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    let lastIndex = str.length - 1
    for (let i = 0; i < newStr.length; i++) {
        if (str[i] !== str[lastIndex - 1]) {
            return false
        }
    }
    return true
}
console.log(findPol(strPol))
// 2 VARIANT
let strPol2 = "а роза упала на лапу Азора"
function isPalindrome(string) {
    string = string.toLowerCase().replace(/\W/g, '');
    const stringArray = [...string];
    const newArray = [];
    stringArray.forEach(index => {
        newArray.unshift(index);
    });
    const reversedString = newArray.join('');
    console.log(string);
    return string === reversedString;
}
console.log(isPalindrome(strPol2))
//Создайте функцию, которая проверяет, является ли заданная строка палиндромом.
//Напишите программу, которая находит второй наименьший элемент в заданном массиве.
let arr12 = [1, 1, 4, 8, 5, 9, 7, 4, 2, 8]
function findSecondMin(arr) {
    let newArr = []
    let min = Infinity
    for (let arg of arr) {
        if (arg < min) {
            min = arg
        }
    }
    min.toString().split("")
    newArr.push(min)

}

console.log(findSecondMin(arr12))

//2 решение
let arr123 = [2, 3, 4, 8, 5, 9, 7, 4, 2, 8]
function findSecondMin(arr) {
    arr.filter((item, index) => arr.indexOf(item) == index).sort((a, b) => a - b)
    return arr[1]

}
console.log(findSecondMin(arr123))
//Напишите программу, которая находит второй наименьший элемент в заданном массиве.
//Создайте функцию, которая сортирует заданный массив по возрастанию.
let arr222 = [2, 3, 4, 8, 5, 9, 7, 4, 2, 8]

function sortArr(arr) {
    let newArr = arr.sort((a, b) => a - b)
    return newArr.filter((item, index) => arr.indexOf(item) == index)
}

console.log(sortArr(arr222))
//Создайте функцию, которая сортирует заданный массив по возрастанию.
//Напишите программу, которая находит 10 первых чисел Фибоначчи и выводит их в консоль.
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function fib(num) {
    let first = 0
    let second = 1
    let arr = [0, 1]
    for (let i = 2; i < num; i++) {
        let result = first + second;
        first = second;
        second = result;
        arr.push(second)

    }
    if (num == 1) {
        arr.pop()
        return arr
    } else if (num == 2) {
        return arr
    } else {
        return arr
    }
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(10))

//Напишите программу, которая находит 10 первых чисел Фибоначчи и выводит их в консоль.

// создать функцию которая будет сортировать массив по возрастанию, фильтровать его на повторяющиеся элементы и вывести только числа и возвращать второй элемент массива
let arrforF = [1, 5, 7, 12, 45, 1, 48, 4, 24, 15, 45, "new", "arr", "New"]
function arrFor(arr) {
    arr.sort((a, b) => a - b)
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i]) && (typeof (arr[i]) !== "string")) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(arrFor(arrforF))


// 6 КАТА
let arr10 = [102, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]
function highestRank(arr) {
    arr.sort((a, b) => b - a)    // 12 12 12 10 10 8 7 6 4 
    let newArr = {}
    for (let item of arr) {
        newArr[item] = newArr[item] ? newArr[item] + 1 : 1  //{ '4': 1, '6': 1, '7': 1, '8': 1, '10': 2, '12': 3 }
    }
    let result1 = Object.entries(newArr)
    let result = result1.reduce((acc, curr) => acc[1] > curr[1] ? acc : curr).join(",").split(",")
    return Number(result[0])


}

console.log(highestRank(arr10))



// не эталонный вариант
function highestRank(arr) {
    arr.sort((a, b) => b - a)    // 12 12 12 10 10 8 7 6 4 
    let newArr = {}
    for (let item of arr) {
        newArr[item] = newArr[item] ? newArr[item] + 1 : 1  //{ '4': 1, '6': 1, '7': 1, '8': 1, '10': 2, '12': 3 }
    }
    let result = Object.keys(newArr).filter((item) => newArr[item] > 1)
    result.sort((a, b) => b - a)
    return Number(result[0])
}

//



//Only DuplicatesGiven a string, remove any characters that are unique from the string. Example: input: "abccdefee" output: "cceee"
let str10 = "abccdefee"
function onlyDuplicates(str) {
    str = str.toLowerCase().split("")
    let newArr = []
    let falseArr = []
    str.forEach((elem) => str.indexOf(elem) !== str.lastIndexOf(elem) ? newArr.push(elem) : falseArr.push(elem))
    return newArr.join("")
}

console.log(onlyDuplicates(str10))


//У вас есть переменная str которая содержит входные пользовательские данные.

// Напишите JavaScript код, который:

// Читает строку str  вида: a2b3c1
// Воссоздает массив: a2b3c1 -> ["a","a","b","b","b","c"]
// Записывает воссозданный массив через запятую в переменную result.

// разбиваем массив 2 массива с числами и буквами
// 
function decompress(str) {
    str = str.split("")
    for (let i = 0; i < str.length; i++) {
        if (typeof (str[i]) == "number") { }
    }
}



traps.forEach(traps => {
    setTimeout(() => {
        activateTrap(trap.type);
    }, trap.delay);
});

traps.forEach(trap => {
    setTimeout(() => {
        activateTrap(trap.type);
    }, trap.delay);
});


inventory.forEach((item) => console.log(item.name))






//// расчитать кто победит добро или зло 6 ката
let good2 = '1 1 1 1 1 1 10'
let evil2 = '1 1 1 1 1 1 11'
function goodVsEvil(good, evil) {
    let resG = 0
    let resE = 0
    evil = evil.split(" ")
    good = good.split(" ")
    for (let i = 0; i < good.length; i++) {
        resG += Number(good[i])
    }
    for (let i = 0; i < evil.length; i++) {
        resE += Number(evil[i])
    }
    if (resG > resE) return "Battle Result: Good triumphs over Evil"
    else if (resG < resE) return "Battle Result: Evil eradicates all trace of Good"
    else return "Battle Result: No victor on this battle field"
}

console.log(goodVsEvil(good2, evil2))

//Напишите функцию, которая будет возвращать количество различных буквенных символов и числовых цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы алфавита (как прописные, так и строчные) и числовые цифры.
let text1 = "Indivisibility"
function duplicateCount(text) {
    let count = []
    let newArr = []
    let countF = 0
    text = text.toLowerCase().split("")
    text.forEach((elem) => text.indexOf(elem) !== text.lastIndexOf(elem) ? count.push(elem) : countF++)
    for (let i = 0; i < count.length; i++) {
        if (!newArr.includes(count[i])) {
            newArr.push(count[i])
        }
    }
    return newArr.length
}

console.log(duplicateCount(text1))

// эталонный вариант

let text2 = "Battle Result: Good triumphs over Evil"
function duplicateCount(text) {
    return (text.toLowerCase().split("").sort().join("").match(/([^])\1+/g) || []).length
}
console.log(duplicateCount(text2))
//Напишите функцию, которая будет возвращать количество различных буквенных символов и числовых цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы алфавита (как прописные, так и строчные) и числовые цифры.


//Создайте функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, содержащих заданное слово.
let arrStrNew = ["hello", "ELEM", "World", "Final"]
let word1 = "wOrld"
function arrStrToFind(arr, word) {
    return arr.map((elem) => elem.toLowerCase()).filter((value) => value == word.toLowerCase())
}
console.log(arrStrToFind(arrStrNew, word1))
//Создайте функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, содержащих заданное слово.
//Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только нечетные значения.
let arrNum = [1, 5, 4, 7, 8, 9, 7, 2, 6, 4]
function retNeChet(arr) {
    return arr.filter((item) => item % 2 == 1)
}

console.log(retNeChet(arrNum))
//Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только нечетные значения.
// Напишите функцию, которая принимает строку и удаляет из нее все гласные буквы.

let strToGlas = "Let New Factorial again and again"

function delStrGlas(str) {
    return str.replace(/[aeiouy ]/gi, "")
}

console.log(delStrGlas(strToGlas))
//Напишите функцию, которая принимает строку и удаляет из нее все гласные буквы.
//Создайте функцию, которая принимает массив объектов и сортирует их по возрасту в порядке убывания.
let arrObj = [
    {
        name: "John",
        age: 23
    },
    {
        name: "Alex",
        age: 30
    },
    {
        name: "Ira",
        age: 24
    }
]

function sortAge(arrOb) {
    return arrOb.sort((a, b) => a.age < b.age ? 1 : -1)
}

console.log(sortAge(arrObj))
//Создайте функцию, которая принимает массив объектов и сортирует их по возрасту в порядке убывания.
//Напишите функцию, которая принимает число и возвращает факториал этого числа.
function facNum(num) {
    let res = 1
    for (let i = 1; i <= num; i++) {
        res *= i
    }
    return res
}

console.log(facNum(5))
//Напишите функцию, которая принимает число и возвращает факториал этого числа.
//Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий все числа, кратные 3.
let newArr3 = [1, 5, 4, 1, 3, 4, 8, 6, 2, 7, 231, 5]
function retMass(arr) {
    return arr.filter((item) => item % 3 == 0)
}

console.log(retMass(newArr3))
//Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий все числа, кратные 3.
//Напишите функцию, которая принимает массив строк и возвращает новый массив, где все строки перевернуты задом наперед.

let massStr = ["Alex", "newArr", "factorial"]

function arrRed(arr) {
    return arr.map((item) => item.split("").reverse().join(""))
}
console.log(arrRed(massStr))
//Напишите функцию, которая принимает массив строк и возвращает новый массив, где все строки перевернуты задом наперед.
//Создайте функцию, которая принимает объект и возвращает массив его ключей.
let objTo = {
    name: "Alex",
    age: 23,
    surname: "Korotaev"
}

function keyArr(obj) {
    return Object.keys(obj)
}

console.log(keyArr(objTo))
//Создайте функцию, которая принимает объект и возвращает массив его ключей.
// 1. Создайте функцию, которая принимает на вход число и определяет, является ли оно простым. Верните `true`, если число простое, и `false`, если нет.
function findEasy(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
}

console.log(findEasy(11))
// 2. Создайте функцию, которая принимает строку в качестве аргумента и возвращает эту же строку, но в обратном порядке.

let str = "Chet"

function strRev(str) {
    return str.split("").reverse().join("")
}

console.log(strRev(str))
// 3. Создайте функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент является квадратом исходного числа.
let arrChi = [1, 2, 3, 4, 8, 6, 5, 4, 6, 6]
function arrKvad(arr) {
    return arr.map((item) => item ** 2)
}
console.log(arrKvad(arrChi))
// 5. Создайте функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка имеет первую букву в верхнем регистре.
let arrr = ["привет", "как", "твои", "дела", "cаша"]

function firstWordToUpper(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i][0].toUpperCase()
    }

}


console.log(firstWordToUpper(arrr))
// 6. Создайте функцию, которая принимает два числа и возвращает их сумму.

// 7. Создайте функцию, которая принимает два числа и возвращает их произведение.

// 8. Создайте функцию, которая принимает два числа и возвращает `true`, если первое число больше второго, и `false` в противном случае.

// 9. Создайте функцию, которая принимает массив чисел и возвращает наименьшее число из этого массива.

// 10. Создайте функцию, которая принимает массив чисел и возвращает наибольшее число из этого массива.

// 11. Создайте функцию, которая принимает строку в качестве аргумента и возвращает количество символов в этой строке.

// 12. Создайте функцию, которая принимает строку и символ, и возвращает количество раз, которое символ встречается в этой строке.

// 13. Создайте функцию, которая принимает массив чисел и возвращает новый массив без повторяющихся элементов.

// 14. Создайте функцию, которая принимает строку и возвращает новую строку без пробелов.

// 15. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа из исходного массива.



//Напишите JavaScript код, который суммирует числа в массиве data между элементами start и end и записывает результат в переменную result. Если в массиве нет элементов start и end  тогда в переменную result записываем сообщение: Неверный формат массива или start находится после end

let arr11 = [1, 2, "start", 2, 2, 1, "end", 1, 5]

function findArr(arr) {
    let start = arr.findIndex((item) => item == "start")
    let end = arr.findIndex((item) => item == "end")
    if (start != -1 && end != -1 && start < end) {
        return arr.slice(start + 1, end).reduce((a, b) => a += b)
    } else {
        return "Неверный формат массива"
    }
}

console.log(findArr(arr11))
//


//Напишите JavaScript код, который проверяет все элементы в массиве data и записывает в новый массив только числа. Новый массив записать через запятую в переменную result.


let arr13 = [null, 42, "Макс", false, 3.14]

function findNum(arr) {
    return arr.filter((item) => typeof (item) === "number").join(", ")
}

console.log(findNum(arr13))

//



//Напишите JavaScript код, который проверяет все ли элементы в массиве data одинаковые и записывает логический результат в переменную result.

let data = ["###", "###", "###", "ASDASD"]

function odinNum(arr) {
    return arr.every((value, index) => value == arr[0])
}

console.log(odinNum(data))


// sample output  1, 2, 3, 2, 1

let data2 = [1, 2, 3]

function revArr(arr) {
    let newArr = []
    for (let item of arr) {
        newArr.push(item)
    }
    return arr.concat(newArr.reverse().splice(1)).join(", ")
}

console.log(revArr(data2))




let arr1234 = [1, 2, 3, 4, 5]
let result = arr1234.filter(function (el) {
    return el % 2
})
console.log(result)



//


function likes(names) {
    const like = "likes this"
    if (names.length === 0) { return "no one like this" }
    for (const name of names) {
        if (name.length === 1) {
            return `${name} ${like}`
        } else if (name.length === 2) {
            arr.push(name).john("and")
        }
    }
}

/// анаграмма

let firstWord = "Логика";
let secondWord = "Иголка";

function anagramm(str, str1) {
    str = str.toLowerCase().split("").sort().join("")
    str1 = str1.toLowerCase().split("").sort().join("")
    if (str === str1) {
        return true
    } else {
        return false
    }
}

console.log(anagramm(firstWord, secondWord));


// гласные буквы количесиво
const sttr = "привет"
function volvesRes(str) {
    let count = 0
    const volves = ['а', 'я', 'о', 'ё', 'у', 'ю', 'э', 'е', 'и', 'ы']
    for (const item of str.toLowerCase()) {
        if (volves.includes(item)) {
            count++
        }
    }
    return count
}

console.log(volvesRes(sttr));


// гласные буквы, перечисление

const sttr1 = "привет"
function volvesC(str) {
    let newArr = []
    const volves = ['а', 'я', 'о', 'ё', 'у', 'ю', 'э', 'е', 'и', 'ы']
    for (const item of str.toLowerCase()) {
        if (volves.includes(item)) {
            newArr.push(item)
        }
    }
    return newArr.join(", ")
}

console.log(volvesC(sttr1));


//
