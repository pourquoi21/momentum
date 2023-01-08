import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherImg = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `icon/${data.weather[0].icon}.png`;
      weatherIcon.alt = "icon";
      weatherImg.appendChild(weatherIcon);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
