/* IMPORTED MODULES */

import { getLocationCoordinates } from "./api.js";
import { getWeather } from "./api.js";
import { render } from "./render.js";

/* GLOBAL VARIABLES */

const input = document.getElementById("search-bar");
const result = document.getElementById("result");

/* INPUT FUNCTION */

async function inputFunction() {

    /* GET LOCATION */

    let location = input.value;

    /* GET LOCATION COORDINATES */
    
    let coordinates = await getLocationCoordinates(location);

    /* GET WEATHER'S DATA */

    let data = await getWeather(coordinates);
    let currentTemperature = data.current['temperature_2m'];
    let currentWindSpeed = data.current['wind_speed_10m'];
    
    /* RENDERING */

    render(result, location);

    const wind = document.getElementById("wind");
    const temperature = document.getElementById("temperature");
    temperature.textContent = `Temperature: ${currentTemperature}°C`;
    wind.textContent = `Wind: ${currentWindSpeed}km/h`;

    /* CHANGE RESULT'S VISIBILITY */

    if (result.hidden) {
        result.hidden = false;
    }

}

/* INPUT EVENTS */

input.addEventListener("blur", () => inputFunction());


input.addEventListener("keydown", async (event) => {

    if (event.key == "Enter") {

        inputFunction();

    }

});

