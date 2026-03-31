import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([])
  const handleVisitedCountries = (country) => {
    console.log('Hello world', country)
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  
  return (
    <div>
      <p className="country-count">Countries: {countries.length}</p>
      <p className="country-count-visited">Total Visited Countries: {visitedCountries.length}</p>

      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} handleVisitedCountries = {handleVisitedCountries} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
