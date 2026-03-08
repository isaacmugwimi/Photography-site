import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-dot"></span>
          <span>premium photography and videography services</span>
        </div>
        <h1>
          Capture Your <br /> <span>Moments</span>
        </h1>
        <p class="hero-description">
          Professional photography, videography, and creative services that
          bring your vision to life. From advertisements to events, we craft
          visual stories that resonate.
        </p>

        <div className="hero-btn-section">
          <button className="hero-btns">View Portfolio</button>
          <button className="hero-btns">Explore Courses</button>
        </div>

        <div class="hero-stats">
              <div class="hero-stat">
                <div class="hero-stat-value">500+</div>
                <div class="hero-stat-label">Projects Done</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-value">200+</div>
                <div class="hero-stat-label">Happy Clients</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-value">10+</div>
                <div class="hero-stat-label">Years Experience</div>
              </div>
            </div>
      </div>
      <div className="hero-content-left-image"></div>
    </section>
  );
};

export default Hero;
