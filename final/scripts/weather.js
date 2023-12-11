// const temp = document.querySelector('#temp');
// const weatherIcon = document.querySelector('#weath-icon');
// const caption = document.querySelector('figcaption');
// const humidity = document.querySelector('#humid');

// const finalUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=imperial&appid=ff1561849be172f6f7573c3546d94809';

// async function apiFetch() {
//     try {
//         const response = await fetch(finalUrl);
//         if (response.ok) {
//             const data = await response.json();
//             // console.log(data);
//             displayResults(data);

//         }
//         else {
//             throw Error (await response.text());
//         }
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// function displayResults(data) {
//     temp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = data.weather[0].description;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     caption.textContent = `${desc}`;
//     humidity.innerHTML = `${data.main.humidity}`;

// }
// apiFetch();

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const dayTemp = document.querySelector('#day-temp');

const chamberUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=imperial&appid=ff1561849be172f6f7573c3546d94809';
const dailyUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=33.54&lon=-112.18&cnt=3&units=imperial&appid=ff1561849be172f6f7573c3546d94809'

async function apiFetch() {
    try {
        const response = await fetch(chamberUrl);
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

// async function apiFetchDaily() {
//     try {
//         const response = await fetch(dailyUrl);
//         if (response.ok) {
//             const dataDaily = await response.json();
//             // console.log(data);
//             displayResults(dataDaily);

//         }
//         else {
//             throw Error (await response.text());
//         }
        
//     } catch (error) {
//         console.log(error)
//     }
    
// }  

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

}

// function displayDailyForcast(dataDaily) {
    
//     dayTemp.innerHTML = `${dataDaily.list.temp.day.toFixed(0)} &deg;F`;
//     let dIcon = `https://openweathermap.org/img/w/${dataDaily.list.weather[0].icon}.png`;
//     let summ = dataDaily.list.weather[0].description;
//     dailyIcon.setAttribute('src',dIcon);
//     dailyIcon.setAttribute('alt',summ );
//     dailyCaption.textContent = `${summ}`;
// }

apiFetch();
