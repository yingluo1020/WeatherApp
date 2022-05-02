
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const row = document.querySelector('.row');
const forecast_title = document.querySelector('.forecast_title');
const details = document.querySelector('.details');
const details1 = document.querySelector('.details1');
const details2 = document.querySelector('.details2');
const details3 = document.querySelector('.details3');
const details4 = document.querySelector('.details4');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const icon1 = document.querySelector('.icon1 img');
const icon2 = document.querySelector('.icon2 img');
const icon3 = document.querySelector('.icon3 img');
const icon4 = document.querySelector('.icon4 img');

//Determine current location and genearte current and forecast wetaher data.
window.onload = () => {

    geoFindMe()

    //Get Current Loction Data from local saved data
    var mydata1 = JSON.parse(localStorage.getItem("mydata"));

    //Get City Data from local saved data
    var mydata2 = JSON.parse(localStorage.getItem("City"));

    //Get Forecast Data from local saved data
    var forecast = JSON.parse(localStorage.getItem("myforecast"));

    //Assign current weather information to the main card
    details.innerHTML = `
        <h5 class="my-3">${mydata2}</h5>
        <div class="my-3">${mydata1.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${mydata1.Temperature.Metric.Value}&deg;C</span>
        </div>
    `;

    const iconSrc = `img/icons/${mydata1.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if (mydata1.IsDayTime) {
        timeSrc = 'img/day.jpg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc)
    
    //Get Current and Future dates
    const tomorrow = new Date()
    tomorrow.setDate(new Date().getDate() + 1)

    const day1 = new Date()
    day1.setDate(new Date().getDate() + 2)
   
    const day2 = new Date()
    day2.setDate(new Date().getDate() + 3)

    const day3 = new Date()
    day3.setDate(new Date().getDate() + 4)


    //Assign weather information to the Forecast Cards

    //Card 1
    details1.innerHTML = `
        
        <h5 class="my-31">${tomorrow.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        <div class="my-31">${forecast.DailyForecasts[1].Day.IconPhrase}</div>
        <div class="display-4 my-41">
            <span><b>${((forecast.DailyForecasts[1].Temperature.Maximum.Value -32)*5/9).toFixed(1)}&deg;C</b></span>
            <br>
            <span>${((forecast.DailyForecasts[1].Temperature.Minimum.Value -32)*5/9).toFixed(1)}&deg;C</span>
        </div>
    `;

    const iconSrc1 = `img/icons/${forecast.DailyForecasts[1].Day.Icon}.svg`;
    icon1.setAttribute('src', iconSrc1);

    let timeSrc1 = null;
    if (mydata1.IsDayTime) {
        timeSrc1 = 'img/day.jpg';
    } else {
        timeSrc1 = 'img/night.svg';
    }
    time.setAttribute('src1', timeSrc1)

    //Card 2
    details2.innerHTML = `
        <h5 class="my-31">${day1.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        <div class="my-31">${forecast.DailyForecasts[2].Day.IconPhrase}</div>
        <div class="display-4 my-41">
            <span><b>${((forecast.DailyForecasts[2].Temperature.Maximum.Value -32)*5/9).toFixed(1)}&deg;C</b></span>
            <br>
            <span>${((forecast.DailyForecasts[2].Temperature.Minimum.Value -32)*5/9).toFixed(1)}&deg;C</span>
        </div>
    `;

    const iconSrc2 = `img/icons/${forecast.DailyForecasts[2].Day.Icon}.svg`;
    icon2.setAttribute('src', iconSrc2);

    let timeSrc2 = null;
    if (mydata1.IsDayTime) {
        timeSrc2 = 'img/day.jpg';
    } else {
        timeSrc2 = 'img/night.svg';
    }
    time.setAttribute('src2', timeSrc2)

    //Card 3
    details3.innerHTML = `
        <h5 class="my-33">${day2.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        <div class="my-33">${forecast.DailyForecasts[3].Day.IconPhrase}</div>
        <div class="display-4 my-43">
            <span><b>${((forecast.DailyForecasts[3].Temperature.Maximum.Value -32)*5/9).toFixed(1)}&deg;C</b></span>
            <br>
            <span>${((forecast.DailyForecasts[3].Temperature.Minimum.Value -32)*5/9).toFixed(1)}&deg;C</span>
        </div>
    `;

    const iconSrc3 = `img/icons/${forecast.DailyForecasts[3].Day.Icon}.svg`;
    icon3.setAttribute('src', iconSrc3);

    let timeSrc3 = null;
    if (mydata1.IsDayTime) {
        timeSrc3 = 'img/day.jpg';
    } else {
        timeSrc3 = 'img/night.svg';
    }
    time.setAttribute('src3', timeSrc3)

    //Card 4
    details4.innerHTML = `
        <h5 class="my-34">${day3.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        <div class="my-34">${forecast.DailyForecasts[4].Day.IconPhrase}</div>
        <div class="display-4 my-44">
            <span><b>${((forecast.DailyForecasts[4].Temperature.Maximum.Value -32)*5/9).toFixed(1)}&deg;C</b></span>
            <br>
            <span>${((forecast.DailyForecasts[4].Temperature.Minimum.Value -32)*5/9).toFixed(1)}&deg;C</span>
        </div>
    `;

    const iconSrc4 = `img/icons/${forecast.DailyForecasts[4].Day.Icon}.svg`;
    icon4.setAttribute('src', iconSrc4);

    let timeSrc4 = null;
    if (mydata1.IsDayTime) {
        timeSrc4 = 'img/day.jpg';
    } else {
        timeSrc4 = 'img/night.svg';
    }
    time.setAttribute('src4', timeSrc4)
};


//Update the UI information

const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;
    const Forecast1 = data.Forecast1;

    //Get Current and Future dates
    const tomorrow = new Date()
    tomorrow.setDate(new Date().getDate() + 1)

    const day1 = new Date()
    day1.setDate(new Date().getDate() + 2)
   
    const day2 = new Date()
    day2.setDate(new Date().getDate() + 3)

    const day3 = new Date()
    day3.setDate(new Date().getDate() + 4)

    //Update Details Template here

    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}&deg;C</span>
        </div>
    `;

    //Update the night/day & icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.jpg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc)

    //Update weather information for the forecast cards
    //Card 1
    details1.innerHTML = `
        
        <h5 class="my-31">${tomorrow.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        <div class="my-31">${Forecast1.DailyForecasts[1].Day.IconPhrase}</div>
        <div class="display-4 my-41">
            <span><b>${((Forecast1.DailyForecasts[1].Temperature.Maximum.Value -32)*5/9).toFixed(1)}&deg;C</b></span>
            <br>
            <span>${((Forecast1.DailyForecasts[1].Temperature.Minimum.Value -32)*5/9).toFixed(1)}&deg;C</span>
        </div>
    `;

    const iconSrc1 = `img/icons/${Forecast1.DailyForecasts[1].Day.Icon}.svg`;
    icon1.setAttribute('src', iconSrc1);

    //Card 2
    details2.innerHTML = `
        <h5 class="my-31">${day1.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        <div class="my-31">${Forecast1.DailyForecasts[2].Day.IconPhrase}</div>
        <div class="display-4 my-41">
            <span><b>${((Forecast1.DailyForecasts[2].Temperature.Maximum.Value -32)*5/9).toFixed(1)}&deg;C</b></span>
            <br>
            <span>${((Forecast1.DailyForecasts[2].Temperature.Minimum.Value -32)*5/9).toFixed(1)}&deg;C</span>
        </div>
    `;

    const iconSrc2 = `img/icons/${Forecast1.DailyForecasts[2].Day.Icon}.svg`;
    icon2.setAttribute('src', iconSrc2);

    //Card 3
    details3.innerHTML = `
        <h5 class="my-33">${day2.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        <div class="my-33">${Forecast1.DailyForecasts[3].Day.IconPhrase} </div>
       
        <div class="display-4 my-43">
            <span><b>${((Forecast1.DailyForecasts[3].Temperature.Maximum.Value -32)*5/9).toFixed(1)}&deg;C</b></span>
            <br>
            <span>${((Forecast1.DailyForecasts[3].Temperature.Minimum.Value -32)*5/9).toFixed(1)}&deg;C</span>
        </div>
    `;

    const iconSrc3 = `img/icons/${Forecast1.DailyForecasts[3].Day.Icon}.svg`;
    icon3.setAttribute('src', iconSrc3);


    //Card 4
    details4.innerHTML = `
        <h5 class="my-34">${day3.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        <div class="my-34">${Forecast1.DailyForecasts[4].Day.IconPhrase}</div>
        <div class="display-4 my-44">
            <span><b>${((Forecast1.DailyForecasts[4].Temperature.Maximum.Value -32)*5/9).toFixed(1)}&deg;C</b></span>
            <br>
            <span>${((Forecast1.DailyForecasts[4].Temperature.Minimum.Value -32)*5/9).toFixed(1)}&deg;C</span>
        </div>
    `;

    const iconSrc4 = `img/icons/${Forecast1.DailyForecasts[4].Day.Icon}.svg`;
    icon4.setAttribute('src', iconSrc4);

    //Remove the d-none class if present
    if (card.classList.contains('d-none')) {
      card.classList.remove('d-none');
    }
    if (row.classList.contains('d-none')) {
      row.classList.remove('d-none');
    }
    if (forecast_title.classList.contains('d-none')) {
      forecast_title.classList.remove('d-none');
    }

};

//Update City and weather information
const updateCity = async (city) => {
    
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    
    let Forecast1 = await getForecast(cityDets.Key);
    
    return { cityDets, weather, Forecast1 };

};

//Add event Listener
cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //Get City Value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //Uptade the UI with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});

