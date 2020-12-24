import React from "react";

const CountryInfo = ({ name, capital, population, languages, flag }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h4>Spoken languages:</h4>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt="flag" style={{ width: 200 }} />
    </div>
  );
};

export default CountryInfo;
