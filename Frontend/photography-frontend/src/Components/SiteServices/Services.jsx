import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Services.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import servicesData from "./ServiceCard/servicesData.json";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>
          Professional Photography, Videography & Creative Design Services
        </title>

        <meta
          name="description"
          content="Explore our professional photography, videography, graphic design, branding and content creation services for businesses, events, and personal brands."
        />

        <meta
          name="keywords"
          content="photography services, videography services, graphic design services, event photography, product photography, branding services, creative studio"
        />

        <meta name="author" content="Creative Studio" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Professional Creative Services" />
        <meta
          property="og:description"
          content="High-quality photography, videography, and creative design services for brands, businesses, and events."
        />
      </Helmet>

      <section className="services">
        <div className="section-header">
          <p className="section-label">Creative Services</p>

          <h2 className="section-title">
            Professional Photography, Videography & Creative Design
          </h2>

          <p className="section-subtitle">
            We provide high-quality photography, videography, graphic design,
            branding, and content creation services for businesses, events,
            personal brands, and commercial projects. Our mission is to create
            powerful visuals that help brands tell their story and connect with
            their audience.
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

        <div className="view-all-container">
          <Link to="/services" className="view-services-btn">
            <span className="btn-text">Explore All Services</span>
            <ArrowRight className="btn-icon" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
