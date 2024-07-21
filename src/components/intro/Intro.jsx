import React, { useEffect, useRef } from "react";
import { FaAward } from "react-icons/fa";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const refCopy = Intro.current; 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          } else {
            entry.target.classList.remove("slide-in");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
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

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
          </div>
          <p ref={paragraphRef}>
            I have experience at Cisco as a Consultant Engineer, where I gained
            hands-on experience in front-end development. During this time, I
            worked extensively with HTML, CSS, JavaScript, and React.js to build
            user interfaces and web applications. My responsibilities included
            designing and implementing responsive web pages, ensuring
            cross-browser compatibility, and collaborating with back-end
            developers to create seamless user experiences. I built a strong
            foundation in front-end technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
