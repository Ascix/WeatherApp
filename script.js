
const search = document.querySelector('#search')
const item = document.querySelector('#item')

// render weather when zip code is submitted
search.addEventListener('submit', (event) => {
    event.preventDefault();
    const apiKey = "c89127d7e8a86bf8912bc7690d138d7b"
    const zipCode = item.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`)
        .then(res => res.json())
        .then(function(data){
            renderWeather(data)
        })
    search.reset();
})

// render weather with API information
function renderWeather(data) {
    const city = data.name
    const description = data.weather[0].description
    const icon = data.weather[0].icon
    const temp = Math.round(1.8 * (data.main.temp - 273) + 32)
    const high = Math.round(1.8 * (data.main.temp_max - 273) + 32)
    const low = Math.round(1.8 * (data.main.temp_min - 273) + 32)
    const weatherCode = `<div class="city">
        <h1>
            ${city}
        </h1>
    </div>
    <div class="description">
        ${description}
    </div>
    <div class="icon">
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="50" height="50">
    </div>
    <div class="temp">
            ${temp}°
    </div>
    <div class="range">
        <div class="high">
            H:${high}°
        </div>
        <div class="low">
            L:${low}°
        </div>
    </div>`
    document.querySelector("#weather").innerHTML = weatherCode
}