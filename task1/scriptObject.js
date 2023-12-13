// console.log(NaN || 2 || undefined);  //2


// console.log(NaN && 2 && undefined); // NaN


// console.log(1 && 2 && 3); // 3



// console.log(!1 && 2 || !3); // false


// console.log(25 || null && !3); // 25


// console.log(NaN || null || !3 || undefined || 5); // 5
// false
// false   false   false    false   true
// console.log(NaN || null && !3 && undefined || 5);  // 5


// console.log(5 === 5 && 3 > 1 || 5);  // true

// let nameRgbKayboard = 50,
//     arrayError = 123

// console.log(nameRgbKayboard && arrayError || undefined)

// *
// **
// ***
// ****
// *****

// let result = ""                         ЗАДАЧА К УРОКУ ПРО ЦИКЛЫ
// for (let i = 0; i < 6; i++) {
//     result += "*"
//     console.log(result)
// }

// // 1 задача
// for (let i = 5; i <= 10; i++) {
//     console.log(i)
// }

// // 2 задача
// for (let i = 20; i >= 10; i--) {
//     if (i === 13) {
//         break
//     }
//     console.log(i)
// }

// // 3 задача
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 1) { continue }
//     console.log(i)
// }

// // 5 задача

// let arrNew = []
// for (let i = 5; i <= 10; i++) {
//     arrNew.push(i)
// }

// console.log(arr)

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i])
// }

// console.log(result)

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (i = 0; i < data.length; i++) {
//     if (typeof (data[i]) == "string") {
//         data[i] = data[i] + " - done"
//     }
//     else { data[i] = data[i] * 2 }

// }

// console.log(data)



// function trirdTask() {
//     const dataNum = [5, 10, 'Shopping', 20, 'Homework'];
//     return dataNum.reverse()

// }

// trirdTask()



// const lines = 6;
// let result1 = ""
// for (i = 0; i <= lines; i++) {
//     for (j = 0; j < lines - i; j++) {
//         result1 += " "
//     }
//     for (let k = 0; k < i * 2 - 1; k++) {
//         result1 += "*"
//     }
//     result1 += '\n';
// }
// console.log(result1)


function sayHello(name) {
    return `Привет, ${name}`
}


sayHello("Антон")


let arr = []
function returnNeighboringNumbers(arg) {

    for (let i = arg - 1; i < arg + 2; i++) {
        arr.push(i)
    }
    return arr
}

returnNeighboringNumbers(5)
console.log(arr)


let result = ""
function getMathResult(num, times) {
    if (typeof (num) !== "number" || times <= 0) {
        return num
    }

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            result += num * i
        } else {
            result += num * i + "---"
        }
    }
}
getMathResult(10, 1)
console.log(result)


function getCoupeNumber(coup) {
    if (!Number.isInteger(coup) || typeof (coup) !== "number" || coup < 0) {
        return `Ошибка. Проверьте правильность введенного номера места`
    }
    if (coup === 0 || coup > 36) {
        return "Таких мест в вагоне не существует"
    }

    return Math.ceil(coup / 4)
}


function getTimeFromMinutes(arg) {
    if (!Number.isInteger(arg) || arg < 0 || typeof (arg) !== "number") {
        return "Ошибка, проверьте данные"
    }
    let hour = Math.floor(arg / 60)
    let min = arg % 60
    let strHour = ''
    switch (hour) {
        case 0:
            strHour = "часов"
            break
        case 1:
            strHour = "час"
            break
        case 2:
        case 3:
        case 4:
            strHour = "часа"
            break
        default:
            strHour = "часов"
    }
    return `Это ${hour} ${strHour} и ${min} минут`
}



console.log(getTimeFromMinutes(0))




function findMaxNumber(a, b, c, d) {
    if (typeof (a) != "number" || typeof (b) != "number" || typeof (c) != "number" || typeof (d) != "number" || arguments.length < 4) {
        return 0
    }

    return Math.max(a, b, c, d)
}



function weatherInfo(temp) {
    var c = convert(temp)
    if (c > 0) {
        return (c + " is freezing temperature")
    }
    else {
        return (c + " is above freezing temperature")
    }
}

function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9)
    return temperature
}



let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (key in menu) {
        if (typeof (menu[key]) == "number") {
            menu[key] *= 2
        }
    }
}

console.log(multiplyNumeric(menu))

let maxLength = 5
let textHe = ""


function timedReading(maxLength, text) {
    let result = []
    for (let i = 0; i < text.length; i++) {
        if (maxLength < text[i]) {
            result.push(text[i])
        }
    }
    return result.length
}


let calculator = {
    read() {
        this.a = prompt("a?")
        this.b = prompt("b?")
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        this.a * this.b
    }
}


function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User("Jack")
// ФУНКЦИЯ ПОЗВОЛЯЮЩАЯ ПРИМИТИВНО КОПИРОВАЬ ОБЪЕКТ НЕ ПО ССЫЛКЕ
let objOne = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        x: 11,
        n: 10
    }
}
function cloneObject(obj) {
    let newObj = {}
    for (let key in obj) {
        newObj[key] = obj[key]
    }
    return newObj
}

let numbers = cloneObject(objOne)

console.log(numbers)
console.log(objOne)
// ФУНКЦИЯ ПОЗВОЛЯЮЩАЯ ПРИМИТИВНО КОПИРОВАЬ ОБЪЕКТ НЕ ПО ССЫЛКЕ


// Создайте объект person с полями name, age и address. Напишите функцию printInfo(obj), которая выводит информацию о человеке на консоль.

let person = {
    name: "John",
    age: 23,
    adress: "Saint-P"
}


function printInfo(obj) {
    console.log(person)
}

printInfo(person)
// Создайте объект person с полями name, age и address. Напишите функцию printInfo(obj), которая выводит информацию о человеке на консоль.

//Создайте массив объектов students с информацией о студентах: name, age, course. Напишите функцию printStudents(arr), которая выводит информацию о каждом студенте на консоль

let students = {
    firstStudent: {
        name: "Alex",
        age: 23,
        course: 5
    },
    secondStudent: {
        name: "Igor",
        age: 24,
        course: 4
    }
}

function printStudents(obj) {
    for (let key in obj) {
        console.log(students[key])
    }
}

printStudents(students)
//Создайте массив объектов students с информацией о студентах: name, age, course. Напишите функцию printStudents(arr), которая выводит информацию о каждом студенте на консоль

// Создайте функцию copyObject(obj), которая создает и возвращает копию объекта obj с помощью метода Object.assign().
let objTwo = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        x: 11,
        n: 10
    }
}
let newObj2 = {}
function copyObject(obj) {
    newObj2 = Object.assign({}, objTwo)
}

copyObject(objTwo)
console.log(objTwo)
console.log(newObj2)
// Создайте функцию copyObject(obj), которая создает и возвращает копию объекта obj с помощью метода Object.assign().

//Создайте функцию mergeObjects(obj1, obj2), которая вычисляет и возвращает объект, объединяющий все поля из объектов obj1 и obj2.

let obj3 = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        x: 11,
        n: 10
    }
}

let obj4 = {
    a: 1,
    b: 2,
    c: 3,

}
let newObj3 = {}
function mergeObjects(obj1, obj2) {
    newObj3 = Object.assign({}, obj1, obj2)
}
mergeObjects(obj3, obj4)

console.log(newObj3)

//Создайте функцию mergeObjects(obj1, obj2), которая вычисляет и возвращает объект, объединяющий все поля из объектов obj1 и obj2.

// Напишите функцию getProperties(obj), которая возвращает массив со всеми свойствами объекта obj.
let obj5 = {
    a: 1,
    b: 2,
    c: 3,

}

let arr3 = []
function getProperties(obj) {
    for (key in obj) {
        arr3.push(obj[key])
    }
    return arr3
}

getProperties(obj5)
console.log(arr3)
// Напишите функцию getProperties(obj), которая возвращает массив со всеми свойствами объекта obj.

//Создайте функцию changeObject(obj, prop, value), которая изменяет значение свойства prop у объекта obj на value.

let propTest = "a"

let obj6 = {
    a: 1,
    b: 2,
    c: 3,

}
function changeObject(obj, prop, value) {
    for (key in obj) {
        if (key == prop) {
            obj[key] = value
        }
    }
}


changeObject(obj6, propTest, 7)
console.log(obj6)
//Создайте функцию changeObject(obj, prop, value), которая изменяет значение свойства prop у объекта obj на value.

// Напишите функцию filterByAge(arr, age), которая фильтрует массив объектов arr по полю age и возвращает новый массив, содержащий только объекты с указанным возрастом.
let age1 = "age"
const players = [
    {
        name: 'Jason Mount',
        age: 15,
        country: 'Deutschland',
        number: '21',
        team: 'Manchester United',
        position: 'MF',
        goals: 4,
    },
    {
        name: 'Jason Mount',
        age: 25,
        country: 'Deutschland',
        number: '16',
        team: 'Manchester United',
        position: 'MF',
        goals: 0,
    },
    {
        name: 'Finne Bard',
        age: 10,
        country: 'Norwegen',
        number: '26',
        position: 'FW',
        team: 'Fulham United',
        goals: 1,
    }
]
function filterByAge(arr, age) {
    for (key in arr[0]) {
        arr.filter((num) => num[key] == age)

    }
}

filterByAge(players, age1)
console.log(players)

/// Напишите функцию filterByAge(arr, age), которая фильтрует массив объектов arr по полю age и возвращает новый массив, содержащий только объекты с указанным возрастом.  НЕ ПОЛУЧИЛАСЬ


//Создайте функцию countProperties(obj), которая подсчитывает количество свойств объекта obj и возвращает результат.

function countProperties(obj) {
    let count = 0
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++
        }
    } return count
}

//ИЛИ БОЛЕЕ БЫСТРЫЙ ВАРИАНТ

function countProperties(obj) {
    let count = Object.keys(obj).length
    return count
}

//Создайте функцию countProperties(obj), которая подсчитывает количество свойств объекта obj и возвращает результат.

//Напишите функцию isEmptyObject(obj), которая проверяет, является ли объект obj пустым (не содержит свойств) и возвращает булево значение.
function isEmptyObject(obj) {

    if (Object.keys().length === 0) {
        return false
    } else {
        return true
    }

}
//Напишите функцию isEmptyObject(obj), которая проверяет, является ли объект obj пустым (не содержит свойств) и возвращает булево значение.




//

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    return plan.skills.exp
}


console.log(showExperience(personalPlanPeter))


//

//Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

const someString = 'This is some strange string';

function reverse(str) {
    let strSplit = str.split("")
    let result = strSplit.reverse().join()
    return result
}


console.log(reverse(someString))

// Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.


//
let chuan = "CHY"
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = ""
    if (arr.length <= 0) {
        result = "Нет доступных валют"
    } else {
        result = "Доступные валюты:\n"
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === missingCurr) {
                continue
            }
            result += `${arr[i]}\n`
        }
        return result
    }
}

console.log(availableCurr(additionalCurrencies, chuan))
//  38 УРОК ПО КУРСУ Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20, //ширина
            length: 5 // длина
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let result = 0;
    for (let i = 0; i < data.shops.length; i++) {
        result += (((data.shops[i].width * data.shops[i].length) * data.height) * data.moneyPer1m3)
    }
    if (data.budget >= result) {
        return "Бюджета достаточно"
    } else {
        return "Бюджета недостаточно"
    }
}


console.log(isBudgetEnough(shoppingMallData))

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.



//Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна. Функция getMaxSubSum(arr) должна возвращать эту сумму.
let newArr = [-1, 2, 3, -9]
function getMaxSubSum(arr) {
    let maxSum = 0
    let parSum = 0
    for (let i = 0; i < arr.length; i++) {
        parSum += arr[i]
        if (parSum < 0) { parSum = 0 }
        maxSum = Math.max(maxSum, parSum)
    }
    return maxSum
}
// сначала даем промежуточной и максимально значения 0 проходим по массиву и в цикле считаем промежуточную + arr[i] если оно не меньше 0 то, сравниваем на Math.max максимальную и промежуточную и записываем большую в переменную maxSum, если меньше 0 промежуточная будет 0
console.log(getMaxSubSum(newArr))

//Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна. Функция getMaxSubSum(arr) должна возвращать эту сумму.



let num = []

console.log(Array.isArray(num))