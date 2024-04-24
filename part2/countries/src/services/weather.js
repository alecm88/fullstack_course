import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall'

const getWeather = (lat, lon, api_key) => {
    const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&units=metric&appid=${api_key}`)
    return request.then(response => response.data)
}

export default {
    getWeather
}