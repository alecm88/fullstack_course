const Weather = ({weather, country}) => {
    if (!weather) {
        return (
            <>
                <p>Weather data not available</p>
            </>
        )
    }
    return (
        <div>
            <h3>Weather in {country.capital[0]}</h3>
            <p>Temperature {weather.current.temp} Celsius</p>
            <img
                alt={weather.current.weather[0].description}
                src={'https://openweathermap.org/img/wn/' + weather.current.weather[0].icon + '@2x.png'}
            />
            <p>Wind {weather.current.wind_speed} m/s</p>
        </div>
    )
}

export default Weather