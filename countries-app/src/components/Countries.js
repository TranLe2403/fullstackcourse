import React, { useState } from "react";
import SingleCountry from "./SingleCountry";

const Countries = ({ countries, searchName }) => {
  const [countryIndex, setCountryIndex] = useState();
  const countriesFound = countries.filter((country) =>
    country.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleShowClick = (index) => {
    setCountryIndex(index);
  };

  if (countriesFound.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countriesFound.length === 0) {
    return <div>Country not found</div>;
  } else if (countriesFound.length === 1) {
    return <SingleCountry country={countriesFound[0]} />;
  }

  return (
    <div>
      {countriesFound.map((item, index) => (
        <div key={item.name}>
          {item.name}{" "}
          <button onClick={() => handleShowClick(index)}>Show</button>
        </div>
      ))}
      {countryIndex !== undefined && (
        <SingleCountry
          country={countriesFound[countryIndex]}
        />
      )}
    </div>
  );
};

export default Countries;
