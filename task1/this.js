// 1. Создайте объект "автомобиль" с методом "завести", который будет выводить сообщение о том, что автомобиль завелся.
const automobile = {
    mark: "volvo",
    start: function () {
        console.log(`Автомобиль марки ${this.mark} завелся`)
    }
}

automobile.start()
// 2. Создайте объект "человек" с методом "приветствие", который будет выводить приветствие с именем человека.

const person = {
    name: "John",
    greeting: function () {
        console.log(`Привет ${this.name}!`)
    }
}

person.greeting()
// 3. Создайте объект "калькулятор" с методами "сложение", "вычитание", "умножение", "деление", которые будут выполнять соответствующие математические операции над числами.

const calc = {
    num1: 2,
    num2: 2,
    sum() {
        return this.num1 + this.num2
    },
    min() {
        return this.num1 - this.num2
    },
    multiplication() {
        return this.num1 * this.num2
    },
    del() {
        return this.num1 / this.num2
    }
}

console.log(calc.del())
console.log(calc.sum())
console.log(calc.multiplication())
console.log(calc.min())
// 4. Создайте объект "дом" с методом "построить", который будет выводить сообщение о том, что дом построен.
const house = {
    stage: "построен",
    ready() {
        console.log(`Дом ${this.stage}`)
    }
}

house.ready()

// 5. Создайте объект "телевизор" с методами "включить", "выключить", которые будут выводить соответствующие сообщения.
const tel = {
    turnOn: function () {
        console.log("Телевизор включен")
    },
    turnOff: function () {
        console.log("Телевизор выключен")
    }
}

tel.turnOff()
tel.turnOn()
// 6. Создайте объект "ученик" с методом "привет", который будет выводить сообщение о том, что ученик приветствует своего учителя.
const student = {
    nameTeach: "Ann",
    student: "Alex",
    hello: function () {
        console.log(`Студен ${this.student} попрощался с учителем ${this.nameTeach}`)
    },
    bye: function () {
        console.log(`Студен ${this.student} попривествовал учителя ${this.nameTeach}`)
    }
}

student.hello()
student.bye()
// 7. Создайте объект "магазин" с методом "продать", который будет выводить сообщение о том, что товар был продан.
const magazine = {
    sell: function () {
        console.log("Товар продан")
    }
}

magazine.sell()
// 8. Создайте объект "питомец" с методом "покормить", который будет выводить сообщение о том, что питомец был покормлен.

const pet = {
    pet: "Chip",
    giveFood: function () {
        console.log(`Питомец ${this.pet} покормлен`)
    }
}

pet.giveFood()
// 9. Создайте объект "мастер" с методом "поиграть", который будет выводить сообщение о том, что мастер поиграл на своем музыкальном инструменте.

const master = {
    instr: "Скрипка",
    master: "John",
    play() {
        console.log(`Мастер ${this.master} поиграл на инструменте ${this.instr}`)
    }
}

master.play()
// 10. Создайте объект "учитель" с методом "объяснить", который будет выводить сообщение о том, что учитель объясняет урок.

const teacher = {
    lesson: "Математика",
    teacher: "Джон",
    exsplain() {
        console.log(`Учител ${this.teacher} объяснил урок ${this.lesson}`)
    }
}

teacher.exsplain()
// "use strict"

function getSum(a, b) {
    function sum() {
        console.log(this.a + this.b);
    }

    console.log(sum());
}

getSum(4, 5);
