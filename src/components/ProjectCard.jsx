// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, imgSrc, repoLink, liveLink }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={imgSrc} alt={title} className="bd-placeholder-img card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">GitHub</a>
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
