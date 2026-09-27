// src/components/SkillCard.jsx
import React from 'react';
import { 
  FileCode, 
  Palette, 
  Code2, 
  Atom, 
  Coffee, 
  Terminal, 
  Server, 
  GitBranch, 
  Database,
  Cpu
} from 'lucide-react';

const iconMap = {
  FileCode,
  Palette,
  Code2,
  Atom,
  Coffee,
  Terminal,
  Server,
  GitBranch,
  Database
};

export const SkillCard = ({ skill }) => {
  const IconComponent = iconMap[skill.icon] || Cpu;

  return (
    <div className="glass-card skill-card">
      <div className="skill-header">
        <div className="skill-icon-wrapper">
          <IconComponent size={24} />
        </div>
        <div className="skill-title-area">
          <h3 className="skill-name">{skill.name}</h3>
          <span className="skill-category">{skill.category}</span>
        </div>
        <span className="skill-level-badge">{skill.level}%</span>
      </div>

      <p className="skill-description">{skill.description}</p>

      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
