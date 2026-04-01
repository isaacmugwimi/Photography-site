import React from "react";

const PortfolioCard = ({
  imageUrl,
  title,
  description,
  category,
}) => {
  return <div className="portfolio-card">
    
    <img 
        src={imageUrl} 
        alt={title} 
        className="portfolio-image" 
        loading="lazy" 
      />
      <div class="portfolio-overlay">
            <h3 class="portfolio-title">{title}</h3>
            <p class="portfolio-description">{description}</p>
          </div>
  </div>;
};

export default PortfolioCard;
