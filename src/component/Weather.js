import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "./weather.png";

export default function WeatherApi() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  let fetchedData = {};
  let apiVar = "114b889aa5e467b14b3233005c639a43";

  const handleValue = (event) => {
    const newData = event.target.value;
    setSearch(newData);
  };

  const handleSubmit = (event) => {
    fetchData();
  };

  function fetchData() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiVar}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);

        fetchedData = {
          temp: data.main.temp,
          weather: data.weather[0].main,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
        };
        setData([fetchedData]);
        console.log(data);
      });
  }

  return (
    <>
      <div className="templateContainer">
        <h1>Weather API</h1>
        <div className="search-container">
          <input
            type="text"
            id="searchbar"
            value={search}
            onChange={handleValue}
          />
          <button id="searchPlace" onClick={handleSubmit}>
            Search
          </button>
        </div>

        <div className="mainBody">
          <div className="imagePlacer">
            <img src={image} alt="None" />
          </div>

          {data.map((item, index) => {
            return (
              <div className="infoPlacer" key={index}>
                <span>Temperature : {item.temp}</span>
                <br />
                <span>Weather : {item.weather}</span>
                <br />
                <span>Humidity : {item.humidity}</span>
                <br />
                <span>Wind Speed : {item.windSpeed}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
