/* RENDER FUNCTION */

function render(result, location) {

    result.innerHTML = `<h2>${location}</h2>
                        <img src="assets/weather-windy-symbolic.svg" />
                        <p id="wind"></p>
                        <img src="assets/weather-temperature-symbolic.svg" />
                        <p id="temperature"></p>`

}

export { render }