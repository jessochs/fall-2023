// let temperature = document.querySelector('#temp');
// let windSpeed = document.querySelector('#speed');

let temperature = 40;
let windSpeed = 8;

if(temperature <= 50 && windSpeed > 3) {
    windChill = Math.floor(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));

}
else {
    windChill = "n/a"
}

document.querySelector("#windChill").textContent = windChill;