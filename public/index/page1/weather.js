const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

getWeather = (coords) => {
  fetch(
    `${WEATHER_API}lat=${coords.lat}&lon=${
      coords.lng
    }&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .then(json => {
      document.querySelector(".information p:nth-child(2)").innerHTML = `${Math.floor(json.main.temp)} ℃`;
      document.querySelector(".information p:last-child").innerHTML = json.name;
    });
}


handleGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}


handleGeoFailure = () => {
  console.log("no location");
}


loadWeather = () => {
  const currentCoords = localStorage.getItem("coords");
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.getCurrentPosition(
      handleGeoSuccess,
      handleGeoFailure
    );
  }
}


init = () => {
  loadWeather();
}

init();