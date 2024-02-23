const apiKey = "9ae071a0c47cad6d4c6e6122035b7005";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "Block";
        document.querySelector(".weather").style.display = "None";
    }
    else{
        var data = await response.json();
    
        // console.log(data);
    
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/Mist.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }
    
        document.querySelector(".weather").style.display="Block";
        

    }



}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

// searchBox.addEventListener("keypress", ()=>{
//     checkWeather(searchBox.value);
// }) 

checkWeather();
