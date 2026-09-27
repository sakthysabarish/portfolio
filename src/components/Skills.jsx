// src/components/Skills.jsx
import React, { useState } from 'react';
import { SKILLS_DATA } from '../utils/constants';
import SkillCard from './SkillCard';

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = activeFilter === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Proficiency</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Hands-on experience with modern frontend, backend, and development tools.
          </p>
        </div>

        <div className="skills-filter-container">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
