//Завдання 1 (мінімум)
/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */
const car = {
    manufactor: "Chevrolet",
    model: "Baguet",
    manufacturingYear: "2012",
    averageSpeed: "110km/h",
    fuelCapacity: "61 l",
    fuelConsumption: "12.2 l/100km"
};

// task 1.2
// Додавання ім’я водія у список
car.driver = "Dale";
console.log(car);

// task 1.3
// Перевірка водія на наявність його ім’я у списку
if (car.hasOwnProperty('driver')) {
    console.log(`Водія звуть ${car.driver}`);
}
else {
    let name = prompt('Давайте додамо водія');
    car.driver = name;
}

//task 1.1
// Метод, який виводить на екран інформацію про автомобіль.
document.getElementById("stat1").innerHTML = "Виробник: " + car.manufactor;
document.getElementById("stat2").innerHTML = "Модель: " + car.model;
document.getElementById("stat3").innerHTML = "Рік випуску: " + car.manufacturingYear;
document.getElementById("stat4").innerHTML = "Середня швидкість: " + car.averageSpeed;
document.getElementById("stat5").innerHTML = "Ємність паливного бака:  " + car.fuelCapacity;
document.getElementById("stat6").innerHTML = "Витрата палива на 100км: " + car.fuelConsumption;
document.getElementById("stat7").innerHTML = "Ім'я водія:  " + car.driver;

//task 1.4
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
let distance = +prompt('Вкажіть відстань в км');
function resourceCounter(distance) {
    let time = (distance / this['averageSpeed']);
    time = Math.floor(time + (time / 4));
    let fuel = ((100 * this['fuelConsumption']) / this['averageSpeed']);
    fuel = Math.ceil((distance / 100) * fuel);
    return console.log(`Цю відстань ви проїдете за ${time} годин, Вам знадобиться ${fuel} літрів пального`)
}

// normal
// task 1
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

// task 1.2
// Зміни часу на передану кількість секунд.
function addSec(sec) {
    if (sec < 0 || isNaN(sec)) {
        alert('error');
    }
    else if (sec < 60) {
        time.seconds = time.seconds + sec;
    }
    else if (sec === 60) {
        time.minutes = time.minutes + 1;
    }
    else if (sec > 60 && sec < 3600) {
        time.minutes = time.minutes + Math.floor(sec / 60);
        sec = sec % 60;
    }
}
addSec(234);

//
// Зміни часу на передану кількість хвилин.
function addMin(min) {
    if (min < 0 || isNaN(min)) {
        alert('error')
    } else if (min < 60) {
        time.minutes = time.minutes + min;
    } else if (min === 60) {
        time.hours = time.hours + 1;
    } else if (min > 60 && min < 1440) {
        time.hours = time.hours + Math.floor(min / 60);
        min = min % 60;
    }
}
addMin(145);

// Зміни часу на передану кількість годин.
function addHour(hour) {
    if (hour < 0 || isNaN(hour)) {
        alert('error')
    } else if (hour < 24) {
        time.hours = time.hours + hour;
    } else if (hour >= 24) {
        hour = hour % 24;
    }
}
addHour(5);

//task 1.1
// Для виведення часу на екран.
document.getElementById("hours").innerHTML = time.hours;
document.getElementById("minutes").innerHTML = time.minutes;
document.getElementById("seconds").innerHTML = time.seconds;
