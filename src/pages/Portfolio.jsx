// src/pages/Portfolio.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Import the ProjectCard component

const projects = [
  {
    title: 'Pick my Flick',
    description: 'A movie picker app designed using 3rd Party APIs.',
    imgSrc: 'src/assets/Project 1 screenshot.jpg',
    repoLink: 'https://github.com/KateHanSta17/bootcamp-project1-group-2',
    liveLink: 'https://katehansta17.github.io/bootcamp-project1-group-2/',
  },
  // Add more projects here...
];

const Portfolio = () => {
  return (
    <main className="container">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                repoLink={project.repoLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
