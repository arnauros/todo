"use strict";

//input elements
const inputWeather = document.getElementById("inputWeather");
const findWeatherButton = document.getElementById("findWeatherButton");
// output elements
const temperatureOutput = document.getElementById("temperatureOutput");
const weatherOutput = document.getElementById("weatherOutput");
const weatherWrapperOutput = document.getElementById("weatherWrapperOutput");
//api key
const apiKey = "90f864214a654abeafc276df339dc7e8";

console.log("page loaded2");

findWeatherButton.addEventListener("click", function (e) {
  e.preventDefault();
  //get value by user
  let textWeatherInput = inputWeather.value;

  if (textWeatherInput === "") {
    alert("please add a city, pal");
    return;
  }
  //build the api url
  const apiURL = `https://api.weatherbit.io/v2.0/current?city=${textWeatherInput}&key=${apiKey}`;

  //fetch data
  fetch(apiURL)
    .then((response) => {
      //check if response comes back 200
      if (!response.ok) {
        throw new Error("fail");
      }
      return response.json();
    })
    .then((data) => {
      //process data logic and update DOM
      const temp = data.data[0].temp;
      const weatherDescription = data.data[0].weather.description;

      temperatureOutput.textContent = `${temp}°C`;
      weatherOutput.textContent = `${weatherDescription}`;
    })
    .catch((error) => {
      //handle erros
      console.error("there was a problem", error);
      alert("could not fetch");
    });
});
