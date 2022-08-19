
// import axios from 'axios'
// let apiKey = "b7621d3f611fbc06bf48cc210f469027";
let apiKey = "af58f9550e517a9bfd3a9598fa63148f";
const TempAndWeather=document.querySelector(".TempAndWeather")
const WindSpeed=document.querySelector(".WindSpeed")
const Humidity=document.querySelector(".Humidity")
const InputCity=document.querySelector(".city")
// Город погода которого нужна
let city;
city=localStorage.getItem(1);
if(city==null){
    city = "Minsk"
}

InputCity.value=city
// Формируем url для GET запроса
let urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
const Weathers = new XMLHttpRequest();
let OBJWeather;

Weathers.open('GET', urlWeather);
Weathers.send();

Weathers.onload = function () {
   
   OBJWeather=JSON.parse(Weathers.response);
    TempAndWeather.innerHTML=`${OBJWeather.main.temp}°C ${OBJWeather.weather[0].description}`
    WindSpeed.innerHTML=`Wind speed: ${Math.floor(OBJWeather.wind.speed)} m/s`
    Humidity.innerHTML=`Humidity: ${OBJWeather.main.humidity}%`
}
InputCity.onblur=function(){
    console.log(InputCity.value)
    city=InputCity.value;
    localStorage.setItem(1,city);
    urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
    Weathers.open('GET', urlWeather);
    Weathers.send();
}