let date = new Date();
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.second');
let hour, minute;

const MounthDock = document.querySelector('.Mounths');
const DateDock = document.querySelector('.Date');
const DayDock = document.querySelector('.Days');
let Mounth, Day, DateD;

const Welcome = document.querySelector('.Welcome');

const Days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пяница', 'Субота']
const Mounths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

function addZero(z) {
    return z > 9 ? z : '0' + z;
}
let TimeWord;
minute = date.getMinutes();
Day = date.getDay();
DateD = date.getDate();
Mounth = date.getMonth();
hour = date.getHours();
if (hour >= 0 && hour < 6) {
    TimeWord = 'night';
}
if (hour > 5 && hour < 12) {
    TimeWord = 'morning';
}
if (hour > 11 && hour < 18) {
    TimeWord = 'afternoon';
}
if (hour > 17 && hour <= 23) {
    TimeWord = 'evening';
}
let DateLanguage;
const DateJsonLanguage = new XMLHttpRequest();
let languageRUENflag;
DateJsonLanguage.open('GET', '../translate/date.json');
DateJsonLanguage.send();
DateJsonLanguage.onload = function () {
    DateLanguage=JSON.parse(DateJsonLanguage.response);
    console.log(DateLanguage);
    languageRUENflag=languageRUEN

    hours.innerHTML = addZero(date.getHours()) + ':';
    minutes.innerHTML = addZero(date.getMinutes()) + ':';
    DayDock.innerHTML =DateLanguage[4].Date[languageRUEN][date.getDay()] + ',';
    DateDock.innerHTML = ' ' + DateD;
    MounthDock.innerHTML = ' ' +DateLanguage[4].Mounth[languageRUEN][date.getMonth()];
    seconds.innerHTML = addZero(date.getSeconds());



    if (TimeWord == 'night') {
        Welcome.innerHTML =DateLanguage[1][languageRUEN] ; 
    }
    if (TimeWord == 'morning') {
        Welcome.innerHTML = DateLanguage[0][languageRUEN];
    }
    if (TimeWord == 'afternoon') {
        Welcome.innerHTML = DateLanguage[2][languageRUEN];
    }
    if (TimeWord == 'evening') {
        Welcome.innerHTML = DateLanguage[3][languageRUEN];
    }
};

setInterval(() => {
    date = new Date();
    if (hour != date.getHours()) {
        hour = date.getHours();
        hours.innerHTML = addZero(date.getHours()) + ':';
    }
    if (minute != date.getMinutes()) {
        minute = date.getMinutes();
        minutes.innerHTML = addZero(date.getMinutes()) + ':';
    }
    if (Day != date.getDay()) {
        Day = date.getDay();
        
    }
    if (DateD != date.getDate()) {
        DateD = date.getDate();
        DateDock.innerHTML = ' ' + DateD;
    }
    if (Mounth != date.getMonth()) {
        Mounth = date.getMonth();
        MounthDock.innerHTML = ' ' +DateLanguage[4].Mounth[languageRUEN][date.getMonth()];
    }
    if (hour >= 0 && hour < 6) {
        Welcome.innerHTML =DateLanguage[1][languageRUEN] ; 
        TimeWord = 'night';
    }
    if (hour > 5 && hour < 12) {
        Welcome.innerHTML = DateLanguage[0][languageRUEN];
        TimeWord = 'morning';
    }
    if (hour > 11 && hour < 18) {
        Welcome.innerHTML = DateLanguage[2][languageRUEN];
        TimeWord = 'afternoon';
    }
    if (hour > 17 && hour <= 23) {
        Welcome.innerHTML = DateLanguage[3][languageRUEN];
        TimeWord = 'evening';
    }
    if(languageRUEN!=languageRUENflag){
        DayDock.innerHTML =DateLanguage[4].Date[languageRUEN][date.getDay()] + ',';
        MounthDock.innerHTML = ' ' +DateLanguage[4].Mounth[languageRUEN][date.getMonth()];
        languageRUENflag=languageRUEN;
    }

    seconds.innerHTML = addZero(date.getSeconds());
}, 500);
