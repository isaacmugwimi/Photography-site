import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section className="services">
      <div className="section-header">
        <p className="section-label">Professional Creative Services</p>

        <h2 className="section-title">
          Photography, Videography & Creative Design Services
        </h2>

        <p className="section-subtitle">
          We provide professional photography, videography, graphic design, and
          content creation services for brands, businesses, events, and personal
          projects.
        </p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
              <circle cx="12" cy="13" r="3"></circle>
            </svg>
          </div>
          <h3 className="service-title">Photography</h3>
          <p className="service-description">
            Professional photography for portraits, products, events, and
            commercial projects. High-quality images that tell your story.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
              <circle cx="12" cy="13" r="3"></circle>
            </svg>
          </div>
          <h3 className="service-title">Photography</h3>
          <p className="service-description">
            Professional photography for portraits, products, events, and
            commercial projects. High-quality images that tell your story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
