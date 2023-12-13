const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const humidity = document.querySelector('#humid');
const tempMax = document.querySelector('#max-temp');

const finalUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=imperial&appid=ff1561849be172f6f7573c3546d94809';
const tomorrowUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&cnt=28&appid=ff1561849be172f6f7573c3546d94809&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(finalUrl);
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
    humidity.innerHTML = `${data.main.humidity} &deg;F`;
    tempMax.innerHTML = `${data.main.temp_max.toFixed(0)} &deg;F`;

    
    
}


apiFetch();

// Banner button
let hoy = new Date();
let semana = hoy.getDay()
let message;

if (semana >=1 && semana <= 3) {
	
    message = '☀️ The maximum temperature for the day is: ';
    document.querySelector('#message').textContent = message; 

    let closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");

    closeButton.addEventListener('click', function() {
    let removeBanner = document.querySelector("#remove-banner");
    removeBanner.remove();
    bannerElement.style.display = 'none'
    });

let bannerElement = document.querySelector("#banner");
bannerElement.appendChild(closeButton);
}

// next day forecast



async function tomorrowFetch() {
    try {
        const response = await fetch(tomorrowUrl);
        if (response.ok) {
            const dataTomorrow = await response.json();
            // console.log(data);
            displayNextDay(dataTomorrow);

        }
        else {
            throw Error (await response.text());
        }
        
    } catch (error) {
        console.log(error)
    }
}

tomorrowFetch();

function displayNextDay(dataTomorrow) {
    const tomorrowList = dataTomorrow.list;
    const showNextDay = document.getElementById('next-container');

    const dailyTemps = {};

    const todayIndex = new Date().getDay();

    tomorrowList.forEach((dailyValue) => {
        const timestamp = dailyValue.dt;
        const date = new Date(timestamp * 1000);
        const dayIndex = date.getDay();

        if (dayIndex === todayIndex ) {
            return;
        }

        const day = date.toLocaleDateString('en-Us', {weekday: 'long'});

        if (!dailyTemps[day]) {
            dailyTemps[day] = {
                temperature: dailyValue.main.temp,
                icon: dailyValue.weather[0].icon,
                description: dailyValue.weather[0].description,            
            };
        }
    });

    let dayCount = 0;
    for (const day in dailyTemps) {
        if (dayCount >=1) {
            break;
        }
    

        const temperatures = dailyTemps[day];
        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecast-day') 

        const iconsrc = `https://openweathermap.org/img/w/${temperatures.icon}.png`;
        // const iconsrc = 'https://openweathermap.org/img/wn/${temperatures.icon}.png';
        let forecastName = document.createElement('h4');
        forecastName.textContent = `${day}:`;
        let temps = document.createElement('p');
        temps.textContent = `${temperatures.temperature.toFixed(0)} °F`;

        let forecastDesc = document.createElement('p');
        forecastDesc.textContent = temperatures.description;

        let forecastIcon = document.createElement('img');
        forecastIcon.setAttribute('src', iconsrc);
        forecastIcon.setAttribute('alt', 'icon image')

        forecastDay.append(forecastName);
        forecastDay.append(temps);
        forecastDay.append(forecastIcon);
        forecastDay.append(forecastDesc);

        showNextDay.appendChild(forecastDay);

        dayCount++;

    }
}






