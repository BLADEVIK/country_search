import { useState } from "react";

import "./countryItem.css";
import GetCountry from "../api/getCountry";

export default function CountryItem() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [inputError, setInputError] = useState(false);
  const handleSearshInput = (event) => {
    setSearch(event.target.value);
  };
  function handleBtn() {
    if (!search) {
      return;
    }

    GetCountry({ country: search }).then((res) => {
      setData(res);
      setInputError(!res);
      console.log(res);
    });
  }
    
  return (
    <>
      <h1 className="weather__city_title">Поиск стран</h1>
      {inputError ? <div>нет такого города</div> : ""}
      <input
        className="weather__city_input"
        onChange={handleSearshInput}
        placeholder="Введите страну"
        type="text"
      />

      <button onClick={handleBtn} type="submit" className="weather__btn">
        Поиск
      </button>
      {data ? (
        <ul></ul>
      ) : null}
    </>
  );
}

{/* <div className="weather">
          <h1>Регион: {data.location.region}</h1>
          <h1 className="weather__city">Город: {data.location.name}</h1>
          {data.forecast.forecastday.map((el) => (
            <div className="weather__card" key={el.date_epoch}>
              <img src={el.day.condition.icon} />
              <h3>Погода: {el.day.condition.text}</h3>
              <h2>Температура: {el.day.avgtemp_c} ° </h2>
              <p>Скорость ветра: {el.day.maxwind_kph} kph</p>
              <p>Влажность: {el.day.avghumidity} %</p>
              <p>Дата: {el.date}</p>
            </div>
          ))}
        </div> */}