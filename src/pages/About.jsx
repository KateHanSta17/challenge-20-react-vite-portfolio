// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <main className="container">
      <section id="about" className="my-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="about-title">About Kate</h2>
            <p className="lead">
              An E-commerce and digital marketing expert with a fervent dedication to driving profitable growth and delivering exceptional business outcomes.
            </p>
            {/* Additional content */}
          </div>
          <div className="col-lg-6 text-center">
            <div className="row gallery-container justify-content-center">
              <div className="col-6 mb-3">
                <img src="src/assets/Untitled design.jpg" alt="Kate Hannah" className="img-fluid rounded gallery-image" />
              </div>
              {/* Additional images */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
