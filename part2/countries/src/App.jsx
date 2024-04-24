import {useEffect, useState} from 'react'
import Countries from "./components/countries.jsx";
import countryService from './services/country.js'
import weatherService from './services/weather.js'

function App() {
    const [countrySearch, setCountrySearch] = useState('')
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [weather, setWeather] = useState(null)
    const api_key = import.meta.env.VITE_WEATHER_KEY

    const hook = () => {
        console.log('effect')
        countryService
            .getAll()
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response)
            })
    }
    useEffect(hook, [])

    // do not render anything if notes is still null
    if (!countries) {
        return null
    }

    useEffect(()=>{
        if (countries) {
            const filtered = countries.filter(country => country.name.common.toLowerCase().includes(countrySearch.toLowerCase()) )
            setFilteredCountries(filtered);
            if (filtered.length === 1) {
                console.log('getting weather')
                weatherService
                    .getWeather(filtered[0].capitalInfo.latlng[0], filtered[0].capitalInfo.latlng[1], api_key)
                    .then(response => {
                        console.log('weaatherpromise fulfilled')
                        setWeather(response)
                    })
            } else {
                setWeather(null)
            }
        }
    }, [countrySearch] )

    const searchCountry = (event) => {
        event.preventDefault()
        const newCountrySearch = event.target.value
        setCountrySearch(newCountrySearch)
        console.log(`searching ${newCountrySearch}`)
    }

    const showCountry = (name) => {
        const newCountrySearch = name
        setCountrySearch(newCountrySearch)
        console.log(`searching ${newCountrySearch}`)
    }


    return (
        <div>
            <h1>Countries</h1>
            <form onSubmit={(event) => event.preventDefault()}>
                Search country
                <input
                    value={countrySearch}
                    onChange={searchCountry}
                />
                <Countries countries={filteredCountries} showCountry={(name)=>showCountry(name)} weather={weather} setWeather={(weather)=>setWeather(weather)}/>
            </form>
        </div>
    )
}

export default App
