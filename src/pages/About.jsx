// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <main className="container my-5">
      <section id="about">
        <div className="row">
          {/* Text Section */}
          <div className="col-lg-6">
            <h2 className="about-title">About Kate</h2>
            <p className="lead">
              An E-commerce and digital marketing expert with a fervent dedication to driving profitable growth and delivering exceptional business outcomes.
            </p>
            <p>
              With a strong background in managing diverse portfolios, spearheading onboarding initiatives, and leading digital projects, I'm passionate about leveraging real-time data insights and fostering team excellence.
            </p>
            <p>
              My expertise in CRM systems, project management tools, and e-commerce platforms has been honed through years of experience in customer success and strategic account management. My journey is marked by a Master's in Media Arts & Production and a relentless commitment to achieving success for both clients and my team.
            </p>
            <p>
              In early 2024, I joined the University of Sydney x EdX Coding Bootcamp to begin learning Coding including, but not limited to: Foundations of Command-Line Fundamentals, HTML & CSS, Git & GitHub, JavaScript, Third-Party APIs (such as jQuery & Bootstrap), and Server-side APIs, AJAX, and JSON.
            </p>
            <p>
              In the technical phase, the Bootcamp focused on: Node.js, Object-oriented programming (OOP), Express.js, Relational databases, such as MySQL. Object-relational mapping (ORM) using Sequelize, Model-View-Controller (MVC) framework, Handlebars.js, Unit testing, Agile software development methodology, and Heroku.
            </p>
            <p>
              In the final phase I was educated on Performance, covering: Computer Science Fundamentals, NoSQL databases such as MongoDB, Progressive Web Apps (PWAs), React, and MERN Stack (MongoDB, Express.js, React, Node.js).
            </p>

            {/* Buttons */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="/portfolio" className="btn btn-primary btn-lg px-4 me-md-2 btn-github">
                View My Portfolio
              </a>
              <a href="/contact" className="btn btn-secondary btn-lg px-4 btn-live">
                Contact Kate
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center">
            <div className="row gallery-container justify-content-center">
              <div className="col-6 mb-3">
                <img src="src/assets/Untitled design.jpg" alt="Kate Hannah" className="img-fluid rounded gallery-image" />
              </div>
              <div className="col-6 mb-3">
                <img src="src/assets/Untitled design (2).jpg" alt="Kate Hannah 1" className="img-fluid rounded gallery-image" />
              </div>
              <div className="col-6 mb-3">
                <img src="src/assets/Untitled design (3).jpg" alt="Kate Hannah 2" className="img-fluid rounded gallery-image" />
              </div>
              <div className="col-6 mb-3">
                <img src="src/assets/Untitled design (1).jpg" alt="Kate Hannah 3" className="img-fluid rounded gallery-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

