import React from "react";
import heroImage from "../../assets/about-studio.jpg";
import "./Hero.css";
// import NumberCounter from "number-counter";
import CountUp from "react-countup";
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
        <p className="hero-description">
          Professional photography, videography, and creative services that
          bring your vision to life. From advertisements to events, we craft
          visual stories that resonate.
        </p>

        <div className="hero-btn-section">
          <button className="hero-btns">View Portfolio</button>
          <button className="hero-btns">Explore Courses</button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">
              <CountUp start={100} end={500} duration={2.5} /> +
            </div>{" "}
            <div className="hero-stat-label">Projects Done</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">
              <CountUp start={40} end={200} duration={2.5} /> +
            </div>{" "}
            <div className="hero-stat-label">Happy Clients</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">
              <CountUp start={0} end={10} duration={2.5} /> +
            </div>{" "}
            <div className="hero-stat-label">Years Experience</div>
          </div>
        </div>
      </div>
      <div className="hero-content-left-image">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="hero-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroImage}
          >
            <source
              src="https://res.cloudinary.com/dlqe1j2tr/video/upload/f_auto,q_auto/hero-video"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
