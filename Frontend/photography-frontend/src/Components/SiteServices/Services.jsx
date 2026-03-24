import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./Services.css";
import axios from "axios";
import ServiceCard from "./ServiceCard/ServiceCard";
import servicesData from "./ServiceCard/servicesData.json";
import { ArrowRight } from "lucide-react";
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
  const categories = ["All", "Photo", "Video", "Design"];

  const handleLoadMore = () => {
    
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
        {displayedServices.map((service) => (
          <ServiceCard
            key={service.id}
            iconName={service.icon_name}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
   
        <div className="view-all-container">
          <Link to="/services" className="view-services-btn" >
          <span className="btn-text">View All Services</span>
          <ArrowRight className="btn-icon" size={18} />
          </Link>
        </div>
      
    </section>
  );
};

export default Services;
