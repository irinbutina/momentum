const weather = document.querySelector('.weather');
const weatherIcon = weather.querySelector('.weather-icon');
const temperature = weather.querySelector('.temperature');
const weatherDescription = weather.querySelector('.weather-description');
const wind = weather.querySelector('.wind');
const humidity = weather.querySelector('.humidity');
const city  = document.querySelector('.city');
const weatherError  = document.querySelector('.weather-error');
// localStorage.clear()

city.value = !localStorage.getItem('city') ? 'Минск' : localStorage.getItem('city');  

function error() {

  weatherError.textContent = `Error! city not found for '${city.value}'!`; 
  weatherIcon.className = 'weather-icon owf';
  // weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = ``;
  weatherDescription.textContent = ``;
  wind.textContent = ``;
  humidity.textContent = ``;
} 

async function getWeather() {  
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=7ad73724e1f5458e9e5a21f6800a1841&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} м/с`;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;
    weatherError.textContent = ``;
  } catch {
    // localStorage.setItem('city', city.value);
    // weatherError.textContent = `Error! city not found for '${city.value}'!`; 
    error();
  }
}

city.addEventListener('change', getWeather)


function setLocalStorage() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}

window.addEventListener('load', getLocalStorage) 


export {getWeather}