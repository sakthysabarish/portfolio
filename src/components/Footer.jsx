// src/components/Footer.jsx
import React from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../utils/constants';
import { scrollToSection } from '../utils/helpers';
import { Code, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleScrollTop(); }} className="footer-logo">
              <Code className="logo-accent" size={22} />
              <span>Sakthi<span className="gradient-text">.dev</span></span>
            </a>
            <p className="footer-tagline">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          <ul className="footer-links">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="footer-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hero-socials">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="social-icon-btn" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          
          <button
            onClick={handleScrollTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
