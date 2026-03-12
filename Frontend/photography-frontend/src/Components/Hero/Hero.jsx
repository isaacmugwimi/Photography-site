import React from "react";
import heroImage from "../../assets/about-studio.jpg";
import "./Hero.css";
import CountUp from "react-countup";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  return (
    <>
    <Helmet>
        <title>Focus Pixel | Best Photography & Videography in Kenya</title>
        <meta name="description" content="Focus Pixel offers premium photography, videography, and creative courses. Based in Kenya, we capture your most precious moments with professional gear." />
        <meta property="og:title" content="Focus Pixel - Professional Media Services" />
        <meta property="og:description" content="Capture your creative moments with our expert team." />
      </Helmet>
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        {/* Keywords in the tagline help local SEO */}
        <div className="hero-tag">
          <span className="hero-dot"></span>
          <span>Professional Photography & Videography in Kenya</span>
        </div>

        {/* Use H1 for your main keyword. "Photography and Videography" is better for SEO than just "Moments" */}
        <h1>
          Expert <span className="photography">Photography</span> <br />{" "}
          <span className="and">&</span> <br /> Videography Services
        </h1>

        <p className="hero-description">
          <strong>Focus Pixel</strong> provides professional photography,
          videography, and creative media services designed to bring your vision
          to life. From commercial advertisements to private events, we craft
          visual stories that resonate with your audience.
        </p>

        <div className="hero-btn-section">
          <button
            className="hero-btns"
            aria-label="View our photography portfolio"
          >
            View Portfolio
          </button>
          <button
            className="hero-btns"
            aria-label="Explore our videography courses"
          >
            Explore Courses
          </button>
        </div>

        <div className="hero-stats" aria-live="polite">
          <article className="hero-stat">
            <div className="hero-stat-value">
              <CountUp start={100} end={500} duration={2.5} enableScrollSpy>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>{" "}
              +
            </div>
            <div className="hero-stat-label">Projects Completed</div>
          </article>

          <article className="hero-stat">
            <div className="hero-stat-value">
              <CountUp start={40} end={200} duration={2.5} enableScrollSpy>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>{" "}
              +
            </div>
            <div className="hero-stat-label">Satisfied Clients</div>
          </article>

          <article className="hero-stat">
            <div className="hero-stat-value">
              <CountUp start={0} end={10} duration={2.5} enableScrollSpy>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>{" "}
              +
            </div>
            <div className="hero-stat-label">Years of Expertise</div>
          </article>
        </div>
      </div>

      <div className="hero-content-left-image">
        <div className="blob1" aria-hidden="true"></div>
        <div className="blob2" aria-hidden="true"></div>
        <div className="hero-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroImage}
            title="Focus Pixel Showreel"
          >
            <source
              src="https://res.cloudinary.com/dlqe1j2tr/video/upload/f_auto,q_auto/hero-video"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
    
    </>
    
};

export default Hero;
