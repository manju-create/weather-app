const button = document.getElementById("searchButton");
var city = document.getElementById("inputField").value;

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d3a30f0ffd3626405decb17112e31e8&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const weather = await data.main.temp;
    const resultingCity = await data.name;
    const description = await data.weather[0].description;
    document.querySelector(".result").innerHTML = `
<h2> ${resultingCity}</h2>
<h3> ${Math.round(weather)}°C</h3>


<p> ${description}</p>`;
    changebg(weather);
    // After successful search
document.getElementById("inputField").value = "";
  } catch (error) {
    console.log(error.message);
     document.querySelector(".result").innerHTML = `
<h2 style="color: red;"> City not found</h2>`;
  }
}
inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var city = document.getElementById("inputField").value;

    getWeather(city);
  }
});

button.addEventListener("click", function () {
  var city = document.getElementById("inputField").value;

  getWeather(city);
});
function changebg(weather) {
  if (weather > 30) {
    document.body.style.backgroundImage = "url('hot.jpeg')";
  } else if (weather > 20) {
    document.body.style.backgroundImage = "url('warm.jpeg')";
  } else if (weather > 0||weather<0) {
    document.body.style.backgroundImage = "url('cold.jpeg')";
  }
}
