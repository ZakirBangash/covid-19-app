import React,{useState,useEffect} from 'react';
import './App.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {InfoBox} from './InfoBox'
import {Table} from './Table'

function App() {
const [countryCode, setCountryCode] = useState('worldwide');
const [countries, setCountries] = useState([]);
const [countriesInfo, setCountriesInfo] = useState({});


// useEffect to fetch the Global data when app is initiated
useEffect(() => {
  fetch("https://disease.sh/v3/covid-19/all")
  .then(response => response.json())
  .then(data => {
    setCountriesInfo(data);
  })
 
}, [])





useEffect(() => {
    async function getCountriesData() {
    const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
    const data = await res.json();
    const countries = data.map(country => (
      {
        name:country.country,
        value:country.countryInfo.iso3
      }
    ));

    // setting the countries info for selection of country
    setCountries(countries);
  }
  
  // calling the above async function 
  getCountriesData();
 
}, [])




const handleChange = async (e) => {
  const onCountryCode = e.target.value;
 
  const url = onCountryCode === 'worldwide'? `https://disease.sh/v3/covid-19/all`:`https://disease.sh/v3/covid-19/countries/${countryCode}`;
  const res = await fetch(url);
  const data = await res.json();
  setCountryCode(onCountryCode);
  setCountriesInfo(data);
}


  return (
    <div className="app">
      <div className="app__left">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>

      <FormControl> 
        <Select
          value={countryCode}
          variant='outlined'
          onClick={handleChange}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
        {
          countries.map((country,ind) =>(
            <MenuItem key={ind} value={country.value}>{country.name}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title='Infected' />
        <InfoBox title='Recovered' />
        <InfoBox title='Deaths' />
        </div>

    </div>
    
    <div className="app__right">
    <h3>Live Cases by Country</h3>
        <Table />
    </div>
    </div>
  );
}

export default App;

