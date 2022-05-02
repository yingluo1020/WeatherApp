//API Key for the AccuWeather API.
const key = 'GKxAVDr2PvoiSISEz7j7umqDPBbeHMzL';

//Get Forecast Weather Information
const getForecast = async (id) => {

  const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data;

};

//Get Current Weather Information
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();


  return data[0];
};


//Get City Information

const getCity = async (city) => {


  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};


//Find my current location
function geoFindMe() {

  function success(position) {
    if (card.classList.contains('d-none')) {
      card.classList.remove('d-none');
    }
    if (row.classList.contains('d-none')) {
      row.classList.remove('d-none');
    }
    if (forecast_title.classList.contains('d-none')) {
      forecast_title.classList.remove('d-none');
    }

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const ini_1 = String(latitude);
    const ini_2 = String(longitude);
    const ini = ini_1 + "," + ini_2;

    return getInitialCity(ini)
  }

  function error() {
    const textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    const textContent = 'Geolocation is not supported by your browser';
  } else {
    const textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

//Get the Current City Location based on the geoFindMe() function. Then store locally the current and the dorcast weather data.
const getInitialCity = async (ini) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search';
  const query = `?apikey=${key}&q=${ini}`;

  const response = await fetch(base + query);
  const data1 = await response.json();

  const base1 = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query1 = `${data1.Key}?apikey=${key}`;

  const response1 = await fetch(base1 + query1);
  const data2 = await response1.json();

  //Store Localy Data about the current Location
  localStorage.setItem("mydata", JSON.stringify(data2[0]));
  localStorage.setItem("City", JSON.stringify(data1.EnglishName));

  //Get Forecast Information for the Current Location
  const base2 = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const query2 = `${data1.Key}?apikey=${key}`;

  const response2 = await fetch(base2 + query2);
  const data3 = await response2.json();

  //Store localy the forecast weather data for current location
  localStorage.setItem("myforecast", JSON.stringify(data3));

  return data1.Key;
};

