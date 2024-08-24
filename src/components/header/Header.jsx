import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Navyasri Buchepalli</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;