const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=33.54&lon=-112.18&units=imperial&appid=ff1561849be172f6f7573c3546d94809';

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);

        }
        else {
            throw Error (await response.text());
        }
        
    } catch (error) {
        console.log(error)
    }
    
}  

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch()