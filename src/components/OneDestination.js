import React from "react";
import "../styles/oneDestination.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTemperatureHigh } from "react-icons/fa";

const OneDestination = (props) => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const cityName = `${props.city}, ${props.countryCode}`;

    const fetchTemperature = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        setTemperature(data?.main?.temp ? Math.round(data.main.temp) : "N/A");
      } catch (error) {
        console.error("Chyba při načítání", error);
        setTemperature("N/A");
      }
    };

    fetchTemperature();
  }, [props.city, props.countryCode]);

  return (
    <div className="destination-box">
      <img src={props.image} alt={props.city} />
      <div className="box-row">
        <p className="city-title">{props.city}</p>
        <p className="temperature">
          <FaTemperatureHigh />
          {temperature !== null ? `${temperature}°C` : "Loading..."}
        </p>
      </div>
      <p className="description">{props.description}</p>
      <div className="booking-row">
        <p className="price">{props.price}</p>
        <button className="booking-button">
          <Link to="/contact">Book</Link>
        </button>
      </div>
    </div>
  );
};

export default OneDestination;
