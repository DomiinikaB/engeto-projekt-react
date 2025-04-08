import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay muted loop>
        <source
          src="https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-content">
        <h1 className="hero-title">Wanderlust Travels</h1>
        <h2 className="hero-subtitle">
          The world is wide. Make some memories...
        </h2>
        <button className="hero-button">
          <Link to="/contact">Get in touch!</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
