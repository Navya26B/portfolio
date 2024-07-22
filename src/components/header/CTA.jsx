import React from 'react';
import CV from '../../assets/Navya_cv.pdf';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn">
        Let's talk
      </a>
      <a href="https://www.linkedin.com/in/navyasribuchepalli/" target="_blank" rel="noreferrer" ><BsLinkedin className='linkedin' style={{ fontSize: '2em', marginTop: '1rem'  }} /></a>
      <a 
        href="https://github.com/Navya26B"  // Replace with your GitHub profile URL
        target="_blank" 
        rel="noreferrer"
      >
        <FaGithub className='github' style={{ fontSize: '2em', marginTop: '1rem' }} /> {/* GitHub icon */}
      </a>
    </div>
  ); 
};

export default CTA;
