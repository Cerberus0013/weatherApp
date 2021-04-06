
const searchInputEl = document.getElementById('citySearch')



//searchInputEl = document.addEventListener('submit', function(){


const weatherByCity = function (searchInput) {

let weatherApi =  "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput +  "&APPID=d1a98a17848dd5228d6e0d33fd081195"

fetch(weatherApi).then(function (response) {
    console.log(response);
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

weatherByCity("Phoenix");



