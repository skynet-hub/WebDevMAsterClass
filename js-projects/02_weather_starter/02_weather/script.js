document.addEventListener("DOMContentLoaded", () => {

    //Variables to work with to build this project
    const city = document.querySelector("#city-input");
    const weatherBtn = document.querySelector("#get-weather-btn");
    const cityName = document.querySelector("#city-name");
    const temperature = document.querySelector("#temperature");
    const description = document.querySelector("#description")
    const errorMessage = document.querySelector("#error-message")
    const weatherInfo = document.querySelector("#weather-info")

    const API_KEY = "49d5402850fd945872434d67ce8dfb63";

    //We want to work with the get weather button
    document.querySelector("#get-weather-btn").addEventListener("click", async () => {
        //get hold of the input field and if non return
        const weatherCity = city.value.trim()
        if (weatherCity === "") return;

        //Error can occur whenever you deal with API calls
        //Wrap around try and catch
        try {
            const cityData = await getWeatherData(weatherCity);
            displayWeatherInfo(cityData);
        } catch(error){
            showError()
        }


    })

    async function getWeatherData(city){
        //responsible for making API call and getting info
        const url = `
        https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
        `

        const response = await fetch(url);
        if (!response.ok){
            throw new Error("City not found")
        }
        const data = await response.json();

        return data
        console.log(data)
    }

    function displayWeatherInfo(data){
        //displays weather info
        const {name, main, weather} = data;

        cityName.textContent = name;
        temperature.textContent = `Temperature: ${Math.round(main.temp - 273.15, 2)}`;
        description.textContent = `Description: ${weather[0].description}`;

        //Unlock the display
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function showError(){
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }

})