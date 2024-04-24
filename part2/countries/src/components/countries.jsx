import Weather from "./weather.jsx";

const CountryList = ({ country, showCountry }) => {
    return (
        <li>
            {country.name.common}
            <button onClick={showCountry}>Show</button>
        </li>
    )
}

const Language = ({language}) => {
    return (
        <li>{language}</li>
    )
}

const Country = ({country, weather}) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital {country.capital[0]}</p>
            <p>Area {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.keys(country.languages).map((language) => (
                    <Language key={language} language={country.languages[language]}/>
                ))}
            </ul>
            <img
                alt={country.flags.alt}
                src={country.flags.png}
            />
            <Weather country={country} weather={weather} />
        </div>
    )
}


const Countries = ({ countries, showCountry, weather }) => {
    if (!countries || countries.length === 0) {
        return (
            <>
                <p>No countries to show</p>
            </>
        )
    }
    if (countries.length > 10) {
        return (
            <>
                <p>Too many matches, please be more specific</p>
            </>
        )
    }
    if (countries.length === 1) {
        return (
            <>
                <Country country={countries[0]} weather={weather}/>
            </>
        )
    }
    return (
        <ul>
            {countries.map(country => <CountryList key={country.name.common} country={country} showCountry={()=>showCountry(country.name.common)} />)}
        </ul>
    )
}


export default Countries