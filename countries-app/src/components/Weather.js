import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    let isMounted = true;
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((response) => {
        isMounted && setWeather(response.data);
      });
    return () => {
      isMounted = false;
    };
  }, [capital]);

  if (!weather) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h4>Weather in {capital}:</h4>
      <p>Temperature: {weather.current.temperature} Celcius</p>
      <img src={weather.current.weather_icons[0]} alt="weather-icon" />
      <p>
        Wind: {weather.current.wind_speed} mph, direction:{" "}
        {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
