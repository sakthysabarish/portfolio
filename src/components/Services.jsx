// src/components/Services.jsx
import React from 'react';
import { SERVICES_DATA } from '../utils/constants';
import ServiceCard from './ServiceCard';

export const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">Specialized Services</h2>
          <p className="section-description">
            High-quality development services tailored to deliver performance, aesthetics, and clean architecture.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
