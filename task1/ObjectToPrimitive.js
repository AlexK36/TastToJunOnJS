// Создайте объект Person с полями name и age. Напишите функцию, которая будет преобразовывать объект Person в строку, содержащую имя и возраст этого человека.
let person = {
    name: "Alex",
    age: 23,

}
let arr = []
function toString(obj) {
    for (key in obj) {
        arr.push(obj[key])
    }
    return arr.join(" ")
}

console.log(toString(person))
//Создайте объект Person с полями name и age. Напишите функцию, которая будет преобразовывать объект Person в строку, содержащую имя и возраст этого человека.

//В классе Car есть поле speed, которое представляет текущую скорость машины. Напишите функцию, которая будет преобразовывать объект Car в число, содержащее значение этой скорости.
let car = {
    speed: 20
}

function carSpeed(obj) {
    return car.speed
}

console.log(carSpeed(car))
//В классе Car есть поле speed, которое представляет текущую скорость машины. Напишите функцию, которая будет преобразовывать объект Car в число, содержащее значение этой скорости.

//Создайте класс Book с полями title и author. Напишите функцию, которая будет преобразовывать объект Book в строку, содержащую название и автора этой книги.
let book = {
    title: "Alise in Wonderland",
    author: "Alex Messi"
}
let arr2 = []
function toStringbook(obj) {
    for (key in obj) {
        arr2.push(obj[key])
    }
    return arr2.join(" ")
}

console.log(toStringbook(book))
//Создайте класс Book с полями title и author. Напишите функцию, которая будет преобразовывать объект Book в строку, содержащую название и автора этой книги.

//В классе Rectangle есть поля width и height, которые представляют ширину и высоту прямоугольника соответственно. Напишите функцию, которая будет преобразовывать объект Rectangle в число, содержащее площадь этого прямоугольника.
let rectangle = {
    width: 250,
    height: 150
}

function square(obj) {
    return (obj.width * obj.height)
}

console.log(square(rectangle))
//В классе Rectangle есть поля width и height, которые представляют ширину и высоту прямоугольника соответственно. Напишите функцию, которая будет преобразовывать объект Rectangle в число, содержащее площадь этого прямоугольника.

//Создайте объект Animal с полем name, представляющим имя животного, и полем age, представляющим возраст. Напишите функцию, которая будет преобразовывать объект Animal в строку, содержащую информацию о имени и возрасте этого животного.
let animal = {
    name: "dog",
    age: 20
}
let newArr = []

function infoAnimal(obj) {
    for (key in obj) {
        newArr.push(obj[key])
    }
    return newArr.join(" ")
}

console.log(infoAnimal(animal))
//Создайте объект Animal с полем name, представляющим имя животного, и полем age, представляющим возраст. Напишите функцию, которая будет преобразовывать объект Animal в строку, содержащую информацию о имени и возрасте этого животного.


// Задание урок 38 // Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк. Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let newArr = arr.sort()
    const a = [],
        b = [],
        c = [],
        result = []

    for (let i = 0; i < newArr.length; i++) {
        if (i < 3) {
            a.push(newArr[i])
        } else if (i < 6) {
            b.push(newArr[i])
        } else if (i < 9) {
            c.push(newArr[i])
        } else {
            result.push(newArr[i])
        }
    }
    let s = ""
    if (result.length == 0) {
        s = 'Оставшиеся студенты: -'
    } else {
        s = `Оставшиеся студенты: ${result.join(", ")}`
    }
    let allArr = [a, b, c, s]
    return allArr
}

// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк. Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.


// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.


let first = +prompt("Введите первое число")
let second = +prompt("Введите второе число")
alert(first + second)


//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
function readNumber(arg) {
    let result
    do {
        result = prompt("Введите число")
    } while (!isFinite(result))
    if (result === null || result == "") {
        return null
    }
    return +result
}

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.


//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
    let result = min + Math.random() * (max - min)
    return result
}

console.log(random(1, 5))

//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
//ТЕСТ ФУНКЦИИ
function foo(a, b) {
    const [first] = a;
    const { eng } = b;

    return `${first} ${eng}`;
}

const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' })

console.log(result)

// тест функции

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
    let newStr = str.toLowerCase()
    return newStr.includes("viagra") || newStr.includes("xxx")
}

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.


//Cоздайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

function truncate(str, maxLength) {
    let newStr = ""
    if (str.length <= maxLength) {
        return str
    } else {
        newStr += str.slice(0, maxLength - 1)
        return newStr + "…"
    }
}

// ИЛИ ЧЕРЕЗ ТЕРНАРНИК

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

//Cоздайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
    return +str.slice(1)
}

//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

//Какое будет выведено значение: let x = 5; alert( x++ ); ? //5 тк сначала выводится 5 а уже потом прибавляется на 1 если бы было ++x то вывело бы 6
//Чему равно такое выражение: [ ] + false - null + true ? //Nan тк [] при сложении можно представить как просто пустую строку
//Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?// 2
//Чему равна сумма [ ] + 1 + 2? // 12 тк происходит контакценация строк
//Что выведет этот код: alert("1"[0] )?  // 1
//Чему равно 2 && 1 && null && 0 && undefined ? //null
//Есть ли разница между выражениями? !!( a && b ) и (a && b)?  Да, одно будет булиновое из за !!
//Что выведет этот код: alert( null || 2 && 3 || 4 ); ? // вернет 3
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? // нет массивы всегда уникальны
//Что выведет этот код: alert( +"Infinity" ); ? просто Infinity
//Верно ли сравнение: "Ёжик" > "яблоко"? нет
// Чему равно 0 || "" || 2 || undefined || true || falsе ?  2