// const firstName = 'Vladimir'
// const lastName = 'Shevshenko'
// const age = 27

// console.log('имя человека ' + firstName + ',а возраст ' + age);
// alert('имя человека ' + firstName + ',а возраст ' + age);
// const lastName = prompt('Ведите фамилию')
// alert(firstName + ' ' + lastName)

//1)Операторы

// const currentYear = 2020;
// const birthYear = 1993;

// const age = currentYear - birthYear;
// console.log(age)
// const a = 20
// let c = 32
// c += a
// console.log(c)


//2)типы данных
// const isProgrammer = true;
// const name = 'Vova';
// const age = 27;
// let x;
// console.log(typeof isProgrammer) //boolean
// console.log(typeof name)   //string
// console.log(typeof age)    //number
// console.log(typeof x)      //undefined
// console.log(typeof null)  //object or null

//3)приоритет операторов
// const fullAge = 27;
// const birthYear = 1993;
// const currentYear = 2020;

// const isFullAge = (currentYear - birthYear) >= fullAge; // у скобочек самый высокий приоритет ()
// console.log(isFullAge)


//4)Условные операторы
// const courseStatus = 'fail'; // ready, fail, peading

// if (courseStatus === 'ready') {
//    console.log('Курс уже готов')
// } else if (courseStatus == 'pending') {
//    console.log('Курс в разроботке')
// } else {
//    console.log('Курс не готов')
// }
// const isReady = false
// if (isReady) {
//    console.log('Все готово')
// } else {
//    console.log('Все не готово')
// }
//5)Тернарное выражение
// isReady ? console.log('все готово') : console.log('все не готово')

//6)Булевая логика

//7)Функции

// function calculateAge(year) {
//    return 2020 - year
// }

// function logInfoAbout(name, year) {
//    const age = calculateAge(year)

//    if (age > 0) {
//       console.log('Man ' + name + ' now hav age ' + age)
//    } else {
//       console.log('It is future')
//    }
// }

// logInfoAbout('Vova', 2022)

//8)Массивы
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars.length)//lenght длина массива

// console.log(cars[1])

// cars[0] = 'Porshe'

// cars[3] = 'Mazda' // либо [cars.lenght]
// console.log(cars)

//9) Циклы
const cars = ['Мазда', 'Мерседес', 'Форд']
// for (let i = 0; i < cars.length; i++) {
//    const car = cars[i]
//    console.log(car)
// }

for (let car of cars) {  // более новый способ
   console.log(car)
}