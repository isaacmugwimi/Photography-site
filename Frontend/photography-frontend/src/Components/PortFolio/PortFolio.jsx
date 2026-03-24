import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PortFolio.css";
import ServiceCard from "../SiteServices/ServiceCard/ServiceCard";
import servicesData from "../SiteServices/ServiceCard/servicesData.json";
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

  const [visibleCount, setVisibleCount] = useState(9);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(5);
      } else {
        setVisibleCount(9);
      }
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredServices =
    activeFilter === "All"
      ? servicesData
      : servicesData.filter((service) => service.category == activeFilter);

  const displayedServices = filteredServices.slice(0, visibleCount);
  const categories = [
    "All",
    "Photography",
    "Videography",
    "Design",
    "Events",
    "Commercial",
  ];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="services">
      <div className="section-header">
        <p className="section-label">Our Work</p>
        <h2 className="section-title">Featured Portfolio</h2>

        <p className="section-subtitle">
          A curated selection of our finest work across photography,
          videography, and creative projects.
        </p>

        {/* Filter Buttons */}
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => {
                setActiveFilter(cat);
                setVisibleCount(window.innerWidth <= 768 ? 5 : 9);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="services-grid">
        {displayedServices.map((service) => (
          <ServiceCard
            key={service.id}
            iconName={service.icon_name}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      {visibleCount < filteredServices.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More Services
          </button>
        </div>
      )}
    </section>
  );
};

export default Services;
