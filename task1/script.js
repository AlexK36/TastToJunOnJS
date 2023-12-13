

let numberOfFilms

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start()
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--
        }
    }
}

rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель")
    } else if (personalMovieDB > 30) {
        alert("Вы киноман")
    } else {
        alert("Произошла ошибка")
    }
}
detectPersonalLevel()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i - 1] = genre
    }
}

writeYourGenres()


// код Ильи
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};
let { openNow } = restorantData;
function isOpen(openNow) {
    let answer = '';

    openNow ? answer = 'Открыто' : answer = 'Закрыто'

    return answer;
}

console.log(isOpen(openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    average = +average.slice(0, -1)
    if ((+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1)) > average) {
        return 'Цена выше средней';
    } else {
        return 'Цена ниже средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.waitors[0] = { name: 'Mike', age: 32 };
    return copy;
}

transferWaitors(restorantData)