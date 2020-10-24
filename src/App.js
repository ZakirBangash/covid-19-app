import React,{useState,useEffect} from 'react';
import './App.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {InfoBox} from './InfoBox'
import {Table} from './Table'
import { Card,CardContent } from '@material-ui/core';
import {sortedData} from './utilis';
 import LineGraph from "./LineGraph";
 import LineExample from "./LineGraph";
 import {Map} from './Map'
 import "leaflet/dist/leaflet.css"

function App() {
const [countryCode, setCountryCode] = useState('worldwide');
const [countries, setCountries] = useState([]);
const [countriesInfo, setCountriesInfo] = useState({});
const [tableData, setTableData] = useState({});
const [zoom, setZoom] = useState(3);
const [center, setCenter] = useState({lat:34.80746,lng:-40.4796});
const [Circlecountries, setCircleCountries] = useState([]);


// useEffect to fetch the Global data when app is initiated
useEffect(() => {
  fetch("https://disease.sh/v3/covid-19/all")
  .then(response => response.json())
  .then(data => {
    console.log(data);
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
    
    setCircleCountries(data);

    // setting the countries info for selection of country
    setCountries(countries);
    
    /**
     * setting data for a table
     * calling sortedData function from utilis which will sort data
     */
    const sort = sortedData(data); 
    setTableData(sort);
  }
  
  // calling the above async function 
  getCountriesData();
 
}, [])




const handleChange = async (e) => {
  const onCountryCode = e.target.value;
 
  const url = onCountryCode === 'worldwide' ? `https://disease.sh/v3/covid-19/all`:`https://disease.sh/v3/covid-19/countries/${onCountryCode}`;
  const res = await fetch(url);
  const data = await res.json();
  setCenter([data.countryInfo.lat,data.countryInfo.long]);
  setZoom(4);
  console.log(data);

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
        <InfoBox title='Infected'
          cases={countriesInfo.todayCases}
          total={countriesInfo.cases}
        />
        <InfoBox title='Recovered'
          cases={countriesInfo.todayRecovered}
          total={countriesInfo.recovered}
        />
        <InfoBox title='Deaths' 
          cases={countriesInfo.todayDeaths}
          total={countriesInfo.deaths}
        />
        </div>

        <Map countries={Circlecountries} center={center} zoom={zoom} />

    </div>
    
    <Card className="app__right">
    <CardContent>
    <h3>Live Cases by Country</h3>
        <Table  countries={tableData}/>
        <LineExample /> 
    </CardContent>
    </Card>
    </div>
  );
}

export default App;

