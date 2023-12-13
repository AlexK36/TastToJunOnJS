// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);


// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator() {

    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


// 1. Создайте конструктор "Пользователь", который принимает имя и возраст пользователя и сохраняет их в свойства объекта.

function User(name, age) {
    this.name = name,
        this.age = age,
        this.sayHi = function () {
            return "HI"
        }

}

const firstUser = new User("Alex", 23)

// 2. Добавьте метод к конструктору "Пользователь", который выводит информацию о пользователе (имя и возраст) в консоль.
console.log(firstUser.name)
console.log(firstUser.age)
// 3. Создайте двух пользователей с помощью конструктора "Пользователь" и выведите их информацию в консоль.
const secondUser = new User("Ira", 23)
console.log(secondUser.name)
console.log(secondUser.age)
// 4. Добавьте свойство к объекту пользователя с помощью конструктора "Пользователь" и выведите его значение в консоль.
console.log(firstUser.sayHi())
// 5. Создайте конструктор "Книга", который принимает название и автора книги и сохраняет их в свойства объекта.
function Book(name, author) {
    this.name = name,
        this.author = author
}
// 6. Создайте метод к конструктору "Книга", который выводит информацию о книге (название и автора) в консоль.
const book = new Book("Alise in Wonderland", "John///")

// 7. Создайте две книги с помощью конструктора "Книга" и выведите их информацию в консоль.
console.log(book.name)
console.log(book.author)
// 8. Измените свойство объекта книги с помощью конструктора "Книга" и выведите его значение в консоль.
book.name = "One hundreed"
console.log(book.name)
// 9. Создайте конструктор "Автомобиль", который принимает марку и цвет автомобиля и сохраняет их в свойства объекта.
function Auto(name, color) {
    this.name = name,
        this.color = color
}

// 10. Создайте метод к конструктору "Автомобиль", который выводит информацию об автомобиле (марку и цвет) в консоль.

const auto = new Auto("Volvo", "Red")

console.log(auto)