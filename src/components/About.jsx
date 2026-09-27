// src/components/About.jsx
import React from 'react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../utils/constants';
import { GraduationCap, Award, CheckCircle2, User, MapPin, Mail } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Background & Experience</h2>
          <p className="section-description">
            Dedicated software developer focused on building intuitive web applications and crafting optimized user experiences.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
              Crafting Digital Solutions
            </h3>
            
            <p className="about-bio">
              {PERSONAL_INFO.bio}
            </p>

            <div className="about-stats-grid">
              <div className="glass-card stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Core Languages</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Problem Solver</div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">{PERSONAL_INFO.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">{PERSONAL_INFO.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">{PERSONAL_INFO.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value" style={{ color: '#10B981' }}>Available for Work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap className="gradient-text" size={28} /> Education & Credentials
            </h3>

            <div className="education-timeline">
              {EDUCATION_DATA.map((item) => (
                <div key={item.id} className="glass-card timeline-card">
                  <span className="timeline-period">{item.period}</span>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <div className="timeline-institution">{item.institution}</div>
                  <p className="timeline-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
