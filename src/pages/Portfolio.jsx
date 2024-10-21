// src/pages/Portfolio.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Ensure this component exists

const projects = [
  {
    title: 'Pick my Flick',
    description: 'Practicing Pair-Programming, this app is a movie picker device, designed using 3rd Party API\'s.',
    imgSrc: 'assets/Project1screenshot.jpg',
    repoLink: 'https://github.com/KateHanSta17/bootcamp-project1-group-2',
    liveLink: 'https://katehansta17.github.io/bootcamp-project1-group-2/',
  },
  {
    title: 'CineJournal',
    description: 'A digital diary to track, rate, and remember every movie and show you’ve watched & loved (or hated)!',
    imgSrc: 'assets/CineJournal.jpg',
    repoLink: 'https://github.com/kevinvongmany/cinejournal-webapp',
    liveLink: 'https://cinejournal-webapp.onrender.com/',
  },
  {
    title: 'PROJECT 3',
    description: 'COMING SOON. To be completed and linked here by November 12, 2024',
    imgSrc: 'assets/comingsoon.jpg',
    repoLink: 'https://placeholder.url',
    liveLink: 'https://placeholder.url',
  },
  {
    title: 'Book Engine Search',
    description: 'Search engine built with a RESTful API, refactored to be a GraphQL API built with Apollo Server.',
    imgSrc: 'assets/comingsoon.jpg',
    repoLink: 'https://github.com/KateHanSta17/book-engine-search-challenge-21',
    liveLink: 'TBA',
  },
  {
    title: 'React Portfolio',
    description: 'A portfolio website built using React and Vite. It showcases a collection of my work as a web developer.',
    imgSrc: 'assets/Challenge20.jpg',
    repoLink: 'https://github.com/KateHanSta17/react-portfolio-challenge-20/tree/main/kate-react-portfolio',
    liveLink: 'TBA',
  },
  {
    title: 'PWA Text Editor',
    description: 'Allows users to create and save text files both online and offline, built with modern web technologies.',
    imgSrc: 'assets/Challenge19.jpg',
    repoLink: 'https://github.com/KateHanSta17/pwa-text-editor-challenge-19',
    liveLink: 'https://pwa-text-editor-challenge-19-whh1.onrender.com/',
  },
  {
    title: 'Social Network API',
    description: 'This API is to handle unstructured data efficiently, where users generate dynamic content such as posts and comments.',
    imgSrc: 'assets/Challenge18.jpg',
    repoLink: 'https://github.com/KateHanSta17/social-network-api-challenge-18',
    liveLink: 'https://drive.google.com/file/d/1zRv8roTpRDddJ8T1oEFxEIcg-a8e1Dl8/view',
  },
  {
    title: 'Regex Tutorial',
    description: 'Hexadecimal Colour Code Regex Tutorial deployed to GitHub Gist.',
    imgSrc: 'assets/Challenge17.jpg',
    repoLink: 'https://github.com/KateHanSta17/regex-tutorial-challenge-17',
    liveLink: 'https://gist.github.com/KateHanSta17/e1c17bc1b8430f41ffe3bf513e6ada22',
  },
  {
    title: 'SVG Logo Creator',
    description: 'Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.',
    imgSrc: 'assets/Challenge10.jpg',
    repoLink: 'https://github.com/KateHanSta17/challenge-10-SVG-logo-maker',
    liveLink: 'https://drive.google.com/file/d/1tK8dBaZ6pyqSaFnHGSz_-LgbJTJB4wL4/view',
  },
  {
    title: 'README Generator',
    description: 'Command-line app that generates a professional README.md file from a user\'s input using the Inquirer package.',
    imgSrc: 'assets/Challenge9.jpg',
    repoLink: 'https://github.com/KateHanSta17/challenge-9-bootcamp',
    liveLink: 'https://drive.google.com/file/d/15o40B3J88RiEJgjdJJkiCx06nVboSr1Q/view',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard project that allows users to search for weather information by city.',
    imgSrc: 'assets/Challenge6.jpg',
    repoLink: 'https://github.com/KateHanSta17/challenge-6-bootcamp',
    liveLink: 'https://katehansta17.github.io/challenge-6-bootcamp/',
  },
  {
    title: 'Task Board',
    description: 'A simple Kanban taskboard. This app will run in the browser.',
    imgSrc: 'assets/Challenge4.jpg',
    repoLink: 'https://github.com/KateHanSta17/challenge-5-bootcamp',
    liveLink: 'https://katehansta17.github.io/challenge-5-bootcamp/',
  },
  {
    title: 'Personal Blog',
    description: 'Users input / view blogs with dynamically updated HTML and CSS powered by jQuery.',
    imgSrc: 'assets/Challenge5.jpg',
    repoLink: 'https://github.com/KateHanSta17/challenge-four-bootcamp',
    liveLink: 'https://katehansta17.github.io/challenge-four-bootcamp/',
  },
  {
    title: 'Payroll Tracker',
    description: 'Features dynamically updated HTML and CSS powered by JavaScript code.',
    imgSrc: 'assets/Challenge3.jpg',
    repoLink: 'https://github.com/KateHanSta17/challenge-three-bootcamp',
    liveLink: 'https://katehansta17.github.io/challenge-three-bootcamp/',
  },
  {
    title: 'Portfolio Page',
    description: 'A 1-page portfolio site showcasing flexbox, media queries, and CSS variables.',
    imgSrc: 'assets/Challange2.jpg',
    repoLink: 'https://github.com/KateHanSta17/challenge-2-project',
    liveLink: 'https://katehansta17.github.io/challenge-2-project/',
  },
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

