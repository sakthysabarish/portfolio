// src/components/Contact.jsx
import React from 'react';
import { PERSONAL_INFO } from '../utils/constants';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Have a question, project proposal, or opportunity? Feel free to send a message.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-cards">
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
              Let's Talk!
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              I am open to full-time engineering roles, freelance software projects, and technical collaborations. Reach out via email or filling out the contact form.
            </p>

            <div className="glass-card contact-info-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <div className="contact-info-title">Email Address</div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-info-value">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="glass-card contact-info-card">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-info-title">Phone Number</div>
                <div className="contact-info-value">{PERSONAL_INFO.phone}</div>
              </div>
            </div>

            <div className="glass-card contact-info-card">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-info-title">Location</div>
                <div className="contact-info-value">{PERSONAL_INFO.location}</div>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <div className="contact-info-title" style={{ marginBottom: '0.75rem' }}>Follow & Connect</div>
              <div className="hero-socials">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
                  <TwitterIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
