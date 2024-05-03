import React, { useState } from "react";
import "../App.css";

export default function Select() {
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState({
    Country: "Nepal",
    city: ["Pokhara", "Mustang", "Baglung"],
  });
  const [another, setAnother] = useState({
    Country: "India",
    city: ["Delhi", "Mumbai", "Kolkatta", "Banglore"],
  });

  const [other, setOther] = useState({
    Country: "America",
    city: ["Los Angeles", "Miami", "New York"],
  });

  const changeData = (event) => {
    const optionTable = document.getElementById("autoGenerate");
    const newData = event.target.value;
    let cityArray = [];

    if (newData === "Nepal") {
      const dataArray = value.city;
      dataArray.forEach(function (item) {
        cityArray.push(item);
      });

    } else if (newData === "India") {

      const dataArray = another.city;
      dataArray.forEach(function (item) {
        cityArray.push(item);

      });
    } else {
      const dataArray = other.city;

      dataArray.forEach(function (item) {
        cityArray.push(item);

      });
    }
    setSelected(cityArray);


};

const latestData = selected;

  return (
    <>
      <div className="enclosing">
        <div className="container">
          <select onChange={changeData} id="mySelect">
            <option value="">Select an option</option>
            <option value={value.Country}>{value.Country}</option>
            <option value={another.Country}>{another.Country}</option>
            <option value={other.Country}>{other.Country}</option>
          </select>
        </div>
        <div className="autoCity">
          <select id="autoGenerate">
            <option value="">Select an option</option>
            {latestData.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
              
            })}
          </select>
        </div>
      </div>
    </>
  );
}
