

const fromEl = document.querySelector('#user-form')
const searchInputEl = document.querySelector('#citySearch')
const  resultContainer = document.querySelector('#weatherResults')
const  searchTermEl  = document.querySelector('#city-search')
const fiveDayContainer= document.querySelector('#five-day-forecast')

let today = moment();
//added submit button function to ccapture input
const submitButton  =function (e){
    e.preventDefault()

    var cityName = searchInputEl.value.trim();

    if(cityName) {
        weatherByCity(cityName);
        searchInputEl.value= " ";
    }else {
        alert('Please enter a City Name');
    }

    //console.log(e)
}

fromEl.addEventListener("submit", submitButton)


const weatherByCity = function (searchInput) {

let weatherApi =  "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&APPID=d1a98a17848dd5228d6e0d33fd081195&units=imperial"

fetch(weatherApi).then(function (response) {
    //console.log(response);
    response.json().then(function (data) {
      displayWeather(data, searchInput)
    });
  });
};

var displayWeather = function (data, searchInput) {
 console.log(data);
  //console.log(searchInput);
  resultContainer.textContent = " ";
  searchTermEl.textContent = searchInput

let weather = document.createElement('div')

let icon = ("<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png'>");;

weather.innerHTML = `
                <div class= "rows">    
                    <div class= "col-7  weather-card" > 
                        <h1> ${data.name} (${today.format("MMM Do YY")})  </h1>
                        <p> General Description: ${data.weather[0].description} ${icon} </p>
                        <p> Tempature: ${data.main.temp} °F </p>
                        <p> Wind Speed:  ${data.wind.speed} MPH</p>
                        <p> Humidity:  ${data.main.humidity}% </p>
                   
                    </div>
                </div>`;
 resultContainer.appendChild(weather) 
};




//weatherByCity("Phoenix");



//* we want to 
//*getcity name, 
//*the date, 
//*an icon representation of weather conditions, 
//*the temperature, 
//*the humidity, 
//*the wind speed, 
//*the UV index


//* 5-day forecast

//* need to save past searches to local storage




