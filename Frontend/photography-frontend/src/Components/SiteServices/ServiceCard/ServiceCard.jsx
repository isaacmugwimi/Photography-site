import React from "react";
import { iconMap } from "../../../Utils/icons";

const ServiceCard = ({ iconName, title, description }) => {
  const IconComponent = iconMap[iconName] || iconMap.camera;
  return (
    <div className="service-card">
      <div className="service-icon">
        <IconComponent size={28} strokeWidth={2} color="currentColor" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
