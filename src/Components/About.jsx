import React from 'react';
import './About.css';
import std from '../assets/edu1.avif';

const timeline = [
  {
    year: 1983,
    title: 'Mahatmites – First Batch',
    desc:
      'Mahatma took shape in 1983, pioneering a student‑centred approach that humanises education and empowers learners.'
  },
  {
    year: 1989,
    title: 'Own facility at K.K. Nagar',
    desc:
      'The school moved into its own facility at Gopalakrishnan Grounds, K.K. Nagar, strengthening its infrastructure.'
  },
  {
    year: 1992,
    title: 'Mahatma Residential School',
    desc:
      'In response to growing demand for quality residential education, a new campus was established near Alagarkovil, ~20 km from Madurai.'
  }
];

const About = () => {
  return (
    <div className="about-page">
      
      <div
        className="img-about"
        role="img"
        aria-label="Mahatma Schools timeline hero"
        style={{ backgroundImage: `url(${std})` }}
      >
        
      </div>

      {/* Intro paragraph */}
      <div className="para-contain">
        <p className="para-about">
          <h1>About Mahatma School</h1>
          Mahatma, as an idea that took shape in 1983, has been a pioneer in humanising education, where our learners
          own the knowledge and skills acquired, and call it to use. Our student‑centred approach recognises each
          learner as a unique individual with unique qualities and needs. Hence, we firmly believe in consistently
          identifying and processing the requirements while creating accomplished individuals.
        </p>
      </div>

      {/* Timeline section */}
      <section className="timeline-section">
        <h2 className="timeline-heading">Milestones</h2>

        <div className="timeline">
          {/* Central vertical line */}
          <span className="timeline-line" aria-hidden="true"></span>

          {timeline.map((item, idx) => (
            <div
              key={item.year}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-marker">
                <span className="timeline-year">{item.year}</span>
              </div>

              <div className="timeline-card">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
