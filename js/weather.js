const API_KEY = ""

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ko&units=metric`
    console.log(url)
    fetch(url).then((response)=>response.json()).then(data => 
        { 
            const weather = document.querySelector("#weather span:last-child")
            const city = document.querySelector("#weather span:first-child")
            console.log(data)
            weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}'C`
            city.innerText = `${data.name} - ` 
            
        })
}

function onGeoError() {
    alert("Cant find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
