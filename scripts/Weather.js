// import axios from 'axios'
let apiKey = 'af58f9550e517a9bfd3a9598fa63148f';
// let apiKey = "b7621d3f611fbc06bf48cc210f469027";
const TempAndWeather = document.querySelector('.TempAndWeather');
const WindSpeed = document.querySelector('.WindSpeed');
const Humidity = document.querySelector('.Humidity');
const InputCity = document.querySelector('.city');

const WeatherJsonLanguage = new XMLHttpRequest();

WeatherJsonLanguage.open('GET', '../translate/Weather.json');
WeatherJsonLanguage.send();

let city;
city = localStorage.getItem(1);
if (city == null||city == ''||city == 'undefined') {
    city = 'Minsk';
}
InputCity.value = city;
console.log(localStorage.getItem(1));
const Weathers = new XMLHttpRequest();
let OBJWeather;
WeatherJsonLanguage.onload = function () {
    const WatherLanguage = JSON.parse(WeatherJsonLanguage.response);
    console.log(WatherLanguage);

    let urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
    
    // Формируем url для GET запроса


    Weathers.open('GET', urlWeather);
    Weathers.send();

    function changeWeather() {
        TempAndWeather.innerHTML = `${OBJWeather.main.temp}°C `;
        if (languageRUEN == 'ru') {
            TempAndWeather.innerHTML =
                TempAndWeather.innerHTML + OBJWeather.weather[0].description;
            InputCity.placeholder = '[напишите свой город]';
        } else {
            TempAndWeather.innerHTML =
                TempAndWeather.innerHTML + OBJWeather.weather[0].main;
            InputCity.placeholder = '[enter the city]';
        }

        WindSpeed.innerHTML = `${WatherLanguage[1][languageRUEN]}: ${Math.floor(
            OBJWeather.wind.speed
        )} ${WatherLanguage[2][languageRUEN]}`;
        Humidity.innerHTML = `${WatherLanguage[0][languageRUEN]}: ${OBJWeather.main.humidity}%`;
    }

    Weathers.onload = function () {
        OBJWeather = JSON.parse(Weathers.response);
        
        changeWeather()
        console.log(OBJWeather);
    };
    InputCity.onblur = function () {
        city = InputCity.value;
        localStorage.setItem(1, city);
        urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
        Weathers.open('GET', urlWeather);
        Weathers.send();
    };
    language.onchange = function () {
        changeWeather()
    };
};
// Город погода которого нужна
