import React from 'react';

import './education.css';

const Education = () => {
  const soloProjects = [
    {
      id: 1,
      title: '10TH STANDARD',
      description:
        ' Ravindra Bharathi Public School',
      CTC: '9.2',
    },
    {
      id: 1,
      title: 'Intermediate',
      description:
        ' Sri Chaithanya Jr. College',
      CTC: '9.017',
    },
    {
      id: 1,
      title: 'Bachelor\'s of Technology (Computer Science and Engineering) ',
      description:
        ' Vikas College of Enginnering and Technology',
      CTC: '6.77',
    }
  ];

  return (
    <section id="portfolio">
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
