/* GET LOCATION COORDINATES */

async function getLocationCoordinates(location) {

    let coordinates = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`);
    coordinates = await coordinates.json();

    /* ARRAY THAT CONTAINS LATITUDE AND LONGITUDE */

    let coords = [coordinates.results[0].latitude, coordinates.results[0].longitude];

    return coords

}

/* GET WEATHER */

async function getWeather(coordinates) {
    
    /* FETCH DATA */
    
    let data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m`)
    data = await data.json();
    
    return data;

}

export { getLocationCoordinates, getWeather };
