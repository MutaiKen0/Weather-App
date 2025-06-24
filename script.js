// script.js
import { apiKey } from './config.js';
const apiKey = 'YOUR_API_KEY'; // Replace with your actual key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    
    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert('City not found!');
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

function displayWeather(data) {
  document.getElementById('cityName').textContent = data.name;
  document.getElementById('temp').textContent = Math.round(data.main.temp);
  document.getElementById('humidity').textContent = data.main.humidity;
  document.getElementById('weather').textContent = data.weather[0].main;
}
// Add to displayWeather()
const iconCode = data.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
document.getElementById('weatherIcon').innerHTML = `<img src="${iconUrl}">`;
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});