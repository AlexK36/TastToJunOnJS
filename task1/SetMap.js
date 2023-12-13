//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
function unique(arr) {
    return Array.from(new Set(arr))
}

console.log(unique(values))

//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join(""); // получили строку с отсортированными буквами чтобюы к примеру nap и PAN выглядели одинаково "anp"
        obj[sorted] = arr[i]; // присвоим ключю obj[sorted] значение arr[i] К примеру в 1 будет anp: nap Во 2 aceehrst: teachers
    }

    return Object.values(obj); //выводит массив со значениями obj
}

console.log(aclean(words))

//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.