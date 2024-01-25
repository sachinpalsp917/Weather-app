const apiKey = "abd5aad302749a3023e04e323de84c96";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
// console.log(url);
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const res = await fetch(url + city + `&appid=${apiKey}`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Snow":
        weatherIcon.src = "images/snow.png";
        break;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
