import React, { Component } from 'react';
import Image from 'next/image';
import logo from '../../images/logo.svg';
import smoothScroll from '../../scripts/smoothScroll';
import styles from '../../styles/Home.module.scss'
const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let target = `.${e.currentTarget.classList[1].slice(
      14,
      e.currentTarget.className.length
    )}`;
    smoothScroll(target, 1200);
  };
  return (
    <div>
      <div className={styles.navbar}>
        <header className={styles.navbar__header}>
          <a href='./'>
            <Image src={logo} alt='' className={styles.navbar__logo} />
          </a>
        </header>
        <label htmlFor='navbar__checkbox' className={styles.navbar__label}>
          <i className='fas fa-bars' />
        </label>
        <input
          type='checkbox'
          name='navbar__checkbox'
          id='navbar__checkbox'
          className={styles.navbar__checkbox}
        />
        <nav className={styles["navbar__links-container"]}>
          <a href='./' className={styles.navbar__link}>
            HOME
          </a>
          <a href='https://docs.google.com/document/d/1OOHycUcBDg2OrI9cFXekymovHYsKSR6PtFPt2sGXX9Q/edit?usp=sharing' target="blank"
            className={styles.navbar__link}>
            RESUME
          </a>
          <a
            className={styles.navbar__link}
            // styles["navbar__link--portfolio"]
            onClick={handleScroll}>
            PORTFOLIO
          </a>
          <a
            className={styles.navbar__link}
            onClick={handleScroll}>
            ABOUT
          </a>
          <a
            className={styles.navbar__link}
            onClick={handleScroll}>
            CONTACT
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
