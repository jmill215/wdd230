const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7557&lon=6.6394&units=imperial&appid=7e9522959e20d24fed059475ea9cb697';

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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
