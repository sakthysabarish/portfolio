// src/components/Hero.jsx
import React from 'react';
import { PERSONAL_INFO } from '../utils/constants';
import { scrollToSection } from '../utils/helpers';
import { Mail, Download, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import profilePic from '../assets/images/profile-pic.jpg';

export const Hero = () => {
  const handleDownloadResume = () => {
    // Triggers download or preview of resume
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>Available for New Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            <br />
            Full Stack Developer
          </h1>

          <p className="hero-subtitle">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="btn btn-primary"
            >
              Explore Projects <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="btn btn-secondary"
            >
              Contact Me
            </a>

            <button
              onClick={handleDownloadResume}
              className="btn btn-outline"
            >
              <Download size={18} /> Resume CV
            </button>
          </div>

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
            <a href={`mailto:${PERSONAL_INFO.email}`} className="social-icon-btn" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-frame">
            <img
              src={profilePic}
              alt={PERSONAL_INFO.name}
              className="profile-img"
            />
          </div>

          <div className="floating-badge badge-top-right">
            <Sparkles size={16} color="#A78BFA" />
            <span>React & Node.js</span>
          </div>

          <div className="floating-badge badge-bottom-left">
            <Terminal size={16} color="#38BDF8" />
            <span>Clean Code & Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
