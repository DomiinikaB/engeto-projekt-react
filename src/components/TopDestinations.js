import React from "react";
import "./TopDestinations.css";
import OneDestination from "./OneDestination";
import { Link } from "react-router-dom";
import destinations from "../assets/data";

const TopDestinations = () => {
  const selectedDestinations = destinations.filter((dest) =>
    [1, 3, 8].includes(dest.id)
  );

  return (
    <section className="destinations-section">
      <h1>Our Top Destinations</h1>
      <div className="all-destinations">
        {selectedDestinations.map((dest) => (
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
      <button className="dark-button">
        <Link to="/destinations">See more</Link>
      </button>
    </section>
  );
};

export default TopDestinations;
