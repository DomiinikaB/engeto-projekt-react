import React from "react";
import OneDestination from "./OneDestination";
import "./DestinationsList.css";
import destinations from "../assets/data";
import { Link } from "react-router-dom";

const categories = [
  { name: "Sightseeing Tours", ids: [1, 2, 3, 4] },
  { name: "Beach Holidays", ids: [5, 6, 7, 8] },
  { name: "Exotic Escape", ids: [9, 10, 11, 12] },
];

const DestinationsList = () => {
  return (
    <section className="destinations-list">
      <h1>All Destinations</h1>
      <p className="introduction-text">
        Explore the world with our carefully curated selection of destinations,
        each offering unique landscapes, rich cultures, and unforgettable
        adventures. Whether you're seeking relaxation on pristine beaches,
        discovering ancient wonders, or diving into vibrant city life, our
        travel guide is here to help you find your perfect getaway. Let us
        inspire your next journey and turn your dream vacation into reality!
      </p>
      {categories.map(({ name, ids }) => {
        const filteredDestinations = destinations.filter((dest) =>
          ids.includes(dest.id)
        );

        return (
          <div key={name} className="destinations-container">
            <h2 className="destinations-subtitle">{name}</h2>
            <div className="one-row">
              {filteredDestinations.map((dest) => (
                <OneDestination
                  key={dest.id}
                  image={dest.image}
                  city={dest.city}
                  countryCode={dest.countryCode}
                  description={dest.description}
                  price={dest.price}
                />
              ))}
            </div>
          </div>
        );
      })}
      <button className="dark-button">
        <Link to="/">Go back home</Link>
      </button>
    </section>
  );
};

export default DestinationsList;
