import React, { useEffect, useState } from "react";
import "./Services.css";
import axios from "axios";
import ServiceCard from "./ServiceCard/ServiceCard";
import servicesData from "./ServiceCard/servicesData.json";
const Services = () => {
  // const [servicesData, setServicesData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from your Express/Node.js server
  //   const fetchServices = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/services");
  //       setServicesData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching services:", error);
  //     }
  //   };
  //   fetchServices();
  // }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? servicesData
      : servicesData.filter((service) => service.category == activeFilter);
  const categories = ["All", "Photo", "Video", "Design"];

  return (
    <section className="services">
      <div className="section-header">
        <p className="section-label">Our Expertise</p>
        <h2 className="section-title">Professional Creative Services</h2>

        <p className="section-subtitle">
          We provide professional photography, videography, graphic design, and
          content creation services for brands, businesses, events, and personal
          projects.
        </p>

        {/* Filter Buttons */}
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="services-grid">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            iconName={service.icon_name}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
