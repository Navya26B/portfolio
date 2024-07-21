import React, { useEffect, useRef } from 'react';
import './education.css';

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const refCopy = educationRef.current; // Copy the ref to a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (refCopy) {
      observer.observe(refCopy);
    }

    return () => {
      if (refCopy) {
        observer.unobserve(refCopy);
      }
    };
  }, []);

  const soloProjects = [
    {
      id: 1,
      title: '10TH STANDARD',
      description: 'Ravindra Bharathi Public School',
      CTC: '9.2',
    },
    {
      id: 2,
      title: 'Intermediate',
      description: 'Sri Chaithanya Jr. College',
      CTC: '9.017',
    },
    {
      id: 3,
      title: 'Bachelor\'s of Technology (Computer Science and Engineering)',
      description: 'Vikas College of Engineering and Technology',
      CTC: '6.77',
    },
  ];

  return (
    <section id="education" ref={educationRef} className="hidden">
      <h2>My Education</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.CTC}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
