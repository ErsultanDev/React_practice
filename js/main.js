let storeName = "Azalia";

const storeDescription = {
    budget: 10000,
    employees: ['Zhemis', 'Asel', 'Tolkyn'],
    products: {
        alpenGold: 370,
        nestle: 400
    },
    open: true
};
// __________________________________________________________


/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


// __________________________________________________________________________________


function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(arr);
    console.log(result);
}

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) == "number") {
            data[i] *= 2;
        } else if (typeof(data[i]) == "string") {
            data[i] += " - done";
        }

    }
    console.log(data);
}

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let j = 0;
    for (let i = data.length - 1; i >= 0; i--) {
        result[j] = data[i];
        j++;
    }
    console.log(result);
}

// _________________________________________________________________
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)


// ________________________________________________________________

// Место для первой задачи
function sayHello(name) {
    return 'Привет, ' + name;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(num, times) {
    let result = `${num}`;
    let c = 0;
    if (typeof(times) == 'string' || times <= 0) return num;
    for (let i = 0; i < times - 1; i++) {
        c += num;
        result += `---${c+num}`;
    }
    console.log(result);
}

// __________________________________________________________

// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (typeof(a) === 'number' && a >= 0 && a % 1 === 0) {
        return `Объем куба: ${a*a*a}, площадь всей поверхности: ${(a*a)*6}`;
    } else return 'При вычислении произошла ошибка';
}

console.log(calculateVolumeAndArea(5.2));

// Место для второй задачи
function getCoupeNumber(place) {
    if (place === 0 || place > 36) {
        return "Таких мест в вагоне не существует";
    } else if (typeof(place) === 'number' && place >= 0 && place % 1 === 0) {
        return Math.ceil(place / 4);
    } else return "Ошибка. Проверьте правильность введенного номера места";
}


console.log(getCoupeNumber(0.22));


// __________________________________________________________

// Место для первой задачи
function getTimeFromMinutes() {

}

// Место для второй задачи
function findMaxNumber() {

}