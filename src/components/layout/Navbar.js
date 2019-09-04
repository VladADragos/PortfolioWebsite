import React, { Component } from 'react';

import logo from '../../images/logo.svg';
import smoothScroll from '../../scripts/smoothScroll';

const Navbar = () => {
  const handleScroll = e => {
    e.preventDefault();
    let target = `.${e.currentTarget.classList[1].slice(
      14,
      e.currentTarget.className.length
    )}`;
    smoothScroll(target, 1200);
  };
  return (
    <div>
      <div className='navbar'>
        <header className='navbar__header'>
          <a href='./'>
            <img src={logo} alt='' className='navbar__logo' />
          </a>
        </header>
        <label htmlFor='navbar__checkbox' className='navbar__label'>
          <i className='fas fa-bars' />
        </label>
        <input
          type='checkbox'
          name='navbar__checkbox'
          id='navbar__checkbox'
          className='navbar__checkbox'
        />
        <nav className='navbar__links-container'>
          <a href='./' className='navbar__link'>
            HOME
          </a>
          <a
            className='navbar__link navbar__link--portfolio'
            onClick={handleScroll}>
            PORTFOLIO
          </a>
          <a
            className='navbar__link navbar__link--about'
            onClick={handleScroll}>
            ABOUT
          </a>
          <a
            className='navbar__link navbar__link--contact'
            onClick={handleScroll}>
            CONTACT
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
