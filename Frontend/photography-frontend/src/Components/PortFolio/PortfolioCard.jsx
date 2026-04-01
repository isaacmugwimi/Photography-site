import React from "react";

const PortfolioCard = ({
  imageUrl,
  title,
  description,
  category,
}) => {
  return <div className="service-card">
    
    <img 
        src={imageUrl} 
        alt={title} 
        className="portfolio-image" 
        loading="lazy" 
      />
  </div>;
};

export default PortfolioCard;
