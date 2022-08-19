let date = new Date();
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".second");
let hour, minute;

const MounthDock = document.querySelector(".Mounths");
const DateDock = document.querySelector(".Date");
const DayDock = document.querySelector(".Days");
let Mounth, Day, DateD;

const Welcome = document.querySelector(".Welcome");

const Days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пяница', 'Субота']
const Mounths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

function addZero(z) {
    return z > 9 ? z : '0' + z;
}


minute = date.getMinutes();
hour = date.getHours();
Day = date.getDay();
DateD = date.getDate();
Mounth = date.getMonth();


hours.innerHTML = addZero(date.getHours()) + ':'
minutes.innerHTML = addZero(date.getMinutes()) + ':'
DayDock.innerHTML = Days[date.getDay()]+",";
DateDock.innerHTML=' '+DateD ;
MounthDock.innerHTML=' '+Mounths[date.getMonth()];
seconds.innerHTML = addZero(date.getSeconds())

let TimeWord;

if(hour >= 0 && hour < 6){
    Welcome.innerHTML="Спокойной ночи"
    TimeWord='night'
}
if(hour > 5 && hour < 12){
    Welcome.innerHTML="Доброе утро"
    TimeWord='morning'
}
if(hour > 11 && hour < 18 ){
    Welcome.innerHTML="Добрый день"
    TimeWord='afternoon'
}
if(hour > 17 && hour <=23){
    Welcome.innerHTML="Добрый вечер"
    TimeWord='evening'
}



setInterval(() => {
    date = new Date();
    if (hour != date.getHours()) {
        hour = date.getHours()
        hours.innerHTML = addZero(date.getHours()) + ':'
    }
    if (minute != date.getMinutes()) {
        minute = date.getMinutes()
        minutes.innerHTML = addZero(date.getMinutes()) + ':'
    }
    if (Day != date.getDay()) {
        Day = date.getDay();
        DayDock.innerHTML = Days[date.getDay()]+',';
        
    }
    if (DateD != date.getDate()) {
        DateD = date.getDate();
        DateDock.innerHTML=' '+DateD ;
    }
    if (Mounth != date.getMonth()) {
        Mounth = date.getMonth();
        MounthDock.innerHTML= ' '+Mounths[date.getMonth()];
    }
    if(hour >= 0 && hour < 6){
        Welcome.innerHTML="Спокойной ночи"
        TimeWord='night'
    }
    if(hour > 5 && hour < 12){
        Welcome.innerHTML="Доброе утро"
        TimeWord='morning'
    }
    if(hour > 11 && hour < 18 ){
        Welcome.innerHTML="Добрый день"
        TimeWord='afternoon'
    }
    if(hour > 17 && hour <=23){
        Welcome.innerHTML="Добрый вечер"
        TimeWord='evening'
    }
    seconds.innerHTML = addZero(date.getSeconds())
}, 500);