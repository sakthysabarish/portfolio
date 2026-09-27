// src/components/Projects.jsx
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../utils/constants';
import { ExternalLink, Sparkles, X, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(proj => proj.category === activeCategory);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Learning Journey & Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore my latest web applications, code repositories, and hands-on developer projects.
          </p>
        </div>

        <div className="projects-filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div>
                <div className="project-header">
                  <span className="project-category-badge">{project.category}</span>
                  {project.featured && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: '#EC4899', fontWeight: 700 }}>
                      <Sparkles size={14} /> Featured
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                >
                  Live Demo <ExternalLink size={14} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  <GithubIcon size={18} /> Code
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="project-btn"
                  style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--primary-purple)' }}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <X size={22} />
              </button>

              <span className="project-category-badge">{selectedProject.category}</span>
              <h3 className="section-title" style={{ fontSize: '1.75rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                {selectedProject.title}
              </h3>

              <p className="project-description" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Key Highlights:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {selectedProject.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={16} color="#10B981" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Visit Live App <ExternalLink size={16} />
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={18} /> View GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
