// src/components/ServiceCard.jsx
import React from 'react';
import { Layout, Server, Sparkles, Check } from 'lucide-react';

const iconMap = {
  Layout,
  Server,
  Sparkles
};

export const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Layout;

  return (
    <div className="glass-card service-card">
      <div>
        <div className="service-icon-box">
          <IconComponent size={28} />
        </div>
        
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
      </div>

      <ul className="service-features-list">
        {service.features.map((feature, idx) => (
          <li key={idx} className="service-feature-item">
            <Check size={16} className="feature-check-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
