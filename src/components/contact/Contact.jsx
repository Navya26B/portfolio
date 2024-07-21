import React, { useEffect, useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const refCopy = contactRef.current; // Copy the ref to a local variable

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
      { threshold: 0.5}
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
    <section id="contact" ref={contactRef} className="hidden">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>navyasribuchepalli@gmail.com</h5>
            <a href="mailto:navyasribuchepalli@gmail.com">Send a message</a>
          </article>
        </div>
        <form>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
