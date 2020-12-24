import React, { useEffect, useState } from "react";
import axios from "axios";

import Countries from "./components/Countries";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
      <br />
      <Countries countries={countries} searchName={searchName} />
    </div>
  );
};

export default App;
