import React from "react";

import CountryInfo from "./CountryInfo";
import Weather from "./Weather";

const SingleCountry = ({ country }) => {
  return (
    <div>
      <CountryInfo
        name={country.name}
        capital={country.capital}
        population={country.population}
        languages={country.languages}
        flag={country.flag}
      />
      <Weather capital={country.capital} />
    </div>
  );
};

export default SingleCountry;
