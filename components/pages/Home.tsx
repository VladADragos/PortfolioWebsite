import React, { Component } from 'react';
import Main from './main';
import About from './about';
import PortfolioHeader from '../portfolioHeader';
import Footer from '../layout/footer';
import Portfolio from '../Portfolio';
import styles from '../../styles/Home.module.scss'
// import styles from '../../styles/sass/_landing.scss';
export default function Home() {
  return (
    <div className={styles.App}>
      <Main />
      <div className={styles.ocean}>
        <About />
        <PortfolioHeader />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}



