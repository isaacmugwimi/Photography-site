import React, { useEffect, useState } from "react";
// import "./Services.css";
import axios from "axios";
import ServiceCard from "../SiteServices/ServiceCard/ServiceCard";
import servicesData from "../SiteServices/ServiceCard/servicesData.json";
const Services = () => {
  const [servicesData, setServicesData] = useState([]);

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

  const handleLoadMore = () => {
    console.log("first");
  };

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
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            iconName={service.icon_name}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="load-more-container">
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More Services
        </button>
      </div>
    </section>
  );
};

export default Services;
