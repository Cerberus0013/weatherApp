

const fromEl = document.querySelector('#user-form')
const searchInputEl = document.querySelector('#citySearch')

//added submit button function to ccapture input
const submitButton  =function (e){
    e.preventDefault()
    console.log(e)
}

fromEl.addEventListener("submit", submitButton)


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



