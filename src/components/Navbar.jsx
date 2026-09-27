// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../utils/constants';
import { useScroll } from '../hooks/useScroll';
import ThemeToggle from './ThemeToggle';
import { Code, Menu, X, ArrowUpRight } from 'lucide-react';
import { scrollToSection as scrollHelper } from '../utils/helpers';

export const Navbar = () => {
  const { scrolled, activeSection } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollHelper(href);
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="navbar-logo">
          <Code className="logo-accent" size={24} />
          <span>Sakthi<span className="gradient-text">.dev</span></span>
        </a>

        <ul className={`navbar-menu ${mobileOpen ? 'mobile-open' : ''}`}>
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.875rem' }}
          >
            Hire Me <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
