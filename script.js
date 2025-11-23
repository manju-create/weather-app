const button=document.getElementById("searchButton");

async function getWeather(city){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d3a30f0ffd3626405decb17112e31e8&units=metric`);
    const data=await response.json();
    const weather=data.main.temp;
    console.log(`The temperature in ${city} is ${weather}°C`);
}

button.addEventListener("click",function(){
    var city=document.getElementById("inputField").value;

    getWeather(city);
});