const WeatherIcon = document.querySelector('#icon-weather');
const captionDesc = document.querySelector('#weather-desc');
const Temp = document.querySelector('#temp');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.77&units=imperial&appid=7e9522959e20d24fed059475ea9cb697';

async function apiFetch() { 
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}
apiFetch();


function displayResults(data) {
    Temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    WeatherIcon.setAttribute('src', iconsrc);
    WeatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
