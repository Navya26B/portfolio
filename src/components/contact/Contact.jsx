import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const contactRef = useRef(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) {
      alert('Please fix the errors before submitting');
    } else {
      // Handle form submission
      alert('Form submitted successfully');
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <span className="error">{emailError}</span>}
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
